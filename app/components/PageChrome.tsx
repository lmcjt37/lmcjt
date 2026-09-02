import { CommandDialog } from "./CommandDialog";
import { CommandSurfaceEffects } from "./CommandSurfaceEffects";
import { PageTransition } from "./PageTransition";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageChromeProps = {
  children: React.ReactNode;
  commandButton?: boolean;
  detailPage?: boolean;
  footerHomeActions?: boolean;
};

export function PageChrome({
  children,
  commandButton,
  detailPage = false,
  footerHomeActions,
}: PageChromeProps) {
  const showCommandSurface = commandButton || detailPage;
  const homeNav = !detailPage;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
      <PageTransition />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader
        brandHref={detailPage ? "/" : "#hero"}
        commandButton={showCommandSurface}
        homeNav={homeNav}
      />
      {children}
      {showCommandSurface ? <CommandDialog homeNav={homeNav} /> : null}
      <SiteFooter homeOnlyActions={footerHomeActions} />
      {showCommandSurface ? <CommandSurfaceEffects /> : null}
    </>
  );
}
