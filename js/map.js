/**
 * 대한민국 17개 시도 인터랙티브 지도 모듈 (map.js)
 */

const MapModule = (() => {
  // 17개 시도 SVG 폴리곤/패스 좌표 (1000 x 1200 뷰박스 기준 상대 좌표)
  const REGION_PATHS = [
    {
      id: "서울",
      name: "서울",
      d: "M 320 280 L 375 270 L 400 300 L 380 340 L 330 340 L 310 310 Z",
      cx: 350, cy: 310
    },
    {
      id: "경기",
      name: "경기",
      d: "M 280 200 L 410 180 L 460 250 L 440 430 L 360 440 L 310 400 L 260 330 L 270 250 Z M 320 280 L 310 310 L 330 340 L 380 340 L 400 300 L 375 270 Z M 260 290 L 290 290 L 290 330 L 260 330 Z",
      cx: 410, cy: 370
    },
    {
      id: "인천",
      name: "인천",
      d: "M 230 270 L 290 280 L 290 340 L 240 350 L 210 310 Z",
      cx: 255, cy: 310
    },
    {
      id: "강원",
      name: "강원",
      d: "M 410 170 L 590 120 L 730 250 L 680 430 L 550 420 L 460 250 Z",
      cx: 560, cy: 260
    },
    {
      id: "충북",
      name: "충북",
      d: "M 460 380 L 550 390 L 580 480 L 520 620 L 440 560 L 450 460 Z",
      cx: 500, cy: 490
    },
    {
      id: "충남",
      name: "충남",
      d: "M 240 420 L 380 420 L 410 520 L 360 620 L 220 560 L 210 470 Z M 380 490 L 420 490 L 420 530 L 380 530 Z",
      cx: 310, cy: 500
    },
    {
      id: "세종",
      name: "세종",
      d: "M 390 490 L 425 490 L 425 525 L 390 525 Z",
      cx: 407, cy: 508
    },
    {
      id: "대전",
      name: "대전",
      d: "M 415 540 L 460 540 L 455 585 L 410 580 Z",
      cx: 435, cy: 562
    },
    {
      id: "경북",
      name: "경북",
      d: "M 550 420 L 680 430 L 780 520 L 770 700 L 660 740 L 580 660 L 560 520 Z M 610 650 L 670 650 L 670 710 L 610 710 Z",
      cx: 660, cy: 570
    },
    {
      id: "대구",
      name: "대구",
      d: "M 610 655 L 675 655 L 675 715 L 610 715 Z",
      cx: 642, cy: 685
    },
    {
      id: "전북",
      name: "전북",
      d: "M 250 590 L 440 590 L 470 710 L 360 770 L 240 730 Z",
      cx: 350, cy: 680
    },
    {
      id: "광주",
      name: "광주",
      d: "M 310 790 L 360 790 L 355 835 L 305 830 Z",
      cx: 332, cy: 812
    },
    {
      id: "전남",
      name: "전남",
      d: "M 230 740 L 380 750 L 450 810 L 430 950 L 260 970 L 190 850 Z M 310 790 L 360 790 L 355 835 L 305 830 Z",
      cx: 300, cy: 890
    },
    {
      id: "경남",
      name: "경남",
      d: "M 480 710 L 650 720 L 680 830 L 560 930 L 450 860 Z M 670 780 L 730 780 L 730 840 L 670 840 Z M 680 720 L 740 720 L 740 770 L 680 770 Z",
      cx: 560, cy: 800
    },
    {
      id: "울산",
      name: "울산",
      d: "M 700 710 L 765 710 L 760 765 L 695 760 Z",
      cx: 730, cy: 737
    },
    {
      id: "부산",
      name: "부산",
      d: "M 675 790 L 745 790 L 735 845 L 665 840 Z",
      cx: 705, cy: 817
    },
    {
      id: "제주",
      name: "제주",
      d: "M 230 1060 C 230 1020, 390 1020, 390 1060 C 390 1100, 230 1100, 230 1060 Z",
      cx: 310, cy: 1060
    }
  ];

  let selectedRegion = null;
  let onRegionSelectCallback = null;

  function renderMap(containerId, regionCounts, onSelect) {
    const container = document.getElementById(containerId);
    if (!container) return;
    onRegionSelectCallback = onSelect;

    let svgHtml = `
      <svg class="korea-map-svg" viewBox="150 100 700 1050" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g class="regions-group">
    `;

    REGION_PATHS.forEach(reg => {
      const count = regionCounts[reg.id] || 0;
      const isActive = selectedRegion === reg.id ? 'active' : '';
      
      svgHtml += `
        <path id="region-path-${reg.id}" class="map-region-path ${isActive}" d="${reg.d}" data-region="${reg.id}" title="${reg.name}: ${count}건"></path>
      `;
    });

    // Draw Labels and Counts on top
    REGION_PATHS.forEach(reg => {
      const count = regionCounts[reg.id] || 0;
      svgHtml += `
        <text class="map-label-text" x="${reg.cx}" y="${reg.cy - 4}">${reg.name}</text>
        <circle cx="${reg.cx}" cy="${reg.cy + 10}" r="9" fill="${count > 0 ? '#ef4444' : '#475569'}" />
        <text class="map-count-badge" x="${reg.cx}" y="${reg.cy + 13}">${count}</text>
      `;
    });

    svgHtml += `</g></svg>`;
    container.innerHTML = svgHtml;

    // Attach Event Listeners
    container.querySelectorAll('.map-region-path').forEach(path => {
      path.addEventListener('click', (e) => {
        const region = e.currentTarget.getAttribute('data-region');
        toggleRegion(region);
      });
    });

    renderRegionChips(regionCounts);
  }

  function renderRegionChips(regionCounts) {
    const chipsContainer = document.getElementById('regionChipsGrid');
    if (!chipsContainer) return;

    let html = '';
    REGIONS_LIST.forEach(reg => {
      const count = regionCounts[reg] || 0;
      const activeClass = selectedRegion === reg ? 'active' : '';
      html += `
        <button class="region-chip-btn ${activeClass}" data-region="${reg}">
          <span>${reg}</span>
          <span class="region-chip-count">${count}</span>
        </button>
      `;
    });
    chipsContainer.innerHTML = html;

    chipsContainer.querySelectorAll('.region-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const region = btn.getAttribute('data-region');
        toggleRegion(region);
      });
    });
  }

  function toggleRegion(region) {
    if (selectedRegion === region) {
      selectedRegion = null;
    } else {
      selectedRegion = region;
    }
    updateSelectionVisuals();
    if (onRegionSelectCallback) {
      onRegionSelectCallback(selectedRegion);
    }
  }

  function setRegion(region) {
    selectedRegion = region;
    updateSelectionVisuals();
  }

  function updateSelectionVisuals() {
    document.querySelectorAll('.map-region-path').forEach(p => {
      const r = p.getAttribute('data-region');
      if (r === selectedRegion) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    document.querySelectorAll('.region-chip-btn').forEach(b => {
      const r = b.getAttribute('data-region');
      if (r === selectedRegion) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  return {
    renderMap,
    setRegion,
    getSelectedRegion: () => selectedRegion
  };
})();
