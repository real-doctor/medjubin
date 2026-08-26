/**
 * 대한민국 의사(양의사) 광범위 대량 뉴스 크롤러 (heavy_collector.js)
 * 
 * [목적]
 * 사용자가 요청한 모든 공격적/광범위 키워드를 총망라하여 수천 건 단위의 원본 기사를 수집합니다.
 * (성폭행, 강간, 불법촬영, 몰카, 프로포폴, 마약, 불륜, 상간남, 부적절한, 향응, 리베이트, 대리수술 등)
 */

const fs = require('fs');
const path = require('path');

const HEAVY_SEARCH_QUERIES = [
  // 1. 성범죄 및 신체침해
  { category: 'sex_crime', query: '의사 성폭행' },
  { category: 'sex_crime', query: '의사 강간 구속' },
  { category: 'sex_crime', query: '의사 성추행 징역' },
  { category: 'sex_crime', query: '의사 강제추행 입건' },
  { category: 'sex_crime', query: '의사 불법촬영 몰카' },
  { category: 'sex_crime', query: '의사 수면마취 성범죄' },
  { category: 'sex_crime', query: '의사 진료실 성추행' },
  { category: 'sex_crime', query: '의대생 불법촬영 구속' },
  { category: 'sex_crime', query: '의사 환자 추행 실형' },
  { category: 'sex_crime', query: '의사 간호사 성희롱 폭행' },

  // 2. 마약 및 향정신성의약품 오남용
  { category: 'narcotics', query: '의사 프로포폴 불법' },
  { category: 'narcotics', query: '의사 프로포폴 구속' },
  { category: 'narcotics', query: '의사 펜타닐 처방' },
  { category: 'narcotics', query: '의사 에토미데이트 실형' },
  { category: 'narcotics', query: '의사 마약류 유통' },
  { category: 'narcotics', query: '의사 향정신성 의약품 구속' },
  { category: 'narcotics', query: '의사 식욕억제제 나비약' },
  { category: 'narcotics', query: '의사 마약 셀프투약' },
  { category: 'narcotics', query: '의사 졸피뎀 불법처방' },

  // 3. 도덕적 해이 / 불륜 / 상간 / 부적절한 관계
  { category: 'malpractice_hazard', query: '의사 불륜 상간' },
  { category: 'malpractice_hazard', query: '의사 상간남 소송' },
  { category: 'malpractice_hazard', query: '의사 환자 부적절한 관계' },
  { category: 'malpractice_hazard', query: '의사 제약사 향응 접대' },
  { category: 'malpractice_hazard', query: '의사 음주진료 적발' },
  { category: 'malpractice_hazard', query: '의사 음주수술 환자' },
  { category: 'malpractice_hazard', query: '의사 진료기록부 조작' },
  { category: 'malpractice_hazard', query: '의사 차트 위조 은폐' },
  { category: 'malpractice_hazard', query: '의사 의료사고 사망 은폐' },

  // 4. 대리수술 / 무면허 의료
  { category: 'proxy_surgery', query: '의사 대리수술 실형' },
  { category: 'proxy_surgery', query: '의사 유령수술 구속' },
  { category: 'proxy_surgery', query: '영업사원 대리수술 의사' },
  { category: 'proxy_surgery', query: '간호조무사 수술 의사' },
  { category: 'proxy_surgery', query: '의사 무면허 의료행위 교사' },

  // 5. 사기 및 불법 리베이트
  { category: 'fraud_rebate', query: '의사 실손보험 사기' },
  { category: 'fraud_rebate', query: '의사 백내장 보험사기' },
  { category: 'fraud_rebate', query: '의사 도수치료 사기' },
  { category: 'fraud_rebate', query: '의사 제약사 리베이트' },
  { category: 'fraud_rebate', query: '의사 골프접대 리베이트' },
  { category: 'fraud_rebate', query: '의사 허위진단서 징역' },
  { category: 'fraud_rebate', query: '사무장병원 의사 명의대여' },

  // 6. 기타 강력 / 형사범죄
  { category: 'other_crimes', query: '의사 음주운전 뺑소니' },
  { category: 'other_crimes', query: '의사 폭행 상해 입건' },
  { category: 'other_crimes', query: '의사 특수폭행 징역' }
];

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
        id: 'RAW-' + Math.random().toString(36).substr(2, 9),
        title,
        link,
        pubDate,
        desc,
        media,
        category,
        query,
        collectedAt: new Date().toISOString(),
        aiStatus: 'pending' // pending, approved, rejected
      });
    }
  }
  return items;
}

async function runHeavyCollector() {
  console.log('====================================================');
  console.log('🚀 대한민국 의사 범죄 광범위 대량 크롤러 가동');
  console.log(`총 ${HEAVY_SEARCH_QUERIES.length}개 공격적 검색 쿼리 수행...`);
  console.log('====================================================\n');

  const rawResults = [];
  const seenUrls = new Set();
  const seenTitles = new Set();

  for (const item of HEAVY_SEARCH_QUERIES) {
    const encodedQuery = encodeURIComponent(item.query);
    const url = `https://news.google.com/rss/search?q=${encodedQuery}&hl=ko&gl=KR&ceid=KR:ko`;

    console.log(`📡 [${item.category}] 쿼리: "${item.query}" 수집...`);

    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (res.ok) {
        const xmlText = await res.text();
        const parsed = parseRssXml(xmlText, item.category, item.query);
        let added = 0;
        for (const p of parsed) {
          const titleKey = p.title.replace(/\s+/g, '').slice(0, 25);
          if (!seenUrls.has(p.link) && !seenTitles.has(titleKey)) {
            seenUrls.add(p.link);
            seenTitles.add(titleKey);
            rawResults.push(p);
            added++;
          }
        }
        console.log(`  ✅ +${added}건 (누적: ${rawResults.length}건)`);
      }
    } catch (e) {
      console.log(`  ⚠️ 오류: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 300));
  }

  const outPath = path.join(__dirname, 'admin_raw_queue.json');
  fs.writeFileSync(outPath, JSON.stringify(rawResults, null, 2), 'utf-8');

  // 또한 프론트엔드 관리자 페이지에서 바로 접근할 수 있도록 js/admin_queue.js로도 내보냄
  const jsQueuePath = path.join(__dirname, '..', 'js', 'admin_queue.js');
  fs.writeFileSync(jsQueuePath, `const ADMIN_RAW_QUEUE = ${JSON.stringify(rawResults, null, 2)};`, 'utf-8');

  console.log('\n====================================================');
  console.log(`🎉 광범위 대량 수집 완료! 총 ${rawResults.length}건 확보`);
  console.log(`📁 관리자 AI 검토 대기열: ${outPath}`);
  console.log(`📁 웹 관리자 큐 파일: ${jsQueuePath}`);
  console.log('====================================================\n');
}

runHeavyCollector();
