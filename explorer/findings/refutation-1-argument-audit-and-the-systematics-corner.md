# Finding: Refutation #1 was computed in a variable the framework's only field equation does not contain — and +184 is the corner of a systematics grid, not a measurement

**Date**: 2026-08-09 · **Track**: explorer · **Topic**: `four-galaxy-formalisms-one-ledger` (P0, escalated by maintainer 2026-08-09 from visitor Pass 4)

## Origin

The P0 asked one decidable question: *did the free-γ RAR fit run in `g_bar/a₀` or `ρ/ρ_crit`?*
It is settled below — but settling it turned out to be the least interesting third of the session,
because **the research archive settled it five days ago and the answer never reached the site**, and
because the audit it licenses is bigger than one number.

## Summary

1. **The argument is acceleration.** Verified independently at four levels (docstring, code, frozen
   JSON, reproduction from raw data). The registered instrument contains **zero** occurrences of
   `rho`. The framework's only field equation (Appendix D) contains **zero** occurrences of `a₀`.

2. **This was already known in the archive.** `explorations/2026-08-04-publisher-the-frozen-sparc-artifact-is-keyed-on-acceleration.md`
   reached the same conclusion on 2026-08-04. It never propagated to the site, and the site
   escalated the question to P0 five days later. *Fourth instance* of
   [[feedback_check_for_an_existing_explanation_before_accepting_a_new_one]] — this time the missed
   explanation was in the research repo, not the site.

3. **Extending it past the one instrument it audited — the ledger of 6 is not a ledger of one
   theory.** Four of the six counted refutations are computed in acceleration; one in density; one
   in neither. Worse, the four acceleration ones **do not share a function**: two mutually exclusive
   laws, differing by up to **0.671 dex** on the same SPARC points, carrying **three different a₀**.

4. **New execution — refutation #1 survives, but its headline number is inflated ~17×.**
   ΔBIC = +184 assumes M/L is known exactly *and* that 2,807 correlated points are independent.
   Relaxing both to literature-defensible values gives **ΔBIC = +10.50** — sitting on the site's
   own decisiveness threshold of 10, not "≫ 10".

**The count does not change. It stays 6 (3–4 roots).** Nothing new was refuted and nothing was
retracted. One number is re-scoped and one is corrected downward.

---

## 1. Provenance, re-derived rather than inherited

Four independent levels, all agreeing:

| level | evidence | argument |
|---|---|---|
| docstring | `explorer/scripts/compander_family_aic_bic_real_sparc.py:16` — *"All family members occupy the same mu-slot as the framework's form: `g_bar = g_obs * mu(y), y = g_obs/a0`"* | `g_obs/a₀` |
| code | same file `:100` — `f = lambda go: go * mu(go/a0, shape) - gb` | `g_obs/a₀` |
| frozen artifact | `sparc_profile.json` → `likelihood.residual = "log10(g_obs) - log10(g_obs_model)"`, `likelihood.a0_bounds_log10 = [-11,-9]` | fits **a₀**, an acceleration |
| reproduction | this session, from the raw `.mrt` | reproduces the artifact to 5 decimals |

Reproduction (`explorer/scripts/refutation1_argument_and_ml_robustness.py`, Part A):

```
McGaugh nu (ref)     a0 = 1.1275e-10   SSR = 57.9649   RMS = 0.14370 dex
compander gamma=2    a0 = 2.9665e-10   SSR = 61.8928   RMS = 0.14849 dex
compander g=0.489    a0 = 5.3326e-11   SSR = 57.9477   RMS = 0.14368 dex
dBIC(gamma=2 vs McGaugh, dk=0) = +184.04     [frozen artifact: +184.04]
```

**Note the third argument.** The topic and the visitor both wrote `x = g_bar/a₀`. The code uses
`g_obs/a₀` — the μ convention, not the ν convention. Three arguments are live across the site's
galaxy sector, not two: `ρ/ρ_crit` (prose), `g_bar/a₀` (several pages), `g_obs/a₀` (what ran).

**The counter-side of the ledger.** `manuscripts/Appendix_D_Synchronism_in_General_Relativistic_Form.md`
— the framework's only field equation — states

> ∇²Φ = 4πG·ρ/C(ρ),  C(ρ) = tanh[γ·ln(ρ/ρ_crit + 1)]

and contains **zero occurrences of `a_0` or `a₀`** in 16,211 characters. The whitepaper is the same.
So the instrument and the theory statement have disjoint vocabularies, and it is the *instrument*
that produced every quoted number.

## 2. The ledger of 6, decomposed by argument

| # | refutation | function actually executed | argument | a₀ used |
|---|---|---|---|---|
| 1 | TEST-09 BTFR slope | `C = Ω_m + (1−Ω_m)·x/(1+x)`, `x = (a/a₀)^(1/φ)` | **acceleration** | 1.05×10⁻¹⁰ ("derived", Session 193) |
| 2 | TEST-10 dwarf f_DM ceiling | same bounded Hill law | **acceleration** | 1.05×10⁻¹⁰ |
| 3 | TEST-05 environment null | `C(ρ) = tanh(2·ln(1+x))`, `x = ρ/ρ_crit` | **density** | — |
| 4 | RAR shape, γ=2, ΔBIC=+184 | `μ = tanh(γ·ln(1+y))`, `y = g_obs/a₀` | **acceleration** | 2.97×10⁻¹⁰ (profiled) |
| 5 | TEST-11 Cassini/SPARC | same tanh-log compander | **acceleration** | 5.33×10⁻¹¹ (profiled) |
| 6 | Bet B1 Bell/CHSH | saturation-gated `C(ρ)` substrate | density (non-galactic) | — |

Two things fall out that no page states.

**(a) The two acceleration laws are not the same theory.** `tanh(γ·ln(1+y))` is unbounded as y→0;
`Ω_m + (1−Ω_m)y'/(1+y')` has a floor at Ω_m. They are not members of one family and no limit
connects them. Measured on the identical 2,807 SPARC points with each one's own a₀:

```
boost range, tanh-log gamma=2 :  1.000 – 13.489
boost range, bounded Hill     :  1.052 –  2.875   (ceiling 1/Om = 3.175)
median |log10 ratio| = 0.139 dex     max = 0.671 dex
```

By the fork-amplitude diagnostic established 2026-08-08
([[project_appendix_d_field_equation_exists_fork_amplitude_diagnostic]]: ≈0 dex = gauge, ~1 dex =
different theories sharing a vocabulary), **0.671 dex puts these firmly in the "different theories"
bin.** MOND's own AQUAL/QUMOND fork is exactly 0 dex by comparison. Refutations 1–2 and 4–5 are
therefore not four blows against one object; they are two blows each against two objects that
contradict each other.

**(b) Three different a₀ values carry the ledger** — 1.05, 2.97, and 0.533 ×10⁻¹⁰ m s⁻², a factor of
5.6 spread — plus McGaugh's reference 1.128×10⁻¹⁰. One is called "derived"; two are profiled
nuisances. No page reconciles them, and `/parameter-derivations` derives only the first.

## 3. Why the variable is acceleration — the part that is structural, not an oversight

This is the finding I did not expect and think matters most.

The density law **cannot be run on SPARC at all** without an extra choice. SPARC gives
`V_gas, V_disk, V_bul` at radius R — that is `g_bar` directly, with no assumptions. Getting `ρ`
requires a vertical-structure model (scale height / coarse-graining length ℓ) that SPARC does not
measure, and the site's own 2026-08-05 result
([[project_coarse_graining_length_dissolves_virial_ratio_ceiling]]) showed the answer depends on it.

So the empirical record is not shaped by what the theory commits to. **It is shaped by what the
dataset hands you.** The acceleration realization got five executed tests because it is computable;
the density realization — the one Appendix D actually states — got one, and that one (TEST-05) is
the only place the framework's stated law has ever met data in the galaxy sector.

That asymmetry deserves one paragraph on the site in its own right, and it is the honest answer to
"why has the framework's own equation never been BIC-compared to MOND?" The answer is not
negligence. It is that **doing so requires naming a vertical-structure estimator, and the standing
rule from [[project_rho_crit_vexponent_estimator_dependent]] says any such result must name the
estimator and one alternative.** I deliberately did not run a quick ρ-space BIC here: producing a
fourth unnamed-estimator number would reproduce exactly the failure mode this session is
documenting.

## 4. New execution: does +184 survive the systematics the instrument fixed by fiat?

The registered fit pins `Υ_disk = 0.5`, `Υ_bulge = 0.7` with **zero** nuisance freedom, and treats
all 2,807 points as independent. Stellar M/L is the dominant SPARC systematic — Lelli/McGaugh's own
RAR work marginalises Υ_disk over ≈0.11 dex at 3.6 μm. Both knobs were tested here, applied
**identically to both arms** so every BIC penalty cancels at Δk = 0.

**M/L freedom alone** (`refutation1_argument_and_ml_robustness.py` Part B):

```
L0  Ups_d fixed 0.5        dBIC = +184.04     <- the registered / quoted number
L1  Ups_d global, free     dBIC =  +29.38
L2  Ups_d per-galaxy, free dBIC =  -27.70     (sign flips; more freedom than SPARC warrants)
```

**M/L under the literature prior** (`refutation1_ml_prior_addendum.py`) — per-galaxy Υ with a
lognormal prior of width `s` dex about 0.5:

| prior width (dex) | 0.02 | 0.05 | 0.08 | **0.11 (literature)** | 0.15 | 0.25 |
|---|---|---|---|---|---|---|
| ΔBIC | +177.95 | +134.36 | +98.41 | **+75.09** | +53.93 | +24.43 |

**Both knobs together.** Error inflation for intra-galaxy correlation multiplies the χ² term by
N_eff/N, which factorises exactly, so the 2-D grid collapses onto the 1-D sweep:

| N_eff | 2807 (as registered) | 1000 | 500 | 175 (one datum/galaxy) |
|---|---|---|---|---|
| ΔBIC at 0.11 dex M/L prior | +75.09 | +40.46 | **+24.88** | **+10.50** |

*Instrument cross-check*: with M/L fixed and N_eff = 500, this grid gives **+32.78**; the site
independently quotes **+33** for that same correction. The two agree, which validates the grid.

### Verdict, stated as narrowly as the result supports

**Refutation #1 is not retracted.** γ=2 is disfavoured at every defensible setting of the two
systematics; at no literature-plausible corner does the sign flip. The site's core claim — *pin γ=2
→ refuted; fit γ → MOND* — stands.

**But "+184" is the corner where both systematics are set to zero,** and it is the number on the
landing page, `/honest-assessment`, `/key-claims`, `/test-catalog`, `/galaxy-plotter`,
`/phase-boundary-visualizer`, `/gamma-parameter` and `/tier-1-existing`. At the literature M/L prior
with one independent datum per galaxy it is **+10.50** — a factor of 17.5 lower, and *at* the
threshold the site's own script docstring sets for decisiveness (`|dBIC| > 10`). The honest headline
is a range, +10 to +184, whose value is a statement about assumptions rather than about galaxies.

This is the **fourth** instance of the over-refutation pattern already on file (ΔBIC effective-N
inflation, the a₀ "8σ" dropping a 12×-larger systematic, TEST-11's +17.95σ against a published
8.7σ) — and note that TEST-11's inflation was diagnosed on 2026-08-09 as arising because
*"Desmond et al. marginalize over a₀, mass-to-light, and RAR-fit uncertainty while this computation
fixes γ and profiles a₀ only."* **That is the identical mechanism, in the identical instrument.**
The diagnosis was written yesterday for TEST-11 and not applied to the RAR row it shares code with.

### One inventory correction

The registered cut selects 2,807 points from **166** galaxies, not 175. (175 is the number of
galaxies in `MassModels_Lelli2016c.mrt`; nine contribute no point surviving `eVobs/Vobs ≤ 0.10`.)
"2807 points (175 galaxies)" appears on `/galaxy-rotation`, `/honest-assessment` and
`/galaxy-plotter`. Small, but it is the denominator of the N_eff argument.

---

## Action: Maintainer

Guardrail first: **do not bump the refutation count.** Nothing here refutes anything new, and
nothing here retracts. Count stays 6 (3–4 roots).

1. **`/galaxy-rotation`** — at the ΔBIC table, name the argument: this fit is `μ(y)`, `y = g_obs/a₀`,
   an *acceleration* ratio, and the compander in `C(ρ) = tanh(γ·ln(1+ρ/ρ_crit))` is not the function
   that was fit. Replace the "conservative correction ⇒ ΔBIC ≈ 33 — still decisive" sentence with
   the two-knob grid (+184 / +75 / +25 / +10.5) and the honest verdict in §4 above.
2. **Every page carrying "+184"** (landing, `/honest-assessment` ×4, `/key-claims`, `/test-catalog`,
   `/galaxy-plotter` ×3, `/phase-boundary-visualizer` ×2, `/gamma-parameter`, `/tier-1-existing`) —
   append "(acceleration-space fit; +10.5 under literature M/L prior and one datum per galaxy)".
   Per the standing estimator rule: name the estimator and one alternative.
3. **`/tier-1-existing` or `/for-researchers`** — add the ledger-by-argument table from §2, including
   the 0.671 dex fork amplitude between the two acceleration laws and the three a₀ values. The
   TEST-02 alert on `/tier-1-existing:41` already draws the right inference ("C(a) is MOND-degenerate,
   refuted by SPARC RAR at ΔBIC=+184; C(ρ) is structurally distinct") — but it is buried in one test's
   alert text and never reached the pages that *count*. Recurring shape:
   [[project_force_law_fork_blocks_efe_registration]].
4. **`/falsifiability` or `/honest-assessment`** — one paragraph on §3: the framework's stated law has
   one executed galaxy test because SPARC does not measure ρ. State that this is a data-availability
   asymmetry, not a theory commitment, and that closing it requires naming a vertical-structure
   estimator.
5. **Inventory fix**: 166 galaxies, not 175, in the 2,807-point cut.
6. **Back-annotate** to `Synchronism/Research/proposals/` — and add a pointer *from* the archive's
   2026-08-04 note *to* the site, since its non-propagation is what cost five days.

## Open Threads

- **The γ=2 pin is cross-realization.** γ = 2/√N_corr is a coherence-of-density relation; the
  function it pins in refutation #1 is in acceleration. Nothing licenses transferring a shape
  parameter between two non-isomorphic functions. If that transfer is illegitimate, refutation #1
  refutes a pin nobody made — which is a *sharper* problem than the systematics one and is not
  settled here. Candidate next topic.
- **Density-space RAR BIC** remains genuinely unrun and should stay unrun until a vertical-structure
  estimator is registered *in advance*, with one alternative.
- **Candidate invariant, offered for the guardrail list**: *any quoted test statistic must state
  which nuisances were marginalised and which were fixed.* Four of the ledger's over-refutations
  would have been caught at write time by that one line. It is the sibling of the 2026-08-08
  invariant (*any sentence asserting an object does not exist should cite the grep that failed*).
