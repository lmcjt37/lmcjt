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
  metadataBase: new URL("https://lmcjt.dev"),
  title: "Luke Taylor - Software Engineer",
  description:
    "Luke Taylor is a software engineer focused on developer experience, product thinking, and memorable customer details.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Luke Taylor",
    title: "Luke Taylor - Software Engineer",
    description:
      "Luke Taylor is a software engineer focused on developer experience, product thinking, and memorable customer details.",
    images: [
      {
        url: "/assets/social-card.png",
        width: 1730,
        height: 909,
        alt: "An abstract violet, cyan, and acid-green digital horizon.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Taylor - Software Engineer",
    description:
      "Luke Taylor is a software engineer focused on developer experience, product thinking, and memorable customer details.",
    images: ["/assets/social-card.png"],
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
