const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const transitionStateKey = "lmcjt-transition";
const transitionCoverDuration = 620;

function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  document.body.style.setProperty("--scroll", ratio.toFixed(4));
}

function setupDetailTransitions() {
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

  requestAnimationFrame(() => {
    document.body.classList.add("ready");
  });

  document.querySelectorAll("[data-transition-link]").forEach((link) => {
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
}

function setupCompactHeader() {
  const header = document.querySelector(".site-header");
  const applyState = () => {
    header.classList.toggle("is-compact", window.innerWidth <= 980);
  };

  applyState();
  window.addEventListener("scroll", applyState, { passive: true });
  window.addEventListener("resize", applyState);
}

function setupDetailMotion() {
  if (prefersReducedMotion) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

setupDetailTransitions();
setupCompactHeader();
setupDetailMotion();
updateScrollProgress();

window.addEventListener("scroll", updateScrollProgress, { passive: true });
