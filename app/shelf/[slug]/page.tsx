import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WritingDetailPage } from "../../components/DetailPages";
import { getContentBySlug, shelf } from "../../data/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return shelf.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const shelfItem = getContentBySlug(shelf, slug);

  if (!shelfItem) {
    return {};
  }

  return {
    title: `${shelfItem.title} - Luke Taylor`,
    description: shelfItem.description,
  };
}

export default async function ShelfDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const shelfItem = getContentBySlug(shelf, slug);

  if (!shelfItem) {
    notFound();
  }

  return <WritingDetailPage item={shelfItem} />;
}
