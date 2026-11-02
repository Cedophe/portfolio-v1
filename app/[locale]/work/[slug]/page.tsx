import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getProject, projects } from "@/content/projects";
import { pick } from "@/lib/locale";
import { pageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { PageHead } from "@/components/page-head";
import { StatusChip } from "@/components/status-chip";
import { TopologySchematic } from "@/components/topology-schematic";
import { ArrowLeft } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return pageMetadata({
    locale,
    path: `/work/${project.slug}`,
    title: pick(locale, project.title),
    description: pick(locale, project.summary),
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("WorkDetail");
  const common = await getTranslations("Common");
  const status = await getTranslations("Status");
  const domains = await getTranslations("Domains");

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <nav className="breadcrumb" aria-label={t("backLabel")}>
            <Link className="text-link" href="/work">
              <ArrowLeft /> {t("backLabel")}
            </Link>
          </nav>
          <PageHead
            code={project.code}
            title={pick(locale, project.title)}
            intro={pick(locale, project.summary)}
            meta={
              <>
                <span className="lab-row__domain">
                  {domains(project.domain)}
                </span>
                <StatusChip
                  status={project.status}
                  label={status(project.status)}
                />
              </>
            }
          />

          <dl className="lab-meta-grid">
            <div>
              <dt>{common("scope")}</dt>
              <dd>{pick(locale, project.scope)}</dd>
            </div>
            <div>
              <dt>{common("site")}</dt>
              <dd>{pick(locale, project.site)}</dd>
            </div>
            <div>
              <dt>{common("stack")}</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
          </dl>

          <section id="context" className="lab-section">
            <h2>{t("context")}</h2>
            <p>{pick(locale, project.context)}</p>
          </section>
          <section id="approach" className="lab-section">
            <h2>{t("approach")}</h2>
            <p>{pick(locale, project.approach)}</p>
          </section>
          <section id="constraints" className="lab-section">
            <h2>{t("constraints")}</h2>
            <p>{pick(locale, project.constraints)}</p>
          </section>
          <section id="stack" className="lab-section">
            <h2>{t("stack")}</h2>
            <ul className="stack-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="schematic-block">
            <TopologySchematic labels={project.stack} />
            <span className="schematic-label">{common("illustrative")}</span>
          </div>

          <nav className="lab-pager" aria-label={t("pagerLabel")}>
            <Link href={`/work/${previous.slug}`}>
              <span className="lab-pager__label">{common("previousCase")}</span>
              <span className="lab-pager__title">
                {pick(locale, previous.title)}
              </span>
            </Link>
            <Link href={`/work/${next.slug}`}>
              <span className="lab-pager__label">{common("nextCase")}</span>
              <span className="lab-pager__title">
                {pick(locale, next.title)}
              </span>
            </Link>
          </nav>
        </div>

        <aside className="workbook__rail">
          <div className="side-note">
            <span className="side-note__label">{t("statusNote")}</span>
            <p className="side-note__body">
              <StatusChip
                status={project.status}
                label={status(project.status)}
              />
            </p>
          </div>
          <div className="side-note">
            <span className="side-note__label">{common("role")}</span>
            <p className="side-note__body">{t("roleValue")}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
