import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WritingDetailPage } from "../../components/DetailPages";
import { articleContent } from "../../content/registry";
import { articles, getContentBySlug } from "../../data/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentBySlug(articles, slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} - Luke Taylor`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getContentBySlug(articles, slug);

  if (!article) {
    notFound();
  }

  const content = articleContent[article.slug];

  if (!content) {
    notFound();
  }

  return <WritingDetailPage content={content} item={article} />;
}
