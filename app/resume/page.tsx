import type { Metadata } from "next";

import { DetailEffects } from "../components/DetailEffects";
import { PageChrome } from "../components/PageChrome";
import { resumeDownloadHref, resumeTechnologyGroups, resumeTimeline } from "../data/resume";

export const metadata: Metadata = {
  title: "Resume - Luke Taylor",
  description: "Luke Taylor's resume, including mobile engineering experience and technologies.",
};

export default function ResumePage() {
  return (
    <PageChrome detailPage>
      <main id="main" className="resume-page">
        <section className="resume-hero reveal">
          <a className="detail-back" href="/#contact" data-transition-link>
            Back to contact
          </a>
          <div className="resume-hero-grid">
            <div className="detail-copy">
              <p className="label">Resume</p>
              <h1>Work shaped by product sense and mobile craft.</h1>
              <p>
                A timeline focused on professional work experience. Giving a snapshot into my
                experiences that got me where I am today.
              </p>
              <h2>What do I look for in a role.</h2>
              <p>
                Being part of the technical leadership at a senior+ level, helping steer the
                architecture and providing holistic insights to stakeholders. Happiest when helping
                unblock others through experience, problem solving complex issues, and reducing
                friction across the development pipeline.
              </p>
              <div className="detail-links">
                <a href={resumeDownloadHref} download>
                  Download CV
                </a>
              </div>
            </div>
            <aside className="resume-tech-panel" aria-label="Technologies and frameworks">
              <h2>Skills, Technologies & Frameworks</h2>
              <div className="resume-tech-groups">
                {resumeTechnologyGroups.map((group) => (
                  <section className="resume-tech-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="resume-tech-list">
                      {group.items.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="resume-timeline-section" aria-label="Resume timeline">
          <div className="resume-timeline">
            {resumeTimeline.map((item, index) => (
              <article className="resume-timeline-item reveal" key={`${item.where}-${item.when}`}>
                <div className="resume-timeline-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="resume-timeline-card">
                  <div className="resume-timeline-meta">
                    <span>{item.when}</span>
                    <span>{item.position}</span>
                  </div>
                  <h2>{item.where}</h2>
                  <p>{item.focus}</p>
                  <div className="resume-timeline-tags" aria-label={`${item.where} focus areas`}>
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <DetailEffects />
    </PageChrome>
  );
}
