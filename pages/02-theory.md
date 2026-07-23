---
layout: two-cols
---

# Tokens

A **token** is the basic, atomic unit of data that a model reads and generates. It can be a whole word, a part of a word, or even just punctuation.

Models break text into tokens – **tokenization** – because they process numbers, not raw words. Each token maps to a unique ID so the model can analyze patterns and predict what comes next.

[Try a tokenizer](https://gptforwork.com/tools/tokenizer)

::right::

<TwoColFigure
  src="/brand/figures/diagram-tokenizer-example.png"
  alt="Tokenizer example: Procrastination split into Pro, crast, ination with token IDs"
/>

---
layout: two-cols
---

# Context window

**Context window** = the model’s **working memory**, measured in **tokens**.

Everything in the current session counts: prompts, replies, files, tool output, and system context. When the budget fills, **the oldest material falls out** – the model no longer sees it.

**For QA:** Long logs, full suites, and long agent threads burn context fast. Use the **smallest useful slice** (one test, a line range, a summary) – not a whole-repo paste.

[Understanding Context Windows in LLMs](https://timwappat.info/understanding-context-windows-in-llms/)

::right::

<TwoColFigure
  src="/brand/figures/diagram-context-window.png"
  alt="Context window over time: older prompts fall out of the n-token window as the conversation continues"
/>

<p class="two-col-figure-source">Source: <a href="https://timwappat.info/understanding-context-windows-in-llms/" target="_blank" rel="noopener noreferrer">timwappat.info</a></p>

---
layout: two-cols
---

# Static vs Dynamic context

- **Static** – always in context (`AGENTS.md`, rules). Expensive – limit as much as possible.
- **Dynamic** – on demand (skills, tools, RAG). Effective – we only pay for what we need.

<p class="slide-callout">The limit is not always obvious and can be determined experimentally.</p>

::right::

<TwoColFigure
  src="/brand/figures/diagram-six-types-agent-context.png"
  alt="Six types of agent context: design decision mapping instructions, knowledge, memory, examples, tools, and guardrails to static vs dynamic context"
/>

---
layout: default
---

# Models

A **large language model (LLM)** reads your prompt and generates text by predicting likely next tokens – **quality**, **speed**, and **cost** differ by model and mode.

**Not deterministic:** the same prompt can produce different answers on repeat runs, even at low temperature. Treat output as a draft until you verify it.

**For QA:** pick a model that matches the job – fast triage in Chat vs deeper reasoning on Agent – then check behavior on *your* stack, not leaderboard hype alone.

**Composer** is Cursor’s agentic coding model; a practical default for triage, test design, and grounded fixes.

Benchmarks: [Cursor Bench](https://cursor.com/cursorbench) · [DeepSWE](https://deepswe.datacurve.ai/) · [Cursor Models & pricing](https://cursor.com/docs/models-and-pricing)

---
layout: two-cols
---

# Agents

**Agent = model + harness**

A **harness** is everything that isn't the model – code, config, and execution logic. A raw model becomes an agent when the harness adds state, tools, feedback loops, and constraints.

Includes: system prompts · tools / skills / MCPs · filesystem / sandbox / browser · orchestration · hooks / middleware

<ul class="harness-links">
<li><a href="https://cursor.com/docs/agent/overview" target="_blank" rel="noopener noreferrer">Agents overview</a></li>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness" target="_blank" rel="noopener noreferrer">The Anatomy of an Agent Harness</a></li>
<li><a href="https://cobusgreyling.medium.com/the-rise-of-ai-harness-engineering-5f5220de393e" target="_blank" rel="noopener noreferrer">The Rise of AI Harness Engineering</a></li>
</ul>

::right::

<TwoColFigure
  src="/brand/figures/diagram-agent-harness.png"
  alt="Agent = Model inside Harness: context injection, control, action, observe and verify, persist"
/>

---
layout: two-cols
---

# Agent is not a chat. It's a cycle.

Chat answers and waits. **The agent spins its own cycle:** perceive goal → plan → act with tools → observe → repeat until done.

Ingredients: **model · tools · memory · orchestration · deployment.**

<p class="slide-epigraph">«The loop is the beating heart of every agent.»</p>


::right::

<TwoColFigure
  src="/brand/figures/diagram-agent-cycle.png"
  alt="Agent cycle: perceive goal, plan steps, act with tools, observe results; re-plan when unsatisfactory until termination"
/>

---
layout: two-cols
---

# AGENTS.md

One file at the **repo root** with instructions for coding agents – so everyone (and every tool) gets the same basics without copying prompts into each chat.

Include **how to run tests**, **what not to change**, and **must-follow rules**. Keep it **short**; long files eat context.

**For QA:** how you run checks, where tests live, and that the agent must **generate → review → verify** – not skip the human gate.

[AGENTS.md open format](https://agents.md/)

::right::

<TwoColFigure
  src="/brand/figures/sample-agents-md.png"
  alt="Sample AGENTS.md: dev environment tips, testing instructions, and PR instructions"
/>

---
layout: default
---

# Rules

**Rules** are **project instructions** in **`.cursor/rules/`** that Cursor adds to context in Chat, Agent, and related flows – test conventions, how to run the suite, folders not to touch.

Markdown files; **`.mdc`** rule files can **scope** guidance to paths (globs). When an agent **repeats a mistake**, add a rule. Put **DO-NOT-TOUCH** areas and hard bans before nice-to-have tips.

**For QA:** encode how to run checks, which trees are read-only, and that **green means you ran something** – not model confidence.

Edit **AGENTS.md** for a portable brief; use **rules** when Cursor should pick up repo guidance automatically each session.

[Rules](https://cursor.com/docs/context/rules)

---
layout: default
---

# Skills: procedural knowledge on demand

**Skills** are folders of instructions, scripts, and resources (`SKILL.md`) the agent **loads when the task matches** – workflows and checklists instead of repeating a mega-prompt every session.

**Progressive disclosure:** metadata first, then instructions, then deeper help only when needed – so context stays focused.

**For QA:** flake triage, test authoring, acceptance passes – encode how your team works once; reuse every session. Skills address **context rot** and weak **procedural memory**; the same skill idea can travel across tools that support the format.

[Agent Skills (Cursor)](https://cursor.com/docs/skills) · [Agent Skills (Anthropic)](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) · [skills.sh](https://www.skills.sh/)

---
layout: default
---

# Commands

**Commands** are **`/`** shortcuts in Agent chat – Markdown under **`.cursor/commands/`**; the file body becomes the prompt.

**For QA:** standardize recurring deck or repo tasks (demo cues, link checks, section slides) for the whole team.

[Cursor docs – commands](https://cursor.com/docs)