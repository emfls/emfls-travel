# EMFLS Travel P0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the independent Astro travel discovery magazine skeleton and all P0 routes.

**Architecture:** Astro static pages share a typed content model, base layout, and editorial components. Vanilla CSS defines a mobile-first magazine system with CSS-only visual placeholders.

**Tech Stack:** Astro, TypeScript, vanilla CSS, npm.

**Spec:** `docs/superpowers/specs/2026-09-14-travel-site-p0-design.md`

## Global Constraints

- Work only inside `emfls-travel`.
- P0 only; do not implement P1+ features.
- No external UI frameworks, database, server, AI API, or bulk content generation.
- Run `npm run check` and `npm run build` before reporting completion.
- Update `PROJECT_HISTORY.md` and `TASKS.md`.

### Task 1: Scaffold Astro and shared content

**Files:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/data/content.ts`, `src/layouts/BaseLayout.astro`, `src/components/*`

- [x] Add minimal Astro scripts and configuration for static output.
- [x] Define typed navigation, categories, finder options, and editorial cards.
- [x] Build layout, header, footer, and reusable card components.

### Task 2: Build styling and home experience

**Files:** `src/styles/global.css`, `src/pages/index.astro`

- [x] Define the travel magazine design system in CSS.
- [x] Build hero, finder prototype, purpose navigation, destination grid, seasons, preparation, and guide sections.
- [x] Keep imagery optional using local CSS placeholder art.

### Task 3: Add P0 routes and SEO files

**Files:** `src/pages/{domestic,overseas,family,with-kids,road-trip,stays,airports,packing,seasonal,tips,about,privacy,contact,404}.astro`, `public/*`

- [x] Add useful editorial content to every required route.
- [x] Add sitemap, robots, favicon, and minimal structured data.

### Task 4: Document and verify

**Files:** `AGENTS.md`, `SITE_STRATEGY.md`, `DESIGN_SYSTEM.md`, `TASKS.md`, `PROJECT_HISTORY.md`

- [ ] Record repository rules, strategy, design tokens, queue, and decisions.
- [ ] Run `npm run check`.
- [ ] Run `npm run build`.
- [ ] Confirm only this repository changed and all requested routes are generated.
