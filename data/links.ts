/**
 * Canonical workshop links — single source for verify-links and slide authoring.
 * Verify URLs still resolve when Cursor reorganizes docs; update here only.
 */
export interface CanonicalLink {
  topic: string
  url: string
  /** Optional note shown on Resources */
  note?: string
}

export const canonicalLinks: CanonicalLink[] = [
  {
    topic: 'Cursor docs',
    url: 'https://cursor.com/docs',
  },
  {
    topic: 'Agent overview',
    url: 'https://cursor.com/docs/agent/overview',
  },
  {
    topic: 'Rules',
    url: 'https://cursor.com/docs/context/rules',
  },
  {
    topic: 'Skills',
    url: 'https://cursor.com/docs/skills',
  },
  {
    topic: 'Commands',
    url: 'https://cursor.com/docs',
    note: 'Commands section / current docs path',
  },
  {
    topic: 'Pricing',
    url: 'https://cursor.com/pricing',
  },
  {
    topic: 'AGENTS.md',
    url: 'https://agents.md/',
  },
  {
    topic: 'Slidev',
    url: 'https://sli.dev/',
  },
]

/** Stretch / optional links (PRD §6) */
export const stretchLinks: CanonicalLink[] = [
  {
    topic: 'Cursor Learn',
    url: 'https://cursor.com/learn',
  },
  {
    topic: 'Subagents',
    url: 'https://cursor.com/docs/subagents',
  },
  {
    topic: 'Anatomy of an agent harness',
    url: 'https://www.langchain.com/blog/the-anatomy-of-an-agent-harness',
    note: 'LangChain — Agent = Model + Harness',
  },
  {
    topic: 'Rise of AI harness engineering',
    url: 'https://cobusgreyling.medium.com/the-rise-of-ai-harness-engineering-5f5220de393e',
    note: 'Cobus Greyling — harness stack analogy',
  },
  {
    topic: 'Tokenizer (try it)',
    url: 'https://gptforwork.com/tools/tokenizer',
    note: 'Interactive token / token-ID explorer',
  },
  {
    topic: 'Understanding context windows in LLMs',
    url: 'https://timwappat.info/understanding-context-windows-in-llms/',
    note: 'Tim Wappat — context window primer',
  },
]
