# Jamsaq Build Task List

This task list is ordered so Codex can work from top to bottom without re-planning every session. Keep each task small enough to review in one commit.

Status legend:

- `[ ]` Not started
- `[~]` In progress
- `[x]` Done

## Phase 0: Project Operating System

- [x] Create PRD with market research and product strategy.
- [x] Connect local repo to GitHub.
- [x] Add Codex project instructions and workflow docs.
- [x] Migrate stack to Next.js App Router and Tailwind CSS.
- [ ] Keep `TASKS.md` updated after every meaningful change.

Acceptance criteria:

- `AGENTS.md` exists at repo root.
- `docs/CODEX_WORKFLOW.md` exists.
- README links to the PRD, workflow, and task list.
- `package.json` uses Next.js scripts and Tailwind CSS dependencies.

## Phase 1: PRD-Aligned Homepage MVP

### 1.1 Hero Positioning

- [ ] Rewrite the hero so it clearly says Jamsaq designs and builds websites plus mobile app experiences.
- [ ] Add CTAs for "Start a project" and "Explore services".
- [ ] Add a concise proof/credibility strip below the hero.

Acceptance criteria:

- First viewport communicates web design and mobile app UX within 5 seconds.
- Hero text is specific to Jamsaq and not generic agency copy.
- Mobile layout has no cramped buttons or text overlap.

### 1.2 Service Lines

- [ ] Replace current service cards with the PRD service lines:
  - Web Launch
  - Web Growth
  - Mobile App UX Sprint
  - MVP Product Design and Build
  - Retainer
- [ ] Add "best for", timeline, and deliverables for each service.

Acceptance criteria:

- All five service lines are visible on the homepage.
- Each service has clear scope boundaries.
- Pricing or starting range is present where appropriate.

### 1.3 Lead Form Upgrade

- [ ] Convert the contact form into a project brief form.
- [ ] Add fields:
  - Name
  - Email
  - Company or project name
  - Project type
  - Budget range
  - Desired launch timeline
  - Current website or app URL
  - Project notes
- [ ] Add inline helper copy that sets response expectations.

Acceptance criteria:

- Every input has a visible label.
- Form works visually on mobile and desktop.
- No backend is implied unless implemented.

### 1.4 Trust Without Fake Case Studies

- [ ] Replace or revise selected work into clearly labeled concept studies if no real case studies exist.
- [ ] Add three concept study cards:
  - Local service website redesign
  - Mobile booking app UX sprint
  - Startup MVP landing page and prototype

Acceptance criteria:

- No fake client claims.
- Each concept study describes the problem, solution, and expected metric.

### 1.5 Homepage SEO and Metadata

- [ ] Update `index.html` title and description for web and mobile app design agency positioning.
- [ ] Add Open Graph and Twitter metadata.
- [ ] Verify favicon and page title.

Acceptance criteria:

- Metadata includes "web design", "mobile app design", and "Jamsaq".
- Build passes.

## Phase 2: Navigation and Site Structure

### 2.1 Add Lightweight Routing

- [ ] Decide whether to use React Router or simple in-page sections.
- [ ] If routing is added, create:
  - `/`
  - `/services`
  - `/work`
  - `/about`
  - `/contact`

Acceptance criteria:

- Decision is documented in `TASKS.md`.
- No router dependency is added unless it clearly improves the site.

### 2.2 Services Page

- [ ] Create a dedicated services page or section with detailed packages.
- [ ] Include outcomes, deliverables, timelines, and starting budgets.

Acceptance criteria:

- A buyer can choose the closest package without needing a call first.

### 2.3 Work Page

- [ ] Create case study template.
- [ ] Add concept studies until real case studies are available.

Acceptance criteria:

- Concept studies are clearly labeled and honest.

### 2.4 About Page

- [ ] Add Jamsaq mission, principles, and working process.
- [ ] Explain why the agency focuses on web and mobile-first product experiences.

Acceptance criteria:

- About page builds trust without sounding inflated.

## Phase 3: Conversion and Operations

### 3.1 Form Handling

- [ ] Choose lead handling:
  - mailto fallback
  - Formspree
  - Netlify/Vercel form function
  - custom API
- [ ] Implement chosen option.
- [ ] Add spam protection if public.

Acceptance criteria:

- Test submission path works.
- User sees confirmation.
- Jamsaq receives lead data.

### 3.2 Analytics Events

- [ ] Choose analytics provider.
- [ ] Track:
  - hero CTA clicks
  - service card clicks
  - form starts
  - form submits
  - pricing clicks

Acceptance criteria:

- Events are named consistently.
- Analytics is privacy-conscious.

### 3.3 Scheduling

- [ ] Add scheduling link after form submission or as secondary CTA.
- [ ] Keep the project brief as the primary conversion action.

Acceptance criteria:

- Scheduling does not bypass qualification entirely.

## Phase 4: Quality Pass

### 4.1 Responsive QA

- [ ] Test at 320px, 375px, 768px, 1024px, and desktop width.
- [ ] Fix overflow, cramped text, and button wrapping.

Acceptance criteria:

- No horizontal scroll.
- Text and controls remain readable.

### 4.2 Accessibility QA

- [ ] Check heading order.
- [ ] Check form labels.
- [ ] Check keyboard focus.
- [ ] Check color contrast.

Acceptance criteria:

- Lighthouse Accessibility target is 95+ when tested.

### 4.3 Performance QA

- [ ] Run production build.
- [ ] Inspect bundle size.
- [ ] Avoid unnecessary image or library weight.

Acceptance criteria:

- `npm run build` passes.
- Lighthouse Performance target is 90+ when tested.

## Phase 5: Launch

- [ ] Choose hosting provider.
- [ ] Deploy production build.
- [ ] Configure custom domain.
- [ ] Verify metadata previews.
- [ ] Smoke test form and CTAs.
- [ ] Create launch checklist.

Acceptance criteria:

- Public URL works.
- Primary lead path works.
- README includes deployment notes.

## Standard Verification

For app changes, run:

```bash
npm run lint
npm run build
```

For visual changes, also start:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then inspect the local URL before finishing.
