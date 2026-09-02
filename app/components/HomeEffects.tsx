"use client";

import { useEffect } from "react";

const transitionStateKey = "lmcjt-transition";
const transitionCoverDuration = 620;
const particleColors = ["#62d5c5", "#d6ff73", "#ff7d55", "#f4efe5"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  color: string;
};

type MouseState = {
  x: number;
  y: number;
  active: boolean;
};

type TransitionState = {
  label?: string;
  left?: string;
  top?: string;
};

export function HomeEffects() {
  useEffect(() => {
    const heroCanvas = document.querySelector<HTMLCanvasElement>("#hero-field");
    const heroCtx = heroCanvas?.getContext("2d");
    const commandButton = document.querySelector<HTMLButtonElement>("#command-button");
    const commandDialog = document.querySelector<HTMLDialogElement>("#command-dialog");
    const igniteButton = document.querySelector<HTMLButtonElement>("#ignite-button");
    const sparkButton = document.querySelector<HTMLButtonElement>("#spark-button");
    const quietChaos = document.querySelector<HTMLButtonElement>("#quiet-chaos");
    const copyEmailButton = document.querySelector<HTMLButtonElement>(".copy-email");
    const hero = document.querySelector<HTMLElement>(".hero");
    const header = document.querySelector<HTMLElement>(".site-header");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!heroCanvas || !heroCtx || !header) {
      return;
    }

    let animationFrame = 0;
    let copyResetTimeout = 0;
    let transitionTimeout = 0;
    let heroParticles: Particle[] = [];
    let mouse: MouseState = {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.45,
      active: false,
    };

    const seedHeroParticles = (width: number, height: number) => {
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
          color: particleColors[index % particleColors.length],
        };
      });
    };

    const resizeHeroCanvas = () => {
      const rect = heroCanvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      heroCanvas.width = rect.width * ratio;
      heroCanvas.height = rect.height * ratio;
      heroCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
      seedHeroParticles(rect.width, rect.height);
    };

    const drawHero = (time = 0) => {
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
      animationFrame = requestAnimationFrame(drawHero);
    };

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      document.body.style.setProperty("--scroll", ratio.toFixed(4));
      header.classList.toggle("is-compact", window.innerWidth <= 980);
    };

    const updateMouse = (event: PointerEvent) => {
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
    };

    const addTrace = (x: number, y: number) => {
      const trace = document.createElement("span");
      trace.className = "trace";
      trace.textContent = "✦";
      trace.style.setProperty("--x", `${x}px`);
      trace.style.setProperty("--y", `${y}px`);
      document.body.append(trace);
      trace.addEventListener("animationend", () => trace.remove(), { once: true });
    };

    const ignite = () => {
      const rect = heroCanvas.getBoundingClientRect();

      for (let i = 0; i < 34; i += 1) {
        heroParticles.push({
          x: rect.width * (0.42 + Math.random() * 0.5),
          y: rect.height * (0.22 + Math.random() * 0.55),
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          size: 1 + Math.random() * 3.8,
          phase: Math.random() * Math.PI * 2,
          color: particleColors[i % particleColors.length],
        });
      }

      addTrace(window.innerWidth * 0.72, window.innerHeight * 0.34);
    };

    const copyEmail = (button: HTMLButtonElement) => {
      const email = button.dataset.email;
      const copyStatus = document.querySelector<HTMLElement>("#copy-status");

      if (!email || !copyStatus) {
        return;
      }

      const write =
        navigator.clipboard?.writeText?.(email) ||
        new Promise<void>((resolve, reject) => {
          const input = document.createElement("textarea");
          input.value = email;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.append(input);
          input.select();
          const copied = document.execCommand("copy");
          input.remove();
          if (copied) {
            resolve();
          } else {
            reject(new Error("copy failed"));
          }
        });

      write
        .then(() => {
          copyStatus.textContent = "copied";
          window.clearTimeout(copyResetTimeout);
          copyResetTimeout = window.setTimeout(() => {
            copyStatus.textContent = "ready";
          }, 1500);
        })
        .catch(() => {
          copyStatus.textContent = email;
        });
    };

    const pageTransition = document.querySelector<HTMLElement>(".page-transition");
    const transitionLabel = pageTransition?.querySelector<HTMLElement>(".page-transition__label");

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

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const cardHandlers = Array.from(document.querySelectorAll<HTMLElement>(".work-card")).map(
      (card) => {
        const handlePointerMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--card-x", `${x * 100}%`);
          card.style.setProperty("--card-y", `${y * 100}%`);
          card.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
          card.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
        };

        const handlePointerLeave = () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };

        card.addEventListener("pointermove", handlePointerMove);
        card.addEventListener("pointerleave", handlePointerLeave);

        return { card, handlePointerLeave, handlePointerMove };
      },
    );

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
      return { link, handleClick };
    });

    const handleCommandOpen = () => {
      if (!commandDialog?.open) {
        commandDialog?.showModal();
      }
    };
    const handleCommandClose = () => commandDialog?.close();
    const handleIgnite = () => ignite();
    const handleSpark = () =>
      addTrace(Math.random() * window.innerWidth, window.innerHeight * 0.72);
    const handleQuietChaos = () => {
      document.body.classList.toggle("chaos");
      commandDialog?.close();
      ignite();
    };
    const handleCopyEmail = (event: MouseEvent) =>
      copyEmail(event.currentTarget as HTMLButtonElement);
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        handleCommandOpen();
      }
    };
    const handleHeroDoubleClick = () => {
      document.body.classList.toggle("chaos");
      ignite();
    };

    resizeHeroCanvas();
    updateScroll();

    if (!prefersReducedMotion) {
      animationFrame = requestAnimationFrame(drawHero);
    }

    requestAnimationFrame(() => {
      document.body.classList.add("ready");
    });

    window.addEventListener("resize", resizeHeroCanvas);
    window.addEventListener("scroll", updateScroll, { passive: true });
    document.addEventListener("pointermove", updateMouse);
    document.addEventListener("keydown", handleKeyDown);
    commandButton?.addEventListener("click", handleCommandOpen);
    document.querySelectorAll("[data-command-link]").forEach((link) => {
      link.addEventListener("click", handleCommandClose);
    });
    igniteButton?.addEventListener("click", handleIgnite);
    sparkButton?.addEventListener("click", handleSpark);
    quietChaos?.addEventListener("click", handleQuietChaos);
    copyEmailButton?.addEventListener("click", handleCopyEmail);
    hero?.addEventListener("dblclick", handleHeroDoubleClick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(copyResetTimeout);
      window.clearTimeout(transitionTimeout);
      revealObserver.disconnect();
      window.removeEventListener("resize", resizeHeroCanvas);
      window.removeEventListener("scroll", updateScroll);
      document.removeEventListener("pointermove", updateMouse);
      document.removeEventListener("keydown", handleKeyDown);
      commandButton?.removeEventListener("click", handleCommandOpen);
      document.querySelectorAll("[data-command-link]").forEach((link) => {
        link.removeEventListener("click", handleCommandClose);
      });
      igniteButton?.removeEventListener("click", handleIgnite);
      sparkButton?.removeEventListener("click", handleSpark);
      quietChaos?.removeEventListener("click", handleQuietChaos);
      copyEmailButton?.removeEventListener("click", handleCopyEmail);
      hero?.removeEventListener("dblclick", handleHeroDoubleClick);
      transitionHandlers.forEach(({ link, handleClick }) =>
        link.removeEventListener("click", handleClick),
      );
      cardHandlers.forEach(({ card, handlePointerLeave, handlePointerMove }) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, []);

  return null;
}
