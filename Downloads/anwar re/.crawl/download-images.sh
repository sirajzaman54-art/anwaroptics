#!/usr/bin/env bash
set -u
cd "$(dirname "$0")/.."
mkdir -p migrated/full
node -e "console.log(require('./.crawl/image-manifest.json').map(m=>m.url+'\t'+m.localName).join('\n'))" > .crawl/dl-list.tsv

ok=0; fail=0
while IFS=$'\t' read -r url name; do
  [ -z "$url" ] && continue
  out="migrated/full/$name"
  if [ -s "$out" ]; then ok=$((ok+1)); continue; fi
  code=$(curl -s -L --max-time 40 -o "$out" -w '%{http_code}' "$url")
  if [ "$code" = "200" ] && [ -s "$out" ]; then
    ok=$((ok+1))
  else
    fail=$((fail+1))
    echo "FAIL $code  $url" >> .crawl/download-failures.log
    rm -f "$out"
  fi
done < .crawl/dl-list.tsv

echo "downloaded ok: $ok  failed: $fail"
