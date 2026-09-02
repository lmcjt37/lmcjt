import type { ComponentType } from "react";

export type ProjectContentDetail = {
  headline: string;
  intro: string;
  bullets: string[];
  panels: {
    title: string;
    body: string;
  }[];
  primaryLinkLabel: string;
  primaryLinkHref: string;
};

export type WritingContentDetail = {
  excerpt: string;
};

export type ProjectContentModule = {
  default: ComponentType;
  detail: ProjectContentDetail;
};

export type WritingContentModule = {
  default: ComponentType;
  detail: WritingContentDetail;
};
