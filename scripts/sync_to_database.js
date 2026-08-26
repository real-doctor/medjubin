/**
 * 검증된 대량 사건 데이터를 data.js에 동기화하는 스크립트 (sync_to_database.js)
 */

const fs = require('fs');
const path = require('path');

const validatedPath = path.join(__dirname, 'validated_records.json');
const validatedRecords = JSON.parse(fs.readFileSync(validatedPath, 'utf-8'));

// data.js 템플릿 생성
const dataJsContent = `/**
 * 대한민국 의사(양의사) 범죄 및 의료사고 공공보도 아카이브 데이터베이스
 * 
 * [데이터 수집 및 관리 기준]
 * 1. 본 데이터는 네이버, 다음 등 주요 포털 및 공중파/종합일간지에 정식 보도된 사실만을 기반으로 자동 수집 및 정밀 검증되었습니다.
 * 2. [철저한 직군 검증] 오직 '양의사(의사/전공의/수련의/의대생)' 관련 사건만 등재하며, 한의사 및 치과의사 관련 사건은 철저히 배제합니다.
 * 3. [공익적 사실 중심] 단순 의견, 칼럼, 협회 성명서, 자정 결의 등 비사건성 기사는 100% 필터링되었습니다.
 * 4. 개인정보 보호 및 언론 보도 표준 준칙에 따라 기사 원문과 동일하게 익명 표기를 원칙으로 합니다.
 */

const ARCHIVE_DATA = ${JSON.stringify(validatedRecords, null, 2)};

// 사건 통계 카테고리 정의
const CATEGORY_META = {
  all: { label: "전체 사건", color: "#3b82f6", icon: "ri-folder-open-fill" },
  sex_crime: { label: "성범죄 / 불법촬영", color: "#f43f5e", icon: "ri-shield-cross-fill" },
  narcotics: { label: "마약류 / 프로포폴", color: "#8b5cf6", icon: "ri-capsule-fill" },
  proxy_surgery: { label: "대리수술 / 무면허", color: "#f59e0b", icon: "ri-knife-line" },
  malpractice_hazard: { label: "의료사고 / 도덕적해이", color: "#ef4444", icon: "ri-error-warning-fill" },
  fraud_rebate: { label: "보험사기 / 리베이트", color: "#06b6d4", icon: "ri-money-dollar-circle-fill" },
  other_crimes: { label: "기타 강력 / 형사범죄", color: "#64748b", icon: "ri-scales-3-fill" }
};

// 17개 행정구역 메타데이터
const REGIONS_LIST = [
  "서울", "경기", "인천", "부산", "대구", "대전", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];
`;

const targetPath = path.join(__dirname, '..', 'js', 'data.js');
fs.writeFileSync(targetPath, dataJsContent, 'utf-8');

console.log(`✅ data.js 업데이트 완료! 총 ${validatedRecords.length}건의 순수 양의사 사건 데이터가 동기화되었습니다.`);
