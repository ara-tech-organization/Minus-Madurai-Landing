# Minus Slimming Clinic – Madurai (landing page)

React 19 + Vite landing page for **Minus Slimming Clinic, Madurai (KK Nagar)**. Black-and-white theme, Poppins,
fully responsive from 320px to 1440px. The design brief lives in [MASTER_PROMPT.md](MASTER_PROMPT.md).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs to dist/
```

## Where things are

| What | Where |
|---|---|
| Page copy, treatments, testimonials, FAQs, contact, social links | `src/data.js` |
| Privacy Policy and Terms & Conditions text (DRAFT — replace with the client's wording) | `src/legal.js` → pages `/privacy-policy`, `/terms-and-conditions` |
| SEO tags and JSON-LD schemas | `index.html` |
| Sections | `src/components/*` |
| Styles | `src/index.css` (tokens) · `src/App.css` |
| Real photos | drop `hero.jpg` into `src/assets/` (hero); set `before` / `after` URLs in `BEFORE_AFTER` (`src/data.js`) |

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds with
`VITE_BASE=/<repo-name>/` and publishes `dist/` to GitHub Pages.

Live site: https://ara-tech-organization.github.io/Minus-Madurai-Landing/

Section links use clean paths (`/why`, `/treatments`, …). On GitHub Pages the workflow copies
`index.html` to `404.html` so those links also work when opened directly. On another host, configure a
"serve `index.html` for unknown paths" rewrite and build with the right `VITE_BASE` (default `/`).

