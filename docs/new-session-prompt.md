# New Session Prompt for Weather Repo

Use this as the opening prompt when starting a new Claude Code session connected to `Design-in-Product/weather`.

---

## Prompt

> **Context:** This repo is a Palo Alto rain season tracker, migrated from Design-in-Product/atlas.
>
> **What's in the repo:**
> - `noaa_rainfall.py` — Python script (stdlib only, no pip deps) that fetches daily precipitation from the NOAA NCEI public API (no token needed). Supports console reports, JSON, CSV, email via macOS Keychain SMTP, and `--site-json` for writing a data file used by the visualizations.
> - `data/rainfall.json` — date-to-inches map for the 2025-26 rain season, updated daily by GitHub Actions.
> - `.github/workflows/rainfall.yml` — runs `python noaa_rainfall.py --site-json data/rainfall.json` daily at 8am PT, auto-commits if data changed.
> - `sketches/index.html` — gallery page linking to 8 standalone data viz sketches.
> - `sketches/1_calendar_heatmap.html` through `sketches/8_rain_in_objects.html` — each is a self-contained HTML file (no build tools, no external deps beyond D3 CDN where needed) that loads `../data/rainfall.json` and renders one visualization.
> - `docs/ROADMAP.md` — full project roadmap with v1 and v2 plans.
> - `docs/session-log-2026-03-15.md` — log of our first working session.
>
> **Design principles:**
> - **Gall's Law**: get something simple working before overcomplicating. Extend one dimension at a time. Always keep things working.
> - Each sketch = one self-contained HTML file. No build tools, no frameworks.
> - All sketches load data from `../data/rainfall.json` (relative path).
> - Consistent design language: monospace typography, cyan accent (`#0891b2` light / `#34c6c6` dark), dark mode via `?dark` query param.
> - Mobile-responsive layouts.
> - Python uses only stdlib (no pip dependencies).
>
> **Where we left off:** We just migrated from atlas to this repo. All code and data are in place. The roadmap is documented. Please read `docs/ROADMAP.md` to see the full plan.
>
> **What I'd like to work on:** [describe your next task — e.g., "build the landing page (roadmap item #1)" or "let's start on the station picker"]
>
> **Working style:** Please create a session log in `docs/` for each session (named `session-log-YYYY-MM-DD.md`) to capture what we do and any decisions made. Update `docs/ROADMAP.md` if we complete items or the plan evolves.

---

## Setup checklist (on your Mac, before starting the new session)

1. **Migrate files from atlas** (if not already done):
   ```bash
   git clone --branch claude/noaa-rainfall-tracker-LDHOd --depth 1 \
     https://github.com/Design-in-Product/atlas.git /tmp/atlas-rain

   cd ~/Development/weather
   cp /tmp/atlas-rain/weather/noaa_rainfall.py .
   mkdir -p data sketches docs .github/workflows
   cp /tmp/atlas-rain/weather/data/rainfall.json data/
   cp /tmp/atlas-rain/weather/sketches/*.html sketches/
   cp /tmp/atlas-rain/docs/ROADMAP.md docs/
   cp /tmp/atlas-rain/docs/session-log-2026-03-15.md docs/
   cp /tmp/atlas-rain/docs/README-for-weather-repo.md ./README.md
   rm -rf /tmp/atlas-rain
   ```

2. **Create the corrected workflow file** (`.github/workflows/rainfall.yml`):
   The version in atlas has `weather/` path prefixes that need to be removed.
   Use the corrected version from our session (paths: `python noaa_rainfall.py --site-json data/rainfall.json`, `git diff --quiet data/rainfall.json`, `git add data/rainfall.json`).

3. **Commit and push:**
   ```bash
   cd ~/Development/weather
   git add -A
   git commit -m "Initial commit: NOAA rainfall tracker with 8 visualization sketches"
   git push
   ```

4. **Start a new Claude Code session** on `Design-in-Product/weather` and paste the prompt above.
