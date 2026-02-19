# UI Refactor Plan — Floating Panel + Full-Bleed Map

## Summary
Replace the fixed 260px sidebar with a slide-out panel. Map fills the entire viewport. Title floats over the map. Timeline stays fixed at bottom but gets more compact for mobile.

---

## Files Changed

### index.html — Structure
- **Remove** `<div id="sidebar">` entirely
- **Remove** `<div id="header">` bar
- **Add** floating title: `<div id="map-title">` positioned absolute over top-left of map
- **Add** `<div id="layers-panel">` as fixed-position overlay, containing:
  - Panel header with "Layers" title + close button (×)
  - All layer-group divs (political, religion, trade routes, modern borders) — moved here, IDs unchanged
  - All legend divs (political-legend, religion-legend, trade-legend) — moved here, IDs unchanged
- **Add** `<button id="layers-toggle">` — floating round button, bottom-left above timeline
- `#main` becomes just the map container
- All 21 existing element IDs preserved — just reparented in the DOM

### styles.css — Layout
- **Delete** all `#header`, `#sidebar` rules
- **`#app`**: stays `display: flex; flex-direction: column; height: 100vh`
- **`#main`**: `flex: 1; position: relative` (map fills all space between nothing and timeline)
- **`#map`**: `width: 100%; height: 100%`
- **`#map-title`**: `position: absolute; top: 12px; left: 12px; z-index: 500` — translucent dark background pill, small text, pointer-events: none
- **`#layers-panel`**:
  - `position: fixed; left: 0; top: 0; bottom: 0; width: 300px`
  - `transform: translateX(-100%)` (off-screen by default)
  - `transition: transform 0.3s ease`
  - `z-index: 1100` (above map, above Leaflet controls)
  - `overflow-y: auto; background: #16213e`
  - `box-shadow: 2px 0 12px rgba(0,0,0,0.5)` when open
- **`#layers-panel.open`**: `transform: translateX(0)`
- **`#layers-toggle`**:
  - `position: fixed; bottom: 100px; left: 16px`
  - `z-index: 1000`
  - Round 44px button, accent color (#e94560), white icon
  - `transition: opacity 0.2s`
- **`#layers-toggle.panel-open`**: `opacity: 0; pointer-events: none` (hidden when panel is open)
- **Timeline compact pass**:
  - Reduce padding (12px → 8px)
  - Smaller font on #date-display and #timeline-context for mobile
  - `@media (max-width: 768px)` — speed-select hidden or icon-only, date-display takes priority
  - `@media (max-height: 500px)` — landscape phone: timeline-top becomes single row, tighter

### controls.js — Panel Logic
Add at top (before existing event listeners):

```javascript
// Panel open/close
var layersPanel = document.getElementById('layers-panel');
var layersToggle = document.getElementById('layers-toggle');

function openLayersPanel() {
  layersPanel.classList.add('open');
  layersToggle.classList.add('panel-open');
}

function closeLayersPanel() {
  layersPanel.classList.remove('open');
  layersToggle.classList.remove('panel-open');
}

layersToggle.addEventListener('click', openLayersPanel);
document.getElementById('layers-panel-close').addEventListener('click', closeLayersPanel);
```

All existing checkbox/slider event listeners stay unchanged. They find elements by ID — doesn't matter that the elements moved in the DOM.

### Files NOT Changed
- main.js (map init, global state)
- renderer.js (polygon/religion/trade rendering, legends)
- morphing.js (geometry morphing)
- timeline.js (playback, slider)
- transitions.js, keyframes.js, religion-keyframes.js, trade-route-keyframes.js (data)

---

## UX Flow

**Default state**: Map fills viewport. Small translucent "DYNAMIC ATLAS" title in top-left corner. Timeline bar at bottom. Round layers button (⚙ or stacked-layers icon) floating bottom-left.

**User clicks layers button**: Panel slides in from left (300px). Button fades out. Panel shows all layer toggles, opacity sliders, and active legends.

**User clicks × or clicks outside panel**: Panel slides out. Button fades back in.

**Mobile landscape**: Timeline becomes more compact (smaller text, tighter padding). Panel works the same but is capped at ~85vw width.

---

## Risks / Things to Watch
- Leaflet's own zoom controls sit in top-left by default. The floating title should sit below them or we nudge Leaflet controls to top-right. (Leaflet has a `zoomControl` position option.)
- The `#legend-items` and `#religion-legend-items` containers are populated by renderer.js and morphing.js via `getElementById` — they work regardless of DOM position, no risk here.
- The standalone build script just concatenates files — HTML restructure doesn't affect it as long as the sed extraction pattern is updated to match the new body structure.

---

## Build script update
The `build-standalone.sh` extracts body content with a sed pattern. Will need to update the pattern to match the new HTML structure (no more `#sidebar`, new `#layers-panel` etc.). Minor change.
