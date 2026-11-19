import type { ReactNode } from "react";
import Image from "next/image";

type RouxPageProps = {
  children: ReactNode;
  eyebrow?: string;
  title: string;
};

export function RouxPage({ children, eyebrow, title }: RouxPageProps) {
  return (
    <main className="roux-page">
      <div className="roux-shell">
        <header className="roux-header">
          <a className="roux-brand" href="/roux/" aria-label="Roux home">
            <Image src="/assets/roux-brand-mark.png" alt="" height={40} width={40} />
            <span>Roux</span>
          </a>
          <nav aria-label="Roux links">
            <a href="/roux/privacy/">Privacy</a>
            <a href="/roux/support/">Support</a>
          </nav>
        </header>

        <section className="roux-hero">
          {eyebrow ? <p className="roux-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
        </section>

        <article className="roux-content">{children}</article>

        <footer className="roux-footer">
          <span>Roux · Your recipes, your kitchen.</span>
          <span>© {new Date().getFullYear()} Roux</span>
        </footer>
      </div>
    </main>
  );
}
