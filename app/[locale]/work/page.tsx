import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Domain, Locale } from "@/content/types";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { toLabRow } from "@/lib/project-view";
import { PageHead } from "@/components/page-head";
import { DomainFilter } from "@/components/domain-filter";

const domainValues: Domain[] = [
  "security",
  "network",
  "wireless",
  "automation",
  "voice",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Work" });

  return pageMetadata({
    locale,
    path: "/work",
    title: t("title"),
    description: t("intro"),
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Work");
  const common = await getTranslations("Common");
  const status = await getTranslations("Status");
  const domains = await getTranslations("Domains");
  const localeValue = locale as Locale;

  const rows = projects.map((project) =>
    toLabRow(project, localeValue, domains(project.domain), status(project.status)),
  );

  const domainFilters = domainValues.map((value) => ({
    value,
    label: domains(value),
    count: projects.filter((project) => project.domain === value).length,
  }));

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <PageHead code="01" title={t("title")} intro={t("intro")} />
          <section id="index" className="section" aria-label={t("title")}>
            <DomainFilter
              projects={rows}
              domains={domainFilters}
              labels={{
                filterLabel: t("filterLabel"),
                all: t("all"),
                showing: t.raw("showing"),
                empty: t("empty"),
                readLabel: common("readCase"),
              }}
            />
          </section>
        </div>
        <aside className="workbook__rail">
          <div className="side-note">
            <span className="side-note__label">{t("legendTitle")}</span>
            <p className="side-note__body">{t("legendBody")}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
