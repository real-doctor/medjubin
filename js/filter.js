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
    return dataset.filter(item => {
      // 1. Search Query (Title, Summary, Tags, Specialty, District)
      if (currentFilters.search) {
        const query = currentFilters.search.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSummary = item.summary.toLowerCase().includes(query);
        const matchSpecialty = item.specialty.toLowerCase().includes(query);
        const matchDistrict = item.district.toLowerCase().includes(query);
        const matchTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        const matchLegal = item.legalStatus.toLowerCase().includes(query);

        if (!matchTitle && !matchSummary && !matchSpecialty && !matchDistrict && !matchTags && !matchLegal) {
          return false;
        }
      }

      // 2. Category
      if (currentFilters.category !== 'all' && item.category !== currentFilters.category) {
        return false;
      }

      // 3. Region
      if (currentFilters.region !== 'all' && item.region !== currentFilters.region) {
        return false;
      }

      // 4. Year
      if (currentFilters.year !== 'all' && String(item.year) !== String(currentFilters.year)) {
        return false;
      }

      // 5. License / Legal Disposition
      if (currentFilters.licenseStatus !== 'all') {
        const impact = item.licenseImpact || '';
        if (currentFilters.licenseStatus === 'revoked' && !impact.includes('취소')) return false;
        if (currentFilters.licenseStatus === 'suspended' && !impact.includes('정지')) return false;
        if (currentFilters.licenseStatus === 'ongoing' && !impact.includes('진행')) return false;
        if (currentFilters.licenseStatus === 'none' && !impact.includes('유지') && !impact.includes('처분 없음')) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      if (currentFilters.sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
  }

  function calculateRegionCounts(dataset) {
    const counts = {};
    REGIONS_LIST.forEach(r => counts[r] = 0);
    dataset.forEach(item => {
      if (counts[item.region] !== undefined) {
        counts[item.region]++;
      }
    });
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
