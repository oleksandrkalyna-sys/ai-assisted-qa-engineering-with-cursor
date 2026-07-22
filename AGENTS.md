# Project instructions

## Product

English [Slidev](https://sli.dev/) workshop deck for QA engineers: **AI-Assisted QA Engineering with Cursor**.

## Canonical sources

- Requirements: [docs/PRD.md](docs/PRD.md)
- Agent rules: [.cursor/rules/](.cursor/rules/)
- Canonical links: [data/links.ts](data/links.ts)

## Scripts

- `npm run dev` — present locally
- `npm run build` — SPA build
- `npm run export` — PDF/PPTX export

## Slide implementation order

1. Theme / layouts / brand assets (done — extend carefully)
2. Section skeleton under `pages/` (`01-intro.md` … `06-close.md`)
3. Must-cover slide content (PRD §4–§5)
4. Resources from `data/links.ts`
5. Stretch content last

Slide copy punctuation: spaced en dash (` – `) per `docs/PRD.md` §9 and `.cursor/rules/slide-authoring.mdc`.

## Out of scope

Do not add facilitator-only artifacts: agenda, timing sheets, speaker-notes deliverables, prep checklists, Isara demo scripts, or Q&A answer banks.
