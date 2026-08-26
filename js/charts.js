/**
 * 통계 및 데이터 시각화 차트 모듈 (charts.js)
 * Chart.js 라이브러리 연동
 */

const ChartsModule = (() => {
  let categoryChartInstance = null;
  let yearlyChartInstance = null;
  let regionChartInstance = null;
  let dispositionChartInstance = null;

  function initCharts(data) {
    if (typeof Chart === 'undefined') return;

    // Dark/Light Theme Colors for Chart.js
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const textColor = isDark ? '#94a3b8' : '#475569';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    Chart.defaults.color = textColor;
    Chart.defaults.font.family = "'Pretendard', sans-serif";

    renderCategoryChart(data);
    renderYearlyChart(data, textColor, gridColor);
    renderRegionChart(data, textColor, gridColor);
    renderDispositionChart(data);
  }

  function renderCategoryChart(data) {
    const canvas = document.getElementById('categoryChartCanvas');
    if (!canvas) return;
    if (categoryChartInstance) categoryChartInstance.destroy();

    const counts = {};
    Object.keys(CATEGORY_META).forEach(k => {
      if (k !== 'all') counts[k] = 0;
    });

    data.forEach(item => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    const labels = Object.keys(counts).map(k => CATEGORY_META[k].label);
    const values = Object.values(counts);
    const colors = Object.keys(counts).map(k => CATEGORY_META[k].color);

    categoryChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
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
            position: 'bottom',
            labels: { boxWidth: 12, padding: 12, font: { size: 11 } }
          },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                return ` ${ctx.label}: ${ctx.raw}건 (${Math.round((ctx.raw / data.length) * 100)}%)`;
              }
            }
          }
        },
        cutout: '68%'
      }
    });
  }

  function renderYearlyChart(data, textColor, gridColor) {
    const canvas = document.getElementById('yearlyChartCanvas');
    if (!canvas) return;
    if (yearlyChartInstance) yearlyChartInstance.destroy();

    const yearCounts = {};
    data.forEach(item => {
      yearCounts[item.year] = (yearCounts[item.year] || 0) + 1;
    });

    const years = Object.keys(yearCounts).sort();
    const counts = years.map(y => yearCounts[y]);

    yearlyChartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: years.map(y => `${y}년`),
        datasets: [{
          label: '보도 사건 수',
          data: counts,
          backgroundColor: '#3b82f6',
          borderRadius: 6,
          maxBarThickness: 36
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { 
            grid: { color: gridColor }, 
            ticks: { color: textColor, stepSize: 1 },
            beginAtZero: true 
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  function renderRegionChart(data, textColor, gridColor) {
    const canvas = document.getElementById('regionChartCanvas');
    if (!canvas) return;
    if (regionChartInstance) regionChartInstance.destroy();

    const regCounts = {};
    data.forEach(item => {
      regCounts[item.region] = (regCounts[item.region] || 0) + 1;
    });

    const sortedRegions = Object.entries(regCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    regionChartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: sortedRegions.map(r => r[0]),
        datasets: [{
          label: '발생 건수',
          data: sortedRegions.map(r => r[1]),
          backgroundColor: '#f43f5e',
          borderRadius: 6,
          maxBarThickness: 24
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 1 }, beginAtZero: true },
          y: { grid: { display: false }, ticks: { color: textColor } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  function renderDispositionChart(data) {
    const canvas = document.getElementById('dispositionChartCanvas');
    if (!canvas) return;
    if (dispositionChartInstance) dispositionChartInstance.destroy();

    const counts = {
      "면허 취소/확정": 0,
      "면허 정지/자격정지": 0,
      "면허 유지/벌금형": 0,
      "재판/수사 진행 중": 0
    };

    data.forEach(item => {
      const imp = item.licenseImpact || "";
      if (imp.includes("취소")) counts["면허 취소/확정"]++;
      else if (imp.includes("정지")) counts["면허 정지/자격정지"]++;
      else if (imp.includes("유지") || imp.includes("처분 없음")) counts["면허 유지/벌금형"]++;
      else counts["재판/수사 진행 중"]++;
    });

    dispositionChartInstance = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: Object.keys(counts),
        datasets: [{
          data: Object.values(counts),
          backgroundColor: ['#ef4444', '#f59e0b', '#10b981', '#64748b'],
          borderColor: 'transparent'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 10, font: { size: 11 } }
          }
        }
      }
    });
  }

  function updateCharts(data) {
    initCharts(data);
  }

  return {
    initCharts,
    updateCharts
  };
})();
