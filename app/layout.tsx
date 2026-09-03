import type { Metadata, Viewport } from "next";

import "../styles.css";

const appearanceScript = `(() => {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        "content",
        theme === "light" ? "#f7f2e9" : "#101616",
      );
    }
  } catch {}
})();`;

export const metadata: Metadata = {
  title: "Luke Taylor - Software Engineer",
  description:
    "Luke Taylor is a software engineer focused on developer experience, product thinking, and memorable customer details.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#101616",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: appearanceScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
