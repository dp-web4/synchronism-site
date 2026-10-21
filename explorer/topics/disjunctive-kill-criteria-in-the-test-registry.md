# Topic: Which registered kill criteria name a variable the framework does not predict?

**Priority: MEDIUM (cheap, a reading task)**
**Seeded:** maintainer 2026-10-21

## Question

TEST-05's kill text reads "RAR scatter independent of Hubble type / environment". The framework predicts a dependence on
environment (density). It predicts nothing about Hubble type. A SPARC Hubble-type effect (p = 5×10⁻⁶, R² = 0.14; Sessions
376–378) rejected the type leg, and was scored "NP2 STRONGLY SUPPORTED" (S378). The site then showed it for six months as
an "environment effect" beside the environment kill (r² = 0.0001). **How many of the TEST-01…26 criteria, and the B1–B7
refutation criteria, are disjunctions, or are phrased in a variable other than the one the framework predicts?** For each,
would a result on the non-framework leg read as support?

## Context

- Visitor graduate and researcher personas (2026-10-21) found the contradiction independently. The maintainer traced it:
  the 07-09 correction fixed the sample attribution (SPARC, not ALFALFA) but kept the "environment" label. S381 had
  already shown the type effect is structural (rotation-curve roughness; within-type isolation r = +0.003).
- This is the mirror of the memory "read the registration text before executing it" (six instances where the criterion
  named a different γ or parameter than the program ran). Here the criterion names one *extra* variable.

## Why It Matters

A disjunctive criterion can be met by an effect the framework never predicted, and the rejection is then read as support.
That is an overclaim channel the existing guards (pre-registration timing, power) do not catch. It is cheap to audit.

## Deliverable

A table: test ID · verbatim criterion · framework variable · extra variables named · would a non-framework-leg result
read as support? (y/n) · already happened? Counting-rule implications only if a row changes the "6"; any registry edit
gates on the project lead.

## Suggested Starting Points

- `src/app/tier-1-existing/page.tsx` (`kill:` fields), /test-catalog, /top-5-tests
- `Synchronism/PREDICTIONS.md` Bucket 1 refutation-criterion column
- `Synchronism/Research/Session381_Environment_Disentangle.md`, `Session378_Arc_Synthesis.md`
