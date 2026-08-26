/**
 * 대한민국 의사(양의사) 범죄·의료사고 뉴스 자동 수집기 (collector.js)
 * 
 * [동작 방식]
 * 1. 카테고리별 주요 의사 범죄 키워드로 뉴스 피드(Google News RSS / Daum 검색)를 탐색합니다.
 * 2. 수집된 모든 기사를 scripts/raw_news.json 에 1차 저장합니다.
 * 3. 1차 필터링 규칙 적용:
 *    - [한의사 / 치과의사 철저 배제] "한의사", "한의원", "한방", "치과의사", "치과" 포함 기사 삭제
 *    - [홍보/성명서/자정결의 노이즈 제거] "척결 선포", "자정 결의", "캠페인", "성명", "토론회" 등 단순 의견/홍보 기사 제외
 *    - [실제 사건/수사/판결 기사 선별] "구속", "징역", "실형", "선고", "기소", "송치", "적발", "입건", "체포", "유죄", "벌금", "수사" 포함 기사 추출
 * 4. 검토 대상 후보군을 scripts/filtered_candidates.json 에 저장합니다.
 */

const fs = require('fs');
const path = require('path');

// 검색할 키워드 및 카테고리 매핑
const SEARCH_QUERIES = [
  // 1. 성범죄 / 불법촬영
  { category: 'sex_crime', query: '의사 성추행 구속' },
  { category: 'sex_crime', query: '의사 불법촬영 징역' },
  { category: 'sex_crime', query: '의사 수면마취 성폭행' },
  { category: 'sex_crime', query: '의사 진료실 강제추행' },
  { category: 'sex_crime', query: '의대생 불법촬영 징역' },

  // 2. 마약류 / 프로포폴 / 향정
  { category: 'narcotics', query: '의사 프로포폴 불법투약 구속' },
  { category: 'narcotics', query: '의사 펜타닐 처방 징역' },
  { category: 'narcotics', query: '의사 에토미데이트 실형' },
  { category: 'narcotics', query: '의사 식욕억제제 나비약 적발' },
  { category: 'narcotics', query: '의사 마약류 불법유통 구속' },

  // 3. 대리수술 / 무면허 의료
  { category: 'proxy_surgery', query: '의사 대리수술 징역' },
  { category: 'proxy_surgery', query: '의사 영업사원 대리수술 적발' },
  { category: 'proxy_surgery', query: '의사 조무사 수술 실형' },
  { category: 'proxy_surgery', query: '의사 유령수술 기소' },

  // 4. 의료사고 / 도덕적 해이
  { category: 'malpractice_hazard', query: '의사 음주진료 적발' },
  { category: 'malpractice_hazard', query: '의사 음주수술 처분' },
  { category: 'malpractice_hazard', query: '의사 진료기록부 위조 징역' },
  { category: 'malpractice_hazard', query: '의사 차트 조작 구속' },
  { category: 'malpractice_hazard', query: '의사 의료사고 은폐 실형' },

  // 5. 사기 / 불법 리베이트
  { category: 'fraud_rebate', query: '의사 실손보험 사기 구속' },
  { category: 'fraud_rebate', query: '의사 백내장 사기 적발' },
  { category: 'fraud_rebate', query: '의사 제약사 리베이트 기소' },
  { category: 'fraud_rebate', query: '의사 허위진단서 발급 징역' },

  // 6. 기타 강력 / 형사범죄
  { category: 'other_crimes', query: '의사 음주운전 사망 뺑소니' },
  { category: 'other_crimes', query: '의사 환자 폭행 입건' },
  { category: 'other_crimes', query: '의사 특수폭행 징역' }
];

// 배제할 키워드 (한의사, 치과의사, 단순 홍보성 기사)
const EXCLUDE_KEYWORDS = [
  '한의사', '한의원', '한방병원', '한방',
  '치과의사', '치과병원', '치과의원', '치과',
  '척결 선포', '자정 결의', '캠페인', '성명서', '토론회', '세미나', '의협 회장', '의협,'
];

// 실제 사건을 나타내는 핵심 키워드
const INCIDENT_KEYWORDS = [
  '구속', '징역', '실형', '선고', '기소', '송치', '적발', '입건', '체포', '유죄', '벌금', '혐의', '수사', '압수수색', '사망', '은폐', '조작', '도주'
];

// HTML 엔티티 디코딩 및 태그 제거 함수
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&middot;/g, '·')
    .replace(/\s+/g, ' ')
    .trim();
}

// RSS XML에서 아이템 파싱
function parseRssXml(xml, category, query) {
  const items = [];
  const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g);
  if (!itemMatches) return items;

  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/);
    const sourceMatch = itemXml.match(/<source[^>]*>([\s\S]*?)<\/source>/);

    const title = titleMatch ? cleanText(titleMatch[1]) : '';
    const link = linkMatch ? cleanText(linkMatch[1]) : '';
    const pubDate = pubDateMatch ? cleanText(pubDateMatch[1]) : '';
    const desc = descMatch ? cleanText(descMatch[1]) : '';
    const media = sourceMatch ? cleanText(sourceMatch[1]) : '언론사';

    if (title && link) {
      items.push({
        title,
        link,
        pubDate,
        desc,
        media,
        category,
        query,
        collectedAt: new Date().toISOString()
      });
    }
  }
  return items;
}

// 메인 수집 함수
async function runCollector() {
  console.log('====================================================');
  console.log('🔍 대한민국 양의사 범죄·의료사고 뉴스 수집기 가동');
  console.log('====================================================\n');

  const rawResults = [];
  const seenUrls = new Set();
  const seenTitles = new Set();

  for (const item of SEARCH_QUERIES) {
    const encodedQuery = encodeURIComponent(item.query);
    const url = `https://news.google.com/rss/search?q=${encodedQuery}&hl=ko&gl=KR&ceid=KR:ko`;

    console.log(`📡 [${item.category}] 검색어: "${item.query}" 수집 중...`);

    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (!res.ok) {
        console.log(`  ⚠️ HTTP 에러: ${res.status}`);
        continue;
      }

      const xmlText = await res.text();
      const parsed = parseRssXml(xmlText, item.category, item.query);
      
      let added = 0;
      for (const p of parsed) {
        const titleKey = p.title.replace(/\s+/g, '').slice(0, 30);
        if (!seenUrls.has(p.link) && !seenTitles.has(titleKey)) {
          seenUrls.add(p.link);
          seenTitles.add(titleKey);
          rawResults.push(p);
          added++;
        }
      }
      console.log(`  ✅ 수집 완료: +${added}건 (누적: ${rawResults.length}건)`);
    } catch (err) {
      console.error(`  ❌ 수집 실패 (${item.query}):`, err.message);
    }

    // 짧은 대기 (Rate limit 방지)
    await new Promise(r => setTimeout(r, 400));
  }

  // 1. Raw 결과 저장
  const rawPath = path.join(__dirname, 'raw_news.json');
  fs.writeFileSync(rawPath, JSON.stringify(rawResults, null, 2), 'utf-8');
  console.log(`\n📁 [1단계] 1차 원본 뉴스 저장 완료: ${rawPath} (총 ${rawResults.length}건)`);

  // 2. 필터링 및 검증 (한의사/치과의사 배제 & 홍보글 배제 & 실제 사건 선별)
  console.log('\n🧹 [2단계] 필터링 규칙 적용 (한의사/치과의사 배제, 홍보/성명 배제, 실제 사건 선별)...');
  
  const filteredCandidates = [];
  const rejectedReasons = {
    orientalOrDental: 0,
    prOrOpinion: 0,
    noIncidentKeyword: 0
  };

  for (const news of rawResults) {
    const fullText = `${news.title} ${news.desc}`;

    // 규칙 1: 한의사/치과의사 포함 여부 검사
    const hasOrientalOrDental = EXCLUDE_KEYWORDS.slice(0, 8).some(kw => fullText.includes(kw));
    if (hasOrientalOrDental) {
      rejectedReasons.orientalOrDental++;
      continue;
    }

    // 규칙 2: 홍보성/성명서/자정결의 노이즈 검사
    const hasPROrOpinion = EXCLUDE_KEYWORDS.slice(8).some(kw => fullText.includes(kw));
    if (hasPROrOpinion) {
      rejectedReasons.prOrOpinion++;
      continue;
    }

    // 규칙 3: 실제 형사 사건/수사/판결 키워드 존재 여부
    const hasIncidentKw = INCIDENT_KEYWORDS.some(kw => fullText.includes(kw));
    if (!hasIncidentKw) {
      rejectedReasons.noIncidentKeyword++;
      continue;
    }

    filteredCandidates.push(news);
  }

  const filteredPath = path.join(__dirname, 'filtered_candidates.json');
  fs.writeFileSync(filteredPath, JSON.stringify(filteredCandidates, null, 2), 'utf-8');

  console.log(`\n====================================================`);
  console.log(`📊 수집 및 1차 정제 결과 보고`);
  console.log(`- 전체 수집된 원본 기사: ${rawResults.length}건`);
  console.log(`- 한의사/치과의사 배제 건수: ${rejectedReasons.orientalOrDental}건`);
  console.log(`- 단순 홍보/성명/노이즈 배제: ${rejectedReasons.prOrOpinion}건`);
  console.log(`- 비사건성 기사 제외: ${rejectedReasons.noIncidentKeyword}건`);
  console.log(`✨ 최종 선별된 양의사 사건 검토 후보: ${filteredCandidates.length}건`);
  console.log(`📁 검토 후보 파일: ${filteredPath}`);
  console.log(`====================================================\n`);
}

runCollector();
