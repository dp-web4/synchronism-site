# Finding: The DE freezing locus has no shape-specific win branch at DR3 — the 2002 original Cardassian (wCDM) fits any DR2-allowed locus truth to Δχ² ≤ 0.42

## Origin
Topic `de-freezing-locus-the-only-win-branch-shape-not-sign.md` (maintainer 2026-10-08, from a visitor researcher
persona). Pre-registered `f3e045e`
(`findings/scripts/PREREG_de_freezing_locus_dr3_shape_resolvability.md`), then executed.

## Summary
The substituted dark-energy background is a one-parameter curve through ΛCDM (γ = ½). Its only non-Λ branch is
freezing (γ < ½). The topic asked whether the curve's *shape* could single it out at DESI DR3, where its sign cannot.
**It cannot.**

- **Method.** I generated noiseless (Asimov) DR3-like data on the locus at every DR2-allowed γ, with three BAO
  precisions and two SN precisions. I then fitted each set with ΛCDM, wCDM, MP-Cardassian n = 0, the locus itself
  and CPL.
- **wCDM fits it almost exactly.** wCDM is exactly the original Freese–Lewis 2002 Cardassian, H² ∝ ρ + Bρⁿ, and has
  the same parameter count as the locus. It fits every locus truth to **Δχ² ≤ 0.42**. MP-Cardassian n = 0 fits to
  ≤ 0.10.
- **The ratio is constant.** Δχ²(wCDM − locus)/Δχ²(ΛCDM − locus) = **0.044–0.047** in all 11 arms.
- **What resolving the shape would take.** Telling the locus from wCDM at 2σ needs a **9.3σ** detection of
  w ≠ −1. On the locus that requires γ ≈ 0.30, which **DR2 already excludes at Δχ² = 137**.
- **Detection alone falls short too.** At the DR2 2σ edge (γ = 0.445), the expected detection over ΛCDM is
  Δχ² = 7.2 at nominal DR3. The best arm reaches 9.7, and the ΔBIC > 6 bar is 13.5.
- **5/5 pre-registered predictions held.** P5's registered formula turned out to be degenerate and is re-bracketed
  below.
- **TEST-26 therefore has no framework-specific win branch.** Its only outcomes are a tie with ΛCDM and a kill shared
  with ΛCDM.

## Research Notes

### 1. The locus in (w₀, w_a) and in (w, w′)
CPL projection at the DR2 best-fit (Ω_m, h) = (0.3038, 0.6815). The rms of the projection is ≤ 0.04 %, so CPL is
faithful here.

| γ | w₀ | w_a | w_a/(1+w₀) |
|---|---|---|---|
| 0.300 | −0.839 | +0.285 | 1.77 |
| 0.445 (DR2 −2σ) | −0.969 | +0.096 | 3.11 |
| 0.466 (−1σ) | −0.982 | +0.060 | 3.32 |
| 0.487 (DR2 best) | −0.993 | +0.023 | 3.54 |
| 0.500 | −1 | 0 | — |
| 0.600 | −1.040 | −0.188 | 4.71 |

P1 held: |1+w₀| ≤ 0.031 and w_a ≤ 0.096 on the DR2 2σ range.

**Exact w′ (not CPL).** w′ = dw/dln a today is **−1.95(1+w₀)** at γ = 0.487 and −1.86(1+w₀) at γ = 0.445.
- Caldwell & Linder's 2005 freezing band is 3w(1+w) < w′ < 0.2w(1+w), i.e. about −2.9(1+w) to −0.2(1+w).
- The locus therefore sits **inside generic freezing quintessence**, about two-thirds of the way to the fast-freezing
  edge. It does not lie on a boundary that could distinguish it.
- **First-order analytic check.** Write γ = ½ − δ and x = ρ_m/ρ_knee. Then
  1 + w(x) ≈ 2δ·(x − ln(1+x))/x, with x₀ ≈ 0.9 today, so 1 + w₀ ≈ 0.56δ and w → −1 + 2δ = −2γ in the past.
  This reproduces the numerical w₀ to ~5 %.
- **Why the shape is invisible.** Across the redshifts the data weight (z ≲ 1.5), the locus's w varies by only
  ~δ around a mean. A constant w absorbs almost all of that.

### 2. Asimov DR3 forecast
- **Truth.** Locus at γ_t, (Ω_m, h, ω_b) = DR2 substituted best fit.
- **Fits.** Every competitor refits Ω_m, h and ω_b.
- **Precision.** BAO covariance ×s²; SN covariance ×s_SN² (s_SN = 1 primary, 0.7 secondary). CMB distance priors
  unchanged.
- The locus's own refit returns χ² = 0.0000 and the input γ in every arm (identity control).
- At s = 1, the Asimov ΔΛCDM at γ_t = 0.445 is 5.92. That implies σ_γ = 0.0226, against the real DR2 profile's 0.0224
  (pipeline control).

Δχ² relative to the locus:

| s_SN | s_BAO | γ_t | ΛCDM | wCDM (= Freese–Lewis Cardassian) | MP-Card. n = 0 | CPL (+1 par) | wCDM best w |
|---|---|---|---|---|---|---|---|
| 1.0 | 1.00 | 0.445 | +5.92 | +0.276 | +0.065 | +0.0004 | −0.946 |
| 1.0 | 0.75 | 0.445 | +7.19 | +0.334 | +0.077 | +0.0005 | −0.945 |
| 1.0 | 0.60 | 0.445 | +8.80 | +0.385 | +0.088 | +0.0007 | −0.944 |
| 1.0 | 1.00 | 0.466 | +2.095 | +0.098 | +0.023 | +0.0002 | −0.968 |
| 1.0 | 0.75 | 0.466 | +2.55 | +0.119 | +0.027 | +0.0002 | −0.967 |
| 1.0 | 0.60 | 0.466 | +3.13 | +0.138 | +0.031 | +0.0003 | −0.966 |
| 1.0 | 1.00 | 0.487 | +0.28 | +0.013 | +0.003 | +0.0000 | −0.988 |
| 1.0 | 0.75 | 0.487 | +0.35 | +0.016 | +0.004 | +0.0000 | −0.988 |
| 1.0 | 0.60 | 0.487 | +0.43 | +0.019 | +0.004 | +0.0001 | −0.988 |
| 0.7 | 0.75 | 0.445 | +9.68 | +0.420 | +0.099 | +0.0008 | −0.948 |
| 0.7 | 0.75 | 0.466 | +3.45 | +0.150 | +0.035 | +0.0004 | −0.969 |
| 0.7 | 0.75 | 0.487 | +0.47 | +0.021 | +0.005 | +0.0001 | −0.988 |

Pre-registered predictions:
- **P2 held** (key): max Δχ²(wCDM) = 0.385 primary, 0.420 over all arms (< 1).
- **P3 held**: MP n = 0 max 0.099.
- **P4 held**: ΛCDM at γ_t = 0.487, s = 0.75 gives 0.35 (< 4).

**The scaling law, and the main result.** Δχ²(wCDM)/Δχ²(ΛCDM) = 0.044–0.047, and Δχ²(MP n = 0)/Δχ²(ΛCDM) = 0.010–0.011,
in every arm. Both ratios are geometric properties of how the locus bends relative to the distance kernels, so they do
not depend on γ_t or on the precision. To distinguish the locus from its one-parameter Cardassian twin at kσ, the data
must exclude ΛCDM at k/√0.046 ≈ 4.7kσ. For k = 2 that is 9.3σ (Δχ² ≈ 87). Against MP n = 0 it is 20σ. On the locus,
9.3σ at nominal DR3 requires γ ≈ 0.30, and the DR2 profile already puts γ = 0.30 at Δχ² = +137 over ΛCDM.
**No DR2-consistent world gives DR3 a shape.**

### 3. The win region over ΛCDM is empty in practice
- **σ_γ barely improves with BAO.** Asimov σ_γ = 0.0239 / 0.0216 / 0.0195 at s_BAO = 1 / 0.75 / 0.6. Even a 40 % BAO
  improvement cuts σ_γ by only 18 %. **The γ constraint is supernova-dominated**: BAO + CMB alone puts γ at 0.538
  (2026-08-12 fit). Waiting for DESI DR3 is therefore waiting on the wrong instrument for this parameter.
- **The win needs γ̂ ≲ 0.43.** A ΔBIC > 6 win (Δχ² > 13.5) needs γ̂_DR3 < 0.426 (nominal) or < 0.433 (optimistic).
  Using the BAO+CMB-only N, it needs < 0.440 / 0.446.
- **P5 held, but the registered formula is degenerate.** The registered nested-estimator formula needs
  σ₂² − σ₃² > 0. With the Asimov σ₃ ≈ σ₂ it collapses to ~0, so it returned P = 0.0000. That output is an artifact.
  Post-hoc bracket (`_posthoc_bracket_output.txt`):
  - *Calibrated nested*: σ₃ = σ₂ × (Asimov ratio) = 0.0202. Then P(win) ≈ 8 × 10⁻¹¹ (nominal) and 1.5 × 10⁻⁵
    (optimistic).
  - *Generous independent-data upper bound*: γ̂₃ ~ N(0.487, √(σ₂²+σ₃²)). Then P ≈ **2.1 %** (nominal) and 3.1 %
    (optimistic). With the BAO+CMB-N threshold it is 6–8 %, above the registered 5 % bar only on that looser
    threshold.
  - The honest range is **10⁻¹⁰ to ~3 %**. DR3 shares most of its data with DR2, so the truth sits near the
    calibrated end.
- **Even a win would not select the locus.** Section 2 shows the same data would fit the 2002 Cardassian equally well.
  A "win" would be a freezing detection credited to the Cardassian class, not to this curve.

### 4. The topic's proposed criterion was automatic
The topic proposed "the locus beats w₀w_aCDM by ΔBIC > 6". At every truth, CPL beats the locus by
Δχ² ≤ 0.0008, since CPL contains it to 0.04 %. With N = 1834, ΔBIC(CPL − locus) = ln N − Δχ² ≈ **7.5 > 6** for
*any* locus truth, including γ = ½ (ΛCDM). The criterion is met by the parameter penalty alone. **It tests parameter
counting, not physics.** The correct comparator is the same-dimension twin, wCDM, and against that the margin is
≤ 0.42.

### 5. Answer to "does Cardassian prior art apply to the exact locus?"
- **Functionally, no.** ρ coth(γ ln(1+x)) is not a member of the modified-polytropic (MP) Cardassian family. It shares
  MP n = 0's asymptotes (past w → −2γ, a Λ-like future) but differs at second order.
- **Observationally, yes, to ≤ 0.1 χ².** And the *original* Cardassian (constant w) fits it to ≤ 0.42 χ².
- The /dark-energy wording, "that branch is Cardassian-class prior art", is therefore right for a stronger reason than
  it gives. It is not only that the class contains the branch. No DR2-consistent dataset can tell the specific curve
  from the 2002 member.

## Implications for the Site
- **TEST-26 is closed on its win side.** The site already says the kill is shared with ΛCDM. The new, quantified
  addition is that the win branch is shared too:
  - a freezing detection at DR3 cannot select the locus over wCDM (needs ≥ 9.3σ vs Λ, and DR2 excludes the γ
    required);
  - a ΔBIC > 6 win over ΛCDM itself has a predictive probability of ≲ 3 % (generous bound).
- **TEST-26 has no outcome that is about the framework.** It should stay on record as a ΛCDM test with the framework
  attached, and should not be counted as a pending discriminating registration.
- This closes the registry's **last candidate for a Bucket-0-moving branch** in the DE sector.
- **γ_DE ≈ 0.487 vs SPARC γ ≈ 0.489.** This coincidence has been noted before. It carries no evidential weight,
  because the DE γ is ΛCDM within 0.6σ and DR3 cannot resolve it from ½ (expected Δχ² 0.35).

## Action: Maintainer
- **/dark-energy, "The test: TEST-26" read-first box (~L446):** append a sentence on the win side, e.g.:
  "The win side is shared too (explorer 2026-10-08, pre-registered `f3e045e`). On DR3-like Asimov data the 2002
  constant-w Cardassian fits any DR2-allowed locus to Δχ² ≤ 0.42. Telling the locus apart at 2σ needs a ≥ 9.3σ
  departure from Λ, which needs γ ≈ 0.30, and DR2 excludes that at Δχ² = 137. TEST-26 has no outcome that singles out
  the framework."
- **/top-5-tests TEST-26 verdict string:** add "win side shared with constant-w Cardassian (Δχ² ≤ 0.42)" after
  "KILL IS SHARED WITH ΛCDM".
- **/dark-energy Cardassian paragraph (~L73):** optionally add "observationally indistinguishable from the original
  constant-w Cardassian at DR3 precision (Δχ² ≤ 0.42)" after the MP-limit sentence. This is the stronger form of the
  prior-art claim.
- **Note for any page that says "await DR3" for γ_DE:** the γ constraint is SN-dominated. A 40 % BAO improvement
  tightens it by 18 %.
- **site_lint candidate:** any "TEST-26 … win" or "freezing … would support" phrasing without "shared"/"Cardassian"
  nearby.

## Action: dp
- TEST-26: retire as a *registration* (it has no framework-specific outcome on either side), or keep it explicitly as
  "tie/shared-kill only". This joins the TEST-04a retirement routed on 10-07. With both, the DE sector has **no
  discriminating test left**, and it is ΛCDM with a relabelling that data cannot resolve.

## Open Threads
- **Completion B** has no ΛCDM member and fails DR2 by Δχ² ≥ 79 (2026-08-12), so it has no win branch either. Not
  re-run.
- **The ratio 0.046 is set by the data's z-weighting.** A high-z-weighted probe (z ~ 2–3, e.g. Lyα BAO alone) would
  change it, but the locus's w varies by only ~δ there as well. No realistic probe makes the ratio O(1).
- **Rubin/LSST SN (~2030) is the instrument that actually tightens γ.** Even at s_SN = 0.7, ΛCDM at γ = 0.487 gives
  only 0.47. A 3× SN improvement would still leave the DR2 best fit at ≲ 1σ.
- **Transferable rule.** For any "shape vs prior-art twin" question, compute the ratio
  Δχ²(twin)/Δχ²(null) on Asimov data first. If it is r, shape resolution at kσ needs a null rejection at k/√r σ.
  That one number would have closed this topic before any discussion of priority.

## Files
- PREREG: `findings/scripts/PREREG_de_freezing_locus_dr3_shape_resolvability.md` (`f3e045e`).
- Registered script: `findings/scripts/de_freezing_locus_dr3_shape_resolvability.py`. Its `_output.txt` holds §0–1
  plus the first arm. The serial run was stopped for runtime.
- Parallel driver (runtime only, calls the registered functions unchanged):
  `findings/scripts/de_freezing_locus_dr3_parallel_driver.py`, output `de_freezing_locus_dr3_parallel_output.txt`.
- Post-hoc: `findings/scripts/de_freezing_locus_dr3_posthoc_bracket_output.txt` (ratios, calibrated/generous P5).
- Literature: Caldwell & Linder 2005 (astro-ph/0505494), freezing band 3w(1+w) < w′ < 0.2w(1+w); Freese & Lewis
  2002 (PLB 540, 1); Gondolo & Freese 2003 (MP form).
