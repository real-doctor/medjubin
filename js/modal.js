/**
 * 사건 상세 및 제보 모달 제어 모듈 (modal.js)
 */

const ModalModule = (() => {
  const detailModal = document.getElementById('detailModal');
  const submitModal = document.getElementById('submitModal');
  const disclaimerModal = document.getElementById('disclaimerModal');
  const toastElement = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  function initModals() {
    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    // Close buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    // News Submission Form
    const submitForm = document.getElementById('newsSubmitForm');
    if (submitForm) {
      submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('언론 보도 제보가 정상적으로 접수되었습니다. 검토 후 반영됩니다.');
        submitForm.reset();
        closeAllModals();
      });
    }
  }

  function openDetailModal(item) {
    if (!detailModal) return;

    // Badges & Header
    const catMeta = CATEGORY_META[item.category] || { label: item.categoryName, color: '#3b82f6' };
    const badgeHtml = `
      <span class="badge badge-${item.category}"><i class="${catMeta.icon}"></i> ${item.categoryName}</span>
      <span class="badge badge-region"><i class="ri-map-pin-2-fill"></i> ${item.region} ${item.district}</span>
      <span class="badge badge-specialty"><i class="ri-hospital-line"></i> ${item.specialty}</span>
    `;
    document.getElementById('modalBadges').innerHTML = badgeHtml;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDate').textContent = `${item.date} 보도`;

    // Case Summary
    document.getElementById('modalSummary').textContent = item.summary;

    // Legal Status
    document.getElementById('modalLegalStatus').textContent = item.legalStatus;
    document.getElementById('modalLicenseStatus').textContent = item.licenseImpact;

    // Timeline Steps
    const timelineContainer = document.getElementById('modalTimeline');
    if (item.timeline && item.timeline.length > 0) {
      let timelineHtml = '<div class="timeline-list">';
      item.timeline.forEach(step => {
        timelineHtml += `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${step.date}</div>
            <div class="timeline-stage">${step.stage}</div>
            <div class="timeline-desc">${step.desc}</div>
          </div>
        `;
      });
      timelineHtml += '</div>';
      timelineContainer.innerHTML = timelineHtml;
    } else {
      timelineContainer.innerHTML = '<p class="text-muted">진행 경과 정보가 준비 중입니다.</p>';
    }

    // Sources
    const sourcesContainer = document.getElementById('modalSources');
    if (item.sources && item.sources.length > 0) {
      let sourcesHtml = '<div class="sources-list">';
      item.sources.forEach(src => {
        sourcesHtml += `
          <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-item">
            <span class="source-media-badge">${src.media}</span>
            <span class="source-title">${src.title}</span>
            <span class="source-date">${src.date} <i class="ri-external-link-line"></i></span>
          </a>
        `;
      });
      sourcesHtml += '</div>';
      sourcesContainer.innerHTML = sourcesHtml;
    } else {
      sourcesContainer.innerHTML = '<p class="text-muted">등록된 기사 출처가 없습니다.</p>';
    }

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    if (item.tags && item.tags.length > 0) {
      let tagsHtml = '';
      item.tags.forEach(t => {
        tagsHtml += `<span class="active-tag">#${t}</span> `;
      });
      tagsContainer.innerHTML = tagsHtml;
    }

    // Share Button
    const shareBtn = document.getElementById('modalShareBtn');
    if (shareBtn) {
      shareBtn.onclick = () => {
        const shareText = `[의주빈 아카이브] ${item.title}\n출처: ${item.sources[0]?.media || '언론 보도'}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('사건 링크가 클립보드에 복사되었습니다.');
          });
        }
      };
    }

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openSubmitModal() {
    if (submitModal) {
      submitModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function openDisclaimerModal() {
    if (disclaimerModal) {
      disclaimerModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  function showToast(message) {
    if (!toastElement || !toastText) return;
    toastText.textContent = message;
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3500);
  }

  return {
    initModals,
    openDetailModal,
    openSubmitModal,
    openDisclaimerModal,
    closeAllModals,
    showToast
  };
})();
