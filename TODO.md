# GemSack Agency Website TODO

This task file is designed to be followed from scratch to a complete first website build. It is intentionally detailed so implementation can proceed without repeatedly re-deciding the product direction.

## Status Legend

- `[ ]` Not started
- `[~]` In progress
- `[x]` Completed
- `[!]` Blocked / needs user input

## Phase 0: Project Groundwork

- [x] Confirm workspace is empty and ready for a new build.
- [x] Research competitive web design agency websites.
- [x] Identify common patterns across premium agency websites.
- [x] Decide initial scope: one-page premium marketing site with future multi-page expansion.
- [x] Define brand name as GemSack Agency.
- [x] Create `PRD.md`.
- [x] Create `TODO.md`.

## Phase 1: Strategy & Content Planning

- [x] Define primary audience: founders, small businesses, startups, premium service providers, marketing leads.
- [x] Define positioning: conversion-focused websites for clarity, credibility, and growth.
- [x] Define primary CTA: Start a project.
- [x] Define secondary CTA: View work.
- [x] Define navigation: Work, Services, Process, About, Contact.
- [x] Define homepage section sequence:
  - Header
  - Hero
  - Capability strip
  - Featured work
  - Services
  - Process
  - Differentiators
  - Metrics
  - Testimonials
  - Insights
  - FAQ
  - Contact
  - Footer
- [x] Define visual tone: premium, editorial, dark-first, strategic, polished.
- [x] Define placeholder policy for case studies and testimonials.

## Phase 2: Technical Setup

- [x] Scaffold Next.js App Router application.
- [x] Install dependencies.
- [x] Install `lucide-react` for icons.
- [x] Confirm `npm run build` works on starter app.
- [x] Replace default starter files.
- [x] Update HTML title and meta tags.
- [x] Add Open Graph basics.
- [x] Define root CSS variables.
- [x] Define responsive breakpoints.
- [x] Define base typography.
- [x] Confirm no old generated files or logs remain.

## Phase 3: Content Data Model

- [x] Create agency constants:
  - Name
  - Short name
  - Email placeholder
  - Phone placeholder
  - Location placeholder
  - Social placeholders
- [x] Create service data:
  - Website Strategy
  - Web Design
  - Website Development
  - Landing Pages
  - Brand Identity Direction
  - SEO & Conversion Foundations
  - Website Redesign
  - Maintenance & Iteration
- [x] For each service, define:
  - Title
  - Summary
  - Deliverables
  - Best-fit use case
  - Icon
- [x] Create case-study data:
  - SaaS Website Redesign
  - Premium Service Brand
  - Local Business Lead Engine
- [x] For each case, define:
  - Title
  - Category
  - Summary
  - Placeholder metric
  - Tags
- [x] Create process data:
  - Discover
  - Map
  - Design
  - Build
  - Launch
  - Improve
- [x] Create differentiator data.
- [x] Create metric data.
- [x] Create testimonial placeholder data.
- [x] Create FAQ data.
- [x] Create insights preview data.

## Phase 4: App Structure

- [x] Build top-level `src/app/page.tsx` route.
- [x] Build `Header` component.
- [x] Build `Hero` component.
- [x] Build `CapabilityStrip` component.
- [x] Build `FeaturedWork` component.
- [x] Build `Services` component.
- [x] Build `Process` component.
- [x] Build `Differentiators` component.
- [x] Build `Metrics` component.
- [x] Build `Testimonials` component.
- [x] Build `Insights` component.
- [x] Build `FAQ` client component.
- [x] Build `Contact` client component.
- [x] Build `Footer` component.
- [x] Build reusable components:
  - Section heading
  - Button
  - Visual placeholder
  - Tag
  - Card

## Phase 5: Header & Navigation

- [x] Implement semantic header.
- [x] Add GemSack wordmark.
- [x] Add desktop nav links.
- [x] Add CTA button.
- [x] Add mobile menu button.
- [x] Add mobile menu open/close state.
- [x] Close mobile menu after clicking links.
- [x] Add keyboard-accessible focus styles.
- [x] Ensure header does not cover section headings when anchor links scroll.

## Phase 6: Hero Section

- [x] Implement hero layout.
- [x] Add eyebrow: “Web Design & Growth Systems”.
- [x] Add H1: “Websites with strategy, polish, and momentum.”
- [x] Add supporting copy.
- [x] Add primary CTA.
- [x] Add secondary CTA.
- [x] Add hero visual composition.
- [x] Add service microcopy line.
- [x] Add hero proof notes.
- [x] Ensure hero is strong on mobile.
- [x] Ensure hero text does not overlap visual elements.

## Phase 7: Capability Strip

- [x] Add horizontal strip with capabilities.
- [x] Include Strategy, UX Design, Web Design, Development, SEO Setup, Conversion, Maintenance.
- [x] Add slow marquee or repeated row.
- [x] Support reduced motion.
- [x] Ensure strip is readable and not distracting.

## Phase 8: Featured Work

- [ ] Add section heading.
- [ ] Add 3 case-study cards.
- [ ] Add image/interface placeholders for each case.
- [ ] Add metric chips.
- [ ] Add tags.
- [ ] Add hover states.
- [ ] Add “View work” CTA.
- [ ] Make grid responsive.
- [ ] Mark content as sample/placeholder in a subtle way.

## Phase 9: Services Section

- [ ] Add services section heading.
- [ ] Add all 8 service cards.
- [ ] Add icons.
- [ ] Add deliverables list per card.
- [ ] Add best-fit microcopy.
- [ ] Add CTA to contact section.
- [ ] Use consistent card heights where possible.
- [ ] Ensure long service names wrap cleanly.
- [ ] Make mobile cards readable.

## Phase 10: Process Section

- [ ] Add process section heading.
- [ ] Add six process steps.
- [ ] Show step numbers.
- [ ] Explain what happens in each step.
- [ ] Explain output/deliverable.
- [ ] Use timeline/card layout.
- [ ] Ensure process reduces buyer uncertainty.
- [ ] Add CTA after process.

## Phase 11: Differentiators

- [ ] Add a high-contrast section.
- [ ] Add 6 differentiators.
- [ ] Include strategy, conversion, frontend speed, communication, design system, AI-assisted research.
- [ ] Use split layout with strong statement.
- [ ] Add supporting visual placeholder.

## Phase 12: Metrics / Trust

- [ ] Add metric strip.
- [ ] Use editable placeholder numbers.
- [ ] Avoid pretending numbers are real.
- [ ] Use labels such as “launch-ready sections” or “service pillars” if no real metrics exist.
- [ ] Ensure visual balance on desktop and mobile.

## Phase 13: Testimonials

- [ ] Add testimonial placeholder section.
- [ ] Use 3 cards.
- [ ] Clearly indicate replaceable quote placeholders.
- [ ] Include role labels.
- [ ] Avoid fake real client claims.
- [ ] Make cards visually polished.

## Phase 14: Insights

- [ ] Add insights preview section.
- [ ] Add 3 article cards.
- [ ] Use topic titles from PRD.
- [ ] Add category labels.
- [ ] Add placeholder dates or “Coming soon”.
- [ ] Add CTA for future insights.

## Phase 15: FAQ

- [ ] Add FAQ section.
- [ ] Add 8 questions.
- [ ] Implement accessible accordion.
- [ ] Default first item open or all closed.
- [ ] Add visible focus states.
- [ ] Ensure answer copy is concise.
- [ ] Test keyboard interaction.

## Phase 16: Contact Section

- [ ] Add contact section heading.
- [ ] Add contact promise.
- [ ] Add form fields:
  - Name
  - Email
  - Company
  - Project type
  - Budget range
  - Timeline
  - Message
- [ ] Add submit button.
- [ ] Implement frontend-only submit success message.
- [ ] Prevent default form submission.
- [ ] Add direct email placeholder.
- [ ] Add phone/WhatsApp placeholder.
- [ ] Add location placeholder.
- [ ] Ensure form is accessible.
- [ ] Ensure form works on mobile.

## Phase 17: Footer

- [ ] Add footer brand summary.
- [ ] Add footer nav links.
- [ ] Add services mini-list.
- [ ] Add contact information.
- [ ] Add social placeholders.
- [ ] Add copyright line.
- [ ] Add privacy placeholder link.

## Phase 18: CSS & Visual Polish

- [ ] Define global reset.
- [ ] Define color variables.
- [ ] Define typography variables.
- [ ] Define layout utility classes.
- [ ] Define button styles.
- [ ] Define card styles.
- [ ] Define section styles.
- [ ] Define placeholder visual styles.
- [ ] Add card hover states.
- [ ] Add button hover states.
- [ ] Add focus-visible styles.
- [ ] Add responsive rules.
- [ ] Add reduced-motion support.
- [ ] Check no text overlaps at common widths.
- [ ] Check no horizontal overflow on mobile.

## Phase 19: SEO & Metadata

- [ ] Update `<title>`.
- [ ] Add meta description.
- [ ] Add Open Graph title.
- [ ] Add Open Graph description.
- [ ] Add theme color.
- [ ] Ensure only one H1.
- [ ] Ensure section headings are hierarchical.
- [ ] Add descriptive button labels.

## Phase 20: Accessibility

- [ ] Ensure header is semantic.
- [ ] Ensure main content is inside `<main>`.
- [ ] Ensure footer is semantic.
- [ ] Ensure form controls have labels.
- [ ] Ensure icon-only buttons have aria-labels.
- [ ] Ensure FAQ buttons include expanded state.
- [ ] Ensure contrast is acceptable.
- [ ] Ensure keyboard tab order is logical.
- [ ] Ensure mobile menu can be operated with keyboard.
- [ ] Respect reduced motion.

## Phase 21: Verification

- [x] Run `npm run build`.
- [x] Run `npm run lint`.
- [ ] Start local dev server.
- [x] Browser-check desktop homepage.
- [ ] Browser-check mobile homepage.
- [ ] Browser-check menu.
- [x] Browser-check FAQ accordion.
- [x] Browser-check contact form success state.
- [ ] Browser-check anchor navigation.
- [ ] Check console for visible errors if tooling supports it.
- [ ] Make final adjustments.

## Phase 22: Post-V1 Enhancements

- [ ] Replace placeholder logo with real logo.
- [ ] Replace sample case studies with real work.
- [ ] Add real testimonials.
- [ ] Add privacy policy.
- [ ] Add contact form backend.
- [ ] Add analytics.
- [ ] Add page routing.
- [ ] Add individual service pages.
- [ ] Add CMS for insights.
- [ ] Add deployment configuration.
- [ ] Add sitemap and robots file after deployment.

## Implementation Notes

- Prefer a polished complete first version over a partially built complex system.
- Keep content data editable in `App.jsx` for now.
- Keep CSS organized with clear section comments if useful.
- Avoid unnecessary dependencies.
- Use placeholders that look intentional.
- Do not use copyrighted competitor assets.
- Do not copy competitor layouts exactly; use research-informed patterns only.
