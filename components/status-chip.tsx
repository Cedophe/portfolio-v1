import type { CertStatus, ProjectStatus } from "@/content/types";

type Status = CertStatus | ProjectStatus;

export function StatusChip({
  status,
  label,
}: {
  status: Status;
  label: string;
}) {
  return (
    <span className={`status status--${status}`}>
      <span className="status__pattern" aria-hidden="true" />
      {label}
    </span>
  );
}
