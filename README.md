# Danah Alsubaie — Portfolio

Personal portfolio built with React + TypeScript (Create React App), based on
[yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) (MIT).

**Palette:** `#1E1E22` (dark) · `#0E0EEA` (accent) · `#FFFFFF` · `#EEEEEE`

## Editing content

All text, links, projects, timeline entries and certificates live in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Images are in `src/assets/images/`,
and the resume and certificate PDFs are in `public/`.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in ./build
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   | Setting | Value |
   |---|---|
   | Framework preset | Create React App |
   | Build command | `npm run build` |
   | Build output directory | `build` |
   | Node version | read from `.node-version` (20) |
4. **Save and Deploy.** Every push to the main branch redeploys automatically.

Alternative without Git: `npm run build` then `npx wrangler pages deploy build --project-name danah-portfolio`.

`public/_headers` adds security headers and long-term caching for hashed assets.
It is a single-page site, so no redirect rules are needed (Cloudflare Pages serves
`index.html` for unknown paths automatically).
