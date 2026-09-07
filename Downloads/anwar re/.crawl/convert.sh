#!/usr/bin/env bash
set -u
cd "$(dirname "$0")/.."
mkdir -p migrated/w1000 migrated/w480
n=0
for f in migrated/full/*; do
  base="$(basename "$f")"
  stem="${base%.*}"
  out1="migrated/w1000/${stem}.webp"
  out2="migrated/w480/${stem}.webp"
  if [ ! -s "$out1" ]; then
    npx --yes sharp-cli -i "$f" -o migrated/w1000 resize 1000 --withoutEnlargement -- --format webp --quality 82 >/dev/null 2>>.crawl/convert-errors.log
  fi
  if [ ! -s "$out2" ]; then
    npx --yes sharp-cli -i "$f" -o migrated/w480 resize 480 --withoutEnlargement -- --format webp --quality 78 >/dev/null 2>>.crawl/convert-errors.log
  fi
  n=$((n+1))
  if [ $((n % 20)) -eq 0 ]; then echo "converted $n/170"; fi
done
echo "done: $n"
