# Ragnar Laak Portfolio Website

This repository contains Ragnar Laak's public recruiter-facing portfolio
website for BI / Data Analyst and related analyst roles.

The site is built with plain HTML, CSS and minimal vanilla JavaScript. There is
no framework, package manager, build step or external dependency.

## Preview Locally

Open `index.html` directly in a browser, or serve the folder with a simple local
static server.

## GitHub Pages Deployment

This repository is intended to deploy through GitHub Pages from the repository
root:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Select `Deploy from a branch`.
5. Choose branch `main`.
6. Choose folder `/ (root)`.
7. Save.

For a `ragnarlaak.github.io` repository, GitHub Pages normally publishes the
root `index.html` automatically after pushing to `main`.

## Visual Assets

Website visuals are stored in `assets/`.

Current assets:

- `assets/ragnar-laak-profile.jpg` - Profile image used in the hero section.
- `assets/tartu-dashboard.png` - Week 6 Tartu Power BI growth dashboard screenshot.
- `assets/rfm_revenue_by_segment.png` - RFM revenue-by-segment chart with euro labels.

## Evidence Sources

Public findings are based on the source portfolio repository:

- `DACA-portfolio/week5-power-bi/README.md`
- `DACA-portfolio/week5-power-bi/team/ceo_view_notes.txt`
- `DACA-portfolio/week5-power-bi/team/images/urbanstyle_revenue_dashboard.png`
- `DACA-portfolio/week6-data-storytelling/README.md`
- `DACA-portfolio/week6-data-storytelling/individual/week6_tartu_dashboard_storytelling.png`
- `DACA-portfolio/week7-python/team/rfm_segments.csv`
- `DACA-portfolio/week2-sql-data-cleaning/README.md`
- `DACA-portfolio/week2-sql-data-cleaning/team/week2_group_project.sql`
- `DACA-portfolio/week8-python-api-pipeline/team/README.md`
- `DACA-portfolio/week8-python-api-pipeline/team/pipeline.py`

## Reproduced vs Documented Findings

Reproduced from committed RFM export:

- 2,540 customers analysed.
- Reference date 2025-02-28.
- VIP Champions, Potential, At Risk and Lost segment summaries.
- RFM revenue and customer charts.

Documented evidence, not rerun locally:

- 19.08% revenue growth in 2024 versus 2023.
- Tartu growth of approximately 13%.
- Tartu revenue of approximately EUR 522K and approximately 2K orders.
- 128 duplicate email records.
- 380 missing email values.
- 12 city naming variations.

Workflow evidence reproduced from Week 8 execution:

- Week 8 pipeline tests passed.
- Week 8 pipeline exported 24 HTML reports using configured sample-data fallback.
- Public copy uses Week 8 as a workflow/pipeline project, not as live UrbanStyle KPI evidence.

## Optional Improvements

- Optionally improve the Power BI screenshots later with higher-resolution
  exports if available.
