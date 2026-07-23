# Project instructions

## Product

English [Slidev](https://sli.dev/) workshop deck for QA engineers: **AI-Assisted QA Engineering with Cursor**.

## Canonical sources

- Requirements: [docs/PRD.md](docs/PRD.md)
- Agent rules: [.cursor/rules/](.cursor/rules/)
- Canonical links: [data/links.ts](data/links.ts)

## Scripts

Requires **Node.js 20+** (see `package.json` `engines`, `.nvmrc`).

- `npm run dev` — present locally
- `npm run build` — SPA build
- `npm run export` — PDF/PPTX export

## Deck maintenance

- **Authoritative slide inventory:** `slides.md` and `pages/` (`01-intro`, `02-theory`, `03-practical`, `04-best-practices`, `05-close`; `06` reserved for resources). See PRD §4–§5.
- **Links:** `data/links.ts`; verify with `.cursor/commands/verify-links.md`.
- **Requirements doc:** keep `docs/PRD.md` aligned after material deck changes.
- **Optional extensions:** `06-resources.md` (`<CanonicalLinks />`); additional formal demo cues in `03-practical.md`.

Slide copy punctuation: spaced en dash (` – `) per `docs/PRD.md` §9 and `.cursor/rules/slide-authoring.mdc`.

## Out of scope

Do not add facilitator-only artifacts: agenda, timing sheets, speaker-notes deliverables, prep checklists, Isara demo scripts, or Q&A answer banks.
