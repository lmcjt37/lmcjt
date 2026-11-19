import type { Metadata } from "next";

import { RouxPage } from "../RouxPage";

export const metadata: Metadata = {
  title: "Support — Roux",
  description: "Get support for Roux.",
};

export default function RouxSupportPage() {
  return (
    <RouxPage eyebrow="SUPPORT" title="How can we help?">
      <p className="roux-lede">
        For help with Roux, feedback, or a problem with the app, send an email and include as much
        detail as you can.
      </p>
      <a className="roux-email" href="mailto:roux@lmcjt.dev?subject=Roux%20support">
        roux@lmcjt.dev
      </a>
      <div className="roux-prose">
        <h2>Useful details to include</h2>
        <ul>
          <li>What you were trying to do.</li>
          <li>What happened instead.</li>
          <li>Your device model and iOS version.</li>
          <li>A screenshot, if you can safely share one.</li>
        </ul>
        <h2>Your recipes are local</h2>
        <p>
          Roux stores your data on your device. If you need to move it, use the in-app export and
          import tools in Settings → Data management.
        </p>
      </div>
    </RouxPage>
  );
}
