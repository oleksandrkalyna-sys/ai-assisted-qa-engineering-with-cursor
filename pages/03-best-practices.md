---
layout: default
---

# Starting with Cursor – QA habits

- **Plausible ≠ correct** – verify claims against code, logs, and a real run
- **Human gate stays** – generate → review → verify → automate
- **Start narrow** – one failure, one file, one assertion; expand only after it works
- **Never ship on model confidence** – you run the suite; chat “green” is not evidence
- **Ground first** – attach AC, changed files, and the failing log before you generate
- **Encode what breaks twice** – update rules, skills, or `AGENTS.md`, then commit
- **One source of truth** – one place for how to run tests; delete conflicting copies
- **Review the whole diff** – reject secrets, silent deletes, weak asserts, and drive-bys
