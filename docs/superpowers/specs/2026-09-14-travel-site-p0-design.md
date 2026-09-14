# EMFLS Travel P0 Design

## Goal

Build an independent, static Astro travel discovery magazine for `travel.emfls.com`.

## Architecture

The site uses Astro pages with TypeScript data modules and vanilla CSS. A shared `BaseLayout` owns SEO metadata, site chrome, and structured data; small presentational components render discovery sections and cards. Category routes use a shared editorial page pattern but retain distinct copy and navigation intent.

## Experience

The home page introduces travel discovery immediately, then leads to a static Trip Finder prototype, purpose-based exploration, destination/condition cards, seasonal inspiration, and preparation guides. The finder is intentionally inert in P0 but its controls use stable IDs matching the future filter data model.

## Content model

Discovery entries expose `slug`, `title`, `eyebrow`, `description`, `audience`, `purpose`, `conditions`, and `route`. This supports future region × purpose × condition filtering without generating bulk pages now.

## Constraints

- Astro, TypeScript, static output, vanilla CSS, minimal JavaScript.
- No UI framework, database, server, AI API, booking, live map, flight, or accommodation integrations.
- No fake reviews, ratings, authors, or unsupported factual claims.
- No external image dependency; visual placeholders use local CSS art direction.
- All requested P0 routes are real, useful editorial pages rather than empty or coming-soon screens.

## SEO and accessibility

Every route has a unique title and description, canonical URL, Open Graph basics, semantic landmarks, keyboard-friendly links and form labels. Sitemap, robots, favicon, and minimal WebSite JSON-LD are included.
