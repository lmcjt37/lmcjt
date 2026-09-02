type SiteHeaderProps = {
  brandHref?: string;
  commandButton?: boolean;
  homeNav?: boolean;
};

export function SiteHeader({
  brandHref = "#hero",
  commandButton = false,
  homeNav = true,
}: SiteHeaderProps) {
  const homePrefix = homeNav ? "" : "/";

  return (
    <header className="site-header">
      <a
        className="brand"
        href={brandHref}
        aria-label="Luke Taylor home"
        data-transition-link={!homeNav || undefined}
      >
        <span className="brand-text">
          <strong className="brand-full">Luke Taylor</strong>
          <strong className="brand-short">Luke Taylor</strong>
        </span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href={`${homePrefix}#work`} data-transition-link={!homeNav || undefined}>
          <span>01</span>Work
        </a>
        <a href={`${homePrefix}#notes`} data-transition-link={!homeNav || undefined}>
          <span>02</span>Notes
        </a>
        <a href={`${homePrefix}#shelf`} data-transition-link={!homeNav || undefined}>
          <span>03</span>Shelf
        </a>
        <a href="/resume/" data-transition-link>
          <span>04</span>Resume
        </a>
        <a href={`${homePrefix}#contact`} data-transition-link={!homeNav || undefined}>
          <span>05</span>Contact
        </a>
      </nav>
      <button
        className="menu-button"
        id={commandButton ? "command-button" : undefined}
        type="button"
        aria-hidden={commandButton ? undefined : "true"}
        aria-label={commandButton ? "Open command menu" : undefined}
        tabIndex={commandButton ? undefined : -1}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
