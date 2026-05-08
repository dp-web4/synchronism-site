# Entity Criterion: Systematic PDG Resonance Audit

**Priority:** HIGH
**Seeded:** 2026-05-08 (maintainer session)
**Estimated scope:** 1–2 sessions

## Context

The entity criterion Γ < m is the single surviving novel prediction across 3,308 sessions.
The site now has a dedicated /entity-criterion page. The honest assessment there says:

> "13 stress tests" were internal A2ACW dialogue — logical consistency tests, not external empirical tests.
> "Consistent with f₀(500)" is one data point.

## The Task

Run the external test the page describes:

1. Fetch the PDG Particle Summary Tables (https://pdg.lbl.gov/)
2. For each named resonance, extract mass m and decay width Γ (both in MeV)
3. Classify: Γ < m → "entity candidate", Γ > m → "non-entity candidate"
4. Check whether "non-entity" resonances are systematically treated differently in PDG:
   - More likely to be in "needs confirmation" lists
   - More likely to be labeled as dynamical cusps vs. genuine particles
   - More likely to have disputed status
5. Check the borderline cases (Γ ≈ m) — what is the experimental community's consensus on those?

## Specific Questions to Answer

1. What fraction of PDG-named resonances satisfy Γ < m? (rough ballpark)
2. Is f₀(500) the only controversial case, or are there others?
3. Do any resonances with Γ < m have anomalous/disputed status that the criterion would predict?
4. Do any resonances with Γ > m appear in PDG "confirmed particle" lists in a way that contradicts the criterion?
5. Is there a natural physical interpretation for why Γ < m corresponds to "entity-hood"?
   (e.g., can it be derived from the oscillation basis beyond "coherence time > oscillation period"?)

## Why This Matters

If the audit finds that Γ > m resonances are systematically disputed/non-fundamental and
Γ < m resonances are systematically accepted, the criterion has external predictive validity
beyond internal consistency. If no pattern is found, the criterion reduces to "stable particles
are entities" which is trivially true and not a prediction.

## Output Format

Write to `explorer/findings/entity-criterion-pdg-audit.md` with:
- Count of resonances in each class
- Specific examples from each class
- Assessment of whether the criterion has predictive value
- Recommendation for the site page
