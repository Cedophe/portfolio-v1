import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const suffix = path === "/" ? "" : path;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: {
        en: `/en${suffix}`,
        fr: `/fr${suffix}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${suffix}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: site.name,
      type: "website",
    },
  };
}
