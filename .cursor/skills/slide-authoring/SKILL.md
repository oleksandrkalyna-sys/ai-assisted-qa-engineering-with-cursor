---
name: slide-authoring
description: >-
  Author and extend this Slidev workshop deck using MEV layouts, demo-cue
  templates, and PRD must-cover topics. Use when adding slides, section headers,
  comparison slides, demo cues, or running an acceptance pass against docs/PRD.md.
---

# Slide authoring workflow

Requirements: `@docs/PRD.md`. Rules: `.cursor/rules/slide-authoring.mdc`, `.cursor/rules/brand-and-theme.mdc`. Links: `data/links.ts`.

## Add a section header

1. Choose the section file under `pages/` (e.g. `02-theory.md`; numbered `01`–`06`).
2. Insert:

```markdown
---
layout: section
---

# Section title
```

3. Optional light variant: `variant: light` in frontmatter (uses `bg-section-light.jpg`).
4. Do not invent new backgrounds — use layouts that already bind `public/brand/` assets.

## Add a default content slide

```markdown
---
layout: default
---

# One idea title

Body bullets or short prose. Prefer one idea per slide. Use spaced en dashes (` – `) for breaks in prose—not em dashes or ` - ` (see `.cursor/rules/slide-authoring.mdc`).
```

Optional figure (0–1 per slide):

```markdown
---
layout: two-cols
---

# Slide title

Body on the left.

::right::

<TwoColFigure
  src="/brand/figures/diagram-example.png"
  alt="Accessible description"
/>
```

Cover slide only — hero editorial figure:

```markdown
<SectionFigure name="vintage-tv" position="bottom" size="h-48" />
```

Valid `SectionFigure` names: `filmmaker`, `vintage-tv`, `retro-computer`, `pointing-hand`, `enter-runners`, `crt-communicator`. On two-column slides, reference the same files via `TwoColFigure` `src` paths under `/brand/figures/`.

## Add a two-column comparison

```markdown
---
layout: two-cols
---

# Left title

Left content

::right::

# Right title

Right content
```

## Add a demo cue slide

Every cue slide must include all four fields:

```markdown
---
layout: default
---

# Demo cue: short name

**Goal:** One sentence.

**Observe:** What the attendee should watch for.

**Outcome:** Expected outcome class (e.g. draft test + human review).

**Docs:** [Relevant docs](https://cursor.com/docs/...)
```

Cues may illustrate patterns from a live project but must remain understandable without private-repo access.

## Resources / links

- Do not hardcode long URL lists on theory slides.
- Update `data/links.ts` when Cursor docs paths change.
- Resources slide renders via `<CanonicalLinks />`.

## Acceptance pass (PRD §10)

Before calling the deck done, confirm:

1. Self-descriptive must-cover topics from slides alone
2. Section complete (PRD §4–§5 must-cover)
3. Link-complete (`data/links.ts` + on-slide / Resources)
4. Brand-aligned (no Seriph / Unsplash / purple AI gradients)
5. No facilitator-only artifacts committed
6. `npm run build` succeeds
7. English throughout
8. En-dash punctuation per PRD §9 / `slide-authoring.mdc` (no `—` or ` - ` as sentence dashes in slide copy)
