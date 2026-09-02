"use client";

import { useEffect, useState } from "react";

import { allContent, getListedContent, type ContentItem } from "../data/content";

const detours = getListedContent(allContent);

export function NotFoundDetour() {
  const [item, setItem] = useState<ContentItem>(detours[0]);

  useEffect(() => {
    setItem(detours[Math.floor(Math.random() * detours.length)]);
  }, []);

  const sectionLabel =
    item.section === "projects" ? "Project" : item.section === "notes" ? "Note" : "Shelf";

  return (
    <a className="not-found__detour" href={item.route}>
      <span>Try a {sectionLabel.toLowerCase()}</span>
      <strong>{item.title}</strong>
      <span aria-hidden="true">→</span>
    </a>
  );
}
