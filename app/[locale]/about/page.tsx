import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/content/types";
import { principles } from "@/content/profile";
import { site } from "@/content/site";
import { pick } from "@/lib/locale";
import { pageMetadata } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { PageHead } from "@/components/page-head";
import { ArrowUpRight } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return pageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("intro"),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");
  const common = await getTranslations("Common");
  const localeValue = locale as Locale;

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <PageHead code="03" title={t("title")} intro={t("intro")} />

          <section id="profile" className="section">
            <div className="identity-plate">
              <div>
                <p className="identity-plate__role">{t("identity")}</p>
                <h2 className="identity-plate__name">{site.name}</h2>
                <p className="identity-plate__role">{t("roleValue")}</p>
                <dl>
                  <div>
                    <dt>{t("location")}</dt>
                    <dd>{site.location}</dd>
                  </div>
                  <div>
                    <dt>{t("employer")}</dt>
                    <dd>{site.employer}</dd>
                  </div>
                  <div>
                    <dt>{t("languages")}</dt>
                    <dd>{t("languagesValue")}</dd>
                  </div>
                </dl>
              </div>
              <div className="identity-plate__monogram" aria-hidden="true">
                CZ
              </div>
            </div>
          </section>

          <section
            id="principles"
            className="section"
            aria-labelledby="principles-title"
          >
            <h2 id="principles-title" className="section__title">
              {t("principlesTitle")}
            </h2>
            <div className="principles">
              {principles.map((principle) => (
                <article key={principle.title.en} className="principle">
                  <h3 className="principle__title">
                    {pick(localeValue, principle.title)}
                  </h3>
                  <p className="principle__body">
                    {pick(localeValue, principle.body)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="bilingual" className="section">
            <div className="lab-section">
              <h2>{t("bilingualTitle")}</h2>
              <p>{t("bilingualBody")}</p>
            </div>
          </section>

          <section
            id="contact"
            className="section"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className="section__title">
              {t("contactTitle")}
            </h2>
            <p className="section__intro">{t("contactBody")}</p>
            <Link className="button" href="/contact">
              {common("contact")} <ArrowUpRight />
            </Link>
          </section>
        </div>

        <aside className="workbook__rail">
          <div className="side-note">
            <span className="side-note__label">{t("scopeTitle")}</span>
            <p className="side-note__body">{t("scopeBody")}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
