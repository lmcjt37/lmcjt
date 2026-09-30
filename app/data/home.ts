import { articles, getFeaturedContent, projects, shelf } from "./content";

export type WorkItem = {
  title: string;
  proof: string;
  tags: string[];
  glow: string;
  href: string;
};

export type HomeListItem = {
  type: "Book" | "Essay" | "Link";
  title: string;
  text: string;
  href: string;
};

export const workItems: WorkItem[] = getFeaturedContent(projects).map((item) => ({
  title: item.title,
  proof: item.proof,
  tags: item.tags,
  glow: item.glow,
  href: item.route,
}));

const featuredArticles = getFeaturedContent(articles).map<HomeListItem>((item) => ({
  type: item.type,
  title: item.title,
  text: item.description,
  href: item.route,
}));

export const articleItems: HomeListItem[] = featuredArticles;

export const shelfItems: HomeListItem[] = getFeaturedContent(shelf).map((item) => ({
  type: item.type,
  title: item.title,
  text: item.description,
  href: item.route,
}));
