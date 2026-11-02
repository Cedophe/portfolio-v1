# AGENTS.md

## Project

Bilingual (EN/FR) personal portfolio for a network/security engineer. Next.js 16 App Router, React 19, next-intl, Tailwind v4, Resend contact form. Static content, no database, no test suite.

## Commands

- `npm run dev`: dev server
- `npm run lint`: `eslint .`
- `npm run typecheck`: `tsc --noEmit`
- `npm run build`: production build
- Verify changes with `npm run lint` then `npm run typecheck`. There are no tests.

## Architecture

- All pages live under `app/[locale]/`. Locales are `en`/`fr`, default `en`, URL prefix always (`i18n/routing.ts`). A new route needs a folder there plus nav (`components/site-header.tsx`) and entries in `app/sitemap.ts` if it should be discoverable.
- `params` is a Promise everywhere. Await it, then call `setRequestLocale(locale)` before `getTranslations`/`getMessages` or static rendering breaks. Detail pages also set `dynamicParams = false` plus `generateStaticParams`.
- `proxy.ts` is the Next 16 middleware entrypoint (next-intl). Do not add a `middleware.ts`. Its matcher excludes `/api`.
- UI strings: `messages/en.json` and `messages/fr.json`, same namespaces and key parity (currently 202 keys each). Content data: `content/*.ts`, typed by `content/types.ts` with `Localized = { en, fr }`; resolve with `pick(locale, value)` from `lib/locale.ts`.
- `components/` is server-first; only `contact-form`, `domain-filter`, and `site-header` are `"use client"`. Import `Link`/`usePathname`/`useRouter` from `@/i18n/navigation`, not `next/link`, so locale prefixes are preserved.
- Contact endpoint: `app/api/contact/route.ts` (Zod validation, Resend). The hidden `website` field is a honeypot that silently returns `{ ok: true }`; missing Resend env vars return 503 `not_configured`.

## Conventions and gotchas

- Styling is custom CSS in `app/globals.css` (1559 lines) using semantic classes (`.workbook`, `.lab-row`, `.identity-plate`, `.skill-group`). Some class names are legacy; the visual system is Apple-like Quiet Systems. Tailwind v4 is imported and its tokens are declared in `@theme`, but components do not use utility classes. Add styles to `globals.css`, not inline utilities.
- `public/` does not exist yet. CV links are hidden by `lib/cv.ts` `cvAvailable()`, which checks `public/cv/*.pdf` on disk; create the PDFs before adding links. `content/site.ts` expects `/cv/cedophe-zohoun-cv-{en,fr}.pdf`.
- Env vars (see `.env.example`): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_LINKEDIN_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Use `.env.local`.
- Read `PRODUCT.md` before editing copy. Hard rules: no invented metrics, clients, logos, or testimonials; anonymize client organizations; never expose phone or address; keep EN/FR content parity.
- UI direction is "Quiet Systems" (Apple-like clean editorial: white/gray surfaces, system sans, one blue accent, rounded cards, frosted header), documented in `DESIGN.md` and `.impeccable/` (`home-brief.md`, `surfaces/`, `design.json`). Respect it for visual changes; `PRODUCT.md` is the source of truth for product/content.
- Accessibility target is WCAG 2.2 AA. Status must be conveyed by pattern and label, not color alone.
