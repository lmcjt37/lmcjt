const work = [
  {
    title: "Coffee Dev",
    proof: "Turns GitHub activity into a readable cafe simulation with authored layouts, idle loops, and product-facing progression.",
    tags: ["Next.js", "PixiJS", "simulation UX"],
    glow: "rgba(98, 213, 197, 0.78)",
    href: "projects/coffee-dev.html",
  },
  {
    title: "Cosmographer",
    proof: "A way to visualise a project’s domains and cross-cutting concerns by traversing code, tracing connections, and rendering the result with Cosmograph.",
    tags: ["Cosmograph", "React", "graph tooling"],
    glow: "rgba(139, 93, 255, 0.66)",
    href: "projects/cosmographer.html",
  },
  {
    title: "skills",
    proof: "A personal operating layer for AI-assisted engineering, built around repeatable commands like /dev-plan and /journal to turn recurring workflows into durable skills.",
    tags: ["AI workflows", "DX", "tooling"],
    glow: "rgba(255, 125, 85, 0.68)",
    href: "projects/skills.html",
  },
];

const notes = [
  {
    type: "Essay",
    title: "The AI story so far...",
    text: "Early thoughts on using AI seriously in engineering work without handing over judgment.",
    href: "notes/the-ai-story-so-far.html",
  },
  {
    type: "Placeholder",
    title: "More notes, soon",
    text: "A place for working thoughts on mobile engineering, product tradeoffs, and what holds up in practice.",
    href: "notes/index.html",
  },
  {
    type: "Placeholder",
    title: "Still scribbling",
    text: "Short essays, sharper opinions, and the occasional useful detour will live here as the archive grows.",
    href: "notes/index.html",
  },
];

const shelf = [
  {
    type: "Book",
    title: "Dune saga",
    text: "A shelf note in progress.",
    href: "shelf/dune-saga.html",
  },
  {
    type: "Book",
    title: "Ready Player One and Two",
    text: "A shelf note in progress.",
    href: "shelf/ready-player-one-and-two.html",
  },
  {
    type: "Book",
    title: "The Martian",
    text: "A shelf note in progress.",
    href: "shelf/the-martian.html",
  },
  {
    type: "Book",
    title: "Project Hail Mary",
    text: "A shelf note in progress.",
    href: "shelf/project-hail-mary.html",
  },
  {
    type: "Book",
    title: "Artemis",
    text: "A shelf note in progress.",
    href: "shelf/artemis.html",
  },
  {
    type: "Link",
    title: "ICQR Tree",
    text: "A shelf note in progress.",
    href: "shelf/icqr-tree.html",
  },
  {
    type: "Link",
    title: "Link Lowdown",
    text: "A shelf note in progress.",
    href: "shelf/link-lowdown.html",
  },
];

const heroCanvas = document.querySelector("#hero-field");
const heroCtx = heroCanvas.getContext("2d");
const commandButton = document.querySelector("#command-button");
const commandDialog = document.querySelector("#command-dialog");
const igniteButton = document.querySelector("#ignite-button");
const sparkButton = document.querySelector("#spark-button");
const quietChaos = document.querySelector("#quiet-chaos");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const transitionStateKey = "lmcjt-transition";
const transitionCoverDuration = 620;

let heroParticles = [];
let mouse = { x: window.innerWidth * 0.68, y: window.innerHeight * 0.45, active: false };

function renderWork() {
  document.querySelector("#work-list").innerHTML = work
    .map(
      (item, index) => `
        <a class="work-card reveal tile-link" style="--glow: ${item.glow}" href="${item.href}" data-transition-link>
          <div class="work-number">${String(index + 1).padStart(2, "0")}</div>
          <div class="work-main">
            <h3>${item.title}</h3>
            <p>${item.proof}</p>
          </div>
          <div class="work-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </a>
      `,
    )
    .join("");
}

function renderItems(selector, items) {
  document.querySelector(selector).innerHTML = items
    .map(
      (item) => {
        const isPlaceholder = item.type === "Placeholder";
        return `
        <a class="item-card reveal tile-link${isPlaceholder ? " item-card--placeholder" : ""}" href="${item.href}" data-transition-link>
          <span>${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </a>
      `;
      },
    )
    .join("");
}

function resizeHeroCanvas() {
  const rect = heroCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  heroCanvas.width = rect.width * ratio;
  heroCanvas.height = rect.height * ratio;
  heroCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  seedHeroParticles(rect.width, rect.height);
}

function seedHeroParticles(width, height) {
  const count = Math.max(92, Math.floor(width / 10));
  heroParticles = Array.from({ length: count }, (_, index) => {
    const inCluster = index % 4 !== 0;
    return {
      x: inCluster ? width * (0.42 + Math.random() * 0.5) : Math.random() * width,
      y: inCluster ? height * (0.18 + Math.random() * 0.68) : Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: 0.8 + Math.random() * 2.5,
      phase: Math.random() * Math.PI * 2,
      color: ["#62d5c5", "#d6ff73", "#ff7d55", "#f4efe5"][index % 4],
    };
  });
}

function drawHero(time = 0) {
  const rect = heroCanvas.getBoundingClientRect();
  heroCtx.clearRect(0, 0, rect.width, rect.height);

  heroParticles.forEach((particle) => {
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.hypot(dx, dy) || 1;
    const gravity = mouse.active && distance < 260 ? (260 - distance) / 260 : 0;

    particle.vx += (dx / distance) * gravity * 0.024;
    particle.vy += (dy / distance) * gravity * 0.024;
    particle.vx *= 0.986;
    particle.vy *= 0.986;
    particle.x += particle.vx + Math.cos(time * 0.0012 + particle.phase) * 0.08;
    particle.y += particle.vy + Math.sin(time * 0.001 + particle.phase) * 0.08;

    if (particle.x < -30) particle.x = rect.width + 30;
    if (particle.x > rect.width + 30) particle.x = -30;
    if (particle.y < -30) particle.y = rect.height + 30;
    if (particle.y > rect.height + 30) particle.y = -30;
  });

  heroCtx.lineWidth = 1;
  heroParticles.forEach((a, index) => {
    heroParticles.slice(index + 1).forEach((b) => {
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 92) {
        heroCtx.globalAlpha = (92 - distance) / 230;
        heroCtx.strokeStyle = "#e9fff8";
        heroCtx.beginPath();
        heroCtx.moveTo(a.x, a.y);
        heroCtx.lineTo(b.x, b.y);
        heroCtx.stroke();
      }
    });
  });

  heroParticles.forEach((particle) => {
    const pulse = 0.65 + Math.sin(time * 0.003 + particle.phase) * 0.35;
    heroCtx.globalAlpha = 0.4 + pulse * 0.5;
    heroCtx.fillStyle = particle.color;
    heroCtx.beginPath();
    heroCtx.arc(particle.x, particle.y, particle.size * (0.8 + pulse * 0.45), 0, Math.PI * 2);
    heroCtx.fill();
  });

  heroCtx.globalAlpha = 1;
  requestAnimationFrame(drawHero);
}

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  document.body.style.setProperty("--scroll", ratio.toFixed(4));
  document.querySelector(".site-header").classList.toggle("is-compact", window.innerWidth <= 980);
}

function updateMouse(event) {
  document.body.style.setProperty("--mx", `${event.clientX}px`);
  document.body.style.setProperty("--my", `${event.clientY}px`);

  const rect = heroCanvas.getBoundingClientRect();
  mouse = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    active:
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom,
  };
}

function setupReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -14% 0px", threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupCards() {
  document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--card-x", `${x * 100}%`);
      card.style.setProperty("--card-y", `${y * 100}%`);
      card.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

function addTrace(x, y) {
  const trace = document.createElement("span");
  trace.className = "trace";
  trace.textContent = "✦";
  trace.style.setProperty("--x", `${x}px`);
  trace.style.setProperty("--y", `${y}px`);
  document.body.append(trace);
  trace.addEventListener("animationend", () => trace.remove());
}

function ignite() {
  const rect = heroCanvas.getBoundingClientRect();
  for (let i = 0; i < 34; i += 1) {
    heroParticles.push({
      x: rect.width * (0.42 + Math.random() * 0.5),
      y: rect.height * (0.22 + Math.random() * 0.55),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 1 + Math.random() * 3.8,
      phase: Math.random() * Math.PI * 2,
      color: ["#62d5c5", "#d6ff73", "#ff7d55", "#f4efe5"][i % 4],
    });
  }
  addTrace(window.innerWidth * 0.72, window.innerHeight * 0.34);
}

function copyEmail(button) {
  const email = button.dataset.email;
  const write =
    navigator.clipboard?.writeText?.(email) ||
    new Promise((resolve, reject) => {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      const copied = document.execCommand("copy");
      input.remove();
      copied ? resolve() : reject(new Error("copy failed"));
    });

  write
    .then(() => {
      document.querySelector("#copy-status").textContent = "copied";
      window.setTimeout(() => {
        document.querySelector("#copy-status").textContent = "ready";
      }, 1500);
    })
    .catch(() => {
      document.querySelector("#copy-status").textContent = email;
    });
}

function setupPageTransitions() {
  const pageTransition = document.querySelector(".page-transition");
  const transitionLabel = pageTransition?.querySelector(".page-transition__label");
  const pendingState = sessionStorage.getItem(transitionStateKey);

  const applyTransitionState = (state) => {
    if (!pageTransition || !state) {
      return;
    }

    pageTransition.style.setProperty("--transition-left", state.left || "50vw");
    pageTransition.style.setProperty("--transition-top", state.top || "50vh");
  };

  if (pendingState && transitionLabel) {
    try {
      const state = JSON.parse(pendingState);
      applyTransitionState(state);
      if (state.label) {
        transitionLabel.textContent = state.label;
      }
    } catch {}

    document.body.classList.add("is-entering-cover");
    requestAnimationFrame(() => {
      document.body.classList.add("is-entering-close");
    });
    window.setTimeout(() => {
      document.body.classList.remove("is-entering-cover", "is-entering-close");
      sessionStorage.removeItem(transitionStateKey);
    }, transitionCoverDuration);
  }

  const transitionLinks = document.querySelectorAll("[data-transition-link]");
  transitionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      const rect = link.getBoundingClientRect();
      const labelSource =
        link.querySelector("h3")?.textContent ||
        link.querySelector("strong")?.textContent ||
        link.textContent ||
        "navigating";
      const label = `${labelSource.trim().replace(/\s+/g, " ")} / navigating`;
      const state = {
        label,
        left: `${rect.left + rect.width / 2}px`,
        top: `${rect.top + rect.height / 2}px`,
      };

      if (pageTransition) {
        applyTransitionState(state);
      }

      if (transitionLabel) {
        transitionLabel.textContent = label;
      }

      sessionStorage.setItem(transitionStateKey, JSON.stringify(state));
      requestAnimationFrame(() => {
        document.body.classList.add("is-transitioning-cover");
      });
      window.setTimeout(() => {
        window.location.href = href;
      }, transitionCoverDuration);
    });
  });

  requestAnimationFrame(() => {
    document.body.classList.add("ready");
  });
}

renderWork();
renderItems("#note-list", notes);
renderItems("#shelf-list", shelf.slice(0, 3));
resizeHeroCanvas();
updateScroll();
setupReveals();
setupCards();
setupPageTransitions();

if (!prefersReducedMotion) {
  drawHero();
}

window.addEventListener("resize", resizeHeroCanvas);
window.addEventListener("scroll", updateScroll, { passive: true });
document.addEventListener("pointermove", updateMouse);

commandButton.addEventListener("click", () => commandDialog.showModal());
document.querySelectorAll("[data-command-link]").forEach((link) => {
  link.addEventListener("click", () => commandDialog.close());
});

igniteButton.addEventListener("click", ignite);
sparkButton.addEventListener("click", () => addTrace(Math.random() * window.innerWidth, window.innerHeight * 0.72));
quietChaos.addEventListener("click", () => {
  document.body.classList.toggle("chaos");
  commandDialog.close();
  ignite();
});

document.querySelector(".copy-email").addEventListener("click", (event) => {
  copyEmail(event.currentTarget);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    commandDialog.showModal();
  }
});

document.querySelector(".hero").addEventListener("dblclick", () => {
  document.body.classList.toggle("chaos");
  ignite();
});
