# Synchronism Site

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
