# Ragnar Laak Portfolio Website

This repository contains a plain HTML, CSS and minimal vanilla JavaScript one-page portfolio website for GitHub Pages.

## Files

- `index.html` - Portfolio page content and small navigation script.
- `styles.css` - Responsive dark professional analytics styling.
- `assets/` - Project screenshot folder.

## Add Real Project Screenshots

Add or replace these files in the `assets` folder:

- `assets/powerbi-dashboard.png`
- `assets/rfm-segmentation.png`
- `assets/sql-data-quality.png`

Keep the filenames exactly the same unless you also update the image paths in `index.html`.

## Update LinkedIn URL

In `index.html`, replace:

```html
https://www.linkedin.com/in/PLACEHOLDER
```

with your real LinkedIn profile URL.

## Update Project Links

Each featured project card currently uses a placeholder link:

```html
href="#"
```

Replace those with the relevant GitHub project or folder links.

## Enable GitHub Pages

For a `ragnarlaak.github.io` repository, GitHub Pages normally publishes automatically from the repository root on the `main` branch.

If you need to check or enable it manually:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main`.
6. Select folder `/ (root)`.
7. Click `Save`.

GitHub Pages will publish the site from `index.html` in the repository root.
