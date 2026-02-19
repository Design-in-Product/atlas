#!/bin/bash
DIR="dynamic-atlas-v8"
VERSION="${1:-8.1}"
OUT="dynamic-atlas-v${VERSION}-standalone.html"

cat << HEADER > "$OUT"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dynamic Atlas v${VERSION}: Historical Map Viewer</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
<style>
HEADER

cat "$DIR/styles.css" >> "$OUT"

cat << 'MID1' >> "$OUT"
</style>
</head>
<body>
MID1

# Extract body content from index.html (between <body> and <!-- External)
sed -n '/<div id="app"/,/<!-- External/p' "$DIR/index.html" | grep -v "<!-- External" >> "$OUT"

cat << 'MID2' >> "$OUT"
<!-- External dependencies -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
<script>
MID2

# Concatenate all JS data and logic
cat "$DIR/keyframes.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/transitions.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/religion-keyframes.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/trade-route-keyframes.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/language-keyframes.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/main.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/renderer.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/morphing.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/timeline.js" >> "$OUT"
echo "" >> "$OUT"
cat "$DIR/controls.js" >> "$OUT"

cat << 'FOOTER' >> "$OUT"
</script>
</body>
</html>
FOOTER

echo "Built: $OUT"
wc -c "$OUT"
wc -l "$OUT"
