# Site Route Inventory

All routes as of this phase. "Data source" for `/product/*` and catalogue pages means the canonical `products.js` migrated from the live WooCommerce store.

| Route | Page type | Purpose | Status | Data source | Index/noindex | Notes |
|---|---|---|---|---|---|---|
| `/` | Home | Brand + discovery | Complete | V2 homepage + `products.js` | Index | Now the actual production file (see note below) |
| `/v2` | Home (alias) | Same content as `/` | Complete | Same file as `/` | Index, canonical → `/` | Kept for continuity with earlier approval links; not a separate page |
| `/eyeglasses` | Collection | All prescription frames | Complete | Migrated catalogue (50 products) | Index | |
| `/eyeglasses/men` | Sub-collection | Men's + unisex eyeglasses | Complete | Migrated catalogue (23 products) | Index | |
| `/eyeglasses/women` | Sub-collection | Women's + unisex eyeglasses | Complete | Migrated catalogue (34 products) | Index | |
| `/eyeglasses/kids` | Sub-collection | Kids' eyeglasses | Complete | Migrated catalogue (6 products) | Index | |
| `/sunglasses` | Collection | All sunglasses | Complete | Migrated catalogue (4 products) | Index | |
| `/sunglasses/men` | Sub-collection | Men's + unisex sunglasses | Complete | Migrated catalogue (3 products) | Index | No `/sunglasses/women` or `/sunglasses/kids` route — only 1 and 0 real products respectively, too thin for a dedicated page per the no-thin-doorway-page rule |
| `/contact-lenses` | Collection | All contact lenses | Complete | Migrated catalogue (7 products, all "Magic Eye") | Index | No separate brand sub-page — every contact lens in the catalogue is Magic Eye, so a sub-page would be identical to this one |
| `/offers` | Collection | Products with a genuine compare-at price | Complete | Migrated catalogue (21 products) | Index | Discount % calculated programmatically, never hardcoded |
| `/sale` | Legacy alias | Redirects (client-side) to `/offers` | Complete | — | — | Kept so old links from the previous phase don't dead-end |
| `/product/[slug]` | PDP | Individual product, type-aware layout | Complete | Migrated catalogue (61 products) | Index | One dynamic template, personalized by `type` (eyeglasses / sunglasses / contact-lens) |
| `/search` | Search | Real product search | Complete | `products.js`, client-side filter | Noindex, follow | Query-driven; excluded from sitemap |
| `/cart` | Cart | Transaction | Complete (pre-existing, unchanged) | localStorage | Noindex (excluded from sitemap) | |
| `/order` | Order | WhatsApp handoff | Complete (pre-existing, unchanged) | localStorage | Noindex (excluded from sitemap) | |
| `/about` | Editorial | Heritage, verified facts only | Complete (new this phase) | Manually authored, verified facts only | Index | Explicitly invites owner to add verified history rather than inventing it |
| `/contact` | Service access | Store info + WhatsApp-prefilled links | Complete (new this phase) | Verified footer/contact data | Index | No fake contact form — links go to real WhatsApp/tel/mailto/maps |
| `/tools` | Guidance hub | Tools landing page | Complete (new this phase) | Static list, matches actual tool status | Index | 4 live tools clickable, 4 planned tools shown as non-clickable "Coming Soon" tiles |
| `/frame-finder` | Tool | Shopping questionnaire | Complete (pre-existing, unchanged) | `products.js` | Index | |
| `/will-it-fit` | Tool | Measurement comparison | Complete (pre-existing, unchanged) | `products.js` | Index | Still honestly reports "measurements not available" — no real measurement data exists in the migrated catalogue either |
| `/prescription-decoder` | Tool | Prescription education | Complete (pre-existing, unchanged) | Static | Index | |
| `/which-lens` | Tool | Lens guidance | Complete — rebuilt onto V2 chrome this phase, logic unchanged | `products.js` (education-only overview grid) | Index | |
| `/measure-pd` | Tool | Guided PD self-measurement | Complete (new this phase) | Static, real HTML/CSS printable ruler | Index | Camera-scan and "use an existing pair" methods deliberately excluded — see `OWNER_VERIFICATION_REQUIRED.md` |
| `/lens-comparison` | Tool | Illustrative lens-option comparison | Complete (new this phase) | Static images, CSS filter effects | Index | Interactive viewport uses one shared street-scene image, not two unrelated product photos |
| `/lens-tint-preview` | Removed | — | Removed from active experience; permanent redirect to `/tools` | — | Redirect (308) | Superseded by `/lens-comparison` in the homepage showcase and tools hub |
| `/uv-protection-guide` | Tool | UV terminology education | Complete (new this phase) | Static | Index | No numeric UV-blocking claims |
| `/lens-reminder` | Tool | Contact lens replacement date calculator | Complete (new this phase) | Static, client-side date math + `.ics` export | Index | No automatic email/SMS/WhatsApp reminders — frontend-only |
| `/privacy` | Legal | Privacy draft | Needs legal review (pre-existing) | Static | Noindex, follow | Unchanged this phase |
| `/404` | Recovery | Branded 404 | Complete (pre-existing, unchanged) | Static | Noindex (excluded from sitemap) | |

## Tools suite (this phase)

All 4 previously live tools (`/frame-finder`, `/will-it-fit`, `/prescription-decoder`, `/which-lens`) were rebuilt onto the V2 design system (shared header/search/cart-drawer/mobile-nav, matching typography and tokens) — they previously used a pre-V2 template that visually didn't match the rest of the site. Logic in all four was preserved verbatim. 4 new tool routes were added (`/measure-pd`, `/lens-comparison`, `/uv-protection-guide`, `/lens-reminder`), bringing the total to 8 active tools. `/lens-tint-preview` was built, then removed from the active suite (see below) and now 308-redirects to `/tools`. `/tools` was redesigned into 4 grouped sections (Find Your Frame / Understand Your Prescription / Choose Your Lenses / After You Buy) instead of a flat "live now / coming soon" list.

### Lens Tint Preview removal

`/lens-tint-preview` was removed from the active production experience: deleted `lens-tint-preview.html`; removed its links from every tool page's footer tool list and JS search index, the tools hub (`tools.html`) grid, `product.html`'s "Preview a tint on this frame" link, `catalogue.html`'s sunglasses promo line (now points to `/lens-comparison` instead), and `sitemap.xml`. `vercel.json`/`serve.json` now issue a permanent (308) redirect from `/lens-tint-preview` to `/tools` instead of serving the old page. The homepage Tools Showcase state 04 was replaced with Lens Comparison (headline "Compare before you choose.", CTA "Compare Lens Options →", reusing `/tools-media/w1200/street-lens-demo.webp` — the same image already used on `/lens-comparison`). "Explore all 9 tools" was corrected to "Explore all 8 tools".

## Not created

- `/eyeglasses/kids` sunglasses equivalent, `/sunglasses/women`, `/sunglasses/kids` — real inventory is 1 product or 0; folded into `/sunglasses` with a gender filter instead of a dedicated thin page.
- Contact-lens brand/collection pages — every contact lens is "Magic Eye"; `/contact-lenses` already is that collection.
- `/shipping`, `/returns`, `/payment-information` — not created; these are transactional policy pages requiring owner confirmation first (see `OWNER_VERIFICATION_REQUIRED.md`).
- `/new-arrivals`, `/best-sellers`, `/featured` — not created; no real date, sales or manually-curated data exists to support them.
- A camera/AI-based PD measurement page, a "use an existing pair" PD shortcut, and photo-upload-based face-shape/tint analysis — deliberately not built; see `OWNER_VERIFICATION_REQUIRED.md` items 17 and 22.

## Design-token divergence found in `cart.html`, `order.html`, `privacy.html` (found this phase, not fixed)

These three pages use an entirely different design system from the rest of the V2 site: font-family `'Space Grotesk'` instead of `'Outfit'`/`'Inter'`/`'Caveat'`, a different orange (`--o-500:#FA9114` vs. the V2 token `#F0722C`), and different `--ink`/`--soft`/`--cream`/`--line` hex values. Component rules also differ in ways a pure token-value swap wouldn't fix (e.g. `.btn-o` uses `color:var(--ink)` here vs. `color:#fff` in V2). A full retheme was deliberately **not** attempted this phase — cart/checkout is commerce-critical, and a font-family change especially carries real layout-regression risk (different metrics affect line-heights and element sizing throughout the page) that needs full visual QA at every breakpoint, not a blind token edit. Flagging this precisely so it isn't silently left inconsistent: bringing these three pages onto the shared V2 tokens (colors, font, button text-color rules) is the next real visual-consistency task, done as its own reviewed pass.

## Note on `/` vs `/v2`

Before this phase, the production deploy script copied an older pre-V2 file (`anwar-optical-final.html`) to the live homepage root, so the approved V2 design was only ever reachable at `/v2` — never at the actual domain root. This phase corrected the deploy convention: `/` now serves the true V2 file directly, and `/v2` carries a canonical tag pointing back to `/` to avoid duplicate-content indexing.
