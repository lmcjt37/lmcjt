import type { Metadata } from "next";

import { RouxPage } from "./RouxPage";

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
