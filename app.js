(function () {
  const config = window.PORTAL_CONFIG;
  if (!config) return;

  const ICONS = {
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
    flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"></path><path d="M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"></path><line x1="8.5" y1="14" x2="15.5" y2="14"></line></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
  };

  let activeFilter = "all";
  let searchQuery = "";
  let toastTimer = null;

  // DOM Elements
  const clinicalGrid = document.getElementById("clinical-grid");
  const diseaseGrid = document.getElementById("disease-grid");
  const patientGrid = document.getElementById("patient-grid");
  const searchInput = document.getElementById("search-input");
  const emptyState = document.getElementById("empty-state");
  const emptyQuery = document.getElementById("empty-query");
  const clearSearchBtn = document.getElementById("clear-search");
  const themeToggle = document.getElementById("theme-toggle");
  const toastEl = document.getElementById("toast");

  const modal = document.getElementById("info-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  const modalClose = document.getElementById("modal-close");
  const modalOk = document.getElementById("modal-ok");

  // Init metadata
  document.getElementById("site-title").textContent = config.siteTitle;
  document.getElementById("site-subtitle").textContent = config.siteSubtitle;
  document.getElementById("last-updated").textContent = config.lastUpdated;
  document.getElementById("disease-title").textContent = config.diseaseSection.title;
  document.getElementById("disease-desc").textContent = config.diseaseSection.description;

  const mainLinkSlot = document.getElementById("disease-main-link-slot");
  if (config.diseaseSection.mainUrl) {
    mainLinkSlot.innerHTML = `
      <a href="${escapeAttr(config.diseaseSection.mainUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
        前往疾病個論主站 ${ICONS.external}
      </a>
    `;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  function matchesSearch(item) {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const haystack = [
      item.title,
      item.subtitle,
      item.organization,
      item.description,
      item.badge,
      ...(item.tags || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  }

  function renderClinicalCard(item) {
    const isActive = item.status === "active" && item.url;
    return `
      <article class="card ${isActive ? "" : "is-placeholder"}">
        <div class="card-top">
          <div class="card-icon">${ICONS[item.icon] || ICONS.clipboard}</div>
          <span class="status-pill ${isActive ? "active" : "coming-soon"}">${escapeHtml(item.badge || (isActive ? "可用" : "建置中"))}</span>
        </div>
        <div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          ${item.subtitle ? `<p class="card-subtitle">${escapeHtml(item.subtitle)}</p>` : ""}
        </div>
        <p class="card-desc">${escapeHtml(item.description)}</p>
        <div class="card-actions">
          ${
            isActive
              ? `<a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" class="btn-primary">開啟系統 ${ICONS.external}</a>
                 <button type="button" class="btn-ghost copy-btn" data-url="${escapeAttr(item.url)}" title="複製連結">${ICONS.copy}</button>`
              : `<button type="button" class="btn-placeholder placeholder-btn" data-title="${escapeAttr(item.title)}">尚未設定連結</button>`
          }
        </div>
      </article>
    `;
  }

  function renderDiseaseCard(item) {
    const isActive = item.status === "active" && item.url;
    return `
      <article class="card disease-card ${isActive ? "" : "is-placeholder"}">
        <div class="card-top">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <span class="status-pill ${isActive ? "active" : "coming-soon"}">${isActive ? "可閱覽" : "待更新"}</span>
        </div>
        <p class="card-desc">${escapeHtml(item.description)}</p>
        <div class="card-actions">
          ${
            isActive
              ? `<a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" class="btn-primary">閱讀個論 ${ICONS.external}</a>`
              : `<button type="button" class="btn-placeholder placeholder-btn" data-title="${escapeAttr(item.title)}">陸續更新中</button>`
          }
        </div>
      </article>
    `;
  }

  function renderPatientCard(item) {
    return `
      <article class="card">
        <div class="card-top">
          <div class="card-icon patient-icon">${ICONS.book}</div>
          <span class="status-pill patient">${escapeHtml(item.badge || "病人衛教")}</span>
        </div>
        <div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          ${item.organization ? `<p class="card-subtitle">${escapeHtml(item.organization)}</p>` : ""}
        </div>
        <p class="card-desc">${escapeHtml(item.description)}</p>
        <div class="card-actions">
          <a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" class="btn-primary">開啟衛教網站 ${ICONS.external}</a>
          <button type="button" class="btn-ghost copy-btn" data-url="${escapeAttr(item.url)}" title="複製連結給病人">${ICONS.copy}</button>
        </div>
      </article>
    `;
  }

  function render() {
    const clinicalItems = config.clinicalTools.filter(matchesSearch);
    const diseaseItems = config.diseaseSection.topics.filter(matchesSearch);
    const patientItems = config.patientEducation.filter(matchesSearch);

    clinicalGrid.innerHTML = clinicalItems.map(renderClinicalCard).join("");
    diseaseGrid.innerHTML = diseaseItems.map(renderDiseaseCard).join("");
    patientGrid.innerHTML = patientItems.map(renderPatientCard).join("");

    const showClinical = (activeFilter === "all" || activeFilter === "clinical") && clinicalItems.length > 0;
    const showDisease = (activeFilter === "all" || activeFilter === "disease") && diseaseItems.length > 0;
    const showPatient = (activeFilter === "all" || activeFilter === "patient") && patientItems.length > 0;

    document.getElementById("section-clinical").classList.toggle("hidden", !showClinical);
    document.getElementById("section-disease").classList.toggle("hidden", !showDisease);
    document.getElementById("section-patient").classList.toggle("hidden", !showPatient);

    const hasAny = showClinical || showDisease || showPatient;
    emptyState.classList.toggle("hidden", hasAny);
    emptyQuery.textContent = searchQuery;
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  function openModal(title) {
    modalTitle.textContent = `「${title}」尚未設定連結`;
    modalMessage.textContent = `此項目目前為預留位置，待網站或工具完成後即可直接連結啟用。`;
    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  // Event delegation for copy & placeholder buttons
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy-btn");
    if (copyBtn) {
      const url = copyBtn.dataset.url;
      if (navigator.clipboard && url) {
        navigator.clipboard.writeText(url).then(() => showToast("已複製連結至剪貼簿"));
      } else {
        showToast("請手動複製網址：" + url);
      }
      return;
    }

    const placeholderBtn = e.target.closest(".placeholder-btn");
    if (placeholderBtn) {
      openModal(placeholderBtn.dataset.title);
    }
  });

  // Filter pills
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeFilter = pill.dataset.filter;
      render();
    });
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    render();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    activeFilter = "all";
    document.querySelectorAll(".filter-pill").forEach((p) => {
      p.classList.toggle("active", p.dataset.filter === "all");
    });
    render();
  });

  // Keyboard shortcut: "/" to focus search, "Escape" to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === "Escape") {
      closeModal();
    }
  });

  // Modal close handlers
  modalClose.addEventListener("click", closeModal);
  modalOk.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Theme toggle
  const savedTheme = localStorage.getItem("portal-theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("portal-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("portal-theme", "dark");
    }
  });

  render();
})();
