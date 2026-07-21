---
name: Workshop PRD Docs
overview: Create a PRD that defines a self-descriptive Slidev slide deck for QA engineers, matching MEV corporate branding, with all relevant links in-slide—no separate agenda, speaker notes, timing, or prep docs in the repo.
todos:
  - id: create-docs-prd
    content: Create docs/PRD.md defining slides-only product (goals, audience, slide sections, links, brand, acceptance criteria)
    status: completed
  - id: encode-brand-content
    content: Encode MEV template brand tokens + must-cover vs stretch slide topics from workshop draft into the PRD
    status: completed
  - id: self-descriptive-reqs
    content: Specify self-descriptive slide requirements (inline links, demo cue slides, no facilitator-only artifacts)
    status: completed
isProject: false
---

# PRD for AI-Assisted QA Engineering with Cursor Slides

## Goal

Write product requirements for a **GitHub-ready Slidev slide deck** that is **self-descriptive**: content, section flow, and reference links live on the slides themselves. The repo contains **everything related to slides** — not facilitator materials.

## Decisions (locked)

- **Repo scope:** Slides only (Slidev source, theme/brand assets, in-slide links/resources). Safe to commit to GitHub as the full product.
- **Out of repo:** Separate agenda docs, speaker notes, timing sheets, run-of-show, demo prep scripts, Q&A facilitator banks
- **Format:** Slidev, visually aligned to corporate PPTX template ([Presentation template.pptx](/Users/okalyna/Downloads/Presentation%20template.pptx)); PDF/PPTX export as secondary distribution
- **Audience:** QA engineers
- **Language:** English
- **Live demo context:** Practical section may include short **on-slide cues** (what will be shown / what to look for) referencing patterns from Isara; detailed demo prep stays outside the repo
- **Self-descriptive rule:** A reader who opens the deck without a facilitator should still understand the concepts and find official/docs links

## PRD location and shape

Create **[`docs/PRD.md`](docs/PRD.md)**.

Structure the PRD as:

1. **Problem / opportunity** — why QA engineers need Cursor fluency
2. **Goals & non-goals** — learning outcomes via slides; explicitly exclude facilitator-only artifacts from the product
3. **Audience & prerequisites**
4. **Slide deck structure** — ordered sections (no minute budgets); must-cover vs stretch slides
5. **Content requirements** — topics per section + required in-slide links
6. **Deliverables** — Slidev deck (+ optional export); what must *not* be committed
7. **Visual / brand requirements** — corporate template → Slidev theme
8. **Acceptance criteria** — self-descriptive, branded, link-complete
9. **Risks** — brand fidelity, link rot, over-dense slides

## Slide sections to encode in the PRD (no timing)

Ordered narrative for ~1h delivery; PRD defines **slide sections**, not a clock:

- **Title / intro** — workshop name, audience framing, what you will learn
- **Overview** — self-descriptive section map (replaces a separate agenda doc)
- **General theory** — tokens, agents, models, harness, pricing, `AGENTS.md`, QA mental model
- **Cursor best practices** — modes, context/rules/skills, safe QA patterns, verification
- **Practical usage** — skills/commands; on-slide demo cues (self-contained enough without a prep doc)
- **Resources** — curated links (Cursor docs, AGENTS.md guidance, pricing, related standards)
- **Q&A / close** — simple Q&A and thank-you layouts from the corporate template vocabulary

PRD lists **must-cover** vs **stretch** slides so the deck can tighten or expand without rewriting requirements.

## Content requirements (to specify in PRD)

### Theory (must-cover on slides)

- Token / context window basics (cost & quality implications for QA)
- Models vs agents vs tools/harness
- Pricing / usage awareness (with link to current pricing/docs)
- `AGENTS.md` standard (what it is, why it matters, link to canonical guidance)
- QA loop: generate → review → verify → automate

### Cursor best practices (must-cover on slides)

- When to use Chat / Agent / Inline / Tab
- Grounding with repo context, rules, and skills
- Safe patterns for test generation, bug investigation, flake triage
- What not to trust without verification

### Practical usage (must-cover on slides)

- Skills and commands explained on-slide (what they are, when to use them)
- Short demo cue slides (e.g. “example: investigate failing test / generate coverage”) that stand alone; no external demo script in-repo
- Links to Cursor docs for skills/commands

### Links (required)

Every non-trivial claim or tool mention that has an official source should carry an **in-slide or resources-section URL**. PRD will require a links checklist (Cursor product docs, pricing, AGENTS.md / agent guidance, skills/commands docs). Prefer stable canonical URLs.

### Explicit non-goals (product)

- Speaker notes / presenter-only markdown as a deliverable
- Timing / run-of-show documents
- Separate workshop prep or Isara demo scripts in this repo
- Q&A answer banks for facilitators

## Brand / Slidev requirements (from template analysis)

- **Aspect:** ~16:9 (template `10.00 × 5.62"`)
- **Colors:** primary blue `#002894`, accent `#4285F4`, dark `#212126` / `#000000`, light `#FFFFFF` / `#EEEEEE`, secondary `#B8CBFF`, teal link `#0097A7`
- **Typography:** Oswald (display) + Arial (body); web-safe/licensed equivalents if Oswald unavailable
- **Layouts:** title, section header, title+body, two-column, Q&A, thank-you, contact — mirror corporate layouts, not default Seriph
- **Out of scope for brand:** new visual systems; purple/generic AI aesthetics

Current starter ([`slides.md`](slides.md), theme `seriph`) is placeholder — PRD requires replacing it.

## Deliverables the PRD will require

**In repo (GitHub product):**

- Slidev workshop deck (English), self-descriptive, brand-aligned
- Theme/styles/assets needed to match corporate standard
- Optional: Slidev export scripts already in [`package.json`](package.json) (`build` / `export`) for PDF/PPTX distribution

**Not in repo:**

- Agenda, timing, speaker notes, prep, facilitator Q&A banks, Isara demo scripts

## Implementation work for *this* task (after plan approval)

Only write the PRD:

1. Add [`docs/PRD.md`](docs/PRD.md) with the sections above
2. Do **not** redesign slides or theme yet

## Out of scope for this PRD-writing task

- Building/customizing Slidev theme
- Writing final slide copy
- Live demo recording or Isara prep docs
- Changing deploy config beyond what the PRD references as future work
