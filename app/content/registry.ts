import coffeeDev from "./projects/coffee-dev.mdx";
import { detail as coffeeDevDetail } from "./projects/coffee-dev.mdx";
import cosmographer from "./projects/cosmographer.mdx";
import { detail as cosmographerDetail } from "./projects/cosmographer.mdx";
import skills from "./projects/skills.mdx";
import { detail as skillsDetail } from "./projects/skills.mdx";
import theAiStorySoFar from "./notes/the-ai-story-so-far.mdx";
import { detail as theAiStorySoFarDetail } from "./notes/the-ai-story-so-far.mdx";
import artemis from "./shelf/artemis.mdx";
import { detail as artemisDetail } from "./shelf/artemis.mdx";
import duneSaga from "./shelf/dune-saga.mdx";
import { detail as duneSagaDetail } from "./shelf/dune-saga.mdx";
import icqrTree from "./shelf/icqr-tree.mdx";
import { detail as icqrTreeDetail } from "./shelf/icqr-tree.mdx";
import linkLowdown from "./shelf/link-lowdown.mdx";
import { detail as linkLowdownDetail } from "./shelf/link-lowdown.mdx";
import projectHailMary from "./shelf/project-hail-mary.mdx";
import { detail as projectHailMaryDetail } from "./shelf/project-hail-mary.mdx";
import readyPlayerOneAndTwo from "./shelf/ready-player-one-and-two.mdx";
import { detail as readyPlayerOneAndTwoDetail } from "./shelf/ready-player-one-and-two.mdx";
import theMartian from "./shelf/the-martian.mdx";
import { detail as theMartianDetail } from "./shelf/the-martian.mdx";
import type { ProjectContentModule, WritingContentModule } from "./types";

export const projectContent: Record<string, ProjectContentModule> = {
  "coffee-dev": {
    default: coffeeDev,
    detail: coffeeDevDetail,
  },
  cosmographer: {
    default: cosmographer,
    detail: cosmographerDetail,
  },
  skills: {
    default: skills,
    detail: skillsDetail,
  },
};

export const noteContent: Record<string, WritingContentModule> = {
  "the-ai-story-so-far": {
    default: theAiStorySoFar,
    detail: theAiStorySoFarDetail,
  },
};

export const shelfContent: Record<string, WritingContentModule> = {
  artemis: {
    default: artemis,
    detail: artemisDetail,
  },
  "dune-saga": {
    default: duneSaga,
    detail: duneSagaDetail,
  },
  "icqr-tree": {
    default: icqrTree,
    detail: icqrTreeDetail,
  },
  "link-lowdown": {
    default: linkLowdown,
    detail: linkLowdownDetail,
  },
  "project-hail-mary": {
    default: projectHailMary,
    detail: projectHailMaryDetail,
  },
  "ready-player-one-and-two": {
    default: readyPlayerOneAndTwo,
    detail: readyPlayerOneAndTwoDetail,
  },
  "the-martian": {
    default: theMartian,
    detail: theMartianDetail,
  },
};
