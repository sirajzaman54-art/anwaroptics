const fs = require('fs');
const items = require('./final-catalogue.json');

function typeLabel(t) {
  return t === 'eyeglasses' ? 'Eyeglasses' : t === 'sunglasses' ? 'Sunglasses' : 'Contact Lenses';
}
function genderLabel(g) {
  if (!g) return null;
  return g === 'unisex' ? 'Unisex' : g.charAt(0).toUpperCase() + g.slice(1);
}

const enriched = items.map(p => {
  const gl = genderLabel(p.gender);
  const kind = typeLabel(p.type) + (gl && p.type !== 'contact-lens' ? ' · ' + gl : '');
  return { ...p, kind, image: p.images[0] ? p.images[0].src : null };
});

// Stable order: featured/newer WooCommerce ids first (roughly matches old
// site's own listing order), matching how the source site orders products.
enriched.sort((a, b) => b.id - a.id);

function js(v) { return JSON.stringify(v, null, 2); }

const header = `/*
  ══ CANONICAL PRODUCT DATA ══
  Migrated from the live Anwar Optical WooCommerce store (anwaroptical.pk)
  via its public Store API on ${new Date().toISOString().slice(0,10)}.
  Source-of-truth field is sourceUrl on every product.

  Field notes:
  - "kind" / "image" are flat legacy aliases kept for the existing V2
    homepage, search, cart and Quick View code — they mirror the first
    entry of "images" and a human label built from verified type+gender.
  - "images" is the full migrated gallery (all genuine photos found on the
    source product page — no fabricated angles). Each entry has a 1000px
    working size and a 480px thumbnail, both locally hosted WebP.
  - "description" is null for every product: the source WooCommerce copy
    was full of unverifiable durability/UV/guarantee/percentage claims
    (see OWNER_VERIFICATION_REQUIRED.md) and was not migrated. PDPs show
    only structured, verified facts.
  - Designer brand names (Ray-Ban, Hugo Boss, DITA, Cartier, Mont Blanc)
    appearing on 8 source listings were removed from "name" as a precaution:
    genuine designer eyewear does not sell at these prices, and there is no
    verification that the site is an authorized reseller. This is an
    unconfirmed editorial decision pending owner sign-off, not something the
    owner has actually reviewed or approved — see ownerReviewFields +
    OWNER_VERIFICATION_REQUIRED.md, where the owner must confirm authorization
    before any brand name is restored.
  - 4 source products had neither a usable name nor a price ("Prod-001"…)
    and were not migrated — see PRODUCT_MIGRATION_REPORT.md.
  - colour/colours/attributes are populated only where WooCommerce actually
    recorded a product attribute; most products have none, so these are
    null rather than guessed from the photo.
*/
window.PRODUCTS = `;

fs.writeFileSync('../products.js', header + js(enriched) + `;

window.getProductBySlug = function(slug){
  return window.PRODUCTS.find(function(p){ return p.slug === slug; }) || null;
};
`);
console.log('wrote products.js with', enriched.length, 'products');
