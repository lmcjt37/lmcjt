import type { Metadata, Viewport } from "next";

import "../styles.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
