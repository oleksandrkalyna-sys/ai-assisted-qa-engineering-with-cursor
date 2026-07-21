# PRD: AI-Assisted QA Engineering with Cursor — Slide Deck

| Field | Value |
| --- | --- |
| Product | Self-descriptive Slidev workshop slide deck |
| Audience | QA engineers |
| Language | English |
| Duration context | ~1 hour live delivery (timing is not a repo artifact) |
| Authoring format | [Slidev](https://sli.dev/) |
| Brand source | Corporate PowerPoint template (MEV Simple Light) |
| Repo product scope | Everything required to build, present, and export the slides |

---

## 1. Problem / opportunity

QA engineers are expected to move faster with AI-assisted tooling, but Cursor’s concepts (tokens, models, agents, harness, rules/skills, pricing) are often learned ad hoc. That leads to weak prompts, wasted context, untrusted test output, and inconsistent project guidance.

This product is a **GitHub-ready slide deck** that teaches Cursor fluency for QA workflows. The deck must stand alone: a reader without a facilitator should understand the concepts and reach official documentation via in-slide links.

---

## 2. Goals and non-goals

### Goals

- Deliver a branded, English Slidev deck that teaches AI-assisted QA engineering with Cursor.
- Keep all teaching content **on the slides** (section map, definitions, practices, demo cues, resources).
- Include **canonical links** for every non-trivial tool or standard mentioned.
- Match corporate visual standards closely enough that the deck is presentation-ready for internal use.
- Support optional PDF/PPTX export via existing Slidev scripts for distribution.

### Non-goals (explicitly out of this repository)

- Separate agenda documents
- Speaker notes / presenter-only markdown as a deliverable
- Timing sheets or run-of-show
- Workshop prep checklists
- Isara (or any project) live-demo scripts
- Facilitator Q&A answer banks
- Inventing a new brand system or “AI purple” aesthetics

---

## 3. Audience and prerequisites

### Primary audience

QA engineers who write or maintain automated tests, investigate failures, and collaborate with developers in Git-based repos.

### Assumed prerequisites

- Familiarity with at least one test stack (e.g. Playwright, Cypress, Jest/Vitest, or similar)
- Basic Git and IDE usage
- No prior Cursor expertise required

### Learning outcomes (via slides alone)

After reading/viewing the deck, a QA engineer should be able to:

1. Explain tokens, context windows, models, agents, and the Cursor harness at a practical level.
2. Reason about pricing/usage impact on daily QA work.
3. Describe what `AGENTS.md` is for and how it relates to project rules.
4. Choose appropriate Cursor modes (Chat / Agent / Inline / Tab) for common QA tasks.
5. Apply safe patterns: generate → review → verify → automate.
6. Know where to find official docs for skills, commands, rules, and pricing.

---

## 4. Slide deck structure

Ordered narrative for ~1h delivery. The PRD defines **sections and slide intent**, not minute budgets.

| # | Section | Purpose |
| --- | --- | --- |
| 1 | Title / intro | Workshop name, audience framing, what you will learn |
| 2 | Overview | Self-descriptive section map (replaces a separate agenda) |
| 3 | General theory | Foundational concepts for using Cursor effectively |
| 4 | Cursor best practices | How QA engineers should work day to day |
| 5 | Practical usage | Skills, commands, and on-slide demo cues |
| 6 | Resources | Curated canonical links |
| 7 | Q&A / close | Q&A and thank-you layouts |

### Must-cover vs stretch

Use **must-cover** slides for a tight session; add **stretch** slides when there is time or for self-study readers.

#### Must-cover

- Title, learning outcomes, overview map
- Tokens & context window (QA implications)
- Models vs agents vs tools/harness
- Pricing / usage awareness + link
- `AGENTS.md` + link to canonical guidance
- QA loop: generate → review → verify → automate
- Cursor modes: Chat / Agent / Inline / Tab
- Context grounding: rules, skills, repo context
- Safe QA patterns + what not to trust without verification
- Skills & commands explained on-slide + docs links
- At least one demo cue slide (self-contained)
- Resources slide(s)
- Q&A + thank-you

#### Stretch

- Deeper pricing examples / plan comparison callouts
- Context packing / `@` mentions / ignore patterns
- Rules vs skills vs commands comparison table (expanded)
- Flake triage workflow deep-dive
- Additional demo cue slides (coverage, checklist generation, failure triage)
- Contact / next-steps slide if required by corporate template vocabulary
- Common pitfalls / anti-patterns gallery

---

## 5. Content requirements

### 5.1 Title / intro

- Workshop title: **AI-Assisted QA Engineering with Cursor**
- Audience: QA engineers
- 3–5 bullet “what you will learn” outcomes (aligned with §3)
- Visual: corporate title layout vocabulary

### 5.2 Overview

- Single slide (or short sequence) listing sections 3–7
- Must be readable as a standalone map of the deck
- No clock times or facilitator cues

### 5.3 General theory (must-cover topics)

| Topic | Slide intent |
| --- | --- |
| Tokens & context | What a token is; why context window size matters for large test suites / logs |
| Models | What a model is; that model choice affects quality, speed, and cost |
| Agents | Agent = model + instructions + tools, looping toward a goal |
| Harness | Cursor’s orchestration layer (tools, permissions, UI) around the model |
| Pricing | Enough awareness for responsible daily use; link to current pricing |
| `AGENTS.md` | Project-level agent instructions; open format; why teams adopt it |
| QA mental model | generate → review → verify → automate |

### 5.4 Cursor best practices (must-cover topics)

| Topic | Slide intent |
| --- | --- |
| Modes | When to use Chat vs Agent vs Inline vs Tab for QA work |
| Grounding | Repo context, rules, skills — reduce hallucination |
| Safe patterns | Test generation, bug investigation, flake triage with human verification |
| Trust boundary | What not to merge/run without review (secrets, flaky assertions, silent deletes) |

### 5.5 Practical usage (must-cover topics)

| Topic | Slide intent |
| --- | --- |
| Skills | What skills are; when QA would use them; link to docs |
| Commands | What commands are; when to use them; link to docs |
| Demo cues | Short, self-contained slides describing example flows (e.g. investigate failing test, generate coverage). Cues may reference patterns from a live project such as Isara, but **must not** depend on external prep docs in this repo |

Demo cue slides must include:

- Goal (one sentence)
- What the attendee should observe
- Expected outcome class (e.g. “draft test + human review”)
- Link to relevant Cursor docs where applicable

### 5.6 Resources

Dedicated slide(s) listing all required canonical URLs (see §6). Prefer one scannable list over dense prose.

### 5.7 Q&A / close

- Corporate-style Q&A layout
- Thank-you layout
- Optional contact layout only if brand template requires it for closing; no facilitator FAQ dump

---

## 6. Links requirements

### Self-descriptive rule

A reader who opens the deck without a facilitator must still understand the concepts and find official docs via **in-slide or Resources-section URLs**.

### Linking rule

Every non-trivial claim or tool mention that has an official source must carry a URL either:

- on the slide where it is introduced, or
- on the Resources slide(s), referenced clearly from that section

Prefer stable canonical URLs. If a URL changes, update the deck; do not leave orphan marketing claims.

### Required links checklist

Slides must include (or Resources must list) at least:

| Topic | Canonical / preferred URL |
| --- | --- |
| Cursor docs home | https://cursor.com/docs |
| Agent overview | https://cursor.com/docs/agent/overview |
| Rules | https://cursor.com/docs/context/rules |
| Skills | https://cursor.com/docs/skills (or current Cursor skills docs path if renamed) |
| Commands | https://cursor.com/docs (commands section / current commands docs path) |
| Pricing | https://cursor.com/pricing |
| AGENTS.md open format | https://agents.md/ |
| Slidev (if mentioned as tooling) | https://sli.dev/ |

During implementation, verify each URL resolves and replace with the then-current official path if Cursor reorganizes docs. Record the verified URLs on the Resources slides.

### Stretch links (optional)

- Cursor Learn: agents / tool calling primers under https://cursor.com/learn
- Browser / agent tools docs for UI verification demos
- Subagents docs if covered as stretch content: https://cursor.com/docs/subagents

---

## 7. Deliverables

### In repository (GitHub product)

| Deliverable | Notes |
| --- | --- |
| Slidev deck source | Primary: `slides.md` (and any split pages under `pages/` if needed) |
| Brand theme / styles / assets | Custom theme or CSS tokens matching corporate template; replace starter `seriph` look |
| Package scripts | Existing `dev` / `build` / `export` in `package.json` for local present and PDF/PPTX export |
| This PRD | `docs/PRD.md` — requirements for building the deck |

### Not in repository

- Agenda, timing, speaker notes, prep, facilitator Q&A banks, Isara demo scripts

### Current starter status

The default Slidev starter content in `slides.md` (theme `seriph`, “Welcome to Slidev”) is **placeholder only**. Implementation must replace it with workshop content and corporate branding — do not extend the starter demo narrative.

---

## 8. Visual / brand requirements

Derived from the corporate Presentation template (theme “Simple Light”, ~16:9).

### Geometry

| Property | Value |
| --- | --- |
| Aspect | ~16:9 |
| Template slide size | 10.00 × 5.62 in |

### Color tokens

| Token | Hex | Usage |
| --- | --- | --- |
| Primary blue | `#002894` | Section headers, strong brand fields, thank-you backgrounds |
| Accent blue | `#4285F4` | Accents, highlights (theme accent1) |
| Soft blue | `#B8CBFF` | Secondary panels / agenda-style accents |
| Dark | `#212126` / `#000000` | Body text, dark fields |
| Light | `#FFFFFF` / `#EEEEEE` | Backgrounds, light panels |
| Link / teal | `#0097A7` | Hyperlinks |
| Amber / cyan / lime accents | `#FFAB40` / `#0097A7` / `#EEFF41` | Use sparingly if matching template accents; do not dominate |

### Typography

| Role | Template | Slidev guidance |
| --- | --- | --- |
| Display / titles | Oswald (embedded in template) | Use Oswald if license/assets allow; otherwise a close geometric sans |
| Body | Arial (theme minor) | Arial or equivalent clean sans for body |

### Layout vocabulary (mirror corporate, not default Seriph)

Implement or approximate these layout intents:

- Title
- Section header
- Title and body
- Title and two columns
- Title only / main point
- Q&A
- Thank you
- Contact (optional close)

### Brand assets (`public/brand/`)

Extracted from the corporate Presentation template. Use these committed files in the Slidev theme — do not substitute ad-hoc backgrounds or decorative stock photos from template example slides.

| Asset | File | Usage |
| --- | --- | --- |
| Default background | `bg-default.jpg` | Title, title+body, two-column, title-only, Q&A |
| Section background (blue) | `bg-section-blue.jpg` | Section header slides (dark field, light text) |
| Section background (light) | `bg-section-light.jpg` | Section opener variant |
| Thank-you background | `bg-thankyou.jpg` | Thank-you / strong brand close |
| Logo | `logo-mev.png` | Top-right on branded slides |
| Arc motif | `motif-arc.png` | Bottom-left accent on title and section slides |

Placement: logo top-right; arc motif bottom-left. Backgrounds are 1920×1080 (~16:9). Logo and motif are PNG with transparency.

#### Editorial figures (`public/brand/figures/`)

B&W vintage photo cutouts and retro-tech collages with selective primary-blue accents. These give the deck its corporate editorial tone — use them, not generic stock imagery.

| Asset | File | Suggested use |
| --- | --- | --- |
| Filmmaker | `figure-filmmaker.png` | Title, intro, observation/documentation themes |
| Vintage TV | `figure-vintage-tv.png` | Title hero, strong brand moments |
| Retro computer | `figure-retro-computer.png` | Tech, tooling, harness topics |
| Pointing hand | `figure-pointing-hand.png` | Callouts, bullets, emphasis |
| Enter runners | `figure-enter-runners.png` | Momentum, action, best-practices |
| CRT communicator | `figure-crt-communicator.png` | Q&A, communication, stretch |

Use 0–1 figure per content slide; title/section slides may include one hero figure. Do not crowd body text.

PowerPoint slides 19–21 are asset-catalog collages (many images + GIFs) — **not** a layout to replicate. One-off images from those slides that are not in `public/brand/` are excluded.

### Brand non-goals

- New visual identity
- Purple-on-white / generic “AI gradient” aesthetics
- Decorative clutter that fights corporate layouts

---

## 9. Self-descriptive slide requirements

### Must

- Section overview on-deck (no external agenda file)
- Definitions readable without spoken filler
- Demo **cue** slides that stand alone (goal, observe, outcome) without a prep doc
- Resources / inline links for standards and Cursor features
- English throughout

### Must not

- Depend on speaker notes for core meaning
- Encode minute-by-minute timing in the repo
- Commit facilitator-only materials
- Require access to Isara (or any private demo repo) to understand practical slides — cues may *illustrate* with that project’s patterns, but concepts and steps must be general enough to follow from the deck alone

### Density guideline

Prefer one idea per slide. Use two-column layouts for comparisons (e.g. rules vs skills). Move long URL lists to Resources rather than crowding theory slides.

---

## 10. Acceptance criteria

The deck is **done** when all of the following are true:

1. **Self-descriptive:** A QA engineer can learn the must-cover topics from the slides alone.
2. **Section complete:** All must-cover items in §4 and §5 appear as slides (or clear slide groups).
3. **Link-complete:** Every item on the §6 required links checklist appears on-slide or on Resources and resolves.
4. **Brand-aligned:** Colors, typography intent, aspect ratio, layout vocabulary, and `public/brand/` assets match §8; default Seriph starter look is gone.
5. **Repo-clean:** No agenda, timing, speaker-notes deliverable, prep, or facilitator Q&A bank files are required or committed as product artifacts.
6. **Runnable:** `npm run dev` presents the workshop deck; `npm run build` / `npm run export` remain viable for SPA/PDF/PPTX distribution.
7. **Language:** All slide content is English.

---

## 11. Risks

| Risk | Mitigation |
| --- | --- |
| Brand fidelity gap (Slidev ≠ PowerPoint) | Use `public/brand/` assets and CSS tokens; visually compare layouts against template during implementation |
| Link rot (Cursor docs paths change) | Verify URLs at implementation; keep Resources as single update point |
| Over-dense slides | Enforce one-idea-per-slide; move detail to stretch or Resources |
| Demo cues too project-specific | Keep cues pattern-based; never require private repo access to understand the slide |
| Scope creep into facilitator materials | Reject PRs that add agenda/timing/notes/prep as product files |

---

## 12. Implementation notes (future work; not this PRD task)

When building the deck after this PRD:

1. Replace `slides.md` starter content with workshop sections §4–§5.
2. Add theme/CSS using §8 tokens; drop `@slidev/theme-seriph` as the visual identity.
3. Verify and embed §6 URLs.
4. Add must-cover slides first; keep stretch content clearly optional or behind a short appendix section.
5. Do not add facilitator docs to the repository.
