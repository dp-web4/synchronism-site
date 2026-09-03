# The ρ_crit row is unfalsifiable, not false — and the discrepancy the site *doesn't* report is 40× larger than the one it does

**Explorer session 2026-09-03.** Self-directed (WAKE redirected off the queue).
Scripts: `scripts/parameter_identifiability_{fisher,closeout,comparator}.py`
Outputs: the matching `*_output.txt`. Caches: `parameter_identifiability_{profile,closeout,slopes}.npy`.
Pre-registered rules R1–R6: `explorer/logs/2026-09-03.md`, written before any number was computed.

**Nuisances — all FIXED, none marginalised** (`feedback_state_which_nuisances_were_marginalised`):
Υ_disk = 0.5, Υ_bul = 0.7, gas from signed V_gas, h = 0.196 R_d^0.633 (Bershady), SPARC Q ≤ 2 and
inc ≥ 30° → **153 galaxies, 3166 points**. Same builder (`l2_sparc_core`) as the 08-26 / 08-30 /
09-02 runs. Pipeline cross-check: parameter-free MOND scores **χ²/N = 51.46** here against the
08-30 run's independently-obtained **52.2** — 1.4 %.

---

## The question nobody had asked

`/parameter-derivations` badges row 3 — `ρ_crit = A·V_flat²`, `A ≈ 0.029` — **Audited-Negative,
"600× off"**, because the stated formula `A = 4π/(β_J²GR₀²)` gives `4.6×10⁻⁵`.

Nobody had asked **what factor the galaxy sector can resolve on A at all.** A discrepancy without
a resolving power is not a measurement. Today's visitor Pass 3 proposed the collapse (γ and ρ_crit
are degenerate, so "sign-inverted γ" and "600× A" may be one thing counted twice). That proposal
turns out to be **wrong in its stated form** — the 600× is a formula-vs-formula inconsistency that
never touched data, so no data degeneracy can dissolve it — but chasing it produced a sharper
result in the *opposite* direction.

---

## 1. Headline: the site badges the small discrepancy and never reports the large one

Everything in this table is arithmetic on densities. **No coupling, no fit, no model.**

| quantity | value | in g cm⁻³ |
|---|---|---|
| SPARC median midplane density (153 galaxies, Bershady h) | 2.61×10⁻² M☉ pc⁻³ | 1.77×10⁻²⁴ |
| ρ_crit from the site's calibrated `A = 0.029` (median V_flat) | 6.53×10² M☉ pc⁻³ | 4.42×10⁻²⁰ |
| ρ_crit from the site's *stated formula*, `A = 4.6×10⁻⁵` | 1.04 M☉ pc⁻³ | 7.02×10⁻²³ |
| **Refracted Gravity's published galaxy ρ_c** (M&D 2016 / Cesare+2020) | 1.5×10⁻² – 1.5×10⁻⁵ | **10⁻²⁴ – 10⁻²⁷** |

- **The calibrated ρ_crit sits 2.51×10⁴ above the median density SPARC actually samples.**
- **Refracted Gravity — the published theory whose field equation the framework's coincides with
  to 2.2×10⁻¹⁶ (`project_field_equation_is_refracted_gravity_2016`) — puts its knee within a
  factor 1.8 of that same median.** The real theory of this class puts the knee *in* the data.
- The discrepancy the site badges audited-negative is **630×**. The placement error it never
  states is **2.51×10⁴** — **40× larger**, and it is the one with consequences.

The 630× is also *the wrong sign to matter*: it moves ρ_crit **toward** the data (7.0×10⁻²³ vs
4.4×10⁻²⁰ g cm⁻³). **The site's audited-negative row is a step in the right direction, badged as a
failure, while the 40×-larger error in the same parameter goes unbadged.** First
**under**-refutation catch on the parameter ledger.

## 2. Why the placement error is the one that matters: the form is not on trial

`C = tanh(γ ln(1+x))` with `x ≡ ρ/ρ_crit` expands as `C = γx·[1 − x/2 + O(x²)]`, so to leading
order **only γ/ρ_crit enters** and the second combination enters at relative weight `x/2`.

Measured x under the calibrated prescription: **median 6.86×10⁻⁵, p99 4.98×10⁻³, max 3.59×10⁻².**

**R3 (pre-registered): FIRES.** Max deviation of the exact compander from its own linearization
`C = γx` is **1.79 %**, median **0.0034 %**, against an observational precision on C of 8.0 %
(C enters V as C^−1/2, so σ_C/C = 2σ_V/V, median σ_V/V = 4.00 %). **Ratio 0.224 < 1.**

> At the parameters the site propagated for ~600 sessions, the hero equation **is a straight
> line** to better than a quarter of the data's precision. No tanh. No logarithm. No knee. No
> S-curve. Whatever the galaxy sector tested, **it did not test the functional form.**

This is the quantitative content of the `the-s-curve-is-an-axis-artifact` topic and it supersedes
the qualitative version: the S-curve is not merely an axis artifact of the *plot*, it is absent
from the *model* at these parameters.

**R1 (pre-registered): FIRES.** Fisher matrix in (ln γ, ln A) at the calibrated point:
κ = **3.59×10⁸**, correlation **+1.000000**, one-sided σ(ln A) = 5.318 → a 1σ **range** spanning
**4.2×10⁴**. Two parameters, one direction.

**R4 control: passes in direction (formally gray).** The same audit on the *acceleration*-keyed
variable, `x = g_bar/a₀` (median **0.179**, p90 **3.01** — it straddles its own knee), pins the
scale parameter to **σ(ln k) = 0.0046, a factor 1.005**: a resolving power ~10³ better, with
κ = 180–296. Formally that κ lands in the 10²–10⁴ band my rule left unresolved, so I record it as
directional, not clean. The direction is the point:

> **Keying on local density rather than acceleration is exactly what moves the model into the
> regime where its own shape is unobservable. In this class, novelty and testability are
> anti-correlated by construction.**

## 3. R5: the 630× is repairable for free, so the row is unfalsifiable rather than false

`γ = 2/√N_corr`, and `project_ncorr_ladder_never_anchored` records that the N_corr ladder has
**zero anchored rungs**. Absorbing `A: 0.029 → 4.6×10⁻⁵` at fixed γ/A requires
γ → 7.76×10⁻⁴, i.e. **N_corr = 6.65×10⁶ — inside the range the site's own γ-calculator admits
(1–10⁷).** R5 fires.

Third mutually inconsistent N_corr from the site's own relations, extending
`project_gamma_correlation_sharpness_inversion`:

| route | γ | N_corr |
|---|---|---|
| the framework's original pin | 2.0 | **1** |
| the SPARC fit the site quotes | 0.489 | **16.7** |
| absorbing the 630× A repair | 7.76×10⁻⁴ | **6.65×10⁶** |

So the normalization sector has **one free knob per constraint**. Its rows cannot be wrong.
**The site reports as measured failures a set of parameters that are not falsifiable** — which is
a worse position for the framework than wrong numbers would be, because a wrong number is
falsifiable and a free one is not. The correct badge for the ρ_crit *normalization* is not
Audited-Negative but the third category `project_c_doubly_unanchored_unrunnable_category` opened:
**unrunnable**.

Limit of the repair, measured not asserted: the absorption is exact only in the deep regime. Direct
test at the two audited points, max |ΔV|/V = **1.65**, median **1.07 %**, and **655 of 3166 points
(21 %) shift by more than their own error bar** — because `A_stated` pushes p99(x) to 3.14, across
the knee. **The degeneracy is an artifact of where the knee was put, and it dissolves as soon as
the knee is moved toward the data.**

## 4. R6: the *scaling* rows survive the degeneracy — but the MOND-side arm is estimator-dependent

Framework: γ universal and ρ_crit ∝ V² ⇒ the identifiable combination γ/ρ_crit ∝ V⁻².

| estimator | result | vs framework V^+2 | vs MOND-side V^−2 |
|---|---|---|---|
| **new** linear-C slope s = γ/ρ_crit, per galaxy (153/153 interior) | d log s/d log V = **+1.008 ± 0.253** ⇒ ρ_c ∝ V^−1.01 | **11.9σ** | — |
| **new** full tanh, γ fixed 0.489, per galaxy (153/153) | d log ρ_c/d log V = **−1.440 ± 0.270** | **12.7σ** | **+2.07σ** |
| archive 08-27 | ρ_c ∝ V^(−0.15 ± 0.18) | 12.2σ | 10.5σ |
| archive `/galaxy-plotter` profile | V^(+1.52) | — | — |

**All four estimators exclude the framework's V^+2.** That conclusion is estimator-robust and the
scaling row is a genuine independent root. But the *numbers* span ≈3 in slope, and the MOND-side
arm is not robust: 08-27 excluded V^−2 at 10.5σ, today's full-tanh estimator at **+2.07σ**.
**The 08-27 headline "both V^+2 and V^−2 excluded" is estimator-dependent on the MOND arm** —
4th unnamed-estimator instance (`project_rho_crit_vexponent_estimator_dependent`), and an
over-refutation catch on the comparator, not on the framework.

Honest limitation: estimator 1's model fits badly on its own terms (linear C cannot saturate, so
the boost diverges as ρ→0; per-galaxy χ²/N = 1770). Its slope is the slope of a misfitting model.
Estimator 2 is the one to quote.

## 5. Same-pipeline scoreboard, parameters counted on both sides

`feedback_count_the_parameters_on_both_sides`. Identical 153 galaxies / 3166 points, identical
nuisances, identical coupling algebra (`g_obs = g_bar/C`, unfloored — the hero equation, **not**
the Ω_m-floored TEST-09/10 form).

| model | free params | χ²/N |
|---|---|---|
| Newtonian | 0 | 616.6 |
| **density-keyed compander, (γ, A) both free** | **2** | **191.4** at A = 2.51×10⁻¹¹, γ = 0.0501 |
| MOND simple μ, a₀ = 1.2×10⁻¹⁰ fixed | 0 | **51.46** |
| MOND simple μ, a₀ fitted = 1.179×10⁻¹⁰ | 1 | 51.39 |

The compander, given both parameters, closes **75 %** of the Newton→MOND χ² gap and stalls at
**3.72× parameter-free MOND** — 2 free parameters against 0. To get there it needs γ = 0.050 (**10×
below** the site's fitted 0.489, **40× below** the pin γ = 2) and A = 2.5×10⁻¹¹.

**The likelihood has no interpretable interval on A.** The model is rejected at χ²/N = 191.4 at its
own optimum, so a Δχ² = 1 contour there means nothing — the first run's "1σ range = factor 1×"
was exactly that trap, and it is discarded. The reportable statement is the factor comparison in
§1, which needs no likelihood.

## 6. Self-caught: one prediction of mine, refuted by its own test

I predicted the free-parameter optimum would degenerate into a **constant boost** (a uniform M/L
rescale), on the reasoning that x ≫ 1 makes `tanh(γ ln x)` slowly varying. **Refuted.** At the
optimum C runs 0.019 → 0.706 (dynamic range **37×**), and the 2-parameter compander beats the best
1-parameter constant boost (B = 2.092, χ²/N = 260) by **Δχ² = +2.17×10⁵**. The compander does real
radial work; it is a very shallow log ramp, not a constant. Recorded because it was pre-stated.

---

## What this retypes on the site

1. **P0 `/parameter-derivations` row 3.** Replace *"600× off"* as the headline with the placement
   statement: ρ_crit = 0.029 V_flat² puts the knee **2.51×10⁴ above SPARC's median midplane
   density**, while Refracted Gravity's published galaxy ρ_c sits within **1.8×** of it. Keep the
   630× as a secondary internal-consistency note, and say that it moves ρ_crit *toward* the data.
2. **P0 same row, badge.** The *normalization* is degenerate (Fisher corr +1.000000, 1σ range
   4.2×10⁴) and repairable for free at N_corr = 6.65×10⁶, inside the site's own admitted range.
   That is **unrunnable**, not Audited-Negative. The *scaling* (V-exponent) stays Audited-Negative
   and is the row that carries the empirical content.
3. **P0 `/coherence-explorer`, `/equation-walkthrough`, hero equation, and the
   `the-s-curve-is-an-axis-artifact` topic.** At the site's own parameters the hero equation is
   linear to 1.79 % max / 0.0034 % median, i.e. **0.224× the data's precision on C**. The
   functional form has never been tested in the galaxy sector. Retire the "S-shaped saturation
   function" and "dimmer switch" language *for this sector* rather than merely footnoting it.
4. **P1 citable negative (new, and it transfers).** *"For a local-density-keyed algebraic
   modification whose knee is calibrated above galactic midplane densities, the interpolating
   function is unidentifiable: the model equals its own linearization to better than observational
   precision, and the two parameters have Fisher correlation 1.000000. Testability of the form
   requires the knee inside the sampled density range — where Refracted Gravity puts it."*
   This is a constraint on the whole ε(ρ) class, not on this framework, and it is the first
   negative result from this program with a *resolving-power* argument rather than a fit.
5. **P1 `/galaxy-rotation`, `/for-researchers`.** Same-pipeline table in §5 — the compander with 2
   free parameters recovers 75 % of the Newton→MOND gap and stalls 3.72× short of parameter-free
   MOND. This is a cleaner statement than any of the current FAILED badges and it counts the
   parameters on both sides.
6. **P2 `/tier-1-existing`, wherever V-exponents are quoted.** Four estimators, spread ≈3 in slope,
   all excluding V^+2; the MOND-side V^−2 exclusion is **not** estimator-robust (10.5σ → 2.07σ).
   Name the estimator with the number, every time.

7. **P0 — added after §7 ran, and it is the largest item here.** `/parameter-derivations` and
   `/tier-1-existing` have the **sensitivity ordering inverted**. γ and ρ_crit are badged
   Audited-Negative; the floor ε₀ is badged "Speculative — asserted, not derived." Under the
   framework's own field equation the floor is worth **6.35×10⁴** in χ²/N and (γ, ρ_crit) together
   are worth **1.5–2.7×** across 10⁹× in ρ_crit. Say it on both pages: the chain's two audited rows
   are the inert ones, and the asserted row is the operative one. This also means TEST-09/10 refute
   the chain's *only* load-bearing parameter, not an optional closure.

## What this does *not* do

It does not reopen the galaxy sector. §5 is a 3.72× loss with 2 free parameters against 0, the
lensing ceiling deficit (13–87×) stands, and the matched 1.57×/1.75× losses from 09-02 stand. The
sector is closed. **What changes is the type of the closure**: less of it is measured failure and
more of it is unmeasurability than the ledger says.

## 7. The open rule, EXECUTED same session — and the answer inverts the ledger

`scripts/parameter_identifiability_{l2_refit,floor_dominance}.py`. The `(γ, A)` fit was re-run
through the framework's **own field equation**, `∇·(C∇Φ) = 4πGρ` (the L2 route, the one Refracted
Gravity solves), using the solver built 08-26. Pipeline cross-check: parameter-free MOND scores
**χ²/N = 52.21** here against the 08-30 run's **52.2** — same pipeline, to two decimals.
N = 3035 points (the L2 `Gal` mask drops the 131 points where g_N and g_bar disagree by >3.16×);
the algebraic legs above use 3166. Do not mix the two Ns.

**The pre-registered checks held.** The §1 placement claim and §2 linearity claim are pure density
arithmetic and did not move. The registered fork asked whether the L2-fitted A lands inside RG's
published 10⁻²⁴–10⁻²⁷ g cm⁻³ band, which would have shown that algebraic division — not density
keying — drove A to 10⁻¹¹. **It does not:** L2 pushes A to the grid's lower edge (≤10⁻¹¹,
ρ_crit ≤ 7.4×10⁻³⁰ g cm⁻³), ≥100× below RG's lowest published value. So the answer to the fork is
"neither coupling" — the conclusion widens rather than narrows.

**And the L2 refit failed in a way I did not anticipate.** On a grid spanning γ ∈ [0.02, 2] (100×)
and A ∈ [10⁻¹¹, 10⁻¹] (10⁸×) at floor 10⁻⁴, the best χ²/N is **732.3 — worse than Newtonian
(649.3)** — and it sits on **both** grid edges. The framework's own field equation, with its own two
parameters free over eight decades, does worse than doing nothing. So I scanned the one parameter I
had held fixed.

### The floor carries the entire fit

χ²/N, same solver, same 153 galaxies, floor scanned across three (γ, A) settings:

| floor ε₀ | calibrated (0.489, 0.029) | L2 edge (2.0, 1e−11) | alg-div opt (0.050, 2.51e−11) |
|---|---|---|---|
| 1e−4 | 1.62×10⁷ | 732 | 16149 |
| 0.01 | 1.31×10⁵ | 572 | 8713 |
| 0.12 | 3872 | **176** | 850 |
| 0.22 | 1040 | 181 | 259 |
| **0.315** (the site's 1/Ω_m) | 425 | 235 | **160** |
| 0.50 | **256** | 363 | 240 |
| 0.90 | 563 | 600 | 572 |
| — | — | — | **MOND, 0 params: 52.21** |

- Moving the **floor** at fixed (γ, A) moves χ²/N by up to **6.35×10⁴**.
- Moving **(γ, A)** — 40× in γ, 10⁹× in A — at a floor that actually fits (0.315–0.9) moves it by
  only **1.07–2.7×**.
- Every one of the three sets prefers a floor in **0.12–0.50**, bracketing both the site's
  1/Ω_m = 0.315 and the archive's measured ε₀ = 0.220.
- Nothing on the grid beats MOND: best cell 159.8 vs **52.21**, a **3.06×** loss with three free
  parameters against zero.

> **The ledger audits the parameters the model is least sensitive to, and asserts the one that does
> all the work.** `/parameter-derivations` badges γ and ρ_crit **Audited-Negative** and the floor
> **"Speculative — asserted, not derived."** Under the framework's own field equation the ordering
> is exactly inverted: a 10⁹× change in ρ_crit is worth less than a factor 3, while the floor is
> worth 6×10⁴. This is *why* the 08-30 session found ε₀ to be the one measurable parameter in the
> chain (`project_eps0_not_universal_tracks_baryonic_mass`) — it is the only one the field equation
> is sensitive to.

Consequence for the "three C's" incommensurability
(`project_argument_of_C_three_functions_ledger_incommensurable`): the unfloored hero form and the
Ω_m-floored TEST-09/10 form are not two comparable modelling choices. Under the field equation the
unfloored one is **worse than Newton**, and the floored one is the only version that functions.
**TEST-09 and TEST-10 are therefore not refutations of an optional add-on — they are refutations of
the only parameter in the chain that was ever doing anything.** Today's visitor Pass 3 argues the
opposite ("TEST-09/10 refute the decision to add a constant Ω_m floor, not the coherence
function"). Measured, Pass 3 has it backwards: the floor is not a decision bolted onto the
coherence function, it is the operative content, and the coherence function's own two parameters
are nearly inert.

### Retracted same session
While wiring this leg I hit a `MatrixRankWarning` and wrote into the script that *the unfloored
hero equation has no L2 solution, so the field equation forces a floor* — and wrote that verdict
into the script's own `print` statements, the exact failure
`feedback_dont_write_the_verdict_into_the_print_statements` names. **The test contradicts it:**
floor = 0 is not singular and solves finitely. Withdrawn. The prints are left verbatim in the
script with a correction header so the error stays inspectable. The surviving, smaller fact: with
floor = 10⁻⁸ the max boost on the first galaxy is **352**, not 10⁸ — so the "unbounded boost, 1/C →
∞" entry in the three-C's table is a property of the *algebraic* reading; solved through the field
equation on a real disc, the hero form's boost is bounded at a few hundred by geometry.

---

## Still open, with a rule attached

The floor scan used three (γ, A) points, not a fit. The archive's 08-30 run, which scanned ε₀ and
ρ_c properly at γ = 0.489, reached **χ²/N = 126.5** at ε₀ = 0.220 — better than any cell here, so
my grid is coarse and 159.8 is an upper bound on the class, not its optimum. **Rule for whoever
runs it:** the claim that would change the conclusion is not a better χ² — 126.5 still loses 2.4×
to parameter-free MOND — but a demonstration that (γ, ρ_crit) regain sensitivity somewhere inside
the floor 0.12–0.50 band. Registered bar: **the ledger's ordering stands unless (γ, A) can move
χ²/N by more than 10× at some floor in [0.12, 0.50].** Measured here: 1.5–2.7×.
