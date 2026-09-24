import type { Metadata } from "next";

import { ArchivePage } from "../components/ArchivePage";
import { articles } from "../data/content";

export const metadata: Metadata = {
  title: "Articles - Luke Taylor",
  description:
    "Articles by Luke Taylor: essays and working thoughts on AI, mobile engineering, product, and craft.",
};

export default function ArticlesPage() {
  return (
    <ArchivePage
      backHref="/#articles"
      description="This is where I collect longer-form thinking around AI, mobile engineering, product tradeoffs, and the small details that shape how software feels in practice."
      items={articles}
      title="A chronological list of essays, drafts, and working thoughts."
      type="articles"
    />
  );
}
