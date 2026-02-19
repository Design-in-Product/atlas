# Dynamic Atlas — Project Roadmap & Session Log

## What This Is

An interactive animated historical atlas showing empires rising and falling across the Old World, from the Mediterranean to East Asia (~500 BCE – 1453 CE). Multiple data layers: political empires, religion, trade routes, languages. A long-held personal project idea — pitched to Macromedia/Encarta circa 1992, now finally buildable. Creative hobby project, no deadline.

## Tech Stack

- **Leaflet.js 1.9** (CDN) for web map rendering
- **Cliopatria dataset** (Seshat Global History Databank) — 15,690 features, 206MB source
- **Python pipeline** (`process_cliopatria.py`) with shapely for geometry processing
- **Multi-file JS architecture** — works with `file://` protocol (no server needed)
- Also produces single-file standalone HTML for easy sharing

---

## Completed Versions

### V1 — Proof of Concept
- Hand-drawn polygons, 9 keyframes, single HTML file

### V2 — Real Data
- Cliopatria dataset integration, Python processing pipeline

### V3 — Terrain & Labels
- OpenTopoMap base (desaturated), entity labels, descriptions, zoom-responsive visibility

### V4 — Visual Polish
- Border strokes, 16 keyframes, speed recalibration, adjacency-aware color assignment

### V5 — Morphing Engine
- Vertex interpolation between keyframes, entity matching, split/merge handling
- CCW winding, bidirectional ring alignment, mid-transition inflation, easing

### V6 — Scale & Refactor (completed Feb 13, 2025)
- **29 keyframes** (up from 16), filling gaps around major transitions
- **Multi-file architecture**: index.html, styles.css, keyframes.js, transitions.js, morphing.js, renderer.js, timeline.js, controls.js, main.js
- Entity transition table for all 28 keyframe pairs
- Standalone HTML also produced (~873KB)

### V6.1 — Coastline-Aware Morphing (completed Feb 14, 2025)
- **Land mask**: 12 hand-defined water body polygons (Mediterranean, Black Sea, Caspian, etc.) — pre-computed coastline clipping in Python pipeline
- **Cross-fade fallback**: detection heuristic (bbox overlap < 25%, centroid displacement > 70%, split-type) triggers opacity cross-fade instead of geometric morph for hostile transitions
- **50% speed reduction**: 100 years/sec at 1x (was 200)
- Keyframe data reduced from 991KB to 830KB (water area removed)

### V7 — Multi-Layer Atlas (completed Feb 15, 2025)
- **Religion data layer**: 10 hand-curated keyframes, 6 categories (Polytheism, Zoroastrianism, Judaism, Christianity, Islam, pre-Islamic Arabian)
- Translucent wash overlay with dashed borders and italic labels — visually distinct from political layer
- **Trade routes layer**: 9 historical routes as polylines (new geometry type), with period-aware status (peak/active/minor) controlling line weight, opacity, and dash style
  - Silk Road, Royal Road, Incense Route, Mediterranean Sea Lanes, Egypt-Alexandria, Red Sea-India, Persian Gulf, Constantinople-Black Sea, Via Egnatia
- **Language layer**: 10 keyframes, 7 language families (Greek, Latin/Romance, Aramaic/Syriac, Persian, Arabic, Turkic, Celtic/Germanic/Slavic), coastline-aware polygons, dotted borders with small-caps labels
- Independent toggle and opacity slider per layer; labels tied to parent layer
- **Controls refactored**: replaced opacity-zero hack with proper add/remove; each layer has its own visibility boolean (`politicalVisible`, `religionVisible`, `tradeRoutesVisible`, `languageVisible`); morphing skips when political is off
- Legend sections per layer, each showing/hiding with its toggle
- Modern borders reference layer visually separated below historical layers
- UI refactor: slide-out panel, floating title pill, full-bleed map
- Standalone HTML: ~1MB

### V8 — Geographic Expansion (completed Feb 15–16, 2025)
- **East Asia**: China (Zhou → Ming), Korea (Goguryeo → Joseon), Japan (Yayoi → Muromachi) — 29 keyframes
- **India**: Maurya, Gupta, Chola, Delhi Sultanate, Vijayanagara — coastline-aware subcontinent polygons
- **Steppe powers**: Xiongnu, Göktürks, Mongol Empire, Chagatai, Golden Horde
- **Southeast Asia**: Khmer, Nanzhao, Sukhothai, Ayutthaya, Majapahit
- **Central Asia bridge**: 94 entities filling the Silk Road corridor (lng 50–80)
- **Africa**: 135 entities — West Africa (Nok, Songhai, Benin, Hausa), East Africa (Swahili, Kilwa, Ajuran), Southern Africa (Great Zimbabwe, Kongo, Luba), North/Saharan (Garamantes, Almohads → Marinid/Hafsid/Zayyanid)
- **Americas**: 132 entities — Mesoamerica (Olmec → Aztec), South America (Chavín → Inca), North America (Haudenosaunee)
- Color palettes per cultural region, fractal border roughness on inland edges
- Map viewport: center [25, 20], zoom 2 — shows full global coverage
- Total: 1077 features across 29 keyframes, standalone ~4MB

---

## Roadmap — Next Steps

### ~~UI Overhaul~~ ✓ (completed Feb 15, 2025)
Replaced fixed sidebar with slide-out panel. Full-bleed map, floating title pill, floating layers button, compact responsive timeline. All layer controls, opacity sliders, and legends inside the panel. CSS transform animation, Escape-to-close, mobile-responsive breakpoints.

### ~~Language Layer~~ ✓ (completed Feb 15, 2025)
10 hand-curated keyframes, 7 language families, coastline-aware polygons. Dotted borders with small-caps labels. Independent toggle and opacity.

### ~~V8: East Asia Expansion~~ ✓ (completed Feb 15, 2025)
Added East Asia (China, Korea, Japan), India, and SE Asia as a second political data region on the same map. 157 new features across 29 keyframes. Coastline-aware polygon rewrite. Fractal roughness on inland borders for organic look. Oversized-polygon technique for coastal entities (push vertices into ocean, let base map visually clip).

### ~~V8: Central Asia Bridge~~ ✓ (completed Feb 16, 2025)
Added 94 Central Asia entities across 29 keyframes, filling the Silk Road corridor (lng 50–80). Sogdiana, Bactria, Chorasmia, Massagetae, Kangju, Hephthalites, Western Turkic Khaganate, Samanid Empire, Karakhanid Khanate, Ghaznavid Empire, Kara-Khitan, and Timurid successor states. Earth-tone color palette (browns, sands, bronze). Total atlas now 896 features.

### ~~More Regions~~ ✓ (completed Feb 16, 2025)
All major world regions now covered for 500 BCE–1453 CE. See V8 and Session 10–11.

### ~~Overlay Layers for East Asia~~ ✓ (completed Feb 16, 2025)
All overlay layers now global. See v8.1–v8.3.

### Next: Series 9 — 1453–2026 CE Extension
See `series-9-scope.md` for full design. Phases:
- **9.1**: Political entities (Tier 1 + 2) for 23 new keyframes
- **9.2**: Religion layer — Reformation schisms, Safavid conversion, colonial Christianity
- **9.3**: Language layer — national consolidation, colonial spread, modern dynamics
- **9.4**: Trade routes — Age of Sail, industrial infrastructure, global mesh → fade
- **9.5**: Alliance overlay layer (new layer type)
- **9.6**: Tier system implementation (zoom-sensitive entity rendering)

### Future: Animation Refinement — "Spectacular" Phase
A dedicated effort to make every keyframe transition visually compelling, treating each one as a hand-crafted animation sequence. This goes beyond auto-matching and algorithmic morphing — it's the equivalent of hand-drawing each transition with careful attention to:
- **Geographic fidelity**: morphs that follow real geography (coastlines, rivers, mountain passes) rather than geometric interpolation through oceans
- **Historical narrative**: timing, sequencing, and emphasis that tells the story — a slow creeping expansion vs. a sudden conquest should *feel* different
- **Multi-ring choreography**: large empires with islands, exclaves, and non-contiguous territories morphing all their parts in coordinated motion
- **Absorption/fragmentation aesthetics**: when kingdoms get absorbed or empires fragment, the visual should convey the nature of the change (gradual assimilation vs. sudden collapse)
- **Per-transition tuning**: custom easing curves, duration, and staging per keyframe pair rather than one-size-fits-all
- **Layer choreography**: religion, language, and trade route layers responding to political changes with appropriate lag or lead
This is a long-term iterative process — potentially months of collaborative review, screenshot-by-screenshot. The goal is something that feels like a cinematic documentary rather than a database visualization.

### Future: Series 10 — 3000 BCE–500 BCE
Bronze Age, Iron Age, early civilizations. Well-documented but different data density.

### Future: Series 11 — Prehistory
Migration patterns, archaeological cultures, linguistic phylogenies, DNA evidence. Fundamentally different visualization (flow arrows, fuzzy zones rather than borders). See "Deep History" section below.

### Region Navigation
- **Region-focus buttons**: click to zoom to Eastern Med / East Asia / India
- **Switchable region views**: independent region data sets with their own center, zoom, year range
- Eventually both: expanding single map + ability to focus on a region

---

## Known Issues & Graceful Degradation

These are understood limitations that degrade gracefully rather than breaking things. Each one has a path to improvement when the time is right.

### 1. Incomplete Morphing Transitions
**What happens:** Many entities appear/vanish between keyframes without a transition entry. They fade in/out (cross-fade) instead of geometrically morphing.
**Why:** The transition table was always authored incrementally — the Med region has the best coverage, East Asia and Central Asia less so. Every new entity pair needs a hand-authored mapping.
**Graceful degradation:** The morphing engine already falls back to opacity cross-fade when no transition mapping exists, so nothing breaks — it just looks less smooth. Cross-fade is also the intentional fallback for "hostile" transitions (e.g., entity moving across the map).
**Fix path:** Incremental data authoring. Could also build a heuristic auto-matcher (closest centroid, name similarity) as a fallback before cross-fade.

### 2. Overlapping Polygon Edges
**What happens:** Where two hand-authored entities share a border, their polygons overlap by ~1°. With translucent fill, the overlap zone renders darker — a visible artifact.
**Why:** GIS-processed Mediterranean entities have no-gap/no-overlap adjacency (shapely clips them against each other). Hand-authored regions (East Asia, Central Asia, overlay layers) don't have this — neighboring polygons are authored independently.
**Graceful degradation:** The overlap is cosmetic. It's most visible where two entities of different colors share a long border. Short shared borders or same-color neighbors hide it.
**Fix path:** (a) Pre-process hand-authored polygons through the same shapely clipping pipeline. (b) Client-side polygon subtraction at render time. (c) Author shared borders more carefully with identical vertex coordinates. Option (a) is the correct long-term fix.

### 3. Coastline Fidelity Tiers
**What happens:** Mediterranean entities have pixel-perfect coastlines (GIS-clipped). East Asian and Central Asian entities use hand-traced coastlines with the oversized-polygon-into-ocean technique — close but not exact.
**Why:** The Med data went through the full Python/shapely pipeline with Natural Earth land mask. Hand-authored data skips this pipeline.
**Graceful degradation:** The oversized polygon technique works well enough that most coastlines look clipped by the base map. Only careful inspection reveals the difference. The fractal roughness on inland edges also helps mask the aesthetic gap.
**Fix path:** Extend the Python pipeline to accept hand-authored polygon JSON and clip against the same land mask. One-time batch process per region.

### 4. Hand-Authored Polygon Quality Variance
**What happens:** Mediterranean entities have complex, detailed polygons (50–200 vertices from GIS source data). Hand-authored entities have 8–25 vertices — adequate but less detailed.
**Why:** GIS data comes from digitized historical maps. Hand authoring is constrained by the time it takes to trace geographic features by coordinate.
**Graceful degradation:** The fractal roughness function (`roughenRing`) adds organic-looking jitter to long inland edges, partially closing the visual gap. Coastline-traced edges already have enough detail that roughness skips them (edges < 2° get no jitter).
**Fix path:** Could increase vertex counts for key entities over time. The GIS clipping pipeline (fix #3) would also add detail at coastlines automatically.

### 5. Transition Table Key Uniqueness
**What happens (fixed):** When entities from different regions share a name (e.g., "Ilkhanate" appearing in both Med and CA transitions), JavaScript object duplicate keys silently drop the first mapping.
**Status:** Fixed in Session 9 by removing redundant CA entries where the entity was already deduplicated during the merge step (only one entity per keyframe, so only one transition needed).
**Prevention:** When adding new region data, always run the duplicate-key checker (`find_conflicts.js`) before rebuilding.

---

### GIS Coastline Clipping for Hand-Authored Polygons
The Mediterranean political entities benefit from proper GIS clipping (shapely intersection with Natural Earth land polygons in the Python pipeline). Hand-authored entities (East Asia, overlays) currently use hand-traced or oversized-polygon approximations. Future improvement: extend `process_cliopatria.py` to accept hand-authored polygon JSON and clip against the same land mask. Alternatively, clip at render time in JavaScript using a coastline polygon.

### Finer Layer Detail
- **Religion splits**: Chalcedonian vs Miaphysite vs Church of the East (post-451 CE), Sunni vs Shia (post-680 CE), Latin vs Orthodox (post-1054 CE)
- **Longer layer catalog**: eventually a large catalog of possible layers with a limit on how many can be active simultaneously

### Longer Timescales
- Deeper past: Bronze Age, Neolithic — how far back do we go?
- Forward to the present day
- Requires more keyframe dates and possibly different data sources per era

### Deep History & Population Movements (Phase 3 — Aspirational)
Before the first states form, track population movement as understood from DNA and archaeological evidence. Instead of sharp-bordered polities, render directional flows and large fuzzy regions representing:
- **Neolithic expansions**: Near East farmers spreading into Europe, Bantu expansion across Africa
- **Earlier migrations**: Out-of-Africa waves, peopling of the Americas, Austronesian expansion across the Pacific
- **Proto-human populations**: Denisovans (East/Southeast Asia), Neanderthals (Europe/West Asia), archaic African lineages — the populations that remixed many times to form modern peoples
- **Visualization approach**: directional flow arrows or gradient "heat" regions rather than polygon borders; layer toggle to switch between political and population-movement views; possibly a separate timescale (tens of thousands of years vs. centuries)
- **Data sources**: ancient DNA studies (David Reich lab, etc.), archaeological site databases, linguistic phylogenies for more recent expansions
- The existing layer architecture (independent toggle + opacity) already supports this — the main challenge is the data authoring and the very different timescale

### Dynamic Viewport
- Resizable/scrollable map window
- User can center on any region and watch that view
- Example: center on the Silk Road corridor, watch empires shift around it

### Smart Defaults
- Suggested "interesting base maps and time periods" — curated entry points
- Centered on user's location as best we can tell, with full timescale ready
- Reduce the cold-start "what am I looking at?" problem

### LLM Narrative (Ambitious)
- Contextual descriptions responding to what's on screen
- Explain *why* borders changed at each transition
- Different kind of effort — powerful but separate from the atlas engine

### Predictive Future Flows (Ambitious)
- Speculative algorithm to generate possible future territorial/cultural shifts
- Fun thought experiment, not meant to be academically rigorous

---

## Design Notes & Future Ideas

### On the "Unitary Bloc" Simplification (noted Feb 14, 2025)

Currently both the political and religion layers treat each zone as a unitary bloc — one dominant/ruling entity fills the polygon. This is the right starting model but it's a simplification that hides some of the most interesting historical dynamics.

**Future possibility: layered cultural depth.** Rather than one color per region, show the interaction between a ruling layer and the underlying substrate. Three patterns recur throughout history:

1. **Full absorption** — the incoming culture replaces what was there. Celtic languages disappearing from eastern England after Anglo-Saxon settlement. The substrate is gone.

2. **Ruling tide that recedes** — a conquering culture dominates for a period but the underlying culture reasserts. Norman French ruling England but eventually giving way to Middle English. The Mongol Ilkhanate converting to Islam within a generation. The ruling layer washes away; the substrate persists.

3. **Merger / assimilation** — two cultures blend into something new. The Bulgars (Turkic) becoming primarily Slavic. The Rus absorbing into Slavic culture. Basil II "reconquering" Bulgaria but actually governing a complex mix of Greek-speaking Orthodox Romans, Slavs, Vlachs, and Slavicized Bulgars.

Visualizing this would require a fundamentally different rendering model — perhaps a foreground/background layer within each zone, or a "cultural substrate" that persists under changing political/religious tides. This is ambitious and probably belongs after the basic multi-layer system is solid, but it's the direction that would make this project genuinely novel.

This also connects to the language layer idea — language spread and recession is one of the clearest ways to see these dynamics play out.

---

## Session Log

### Session 1 (Feb 12, 2025)
- V1 through V4 built iteratively
- Established Cliopatria pipeline, color system, base map

### Session 2 (Feb 12–13, 2025)
- V5 morphing engine — vertex interpolation, split/merge handling
- Multiple iterations on winding, alignment, easing

### Session 3 (Feb 13, 2025)
- V6: expanded to 29 keyframes, multi-file refactor
- Entity transition table for all pairs
- Script load-order bug found and fixed

### Session 4 (Feb 14, 2025)
- V6.1: coastline clipping (land mask from hand-defined water polygons)
- Cross-fade fallback for hostile transitions
- Speed reduction (50%)
- "We cracked the code!" moment

### Session 5 (Feb 15, 2025)
- Roadmap formalized and saved as persistent document
- Religion layer designed, built, and integrated as v7
  - 10 hand-curated keyframes with 6 categories, ~80 polygons total
  - Python polygon generator with shapely union/simplify, verified against 10 test cities
  - Translucent wash overlay with dashed borders and italic labels
  - Independent toggle and opacity per layer
  - Labels tied to parent layer checkbox (removed standalone labels toggle)
  - v6.1 cross-fade morphing engine restored (had regressed to v6 during rebuild)
- Trade routes layer added: 9 routes as polylines, period-aware status (peak/active/minor)
- Controls refactored: replaced labelsVisible/opacity-zero hack with proper politicalVisible + add/remove pattern; morphing skips when political is off; legends toggle with their parent layer
- Modern borders reference layer separated visually from historical layers
- "Unitary bloc" simplification noted for future — cultural substrate / ruling tide model as long-term aspiration
- Roadmap expanded with full phase list through LLM narrative and speculative futures

### Session 6 (Feb 15, 2025)
- UI refactor: replaced sidebar with slide-out panel, full-bleed map
  - Floating translucent title pill, floating layers button with SVG icon
  - CSS transform animation for panel slide, Escape key close
  - Responsive breakpoints for mobile portrait (600px) and landscape phones (500px height)
  - All 21 element IDs preserved — zero changes to rendering/data/morphing code
- Began language layer work

### Session 7 (Feb 15, 2025)
- Language layer completed: 10 keyframes, 7 families, coastline-aware polygons
  - Coastline rewrite after user reported geometric shapes not following geography
  - Romance language area now properly covers Iberia at 1350 CE
- Fixed Etruscan/Carthage color collision (both purple → Etruscan now terracotta #C0392B)

### Session 8 (Feb 15, 2025)
- V8: East Asia expansion — 157 new political entities across 29 keyframes
  - Chinese dynasties, Korean kingdoms, Japanese states, Indian empires, steppe powers, SE Asian kingdoms
  - Entity transitions for all 28 keyframe pairs updated
  - Color palette: reds (China), indigo (Japan), jade (Korea), saffron (India), gray-brown (steppe), teal (SE Asia)
- Coastline-awareness pass for East Asian entities (China coast, Japan archipelago, Korean peninsula, Indian subcontinent)
- Indian subcontinent polygons rewritten twice to properly trace coastline
- Fractal border roughness added: seeded jitter on inland edges >2° for organic look
- Map viewport widened to show both civilizational poles
- Discussed GIS clipping vs. hand-tracing vs. oversized-polygon approaches for coastline fidelity

### Session 9 (Feb 16, 2025)
- Central Asia bridge region: 94 new entities across 29 keyframes
  - Fills the Silk Road corridor (lng 50–80): Sogdiana, Bactria, Chorasmia, Massagetae, Kangju, Hephthalites, Western Turkic Khaganate, Samanid Empire, Karakhanid Khanate, Ghaznavid Empire, Kara-Khitan, Timurid successors
  - Earth-tone color palette distinct from Med and East Asia
  - Sogdiana appears in nearly every keyframe — the Silk Road's most persistent feature
- Fixed duplicate transition keys (Greco-Bactrian, Ilkhanate, Chagatai Khanate) that broke morphing
- Diagnosed morphing gaps: many entities across ALL regions lack transition entries — cross-fade fallback handles this gracefully
- Diagnosed overlapping polygon edges: hand-authored regions lack GIS adjacency clipping — cosmetic darkening at shared borders
- Added "Known Issues & Graceful Degradation" section to roadmap
- Total atlas: 896 features, 3 regions, ~4MB standalone

### Session 10 (Feb 15, 2025)
- **Med-CA overlap fix**: Capped 8 big Mediterranean empires (Achaemenid, Macedonian, Parthian, Sasanian, Umayyad, Abbasid, Seljuk Dynasty, Great Seljuk) at ~66° longitude where Central Asia entities provide coverage
- **Straight wall elimination**: 177 vertices pinned at exact lng 66 given sinusoidal wobble (`66 + sin(lat*2.5)*0.8 + cos(lat*1.3)*0.4`)
- **Mongol color separation**: Ilkhanate → deep purple, Chagatai → forest green, Golden Horde eastern → burnt orange, plus Jalayirid/Kartids/Muzaffarids/Sarbadars/Germiyanids
- **East Asia coastline regression fix**: Merge process had replaced detailed coastal polygons with simplified blobs; restored 161 entities from original east-asia-entities.js source
- **Africa integration**: 135 new entities across 29 keyframes (West, East, Southern, North/Saharan Africa)
  - Africa color separation: 60 entity instances recolored (Kilwa/Ajuran/Swahili blues, Zimbabwe/Kongo greens, Songhai/Jolof golds, Marinid/Hafsid/Zayyanid)
  - Transitions authored for kingdom successions (Kush splits, Almohad fragments, etc.)
- **Americas integration**: 132 new entities across 29 keyframes
  - Mesoamerica (Olmec → Aztec), South America (Chavín → Inca), North America (Haudenosaunee)
  - Transitions for civilization successions
- **Global viewport**: Recentered map to [25, 20] at zoom 2 (was [32, 70] at zoom 3) to show Americas through East Asia
- **Roadmap**: Added "Deep History & Population Movements" aspirational phase (pre-state DNA/archaeological population tracking, proto-human populations)
- Total atlas: 1077 features, 5 regions, ~4MB standalone

### Session 11 (Feb 16, 2025 — continuing from Session 10 context)
- **Americas coastline clipping**: 138 entities replaced with coastline-aware polygons
- **Mound Builders**: 17 new entities (Hopewell + Mississippian/Cahokia)
- **Ancestral Puebloans**: 25 new entities (Basketmaker → Chaco → Mesa Verde → Rio Grande)
- **Systematic color separation**: Perceptual distance audit tool + region-based palettes across all 1000+ entities
- **Deduplication**: Removed 8 duplicate entities (Marinid, Zayyanid, Almohad, Idrisid, Aghlabid)
- **Swahili coast clipping**: 23 coastal entities narrowed to realistic coastline strips
- **Map wrapping fix**: maxBounds + maxBoundsViscosity to prevent infinite tiling
- **SE Asia integration**: 99 new entities (Funan → Khmer, Champa, Srivijaya, Pagan, Dai Viet, Sukhothai, Ayutthaya, Majapahit, etc.)
- **v8.1 — Global trade routes**: Expanded from 7 Med-focused to 20 global routes per keyframe (Silk Road eastern extension, Trans-Saharan, Indian Ocean, Spice Route, South China Sea, Swahili coast, Amber Road, Varangian, Hanseatic, Mesoamerican, Andean, Grand Canal)
- **v8.1.1 — Trade route fixes**: Silk Road alignment (17 waypoints through Samarkand → Kashgar → Tarim Basin → Dunhuang → Xi'an), maritime route color differentiation
- **v8.2 — Global religion layer**: Expanded from 10 Med-only keyframes to 29 global keyframes, 12-17 traditions each (added Hinduism, Buddhism, Jainism, Confucianism/Daoism, Shinto, Tengrism, African Traditional, Mesoamerican, Andean, Manichaeism, Tibetan Buddhism; tracked Buddhist spread through Central Asia/China/Japan/SE Asia, Islamic expansion, Catholic/Orthodox schism)
- **v8.3 — Global language layer**: Expanded from 10 Med-only keyframes to 29 global keyframes, 25-32 language families each (added Sino-Tibetan, Dravidian, Indo-Aryan, Austronesian, Austroasiatic, Tai-Kadai, Japonic, Koreanic, Turkic, Mongolic, Uralic, Niger-Congo, Bantu, Nilo-Saharan, Cushitic, Khoisan, Uto-Aztecan, Mayan, Quechuan, Algonquian, Na-Dené, Tupian; tracked Bantu expansion, Latin→Romance fragmentation, Arabic spread, Turkic migrations, Tai southward migration)
- **Versioning scheme**: v8.1 (trade routes), v8.1.x (iterations), v8.2 (religion), v8.3 (language)
- Total atlas: 1210 political features, 4 overlay layers, ~6.3MB standalone

### Session 12 (Feb 16, 2025)
- **v8.3.2 — Language layer African fix**: Recolored African languages (Niger-Congo → deep orange, Bantu → golden yellow, Nilo-Saharan → purple, Cushitic → teal; was all browns). Coastline-aware African shapes. Khoisan restored for all post-476 keyframes (had been dropped). Romance zone fixed (pre-differentiation was a broken single ring → clean multi-polygon). Spanish self-intersecting polygon (34 pts) → clean 20-point shape.
- **v8.3.3 — European color contrast + shape fixes**: Romance languages → warm reds/oranges (French red, Spanish amber, Portuguese deep orange, Italian rose). Germanic → blues. Slavic → greens (later: Russian stays green, Polish → indigo, South Slavic → blue-grey). Arabic broken single ring → proper 4-ring multi-polygon (Arabia, Levant, Egypt, Maghreb). Turkic → 2-ring multi-polygon (Anatolia, steppe). Greek, Italian boot cleaned up. Arabic recolored from green (#66BB6A) to dark goldenrod (#B8860B). Moroccan coastline fixed (Maghreb ring had swung into Atlantic).
- **v8.3.3.1 — Version label**: Added version number display to title bar. Final polish build for 500 BCE–1453 CE period.
- **Series 9 scoping**: Full design document for 1453–2026 CE extension. 23 keyframe years identified. Tiered entity system (Tier 1 empires/blocs always visible, Tier 2 states/colonies at medium zoom, Tier 3 deferred). Color family system for colonial empires. Religion layer: schism tracking (Protestant Reformation, Sunni/Shia, Safavid conversion). Language layer: vernacular ground truth (colonial languages don't replace substrate). Trade routes: Age of Sail → industrial infrastructure → global mesh → ubiquity fade. Alliance overlay as new layer type.
- See `series-9-scope.md` for full design document

### Session 13 (Feb 17, 2025)
- **Transition auto-matcher**: Built geographic proximity + name similarity scoring system. Matched 128 new transitions automatically, audited and removed ~15 bad matches (cross-region false positives), hand-authored ~60 more for absorption patterns (kingdoms absorbed by Rome, Mongol conquests, Timurid expansion, etc.). Validated all targets against actual keyframe data (removed 38 with invalid target names). Coverage: 332 → 490 mappings, 99% of vanishing entities now mapped (6 legitimate fade-outs remain).
- **v8.3.4 — Cross-fade threshold fix**: Loosened shouldCrossFade from 25% overlap/0.7 displacement to 2% overlap/1.5 displacement. Morphing ratio improved from 79% to 97% (36 cross-fades down from 233). Transition durations increased 50% (900/1200/1500ms). Version number visibility fixed (#555 → #8899bb).
- **v8.3.5 — Animation playback bug**: Found root cause of missing animation — `playAnimation()` running at 60fps was advancing the year counter during morphs, causing `isTransitioning` guard to skip almost every transition and snap to the next keyframe. Only the last transition ever completed. Fix: year counter freezes while morph is in progress. Also: "Byzantine Empire" renamed to "East Roman Empire" throughout all data files (63 replacements). Khazaria recolored from light purple (#AF7AC5, too close to East Roman #8E44AD) to goldenrod (#DAA520). Frankish successor states recolored from purples/lavenders to steel blue/tan/olive.
- **v8.3.6 — Morph priority fix**: Rewrote `prepareMorph` to process same-name matches FIRST, before mapped transitions. Previously, when multiple entities mapped TO an existing entity (e.g., Numidia/Carthage → "Roman Republic"), the target would get claimed, blocking Rome's own same-name morph — Rome would shrink to a point and re-grow. Now: same-name entities always morph smoothly; absorbed entities shrink toward the absorber's centroid. Also removed polygon inflation effect (3% mid-morph pulsing) that caused visible throbbing artifacts on large empires.
- **Rome coastline gap identified**: Southern Italy, Sicily, Sardinia, and nearby African coast show persistent "dead spots" where Rome and successors never fill. Likely a gap in the hand-authored polygon data rather than a rendering bug. To be investigated.

---

## Key Files

| File | Description |
|------|-------------|
| `process_cliopatria.py` | Python pipeline — reads Cliopatria, generates keyframes with land clipping |
| `dynamic-atlas-v8/index.html` | Main entry point (multi-file version) |
| `dynamic-atlas-v8/keyframes.js` | 29 political keyframes, 5 regions (~4MB, 1077 features) |
| `dynamic-atlas-v8/transitions.js` | Entity transition mappings for 28 pairs (all five regions) |
| `dynamic-atlas-v8/morphing.js` | Morph engine with cross-fade detection (~595 lines) |
| `dynamic-atlas-v8/renderer.js` | All layer rendering + labels + fractal roughness |
| `dynamic-atlas-v8/religion-keyframes.js` | 29 religion keyframes, 52 traditions globally (~600KB) |
| `dynamic-atlas-v8/trade-route-keyframes.js` | 30 trade route keyframes, 23 routes globally (~460KB) |
| `dynamic-atlas-v8/language-keyframes.js` | 29 language keyframes, 63 language groups globally (~580KB) |
| `dynamic-atlas-v8/se-asia-entities.js` | Source data for SE Asian entities (used in merge) |
| `dynamic-atlas-v8/east-asia-entities.js` | Source data for East Asian entities (used in merge) |
| `dynamic-atlas-v8/central-asia-entities.js` | Source data for Central Asian entities (used in merge) |
| `dynamic-atlas-v8/africa-entities.js` | Source data for African entities (used in merge) |
| `dynamic-atlas-v8/americas-entities.js` | Source data for Americas entities (used in merge) |
| `dynamic-atlas-v8/timeline.js` | Playback controls, speed, slider |
| `dynamic-atlas-v8/controls.js` | Layer toggles, opacity, initialization |
| `dynamic-atlas-v8/main.js` | Map init, tile layers, global state |
| `dynamic-atlas-v8/styles.css` | All CSS |
| `dynamic-atlas-v8.3-standalone.html` | Single-file version (~6.3MB) |
| `dynamic-atlas-v7/` | Previous version (Eastern Med only, preserved) |
| `build-standalone.sh` | Script to concatenate multi-file into standalone |
