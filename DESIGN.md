---
name: Cedophe ZOHOUN / Quiet Systems
description: Bilingual network and security engineer portfolio built on a calm, product-led interface with system typography, soft gray surfaces, and one blue accent.
colors:
  canvas: "#ffffff"
  surface: "#f5f5f7"
  surface-strong: "#e8e8ed"
  text: "#1d1d1f"
  text-muted: "#6e6e73"
  line: "#d2d2d7"
  accent: "#0071e3"
  accent-hover: "#0077ed"
  success: "#1d7a4c"
  success-bg: "#e8f5ec"
  success-ink: "#1d6b3f"
  accent-bg: "#e8f2fd"
  accent-ink: "#0058b0"
  warning: "#7a5a00"
  danger: "#c9362b"
  danger-bg: "#fff2f0"
  danger-line: "#ffd4ce"
  danger-ink: "#8a1f16"
  muted-bg: "#f0f0f2"
  placeholder: "#86868b"
  scrollbar: "#b8b8bd"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 9.5vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.05em"
  page-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.045em"
  section-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  feature-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.65rem, 3.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.47
  body-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0"
  focus: "4px"
  field: "0.75rem"
  card: "1rem"
  panel: "1.5rem"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  content: "1060px"
  measure: "68ch"
  section: "clamp(2.75rem, 6vw, 4.5rem)"
  card-pad: "1.5rem"
  stack: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "2.75rem"
    typography: "{typography.body-small}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "2.75rem"
    typography: "{typography.body-small}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1rem"
    width: "100%"
    typography: "{typography.body}"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.none}"
    typography: "{typography.caption}"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    typography: "{typography.caption}"
  filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
    typography: "{typography.caption}"
  filter-selected:
    backgroundColor: "{colors.text}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
    typography: "{typography.caption}"
  status-complete:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-ink}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.6rem"
    typography: "{typography.label}"
  status-operational:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.6rem"
    typography: "{typography.label}"
  status-pending:
    backgroundColor: "{colors.muted-bg}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.6rem"
    typography: "{typography.label}"
  lab-row:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
    typography: "{typography.title}"
  lab-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 4vw, 2.75rem)"
    typography: "{typography.feature-title}"
  side-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.25rem"
    typography: "{typography.caption}"
  training:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 3vw, 2rem)"
    typography: "{typography.body-small}"
---

# Design System: Cedophe ZOHOUN / Quiet Systems

## Overview

**Creative North Star: "Quiet Systems"**

The portfolio behaves like a well-made product page, not a document: a white canvas, one confident type scale, soft gray surfaces, and a single blue action color. The interface recedes so the name, the work, and the credentials can lead. Density is low, spacing is generous, and every screen has one obvious next step.

The system was rebuilt after the first "Certification Lab Workbook" direction was rejected as too heavy. Paper textures, ruled backgrounds, stamps, tab dividers, objective margins, terminal panels, and the red/green annotation palette are gone. What remains is the evidence: seven case studies, four certifications, two roles, and bilingual delivery.

Apple's public product language is the pinned reference: system sans, near-black text on white, a blue accent, rounded cards, frosted navigation, and motion that stays quiet. The interface should feel familiar, fast, and expensive through restraint rather than ornament.

**Key Characteristics:**
- White canvas with `#f5f5f7` secondary surfaces and `#e8e8ed` hover states.
- One blue accent for actions and links; every other color is neutral or a status tint.
- System sans typography at every size, with tight tracking on display text.
- A single reading column capped at 1060px, with secondary cards flowing below it.
- Soft geometry: 12–24px radii on surfaces, pill controls, a circular monogram.
- No texture, no stamps, no shadows on content, no decorative codes or margins.

## Colors

A restrained product palette: white and two grays, near-black text, one blue, and a small set of status tints.

### Primary
- **Accent** (`accent`): every primary action, link, schematic stroke, and active control.
- **Accent Hover** (`accent-hover`): hover state for filled actions only.
- **Accent Background** (`accent-bg`): operational and in-progress status fills.
- **Accent Ink** (`accent-ink`): text on `accent-bg`.

### Neutrals
- **Canvas** (`canvas`): page and card-lift surface; also text on dark buttons.
- **Surface** (`surface`): secondary cards, filters, inputs, table headers, footer.
- **Surface Strong** (`surface-strong`): hover state for cards and filters.
- **Text** (`text`): headings, body, and selected filter fills.
- **Text Muted** (`text-muted`): secondary copy, metadata, and inactive navigation.
- **Line** (`line`): all borders, dividers, and table rules.
- **Muted Background** (`muted-bg`): pending status fills.
- **Placeholder** (`placeholder`): input placeholder text.
- **Scrollbar** (`scrollbar`): scrollbar thumb.

### Status
- **Success** (`success`): availability dot and success icon.
- **Success Background** (`success-bg`): completed and shipped status fills.
- **Success Ink** (`success-ink`): text on `success-bg`.
- **Warning** (`warning`): reserved for extended-status copy; not used as a surface.
- **Danger** (`danger`): error iconography and destructive emphasis.
- **Danger Background** (`danger-bg`): form error surface.
- **Danger Line** (`danger-line`): form error border.
- **Danger Ink** (`danger-ink`): form error text.

**The One Accent Rule.** Blue is the only interactive accent. Do not introduce a second brand hue; status tints are semantic, not decorative.

**The Status-Is-Semantic Rule.** Green, blue, amber, and gray only appear inside status chips, availability dots, or form feedback. They never decorate headings, cards, or navigation.

## Typography

**Font:** the system sans stack (`-apple-system`, `BlinkMacSystemFont`, `SF Pro Text`/`SF Pro Display`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`). On Apple devices this is SF; elsewhere it falls back to the platform's native UI face.

**Character:** neutral, familiar, and highly legible. The hierarchy comes from size, weight, and spacing, never from a second typeface. There is no serif and no monospace voice in the interface.

### Hierarchy
- **Display** (`display`): the owner's name on the home page, set in two tight lines.
- **Page title** (`page-title`): one per inner page, set at the top of the reading column.
- **Section title** (`section-title`): major home and inner-page section headings.
- **Feature title** (`feature-title`): the selected work feature.
- **Title** (`title`): work-row titles, identity name, and card headings.
- **Body** (`body`): primary prose and form values.
- **Body small** (`body-small`): summaries, buttons, and dense supporting copy.
- **Caption** (`caption`): navigation, metadata, field hints, and footer copy.
- **Label** (`label`): status chips and the smallest metadata.

**The One Voice Rule.** One family, many weights. Do not add a display face, serif, or monospace family for "technical" flavor.

**The Measure Rule.** Prose columns stop at 68ch; intros and summaries sit between 36em and 60ch. Wider text is a defect.

## Layout

The page is a single centered column capped at 1060px with a fluid gutter. The home page runs hero, selected work, experience, certifications, training, approach, and contact in one vertical sequence. Inner pages use the same column; their secondary notes become a responsive card grid below the main content instead of a sidebar.

Sections are separated by 1px `line` rules with `clamp(2.75rem, 6vw, 4.5rem)` of vertical padding. Cards use 16–24px radii and 12–24px internal padding. The layout collapses cleanly: work features and the identity plate stack at 900px, the timeline and meta grids stack at 760px, skills drop to one column at 560px, and the header becomes a two-row sticky bar on mobile.

**The Single Column Rule.** One reading column. Do not reintroduce an objective margin, sidebar, or fixed rail on desktop; secondary material flows below the main content as cards.

**The Generous Separation Rule.** More space above a heading than below it, and at least one full section gap between unrelated ideas. Crowding is the failure mode.

## Elevation & Depth

The system is flat. Content cards have no shadow; depth comes from surface tone and 1px lines. The only shadow is a 1px ambient shadow on the language-switch thumb, plus the focus ring. The sticky header uses a translucent white surface with `backdrop-filter: saturate(180%) blur(20px)` and a hairline bottom border, which separates it from content without adding a card shadow.

**The Flat Card Rule.** No box-shadow, glow, or gradient lift on content. If a card needs emphasis, change its surface tone or add a border.

**The Frosted Header Rule.** Blur belongs to the sticky header and the language-switch thumb only; it is not decoration for cards or sections.

## Shapes

Soft geometry throughout. Cards use 16px or 24px radii; fields use 12px; buttons, filters, status chips, stack tags, and training tags are pills; the identity monogram is a circle. Tables use a 16px outer radius with square internal cells. The only sharp surface is the full-width section rule.

**The Soft Geometry Rule.** Surfaces are rounded, controls are pills, and the monogram is a circle. Do not mix in square cards or hard-edged buttons.

## Components

### Buttons
Pill-shaped and compact. The primary button is `accent` on white with 0.9375rem/500 text and a 44px minimum height; hover shifts to `accent-hover`, active scales to 0.98. The ghost button is transparent with a 1px `line` border and accent text. Focus uses the global 2px accent outline with a 3px offset.

### Navigation
A sticky, frosted header with the name at left and five text links plus a segmented language switch at right. Active links are near-black and medium weight; inactive links are muted. On screens below 760px the header becomes two rows and the nav scrolls horizontally without a scrollbar. The language switch is a pill-shaped segmented control with a raised white thumb.

### Status chips
Pill chips with a text label and a small geometric marker: a filled circle for complete/shipped, a solid square for operational, a half-filled circle for ongoing/in-progress, and a hollow ring for pending. The tinted background and marker always accompany the label, so status survives grayscale.

### Work rows and feature
Rows use a three-column grid: a small index, the content, and an arrow. Titles are 1.25rem/600; summaries are muted; the domain and status sit in a wrap row. Rows are separated by 1px rules. The home feature is a soft gray panel with a two-column split: text at left, an illustrative schematic on a white inset panel at right. Hover shifts the panel to `surface-strong`; the arrow moves up-right.

### Certification table
A rounded table with a soft gray header row, muted column labels, 1px row rules, and status chips in the final column. The table scrolls horizontally on narrow screens rather than compressing.

### Training card
A soft gray card with the training description and program tags at left and a large accent `50+` at right. It stacks vertically below 760px.

### Forms
Fields are 12px-rounded, soft gray, and 1rem text. Focus changes the border to accent and adds a 4px translucent accent ring. Errors use a warm red surface with `danger-ink` text; success uses a soft gray card with a green check. The submit button is the primary pill.

### Secondary cards
Inner-page rails become a responsive grid of soft gray cards below the main content. Each card has a 0.8125rem/600 heading, muted 0.875rem body, and optional link list. Cards never sit in a fixed sidebar.

### Schematic
An illustrative SVG on a soft gray panel. Strokes and nodes use the accent; labels are system sans at 11px; node boxes are white with 8px radii. The caption states that it is illustrative, not a site diagram.

## Do's and Don'ts

### Do:
- **Do** keep the canvas white and use `surface` for secondary regions.
- **Do** use one blue accent for actions, links, and schematic strokes.
- **Do** set every text role in the system sans stack; vary weight and size, not family.
- **Do** use 16–24px radii on cards, 12px on fields, and pills for controls.
- **Do** keep prose within 68ch and section spacing generous.
- **Do** encode status with a marker shape plus a label.
- **Do** let secondary material flow below the main column as cards.
- **Do** honor `prefers-reduced-motion`; the hero rise is the only entrance motion.

### Don't:
- **Don't** reintroduce paper textures, ruled backgrounds, stamps, tab dividers, or terminal panels.
- **Don't** add an objective margin, fixed sidebar, or coded section labels.
- **Don't** add a second accent hue or use status colors as decoration.
- **Don't** add content shadows, glows, or gradients.
- **Don't** set body copy in a serif or monospace face.
- **Don't** use square cards or hard-edged buttons.
- **Don't** build a symmetrical card grid where a single column would read better.
- **Don't** add Tailwind utility classes to components; extend the semantic classes in `app/globals.css`.
