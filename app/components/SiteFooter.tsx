type SiteFooterProps = {
  homeOnlyActions?: boolean;
};

export function SiteFooter({ homeOnlyActions = false }: SiteFooterProps) {
  return (
    <footer className="footer">
      <span>© 2026 Luke Taylor</span>
      {homeOnlyActions ? (
        <button id="spark-button" type="button">
          leave a trace
        </button>
      ) : (
        <a href="/" data-transition-link>
          home
        </a>
      )}
    </footer>
  );
}
