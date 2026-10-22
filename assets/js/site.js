/* ==========================================================================
   Milestone Studios — site behaviour
   ========================================================================== */
(function () {
  const SITE = window.SITE || {};
  const ARTISTS = window.ARTISTS || [];
  const VIDEOS = window.VIDEOS || [];
  const SLIDES = window.SLIDES || [];
  const EVENTS = window.EVENTS || [];
  const page = document.body.dataset.page || "";
  const LOGO = "https://milestones.co.za/wp-content/uploads/2021/05/milestone_logo-11.png";
  const params = new URLSearchParams(location.search);

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICONS = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v7h4v-7H17l.5-4h-4V8.8c0-.5.3-.8.5-.8Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.8 31 31 0 0 0-.4-4.8ZM9.7 15.1V8.9L15.5 12l-5.8 3.1Z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5 15.9a.7.7 0 0 1-.9.2c-2.6-1.6-5.8-1.9-9.6-1a.7.7 0 1 1-.3-1.3c4.2-1 7.7-.6 10.6 1.2.3.2.4.6.2.9Zm1.3-2.9a.9.9 0 0 1-1.2.3c-2.9-1.8-7.4-2.3-10.9-1.3a.9.9 0 1 1-.5-1.7c4-1.2 9-.6 12.3 1.5.4.2.5.8.3 1.2Zm.1-3c-3.5-2.1-9.3-2.3-12.6-1.3a1 1 0 1 1-.6-2c3.8-1.2 10.2-.9 14.2 1.5a1 1 0 0 1-1 1.8Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.4V6.6a4.5 4.5 0 0 1-4.4-4.6Z"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
  };
  const SOCIALS = [
    ["instagram", "https://www.instagram.com/milestone_recording_studio"],
    ["facebook", "https://www.facebook.com/milestoneCT/"],
    ["youtube", "https://www.youtube.com/channel/UCQPKNJD8dZJDHO7CEAGbdHw"],
  ];
  const socialLinks = (list, cls = "social-row") =>
    `<div class="${cls}">${list.map(([k, href, label]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${esc(label || k)}">${ICONS[k]}</a>`).join("")}</div>`;

  /* ---------------- Header & full-screen menu ---------------- */
  const NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "artists.html", label: "Artists", key: "artists" },
    { href: "label.html", label: SITE.labelName || "The Label", key: "label", isNew: true },
    { href: "impact.html", label: "Impact Partners", key: "impact" },
    { href: "videos.html", label: "Videos", key: "videos" },
    { href: "studio.html", label: "The Studio", key: "studio" },
    { href: "team.html", label: "Team", key: "team" },
    { href: "contact.html", label: "Contact", key: "contact" },
  ];

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="container topbar__inner">
        <span>Cape Town · Est. 1987</span>
        <span class="topbar__right"><a href="tel:+27214246000">021 424 6000</a><a href="label.html" class="topbar__new">${esc(SITE.labelName)}: now signing →</a></span>
      </div>
    </div>
    <div class="mainbar">
      <div class="container mainbar__inner">
        <a class="brand" href="index.html" aria-label="Milestone Studios home"><img src="${LOGO}" alt="Milestone Studios" width="120" height="38"><span class="brand__divider"></span><span class="brand__sub">Studios</span></a>
        <nav class="tabs" aria-label="Main">
          ${NAV.filter((n) => n.key !== "home").map((n) => `<a href="${n.href}" ${n.key === page ? 'aria-current="page"' : ""}>${esc(n.label)}${n.isNew ? '<i class="dot" aria-label="new"></i>' : ""}</a>`).join("")}
        </nav>
        <div class="mainbar__actions">
          <a class="btn btn--primary btn--sm mainbar__book" href="contact.html#enquire">Book <b>the studio</b></a>
          <button class="menu-toggle" aria-controls="site-menu" aria-expanded="false" aria-label="Open menu"><span></span></button>
        </div>
      </div>
    </div>
    <nav class="tabbar" aria-label="Pages">
      <div class="tabbar__inner">
        ${NAV.map((n) => `<a href="${n.href}" ${n.key === page ? 'aria-current="page"' : ""}>${esc(n.label)}${n.isNew ? '<i class="dot" aria-label="new"></i>' : ""}</a>`).join("")}
      </div>
    </nav>
    <nav class="menu" id="site-menu" aria-label="Menu">
      <div class="container menu__inner">
        <ol class="menu__links">
          ${NAV.map((n, i) => `<li><a href="${n.href}" ${n.key === page ? 'aria-current="page"' : ""}><small>0${i + 1}</small>${esc(n.label)}${n.isNew ? '<i class="new">New</i>' : ""}</a></li>`).join("")}
        </ol>
        <div class="menu__aside">
          <div><small>Studio</small><p>21 Bloem Street<br>Cape Town 8001</p></div>
          <div><small>Bookings</small><p><a href="tel:+27214246000">021 424 6000</a><br><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p></div>
          <a class="btn btn--primary" href="label.html#apply">Apply to ${esc(SITE.labelName)} <span class="arrow">→</span></a>
          ${socialLinks(SOCIALS)}
        </div>
      </div>
    </nav>`;
  document.body.prepend(header);

  const tabbar = $(".tabbar__inner", header);
  const currentTab = $(".tabbar [aria-current]", header);
  const centreTab = () => {
    if (!tabbar || !currentTab || !tabbar.clientWidth) return;
    const left = currentTab.getBoundingClientRect().left - tabbar.getBoundingClientRect().left + tabbar.scrollLeft;
    tabbar.scrollTo({ left: left - (tabbar.clientWidth - currentTab.offsetWidth) / 2, behavior: "instant" });
  };
  centreTab();
  window.addEventListener("load", centreTab);

  const toggle = $(".menu-toggle", header);
  const setMenu = (open) => {
    document.documentElement.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setMenu(!document.documentElement.classList.contains("menu-open")));
  $$(".menu a", header).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------------- Newsletter band + footer ---------------- */
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <section class="newsletter-band">
      <div class="container newsletter-band__inner">
        <h2>Subscribe <em>to our</em><br>newsletter</h2>
        <form class="newsletter" data-enquiry="Mailing list sign-up" novalidate>
          <p>New releases, studio news and ${esc(SITE.labelName)} intake dates. No spam.</p>
          <div class="newsletter__row">
            <label class="sr-only" for="nl-email">Email</label>
            <input id="nl-email" type="email" name="email" placeholder="you@email.com" required>
            <button class="btn btn--dark" type="submit">Subscribe <b>now</b> <span class="arrow">→</span></button>
          </div>
        </form>
      </div>
    </section>
    <div class="site-footer">
      <div class="container site-footer__inner">
        <a href="index.html"><img src="${LOGO}" alt="Milestone Studios" width="140" height="44" loading="lazy" class="site-footer__logo"></a>
        ${socialLinks(SOCIALS, "social-row social-row--accent")}
        <ul class="site-footer__nav">${NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("")}</ul>
        <p class="site-footer__addr">21 Bloem Street, Cape Town 8001 · <a href="tel:+27214246000">021 424 6000</a> · <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
        <div class="site-footer__legal">
          <span>© ${new Date().getFullYear()} Milestone Studios. All rights reserved.</span>
          <div class="badges">
            <img src="https://milestones.co.za/wp-content/uploads/2021/05/gemini-150x150.jpg" alt="Gemini Award winners" loading="lazy">
            <img src="https://milestones.co.za/wp-content/uploads/2021/05/ADM-Plural-Album-Large-en_US.png" alt="Apple Digital Masters" loading="lazy">
          </div>
        </div>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------------- Music embeds ---------------- */
  // Turns a share link into { src, height }. Returns null if unrecognised.
  function embedFor(url, size = "compact") {
    if (!url) return null;
    let m;
    if ((m = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(artist|album|track|playlist|episode|show)\/([A-Za-z0-9]+)/))) {
      return { kind: "Spotify", src: `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0`, height: size === "full" ? 352 : 152 };
    }
    if ((m = url.match(/music\.apple\.com\/(.+)$/))) {
      const isSong = /[?&]i=/.test(url) || /\/song\//.test(url);
      return { kind: "Apple Music", src: `https://embed.music.apple.com/${m[1]}`, height: isSong ? 175 : size === "full" ? 450 : 175 };
    }
    const yt = ytId(url);
    if (yt) return { kind: "YouTube", src: `https://www.youtube-nocookie.com/embed/${yt}`, height: 0, video: true };
    if (/soundcloud\.com\//.test(url)) {
      return { kind: "SoundCloud", src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23e8b24a&visual=true`, height: size === "full" ? 300 : 166 };
    }
    return null;
  }
  function ytId(v) {
    if (!v) return "";
    if (/^[\w-]{11}$/.test(v)) return v;
    const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  }
  function playerHTML(url, size) {
    const e = embedFor(url, size);
    if (!e) return "";
    const style = e.video ? 'style="aspect-ratio:16/9;height:auto"' : `height="${e.height}"`;
    return `<div class="player"><iframe src="${esc(e.src)}" ${style} loading="lazy" title="${esc(e.kind)} player"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>`;
  }

  $$("[data-playlist]").forEach((el) => { el.innerHTML = playerHTML(SITE.featuredPlaylist, "full"); });
  $$("[data-playlist-link]").forEach((el) => { el.href = SITE.featuredPlaylist || "#"; });

  /* ---------------- Hero carousel ---------------- */
  $$("[data-carousel]").forEach((root) => {
    if (!SLIDES.length) { root.remove(); return; }
    root.innerHTML = `
      <div class="carousel__track">
        ${SLIDES.map((s, i) => `
          <a class="slide" href="${esc(s.link || "#")}" aria-roledescription="slide" aria-label="${i + 1} of ${SLIDES.length}: ${esc(s.title)}" ${i ? 'tabindex="-1"' : ""}>
            <img src="${esc(s.image)}" alt="" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}>
            <span class="slide__text">
              <em>${esc(s.kicker)}</em>
              <b>${esc(s.title)}</b>
              <span>${esc(s.subtitle)}</span>
            </span>
          </a>`).join("")}
      </div>
      <button class="carousel__arrow carousel__arrow--prev" aria-label="Previous slide">${ICONS.arrowL}</button>
      <button class="carousel__arrow carousel__arrow--next" aria-label="Next slide">${ICONS.arrowR}</button>
      <div class="carousel__dots" role="tablist">${SLIDES.map((s, i) => `<button role="tab" aria-label="Go to slide ${i + 1}" aria-selected="${i === 0}"></button>`).join("")}</div>`;

    const track = $(".carousel__track", root);
    const slides = $$(".slide", root);
    const dots = $$(".carousel__dots button", root);
    let index = 0, timer = null;

    const go = (i) => {
      index = (i + SLIDES.length) % SLIDES.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, j) => d.setAttribute("aria-selected", j === index));
      slides.forEach((s, j) => { s.classList.toggle("is-active", j === index); s.tabIndex = j === index ? 0 : -1; });
    };
    const play = () => { if (!reduceMotion) { clearInterval(timer); timer = setInterval(() => go(index + 1), 6000); } };
    const stop = () => clearInterval(timer);

    $(".carousel__arrow--prev", root).addEventListener("click", () => { go(index - 1); play(); });
    $(".carousel__arrow--next", root).addEventListener("click", () => { go(index + 1); play(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); play(); }));
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", play);
    root.addEventListener("focusin", stop);

    // Swipe
    let startX = null, moved = false;
    root.addEventListener("pointerdown", (e) => { startX = e.clientX; moved = false; });
    root.addEventListener("pointerup", (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 50) { moved = true; go(index + (dx < 0 ? 1 : -1)); play(); }
      startX = null;
    });
    root.addEventListener("click", (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
    root.addEventListener("dragstart", (e) => e.preventDefault());

    go(0);
    play();
  });

  /* ---------------- Scroll-down cue on the first hero ---------------- */
  const heroEl = $("[data-carousel], .hero");
  if (heroEl) {
    const cue = document.createElement("button");
    cue.className = "scroll-cue";
    cue.setAttribute("aria-label", "Scroll down");
    cue.innerHTML = `<span class="scroll-cue__mouse" aria-hidden="true"></span><span class="scroll-cue__label">Scroll</span>`;
    cue.addEventListener("click", () => {
      const next = heroEl.nextElementSibling;
      const offset = $(".mainbar").offsetHeight + ($(".tabbar").offsetHeight || 0);
      window.scrollTo({ top: (next ? next.getBoundingClientRect().top + scrollY : innerHeight) - offset, behavior: reduceMotion ? "auto" : "smooth" });
    });
    heroEl.append(cue);
  }

  /* ---------------- Artists ---------------- */
  const artistUrl = (a) => `artist.html?a=${encodeURIComponent(a.slug)}`;
  function initials(name) {
    return name.replace(/[^A-Za-z0-9 &]/g, "").split(/\s+/).filter((w) => w && w !== "&" && !/^the$/i.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  function portrait(a) {
    return `<div class="portrait" style="--h:${Number(a.hue) || 20}">
      ${a.photo ? `<img src="${esc(a.photo)}" alt="${esc(a.name)}" loading="lazy">` : `<span aria-hidden="true">${esc(initials(a.name))}</span>`}
    </div>`;
  }
  function artistSocials(a) {
    const links = a.links || {};
    return socialLinks(["instagram", "spotify", "youtube", "tiktok"].filter((k) => links[k]).map((k) => [k, links[k], `${a.name} on ${k}`]), "social-row social-row--sm");
  }

  // Search helpers: "Jazz / Neo-soul" -> ["Jazz", "Neo-soul"]
  const genresOf = (a) => String(a.genre || "").split("/").map((g) => g.trim()).filter(Boolean);
  const allGenres = (list) => [...new Set(list.flatMap(genresOf))].sort((x, y) => x.localeCompare(y));
  const norm = (t) => String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const matches = (a, q, genre, campus) =>
    (!genre || genresOf(a).includes(genre)) &&
    (!campus || a.campus === campus) &&
    (!q || norm(`${a.name} ${a.genre} ${a.campus}`).includes(norm(q)));
  const SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const searchBox = (id, placeholder) => `
    <label class="search" for="${id}">
      ${SEARCH_ICON}
      <span class="sr-only">Search artists by name or genre</span>
      <input id="${id}" type="search" placeholder="${placeholder}" autocomplete="off" spellcheck="false">
    </label>`;
  const genreChips = (list) => `
    <div class="genre-chips" role="group" aria-label="Filter by genre">
      <button type="button" class="filter" aria-pressed="true" data-genre="">All genres</button>
      ${allGenres(list).map((g) => `<button type="button" class="filter" aria-pressed="false" data-genre="${esc(g)}">${esc(g)}</button>`).join("")}
    </div>`;

  // Circular roster grid (home, label, artists pages)
  $$("[data-artist-circles]").forEach((el) => {
    const exclude = el.dataset.exclude || params.get("a");
    const limit = Number(el.dataset.limit) || ARTISTS.length;
    const list = ARTISTS.filter((a) => a.slug !== exclude).slice(0, limit);
    el.innerHTML = list.map((a) => `
      <div class="circle-artist reveal" data-slug="${esc(a.slug)}">
        <a href="${artistUrl(a)}" class="circle-artist__link">
          ${portrait(a)}
          <h3>${esc(a.name)}</h3>
          <span class="circle-artist__meta">${esc(a.genre)} · ${esc(a.campus)}${a.sample ? ' · <i class="sample">Sample</i>' : ""}</span>
        </a>
        ${el.dataset.socials !== undefined ? artistSocials(a) : ""}
      </div>`).join("");
  });

  // "Listen now": every artist on screen at once, each with their own player.
  // Search + genre chips (and optional school/university chips) filter the cards.
  const spotifyProfile = (a) => (a.links && a.links.spotify && a.links.spotify !== "#" ? a.links.spotify : a.music);
  const EQ = '<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
  $$("[data-listen]").forEach((el) => {
    const list = ARTISTS.filter((a) => embedFor(a.music));
    if (!list.length) { el.remove(); return; }
    const withCampus = el.dataset.listen === "campus";
    const campuses = [...new Set(list.map((a) => a.campus))];
    el.innerHTML = `
      <div class="listen__filter">
        ${searchBox(`${el.id || "listen"}-search`, "Search artist or genre…")}
        ${genreChips(list)}
      </div>
      ${withCampus ? `<div class="campus-chips" role="group" aria-label="Filter by school or university">
        ${["All schools & universities", ...campuses].map((c, i) => `<button type="button" class="filter" aria-pressed="${i === 0}" data-campus="${i ? esc(c) : ""}">${esc(c)}</button>`).join("")}
      </div>` : ""}
      <p class="listen__count" aria-live="polite"></p>
      <div class="listen__grid">
        ${list.map((a) => {
          const e = embedFor(a.music);
          return `
          <article class="track-card" style="--h:${Number(a.hue) || 20}" data-slug="${esc(a.slug)}">
            <header class="track-card__head">
              <a class="track-card__who" href="${artistUrl(a)}">
                ${portrait(a)}
                <span><b>${esc(a.name)}</b><small>${esc(a.genre)} · ${esc(a.campus)}</small></span>
              </a>
              ${a.sample ? '<span class="track-card__sample">Sample</span>' : EQ}
            </header>
            ${playerHTML(a.music, "compact")}
            <footer class="track-card__foot">
              <a class="track-card__link" href="${esc(spotifyProfile(a))}" target="_blank" rel="noopener">${e.kind === "Spotify" ? ICONS.spotify : ""} ${esc(e.kind)} profile</a>
              <span class="track-card__actions">
                <a class="track-card__link" href="${artistUrl(a)}">About</a>
                <a class="btn btn--primary btn--sm" href="${artistUrl(a)}#book">Book <b>${esc(a.name.split(" ")[0])}</b></a>
              </span>
            </footer>
          </article>`;
        }).join("")}
      </div>
      <div class="listen__empty" hidden>
        <p>No artists match your search.</p>
        <button type="button" class="btn btn--box btn--sm" data-clear>Clear <b>filters</b></button>
      </div>`;

    const cards = $$(".track-card", el);
    const input = $("input[type='search']", el);
    const chips = $$(".genre-chips .filter", el);
    const campusChips = $$(".campus-chips .filter", el);
    const count = $(".listen__count", el);
    const empty = $(".listen__empty", el);
    let genre = "", campus = "";

    const apply = () => {
      const q = input.value.trim();
      let n = 0;
      cards.forEach((c, i) => { const ok = matches(list[i], q, genre, campus); c.hidden = !ok; if (ok) n++; });
      empty.hidden = n > 0;
      count.textContent = n === list.length ? `${list.length} artists · press play on anyone` : `${n} of ${list.length} artists`;
    };
    input.addEventListener("input", apply);
    chips.forEach((c) => c.addEventListener("click", () => {
      genre = c.dataset.genre;
      chips.forEach((x) => x.setAttribute("aria-pressed", x === c));
      apply();
    }));
    campusChips.forEach((c) => c.addEventListener("click", () => {
      campus = c.dataset.campus;
      campusChips.forEach((x) => x.setAttribute("aria-pressed", x === c));
      apply();
    }));
    $("[data-clear]", el).addEventListener("click", () => {
      input.value = ""; genre = ""; campus = "";
      chips.forEach((x, k) => x.setAttribute("aria-pressed", k === 0));
      campusChips.forEach((x, k) => x.setAttribute("aria-pressed", k === 0));
      apply(); input.focus();
    });
    // Deep links: artists.html?genre=Jazz or ?q=kai
    if (params.get("q")) input.value = params.get("q");
    const g = params.get("genre");
    const gChip = g && chips.find((c) => c.dataset.genre.toLowerCase() === g.toLowerCase());
    if (gChip) { genre = gChip.dataset.genre; chips.forEach((x) => x.setAttribute("aria-pressed", x === gChip)); }
    apply();
  });

  // Artists page: search + genre + school/university filters
  const artistFilter = $("[data-artist-filters]");
  if (artistFilter) {
    const campuses = [...new Set(ARTISTS.map((a) => a.campus))];
    artistFilter.innerHTML = `
      <div class="roster-filter">
        ${searchBox("roster-search", "Search artist or genre…")}
        <label class="select-wrap"><span class="sr-only">Genre</span>
          <select id="roster-genre"><option value="">All genres</option>${allGenres(ARTISTS).map((g) => `<option>${esc(g)}</option>`).join("")}</select>
        </label>
      </div>
      <div class="campus-chips" role="group" aria-label="Filter by school or university">
        ${["All", ...campuses].map((c, i) => `<button type="button" class="filter" aria-pressed="${i === 0}" data-val="${i ? esc(c) : ""}">${esc(c)}</button>`).join("")}
      </div>
      <p class="roster-count" aria-live="polite"></p>`;
    const input = $("#roster-search", artistFilter);
    const genreSel = $("#roster-genre", artistFilter);
    const countEl = $(".roster-count", artistFilter);
    let campus = "";
    const apply = () => {
      let n = 0;
      $$(".circle-artist").forEach((card) => {
        const a = ARTISTS.find((x) => x.slug === card.dataset.slug);
        const ok = a && matches(a, input.value.trim(), genreSel.value, campus);
        card.style.display = ok ? "" : "none";
        if (ok) { n++; card.classList.add("is-in"); }
      });
      countEl.textContent = n ? `${n} ${n === 1 ? "artist" : "artists"}` : "No artists match. Try another name or genre.";
    };
    input.addEventListener("input", apply);
    genreSel.addEventListener("change", apply);
    $$(".campus-chips .filter", artistFilter).forEach((b) => b.addEventListener("click", () => {
      campus = b.dataset.val;
      $$(".campus-chips .filter", artistFilter).forEach((x) => x.setAttribute("aria-pressed", x === b));
      apply();
    }));
    // Deep link: artists.html?genre=Jazz or ?q=kai
    if (params.get("q")) input.value = params.get("q");
    if (params.get("genre")) genreSel.value = params.get("genre");
    apply();
  }

  // Single artist page
  const artistPage = $("[data-artist-page]");
  if (artistPage) {
    const a = ARTISTS.find((x) => x.slug === params.get("a"));
    if (!a) { location.replace("artists.html"); return; }
    document.title = `${a.name} | ${SITE.labelName}, Milestone Studios`;
    const first = a.name.split(" ")[0];
    artistPage.innerHTML = `
      <section class="artist-hero">
        <div class="container artist-hero__inner">
          ${portrait(a)}
          <div class="artist-hero__text">
            <span class="eyebrow">${esc(SITE.labelName)} · ${esc(a.year)}${a.sample ? " · Sample artist" : ""}</span>
            <h1>${esc(a.name)}</h1>
            <p class="artist-hero__meta">${esc(a.genre)} &nbsp;/&nbsp; ${esc(a.campus)}</p>
            ${artistSocials(a)}
          </div>
        </div>
      </section>
      <section class="section section--paper">
        <div class="container split split--top">
          <div>
            <div class="sec-title sec-title--left"><span class="mark"></span><h2>Listen <em>now</em></h2></div>
            ${playerHTML(a.music, "full") || '<p class="muted">Music coming soon.</p>'}
          </div>
          <div>
            <div class="sec-title sec-title--left"><span class="mark"></span><h2>About <em>${esc(first)}</em></h2></div>
            <p class="lead lead--dark">${esc(a.bio)}</p>
            ${a.stats ? `<div class="artist-stats">
              <div><b>${esc(a.stats.shows)}</b>Shows played</div>
              <div><b>${esc(a.stats.streams)}</b>Streams</div>
              <div><b>${esc(a.stats.releases)}</b>Releases</div></div>` : ""}
            <a class="btn btn--box" href="#book">Book <b>${esc(first)}</b></a>
          </div>
        </div>
      </section>`;
    $$("[data-artist-name]").forEach((el) => (el.textContent = first));
  }

  // Booking select
  const artistSelect = $("select[name='artist']");
  if (artistSelect) {
    artistSelect.innerHTML = `<option value="">Select an artist…</option>` +
      ARTISTS.map((a) => `<option value="${esc(a.name)}" data-slug="${esc(a.slug)}">${esc(a.name)} (${esc(a.genre)})</option>`).join("") +
      `<option value="Recommend an artist">Not sure, recommend someone</option>`;
    const preset = params.get("a") || params.get("artist");
    const opt = $$("option", artistSelect).find((o) => o.dataset.slug === preset);
    if (opt) artistSelect.value = opt.value;
  }

  /* ---------------- Open stages (events looking for artists) ---------------- */
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter((ev) => ev.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const fmt = (d, opts) => new Date(d + "T12:00:00").toLocaleDateString("en-ZA", opts);
  $$("[data-events]").forEach((el) => {
    if (!upcoming.length) { el.innerHTML = '<p class="muted">No open stages right now. Check back soon, or list your event below.</p>'; return; }
    el.innerHTML = upcoming.map((ev) => `
      <article class="event reveal" data-type="${esc(ev.type)}">
        <div class="event__date"><b>${fmt(ev.date, { day: "2-digit" })}</b><span>${fmt(ev.date, { month: "short" })}</span><small>${fmt(ev.date, { year: "numeric" })}</small></div>
        <div class="event__body">
          <div class="event__tags"><span class="chip">${esc(ev.type)}</span><span>${esc(ev.city)}</span>${ev.sample ? '<span class="sample">Sample</span>' : ""}</div>
          <h3>${esc(ev.title)}</h3>
          <p>${esc(ev.blurb)}</p>
          <ul class="event__facts"><li>${esc(ev.slots)}</li><li>${ev.paid ? "Paid" : "Sponsor needed"}</li><li>${esc(ev.genres)}</li></ul>
        </div>
        <div class="event__actions">
          <a class="btn btn--primary btn--sm" href="#get-involved" data-event-action="partner" data-event="${esc(ev.title)}">Sponsor <b>this stage</b></a>
          <a class="event__artist" href="label.html#apply">Artist? Join the roster →</a>
        </div>
      </article>`).join("");
  });
  const eventFilter = $("[data-event-filters]");
  if (eventFilter) {
    const types = [...new Set(upcoming.map((e) => e.type))];
    eventFilter.innerHTML = ["All", ...types].map((c, i) => `<button class="filter" aria-pressed="${i === 0}" data-val="${esc(c)}">${esc(c)}</button>`).join("");
    eventFilter.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      $$(".filter", eventFilter).forEach((x) => x.setAttribute("aria-pressed", x === b));
      $$(".event").forEach((c) => { c.style.display = b.dataset.val === "All" || c.dataset.type === b.dataset.val ? "" : "none"; });
    });
  }
  $$("select[name='event']").forEach((sel) => {
    sel.innerHTML = `<option value="">Select an event…</option>` + upcoming.map((ev) => `<option>${esc(ev.title)}</option>`).join("") + `<option>Any upcoming event</option>`;
  });

  /* ---------------- Tabs (tabbed forms etc.) ---------------- */
  const tabsets = $$("[data-tabs]").map((wrap) => {
    const tabs = $$(":scope > [role='tablist'] [role='tab']", wrap);
    const select = (t, focus) => {
      tabs.forEach((x) => { x.setAttribute("aria-selected", x === t); x.tabIndex = x === t ? 0 : -1; });
      $$(":scope > [role='tabpanel']", wrap).forEach((p) => (p.hidden = p.id !== t.getAttribute("aria-controls")));
      if (focus) t.focus();
    };
    tabs.forEach((t) => t.addEventListener("click", () => select(t)));
    $(":scope > [role='tablist']", wrap).addEventListener("keydown", (e) => {
      const cur = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
      const next = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (next) { e.preventDefault(); select(tabs[(cur + next + tabs.length) % tabs.length], true); }
    });
    return { wrap, tabs, select };
  });
  const openTab = (key) => {
    for (const ts of tabsets) {
      const t = ts.tabs.find((x) => x.dataset.key === key);
      if (t) { ts.select(t); return ts.wrap; }
    }
  };
  const hashKey = location.hash.replace("#", "");
  if (hashKey && openTab(hashKey)) {
    const jump = () => { const t = $("#get-involved"); if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - $(".mainbar").offsetHeight - ($(".tabbar").offsetHeight || 0), behavior: "instant" }); };
    if (document.readyState === "complete") jump(); else window.addEventListener("load", jump);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-event-action]");
    if (!b) return;
    e.preventDefault();
    const wrap = openTab(b.dataset.eventAction);
    if (!wrap) return;
    if (b.dataset.eventAction === "perform") {
      const sel = $("select[name='event']", wrap); if (sel) sel.value = b.dataset.event;
    } else if (b.dataset.budget) {
      const src = $("#p-source"); if (src) src.value = b.dataset.budget;
    } else if (b.dataset.eventAction === "partner" && b.dataset.event) {
      const msg = $("#p-msg"); if (msg && !msg.value) msg.value = `We're interested in sponsoring: ${b.dataset.event}`;
      const what = $("#p-interest"); if (what) what.value = "Sponsor a concert or event";
    }
    $("#get-involved").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------------- Videos ---------------- */
  const thumb = (v) => (ytId(v.youtube) ? `https://i.ytimg.com/vi/${ytId(v.youtube)}/hqdefault.jpg` : v.poster || "");
  function videoCard(v, i) {
    const playable = !!ytId(v.youtube);
    return `
      <button class="video-card reveal" data-cat="${esc(v.category)}" data-video="${i}" ${playable ? "" : "disabled"} aria-label="${esc(v.title)}${playable ? "" : " (coming soon)"}">
        <div class="video-card__thumb">
          <img src="${esc(thumb(v))}" alt="" loading="lazy">
          ${playable ? `<span class="play">${ICONS.play}</span>` : `<span class="video-card__soon">Coming soon</span>`}
        </div>
        <div><span class="video-card__cat">${esc(v.category)}</span><h3>${esc(v.title)}</h3></div>
      </button>`;
  }

  $$("[data-videos]").forEach((el) => {
    const limit = Number(el.dataset.limit) || VIDEOS.length;
    // Playable videos first, "coming soon" placeholders after
    const list = VIDEOS.map((v, i) => ({ v, i })).sort((a, b) => !!ytId(b.v.youtube) - !!ytId(a.v.youtube));
    el.innerHTML = list.slice(0, limit).map(({ v, i }) => videoCard(v, i)).join("");
  });

  const videoFilter = $("[data-video-filters]");
  if (videoFilter) {
    const cats = ["All", "Behind the Scenes", "Studio Tour", "Artist Sessions", "Productions"];
    videoFilter.innerHTML = cats.map((c, i) => `<button class="filter" aria-pressed="${i === 0}" data-val="${esc(c)}">${esc(c)}</button>`).join("");
    videoFilter.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      $$(".filter", videoFilter).forEach((x) => x.setAttribute("aria-pressed", x === b));
      $$(".video-card").forEach((c) => { c.style.display = b.dataset.val === "All" || c.dataset.cat === b.dataset.val ? "" : "none"; });
    });
  }

  const featured = $("[data-video-featured]");
  if (featured) {
    const v = VIDEOS.find((x) => x.featured && ytId(x.youtube)) || VIDEOS.find((x) => ytId(x.youtube));
    if (v) {
      const id = ytId(v.youtube);
      // Poster first, player loads on click (keeps the page fast)
      featured.innerHTML = `
        <button class="video-feature__poster" aria-label="Play: ${esc(v.title)}">
          <img src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" onerror="this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'" alt="">
          <span class="play">${ICONS.play}</span>
          <span class="video-feature__caption"><span class="video-card__cat">${esc(v.category)}</span><b>${esc(v.title)}</b></span>
        </button>`;
      $("button", featured).addEventListener("click", () => {
        featured.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${esc(v.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      });
    }
  }

  // Lightbox
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML = `<button class="lightbox__close" aria-label="Close video">×</button><div class="lightbox__inner"></div>`;
  document.body.append(lb);
  let lastFocus = null;
  const closeLb = () => { lb.classList.remove("is-open"); $(".lightbox__inner", lb).innerHTML = ""; lastFocus && lastFocus.focus(); };
  document.addEventListener("click", (e) => {
    const card = e.target.closest("[data-video]");
    if (card && !card.disabled) {
      const v = VIDEOS[Number(card.dataset.video)];
      lastFocus = card;
      $(".lightbox__inner", lb).innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId(v.youtube)}?autoplay=1&rel=0" title="${esc(v.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      lb.classList.add("is-open");
      $(".lightbox__close", lb).focus();
    }
    if (e.target === lb || e.target.closest(".lightbox__close")) closeLb();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("is-open")) closeLb(); });

  /* ---------------- Enquiry type preset (?type=tour) ---------------- */
  const typeSelect = $("select[name='enquiry_type']");
  const typeKey = params.get("type");
  if (typeSelect && typeKey) {
    const opt = $$("option", typeSelect).find((o) => o.dataset.key === typeKey);
    if (opt) typeSelect.value = opt.value;
  }

  /* ---------------- Under-18 applicants need a parent / guardian ---------------- */
  $$("form").forEach((form) => {
    const age = $("[name='age']", form), guardian = $("[name='guardian']", form);
    if (!age || !guardian) return;
    const sync = () => {
      const minor = age.value && Number(age.value) < 18;
      guardian.required = !!minor;
      guardian.closest(".field").classList.toggle("is-required", !!minor);
    };
    age.addEventListener("input", sync);
    sync();
  });

  /* ---------------- Forms ---------------- */
  $$("form[data-enquiry]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const data = new FormData(form);
      const subject = form.dataset.enquiry;
      data.append("_subject", `Website: ${subject}`);
      const status = $(".form__status", form);
      const btn = $("button[type='submit']", form);
      const done = (msg) => {
        if (status) { status.textContent = msg; status.classList.add("is-visible"); }
        else if (btn) { btn.textContent = "Thanks ✓"; }
      };

      if (SITE.formEndpoint) {
        btn && (btn.disabled = true);
        try {
          const r = await fetch(SITE.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
          if (!r.ok) throw new Error(r.status);
          form.reset();
          done(form.dataset.success || "Thanks, we've got your enquiry and will be in touch within two working days.");
        } catch {
          done(`Something went wrong. Please email us at ${SITE.email}.`);
        } finally { btn && (btn.disabled = false); }
        return;
      }

      // Fallback: open the visitor's email app with the enquiry pre-filled
      const lines = [];
      for (const [k, v] of data.entries()) {
        if (k.startsWith("_") || !v) continue;
        const label = form.querySelector(`[name="${k}"]`)?.closest(".field")?.querySelector("label")?.innerText.replace(/\(optional\)/i, "").trim() || k;
        lines.push(`${label}: ${v}`);
      }
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website: " + subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      done("Your email app should open with your enquiry ready to send.");
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  $$(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));
})();
