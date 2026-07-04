# Stelldyn — Static Site

A six-page static rebuild of stelldyn.com. No build step, no framework — pure HTML/CSS/JS. Deploys to Vercel, Netlify, or GitHub Pages as-is.

## Files
- `index.html` · `about.html` · `services.html` · `advisory.html` · `agency.html` · `contact.html`
- `styles.css` — shared stylesheet ("material index sheet" system: pine / kraft / ink / copper; Archivo + Newsreader + IBM Plex Mono)
- `site.js` — mobile nav toggle + scroll-reveal (respects reduced-motion)
- `llms.txt` — GEO summary for AI answer engines (root)
- `robots.txt` — allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) + sitemap reference
- `sitemap.xml` — submit in Google Search Console & Bing Webmaster Tools
- JSON-LD schema is embedded in each page's `<head>` (Organization + ProfessionalService + Person on home; Person on about; FAQPage on services)

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: New Project → import the repo → Framework Preset: **Other** → Deploy. (No build command needed.)
3. Add your domain (stelldyn.com) in Vercel → Settings → Domains.

## Before launch — replace these placeholders
1. **Contact form** — `contact.html` form `action` points to a Formspree placeholder. Swap for your Formspree form ID, Vercel Forms, or CRM endpoint.
2. **Email** — `hello@stelldyn.com` appears in footers, schema, and llms.txt. Replace with your real business address (recommended over a personal one).
3. **LinkedIn company URL** — schema `sameAs` references `linkedin.com/company/stelldyn`; create the page or remove that line. Personal LinkedIn is already linked.
4. **Logo & favicon** — add your wordmark image to the header (currently a styled text wordmark) and a `favicon.ico` / `apple-touch-icon.png`.
5. **OG image** — add a `og:image` meta + a 1200×630 share image for link previews (currently omitted).
6. **Photography** — optional: the design is intentionally image-light and fast. If you want material/industrial photos, add them with descriptive `alt` text (helps SEO).
7. **Testimonials** — the quotes are written from real accomplishments but are labeled "Representative outcomes." Attach to real, consenting clients or keep the representative framing (FTC).
8. **Phone** — intentionally omitted from the public site; add if you want one published.

## "Clean URLs" (optional)
The internal links use `.html` extensions so they work when opened locally. On Vercel, "Clean URLs" can be enabled to serve `/about` instead of `/about.html` — set `{"cleanUrls": true}` in a `vercel.json` if you want the canonical URLs (which point to extensionless paths) to match exactly.
