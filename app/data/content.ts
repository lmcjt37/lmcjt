export type ContentSection = "projects" | "notes" | "shelf";

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

export type NoteItem = BaseContentItem & {
  section: "notes";
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

export type ContentItem = ProjectItem | NoteItem | ShelfItem;

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
    nextSlug: "tiny-delight-studies",
  },
  {
    section: "projects",
    slug: "tiny-delight-studies",
    title: "Tiny Delight Studies",
    description:
      "Tiny Delight Studies by Luke Taylor: interaction sketches about motion, surprise, and useful product polish.",
    date: "2026-09-01",
    route: "/projects/tiny-delight-studies/",
    listed: true,
    featured: false,
    proof: "Interaction sketches about motion, surprise, and useful product polish.",
    tags: ["interaction", "motion", "craft"],
    glow: "rgba(214, 255, 115, 0.6)",
    projectNumber: "04",
    topline: "interaction / motion / craft",
    nextSlug: "coffee-dev",
  },
] satisfies ProjectItem[];

export const notes = [
  {
    section: "notes",
    slug: "the-ai-story-so-far",
    title: "The AI story so far...",
    description:
      "The AI story so far... by Luke Taylor: from skepticism to regular use, with a human-in-the-loop view of AI in engineering.",
    date: "2026-09-01",
    route: "/notes/the-ai-story-so-far/",
    listed: true,
    featured: true,
    type: "Essay",
    readTime: "2 minute 30 second read",
    chips: ["AI", "Engineering", "Learning"],
  },
] satisfies NoteItem[];

export const shelf = [
  {
    section: "shelf",
    slug: "dune-saga",
    title: "Dune saga",
    description: "Dune saga, shared by Luke Taylor.",
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
    description: "Ready Player One and Two, shared by Luke Taylor.",
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
    description: "The Martian, shared by Luke Taylor.",
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
    description: "Project Hail Mary, shared by Luke Taylor.",
    date: "2026-09-01",
    route: "/shelf/project-hail-mary/",
    listed: true,
    featured: false,
    type: "Book",
  },
  {
    section: "shelf",
    slug: "artemis",
    title: "Artemis",
    description: "Artemis, shared by Luke Taylor.",
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
    description: "ICQR Tree, shared by Luke Taylor.",
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
    description: "Link Lowdown, shared by Luke Taylor.",
    date: "2026-09-01",
    route: "/shelf/link-lowdown/",
    listed: true,
    featured: false,
    type: "Link",
    externalUrl: "https://www.linklowdown.com/",
  },
  {
    section: "shelf",
    slug: "little-big-details",
    title: "Little Big Details",
    description: "Little Big Details, recommended by Luke Taylor.",
    date: "2026-09-01",
    route: "/shelf/little-big-details/",
    listed: false,
    featured: false,
    type: "Link",
    chips: ["UX", "Details", "Product"],
  },
  {
    section: "shelf",
    slug: "shape-up",
    title: "Shape Up",
    description: "Shape Up, recommended by Luke Taylor.",
    date: "2026-09-01",
    route: "/shelf/shape-up/",
    listed: false,
    featured: false,
    type: "Book",
    chips: ["Scope", "Appetite", "Shaping"],
  },
  {
    section: "shelf",
    slug: "the-design-of-everyday-things",
    title: "The Design of Everyday Things",
    description:
      "The Design of Everyday Things, recommended by Luke Taylor for product sense, usability, and design thinking.",
    date: "2026-09-01",
    route: "/shelf/the-design-of-everyday-things/",
    listed: false,
    featured: false,
    type: "Book",
    chips: ["Design", "Usability", "Product"],
  },
] satisfies ShelfItem[];

export const allContent = [...projects, ...notes, ...shelf] satisfies ContentItem[];

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
