import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailPage } from "../../components/DetailPages";
import { projectContent } from "../../content/registry";
import { getContentBySlug, projects } from "../../data/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getContentBySlug(projects, slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - Luke Taylor`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getContentBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  const content = projectContent[project.slug];

  if (!content) {
    notFound();
  }

  return <ProjectDetailPage content={content} project={project} />;
}
