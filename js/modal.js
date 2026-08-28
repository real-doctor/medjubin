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

        const titleVal = (document.getElementById('submitNewsTitle')?.value || '').trim();
        const urlVal = (document.getElementById('submitNewsUrl')?.value || '').trim();
        const catVal = document.getElementById('submitNewsCategory')?.value || 'other_crimes';
        const regVal = document.getElementById('submitNewsRegion')?.value || '서울';
        const descVal = (document.getElementById('submitNewsDesc')?.value || '').trim();

        let mediaName = '시민 제보';
        const mediaMatch = titleVal.match(/^\[(.*?)\]/);
        if (mediaMatch) {
          mediaName = mediaMatch[1];
        }

        const catNames = {
          sex_crime: '성범죄',
          narcotics: '마약류/향정',
          proxy_surgery: '대리수술/무면허',
          malpractice_hazard: '의료사고',
          fraud_rebate: '보험사기/리베이트',
          other_crimes: '기타 형사범죄'
        };

        const newSubmittedItem = {
          id: `USER-SUBMIT-${Date.now()}`,
          title: titleVal,
          date: new Date().toISOString().slice(0, 10),
          year: new Date().getFullYear(),
          region: regVal,
          district: '제보 접수 지역',
          category: 'user_submitted',
          subCategory: catVal,
          categoryName: '제보 기사',
          specialty: `제보: ${catNames[catVal] || '기타'}`,
          summary: descVal || `${titleVal} (시민 언론 보도 제보 접수 건)`,
          timeline: [
            {
              stage: '시민 제보 접수',
              date: new Date().toISOString().slice(0, 7),
              desc: `언론 보도 제보 접수 완료 (${mediaName})`
            }
          ],
          legalStatus: '시민 제보 접수 (검토 대기)',
          licenseImpact: '검토 대기',
          sources: [
            {
              media: mediaName,
              title: titleVal,
              date: new Date().toISOString().slice(0, 10),
              url: urlVal
            }
          ],
          tags: ['제보기사', regVal, catNames[catVal] || '기타'],
          isUserSubmitted: true
        };

        let submissions = [];
        try {
          submissions = JSON.parse(localStorage.getItem('archive_user_submissions') || '[]');
        } catch(err) {}
        submissions.unshift(newSubmittedItem);
        localStorage.setItem('archive_user_submissions', JSON.stringify(submissions));

        showToast('기사 제보가 성공적으로 등록되었습니다. [제보 기사] 분류에서 확인하실 수 있습니다.');
        if (typeof Tracker !== 'undefined') {
          Tracker.logEvent('submit_news', { title: titleVal, media: mediaName });
        }
        submitForm.reset();
        closeAllModals();

        if (window.refreshArchiveFeed) {
          window.refreshArchiveFeed();
        }
      });
    }
  }

  function openDetailModal(item) {
    if (!detailModal) return;

    // Track article view event
    if (typeof Tracker !== 'undefined') {
      Tracker.logEvent('view_article', {
        id: item.id,
        title: item.title,
        category: item.category,
        region: item.region,
        specialty: item.specialty
      });
    }

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

    // Report 'Not Doctor Crime' Button
    const reportBtn = document.getElementById('modalReportNotDoctorCrimeBtn');
    const reportCountSpan = document.getElementById('modalReportCountNum');
    
    const getReportCounts = () => {
      try {
        return JSON.parse(localStorage.getItem('archive_report_counts') || '{}');
      } catch (e) {
        return {};
      }
    };
    
    const getHideThreshold = () => {
      return parseInt(localStorage.getItem('report_hide_threshold') || '20', 10);
    };

    const currentReports = getReportCounts();
    const currentCount = currentReports[item.id] || 0;
    const threshold = getHideThreshold();

    if (reportCountSpan) {
      reportCountSpan.textContent = currentCount;
    }

    if (reportBtn) {
      reportBtn.onclick = () => {
        const hasVotedKey = 'archive_has_reported_' + item.id;
        if (localStorage.getItem(hasVotedKey)) {
          showToast('이미 이 기사에 대해 \'의사 관련 범죄 아님\' 신고를 제출하셨습니다.');
          return;
        }

        if (confirm(`이 사건을 '의사 관련 범죄 아님 (오보/비의사 사건)'으로 신고하시겠습니까?\n\n* 누적 ${threshold}회 이상 신고 시 메인 목록에서 자동으로 제외됩니다.\n* 현재 누적 신고: ${currentCount}회`)) {
          const reports = getReportCounts();
          const newCount = (reports[item.id] || 0) + 1;
          reports[item.id] = newCount;
          localStorage.setItem('archive_report_counts', JSON.stringify(reports));
          localStorage.setItem(hasVotedKey, 'true');

          if (typeof Tracker !== 'undefined') {
            Tracker.logEvent('report_not_doctor', { id: item.id, title: item.title });
          }

          if (reportCountSpan) reportCountSpan.textContent = newCount;

          if (newCount >= threshold) {
            showToast(`신고 접수 완료! 누적 신고가 기준치(${threshold}회)에 도달하여 메인 목록에서 자동 제외됩니다.`);
            setTimeout(() => {
              closeAllModals();
              if (window.refreshArchiveFeed) {
                window.refreshArchiveFeed();
              }
            }, 1000);
          } else {
            showToast(`신고가 정상 접수되었습니다. (현재 누적 신고: ${newCount} / ${threshold}회)`);
          }
        }
      };
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
    const disclaimerModal = document.getElementById('disclaimerModal');
    if (disclaimerModal) {
      disclaimerModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function openAdminAuthModal() {
    const adminAuthModal = document.getElementById('adminAuthModal');
    if (adminAuthModal) {
      const pwdInput = document.getElementById('adminSecretPasswordInput');
      const errBox = document.getElementById('adminAuthErrorMsg');
      if (pwdInput) pwdInput.value = '';
      if (errBox) errBox.style.display = 'none';
      adminAuthModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => pwdInput?.focus(), 150);
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  function showToast(message) {
    const toastElement = document.getElementById('toastMsg');
    const toastText = document.getElementById('toastText');
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
    openAdminAuthModal,
    closeAllModals,
    showToast
  };
})();
