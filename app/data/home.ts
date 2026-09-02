import { getFeaturedContent, notes, projects, shelf } from "./content";

export type WorkItem = {
  title: string;
  proof: string;
  tags: string[];
  glow: string;
  href: string;
};

export type HomeListItem = {
  type: "Book" | "Essay" | "Link" | "Placeholder";
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

const featuredNotes = getFeaturedContent(notes).map<HomeListItem>((item) => ({
  type: item.type,
  title: item.title,
  text: "Early thoughts on using AI seriously in engineering work without handing over judgment.",
  href: item.route,
}));

export const noteItems: HomeListItem[] = [
  ...featuredNotes,
  {
    type: "Placeholder",
    title: "More notes, soon",
    text: "A place for working thoughts on mobile engineering, product tradeoffs, and what holds up in practice.",
    href: "/notes",
  },
  {
    type: "Placeholder",
    title: "Still scribbling",
    text: "Short essays, sharper opinions, and the occasional useful detour will live here as the archive grows.",
    href: "/notes",
  },
];

export const shelfItems: HomeListItem[] = getFeaturedContent(shelf).map((item) => ({
  type: item.type,
  title: item.title,
  text: "A shelf note in progress.",
  href: item.route,
}));
