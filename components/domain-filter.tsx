"use client";

import { useState } from "react";
import type { Domain, LabRowData } from "@/content/types";
import { LabRow } from "./lab-row";

export type FilterDomain = {
  value: Domain;
  label: string;
  count: number;
};

export function DomainFilter({
  projects,
  domains,
  labels,
}: {
  projects: LabRowData[];
  domains: FilterDomain[];
  labels: {
    filterLabel: string;
    all: string;
    showing: string;
    empty: string;
    readLabel: string;
  };
}) {
  const [active, setActive] = useState<Domain | "all">("all");
  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.domain === active);

  return (
    <div className="work-filter">
      <div className="filter-bar" role="group" aria-label={labels.filterLabel}>
        <button
          type="button"
          className="filter"
          aria-pressed={active === "all"}
          onClick={() => setActive("all")}
        >
          {labels.all}
          <span className="filter__count">{projects.length}</span>
        </button>
        {domains.map((domain) => (
          <button
            key={domain.value}
            type="button"
            className="filter"
            aria-pressed={active === domain.value}
            onClick={() => setActive(domain.value)}
          >
            {domain.label}
            <span className="filter__count">{domain.count}</span>
          </button>
        ))}
      </div>
      <p className="filter-summary" aria-live="polite">
        {labels.showing
          .replace("{count}", String(filtered.length))
          .replace("{total}", String(projects.length))}
      </p>
      <div className="lab-list">
        {filtered.map((project) => (
          <LabRow
            key={project.slug}
            project={project}
            readLabel={labels.readLabel}
          />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="empty-state">{labels.empty}</p>
      ) : null}
    </div>
  );
}
