# Weather Project Roadmap

## Design philosophy

**Gall's Law**: get something simple working before overcomplicating it. Extend one dimension at a time. Always keep things working. Lather, rinse, repeat.

---

## v1 — Rainfall tracker

### Done
- [x] `noaa_rainfall.py` — NOAA NCEI fetcher (no API key), console/JSON/CSV/email output
- [x] macOS Keychain credential storage for SMTP email
- [x] Station fallback chain: San Jose Airport → Redwood City → SFO
- [x] `--debug` flag, `--station` flag, `--site-json` output for visualizations
- [x] 8 "crazy eights" data visualization sketches (single-file HTML, no build tools)
- [x] Light/dark mode + mobile optimization across all sketches
- [x] `data/rainfall.json` shared data layer + GitHub Actions daily auto-update
- [x] Gallery index page (`sketches/index.html`)

### Next up

#### 1. Landing page
A single page you can visit any day to see the most current, most interesting summary of the rain season. The "front door" to the project — not a gallery of sketches, but the thing you'd actually check every morning.

#### 2. Station picker (GUI for the CLI)
- Visual equivalent of the `--station` flag as a pull-down menu
- Start simple: offer the 3 stations already in the fallback list
- Later: location-aware nearby-station discovery if the list grows large
- First step toward "a GUI for the CLI"

#### 3. Blended estimate / custom interpolation
- Palo Alto has no active station — all data is a proxy
- Working mental model: "PA rainfall ≈ 2/3 San Jose + 1/3 Redwood City"
- Start with a simple fixed weighted average, show the math
- Then let users see and tweak the formula (sliders, presets)
- Eventually: principled spatial interpolation (inverse-distance weighting, kriging, etc.)

#### 4. Email / SMS notifications
- Email infrastructure exists (Keychain SMTP, `--email` flag) but isn't wired into the Action
- Design question: what's worth notifying about?
  - Rain today / rain expected
  - Drought streak broken
  - Season milestone (e.g., passed 50% of normal)
  - Weekly recap
- SMS via Twilio or email-to-SMS gateways

#### 5. Retrospective analysis
- Historical patterns, trends, year-over-year comparisons
- This is extensive site functionality — build and prove it with rainfall before adding new data types
- Builds on the landing page + station picker foundation

### Someday / maybe (v1)
- GitHub Pages hosting for the sketches
- Multi-city support (generalize the station/location model)
- End-of-season "year in review" report or visualization

---

## v2 — Daily high/low temperature

Extend the same architecture to temperature readings (TMAX/TMIN from the same NOAA NCEI stations).

- Probably *not* on the rain-year (Oct–Sep) calendar — temperature has its own natural cycles
- Focus on retrospective patterns, trends, YoY comparisons
- **Key principle**: the retrospective/comparison features get built and proven with rainfall first (v1.5), then generalized to temperature. Don't introduce a new core data type before the analytical tools are solid.
- Data source: same NOAA NCEI API, same stations — just different `dataTypes` (TMAX, TMIN)

---

## Notes on working style
- Each sketch/page is a single self-contained HTML file (no build tools, no frameworks beyond D3 via CDN where needed)
- All sketches load data from `../data/rainfall.json` (relative path)
- Consistent design language: monospace typography, cyan accent (`#0891b2` light / `#34c6c6` dark), dark mode via `?dark` param
- Mobile-responsive layouts
- Python script uses only the standard library (no pip dependencies)
