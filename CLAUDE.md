# Synchronism Site

## Session Start

**Read `SESSION_PRIMER.md` → then `SESSION_FOCUS.md`** for current priorities and track dispatch.

Educational website for the Synchronism coherence framework.

**Live site**: https://synchronism-site.vercel.app/
**Repo**: https://github.com/dp-web4/synchronism-site
**Research archive**: https://github.com/dp-web4/Synchronism

## Web4 Ontological Context

```
Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
```

Synchronism is the theoretical foundation — coherence equations, MRH, phase transitions. The site externalizes this research for human audiences.

## Tech Stack

- Next.js 14, React 18, TypeScript, Tailwind CSS 4
- No external charting/math libraries — equations via CSS, charts via SVG
- Vercel push-to-deploy

## Track Ecosystem

Three autonomous tracks form a daily feedback loop:

```
Visitor (05:00)  →  friction logs  →  Maintainer (06:00)  →  topics  →  Explorer (08:00)
                                        ↑    │                                    │
                                        │    │  back-annotate                     │
                                        │    ↓                                    │
                                        │  Synchronism repo                       │
                                        │  (research core)                        │
                                        └──── findings ──────────────────────────┘
```

The site is a **public dialogue** — it informs the research core, not just the other way around.
Corrections, refined arguments, and new predictions discovered through the site feedback loop
are back-annotated to the Synchronism research repo as incremental advancement.

### Visitor Track (`visitor/`)
- **Schedule**: 05:00 daily
- **Role**: Naive first-time visitor browses the live site via WebFetch
- **Output**: `visitor/logs/YYYY-MM-DD.md` — friction log with severity ratings, understanding checklist
- **Persona**: No Synchronism knowledge, undergrad physics max, genuinely confused

### Maintainer Track (`maintainer/`)
- **Schedule**: 06:00 daily
- **Role**: Consumes visitor + forum + explorer feedback, implements site fixes, seeds research questions, **back-annotates the research repo**
- **Input**: `visitor/logs/`, `forum/`, `explorer/findings/`
- **Output**: Site code changes (committed + pushed), topics in `explorer/topics/`, back-annotations to Synchronism repo
- **Persona**: Practical, hands-on, fix-oriented. Ponders deeper gaps after fixing friction. Propagates corrections and advancements back to the research core.

### Explorer Track (`explorer/`)
- **Schedule**: 08:00 daily
- **Role**: Self-directed research exploration, follows topics or own curiosity
- **Input**: `explorer/topics/` (from maintainer), own curiosity
- **Output**: `explorer/findings/` (research output, proposals, drafts)
- **Persona**: Knowledgeable, curious, depth-oriented. Not constrained to the site — explores broader context.
- **Tool**: NotebookLM (`explorer/notebooklm_research.sh`) — persistent "Synchronism Research" notebook for multi-source synthesis. Check `./notebooklm_research.sh status` at session start; use for topics requiring cross-paper synthesis. See `explorer/NOTEBOOKLM_SETUP.md` for auth setup.

## Key Files

```
synchronism-site/
├── src/
│   ├── app/              # 74 Next.js pages
│   ├── components/       # Shared UI components
│   └── lib/
│       ├── navigation.ts # Single source of truth for all pages
│       ├── terms.ts      # Glossary definitions
│       └── equations.ts  # C(ρ), γ, ρ_crit computations
├── visitor/              # Visitor track
├── maintainer/           # Maintainer track
├── explorer/             # Explorer track
└── forum/                # External feedback
```

## Site Culture: Questions First

The site opens with *"What if one equation described it all?"* — a question, not a claim. This is the culture of the entire site:

- **Frame as questions, present concrete proposed answers** — to be discussed, challenged, and tested on merit
- A question alone is philosophy. A question with a specific, falsifiable proposed answer is a research program
- Claims are **stakes in the ground** — starting points for concrete discussion, not conclusions to accept or vague prompts to ponder
- Every strong claim should surface its **open question** — what would break it, what's still unknown — but the claim itself is what makes the question productive
- The honest assessment, open questions, and failure pages are not disclaimers bolted on — they are the point
- A well-framed mystery with a proposed answer a researcher could attack is more compelling than either a finding they can only admire or a question they can only speculate about

This applies to all tracks: the visitor should feel invited to think, the maintainer should preserve this tone, and the explorer should deepen the questions as much as the answers.

## Conventions

- Web4 is an **ontology**, not infrastructure
- Synchronism is the **theoretical foundation**
- Every scientific claim needs a **validation badge** (Validated/Untested/Failed/Speculative/Reparametrization)
- The **honest assessment** is never weakened — failures stay visible
- Avoid "production ready" — we are in R&D
- Navigation source of truth is `src/lib/navigation.ts`

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **synchronism-site** (691 symbols, 1013 relationships, 3 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/synchronism-site/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool | When to use | Command |
|------|-------------|---------|
| `query` | Find code by concept | `gitnexus_query({query: "auth validation"})` |
| `context` | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})` |
| `impact` | Blast radius before editing | `gitnexus_impact({target: "X", direction: "upstream"})` |
| `detect_changes` | Pre-commit scope check | `gitnexus_detect_changes({scope: "staged"})` |
| `rename` | Safe multi-file rename | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher` | Custom graph queries | `gitnexus_cypher({query: "MATCH ..."})` |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers/importers | MUST update these |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/synchronism-site/context` | Codebase overview, check index freshness |
| `gitnexus://repo/synchronism-site/clusters` | All functional areas |
| `gitnexus://repo/synchronism-site/processes` | All execution flows |
| `gitnexus://repo/synchronism-site/process/{name}` | Step-by-step execution trace |

## Self-Check Before Finishing

Before completing any code modification task, verify:
1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## Keeping the Index Fresh

After committing code changes, the GitNexus index becomes stale. Re-run analyze to update it:

```bash
npx gitnexus analyze
```

If the index previously included embeddings, preserve them by adding `--embeddings`:

```bash
npx gitnexus analyze --embeddings
```

To check whether embeddings exist, inspect `.gitnexus/meta.json` — the `stats.embeddings` field shows the count (0 means no embeddings). **Running analyze without `--embeddings` will delete any previously generated embeddings.**

> Claude Code users: A PostToolUse hook handles this automatically after `git commit` and `git merge`.

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
