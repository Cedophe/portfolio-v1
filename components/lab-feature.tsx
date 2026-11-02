import type { LabRowData } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "./icons";
import { StatusChip } from "./status-chip";
import { NgfwSchematic } from "./ngfw-schematic";
import { TopologySchematic } from "./topology-schematic";

export function LabFeature({
  project,
  readLabel,
  illustrativeLabel,
}: {
  project: LabRowData;
  readLabel: string;
  illustrativeLabel: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="lab-feature">
      <div className="lab-feature__body">
        <div className="lab-feature__meta">
          <span>{project.code}</span>
          <span>{project.domainLabel}</span>
          <StatusChip status={project.status} label={project.statusLabel} />
        </div>
        <h3 className="lab-feature__title">{project.title}</h3>
        <p className="lab-feature__summary">{project.summary}</p>
        <span className="lab-feature__cta">
          {readLabel} <ArrowUpRight />
        </span>
      </div>
      <div className="lab-feature__schematic">
        {project.slug === "university-ngfw-rollout" ? (
          <NgfwSchematic label={illustrativeLabel} />
        ) : (
          <TopologySchematic labels={project.stack} />
        )}
        <span className="schematic-label">{illustrativeLabel}</span>
      </div>
    </Link>
  );
}
