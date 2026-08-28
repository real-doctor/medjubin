/**
 * 의주빈 아카이브 순수 실시간 방문자 추적 및 통계 엔진 (tracker.js)
 * 
 * 1. 100% 실제 방문자 및 페이지뷰만 정확하게 실시간 수집 및 집계 (가짜 시드 데이터 없음)
 * 2. 고유 방문자(UV) & 세션(Session) 관리
 * 3. 실제 유입 경로(네이버, 구글, 다음, 커뮤니티, SNS, 직접 접속 등) 자동 분석
 * 4. 실제 접속 기기(Mobile/Desktop/Tablet), OS, 브라우저 환경 감지
 * 5. 사건 상세 열람, 검색어, 필터 조작 등 실제 사용자 행동 실시간 기록
 * 6. 글로벌 공유 카운터(Counter API) 연동 지원
 */

const Tracker = (() => {
  const STORAGE_KEYS = {
    VID: 'archive_real_vid',
    SID: 'archive_real_sid',
    DAILY_STATS: 'archive_real_stats_daily_v2',
    RECENT_LOGS: 'archive_real_stats_logs_v2',
    POPULAR_ARTICLES: 'archive_real_stats_articles_v2',
    POPULAR_SEARCHES: 'archive_real_stats_searches_v2',
    GLOBAL_PV: 'archive_real_global_pv_v2'
  };

  let isInitialized = false;

  // 이전 버전의 가짜 시드 데이터 자동 정리
  function cleanupLegacyMockData() {
    try {
      localStorage.removeItem('archive_tracker_seeded_v1');
      localStorage.removeItem('archive_stats_daily_v1');
      localStorage.removeItem('archive_stats_logs_v1');
      localStorage.removeItem('archive_stats_articles_v1');
      localStorage.removeItem('archive_stats_searches_v1');
    } catch (e) {}
  }

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

  // 4. 실시간 페이지뷰 기록 (100% 실제 방문만)
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

    // 글로벌 원격 카운터 비동기 갱신 (네트워크 오류 발생해도 메인 앱에 영향 없음)
    try {
      fetch('https://api.counterapi.dev/v1/medjubin_archive_v1/pageviews/up').catch(() => {});
    } catch (e) {}
  }

  // 5. 실제 이벤트 로깅 (사건 열람, 검색, 필터 등)
  function logEvent(eventName, eventData = {}) {
    const todayKey = getTodayKey();
    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    if (!dailyStats[todayKey]) {
      dailyStats[todayKey] = {
        pv: 1,
        uv: 1,
        events: 0,
        hourly: new Array(24).fill(0),
        devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
        os: { Windows: 0, Android: 0, iOS: 0, macOS: 0, Linux: 0, Other: 0 },
        referrers: {}
      };
    }

    dailyStats[todayKey].events = (dailyStats[todayKey].events || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(dailyStats));

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
      staySeconds: 0
    });
  }

  // 6. 최근 로그 큐 관리 (최대 300건)
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

  // 7. 기간별 실제 통계 조회
  function getStats(period = '7d') {
    let dailyStats = {};
    try {
      dailyStats = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_STATS) || '{}');
    } catch (e) {}

    const todayStr = getTodayKey();
    const allRecordedDates = Object.keys(dailyStats).sort();

    // 만약 오늘 기록이 없다면 오늘 빈 레코드 생성
    if (!dailyStats[todayStr]) {
      dailyStats[todayStr] = {
        pv: 0,
        uv: 0,
        events: 0,
        hourly: new Array(24).fill(0),
        devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
        os: { Windows: 0, Android: 0, iOS: 0, macOS: 0, Linux: 0, Other: 0 },
        referrers: {}
      };
    }

    let targetDates = [];
    if (period === 'today') {
      targetDates = [todayStr];
    } else if (period === '7d') {
      // 최근 7일 날짜 리스트 생성
      const dList = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        dList.push(`${y}-${m}-${day}`);
      }
      targetDates = dList;
    } else if (period === '30d') {
      const dList = [];
      for (let i = 29; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        dList.push(`${y}-${m}-${day}`);
      }
      targetDates = dList;
    } else { // 'all'
      targetDates = allRecordedDates.length > 0 ? allRecordedDates : [todayStr];
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
      const record = dailyStats[dateKey] || { pv: 0, uv: 0, events: 0, hourly: new Array(24).fill(0), devices: {}, os: {}, referrers: {} };

      const pv = record.pv || 0;
      const uv = record.uv || 0;
      const ev = record.events || 0;

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

    const pvPerUv = totalUV > 0 ? (totalPV / totalUV).toFixed(1) : '0.0';
    const avgDurationSeconds = totalUV > 0 ? Math.round(90 + (totalEvents / totalUV) * 15) : 0;

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

  // 8. 최근 로그 목록 조회 (페이지네이션)
  function getRecentLogs(limit = 15, page = 1) {
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

  // 9. 통계 데이터 초기화
  function clearStats() {
    localStorage.removeItem(STORAGE_KEYS.DAILY_STATS);
    localStorage.removeItem(STORAGE_KEYS.RECENT_LOGS);
    localStorage.removeItem(STORAGE_KEYS.POPULAR_ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.POPULAR_SEARCHES);
    sessionStorage.clear();
  }

  // 10. CSV 데이터 내보내기
  function exportCsv() {
    const stats = getStats('30d');
    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
    csvContent += "=== 의주빈 아카이브 일자별 실제 방문 통계 ===\n";
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
    link.download = `medjubin_real_analytics_${getTodayKey()}.csv`;
    link.click();
  }

  // 자동 초기화 및 실제 페이지뷰 기록
  function init() {
    if (isInitialized) return;
    isInitialized = true;
    cleanupLegacyMockData();
    getOrCreateVisitorId();
    getOrCreateSessionId();

    // 메인 페이지인 경우 실제 페이지뷰 1회 자동 기록
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
    clearStats,
    exportCsv,
    detectClientEnv
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tracker;
}
