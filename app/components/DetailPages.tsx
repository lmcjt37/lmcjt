import { getContentBySlug, projects, type NoteItem, type ProjectItem, type ShelfItem } from "../data/content";
import { DetailEffects } from "./DetailEffects";
import { PageChrome } from "./PageChrome";

type ProjectDetailPageProps = {
  project: ProjectItem;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const nextProject = project.nextSlug ? getContentBySlug(projects, project.nextSlug) : undefined;

  return (
    <PageChrome detailPage>
      <main id="main">
        <section className="detail-hero reveal">
          <a className="detail-back" href="/#work" data-transition-link>
            Back to work
          </a>
          <div className="detail-topline">
            <span>Project / {project.projectNumber}</span>
            <span>{project.topline}</span>
          </div>
          <div className="detail-grid">
            <div className="detail-copy">
              <p className="label">{project.title}</p>
              <h1>{project.proof}</h1>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="detail-links">
                <a href="/#work" data-transition-link>
                  Watch this space
                </a>
                {nextProject ? (
                  <a href={nextProject.route} data-transition-link>
                    Next project
                  </a>
                ) : null}
              </div>
            </div>
            <aside className="detail-side">
              <section className="detail-panel">
                <h2>Why it matters</h2>
                <p>Full project notes will move into MDX in the next checkpoint.</p>
              </section>
              <section className="detail-panel">
                <h2>What it proves</h2>
                <p>This route is now generated from typed project metadata and ready for MDX content.</p>
              </section>
            </aside>
          </div>
        </section>
        <section className="detail-body">
          <article className="detail-card reveal">
            <h2>Current shape</h2>
            <p>{project.proof}</p>
          </article>
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}

export function WritingDetailPage({ item }: { item: NoteItem | ShelfItem }) {
  const isNote = item.section === "notes";

  return (
    <PageChrome detailPage>
      <main id="main">
        <section className="detail-hero reveal">
          <a className="detail-back" href={isNote ? "/notes" : "/shelf"} data-transition-link>
            Back to {isNote ? "notes" : "shelf"}
          </a>
          <div className="detail-copy essay-copy">
            <p className="label">{dateFormatter.format(new Date(`${item.date}T00:00:00`))}</p>
            <div className="essay-meta">
              <span>{isNote ? item.readTime : item.type}</span>
              {item.chips?.length ? (
                <div className="essay-chips" aria-hidden="true">
                  {item.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              ) : null}
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <article className="essay-body">
            <section>
              <p>Full writing content will move into MDX in the next checkpoint.</p>
              {"externalUrl" in item && item.externalUrl ? (
                <p>
                  <a className="essay-link shelf-essay-link" href={item.externalUrl}>
                    <span>Visit source</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </p>
              ) : null}
            </section>
          </article>
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}
