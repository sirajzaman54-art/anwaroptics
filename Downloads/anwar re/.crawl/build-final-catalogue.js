const fs = require('fs');
const c = require('./catalogue-clean.json');
const dims = require('./dims-w1000.json');

const final = c.map(p => {
  const images = p.images.map((url, i) => {
    const ext = (url.split('.').pop().split('?')[0] || 'jpg').toLowerCase();
    const safeExt = ['jpg','jpeg','png','webp'].includes(ext) ? (ext === 'jpeg' ? 'jpg' : ext) : 'jpg';
    const stem = `${p.slug}-${i + 1}`;
    const d = dims[`${stem}.webp`] || { w: 1000, h: 1000 };
    return {
      src: `/migrated/w1000/${stem}.webp`,
      thumb: `/migrated/w480/${stem}.webp`,
      w: d.w, h: d.h,
    };
  });

  return {
    id: p.id,
    slug: p.slug,
    sourceUrl: p.sourceUrl,
    name: p.name,
    sourceName: p.sourceName,
    type: p.type,               // eyeglasses | sunglasses | contact-lens
    category: p.category,
    subcategory: p.subcategory,
    gender: p.gender,           // men | women | kids | unisex | null
    price: p.price,
    compareAtPrice: p.compareAtPrice,
    currency: p.currency,
    images,
    colour: (p.attributes && p.attributes.color) ? p.attributes.color[0] : null,
    colours: (p.attributes && p.attributes.color) ? p.attributes.color : null,
    attributes: p.attributes,
    description: p.description,
    ownerReviewFields: p.ownerReviewFields,
  };
});

fs.writeFileSync('./final-catalogue.json', JSON.stringify(final, null, 1));
console.log('final products:', final.length);
console.log('total images:', final.reduce((a, p) => a + p.images.length, 0));
