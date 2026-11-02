import type { ReactNode } from "react";

export function PageHead({
  code,
  title,
  intro,
  meta,
}: {
  code: string;
  title: string;
  intro: string;
  meta?: ReactNode;
}) {
  return (
    <header className="page-head">
      <span className="page-head__code" aria-hidden="true">
        {code}
      </span>
      <h1 className="page-head__title">{title}</h1>
      <p className="page-head__intro">{intro}</p>
      {meta ? <div className="page-head__meta">{meta}</div> : null}
    </header>
  );
}
