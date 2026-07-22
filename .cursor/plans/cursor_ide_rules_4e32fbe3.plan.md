---
name: Cursor IDE Rules
overview: Add a focused set of version-controlled Cursor project rules (plus a thin root AGENTS.md) that encode this repo’s Slidev workshop product boundaries, slide authoring standards, brand tokens, and PRD maintenance guidance from docs/PRD.md.
todos:
  - id: agents-md
    content: Create thin root AGENTS.md pointing to PRD + .cursor/rules
    status: completed
  - id: rule-project-scope
    content: Create alwaysApply project-scope.mdc (product boundaries, non-goals, language)
    status: completed
  - id: rule-slide-authoring
    content: Create slide-authoring.mdc for slides.md and pages/** (structure, cues, links)
    status: completed
  - id: rule-brand-theme
    content: Create brand-and-theme.mdc for CSS/Vue/theme files (MEV tokens, layouts)
    status: completed
  - id: rule-docs-prd
    content: Create docs-prd.mdc for docs/** maintenance conventions
    status: completed
isProject: false
---

# Comprehensive Cursor Rules for This Project

## Context

This repo is a **Slidev workshop slide deck** (“AI-Assisted QA Engineering with Cursor”), not a general app. Requirements already live in [`docs/PRD.md`](docs/PRD.md). There is **no** [`.cursor/rules/`](.cursor/rules/) yet; starter files ([`slides.md`](slides.md), [`README.md`](README.md)) are still placeholder Seriph content.

Rules will teach the Agent how to **build and maintain this product** correctly—not duplicate the entire PRD.

## Design principles (locked)

- **Source of truth:** [`docs/PRD.md`](docs/PRD.md); rules summarize and point to it, they do not restate every slide topic.
- **One concern per rule**, concise (aim &lt;50 lines each), actionable with concrete do/don’t examples.
- **Scoped application:** one always-on rule for product boundaries; file-glob rules for slides, theme, and docs.
- **Also add** a thin root [`AGENTS.md`](AGENTS.md) (workshop teaches this format; Cursor supports it alongside `.cursor/rules`). It will be a short project map + pointers, not a second full rulebook.
- **No** facilitator materials guidance that contradicts PRD non-goals (no agenda/timing/speaker-notes/prep as product files).

## Files to create

```text
AGENTS.md
.cursor/rules/
  project-scope.mdc
  slide-authoring.mdc
  brand-and-theme.mdc
  docs-prd.mdc
```

### 1. [`AGENTS.md`](AGENTS.md) (root)

Short agent entrypoint:

- Product: English Slidev deck for QA engineers
- Canonical requirements: `@docs/PRD.md`
- Detailed guidance: `.cursor/rules/`
- Scripts: `npm run dev` / `build` / `export`
- Out of scope: facilitator-only artifacts

### 2. [`project-scope.mdc`](.cursor/rules/project-scope.mdc) — Always Apply

Encode product boundaries every session:

- In-repo: `slides.md`, `pages/`, theme/styles/assets, package scripts, `docs/PRD.md`
- Out of repo: agenda, timing, speaker-notes deliverables, prep checklists, Isara demo scripts, facilitator Q&A banks
- Language: English; audience: QA engineers
- Starter Seriph/`Welcome to Slidev` content is placeholder—replace, do not extend
- Prefer self-descriptive slides (reader learns without a facilitator)
- When unsure, read `@docs/PRD.md` before inventing scope

### 3. [`slide-authoring.mdc`](.cursor/rules/slide-authoring.mdc) — Globs: `slides.md`, `pages/**/*.md`

Slide content and structure rules:

- Follow PRD section order (title → theory → best practices → practical → resources → Q&A/close); `pages/01`–`06`
- One idea per slide; two-column for comparisons
- Demo cue slides must include: goal, what to observe, outcome class, docs link when relevant
- Must-cover vs stretch: implement must-cover first; mark stretch clearly if present
- Linking: every non-trivial tool/claim gets an on-slide or Resources URL; keep Resources as the link update hub
- Embed the required URL checklist (Cursor docs, agent overview, rules, skills, commands, pricing, agents.md, Slidev)
- Do not depend on HTML comment speaker notes for core meaning
- Demo cues may illustrate patterns (e.g. Isara-like) but must not require private-repo access to understand

### 4. [`brand-and-theme.mdc`](.cursor/rules/brand-and-theme.mdc) — Globs: `**/*.{css,vue}`, `styles/**/*`, `theme/**/*`, `components/**/*`

Visual / theme rules from PRD §8:

- Aspect ~16:9
- Tokens: primary `#002894`, accent `#4285F4`, soft `#B8CBFF`, dark `#212126`/`#000000`, light `#FFFFFF`/`#EEEEEE`, links `#0097A7`
- Type: Oswald (display) + Arial (body), or close licensed equivalents
- Layout vocabulary: title, section header, title+body, two-column, Q&A, thank-you (contact only if template needs it)
- Forbidden: purple/AI-gradient aesthetics, inventing a new brand system, keeping Seriph as visual identity
- Prefer CSS variables / theme tokens over one-off hardcodes; point to PRD §8 for full table

### 5. [`docs-prd.mdc`](.cursor/rules/docs-prd.mdc) — Globs: `docs/**/*.md`

When editing requirements docs:

- Keep goals/non-goals and acceptance criteria coherent with the slide product
- Do not reintroduce facilitator artifacts into “in repository” deliverables
- Brand and link checklists stay authoritative; update rules if PRD tokens/URLs change
- Prefer precise requirement language over workshop prose

## What we will not add

- Rules for general TypeScript/React app architecture (this repo is slides-first; only light Vue/CSS guidance in brand rule)
- A huge “workshop curriculum dump” rule (that belongs on slides / in the PRD)
- Duplicate copies of the full PRD inside each `.mdc`

## Validation after implementation

- Confirm each `.mdc` has valid frontmatter (`description` / `globs` / `alwaysApply` as appropriate)
- Confirm only `.mdc` files sit under `.cursor/rules/` (plain `.md` there is ignored)
- Spot-check that always-apply rule stays short so it does not waste context every turn
