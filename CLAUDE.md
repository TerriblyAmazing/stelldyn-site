# Stelldyn Site — Conventions

Plain static site. No framework, no build step, no package manager, no database.

## Stack

- Hand-written HTML/CSS/JS: `index.html`, `about.html`, `services.html`, `advisory.html`, `agency.html`, `contact.html`, `styles.css`, `site.js`
- `vercel.json` enables clean URLs (`/about` not `/about.html`) — leave Build Command and Output Directory empty in Vercel, there's nothing to build
- Contact form posts to Formspree (see `contact.html`)
- JSON-LD (Organization/Service schema) is embedded per-page — keep name, Atlanta location, and email identical across every page, LinkedIn, and directories
- `llms.txt`, `robots.txt`, `sitemap.xml` at the root — update `sitemap.xml` if pages are added/removed/renamed

## Workflow

- Edit HTML/CSS/JS directly; no compile step to run
- Commit after each working change (small, reversible commits)
- `git push` to `main` auto-deploys via Vercel — no manual deploy step
- Repo: `github.com/TerriblyAmazing/stelldyn-site`

## Verifying changes

- Open the changed page(s) directly in a browser (or `vercel dev` / `python3 -m http.server` locally) and check the golden path
- After schema changes, spot-check with Google's Rich Results Test
- No automated test suite — visual/manual check is the definition of done

## Hard Rules

- Never commit secrets or `.env*`
- Never touch `.vercel/` (gitignored local project link)
- Keep contact info (email, location, name) in sync across all six pages + schema + llms.txt when changing it
