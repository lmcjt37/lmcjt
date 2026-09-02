import { PageTransition } from "./PageTransition";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageChromeProps = {
  children: React.ReactNode;
  commandButton?: boolean;
  detailPage?: boolean;
  footerHomeActions?: boolean;
};

export function PageChrome({ children, commandButton, detailPage = false, footerHomeActions }: PageChromeProps) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
      <PageTransition />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader brandHref={detailPage ? "/" : "#hero"} commandButton={commandButton} homeNav={!detailPage} />
      {children}
      <SiteFooter homeOnlyActions={footerHomeActions} />
    </>
  );
}
