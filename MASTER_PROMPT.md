# MASTER PROMPT — Minus Slimming Clinic, Madurai (Landing Page)

## Role
You are a senior front-end engineer and UI designer building a conversion-focused, SEO-ready, fully responsive landing page for **Minus Slimming Clinic – Madurai (KK Nagar)** in React 19 + Vite. Keep to plain CSS (no UI framework).

## Reference analysis (minusclinicvelachery.com/minusClinic)
Extracted from the live site's CSS bundle:

| Aspect | Reference value |
|---|---|
| Font | **Poppins** 300/400/500/600/700 (+800 for hero title) |
| Base | Black `#000` page, white `#fff` text; sections alternate **black ↔ white** |
| Brand brown | gradient `#1a0e08 → #3b1f10 → #5c3d1e → #2c1810` (135°) |
| Accent | Amber `#f5a623` (rating stars) · warm off-white `#f9f7f4` / `#fafafa` |
| Text on light | `#111` headings, `rgba(0,0,0,.55)` body, `rgba(0,0,0,.45)` muted |
| Text on dark | `#fff`, `rgba(255,255,255,.5–.75)`, hairlines `rgba(255,255,255,.08)` |
| Shape | 12px card radius, 50px pill buttons, 1px hairline borders, soft shadows |
| Header | Fixed, 85px, blurred translucent black, underline-grow nav links, hamburger ≤900px |
| Eyebrows | 0.75rem, uppercase, letter-spacing 4px, muted |
| Headings | Bold 2.2rem with a **muted second half** (`.highlight`) |
| Motion | Pulsing pill CTA, card hover lift (-4px) + image zoom, 0.3s transitions, smooth scroll |
| Breakpoints | 900 / 580 / 480 (we generalise below) |

## Theme rule (strict)
Pure **black & white** like the reference: black `#000`/`#111` and white `#fff` section bands, grey text tints, white pill CTAs with dark text. No brown or amber in the UI; amber `#f5a623` is reserved for testimonial stars only. The brown gradient is not used.

## Design direction — "same DNA, different execution"
Keep the palette, Poppins and premium-clinic mood, but **do not clone layouts**:
- Hero is a **split**: copy + trust chips on the left, a **floating glass enquiry form** on the right, over the brown gradient with slow-drifting amber glows.
- "Why Madurai chooses Minus" → **numbered bento grid** (not a plain list).
- "Common concerns" → **two-row auto-scrolling marquee of pills** (pauses on hover/reduced-motion).
- Treatments → **tabbed** (Non-invasive / Minimally invasive / Surgical) with an animated indicator and card grid, instead of one long 5-col grid.
- Testimonials → **scroll-snap carousel** with prev/next + dots, amber stars, no reliance on JS libs.
- Before & After → **3 × 4 grid** (12 cards), each with a **draggable comparison slider**.
- Final CTA band in brown gradient with amber pill button.

## Content (verbatim from client brief)
All copy, H1/H2/H3 hierarchy, treatments, testimonials, FAQ + MedicalClinic JSON-LD, meta/OG/Twitter tags and image alt text come from the client brief and live in `src/data.js` and `index.html`. Do not paraphrase.
- H1: *Minus Slimming Clinic, Madurai: Advanced Body Contouring and Weight Loss, Without Guesswork*
- Hero: left = relevant image/visual, right = form (Name, Email, Phone number, Message).
- Both "Book a Consultation →" CTAs navigate to the Contact page (`/contact`).
- Contact: +91-85081-34567 · madurai@minusclinic.com · #P415, 9th Street, Zone 2, East, KK Nagar, Madurai 625020 (below Page 3 Saloon and ICICI Prudential).

## Responsive spec (320px → 1440px, mobile-first)
| Token | Range | Layout |
|---|---|---|
| **xs** | 320–479 | single column, 16px gutters, 1.75rem H1 min, stacked form, hamburger menu |
| **sm** | 480–767 | single column, 20px gutters, 2-col chips/before-after pairs where space allows |
| **md** | 768–1023 | 2-col grids, hero still stacked, tabs inline |
| **lg** | 1024–1279 | hero split, 3-col grids, desktop nav |
| **xl** | 1280–1440+ | container capped at 1280px, 3-col/4-col grids, max spacing |
Rules: no horizontal scroll at 320px; fluid type with `clamp()`; tap targets ≥ 44px; images/visuals use `aspect-ratio`; form inputs 16px font (prevents iOS zoom).

## Motion spec ("smooth")
- Scroll-reveal via `IntersectionObserver` (fade + 24px rise, staggered by `--d`).
- Easing `cubic-bezier(.22,1,.36,1)`; durations 0.3s (hover) / 0.8s (reveal).
- Header gains solid background after 24px scroll; mobile nav slides/fades.
- Ambient: drifting hero glows, pulsing CTA ring, marquee.
- **Always honour `prefers-reduced-motion`** (disable all of the above).

## Quality bar
Semantic landmarks, one `<h1>`, labelled form fields with inline validation, visible focus rings, AA contrast, keyboard-operable tabs/carousel/slider, `lang="en"`, canonical + OG + Twitter + JSON-LD in `index.html`. `npm run build` and `npm run lint` must pass.

## Files
`index.html` (SEO + schema) · `src/index.css` (tokens/reset) · `src/App.css` (components) · `src/data.js` (content) · `src/hooks.js` · `src/App.jsx` + `src/components/*`.
