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

---
layout: default
---

# QA mental model

**generate → review → verify → automate**

1. **Generate** – draft tests, fixes, or hypotheses with AI
2. **Review** – read the diff; reject unsafe or flaky claims
3. **Verify** – run tests / reproduce locally
4. **Automate** – keep only what you trust in CI

AI accelerates the loop; it does not replace the human gate.

---
layout: default
class: slide-sdlc-shift
---

# Traditional SDLC → AI-Driven SDLC

<TwoColFigure
  src="/brand/figures/diagram-sdlc-traditional-vs-ai.png"
  alt="Traditional iterative SDLC measured in weeks compared with AI-driven SDLC: specs and architecture as bottlenecks, implementation in minutes to hours, output and trajectory evaluation, agent self-correction, iteration in minutes to hours"
/>

<div class="slide-sdlc-takeaways">

<ul>
<li><strong>Implementation:</strong> weeks → hours.</li>
<li><strong>Requirements, architecture, verification</strong> stay with the person.</li>
</ul>

<ul>
<li><strong>The focus shifts to verification.</strong></li>
<li>And it becomes <strong>more difficult.</strong></li>
</ul>

</div>
