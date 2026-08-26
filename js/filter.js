/**
 * 다차원 검색 및 필터링 엔진 (filter.js)
 */

const FilterModule = (() => {
  let currentFilters = {
    search: '',
    category: 'all',
    region: 'all',
    year: 'all',
    licenseStatus: 'all',
    sortBy: 'latest' // 'latest', 'oldest'
  };

  function setFilter(key, value) {
    currentFilters[key] = value;
  }

  function getFilters() {
    return { ...currentFilters };
  }

  function resetFilters() {
    currentFilters = {
      search: '',
      category: 'all',
      region: 'all',
      year: 'all',
      licenseStatus: 'all',
      sortBy: 'latest'
    };
  }

  function filterData(dataset) {
    if (!Array.isArray(dataset)) return [];
    return dataset.filter(item => {
      if (!item) return false;

      // 1. Search Query (Title, Summary, Tags, Specialty, District, Legal)
      if (currentFilters.search) {
        const query = currentFilters.search.toLowerCase().trim();
        const matchTitle = (item.title || '').toLowerCase().includes(query);
        const matchSummary = (item.summary || '').toLowerCase().includes(query);
        const matchSpecialty = (item.specialty || '').toLowerCase().includes(query);
        const matchDistrict = (item.district || '').toLowerCase().includes(query);
        const matchTags = Array.isArray(item.tags) ? item.tags.some(tag => (tag || '').toLowerCase().includes(query)) : false;
        const matchLegal = (item.legalStatus || '').toLowerCase().includes(query);

        if (!matchTitle && !matchSummary && !matchSpecialty && !matchDistrict && !matchTags && !matchLegal) {
          return false;
        }
      }

      // 2. Category Handling (전체사건에서는 제보기사 제외, 제보기사 탭에서만 노출)
      if (!currentFilters.category || currentFilters.category === 'all') {
        if (item.isUserSubmitted || item.category === 'user_submitted') {
          return false;
        }
      } else if (currentFilters.category === 'user_submitted') {
        if (!item.isUserSubmitted && item.category !== 'user_submitted') {
          return false;
        }
      } else {
        if (item.category !== currentFilters.category || item.isUserSubmitted) {
          return false;
        }
      }

      // 3. Region
      if (currentFilters.region && currentFilters.region !== 'all' && item.region !== currentFilters.region) {
        return false;
      }

      // 4. Year
      if (currentFilters.year && currentFilters.year !== 'all' && String(item.year) !== String(currentFilters.year)) {
        return false;
      }

      // 5. License / Legal Disposition
      if (currentFilters.licenseStatus && currentFilters.licenseStatus !== 'all') {
        const impact = item.licenseImpact || '';
        if (currentFilters.licenseStatus === 'revoked' && !impact.includes('취소')) return false;
        if (currentFilters.licenseStatus === 'suspended' && !impact.includes('정지')) return false;
        if (currentFilters.licenseStatus === 'ongoing' && !impact.includes('진행')) return false;
        if (currentFilters.licenseStatus === 'none' && !impact.includes('유지') && !impact.includes('처분 없음')) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      const dateA = a && a.date ? new Date(a.date).getTime() : 0;
      const dateB = b && b.date ? new Date(b.date).getTime() : 0;
      if (currentFilters.sortBy === 'oldest') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }

  function calculateRegionCounts(dataset) {
    const counts = {};
    if (typeof REGIONS_LIST !== 'undefined' && Array.isArray(REGIONS_LIST)) {
      REGIONS_LIST.forEach(r => counts[r] = 0);
    }
    if (Array.isArray(dataset)) {
      dataset.forEach(item => {
        if (item && item.region && counts[item.region] !== undefined) {
          counts[item.region]++;
        }
      });
    }
    return counts;
  }

  return {
    setFilter,
    getFilters,
    resetFilters,
    filterData,
    calculateRegionCounts
  };
})();
