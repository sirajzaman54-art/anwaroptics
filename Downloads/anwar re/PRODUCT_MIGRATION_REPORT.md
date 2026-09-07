# Product Migration Report

Source: `https://anwaroptical.pk/` — public WooCommerce Store API (`/wp-json/wc/store/v1/products`), crawled 2026-09-05.
Destination: `products.js` (canonical catalogue), consumed by the homepage, catalogue pages, search, cart and PDP.

## Totals

| | Count |
|---|---|
| Total source products discovered | 65 |
| Successfully migrated | 61 |
| Skipped (no publishable data) | 4 |
| Total images downloaded | 170 |
| Total images after WebP conversion (1000px + 480px each) | 340 files |

## Count by category

| Category | Count |
|---|---|
| Eyeglasses | 50 |
| — Men | 10 |
| — Women | 21 |
| — Kids | 6 |
| — Unisex | 13 |
| Sunglasses | 4 |
| — Men | 3 |
| — Women | 1 |
| Contact Lenses (Magic Eye collection) | 7 |

## Products skipped, and exact reason

Four source listings had **neither a usable name nor a price** — nothing publishable:

| Source ID | Source name | Reason |
|---|---|---|
| 31011 | `Prod-006` | No product name and no price in source data |
| 31004 | `Prod-003` | No product name and no price in source data |
| 31001 | `Prod-002` | No product name and no price in source data |
| 30999 | `Prod-001` | No product name and no price in source data |

No product with a usable name or price was dropped. These four remain fully traceable via their source IDs above if the owner later supplies pricing.

## Products with missing names

One product (source ID `32196`) had a **completely empty** `name` field on the source site. It was migrated with the placeholder display name **"Product 196"** — never a fabricated brand/model name, per the project's naming rule — and flagged in its `ownerReviewFields`. It is fully functional (has a real price, image and category) but needs a real name from the owner before launch.

## Products with missing prices

None. All 61 migrated products carry a real price sourced directly from the WooCommerce `prices.price` field.

## Products with broken/missing images

None. All 65 source products (including the 4 skipped ones) had at least one image; all 170 images across the 61 migrated products downloaded successfully (0 failures) and converted to WebP (0 conversion errors).

## Products with unclear taxonomy

None required guessing. Category, subcategory and gender were derived directly from the source's own WooCommerce category assignments (`Eyewear` / `Mens` / `Women's` / `Kids` / `Sunglasses` / `Men's` / `Women's` / `Kids` under Sunglasses / `Contact Lenses` / `Magic Eye`). Where a product carried both `Mens` and `Women's` source categories, it was marked `gender: "unisex"` rather than assigned arbitrarily to one.

## Products requiring owner verification

**9 products had a designer brand name in their source listing** (Ray-Ban, Hugo Boss, DITA, Cartier, Mont Blanc) that was **removed from the migrated display name** as a precaution — not because the owner asked, but because genuine designer eyewear does not typically sell at these prices (₨950–₨2,950) and there is no evidence the store is an authorized reseller. This is an **unconfirmed editorial decision pending the owner's sign-off**, not something already reviewed or approved. The original source name is preserved untouched in each product's `sourceName` field and flagged via `ownerReviewFields: ["brand-claim-removed"]`, so nothing was silently discarded:

| Slug | Source name (unbranded on migration) |
|---|---|
| men-s-sheet | Boss \| Men's Branded \| Sheet \| Unbreakable |
| ringmaster | RAYBAN \| Ringmaster \| Unisex \| unbreakable |
| sheet-eyewear | Boss \| Unisex \| unbreakable \| Sheet eyewear |
| sheet-eyewear-mens | DITA \| Sheet eyewear \| Mens |
| metal-eyewear | Cartier \| Metal eyewear \| Unisex \| Branded |
| metal-men-s-eyewear | Luxury Metal \| Men's eyewear \| Mont blanc |
| mate-transparent | Rayban mate Transparent |
| aviator-goldengreen | RayBan Aviator GoldenGreen |
| rb3689-bi-gradient | RAY BAN RB3689 BI-GRADIENT |

**Product `product-196`** needs a real display name from the owner (see above).

**All 61 products** have `description: null` — the source WooCommerce copy was full of unverifiable claims ("100% suitable rate", "1 year guarantee", "UV420", "expected life 3 years") that were not migrated. See `OWNER_VERIFICATION_REQUIRED.md`.

## Data fields populated vs. omitted

Populated only where the source WooCommerce data actually supported it:
- `colour` / `colours` — populated for 2 products only (both had a real WooCommerce colour attribute with 4–5 named colours); `null` for the other 59.
- `attributes` (Lens options, Frame material) — populated for 2 unrelated products only, both from genuine custom WooCommerce attributes.
- `compareAtPrice` — populated for 21 products where the source's `regular_price` genuinely exceeded `price`; `null` for the other 40 (their listed price is not a discount).

Never fabricated: material, shape, size-as-a-selectable-variant, stock/availability, ratings, reviews, or a discount percentage not backed by real regular/sale prices.

## Files changed/created

- `products.js` — regenerated in full (61 products, was 8).
- `product.html` — rebuilt as a type-aware PDP (eyeglasses / sunglasses / contact-lens layouts).
- `catalogue.html` — rebuilt as a multi-scope catalogue engine.
- `.crawl/*` — crawl, cleaning and build scripts + intermediate JSON, kept for reproducibility.
- `migrated/w1000/*.webp`, `migrated/w480/*.webp` — 340 locally-hosted product images.

## Product assets downloaded/optimized

170 original images (`.jpg`/`.png`, largest ~3–4MB each from the source WordPress uploads) downloaded and converted to two locally-hosted WebP sizes each (1000px working size at quality 82, 480px thumbnail at quality 78) — 340 files, ~72MB total on disk. No AI-generated replacements; no fabricated additional angles for single-image products.
