"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const themeColor = {
  dark: "#101616",
  light: "#f7f2e9",
};

export function AppearanceToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor[nextTheme]);
    setTheme(nextTheme);
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button className="appearance-toggle" type="button" aria-label={label} onClick={toggleTheme}>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M20.7 15.4A8.4 8.4 0 0 1 8.6 3.3 8.4 8.4 0 1 0 20.7 15.4Z" />
        )}
      </svg>
    </button>
  );
}
