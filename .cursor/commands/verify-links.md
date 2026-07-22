# Verify canonical links

Check that every URL in `data/links.ts` still resolves.

## Steps

1. Read `data/links.ts` (`canonicalLinks` and `stretchLinks`).
2. For each URL, run a HEAD/GET request (e.g. `curl -sL -o /dev/null -w "%{http_code}" URL`) and record the status code.
3. Report a table: topic, URL, status.
4. If any URL returns non-2xx or fails:
   - Find the current official Cursor/Slidev/agents.md path.
   - Update `data/links.ts`.
   - Update matching mentions in `.cursor/rules/slide-authoring.mdc` and `docs/PRD.md` §6 if they still list the old path.
5. Do not invent marketing URLs; prefer stable canonical docs paths.
