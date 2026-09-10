# Explorer Topic: Is There One ρ_crit At All? The Framework's Knee Spans Seven Orders Across Sectors

**Priority**: HIGH
**Seeded**: 2026-09-10 (maintainer)
**Origin**: Maintainer arithmetic on TEST-02, prompted by visitor log 2026-09-10 Pass 4

---

## Question

**Is there any single ρ_crit — one number, as the framework claims — that is simultaneously consistent
with every sector the site makes a quantitative claim in?** And if not, at what point does "universal
coherence knee" stop being a claim the framework is entitled to make?

## Context — what I found today, and why it is bigger than the card it came from

Chasing a visitor complaint about TEST-02's amplitude, I computed the framework's predicted local
gravitational boost at the solar neighbourhood (ρ_local = 0.09 M☉/pc³) under each ρ_crit the site
actually uses. Script: `maintainer/scripts/test02_amplitude_is_knee_conditional.py` (+ `_output.txt`).

| ρ_crit (M☉/pc³) | where the site uses it | velocity excess at γ=0.489 |
|---|---|---|
| 1.52×10³ | `0.029·V_flat²`, the **published** calibration (MW, V_flat=229) — `/galaxy-plotter`, `/key-claims` | **+1.8×10⁴ %** |
| 6.5×10² | same calibration, SPARC-typical — `/parameter-derivations` | ~10⁴ % |
| 0.161 | the measured velocity-blind knee (2026-08-27), GC fork | +116 % |
| 8.3×10⁻³ | Refracted Gravity's E0 floor (explorer 2026-09-09) | +9.4 % |
| 3.2×10⁻⁴ | bottom edge of the ρ_c grid SPARC refutes | +0.40 % |
| **[3.8×10⁻⁵, 3.2×10⁻⁴]** | **the window TEST-02's published 0.05–0.4% band requires** | 0.05–0.4 % |

**That is seven orders of magnitude of ρ_crit in live use on one site, and the test card with the
softest verdict is the one using the smallest knee.** The 0.05–0.4% band that generates TEST-02's
"~80× below Gaia reach → practically untestable" conclusion needs a knee that appears *nowhere else*.
Meanwhile the *published* calibration predicts a factor ~3.5×10⁴ boost in the solar neighbourhood,
which Oort and Solar-System ephemerides exclude outright.

The individual pieces of this are mostly already on the site. **What is not anywhere is the joint
question.** Each sector has quietly chosen the knee that lets it survive, and no document asks whether
those choices are mutually compatible. That is the move the framework itself calls disqualifying when
it is made per-galaxy (`/parameter-derivations`, on per-system normalization) — done per-sector instead.

## Why It Matters

Three distinct payoffs, and the first two are cheap:

1. **It is a single-number answer to a central claim.** "One equation, one knee, all scales" is the
   framework's pitch. A joint-constraint scan either produces a surviving ρ_crit window or produces the
   empty set. Either is publishable on the site in one table.
2. **It is the honest generalization of a result the program has already half-found twice.** The
   2026-09-08 "Oort ∩ GC windows are disjoint" no-go was *retracted* on 2026-09-09 as a γ mismatch —
   at a common γ they overlap (ρ_c ∈ 0.0039–0.0079 at γ=0.489). That retraction is correct and must
   stand. But the retraction closed a 2-sector question by fixing a bug; it did not ask the n-sector
   question, and the n-sector question is where the content is.
3. **It decides a ledger question that is currently open.** Whether TEST-02's density branch converts
   from "non-discriminating" to "executed and locally excluded" depends on which knee TEST-02 is
   entitled to assume. Routed to dp in
   `Synchronism/Research/proposals/test02_amplitude_is_knee_conditional_and_a2acw_positive_control_20260910.md`.

## Suggested Starting Points

- **Do this at a common γ, and report the γ-dependence explicitly.** The 09-09 retraction exists
  because a previous pass compared windows computed at different γ. Sweep γ ∈ [0.3, 3] and present the
  joint window as a function of γ, not at one γ.
- **Sectors to include, each with its own constraint on ρ_crit**: SPARC rotation curves (shape +
  amplitude); the boost ceiling / BTFR; the solar Oort limit; Solar-System ephemerides (the tightest,
  and the one TEST-02's arithmetic newly implicates); globular clusters (the 2026-09-07 exclusion
  window, ρ_c ≈ 0.5–100 at γ=2); wide binaries; and the cosmological C₀ = Ω_m calibration, which pins
  C at the mean cosmic density and is a constraint nobody has intersected with the local ones.
- **Watch the interpretability floor.** Per the 2026-09-09 solver-validity finding, *no row computed
  at a coherence floor below ~0.01 in this archive is currently interpretable* (outer Dirichlet
  condition suspect). Either stay above it or fix the BC first — do not produce a joint window that
  rests on unfloored rows.
- **Guard against the failure mode this project keeps hitting.** Run the intersection on the *full*
  sample per sector, not a subsample — the 2026-09-09 near-miss (51 discs said 0.95×, 153 said 1.62×)
  is the relevant precedent. And read each sector's *registered text* for which ρ_crit and γ it was
  registered against, rather than reusing a window computed for a different one; that specific error
  has six instances in the record.
- **State the negative clearly if it comes out empty.** "No single ρ_crit satisfies all sectors at any
  γ" is a strong, clean closure of the density-keyed branch — and per the site's own standard, a
  well-documented no-go is worth more than another parameter scan. But check it twice before publishing:
  over-refutation is this program's live failure mode, and an empty intersection is exactly the shape of
  result that has been wrong here before.
