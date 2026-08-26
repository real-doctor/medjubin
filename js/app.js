document.addEventListener('DOMContentLoaded', () => {
  // Master Data Loader (ARCHIVE_DATA 기반 안전 로딩, 발행 데이터 및 시민 제보 기사 병합)
  function loadMasterData() {
    let baseData = (typeof ARCHIVE_DATA !== 'undefined' && Array.isArray(ARCHIVE_DATA)) ? [...ARCHIVE_DATA] : [];
    const customDataStr = localStorage.getItem('archive_published_data');
    if (customDataStr) {
      try {
        const parsed = JSON.parse(customDataStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const idSet = new Set(baseData.map(d => d.id));
          parsed.forEach(item => {
            if (item && item.id && !idSet.has(item.id)) {
              baseData.unshift(item);
              idSet.add(item.id);
            }
          });
        }
      } catch (e) {
        console.warn('Custom data parse error:', e);
      }
    }

    // 시민 제보 기사 로드
    const userSubmissionsStr = localStorage.getItem('archive_user_submissions');
    if (userSubmissionsStr) {
      try {
        const userSubs = JSON.parse(userSubmissionsStr);
        if (Array.isArray(userSubs) && userSubs.length > 0) {
          const idSet = new Set(baseData.map(d => d.id));
          userSubs.forEach(item => {
            if (item && item.id && !idSet.has(item.id)) {
              baseData.unshift(item);
              idSet.add(item.id);
            }
          });
        }
      } catch (e) {
        console.warn('User submissions parse error:', e);
      }
    }

    return baseData;
  }

  let rawArchiveData = loadMasterData();

  // 신고 기준치(기본 20회) 이상 누적된 기사 자동 제외
  function getVisibleArticles(data) {
    if (!Array.isArray(data)) return [];
    const threshold = parseInt(localStorage.getItem('report_hide_threshold') || '20', 10);
    let reports = {};
    try {
      reports = JSON.parse(localStorage.getItem('archive_report_counts') || '{}');
    } catch (e) {}

    return data.filter(item => {
      if (!item) return false;
      const count = reports[item.id] || 0;
      return count < threshold;
    });
  }

  let activeArchiveData = getVisibleArticles(rawArchiveData);
  let currentDataset = [...activeArchiveData];
  let currentViewMode = 'list'; // 'list' or 'dashboard'
  let searchDebounceTimer = null;
  let currentPage = 1;
  const ITEMS_PER_PAGE = 24;

  // Global Feed Refresher (신고 등 상태 변경 시 호출)
  window.refreshArchiveFeed = () => {
    rawArchiveData = loadMasterData();
    activeArchiveData = getVisibleArticles(rawArchiveData);
    renderKPIStats();
    applyFiltersAndRender();
  };

  // Initialize
  initTheme();
  initEventListeners();
  ModalModule.initModals();
  FilterModule.resetFilters();
  renderKPIStats();
  applyFiltersAndRender();

  // Double check on window load
  window.addEventListener('load', () => {
    if (activeArchiveData.length === 0) {
      window.refreshArchiveFeed();
    } else {
      renderKPIStats();
    }
  });

  // 1. Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('archive_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('archive_theme', next);
        updateThemeIcon(next);
        if (currentViewMode === 'dashboard') {
          ChartsModule.updateCharts(currentDataset);
        }
      });
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) {
      icon.className = theme === 'light' ? 'ri-moon-fill' : 'ri-sun-fill';
    }
  }

  // 2. KPI Summary Statistics (정식 검증 보도 기사만 집계, 제보 기사는 제외)
  function renderKPIStats() {
    const verifiedData = activeArchiveData.filter(item => !item.isUserSubmitted && item.category !== 'user_submitted');
    const totalCount = verifiedData.length;
    let sexCount = 0;
    let narcoticsCount = 0;
    let proxyCount = 0;
    let malpracticeCount = 0;
    let fraudCount = 0;

    verifiedData.forEach(item => {
      if (item.category === 'sex_crime') sexCount++;
      else if (item.category === 'narcotics') narcoticsCount++;
      else if (item.category === 'proxy_surgery') proxyCount++;
      else if (item.category === 'malpractice_hazard') malpracticeCount++;
      else if (item.category === 'fraud_rebate') fraudCount++;
    });

    document.getElementById('statTotalCount').textContent = totalCount;
    document.getElementById('statSexCount').textContent = sexCount;
    document.getElementById('statNarcoticsCount').textContent = narcoticsCount;
    document.getElementById('statProxyCount').textContent = proxyCount;
    document.getElementById('statMalpracticeCount').textContent = malpracticeCount;
    document.getElementById('statFraudCount').textContent = fraudCount;
  }

  // 3. Event Listeners
  function initEventListeners() {
    // Search Input with Debounce
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          FilterModule.setFilter('search', e.target.value);
          currentPage = 1;
          applyFiltersAndRender();
        }, 200);
      });
    }

    // Category Pill Buttons
    document.querySelectorAll('.cat-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        FilterModule.setFilter('category', cat);
        currentPage = 1;
        applyFiltersAndRender();
      });
    });

    // Select Dropdowns
    const regionSelect = document.getElementById('regionSelect');
    if (regionSelect) {
      regionSelect.addEventListener('change', (e) => {
        FilterModule.setFilter('region', e.target.value);
        MapModule.setRegion(e.target.value === 'all' ? null : e.target.value);
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    const yearSelect = document.getElementById('yearSelect');
    if (yearSelect) {
      yearSelect.addEventListener('change', (e) => {
        FilterModule.setFilter('year', e.target.value);
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    const licenseSelect = document.getElementById('licenseSelect');
    if (licenseSelect) {
      licenseSelect.addEventListener('change', (e) => {
        FilterModule.setFilter('licenseStatus', e.target.value);
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        FilterModule.setFilter('sortBy', e.target.value);
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    // Reset Filters Button
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        resetAllFilters();
      });
    }

    const mapResetBtn = document.getElementById('mapResetBtn');
    if (mapResetBtn) {
      mapResetBtn.addEventListener('click', () => {
        FilterModule.setFilter('region', 'all');
        MapModule.setRegion(null);
        if (regionSelect) regionSelect.value = 'all';
        currentPage = 1;
        applyFiltersAndRender();
      });
    }

    // View Switcher (Feed vs Dashboard)
    const viewListBtn = document.getElementById('viewListBtn');
    const viewDashboardBtn = document.getElementById('viewDashboardBtn');
    const listViewContainer = document.getElementById('listViewContainer');
    const dashboardViewContainer = document.getElementById('dashboardViewContainer');

    if (viewListBtn && viewDashboardBtn) {
      viewListBtn.addEventListener('click', () => {
        viewListBtn.classList.add('active');
        viewDashboardBtn.classList.remove('active');
        listViewContainer.style.display = 'grid';
        dashboardViewContainer.style.display = 'none';
        currentViewMode = 'list';
      });

      viewDashboardBtn.addEventListener('click', () => {
        viewDashboardBtn.classList.add('active');
        viewListBtn.classList.remove('active');
        listViewContainer.style.display = 'none';
        dashboardViewContainer.style.display = 'flex';
        currentViewMode = 'dashboard';
        ChartsModule.initCharts(currentDataset);
      });
    }

    // Header Action Buttons
    const openSubmitModalBtn = document.getElementById('openSubmitModalBtn');
    if (openSubmitModalBtn) {
      openSubmitModalBtn.addEventListener('click', () => ModalModule.openSubmitModal());
    }

    const openDisclaimerBtn = document.getElementById('openDisclaimerBtn');
    if (openDisclaimerBtn) {
      openDisclaimerBtn.addEventListener('click', () => ModalModule.openDisclaimerModal());
    }

    // Secret Admin Gate Link (Footer 'All Rights Reserved.')
    const secretAdminLink = document.getElementById('secretAdminLink');
    if (secretAdminLink) {
      secretAdminLink.addEventListener('click', (e) => {
        e.preventDefault();
        ModalModule.openAdminAuthModal();
      });
    }

    // Secret Admin Password Verification Form
    const adminAuthForm = document.getElementById('adminAuthForm');
    if (adminAuthForm) {
      adminAuthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwdInput = document.getElementById('adminSecretPasswordInput');
        const errBox = document.getElementById('adminAuthErrorMsg');
        const enteredPassword = pwdInput ? pwdInput.value.trim() : '';

        if (enteredPassword === 'votm1212!') {
          ModalModule.showToast('관리자 인증에 성공했습니다. 스튜디오로 이동합니다.');
          setTimeout(() => {
            window.location.href = 'admin.html';
          }, 400);
        } else {
          if (errBox) errBox.style.display = 'block';
          if (pwdInput) {
            pwdInput.select();
            pwdInput.focus();
          }
        }
      });
    }
  }

  // 4. Filtering and Rendering
  function applyFiltersAndRender() {
    const filtered = FilterModule.filterData(activeArchiveData);
    currentDataset = filtered;

    // Render Cards & Pagination
    renderCards(filtered);

    // Update Filter Status
    updateFilterStatus(filtered.length);

    // Update Interactive Map
    const regionCounts = FilterModule.calculateRegionCounts(filtered);
    MapModule.renderMap('koreaMapContainer', regionCounts, (selectedReg) => {
      const reg = selectedReg || 'all';
      FilterModule.setFilter('region', reg);
      const regionSelect = document.getElementById('regionSelect');
      if (regionSelect) regionSelect.value = reg;
      currentPage = 1;
      applyFiltersAndRender();
    });

    // Update Charts if active
    if (currentViewMode === 'dashboard') {
      ChartsModule.updateCharts(filtered);
    }
  }

  function renderCards(data) {
    const container = document.getElementById('incidentCardsGrid');
    const paginationContainer = document.getElementById('paginationContainer');
    if (!container) return;

    if (data.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="ri-search-eye-line"></i>
          <h3>일치하는 보도 사건이 없습니다</h3>
          <p>검색어나 필터 조건을 변경하여 다시 확인해보세요.</p>
          <button class="btn btn-secondary mt-3" style="margin-top: 1rem;" onclick="resetAllFilters()">
            <i class="ri-refresh-line"></i> 필터 초기화
          </button>
        </div>
      `;
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    // Pagination Slicing
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    let html = '';
    pageItems.forEach(item => {
      const catMeta = CATEGORY_META[item.category] || { label: item.categoryName, color: '#3b82f6' };
      const sourcesCount = item.sources ? item.sources.length : 0;
      
      html += `
        <div class="incident-card fade-in" data-id="${item.id}">
          <div>
            <div class="card-top-row">
              <div class="badge-group">
                <span class="badge badge-${item.category}">
                  <i class="${catMeta.icon}"></i> ${item.categoryName}
                </span>
                <span class="badge badge-region">
                  <i class="ri-map-pin-2-fill"></i> ${item.region}
                </span>
                <span class="badge badge-specialty">
                  ${item.specialty}
                </span>
              </div>
              <span class="card-date"><i class="ri-calendar-line"></i> ${item.date}</span>
            </div>

            <h3 class="card-title">${item.title}</h3>
            <p class="card-summary">${item.summary}</p>
          </div>

          <div class="card-bottom-row">
            <span class="legal-status-pill" title="${item.legalStatus}">
              <i class="ri-scales-3-line"></i> ${item.legalStatus}
            </span>
            <span class="card-sources-count">
              <i class="ri-newspaper-line"></i> 보도 ${sourcesCount}건
            </span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Render Pagination Controls
    renderPagination(totalPages);

    // Attach card click handlers
    container.querySelectorAll('.incident-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const item = activeArchiveData.find(d => d.id === id);
        if (item) {
          ModalModule.openDetailModal(item);
        }
      });
    });
  }

  function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('paginationContainer');
    if (!paginationContainer || totalPages <= 1) {
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    let pagHtml = `
      <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">
        <i class="ri-arrow-left-s-line"></i>
      </button>
    `;

    // Window of pages
    const maxVisible = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      pagHtml += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
      if (startPage > 2) pagHtml += `<span style="color: var(--text-muted); padding: 0 0.25rem;">...</span>`;
    }

    for (let p = startPage; p <= endPage; p++) {
      pagHtml += `
        <button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="goToPage(${p})">
          ${p}
        </button>
      `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pagHtml += `<span style="color: var(--text-muted); padding: 0 0.25rem;">...</span>`;
      pagHtml += `<button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    pagHtml += `
      <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    `;

    paginationContainer.innerHTML = pagHtml;
  }

  window.goToPage = (page) => {
    currentPage = page;
    const filtered = FilterModule.filterData(activeArchiveData);
    renderCards(filtered);
    const container = document.getElementById('incidentCardsGrid');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function updateFilterStatus(resultCount) {
    const filters = FilterModule.getFilters();
    const countDisplay = document.getElementById('filteredCountDisplay');
    if (countDisplay) {
      countDisplay.textContent = `검색 결과: 총 ${resultCount}건의 보도 기록`;
    }

    const tagsContainer = document.getElementById('activeFilterTags');
    if (!tagsContainer) return;

    let tagsHtml = '';
    if (filters.search) {
      tagsHtml += `<span class="active-tag">검색: "${filters.search}" <i class="ri-close-line" onclick="clearSpecificFilter('search')"></i></span>`;
    }
    if (filters.category !== 'all') {
      const catLabel = CATEGORY_META[filters.category]?.label || filters.category;
      tagsHtml += `<span class="active-tag">유형: ${catLabel} <i class="ri-close-line" onclick="clearSpecificFilter('category')"></i></span>`;
    }
    if (filters.region !== 'all') {
      tagsHtml += `<span class="active-tag">지역: ${filters.region} <i class="ri-close-line" onclick="clearSpecificFilter('region')"></i></span>`;
    }
    if (filters.year !== 'all') {
      tagsHtml += `<span class="active-tag">연도: ${filters.year}년 <i class="ri-close-line" onclick="clearSpecificFilter('year')"></i></span>`;
    }
    if (filters.licenseStatus !== 'all') {
      tagsHtml += `<span class="active-tag">처분: ${filters.licenseStatus} <i class="ri-close-line" onclick="clearSpecificFilter('licenseStatus')"></i></span>`;
    }

    tagsContainer.innerHTML = tagsHtml;
  }

  // Global helper functions
  window.resetAllFilters = () => {
    FilterModule.resetFilters();
    MapModule.setRegion(null);
    currentPage = 1;

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.cat-pill-btn').forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-category') === 'all') b.classList.add('active');
    });

    const regionSelect = document.getElementById('regionSelect');
    if (regionSelect) regionSelect.value = 'all';

    const yearSelect = document.getElementById('yearSelect');
    if (yearSelect) yearSelect.value = 'all';

    const licenseSelect = document.getElementById('licenseSelect');
    if (licenseSelect) licenseSelect.value = 'all';

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'latest';

    applyFiltersAndRender();
  };

  window.clearSpecificFilter = (filterKey) => {
    currentPage = 1;
    if (filterKey === 'search') {
      FilterModule.setFilter('search', '');
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.value = '';
    } else if (filterKey === 'category') {
      FilterModule.setFilter('category', 'all');
      document.querySelectorAll('.cat-pill-btn').forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-category') === 'all') b.classList.add('active');
      });
    } else if (filterKey === 'region') {
      FilterModule.setFilter('region', 'all');
      MapModule.setRegion(null);
      const regionSelect = document.getElementById('regionSelect');
      if (regionSelect) regionSelect.value = 'all';
    } else if (filterKey === 'year') {
      FilterModule.setFilter('year', 'all');
      const yearSelect = document.getElementById('yearSelect');
      if (yearSelect) yearSelect.value = 'all';
    } else if (filterKey === 'licenseStatus') {
      FilterModule.setFilter('licenseStatus', 'all');
      const licenseSelect = document.getElementById('licenseSelect');
      if (licenseSelect) licenseSelect.value = 'all';
    }
    applyFiltersAndRender();
  };
});
