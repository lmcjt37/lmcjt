import type { Metadata } from "next";

import { RouxPage } from "../RouxPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Roux",
  description: "Roux privacy policy.",
};

export default function RouxPrivacyPage() {
  return (
    <RouxPage eyebrow="PRIVACY" title="Your data stays with you.">
      <p className="roux-lede">Last updated: 19 November 2026</p>
      <div className="roux-prose">
        <p>
          Roux does not collect, track, sell, or send your personal data anywhere. Your recipes,
          meal plans, shopping list, settings, and recipe photos are stored locally on your device.
        </p>
        <h2>No accounts or tracking</h2>
        <p>
          Roux does not require an account and does not use analytics, advertising trackers, or
          remote servers. We do not receive a copy of anything you create in the app.
        </p>
        <h2>Exports and sharing</h2>
        <p>
          When you choose to export a backup or share a meal plan, your device presents its system
          share sheet. You choose where that file goes; Roux does not receive or retain a copy.
        </p>
        <h2>Contact</h2>
        <p>
          If you have a question about this policy, email{" "}
          <a href="mailto:roux@lmcjt.dev">roux@lmcjt.dev</a>.
        </p>
      </div>
    </RouxPage>
  );
}
