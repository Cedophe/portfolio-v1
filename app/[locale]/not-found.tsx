"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="shell">
      <div className="not-found">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">{t("title")}</h1>
        <p className="not-found__body">{t("body")}</p>
        <Link className="text-link" href="/">
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
