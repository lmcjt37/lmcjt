export type ContentSection = "projects" | "articles" | "shelf";

export type ContentRoute = `/${ContentSection}/${string}/`;

export type BaseContentItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  route: ContentRoute;
  listed: boolean;
  featured: boolean;
};

export type ProjectItem = BaseContentItem & {
  section: "projects";
  proof: string;
  tags: string[];
  glow: string;
  projectNumber: string;
  topline: string;
  nextSlug?: string;
};

export type ArticleItem = BaseContentItem & {
  section: "articles";
  type: "Essay";
  readTime: string;
  chips: string[];
};

export type ShelfItem = BaseContentItem & {
  section: "shelf";
  type: "Book" | "Link";
  chips?: string[];
  externalUrl?: string;
};

export type ContentItem = ProjectItem | ArticleItem | ShelfItem;

export const projects = [
  {
    section: "projects",
    slug: "coffee-dev",
    title: "Coffee Dev",
    description:
      "Coffee Dev by Luke Taylor: an idle simulation that turns engineering activity into a gamified cafe for engagement, clarity, and better habits.",
    date: "2026-09-01",
    route: "/projects/coffee-dev/",
    listed: true,
    featured: true,
    proof:
      "Turns GitHub activity into a readable cafe simulation with authored layouts, idle loops, and product-facing progression.",
    tags: ["Next.js", "PixiJS", "simulation UX"],
    glow: "rgba(98, 213, 197, 0.78)",
    projectNumber: "01",
    topline: "Next.js / PixiJS / simulation UX",
    nextSlug: "cosmographer",
  },
  {
    section: "projects",
    slug: "cosmographer",
    title: "Cosmographer",
    description:
      "Cosmographer by Luke Taylor: a graph viewer and architecture tool for visualising domains and cross-cutting concerns in a codebase.",
    date: "2026-09-01",
    route: "/projects/cosmographer/",
    listed: true,
    featured: true,
    proof:
      "A way to visualise a project’s domains and cross-cutting concerns by traversing code, tracing connections, and rendering the result with Cosmograph.",
    tags: ["Cosmograph", "React", "graph tooling"],
    glow: "rgba(139, 93, 255, 0.66)",
    projectNumber: "02",
    topline: "Cosmograph / React / Vite",
    nextSlug: "skills",
  },
  {
    section: "projects",
    slug: "skills",
    title: "skills",
    description:
      "skills by Luke Taylor: a personal operating layer for AI-assisted engineering built around repeatable, evolving workflows.",
    date: "2026-09-01",
    route: "/projects/skills/",
    listed: true,
    featured: true,
    proof:
      "A personal operating layer for AI-assisted engineering, built around repeatable commands like /dev-plan and /journal to turn recurring workflows into durable skills.",
    tags: ["AI workflows", "DX", "tooling"],
    glow: "rgba(255, 125, 85, 0.68)",
    projectNumber: "03",
    topline: "AI workflows / DX / tooling",
    nextSlug: "coffee-dev",
  },
] satisfies ProjectItem[];

export const articles = [
  {
    section: "articles",
    slug: "death-spiral",
    title: "Death spiral",
    description:
      "Death spiral by Luke Taylor: AI can amplify engineering, but automated output risks eroding context, judgment, and ownership.",
    date: "2026-09-24",
    route: "/articles/death-spiral/",
    listed: true,
    featured: true,
    type: "Essay",
    readTime: "6 minute read",
    chips: ["AI", "Engineering", "Opinion"],
  },
  {
    section: "articles",
    slug: "the-ai-story-so-far",
    title: "The AI story so far...",
    description:
      "The AI story so far... by Luke Taylor: from skepticism to regular use, with a human-in-the-loop view of AI in engineering.",
    date: "2026-09-01",
    route: "/articles/the-ai-story-so-far/",
    listed: true,
    featured: true,
    type: "Essay",
    readTime: "2 minute 30 second read",
    chips: ["AI", "Engineering", "Learning"],
  },
] satisfies ArticleItem[];

export const shelf = [
  {
    section: "shelf",
    slug: "tech-extinctions",
    title: "I Have Survived 4 Tech Extinctions Since 2002. And AI Is Number 4",
    description:
      "A reflection on four waves of technological change and what AI may mean for the people working through the latest one.",
    date: "2026-09-24",
    route: "/shelf/tech-extinctions/",
    listed: true,
    featured: true,
    type: "Link",
    externalUrl:
      "https://freedium-mirror.cfd/https://levelup.gitconnected.com/i-have-survived-4-tech-extinctions-since-2002-and-ai-is-number-4-c4ced4852026",
  },
  {
    section: "shelf",
    slug: "slop-grenade",
    title: "Slop Grenade",
    description:
      "A concise case against dropping AI-generated essays into conversations when a human answer would do.",
    date: "2026-09-24",
    route: "/shelf/slop-grenade/",
    listed: true,
    featured: true,
    type: "Link",
    externalUrl: "https://noslopgrenade.com/",
  },
  {
    section: "shelf",
    slug: "dune-saga",
    title: "Dune saga",
    description:
      "An expansive sci-fi saga with rich world building, intricate factions, and a lasting influence on modern science fiction.",
    date: "2026-09-01",
    route: "/shelf/dune-saga/",
    listed: true,
    featured: true,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "ready-player-one-and-two",
    title: "Ready Player One and Two",
    description:
      "A nostalgic, high-stakes sci-fi adventure for anyone who enjoys gaming, pop-culture references, and near-future quests.",
    date: "2026-09-01",
    route: "/shelf/ready-player-one-and-two/",
    listed: true,
    featured: true,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "the-martian",
    title: "The Martian",
    description:
      "Andy Weir's tense, funny survival story balances science, momentum, and problem-solving without becoming dry.",
    date: "2026-09-01",
    route: "/shelf/the-martian/",
    listed: true,
    featured: true,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    description:
      "An end-of-the-world sci-fi story with humour, momentum, and satisfying science-led problem solving.",
    date: "2026-09-01",
    route: "/shelf/project-hail-mary/",
    listed: true,
    featured: true,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "artemis",
    title: "Artemis",
    description:
      "A short, lively lunar underdog story that plays like a space heist with Andy Weir's easy-to-read style.",
    date: "2026-09-01",
    route: "/shelf/artemis/",
    listed: true,
    featured: false,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "icqr-tree",
    title: "ICQR Tree",
    description:
      "A playful, interactive wrapper for sharing URLs that makes a simple practical task feel more memorable.",
    date: "2026-09-01",
    route: "/shelf/icqr-tree/",
    listed: true,
    featured: false,
    type: "Link",
    externalUrl: "https://tree.icqr.com/?q=MDBodHRwczovL2ljcXIuY29tLw",
  },
  {
    section: "shelf",
    slug: "link-lowdown",
    title: "Link Lowdown",
    description:
      "A thoughtfully curated collection of useful sub-links and interesting projects that rewards a little exploration.",
    date: "2026-09-01",
    route: "/shelf/link-lowdown/",
    listed: true,
    featured: false,
    type: "Link",
    externalUrl: "https://www.linklowdown.com/",
  },
] satisfies ShelfItem[];

export const allContent = [...projects, ...articles, ...shelf] satisfies ContentItem[];

export function getContentBySlug<TContent extends ContentItem>(
  items: readonly TContent[],
  slug: string,
): TContent | undefined {
  return items.find((item) => item.slug === slug);
}

export function getListedContent<TContent extends ContentItem>(items: readonly TContent[]) {
  return items.filter((item) => item.listed);
}

export function getFeaturedContent<TContent extends ContentItem>(items: readonly TContent[]) {
  return items.filter((item) => item.featured);
}
