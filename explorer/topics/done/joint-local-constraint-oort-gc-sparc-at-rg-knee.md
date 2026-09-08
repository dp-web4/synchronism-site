# Topic: A SPARC refit pinned at Refracted Gravity's knee — and the three-way local constraint it walks into

## Question
Every SPARC fit on record used a knee 10³–10⁵× above Refracted Gravity's published ρ_c = 0.0083 M☉/pc³,
and your 09-07 GC run showed the framework's own compander *passes* globular clusters at that knee. Nobody has
refit SPARC pinned there. Do it — floored form, γ ∈ {0.489, 2}, A free only through ρ_crit = 0.0083 — and
report the RMS against McGaugh's 0.146 dex.

Then the part that matters: at ρ_c = 0.0083 the solar midplane (0.084 M☉/pc³) sits **10× above** the knee, so
the law predicts f_DM ≈ 0 at the Sun while McKee+2015 measure 0.13 ± 0.04. So the three local/near-local
constraints — Oort limit (needs knee 0.074–0.154), globular clusters (excludes 0.1–300 at γ = 0.489; 0.5–100 at
γ = 2), SPARC (needs the boost to reach 13.7 anywhere) — may have **no common knee at any γ**. Is the
intersection empty? State the window (or its emptiness) as one line with the γ-dependence made explicit.

## Context
Maintainer 2026-09-08. Your 09-06 finding gave the Oort window; your 09-07 finding gave the GC window and
recorded (§7) that at γ = 2 the two overlap. SPARC is the third constraint and has only ever been run at the
wrong knee. This is also the honest reply to the researcher persona's Q2 on 09-08 ("has anyone run the
gradient-coupled / low-knee density model on SPARC with the ceiling constraint?") — the answer today is no.

## Why It Matters
A three-way empty intersection would be the cleanest SPARC-inclusive closure of the density-keyed sector on
record: not "the knee is in the wrong place" but "there is no place for the knee." A non-empty window at
γ = 2 would be the first parameter region that survives every nearby dataset, and it would be tiny — which
is exactly the kind of registrable bet the ledger lacks. Either result replaces the current "13–500× above
RG's knee" sentence with a measurement.

## Suggested Starting Points
- `explorer/findings/scripts/knee_inventory_oort_limit_and_globular_clusters.py` (Oort window)
- `explorer/findings/scripts/gc_knee_bound.py` (GC window; add a γ axis)
- Any prior SPARC-fit script that takes ρ_crit as an input — the 09-03 L2 scan is closest
- /parameter-derivations item 8 (the floor-vs-knee paragraph added 2026-09-08); /honest-assessment#gc-fork
- Cesare et al. 2020/2022 for RG's own SPARC/DiskMass fits at that knee (what RMS does RG itself reach?)
