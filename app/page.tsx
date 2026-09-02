import { CommandDialog } from "./components/CommandDialog";
import { HomeEffects } from "./components/HomeEffects";
import { HomeItemCard, WorkCard } from "./components/HomeCards";
import { PageChrome } from "./components/PageChrome";
import { noteItems, shelfItems, workItems } from "./data/home";

export default function HomePage() {
  return (
    <PageChrome commandButton footerHomeActions>
      <main id="main">
        <section className="hero" id="hero">
          <canvas id="hero-field" aria-hidden="true" />
          <div className="hero-topline">
            <span>DX / product / delight</span>
          </div>
          <div className="hero-copy">
            <p className="label">Mobile engineering, product thinking, and craft</p>
            <h1 aria-label="I’m a mobile engineer focused on product, craft, and execution.">
              <span>I’m a mobile engineer</span>
              <span>focused on product,</span>
              <span>craft, and execution.</span>
            </h1>
            <p className="intro">
              I work across React Native and native iOS, from new consumer products to scaling
              existing apps. My focus is practical: better UX, stronger developer experience, and
              turning product strategy into work that is clear, executable, and worth shipping.
            </p>
          </div>
          <div className="hero-dock" aria-label="Quick links">
            <a href="#contact">Get in touch</a>
            <a href="#work">View work</a>
            <button id="ignite-button" type="button">
              Ignite
            </button>
          </div>
          <div className="hero-caption" aria-hidden="true">
            <span>Move your cursor through the field</span>
            <span>Double click for a hidden mode</span>
          </div>
        </section>

        <section className="flow" aria-label="Portfolio">
          <aside className="rail" aria-hidden="true">
            <span>clarity</span>
            <span>craft</span>
            <span>spark</span>
          </aside>

          <section className="panel thesis reveal">
            <p className="label">Point of view</p>
            <h2>Useful products come from clear thinking and strong execution.</h2>
            <p>
              I like working where product ambition meets technical constraint. That usually means
              improving UX, shaping simpler paths forward, and building delivery practices that help
              teams move with confidence rather than chaos.
            </p>
            <div className="principles">
              <span>Simplify the path</span>
              <span>Build with intent</span>
              <span>Keep quality practical</span>
            </div>
          </section>

          <section className="work-panel reveal" id="work">
            <div className="section-title">
              <p className="label">01 / Work</p>
              <h2>The fun part is making the hard bits feel obvious.</h2>
            </div>
            <div className="work-list" id="work-list">
              {workItems.map((item, index) => (
                <WorkCard item={item} index={index} key={item.href} />
              ))}
            </div>
            <div className="work-more">
              <a className="work-more-link" href="https://github.com/lmcjt37" target="_blank" rel="noreferrer">
                <span>Other work</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          <section className="notes-shelf reveal" id="notes">
            <div className="section-title">
              <a className="label section-title-link" href="/notes/" data-transition-link>
                <span>02 / Notes</span>
                <span aria-hidden="true">→</span>
              </a>
              <h2>Writing space for the thinking behind the work.</h2>
            </div>
            <div className="note-list" id="note-list">
              {noteItems.map((item) => (
                <HomeItemCard item={item} key={item.title} />
              ))}
            </div>
          </section>

          <section className="notes-shelf reveal" id="shelf">
            <div className="section-title">
              <a className="label section-title-link section-title-link--shelf" href="/shelf/" data-transition-link>
                <span>03 / Shelf</span>
                <span aria-hidden="true">→</span>
              </a>
              <h2>Things I would share across the table.</h2>
            </div>
            <div className="shelf-list" id="shelf-list">
              {shelfItems.slice(0, 3).map((item) => (
                <HomeItemCard item={item} key={item.href} />
              ))}
            </div>
          </section>

          <section className="contact-panel reveal" id="contact">
            <p className="label">04 / Contact</p>
            <h2>Bring me a product knot, a developer workflow, or a tiny delightful idea.</h2>
            <div className="contact-actions">
              <a href="mailto:hello@lmcjt.dev">hello@lmcjt.dev</a>
              <a href="https://www.linkedin.com/in/lukemalcolmtaylor/">LinkedIn</a>
              <a href="https://github.com/lmcjt37">GitHub</a>
              <button className="copy-email" type="button" data-email="hello@lmcjt.dev">
                <span>Copy email</span>
                <strong id="copy-status">ready</strong>
              </button>
            </div>
          </section>
        </section>
      </main>

      <CommandDialog />
      <HomeEffects />
    </PageChrome>
  );
}
