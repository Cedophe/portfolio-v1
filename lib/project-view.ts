import type { LabRowData, Locale, Project } from "@/content/types";
import { pick } from "./locale";

export function toLabRow(
  project: Project,
  locale: Locale,
  domainLabel: string,
  statusLabel: string,
): LabRowData {
  return {
    slug: project.slug,
    code: project.code,
    title: pick(locale, project.title),
    summary: pick(locale, project.summary),
    domain: project.domain,
    status: project.status,
    domainLabel,
    statusLabel,
    stack: project.stack,
  };
}
