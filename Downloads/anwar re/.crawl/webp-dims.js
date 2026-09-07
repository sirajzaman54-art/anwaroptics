// Minimal WebP dimension reader (no deps) — reads RIFF/VP8/VP8L/VP8X headers.
const fs = require('fs');
const path = require('path');

function dims(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const fourcc = buf.toString('ascii', 12, 16);
  if (fourcc === 'VP8X') {
    const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
    const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
    return { w, h };
  }
  if (fourcc === 'VP8 ') {
    // simple lossy: dims at offset 26 (after 3-byte sync code 0x9d012a)
    const w = (buf.readUInt16LE(26)) & 0x3fff;
    const h = (buf.readUInt16LE(28)) & 0x3fff;
    return { w, h };
  }
  if (fourcc === 'VP8L') {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    const w = 1 + (((b1 & 0x3f) << 8) | b0);
    const h = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { w, h };
  }
  return null;
}

const dir = process.argv[2];
const out = {};
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.webp')) continue;
  const buf = Buffer.alloc(40);
  const fd = fs.openSync(path.join(dir, f), 'r');
  fs.readSync(fd, buf, 0, 40, 0);
  fs.closeSync(fd);
  const d = dims(buf);
  out[f] = d;
}
fs.writeFileSync(process.argv[3], JSON.stringify(out));
console.log('read', Object.keys(out).length, 'files;  failures:', Object.values(out).filter(v => !v).length);
