# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are retail customers of Anwar Optical — an optical counter in Shah Faisal Colony, Karachi, operating since 1968 — browsing prescription eyeglasses, sunglasses, and contact lenses. They arrive from the shop's TikTok account (`@anwar.optical`, real order/fitting clips), from search, or as return customers checking the catalogue before a counter visit or a WhatsApp order. A secondary audience is customers who order remotely and have the item shipped, since fulfillment is not limited to walk-in/local pickup (see Operating Context). Tool pages (frame finder, PD measurement, prescription decoder, lens comparison, lens reminder) serve customers doing pre-purchase research or ongoing lens-care tasks, not only active buyers.

## Product Purpose

A product catalogue and ordering front door for a real, decades-old optical counter — not a generic online eyewear store. It lets customers browse the actual current inventory (migrated from the shop's live WooCommerce store), use honest self-service tools (PD measurement, frame-fit comparison, prescription decoding, lens-care reminders), and place an order that is confirmed personally over WhatsApp rather than through an anonymous checkout. Success is a customer arriving at a WhatsApp conversation (or the physical counter) with enough real information — correct product, real photos, an honestly-stated data gap where one exists — that the order or fitting goes smoothly.

## Positioning

In-person, expert-fitted eyewear from a counter that has operated since 1968, with every order guided personally over WhatsApp instead of an anonymous cart-and-checkout flow. Confirmed accurate by the product owner. The differentiator a generic online eyewear retailer or marketplace listing could not truthfully copy: decades of real counter experience, a named real business with a physical location, and genuine TikTok documentation of real fittings and orders — not stock photography or manufactured social proof.

## Operating Context

- The catalogue (`products.js` / `final-catalogue.json`, 61 products) was migrated directly from the shop's live WooCommerce store (`https://anwaroptical.pk`) via its public Store API, crawled 2026-09-05. That live WooCommerce/Elementor store (theme `bw-zenny`) currently remains the shop's operating commercial site in parallel with this project.
- Ordering flow: browse → cart (localStorage) → order review → WhatsApp handoff with a pre-filled message. No online payment or server-side order storage exists in this build.
- Fulfillment: **ships worldwide** (confirmed by the product owner) — not counter-pickup/local-delivery only, contrary to what `OWNER_VERIFICATION_REQUIRED.md` had flagged as unconfirmed. Delivery cost/timeline, returns policy, payment methods (COD/bank transfer/etc.), and business hours are still not confirmed by the owner and are not published on the site (see `OWNER_VERIFICATION_REQUIRED.md`, "Store policies").
- Real evidence channel: the shop's TikTok account (`@anwar.optical`) posts real order/fitting videos; 4 of these are self-hosted on the homepage's "From the shop" section (silent H.264 loops + full clip, deep-linking to the original post for sound, since the originals carry TikTok-library music not licensed for re-hosting).
- 8 self-service tool pages exist beyond the core shop pages: Frame Face Match, Will It Fit, Prescription Decoder, Which Lens, Measure Your PD, Lens Comparison, UV Protection Guide, Lens Reminder. Full route inventory in `SITE_ROUTE_INVENTORY.md`.
- Hosting: static site on Vercel; `vercel.json` handles all clean-URL routing (no server, no build step, no framework).

## Capabilities and Constraints

- **Never fabricate.** This is a load-bearing project rule, evidenced across three separate audit documents (`OWNER_VERIFICATION_REQUIRED.md`, `PRODUCT_MIGRATION_REPORT.md`, `PRODUCT_COMPLETENESS_REPORT.json`): no invented reviews, testimonials, stats, measurements, stock levels, or claims. Where real data doesn't exist (e.g. frame measurements, TikTok watch-time), the site shows an honest gap or omits the figure rather than guessing. TikTok account figures (followers/views/likes/videos) are hand-entered from the real account and dated (`TIKTOK_STATS` in `anwar-optical-v2.html`), never estimated.
- **Product data completeness (as of the last audit):** 0 of 61 products are fully commerce-ready (Grade A); all 61 are Grade B (usable — clean title, price, category, gender where applicable, ≥1 photo, but missing structured fields). 0 are unsellable (Grade C). Missing per-product: frame measurements (54 of 61 products), shape (54), material (54), structured colour (59), stock/availability (all). Full detail in `PRODUCT_COMPLETENESS_REPORT.json`.
- **9 products have a stripped source brand name** (Ray-Ban, Hugo Boss, DITA, Cartier, Mont Blanc) pending owner confirmation of authorization — currently unbranded and unsearchable by that brand name to avoid a trademark/counterfeit claim. See `OWNER_VERIFICATION_REQUIRED.md` §"Product / brand verification".
- One product (`product-196`) has no real name; shown with the honest placeholder "Product 196" pending owner input.
- Design-token divergence (flagged, not yet fixed): `cart.html`, `order.html`, and `privacy.html` still use an older font (`Space Grotesk`) and color tokens instead of the current system (`Outfit`/`Inter`/`Caveat` base, plus `Instrument Serif`/`Instrument Sans` introduced in the homepage TikTok section). Bringing these three pages onto shared tokens is an open task — not attempted yet because cart/checkout is commerce-critical and needs full breakpoint QA, not a blind token swap.
- Known security posture: no backend/auth/database, so no server-side attack surface. One low-severity hardening gap tracked (`security_best_practices_report.md`): cart line items render via `innerHTML` from `localStorage` without escaping — not exploitable today (all sources are trusted `products.js` data) but flagged as defense-in-depth. No CSP header deployed yet.
- Undecided, not to be invented: delivery cost/timeline, returns policy, accepted payment methods, business hours.

## Brand Commitments

- Name: **Anwar Optical**. Established 1968, Shah Faisal Colony, Karachi.
- TikTok: `@anwar.optical` — real account, real content, linked and embedded (self-hosted clips) on the homepage.
- Visual system: warm cream/paper ground with an ink-navy text color and a burnt-orange accent (`--o-500`–`--o-800` tokens); `Outfit` (display/UI), `Inter` (body) as the base pairing, `Caveat` for occasional script accents, and `Instrument Serif` + `Instrument Sans` as an editorial pairing introduced specifically for the homepage TikTok section.
- WhatsApp-first ordering is a binding product decision, not just current implementation — orders are confirmed by a real person over WhatsApp, not an automated checkout.

## Evidence on Hand

- 61 real products with real prices and ≥1 real photo each, migrated from the live store (`final-catalogue.json`, `products.js`).
- 4 real TikTok videos from the shop's own account, self-hosted at `social/tt/clips/` (matte-black Ray-Ban Wayfarer/polarised, photochromic brown/blue coating, Ray-Ban Wayfarer/progressive tinted, Prada frame/DRIVX Super Combi lenses), each with its real post date and a link back to the original TikTok post.
- Real TikTok account figures as of September 2026: 10.9K followers, ~3.7M views, 83.7K likes, 1,392 videos posted. Watch-time not supplied — stays hidden until it is.
- No customer reviews/testimonials exist and none are to be invented.
- No frame measurement data exists for 54 of 61 products; `Will It Fit` honestly reports "measurements not available" rather than guessing.

## Product Principles

1. Never fabricate a fact, figure, review, or claim about a real business — an honest gap beats an invented number, every time.
2. The physical counter and 1968 heritage are the product's real differentiator; design and copy should earn that trust rather than borrow generic e-commerce conventions.
3. WhatsApp-guided ordering is a deliberate, permanent choice, not a placeholder for "real" checkout — treat it as first-class, not a workaround.
4. Every self-service tool must degrade honestly when real data is missing (measurements, stock, reviews) instead of faking a result.
5. Real evidence (real products, real TikTok clips, real dates) is preferred over any stock or generic substitute, even when real evidence is incomplete or asymmetric across products.

## Accessibility & Inclusion

No formal accessibility standard has been specified by the client. Implementation has followed WCAG-informed practice as a matter of course during this build (visible focus rings, `aria-label`s on icon-only controls, a pause control on the TikTok section's auto-advancing player per WCAG 2.2.2, `prefers-reduced-motion` respected for autoplay/animation, keyboard-operable modals with focus trapping). Treat this as a working baseline, not a confirmed requirement to formally audit against.
