"use client";

import { useEffect } from "react";

const transitionStateKey = "lmcjt-transition";
const transitionCoverDuration = 620;

type TransitionState = {
  label?: string;
  left?: string;
  top?: string;
};

export function DetailEffects() {
  useEffect(() => {
    const pageTransition = document.querySelector<HTMLElement>(".page-transition");
    const transitionLabel = pageTransition?.querySelector<HTMLElement>(".page-transition__label");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector<HTMLElement>(".site-header");
    let transitionTimeout = 0;

    document.body.classList.add("detail-page");

    const updateScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      document.body.style.setProperty("--scroll", ratio.toFixed(4));
    };

    const applyCompactHeader = () => {
      header?.classList.toggle("is-compact", window.innerWidth <= 980);
    };

    const applyTransitionState = (state: TransitionState) => {
      if (!pageTransition) {
        return;
      }

      pageTransition.style.setProperty("--transition-left", state.left || "50vw");
      pageTransition.style.setProperty("--transition-top", state.top || "50vh");
    };

    const pendingState = sessionStorage.getItem(transitionStateKey);
    if (pendingState && transitionLabel) {
      try {
        const state = JSON.parse(pendingState) as TransitionState;
        applyTransitionState(state);
        if (state.label) {
          transitionLabel.textContent = state.label;
        }
      } catch {}

      document.body.classList.add("is-entering-cover");
      requestAnimationFrame(() => {
        document.body.classList.add("is-entering-close");
      });
      transitionTimeout = window.setTimeout(() => {
        document.body.classList.remove("is-entering-cover", "is-entering-close");
        sessionStorage.removeItem(transitionStateKey);
      }, transitionCoverDuration);
    }

    const revealObserver = prefersReducedMotion
      ? undefined
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver?.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
        );

    if (revealObserver) {
      document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    }

    const transitionHandlers = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-transition-link]"),
    ).map((link) => {
      const handleClick = (event: MouseEvent) => {
        const href = link.getAttribute("href");
        if (
          !href ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          href.startsWith("#")
        ) {
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
        const state: TransitionState = {
          label,
          left: `${rect.left + rect.width / 2}px`,
          top: `${rect.top + rect.height / 2}px`,
        };

        applyTransitionState(state);
        if (transitionLabel) {
          transitionLabel.textContent = label;
        }

        sessionStorage.setItem(transitionStateKey, JSON.stringify(state));
        requestAnimationFrame(() => {
          document.body.classList.add("is-transitioning-cover");
        });
        transitionTimeout = window.setTimeout(() => {
          window.location.href = href;
        }, transitionCoverDuration);
      };

      link.addEventListener("click", handleClick);
      return { handleClick, link };
    });

    requestAnimationFrame(() => {
      document.body.classList.add("ready");
    });
    updateScrollProgress();
    applyCompactHeader();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("scroll", applyCompactHeader, { passive: true });
    window.addEventListener("resize", applyCompactHeader);

    return () => {
      window.clearTimeout(transitionTimeout);
      revealObserver?.disconnect();
      document.body.classList.remove(
        "detail-page",
        "ready",
        "is-entering-cover",
        "is-entering-close",
      );
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("scroll", applyCompactHeader);
      window.removeEventListener("resize", applyCompactHeader);
      transitionHandlers.forEach(({ handleClick, link }) =>
        link.removeEventListener("click", handleClick),
      );
    };
  }, []);

  return null;
}
