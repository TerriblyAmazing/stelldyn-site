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

## Insights (blog)

- File/URL convention: `insights/index.html` → `/insights` (listing, reverse-chronological); `insights/<slug>.html` → `/insights/<slug>` (post). Slugs are kebab-case, 3–6 words, no date.
- **Root-relative paths only under `insights/`** — use `/styles.css`, `/site.js`, `/about.html`, `/insights/index.html`, `/logo.png`, `/favicon-32.png`, never bare-relative (`styles.css`, `about.html`). The six root pages still use bare-relative paths; don't change those.
- Each post's `BlogPosting` JSON-LD has hand-duplicated stub `author`/`publisher` fields (same precedent as `about.html`'s inlined `worksFor` — `@id` refs don't resolve across separate HTML documents). Keep these in sync with canonical facts, same rule as "keep contact info in sync" below.
- The index page's `CollectionPage` JSON-LD is static (not an enumerated post list) — no edit needed when adding a post.

### Weekly publish workflow
1. Pick a kebab-case slug.
2. Copy the most recently published `insights/<slug>.html` as the starting template.
3. Edit: title, meta description, canonical, `og:*`/`article:published_time`, `BlogPosting` JSON-LD fields, hero content, article body.
4. Add one new entry to the top of `insights/index.html`.
5. Add one `<url>` entry to `sitemap.xml` (with `<lastmod>`).
6. Update `llms.txt`'s `## Insights` section (add new, drop oldest if over ~3).
7. Verify locally: clean URL loads, canonical/og:url/JSON-LD url/sitemap loc all match exactly, nav "Insights" link present on all pages.
8. Commit + `git push` → Vercel auto-deploys.

## Hard Rules

- Never commit secrets or `.env*`
- Never touch `.vercel/` (gitignored local project link)
- Keep contact info (email, location, name) in sync across all six pages + schema + llms.txt when changing it
