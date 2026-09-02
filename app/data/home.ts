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

export const workItems: WorkItem[] = [
  {
    title: "Coffee Dev",
    proof:
      "Turns GitHub activity into a readable cafe simulation with authored layouts, idle loops, and product-facing progression.",
    tags: ["Next.js", "PixiJS", "simulation UX"],
    glow: "rgba(98, 213, 197, 0.78)",
    href: "/projects/coffee-dev",
  },
  {
    title: "Cosmographer",
    proof:
      "A way to visualise a project’s domains and cross-cutting concerns by traversing code, tracing connections, and rendering the result with Cosmograph.",
    tags: ["Cosmograph", "React", "graph tooling"],
    glow: "rgba(139, 93, 255, 0.66)",
    href: "/projects/cosmographer",
  },
  {
    title: "skills",
    proof:
      "A personal operating layer for AI-assisted engineering, built around repeatable commands like /dev-plan and /journal to turn recurring workflows into durable skills.",
    tags: ["AI workflows", "DX", "tooling"],
    glow: "rgba(255, 125, 85, 0.68)",
    href: "/projects/skills",
  },
];

export const noteItems: HomeListItem[] = [
  {
    type: "Essay",
    title: "The AI story so far...",
    text: "Early thoughts on using AI seriously in engineering work without handing over judgment.",
    href: "/notes/the-ai-story-so-far",
  },
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

export const shelfItems: HomeListItem[] = [
  {
    type: "Book",
    title: "Dune saga",
    text: "A shelf note in progress.",
    href: "/shelf/dune-saga",
  },
  {
    type: "Book",
    title: "Ready Player One and Two",
    text: "A shelf note in progress.",
    href: "/shelf/ready-player-one-and-two",
  },
  {
    type: "Book",
    title: "The Martian",
    text: "A shelf note in progress.",
    href: "/shelf/the-martian",
  },
  {
    type: "Book",
    title: "Project Hail Mary",
    text: "A shelf note in progress.",
    href: "/shelf/project-hail-mary",
  },
  {
    type: "Book",
    title: "Artemis",
    text: "A shelf note in progress.",
    href: "/shelf/artemis",
  },
  {
    type: "Link",
    title: "ICQR Tree",
    text: "A shelf note in progress.",
    href: "/shelf/icqr-tree",
  },
  {
    type: "Link",
    title: "Link Lowdown",
    text: "A shelf note in progress.",
    href: "/shelf/link-lowdown",
  },
];
