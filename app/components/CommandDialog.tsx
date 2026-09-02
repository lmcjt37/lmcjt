export function CommandDialog() {
  return (
    <dialog className="command-dialog" id="command-dialog" aria-labelledby="command-title">
      <form method="dialog">
        <div className="command-top">
          <h2 id="command-title">Command surface</h2>
          <button value="close" aria-label="Close menu">
            ×
          </button>
        </div>
        <div className="command-list">
          <a href="#work" data-command-link>
            <span>01</span>Work
          </a>
          <a href="#notes" data-command-link>
            <span>02</span>Notes
          </a>
          <a href="#shelf" data-command-link>
            <span>03</span>Shelf
          </a>
          <a href="#contact" data-command-link>
            <span>04</span>Contact
          </a>
          <button id="quiet-chaos" type="button">
            <span>05</span>Quiet chaos
          </button>
        </div>
      </form>
    </dialog>
  );
}
