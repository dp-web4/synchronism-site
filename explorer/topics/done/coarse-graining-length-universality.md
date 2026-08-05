# Topic: is there ONE coarse-graining length ℓ that survives all four sectors?

**Seeded**: 2026-08-05 (maintainer)
**Source**: visitor 2026-08-05 Pass 3 + Pass 4, unified in
`Synchronism/Research/proposals/A_calibration_is_a_coarse_graining_scale_644x_resolved_20260805.md`
**Priority**: P0 — this is the highest-value open run in the galaxy sector right now
**Status**: unrun

---

## The setup (established today, arithmetic verified)

`A = 4π/(β_J² G R₀²)`, so **A ∝ 1/ℓ²** where ℓ is whatever length is taken as "the size of the
system." The site's 635× discrepancy in A is exactly a length swap:

| ℓ | A | who uses it |
|---|---|---|
| 8 kpc | 4.565×10⁻⁵ | the stated Jeans derivation (`/parameter-derivations`, audited-negative) |
| 317 pc | 0.029 | every galaxy computation on the site |
| 300 pc | 0.0325 | `/galaxy-plotter`'s pinned scale height h |

So **A is not a parameter — it is a proxy for the smoothing length**, and ℓ is specified nowhere on
the site or in the archive. `ρ/ρ_crit ∝ 1/A ∝ ℓ²`, so the galaxy-sector knee verdict is a statement
about ℓ, not about the framework.

## The question

**ℓ is not free once you demand consistency across sectors.** The same ℓ must serve every place
`C(ρ)` is evaluated. Find the ℓ each sector requires, independently, then compare.

## Do first

1. **SPARC disks.** For the five plotter galaxies, compute `x(r) = ρ(r)/ρ_crit` as an explicit
   function of ℓ over ℓ ∈ [10 pc, 30 kpc]. At what ℓ is the knee crossed, per galaxy? **Is that ℓ
   universal across the five, or does it scale with R_d / V_flat?** If it scales, that alone is a
   result — a "universal" coherence function needs a per-galaxy smoothing length.

2. **Cassini / TEST-11 (+17.95σ).** What Solar-System ρ was assumed, and what smoothing produces
   it? This is the sharpest one: the Sun's own mass density is ~10³⁰× the interplanetary medium, so
   the answer swings enormously with ℓ. Back out the ℓ implied by the quoted σ, and report how σ
   moves across ℓ ∈ [1 R_☉, 1 kpc]. **The +17.95σ may be an ℓ-choice as much as a measurement.**

3. **Wide binaries / TEST-02.** Pass 4 gives an a-priori argument that the ρ lever is flat across
   the whole Gaia sample (solar-neighbourhood ρ ≈ 0.04–0.1 M☉/pc³, essentially constant). Check
   whether that flatness survives at small ℓ, where individual stellar envelopes start to resolve.

4. **Clusters.** The C(ρ) enclosure-bridge closure is already banked as a locality failure. Re-ask
   it as: what ℓ would the cluster sector require, if any?

5. **Compare.** If the required ℓ differs by orders of magnitude between sectors, that is a **new,
   parameter-free no-go on the coarse-graining axis** — and it is stronger than the amplitude
   (V⁺²/V⁻²) and functional-form obstructions already banked, because it depends on no estimator
   choice, no velocity definition, and no contested external measurement. Those are the three
   things that have dogged every previous galaxy-sector kill.

## Constraints — read these before running

- **Do NOT bump the refutation count.** It stays at 6 unless step 5 produces a genuine cross-sector
  inconsistency, and even then, check first whether it is the same root as the g_bar→ρ substitution
  failure (2026-08-03) seen on a new axis. Three of this ledger's entries have turned out to be one
  finding wearing different labels.
- **Do NOT treat A = 4.6×10⁻⁵ as "the audited-correct A."** Pass 3 called it that; it is not. It is
  the value at ℓ = 8 kpc, one arbitrary choice. Correcting the site's over-refutation must not
  install the mirror-image over-claim. Neither value is correct until ℓ is fixed.
- **Name the estimator.** Standing rule from the 07-29 ρ_crit V-exponent reversal: state the
  smoothing kernel *and* one alternative, and report both.
- ⟨C(ρ)⟩ ≠ C(⟨ρ⟩) — C is strongly nonlinear, so the *order* of smoothing and evaluating matters.
  Say which one each number uses.

## Why this is worth a session

Every galaxy-sector result on the site is conditional on an unstated number. That is either the
framework's deepest unexamined assumption or its cheapest remaining kill, and one run distinguishes
them. It also connects to the open `differential-coupling-completion` topic: `∇·[C(ρ)∇Φ] = 4πGρ`
inherits the same ambiguity, since ρ appears inside C.

---

## CLOSED — 2026-08-05 (explorer). Dissolved, not answered.

The premise does not hold. R₀ is defined on `/critical-density` itself as
λ_Jeans/**R_half**, a galaxy size, not a smoothing length. And granting the ℓ reading,
self-consistency (smooth ρ as well as ρ_crit) gives
**x(ℓ) = (3/16π²)β_J²[V_c(ℓ)/V]² ≈ 0.019 β_J²[V_c/V]²** — ℓ cancels, and x is a virial
ratio bounded at ~0.02 for every bound system in every sector at every ℓ. There is no
per-sector ℓ to compare. Cassini is ℓ-independent (strengthened, not reopened);
the wide-binary ρ lever is flat by construction, not by coincidence.

The 644× also already had an explanation on file: Session 687 §1.2 (2026-06-07)
decomposed it into β_J = 4.5, R₀ = 0.07 — product 0.315 kpc, 0.8% from the "317 pc."

Finding: `explorer/findings/coarse-graining-length-dissolves-317pc-is-beta-times-R0-not-a-scale.md`
Script: `explorer/scripts/coarse_graining_length_universality.py`
Refutation count unchanged at 6. Six ranked maintainer actions in the finding.
