# Working With Codex on Jamsaq

This workflow keeps Jamsaq work scoped, reviewable, and easy to continue across sessions.

## Official Guidance Used

- OpenAI Codex best practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex workflows: https://developers.openai.com/codex/workflows
- OpenAI AGENTS.md guide: https://developers.openai.com/codex/guides/agents-md

## Core Rules

1. Use one thread per coherent task, not one endless thread for the whole project.
2. Keep durable instructions in `AGENTS.md`.
3. Keep product strategy in `docs/PRD.md`.
4. Keep execution order in `TASKS.md`.
5. Ask Codex to plan first when a task touches multiple sections or files.
6. Ask Codex to verify its work with lint/build for app changes.
7. Commit small chunks after each completed task.

## Default Prompt Template

Use this shape when asking Codex to work:

```text
Goal:
Context:
Constraints:
Done when:
Verification:
```

Example:

```text
Goal:
Complete TASKS.md Phase 1.1 Hero Positioning.

Context:
Follow docs/PRD.md sections 6, 7, and 8. Keep the current visual direction, but make the first viewport clearly sell web design and mobile app UX.

Constraints:
- React + CSS only.
- Do not add dependencies.
- Do not add routing.
- Keep mobile layout clean at 320px.

Done when:
- The hero mentions websites and mobile app experiences.
- CTAs are "Start a project" and "Explore services".
- A credibility strip appears below the hero.
- TASKS.md Phase 1.1 is marked done.

Verification:
Run npm run lint and npm run build.
```

## How To Choose Task Size

Good Codex task:

- Changes one section or one feature.
- Has clear acceptance criteria.
- Can be verified in under a few minutes.
- Can be reviewed as one commit.

Too broad:

- "Build the whole site."
- "Make it look better."
- "Add everything from the PRD."

Better:

- "Complete Phase 1.2 Service Lines from TASKS.md."
- "Upgrade the lead form fields only."
- "Add Open Graph metadata and verify build."

## Standard Build Loop

For code/UI tasks:

1. Read `AGENTS.md`, `TASKS.md`, and relevant PRD sections.
2. Inspect current files before editing.
3. Make focused edits.
4. Run:

```bash
npm run lint
npm run build
```

5. Start the dev server when visual review is useful:

```bash
npm run dev -- --host 0.0.0.0
```

6. Update `TASKS.md`.
7. Commit with a concise message.
8. Push to `origin/main` unless the user asks for a branch/PR flow.

## Visual QA Checklist

Before accepting a visual change:

- Mobile width 320px has no horizontal scroll.
- Buttons do not wrap awkwardly.
- Long labels stay inside their containers.
- Text contrast is readable.
- Headings follow a logical order.
- Forms have visible labels.
- CTAs are obvious without explanatory feature text.

## When To Stop And Ask

Ask the user before:

- Changing the brand direction substantially.
- Adding paid services or external providers.
- Adding new dependencies.
- Creating fake client work or fake testimonials.
- Choosing a deployment provider.
- Connecting analytics, CRM, or form handling.

## Review Prompt

Use this before committing bigger changes:

```text
/review Focus on:
- regressions in mobile layout
- accessibility issues
- unclear agency positioning
- accidental fake claims
- unnecessary dependencies
```

## Session Handoff

At the end of each work session, Codex should report:

- What task was completed.
- Files changed.
- Commands run and results.
- Current local URL if the dev server is running.
- Next recommended task from `TASKS.md`.
