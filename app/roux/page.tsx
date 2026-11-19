import type { Metadata } from "next";

import { RouxPage } from "./RouxPage";

// Replace this with the direct App Store listing as soon as Roux is approved.
const APP_STORE_URL = "https://apps.apple.com/gb/search?term=Roux";

export const metadata: Metadata = {
  title: "Roux — Your recipes, your kitchen",
  description: "A calm, local-first home for recipes, shopping lists, and meal plans.",
};

export default function RouxHomePage() {
  return (
    <RouxPage eyebrow="A SMALLER WAY TO PLAN" title="Make every meal feel a little easier.">
      <p className="roux-lede">
        Roux keeps your recipes, shopping list, and meal plans together — without asking you to hand
        over your data.
      </p>
      <section className="roux-download" aria-labelledby="roux-download-heading">
        <div>
          <p className="roux-eyebrow">AVAILABLE FOR IOS</p>
          <h2 id="roux-download-heading">Take Roux into the kitchen.</h2>
          <p>Download Roux for iPhone and keep your recipes, plans, and shopping list close by.</p>
        </div>
        <a href={APP_STORE_URL} rel="noreferrer" target="_blank">
          Download on the App Store
        </a>
      </section>
      <div className="roux-feature-grid">
        <section>
          <span aria-hidden="true">✦</span>
          <h2>Keep recipes close</h2>
          <p>Save the meals you love, add your own notes, and find something good to make.</p>
        </section>
        <section>
          <span aria-hidden="true">☰</span>
          <h2>Plan the week</h2>
          <p>Build flexible plans around the recipes already in your collection.</p>
        </section>
        <section>
          <span aria-hidden="true">✓</span>
          <h2>Shop simply</h2>
          <p>Make a list, add quantities when they matter, and cross things off as you go.</p>
        </section>
      </div>
      <div className="roux-callout">
        <p className="roux-eyebrow">PRIVATE BY DESIGN</p>
        <h2>Your data stays with you.</h2>
        <p>
          Roux stores your recipes and plans locally on your device. No accounts, analytics, or
          advertising trackers.
        </p>
        <a href="/roux/privacy/">Read the privacy policy</a>
      </div>
    </RouxPage>
  );
}
