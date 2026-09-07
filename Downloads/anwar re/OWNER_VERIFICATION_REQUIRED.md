# Owner Verification Required

Everything below was found on the old live site (`anwaroptical.pk`), in its data, or during this phase's production-cleanup audit of the live new site. Nothing here is treated as verified simply because it existed somewhere — none of it is published in the new site's commercial UI until the owner confirms it. This file supersedes and extends the version from the earlier "remove or resolve commercial blockers" phase and the product-migration phase; it now also covers the production-cleanup audit (data consistency, claim verification, homepage merchandising).

Organized by category. Each item notes its current state and exactly what confirming it would unlock.

---

# PRODUCT DATA ACQUISITION CHECKLIST (start here)

A practical, scannable list of what to send us to make the catalogue commerce-ready. Nothing below is fabricated or inferred — every row is a genuine gap confirmed against `products.js` for all 61 products. Full per-product detail is in `PRODUCT_COMPLETENESS_REPORT.json`.

**Current state: 0 of 61 products are fully commerce-ready (Grade A). All 61 are Grade B — usable (clean title, price, category, gender where applicable, at least one photo) but incomplete.** No product is so incomplete it's unsellable (Grade C: 0).

### 1. Frame measurements — HIGHEST VALUE, affects 54 eyeglasses/sunglasses products
None of the 54 frame products (eyeglasses + sunglasses) have lens width, bridge width, or temple length on file. 2 of the 54 have a single lens-width number only (`metal-eyewear-31767`, `fancy-metal-eyewear` — both "52"), nothing else.
**What to send, per frame:** the three numbers printed inside the temple arm, e.g. `52 □ 18 — 140` (lens / bridge / temple, in mm). This directly powers the PDP spec table and makes Will It Fit give real comparisons instead of the honest fallback message it shows today.
**Full slug list:** see `_need_measurements` section of `PRODUCT_COMPLETENESS_REPORT.json` (54 slugs).

### 2. Shape — affects 54 frame products
No product has a `shape` field (round / square / rectangle / cat-eye / aviator / etc.). **What to send:** the shape of each frame, only where you're confident of the term — we will not guess from photos.

### 3. Material — affects 54 frame products
No product has a `material` field (metal / acetate / TR-90 / etc.). Some names already say "Metal" or "Sheet" informally, but that's not the same as a verified, structured field. **What to send:** confirmed frame material per product or product line.

### 4. Colour — affects 59 of 61 products
Only 2 products have a structured colour list. Notably, all 7 contact lens products are literally named after their shade (e.g. "Ocher," "Huskey Brown," "Platinum Grey") but don't have that shade recorded as a separate `colour` field — a safe, non-fabricated normalization (colour = the shade already in the name) is possible here without owner input; flagged as a quick follow-up, not something we need from you. For the 52 other frames with no colour information at all, real colour per product would still need to come from you.

### 5. Brand verification — affects 9 products
9 products still carry a stripped source brand name internally (Boss, DITA, Cartier, Mont Blanc, Ray-Ban) that is **already hidden from customers** pending your confirmation. **What we need:** for each, either (a) confirmation you're an authorized reseller (then we restore the real brand name to the storefront), or (b) confirmation you're not (then we leave it removed permanently, no further action). See item 1 in the original list below for the exact 9 products and their source URLs.

### 6. Stock / status
No product has a stock/availability field of any kind — the site never claims "in stock" or a quantity, and won't until you confirm this is something you want shown and can keep accurate.

### 7. Contact lens details
7 contact lens products exist (all one collection, "Magic Eye" per existing data). Missing: verified wear schedule per lens (daily/monthly — currently shown only as generic hygiene guidance, not product-specific), and confirmed contact-lens brand/collection name if "Magic Eye" isn't the full story.

### 8. Store policies
Delivery, returns, payment methods (COD/bank transfer), and business hours are not published anywhere on the site because none have been confirmed. If any of these are real and consistent, send them and we'll add them — until then the site correctly says nothing rather than guessing.

---

## Product / brand verification

### 1. Designer brand names on 9 products

**Source:** WooCommerce product titles on anwaroptical.pk (e.g. "RayBan Aviator GoldenGreen", "Boss | Men's Branded | Sheet | Unbreakable", "DITA | Sheet eyewear | Mens", "Cartier | Metal eyewear | Unisex | Branded", "Luxury Metal | Men's eyewear | Mont blanc").
**Current state:** Brand name removed from the migrated display name and price/badge; original text preserved in `sourceName` and flagged `ownerReviewFields: ["brand-claim-removed"]`. Full list in `PRODUCT_MIGRATION_REPORT.md`.
**Fixed this phase:** the PDP was still leaking the stripped brand name to shoppers via an "Originally listed as…" note (`product.html`), and the site search index was still matching on the stripped brand name (`search.html`), meaning searching "rayban" or "cartier" surfaced these products. Both now suppress `sourceName` for any product flagged `brand-claim-removed`.
**Why verification is needed:** Genuine Ray-Ban, Hugo Boss, DITA, Cartier and Mont Blanc eyewear does not typically sell at ₨950–₨2,950, and there is no evidence on the source site that Anwar Optical is an authorized reseller of these brands. Publishing a brand name the store isn't authorized to use risks a trademark/counterfeit claim against the business.
**Owner response required:** For each of the 9 products — confirm whether this is (a) an authorized/genuine branded item (provide proof of authorization/receipt), (b) a "style"/"inspired by" item that should be named without the brand, or (c) something else. Until answered, all 9 ship unbranded and are unsearchable by the stripped brand name.

### 2. Product `product-196` has no name

**Source:** WooCommerce product ID 32196 — the `name` field was empty on the source site.
**Current state:** Displayed as "Product 196" (a neutral placeholder, never a fabricated brand/model name).
**Owner response required:** Provide the real product name (or confirm this listing should be removed).

### 3. Product descriptions (43 of 65 products)

**Source:** WooCommerce `short_description` copy, e.g. "100% suitable rate on every face, best combination with Uv420 lenses", "1 year garantee, expected life 3 years".
**Current state:** Not migrated. Every product's `description` field is `null`; PDPs show only structured, verified facts.
**Owner response required:** Confirm which claims (if any) are still accurate per product line, so a short, honest description can be written.

---

## Lens options / pricing

### 4. Lens add-on pricing found on one product listing

**Source:** A custom WooCommerce attribute on product `sheet-plastic-dynamic-design-unisex` (source ID 31379) listing 15 lens options with prices, e.g. "Simple white (Korean) 700/-", "Blucut lense (Korea) 1500/- (recommended)".
**Current state:** Not published anywhere. Lens Studio on eyeglasses PDPs says only "Lens pricing is confirmed at the optical counter."
**Owner response required:** Confirm whether this is the current, universal lens price menu for all frames. If yes, provide an up-to-date version and it can replace the placeholder directly.

---

## Contact lenses

### 5. Brand assortment claims reconciled against the migrated catalogue

**Found this phase:** the homepage's contact-lens hero copy read "Clear and coloured contact lenses for everyday wear, from brands we stock at the counter" — implying a named multi-brand assortment. The migrated, structured catalogue contains only 7 shade-named "Magic Eye" listings (`ocher-made-in-korea`, `huskey-brown`, `lumerier-grey`, `platinum-grey`, `sabrin-grey-green`, `topaz-color-contact-lense`, `amber-gold`); no brand field was ever present in the crawled data.
**Fixed this phase:** copy changed to "Clear and coloured contact lenses for everyday wear, available at the counter" — no brand implied, matches what the catalogue can actually support. The `/contact-lenses` collection page already used neutral copy ("Coloured contact lenses currently stocked at the counter") and needed no change.
**Owner response required:** If the shop carries other lens brands/lines beyond the 7 migrated Magic Eye shades (in-store only, not in the WooCommerce export), provide names and shade lists so they can be added as real catalogue entries rather than named in marketing copy with no matching inventory.

### 6. Contact lens medical/specification claims

**Source:** N/A — no per-lens medical specification data (wear period, power range, base curve) was present in the crawled contact lens listings beyond shade name and price.
**Current state:** Contact lens PDPs show only shade name, price and category. The Lens Care & Ordering Guidance section is generic safety copy with an explicit disclaimer that it is not medical advice.
**Owner response required:** If specific wear-period, power-range or brand/origin data exists for the Magic Eye collection, provide it — it can be added to the Product Details tab honestly.

---

## Heritage / business history

### 7. "The Najmi family's optician counter" — fabricated founder/family claim, now removed

**Found this phase:** the phrase "The Najmi family's optician counter in Karachi" appeared in the homepage `<meta name="description">` and in the shared footer tagline on all 8 production pages (`anwar-optical-v2.html`, `about.html`, `contact.html`, `404.html`, `tools.html`, `search.html`, `catalogue.html`, `product.html`). No source data anywhere in the crawl or prior reports supports a family name "Najmi," and this claim directly contradicted `/about`'s own text ("we won't publish anything about the shop's history that hasn't been confirmed") and the standing rule against publishing unverified founder/family-ownership claims. This was a real, live claim on the production site, not a draft.
**Fixed this phase:** replaced sitewide with neutral copy — meta description now reads "An optical counter in Shah Faisal Colony, Karachi. Prescription eyewear, sunglasses and contact lenses, fitted in person since 1968." and the footer tagline now reads "Prescription eyewear, sunglasses and contact lenses from a Karachi optical counter, serving customers since 1968." Neither names a family or founder.
**Owner response required:** If there is a real family name, founder, or generation count behind the business, provide it (and ideally a way to confirm it, e.g. a registration document or an archive photo) and it can be reinstated as a verified fact — nothing has been re-invented in its place.

### 8. Founder / family history, "same bench" or equipment stories

**Source:** Not present in the crawled data in a form specific enough to migrate — no founder name, generation count or equipment story was found on the accessible parts of the old site.
**Current state:** `/about` states only established 1968, Shah Faisal Colony location, frames fitted in person, ordering by WhatsApp. A visible note invites the owner to add verified history.
**Owner response required:** Same as item 7 — if there is a real founder name, family generation count, or archive photo, provide it.

---

## Certifications

### 9. Certifications / professional qualifications

**Source:** The old site referenced a Certifications page (per the previous phase's audit). Its actual asset content was not independently re-verified.
**Current state:** No certifications page or claim exists anywhere on the new site.
**Owner response required:** Carried over unchanged — provide authentic, legible certificate files with clear attribution before any credential claim is published.

---

## Store operations / business policies

### 10. Shipping, returns, payment methods, COD, bank transfer, business hours

**Source:** Carried over unchanged from the prior "remove commercial blockers" phase's findings.
**Current state:** None of these are published on any production page. Ordering remains WhatsApp-only; no delivery/returns/payment promises appear anywhere. (The old, non-deployed `anwar-optical-final.html` file still contains commented-out and live "Free delivery / Cash on delivery / 7 day returns" copy — confirmed this file is not part of the deploy pipeline and never reaches production, but it should not be reused as a source for future pages without re-verification.)
**Owner response required:** Confirm before any `/shipping`, `/returns` or `/payment-information` page is created, or before delivery/COD/returns copy is added anywhere.

### 11. Guaranteed turnaround times

**Current state:** No turnaround-time claims (same-day, 24-hour, etc.) exist anywhere in production.
**Owner response required:** Only needed if the owner wants such a claim added in future.

---

## Social proof / content

### 12. TikTok "From the shop" rail — provenance not independently re-confirmed this phase

**Current state:** The homepage's "From the shop" rail links to the real `@anwar.optical` TikTok profile and displays 8 locally-hosted still images (`social/tt/ttk*.webp`). The code has no fabricated captions, view counts, likes, or per-post URLs — every card opens the real profile, not a fake permalink.
**Owner response required:** Confirm the 8 still images actually originate from the real Anwar Optical TikTok account (rather than stock/placeholder photography) so this can be marked fully verified. If any are not genuine account stills, they should be replaced with real ones or the rail should link out to the profile without a preview grid.

---

## Notes (not owner-verification items, but recorded for the record)

### 13. Fabricated stock-availability claim removed from PDP structured data

**Found this phase:** every PDP's `Product` JSON-LD (`product.html`) hardcoded `"availability":"https://schema.org/InStock"` for all 61 products, even though stock/availability data was never migrated (per `PRODUCT_MIGRATION_REPORT.md`, this was explicitly "never fabricated" in the visible UI, but it had leaked into the invisible structured-data layer, which search engines and shopping surfaces do read). Removed — the `Offer` object now omits `availability` entirely until real stock data exists.

### 14. Homepage "Featured / Offers" merchandising confirmed to already be data-driven

**Checked this phase:** the "This week at the counter" section already renders exclusively from `products.js` (only items with a genuine `compareAtPrice > price`), with no hardcoded prototype products remaining. No fix was needed here.

### 15. "Women's Eyeglasses" count discrepancy (21 vs 34) — explained, not a bug

See the dedicated explanation in the phase report. Summary: 21 is the count of products with `gender: "women"` strictly; 34 is `gender: "women"` **plus** `gender: "unisex"` (13 products), which is the deliberate, intentional filter used by `/eyeglasses/women` and the Frame Finder — unisex frames are meant to surface under both the men's and women's collections. This matches the same pattern already used for `/eyeglasses/men` (which also includes unisex). No fabricated count and no bug; both numbers are internally consistent once the filter definition is known.

### 16. Deployment gap found and corrected in the prior phase

**Not a content-verification item, carried over for context:** the production deploy script previously copied an older, pre-V2 file to the live homepage root, so the approved V2 design was only reachable at `/v2`, never at `/`. This was corrected in the prior phase; recorded here for continuity.

---

## Tools suite (this phase)

### 17. Lens options/pricing — Photochromic and Progressive lenses shown for education only

**Where:** Which Lens Do I Need? (`/which-lens`) "Not sure? A quick overview" grid (Single Vision/AR/Photochromic/Progressive).
**Current state:** These two lens types are shown purely as general educational content, explicitly separated from the quiz's actual outcome set (Clear / Anti-reflective / Blue-light / Tinted / Frame Only) and captioned "availability is unconfirmed — ask us on WhatsApp." (Lens Tint Preview, which previously also referenced photochromic lenses, was removed from the site this phase — see Tools suite change log.)
**Owner response required:** Confirm whether Anwar Optical currently carries photochromic or progressive lenses before either is ever promoted as a real quiz outcome or given a dedicated shopping CTA.

### 18. Contact lenses — replacement schedule table needs sign-off

**Where:** Lens Reminder (`/lens-reminder`) "Different lenses, different schedules" table.
**Current state:** Contact lens row states daily/bi-weekly/monthly as general, widely-recognized hygiene guidance (not tied to specific Anwar Optical stock); eyeglass/sunglass rows were deliberately softened to "no fixed schedule — replace if damaged or prescription changes" rather than inventing a fixed 12–24 month claim for eyewear lenses.
**Owner response required:** Confirm the general contact-lens guidance matches what's sold in-store, in case any correction is needed.

### 19. Store operations — no automatic reminders exist

**Where:** Lens Reminder (`/lens-reminder`).
**Current state:** The tool calculates a date and offers a downloadable `.ics` calendar file only — this is a genuine, fully frontend-capable feature. It explicitly states no automatic email/SMS/WhatsApp reminders exist, since the site has no backend or messaging provider for that.
**Owner response required:** None, unless the owner wants to build real automated reminders in the future (would require backend infrastructure not currently part of this project).

### 20. UV Protection Guide — no numeric UV claims made

**Where:** UV Protection Guide (`/uv-protection-guide`).
**Current state:** The tool is purely educational (UVA/UVB terminology, general "who should think about UV protection" guidance) and explicitly states Anwar Optical has no verified UV-filtering specifications for its catalogue, directing shoppers to ask in-store. No "100% UVA/UVB" or similar performance claim is made anywhere, and the illustrative glare-comparison images are captioned to clarify they show glare/tint effects, not UV blocking (which is invisible).
**Owner response required:** If the owner has real UV-filtering specs for specific lenses/products, they can be added to that product's detail data and referenced honestly.

### 21. Imagery — one supplied tools asset excluded permanently

**Where:** Tools-suite image asset review (`tools mockup/images for tools pages/Choosing Frames at Anwar Optical.png`).
**Current state:** Not used anywhere on the site. This generated image bakes in real, legible Ray-Ban and Zeiss logos on shelf displays, which would visually imply Anwar Optical is an authorized reseller of those brands — directly contradicting the unresolved brand-authorization question in item 1. It also bakes in fabricated "ANWAR OPTICAL · KARACHI · SINCE 1968" signage.
**Owner response required:** None to ship the current tools suite. If the owner wants storefront-with-brand-signage photography in the future, it needs to be a real, permissioned photo of the actual counter — not a generated substitute.

### 22. Frame Face Match — no structured shape data exists yet

**Where:** Frame Face Match (`/frame-finder`).
**Current state:** The face-shape reference grid is purely educational and never filters or re-ranks product results — `products.js` has no `shape`/`frameShape` field on any of the 61 products, so wiring shape selection to results would require fabricating a mapping. Real recommendations come only from the existing gender/category/budget quiz.
**Owner response required:** If real per-product frame-shape tags can be supplied in the future, honest shape-based filtering can be added at that point.

## Catalogue data completeness (this phase's audit)

### 23. Structured frame measurements (lens/bridge/temple) — effectively absent catalogue-wide

**Where:** All 61 products in `products.js`; consumed by the PDP spec table and by Will It Fit (`/will-it-fit`).
**Current state (re-verified this phase):** Only 4 of 61 products carry any `attributes` object at all, and only 2 of those 61 carry an `attributes.size` value — and even that is a single lens-width-style number (e.g. `"52"`), never a full lens/bridge/temple triplet. 0 of 61 products have real, structured bridge or temple measurements. Both the PDP and Will It Fit already handle this honestly (no invented numbers; Will It Fit shows "Measurements not available" and offers a WhatsApp CTA instead) — this item is a data gap, not a code bug.
**Owner response required:** If frame measurements are available (printed inside the temple arm as e.g. `52 □ 18 — 140`) for any products, supply them per-slug so they can be added as real `attributes.lensWidth` / `attributes.bridge` / `attributes.temple` fields — this is what would let Will It Fit auto-populate from a product page instead of asking the customer to type in their current glasses' numbers.

### 24. Material, colour and shape — largely unpopulated

**Where:** All 61 products in `products.js`.
**Current state (re-verified this phase):** 59 of 61 products have no `colour`/`colours` value; material and shape fields are unpopulated on effectively the entire catalogue (only the handful of products with an `attributes` object carry a `color` list, and none carry `material` or `shape`). No catalogue/collection filters for colour, material, or shape have been built for this reason — building them now would either expose empty filters or require inventing attribute values, both of which are excluded by this pass's no-fabrication rule.
**Owner response required:** Supply verified colour/material/shape per product (or per product line) if these are meant to become real shoppable filters.
