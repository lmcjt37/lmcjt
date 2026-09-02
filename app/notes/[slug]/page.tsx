import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WritingDetailPage } from "../../components/DetailPages";
import { noteContent } from "../../content/registry";
import { getContentBySlug, notes } from "../../data/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getContentBySlug(notes, slug);

  if (!note) {
    return {};
  }

  return {
    title: `${note.title} - Luke Taylor`,
    description: note.description,
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getContentBySlug(notes, slug);

  if (!note) {
    notFound();
  }

  const content = noteContent[note.slug];

  if (!content) {
    notFound();
  }

  return <WritingDetailPage content={content} item={note} />;
}
