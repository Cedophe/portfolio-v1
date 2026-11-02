"use client";

import { useTranslations } from "next-intl";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  return (
    <div className="shell">
      <div className="not-found">
        <p className="not-found__code">ERR</p>
        <h1 className="not-found__title">{t("title")}</h1>
        <p className="not-found__body">{t("body")}</p>
        <button type="button" className="button" onClick={reset}>
          {t("retry")}
        </button>
      </div>
    </div>
  );
}
