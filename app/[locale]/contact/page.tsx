import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { site } from "@/content/site";
import { cvAvailable } from "@/lib/cv";
import { pageMetadata } from "@/lib/metadata";
import { PageHead } from "@/components/page-head";
import { ContactForm } from "@/components/contact-form";
import { Download, Mail } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return pageMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("intro"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");
  const common = await getTranslations("Common");

  const availableCvs = (["en", "fr"] as const).filter((code) =>
    cvAvailable(code),
  );

  return (
    <div className="shell">
      <div className="workbook">
        <div className="workbook__main">
          <PageHead code="04" title={t("title")} intro={t("intro")} />

          <section id="form" className="section" aria-labelledby="form-title">
            <h2 id="form-title" className="section__title">
              {t("formTitle")}
            </h2>
            <ContactForm />
          </section>
        </div>

        <aside className="workbook__rail">
          <div id="direct" className="side-note">
            <span className="side-note__label">{t("directTitle")}</span>
            {site.email || site.linkedin ? (
              <ul className="side-note__list">
                {site.email ? (
                  <li>
                    <a href={`mailto:${site.email}`}>
                      <Mail /> {site.email}
                    </a>
                  </li>
                ) : null}
                {site.linkedin ? (
                  <li>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {common("linkedin")}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="side-note__body">{t("directBody")}</p>
            )}
          </div>

          <div id="response" className="side-note">
            <span className="side-note__label">{t("responseTitle")}</span>
            <p className="side-note__body">{t("responseBody")}</p>
          </div>

          <div className="side-note">
            <span className="side-note__label">{t("cvTitle")}</span>
            {availableCvs.length > 0 ? (
              <ul className="side-note__list">
                {availableCvs.map((code) => (
                  <li key={code}>
                    <a href={site.cv[code]} download>
                      <Download />
                      {code === "en" ? common("englishCv") : common("frenchCv")}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="side-note__body">{t("cvBody")}</p>
            )}
          </div>

          <div className="side-note">
            <p className="side-note__body">{t("railNote")}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
