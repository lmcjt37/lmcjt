import type { Metadata } from "next";

import { ArchivePage } from "../components/ArchivePage";
import { shelf } from "../data/content";

export const metadata: Metadata = {
  title: "Shelf - Luke Taylor",
  description:
    "Shelf by Luke Taylor: a chronological archive of books, links, and references worth handing across the table.",
};

export default function ShelfPage() {
  return (
    <ArchivePage
      backHref="/#shelf"
      description="A small archive of things I return to for product sense, clearer thinking, and the sort of craft details that tend to stick."
      items={shelf}
      title="Books, links, and references I would hand across the table."
      type="shelf"
    />
  );
}
