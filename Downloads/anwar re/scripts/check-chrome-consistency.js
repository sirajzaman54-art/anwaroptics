#!/usr/bin/env node
/**
 * check-chrome-consistency.js
 *
 * This project has no shared header/footer/nav partial — every page carries its own
 * copy of the same chrome (design tokens, header, mobile nav, footer, cart drawer,
 * primary buttons). That duplication is what caused several real bugs this project
 * has already shipped and had to fix: a missing footer logo, a wrong top-bar color,
 * a new nav link landing on some pages but not others, and low-contrast CTA buttons.
 *
 * This script doesn't fix the duplication (that would mean a rewrite of every page).
 * It catches drift between the copies before a deploy, by diffing a fixed checklist
 * of "must be identical everywhere" rules/blocks against a canonical reference file.
 *
 * Usage:
 *   node scripts/check-chrome-consistency.js
 *   node scripts/check-chrome-consistency.js --verbose   (show full canonical text on failure)
 *
 * Exit code is 1 if any page has drifted, 0 if everything matches. Wire it into your
 * pre-deploy step (e.g. run it right before `npx vercel --prod --yes`) so drift is
 * caught before it ships, not after a user reports it.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CANONICAL_FILE = 'about.html';

// Pages that intentionally do NOT share the full chrome (e.g. a minimal legal page
// with its own header) are excluded rather than reported as broken.
const EXCLUDE = new Set(['privacy.html']);

// Each check extracts one named region via a regex (must have exactly one capture
// group covering the region to compare) and requires it to be byte-identical across
// every included page. Add a new entry here any time a new "must match everywhere"
// rule is introduced (e.g. a future footer column, a new shared button variant).
const CHECKS = [
  {
    name: 'design tokens (:root)',
    re: /:root\{([\s\S]*?)\}/,
  },
  {
    name: 'announce bar CSS',
    re: /(\.announce\{[^}]*\})/,
  },
  {
    name: 'primary CTA button CSS (.btn-o)',
    re: /(\.btn-o\{[^}]*\})/,
  },
  {
    name: 'primary CTA hover CSS (.btn-o:hover)',
    re: /(\.btn-o:hover\{[^}]*\})/,
  },
  {
    name: 'cart badge CSS (.cart-badge)',
    re: /(\.cart-badge\{[^}]*\})/,
  },
  {
    name: 'footer logo CSS (.foot-brand img)',
    re: /(\.foot-brand img\{[^}]*\})/,
  },
  {
    name: 'mobile search icon CSS (.msearch-btn)',
    re: /(\.msearch-btn\{[^}]*\})/,
  },
  {
    name: 'header block (<header>…</header>)',
    re: /(<header>[\s\S]*?<\/header>)/,
  },
  {
    name: 'mobile nav drawer (<div class="mnav-bd"…</div> wrapper open)',
    re: /(<div class="mnav-bd"[\s\S]*?<nav class="mnav-links"[^>]*>)/,
  },
  {
    name: 'footer block (<footer>…</footer>)',
    re: /(<footer>[\s\S]*?<\/footer>)/,
  },
];

function readFile(name) {
  return fs.readFileSync(path.join(ROOT, name), 'utf8');
}

function extract(content, re) {
  const m = content.match(re);
  return m ? m[1].trim() : null;
}

function firstDiffSnippet(a, b, context = 40) {
  let i = 0;
  const len = Math.min(a.length, b.length);
  while (i < len && a[i] === b[i]) i++;
  const start = Math.max(0, i - context);
  return {
    canonical: JSON.stringify(a.slice(start, i + context)),
    actual: JSON.stringify(b.slice(start, i + context)),
    at: i,
  };
}

function main() {
  const verbose = process.argv.includes('--verbose');
  const allFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
  const targets = allFiles.filter((f) => f !== CANONICAL_FILE && !EXCLUDE.has(f));

  if (!fs.existsSync(path.join(ROOT, CANONICAL_FILE))) {
    console.error(`Canonical file not found: ${CANONICAL_FILE}`);
    process.exit(2);
  }

  const canonicalSrc = readFile(CANONICAL_FILE);
  const canonicalBlocks = {};
  for (const check of CHECKS) {
    canonicalBlocks[check.name] = extract(canonicalSrc, check.re);
  }

  let failures = 0;
  let checkedFiles = 0;

  for (const file of targets) {
    const src = readFile(file);
    const fileFailures = [];

    for (const check of CHECKS) {
      const canonical = canonicalBlocks[check.name];
      if (canonical === null) continue; // canonical file itself doesn't have this block; skip
      const actual = extract(src, check.re);

      if (actual === null) {
        fileFailures.push({ check: check.name, kind: 'missing' });
        continue;
      }
      if (actual !== canonical) {
        fileFailures.push({ check: check.name, kind: 'diff', canonical, actual });
      }
    }

    checkedFiles++;
    if (fileFailures.length) {
      failures += fileFailures.length;
      console.log(`\n✗ ${file}`);
      for (const f of fileFailures) {
        if (f.kind === 'missing') {
          console.log(`  - ${f.check}: NOT FOUND on this page (may be intentional — verify)`);
        } else {
          console.log(`  - ${f.check}: differs from ${CANONICAL_FILE}`);
          if (verbose) {
            console.log(`      canonical: ${f.canonical.slice(0, 200)}${f.canonical.length > 200 ? '…' : ''}`);
            console.log(`      actual:    ${f.actual.slice(0, 200)}${f.actual.length > 200 ? '…' : ''}`);
          } else {
            const d = firstDiffSnippet(f.canonical, f.actual);
            console.log(`      first difference near char ${d.at}:`);
            console.log(`        canonical: …${d.canonical}…`);
            console.log(`        actual:    …${d.actual}…`);
          }
        }
      }
    }
  }

  console.log(`\nChecked ${checkedFiles} page(s) against ${CANONICAL_FILE} (${CHECKS.length} rules each).`);
  if (failures) {
    console.log(`${failures} drift issue(s) found. Run with --verbose to see full block text.\n`);
    process.exit(1);
  } else {
    console.log('No drift found — shared chrome is consistent across all pages.\n');
    process.exit(0);
  }
}

main();
