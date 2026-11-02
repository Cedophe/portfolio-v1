import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("Nav");

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{site.name}</p>
            <p className="footer-role">{t("role")}</p>
            <p className="footer-note">{t("note")}</p>
          </div>
          <dl className="footer-list">
            <div>
              <dt>{t("locationLabel")}</dt>
              <dd>{t("location")}</dd>
            </div>
            <div>
              <dt>{t("employerLabel")}</dt>
              <dd>{t("employer")}</dd>
            </div>
          </dl>
          <nav className="footer-links" aria-label={nav("footerLabel")}>
            <Link href="/">{nav("home")}</Link>
            <Link href="/work">{nav("work")}</Link>
            <Link href="/contact">{nav("contact")}</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>{t("rights")}</span>
          <span>{t("built")}</span>
        </div>
      </div>
    </footer>
  );
}
