# AGENTS.md

Guidance for Codex and other coding agents working on Jamsaq Web Design Agency.

## Project Context

Jamsaq is a web and mobile app design agency. The site should sell strategy-led web design, mobile app UX, MVP product design, and ongoing growth support.

Primary strategy source:

- `docs/PRD.md`

Current stack:

- React 19
- TypeScript
- Vite
- CSS modules via plain CSS files
- `lucide-react` for icons

## Repository Map

- `src/App.tsx` - main homepage content and component structure
- `src/App.css` - homepage layout, responsive styles, and visual system
- `src/index.css` - global CSS variables and base styles
- `docs/PRD.md` - product strategy, market research, target personas, service lines, and roadmap
- `TASKS.md` - ordered implementation checklist
- `docs/CODEX_WORKFLOW.md` - how to work with Codex on this repo

## Commands

Run from the repository root:

```bash
npm install
npm run dev -- --host 0.0.0.0
npm run lint
npm run build
```

Before declaring implementation work complete, run:

```bash
npm run lint
npm run build
```

For docs-only changes, lint/build are optional unless the README, package metadata, or rendered app behavior changed.

## Product Rules

- Keep the PRD in mind for all content and UX decisions.
- Position Jamsaq as a boutique web and mobile app design agency, not a cheap template vendor.
- Make web design and mobile app UX/product design equally visible.
- Use clear buyer language: launch, credibility, leads, mobile-first UX, app prototype, MVP, conversion.
- Show pricing anchors and scope boundaries.
- Do not imply fake case studies or client results. Use "concept study" or "sample outcome" labels until real work exists.
- Prefer practical, trust-building copy over hype.

## Frontend Rules

- Keep the first screen useful; no generic landing-page filler.
- Design mobile-first and verify desktop afterward.
- Use `lucide-react` icons when an icon is needed.
- Avoid UI that depends only on color to communicate meaning.
- Keep text readable on 320px+ mobile widths.
- Do not add new UI libraries unless the task clearly needs one.
- Keep cards, buttons, and fixed-format UI elements dimensionally stable across responsive breakpoints.
- Preserve accessible semantic structure: headings in order, labels for form fields, visible focus states.

## Implementation Style

- Prefer small, reviewable edits tied to one task in `TASKS.md`.
- Reuse the existing CSS variables before adding new colors.
- Keep component structure simple until duplication becomes painful.
- Do not introduce routing, backend services, analytics, CMS, or form providers without a task that explicitly calls for them.
- Do not commit generated build output from `dist/`.

## Definition of Done

A task is done when:

- The requested behavior/content is implemented.
- The UI works on mobile and desktop.
- `npm run lint` passes for app changes.
- `npm run build` passes for app changes.
- The relevant item in `TASKS.md` is marked complete or updated.
- The final response names changed files and verification results.

## Preferred Prompt Shape

When asking Codex to do work in this repo, use:

```text
Goal:
Context:
Constraints:
Done when:
Verification:
```

Example:

```text
Goal: Update the homepage hero to clearly sell web design and mobile app UX.
Context: Follow docs/PRD.md sections 6-8 and TASKS.md phase 1.
Constraints: Keep React + CSS only. Do not add routing.
Done when: The first viewport mentions both websites and mobile app experiences, with two CTAs.
Verification: Run npm run lint and npm run build.
```
