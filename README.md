# AI-Assisted QA Engineering with Cursor

English [Slidev](https://sli.dev/) workshop slide deck for QA engineers.

## Requirements

Product requirements live in [docs/PRD.md](docs/PRD.md). Agent guidance: [AGENTS.md](AGENTS.md) and [.cursor/rules/](.cursor/rules/).

## Scripts

```bash
npm install
npm run dev      # present locally (http://localhost:3030)
npm run build    # SPA build
npm run export   # export (PDF/PPTX via Slidev)
```

## Structure

| Path | Role |
| --- | --- |
| `slides.md` | Deck entry (frontmatter + page imports) |
| `pages/` | Section files `01-intro.md` … `06-close.md` (intro = cover + agenda) |
| `layouts/` | Corporate MEV layouts |
| `styles/` | Brand CSS tokens |
| `components/` | BrandLogo, BrandMotif, SectionFigure, TwoColFigure, CanonicalLinks |
| `public/brand/` | Backgrounds, logo, motif, editorial figures |
| `data/links.ts` | Canonical docs URLs (Resources single source) |

