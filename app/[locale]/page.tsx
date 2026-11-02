import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import {
  certifications,
  principles,
  roles,
  trainingPrograms,
} from "@/content/profile";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { pick } from "@/lib/locale";
import { toLabRow } from "@/lib/project-view";
import { SectionHeading } from "@/components/section-heading";
import { LabFeature } from "@/components/lab-feature";
import { LabRow } from "@/components/lab-row";
import { StatusChip } from "@/components/status-chip";
import { ArrowUpRight } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return pageMetadata({
    locale,
    path: "/",
    title: t("title"),
    description: t("description"),
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const common = await getTranslations("Common");
  const status = await getTranslations("Status");
  const domains = await getTranslations("Domains");

  const localeValue = locale as Locale;
  const statusLabels = {
    complete: status("complete"),
    inProgress: status("inProgress"),
    pending: status("pending"),
  };
  const rows = projects.map((project) =>
    toLabRow(project, localeValue, domains(project.domain), status(project.status)),
  );
  const featured = rows[0];
  const selected = rows.slice(1, 4);
  const [firstName, ...lastName] = site.name.split(" ");

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <section className="hero" id="profile" aria-labelledby="hero-title">
            <h1 id="hero-title" className="hero__name">
              <span>{firstName}</span>
              <span className="hero__name-last">{lastName.join(" ")}</span>
            </h1>
            <p className="hero__role">
              {t("role")} <span>/</span> {t("cloud")}
            </p>
            <p className="hero__positioning">{t("positioning")}</p>
            <div className="hero__actions">
              <Link className="button" href="/contact">
                {common("contact")} <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/work">
                {common("viewWork")} <ArrowUpRight />
              </Link>
            </div>
            <p className="hero__status">{common("available")}</p>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <SectionHeading
              code="01"
              title={t("selectedLabs")}
              note={t("labsCount")}
              id="work-title"
            />
            <p className="section__intro">{t("selectedLabsIntro")}</p>
            <LabFeature
              project={featured}
              readLabel={common("readCase")}
              illustrativeLabel={common("illustrative")}
            />
            <div className="lab-list">
              {selected.map((project) => (
                <LabRow
                  key={project.slug}
                  project={project}
                  readLabel={common("readCase")}
                />
              ))}
            </div>
            <div className="section__foot">
              <Link className="text-link" href="/work">
                {t("allLabs")} <ArrowUpRight />
              </Link>
            </div>
          </section>

          <section
            className="section"
            id="experience"
            aria-labelledby="experience-title"
          >
            <SectionHeading
              code="02"
              title={t("experience")}
              note={t("rolesCount")}
              id="experience-title"
            />
            <p className="section__intro">{t("experienceIntro")}</p>
            <div className="timeline">
              {roles.map((role) => (
                <article key={role.company.en} className="timeline__item">
                  <p className="timeline__period">{pick(locale, role.period)}</p>
                  <div>
                    <h3 className="timeline__role">{pick(locale, role.role)}</h3>
                    <p className="timeline__company">
                      {pick(locale, role.company)} · {pick(locale, role.location)}
                    </p>
                    <p className="timeline__summary">
                      {pick(locale, role.summary)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="section"
            id="certifications"
            aria-labelledby="certs-title"
          >
            <SectionHeading
              code="03"
              title={t("certifications")}
              note={t("proofLine")}
              id="certs-title"
            />
            <p className="section__intro">{t("certificationsIntro")}</p>
            <div className="table-scroll">
              <table className="cert-table">
                <thead>
                  <tr>
                    <th scope="col">{t("certColumn")}</th>
                    <th scope="col">{t("issuerColumn")}</th>
                    <th scope="col">{t("statusColumn")}</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert) => (
                    <tr key={cert.id}>
                      <td>
                        <span className="cert-table__name">{cert.name}</span>
                        {cert.detail ? (
                          <span className="cert-table__detail">
                            {cert.detail}
                          </span>
                        ) : null}
                      </td>
                      <td>{cert.issuer}</td>
                      <td>
                        <StatusChip
                          status={cert.status}
                          label={statusLabels[cert.status]}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="training">
              <div>
                <h3 className="training__title">{t("trainingTitle")}</h3>
                <p className="training__body">{t("trainingBody")}</p>
                <ul className="training__programs">
                  {trainingPrograms.map((program) => (
                    <li key={program}>{program}</li>
                  ))}
                </ul>
              </div>
              <span className="training__count">50+</span>
            </div>
            <div className="lab-section">
              <h2>{t("bilingualTitle")}</h2>
              <p>{t("bilingualBody")}</p>
            </div>
          </section>

          <section className="section" id="about" aria-labelledby="about-title">
            <SectionHeading
              code="04"
              title={t("approach")}
              note={common("cvBacked")}
              id="about-title"
            />
            <p className="section__intro">{t("approachBody")}</p>
            <div className="principles">
              {principles.map((principle) => (
                <article key={principle.title.en} className="principle">
                  <h3 className="principle__title">
                    {pick(locale, principle.title)}
                  </h3>
                  <p className="principle__body">
                    {pick(locale, principle.body)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="section"
            id="contact"
            aria-labelledby="contact-title"
          >
            <SectionHeading
              code="05"
              title={t("contactTitle")}
              id="contact-title"
            />
            <p className="section__intro">{t("contactBody")}</p>
            <div className="hero__actions">
              <Link className="button" href="/contact">
                {common("contact")} <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/about">
                {common("learnMore")} <ArrowUpRight />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
