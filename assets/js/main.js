/* ==========================================================================
   Karanpreet Kaur — Portfolio
   Vanilla JS: data-driven rendering + interactions.
   No frameworks, no build step — everything runs directly on GitHub Pages.
   ========================================================================== */

(() => {
  'use strict';

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"/></svg>',
    fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    graduationCap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="1"/><rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 7h.01M6 18h.01"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a5 5 0 1 1 1.3-9.8 6 6 0 0 1 11.2 3A4 4 0 0 1 20 19h-2.5Z"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg>',
  };

  const icon = (name, cls) => `<span class="${cls || ''}" aria-hidden="true">${ICONS[name] || ''}</span>`;

  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  let DATA = null;

  /* ------------------------------ Rendering ------------------------------ */

  function renderHero(d) {
    const p = d.profile;
    $('#hero-tag').innerHTML = `<span class="dot-live" aria-hidden="true"></span> ${esc(p.availability.toUpperCase())} · ${esc(p.location.toUpperCase())}`;
    const nameParts = p.name.split(' ');
    $('#hero-name').innerHTML = `${esc(nameParts.slice(0, -1).join(' '))}<br><span class="grad">${esc(nameParts.slice(-1)[0])}</span>`;
    $('#hero-desc').textContent = p.tagline;
    $('#avatar-initials').textContent = p.initials;
    $('#hero-github').href = p.github;
    $('#hero-linkedin').href = p.linkedin;
    $('#hero-email').href = `mailto:${p.email}`;
    $('#hero-meta-location').innerHTML = `${icon('mapPin')} ${esc(p.location)}`;
    $('#hero-meta-edu').innerHTML = `${icon('graduationCap')} ${esc(p.educationShort)}`;
    document.title = `${p.name} — Portfolio`;
    setupTyping(p.roles);
  }

  function setupTyping(roles) {
    const el = $('#hero-role-text');
    if (!el || !roles || !roles.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = roles[0];
      return;
    }
    let roleIndex = 0, charIndex = 0, deleting = false;
    const tick = () => {
      const full = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = full.slice(0, charIndex);
        if (charIndex === full.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        el.textContent = full.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    };
    tick();
  }

  function renderStats(d) {
    const wrap = $('#stats-strip');
    wrap.innerHTML = d.stats.map((s) => `
      <div class="stat-cell">
        <div class="stat-value" data-target="${s.value}" data-suffix="${esc(s.suffix)}">0</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`).join('');
  }

  function animateCounters() {
    $$('.stat-value').forEach((el) => {
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isFloat = !Number.isInteger(target);
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = target * eased;
        el.textContent = (isFloat ? val.toFixed(2) : Math.round(val)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function renderAbout(d) {
    const p = d.profile;
    $('#about-bio').innerHTML = `<p>${esc(p.tagline)}</p>`;
    $('#about-values').innerHTML = d.values.map((v, i) => `
      <div class="value-item">
        <div class="num">0${i + 1}</div>
        <div><h4>${esc(v.title)}</h4><p>${esc(v.detail)}</p></div>
      </div>`).join('');
    $('#about-strengths').innerHTML = d.strengths.map((s) => `<span class="chip">${esc(s)}</span>`).join('');
    $('#about-languages').innerHTML = d.languages.map((l) => `
      <div class="lang-row"><span>${esc(l.name)}</span><span>${esc(l.level)}</span></div>`).join('');
    $('#about-interests').innerHTML = d.interests.map((s) => `<span class="chip">${esc(s)}</span>`).join('');
  }

  function renderSkills(d) {
    $('#skills-grid').innerHTML = d.skills.map((cat) => `
      <div class="skill-card reveal">
        <div class="skill-card-head">
          <div class="skill-icon">${icon(cat.icon)}</div>
          <h3>${esc(cat.category)}</h3>
        </div>
        ${cat.items.map((it) => `
          <div class="skill-item">
            <div class="skill-item-top"><span>${esc(it.name)}</span><span>${it.level}%</span></div>
            <div class="skill-bar"><div class="skill-bar-fill" data-level="${it.level}"></div></div>
          </div>`).join('')}
      </div>`).join('');
    observeReveal();
  }

  function projectCategoryOf(project) {
    return project.category.split('·')[0].trim();
  }

  // Renders whichever links a project actually has — never fabricates a demo/video URL.
  // variant 'card' renders compact buttons that stop the click from also opening the modal.
  function projectLinkButtons(proj, variant) {
    const stop = variant === 'card' ? ' onclick="event.stopPropagation()"' : '';
    const size = variant === 'card' ? ' btn-sm' : '';
    const buttons = [];
    if (proj.demo) {
      buttons.push(`<a href="${esc(proj.demo)}" target="_blank" rel="noopener" class="btn btn-primary${size}"${stop}>${icon('external')} Live Demo ↗</a>`);
    } else if (proj.video) {
      buttons.push(`<a href="${esc(proj.video)}" target="_blank" rel="noopener" class="btn btn-primary${size}"${stop}>${icon('play')} Video Demo ↗</a>`);
    }
    if (proj.github) {
      buttons.push(`<a href="${esc(proj.github)}" target="_blank" rel="noopener" class="btn btn-outline${size}"${stop}>${icon('github')} GitHub ↗</a>`);
    }
    return buttons.join('');
  }

  function renderProjects(d) {
    const categories = ['All', ...Array.from(new Set(d.projects.map(projectCategoryOf)))];
    $('#project-filters').innerHTML = categories.map((c, i) => `
      <button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');

    $('#projects-grid').innerHTML = d.projects.map((proj) => {
      const links = projectLinkButtons(proj, 'card');
      return `
      <article class="project-card reveal" data-id="${proj.id}" data-category="${esc(projectCategoryOf(proj))}" tabindex="0" role="button" aria-label="View details for ${esc(proj.title)}">
        <div class="project-type">${esc(proj.category)}</div>
        <h3>${esc(proj.title)}</h3>
        <p>${esc(proj.summary)}</p>
        <div class="project-stack">${proj.tags.map((t) => `<span class="stack-tag">${esc(t)}</span>`).join('')}</div>
        ${links ? `<div class="project-card-actions">${links}</div>` : ''}
        <div class="project-card-footer">
          <button type="button" class="project-link" onclick="event.stopPropagation(); this.closest('.project-card').click()">Full details →</button>
          <span class="project-status">${esc(proj.status)} · ${esc(proj.lastUpdated)}</span>
        </div>
      </article>`;
    }).join('');

    observeReveal();
    setupProjectFilters();
    setupProjectModal(d);
  }

  function setupProjectFilters() {
    const buttons = $$('.filter-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        $$('.project-card').forEach((card) => {
          const show = filter === 'All' || card.dataset.category === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  function setupProjectModal(d) {
    const overlay = $('#project-modal');
    const panel = $('#project-modal-panel');

    const open = (proj) => {
      panel.innerHTML = `
        <button class="modal-close" aria-label="Close">${icon('x')}</button>
        <div class="modal-type">${esc(proj.category)}</div>
        <h2>${esc(proj.title)}</h2>
        <div class="modal-meta-grid">
          <div class="modal-meta-cell"><span class="k">Status</span><span class="v">${esc(proj.status)}</span></div>
          <div class="modal-meta-cell"><span class="k">Last Updated</span><span class="v">${esc(proj.lastUpdated)}</span></div>
        </div>
        <div class="modal-section"><h3>Problem</h3><p>${esc(proj.problem)}</p></div>
        <div class="modal-section"><h3>Key Features</h3><ul>${proj.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
        <div class="modal-section"><h3>Architecture</h3><p>${esc(proj.architecture)}</p></div>
        <div class="modal-section"><h3>Challenges</h3><p>${esc(proj.challenges)}</p></div>
        <div class="modal-section"><h3>Lessons Learned</h3><p>${esc(proj.lessons)}</p></div>
        <div class="modal-section"><h3>Impact</h3><p>${esc(proj.impact)}</p></div>
        <div class="modal-section"><h3>Tech Stack</h3><div class="project-stack">${proj.tags.map((t) => `<span class="stack-tag">${esc(t)}</span>`).join('')}</div></div>
        <div class="modal-actions">${projectLinkButtons(proj, 'modal')}</div>`;
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      overlay.removeAttribute('inert');
      document.body.classList.add('no-scroll');
      $('.modal-close', panel).addEventListener('click', close);
      panel.focus();
    };

    const close = () => {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('inert', '');
      document.body.classList.remove('no-scroll');
    };

    $$('.project-card').forEach((card) => {
      const proj = d.projects.find((p) => p.id === card.dataset.id);
      card.addEventListener('click', () => open(proj));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(proj); }
      });
    });

    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
  }

  function renderTimeline(d) {
    $('#timeline').innerHTML = d.timeline.map((t) => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-year">${esc(t.year)}<span class="timeline-badge">${esc(t.type)}</span></div>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.detail)}</p>
      </div>`).join('');
    observeReveal();
  }

  function renderExperience(d) {
    $('#experience-list').innerHTML = d.experience.map((e) => `
      <div class="exp-card reveal">
        <div>
          <div class="exp-role">${esc(e.role)}</div>
          <div class="exp-company">${esc(e.company.toUpperCase())} · ${esc(e.location)}</div>
          <div class="exp-desc">
            ${esc(e.description)}
            <ul>${e.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="exp-date">${esc(e.start)}<br>— ${esc(e.end)}</div>
      </div>`).join('');
    observeReveal();
  }

  function renderEducation(d) {
    $('#education-list').innerHTML = d.education.map((e) => `
      <div class="edu-card reveal">
        <div>
          <div class="edu-degree">${esc(e.degree)}</div>
          <div class="edu-school">${esc(e.school.toUpperCase())} · ${esc(e.location)}</div>
          <div class="edu-details">
            <strong>Relevant Courses:</strong> ${e.courses.map(esc).join(' · ')}
            ${e.achievement ? `<br><br><strong>Achievement:</strong> ${esc(e.achievement)}` : ''}
          </div>
        </div>
        <div class="edu-meta">
          ${e.gpa ? `<span class="gpa-badge">GPA ${esc(e.gpa)}</span>` : ''}
          ${e.achievement ? `<span class="dean-badge">🏆 Dean's List</span>` : ''}
          <span>${esc(e.start)} — ${esc(e.end)}</span>
        </div>
      </div>`).join('');
    observeReveal();
  }

  function renderAchievements(d) {
    const section = $('#achievements-section');
    if (!d.achievements || !d.achievements.length) { section.remove(); return; }
    $('#achievements-grid').innerHTML = d.achievements.map((a) => `
      <div class="achievement-card reveal">
        <div class="achievement-icon">${icon('award')}</div>
        <h3>${esc(a.title)}</h3>
        <div class="org">${esc(a.org)} · ${esc(a.date)}</div>
        <p>${esc(a.description)}</p>
      </div>`).join('');
    observeReveal();
  }

  function renderCertifications(d) {
    const section = $('#certifications-section');
    if (!d.certifications || !d.certifications.length) { section.remove(); return; }
    $('#certs-grid').innerHTML = d.certifications.map((c) => `
      <div class="cert-card reveal">
        <div class="cert-provider">${esc(c.provider)}</div>
        <h3>${esc(c.name)}</h3>
        <div class="cert-date">${esc(c.date)}</div>
        <p>${esc(c.description || '')}</p>
        ${c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener" class="project-link">${icon('external')} Verify Credential</a>` : ''}
      </div>`).join('');
    observeReveal();
  }

  function renderContact(d) {
    const p = d.profile;
    $('#contact-links').innerHTML = `
      <a class="contact-link-row" href="mailto:${p.email}">
        <span class="ic">${icon('mail')}</span>
        <span><span class="label">Email</span><span class="val">${esc(p.email)}</span></span>
        <button type="button" class="copy-btn" id="copy-email-btn">Copy</button>
      </a>
      ${p.phone ? `
      <a class="contact-link-row" href="tel:${esc(p.phone.replace(/[^0-9+]/g, ''))}">
        <span class="ic">${icon('phone')}</span>
        <span><span class="label">Phone</span><span class="val">${esc(p.phone)}</span></span>
      </a>` : ''}
      <a class="contact-link-row" href="${esc(p.linkedin)}" target="_blank" rel="noopener">
        <span class="ic">${icon('linkedin')}</span>
        <span><span class="label">LinkedIn</span><span class="val">${esc(p.linkedin.replace('https://', ''))}</span></span>
      </a>
      <a class="contact-link-row" href="${esc(p.github)}" target="_blank" rel="noopener">
        <span class="ic">${icon('github')}</span>
        <span><span class="label">GitHub</span><span class="val">${esc(p.github.replace('https://', ''))}</span></span>
      </a>
      <div class="contact-link-row">
        <span class="ic">${icon('mapPin')}</span>
        <span><span class="label">Location</span><span class="val">${esc(p.location)}</span></span>
      </div>`;

    $('#copy-email-btn').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(p.email).then(() => showToast('Email copied to clipboard'));
    });

    const form = $('#contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#cf-name').value.trim();
      const email = $('#cf-email').value.trim();
      const message = $('#cf-message').value.trim();
      const subject = `Portfolio contact from ${name || 'a visitor'}`;
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showToast('Opening your email client…');
    });
  }

  function renderFooter(d) {
    const year = new Date().getFullYear();
    $('#footer-text').textContent = `© ${year} ${d.profile.name} · Built with HTML, CSS & JavaScript`;
  }

  function setupResume(d) {
    const path = d.profile.resumePath;
    const heroBtn = $('#hero-resume-btn');

    fetch(path, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) throw new Error('missing');
        heroBtn.href = path;
        $('#contact-links').insertAdjacentHTML('beforeend', `
          <a class="contact-link-row" href="${esc(path)}" download>
            <span class="ic">${icon('fileText')}</span>
            <span><span class="label">Resume</span><span class="val">Download PDF</span></span>
          </a>`);
      })
      .catch(() => {
        heroBtn.removeAttribute('href');
        heroBtn.setAttribute('aria-disabled', 'true');
        heroBtn.setAttribute('tabindex', '-1');
        heroBtn.title = 'Resume coming soon — email me for a copy in the meantime';
      });
  }

  /* ------------------------------ Interactions ------------------------------ */

  function observeReveal() {
    const els = $$('.reveal:not(.in-view)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          if (entry.target.id === 'stats-strip') animateCounters();
          $$('.skill-bar-fill', entry.target).forEach((bar) => {
            bar.style.width = bar.dataset.level + '%';
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
  }

  function setupTheme() {
    const stored = localStorage.getItem('kk-theme');
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', preferred);
    $('#theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('kk-theme', next);
    });
  }

  function setupNav() {
    const burger = $('#nav-burger');
    const menu = $('#mobile-menu');
    burger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    });
    $$('#mobile-menu a').forEach((a) => a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }));

    const sections = $$('main section[id]');
    const navLinks = $$('.nav-links a');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  function setupScrollProgress() {
    const bar = $('#scroll-progress');
    const backBtn = $('#back-to-top');
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = `${max > 0 ? (scrolled / max) * 100 : 0}%`;
      backBtn.classList.toggle('show', scrolled > 600);
      ticking = false;
    };
    document.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
  }

  function showToast(msg) {
    const toast = $('#toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function setupCommandPalette(d) {
    const overlay = $('#cmdk-overlay');
    const input = $('#cmdk-input');
    const results = $('#cmdk-results');

    const items = [
      { label: 'About', group: 'Section', action: () => go('#about') },
      { label: 'Skills', group: 'Section', action: () => go('#skills') },
      { label: 'Projects', group: 'Section', action: () => go('#projects') },
      { label: 'Timeline', group: 'Section', action: () => go('#timeline') },
      { label: 'Experience', group: 'Section', action: () => go('#experience') },
      { label: 'Education', group: 'Section', action: () => go('#education') },
      { label: 'Contact', group: 'Section', action: () => go('#contact') },
      { label: 'Toggle dark / light mode', group: 'Action', action: () => $('#theme-toggle').click() },
      { label: 'Copy email address', group: 'Action', action: () => $('#copy-email-btn').click() },
      { label: 'Open resume', group: 'Action', action: () => $('#hero-resume-btn').click() },
      { label: 'Open GitHub profile', group: 'Link', action: () => window.open(d.profile.github, '_blank') },
      { label: 'Open LinkedIn profile', group: 'Link', action: () => window.open(d.profile.linkedin, '_blank') },
      ...d.projects.map((p) => ({ label: p.title, group: 'Project', action: () => { go('#projects'); setTimeout(() => $(`.project-card[data-id="${p.id}"]`)?.click(), 400); } })),
    ];

    let activeIndex = 0, filtered = items;

    function go(hash) {
      close();
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }

    function render() {
      if (!filtered.length) {
        results.innerHTML = '<div class="cmdk-empty">No results found</div>';
        return;
      }
      results.innerHTML = filtered.map((it, i) => `
        <div class="cmdk-item${i === activeIndex ? ' active' : ''}" data-index="${i}">
          <span>${esc(it.label)}</span><span class="grp">${esc(it.group)}</span>
        </div>`).join('');
      $$('.cmdk-item', results).forEach((el) => {
        el.addEventListener('mouseenter', () => { activeIndex = Number(el.dataset.index); render(); });
        el.addEventListener('click', () => filtered[Number(el.dataset.index)].action());
      });
    }

    function open() {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      overlay.removeAttribute('inert');
      input.value = '';
      filtered = items;
      activeIndex = 0;
      render();
      setTimeout(() => input.focus(), 50);
      document.body.classList.add('no-scroll');
    }

    function close() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('inert', '');
      document.body.classList.remove('no-scroll');
    }

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      filtered = items.filter((it) => it.label.toLowerCase().includes(q));
      activeIndex = 0;
      render();
    });

    document.addEventListener('keydown', (e) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        overlay.classList.contains('open') ? close() : open();
        return;
      }
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); render(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); render(); }
      if (e.key === 'Enter') { e.preventDefault(); filtered[activeIndex]?.action(); }
    });

    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    $('#cmdk-trigger').addEventListener('click', open);
  }

  /* ------------------------------ Init ------------------------------ */

  async function init() {
    try {
      const res = await fetch('assets/data/content.json');
      DATA = await res.json();
    } catch (err) {
      console.error('Failed to load content.json', err);
      $('#loader').classList.add('hidden');
      return;
    }

    renderHero(DATA);
    renderStats(DATA);
    renderAbout(DATA);
    renderSkills(DATA);
    renderProjects(DATA);
    renderTimeline(DATA);
    renderExperience(DATA);
    renderEducation(DATA);
    renderAchievements(DATA);
    renderCertifications(DATA);
    renderContact(DATA);
    renderFooter(DATA);
    setupResume(DATA);

    setupTheme();
    setupNav();
    setupScrollProgress();
    setupCommandPalette(DATA);
    observeReveal();

    document.body.classList.add('loaded');
    requestAnimationFrame(() => $('#loader').classList.add('hidden'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
