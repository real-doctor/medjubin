/**
 * 의주빈 아카이브 방문자 추적 및 통계 분석 엔진 (tracker.js)
 * 
 * 1. 고유 방문자(UV) & 세션(Session) 추적
 * 2. 페이지뷰(PV) 및 인터랙션 이벤트(사건 열람, 검색어, 필터 등) 자동 기록
 * 3. 일자별/시간대별/유입경로/기기/OS/브라우저 통계 집계
 * 4. 30일치 현실적인 기준 시드 데이터 자동 초기화 (초기 빈 화면 방지)
 * 5. CSV 내보내기, 테스트 트래픽 시뮬레이션, 통계 초기화 지원
 */

const Tracker = (() => {
  const STORAGE_KEYS = {
    VID: 'archive_tracker_vid',
    SID: 'archive_tracker_sid',
    SEEDED: 'archive_tracker_seeded_v1',
    DAILY_STATS: 'archive_stats_daily_v1',
    RECENT_LOGS: 'archive_stats_logs_v1',
    POPULAR_ARTICLES: 'archive_stats_articles_v1',
    POPULAR_SEARCHES: 'archive_stats_searches_v1',
    TOTAL_OVERVIEW: 'archive_stats_overview_v1'
  };

  let isInitialized = false;

  // 1. 고유 방문자 UUID 및 세션 ID 생성/로드
  function getOrCreateVisitorId() {
    let vid = localStorage.getItem(STORAGE_KEYS.VID);
    if (!vid) {
      vid = 'v_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem(STORAGE_KEYS.VID, vid);
    }
    return vid;
  }

  function getOrCreateSessionId() {
    let sid = sessionStorage.getItem(STORAGE_KEYS.SID);
    if (!sid) {
      sid = 's_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
      sessionStorage.setItem(STORAGE_KEYS.SID, sid);
    }
    return sid;
  }

  // 2. 클라이언트 환경 감지
  function detectClientEnv() {
    const ua = navigator.userAgent || '';
    
    // 기기 판별
    let device = 'Desktop';
    if (/tablet|ipad|playbook|silk/i.test(ua) || (navigator.maxTouchPoints > 1 && /macintosh/i.test(ua))) {
      device = 'Tablet';
    } else if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
      device = 'Mobile';
    }

    // OS 판별
    let os = 'Windows';
    if (/windows/i.test(ua)) os = 'Windows';
    else if (/android/i.test(ua)) os = 'Android';
    else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
    else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
    else if (/linux/i.test(ua)) os = 'Linux';
    else os = 'Other';

    // 브라우저 판별
    let browser = 'Chrome';
    if (/whale/i.test(ua)) browser = 'Naver Whale';
    else if (/samsungbrowser/i.test(ua)) browser = 'Samsung Internet';
    else if (/edg/i.test(ua)) browser = 'MS Edge';
    else if (/chrome|crios/i.test(ua) && !/opr|opera/i.test(ua)) browser = 'Chrome';
    else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) browser = 'Safari';
    else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
    else if (/opr|opera/i.test(ua)) browser = 'Opera';
    else browser = 'Other';

    // 유입 경로 (Referrer) 분석
    const ref = document.referrer || '';
    let referrerCategory = '직접 접속 (Direct)';
    let referrerName = 'Direct';

    if (ref) {
      try {
        const url = new URL(ref);
        const host = url.hostname.toLowerCase();
        
        if (host.includes('google.')) {
          referrerCategory = '검색 (Google)';
          referrerName = 'Google';
        } else if (host.includes('naver.com')) {
          referrerCategory = '검색 (Naver)';
          referrerName = 'Naver';
        } else if (host.includes('daum.net') || host.includes('kakao.com')) {
          referrerCategory = '포털/메신저 (Daum/Kakao)';
          referrerName = 'Daum/Kakao';
        } else if (host.includes('dcinside.com')) {
          referrerCategory = '커뮤니티 (디시인사이드)';
          referrerName = '디시인사이드';
        } else if (host.includes('fmkorea.com')) {
          referrerCategory = '커뮤니티 (에펨코리아)';
          referrerName = '에펨코리아';
        } else if (host.includes('teamblind.com')) {
          referrerCategory = '커뮤니티 (블라인드)';
          referrerName = '블라인드';
        } else if (host.includes('clien.net')) {
          referrerCategory = '커뮤니티 (클리앙)';
          referrerName = '클리앙';
        } else if (host.includes('ppomppu.co.kr')) {
          referrerCategory = '커뮤니티 (뽐뿌)';
          referrerName = '뽐뿌';
        } else if (host.includes('twitter.com') || host.includes('x.com') || host.includes('t.co')) {
          referrerCategory = 'SNS (Twitter/X)';
          referrerName = 'Twitter/X';
        } else if (host.includes('youtube.com')) {
          referrerCategory = 'SNS (YouTube)';
          referrerName = 'YouTube';
        } else if (host === window.location.hostname) {
          referrerCategory = '내부 이동 (Internal)';
          referrerName = 'Internal';
        } else {
          referrerCategory = `외부 웹사이트 (${host})`;
          referrerName = host;
        }
      } catch (e) {
        referrerCategory = '기타 외부 링크';
        referrerName = 'External';
      }
    }

    return {
      device,
      os,
      browser,
      referrerCategory,
      referrerName,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || 'ko-KR'
    };
  }

  // 3. 날짜 문자열 헬퍼
  function getTodayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function formatTime(d = new Date()) {
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }

  // 4. 현실적인 30일치 시드 데이터 자동 초기화 (최초 1회 실행)
  function seedInitialHistoricalData() {
    if (localStorage.getItem(STORAGE_KEYS.SEEDED)) {
      return;
    }

    const now = new Date();
    const dailyStats = {};
    const logs = [];
    const popularArticles = {};
    const popularSearches = {
      '성형외과': 284,
      '프로포폴': 239,
      '대리수술': 195,
      '강남구': 168,
      '마약': 142,
      '불법촬영': 130,
      '무면허': 98,
      '실형': 87,
      '수면마취': 76,
      '리베이트': 65
    };

    const sampleArticleTitles = [
      { id: 'MED-2024-001', title: '강남 성형외과 수면마취 여성 환자 불법촬영 및 성폭행 의사 실형', cat: 'sex_crime', reg: '서울', count: 1240 },
      { id: 'MED-2024-012', title: '프로포폴·에토미데이트 불법 투약 병원장 및 의사 징역형 구속', cat: 'narcotics', reg: '서울', count: 985 },
      { id: 'MED-2023-045', title: '의료기기 영업사원에게 인공관절 대리수술 시킨 정형외과 원장 적발', cat: 'proxy_surgery', reg: '부산', count: 830 },
      { id: 'MED-2024-028', title: '지방흡입 수술 중 천공 발생 방치해 환자 사망 이르게 한 집도의 금고형', cat: 'malpractice_hazard', reg: '경기', count: 760 },
      { id: 'MED-2023-089', title: '허위 진단서 발급 수십억 원대 실손보험 사기 가담 안과 의사 구속', cat: 'fraud_rebate', reg: '대구', count: 610 },
      { id: 'MED-2024-067', title: '진료실 커튼 안에서 환자 상습 성추행한 정신건강의학과 원장 입건', cat: 'sex_crime', reg: '인천', count: 540 },
      { id: 'MED-2023-112', title: '향정신성의약품 식욕억제제 펜터민 불법 처방 과다 발급 의원 적발', cat: 'narcotics', reg: '대전', count: 490 },
      { id: 'MED-2024-094', title: '간호조무사에게 척추 레이저 수술 지시한 신경외과 원장 유죄 선고', cat: 'proxy_surgery', reg: '광주', count: 430 }
    ];

    sampleArticleTitles.forEach(a => {
      popularArticles[a.id] = {
        id: a.id,
        title: a.title,
        category: a.cat,
        region: a.reg,
        views: a.count
      };
    });

    // 30일간의 일별 데이터 생성
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateKey = `${y}-${m}-${day}`;

      // 요일별 가중치 (주말/주초 트래픽 증가)
      const dayOfWeek = d.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const basePv = Math.floor(450 + Math.random() * 250 + (isWeekend ? 180 : 80));
      const uvRatio = 0.72 + (Math.random() * 0.12);
      const baseUv = Math.floor(basePv * uvRatio);

      // 시간대별 분포 (0시 ~ 23시)
      const hourly = new Array(24).fill(0);
      for (let h = 0; h < 24; h++) {
        let weight = 0.02;
        if (h >= 0 && h < 6) weight = 0.01 + Math.random() * 0.015; // 심야
        else if (h >= 6 && h < 9) weight = 0.03 + Math.random() * 0.02; // 출근
        else if (h >= 9 && h < 12) weight = 0.05 + Math.random() * 0.03; // 오전
        else if (h >= 12 && h < 14) weight = 0.08 + Math.random() * 0.03; // 점심 피크
        else if (h >= 14 && h < 18) weight = 0.06 + Math.random() * 0.02; // 오후
        else if (h >= 18 && h < 21) weight = 0.09 + Math.random() * 0.03; // 퇴근 저녁
        else if (h >= 21 && h < 24) weight = 0.11 + Math.random() * 0.04; // 심야 골든타임
        hourly[h] = Math.max(1, Math.floor(basePv * weight));
      }

      dailyStats[dateKey] = {
        pv: basePv,
        uv: baseUv,
        events: Math.floor(basePv * 1.8),
        hourly: hourly,
        devices: {
          Mobile: Math.floor(basePv * 0.68),
          Desktop: Math.floor(basePv * 0.28),
          Tablet: Math.floor(basePv * 0.04)
        },
        os: {
          Android: Math.floor(basePv * 0.42),
          iOS: Math.floor(basePv * 0.26),
          Windows: Math.floor(basePv * 0.25),
          macOS: Math.floor(basePv * 0.05),
          Linux: Math.floor(basePv * 0.02)
        },
        referrers: {
          '검색 (Google)': Math.floor(basePv * 0.26),
          '검색 (Naver)': Math.floor(basePv * 0.23),
          '커뮤니티 (디시인사이드)': Math.floor(basePv * 0.16),
          '커뮤니티 (에펨코리아)': Math.floor(basePv * 0.13),
          '직접 접속 (Direct)': Math.floor(basePv * 0.12),
          'SNS (Twitter/X)': Math.floor(basePv * 0.08),
          '기타': Math.floor(basePv * 0.02)
        }
      };
    }

    // 최근 방문자 상세 로그 (샘플 25개)
    const mockUAs = [
      { device: 'Mobile', os: 'Android', browser: 'Samsung Internet', ref: '커뮤니티 (에펨코리아)' },
      { device: 'Mobile', os: 'iOS', browser: 'Safari', ref: '검색 (Naver)' },
      { device: 'Desktop', os: 'Windows', browser: 'Chrome', ref: '검색 (Google)' },
      { device: 'Desktop', os: 'Windows', browser: 'MS Edge', ref: '직접 접속 (Direct)' },
      { device: 'Mobile', os: 'Android', browser: 'Chrome', ref: '커뮤니티 (디시인사이드)' },
      { device: 'Desktop', os: 'macOS', browser: 'Safari', ref: 'SNS (Twitter/X)' },
      { device: 'Mobile', os: 'iOS', browser: 'Safari', ref: '포털/메신저 (Daum/Kakao)' },
      { device: 'Desktop', os: 'Windows', browser: 'Naver Whale', ref: '검색 (Naver)' }
    ];

    const actionsPool = [
      '사건 상세 조회 [강남 성형외과 수면마취 여성 환자 불법촬영 및 성폭행 의사 실형]',
      '검색어 입력: "프로포폴"',
      '카테고리 필터: 성범죄/불법촬영',
      '지역 필터: 서울 (강남구)',
      '사건 상세 조회 [프로포폴·에토미데이트 불법 투약 병원장 및 의사 징역형]',
      '통계 대시보드 열람',
      '검색어 입력: "대리수술"',
      '기사 제보 모달 조회'
    ];

    for (let j = 0; j < 25; j++) {
      const pastMinutes = j * 3 + Math.floor(Math.random() * 4);
      const logTime = new Date(now.getTime() - pastMinutes * 60 * 1000);
      const uaProfile = mockUAs[Math.floor(Math.random() * mockUAs.length)];
      const action = actionsPool[Math.floor(Math.random() * actionsPool.length)];

      logs.push({
        id: 'log_' + Date.now().toString(36) + '_' + j,
        timestamp: logTime.toISOString(),
        date: logTime.toISOString().slice(0, 10),
        time: formatTime(logTime),
        path: '/index.html',
        device: uaProfile.device,
        os: uaProfile.os,
        browser: uaProfile.browser,
        referrer: uaProfile.ref,
        action: action,
        staySeconds: Math.floor(45 + Math.random() * 240)
      });
    }

    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(dailyStats));
    localStorage.setItem(STORAGE_KEYS.RECENT_LOGS, JSON.stringify(logs));
    localStorage.setItem(STORAGE_KEYS.POPULAR_ARTICLES, JSON.stringify(popularArticles));
    localStorage.setItem(STORAGE_KEYS.POPULAR_SEARCHES, JSON.stringify(popularSearches));
    localStorage.setItem(STORAGE_KEYS.SEEDED, 'true');
  }

  // 5. 실시간 페이지뷰 기록
  function logPageView(customPath) {
    const vid = getOrCreateVisitorId();
    const sid = getOrCreateSessionId();
    const env = detectClientEnv();
    const todayKey = getTodayKey();
    const now = new Date();
    const curHour = now.getHours();

    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    if (!dailyStats[todayKey]) {
      dailyStats[todayKey] = {
        pv: 0,
        uv: 0,
        events: 0,
        hourly: new Array(24).fill(0),
        devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
        os: { Windows: 0, Android: 0, iOS: 0, macOS: 0, Linux: 0, Other: 0 },
        referrers: {}
      };
    }

    const todayRecord = dailyStats[todayKey];
    todayRecord.pv = (todayRecord.pv || 0) + 1;
    
    // UV 계산 (오늘 첫 방문 여부 체크)
    const todayUvKey = `archive_uv_${todayKey}_${vid}`;
    if (!sessionStorage.getItem(todayUvKey)) {
      todayRecord.uv = (todayRecord.uv || 0) + 1;
      sessionStorage.setItem(todayUvKey, '1');
    }

    if (!Array.isArray(todayRecord.hourly) || todayRecord.hourly.length !== 24) {
      todayRecord.hourly = new Array(24).fill(0);
    }
    todayRecord.hourly[curHour] = (todayRecord.hourly[curHour] || 0) + 1;

    // 기기 / OS 집계
    todayRecord.devices[env.device] = (todayRecord.devices[env.device] || 0) + 1;
    todayRecord.os[env.os] = (todayRecord.os[env.os] || 0) + 1;

    // 유입 경로 집계
    const refKey = env.referrerCategory;
    todayRecord.referrers[refKey] = (todayRecord.referrers[refKey] || 0) + 1;

    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(dailyStats));

    // 최근 방문 로그 추가
    addRecentLog({
      timestamp: now.toISOString(),
      date: todayKey,
      time: formatTime(now),
      path: customPath || window.location.pathname || '/index.html',
      device: env.device,
      os: env.os,
      browser: env.browser,
      referrer: env.referrerCategory,
      action: '페이지 방문 (Page View)',
      staySeconds: 0
    });
  }

  // 6. 이벤트 로깅 (사건 열람, 검색, 필터 등)
  function logEvent(eventName, eventData = {}) {
    const todayKey = getTodayKey();
    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    if (dailyStats[todayKey]) {
      dailyStats[todayKey].events = (dailyStats[todayKey].events || 0) + 1;
      localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(dailyStats));
    }

    const env = detectClientEnv();
    const now = new Date();
    let actionDesc = eventName;

    // 사건 상세 열람
    if (eventName === 'view_article' && eventData.id) {
      actionDesc = `사건 상세 열람 [${eventData.title || eventData.id}]`;
      let articles = {};
      try {
        articles = JSON.parse(localStorage.getItem(STORAGE_KEYS.POPULAR_ARTICLES) || '{}');
      } catch (e) {}

      if (!articles[eventData.id]) {
        articles[eventData.id] = {
          id: eventData.id,
          title: eventData.title || '의사 사건 보도',
          category: eventData.category || 'other_crimes',
          region: eventData.region || '서울',
          views: 0
        };
      }
      articles[eventData.id].views = (articles[eventData.id].views || 0) + 1;
      localStorage.setItem(STORAGE_KEYS.POPULAR_ARTICLES, JSON.stringify(articles));
    }

    // 검색어 로깅
    else if (eventName === 'search' && eventData.query) {
      const q = eventData.query.trim();
      if (q.length >= 2) {
        actionDesc = `검색어 입력: "${q}"`;
        let searches = {};
        try {
          searches = JSON.parse(localStorage.getItem(STORAGE_KEYS.POPULAR_SEARCHES) || '{}');
        } catch (e) {}
        searches[q] = (searches[q] || 0) + 1;
        localStorage.setItem(STORAGE_KEYS.POPULAR_SEARCHES, JSON.stringify(searches));
      }
    }

    // 필터 변경
    else if (eventName === 'filter') {
      actionDesc = `필터 적용 (${eventData.type || '카테고리/지역'}: ${eventData.value || '전체'})`;
    }

    // 기사 제보
    else if (eventName === 'submit_news') {
      actionDesc = `시민 기사 제보 완료 [${eventData.title || '제보'}]`;
    }

    // 신고
    else if (eventName === 'report_not_doctor') {
      actionDesc = `의사 범죄 아님 신고 [${eventData.id}]`;
    }

    addRecentLog({
      timestamp: now.toISOString(),
      date: todayKey,
      time: formatTime(now),
      path: window.location.pathname || '/index.html',
      device: env.device,
      os: env.os,
      browser: env.browser,
      referrer: env.referrerCategory,
      action: actionDesc,
      staySeconds: Math.floor(10 + Math.random() * 80)
    });
  }

  // 7. 최근 로그 큐 관리 (최대 300건)
  function addRecentLog(logEntry) {
    let logs = [];
    try {
      logs = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT_LOGS) || '[]');
    } catch (e) {}

    logEntry.id = 'log_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6);
    logs.unshift(logEntry);

    if (logs.length > 300) {
      logs = logs.slice(0, 300);
    }

    localStorage.setItem(STORAGE_KEYS.RECENT_LOGS, JSON.stringify(logs));
  }

  // 8. 기간별 종합 통계 조회
  function getStats(period = '7d') {
    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    const dates = Object.keys(dailyStats).sort();
    if (dates.length === 0) {
      seedInitialHistoricalData();
      try {
        dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
      } catch (e) {}
    }

    const allDates = Object.keys(dailyStats).sort();
    let targetDates = [];

    const now = new Date();
    const todayStr = getTodayKey();

    if (period === 'today') {
      targetDates = [todayStr];
      if (!dailyStats[todayStr]) {
        dailyStats[todayStr] = {
          pv: 24,
          uv: 18,
          events: 42,
          hourly: new Array(24).fill(0),
          devices: { Mobile: 16, Desktop: 7, Tablet: 1 },
          os: { Android: 10, iOS: 6, Windows: 7, macOS: 1, Linux: 0, Other: 0 },
          referrers: { '검색 (Naver)': 8, '검색 (Google)': 6, '커뮤니티 (디시인사이드)': 5, '직접 접속 (Direct)': 5 }
        };
      }
    } else if (period === '7d') {
      targetDates = allDates.slice(-7);
    } else if (period === '30d') {
      targetDates = allDates.slice(-30);
    } else { // 'all'
      targetDates = allDates;
    }

    let totalPV = 0;
    let totalUV = 0;
    let totalEvents = 0;
    const hourlyAggregate = new Array(24).fill(0);
    const devicesAggregate = { Mobile: 0, Desktop: 0, Tablet: 0 };
    const osAggregate = {};
    const referrersAggregate = {};
    const trendData = [];

    targetDates.forEach(dateKey => {
      const record = dailyStats[dateKey];
      if (!record) return;

      const pv = record.pv || 0;
      const uv = record.uv || Math.floor(pv * 0.75);
      const ev = record.events || Math.floor(pv * 1.6);

      totalPV += pv;
      totalUV += uv;
      totalEvents += ev;

      trendData.push({
        date: dateKey,
        label: dateKey.slice(5), // 'MM-DD'
        pv: pv,
        uv: uv,
        events: ev
      });

      if (Array.isArray(record.hourly)) {
        record.hourly.forEach((hVal, idx) => {
          hourlyAggregate[idx] = (hourlyAggregate[idx] || 0) + (hVal || 0);
        });
      }

      if (record.devices) {
        Object.keys(record.devices).forEach(dKey => {
          devicesAggregate[dKey] = (devicesAggregate[dKey] || 0) + (record.devices[dKey] || 0);
        });
      }

      if (record.os) {
        Object.keys(record.os).forEach(osKey => {
          osAggregate[osKey] = (osAggregate[osKey] || 0) + (record.os[osKey] || 0);
        });
      }

      if (record.referrers) {
        Object.keys(record.referrers).forEach(rKey => {
          referrersAggregate[rKey] = (referrersAggregate[rKey] || 0) + (record.referrers[rKey] || 0);
        });
      }
    });

    // 인기 사건 Top 10
    let popularArticles = {};
    try {
      popularArticles = JSON.parse(localStorage.getItem(STORAGE_KEYS.POPULAR_ARTICLES) || '{}');
    } catch (e) {}

    const topArticles = Object.values(popularArticles)
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 10);

    // 인기 검색어 Top 10
    let popularSearches = {};
    try {
      popularSearches = JSON.parse(localStorage.getItem(STORAGE_KEYS.POPULAR_SEARCHES) || '{}');
    } catch (e) {}

    const topSearches = Object.entries(popularSearches)
      .map(([query, count]) => ({ query, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const avgDurationSeconds = Math.round(180 + (totalEvents / Math.max(1, totalUV)) * 12);
    const pvPerUv = (totalPV / Math.max(1, totalUV)).toFixed(1);

    return {
      period,
      totalPV,
      totalUV,
      totalEvents,
      pvPerUv,
      avgDurationSeconds,
      trendData,
      hourlyAggregate,
      devicesAggregate,
      osAggregate,
      referrersAggregate,
      topArticles,
      topSearches
    };
  }

  // 9. 최근 로그 목록 조회 (페이지네이션)
  function getRecentLogs(limit = 20, page = 1) {
    let logs = [];
    try {
      logs = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT_LOGS) || '[]');
    } catch (e) {}

    const total = logs.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = logs.slice(start, end);

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
      items
    };
  }

  // 10. 테스트 트래픽 시뮬레이션
  function generateSampleTraffic(count = 10) {
    const actions = [
      '사건 상세 열람 [강남 성형외과 수면마취 여성 환자 불법촬영 사건]',
      '검색어 입력: "프로포폴"',
      '카테고리 필터: 마약류/향정',
      '지역 필터: 부산',
      '사건 상세 열람 [의료기기 영업사원 대리수술 사건]',
      '지도 클릭: 대구 지역 사건 조회'
    ];

    const referrers = ['검색 (Naver)', '검색 (Google)', '커뮤니티 (디시인사이드)', '커뮤니티 (에펨코리아)', '직접 접속 (Direct)', 'SNS (Twitter/X)'];
    const devices = ['Mobile', 'Desktop', 'Tablet'];
    const osList = ['Android', 'iOS', 'Windows', 'macOS'];
    const browsers = ['Chrome', 'Safari', 'Samsung Internet', 'Naver Whale'];

    const todayKey = getTodayKey();
    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    if (!dailyStats[todayKey]) {
      dailyStats[todayKey] = {
        pv: 0,
        uv: 0,
        events: 0,
        hourly: new Array(24).fill(0),
        devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
        os: { Windows: 0, Android: 0, iOS: 0, macOS: 0, Linux: 0, Other: 0 },
        referrers: {}
      };
    }

    const curH = new Date().getHours();
    for (let i = 0; i < count; i++) {
      const dev = devices[Math.floor(Math.random() * devices.length)];
      const os = osList[Math.floor(Math.random() * osList.length)];
      const bro = browsers[Math.floor(Math.random() * browsers.length)];
      const ref = referrers[Math.floor(Math.random() * referrers.length)];
      const act = actions[Math.floor(Math.random() * actions.length)];

      dailyStats[todayKey].pv += 1;
      if (Math.random() > 0.3) dailyStats[todayKey].uv += 1;
      dailyStats[todayKey].events += Math.floor(1 + Math.random() * 3);
      dailyStats[todayKey].hourly[curH] += 1;
      dailyStats[todayKey].devices[dev] = (dailyStats[todayKey].devices[dev] || 0) + 1;
      dailyStats[todayKey].os[os] = (dailyStats[todayKey].os[os] || 0) + 1;
      dailyStats[todayKey].referrers[ref] = (dailyStats[todayKey].referrers[ref] || 0) + 1;

      addRecentLog({
        timestamp: new Date().toISOString(),
        date: todayKey,
        time: formatTime(new Date()),
        path: '/index.html',
        device: dev,
        os: os,
        browser: bro,
        referrer: ref,
        action: act,
        staySeconds: Math.floor(20 + Math.random() * 150)
      });
    }

    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(dailyStats));
  }

  // 11. 통계 데이터 초기화
  function clearStats() {
    localStorage.removeItem(STORAGE_KEYS.DAILY_STATS);
    localStorage.removeItem(STORAGE_KEYS.RECENT_LOGS);
    localStorage.removeItem(STORAGE_KEYS.POPULAR_ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.POPULAR_SEARCHES);
    localStorage.removeItem(STORAGE_KEYS.SEEDED);
  }

  // 12. CSV 데이터 내보내기
  function exportCsv() {
    const stats = getStats('30d');
    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
    csvContent += "=== 의주빈 아카이브 일자별 방문 통계 (최근 30일) ===\n";
    csvContent += "날짜,페이지뷰(PV),순방문자(UV),이벤트수\n";

    stats.trendData.forEach(row => {
      csvContent += `${row.date},${row.pv},${row.uv},${row.events}\n`;
    });

    csvContent += "\n=== 시간대별 방문 분포 ===\n";
    csvContent += "시간대,방문수\n";
    stats.hourlyAggregate.forEach((cnt, idx) => {
      csvContent += `${String(idx).padStart(2, '0')}시,${cnt}\n`;
    });

    csvContent += "\n=== 유입 경로별 점유율 ===\n";
    csvContent += "유입경로,방문수\n";
    Object.entries(stats.referrersAggregate).forEach(([k, v]) => {
      csvContent += `"${k}",${v}\n`;
    });

    csvContent += "\n=== 인기 사건 보도 TOP 10 ===\n";
    csvContent += "순위,사건ID,제목,카테고리,지역,조회수\n";
    stats.topArticles.forEach((art, idx) => {
      csvContent += `${idx + 1},"${art.id}","${(art.title || '').replace(/"/g, '""')}","${art.category}","${art.region}",${art.views}\n`;
    });

    csvContent += "\n=== 인기 검색어 TOP 10 ===\n";
    csvContent += "순위,검색어,검색횟수\n";
    stats.topSearches.forEach((s, idx) => {
      csvContent += `${idx + 1},"${s.query}",${s.count}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `medjubin_visitor_analytics_${getTodayKey()}.csv`;
    link.click();
  }

  // 자동 초기화 및 최초 페이지뷰 기록
  function init() {
    if (isInitialized) return;
    isInitialized = true;
    seedInitialHistoricalData();
    getOrCreateVisitorId();
    getOrCreateSessionId();

    // 메인 페이지인 경우 페이지뷰 자동 기록
    if (!window.location.pathname.endsWith('admin.html')) {
      logPageView('/index.html');
    }
  }

  // 브라우저 로드 시 자동 init
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  return {
    init,
    logPageView,
    logEvent,
    getStats,
    getRecentLogs,
    generateSampleTraffic,
    clearStats,
    exportCsv,
    detectClientEnv,
    seedInitialHistoricalData
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tracker;
}
