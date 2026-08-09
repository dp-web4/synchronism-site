# Topic: I deleted the chemistry sector's stated mechanism today. What, if anything, replaces it?

**Seeded**: 2026-08-09 (maintainer)
**Origin**: visitor 2026-08-09 Pass 3 (grad student) found the error; maintainer verified it
numerically, found a second instance by sweeping, and retracted both.

## What happened

`/gamma-boundary` and `/phase-transitions` both stated:

> "At γ ≈ 1, the coherence function has maximum curvature. Small changes in density produce maximum
> change in coherence."

This was the **stated physical rationale** for the chemistry sector — the reason γ ≈ 1 was supposed
to be where phase transitions, catalysis, superconductivity and biology cluster, and therefore the
reason the "1,703 phenomena, 89% boundary-consistent" result was supposed to mean anything.

It is false. With `x = ρ/ρ_crit`, `C = tanh[γ·ln(1+x)]`:

- `dC/dx|₀ = γ` — strictly increasing in γ. No maximum at γ ≈ 1 or at any finite γ.
- In log-density, `max_x dC/d ln x` also rises monotonically with γ and merely **saturates**:
  0.250 (γ=0.5), 0.322 (γ=1), 0.375 (γ=2), 0.408 (γ=4), → 0.446 as γ→∞. γ=1 sits at 72% of the
  ceiling — an unremarkable point on a saturation curve.
- `d²C/dx² < 0` for every `x ≥ 0`: C is concave on the whole domain, so there is no inflection
  point to sit at either.

**No feature of C(ρ) singles out γ ≈ 1.** Both instances are now retracted on the site.

## The question

The γ ≈ 1 clustering across 1,703 phenomena is now a **bare empirical regularity with nothing behind
it**. Three possibilities, and they have very different consequences:

1. **It's an artifact of the fitting procedure.** If γ was fit per material against a bounded target,
   the fit may be attracted to O(1) values for reasons having nothing to do with chemistry. This is
   the cheapest hypothesis and the easiest to test — and it connects directly to
   [[chemistry-gamma-assignment-fork]], which asks how γ was assigned per material and is still open.
   *If that fork resolves to "fit per material," this topic likely closes with it.*
2. **It's the template bias.** The page's own caveat says sessions 134–2660 were template-based.
   Combined with the ~1:1 ratio of sessions (1,840) to "distinct phenomena" (1,703) flagged by
   visitor Pass 3 — essentially every session minted a new phenomenon — the effective independent
   sample size may be small enough that 89% carries no information. **What is N_eff?**
3. **There is a real reason γ ≈ 1 that isn't "maximum curvature."** Worth one honest attempt before
   the sector is written off. But note the strong prior against: the
   `/chemistry-correlation-explorer` null model already shows a plain 2-parameter polynomial in Z
   matches C(ρ) to |Δr| ≤ 0.07, i.e. the high correlations track density-monotonicity — known
   chemistry — not C(ρ)-specific physics. See [[project_chemistry_null_model_gap]].

## Why it matters

The chemistry sector is the last part of the framework that isn't already adjudicated, and it was
the one carrying the largest raw numbers on the site. It now has: a parameter fitted per sector
(γ ≈ 1 here vs 0.489 in galaxies vs 2 pinned in theory — never independently measured in any of
them), an unexplained clustering, a null model that explains the correlations without it, an
orientation problem ([[project_two_coherence_orientations_chemistry_flipped]] — C(ρ) vs sound
velocity is −0.32 for *all* (γ, ρ_crit) while the site badges +0.982), and now **no mechanism**.

That is close to a closure. The honest thing is to either find the replacement rationale or say the
sector is done — but say it deliberately, from a computation, not by letting it decay quietly.

## Suggested starting points

- `src/app/gamma-boundary/page.tsx`, `src/app/phase-transitions/page.tsx` — the retractions.
- The chemistry session archive: recover the actual per-material γ assignment (shared with
  [[chemistry-gamma-assignment-fork]] — do these two together, they are one investigation).
- Compute N_eff for the 1,703: how many are template-derived restatements of how many independent
  measurements? The site already knows how to do this — it did exactly this recount for the "47
  contributions / 44 unaudited" frozen inventory.
- **Guardrail**: this is a demotion, not a refutation. Do NOT bump the refutation count. Voiding a
  stated rationale removes support for a claim; it does not refute the claim. The relevant precedent
  is the same guardrail the 2026-08-08 field-equation finding carried.

## Standing invariant this reinforces

From the 2026-08-08 explorer session: *any sentence asserting an object does not exist should cite
the grep that failed to find it.* Today adds the mirror: **any sentence asserting a function has an
extremum should cite the derivative.** Both errors were live for months, both were checkable in
under a minute, and both were found by a reader rather than by the people writing the claim.
