# Anwar Optical — Elementor Rebuild Spec (Track 2)

Goal: restyle the live WooCommerce/Elementor site (theme `bw-zenny`) to match the new
design, fully editable by the client afterward — no hardcoded PHP. Build this directly
in the live Elementor editor using this doc as the source of truth. The static pages in
this repo (`anwar-optical-v2.html`, `catalogue.html`, `product.html`, etc.) are the pixel
reference — open them side-by-side while building.

**Before touching anything: take a full backup (DirectAdmin → Backup/Restore) and export
the current Elementor templates (Templates → Saved Templates → export each) so you can
roll back.**

---

## 1. Global Kit (Site Settings → Global Colors / Typography / Layout)

Set these once, site-wide — every widget then inherits them, and the client can still
override per-element in Elementor without touching code.

### Colors
| Name | Hex | Use |
|---|---|---|
| Primary | `#B44C15` (o-700) | Buttons, links, active states |
| Primary Hover | `#8C3B10` (o-800) | Button hover |
| Accent | `#F0722C` (o-500) | Highlights, badges |
| Accent Light | `#FEF2E9` (o-50) | Hover backgrounds, tag chips |
| Ink (text) | `#14212B` | Body text, headings |
| Soft text | `#6E6862` | Secondary/muted text |
| Paper | `#FFFFFF` | Cards, header background |
| Cream (page bg) | `#FAF7F3` | Body background |
| Line | `#E8E1D8` | Borders, dividers |
| Sale/Error | `#C8452B` | Sale price, warnings |

### Typography
| Name | Font | Weight | Use |
|---|---|---|---|
| Primary (headings) | Outfit | 600–700 | H1–H3, buttons, nav |
| Secondary (body) | Inter | 400–500 | Paragraphs, labels |
| Accent (script) | Caveat | 600 | Small handwritten accents (hero only) |

Load via Elementor → Site Settings → Typography → add Google Fonts: `Outfit:300,400,500,600,700,800`, `Inter:400,500,600,700`, `Caveat:500,600,700`.

### Layout
- Container width: `1280px` (matches `.wrap{max-width:1280px}`)
- Container padding: `clamp(18px, 4vw, 56px)` — set as custom CSS on the Elementor container if the width control doesn't support `clamp()`, else use `24px` fixed and rely on responsive breakpoints.
- Border radius: `14px` cards, `10px` small elements, `8px` buttons.
- Button style (Global): background Primary, text white, radius `8px`, padding `13px 24px`, hover → Primary Hover.

---

## 2. Header (Elementor Theme Builder → Header)

Structure, left → right:
1. **Announcement bar** (thin strip above header, `#F68F12` background, `#14212B` text, 12.5px): "A Karachi optician since 1968" · store location · WhatsApp link. Hide on mobile (or collapse to center-only text).
2. **Logo** — `brand/logo.webp`, links home.
3. **Primary nav**: Eyeglasses · Sunglasses · Contact Lenses · Offers · Our Story (dropdown: About, Certifications) · Tools.
   - Use the theme's native menu widget (`bzotech-menu-global`) so WooCommerce category links resolve correctly.
4. **Right actions**: search icon (opens overlay/panel), account icon, cart icon with the theme's native **Mini Cart widget** (`bzotech-mini-cart-global`) — do not rebuild cart logic, just restyle this widget's colors/spacing to match tokens above.
5. **Mobile**: hamburger → off-canvas drawer with the same nav, mirrors `catalogue.html`'s `#mnavBd` pattern.

Reference: `<header>...</header>` block in `catalogue.html` (search "══ HEADER" region) for exact spacing/typography.

---

## 3. Footer (Theme Builder → Footer)

4–5 columns, reference the `<footer>` block at the bottom of any static page:
- **Brand column**: logo, one-line description, TikTok icon link.
- **Shop**: Eyeglasses / Sunglasses / Contact Lenses / Offers (WooCommerce category links).
- **Tools**: link out to the 8 tool pages (these stay static HTML — see §7).
- **Help**: WhatsApp, Cart, Certifications, Privacy.
- **Contact**: phone, email, address (use these as literal text, not a form).
- Bottom bar: `© 2026 Anwar Optical. All rights reserved.` — copy tone, adjust year via Elementor dynamic tag if available, else edit yearly.

Background: `--ink` dark or `--cream-2` light — match `anwar-optical-v2.html` footer (`footer{...}` in its `<style>`).

---

## 4. Homepage (Elementor page assigned as WooCommerce "Shop page" is NOT this —
build this as the site's actual front page, separate from the Shop archive in §5)

Sections, top to bottom (see `anwar-optical-v2.html` for exact copy/imagery):

1. **Hero** — 3-slide crossfade (Eyeglasses / Sunglasses / Contacts), headline "Find the frame that fits you," two CTAs (Shop Eyeglasses → shop archive, Frame Face Match → `/frame-finder`). Crossfade needs the custom HTML widget in §8.1 (Elementor's native slider widget can substitute if crossfade isn't required — simpler, no custom code).
2. **Trust strip** — 4 icons: Since 1968 / Visit the Store / WhatsApp Us / Fitted at the Counter.
3. **"Shop Eyewear" tabs** (Featured / Eyeglasses / Sunglasses / Contact Lenses) showing 8 products per tab, "Add to cart" per card. Use the theme's **Products widget** (`bzotech-products-global`) once per tab, each filtered by WooCommerce category, inside an Elementor **Tabs** widget. This replaces our hand-rolled JS entirely — the native widget already talks to real WooCommerce cart/stock/price.
4. **Editorial banners** — category tiles (Eyeglasses/Sunglasses/Contact Lenses) linking to their shop archives.
5. **"Featured Frames" rail** — 5-product horizontal scroll. Use the Products widget in "carousel" layout if the theme provides one; otherwise the custom rail markup in §8.2.
6. **Lens experience / "Which lens" teaser** — links into the static tool pages (§7).
7. **TikTok stills strip** — static image grid linking to the TikTok profile.
8. **Reviews** — wire to the existing `customer-reviews-woocommerce` plugin's shortcode/widget if it has one, otherwise Elementor's testimonial widget.

---

## 5. Shop Archive (Theme Builder → Products Archive, applies to /eyeglasses, /sunglasses, /contact-lenses, /offers via WooCommerce category pages)

Reference: `catalogue.html`.
- Breadcrumb → H1 (category name) → short description → toolbar (result count, Filter button, Sort dropdown) → sidebar filters (price, brand, sale) + product grid.
- Use the theme's native **Products widget** bound to "Current Query" so it respects the category/filter/sort automatically — do not hardcode product IDs.
- Grid: 4 columns desktop / 3 tablet / 2 mobile, card = image, name, price (+ strikethrough compare-at price when on sale), Add to cart button. This is standard WooCommerce card behavior — just restyle via the widget's style tab to match `.pcard` in `catalogue.html`.

---

## 6. Single Product (Theme Builder → Single Product)

Reference: `product.html`.
- Left: image gallery with thumbnails + lightbox zoom (WooCommerce/theme gallery widget already does this — restyle only).
- Right: product name (H1), price, short description, size/color variation selectors (native Woo widgets), quantity + Add to Cart, WhatsApp "Ask about this frame" link (custom button widget, `href="https://wa.me/923327931623?text=..."`).
- Below: full description tabs, related products (Products widget, "related" mode).

---

## 7. Pages that stay static HTML (do not rebuild in Elementor)

The 8 interactive tool pages have no WooCommerce dependency and are cheaper to keep as-is:
`frame-finder`, `will-it-fit`, `prescription-decoder`, `which-lens`, `measure-pd`,
`lens-comparison`, `uv-protection-guide`, `lens-reminder`.

Embed each as a WordPress page containing a single Elementor **HTML widget** (or shortcode)
that iframes or directly pastes the static page's `<body>` content + its `<style>`/`<script>`
blocks. Simplest: upload the 8 HTML files to `wp-content/uploads/tools/` and iframe them
from a thin WP page at `/frame-finder` etc., OR paste the full markup into the HTML widget
directly (works, but keeps them out of the Elementor visual editor — that's fine, they're
tool utilities, not content the client edits).

`tools.html` (the hub linking to all 8) can be rebuilt as a normal Elementor page — it's just
cards + links, no logic.

---

## 8. Custom HTML/CSS snippets (paste into an Elementor "HTML" widget where noted)

Use these only where a stock Elementor/theme widget can't reproduce the behavior. Each is
self-contained — safe to drop in, remove, or edit without touching the theme.

### 8.1 Hero crossfade (Homepage, if not using Elementor's native slider)
Pull the `.hero-media`, `.hero-img`, `.hero-scrim` CSS and the crossfade `setInterval`/
click-dot JS straight from `anwar-optical-v2.html`'s `<style>` and bottom `<script>` block
(search "HERO" in both). Paste CSS into an HTML widget's `<style>` tag scoped with a unique
wrapper class to avoid colliding with theme styles, e.g. `.ao-hero-embed .hero-img{...}`.

### 8.2 Featured Frames scroll-snap rail (Homepage, if Products widget has no carousel)
```html
<div class="ao-rail">
  <!-- one .ao-rail-card per product; duplicate the block, or drive it from Woo REST if editable data matters -->
</div>
<style>
.ao-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(180px,220px);gap:16px;
  overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px}
.ao-rail-card{scroll-snap-align:start}
</style>
```

### 8.3 Shop-by-category tabs wrapper CSS (if Elementor's Tabs widget needs the accent underline)
```css
.ao-tabs .elementor-tab-title.elementor-active{border-bottom:2px solid #F68F12;color:#14212B}
```

---

## 9. QA checklist before going live

- [ ] Cart, checkout, and payment still work end-to-end (test a real small order)
- [ ] YITH Wishlist button still renders on product cards
- [ ] Facebook/Google product feed (`wc-facebook`, `wc/gla`) still syncs — don't rename/remove products or categories
- [ ] Mobile nav drawer, cart drawer, and search overlay all work on a real phone
- [ ] All 8 tool pages still load and their WhatsApp/localStorage features work
- [ ] Old URLs (if any changed) 301-redirect to new ones — check Search Console after a week
- [ ] Full backup taken immediately before and after cutover

---

## Reference file map (this repo)

| Elementor target | Static reference |
|---|---|
| Header/Footer | any page's `<header>`/`<footer>` (identical across pages) |
| Homepage | `anwar-optical-v2.html` |
| Shop archive | `catalogue.html` |
| Single product | `product.html` |
| Cart drawer styling only (Woo owns the logic) | `cart.html` |
| Design tokens | `:root{...}` block, top of any page's `<style>` |
