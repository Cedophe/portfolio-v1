export function SectionHeading({
  code,
  title,
  note,
  id,
}: {
  code: string;
  title: string;
  note?: string;
  id?: string;
}) {
  return (
    <div className="section__head">
      <span className="section__code" aria-hidden="true">
        {code}
      </span>
      <h2 id={id} className="section__title">
        {title}
      </h2>
      {note ? <span className="section__note">{note}</span> : null}
    </div>
  );
}
