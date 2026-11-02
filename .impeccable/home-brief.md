# Home surface brief

## Scope and visitor mode

Bilingual personal portfolio for Cedophe ZOHOUN. Experience surface with a recruiter-first Persuade layer: the work leads, and the visitor can contact within one screen or go deep into case studies. Localized `/en` and `/fr` routes.

## Audience and job

Primary: recruiters and hiring managers screening network and security engineering roles, often on mobile and under time pressure. Secondary: peers assessing technical depth. The home page must establish role fit, verified credentials, and project breadth before the visitor decides to scroll or contact.

## Action and proof

Primary action: contact. Secondary action: view work. Proof is CV-backed only: four certifications, seven anonymized professional case studies, two roles, certified Cisco/AWS training, and bilingual delivery. No invented metrics, clients, logos, or testimonials.

## Selected direction

Quiet Systems. A calm, product-led interface modeled on Apple's public product language: white canvas, system sans, one blue accent, soft gray cards, generous space, and frosted navigation. It replaces the rejected Certification Lab Workbook direction; no paper, stamps, coded margins, or terminal panels remain.

## Direction contract

THESIS: The portfolio is a quiet, well-made product page, not a document; the interface recedes so the name, evidence, and one next action can lead. The category-default portfolio grid and the previous lab-workbook metaphor are both refused.

OWN-WORLD: White `#FFFFFF`, soft gray `#F5F5F7`, near-black `#1D1D1F`, muted gray `#6E6E73`, hairline `#D2D2D7`, and one blue `#0071E3`. System sans at every size. Rounded 12–24px surfaces, pill controls, a circular monogram, and a frosted sticky header. Status uses tinted pills with marker shape plus label. No texture, stamps, serif, mono, or content shadows.

STORY: A recruiter understands the network/security/cloud hybrid profile, sees verified certifications, and contacts without hunting. A peer opens a case study and finds clear context, approach, stack, and constraints. The visitor believes this engineer documents, deploys, and verifies real systems.

FIRST VIEWPORT: A frosted white header with the name, five links, and a language switch. The hero sets the name in two tight lines at left, then role, one-sentence positioning, a blue pill contact action, a blue text work link, and an availability line. Selected work begins directly below. The primary action is unmistakable without competing with the name.

FORM: Apple-like clean editorial (user-pinned canon; replacement world). seed: 4fb3228c699c731b.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## States and ranges

Seven case studies, two roles, four certifications, two languages, and two CVs. Contact form needs idle, submitting, success, and error states. Missing portrait must degrade gracefully. Empty or missing CV files must not render dead links.

## Interaction and layout

A single centered column capped at 1060px. The header becomes two rows and the nav scrolls horizontally below 760px. Work features and the identity plate stack at 900px; timelines and meta grids stack at 760px; skills drop to one column at 560px. Language switch preserves the current route. Work index filters by domain. Case studies use a readable measure. Skip link, visible focus, reduced motion, and keyboard-operable controls throughout.

## Constraints and open decisions

Next.js App Router, TypeScript, Tailwind, next-intl, Resend, Zod, Vercel. WCAG 2.2 AA. Open: LinkedIn URL, portrait, FR/EN CV PDFs, domain, Resend key and verified sender, and project diagrams or approval for labeled schematics.
