import type { LabRowData } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "./icons";
import { StatusChip } from "./status-chip";

export function LabRow({
  project,
  readLabel,
}: {
  project: LabRowData;
  readLabel: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="lab-row">
      <span className="lab-row__code">{project.code}</span>
      <div className="lab-row__body">
        <h3 className="lab-row__title">{project.title}</h3>
        <p className="lab-row__summary">{project.summary}</p>
        <div className="lab-row__meta">
          <span className="lab-row__domain">{project.domainLabel}</span>
          <StatusChip status={project.status} label={project.statusLabel} />
          <span className="sr-only">{readLabel}</span>
        </div>
      </div>
      <ArrowUpRight className="lab-row__arrow" />
    </Link>
  );
}
