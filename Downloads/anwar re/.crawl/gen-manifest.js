const fs = require('fs');
const c = require('./catalogue-clean.json');
const manifest = [];
for (const p of c) {
  p.images.forEach((url, i) => {
    const ext = (url.split('.').pop().split('?')[0] || 'jpg').toLowerCase();
    const safeExt = ['jpg','jpeg','png','webp'].includes(ext) ? (ext === 'jpeg' ? 'jpg' : ext) : 'jpg';
    const localName = `${p.slug}-${i + 1}.${safeExt}`;
    manifest.push({ slug: p.slug, index: i, url, localName });
  });
}
fs.writeFileSync('./.crawl/image-manifest.json', JSON.stringify(manifest, null, 1));
console.log('manifest entries:', manifest.length);
