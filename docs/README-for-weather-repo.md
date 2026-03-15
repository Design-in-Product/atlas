# NOAA Weather Tracker — Palo Alto

Fetches daily precipitation data from the **NOAA NCEI public API** (no API key needed) for the current rain season (Oct 1 – present) and generates a report. Includes 8 data visualization sketches updated automatically by GitHub Actions.

## Quick start

```bash
# No dependencies beyond Python 3.10+ standard library
python noaa_rainfall.py
```

## Output formats

```bash
python noaa_rainfall.py           # Pretty-printed console report
python noaa_rainfall.py --json    # Raw JSON
python noaa_rainfall.py --csv     # CSV (pipeable)
```

## Visualization sketches

Open `sketches/index.html` in a browser to see all 8 data visualizations. Each loads live data from `data/rainfall.json`.

The GitHub Actions workflow (`rainfall.yml`) updates `data/rainfall.json` daily at 8 AM Pacific.

## Email updates

Credentials are stored in your **macOS Keychain** — nothing is saved in plaintext.

```bash
# 1. One-time setup (interactive, saves to Keychain)
python noaa_rainfall.py --setup-email

# 2. Send a report
python noaa_rainfall.py --email you@gmail.com
```

For Gmail, use an [App Password](https://myaccount.google.com/apppasswords) (not your main password).

Credentials are stored under the Keychain service `noaa-rainfall-tracker`. You can view/delete them in Keychain Access.app or via `security delete-generic-password -s noaa-rainfall-tracker -a smtp_pass`.

**Non-macOS fallback**: set `SMTP_USER` and `SMTP_PASS` environment variables.

## Automate with cron

Send yourself a weekly update every Monday at 8 AM:

```cron
0 8 * * 1  cd /path/to/weather && python noaa_rainfall.py --email you@gmail.com
```

## Custom date ranges

```bash
python noaa_rainfall.py --start 2024-10-01 --end 2025-03-15
```

## Station selection

```bash
python noaa_rainfall.py --station USW00023293   # San Jose Airport (default)
python noaa_rainfall.py --station USC00047339   # Redwood City
python noaa_rainfall.py --station USW00023234   # SFO Airport
```

Without `--station`, the script tries San Jose → Redwood City → SFO in order until one returns data.

## Data source

- **API**: `https://www.ncei.noaa.gov/access/services/data/v1` (public, no auth)
- **Dataset**: GHCN-Daily (`daily-summaries`)
- **Stations**: San Jose Airport (USW00023293), Redwood City (USC00047339), SFO Airport (USW00023234)
- **Variable**: PRCP (daily precipitation in inches)

## Project roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for the full plan.
