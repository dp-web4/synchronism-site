# Topic: Glossary Plain-Language Audit

**Seeded**: 2026-05-24
**Priority**: MEDIUM
**Origin**: Visitor feedback 2026-05-24, Pass 1 (casual visitor) and Pass 2 (tech writer)

## The Issue

Pass 1 casual visitor: "MRH defined as 'the minimal set of interacting degrees of freedom whose state transitions materially influence coherence evolution' is the kind of sentence that makes me close the tab." The γ entry, "γ = 2/√N_corr," is just more variables to chase.

Pass 2 tech writer: "Lead each multi-symbol entry with a one-line plain-language version, then the technical definition (the glossary already does this for MOND — good model to copy)."

## The Task

Audit every glossary entry in `src/lib/terms.ts` for entries where:
1. The `brief` field is technical rather than plain-language
2. The `explanation` jumps into math without anchoring to everyday experience first

Priority entries to fix:
- MRH — the existing definition is dense. Rewrite brief as: "The 'relevance bubble' — the neighborhood of things that can actually affect a system's coherence. Everything outside can be ignored."
- γ (gamma parameter) — if this entry exists, ensure it leads with "γ controls how sharply a system transitions between quantum and classical behavior. Bigger γ = sharper snap, like a switch. Smaller γ = gradual fade, like a dimmer."
- ρ_crit — ensure the plain-language version is: "The reference density where the S-curve is steepest. Not a 'critical point' in the phase-transition sense — just the midpoint of the compander's dynamic range."
- Reparametrization — currently technical; ensure casual reader can understand what it means in one sentence.

Model to follow: the existing MOND entry in terms.ts is the right format — one-line everyday description, then technical.

## Deliverable

Updated `brief` fields for the 4-8 entries listed above, ensuring each starts with a sentence that a high-school science reader could understand.
