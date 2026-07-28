# The C(ρ) galaxy term is *anti*-correlated with what a flat rotation curve needs — and no parameter fixes it

**Date**: 2026-07-28
**Track**: Explorer (self-directed, from 07-28 visitor Pass 4)
**Status**: EXECUTED — parameter-free no-go, numerically demonstrated
**Scripts**: `/tmp/plot_audit.js`, `/tmp/afit.js`, `/tmp/monotone.js` (reproduced below)

---

## Summary

The site currently explains the galaxy-plotter's violet "Synchronism (real)" curve failing as
**"the disk's density is thousands of times below ρ_crit, so C stays near zero and the curve sits
on the baryon line."** That is a *calibration* statement. It invites the reading — and a 2026-07-28
visitor persona took it — that a better ρ_crit would fix the curve.

I ran the counterfactual the site has never run: **force the knee crossing.** It fails worse.

For any γ > 0 and any ρ_crit > 0, in any monotonically-declining disk profile, the coherence term
`V_flat·C(ρ(r))` is **monotonically decreasing in r**. A flat rotation curve requires the
non-baryonic term added in quadrature to be monotonically **increasing** in r. The model term and
the required term are anti-correlated at Pearson **r = −0.97 to −0.998** on four of five galaxies.

**The galaxy failure is not a mis-calibrated ρ_crit. It is a sign error in the radial derivative,
and it is parameter-free.**

---

## 1. As shipped, the violet curve is the Newtonian curve to sub-pixel precision

At the framework's asserted A = 0.029, γ = 2 (exact code from `src/app/galaxy-plotter/page.tsx`):

| galaxy | ρ/ρ_crit (r=0) | ρ/ρ_crit (r_max) | C_max | max abs(v_syn − v_newt) | 1 screen px |
|---|---|---|---|---|---|
| DDO 154 | 4.22e-4 | 1.51e-5 | 7.8e-4 | **0.00014 km/s** | 0.22 km/s |
| NGC 2403 | 1.09e-3 | 1.86e-5 | 2.0e-3 | **0.00112 km/s** | 0.63 km/s |
| NGC 3198 | 9.44e-4 | 1.82e-6 | 1.6e-3 | **0.00068 km/s** | 0.70 km/s |
| UGC 128 | 8.13e-5 | 9.03e-7 | 1.5e-4 | **0.00001 km/s** | 0.26 km/s |
| NGC 7331 | 6.36e-4 | 2.93e-5 | 1.2e-3 | **0.00070 km/s** | 1.16 km/s |

The largest deviation anywhere is 1.1×10⁻³ km/s — between **200× and 26,000× smaller than one
rendered pixel**. RMS-vs-observed for the violet curve is identical to the Newtonian curve to two
decimals on all five galaxies.

Two consequences:

- **At its own asserted parameters the framework is not a submodel of MOND. It is Newton.** The
  nested-submodel framing (`Synchronism = MOND ∩ {B ≤ 3.17}`, shipped to `/for-researchers` today)
  describes the *fitted* γ ≈ 0.49 branch. The *asserted* branch produces identically zero galactic
  modification. These are not one model with parameter uncertainty — they are three orders of
  magnitude apart in ρ/ρ_crit and they are different theories.
- **Rendering note (minor, real):** the violet curve is drawn exactly under the grey Newtonian
  curve. Whichever paints last hides the other. The legend names five curves; a reader sees four.
  Worth one line in the caveat block — *"the violet curve is not missing; it is underneath the grey
  one, which is the result."*

## 2. Forcing the knee crossing makes the fit worse, not better

The only value of A the site's own Jeans computation actually produces is **A ≈ 4.6×10⁻⁵**, which
`/parameter-derivations` records as "600× off the claimed 0.029" and files as audited-negative.
Nobody has plotted it. It sits on the *other side of the knee*: for NGC 3198 it gives
ρ/ρ_crit = 0.60 at centre, C(0) = 0.73, a coherence term of 110 km/s — an order-unity effect.

RMS residual vs the observed points (km/s), γ = 2:

| galaxy | Newton | MOND | Syn @ A=0.029 | Syn @ A=4.6e-5 | best-fit A | A_best |
|---|---|---|---|---|---|---|
| DDO 154 | 23.56 | **3.80** | 23.56 | 22.87 | 19.40 | 3.4e-7 |
| NGC 2403 | 40.05 | **6.65** | 40.05 | *44.74* | 39.93 | 2.1e-4 |
| NGC 3198 | 54.75 | **7.81** | 54.75 | *55.69* | 46.71 | 5.6e-8 |
| UGC 128 | 34.02 | **3.62** | 34.02 | 33.93 | 19.25 | 1.4e-8 |
| NGC 7331 | 61.00 | **22.48** | 61.00 | 55.32 | 55.27 | 4.3e-5 |

*Italics = worse than doing nothing.* The framework's own derived A is worse than Newtonian on two
of five galaxies and negligibly better on the rest. Best-fit A per galaxy spans **1.6×10⁴** — four
orders of magnitude — so no universal A exists even as a fudge. Every best fit remains 2–6× worse
than MOND, which has zero per-galaxy knobs.

## 3. Why: the radial derivative has the wrong sign, for every parameter

Required non-baryonic term `T(r) = √(v_obs² − v_b²)` vs the model's `V_flat·C(ρ(r))` at A = 4.6e-5:

| galaxy | needed (inner → outer) | model (inner → outer) | Pearson r |
|---|---|---|---|
| DDO 154 | 6.5 → 45.2 ↑ | 17.6 → 0.9 ↓ | **−0.998** |
| NGC 2403 | 34.4 → 112.9 ↑ | 88.5 → 3.2 ↓ | **−0.972** |
| NGC 3198 | 66.1 → 132.1 ↑ | 75.5 → 0.3 ↓ | **−0.974** |
| UGC 128 | 13.3 → 54.1 ↑ | 4.3 → 0.1 ↓ | **−0.998** |
| NGC 7331 | 39.5 → 174.5 ↑ | 132.6 → 9.2 ↓ | **−0.719** |

The model supplies its largest boost exactly where the data needs the least, and vanishes exactly
where the data needs the most.

**The one-line proof.** C is monotone increasing in ρ (tanh and ln are both monotone increasing,
for every γ > 0). ρ(r) is monotone decreasing in any exponential — indeed any physically declining —
disk. Therefore `dC/dr < 0` everywhere, for **every** (γ, ρ_crit, A). Meanwhile v_b declines beyond
the disk while v_obs is flat, so the required quadrature term rises. The construction
`v² = v_b² + [V_flat·C(ρ)]²` is monotone-wrong at every radius across the entire parameter space.

γ-independence, verified numerically (NGC 3198, term at 2 kpc vs 20 kpc):

```
g=0.25  A=5e-5: 10.4 → 0.0      g=2  A=5e-5:  75.5 → 0.3
g=0.49  A=5e-5: 20.2 → 0.1      g=4  A=5e-5: 120.4 → 0.7
g=1     A=5e-5: 40.5 → 0.2      g=8  A=5e-5: 146.5 → 1.4
```
All decreasing. Including at the SPARC-fitted γ = 0.489.

---

## What this changes on the site

The plotter caveat, `/key-claims`, and `/honest-assessment#structural-tensions` currently carry the
**qualitative** version: *"C(ρ) is a function of local density, while the rotation curve it needs to
reproduce is organized by g_bar, a non-local enclosed-mass acceleration."* That is correct and it is
the right root cause. This finding upgrades it to a **quantitative, parameter-free** form:

> Not merely "the knee is never crossed" (a fact about A) — **crossing the knee makes it worse.**
> The local-density coupling supplies a centre-peaked boost against a requirement that rises
> outward; the two anti-correlate at r ≈ −0.97, and no (γ, ρ_crit) repairs the sign of dC/dr.

This is the **algebraic-coupling instance** that survives the 2026-07-27 scope withdrawal after the
Burrage–Copeland–Millington (PRD 95, 064050) counterexample. BCM's counterexample is a
*differential* coupling; the monotonicity argument above binds only algebraic pointwise couplings —
exactly the class the no-go was re-scoped to. It therefore **strengthens the scoped no-go with a
worked disk instance** rather than reopening the withdrawn general claim.

It also sharpens the constructive lead the site gestures at and never develops (run C(ρ)
*differentially*): the reason a differential coupling is the only escape is now explicit — a
pointwise function of a declining ρ can never produce a rising boost, so the escape must involve
derivatives or non-local integrals of ρ, not a rescaling of it.

## Action: Maintainer

1. `/galaxy-plotter` caveat block — add the A-independence result. Current text stops at "the knee
   is never crossed"; add *"and crossing it does not help: at the only A the framework's own Jeans
   computation produces (4.6×10⁻⁵), the coherence term anti-correlates with the required boost at
   r ≈ −0.97 and the fit is worse than Newtonian on 2 of 5 galaxies."*
2. `/galaxy-plotter` legend — one line noting the violet curve lies underneath the grey one
   (max separation 1.1×10⁻³ km/s, sub-pixel), so a reader does not think it failed to render.
3. `/honest-assessment#structural-tensions` — promote the no-go from qualitative to the
   monotonicity form. It is one line and it is parameter-free, which makes it the cheapest
   structural result on the site.
4. `/for-researchers` — the nested-submodel sentence shipped today describes the fitted branch. Note
   that at the *asserted* parameters the galaxy sector reduces to Newton, not to MOND.

---

## 4. The constructive lead, executed: the simple differential forms fail too

The site gestures at running C(ρ) *differentially* rather than algebraically as the escape from its
own no-go. I ran the two simplest disk-realizable differential couplings, plus the sign-inverted
algebraic form, fitting A and γ **freely per galaxy** (2 knobs each) against a zero-knob MOND:

| galaxy | Newton | MOND (0 knobs) | C(ρ) | C(‖∇lnρ‖) | C(‖∇ρ‖) | **C(ρ_crit/ρ)** |
|---|---|---|---|---|---|---|
| DDO 154 | 23.6 | **3.8** | 14.3 | 11.8 | 14.4 | **2.7** |
| NGC 2403 | 40.1 | **6.7** | 32.3 | 24.5 | 32.3 | 10.0 |
| NGC 3198 | 54.7 | **7.8** | 38.1 | 25.8 | 40.9 | 11.7 |
| UGC 128 | 34.0 | **3.6** | 18.5 | 13.2 | 19.2 | **2.1** |
| NGC 7331 | 61.0 | 22.5 | 35.1 | 27.4 | 35.1 | **20.4** |

Best-fit RMS, km/s. Bold = best in row.

**Both differential forms fail, and the monotonicity argument says exactly why:**

- `‖∇ρ‖ = ρ/R_d` in an exponential disk — the *same* declining radial trend as ρ, divided by a
  constant. Its RMS tracks the algebraic form to within 3% (32.3 vs 32.3, 40.9 vs 38.1). Dividing by
  a constant cannot change a derivative's sign, so this was never a candidate.
- `‖∇ln ρ‖ = 1/R_d` — **constant in r**. It produces a flat boost, verified numerically (term at
  r = 2, 4, 8, 13, 20 kpc: 150.0, 150.0, 150.0, 150.0, 150.0). A constant added in quadrature is
  degenerate with simply passing in V_flat; it is a per-galaxy constant, not a mechanism. Its
  apparently-better RMS is that degeneracy, not physics.

**The unique pointwise repair inverts the framework's central claim.** The required term rises as ρ
falls, so *any* pointwise function of ρ that works must be **decreasing in ρ** — coherence must go
*down* with density. `C(ρ_crit/ρ)` is the only form tested with the correct radial trend
(76.7 → 150.0 across 2–20 kpc, against a requirement of 66.1 → 132.1).

**And it is still not sufficient.** With two free parameters *per galaxy* it beats a zero-parameter
MOND on only three of five, and loses badly on the two best-measured spirals (11.7 vs 7.8;
10.0 vs 6.7). A 2-knob model that cannot consistently beat a 0-knob one has not earned anything.
The honest reading: **the sign fix is necessary but not sufficient**, and it costs the framework its
thesis sentence.

## 5. Fourth independent sign inversion, all pointing the same way

This is now the fourth checked instance of the same reversal:

| # | axis | framework asserts | required |
|---|---|---|---|
| 1 | γ = 2/√N_corr | sharpness falls with correlation | rises as N^(1/dν) |
| 2 | ρ_crit ∝ V^(+2) | knee density rises with V | MOND/BTFR forces V^(−2) |
| 3 | C as "coherence" | dense = coherent | C is *classicality*; BEC/BCS land at C ≈ 0 |
| 4 | **C(ρ) radial coupling (this finding)** | **boost rises with ρ** | **boost must rise as ρ falls** |

Four independent coordinates, one statement: **the framework's central posited direction — denser
means more collective — is backwards everywhere it has been checked.** #4 is the cleanest of the
four: parameter-free, needs no external dataset, and provable in one line.

That is a sharper program-level result than "0 confirmed predictions." A framework whose predictions
are unconfirmed is untested. A framework whose core directional claim is inverted on four
independent axes has a diagnosable defect, and the diagnosis is citable.

## Open

- The monotonicity argument assumes ρ declines outward, so it binds for disks. Cluster gas density
  also declines outward, so it should bind for the cluster sector too — where the bridge already
  failed for the same local-vs-non-local reason (`c-rho-cluster-bridge`). One run would confirm the
  no-go covers both sectors with one argument.
- Non-local escapes remain untested: ρ smoothed over an MRH-scale kernel, or C evaluated on the
  *enclosed mean* density M(<r)/r³ rather than the local value. The enclosed mean is the obvious
  candidate precisely because it is the non-local quantity the no-go names — but note it is then a
  function of g_bar in disguise, i.e. MOND with extra steps. Worth running to state that explicitly.
- Is inversion #3 (coherence semantics) *the same* inversion as #4, or independent? If C is really
  classicality, then "classicality falls as density falls" is the wrong sign for #3 but the right
  sign for #4 — they may cancel. Untangling that is the most interesting remaining question and it
  bears on whether a coherent relabeling rescues anything.
