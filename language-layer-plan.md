# Language Layer — Design Sketch

## Overview

A "predominant language family" overlay, following the same pattern as the religion layer: hand-curated keyframes with polygon regions, translucent wash, independent toggle/opacity/legend.

## Language Categories

For 500 BCE – 1453 CE in the eastern Mediterranean / Middle East region, the major language families are:

| Category | Code | Color | Notes |
|----------|------|-------|-------|
| Greek | GREEK | #42A5F5 (blue) | Attic/Koine → Byzantine Greek. Dominant in Aegean, Anatolia coast, Alexandria |
| Latin / Romance | LATIN | #AB47BC (purple) | Latin as administrative/military language in western provinces → eventually replaced |
| Aramaic / Syriac | ARAM | #FFA726 (orange) | Lingua franca of the Near East from Achaemenid era through early Islamic period |
| Persian | PERS | #EC407A (pink) | Old Persian → Middle Persian (Pahlavi) → New Persian. Iranian plateau + expanding |
| Arabic | ARAB | #66BB6A (green) | Confined to Arabian peninsula pre-632, then rapidly spreads with Islam |
| Turkic | TURK | #FF7043 (deep orange) | Arrives with Seljuks (~1040s), dominant in Anatolia by 1200s |
| Celtic / Germanic | CELT_GERM | #8D6E63 (brown) | Western/northern Europe — present but mostly at edges of our BBOX |
| Coptic | COPT | #FFCA28 (amber) | Egyptian (Coptic phase) — Egypt until Arabic gradually replaces it |
| Hebrew | HEBR | #7E57C2 (deep purple) | Small region around Judaea, shifts to diaspora after 70 CE |
| Slavic | SLAV | #78909C (blue-grey) | Arrives in Balkans ~600s, expands through medieval period |

## Keyframe Strategy

~10 keyframes (like religion), snapping to major linguistic shifts:

1. **-500** — Greek in Aegean + colonies, Aramaic as Persian empire lingua franca, Old Persian in plateau, Celtic/Germanic in west, Coptic in Egypt, Hebrew in Judaea, Arabian in peninsula
2. **-200** — Koine Greek expands massively (Alexander's legacy), Aramaic persists in Levant/Mesopotamia, Latin growing in western Med
3. **50 CE** — Latin dominant in western Roman provinces, Koine Greek in eastern provinces, Aramaic still dominant in Levant/Mesopotamia rural areas, Coptic in Egypt
4. **300** — Peak bilingual Roman world: Latin west, Greek east. Aramaic/Syriac as Christian scholarly language. Persian in Sasanian empire.
5. **500** — Latin fragmenting in post-Roman west. Greek consolidated in Byzantine east. Slavic migration beginning.
6. **650** — Arabic begins explosive spread. Slavic established in Balkans. Persian holds in Iran.
7. **800** — Arabic dominant across North Africa, Levant, Mesopotamia, replacing Aramaic as daily language. Coptic declining. Persian renaissance beginning (New Persian written in Arabic script).
8. **1000** — Arabic solidified. Persian literary renaissance. Turkic languages arriving at eastern edge. Slavic fully established in Balkans.
9. **1100** — Turkic spreading into Anatolia (post-Manzikert). Greek retreating to western Anatolia coast and Constantinople hinterland.
10. **1350** — Ottoman Turkish dominant in Anatolia. Arabic holds in Levant/Egypt/Mesopotamia. Persian in Iran/Central Asia. Greek confined to Thrace + Aegean islands + pockets.

## Visual Design

- **Dotted borders** (different dash pattern from religion: `3, 5` vs religion's `6, 4`) — visually distinct
- **Labels**: small-caps style, slightly different from religion italic
- **Opacity default**: 0.15 (lighter than religion's 0.2, since this is a third overlay)
- **Legend**: uses `.legend-color` boxes like religion

## Integration Points

Same pattern as religion — 6 touch points:

1. **`language-keyframes.js`** — new data file with `LANGUAGE_KEYFRAMES` constant
2. **`main.js`** — add language state variables
3. **`renderer.js`** — add language rendering functions
4. **`timeline.js`** — sync language during playback
5. **`controls.js`** — language toggle/opacity handlers
6. **`index.html`** — checkbox, slider, script tag, legend div
7. **`styles.css`** — `.language-label` class
8. **`build-standalone.sh`** — add `language-keyframes.js` to concatenation

## Data Caveats

Language boundaries are inherently fuzzier than political borders. What we're showing is "predominant spoken language" — in reality, many regions were multilingual (Greek-speaking Egyptians, Aramaic-speaking Romans, etc.). The "unitary bloc" note in the roadmap applies strongly here. But as a first pass, showing the dominant language family in each region still tells a compelling story about cultural shifts.
