export type ResumeTimelineItem = {
  where: string;
  when: string;
  position: string;
  focus: string;
  tags: string[];
};

export type ResumeTechnologyGroup = {
  title: string;
  items: string[];
};

export const resumeDownloadHref = "/assets/luke_taylor.pdf";

export const resumeTechnologyGroups: ResumeTechnologyGroup[] = [
  {
    title: "Mobile",
    items: ["Swift", "SwiftUI", "Objective-C", "UIKit", "Core Data", "SwiftData", "Kotlin", "Java"],
  },
  {
    title: "Cross-platform",
    items: ["React Native", "Kotlin Multiplatform"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Ruby", "PHP", "Go"],
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "VIPER", "MVVM", "MVC", "Modularisation"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Gatsby"],
  },
  {
    title: "State",
    items: ["Redux", "React Context API", "Zustand"],
  },
  {
    title: "DevOps",
    items: [
      "Fastlane",
      "Swift Package Manager",
      "CocoaPods",
      "Gradle",
      "CircleCI",
      "GitHub Actions",
      "NPM",
      "ArgoCD",
      "AWS",
    ],
  },
  {
    title: "Testing",
    items: ["XCTest", "XCUITest", "Detox", "React Native Testing Library", "Jest"],
  },
  {
    title: "APIs & Data",
    items: ["GraphQL", "Apollo", "REST", "SQL", "NoSQL", "PostgreSQL", "Node.js", "Express", "Koa"],
  },
  {
    title: "Observability",
    items: ["Firebase", "Sentry", "New Relic", "Tealium", "Conviva", "Datadog", "Supabase"],
  },
  {
    title: "Delivery",
    items: [
      "Architecture reviews",
      "Cross-functional communication",
      "Mentoring",
      "Incident response",
      "Scrum",
      "Kanban",
      "Lean",
    ],
  },
];

export const resumeTimeline: ResumeTimelineItem[] = [
  {
    where: "Lendable",
    when: "Jun 2026 - Present",
    position: "Senior Software Engineer",
    focus:
      "Building and improving customer-facing mobile product experiences with a practical focus on delivery, quality, and engineering clarity.",
    tags: ["React Native", "Mobile", "Product engineering", "DX"],
  },
  {
    where: "The Economist",
    when: "Apr 2022 - 2026",
    position: "Staff Software Engineer (Mobile)",
    focus:
      "Technical leader in the mobile pillar, driving architecture, performance, native migration, CI/CD, developer experience, mentoring, and AI enablement across Content, Audio, and Platform.",
    tags: ["iOS", "Android", "React Native", "DX"],
  },
  {
    where: "Utility Warehouse",
    when: "Feb 2021 - Apr 2022",
    position: "Senior Software Engineer (Mobile / Full-stack)",
    focus:
      "Early engineer on a cross-platform mobile product for partners and prospective customers, contributing from inception through delivery and iteration.",
    tags: ["Mobile", "Full stack", "Domain-driven design"],
  },
  {
    where: "Shell Energy Retail",
    when: "Mar 2019 - Jan 2021",
    position: "Lead Software Engineer (Mobile & Web)",
    focus:
      "Led technical direction through acquisition and rebrand, moving from a legacy cross-platform framework toward native iOS and Android while coordinating with web teams on customer journeys.",
    tags: ["Technical leadership", "OAuth", "CI/CD"],
  },
  {
    where: "Elf at Work",
    when: "Jun 2019 - Aug 2020",
    position: "Lead Mobile Developer (Contract)",
    focus:
      "Led a React Native rewrite from proof of concept into production, shipping to the App Store and Google Play for B2B clients with SDUI and media playback foundations.",
    tags: ["React Native", "SDUI", "B2B"],
  },
  {
    where: "First Utility",
    when: "Aug 2018 - Mar 2019",
    position: "Lead Software Engineer (Mobile)",
    focus:
      "Progressed from software engineer to lead, owning sprint execution, mentoring engineers, and shaping mobile platform architecture during significant product change.",
    tags: ["Mobile", "Leadership", "Agile"],
  },
  {
    where: "Core 13",
    when: "Dec 2011 - Jul 2015",
    position: "Web Developer",
    focus:
      "Built and maintained custom web and mobile applications in an agency setting, including ongoing support through an in-house CMS.",
    tags: ["Web development", "Mobile", "CMS"],
  },
];
