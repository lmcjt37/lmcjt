import { getContentBySlug, projects, type NoteItem, type ProjectItem, type ShelfItem } from "../data/content";
import type { ProjectContentModule, WritingContentModule } from "../content/types";
import { DetailEffects } from "./DetailEffects";
import { PageChrome } from "./PageChrome";

type ProjectDetailPageProps = {
  content: ProjectContentModule;
  project: ProjectItem;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function ProjectDetailPage({ content, project }: ProjectDetailPageProps) {
  const nextProject = project.nextSlug ? getContentBySlug(projects, project.nextSlug) : undefined;
  const Content = content.default;

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
              <h1>{content.detail.headline}</h1>
              <p>{content.detail.intro}</p>
              <ul>
                {content.detail.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="detail-links">
                <a href={content.detail.primaryLinkHref} data-transition-link>
                  {content.detail.primaryLinkLabel}
                </a>
                {nextProject ? (
                  <a href={nextProject.route} data-transition-link>
                    Next project
                  </a>
                ) : null}
              </div>
            </div>
            <aside className="detail-side">
              {content.detail.panels.map((panel) => (
                <section className="detail-panel" key={panel.title}>
                  <h2>{panel.title}</h2>
                  <p>{panel.body}</p>
                </section>
              ))}
            </aside>
          </div>
        </section>
        <section className="detail-body">
          <Content />
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}

export function WritingDetailPage({ content, item }: { content: WritingContentModule; item: NoteItem | ShelfItem }) {
  const isNote = item.section === "notes";
  const Content = content.default;

  return (
    <PageChrome detailPage>
      <main id="main">
        <section className="detail-hero reveal">
          <a className="detail-back" href={isNote ? "/notes/" : "/shelf/"} data-transition-link>
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
            <p>{content.detail.excerpt}</p>
          </div>
          <article className="essay-body">
            <Content />
          </article>
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}
