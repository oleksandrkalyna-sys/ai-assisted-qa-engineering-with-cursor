# PRD: AI-Assisted QA Engineering with Cursor — Slide Deck

| Field | Value |
| --- | --- |
| Product | Self-descriptive Slidev workshop slide deck |
| Audience | QA engineers |
| Language | English |
| Duration context | ~1 hour live delivery (timing is not a repo artifact) |
| Authoring format | [Slidev](https://sli.dev/) (`theme: default`, `@slidev/theme-default`) |
| Brand source | Corporate PowerPoint template (MEV Simple Light) |
| Repo product scope | Everything required to build, present, and export the slides |

### Document authority

| Source | Role |
| --- | --- |
| `slides.md`, `pages/*.md` | **Authoritative** for slide order, copy, layouts, and what ships in the deck |
| `data/links.ts` | **Authoritative** for canonical and stretch URL registry |
| `docs/PRD.md` | Describes the **as-built** product, brand, and maintenance rules; update this file when the deck changes |

---

## 1. Problem / opportunity

QA engineers are expected to move faster with AI-assisted tooling, but Cursor’s concepts (tokens, models, agents, harness, rules/skills/commands) are often learned ad hoc. That leads to weak prompts, wasted context, untrusted test output, and inconsistent project guidance.

This product is a **GitHub-ready slide deck** that teaches Cursor fluency for QA workflows. The deck must stand alone: a reader without a facilitator should understand the concepts and reach official documentation via **in-slide links** and the curated registry in `data/links.ts`.

---

## 2. Goals and non-goals

### Goals

- Deliver a branded, English Slidev deck that teaches AI-assisted QA engineering with Cursor.
- Keep all teaching content **on the slides** (definitions, practices, live-demo outline, mental models).
- Maintain **canonical links** in `data/links.ts` and surface URLs on slides where topics are introduced.
- Match corporate visual standards closely enough that the deck is presentation-ready for internal use.
- Support PDF/PPTX export via Slidev scripts (`export`, `export:pdf`, `export:pptx`).

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

1. Explain tokens, context windows (including static vs dynamic context), models, agents, harness, and the agent loop at a practical level.
2. Relate model choice, Chat vs Agent usage, and cost/quality tradeoffs to QA work (including where to read Cursor models and pricing docs).
3. Describe what `AGENTS.md` is for and how it relates to **rules**, **skills**, and **commands** in a repo.
4. Follow the workshop’s **live demo** themes (DoR for testing, follow-ups, test cases, runs, bugs) and the **generate → review → verify → automate** loop.
5. Apply the **QA habits** slide: grounding, human verification, diff review, and encoding repeated fixes in project guidance.
6. Use **in-slide links** to reach official Cursor docs, AGENTS.md, and related references (maintainers sync URLs in `data/links.ts`; optional `06-resources.md` would surface the registry on slides).

---

## 4. Slide deck structure (as built)

Entry point: `slides.md` imports page files in this order:

| Import order | File | Section | Purpose |
| --- | --- | --- | --- |
| 1 | `pages/01-intro.md` | Title / intro | Cover + **Agenda** |
| 2 | `pages/02-theory.md` | General theory | Foundations through rules, skills, and commands |
| 3 | `pages/03-practical.md` | Live demo | **Demo time** section outline |
| 4 | `pages/04-best-practices.md` | Cursor best practices | **QA habits**, QA mental model, SDLC framing |
| 5 | `pages/05-close.md` | Q&A / close | Q&A + thank-you |

**Numbering:** File prefixes `01`–`05` follow presentation order; `06` is reserved for optional `06-resources.md`.

Theory opens on **Tokens** (no separate theory section-header slide).

### Agenda (implemented)

On `01-intro.md`, four outcome-oriented bullets (no clock times):

- Foundations: tokens, context windows, models, agents, and harness
- Ground Cursor with `AGENTS.md`, rules, skills, and commands
- Live demo – DoR, follow-ups, test cases, runs, and bugs in Cursor
- Apply generate → review → verify → automate as the daily QA loop

### Optional extensions (not in the deck today)

Add only when product owners want them; keep `slides.md` and this PRD in sync:

- Additional slides in `pages/03-practical.md` – formal **demo cue** slides (Goal / Observe / Outcome / Docs template)
- `pages/06-resources.md` – scannable list via `<CanonicalLinks />` (and optional `includeStretch`)
- Dedicated slides for Cursor modes (Inline / Tab), standalone pricing page, or expanded rules vs skills comparison
- Contact layout on close, if corporate template requires it

---

## 5. Content inventory (as built)

### 5.1 Title / intro (`01-intro.md`)

| Slide | Layout | Content |
| --- | --- | --- |
| Cover | `cover` | Title **AI-Assisted QA Engineering with Cursor**; hero `<SectionFigure name="vintage-tv" />` |
| Agenda | `default` | Four bullets (see §4) |

### 5.2 General theory (`02-theory.md`)

| Slide | Layout | Topic |
| --- | --- | --- |
| Tokens | `two-cols` | Tokenization; tokenizer explorer link; `diagram-tokenizer-example.png` |
| Context window | `two-cols` | Working memory, QA implications; Tim Wappat primer link; `diagram-context-window.png` |
| Static vs Dynamic context | `two-cols` | `AGENTS.md`/rules vs skills/tools; `diagram-six-types-agent-context.png` |
| Models | `default` | LLM behavior, non-determinism, Composer; Chat vs Agent; benchmarks + [Models & pricing](https://cursor.com/docs/models-and-pricing) |
| Agents | `two-cols` | Agent = model + harness; harness links; `diagram-agent-harness.png` |
| Agent is not a chat. It's a cycle. | `two-cols` | Perceive → plan → act → observe loop; `diagram-agent-cycle.png` |
| AGENTS.md | `two-cols` | Repo-root instructions; [agents.md](https://agents.md/); `sample-agents-md.png` |
| Rules | `default` | `.cursor/rules/`, `.mdc` scoping; [Rules docs](https://cursor.com/docs/context/rules) |
| Skills: procedural knowledge on demand | `default` | `SKILL.md`, progressive disclosure; Cursor, Anthropic, skills.sh links |
| Commands | `default` | `.cursor/commands/`; [Cursor docs](https://cursor.com/docs) |

### 5.3 Live demo (`03-practical.md`)

| Slide | Layout | Topic |
| --- | --- | --- |
| Demo time | `section` (light) | Live demo outline: DoR, follow-up, test cases, runs, bug (self-contained bullets) |

**Live demo slide:** The **Demo time** section is an on-slide **facilitator-facing outline**, not the structured demo-cue template (Goal / Observe / Outcome / Docs). Cues must remain understandable without private-repo prep docs.

### 5.4 Cursor best practices (`04-best-practices.md`)

| Slide | Layout | Topic |
| --- | --- | --- |
| Starting with Cursor – QA habits | `default` | Eight habits: verification, human gate, narrow scope, grounding, rules/skills/`AGENTS.md`, diff review, trust boundaries (secrets, silent deletes, weak asserts) |
| QA mental model | `default` | generate → review → verify → automate (four steps) |
| Traditional SDLC → AI-Driven SDLC | `default` | `diagram-sdlc-traditional-vs-ai.png`; verification emphasis |

**Chat vs Agent** appears on the Models slide (and Rules mentions Chat, Agent, and related flows). **Inline** and **Tab** are not covered on slides today; add a dedicated modes slide only if product owners want it (see §4 optional extensions).

### 5.5 Q&A / close (`05-close.md`)

| Slide | Layout | Content |
| --- | --- | --- |
| Q&A | `qa` | Title **Q&A**; `<SectionFigure name="crt-communicator" />` |
| Thank you | `thank-you` | Closing slide |

No contact layout is implemented.

### 5.6 Resources (component only)

`components/CanonicalLinks.vue` reads `data/links.ts` and is ready for a future `06-resources.md` slide. **Canonical URLs are not rendered as a dedicated Resources slide in the current deck**; most checklist items appear inline on theory slides (see §6).

---

## 6. Links requirements

### Registry

- **`canonicalLinks`** and **`stretchLinks`** in `data/links.ts` are the single update point when Cursor reorganizes docs.
- Run the **verify-links** command (`.cursor/commands/verify-links.md`) after URL changes.

### Linking rule (as built)

Prefer URLs **on the slide where the topic is introduced**. A future Resources slide may duplicate the registry for scanning; until then, `data/links.ts` remains the checklist for maintenance.

### Canonical checklist (`canonicalLinks`)

| Topic | URL | Where it appears today |
| --- | --- | --- |
| Cursor docs | https://cursor.com/docs | Commands slide |
| Agent overview | https://cursor.com/docs/agent/overview | Agents slide |
| Rules | https://cursor.com/docs/context/rules | Rules slide |
| Skills | https://cursor.com/docs/skills | Skills slide |
| Commands | https://cursor.com/docs | Commands slide |
| Pricing | https://cursor.com/pricing | Registry only; Models slide links to [models-and-pricing docs](https://cursor.com/docs/models-and-pricing) |
| AGENTS.md | https://agents.md/ | AGENTS.md slide |
| Slidev | https://sli.dev/ | Registry only (deck tooling; not required on slides) |

### Stretch registry (`stretchLinks`)

| Topic | On slides today |
| --- | --- |
| LangChain / Medium harness articles | Agents slide |
| Tokenizer (try it) | Tokens slide |
| Understanding context windows in LLMs | Context window slide |
| Cursor Learn | Registry only |
| Subagents | Registry only |

Additional stretch URLs may stay registry-only until cited on a slide.

### Third-party links on slides (not in `canonicalLinks`)

- [Cursor Bench](https://cursor.com/cursorbench), [DeepSWE](https://deepswe.datacurve.ai/)
- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [skills.sh](https://www.skills.sh/)

---

## 7. Deliverables

### In repository (GitHub product)

| Deliverable | Notes |
| --- | --- |
| Slidev deck source | `slides.md` + `pages/01-intro.md`, `02-theory.md`, `03-practical.md`, `04-best-practices.md`, `05-close.md` |
| Brand theme / styles / assets | `layouts/`, `styles/`, `public/brand/`, Vue components (`BrandLogo`, `BrandMotif`, `SectionFigure`, `TwoColFigure`, `CanonicalLinks`) |
| Canonical links | `data/links.ts` |
| Package scripts | `dev`, `build`, `export`, `export:pdf`, `export:pptx` in `package.json` |
| This PRD | `docs/PRD.md` — as-built product description |

### Not in repository

- Agenda, timing, speaker notes, prep, facilitator Q&A banks, Isara demo scripts

### Runtime

- **Node.js 20+** required for `@slidev/cli` (see `package.json` `engines`; Node 18 fails the build).
- Export artifacts (e.g. `slides-export.pdf`) are local outputs; do not commit them unless distribution policy says otherwise (ignored via `.gitignore`).

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

### Layout vocabulary (implemented)

Custom layouts under `layouts/`: `cover`, `default`, `two-cols`, `section`, `qa`, `thank-you`, `center`. Contact layout is optional and not implemented.

Map backgrounds per `.cursor/rules/brand-and-theme.mdc` (`bg-default.jpg`, `bg-section-blue.jpg`, `bg-section-light.jpg`, `bg-thankyou.jpg`).

### Brand assets (`public/brand/`)

| Asset | File | Usage |
| --- | --- | --- |
| Default background | `bg-default.jpg` | Title, title+body, two-column, Q&A |
| Section background (blue) | `bg-section-blue.jpg` | Section header (dark field) |
| Section background (light) | `bg-section-light.jpg` | Section opener variant (e.g. Demo time) |
| Thank-you background | `bg-thankyou.jpg` | Thank-you |
| Logo | `logo-mev.png` | Wordmark (variant by background) |
| Arc motif | `motif-arc.png` | Accent on branded slides |

#### Editorial figures (`public/brand/figures/`)

| Asset | File | Usage in deck |
| --- | --- | --- |
| Vintage TV | `figure-vintage-tv.png` | Cover hero (`SectionFigure`) |
| CRT communicator | `figure-crt-communicator.png` | Q&A (`SectionFigure`) |
| Filmmaker | `figure-filmmaker.png` | Available for future slides |
| Retro computer | `figure-retro-computer.png` | Available for future slides |
| Pointing hand | `figure-pointing-hand.png` | Available for future slides |
| Enter runners | `figure-enter-runners.png` | Available for future slides |
| Tokenizer diagram | `diagram-tokenizer-example.png` | Tokens |
| Context window diagram | `diagram-context-window.png` | Context window |
| Six types of agent context | `diagram-six-types-agent-context.png` | Static vs dynamic context |
| Agent harness diagram | `diagram-agent-harness.png` | Agents |
| Agent cycle diagram | `diagram-agent-cycle.png` | Agent is not a chat |
| SDLC comparison | `diagram-sdlc-traditional-vs-ai.png` | SDLC shift |
| AGENTS.md sample | `sample-agents-md.png` | AGENTS.md |

**Figure components**

- **`layout: two-cols`:** copy left; `<TwoColFigure src="…" alt="…" />` in `::right::` (styling in `styles/layouts.css`). Optional attribution: class `two-col-figure-source`.
- **`<SectionFigure>`:** cover hero and Q&A editorial art (see `components/SectionFigure.vue` for valid `name` keys). Do not use on ordinary title+body or two-column content slides.
- Prefer **0–1** figure per content slide.

PowerPoint slides 19–21 are asset-catalog collages — **not** a layout to replicate.

### Brand non-goals

- New visual identity
- Purple-on-white / generic “AI gradient” aesthetics
- Decorative clutter that fights corporate layouts
- Default Seriph starter look or `@slidev/theme-seriph` as the visual identity

---

## 9. Self-descriptive slide requirements

### Must

- Definitions readable without spoken filler
- English throughout
- **Punctuation:** In slide body copy and link labels, use a spaced **en dash** (` – `, U+2013) for breaks and appositives—not an em dash (`—`) or a spaced hyphen (` - `). Keep Slidev dividers (`---`), markdown table rules (`| --- |`), and numeric ranges (`0–1`, `01`–`06`) unchanged; use `→` for step sequences.
- Live demo outline on **Demo time** must remain understandable without private-repo prep docs

### Must not

- Depend on speaker notes for core meaning
- Encode minute-by-minute timing in the repo
- Commit facilitator-only materials as product artifacts
- Require access to Isara (or any private demo repo) to understand the demo outline

### Density guideline

Prefer one idea per slide. Use two-column layouts for text + diagram pairs. Long canonical URL lists belong on a future Resources slide (`<CanonicalLinks />`), not crowded onto theory slides.

### Demo cue template (optional additions to `03-practical.md`)

If adding formal demo cue slides alongside **Demo time**, each cue must include: **Goal**, **Observe**, **Outcome**, and **Docs** (see `.cursor/skills/slide-authoring/SKILL.md`). This template does **not** apply to the current **Demo time** section slide.

---

## 10. Acceptance criteria (maintenance)

When changing the deck, keep the product consistent with this PRD:

1. **Self-descriptive:** Core teaching content remains on slides; agenda and demo outline stand alone.
2. **Structure:** `slides.md` import order matches §4; page filenames stay in the `01`–`06` convention.
3. **Links:** `data/links.ts` updated when canonical URLs change; verify with the verify-links workflow; on-slide links stay aligned with the registry.
4. **Brand-aligned:** Layouts and `public/brand/` assets per §8; no Seriph/starter/demo-deck narrative.
5. **Repo-clean:** No facilitator-only product files (agenda docs, timing sheets, Q&A banks, prep checklists, Isara scripts).
6. **Runnable:** `npm run dev` presents the workshop deck; `npm run build` / `npm run export*` succeed on **Node 20+** (`package.json` `engines`, `.nvmrc`).
7. **Language:** English throughout slide copy.
8. **Prose punctuation:** En-dash rule in §9.

After substantive deck edits, update **this PRD** §4–§6 and §8 tables so requirements stay aligned with `pages/`.

---

## 11. Risks

| Risk | Mitigation |
| --- | --- |
| Brand fidelity gap (Slidev ≠ PowerPoint) | Use `public/brand/` assets and CSS tokens; compare layouts against template when changing theme |
| Link rot (Cursor docs paths change) | `data/links.ts` + verify-links; add Resources slide when link surface area grows |
| Over-dense slides | One idea per slide; optional demo cues in `03-practical.md` and link index in `06-resources.md` |
| Demo outline too project-specific | Keep Demo time pattern-based; no private-repo dependency |
| Scope creep into facilitator materials | Reject PRs that add agenda/timing/notes/prep as product files |
| PRD drift from deck | Treat `pages/` as authoritative; refresh PRD §4–§6 on each major content PR |

---

## 12. Changelog discipline

1. Change slide content in `pages/` and wiring in `slides.md` first.
2. Update `data/links.ts` when URLs change.
3. Mirror structure and inventory in this PRD (§4–§6, §8 figure table).
4. Keep `.cursor/rules/slide-authoring.mdc` and `brand-and-theme.mdc` consistent with §8–§9 when layout or figure rules change.
