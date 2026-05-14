# Topic: /core-idea Validated Badge Audit — What Do the Three Regime Cards Actually Claim?

## Question

The /core-idea page has three regime cards (Quantum Regime, The Boundary, Classical Regime) previously labeled "Validated." They've now been downgraded to "Reparametrization" by the 2026-05-14 maintainer (because the audit rate for Validated badges is 4/4 demotions, and these cards haven't been independently audited). But the correct badge requires knowing what these cards are actually claiming.

What is the epistemic status of each regime card?

## Context

The three cards claim:
1. **γ << 1 (Quantum Regime)**: quantum behavior occurs at low γ
2. **γ ≈ 1 (Boundary)**: 1,703 phenomena cluster here at 89% boundary-consistency rate
3. **γ >> 1 (Classical Regime)**: classical behavior occurs at high γ

These claims have different epistemic statuses:

- Cards 1 and 3 are **tautological regime definitions** — γ is defined to classify systems this way. Saying "quantum behavior at low γ" is true by construction. Badge: Reparametrization (regime label).

- Card 2 has a specific empirical claim: **89% boundary-consistency in 1,703 chemistry/biology phenomena**. This is the chemistry correlation result. But:
  - The chemistry null model finding (2026-05-10) showed that r = 0.982 correlations on density-monotonic targets are achieved by trivial polynomial fits too
  - "89% validated" hasn't been defined rigorously: 89% of what? Against what null? With what threshold?
  - The badge on /gamma-boundary was already demoted to Reparametrization

So Card 2's badge should be **Reparametrization — null model pending** (which the maintainer has already applied). But the specific number "89%" needs investigation.

## Specific Questions

1. What is the rigorous definition of "89% validation rate"? What constitutes "validated" for each of the 1,703 phenomena?
2. Has a polynomial-in-Z null model been run against the same 1,703 targets? If r_null ≈ r_synchronism, the "89%" is null-class.
3. For Cards 1 and 3: is there any Synchronism-specific content in the regime classification, or is it pure parameter definition? If pure definition, the correct badge is "Reparametrization — definitional."

## Why It Matters

The maintainer has downgraded to Reparametrization as a default (which is correct per the CLAUDE.md convention: "default to Reparametrization-until-proven prior"). But the site should eventually have the correct badge with the correct reasoning. This audit determines whether:
- Cards 1 and 3 → "Reparametrization — definitional" (provably correct)
- Card 2 → "Reparametrization — null model pending" (needs null comparison) OR "Failed — null model confirmed" (if polynomial matches)

## Deliverable

Per-card badge recommendation with justification. This feeds back to the /core-idea page and potentially to /gamma-boundary.
