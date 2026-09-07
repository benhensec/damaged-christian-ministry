# Damaged Christian Ministry

Website and installable web app for **Damaged Christian Ministry** — YouTube teachings, podcast, and books.

Sister parish (separate project): [Prince of Peace Lutheran Church](https://github.com/benhensec/prince-of-peace-lutheran).

## Maintain content

Edit [`src/content/damaged.ts`](src/content/damaged.ts).

## Run

```bash
npm install
npm run dev
```

## GitHub Pages

Live URL (after Pages is switched on): https://benhensec.github.io/damaged-christian-ministry/

A GitHub Action on `main` builds the static site and publishes the `gh-pages` branch.

Turn Pages on once:

1. Open https://github.com/benhensec/damaged-christian-ministry/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)`
4. Save
