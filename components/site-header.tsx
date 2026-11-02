"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";

const navItems = [
  { key: "home", href: "/" },
  { key: "work", href: "/work" },
  { key: "experience", href: "/experience" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const otherLabel = otherLocale === "en" ? t("english") : t("french");

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label={t("label")}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="nav-link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {t(item.key)}
            </Link>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <span className="lang-switch" aria-label={t("language")}>
            {locale === "en" ? (
              <span className="lang-switch__current">EN</span>
            ) : (
              <Link href={pathname} locale="en" className="lang-switch__link">
                EN
              </Link>
            )}
            {locale === "fr" ? (
              <span className="lang-switch__current">FR</span>
            ) : (
              <Link
                href={pathname}
                locale="fr"
                className="lang-switch__link"
                aria-label={t("switchTo", { language: otherLabel })}
              >
                FR
              </Link>
            )}
          </span>
        </nav>
      </div>
    </header>
  );
}
