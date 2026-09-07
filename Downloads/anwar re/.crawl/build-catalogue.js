// Phase A/B: transform raw WooCommerce Store API export into the canonical
// migration inventory + cleaned product list. Downloads nothing (that's a
// separate step) — this only produces JSON for review before we commit to
// slugs/filenames.
const fs = require('fs');
const raw = require('./products_raw.json');

const strip = s => (s || '')
  .replace(/<!--more-->/g, ' ')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&#8217;/g, "'").replace(/&#8211;/g, '-').replace(/&#8216;/g, "'")
  .replace(/&#038;|&amp;/g, '&').replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

// Brand names we will NOT publish as real product identity — decided with
// the owner-facing question: strip, keep as generic frames.
const BRAND_RE = /\b(ray[\s-]?ban|hugo\s?boss|\bboss\b|dita|cartier|mont\s?blanc|gucci)\b/gi;
const FILLER_WORD = /^&?(new|trends?|trending|trend2025|best|hot|design|fashion|casual|partywear|party|wear|daily|rough|use|causal|longlife|unisex|artical|large|medium|size|unbreakable|nonbreakable|non-breakable|breable|non|branded|brand|luxury|and)$/i;

function titleCase(s) {
  return s.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

// Turn the messy pipe-delimited WordPress titles into a short display name.
// Rule: preserve source name in sourceName; derive displayName only from
// words that are objectively descriptive (material/shape/use-case/colour),
// dropping marketing filler and unverifiable brand claims.
const FILLER = /^(new|trends?|trending|trend ?2025|trend2025|best|hot design|design|fashion|casual|party ?wear|partywear|daily wear|daily and rough use|causal and daily( use)?|causal and daily wear|longlife|unisex artical|artical|for more details.*|unisex design|large size|medium size|unbreakable|branded|luxury)$/i;

function deriveDisplayName(sourceName, id) {
  let s = strip(sourceName);
  if (!s) return { display: 'Product ' + String(id).slice(-3), needsOwnerName: true };
  s = s.replace(BRAND_RE, '').replace(/\s{2,}/g, ' ').trim();
  if (/^prod-?\d+$/i.test(s.replace(/\s+/g, ''))) {
    return { display: 'Product ' + s.replace(/\D/g, '').padStart(3, '0'), needsOwnerName: true };
  }
  // Prod-00N placeholders
  if (/^prod-?\d+$/i.test(s.replace(/\s+/g, ''))) {
    return { display: 'Product ' + s.replace(/\D/g, '').padStart(3, '0'), needsOwnerName: true };
  }
  const parts = s.split('|').map(p => p.trim()).filter(Boolean)
    .map(p => p.split(/\s+/).filter(w => w && !FILLER_WORD.test(w)).join(' ').trim())
    .filter(p => !FILLER.test(p) && p.length > 1 && !/^\d+$/.test(p));
  let display = parts.length ? parts.slice(0, 3).join(' ') : (s || 'Product ' + id);
  display = display.replace(/\s*\.\.$/, '').replace(/[|,]+$/, '').trim();
  display = titleCase(display);
  // collapse degenerate results
  if (!display || display.length < 3) display = 'Product ' + String(id).slice(-3);
  return { display, needsOwnerName: false };
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const CAT_SLUG_MAP = {}; // id -> {slug,name,parent}
// we don't have the categories.json ids merged here; categories embedded per-product already have slug.

const usedSlugs = new Set();
function uniqueSlug(base, id) {
  let s = slugify(base) || 'product';
  if (!usedSlugs.has(s)) { usedSlugs.add(s); return s; }
  s = slugify(base + '-' + id);
  usedSlugs.add(s);
  return s;
}

const out = [];
const migrationLog = {
  total: raw.length,
  missingName: [],
  missingPrice: [],
  brandStripped: [],
  placeholderNames: [],
  zeroImages: [],
  categoriesRaw: {},
};

for (const p of raw) {
  const cats = (p.categories || []).map(c => ({ id: c.id, name: strip(c.name), slug: c.slug }));
  cats.forEach(c => { migrationLog.categoriesRaw[c.slug] = (migrationLog.categoriesRaw[c.slug] || 0) + 1; });

  const sourceName = strip(p.name);
  if (!sourceName) migrationLog.missingName.push(p.id);

  const { display, needsOwnerName } = deriveDisplayName(p.name, p.id);
  if (needsOwnerName) migrationLog.placeholderNames.push({ id: p.id, sourceName: sourceName || '(empty)' });
  if (BRAND_RE.test(sourceName)) migrationLog.brandStripped.push({ id: p.id, sourceName, display });
  BRAND_RE.lastIndex = 0;

  const price = p.prices && p.prices.price ? Number(p.prices.price) : null;
  const regular = p.prices && p.prices.regular_price ? Number(p.prices.regular_price) : null;
  const hasRealPrice = price && price > 0;
  if (!hasRealPrice) migrationLog.missingPrice.push(p.id);
  const compareAt = (hasRealPrice && regular && regular > price) ? regular : null;

  const images = (p.images || []).map(i => i.src).filter(Boolean);
  if (!images.length) migrationLog.zeroImages.push(p.id);

  // category slugs present for this product
  const slugs = cats.map(c => c.slug);
  const isSun = slugs.some(s => s.includes('sunglasses'));
  const isCL = slugs.includes('contact-lenses') || slugs.includes('magic-eye');
  const topType = isSun ? 'sunglasses' : isCL ? 'contact-lens' : 'eyeglasses';

  let gender = null;
  if (slugs.includes('kids') || slugs.includes('kids-sunglasses')) gender = 'kids';
  else if (slugs.includes('mens') || slugs.includes('mens-sunglasses')) gender = slugs.includes('womens') || slugs.includes('womens-sunglasses') ? 'unisex' : 'men';
  else if (slugs.includes('womens') || slugs.includes('womens-sunglasses')) gender = 'women';
  else if (!isCL) {
    // fall back to explicit gender words in the source title only
    if (/\bladies\b/i.test(sourceName)) gender = 'women';
    else if (/\bmen'?s\b|\bgents?\b/i.test(sourceName)) gender = 'men';
    else if (/\bkids\b/i.test(sourceName)) gender = 'kids';
  }

  // Source descriptions are WooCommerce marketing copy riddled with
  // unverifiable durability/UV/medical/percentage/guarantee claims and
  // brand-name fragments (see OWNER_VERIFICATION_REQUIRED.md). Regex
  // scrubbing left broken sentence fragments and still missed variants
  // (e.g. "Guuci"). Rather than publish mangled or partially-false copy,
  // PDPs show structured facts only (category/colour/attributes); no
  // freeform description is migrated from source.
  const description = null;
  const rawDescForLog = strip(p.short_description) || strip(p.description);
  if (rawDescForLog && !/^prod-?\d+$/i.test(rawDescForLog.replace(/\s+/g, ''))) {
    migrationLog.descriptionsOmitted = migrationLog.descriptionsOmitted || [];
    migrationLog.descriptionsOmitted.push({ id: p.id, name: display, sourceText: rawDescForLog });
  }

  const attrs = {};
  (p.attributes || []).forEach(a => {
    if (a.name && a.terms && a.terms.length) {
      attrs[a.name.toLowerCase()] = a.terms.map(t => t.name);
    }
  });

  const slug = uniqueSlug(display, p.id);

  // Skip products with neither a real name nor a real price — nothing to
  // safely sell a customer, and no display we could support. Logged, not
  // silently dropped.
  if (needsOwnerName && !hasRealPrice) {
    migrationLog.skipped = migrationLog.skipped || [];
    migrationLog.skipped.push({ id: p.id, sourceName: sourceName || '(empty)', reason: 'no product name and no price in source data — nothing publishable' });
    continue;
  }

  out.push({
    id: p.id,
    slug,
    sourceUrl: p.permalink,
    name: display,
    sourceName: sourceName || null,
    type: topType,
    category: cats.find(c => ['eyewear','sunglasses','contact-lenses'].includes(c.slug))?.name || cats[0]?.name || null,
    subcategory: cats.filter(c => !['eyewear','sunglasses','contact-lenses'].includes(c.slug)).map(c => c.name),
    categorySlugs: slugs,
    gender,
    price: hasRealPrice ? price : null,
    compareAtPrice: compareAt,
    currency: 'PKR',
    images,
    description,
    attributes: Object.keys(attrs).length ? attrs : null,
    isVariable: p.type !== 'simple',
    ownerReviewFields: [
      ...(needsOwnerName ? ['name'] : []),
      ...(!hasRealPrice ? ['price'] : []),
      ...(BRAND_RE.test(sourceName || '') ? ['brand-claim-removed'] : []),
    ],
  });
  BRAND_RE.lastIndex = 0;
}

fs.writeFileSync('./.crawl/catalogue-clean.json', JSON.stringify(out, null, 1));
fs.writeFileSync('./.crawl/migration-log.json', JSON.stringify(migrationLog, null, 1));

console.log('products processed:', out.length);
console.log('missing name:', migrationLog.missingName.length);
console.log('missing price:', migrationLog.missingPrice.length);
console.log('brand claims stripped:', migrationLog.brandStripped.length);
console.log('placeholder names:', migrationLog.placeholderNames.length);
console.log('zero images:', migrationLog.zeroImages.length);
console.log();
console.log('type distribution:', JSON.stringify(out.reduce((a,x)=>{a[x.type]=(a[x.type]||0)+1;return a},{})));
console.log('gender distribution:', JSON.stringify(out.reduce((a,x)=>{const k=x.gender||'unspecified';a[k]=(a[k]||0)+1;return a},{})));
