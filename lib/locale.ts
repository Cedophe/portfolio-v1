import type { Locale, Localized } from "@/content/types";

export function pick(locale: string, value: Localized): string {
  return value[locale as Locale] ?? value.en;
}
