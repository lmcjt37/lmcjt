export default function HomePage() {
  return (
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
      </section>
    </main>
  );
}
