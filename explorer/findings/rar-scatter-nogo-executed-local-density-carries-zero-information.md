# The RAR scatter no-go, executed: local density carries *zero* information about the boost

**Date**: 2026-08-02
**Topic**: `explorer/topics/rar-scatter-nogo-run-it.md` (seeded by maintainer 2026-08-02 from
visitor Pass 4, Leading-Edge Researcher persona, Finding 5)
**Script**: `explorer/scripts/rar_scatter_nogo_real_sparc.py`
**Output**: `explorer/scripts/rar_scatter_nogo_output.txt`
**Data**: Lelli, McGaugh & Schombert 2016 SPARC — `MassModels_Lelli2016c.mrt` + Table 1.
2,622 points, 149 galaxies (Q ≤ 2, inclination > 30°, e_Vobs/Vobs < 0.10), Υ_disk = 0.5,
Υ_bul = 0.7.
**Proposed ID**: **TEST-13** (TEST-12 is reserved by today's unrun ambient-density topic).

---

## One-line result

Conditioned on local baryonic surface density, the required boost scatters **0.161 dex**;
conditioned on g_bar it scatters **0.118 dex** — and the *entire* difference is noise:
local density explains **≤ 0.7%** of the RAR residual variance (95%, galaxy-block bootstrap),
against a pipeline that detects an injected correlation of r = 0.10. The site's organizing
variable is not merely a worse predictor of the mass discrepancy than MOND's. It is
**informationally empty** given MOND's.

---

## What was tested, and why it needed no functional form

The site's galaxy sector states f_DM = 1 − C, so

    g_obs = g_bar / C(ρ)    ⇒    B_req ≡ g_obs/g_bar  must be a single monotone
                                  function of ρ alone, with zero intrinsic scatter.

MOND/the RAR makes the identical-shaped claim about g_bar. Two one-variable claims about the
*same* y — so the sharpest test is a head-to-head conditional scatter with **no γ, no ρ_crit,
no compander, no fitting**:

    σ( log B_req | log g_bar )   vs   σ( log B_req | log ρ )

measured non-parametrically (equal-count bins about the per-bin median; cross-checked with a
60-neighbour local median) on identical points.

**Pipeline calibration.** The g_bar arm returns 0.135 dex rms / 0.118 dex robust — squarely
inside Lelli et al. (2017)'s published 0.11–0.13 dex RAR scatter. The comparison is anchored to
a known number before it is used.

---

## Results

### 1. Head-to-head (primary)

| conditioner | rms (dex) | robust σ (dex) |
|---|---|---|
| log g_bar (MOND/RAR) | 0.1354 | **0.1178** |
| log ρ (this site) | 0.1810 | **0.1613** |

Ratio **1.37×**; quadrature excess **0.110 dex** injected into the RAR.

Restricted to the 79% of points that actually need a boost > 1.5, the ratio worsens to 1.47×.

### 2. The primary result needs no scale-height model at all

At constant h, log ρ = log Σ − const, and conditional scatter is invariant under a global shift.
So the headline number is a statement about the **directly measured Spitzer surface density**,
not about any thickness prescription. Across a 3 gas-treatment × 3 scale-height grid the ratio
runs 1.34–1.65× — and constant h is the *most favourable* cell for the framework. Every more
physical prescription (h ∝ R_d, Bershady+2010) makes it worse.

| gas | h | N | σ\|g_bar | σ\|ρ | ratio | excess |
|---|---|---|---|---|---|---|
| dM/dr | const | 2622 | 0.1178 | 0.1613 | 1.37× | 0.110 |
| dM/dr | R_d/5 | 2622 | 0.1178 | 0.1950 | 1.65× | 0.155 |
| dM/dr | Bershady | 2622 | 0.1178 | 0.1852 | 1.57× | 0.143 |
| exp HI | const | 2696 | 0.1162 | 0.1603 | 1.38× | 0.111 |
| stars only | const | 2450 | 0.1122 | 0.1499 | 1.34× | 0.099 |

(full 9-cell grid in the output file)

### 3. Steelman: 175 free per-galaxy scale heights make it *worse*

Give the framework a free h per galaxy — implemented as removing the per-galaxy median residual,
applied symmetrically to both conditioners so the comparison stays fair. This absorbs h,
distance, M/L and inclination errors wholesale.

| conditioner | robust σ after per-galaxy offsets |
|---|---|
| log g_bar | 0.0440 |
| log ρ | 0.0779 |

Ratio rises from 1.37× to **1.77×**. The excess is *within*-galaxy — it is the radial shape of the
density profile, not a per-galaxy calibration error. Decomposition: the ρ relation's 0.180 dex
total splits 0.103 within / 0.147 between; the g_bar relation's 0.132 splits 0.074 / 0.106.

### 4. The decisive test — does ρ carry information g_bar lacks?

A worse variable could still be a *right* variable measured badly. The discriminating question is
whether the RAR residuals know anything about local density. Partial correlation at fixed g_bar:

    dB   = residual of log B_req about the RAR
    dρ   = residual of log ρ about the ρ–g_bar relation

The framework requires **r < 0** (denser than average at fixed g_bar ⇒ higher C ⇒ less boost).

| quantity | value |
|---|---|
| r_partial(dB, dρ \| g_bar) | **+0.0012** |
| galaxy-block bootstrap 95% CI (2000 resamples) | **[−0.076, +0.081]** |
| variance of dB explained | **0.0%** |
| within-galaxy version (all per-galaxy calibration removed) | r = −0.052, CI [−0.130, +0.028], 0.3% |

**Positive control** — the same machinery on synthetic residuals with a known injected signal:

| injected amplitude | recovered r | 95% CI | detected? |
|---|---|---|---|
| 0.10 | +0.101 | [+0.028, +0.172] | yes |
| 0.20 | +0.197 | [+0.126, +0.268] | yes |
| 0.30 | +0.288 | [+0.219, +0.360] | yes |

So the null is a null, not a dead pipeline. **Attenuation bound**: even allowing that 75% of the
variance in dρ is measurement noise, |r_true| ≤ 0.162 — local density can account for at most
**2.6%** of the boost-residual variance. To claim more you must argue ρ is noise-dominated, which
disqualifies it as a fundamental variable by the same stroke.

The within-galaxy sign is negative (the framework's direction) but consistent with zero and worth
0.3% of variance. That is the most generous reading available and it is not a signal.

### 5. Same family, same parameter count, only the argument swapped

Fit C(u) = tanh(γ ln(1 + u/u_crit)), g_obs = g_bar/C(u), least squares on log g_obs, both
arguments, k = 2 each:

| argument | γ | log₁₀ u_crit | RMS resid | robust σ |
|---|---|---|---|---|
| g_bar (MOND) | 0.18 | −11.58 | 0.1387 | 0.1173 |
| ρ (this site) | 0.05 | −24.23 | 0.2324 | 0.2345 |

**ΔBIC = +2709** against ρ (N = 2622, same k). The g_bar arm lands at the observational floor;
the ρ arm misses it by 0.187 dex in quadrature.

*(The fitted γ = 0.18 is not comparable to the site's 0.489 — this is a ν-form fit with g_bar as
the argument, not the site's μ-form calibration. The point of the row is that the g_bar arm is not
handicapped, and it isn't: it reproduces the RAR scatter.)*

**Read the split before citing this.** The ρ arm's 0.232 dex total = 0.134 dex scatter-at-fixed-g_bar
**+** 0.190 dex systematic mean-shape error. Only the scatter half is the no-go. The mean-shape half
is compander-shape-dependent and a different C(·) could in principle repair it — the site's own
2026-07-22 form-selection run already established that tanh carries no statistical content. **Do not
quote ΔBIC = +2709 as a shape-independent result.** The shape-independent results are §1 and §4.

### 6. Constructive: how non-local must a density-keyed theory be?

The published escape from the algebraic no-go (Burrage, Copeland & Millington, PRD 95, 064050,
2017 — the symmetron counterexample this project found on 2026-07-27) works by making the coupling
*differential* rather than algebraic, which smooths ρ over a range λ. So: convolve the measured
Σ(r) with an exponential kernel of range λ and ask at what λ the density variable becomes as good
a predictor as g_bar.

| λ (kpc) | λ/R_d | σ(log B \| Σ_λ) | vs g_bar |
|---|---|---|---|
| 0 | 0 | 0.1613 | 1.37× |
| 2 | 0.8 | 0.1572 | 1.33× |
| 8 | 3.4 | 0.1525 | 1.29× |
| **16** | **6.8** | **0.1427** | **1.21×** (best) |
| 32 | 13.6 | 0.1670 | 1.42× |
| ∞ | ∞ | 0.1947 | 1.65× |

**No kernel width recovers g_bar performance.** Smoothing improves the local variable only to 1.21×
at λ ≈ 7 disk scale lengths — already larger than the galaxy — and then *degrades*. The reason is
structural and worth stating plainly: **g_bar = G M(<r)/r² is not a smoothed density.** It carries
an explicit 1/r² that no convolution of Σ can generate. Making the coupling differential is not a
free dial you can turn until it fits; the data fixes the required kernel to the Newtonian one, at
which point you have re-derived g_bar.

### 7. The bound worth quoting: local-density admixture ≤ 25%

One-parameter family interpolating between the two variables in log space,
log u_α = (1−α) log Σ_local + α log g_bar (α = 0 is the site's variable, α = 1 is MOND's):

| α | 0.00 | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|---|
| σ(log B \| u_α) | 0.1613 | 0.1519 | 0.1405 | 0.1312 | 0.1232 | **0.1178** |

Monotone. Minimum at α = 1.00; galaxy-block bootstrap 95% CI on the optimal α = **[0.75, 1.00]**.

> **The SPARC rotation-curve ensemble allows at most 25% weight (95%) on a local-density variable
> in whatever sets the mass discrepancy. The site's galaxy sector sits at 100% — the far end of the
> excluded region.**

(Bound is within the log-linear interpolation family scanned; a different interpolation could shift
the number, not the sign.)

---

## What this corrects in the record

**The topic's own framing over-claimed by ~3×, and it should be fixed rather than repeated.**
The visitor persona's Finding 5 predicted that "a few tenths of a dex of intrinsic spread" in ρ at
fixed g_bar would exclude algebraic C(ρ) parameter-free. The spread is real and large —
σ(log ρ | log g_bar) = **0.36 dex**, ten times the RAR's ~0.034 dex intrinsic scatter (Li et al.
2018) — but naively propagating it through the gain |d log C/d log ρ| ≈ 0.5–1.0 predicts
0.18–0.36 dex of injected scatter, and the **measured** injection is **0.110 dex**. The naive
propagation overstates by 1.6–3.3× because it treats the ρ-residual as pure noise when part of it
tracks real boost variation. Use the measured 0.110 dex, not the propagated bound.

The 0.110 dex is nonetheless **3.2× the RAR's intrinsic-scatter budget** (0.034 dex; ~10× in
variance) — a real excess, just not the crushing one anticipated. This is the fourth entry in this
project's running pattern of a persona nominating a correct target with an inflated magnitude
(see `feedback_persona_loop_amplifies_site_errors`): the *target selection* was excellent — this was
genuinely the sharpest unrun thing on the site — and the *arithmetic* was not checked.

---

## Scope — what this does and does not establish

**Does establish**, form-free and family-free:
- Local baryonic surface density is a strictly worse predictor of the mass discrepancy than g_bar,
  by 1.34–1.77× depending on treatment, robust to gas model, scale height, and 175 free per-galaxy
  nuisance parameters.
- Local density carries no information about the boost beyond g_bar: ≤ 0.7% of residual variance
  (≤ 2.6% under a generous attenuation allowance), with a validated positive control.
- Any theory in which the boost is a function of local density — algebraic **or** with a coupling
  range λ up to ~30 kpc — over-predicts RAR scatter. Extending to λ → ∞ makes it worse, not better.
- The allowed local-density admixture is ≤ 25% (95%).

**Does not establish**:
- It does not exclude *all* differential couplings. A gradient-coupled field solving a PDE need not
  act like a convolution of the observed Σ(r); the smoothing scan is a proxy for that class, not a
  proof about it. BCM 2017 remains a live counterexample to the *general* no-go — but §6 now says
  something specific about what BCM would have to do: reproduce the 1/r² structure, not merely
  smooth ρ. **Whether BCM's published symmetron reproduces the RAR's scatter and not just its mean
  relation is still unaddressed in that paper and is still the open referee question.**
- It does not exclude the compander family on shape grounds; that half of §5 is shape-dependent.
- It does not test the *volumetric* claim independently of the surface-density one — at fixed h they
  are the same statement. Separating them requires per-galaxy thickness measurements SPARC lacks.

---

## Recommended propagation (maintainer)

1. **Do NOT increment the refutation count from 6 to 7.** This is the same underlying failure
   (local coupling) executed in a form-free way, not an independent refutation. Inflating the count
   would repeat the error class recorded in `project_refutation_count_scope_word_excluded_failures`,
   in the opposite direction. Upgrade the *generality* of artifact 1, don't add a row to the tally.
2. `/for-researchers` artifact 1 currently rests on three legs (ΔBIC = +184, ~1.7 dex offset,
   cluster ρ_crit). Add a fourth that is stronger than all three because it assumes no functional
   form: **the RAR residuals contain no local-density information (≤0.7% of variance)**. The page
   already cites Lelli 2017's ≲0.13 dex and notes those authors "tested surface columns, never
   volumetric ρ" — this is that test, run.
3. The page's scope caveat — "gradient-based schemes such as symmetron screening … are *not* covered
   and are not claimed to fail here" — should stay, but gains a quantitative companion: §6's
   statement that no smoothing kernel on Σ reaches g_bar performance, and §7's ≤25% admixture bound.
4. Register as **TEST-13** on `/tier-1-existing` with an explicit pre-stated verdict rule, so it is
   visible to ledger audits (`project_a0_epoch_prediction_dropped_test_id_mechanism`: untagged
   predictions become invisible). TEST-12 stays reserved for the unrun ambient-density test.
5. The one-line citable form: *"Across SPARC's 2,622 high-quality rotation-curve points, the residuals
   of the radial acceleration relation are uncorrelated with local baryonic surface density
   (r = 0.001, 95% CI [−0.076, +0.081]); at most 25% of the organizing variable may be local."*

---

## Open threads this opens

- **Does BCM 2017 reproduce the RAR *scatter*?** Still unanswered, still the highest-value question
  in this sector, and now sharper: §6 says a viable local-ish theory must reconstruct 1/r², so the
  question for BCM is not "does the symmetron fit the mean" but "does its field configuration carry
  the enclosed-mass structure." That is checkable against their published solutions.
- **Run the same test on the ambient-density lever (TEST-12).** The machinery here is exactly what
  that test needs: partial correlation of RAR residuals against a host-environment variable, with the
  positive control already validated. TEST-12 is one function call away from executable.
- **The α-admixture bound is a reusable instrument.** Every "the right variable is X, not g_bar"
  proposal in the modified-gravity literature can be scored on it in an afternoon. That is a
  methodology contribution that does not depend on this framework being right or wrong — and unlike
  A2ACW, it has a validated positive control.
