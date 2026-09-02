# Decision Records

## DR-001 - Use Next.js App Router With Static Generation

- Date: 2026-09-02
- Branch: updated-portfolio-2026
- Status: accepted
- Context: The current site is a static portfolio with predictable routes and no server-side data needs.
- Decision: Use Next.js App Router and generate pages statically by default.
- Why: App Router gives a current Next.js structure, route segments map cleanly to the existing pages, and static generation preserves the current simple hosting model.
- Alternatives considered: Keep the site as static HTML; use Pages Router; use another static site generator.
- Tradeoffs: App Router adds build tooling and React conventions, but reduces duplicated markup and creates a better path for content growth.
- Metrics: None.
- Consequences: The migration should avoid runtime-only server dependencies unless a future feature requires them.
- Links: `architecture/site/README.md`

## DR-002 - Preserve Current Visual Design During The Direct Port

- Date: 2026-09-02
- Branch: updated-portfolio-2026
- Status: accepted
- Context: The user wants a direct port that maintains the current design.
- Decision: Reuse the existing global CSS and class names during the migration.
- Why: Preserving selectors keeps the migration focused on structure and behavior rather than redesign.
- Alternatives considered: Redesign during migration; convert immediately to CSS modules or Tailwind.
- Tradeoffs: Global CSS remains broad and selector-heavy, but visual parity is easier to verify and regression risk is lower.
- Metrics: Visual parity checks across representative routes and viewport sizes.
- Consequences: CSS modularization, if desired, should happen after the Next.js port is stable.
- Links: `styles.css`

## DR-003 - Use Typed Metadata Plus MDX For Long-Form Content

- Date: 2026-09-02
- Branch: updated-portfolio-2026
- Status: accepted
- Context: Current metadata lives in `script.js`, while long-form content is embedded in many duplicated HTML files.
- Decision: Store short structured metadata in typed data modules and move content-led project, note, and shelf page bodies to MDX.
- Why: Typed metadata gives archives and cards one source of truth, while MDX keeps writing-oriented content maintainable without embedding everything in JSX.
- Alternatives considered: Keep all content as React components; keep all content as HTML; use a CMS immediately.
- Tradeoffs: MDX adds tooling and content validation needs, but it reduces markup duplication and supports future writing growth.
- Metrics: Archive pages and detail pages should derive from the same slug and metadata records.
- Consequences: Content files need frontmatter conventions and build-time validation. Project pages that are primarily portfolio/write-up content should use the same MDX path as notes and shelf entries.
- Links: `script.js`, `projects/`, `notes/`, `shelf/`

## DR-004 - Use Slug-Based Routes And Drop Legacy Html Paths

- Date: 2026-09-02
- Branch: updated-portfolio-2026
- Status: accepted
- Context: Existing pages use `.html` paths, while Next.js naturally favors clean route segments.
- Decision: Build clean slug routes and allow old `.html` paths to disappear after migration.
- Why: The old static files are not required after the migration, and dropping compatibility work keeps the GitHub Pages export simpler.
- Alternatives considered: Preserve `.html` paths exactly; add redirects or duplicate compatibility pages.
- Tradeoffs: The app avoids extra redirect/export complexity, but any external links to old `.html` URLs may break.
- Metrics: All internal links should resolve to clean routes after migration, and no generated internal link should target `.html`.
- Consequences: Cleanup can remove the old root HTML files and subpage HTML files once the Next.js routes are verified.
- Links: `architecture/overview.md`

## DR-005 - Deploy With GitHub Pages Static Export

- Date: 2026-09-02
- Branch: updated-portfolio-2026
- Status: accepted
- Context: The deployment target is GitHub Pages.
- Decision: Configure the Next.js app for static export suitable for GitHub Pages.
- Why: GitHub Pages serves static files and does not provide a Next.js server runtime.
- Alternatives considered: Deploy to Vercel; use a custom server; keep the current static HTML output.
- Tradeoffs: Static export keeps hosting simple, but server-only Next.js features and runtime redirects should not be used.
- Metrics: `npm run build` should produce a deployable static output, and the exported site should work through GitHub Pages paths.
- Consequences: The migration should avoid features that require server rendering at request time.
- Links: `README.md`
