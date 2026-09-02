import type { NoteItem, ShelfItem } from "../data/content";
import { DetailEffects } from "./DetailEffects";
import { PageChrome } from "./PageChrome";

type ArchivePageProps = {
  backHref: string;
  description: string;
  items: readonly (NoteItem | ShelfItem)[];
  title: string;
  type: "notes" | "shelf";
};

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

export function ArchivePage({ backHref, description, items, title, type }: ArchivePageProps) {
  const listedItems = items.filter((item) => item.listed);
  const groups = new Map<string, typeof listedItems>();

  listedItems.forEach((item) => {
    const month = monthFormatter.format(new Date(`${item.date}T00:00:00`));
    groups.set(month, [...(groups.get(month) ?? []), item]);
  });

  return (
    <PageChrome detailPage>
      <main id="main">
        <section className="detail-hero reveal">
          <a className="detail-back" href={backHref} data-transition-link>
            Back to home
          </a>
          <div className="detail-copy essay-copy">
            <p className="label">Chronological archive</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <article className="essay-body">
            {Array.from(groups.entries()).map(([month, groupItems]) => (
              <section key={month}>
                <h2>{month}</h2>
                {groupItems.map((item) => (
                  <p key={item.slug}>
                    <a
                      className={`essay-link${type === "shelf" ? " shelf-essay-link" : ""}`}
                      href={item.route}
                      data-transition-link
                    >
                      <span>{item.title}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </p>
                ))}
              </section>
            ))}
          </article>
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}
