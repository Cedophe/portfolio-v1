import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/content/types";
import {
  certifications,
  languages,
  roles,
  skillGroups,
  trainingPrograms,
} from "@/content/profile";
import { site } from "@/content/site";
import { cvAvailable } from "@/lib/cv";
import { pick } from "@/lib/locale";
import { pageMetadata } from "@/lib/metadata";
import { PageHead } from "@/components/page-head";
import { StatusChip } from "@/components/status-chip";
import { Download } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Experience" });

  return pageMetadata({
    locale,
    path: "/experience",
    title: t("title"),
    description: t("intro"),
  });
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Experience");
  const common = await getTranslations("Common");
  const status = await getTranslations("Status");
  const skills = await getTranslations("Skills");
  const localeValue = locale as Locale;
  const hasCv = cvAvailable(localeValue);

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <PageHead code="02" title={t("title")} intro={t("intro")} />

          <section id="roles" className="section" aria-labelledby="roles-title">
            <h2 id="roles-title" className="section__title">
              {t("roles")}
            </h2>
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
                    <ul className="timeline__points">
                      {role.points.map((point) => (
                        <li key={point.en}>{pick(locale, point)}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="certifications"
            className="section"
            aria-labelledby="certs-title"
          >
            <h2 id="certs-title" className="section__title">
              {t("certifications")}
            </h2>
            <div className="table-scroll">
              <table className="cert-table">
                <thead>
                  <tr>
                    <th scope="col">{t("certifications")}</th>
                    <th scope="col">{t("detail")}</th>
                    <th scope="col">{t("statusColumn")}</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert) => (
                    <tr key={cert.id}>
                      <td>
                        <span className="cert-table__name">{cert.name}</span>
                        <span className="cert-table__detail">
                          {cert.issuer}
                        </span>
                      </td>
                      <td>{cert.detail ?? "N/A"}</td>
                      <td>
                        <StatusChip
                          status={cert.status}
                          label={status(cert.status)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section
            id="training"
            className="section"
            aria-labelledby="training-title"
          >
            <h2 id="training-title" className="section__title">
              {t("training")}
            </h2>
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
          </section>

          <section
            id="languages"
            className="section"
            aria-labelledby="languages-title"
          >
            <h2 id="languages-title" className="section__title">
              {t("languages")}
            </h2>
            <dl className="lab-meta-grid">
              {languages.map((language) => (
                <div key={language.name.en}>
                  <dt>{pick(locale, language.name)}</dt>
                  <dd>{t(language.level)}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="skills"
            className="section"
            aria-labelledby="skills-title"
          >
            <h2 id="skills-title" className="section__title">
              {t("skills")}
            </h2>
            <div className="skills">
              {skillGroups.map((group) => (
                <div key={group.key} className="skill-group">
                  <h3 className="skill-group__title">{skills(group.key)}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.en}>{pick(locale, item)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="workbook__rail">
          <div className="side-note">
            <span className="side-note__label">{t("railTitle")}</span>
            <p className="side-note__body">{t("railBody")}</p>
          </div>
          <div className="side-note">
            <span className="side-note__label">{common("downloadCv")}</span>
            {hasCv ? (
              <a
                className="text-link"
                href={site.cv[localeValue]}
                download
              >
                <Download /> {common("downloadCv")}
              </a>
            ) : (
              <p className="side-note__body">{common("notPublished")}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
