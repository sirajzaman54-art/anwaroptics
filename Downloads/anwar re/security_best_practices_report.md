# Anwar Optical — Security Best Practices Report

**Stack:** Static HTML/CSS/vanilla JS, no backend, no framework, no build step. Hosted on Vercel as a static site with path rewrites only. No cookies, no auth, no server-side code.

## Executive Summary

The site has no server-side attack surface (no backend, no database, no auth) and was already built with several sound defaults: the order form's WhatsApp message uses `encodeURIComponent` correctly, navigation targets are always built from static `products.js` data (never attacker-controlled), and a prior pass already fixed a reflected-XSS bug in the search "no results" text across all three pages that have search. One real, evidence-based finding remains: cart line items are rendered via `innerHTML` from `localStorage`-sourced data without escaping, which is a stored-DOM-XSS pattern per the storage-as-untrusted-input rule (JS-STORAGE-001) even though today's actual data source is trusted. No Content-Security-Policy is deployed anywhere, which would provide useful defense-in-depth. Everything else audited (eval, document.write, postMessage, third-party script surface, DOM clobbering) is clean.

## Findings

### Finding 1 — Cart line items rendered via `innerHTML` without escaping (localStorage as untrusted input)
- **Rule ID:** JS-STORAGE-001 / JS-XSS-001 (combined)
- **Severity:** Low (Medium if any future bug ever lets attacker-controlled text reach `localStorage`)
- **Location:**
  - `anwar-optical-final.html:1350` (`renderCart`)
  - `product.html:414` (`renderCart`)
  - `catalogue.html:383` (`renderCart`)
  - `cart.html:152` (`render`)
  - `order.html:179` (`orderLines` build)
- **Evidence:** e.g. `cartItemsEl.innerHTML = cart.map(function(item, idx){ ... '<p class="ci-name">'+item.name+'</p><p class="ci-meta">'+item.kind+'</p>' ... }).join('');` — `item.name`/`item.kind`/`item.priceLabel` are read straight from `localStorage.getItem('anwarOptical.cart.v1')` and concatenated into an HTML string with no escaping.
- **Impact:** Today, every cart item is populated only from the static `products.js` catalogue or a fixed 3-value prescription-method radio, so there is no live way for an attacker to get arbitrary text into a cart item's `name`/`kind` field. But the spec's rule treats any `localStorage` value as untrusted input by definition: it survives across sessions, is writable by any script that ever runs on the origin (a future bug, a compromised dependency, a browser extension, or a user pasting attacker-supplied devtools code), and once such a value exists, it renders as live HTML the next time the cart drawer, `/cart`, or `/order` opens — a classic stored DOM XSS pattern, just currently missing its first stage.
- **Fix:** Escape `item.name`, `item.kind`, and `item.priceLabel` (and any other cart field rendered as text) before inserting into `innerHTML`, using the same `escHtml()` helper already added for search. This is a pure defense-in-depth hardening — it changes no visible behavior since these strings never contain markup today.
- **Mitigation if not fixed immediately:** None of the current code paths can trigger it, so it is safe to leave as a documented, low-priority item if preferred.
- **False positive notes:** Confirmed by tracing every path that writes to the `anwarOptical.cart.v1` key — `addToCart()`, `addConfiguredItemToCart()`, and the catalogue's `addToCartBySlug()` — all of them build `name`/`kind` from `products.js` or DOM `.card` text, never from a free-text input field. This is a real gap against the rule, not a live exploit today.

### Finding 2 — No Content-Security-Policy deployed anywhere
- **Rule ID:** JS-CSP-001
- **Severity:** Medium (defense-in-depth only; no known exploitable sink today)
- **Location:** No `<meta http-equiv="Content-Security-Policy">` in any page; no CSP header set in `vercel.json`.
- **Impact:** If any future change introduces a real DOM-XSS sink (or Finding 1 is ever combined with an injection point), there is currently no CSP to contain the blast radius.
- **Fix:** Add a baseline CSP via `<meta http-equiv="Content-Security-Policy">` (Vercel's static rewrites don't currently set custom response headers, so meta delivery is the practical option here) restricting `script-src` to `'self'` plus the Google Fonts stylesheet origin, and `img-src`/`connect-src` as needed. Not applied in this pass — it's a site-wide addition better done deliberately with its own QA pass across all 13 pages rather than folded into a security-only pass, since a misconfigured CSP can silently break functionality (e.g. inline `onerror=` fallback attributes used throughout for image fallbacks would need to move to `addEventListener`, which is itself a real, testable code change).
- **Mitigation:** Given the very small third-party surface (Google Fonts only, no analytics/tag managers/ad scripts), residual risk without CSP is low today.

## Compliant / No Finding

- **`eval` / `new Function` / string `setTimeout`:** none found anywhere in the codebase.
- **`document.write` / `document.writeln`:** none found.
- **Event-handler string injection (`setAttribute("on...")`):** none found; all handlers use `addEventListener`.
- **Navigation/URL sinks (`location.href =`, `location.assign`):** every usage traced to either a static `products.js` slug, a fixed `searchShortcuts`/`SCOPES` constant, or a same-origin relative path built from trusted data — never from a URL param, `postMessage`, or free-text field.
- **`postMessage`:** not used anywhere.
- **Reflected XSS in search:** the "No products found for ..." string (which echoes the raw typed query into `innerHTML`) was fixed in a prior phase across all three pages that have search, using an `escHtml()` helper backed by `textContent`. Verified live with a `<img src=x onerror=...>` payload — confirmed non-exploitable.
- **WhatsApp message construction:** all dynamic values passed to `wa.me` links go through `encodeURIComponent`; the `/order` page never includes the customer's street address or any prescription value in the URL.
- **Third-party script surface:** only Google Fonts stylesheets are loaded from a CDN; no third-party `<script src>` tags anywhere, so SRI is not applicable.
- **DOM clobbering:** no `window.<name> ||` / `document.<name> ||` config-fallback patterns found.
- **Secrets:** no API keys, tokens, or credentials anywhere in the static site (there is no backend to hold them).

## Recommended Next Steps

1. Apply the Finding 1 fix (escape cart-rendered fields) — small, safe, no behavior change.
2. Decide separately whether to invest in a site-wide CSP (Finding 2) as its own reviewed change, given it touches every page's inline `onerror` image-fallback pattern.
