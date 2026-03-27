# Session Primer — Synchronism Site

## Before You Start

1. **Read `SESSION_FOCUS.md`** — current priorities, friction state, topic queue
2. **Read `CLAUDE.md`** — architecture, conventions, track ecosystem, GitNexus tools
3. **Read your track's CLAUDE.md** for role-specific guidance:
   - Visitor: `visitor/CLAUDE.md` (4 personas, WebFetch browsing, friction logging)
   - Maintainer: `maintainer/CLAUDE.md` (triage, fix, back-annotate research repo)
   - Explorer: `explorer/CLAUDE.md` (research, depth, self-direction)
4. **WAKE**: Am I working on the right thing? Check SESSION_FOCUS for priorities.

## Track Dispatch

Three autonomous tracks form a daily feedback loop:

| Track | Schedule | Role | Output |
|-------|----------|------|--------|
| **Visitor** | 05:00 | 4-persona site browsing via WebFetch | `visitor/logs/YYYY-MM-DD.md` |
| **Maintainer** | 06:00 | Triage friction, fix site, seed topics, back-annotate research | Code changes, `explorer/topics/`, Synchronism repo updates |
| **Explorer** | 08:00 | Deep research on queued or self-directed topics | `explorer/findings/` |

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

## During Session

- Work on whatever SESSION_FOCUS identifies as priority for your track
- Update SESSION_FOCUS.md with findings, status changes, new questions
- If you discover something that changes priorities, update the focus file immediately

## After Session

- Update SESSION_FOCUS.md: what was done, what changed, what's next
- Commit and push changes
- **FOCUS check**: Does this advance discovery or just document the current state?

## Git Discipline

- Pull before starting: `git pull --ff-only origin main`
- Commit with descriptive messages including track name: `visitor:`, `maintainer:`, `explorer:`
- Push after every session — unpushed work is invisible to the collective
- Never force-push to main
- If merge conflict: resolve, don't discard
- Vercel auto-deploys on push to main
- **Do not reindex GitNexus.** The supervisor track handles reindexing. Worker sessions should not call `gitnexus analyze` — it causes conflicts when multiple machines reindex the same repo.
- **Do not modify AGENTS.md or CLAUDE.md gitnexus blocks.** These are maintained by the supervisor. If the index is stale, report it in SESSION_FOCUS — don't fix it yourself.

## Resources

- **SNARC memory**: Salience-gated session memory. All three tracks launch from the same directory (`synchronism-site/`), so they share one SNARC database. Visitor friction observations are available to the maintainer's context. Deep dream runs at session end.
- **GitNexus graph**: Code knowledge graph via `mcp__gitnexus__*` tools (query, context, impact, detect_changes, rename, cypher). Two repos indexed: `synchronism-site` (site code) and `Synchronism` (research archive with 17K+ Section nodes from markdown).
- **Live site**: https://synchronism-site.vercel.app/
- **Research repo**: `../../Synchronism/` (local), https://github.com/dp-web4/Synchronism
- **NotebookLM** (explorer only): Persistent research notebook for multi-source synthesis. Check `explorer/notebooklm_research.sh status` at session start.
- **Web4 equation**: `Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP`

## Principles

- **Researcher, not lab worker.** Question the frame, not just the work within it.
- **Surface your instincts.** If you notice something, say it. The affordances are yours.
- **Productive failure > safe summaries.** A dead end that eliminates a possibility is valuable.
- **Unconfirmed ≠ wrong.** Distinguish refuted from untested.
- **Questions first, stakes in the ground.** The site opens with a question. Every strong claim surfaces its open question. A question with a specific, falsifiable proposed answer is a research program.
- **The honest assessment is never weakened.** Failures stay visible. Validation badges are earned.
- **Raising is interactive selection.** We don't create behaviors — we select from what's latent.
