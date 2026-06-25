/* ============================================================
   F24 AUTO CARE — Shared site script
   Injects chrome (loader, nav, footer, FABs, lightbox) and
   wires interactions: scroll nav, reveals, counters, sliders,
   gallery filter + lightbox, FAQ, contact form.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Business constants ---- */
  var BIZ = {
    name: "F24 AUTO CARE",
    phone: "+919731943666",
    phoneDisplay: "+91 97319 43666",
    wa: "919217002598",
    waMsg: "Hi F24 Auto Care! I'd like to know more about your PPF / Ceramic Coating / Detailing services.",
    addr: "65 Old No. 949, 3rd Main, 3rd Cross Road, Vijayanagar, Bengaluru, Karnataka 560040",
    ig: "https://www.instagram.com/f24_car_care/",
    fb: "https://www.facebook.com/F24CarCare/",
    yt: "https://www.youtube.com/channel/UCoWxgF_ELro7hiCnMOy78ug",
    x: "https://x.com/f24carcare"
  };
  window.F24 = BIZ;

  function waLink() {
    return "https://wa.me/" + BIZ.wa + "?text=" + encodeURIComponent(BIZ.waMsg);
  }

  /* ---- SVG icon set ---- */
  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.51 5.26l-.999 3.648 3.477-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    drag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7 4 12l4 5M16 7l4 5-4 5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z"/></svg>',
    google: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.3 12 5.3 12 5.3s-7.3 0-8.84.4A2.5 2.5 0 0 0 1.4 7.46C1 9 1 12 1 12s0 3.2.4 4.74a2.5 2.5 0 0 0 1.76 1.77c1.54.39 8.84.39 8.84.39s7.3 0 8.84-.4a2.5 2.5 0 0 0 1.76-1.76C23 15.2 23 12 23 12zM9.75 15.02V8.98L15.5 12z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.58L23 22h-6.9l-5.4-7.06L4.5 22H1.4l8-9.18L1 2h7.07l4.88 6.45zM17.7 20h1.9L7.4 4h-2z"/></svg>'
  };
  window.F24ICONS = I;

  /* ---- Nav model ---- */
  var NAV = [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "#", drop: [
      { label: "Paint Protection Film", href: "ppf.html" },
      { label: "Ceramic Coating", href: "ceramic-coating.html" },
      { label: "Paint Correction & Restoration", href: "paint-correction.html" },
      { label: "Car Detailing", href: "detailing.html" },
      { label: "Window Tinting", href: "window-tinting.html" }
    ]},
    { label: "Portfolio", href: "portfolio.html" },
    { label: "Reviews", href: "reviews.html" },
    { label: "FAQs", href: "faqs.html" },
    { label: "Contact", href: "contact.html" }
  ];

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function isActive(href) {
    if (href.charAt(0) === "#") return false;
    return href.toLowerCase() === here;
  }

  /* ---- Build chrome ---- */
  function buildChrome() {
    /* Loader */
    var loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML =
      '<div class="loader__mark">F24</div>' +
      '<div class="loader__bar"><i></i></div>' +
      '<div class="loader__txt">Detailing the experience…</div>';
    document.body.appendChild(loader);

    /* Progress + ambience */
    var prog = document.createElement("div"); prog.id = "progress"; document.body.appendChild(prog);
    var bg = document.createElement("div"); bg.className = "bg-fx"; document.body.appendChild(bg);
    var o1 = document.createElement("div"); o1.className = "orb o1"; document.body.appendChild(o1);
    var o2 = document.createElement("div"); o2.className = "orb o2"; document.body.appendChild(o2);
    var sf = document.createElement("canvas"); sf.id = "starfield"; document.body.appendChild(sf);

    /* Navbar */
    var nav = document.createElement("header");
    nav.className = "nav";
    var links = NAV.map(function (n) {
      if (n.drop) {
        var sub = n.drop.map(function (d) {
          return '<a href="' + d.href + '" class="' + (isActive(d.href) ? "active" : "") + '">' + d.label + "</a>";
        }).join("");
        var anyActive = n.drop.some(function (d) { return isActive(d.href); });
        return '<div class="has-drop"><a href="#" class="' + (anyActive ? "active" : "") + '">' + n.label + " ▾</a><div class=\"drop\">" + sub + "</div></div>";
      }
      return '<a href="' + n.href + '" class="' + (isActive(n.href) ? "active" : "") + '">' + n.label + "</a>";
    }).join("");

    nav.innerHTML =
      '<div class="nav__inner">' +
        '<a href="index.html" class="brand"><span class="brand__mark">F24</span><span>F24 Auto Care<small>FLAUNT YOUR COLOR</small></span></a>' +
        '<nav class="nav__links">' + links + '</nav>' +
        '<div class="nav__cta">' +
          '<a href="tel:' + BIZ.phone + '" class="nav__phone">' + I.phone + BIZ.phoneDisplay + '</a>' +
          '<a href="contact.html" class="btn btn-primary">Book Now</a>' +
        '</div>' +
        '<button class="burger" aria-label="Menu"><span></span></button>' +
      '</div>';
    document.body.appendChild(nav);

    /* Mobile menu */
    var mob = document.createElement("div");
    mob.className = "mobile-menu";
    var mlinks = "";
    NAV.forEach(function (n) {
      if (n.drop) {
        mlinks += '<a href="#" class="mm-head">' + n.label + "</a>";
        n.drop.forEach(function (d) {
          mlinks += '<a href="' + d.href + '" class="mm-sub ' + (isActive(d.href) ? "active" : "") + '">— ' + d.label + "</a>";
        });
      } else {
        mlinks += '<a href="' + n.href + '" class="' + (isActive(n.href) ? "active" : "") + '">' + n.label + "</a>";
      }
    });
    mob.innerHTML = mlinks +
      '<div class="mm-cta">' +
        '<a href="' + waLink() + '" target="_blank" rel="noopener" class="btn btn-ghost">' + I.wa + ' WhatsApp Us</a>' +
        '<a href="tel:' + BIZ.phone + '" class="btn btn-primary">' + I.phone + ' Call ' + BIZ.phoneDisplay + '</a>' +
      '</div>';
    document.body.appendChild(mob);

    /* Footer */
    var f = document.createElement("footer");
    f.className = "footer";
    f.innerHTML =
      '<div class="container">' +
        '<div class="footer__grid">' +
          '<div class="footer__about">' +
            '<a href="index.html" class="brand"><span class="brand__mark">F24</span><span>F24 Auto Care<small>FLAUNT YOUR COLOR</small></span></a>' +
            '<p>Bengaluru\'s trusted studio for Paint Protection Film, Ceramic Coating, Detailing &amp; Window Tinting. Crafting flawless finishes since 2014.</p>' +
            '<div class="socials">' +
              '<a href="' + BIZ.ig + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.ig + '</a>' +
              '<a href="' + BIZ.fb + '" target="_blank" rel="noopener" aria-label="Facebook">' + I.fb + '</a>' +
              '<a href="' + BIZ.yt + '" target="_blank" rel="noopener" aria-label="YouTube">' + I.yt + '</a>' +
              '<a href="' + BIZ.x + '" target="_blank" rel="noopener" aria-label="X">' + I.x + '</a>' +
            '</div>' +
          '</div>' +
          '<div><h4>Services</h4>' +
            '<a href="ppf.html">Paint Protection Film</a>' +
            '<a href="ceramic-coating.html">Ceramic Coating</a>' +
            '<a href="paint-correction.html">Paint Correction</a>' +
            '<a href="detailing.html">Car Detailing</a>' +
            '<a href="window-tinting.html">Window Tinting</a>' +
          '</div>' +
          '<div><h4>Explore</h4>' +
            '<a href="portfolio.html">Portfolio</a>' +
            '<a href="reviews.html">Reviews</a>' +
            '<a href="faqs.html">FAQs</a>' +
            '<a href="contact.html">Contact</a>' +
          '</div>' +
          '<div><h4>Visit Us</h4>' +
            '<a href="https://maps.google.com/?q=' + encodeURIComponent(BIZ.addr) + '" target="_blank" rel="noopener">' + BIZ.addr + '</a>' +
            '<a href="tel:' + BIZ.phone + '">' + BIZ.phoneDisplay + '</a>' +
            '<a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp: +91 92170 02598</a>' +
            '<a href="#">Mon–Sun · 10:00 AM – 8:30 PM</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bar">' +
          '<span>© ' + new Date().getFullYear() + ' F24 Auto Care. All rights reserved.</span>' +
          '<span class="status"><i class="dot"></i> Open today · 10 AM – 8:30 PM</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(f);

    /* FABs */
    var fab = document.createElement("div");
    fab.className = "fab-stack";
    fab.innerHTML =
      '<a class="fab top" href="#" aria-label="Back to top">' + I.up + '</a>' +
      '<a class="fab call" href="tel:' + BIZ.phone + '" aria-label="Call">' + I.phone + '</a>' +
      '<a class="fab wa" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + I.wa + '</a>';
    document.body.appendChild(fab);

    /* Lightbox */
    var lb = document.createElement("div");
    lb.id = "lightbox";
    lb.innerHTML =
      '<button class="lb-close" aria-label="Close">' + I.close + '</button>' +
      '<button class="lb-nav prev" aria-label="Previous">' + I.chevL + '</button>' +
      '<img alt="F24 Auto Care work">' +
      '<button class="lb-nav next" aria-label="Next">' + I.chevR + '</button>';
    document.body.appendChild(lb);
  }

  /* ---- Interactions ---- */
  function wire() {
    var nav = document.querySelector(".nav");
    var prog = document.getElementById("progress");
    var topFab = document.querySelector(".fab.top");

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle("scrolled", y > 30);
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      if (topFab) topFab.classList.toggle("show", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (topFab) topFab.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });

    /* burger */
    var burger = document.querySelector(".burger");
    var mob = document.querySelector(".mobile-menu");
    if (burger && mob) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("open");
        mob.classList.toggle("open");
        document.body.style.overflow = mob.classList.contains("open") ? "hidden" : "";
      });
      mob.querySelectorAll("a:not(.mm-head)").forEach(function (a) {
        a.addEventListener("click", function () {
          burger.classList.remove("open"); mob.classList.remove("open"); document.body.style.overflow = "";
        });
      });
    }

    /* card glow follow */
    document.querySelectorAll(".card").forEach(function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (e.clientX - r.left) + "px");
        c.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });

    revealObserver();
    counters();
    beforeAfter();
    gallery();
    faqs();
    contactForm();
    starfield();
  }

  /* reveal on scroll */
  function revealObserver() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* count-up */
  function counters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "", dec = (el.getAttribute("data-dec") | 0);
        var start = performance.now(), dur = 1800;
        function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var e = 1 - Math.pow(2, -10 * p); // easeOutExpo
          var v = target * e;
          el.textContent = (dec ? v.toFixed(dec) : Math.floor(v).toLocaleString("en-IN")) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = (dec ? target.toFixed(dec) : target.toLocaleString("en-IN")) + suffix;
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* before/after slider */
  function beforeAfter() {
    document.querySelectorAll(".ba").forEach(function (ba) {
      var after = ba.querySelector(".ba__after"), handle = ba.querySelector(".ba__handle");
      var dragging = false;
      function set(x) {
        var r = ba.getBoundingClientRect();
        var pct = Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
        after.style.clipPath = "inset(0 0 0 " + pct + "%)";
        handle.style.left = pct + "%";
      }
      function down(e) { dragging = true; set((e.touches ? e.touches[0] : e).clientX); }
      function move(e) { if (dragging) set((e.touches ? e.touches[0] : e).clientX); }
      function up() { dragging = false; }
      ba.addEventListener("mousedown", down); ba.addEventListener("touchstart", down, { passive: true });
      window.addEventListener("mousemove", move); window.addEventListener("touchmove", move, { passive: true });
      window.addEventListener("mouseup", up); window.addEventListener("touchend", up);
      ba.addEventListener("mousemove", function (e) { if (!("ontouchstart" in window)) set(e.clientX); });
    });
  }

  /* gallery filter + lightbox */
  function gallery() {
    var filters = document.querySelectorAll(".filter");
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        var cat = f.getAttribute("data-filter");
        document.querySelectorAll(".filter").forEach(function (x) { x.classList.remove("active"); });
        f.classList.add("active");
        document.querySelectorAll(".gallery .shot").forEach(function (s) {
          var show = cat === "all" || s.getAttribute("data-cat") === cat;
          s.classList.toggle("hide", !show);
        });
      });
    });

    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var img = lb.querySelector("img");
    var current = [], idx = 0;
    function open(list, i) { current = list; idx = i; img.src = current[idx]; lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    function go(d) { idx = (idx + d + current.length) % current.length; img.src = current[idx]; }

    function bindGroup(sel) {
      var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
      var srcs = nodes.map(function (n) { return n.getAttribute("data-full") || n.querySelector("img").src; });
      nodes.forEach(function (n, i) {
        n.addEventListener("click", function () { open(srcs, i); });
      });
    }
    bindGroup(".gallery .shot");
    bindGroup(".strip .shot");

    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".prev").addEventListener("click", function (e) { e.stopPropagation(); go(-1); });
    lb.querySelector(".next").addEventListener("click", function (e) { e.stopPropagation(); go(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    });
  }

  /* FAQ accordion */
  function faqs() {
    document.querySelectorAll(".faq__q").forEach(function (q) {
      q.addEventListener("click", function () {
        var item = q.closest(".faq"), a = item.querySelector(".faq__a");
        var open = item.classList.contains("open");
        item.classList.toggle("open");
        a.style.maxHeight = open ? null : a.scrollHeight + "px";
      });
    });
  }

  /* contact form mock */
  function contactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("[type=submit]");
      var status = form.querySelector(".form-status");
      var label = btn.textContent;
      btn.disabled = true; btn.textContent = "Sending…";
      setTimeout(function () {
        btn.disabled = false; btn.textContent = label;
        if (status) {
          status.classList.add("show", "ok");
          var name = (form.querySelector("[name=name]") || {}).value || "there";
          status.textContent = "Thanks " + name + "! Your request has reached F24 Auto Care. We'll call you back shortly — or message us on WhatsApp for an instant reply.";
        }
        form.reset();
      }, 1400);
    });
  }

  /* lightweight starfield */
  function starfield() {
    var c = document.getElementById("starfield");
    if (!c || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    var ctx = c.getContext("2d"), stars = [], W, H, raf;
    function resize() {
      W = c.width = innerWidth; H = c.height = innerHeight;
      var n = Math.min(150, Math.floor(W * H / 14000));
      stars = [];
      for (var i = 0; i < n; i++) stars.push({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .2,
        a: Math.random(), s: Math.random() * .015 + .004, dx: (Math.random() - .5) * .08, dy: (Math.random() - .5) * .08
      });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        st.a += st.s; var tw = (Math.sin(st.a) + 1) / 2;
        st.x += st.dx; st.y += st.dy;
        if (st.x < 0) st.x = W; if (st.x > W) st.x = 0; if (st.y < 0) st.y = H; if (st.y > H) st.y = 0;
        ctx.globalAlpha = .15 + tw * .6;
        ctx.fillStyle = tw > .7 ? "#F5B301" : "#cdd3df";
        ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); draw();
    var t; window.addEventListener("resize", function () { cancelAnimationFrame(raf); clearTimeout(t); t = setTimeout(function () { resize(); draw(); }, 200); });
  }

  /* ---- Boot ---- */
  buildChrome();
  document.addEventListener("DOMContentLoaded", wire);
  window.addEventListener("load", function () {
    setTimeout(function () {
      var l = document.getElementById("loader");
      if (l) l.classList.add("done");
    }, 500);
  });
})();
