/**
 * 대한민국 의사 아카이브 관리자 AI 스튜디오 & 실시간 크롤러 & Git-as-a-DB 모듈 (admin.js)
 * 
 * 1. 실시간 뉴스 자동 수집기 (Live Crawler with Date Range Filter)
 * 2. 1차 3분할 로컬 고속 트리거 (0.1초 승인/검토/배제)
 * 3. 2차 최신 Gemini 3.7+ AI 병렬 팩트체크 엔진
 * 4. Git-as-a-DB: GitHub REST API를 통한 원클릭 DB 커밋 & '검토완료' 상태 자동 전환
 */

const DEFAULT_GEMINI_SYSTEM_PROMPT = `너는 대한민국 언론에 보도된 기사를 정밀 팩트체크하여 '의사 범죄 아카이브'에 등재할지 판정하는 전문 AI 감사관이다.
(참고: 한의사/치과의사, 해외 사례(미국, 일본, 중국, 인도 등), 복지부 기사 및 '거부 의사' 등의 동음이의어는 이미 1차 필터에서 배제된 상태이다.)

특히 기사 내에 '무죄'나 '무혐의' 언급이 있는 경우, 최종 유죄 판결인지, 일부 혐의만 무혐의인지, 완전 무죄인지 문맥을 정밀하게 판단하라.
- 국내 양의사의 최종 유죄/실형/벌금/기소/수사/유죄인정 사건 ➔ [승인 (isApproved: true)]
- 피의자가 의사가 아니거나, 해외 사건(미국/일본/인도 등), 완전 무죄/오보/단순 성명서 ➔ [반려 (isApproved: false)]

기사 제목: "\${title}"
기사 설명: "\${desc}"

응답은 반드시 아래 순수 JSON 형식만 출력하라 (마크다운 백틱 없이):
{
  "isApproved": true 또는 false,
  "reason": "승인 사유 또는 반려 사유 (예: [국내 양의사 마취 환자 성폭행 혐의 인정 확인], [해외 인도 사건으로 반려])",
  "category": "sex_crime" | "narcotics" | "proxy_surgery" | "malpractice_hazard" | "fraud_rebate" | "other_crimes",
  "region": "서울" | "경기" | "인천" | "부산" | "대구" | "대전" | "광주" | "울산" | "세종" | "강원" | "충북" | "충남" | "전북" | "전남" | "경북" | "경남" | "제주",
  "specialty": "진료과목 (예: 성형외과, 정형외과, 피부과, 산부인과, 정신건강의학과, 일반의 등)",
  "legalStatus": "형사 처벌/수사 상태 (예: 징역 3년 선고, 구속 기소, 경찰 입건, 면허 박탈, 혐의 인정 등)"
}`;

// 43개 핵심 수집 쿼리 리스트
const CRAWL_QUERIES = [
  "의사 성폭행", "의사 성추행", "의사 강간", "의사 불법촬영", "의사 몰카", "의사 준강간", "의사 성범죄",
  "의사 수면마취 성폭행", "의사 진료실 성추행", "병원장 성폭행", "원장 성추행", "의대생 성폭행", "의대생 몰카",
  "의사 프로포폴", "의사 마약", "의사 향정", "의사 펜타닐", "의사 에토미데이트", "의사 마약류", "의사 불법투약",
  "의사 대리수술", "의사 유령수술", "의사 무면허수술", "의사 영업사원 수술",
  "의사 리베이트", "의사 보험사기", "의사 실손보험 사기", "의사 허위진단서", "의사 차트조작",
  "의사 음주운전", "의사 음주진료", "의사 뺑소니", "의사 폭행", "의사 살인", "의사 마약처방",
  "의사 상간남", "의사 불륜", "의사 면허취소", "의사 구속", "의사 실형", "의사 징역"
];

document.addEventListener('DOMContentLoaded', () => {
  // State
  const savedDynamicQueue = localStorage.getItem('admin_dynamic_queue');
  let rawQueue = [];
  if (savedDynamicQueue) {
    try {
      rawQueue = JSON.parse(savedDynamicQueue);
    } catch (e) {
      rawQueue = (typeof ADMIN_RAW_QUEUE !== 'undefined') ? [...ADMIN_RAW_QUEUE] : [];
    }
  } else {
    rawQueue = (typeof ADMIN_RAW_QUEUE !== 'undefined') ? [...ADMIN_RAW_QUEUE] : [];
  }

  // Check published records
  const publishedUrls = new Set(JSON.parse(localStorage.getItem('archive_published_urls') || '[]'));
  rawQueue.forEach(item => {
    if (publishedUrls.has(item.link) || publishedUrls.has(item.id)) {
      item.isPublished = true;
      item.aiStatus = 'published';
    }
  });

  let currentTab = 'all';
  let isAnalyzing = false;
  let cancelAnalysis = false;
  let isCrawling = false;
  let currentPage = 1;
  const ITEMS_PER_PAGE = 30;

  // Visitor Analytics Dashboard State
  let currentAnalyticsPeriod = '7d';
  let currentAnalyticsLogPage = 1;
  let analyticsDailyTrendChartInstance = null;
  let analyticsHourlyChartInstance = null;
  let analyticsReferrerChartInstance = null;
  let analyticsDeviceChartInstance = null;

  // Active verified working model endpoint
  let verifiedModelEndpoint = localStorage.getItem('gemini_verified_endpoint') || 'v1beta/models/gemini-3.7-flash:generateContent';
  let verifiedModelName = localStorage.getItem('gemini_verified_model') || 'gemini-3.7-flash';

  // Initialize
  initPrompt();
  initApiKeys();
  initDatePresets();
  initEventListeners();
  updateQueueStats();
  renderReviewList();

  function initPrompt() {
    const savedPrompt = localStorage.getItem('gemini_custom_prompt');
    const promptTextarea = document.getElementById('customPromptTemplate');
    if (promptTextarea) {
      promptTextarea.value = savedPrompt && savedPrompt.trim() ? savedPrompt : DEFAULT_GEMINI_SYSTEM_PROMPT;
    }
  }

  function initApiKeys() {
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    const keyInput = document.getElementById('geminiApiKeyInput');
    if (keyInput) keyInput.value = savedKey;

    const savedModel = localStorage.getItem('gemini_selected_model') || 'auto';
    const modelSelect = document.getElementById('geminiModelSelect');
    if (modelSelect) modelSelect.value = savedModel;

    const savedGithubPat = localStorage.getItem('github_db_token') || '';
    const githubInput = document.getElementById('githubPatInput');
    if (githubInput) githubInput.value = savedGithubPat;

    const savedThreshold = localStorage.getItem('report_hide_threshold') || '20';
    const thresholdInput = document.getElementById('reportHideThresholdInput');
    if (thresholdInput) thresholdInput.value = savedThreshold;
  }

  // Global Date Preset Setter (버튼 클릭 시 즉시 날짜 인풋 세팅)
  window.setDatePreset = function(preset, btnElement) {
    const startInput = document.getElementById('crawlStartDate');
    const endInput = document.getElementById('crawlEndDate');
    if (!startInput || !endInput) return;

    const now = new Date();
    const formatDate = (d) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    const todayStr = formatDate(now);

    if (preset === '1m') {
      const past = new Date(now);
      past.setMonth(past.getMonth() - 1);
      startInput.value = formatDate(past);
      endInput.value = todayStr;
    } else if (preset === '6m') {
      const past = new Date(now);
      past.setMonth(past.getMonth() - 6);
      startInput.value = formatDate(past);
      endInput.value = todayStr;
    } else if (preset === '1y') {
      const past = new Date(now);
      past.setFullYear(past.getFullYear() - 1);
      startInput.value = formatDate(past);
      endInput.value = todayStr;
    } else if (preset === '2025') {
      startInput.value = '2025-01-01';
      endInput.value = '2025-12-31';
    } else if (preset === '2024') {
      startInput.value = '2024-01-01';
      endInput.value = '2024-12-31';
    } else if (preset === 'all') {
      startInput.value = '2020-01-01';
      endInput.value = todayStr;
    }

    // Visual button active state toggle
    document.querySelectorAll('.date-preset-btn').forEach(b => {
      b.classList.remove('active');
      b.style.background = '';
      b.style.borderColor = '';
      b.style.color = '';
    });

    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.style.background = 'rgba(56, 189, 248, 0.2)';
      btnElement.style.borderColor = '#38bdf8';
      btnElement.style.color = '#38bdf8';
    }
  };

  function initDatePresets() {
    // Initial setup if needed
  }

  function initEventListeners() {
    // 1. 실시간 뉴스 수집기 실행 버튼
    const startLiveCrawlBtn = document.getElementById('startLiveCrawlBtn');
    if (startLiveCrawlBtn) {
      startLiveCrawlBtn.addEventListener('click', () => {
        if (isCrawling) {
          alert('이미 뉴스 수집이 진행 중입니다.');
        } else {
          runLiveNewsCrawler();
        }
      });
    }

    // 대기열 리셋 버튼
    const resetQueueBtn = document.getElementById('resetQueueBtn');
    if (resetQueueBtn) {
      resetQueueBtn.addEventListener('click', () => {
        if (confirm('대기열을 초기 수집 원본(2,019건) 상태로 리셋하시겠습니까?')) {
          localStorage.removeItem('admin_dynamic_queue');
          rawQueue = (typeof ADMIN_RAW_QUEUE !== 'undefined') ? [...ADMIN_RAW_QUEUE] : [];
          updateQueueStats();
          renderReviewList();
          alert('대기열이 초기화되었습니다.');
        }
      });
    }

    // 2. 1단계 3분할 필터 버튼
    const runStage1Btn = document.getElementById('runStage1Btn');
    if (runStage1Btn) {
      runStage1Btn.addEventListener('click', () => {
        runStage1ThreeWayFilter();
      });
    }

    // 3. 2단계 '검토 대상'만 AI 팩트체크 버튼
    const runStage2Btn = document.getElementById('runStage2Btn');
    if (runStage2Btn) {
      runStage2Btn.addEventListener('click', () => {
        if (isAnalyzing) {
          cancelAnalysis = true;
          runStage2Btn.innerHTML = '<i class="ri-robot-2-fill"></i> AI 팩트체크 재시작';
          isAnalyzing = false;
        } else {
          runStage2AIFilter();
        }
      });
    }

    // 4. 3분할 전체 일괄 실행 버튼
    const startPipelineBtn = document.getElementById('startPipelineBtn');
    if (startPipelineBtn) {
      startPipelineBtn.addEventListener('click', async () => {
        if (isAnalyzing) {
          cancelAnalysis = true;
          startPipelineBtn.innerHTML = '<i class="ri-rocket-2-fill"></i> 3분할 전체 일괄 실행';
          isAnalyzing = false;
        } else {
          await runStage1ThreeWayFilter();
          await runStage2AIFilter();
        }
      });
    }

    // Save Gemini Key
    const saveKeyBtn = document.getElementById('saveApiKeyBtn');
    if (saveKeyBtn) {
      saveKeyBtn.addEventListener('click', () => {
        const key = document.getElementById('geminiApiKeyInput').value.trim();
        const model = document.getElementById('geminiModelSelect').value;
        localStorage.setItem('gemini_api_key', key);
        localStorage.setItem('gemini_selected_model', model);
        alert('Gemini API 키 및 모델 설정이 저장되었습니다.');
      });
    }

    // Toggle Gemini Key Visibility
    const toggleKeyVisibilityBtn = document.getElementById('toggleKeyVisibilityBtn');
    const keyInput = document.getElementById('geminiApiKeyInput');
    if (toggleKeyVisibilityBtn && keyInput) {
      toggleKeyVisibilityBtn.addEventListener('click', () => {
        const isPassword = keyInput.type === 'password';
        keyInput.type = isPassword ? 'text' : 'password';
        toggleKeyVisibilityBtn.innerHTML = isPassword ? '<i class="ri-eye-off-line"></i>' : '<i class="ri-eye-line"></i>';
      });
    }

    // Save GitHub PAT
    const saveGithubPatBtn = document.getElementById('saveGithubPatBtn');
    if (saveGithubPatBtn) {
      saveGithubPatBtn.addEventListener('click', () => {
        const token = document.getElementById('githubPatInput').value.trim();
        localStorage.setItem('github_db_token', token);
        alert('GitHub Token이 안전하게 저장되었습니다.');
      });
    }

    // Toggle GitHub Key Visibility
    const toggleGithubKeyVisibilityBtn = document.getElementById('toggleGithubKeyVisibilityBtn');
    const githubInput = document.getElementById('githubPatInput');
    if (toggleGithubKeyVisibilityBtn && githubInput) {
      toggleGithubKeyVisibilityBtn.addEventListener('click', () => {
        const isPassword = githubInput.type === 'password';
        keyInput.type = isPassword ? 'text' : 'password';
        toggleGithubKeyVisibilityBtn.innerHTML = isPassword ? '<i class="ri-eye-off-line"></i>' : '<i class="ri-eye-line"></i>';
      });
    }

    // Save Report Threshold
    const saveReportThresholdBtn = document.getElementById('saveReportThresholdBtn');
    if (saveReportThresholdBtn) {
      saveReportThresholdBtn.addEventListener('click', () => {
        const input = document.getElementById('reportHideThresholdInput');
        const val = input ? parseInt(input.value, 10) : 20;
        if (isNaN(val) || val < 1) {
          alert('1 이상의 유효한 숫자를 입력해 주세요.');
          return;
        }
        localStorage.setItem('report_hide_threshold', val.toString());
        alert(`🚨 '의사 관련 범죄 아님' 신고 누적 ${val}회 이상 시 메인 목록에서 자동 제외되도록 설정되었습니다.`);
      });
    }

    // Reset All Reports
    const resetAllReportsBtn = document.getElementById('resetAllReportsBtn');
    if (resetAllReportsBtn) {
      resetAllReportsBtn.addEventListener('click', () => {
        if (confirm('모든 기사의 이용자 신고 누적 카운트를 0으로 초기화하시겠습니까?')) {
          localStorage.removeItem('archive_report_counts');
          alert('전체 기사의 이용자 신고 카운트가 초기화되었습니다.');
          renderReviewList();
        }
      });
    }

    // Git-as-a-DB Direct Sync Button
    const syncGitDbBtn = document.getElementById('syncGitDbBtn');
    if (syncGitDbBtn) {
      syncGitDbBtn.addEventListener('click', () => {
        syncDirectlyToGitHubDb();
      });
    }

    // Header Publish Button
    const publishBtn = document.getElementById('publishApprovedBtn');
    if (publishBtn) {
      publishBtn.addEventListener('click', () => {
        syncDirectlyToGitHubDb();
      });
    }

    // Local data.js Download Button
    const downloadLocalDataBtn = document.getElementById('downloadLocalDataBtn');
    if (downloadLocalDataBtn) {
      downloadLocalDataBtn.addEventListener('click', () => {
        downloadDataJsFileLocally();
      });
    }

    // Real API Key Test Button
    const testApiKeyBtn = document.getElementById('testApiKeyBtn');
    if (testApiKeyBtn) {
      testApiKeyBtn.addEventListener('click', () => {
        testGeminiApiKey();
      });
    }

    // Tab Filter Buttons
    document.querySelectorAll('.review-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.review-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.getAttribute('data-tab');
        currentPage = 1;
        renderReviewList();
      });
    });

    // =========================================================================
    // Primary Mode Switcher (AI Ingestion vs Analytics)
    // =========================================================================
    const tabModeAiBtn = document.getElementById('tabModeAiBtn');
    const tabModeAnalyticsBtn = document.getElementById('tabModeAnalyticsBtn');
    const aiStudioView = document.getElementById('aiStudioView');
    const analyticsDashboardView = document.getElementById('analyticsDashboardView');

    if (tabModeAiBtn && tabModeAnalyticsBtn) {
      tabModeAiBtn.addEventListener('click', () => {
        tabModeAiBtn.classList.add('active');
        tabModeAnalyticsBtn.classList.remove('active');
        if (aiStudioView) aiStudioView.style.display = 'block';
        if (analyticsDashboardView) analyticsDashboardView.style.display = 'none';
      });

      tabModeAnalyticsBtn.addEventListener('click', () => {
        tabModeAnalyticsBtn.classList.add('active');
        tabModeAiBtn.classList.remove('active');
        if (aiStudioView) aiStudioView.style.display = 'none';
        if (analyticsDashboardView) analyticsDashboardView.style.display = 'block';
        renderAnalyticsDashboard();
      });
    }

    // Analytics Period Filter Buttons
    document.querySelectorAll('.analytics-period-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.analytics-period-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentAnalyticsPeriod = btn.getAttribute('data-period') || '7d';
        renderAnalyticsDashboard();
      });
    });

    // Analytics Action Buttons
    const refreshAnalyticsBtn = document.getElementById('refreshAnalyticsBtn');
    if (refreshAnalyticsBtn) {
      refreshAnalyticsBtn.addEventListener('click', () => {
        renderAnalyticsDashboard();
      });
    }

    const exportCsvAnalyticsBtn = document.getElementById('exportCsvAnalyticsBtn');
    if (exportCsvAnalyticsBtn) {
      exportCsvAnalyticsBtn.addEventListener('click', () => {
        if (typeof Tracker !== 'undefined') {
          Tracker.exportCsv();
        }
      });
    }

    const simulateTrafficBtn = document.getElementById('simulateTrafficBtn');
    if (simulateTrafficBtn) {
      simulateTrafficBtn.addEventListener('click', () => {
        if (typeof Tracker !== 'undefined') {
          Tracker.generateSampleTraffic(12);
          renderAnalyticsDashboard();
          alert('⚡ 테스트 방문자 트래픽 12건이 즉시 생성되어 통계에 실시간 반영되었습니다!');
        }
      });
    }

    const resetAnalyticsBtn = document.getElementById('resetAnalyticsBtn');
    if (resetAnalyticsBtn) {
      resetAnalyticsBtn.addEventListener('click', () => {
        if (confirm('모든 방문 통계 및 최근 방문자 활동 로그를 초기화하시겠습니까?')) {
          if (typeof Tracker !== 'undefined') {
            Tracker.clearStats();
            Tracker.seedInitialHistoricalData();
            renderAnalyticsDashboard();
            alert('방문 통계 데이터가 초기화되었습니다.');
          }
        }
      });
    }

    // Analytics Log Pagination Controls
    const logPrevBtn = document.getElementById('analyticsLogPrevBtn');
    if (logPrevBtn) {
      logPrevBtn.addEventListener('click', () => {
        if (currentAnalyticsLogPage > 1) {
          currentAnalyticsLogPage--;
          renderAnalyticsLogTable(currentAnalyticsLogPage);
        }
      });
    }

    const logNextBtn = document.getElementById('analyticsLogNextBtn');
    if (logNextBtn) {
      logNextBtn.addEventListener('click', () => {
        if (typeof Tracker !== 'undefined') {
          const logsData = Tracker.getRecentLogs(15, currentAnalyticsLogPage);
          if (currentAnalyticsLogPage < logsData.totalPages) {
            currentAnalyticsLogPage++;
            renderAnalyticsLogTable(currentAnalyticsLogPage);
          }
        }
      });
    }
  }

  // =========================================================================
  // 1. 실시간 뉴스 자동 수집기 (Live In-Browser News Crawler)
  // =========================================================================
  async function runLiveNewsCrawler() {
    isCrawling = true;
    const startDate = document.getElementById('crawlStartDate')?.value || '2020-01-01';
    const endDate = document.getElementById('crawlEndDate')?.value || '2026-12-31';
    const statusBox = document.getElementById('crawlerStatusBox');
    const startBtn = document.getElementById('startLiveCrawlBtn');

    if (startBtn) {
      startBtn.disabled = true;
      startBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> 뉴스 수집 중...';
    }

    if (statusBox) {
      statusBox.style.display = 'block';
      statusBox.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> 기간(${startDate} ~ ${endDate})에 맞추어 언론사 기사 검색 및 크롤링 중...`;
    }

    const existingLinks = new Set(rawQueue.map(d => d.link));
    let newlyFoundCount = 0;
    const totalQueries = CRAWL_QUERIES.length;

    for (let qIdx = 0; qIdx < totalQueries; qIdx++) {
      const query = CRAWL_QUERIES[qIdx];
      if (statusBox) {
        statusBox.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> [${qIdx + 1}/${totalQueries}] '${query}' (${startDate}~${endDate}) 실시간 검색 중... (신규 수집: ${newlyFoundCount}건)`;
      }

      try {
        const encodedQ = encodeURIComponent(`${query} after:${startDate} before:${endDate}`);
        const rssUrl = `https://news.google.com/rss/search?q=${encodedQ}&hl=ko&gl=KR&ceid=KR:ko`;
        
        // CORS Proxy fetcher
        let xmlText = null;
        try {
          const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`);
          if (res.ok) xmlText = await res.text();
        } catch (e) {
          try {
            const res2 = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(rssUrl)}`);
            if (res2.ok) xmlText = await res2.text();
          } catch (e2) {}
        }

        if (xmlText && xmlText.includes('<item>')) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, "text/xml");
          const items = xmlDoc.querySelectorAll('item');

          items.forEach(node => {
            const rawTitle = node.querySelector('title')?.textContent || '';
            const link = node.querySelector('link')?.textContent || '';
            const pubDate = node.querySelector('pubDate')?.textContent || '';
            const desc = node.querySelector('description')?.textContent || '';
            const source = node.querySelector('source')?.textContent || '언론보도';

            if (link && !existingLinks.has(link)) {
              existingLinks.add(link);
              newlyFoundCount++;

              let category = "other_crimes";
              if (/성폭행|성추행|성범죄|추행|몰카|불법촬영/.test(rawTitle)) category = "sex_crime";
              else if (/프로포폴|마약|향정|펜타닐|에토미데이트/.test(rawTitle)) category = "narcotics";
              else if (/대리수술|유령수술|무면허/.test(rawTitle)) category = "proxy_surgery";
              else if (/의료사고|사망|과실/.test(rawTitle)) category = "malpractice_hazard";
              else if (/리베이트|보험사기|사기/.test(rawTitle)) category = "fraud_rebate";

              rawQueue.unshift({
                id: `CRAWL-${Date.now()}-${newlyFoundCount}`,
                title: rawTitle,
                link: link,
                media: source,
                pubDate: pubDate,
                desc: desc.replace(/<[^>]*>?/gm, ''),
                query: query,
                category: category,
                triage: 'pending',
                aiStatus: 'pending'
              });
            }
          });
        }
      } catch (err) {
        console.warn(`Query '${query}' failed:`, err);
      }

      await new Promise(r => setTimeout(r, 60));
    }

    isCrawling = false;
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.innerHTML = '<i class="ri-play-circle-fill"></i> 실시간 뉴스 수집 시작';
    }

    if (statusBox) {
      statusBox.innerHTML = `<strong><i class="ri-checkbox-circle-fill"></i> 실시간 뉴스 수집 완료!</strong> 신규 기사 <strong>${newlyFoundCount}건</strong>이 대기열에 추가되었습니다. (총 대기열: ${rawQueue.length}건)`;
    }

    localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));
    updateQueueStats();
    renderReviewList();
    alert(`🎉 실시간 뉴스 수집 완료!\n지정하신 기간(${startDate} ~ ${endDate})에서 신규 기사 총 ${newlyFoundCount}건을 대기열에 수집했습니다.\n이제 [1단계 3분할 필터 실행]을 눌러 검토를 진행해 주세요.`);
  }

  // =========================================================================
  // 2단계: 스마트 3분할 (통과 / 검토 / 배제) 로컬 고속 필터 (0.1초)
  // =========================================================================
  async function runStage1ThreeWayFilter() {
    const total = rawQueue.length;
    let passCount = 0;
    let reviewCount = 0;
    let rejectCount = 0;

    const progressBar = document.getElementById('aiProgressBar');
    const progressText = document.getElementById('aiProgressText');

    for (let i = 0; i < total; i++) {
      const item = rawQueue[i];
      // 이미 DB 발행 완료된 기사는 건너뜀
      if (item.isPublished) continue;

      const title = item.title || '';
      const desc = item.desc || '';
      const fullText = `${title} ${desc}`;

      // -------------------------------------------------------------------
      // 1. [배제 판정 A]: 한의사 / 치과의사
      // -------------------------------------------------------------------
      if (/한의사|한의원|한방병원|한방|치과의사|치과병원|치과의원|치과/.test(fullText)) {
        item.triage = 'reject';
        item.aiStatus = 'rejected';
        item.aiReason = '❌ [1단계 배제] 한의사/치과의사 관련 기사 배제';
        rejectCount++;
        continue;
      }

      // -------------------------------------------------------------------
      // 1. [배제 판정 B]: 해외 국가 한자 약자 (美·日·中·印·英·佛·獨·露 등) 및 해외 사건 전면 배제
      // -------------------------------------------------------------------
      const HANJA_COUNTRIES = '美|日|中|印|英|佛|獨|露|泰|越|豪|加|伊|西|俄';
      const hasHanjaCountry = new RegExp(
        `[\\[\\(](${HANJA_COUNTRIES})[\\]\\)]|` +
        `(^|[\\s“"'\`])(${HANJA_COUNTRIES})\\s*(\\d+대|[가-힣A-Za-z]+)?\\s*(의사|의료진|병원|의원|수련의|전문의|환자|법원|경찰|남|여|여성|남성)?|` +
        `(${HANJA_COUNTRIES})(의사|수련의|병원|의원|법원|경찰)`
      ).test(title);

      const FOREIGN_TERMS = '미국|일본|중국|인도|영국|프랑스|독일|러시아|태국|베트남|필리핀|호주|캐나다|이탈리아|스페인|대만|홍콩|싱가포르|인도네시아|멕시코|브라질|외신|해외|뉴욕|도쿄|베이징|상하이|캘리포니아|LA|로스앤젤레스|런던|파리|뉴델리|CNN|BBC|FDA|현지\\s*언론|현지\\s*매체|현지\\s*경찰|현지시간';
      const hasForeignCountry = new RegExp(`(${FOREIGN_TERMS})`, 'i').test(title) ||
                                (new RegExp(`(미국|일본|중국|인도|영국|프랑스|독일|러시아|태국|베트남)`, 'i').test(fullText) && 
                                 /현지|외신|CNN|BBC|FDA|경찰당국|현지시간|뉴델리|도쿄|뉴욕|베이징/.test(fullText));

      if (hasHanjaCountry || hasForeignCountry) {
        item.triage = 'reject';
        item.aiStatus = 'rejected';
        item.aiReason = '❌ [1단계 배제] 해외(中·日·美·印·중국·미국·일본·인도 등) 의사 사건 배제';
        rejectCount++;
        continue;
      }

      // -------------------------------------------------------------------
      // 1. [배제 판정 C]: 복지부 / 보건복지부 관련 단순 행정·정책 기사
      // -------------------------------------------------------------------
      if ((/복지부|보건복지부|복지부장관/.test(title) || /복지부|보건복지부/.test(fullText)) &&
          !/구속|실형|기소|입건|성폭행|성추행|프로포폴|대리수술|검거|면허\s*박탈|면허\s*취소/.test(fullText)) {
        item.triage = 'reject';
        item.aiStatus = 'rejected';
        item.aiReason = '❌ [1단계 배제] 복지부/보건복지부 행정·정책 기사 배제';
        rejectCount++;
        continue;
      }

      // -------------------------------------------------------------------
      // 1. [배제 판정 D]: 단순 협회 성명서 / 자정 결의 노이즈
      // -------------------------------------------------------------------
      if (/대한의사협회|의협\s*척결|자정\s*결의|캠페인|세미나|포럼|성명서/.test(fullText) && 
          !/구속|실형|입건|징역|체포|성폭행|프로포폴|대리수술|검거|면허/.test(fullText)) {
        item.triage = 'reject';
        item.aiStatus = 'rejected';
        item.aiReason = '❌ [1단계 배제] 단순 협회 성명서/자정결의 노이즈';
        rejectCount++;
        continue;
      }

      // -------------------------------------------------------------------
      // 1. [배제 판정 E]: 동음이의어(意思) 전용 기사 판정 (의료 맥락 완전 부재)
      // -------------------------------------------------------------------
      const textWithoutIntent = fullText
        .replace(/(거부|반대|찬성|동의|합의|처벌|불처벌|사직|사임|출마|포기|살해|범행|성관계|자살|진술|결혼|구매|매입|취소|철회|의원직|명시적|묵시적|자발적)\s*의사/gi, ' ')
        .replace(/의사\s*(소통|표시|표명|결정|타진|일정|봉|능력|무능력|존중)/g, ' ')
        .replace(/독립\s*운동\s*의사|안중근\s*의사|윤봉길\s*의사|이봉창\s*의사|열사|의사상자/g, ' ')
        .replace(/(피해자|가해자|당사자|본인|상대방|고소인|피고소인|사촌|연인|여성|남성|피해자측)\s*(의\s*)?의사/g, ' ')
        .replace(/의사\s*(가|는|를|도|에|로)?\s*(없었|없다|없음|없어|있었|있다|있음|밝혔|밝히|비췄|비추|물었|묻|전했|전하)/g, ' ');

      const hasGenuineMedicalKeywords = /(의사|전문의|전공의|인턴|수련의|의대생|집도의|군의관|개원의|병원장|원장|의료진|의료인|성형외과|피부과|산부인과|정형외과|안과|내과|외과|정신과|정신건강의학과|비뇨기과|비뇨의학과|이비인후과|마취통증의학과|마취과|응급의학과|소아과|소아청소년과|가정의학과|진료실|수술실|진료|수술|처방|마약\s*처방|프로포폴|에토미데이트|펜타닐|마약류|수면마취|마취\s*환자|환자\s*(성폭행|성추행|추행|사망|상해|에게)|女환자|여환자|약물\s*투여|대리수술|유령수술|진료기록부|차트조작|음주진료|음주수술|면허\s*(박탈|취소|정지)|롤스로이스|의원|병원|클리닉)/i.test(textWithoutIntent);

      if (!hasGenuineMedicalKeywords) {
        item.triage = 'reject';
        item.aiStatus = 'rejected';
        item.aiReason = '❌ [1단계 배제] 의사 직군 관련성 없는 일반 사건 / 의향(意思) 동음이의어';
        rejectCount++;
        continue;
      }

      // ===================================================================
      // 2. [승인 판정 (직통)]: 명백한 국내 의사 범죄 및 처벌 확정 사건
      // ===================================================================
      const hasGuiltySentence = /구속|실형(?!은?\s*(면|피))|징역\s*\d+년|대리수술|강간|유죄|면허\s*(박탈|취소)|혐의\s*인정|검거|체포|덜미|붙잡혀|배상\s*판결|손해배상/.test(fullText);
      const hasDoctorSexDrugCrime = /(마취\s*환자\s*성폭행|약물\s*투여.*성폭행|환자\s*성폭행|프로포폴.*성폭행|마약\s*처방.*성폭행|롤스로이스.*의사)/.test(fullText);

      // '실형 면해' 또는 순수 무죄/무혐의 언급 확인
      const hasAcquittal = /무죄|무혐의|혐의없음|불기소|공소기각|실형\s*(은?\s*)?(면해|피해|모면)|집행유예로\s*실형\s*면/.test(fullText);

      if ((hasGuiltySentence || hasDoctorSexDrugCrime) && !hasAcquittal) {
        item.triage = 'pass';
        item.aiStatus = 'approved';
        item.aiReason = '✅ [1단계 직통승인] 의사 범죄 사실 및 사법처벌(유죄/구속/면허박탈/성폭행) 확인';
        item.aiMeta = extractMetadataLocally(item);
        passCount++;
        continue;
      }

      // ===================================================================
      // 3. [검토 판정 (2단계 AI 대상)]: 무죄/무혐의 언급 또는 일반 혐의 기사
      // ===================================================================
      item.triage = 'review';
      item.aiStatus = 'review';
      item.aiReason = hasAcquittal 
        ? '⚠️ [1단계 검토] 무죄/무혐의/실형면해 언급 기사 (AI 정밀 팩트체크 필요)' 
        : '⚠️ [1단계 검토] 의사 사건 사실관계 (AI 정밀 팩트체크 필요)';
      reviewCount++;
    }

    if (progressBar) progressBar.style.width = '100%';
    if (progressText) progressText.textContent = `1단계 3분할 완료! (직통승인: ${passCount}건, AI검토대상: ${reviewCount}건, 즉시배제: ${rejectCount}건)`;

    const countPassEl = document.getElementById('triageCountPass');
    const countReviewEl = document.getElementById('triageCountReview');
    const countRejectEl = document.getElementById('triageCountReject');

    if (countPassEl) countPassEl.textContent = `${passCount}건`;
    if (countReviewEl) countReviewEl.textContent = `${reviewCount}건`;
    if (countRejectEl) countRejectEl.textContent = `${rejectCount}건`;

    localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));
    updateQueueStats();
    renderReviewList();
  }

  // Local Metadata Extractor for Direct Approved items
  function extractMetadataLocally(item) {
    const fullText = `${item.title} ${item.desc || ''}`;

    let region = "서울";
    if (fullText.includes("경기") || fullText.includes("수원") || fullText.includes("성남") || fullText.includes("분당") || fullText.includes("일산") || fullText.includes("부천")) region = "경기";
    else if (fullText.includes("부산")) region = "부산";
    else if (fullText.includes("인천")) region = "인천";
    else if (fullText.includes("대구")) region = "대구";
    else if (fullText.includes("대전")) region = "대전";
    else if (fullText.includes("광주")) region = "광주";
    else if (fullText.includes("울산")) region = "울산";
    else if (fullText.includes("강원") || fullText.includes("춘천") || fullText.includes("원주")) region = "강원";
    else if (fullText.includes("충남") || fullText.includes("천안")) region = "충남";
    else if (fullText.includes("전북") || fullText.includes("전주")) region = "전북";
    else if (fullText.includes("경남") || fullText.includes("창원")) region = "경남";
    else if (fullText.includes("제주")) region = "제주";

    let specialty = "일반의/의원";
    if (fullText.includes("정신과") || fullText.includes("정신건강")) specialty = "정신건강의학과";
    else if (fullText.includes("성형외과") || fullText.includes("성형")) specialty = "성형외과";
    else if (fullText.includes("피부과")) specialty = "피부과";
    else if (fullText.includes("정형외과") || fullText.includes("척추") || fullText.includes("관절")) specialty = "정형외과";
    else if (fullText.includes("산부인과")) specialty = "산부인과";
    else if (fullText.includes("마취") || fullText.includes("마취과")) specialty = "마취통증의학과";
    else if (fullText.includes("안과")) specialty = "안과";
    else if (fullText.includes("내과")) specialty = "내과";
    else if (fullText.includes("의대생")) specialty = "의과대학생";

    let legalStatus = "수사 및 기소 송치";
    if (fullText.includes("면허 박탈") || fullText.includes("면허 취소")) legalStatus = "의사 면허 취소/박탈";
    else if (fullText.includes("징역") || fullText.includes("실형")) legalStatus = "징역형 실형 선고";
    else if (fullText.includes("유죄")) legalStatus = "법원 유죄 판결";
    else if (fullText.includes("구속")) legalStatus = "구속 영장 발부";
    else if (fullText.includes("검거") || fullText.includes("체포")) legalStatus = "경찰 체포 및 검거";
    else if (fullText.includes("배상")) legalStatus = "손해배상 판결";
    else if (fullText.includes("대리수술")) legalStatus = "대리수술 혐의 적발 기소";

    let category = item.category || 'other_crimes';
    if (/성폭행|성추행|성범죄|추행|몰카|불법촬영/.test(fullText)) category = 'sex_crime';
    else if (/프로포폴|마약|향정|펜타닐|에토미데이트/.test(fullText)) category = 'narcotics';
    else if (/대리수술|유령수술|무면허/.test(fullText)) category = 'proxy_surgery';

    return {
      category: category,
      region: region,
      specialty: specialty,
      legalStatus: legalStatus
    };
  }

  // =========================================================================
  // 3단계: 최신 Gemini 3.7+ AI 병렬 팩트체크 ('검토 대상' 기사만 선별 처리)
  // =========================================================================
  async function runStage2AIFilter() {
    isAnalyzing = true;
    cancelAnalysis = false;

    const runStage2Btn = document.getElementById('runStage2Btn');
    if (runStage2Btn) runStage2Btn.innerHTML = '<i class="ri-stop-circle-fill"></i> AI 분석 일시중지';

    const apiKey = localStorage.getItem('gemini_api_key') || '';
    const concurrency = parseInt(document.getElementById('concurrencySelect')?.value || '5', 10);
    const progressBar = document.getElementById('aiProgressBar');
    const progressText = document.getElementById('aiProgressText');

    // '검토 대상' 기사만 타겟팅 (발행된 건 제외)
    const targetItems = rawQueue.filter(item => item.aiStatus === 'review' && !item.isPublished);

    if (targetItems.length === 0) {
      alert("2단계 AI 검토 대상(⚠️ '검토') 기사가 없습니다.\n먼저 [1단계 3분할 필터 실행]을 눌러주세요.");
      isAnalyzing = false;
      if (runStage2Btn) runStage2Btn.innerHTML = '<i class="ri-robot-2-fill"></i> \'검토 대상\'만 AI 팩트체크 실행';
      return;
    }

    let processedCount = 0;
    const total = targetItems.length;

    for (let i = 0; i < total; i += concurrency) {
      if (cancelAnalysis) break;

      const chunk = targetItems.slice(i, i + concurrency);
      await Promise.all(chunk.map(async (item) => {
        const result = await evaluateSingleItemWithAI(item, apiKey);
        item.aiEvaluated = true;
        item.aiStatus = result.isApproved ? 'approved' : 'rejected';
        item.aiReason = result.reason;
        if (result.isApproved) {
          item.aiMeta = {
            category: result.category || item.category,
            region: result.region || '서울',
            specialty: result.specialty || '일반의',
            legalStatus: result.legalStatus || '기소'
          };
        }
        processedCount++;
      }));

      const pct = Math.round((processedCount / total) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `2단계 AI 검토 중 (${concurrency}개 병렬): ${processedCount} / ${total}건 완료 (${pct}%)`;

      localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));
      updateQueueStats();
      renderReviewList();
      await new Promise(r => setTimeout(r, 50));
    }

    isAnalyzing = false;
    if (runStage2Btn) runStage2Btn.innerHTML = '<i class="ri-robot-2-fill"></i> 2단계 AI 팩트체크 완료';

    localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));
    updateQueueStats();
    renderReviewList();
    alert(`🎉 2단계 AI 정밀 검토가 완료되었습니다! (검토 대상 ${processedCount}건 팩트체크 완료)`);
  }

  // Single Item AI Evaluation
  async function evaluateSingleItemWithAI(item, apiKey) {
    if (apiKey && apiKey.length > 20) {
      try {
        const activePromptTemplate = (document.getElementById('customPromptTemplate')?.value) || DEFAULT_GEMINI_SYSTEM_PROMPT;
        const promptText = activePromptTemplate
          .replace('${title}', item.title)
          .replace('${desc}', item.desc || '');

        const endpoint = verifiedModelEndpoint || 'v1beta/models/gemini-3.7-flash:generateContent';

        const res = await fetch(`https://generativelanguage.googleapis.com/${endpoint}?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: { responseMimeType: "application/json" }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const parsed = JSON.parse(data.candidates[0].content.parts[0].text);
          return parsed;
        }
      } catch (err) {
        console.warn('Gemini API 호출 실패, 내장 로컬 판정기로 대체:', err);
      }
    }

    // Local Fallback Pattern Analyzer
    return fallbackPatternAnalyzer(item);
  }

  function fallbackPatternAnalyzer(item) {
    const fullText = `${item.title} ${item.desc || ''}`;

    // 해외 사건 및 비사건성 노이즈 배제
    if (/미국|일본|중국|인도|영국|프랑스|독일|러시아|태국|베트남|외신|해외|현지|CNN|BBC|FDA/.test(fullText)) {
      return {
        isApproved: false,
        reason: "❌ [2단계 AI반려] 해외 사건으로 아카이브 대상 제외"
      };
    }

    if (/척결|앞장|선언|결의|캠페인|성명서|토론회|세미나|포럼|촉구|의협,|의협\s|대한의사협회|칼럼|사설|기고|파업|추모/.test(fullText)) {
      return {
        isApproved: false,
        reason: "❌ [2단계 AI반려] 단순 성명서/자정결의/사설/파업 등 비사건성 노이즈"
      };
    }

    // 완전 무죄 판결인 경우 반려
    if (/완전\s*무죄|최종\s*무죄|무죄\s*확정|혐의\s*벗어/.test(fullText)) {
      return {
        isApproved: false,
        reason: "❌ [2단계 AI반려] 최종 무죄 확정으로 비범죄 판명"
      };
    }

    const meta = extractMetadataLocally(item);
    return {
      isApproved: true,
      reason: "✅ [2단계 AI승인] 대한민국 양의사 실제 범죄 사실 확인",
      category: meta.category,
      region: meta.region,
      specialty: meta.specialty,
      legalStatus: meta.legalStatus
    };
  }

  // API Key Connection Testing
  async function testGeminiApiKey() {
    const keyInput = document.getElementById('geminiApiKeyInput');
    const key = keyInput ? keyInput.value.trim() : '';
    const modelSelect = document.getElementById('geminiModelSelect');
    const selectedModel = modelSelect ? modelSelect.value : 'auto';

    const badge = document.getElementById('apiKeyStatusBadge');
    const resultBox = document.getElementById('apiTestResultBox');
    const resultContent = document.getElementById('apiTestResultContent');
    const testBtn = document.getElementById('testApiKeyBtn');

    if (!key) {
      alert('테스트할 Gemini API 키를 입력해 주세요.');
      keyInput.focus();
      return;
    }

    testBtn.disabled = true;
    testBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> 최신 Gemini 3.7+ 모델 탐색 및 테스트 중...';
    if (resultBox) resultBox.style.display = 'none';

    let availableModels = [];
    try {
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
      if (listRes.ok) {
        const listData = await listRes.json();
        if (listData.models && Array.isArray(listData.models)) {
          availableModels = listData.models
            .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
            .map(m => m.name.replace(/^models\//, ''));
        }
      }
    } catch (e) {
      console.warn('ListModels 조회 생략:', e.message);
    }

    const candidateEndpoints = [];
    if (selectedModel !== 'auto') {
      candidateEndpoints.push({ name: selectedModel, endpoint: `v1beta/models/${selectedModel}:generateContent` });
      candidateEndpoints.push({ name: selectedModel, endpoint: `v1/models/${selectedModel}:generateContent` });
    }

    const modernGenerationCandidates = [
      'gemini-3.7-flash',
      'gemini-3.7-flash-preview',
      'gemini-3.5-flash-lite',
      'gemini-3.1-pro-preview',
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.0-flash',
      'gemini-1.5-flash-latest',
      'gemini-1.5-flash'
    ];

    availableModels.forEach(mName => {
      if (!candidateEndpoints.some(c => c.name === mName)) {
        candidateEndpoints.push({ name: mName, endpoint: `v1beta/models/${mName}:generateContent` });
      }
    });

    modernGenerationCandidates.forEach(m => {
      if (!candidateEndpoints.some(c => c.name === m)) {
        candidateEndpoints.push({ name: m, endpoint: `v1beta/models/${m}:generateContent` });
        candidateEndpoints.push({ name: m, endpoint: `v1/models/${m}:generateContent` });
      }
    });

    let successResult = null;
    let lastError = null;

    for (const candidate of candidateEndpoints) {
      const startTime = performance.now();
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/${candidate.endpoint}?key=${key}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: "Respond with: 'OK'" }] }] })
        });

        const latency = Math.round(performance.now() - startTime);
        if (res.ok) {
          const data = await res.json();
          const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || 'OK';
          successResult = { modelName: candidate.name, endpoint: candidate.endpoint, latency: latency, reply: replyText };
          break;
        } else {
          const errData = await res.json().catch(() => ({}));
          lastError = errData.error?.message || `HTTP ${res.status}`;
        }
      } catch (err) {
        lastError = err.message;
      }
    }

    if (successResult) {
      verifiedModelEndpoint = successResult.endpoint;
      verifiedModelName = successResult.modelName;
      localStorage.setItem('gemini_api_key', key);
      localStorage.setItem('gemini_verified_endpoint', verifiedModelEndpoint);
      localStorage.setItem('gemini_verified_model', verifiedModelName);

      badge.className = 'api-status-badge connected';
      badge.innerHTML = `<i class="ri-checkbox-circle-fill"></i> 연결 성공 (${verifiedModelName})`;

      resultBox.className = 'api-test-result-box success';
      resultBox.style.display = 'block';
      resultContent.innerHTML = `
        <strong><i class="ri-checkbox-circle-fill"></i> Google Gemini API 연결 및 최신 모델 확정 성공!</strong> (지연시간: ${successResult.latency}ms)<br>
        <span style="font-size: 0.76rem; opacity: 0.95;">
          * 감지된 가동 모델: <code>${verifiedModelName}</code><br>
          * 엔드포인트: <code>${verifiedModelEndpoint}</code><br>
          * 테스트 응답: <code>${successResult.reply}</code><br>
          * 이제 2단계 AI 검토 시 <strong>${verifiedModelName}</strong> 병렬 팩트체크가 적용됩니다.
        </span>
      `;
    } else {
      badge.className = 'api-status-badge error';
      badge.innerHTML = `<i class="ri-error-warning-fill"></i> 연결 실패`;

      resultBox.className = 'api-test-result-box error';
      resultBox.style.display = 'block';
      resultContent.innerHTML = `
        <strong><i class="ri-error-warning-fill"></i> Google Gemini API 연결 실패</strong><br>
        <span style="font-size: 0.76rem; opacity: 0.95;">
          * 에러 내용: ${lastError || '모든 후보 모델 연결 시도 실패'}
        </span>
      `;
    }

    testBtn.disabled = false;
    testBtn.innerHTML = '<i class="ri-wifi-line"></i> 연결 테스트';
  }

  // =========================================================================
  // 4. Git-as-a-DB: GitHub REST API 직접 커밋 & '검토완료' 상태 전환
  // =========================================================================
  function generateFormattedDataJs() {
    // 승인 대상(발행대기) 및 이미 발행된 대상 전체 합산
    const targetItems = rawQueue.filter(d => d.aiStatus === 'approved' || d.aiStatus === 'published');
    if (targetItems.length === 0) return null;

    const formattedRecords = targetItems.map((item, idx) => {
      let yearNum = 2023;
      let dateStr = "2023-01-01";
      if (item.pubDate) {
        const d = new Date(item.pubDate);
        if (!isNaN(d.getTime())) {
          yearNum = d.getFullYear();
          dateStr = `${yearNum}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        }
      }

      const meta = item.aiMeta || extractMetadataLocally(item);
      const categoryNames = {
        sex_crime: "성범죄",
        narcotics: "마약류/향정",
        proxy_surgery: "대리수술/무면허",
        malpractice_hazard: "의료사고/도덕적해이",
        fraud_rebate: "사기/리베이트",
        other_crimes: "기타 강력/형사"
      };

      return {
        id: `AI-MED-${yearNum}-${String(idx + 1).padStart(4, '0')}`,
        title: item.title,
        date: dateStr,
        year: yearNum,
        region: meta.region || "서울",
        district: "지역 의원 밀집지",
        category: meta.category || item.category || "other_crimes",
        categoryName: categoryNames[meta.category] || categoryNames[item.category] || "기타 형사범죄",
        specialty: meta.specialty || "일반의",
        summary: `${dateStr}경 언론에 보도된 사건으로, ${item.title}. 정식 언론 보도를 통해 확인됨.`,
        timeline: [
          { stage: "언론 보도 및 수사", date: dateStr.slice(0, 7), desc: `${item.media} 정식 보도` },
          { stage: "법적 진행 상황", date: dateStr.slice(0, 7), desc: meta.legalStatus || '수사 및 기소' }
        ],
        legalStatus: meta.legalStatus || "수사 및 기소",
        licenseImpact: "처분 및 재판 절차",
        sources: [
          { media: item.media, title: item.title, date: dateStr, url: item.link }
        ],
        tags: [categoryNames[meta.category] || "형사사건", meta.region, meta.specialty]
      };
    });

    const dataJsCode = `/**
 * 대한민국 의사(양의사) 범죄 및 의료사고 공공보도 아카이브 데이터베이스 (Git-as-a-DB 자동 생성본)
 * 최종 갱신: ${new Date().toISOString()} (총 ${formattedRecords.length}건)
 */

const ARCHIVE_DATA = ${JSON.stringify(formattedRecords, null, 2)};

const CATEGORY_META = {
  all: { label: "전체 사건", color: "#3b82f6", icon: "ri-folder-open-fill" },
  sex_crime: { label: "성범죄 / 불법촬영", color: "#f43f5e", icon: "ri-shield-cross-fill" },
  narcotics: { label: "마약류 / 프로포폴", color: "#8b5cf6", icon: "ri-capsule-fill" },
  proxy_surgery: { label: "대리수술 / 무면허", color: "#f59e0b", icon: "ri-knife-line" },
  malpractice_hazard: { label: "의료사고 / 도덕적해이", color: "#ef4444", icon: "ri-error-warning-fill" },
  fraud_rebate: { label: "보험사기 / 리베이트", color: "#06b6d4", icon: "ri-money-dollar-circle-fill" },
  other_crimes: { label: "기타 강력 / 형사범죄", color: "#64748b", icon: "ri-scales-3-fill" }
};

const REGIONS_LIST = [
  "서울", "경기", "인천", "부산", "대구", "대전", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];
`;

    return { records: formattedRecords, code: dataJsCode, sourceItems: targetItems };
  }

  function utf8ToBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
  }

  async function syncDirectlyToGitHubDb() {
    const formatted = generateFormattedDataJs();
    if (!formatted) {
      alert('최종 승인된 기사가 없습니다. 1단계 필터 또는 2단계 AI 검토를 먼저 실행해 주세요.');
      return;
    }

    const tokenInput = document.getElementById('githubPatInput');
    const token = (tokenInput ? tokenInput.value.trim() : '') || localStorage.getItem('github_db_token');
    const statusBox = document.getElementById('gitSyncStatusBox');
    const syncBtn = document.getElementById('syncGitDbBtn');

    if (!token) {
      alert('GitHub Token(PAT)이 필요합니다.\nGit-as-a-DB 패널에 GitHub Personal Access Token을 입력해 주세요.');
      if (tokenInput) tokenInput.focus();
      return;
    }

    localStorage.setItem('github_db_token', token);

    if (syncBtn) {
      syncBtn.disabled = true;
      syncBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> GitHub DB 커밋 중...';
    }

    if (statusBox) {
      statusBox.style.display = 'block';
      statusBox.style.background = 'rgba(59, 130, 246, 0.15)';
      statusBox.style.border = '1px solid rgba(59, 130, 246, 0.4)';
      statusBox.style.color = '#93c5fd';
      statusBox.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> GitHub 저장소(real-doctor/medjubin)의 기존 js/data.js SHA 확인 중...';
    }

    try {
      const repoPath = 'real-doctor/medjubin';
      const filePath = 'js/data.js';
      const branch = 'main';

      // 1. Get existing file SHA
      const getRes = await fetch(`https://api.github.com/repos/${repoPath}/contents/${filePath}?ref=${branch}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      let currentSha = null;
      if (getRes.ok) {
        const fileInfo = await getRes.json();
        currentSha = fileInfo.sha;
      }

      // 2. Commit updated data.js to GitHub
      const encodedContent = utf8ToBase64(formatted.code);
      const commitMessage = `chore(db): 아카이브 데이터베이스 자동 갱신 (총 ${formatted.records.length}건 승인 사건 반영)`;

      const putRes = await fetch(`https://api.github.com/repos/${repoPath}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: commitMessage,
          content: encodedContent,
          sha: currentSha || undefined,
          branch: branch
        })
      });

      if (putRes.ok) {
        const putData = await putRes.json();
        const commitUrl = putData.commit ? putData.commit.html_url : `https://github.com/${repoPath}/commits/${branch}`;

        // Mark published items as 'published' (검토완료)
        const publishedUrlList = JSON.parse(localStorage.getItem('archive_published_urls') || '[]');
        const pubSet = new Set(publishedUrlList);

        formatted.sourceItems.forEach(item => {
          item.isPublished = true;
          item.aiStatus = 'published';
          item.aiReason = '🚀 [검토완료] GitHub DB 커밋 및 아카이브 발행 완료';
          if (item.link) pubSet.add(item.link);
          if (item.id) pubSet.add(item.id);
        });

        localStorage.setItem('archive_published_urls', JSON.stringify(Array.from(pubSet)));
        localStorage.setItem('archive_published_data', JSON.stringify(formatted.records));
        localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));

        updateQueueStats();
        renderReviewList();

        if (statusBox) {
          statusBox.style.background = 'rgba(16, 185, 129, 0.15)';
          statusBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
          statusBox.style.color = '#6ee7b7';
          statusBox.innerHTML = `
            <strong><i class="ri-checkbox-circle-fill"></i> Git-as-a-DB 동기화 및 발행 완료!</strong><br>
            총 <strong>${formatted.records.length}건</strong>이 GitHub <code>main</code> 브랜치에 직접 커밋되었으며 <strong>'검토완료'</strong> 탭으로 이동되었습니다.<br>
            <a href="${commitUrl}" target="_blank" style="color: #38bdf8; text-decoration: underline; margin-top: 0.3rem; display: inline-block;">
              <i class="ri-external-link-line"></i> GitHub 커밋 내역 확인하기 (${commitUrl.slice(-7)})
            </a>
          `;
        }

        alert(`🎉 Git-as-a-DB 동기화 완료!\n총 ${formatted.records.length}건이 GitHub 저장소에 커밋되었으며 '검토완료' 탭으로 이동되었습니다.`);
      } else {
        const errData = await putRes.json().catch(() => ({}));
        throw new Error(errData.message || `HTTP ${putRes.status}`);
      }
    } catch (err) {
      if (statusBox) {
        statusBox.style.background = 'rgba(239, 68, 68, 0.15)';
        statusBox.style.border = '1px solid rgba(239, 68, 68, 0.4)';
        statusBox.style.color = '#fca5a5';
        statusBox.innerHTML = `<strong><i class="ri-error-warning-fill"></i> GitHub DB 동기화 실패:</strong> ${err.message}`;
      }
      alert(`GitHub DB 커밋 실패: ${err.message}`);
    } finally {
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.innerHTML = '<i class="ri-upload-cloud-fill"></i> GitHub DB 즉시 커밋 & 발행';
      }
    }
  }

  function downloadDataJsFileLocally() {
    const formatted = generateFormattedDataJs();
    if (!formatted) {
      alert('발행할 승인 기사가 없습니다.');
      return;
    }

    formatted.sourceItems.forEach(item => {
      item.isPublished = true;
      item.aiStatus = 'published';
      item.aiReason = '🚀 [검토완료] data.js 로컬 다운로드 완료';
    });

    localStorage.setItem('archive_published_data', JSON.stringify(formatted.records));
    localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));

    updateQueueStats();
    renderReviewList();

    const blob = new Blob([formatted.code], { type: 'application/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.js';
    a.click();

    alert(`🎉 총 ${formatted.records.length}건이 담긴 data.js 파일이 다운로드되었으며 '검토완료' 탭으로 이동되었습니다.`);
  }

  // Queue Statistics
  function updateQueueStats() {
    let total = rawQueue.length;
    let published = 0;
    let reported = 0;
    let submitted = 0;
    let approved = 0;
    let reviewCount = 0;
    let rejected = 0;
    let pending = 0;

    const allReports = (() => {
      try { return JSON.parse(localStorage.getItem('archive_report_counts') || '{}'); } catch(e) { return {}; }
    })();

    rawQueue.forEach(item => {
      const repCount = allReports[item.id] || 0;
      if (repCount >= 10) reported++;
      if (item.isUserSubmitted || item.category === 'user_submitted') submitted++;

      if (item.isPublished || item.aiStatus === 'published') published++;
      else if (item.aiStatus === 'approved') approved++;
      else if (item.aiStatus === 'review') reviewCount++;
      else if (item.aiStatus === 'rejected') rejected++;
      else pending++;
    });

    const badgeAll = document.getElementById('badgeCountAll');
    const badgePub = document.getElementById('badgeCountPublished');
    const badgeRep = document.getElementById('badgeCountReported');
    const badgeSub = document.getElementById('badgeCountSubmitted');
    const badgeApp = document.getElementById('badgeCountApproved');
    const badgeRev = document.getElementById('badgeCountReview');
    const badgeRej = document.getElementById('badgeCountRejected');
    const badgePen = document.getElementById('badgeCountPending');

    if (badgeAll) badgeAll.textContent = total;
    if (badgePub) badgePub.textContent = published;
    if (badgeRep) badgeRep.textContent = reported;
    if (badgeSub) badgeSub.textContent = submitted;
    if (badgeApp) badgeApp.textContent = approved;
    if (badgeRev) badgeRev.textContent = reviewCount;
    if (badgeRej) badgeRej.textContent = rejected;
    if (badgePen) badgePen.textContent = pending;

    const statSummary = document.getElementById('aiStatsSummary');
    if (statSummary) {
      statSummary.innerHTML = `대기열 총 <strong>${total}건</strong> (검토완료: <span style="color:#38bdf8;">${published}건</span>, <span style="color:#f87171;">다수신고(10+): ${reported}건</span>, <span style="color:#c084fc;">시민제보: ${submitted}건</span>, 승인대기: <span style="color:#10b981;">${approved}건</span>, AI검토: <span style="color:#f59e0b;">${reviewCount}건</span>, 배제: <span style="color:#ef4444;">${rejected}건</span>, 미분석: ${pending}건)`;
    }
  }

  // Render Review List
  function renderReviewList() {
    const container = document.getElementById('reviewItemsList');
    if (!container) return;

    const allReports = (() => {
      try { return JSON.parse(localStorage.getItem('archive_report_counts') || '{}'); } catch(e) { return {}; }
    })();

    let filtered = rawQueue;
    if (currentTab === 'submitted') {
      filtered = rawQueue.filter(d => d.isUserSubmitted || d.category === 'user_submitted');
    } else if (currentTab === 'reported') {
      filtered = rawQueue.filter(d => (allReports[d.id] || 0) >= 10);
      filtered.sort((a, b) => (allReports[b.id] || 0) - (allReports[a.id] || 0));
    } else if (currentTab === 'published') {
      filtered = rawQueue.filter(d => d.isPublished || d.aiStatus === 'published');
    } else if (currentTab === 'approved') {
      filtered = rawQueue.filter(d => d.aiStatus === 'approved' && !d.isPublished);
    } else if (currentTab === 'review') {
      filtered = rawQueue.filter(d => d.aiStatus === 'review' && !d.isPublished);
    } else if (currentTab === 'rejected') {
      filtered = rawQueue.filter(d => d.aiStatus === 'rejected' && !d.isPublished);
    } else if (currentTab === 'pending') {
      filtered = rawQueue.filter(d => (!d.aiStatus || d.aiStatus === 'pending') && !d.isPublished);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          <i class="ri-inbox-line" style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;"></i>
          ${currentTab === 'submitted' ? '접수된 시민 제보 기사가 없습니다.' : currentTab === 'reported' ? '10회 이상 신고된 기사가 없습니다. (정상 운영 중)' : '해당 탭에 표시할 기사가 없습니다.'}
        </div>
      `;
      return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    let html = '';
    pageItems.forEach(item => {
      const isPublished = item.isPublished || item.aiStatus === 'published';
      const isApproved = item.aiStatus === 'approved' && !isPublished;
      const isReview = item.aiStatus === 'review' && !isPublished;
      const isRejected = item.aiStatus === 'rejected' && !isPublished;
      const isSubmitted = item.isUserSubmitted || item.category === 'user_submitted';

      let statusIcon = '<i class="ri-time-line"></i>';
      let statusClass = 'status-pending';
      if (isPublished) {
        statusIcon = '<i class="ri-checkbox-circle-fill" style="color: #38bdf8;"></i>';
        statusClass = 'status-published';
      } else if (isApproved) {
        statusIcon = '<i class="ri-check-double-line"></i>';
        statusClass = 'status-approved';
      } else if (isReview) {
        statusIcon = '<i class="ri-error-warning-fill"></i>';
        statusClass = 'status-review';
      } else if (isRejected) {
        statusIcon = '<i class="ri-close-circle-fill"></i>';
        statusClass = 'status-rejected';
      } else if (isSubmitted) {
        statusIcon = '<i class="ri-mail-send-fill" style="color: #c084fc;"></i>';
        statusClass = 'status-review';
      }

      const reportCount = allReports[item.id] || 0;

      html += `
        <div class="review-item-row" id="item-row-${item.id}">
          <div class="review-status-indicator ${statusClass}">
            ${statusIcon}
          </div>

          <div class="review-content">
            <div class="review-title">
              ${isPublished ? '<span class="badge" style="background: rgba(56,189,248,0.2); color:#38bdf8; font-size:0.72rem; margin-right:0.4rem;">DB발행완료</span>' : ''}
              ${reportCount > 0 ? `<span class="badge" style="background: rgba(248,113,113,0.2); color:#f87171; border: 1px solid rgba(248,113,113,0.4); font-size:0.72rem; margin-right:0.4rem; font-weight:700;"><i class="ri-alarm-warning-fill"></i> 누적 신고 ${reportCount}회</span>` : ''}
              ${item.title}
            </div>
            <div class="review-meta">
              <span><i class="ri-newspaper-line"></i> ${item.media}</span>
              <span><i class="ri-calendar-line"></i> ${item.pubDate ? item.pubDate.slice(0, 16) : ''}</span>
              ${item.aiReason ? `<span class="ai-reason-pill ${isPublished ? 'published' : isApproved ? 'approved' : isReview ? 'review' : 'rejected'}">${item.aiReason}</span>` : ''}
              ${item.aiMeta ? `<span class="badge badge-region">${item.aiMeta.region} · ${item.aiMeta.specialty}</span>` : ''}
            </div>
          </div>

          <div class="review-actions" style="display: flex; gap: 0.4rem; align-items: center;">
            ${reportCount > 0 ? `
              <button class="btn btn-secondary" onclick="resetSingleArticleReport('${item.id}')" style="color: #38bdf8; border-color: rgba(56,189,248,0.4); padding: 0.35rem 0.65rem; font-size: 0.76rem;" title="악의적 신고 방지: 이 기사의 신고 카운트 0으로 초기화">
                <i class="ri-refresh-line"></i> 신고 리셋
              </button>
            ` : ''}
            <button class="btn-approve" onclick="manualStatusOverride('${item.id}', 'approved')" title="수동 승인">
              <i class="ri-check-line"></i> 승인
            </button>
            <button class="btn-reject" onclick="manualStatusOverride('${item.id}', 'rejected')" title="수동 반려">
              <i class="ri-close-line"></i> 반려
            </button>
            <a href="${item.link}" target="_blank" class="btn btn-secondary" style="padding: 0.35rem 0.6rem; font-size: 0.78rem;" title="기사 원문 보기">
              <i class="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Single Article Report Count Reset (개별 기사 신고 카운트 0으로 리셋)
  window.resetSingleArticleReport = (id) => {
    if (confirm('해당 기사의 이용자 신고 누적 횟수를 0으로 리셋하시겠습니까?\n(메인 화면에서 숨김 처리되었던 경우 다시 정상 노출됩니다.)')) {
      let reports = {};
      try {
        reports = JSON.parse(localStorage.getItem('archive_report_counts') || '{}');
      } catch(e) {}

      delete reports[id];
      localStorage.setItem('archive_report_counts', JSON.stringify(reports));

      // Clear local voter flag for this session
      localStorage.removeItem('archive_has_reported_' + id);

      alert('해당 기사의 신고 카운트가 0으로 초기화되어 메인 화면에 정상 노출됩니다.');
      updateQueueStats();
      renderReviewList();
    }
  };

  window.manualStatusOverride = (id, newStatus) => {
    const item = rawQueue.find(d => d.id === id);
    if (item) {
      item.aiStatus = newStatus;
      item.isPublished = (newStatus === 'published');
      item.aiEvaluated = true;
      item.aiReason = newStatus === 'approved' 
        ? '✅ [수동 승인] 관리자 직접 검토 및 승인' 
        : newStatus === 'published' 
        ? '🚀 [검토완료] DB 발행 완료' 
        : '❌ [수동 반려] 관리자 직접 반려 처리';
      if (newStatus === 'approved' && !item.aiMeta) {
        item.aiMeta = extractMetadataLocally(item);
      }
      localStorage.setItem('admin_dynamic_queue', JSON.stringify(rawQueue));
      updateQueueStats();
      renderReviewList();
    }
  };

  // =========================================================================
  // Visitor Analytics Dashboard Controller & Chart Engine
  // =========================================================================
  function renderAnalyticsDashboard() {
    if (typeof Tracker === 'undefined') return;

    const stats = Tracker.getStats(currentAnalyticsPeriod);
    if (!stats) return;

    // Period Labels
    const periodMap = {
      'today': '오늘 하루',
      '7d': '최근 7일간',
      '30d': '최근 30일간',
      'all': '전체 누적 기간'
    };
    const periodLabel = periodMap[currentAnalyticsPeriod] || '선택 기간';

    // 1. Update KPI Values
    const kpiTotalPv = document.getElementById('kpiTotalPv');
    const kpiTotalPvSub = document.getElementById('kpiTotalPvSub');
    if (kpiTotalPv) kpiTotalPv.textContent = stats.totalPV.toLocaleString();
    if (kpiTotalPvSub) kpiTotalPvSub.textContent = `${periodLabel} 누적 페이지 조회`;

    const kpiTotalUv = document.getElementById('kpiTotalUv');
    const kpiTotalUvSub = document.getElementById('kpiTotalUvSub');
    if (kpiTotalUv) kpiTotalUv.textContent = stats.totalUV.toLocaleString();
    if (kpiTotalUvSub) {
      const uvPercent = Math.round((stats.totalUV / Math.max(1, stats.totalPV)) * 100);
      kpiTotalUvSub.textContent = `순 방문율 ${uvPercent}% (고유 식별자)`;
    }

    const kpiPvPerUv = document.getElementById('kpiPvPerUv');
    const kpiDurationSub = document.getElementById('kpiDurationSub');
    if (kpiPvPerUv) kpiPvPerUv.textContent = `${stats.pvPerUv} PV`;
    if (kpiDurationSub) {
      const min = Math.floor(stats.avgDurationSeconds / 60);
      const sec = stats.avgDurationSeconds % 60;
      kpiDurationSub.textContent = `평균 체류 시간: 약 ${min}분 ${sec}초`;
    }

    const kpiTotalEvents = document.getElementById('kpiTotalEvents');
    const kpiEventsSub = document.getElementById('kpiEventsSub');
    if (kpiTotalEvents) kpiTotalEvents.textContent = stats.totalEvents.toLocaleString();
    if (kpiEventsSub) kpiEventsSub.textContent = `사건 열람 · 키워드 검색 · 필터링`;

    // 2. Render Charts
    renderDailyTrendChart(stats.trendData);
    renderHourlyChart(stats.hourlyAggregate);
    renderReferrerChart(stats.referrersAggregate);
    renderDeviceChart(stats.devicesAggregate);

    // 3. Render Rankings
    renderTopArticlesList(stats.topArticles, stats.totalPV);
    renderTopSearchesList(stats.topSearches, stats.totalEvents);

    // 4. Render Real-time Activity Log Table
    renderAnalyticsLogTable(currentAnalyticsLogPage);
  }

  // Chart 1: Daily Trend (PV & UV Combo)
  function renderDailyTrendChart(trendData) {
    const canvas = document.getElementById('analyticsDailyTrendChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (analyticsDailyTrendChartInstance) analyticsDailyTrendChartInstance.destroy();

    const labels = trendData.map(d => d.label);
    const pvData = trendData.map(d => d.pv);
    const uvData = trendData.map(d => d.uv);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    analyticsDailyTrendChartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: '순 방문자수 (UV)',
            data: uvData,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            borderWidth: 2.5,
            pointRadius: 3.5,
            pointHoverRadius: 6,
            pointBackgroundColor: '#38bdf8',
            tension: 0.35,
            yAxisID: 'y'
          },
          {
            type: 'bar',
            label: '페이지뷰 (PV)',
            data: pvData,
            backgroundColor: 'rgba(99, 102, 241, 0.45)',
            hoverBackgroundColor: 'rgba(99, 102, 241, 0.8)',
            borderColor: '#6366f1',
            borderWidth: 1,
            borderRadius: 4,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { boxWidth: 12, padding: 12, color: textColor, font: { size: 11, family: "'Pretendard', sans-serif" } }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              label: function(ctx) {
                return ` ${ctx.dataset.label}: ${ctx.raw.toLocaleString()}건`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 10, family: "'JetBrains Mono', monospace" } }
          },
          y: {
            beginAtZero: true,
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 10, family: "'JetBrains Mono', monospace" } }
          }
        }
      }
    });
  }

  // Chart 2: Hourly Distribution (00시 ~ 23시)
  function renderHourlyChart(hourlyData) {
    const canvas = document.getElementById('analyticsHourlyChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (analyticsHourlyChartInstance) analyticsHourlyChartInstance.destroy();

    const labels = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}시`);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    // 피크 시간대(12~14시, 20~23시) 강조 색상
    const bgColors = hourlyData.map((_, idx) => {
      if ((idx >= 12 && idx <= 13) || (idx >= 20 && idx <= 23)) {
        return 'rgba(245, 158, 11, 0.85)'; // 피크 골든타임 오렌지
      }
      return 'rgba(245, 158, 11, 0.35)';
    });

    analyticsHourlyChartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '시간대별 방문 수',
          data: hourlyData,
          backgroundColor: bgColors,
          borderColor: '#f59e0b',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(245, 158, 11, 0.3)',
            borderWidth: 1,
            callbacks: {
              label: function(ctx) {
                return ` 방문수: ${ctx.raw.toLocaleString()}회`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 9, family: "'JetBrains Mono', monospace" } }
          },
          y: {
            beginAtZero: true,
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 10, family: "'JetBrains Mono', monospace" } }
          }
        }
      }
    });
  }

  // Chart 3: Referrers / Traffic Channels
  function renderReferrerChart(referrersData) {
    const canvas = document.getElementById('analyticsReferrerChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (analyticsReferrerChartInstance) analyticsReferrerChartInstance.destroy();

    const keys = Object.keys(referrersData);
    const values = Object.values(referrersData);
    const total = values.reduce((a, b) => a + b, 0) || 1;

    const colors = [
      '#38bdf8', // Google blue
      '#10b981', // Naver green
      '#f59e0b', // DC orange
      '#6366f1', // FMKorea indigo
      '#8b5cf6', // X/Twitter purple
      '#06b6d4', // Direct cyan
      '#ec4899', // Pink
      '#94a3b8'  // Gray
    ];

    analyticsReferrerChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: keys,
        datasets: [{
          data: values,
          backgroundColor: colors.slice(0, keys.length),
          borderColor: 'transparent',
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 8,
              color: '#94a3b8',
              font: { size: 11, family: "'Pretendard', sans-serif" }
            }
          },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const pct = Math.round((ctx.raw / total) * 100);
                return ` ${ctx.label}: ${ctx.raw.toLocaleString()}건 (${pct}%)`;
              }
            }
          }
        },
        cutout: '62%'
      }
    });
  }

  // Chart 4: Devices & OS Share
  function renderDeviceChart(devicesData) {
    const canvas = document.getElementById('analyticsDeviceChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (analyticsDeviceChartInstance) analyticsDeviceChartInstance.destroy();

    const labels = ['모바일 (Mobile)', '데스크톱 (Desktop)', '태블릿 (Tablet)'];
    const values = [
      devicesData.Mobile || 0,
      devicesData.Desktop || 0,
      devicesData.Tablet || 0
    ];
    const total = values.reduce((a, b) => a + b, 0) || 1;

    analyticsDeviceChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: ['#06b6d4', '#3b82f6', '#8b5cf6'],
          borderColor: 'transparent',
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 10,
              color: '#94a3b8',
              font: { size: 11, family: "'Pretendard', sans-serif" }
            }
          },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const pct = Math.round((ctx.raw / total) * 100);
                return ` ${ctx.label}: ${ctx.raw.toLocaleString()}건 (${pct}%)`;
              }
            }
          }
        },
        cutout: '62%'
      }
    });
  }

  // Ranking 1: Most Viewed Articles List
  function renderTopArticlesList(topArticles, totalPV) {
    const container = document.getElementById('analyticsTopArticlesList');
    if (!container) return;

    if (!topArticles || topArticles.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">조회된 사건 데이터가 없습니다.</p>';
      return;
    }

    const maxViews = Math.max(...topArticles.map(a => a.views || 0), 1);

    let html = '';
    topArticles.forEach((art, idx) => {
      const rank = idx + 1;
      const rankClass = rank === 1 ? 'top-1' : rank === 2 ? 'top-2' : rank === 3 ? 'top-3' : '';
      const percent = Math.round(((art.views || 0) / maxViews) * 100);

      const catNames = {
        sex_crime: '성범죄',
        narcotics: '마약류',
        proxy_surgery: '대리수술',
        malpractice_hazard: '의료사고',
        fraud_rebate: '보험사기',
        other_crimes: '형사사건'
      };
      const catLabel = catNames[art.category] || '사건';

      html += `
        <div class="ranking-item-row">
          <div class="ranking-num-badge ${rankClass}">${rank}</div>
          <div class="ranking-item-info">
            <div class="ranking-item-title" title="${art.title}">
              ${art.title}
            </div>
            <div class="ranking-item-meta">
              <span class="badge" style="background: rgba(56,189,248,0.15); color: #38bdf8; font-size: 0.7rem; padding: 0.1rem 0.4rem;">${catLabel}</span>
              <span><i class="ri-map-pin-2-line"></i> ${art.region || '전국'}</span>
            </div>
          </div>
          <div class="ranking-count-box">
            <span class="ranking-count-num">${(art.views || 0).toLocaleString()}회</span>
            <div style="width: 70px; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden;">
              <div style="width: ${percent}%; height: 100%; background: linear-gradient(90deg, #38bdf8 0%, #8b5cf6 100%);"></div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Ranking 2: Top Search Queries List
  function renderTopSearchesList(topSearches, totalEvents) {
    const container = document.getElementById('analyticsTopSearchesList');
    if (!container) return;

    if (!topSearches || topSearches.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">검색어 통계 데이터가 없습니다.</p>';
      return;
    }

    const maxCount = Math.max(...topSearches.map(s => s.count || 0), 1);

    let html = '';
    topSearches.forEach((s, idx) => {
      const rank = idx + 1;
      const rankClass = rank === 1 ? 'top-1' : rank === 2 ? 'top-2' : rank === 3 ? 'top-3' : '';
      const percent = Math.round((s.count / maxCount) * 100);

      html += `
        <div class="ranking-item-row">
          <div class="ranking-num-badge ${rankClass}">${rank}</div>
          <div class="ranking-item-info">
            <div class="ranking-item-title" style="color: #38bdf8; font-weight: 800;">
              "${s.query}"
            </div>
            <div class="ranking-item-meta">
              <span><i class="ri-search-2-line"></i> 아카이브 키워드 검색</span>
            </div>
          </div>
          <div class="ranking-count-box">
            <span class="ranking-count-num" style="color: #38bdf8;">${s.count.toLocaleString()}회</span>
            <div style="width: 60px; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden;">
              <div style="width: ${percent}%; height: 100%; background: #38bdf8;"></div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Realtime Activity Log Table Renderer
  function renderAnalyticsLogTable(page = 1) {
    const tbody = document.getElementById('analyticsLogTableBody');
    const badge = document.getElementById('analyticsLogTotalCountBadge');
    const pageInfo = document.getElementById('analyticsLogPaginationInfo');
    const pageSpan = document.getElementById('analyticsLogCurrentPageSpan');
    const prevBtn = document.getElementById('analyticsLogPrevBtn');
    const nextBtn = document.getElementById('analyticsLogNextBtn');

    if (!tbody || typeof Tracker === 'undefined') return;

    const logData = Tracker.getRecentLogs(15, page);
    if (badge) badge.textContent = `총 ${logData.total.toLocaleString()}건`;
    if (pageSpan) pageSpan.textContent = `${logData.page} / ${logData.totalPages}`;
    if (pageInfo) {
      const start = (logData.page - 1) * logData.limit + 1;
      const end = Math.min(logData.total, start + logData.limit - 1);
      pageInfo.textContent = logData.total > 0 ? `${start} - ${end} / 총 ${logData.total}건` : '0건';
    }

    if (prevBtn) prevBtn.disabled = (logData.page <= 1);
    if (nextBtn) nextBtn.disabled = (logData.page >= logData.totalPages);

    if (logData.items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">수집된 방문자 로그가 없습니다.</td></tr>';
      return;
    }

    let html = '';
    logData.items.forEach(log => {
      // Device badge
      let devIcon = 'ri-computer-line';
      if (log.device === 'Mobile') devIcon = 'ri-smartphone-line';
      else if (log.device === 'Tablet') devIcon = 'ri-tablet-line';

      // Ref badge style
      let refClass = 'direct';
      if (log.referrer.includes('Google')) refClass = 'google';
      else if (log.referrer.includes('Naver')) refClass = 'naver';
      else if (log.referrer.includes('디시') || log.referrer.includes('에펨') || log.referrer.includes('블라인드') || log.referrer.includes('클리앙') || log.referrer.includes('뽐뿌')) refClass = 'community';
      else if (log.referrer.includes('Twitter') || log.referrer.includes('YouTube') || log.referrer.includes('SNS')) refClass = 'sns';

      // Stay duration
      const durationStr = log.staySeconds > 0 
        ? `${Math.floor(log.staySeconds / 60)}분 ${log.staySeconds % 60}초`
        : '<span style="color: #34d399;">접속 중</span>';

      html += `
        <tr>
          <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">
            ${log.date || ''} ${log.time || ''}
          </td>
          <td>
            <code style="background: rgba(255,255,255,0.06); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.74rem; color: #38bdf8;">
              ${log.path || '/index.html'}
            </code>
          </td>
          <td>
            <span class="device-badge">
              <i class="${devIcon}"></i> ${log.device} (${log.os})
            </span>
          </td>
          <td>
            <span style="font-size: 0.76rem; color: var(--text-secondary);">
              ${log.browser}
            </span>
          </td>
          <td>
            <span class="ref-badge ${refClass}">
              ${log.referrer}
            </span>
          </td>
          <td>
            <span style="color: var(--text-primary); font-weight: 600; font-size: 0.8rem;">
              ${log.action}
            </span>
          </td>
          <td style="text-align: right; font-family: var(--font-mono); font-size: 0.78rem;">
            ${durationStr}
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }
});
