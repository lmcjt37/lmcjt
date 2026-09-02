import { PageTransition } from "./PageTransition";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageChromeProps = {
  children: React.ReactNode;
  commandButton?: boolean;
  footerHomeActions?: boolean;
};

export function PageChrome({ children, commandButton, footerHomeActions }: PageChromeProps) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
      <PageTransition />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader commandButton={commandButton} />
      {children}
      <SiteFooter homeOnlyActions={footerHomeActions} />
    </>
  );
}
