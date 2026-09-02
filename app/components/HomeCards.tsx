import type { CSSProperties } from "react";

import type { HomeListItem, WorkItem } from "../data/home";

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <a
      className="work-card reveal tile-link"
      href={item.href}
      style={{ "--glow": item.glow } as CSSProperties}
      data-transition-link
    >
      <div className="work-number">{String(index + 1).padStart(2, "0")}</div>
      <div className="work-main">
        <h3>{item.title}</h3>
        <p>{item.proof}</p>
      </div>
      <div className="work-tags">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

export function HomeItemCard({ item }: { item: HomeListItem }) {
  const placeholderClass = item.type === "Placeholder" ? " item-card--placeholder" : "";

  return (
    <a
      className={`item-card reveal tile-link${placeholderClass}`}
      href={item.href}
      data-transition-link
    >
      <span>{item.type}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </a>
  );
}
