/* ============================================================
   Trigun Robotic Systems — main.js
   ------------------------------------------------------------
   ASSETS / LINKS TO REPLACE BEFORE GOING LIVE
   Every external file or URL the site uses is defined below —
   swap the placeholder value and you are done (no markup hunt):

     LOGO_SRC         — company logo image (nav + footer)
     HERO_VIDEO_SRC   — hero background loop (mp4)
     HERO_POSTER_SRC  — hero video poster frame (jpg/png)
     ABOUT_VIDEO_SRC  — about-section loop (mp4, optional)
     GOOGLE_FORM_URL  — inquiry Google Form link
     LINKEDIN_URL     — LinkedIn profile link
     TWITTER_URL      — X / Twitter profile link

   ...plus, inside each object of the `products` array:
     image — card thumbnail / modal image (jpg)
     video — optional hover-loop mp4 (null = static image only)
   ============================================================ */

const LOGO_SRC = "assets/logo.png";
const HERO_VIDEO_SRC = "assets/hero.mp4";
const HERO_POSTER_SRC = "assets/hero-poster.jpg";
const ABOUT_VIDEO_SRC = "assets/about.mp4";
const GOOGLE_FORM_URL = "https://forms.google.com/placeholder"; // TODO: real Google Form
const LINKEDIN_URL = "#"; // TODO: real LinkedIn URL
const TWITTER_URL = "#"; // TODO: real X/Twitter URL

/* ---------- Product data ---------- */

const products = [
  {
    title: "Smart Health Drones",
    category: "Drones",
    description: "Smart drones for healthcare management, emergency response, and medical logistics.",
    image: "assets/products/smart-health-drones.jpg",
    video: null,
  },
  {
    title: "AI Based Yoga Application",
    category: "Wellness",
    description: "Real-time posture correction and personalized routines for yoga practice.",
    image: "assets/products/ai-yoga.jpg",
    video: null,
  },
  {
    title: "Advanced Anti-Drone System",
    category: "Defense",
    description: "Military-grade protection against unauthorized UAVs with 360° radar coverage.",
    image: "assets/products/anti-drone.jpg",
    video: null,
  },
  {
    title: "AR Indoor Navigation System",
    category: "Navigation",
    description: "AR-enhanced navigation with centimeter-accurate positioning for healthcare, industrial, and retail.",
    image: "assets/products/ar-indoor-nav.jpg",
    video: null,
  },
  {
    title: "Autonomous Underwater Drone",
    category: "Drones",
    description: "Advanced underwater vehicle for infrastructure inspection, environmental monitoring, and search & rescue.",
    image: "assets/products/underwater-drone.jpg",
    video: null,
  },
  {
    title: "Precision Agriculture Drone",
    category: "Agriculture",
    description: "AI-enabled drones for crop monitoring, smart spraying, and soil analysis.",
    image: "assets/products/agri-drone.jpg",
    video: null,
  },
  {
    title: "AI Based Gym Trainer",
    category: "Fitness",
    description: "Personalized workout plans and real-time form correction using AI vision.",
    image: "assets/products/ai-gym.jpg",
    video: null,
  },
  {
    title: "AI-Powered Drones for Smart Cities",
    category: "Drones",
    description: "Autonomous drones for urban management, emergency response, and medical logistics.",
    image: "assets/products/smart-city-drones.jpg",
    video: null,
  },
  {
    title: "Wireless ROV System",
    category: "Navigation",
    description: "Remotely Operated Vehicle with GNSS-denied navigation for industrial, scientific, and defense applications.",
    image: "assets/products/rov-system.jpg",
    video: null,
  },
  {
    title: "Augmented Reality in Healthcare",
    category: "Healthcare",
    description: "Enhancing medical diagnostics and procedural guidance with AR Doctor applications.",
    image: "assets/products/ar-healthcare.jpg",
    video: null,
  },
  {
    title: "IoT Applications",
    category: "IoT",
    description: "Visionary IoT solutions for Healthcare, Agriculture, Academics, and Industry.",
    image: "assets/products/iot-applications.jpg",
    video: null,
  },
  {
    title: "AR-based Aircraft Maintenance System",
    category: "Maintenance",
    description: "Augmented Reality solutions for guided aircraft inspection, repair, and training, enhancing efficiency and safety.",
    image: "assets/products/ar-aircraft-maintenance.jpg",
    video: null,
  },
  {
    title: "Eagle Eye AI Surveillance System",
    category: "IoT",
    description: "Intelligent multi-camera AI surveillance platform for real-time detection, recognition, and analytics.",
    image: "assets/products/eagle-eye.jpg",
    video: null,
  },
  {
    title: "Current — Secure Messenger",
    category: "IoT",
    description: "End-to-end encrypted messenger with zero server-side storage, voice/video calling, and full data privacy by design.",
    image: "assets/products/current-messenger.jpg",
    video: null,
  },
];

const FILTER_CATEGORIES = [
  "All", "Drones", "Defense", "Agriculture", "Navigation",
  "Healthcare", "IoT", "Wellness", "Fitness", "Maintenance",
];

/* ---------- About focus pillars ---------- */

const ICON = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="#3E6FB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const pillars = [
  {
    text: "Smart health drones for emergency medical delivery",
    icon: ICON('<path d="M12 3v4M3 12h4M17 12h4M12 17v4"/><circle cx="12" cy="12" r="3.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>'),
  },
  {
    text: "Anti-drone defense systems",
    icon: ICON('<path d="M12 3 4 6.5v5c0 4.6 3.4 8.4 8 9.5 4.6-1.1 8-4.9 8-9.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/>'),
  },
  {
    text: "Precision agriculture UAVs",
    icon: ICON('<path d="M12 21c4-2.5 7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 3 8.5 7 11Z"/><path d="M12 8v6M9.5 10.5 12 13l2.5-2.5"/>'),
  },
  {
    text: "Autonomous underwater vehicles for GNSS-denied environments",
    icon: ICON('<path d="M2 15c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/><path d="M2 19c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/><ellipse cx="12" cy="8" rx="6" ry="3.5"/><path d="M18 8h3"/>'),
  },
  {
    text: "AR-based indoor navigation systems",
    icon: ICON('<path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3"/><path d="m12 8 4 2.3v4.4L12 17l-4-2.3v-4.4L12 8Z"/>'),
  },
];

/* ---------- Training accordion data ---------- */

const trainingTracks = [
  {
    num: "01",
    title: "Drone Technology",
    items: [
      "Flight Dynamics & Control Systems",
      "Payload Integration & Mission Planning",
      "Regulatory Compliance (DGCA, NPNT)",
      "Drone-as-a-Service",
    ],
  },
  {
    num: "02",
    title: "Navigation Systems",
    items: [
      "RF-Based Indoor Navigation",
      "GPS & GNSS Modules",
      "SLAM & Path Planning",
      "AR Integration",
    ],
  },
  {
    num: "03",
    title: "Robotics",
    items: [
      "Embedded Systems & Actuation",
      "ROS",
      "AI for Robotics",
      "Field Robotics",
    ],
  },
  {
    num: "04",
    title: "Customization & Delivery",
    items: [
      "Academic Programs",
      "Government Programs",
      "Industrial Partner Programs",
    ],
  },
];

/* ============================================================
   Wiring
   ============================================================ */

/* ---------- Asset constants → DOM ---------- */

document.getElementById("nav-logo").src = LOGO_SRC;
document.getElementById("footer-logo").src = LOGO_SRC;

const heroVideo = document.getElementById("hero-video");
heroVideo.src = HERO_VIDEO_SRC;
heroVideo.poster = HERO_POSTER_SRC;

const aboutVideo = document.getElementById("about-video");
aboutVideo.src = ABOUT_VIDEO_SRC;

// Some browsers defer offscreen muted autoplay — nudge each loop video
// to play once it can, and again when it scrolls into view.
[heroVideo, aboutVideo].forEach((v) => {
  v.addEventListener("canplay", () => v.paused && v.play().catch(() => {}));
  new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && v.paused) v.play().catch(() => {});
    });
  }).observe(v);
});

document.getElementById("partnership-cta").href = GOOGLE_FORM_URL;
document.getElementById("contact-form-cta").href = GOOGLE_FORM_URL;

/* ---------- Sticky nav ---------- */

const nav = document.getElementById("site-nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- About pillars ---------- */

const pillarsEl = document.getElementById("pillars");
pillarsEl.innerHTML = pillars
  .map((p) => `<div class="pillar-card" data-reveal>${p.icon}<p>${p.text}</p></div>`)
  .join("");

/* ---------- Product grid + filters ---------- */

const gridEl = document.getElementById("product-grid");
gridEl.innerHTML = products
  .map(
    (p, i) => `
  <article class="product-card" data-index="${i}" data-category="${p.category}" data-reveal tabindex="0" role="button" aria-label="${p.title}">
    <div class="product-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      ${p.video ? `<video src="${p.video}" muted loop playsinline preload="none"></video>` : ""}
    </div>
    <div class="product-body">
      <span class="badge">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
  </article>`
  )
  .join("");

const chipsEl = document.getElementById("filter-chips");
chipsEl.innerHTML = FILTER_CATEGORIES.map(
  (c, i) => `<button class="chip${i === 0 ? " active" : ""}" data-filter="${c}" role="tab" aria-selected="${i === 0}">${c}</button>`
).join("");

chipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chipsEl.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c === chip);
    c.setAttribute("aria-selected", String(c === chip));
  });
  const filter = chip.dataset.filter;
  gridEl.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("filter-hide", filter !== "All" && card.dataset.category !== filter);
  });
});

/* ---------- Product card hover video crossfade ---------- */

gridEl.querySelectorAll(".product-card").forEach((card) => {
  const vid = card.querySelector("video");
  if (!vid) return;
  card.addEventListener("mouseenter", () => {
    card.classList.add("video-playing");
    vid.play().catch(() => {});
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("video-playing");
    vid.pause();
    vid.currentTime = 0;
  });
});

/* ---------- Product modal (scale+fade from card position) ---------- */

const backdrop = document.getElementById("modal-backdrop");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalBadge = document.getElementById("modal-badge");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

function openModal(card) {
  const p = products[Number(card.dataset.index)];
  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalBadge.textContent = p.category;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.description;

  backdrop.hidden = false;
  document.body.style.overflow = "hidden";

  // Animate from the clicked card's position: start the modal transformed
  // to overlap the card, then release to identity on the next frame.
  const cardRect = card.getBoundingClientRect();
  const modalRect = modal.getBoundingClientRect();
  const dx = cardRect.left + cardRect.width / 2 - (modalRect.left + modalRect.width / 2);
  const dy = cardRect.top + cardRect.height / 2 - (modalRect.top + modalRect.height / 2);
  const scale = Math.max(0.25, cardRect.width / modalRect.width);

  modal.style.transition = "none";
  modal.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  modal.style.opacity = "0.4";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.style.transition = "";
      modal.style.transform = "translate(0, 0) scale(1)";
      modal.style.opacity = "1";
      backdrop.classList.add("open");
    });
  });
}

function closeModal() {
  backdrop.classList.remove("open");
  modal.style.transform = "scale(0.92)";
  modal.style.opacity = "0";
  setTimeout(() => {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    modal.style.transform = "";
    modal.style.opacity = "";
  }, 300);
}

gridEl.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (card) openModal(card);
});
gridEl.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".product-card");
  if (card) {
    e.preventDefault();
    openModal(card);
  }
});

document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !backdrop.hidden) closeModal();
});

/* ---------- Training accordion ---------- */

const accEl = document.getElementById("accordion");
accEl.innerHTML = trainingTracks
  .map(
    (t, i) => `
  <div class="acc-item" data-reveal>
    <button class="acc-header" aria-expanded="false" aria-controls="acc-panel-${i}">
      <span class="acc-num">${t.num}</span>
      <span class="acc-title">${t.title}</span>
      <span class="acc-icon" aria-hidden="true"></span>
    </button>
    <div class="acc-panel" id="acc-panel-${i}">
      <div class="acc-panel-inner">
        ${t.items.map((s) => `<span class="sub-pill">${s}</span>`).join("")}
      </div>
    </div>
  </div>`
  )
  .join("");

accEl.addEventListener("click", (e) => {
  const header = e.target.closest(".acc-header");
  if (!header) return;
  const item = header.parentElement;
  const wasOpen = item.classList.contains("open");

  // only one open at a time
  accEl.querySelectorAll(".acc-item.open").forEach((it) => {
    it.classList.remove("open");
    it.querySelector(".acc-header").setAttribute("aria-expanded", "false");
    it.querySelector(".acc-panel").style.maxHeight = "";
  });

  if (!wasOpen) {
    item.classList.add("open");
    header.setAttribute("aria-expanded", "true");
    const panel = item.querySelector(".acc-panel");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});

/* ---------- Footer: product links + social icons ---------- */

document.getElementById("footer-product-links").innerHTML = products
  .map((p) => `<li><a href="#products">${p.title}</a></li>`)
  .join("");

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v5M8 8v.01M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></svg>',
  },
  {
    label: "X (Twitter)",
    href: TWITTER_URL,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M20 4 4 20"/></svg>',
  },
  {
    label: "Email",
    href: "mailto:trigunroboticsystems@gmail.com",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7L22 7"/></svg>',
  },
];

document.getElementById("footer-social").innerHTML = SOCIAL_LINKS.map(
  (s) => `<a href="${s.href}" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${s.icon}</a>`
).join("");

/* ---------- Scroll reveal ---------- */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("[data-reveal]").forEach((el, i) => {
  el.style.setProperty("--reveal-delay", `${(i % 6) * 0.08}s`);
  revealObserver.observe(el);
});

/* ---------- Stats count-up ---------- */

function countUp(el, target, duration = 1400) {
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
    el.textContent = Math.round(eased * target);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statsCard = document.querySelector(".stats-card");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll("[data-count]").forEach((el) => {
        countUp(el, Number(el.dataset.count));
      });
      statsObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);
statsObserver.observe(statsCard);
