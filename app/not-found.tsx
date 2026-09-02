import { NotFoundDetour } from "./components/NotFoundDetour";

export default function NotFound() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <main className="not-found" id="main">
        <section className="not-found__frame">
          <div className="not-found__signal" aria-hidden="true">
            <span>Signal lost</span>
            <span>Route not found</span>
          </div>
          <p className="label">404 / Out of bounds</p>
          <div className="not-found__number" aria-hidden="true">
            404
          </div>
          <div className="not-found__copy">
            <h1>This page took a route that does not exist.</h1>
            <p>The useful stuff is still here. Head home, or take a worthwhile detour.</p>
          </div>
          <div className="not-found__actions">
            <a href="/">
              Return home
              <span aria-hidden="true">→</span>
            </a>
            <NotFoundDetour />
          </div>
        </section>
      </main>
    </>
  );
}
