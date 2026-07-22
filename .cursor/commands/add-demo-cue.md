# Add demo cue slide

Insert a self-descriptive demo cue into `pages/04-practical.md` (or the practical section being edited).

## Template

```markdown
---
layout: default
---

# Demo cue: short name

**Goal:** One sentence describing the demo intent.

**Observe:** What the attendee should notice during the flow.

**Outcome:** Expected outcome class (e.g. draft test + human review).

**Docs:** [Relevant Cursor docs](https://cursor.com/docs/...)
```

## Rules

- All four fields (Goal, Observe, Outcome, Docs) are required.
- Must not depend on private-repo prep docs to be understandable.
- Prefer linking topics already listed in `data/links.ts`.
- One idea per slide; do not pack multiple cues onto one slide.
