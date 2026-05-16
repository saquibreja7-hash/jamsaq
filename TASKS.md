# Jamsaq Build Roadmap

This is the phase-by-phase execution plan for building the Jamsaq Web Design Agency site from repo setup to launch and post-launch improvement. It is written so Codex can work from top to bottom without re-planning the whole project every session.

Source of truth:

- Product strategy: `docs/PRD.md`
- Agent instructions: `AGENTS.md`
- Codex workflow: `docs/CODEX_WORKFLOW.md`
- Stack: Next.js App Router, TypeScript, Tailwind CSS 4, lucide-react

Status legend:

- `[ ]` Not started
- `[~]` In progress
- `[x]` Done
- `[blocked]` Blocked by a decision, provider, asset, or credential

How to use this file:

1. Pick the first incomplete actionable task in order unless the user explicitly chooses another task.
2. Read the referenced PRD sections before editing.
3. Keep each task small enough to review in one commit.
4. For code/UI work, run `npm run lint` and `npm run build`.
5. For visual work, also run the dev server and check mobile plus desktop.
6. Update this file before committing.
7. Commit and push after each meaningful completed task.

Standard prompt to run a task:

```text
Goal:
Complete TASKS.md Phase X.Y.

Context:
Follow docs/PRD.md and AGENTS.md.

Constraints:
Use Next.js App Router, TypeScript, Tailwind CSS 4, and lucide-react. Keep changes scoped to this task.

Done when:
All checklist items and acceptance criteria for the selected task are complete.

Verification:
Run npm run lint and npm run build for app changes.
```

## Phase 0: Project Foundation and Operating System

Goal: Make sure the repo, product strategy, stack, and Codex workflow are ready before feature work starts.

### 0.1 Repo and GitHub Setup

- [x] Clone or create the local project workspace.
- [x] Connect the local repo to `saquibreja7-hash/jamsaq`.
- [x] Confirm GitHub authentication works with `gh auth status`.
- [x] Push the current project to `origin/main`.
- [x] Keep unrelated repos separate from this project.

Done when:

- `git remote -v` points to the Jamsaq repo.
- `git status --short` is clean after commits.
- The latest local commit exists on GitHub.

### 0.2 Product Strategy Setup

- [x] Create the PRD at `docs/PRD.md`.
- [x] Include market research for web design and mobile app design demand.
- [x] Define target personas: founders, local/service businesses, and startup product teams.
- [x] Define positioning, service lines, pricing anchors, lead funnel, risks, metrics, and roadmap.
- [x] Capture open PRD questions for later decisions.

Deferred decisions to resolve in later phases:

- Primary initial market: U.S. small businesses, startups, local service brands, or a focused mix.
- Development model: in-house, partner network, or design-first only.
- CRM or lead tracking tool.
- Starting prices versus package ranges.
- First proof assets: audits, concept studies, demos, or real client examples.

Done when:

- PRD is linked from README.
- PRD supports every major website content and UX decision.
- Open questions are either answered or explicitly deferred.

### 0.3 Codex Workflow Setup

- [x] Add `AGENTS.md` with project rules.
- [x] Add `docs/CODEX_WORKFLOW.md`.
- [x] Define standard commands and definition of done.
- [x] Define prompt templates for future work.
- [x] Mark docs-only changes as not requiring lint/build unless app behavior changes.

Done when:

- Future Codex sessions can read `AGENTS.md`, `docs/PRD.md`, and this roadmap to continue work without context loss.

### 0.4 Stack Setup

- [x] Migrate to Next.js App Router.
- [x] Use TypeScript.
- [x] Use Tailwind CSS 4.
- [x] Use `lucide-react` for icons.
- [x] Add Next scripts:
  - `npm run dev`
  - `npm run lint`
  - `npm run build`
  - `npm run start`
- [x] Confirm `npm run lint` passes.
- [x] Confirm `npm run build` passes.
- [x] Confirm the local dev server returns a 200 response.

Done when:

- `package.json` uses Next.js scripts and dependencies.
- `app/layout.tsx`, `app/page.tsx`, and `app/globals.css` exist.
- No generated build output is committed.

### 0.5 Current Baseline Review

- [ ] Review the current homepage implementation in `app/page.tsx`.
- [ ] List current sections in order.
- [ ] Identify copy that is generic, inaccurate, or missing PRD positioning.
- [ ] Identify components that should be extracted later.
- [ ] Identify visual issues at mobile widths before changing content.

Done when:

- Notes are added to the relevant tasks below or implemented directly as part of the next task.

Phase 0 gate:

- [x] Repo is connected.
- [x] Setup docs are present.
- [x] Next.js and Tailwind stack are confirmed.
- [ ] Current baseline review is complete.
- [ ] The next incomplete actionable task is Phase 1.1.

## Phase 1: Site Architecture and Content Blueprint

Goal: Decide exactly what pages, sections, content, and conversion paths the site needs before pushing deeper into UI polish.

Reference:

- PRD sections 6, 7, 8, 9, 10, 12, and 13.

### 1.1 Page Map and Navigation

- [ ] Confirm MVP pages:
  - Home: `/`
  - Services: `/services`
  - Work: `/work`
  - About: `/about`
  - Contact: `/contact`
- [ ] Decide which content stays on the homepage versus dedicated pages.
- [ ] Define top navigation labels:
  - Services
  - Work
  - Process or About
  - Contact
- [ ] Define primary navigation CTA:
  - `Start a project`
- [ ] Define footer navigation:
  - Services
  - Work
  - About
  - Contact
  - Privacy
- [ ] Document routing decision:
  - Use Next.js App Router pages for dedicated pages.
  - Keep homepage sections available for quick scanning.

Acceptance criteria:

- A user can understand the site structure from navigation alone.
- The homepage can still convert without requiring deep navigation.
- App Router is used instead of adding a separate routing library.

Verification:

- Review planned route files before implementation.

### 1.2 Homepage Section Order

- [ ] Define final MVP homepage sections in this order:
  - Hero with positioning and CTA pair
  - Credibility strip or concise proof points
  - Problem/opportunity statement
  - Service overview
  - Featured process
  - Concept studies or selected work
  - Pricing anchors
  - Project brief CTA
  - FAQ
  - Footer
- [ ] Define the purpose of each section in one sentence.
- [ ] Make sure every section supports one of these goals:
  - Explain the offer.
  - Build trust.
  - Qualify the buyer.
  - Move the buyer toward a project brief.

Acceptance criteria:

- The homepage has no filler section.
- Each section has a clear buyer-facing job.
- The first viewport mentions both websites and mobile app experiences.

Verification:

- Compare the section order to PRD section 8.2.

### 1.3 Content Inventory

- [ ] Draft final copy blocks for:
  - One-line positioning.
  - Hero headline.
  - Hero supporting text.
  - Primary CTA.
  - Secondary CTA.
  - Service descriptions.
  - Process steps.
  - Pricing anchors.
  - Concept study summaries.
  - FAQ answers.
  - Contact form helper copy.
- [ ] Avoid unsupported claims:
  - No fake testimonials.
  - No fake client logos.
  - No invented revenue numbers.
  - No implied case study results unless labeled as concept or sample outcomes.
- [ ] Keep copy in buyer language:
  - Launch a credible site.
  - Turn an app idea into a testable prototype.
  - Fix a website that is not converting.
  - Make the product easier to understand.

Acceptance criteria:

- Copy sounds specific to Jamsaq.
- Copy names outcomes without pretending proof exists.
- Pricing anchors are visible enough to qualify leads.

Verification:

- Read the page aloud and remove generic agency filler.

### 1.4 Information Architecture for Services

- [ ] Define the service overview shape:
  - Service name.
  - Best for.
  - Outcome.
  - Timeline.
  - Deliverables.
  - Starting budget or range.
  - CTA.
- [ ] Define all five PRD service lines:
  - Web Launch
  - Web Growth
  - Mobile App UX Sprint
  - MVP Product Design and Build
  - Retainer
- [ ] Decide which services need full detail pages at launch.
- [ ] Decide which services can start as homepage cards and expand later.

Acceptance criteria:

- A buyer can choose the closest package before booking a call.
- Service scopes reduce low-fit inquiries.
- App UX work is as visible as website work.

Verification:

- Compare service content to PRD section 7.

### 1.5 Content Model and Component Plan

- [ ] Decide which content should be static data arrays in code:
  - Services
  - Process steps
  - Concept studies
  - FAQs
  - Metrics/proof points
- [ ] Decide which UI patterns should become reusable components:
  - Section header
  - Service card
  - Process step
  - Case study card
  - CTA band
  - Form field
  - FAQ item
- [ ] Avoid creating abstractions until there is repeated structure.

Acceptance criteria:

- `app/page.tsx` remains readable.
- Repeated content is easy to update.
- Components match the existing Next.js and Tailwind style.

Verification:

- Inspect `app/page.tsx` before and after extraction.

Phase 1 gate:

- [ ] MVP route map is decided.
- [ ] Homepage section order is decided.
- [ ] Core copy inventory is drafted or ready to implement.
- [ ] Service content structure is clear.

## Phase 2: Brand Direction and Design System

Goal: Create a polished, consistent visual foundation before expanding pages.

Reference:

- PRD sections 6, 8.4, 8.5, and 10.2.

### 2.1 Brand Attributes

- [ ] Define the visual tone:
  - Strategic.
  - Practical.
  - Modern.
  - Trust-building.
  - Mobile-first.
- [ ] Define what to avoid:
  - Cheap template feeling.
  - Overly corporate SaaS blandness.
  - Fake luxury.
  - Overdecorated gradients.
  - Generic "creative agency" fluff.
- [ ] Translate tone into interface decisions:
  - Crisp typography.
  - Calm background.
  - Strong contrast.
  - Direct CTAs.
  - Useful proof blocks.

Acceptance criteria:

- Design direction fits founders, service owners, and early product teams.
- The site feels credible even without case studies.

Verification:

- Compare UI direction to PRD differentiators.

### 2.2 Color System

- [ ] Audit existing CSS colors in `app/globals.css` and `app/page.tsx`.
- [ ] Define CSS variables for:
  - Page background.
  - Text.
  - Muted text.
  - Border.
  - Primary action.
  - Primary action hover.
  - Accent.
  - Surface.
  - Focus ring.
- [ ] Use Tailwind utilities with the variables where possible.
- [ ] Keep the palette from becoming one-note.
- [ ] Ensure text contrast is accessible.

Acceptance criteria:

- Color use is consistent across sections.
- CTA color is distinctive.
- Focus state is visible.

Verification:

- Run visual review on light and dark-looking areas.
- Check important text contrast manually or with Lighthouse.

### 2.3 Typography System

- [ ] Define heading scale for:
  - Hero headline.
  - Page headings.
  - Section headings.
  - Card headings.
  - Form labels.
  - Small metadata text.
- [ ] Use responsive type sizes without viewport-width font scaling.
- [ ] Keep letter spacing at `0` unless there is a clear reason.
- [ ] Keep long words and labels from overflowing on mobile.

Acceptance criteria:

- Text hierarchy is clear.
- Long service names fit cards on mobile.
- Buttons and labels remain readable at 320px.

Verification:

- Check widths at 320px, 375px, 768px, 1024px, and desktop.

### 2.4 Layout System

- [ ] Define shared layout rules:
  - Max content width.
  - Section padding.
  - Grid breakpoints.
  - Card spacing.
  - Form spacing.
  - Footer spacing.
- [ ] Use stable dimensions for repeated cards and controls.
- [ ] Avoid nested card layouts.
- [ ] Keep page sections full-width or unframed unless a card is genuinely needed.

Acceptance criteria:

- Sections align consistently.
- Cards do not jump height unexpectedly.
- Mobile layouts stack cleanly.

Verification:

- Inspect homepage after each major section change.

### 2.5 Component Standards

- [ ] Define button variants:
  - Primary.
  - Secondary.
  - Text link.
  - Icon plus label where useful.
- [ ] Define card variants:
  - Service card.
  - Concept study card.
  - Process card.
  - FAQ card or disclosure.
- [ ] Define form controls:
  - Text input.
  - Select.
  - Textarea.
  - Error message.
  - Helper text.
  - Submit button.
- [ ] Use lucide icons only when they clarify function or scanning.

Acceptance criteria:

- UI patterns feel like one product.
- Icons do not replace necessary labels in content-heavy areas.
- Focus and hover states are clear.

Verification:

- Keyboard tab through interactive elements.

### 2.6 Asset Direction

- [ ] Decide whether the site needs:
  - Founder/team photo.
  - Work preview mockups.
  - Concept study screenshots.
  - Social preview image.
  - Logo mark.
- [ ] Do not use fake client brand assets.
- [ ] For concept studies, label assets as concepts or samples.
- [ ] Keep images optimized for Next.js and performance.

Acceptance criteria:

- Visual assets support buyer understanding.
- No stock-like image creates false proof.
- Metadata image is ready before launch.

Verification:

- Review image file sizes and rendering.

Phase 2 gate:

- [ ] Color, type, spacing, components, and asset direction are defined.
- [ ] The visual system can support all MVP pages.

## Phase 3: Homepage MVP Build

Goal: Build a homepage that explains Jamsaq quickly, shows the service model, qualifies buyers, and drives project brief submissions.

Reference:

- PRD sections 6, 7, 8, 9, 12, and 13.

### 3.1 Hero Positioning

- [ ] Rewrite the hero headline so it clearly sells web and mobile app design.
- [ ] Use or adapt the PRD positioning:
  - "Jamsaq designs and builds high-trust websites and mobile app experiences for founders and small teams."
- [ ] Add supporting copy about clarity, credibility, launch speed, and conversion.
- [ ] Add primary CTA:
  - `Start a project`
- [ ] Add secondary CTA:
  - `Explore services`
- [ ] Add a compact credibility strip below or inside the first viewport:
  - Strategy before screens.
  - Mobile-first UX.
  - Build-ready delivery.
  - Clear scopes and pricing.

Acceptance criteria:

- A visitor understands what Jamsaq does in under 5 seconds.
- Websites and mobile app experiences are both visible in the first viewport.
- CTA buttons fit cleanly on 320px mobile.

Verification:

- Run `npm run lint`.
- Run `npm run build`.
- Visual check at mobile and desktop.

### 3.2 Problem and Opportunity Section

- [ ] Add a section that explains why buyers struggle:
  - They need a better site or app but do not know what to build first.
  - Generic templates do not solve strategy, copy, UX, or conversion.
  - App ideas need validation before full engineering spend.
- [ ] Connect the problem to Jamsaq's approach:
  - Define goals.
  - Shape the offer.
  - Design the experience.
  - Build or hand off cleanly.

Acceptance criteria:

- The section increases urgency without fear-based copy.
- It uses buyer language from the PRD.

Verification:

- Remove any generic "beautiful designs" phrasing.

### 3.3 Service Overview Cards

- [ ] Replace or refine service cards to match PRD service lines:
  - Web Launch
  - Web Growth
  - Mobile App UX Sprint
  - MVP Product Design and Build
  - Retainer
- [ ] Each card includes:
  - Best for.
  - Main outcome.
  - Timeline.
  - Deliverables.
  - Starting budget or range.
  - CTA or anchor link.
- [ ] Make app UX and MVP services as prominent as web services.
- [ ] Keep cards scannable on mobile.

Acceptance criteria:

- All five service lines are present.
- Scope boundaries are clear.
- Pricing anchors match PRD section 7.

Verification:

- Run lint/build.
- Check mobile layout for long service names.

### 3.4 Process Section

- [ ] Add or refine a clear process:
  - Diagnose.
  - Shape.
  - Design.
  - Build or hand off.
  - Launch and improve.
- [ ] Include what the client gets at each step.
- [ ] Include how Jamsaq avoids scope drift.

Acceptance criteria:

- The process reduces buyer uncertainty.
- The process applies to web and app work.

Verification:

- Read process against PRD sections 6.3 and 10.1.

### 3.5 Concept Studies or Selected Work

- [ ] Add three clearly labeled concept studies if real work is not available:
  - Local service website redesign.
  - Mobile booking app UX sprint.
  - Startup MVP landing page and prototype.
- [ ] Each study includes:
  - Problem.
  - Approach.
  - Deliverables.
  - Expected metric or sample outcome.
  - Label: `Concept study` or `Sample project`.
- [ ] Do not imply real client results unless they exist.

Acceptance criteria:

- Trust is built honestly.
- Each concept study shows how Jamsaq thinks.
- No fake logos, testimonials, or claims.

Verification:

- Check wording for accidental fake proof.

### 3.6 Pricing Anchors

- [ ] Add pricing section or pricing content within service cards.
- [ ] Include PRD ranges:
  - Web Launch: `$4,800-$8,500`
  - Web Growth: `$8,500-$18,000`
  - Mobile App UX Sprint: `$6,500-$15,000`
  - MVP Product Design and Build: `$18,000-$60,000+`
  - Retainer: `$2,000-$8,000/month`
- [ ] Include copy explaining that final pricing depends on scope.
- [ ] Use pricing to qualify leads, not pressure buyers.

Acceptance criteria:

- Pricing is visible before contact.
- Pricing copy is honest and not buried.

Verification:

- Compare ranges to PRD section 7.

### 3.7 Homepage FAQ

- [ ] Add answers for likely buyer questions:
  - Do you only design, or do you build too?
  - How long does a website take?
  - Can you help validate an app idea?
  - What do you need from me to start?
  - Do you work with existing websites?
  - What happens after I submit the project brief?
- [ ] Keep answers concise.
- [ ] Avoid overpromising enterprise-scale app delivery.

Acceptance criteria:

- FAQ handles common objections.
- FAQ supports lead qualification.

Verification:

- Read against PRD risks and mitigations.

### 3.8 Homepage CTA Band

- [ ] Add a final CTA section before footer.
- [ ] Restate the brand promise:
  - Launch with clarity.
  - Look established.
  - Convert the right customers.
- [ ] Link to project brief or contact page.

Acceptance criteria:

- A user has a clear next step after scanning.
- CTA does not feel like generic marketing filler.

Verification:

- Check anchor links and button targets.

Phase 3 gate:

- [ ] Homepage communicates the offer in 5 seconds.
- [ ] All service lines are represented.
- [ ] Concept proof is honest.
- [ ] Pricing anchors are visible.
- [ ] Primary lead path is obvious.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 4: Dedicated Services Experience

Goal: Build detailed service pages or sections so qualified buyers can understand scope, budget, timeline, and fit before contacting Jamsaq.

Reference:

- PRD sections 7, 8.2, 9, 10, and 12.

### 4.1 Services Route

- [ ] Create `app/services/page.tsx`.
- [ ] Add page metadata in Next.js.
- [ ] Add a services page hero:
  - Clear headline.
  - Who services are for.
  - CTA to project brief.
- [ ] Add an overview of all five service lines.
- [ ] Link service detail blocks with anchor IDs.

Acceptance criteria:

- `/services` works directly.
- Navigation can link to `/services`.
- Page has unique title and description.

Verification:

- Run lint/build.
- Curl or browser check `/services`.

### 4.2 Service Detail Blocks

- [ ] For each service, include:
  - Who it is for.
  - What problem it solves.
  - What is included.
  - What is not included.
  - Timeline.
  - Budget range.
  - Ideal buyer.
  - CTA.
- [ ] Use consistent layout across services.
- [ ] Keep budget and timeline easy to compare.

Acceptance criteria:

- Buyers can self-select a package.
- Low-fit leads are gently filtered.
- App services are not hidden below web services in a weak way.

Verification:

- Compare service details to PRD section 7.

### 4.3 Service Comparison

- [ ] Add a comparison table or structured comparison layout.
- [ ] Compare:
  - Project type.
  - Timeline.
  - Budget.
  - Deliverables.
  - Best next step.
- [ ] Make the comparison usable on mobile without horizontal scroll.

Acceptance criteria:

- Buyers can compare offers quickly.
- Mobile layout remains readable.

Verification:

- Visual check at 320px.

### 4.4 Qualification Notes

- [ ] Add "good fit" and "not a fit" guidance.
- [ ] Include high-fit criteria from PRD section 9.2.
- [ ] Avoid rude or exclusionary wording.

Acceptance criteria:

- Lead quality improves without making the brand feel cold.
- Budget expectations are clear.

Verification:

- Read wording from a buyer's perspective.

### 4.5 Services CTA

- [ ] Add a CTA section at the bottom of `/services`.
- [ ] Link to `/contact` or the project brief.
- [ ] Set expectations for response time and what to prepare.

Acceptance criteria:

- Services page ends with a concrete next step.

Verification:

- Test CTA link.

Phase 4 gate:

- [ ] `/services` is complete.
- [ ] Service details and comparison are clear.
- [ ] CTA path works.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 5: Work, Proof, and Case Study System

Goal: Build trust without fake proof, then create a structure that can hold real case studies later.

Reference:

- PRD sections 8.2, 12.2, 14, and 15.

### 5.1 Work Route

- [ ] Create `app/work/page.tsx`.
- [ ] Add page metadata.
- [ ] Add a page hero explaining current proof approach.
- [ ] If no real client work is available, clearly state that concept studies show process and deliverable quality.

Acceptance criteria:

- `/work` works directly.
- Page does not overclaim client history.

Verification:

- Run lint/build.

### 5.2 Case Study Template

- [ ] Create a reusable case study structure:
  - Context.
  - Challenge.
  - Goals.
  - Role.
  - Deliverables.
  - Process.
  - Screens or artifacts.
  - Outcome or expected outcome.
  - Next-step CTA.
- [ ] Decide whether templates are static content arrays or future route pages.

Acceptance criteria:

- Real case studies can be added later without rethinking structure.
- Concept studies and real studies can be labeled differently.

Verification:

- Add at least one concept study using the template.

### 5.3 Concept Study Content

- [ ] Build out three concept studies:
  - Local service website redesign.
  - Mobile booking app UX sprint.
  - Startup MVP landing page and prototype.
- [ ] For each concept, include:
  - Target customer.
  - Business problem.
  - UX or website issue.
  - Proposed solution.
  - Deliverables.
  - Sample success metric.
- [ ] Avoid fake client names unless obviously fictional and labeled.

Acceptance criteria:

- The work page demonstrates Jamsaq thinking.
- Every sample is ethically labeled.

Verification:

- Search page text for fake-client phrasing.

### 5.4 Proof Assets

- [ ] Create visual previews for the concept studies:
  - Website before/after layout preview.
  - Mobile app flow preview.
  - MVP prototype preview.
- [ ] Use original assets or generated/internal mockups.
- [ ] Optimize assets for performance.
- [ ] Add descriptive alt text.

Acceptance criteria:

- Visuals make the work feel concrete.
- Assets do not misrepresent real clients.

Verification:

- Check image rendering and Lighthouse performance impact.

### 5.5 Future Real Case Study Intake

- [ ] Create a simple checklist for adding real case studies:
  - Client permission.
  - Problem statement.
  - Services provided.
  - Screenshots approved.
  - Metrics approved.
  - Testimonial approved, if available.
- [ ] Add this checklist to docs or keep it in this file.

Acceptance criteria:

- Future proof collection is repeatable.

Verification:

- Review before publishing any real client work.

Phase 5 gate:

- [ ] `/work` is complete.
- [ ] Concept studies are honest and useful.
- [ ] Case study template exists.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 6: About, Process, and Trust Content

Goal: Make Jamsaq feel credible and human without leaning on fake claims.

Reference:

- PRD sections 5, 6, 8.2, 11, and 15.

### 6.1 About Route

- [ ] Create `app/about/page.tsx`.
- [ ] Add page metadata.
- [ ] Explain what Jamsaq believes:
  - Strategy before screens.
  - Mobile-first UX.
  - Practical delivery.
  - Clear scope.
  - Build-ready handoff.
- [ ] Explain who Jamsaq is best for.
- [ ] Explain who Jamsaq is not best for.

Acceptance criteria:

- About page builds trust without sounding inflated.
- It matches the PRD positioning.

Verification:

- Run lint/build.

### 6.2 Working Principles

- [ ] Add principles:
  - Start with goals.
  - Design for mobile constraints.
  - Make scope visible.
  - Ship useful first versions.
  - Measure and improve after launch.
- [ ] Tie each principle to buyer value.

Acceptance criteria:

- Principles are specific enough to differentiate Jamsaq.

Verification:

- Remove vague claims that could fit any agency.

### 6.3 Detailed Process

- [ ] Add a deeper process section:
  - Discovery and diagnosis.
  - Scope and roadmap.
  - UX and content structure.
  - Visual design.
  - Build or handoff.
  - QA and launch.
  - Post-launch iteration.
- [ ] Include client responsibilities:
  - Feedback timing.
  - Content access.
  - Brand assets.
  - Business goals.
  - Decision maker availability.

Acceptance criteria:

- Buyers know what working together feels like.
- The process protects timelines and scope.

Verification:

- Compare to lead funnel expectations.

### 6.4 Tools and Delivery

- [ ] Mention relevant tools without sounding tool-first:
  - Next.js.
  - Tailwind CSS.
  - Figma.
  - Analytics provider once chosen.
  - Form/CRM provider once chosen.
- [ ] Explain that technology choices support speed, maintainability, and SEO.

Acceptance criteria:

- Technical credibility is present but not overwhelming.

Verification:

- Keep copy useful to non-technical buyers.

Phase 6 gate:

- [ ] `/about` is complete.
- [ ] Trust content is clear and honest.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 7: Contact and Lead Funnel

Goal: Turn interested visitors into qualified project briefs while setting clear expectations for response and fit.

Reference:

- PRD sections 8.3, 9, 12.1, and 13.

### 7.1 Contact Route

- [ ] Create `app/contact/page.tsx`.
- [ ] Add page metadata.
- [ ] Add a contact page hero:
  - Invite buyers to submit a project brief.
  - Mention expected response time.
  - Mention what helps Jamsaq respond well.
- [ ] Include a secondary scheduling CTA only after the brief path is clear.

Acceptance criteria:

- `/contact` works directly.
- The contact page qualifies projects rather than acting as a generic message form.

Verification:

- Run lint/build.

### 7.2 Project Brief Form UI

- [ ] Add fields:
  - Name.
  - Email.
  - Company or project name.
  - Project type.
  - Budget range.
  - Desired launch timeline.
  - Current website or app URL, optional.
  - Short project description.
- [ ] Add project type options:
  - Website.
  - Website redesign.
  - Mobile app UX.
  - MVP build.
  - Ongoing support.
- [ ] Add budget range options:
  - Under $3,000.
  - $3,000-$4,799.
  - $4,800-$8,500.
  - $8,500-$18,000.
  - $18,000-$60,000+.
  - Ongoing monthly support.
- [ ] Add timeline options:
  - ASAP.
  - 1 month.
  - 1-3 months.
  - 3+ months.
  - Exploring options.
- [ ] Add visible labels for every input.
- [ ] Add helper text where it improves lead quality.

Acceptance criteria:

- Form is usable on mobile and desktop.
- Form fields match PRD section 9.1.
- No backend behavior is implied until implemented.

Verification:

- Keyboard through the full form.
- Check labels and focus states.

### 7.3 Client-Side Validation

- [ ] Add basic validation for:
  - Required name.
  - Valid email.
  - Required project type.
  - Required budget range.
  - Required timeline.
  - Required project description.
- [ ] Show inline errors.
- [ ] Keep error text accessible.
- [ ] Prevent empty submission.

Acceptance criteria:

- Invalid forms provide useful feedback.
- Errors are visible and announced by screen readers where practical.

Verification:

- Manually test empty and valid submissions.

### 7.4 Form Handling Decision

- [ ] Choose one:
  - Mailto fallback.
  - Formspree.
  - Vercel serverless route.
  - Netlify form function.
  - Custom API.
  - CRM provider form.
- [ ] Document the decision and why.
- [ ] Do not add a provider without user confirmation if payment, account setup, or credentials are required.

Acceptance criteria:

- The selected handling path fits the launch timeline and maintenance burden.

Verification:

- Decision is recorded in this file or a docs page.

### 7.5 Form Submission Implementation

- [ ] Implement the chosen form handling path.
- [ ] Add success state.
- [ ] Add error state.
- [ ] Add loading state.
- [ ] Add spam protection before public launch:
  - Honeypot field.
  - Rate limit, provider protection, or CAPTCHA if needed.
- [ ] Send internal notification to Jamsaq.
- [ ] Include submitted fields in a readable format.

Acceptance criteria:

- A test submission reaches the intended destination.
- User sees a confirmation.
- Failed submissions are handled gracefully.

Verification:

- Submit test lead.
- Confirm data received.
- Run lint/build.

### 7.6 Post-Submit Experience

- [ ] Add confirmation copy:
  - Thank you.
  - Expected response time.
  - What to prepare.
  - Optional scheduling link if available.
- [ ] If using email automation later, include:
  - Thanks.
  - Response time.
  - Scheduling link.
  - Discovery prep checklist.

Acceptance criteria:

- Buyer knows what happens next.
- Scheduling does not replace lead qualification.

Verification:

- Test success flow.

### 7.7 Lead Scoring

- [ ] Implement or document basic lead scoring:
  - Budget $4,000+.
  - Clear business goal.
  - Timeline within 1-3 months.
  - Decision maker.
  - Needs strategy plus execution.
- [ ] Flag low-fit leads:
  - Full custom app under $3,000.
  - No clear goal.
  - No owner.
  - Unsupported complex regulated work.
- [ ] Start with internal classification if automation is not ready.

Acceptance criteria:

- Lead quality can be reviewed consistently.

Verification:

- Test with high-fit and low-fit sample submissions.

Phase 7 gate:

- [ ] `/contact` is complete.
- [ ] Project brief form works visually.
- [ ] Form handling path is chosen.
- [ ] Public launch has a working lead path.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 8: SEO, Metadata, and Content Discoverability

Goal: Make the site crawlable, shareable, and locally credible before launch.

Reference:

- PRD sections 8.3, 8.4, 12.1, and 13.2.

### 8.1 Global Metadata

- [ ] Update `app/layout.tsx` metadata.
- [ ] Include title:
  - `Jamsaq Web Design Agency`
- [ ] Include description mentioning:
  - Web design.
  - Mobile app design.
  - MVP product design.
  - Founders and small teams.
- [ ] Add Open Graph metadata.
- [ ] Add Twitter card metadata.
- [ ] Add canonical URL after domain is chosen.

Acceptance criteria:

- Metadata includes `Jamsaq`, `web design`, and `mobile app design`.
- Social previews have useful title and description.

Verification:

- Inspect page source or metadata output.
- Run build.

### 8.2 Page-Level Metadata

- [ ] Add metadata for:
  - `/`
  - `/services`
  - `/work`
  - `/about`
  - `/contact`
- [ ] Keep each title and description unique.
- [ ] Match metadata to search intent and buyer intent.

Acceptance criteria:

- No page has duplicate generic metadata.

Verification:

- Review all page files.

### 8.3 Structured Data

- [ ] Add JSON-LD if appropriate:
  - Organization.
  - ProfessionalService.
  - WebSite.
  - Service.
  - FAQPage, if FAQ is stable.
- [ ] Keep structured data honest.
- [ ] Do not add fake reviews, fake ratings, or fake clients.

Acceptance criteria:

- Structured data reflects visible page content.

Verification:

- Validate with a structured data testing tool before launch.

### 8.4 Sitemap and Robots

- [ ] Add `app/sitemap.ts`.
- [ ] Add `app/robots.ts`.
- [ ] Include public routes only.
- [ ] Set domain after deployment domain is chosen.

Acceptance criteria:

- Sitemap is generated.
- Robots file does not block public pages.

Verification:

- Visit `/sitemap.xml` and `/robots.txt` locally or in preview.

### 8.5 Social Preview Image

- [ ] Create a social preview image.
- [ ] Use Jamsaq name and clear offer.
- [ ] Avoid cluttered small text.
- [ ] Add image to metadata.

Acceptance criteria:

- Shared links look credible.

Verification:

- Test with a social preview/debugger after deployment.

### 8.6 Privacy Policy

- [ ] Create `/privacy` if analytics, forms, cookies, or third-party providers are used.
- [ ] Explain:
  - What data is collected.
  - Why it is collected.
  - Who receives it.
  - How users can contact Jamsaq.
- [ ] Keep policy plain-English and accurate.

Acceptance criteria:

- Public data collection is disclosed before launch.

Verification:

- Review after analytics and form provider decisions.

Phase 8 gate:

- [ ] Metadata is complete.
- [ ] Sitemap and robots are complete.
- [ ] Social preview is ready.
- [ ] Privacy policy exists if needed.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 9: Analytics, Tracking, and Learning Loop

Goal: Track the conversion funnel without adding unnecessary complexity or privacy risk.

Reference:

- PRD sections 8.3, 13, and 14.

### 9.1 Analytics Decision

- [ ] Choose provider:
  - Vercel Analytics.
  - Plausible.
  - PostHog.
  - Google Analytics.
  - No analytics for first private preview.
- [ ] Prefer privacy-conscious, low-maintenance analytics.
- [ ] Ask user before connecting paid tools or accounts.
- [ ] Document the decision.

Acceptance criteria:

- Provider matches the launch need.
- Privacy policy reflects tracking.

Verification:

- Decision is recorded.

### 9.2 Event Taxonomy

- [ ] Define event names:
  - `hero_cta_click`
  - `services_cta_click`
  - `pricing_click`
  - `contact_form_start`
  - `contact_form_submit`
  - `contact_form_error`
  - `schedule_click`
- [ ] Define event properties:
  - Page.
  - CTA label.
  - Service.
  - Budget range.
  - Project type.
- [ ] Avoid collecting sensitive freeform notes in analytics.

Acceptance criteria:

- Event names are consistent and useful.
- Tracking avoids unnecessary personal data.

Verification:

- Review with form implementation.

### 9.3 Analytics Implementation

- [ ] Install provider package if needed.
- [ ] Add provider to app layout.
- [ ] Track CTA clicks.
- [ ] Track form start.
- [ ] Track successful submit.
- [ ] Track form errors.
- [ ] Track scheduling clicks if scheduling exists.

Acceptance criteria:

- Events appear in provider dashboard or local debug mode.
- Site still builds successfully.

Verification:

- Submit test interactions.
- Run lint/build.

### 9.4 KPI Review Template

- [ ] Create a lightweight weekly review checklist:
  - Visitors.
  - CTA click rate.
  - Form starts.
  - Form completion rate.
  - Qualified lead count.
  - Discovery calls booked.
  - Notes from leads.
- [ ] Compare to PRD success metrics.

Acceptance criteria:

- Jamsaq has a repeatable way to improve the site after launch.

Verification:

- Add template to docs if useful.

Phase 9 gate:

- [ ] Analytics decision is complete.
- [ ] Event taxonomy is defined.
- [ ] Tracking is implemented only after user confirms provider.
- [ ] Privacy policy is updated if needed.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

## Phase 10: Responsive, Accessibility, and Performance QA

Goal: Make the production site feel solid on real devices, assistive tech, and slow connections.

Reference:

- PRD sections 8.3, 10.2, and 13.2.

### 10.1 Responsive QA

- [ ] Test these widths:
  - 320px.
  - 375px.
  - 768px.
  - 1024px.
  - 1440px.
- [ ] Check:
  - No horizontal scroll.
  - Buttons fit.
  - Long service names wrap cleanly.
  - Cards keep stable spacing.
  - Forms remain readable.
  - Navigation works.
  - Footer does not crowd.
- [ ] Fix any layout issue before launch.

Acceptance criteria:

- Every public page works at 320px and desktop.
- No text overlaps other content.

Verification:

- Use browser dev tools or Playwright screenshots if available.

### 10.2 Accessibility QA

- [ ] Check heading order.
- [ ] Confirm every input has a visible label.
- [ ] Confirm focus states are visible.
- [ ] Confirm interactive elements are keyboard reachable.
- [ ] Confirm color contrast.
- [ ] Confirm images have meaningful alt text or empty alt for decorative images.
- [ ] Confirm form errors are understandable.
- [ ] Confirm link text is descriptive.

Acceptance criteria:

- Lighthouse Accessibility target is 95+.
- Keyboard-only user can reach all actions.

Verification:

- Run Lighthouse or equivalent after deployment preview.

### 10.3 Performance QA

- [ ] Run `npm run build`.
- [ ] Inspect build output for route sizes.
- [ ] Avoid unnecessary client components.
- [ ] Optimize images.
- [ ] Remove unused dependencies.
- [ ] Keep animations lightweight.
- [ ] Confirm no large blocking scripts are added.

Acceptance criteria:

- Lighthouse Performance target is 90+.
- Homepage first contentful paint target is under 1.8s on production, subject to hosting and network.

Verification:

- Run production build.
- Test deployed preview with Lighthouse.

### 10.4 Content QA

- [ ] Proofread every public page.
- [ ] Check all pricing ranges.
- [ ] Check all CTAs.
- [ ] Check no placeholder text remains.
- [ ] Check no fake client proof exists.
- [ ] Check no unsupported promise exists.
- [ ] Check all links work.

Acceptance criteria:

- Public site is launch-ready from a content trust perspective.

Verification:

- Manual review pass.

### 10.5 Technical QA

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --omit=dev`.
- [ ] Confirm app starts locally.
- [ ] Confirm no secrets are committed.
- [ ] Confirm `.gitignore` excludes build output and environment files.

Acceptance criteria:

- Codebase is stable before deployment.

Verification:

- Record command results in final response for the QA task.

Phase 10 gate:

- [ ] Responsive QA passes.
- [ ] Accessibility QA passes.
- [ ] Performance QA passes.
- [ ] Content QA passes.
- [ ] Technical QA passes.

## Phase 11: Deployment and Launch

Goal: Publish the site, connect the domain, verify the funnel, and make launch reversible if something goes wrong.

Reference:

- PRD sections 8.5, 12, 13, and 14.

### 11.1 Hosting Decision

- [ ] Choose hosting:
  - Vercel recommended for Next.js.
  - Alternative Next.js-compatible provider if user prefers.
- [ ] Confirm GitHub integration.
- [ ] Confirm build command:
  - `npm run build`
- [ ] Confirm install command:
  - `npm install`
- [ ] Confirm output settings are provider-compatible.

Acceptance criteria:

- Hosting provider can deploy Next.js App Router cleanly.

Verification:

- Preview deployment succeeds.

### 11.2 Environment Variables

- [ ] List required environment variables:
  - Form provider keys.
  - Analytics keys.
  - CRM keys.
  - Scheduling link, if treated as config.
- [ ] Add `.env.example`.
- [ ] Add real variables only in provider dashboard or local `.env.local`.
- [ ] Do not commit secrets.

Acceptance criteria:

- Deployment has all required config.
- Repo contains only safe examples.

Verification:

- Check `git status` and committed files.

### 11.3 Domain Setup

- [ ] Choose final domain.
- [ ] Configure DNS.
- [ ] Add domain to hosting provider.
- [ ] Confirm HTTPS.
- [ ] Update canonical URL.
- [ ] Update metadata URLs.
- [ ] Update sitemap and robots host.

Acceptance criteria:

- Public domain loads over HTTPS.
- Metadata points to final domain.

Verification:

- Visit domain.
- Check certificate and redirects.

### 11.4 Preview QA

- [ ] Test all public routes:
  - `/`
  - `/services`
  - `/work`
  - `/about`
  - `/contact`
  - `/privacy`, if present
- [ ] Test navigation.
- [ ] Test project brief submission.
- [ ] Test analytics events if implemented.
- [ ] Test social metadata.
- [ ] Test mobile and desktop.

Acceptance criteria:

- Preview is ready to become production.

Verification:

- Record preview URL and checks performed.

### 11.5 Launch Checklist

- [ ] Production deploy complete.
- [ ] Domain works.
- [ ] HTTPS works.
- [ ] Form works.
- [ ] Jamsaq receives test lead.
- [ ] Analytics works if enabled.
- [ ] Sitemap works.
- [ ] Robots works.
- [ ] Social preview works.
- [ ] README deployment notes are updated.

Acceptance criteria:

- Public visitors can understand the offer and submit a qualified brief.

Verification:

- Final launch smoke test.

### 11.6 Rollback Plan

- [ ] Identify last stable deployment.
- [ ] Confirm provider rollback process.
- [ ] Keep launch commit easy to identify.
- [ ] Document what to do if form handling breaks.

Acceptance criteria:

- Launch has a simple recovery path.

Verification:

- Confirm rollback option exists in hosting provider.

Phase 11 gate:

- [ ] Site is publicly live.
- [ ] Lead path works.
- [ ] Domain and metadata are correct.
- [ ] Rollback path is known.

## Phase 12: Post-Launch Growth and Maintenance

Goal: Improve the site based on traffic, leads, proof, and service focus after launch.

Reference:

- PRD sections 13 and 14.

### 12.1 First-Week Monitoring

- [ ] Check uptime daily for first week.
- [ ] Check form submissions.
- [ ] Check analytics.
- [ ] Check broken links.
- [ ] Check mobile rendering on at least one real phone if available.
- [ ] Log any user feedback.

Acceptance criteria:

- Launch issues are caught quickly.

Verification:

- Maintain a short launch notes doc if issues appear.

### 12.2 First-Month Optimization

- [ ] Review:
  - Visitor-to-lead conversion rate.
  - Hero CTA click rate.
  - Form start rate.
  - Form completion rate.
  - Qualified lead rate.
  - Most viewed pages.
- [ ] Compare to PRD metrics.
- [ ] Identify one copy improvement.
- [ ] Identify one UX improvement.
- [ ] Identify one lead-quality improvement.

Acceptance criteria:

- Improvements are based on evidence, not random redesign.

Verification:

- Create tasks before making changes.

### 12.3 Proof Development

- [ ] Replace concept studies with real case studies when available.
- [ ] Add approved testimonials only with permission.
- [ ] Add before/after evidence only when accurate.
- [ ] Add project screenshots only when approved.
- [ ] Add outcome metrics only when real and approved.

Acceptance criteria:

- Trust assets get stronger without compromising honesty.

Verification:

- Review proof source and permission before publishing.

### 12.4 Content Engine

- [ ] Plan articles or guides around:
  - Website redesign planning.
  - Mobile app UX validation.
  - Startup MVP scoping.
  - Local business website conversion.
  - Design audit checklists.
- [ ] Add a simple insights/blog route only when there is real content.
- [ ] Keep content tied to service lines.

Acceptance criteria:

- Content supports qualified lead generation.

Verification:

- Each content idea maps to a persona and service.

### 12.5 Productized Tools

- [ ] Consider adding:
  - Website redesign audit lead magnet.
  - Mobile app MVP cost estimator.
  - App idea brief generator.
  - Project readiness checklist.
- [ ] Build only one tool at a time.
- [ ] Measure whether it improves lead quality.

Acceptance criteria:

- Tools support the funnel and do not distract from core services.

Verification:

- Define success metric before building.

### 12.6 Operational Assets

- [ ] Create reusable proposal templates.
- [ ] Create discovery call checklist.
- [ ] Create client onboarding checklist.
- [ ] Create project kickoff doc.
- [ ] Create handoff checklist.
- [ ] Create monthly retainer review template.

Acceptance criteria:

- Jamsaq can deliver consistently after leads arrive.

Verification:

- Store assets in a docs folder or external workspace.

### 12.7 Maintenance

- [ ] Update dependencies monthly or as needed.
- [ ] Run security audit after dependency changes.
- [ ] Review analytics monthly.
- [ ] Review form spam monthly.
- [ ] Keep pricing ranges current.
- [ ] Keep service descriptions accurate.
- [ ] Keep `TASKS.md` updated.

Acceptance criteria:

- Site remains accurate, secure, and useful after launch.

Verification:

- Monthly maintenance commit or notes.

Phase 12 gate:

- [ ] Launch is monitored.
- [ ] Improvements are evidence-led.
- [ ] Real proof replaces concepts over time.
- [ ] Operations support delivery.

## Standard Verification Commands

For code or UI changes:

```bash
npm run lint
npm run build
```

For local visual review:

```bash
npm run dev -- --hostname 0.0.0.0
```

For dependency/security check:

```bash
npm audit --omit=dev
```

For route smoke checks while dev server is running:

```bash
curl -I http://127.0.0.1:3000/
curl -I http://127.0.0.1:3000/services
curl -I http://127.0.0.1:3000/work
curl -I http://127.0.0.1:3000/about
curl -I http://127.0.0.1:3000/contact
```

## Definition of Done for Any Task

- The requested task is complete.
- Public copy follows the PRD.
- No fake client proof or unsupported claim was added.
- Mobile layout works at 320px.
- Keyboard focus and labels are acceptable for changed UI.
- `npm run lint` passes for app changes.
- `npm run build` passes for app changes.
- `TASKS.md` is updated.
- Changes are committed and pushed unless the user asks otherwise.

## Recommended Next Task

Start with **Phase 0.5 Current Baseline Review**, then move into **Phase 1.1 Page Map and Navigation**. After Phase 1 is complete, build the homepage MVP in Phase 3 before expanding dedicated pages.
