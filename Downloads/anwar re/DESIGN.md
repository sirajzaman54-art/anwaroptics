---
name: Anwar Optical
description: A Karachi optical counter's catalogue and WhatsApp ordering front door — real product, real evidence, since 1968.
colors:
  ember-50: "#FEF2E9"
  ember-100: "#FCE0CC"
  ember-300: "#F5A66E"
  ember-500: "#F0722C"
  ember-600: "#DB5F1B"
  ember-700: "#B44C15"
  ember-800: "#8C3B10"
  marigold-flag: "#F68F12"
  sale: "#C8452B"
  ink: "#14212B"
  ink-deep: "#0D1720"
  ink-raised: "#1D2E3B"
  ink-hover: "#27404F"
  paper: "#FFFFFF"
  cream: "#FAF7F3"
  cream-deep: "#F3EEE7"
  line: "#E8E1D8"
  line-dark: "rgba(255,255,255,0.12)"
  soft: "#6E6862"
  soft-2: "#756D65"
  good: "#2F8558"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.375rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.9vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  script:
    fontFamily: "Caveat, cursive"
    fontWeight: 600
    letterSpacing: "0"
  editorial-display:
    fontFamily: "'Instrument Serif', 'Times New Roman', Georgia, serif"
    fontWeight: 400
    fontSize: "clamp(3.125rem, 5.4vw, 4.75rem)"
    lineHeight: 0.93
    letterSpacing: "-0.01em"
  editorial-label:
    fontFamily: "'Instrument Sans', 'Inter', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.62
rounded:
  rule: "2px"
  xs: "4px"
  badge: "5px"
  control: "6px"
  pill-sm: "7px"
  button: "8px"
  field: "9px"
  sm: "10px"
  chip: "11px"
  tile: "12px"
  md: "14px"
  lg: "20px"
  pill: "99px"
spacing:
  gutter: "clamp(18px, 4vw, 56px)"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.ember-700}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ember-800}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  button-dark-hover:
    backgroundColor: "{colors.ink-raised}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  card-product:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "11px"
---

# Design System: Anwar Optical

## Overview

**Creative North Star: "The Counter Ledger"**

Anwar Optical's interface is a trusted shopkeeper's paper ledger, not a screen. The ground is warm cream stock (`#FAF7F3`), not clinical white; text is a settled ink navy, not pure black; and the orange accent behaves like a wax-seal stamp — used sparingly, on exactly the things that matter (a price, a primary action, an active state), never as decoration. Every number the visitor sees is one somebody at the counter actually wrote down: this is the same principle that governs the product's honesty rules (never fabricate a stat, a review, a measurement), expressed visually. The system is warm, plainspoken, and unhurried — confident without being salesy. It is explicitly **not** a flashy drop-shipping storefront (no countdown timers, no manufactured urgency, no stock-photo gloss) and **not** a sterile SaaS dashboard (no cold grays, no clinical precision-for-its-own-sake). It should read like a real person, who has run this counter since 1968, is behind every word and every price.

Two September 2026 additions extend the system without replacing it: a homepage "Shop Eyewear" tabbed browse and "Featured Frames" rail (still fully within the Ledger system), and a homepage TikTok section that introduces a second, editorial type pairing (Instrument Serif + Instrument Sans) for its large trust figures and pull-quote heading — a deliberate register shift for a section whose job is to feel like a magazine feature on real customer proof, not the shop's product pages. See **Typography → The Two Voices Rule** below.

**Key Characteristics:**
- Warm cream paper ground, never pure white or gray, as the dominant surface
- One primary accent (Ember orange) used sparingly; a second, brighter orange (Marigold Flag) reserved only for time-sensitive call-outs
- Flat at rest; every surface lifts with a soft shadow only on hover/touch, never floats by default
- Outfit + Inter as the everyday pairing; Instrument Serif + Instrument Sans as a deliberate editorial register shift, confined to one section
- Tactile, confident controls: solid-filled primary buttons, 44–46px minimum touch targets, firm 1px borders on cards
- Real photography and real video only — no illustration, no stock imagery, no invented data visualized as fact

## Colors

The palette is warm and paper-toned at rest, with orange used as a rare, deliberate stamp rather than a wash.

### Primary
- **Ember** (`#B44C15` / `#F0722C` / full scale `ember-50`…`ember-800`): the system's one primary accent. `ember-700` (#B44C15) is the AA-contrast workhorse — primary buttons, links, prices, focus rings (via `ember-600`). `ember-500` (#F0722C) and `ember-300` (#F5A66E) are lighter accent/eyebrow-marker tones on light backgrounds; `ember-50`/`ember-100` are pale tints for hover backgrounds and tag chips. `ember-800` is the pressed/hover-darkened state of the primary button.

### Secondary
- **Marigold Flag** (`#F68F12`): a separate, brighter orange reserved exclusively for time-sensitive or attention-grabbing accents — the site-wide announcement bar and one active-tab underline. It is not a tonal step of Ember; it is a distinct, rarer flag color precisely because it sits outside Ember's AA-contrast-tuned scale. **The Marigold Flag Rule.** If it appears more than twice on a single page, something else should have been Ember instead — Marigold marks urgency, and urgency that's everywhere isn't urgency.

### Tertiary
- **Sale** (`#C8452B`): reserved for markdown pricing and the "% off" flag badge. Never used for a primary action or a non-commerce accent.

### Neutral
- **Ink** (`#14212B`): primary text color and the base dark surface (the TikTok section's background, dark drawers, footers).
- **Ink Deep** (`#0D1720`): darkest neutral — deep-dark section backgrounds (the "held up to the light" TikTok band).
- **Ink Raised** (`#1D2E3B`) / **Ink Hover** (`#27404F`): hover/active states for dark-surfaced controls.
- **Paper** (`#FFFFFF`): card and header surfaces — the "clean page" laid on top of the cream ground.
- **Cream** (`#FAF7F3`): the default page background. Never pure white.
- **Cream Deep** (`#F3EEE7`): secondary section backgrounds and hover fills for light controls.
- **Line** (`#E8E1D8`): all borders and dividers on light surfaces — warm, not cool gray.
- **Line Dark** (`rgba(255,255,255,0.12)`): borders and dividers on dark surfaces (footer, TikTok section).
- **Soft** (`#6E6862`) / **Soft 2** (`#756D65`): secondary/muted text on light surfaces — captions, meta text, placeholder copy.

### Success (used sparingly; not a core role)
- **Good** (`#2F8558`, CSS variable `--good`): the one semantic status color in the system, for a genuine confirmation state (a saved lens-reminder date, a completed measurement). Not a general-purpose green accent — introduce it only for a real "this succeeded" moment, never as decoration.

### Named Rules
**The Wax-Seal Rule.** Ember is a stamp, not a wash. It appears on the thing the visitor should act on (a button, a price, a link) and almost nowhere else — never as a background fill for large surfaces, never as decorative color for its own sake.

## Typography

**Display Font:** Outfit (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Script/Accent Font:** Caveat (occasional handwritten accents, e.g. hero micro-copy)
**Editorial Pairing (one section only):** Instrument Serif (display) + Instrument Sans (body)

**Character:** Outfit/Inter is a confident, slightly rounded grotesque pairing — modern retail without going cold; tight letter-spacing on display sizes (`-0.02em` to `-0.032em`) keeps headlines feeling considered rather than loud. Instrument Serif/Sans is a second, more editorial register: a classic serif at very large sizes reads as a magazine pull-quote, deliberately distinct from the shop's everyday Outfit voice.

### Hierarchy
- **Display** (Outfit, 600, `clamp(38px, 5.6vw, 68px)`, line-height 1.08): hero headlines only.
- **Headline** (Outfit, 600, `clamp(24px, 2.9vw, 34px)`, line-height 1.08): the default section heading (`.sec-hd h2`). This is a *family*, not one literal value: nearby sections deliberately use adjacent fluid ranges scaled to their visual weight — a compact rail heading runs closer to `clamp(20px, 2.1vw, 26px)`, a hero-adjacent feature closer to `clamp(28px, 3.8vw, 44px)`, and homepage showcase moments range as high as `clamp(32px, 4.4vw, 54px)`. Matching the nearest existing neighbor is correct; inventing a value with no neighbor is not.
- **Title** (Outfit, 600, 14.5px, line-height 1.25): product/card names and other compact titled UI (dialog titles run slightly larger at 17–19px fixed, still this role).
- **Body** (Inter, 400, 16px, line-height 1.6): all paragraph copy. No enforced max line-length token exists in the codebase; new copy should target 65–75ch.
- **Caption** (Inter, 400, 13px, line-height 1.35, color `Soft`/`Soft 2`): secondary/meta text — search-result meta, product kind, strikethrough compare-at price, category shape labels. This role legitimately spans 11–13.5px depending on context (a table-dense meta row runs tighter than a standalone caption); treat that whole range as Caption, not as drift.
- **Label** (Outfit, 600, 11–12px, `letter-spacing: 0.16em`, uppercase): eyebrows/kickers above headings — always paired with a short 2px accent rule. A smaller relative (10.5px, uppercase, on the Sale-red badge) is the same role at its smallest permitted step.
- **Editorial Display** (Instrument Serif, 400, italic for accent words, `clamp(50px, 5.4vw, 76px)`, line-height 0.93): the TikTok section's pull-quote heading and its oversized trust figure only. Never used for a product name, price, or button.
- **Editorial Label** (Instrument Sans, 400, 16px, line-height 1.62): body copy inside the same TikTok section only.

### Named Rules
**The Family, Not a Number Rule.** Headline and Caption are fluid families with a documented range, not single literal pixel values. A new heading or meta label should match the nearest existing sibling's range rather than mint an arbitrary new clamp() — but landing inside the documented family is conformance, not drift.

**The Two Voices Rule.** Outfit/Inter is the shop's voice — used everywhere a visitor is browsing, ordering, or reading tool guidance. Instrument Serif/Sans is reserved entirely for the one homepage section built around real customer proof (the TikTok trust figures and its heading); it never leaks into product pages, the catalogue, or cart/checkout. Two voices, each confined to its own room.

## Layout

Single fluid container (`max-width: 1280px`, centered, `padding-inline: clamp(18px, 4vw, 56px)` — the system's one spacing primitive, named `--gut`) used on every page; no separate narrow-content variant exists. Section vertical rhythm scales fluidly with viewport (`clamp(34px, 4.6vw, 58px)` typical section padding) rather than fixed breakpoint steps. Breakpoints in active use: `1180px`, `1100px`/`1080px`/`1000px` (tablet-ish stacking, nav collapses to the mobile drawer at `1000px`), `900px`, `620px`, `560px` (mobile refinements). `prefers-reduced-motion: reduce` is respected globally — reveal-on-scroll and hover-lift transitions collapse to instant.

Product grids reflow by column count rather than by a fixed card width: 4 columns desktop → 3 at `1180px` → 2 at `900px`. Horizontal scroll-snap rails (TikTok clips, Featured Frames) are the mobile-first pattern for any row that doesn't fit a fixed grid, always with paired prev/next arrow controls hidden below `1000px` in favor of native touch scroll.

## Elevation & Depth

Flat-by-default: nearly every surface at rest carries no shadow at all, relying on the `Line` border and cream/paper contrast for separation instead. Depth is introduced only as a response to interaction — a card or button lifts with a soft, diffuse, always-dark/translucent shadow on hover, never a hard-edged or light-colored shadow. This is a direct visual expression of the Ledger metaphor: paper sits flat on the counter until you pick it up.

### Shadow Vocabulary
- **Rest** (`none`): the default state for cards, buttons, and containers.
- **Card Lift** (`box-shadow: 0 14px 30px -20px rgba(20,33,43,0.4)`, paired with `transform: translateY(-2px)`): product card hover.
- **Button Rest** (`box-shadow: 0 1px 2px rgba(20,33,43,0.14)`): the one shadow present at rest, a near-invisible grounding shadow under filled primary buttons only.
- **Panel Float** (`box-shadow: 0 16px 32px -14px rgba(20,33,43,0.24)` to `0 22px 44px -22px rgba(0,0,0,0.75)`, darker/heavier on dark surfaces): dropdowns, modals, and the TikTok player.

### Named Rules
**The Touch-to-Lift Rule.** Nothing floats until it's touched. If a shadow appears on a surface at rest, that surface should be redesigned to earn it through interaction instead.

**The Earned Pairing Rule.** A `1px` border and a wide, soft shadow appearing on the *same* element at the *same* time is not a generic AI-generated combo here — it's the deliberate hover contract confirmed for this system (border-color shift to `Ember 300` + `Card Lift`/`Panel Float`, together, only on interaction). Don't strip one half to avoid looking "templated"; the pairing is the point, and it only ever appears in response to touch, never at rest.

## Shapes

Corners are gentle, not sharp and not pill-heavy except where a control is genuinely circular/pill-shaped. Full scale in active use, smallest to largest: `2px` (`rounded.rule`: the short accent rule under an eyebrow/label, and other micro line-decorations), `4px` (`rounded.xs`: small image corners), `5px` (`rounded.badge`: the sale/discount flag), `6px` (`rounded.control`: focus-ring corner clipping, small inline controls), `7px` (`rounded.pill-sm`: nav-link and dropdown-item hover fill — the single most common radius in the header), `8px` (`rounded.button`: all buttons), `9px` (`rounded.field`: search inputs, icon buttons), `10px` (`rounded.sm` / `--r-sm`: card media, small panels), `11px`–`12px` (`rounded.chip` / `rounded.tile`: assorted small chips and tile corners), `14px` (`rounded.md` / `--r`: cards, the system's default container radius), `20px` (`rounded.lg` / `--r-lg`: large hero/media containers; an occasional `16px` appears as a one-off between `md` and `lg` on a handful of media containers and is an acceptable intermediate, not a new token), `99px` (`rounded.pill`: chips, avatar-style icon buttons, nav dots, tag badges). Borders are always `1px`–`1.5px` and always `Line` or `Line Dark`, never a heavier weight. No clipping/masking beyond `border-radius` and `overflow: hidden` is used anywhere in the system.

## Components

Tactile and confident: solid-filled primary actions, generous touch targets (44–46px minimum height on every interactive control), firm borders on containers rather than relying on shadow alone to define edges.

### Buttons
- **Shape:** `8px` radius, `13px 24px` padding, `46px` minimum height.
- **Primary:** `Ember 700` background, white text, `Button Rest` shadow; hover darkens to `Ember 800`.
- **Dark:** `Ink` background, white text; hover lightens to `Ink Raised`. Used where a button sits on a light card inside a dark section, or as a secondary-emphasis action.
- **Outline/Ghost:** `Paper` background, `Line` border, `Ink`-colored text; hover inverts to a solid `Ink` fill with white text — a firmer, more confident hover than a typical subtle-tint ghost button.
- **Active/press:** every button scales to `0.98` on `:active` — a small, tactile press-down.

### Chips / Tags
- **Sale flag:** `Sale` red background, white text, `10.5px` bold uppercase-adjacent label, `5px` radius, absolutely positioned over card media.
- **Eyebrow/kicker:** no background — a `26px × 2px` `Ember 500` rule preceding `12px` bold uppercase `Ember 300` text, `0.16em` letter-spacing.

### Cards / Containers (Product Card)
- **Corner Style:** `14px` (`--r`).
- **Background:** `Paper` on `Cream`/`Cream Deep` section backgrounds — the card is always a lighter "sheet" laid on the section ground.
- **Shadow Strategy:** flat at rest; `Card Lift` on hover, paired with a `1px` border-color shift to `Ember 300` and a `1.05×` scale on the product image only.
- **Border:** `1px solid Line` at rest, always present (never borderless).
- **Internal Padding:** `11px`.

### Inputs / Fields
- **Style:** `Cream` background, `1.5px solid Line` border, `9px` radius, `42px` height (search fields).
- **Focus:** the shared `Focus Ring` (see below), not a border-color-only change — every focusable control gets the same treatment.

### Navigation
- **Header:** sticky, `74px` tall, translucent `Paper` (`rgba(255,255,255,0.94)`) with a `16px` backdrop blur and a `1px Line` bottom border — the header floats visually above the page without a hard shadow.
- **Primary links:** Outfit `14.5px`/500, `Ink`-colored, `7px`-radius hover fill in `Ember 50` with `Ember 600` text.
- **Mobile:** an off-canvas drawer (`min(330px, 86%)` wide, white, slides in from the left over a translucent dark scrim) replaces the horizontal nav below `1000px`.
- **Focus Ring:** every focusable element — links, buttons, inputs — gets `outline: 2px solid Ember 600`, `3px` offset, `6px` corner radius on the outline itself. This is the one focus treatment in the system; nothing uses a glow, a border-color swap, or an inset ring instead.

### TikTok Trust Section (signature component)
The homepage's one deliberate register shift: a full-bleed `Ink Deep` band containing an Instrument Serif pull-quote heading, an oversized (`clamp(84px, 8vw, 112px)`) Instrument Serif trust figure with an italic Instrument Sans qualifier beneath it, and a self-hosted muted-autoplay video player with a stories-style progress-bar reel plus a full-clip inline expand. This is the only place in the system where: real-time count-up animation appears on a number, the editorial type pair is used, and video (not a static photo) is the primary visual. It exists specifically because this section's job is proof, not browsing — treat any future "real evidence" section (reviews, press, case studies) as a candidate for this same register, not the everyday Outfit/Inter voice.

## Do's and Don'ts

### Do:
- **Do** keep Ember (`#B44C15`/`#F0722C`) as the only accent used for actionable elements (buttons, links, prices); reserve Marigold Flag (`#F68F12`) strictly for time-sensitive or attention-only call-outs, and cap it at roughly one or two appearances per page.
- **Do** keep every surface flat at rest and let shadow only ever appear as a hover/interaction response (`Touch-to-Lift Rule`).
- **Do** give every button and tappable control a minimum 44px height/width, matching the existing 46px button standard.
- **Do** apply the shared `Focus Ring` (`2px solid Ember 600`, `3px` offset) to any new interactive element — never invent a second focus treatment.
- **Do** keep Instrument Serif/Sans confined to sections whose job is presenting real customer/social proof; everywhere else stays Outfit/Inter.
- **Do** respect `prefers-reduced-motion` for any new hover-lift, reveal-on-scroll, or autoplay behavior, matching the existing global pattern.

### Don't:
- **Don't** use Ember as a large background fill or decorative wash — it is a stamp on one element, not a color scheme.
- **Don't** introduce a drop shadow on any surface at rest (cards, buttons, panels) — depth is earned through interaction only in this system.
- **Don't** invent a third orange. If Ember's existing scale (`50`–`800`) and Marigold Flag don't cover a new need, that's a signal to reconsider the design, not to add a color.
- **Don't** put a fabricated number, review, testimonial, or statistic anywhere in the UI — this is a product-level rule (see `PRODUCT.md`) with direct visual consequences: an honestly-omitted figure is always the correct default over an invented placeholder.
- **Don't** use pure white or cool gray as a page background — `Cream` is the ground; `Paper` is reserved for cards and the header sitting on top of it.
