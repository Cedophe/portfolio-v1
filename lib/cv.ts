import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

export function cvAvailable(locale: "en" | "fr"): boolean {
  const relative = site.cv[locale].replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}
