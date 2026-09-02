type CommandDialogProps = {
  homeNav?: boolean;
};

export function CommandDialog({ homeNav = true }: CommandDialogProps) {
  const homePrefix = homeNav ? "" : "/";

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
          <a
            href={`${homePrefix}#work`}
            data-command-link
            data-transition-link={!homeNav || undefined}
          >
            <span>01</span>Work
          </a>
          <a
            href={`${homePrefix}#notes`}
            data-command-link
            data-transition-link={!homeNav || undefined}
          >
            <span>02</span>Notes
          </a>
          <a
            href={`${homePrefix}#shelf`}
            data-command-link
            data-transition-link={!homeNav || undefined}
          >
            <span>03</span>Shelf
          </a>
          <a href="/resume/" data-command-link data-transition-link>
            <span>04</span>Resume
          </a>
          <a
            href={`${homePrefix}#contact`}
            data-command-link
            data-transition-link={!homeNav || undefined}
          >
            <span>05</span>Contact
          </a>
        </div>
      </form>
    </dialog>
  );
}
