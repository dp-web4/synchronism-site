#!/bin/sh
SRC=/home/dp/ai-workspace/Synchronism/forum/lv
OUT=/home/dp/ai-workspace/synchronism-site/explorer/.scratch_lv
mkdir -p "$OUT"
for f in "$SRC"/*.pdf; do b=$(basename "$f" .pdf); pdftotext -layout "$f" "$OUT/$b.txt"; done
wc -l "$OUT"/*.txt
# whitepaper as LV saw it (Synchronism 3c12edbf, 2026-01-19), sections per target
git -C /home/dp/ai-workspace/Synchronism show 3c12edbf:whitepaper/build/Synchronism_Whitepaper_Complete.md > "$OUT/wp_20260119.md"
sed -n 1548,1925p "$OUT/wp_20260119.md" > "$OUT/ctx_T1.md"
sed -n 5157,5300p "$OUT/wp_20260119.md" | awk '/^## 5.21/{exit}1' >> "$OUT/ctx_T1.md"
sed -n 1926,2167p "$OUT/wp_20260119.md" > "$OUT/ctx_T2.md"
sed -n 2665,3064p "$OUT/wp_20260119.md" > "$OUT/ctx_T3.md"
