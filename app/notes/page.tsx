import type { Metadata } from "next";

import { ArchivePage } from "../components/ArchivePage";
import { notes } from "../data/content";

export const metadata: Metadata = {
  title: "Notes - Luke Taylor",
  description: "Notes by Luke Taylor: essays and working thoughts on AI, mobile engineering, product, and craft.",
};

export default function NotesPage() {
  return (
    <ArchivePage
      backHref="/#notes"
      description="This is where I collect longer-form thinking around AI, mobile engineering, product tradeoffs, and the small details that shape how software feels in practice."
      items={notes}
      title="A chronological list of essays, drafts, and working thoughts."
      type="notes"
    />
  );
}
