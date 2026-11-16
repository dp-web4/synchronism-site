# Finding: Blind sector (He-4 superfluid fraction): fitted γ lands on no textbook incumbent; the "incumbent rule" is a least-squares projection identity, and the template's onset exponent 1 fails the data

## Origin
Topic `blind-sector-gamma-register-the-incumbents-gamma-before-fitting-data.md` (maintainer 2026-11-16), plus its side
question: why the frozen-Υ SPARC fit (0.489) and McGaugh's RAR (γ_eq 0.595) differ by 0.1.

## Summary
- **The registered rule came out AMBIGUOUS** (PREREG `9ad8437`, committed before the fit code existed; **not blind**,
  because a fetch report had already shown me the rounded ρ_s/ρ table).
  - At β = 2 (the primary convention) γ_fit = 2.596 ± 0.060, which is 15.7 % (5.9σ) from Andronikashvili's 1 − t^5.6
    (γ_eq 2.243).
  - At β free, γ_fit = 0.753 ± 0.047, which is 18.4 % from London's ideal-BEC 1 − t^1.5 (γ_eq 0.636). London misses the
    data by 0.35 rms, so that proximity is a coincidence of the β–γ degeneracy, not agreement.
  - Landau's phonon + roton gas is outside the template's span: it never vanishes at T_λ.
- **Post hoc, the rule holds exactly when the "incumbent" is the curve that actually fits the data.** On the data's
  own grid, (1 − t^a)^b fitted to the data gives γ_eq = 0.737 / 2.557, against the fits' 0.753 / 2.596.
  - So the rule is a projection identity: γ_fit = γ_eq(whatever curve the data follow, on the data's grid, loss and
    knee convention).
  - It predicts a sector's γ only to the extent that a textbook curve already fits that sector's data.
- **In this sector γ is not a property of the physics.** It reads 0.44–4.83 across the knee convention and the loss.
  The two independent experiments give 0.95 (Maynard) and 0.60 (Tam & Ahlers) at β free.
- **The template fails the shape at the onset.**
  - Its rms is 4.1× that of the same-dimension rival (1 − t^a)^b, and 12× the duplicate-row scatter.
  - The residual pattern is +/−/+, with the largest piece (+0.028) in the last 5 % below T_λ.
  - Cause: the template is linear in (1 − T/T_c) at the zero for every γ and β. The measured onset exponent is 0.745
    (rival fit), against 0.67 for 3D XY.
- **SPARC side question, closed.** The 0.1 gap is not grid, loss or the error cut: on SPARC's own 2,807 points with the
  same loss, the RAR's γ_eq is 0.587.
  - It is the data's ±0.015–0.02 dex structured residual about the RAR, which the template absorbs by moving γ.
  - The template and the RAR fit the data to the same rms (0.1437 dex; Δχ² = 0.83 at point level).

## Research Notes

### Sector choice and data provenance
- **Paywalled first.** Nickel M_s(T) (Crangle & Goodman 1971) returned 403 from the Royal Society. No tabulated BEC
  condensate fraction or 2D-Ising magnetisation was found online.
- **Data used.** Donnelly & Barenghi 1998 (J. Phys. Chem. Ref. Data 27, 1217), Table 2.1 "The adopted database for the
  superfluid density of helium II", fetched verbatim from `pages.uoregon.edu/rjd/vapor3.htm`.
- **The table mixes data and model.**
  - Key 1 (T < 1.25 K) is **Landau theory output**; key 4 (T > 2.07 K) is the Singsaas & Ahlers **asymptotic formula**.
    Neither is a measurement, so both were excluded (the catalogue-columns-can-be-model-derived lesson again: the
    smooth Table 2.3/2.4 a reader would naturally grab is mostly spline through model rows outside 1.2–2.1 K).
  - Kept: key 2 (Maynard 1976) and key 3 (Tam & Ahlers 1987), from second- and fourth-sound velocities, stated "< 5 %".
    That is 48 rows over 31 unique T, 1.203–2.164 K, t = T/T_λ = 0.553–0.994.
- **Precision.** The scatter between duplicate rows at the same T is 0.0019 in ρ_s/ρ. These data are far more precise
  than anything else the template has been fitted to.
- **Constants.** T_λ = 2.1768 K (the last knot). ρ_total comes from Table 2.3 (ρ_s + ρ_n).

### Registered γ_eq (`scripts/blind_sector_he4/incumbents.py`, T column only)
The template is tanh(γ ln(β(1/t − 1) + 1)), the archive's superconductor form.

| incumbent (no ρ_s data used) | β = 1 | β = 2 | β free (β) | β free, rel-wt |
|---|---|---|---|---|
| I1 London ideal BEC 1 − t^1.5 (1938) | 1.220 | 0.711 | 0.636 (2.34) | 0.624 |
| I2 Landau phonon + roton gas (Δ/k 8.65 K, p₀/ħ 1.92 Å⁻¹, μ 0.16 m₄, c 238 m/s) | out of span | | | |
| I3 Andronikashvili 1 − t^5.6 (1946 torsion-pendulum data) | 4.090 | 2.243 | 1.321 (3.95) | 1.135 |

The convention carries most of γ: for one incumbent (I3) it runs 4.09 → 2.24 → 1.32, and the weighting moves it a
further 14 %.

### Data fits (`fit_data.py`, 300 row-bootstraps)
| convention | γ_fit | β | rms |
|---|---|---|---|
| β = 1 | 4.827 ± 0.162 | 1 | 0.059 |
| **β = 2 (primary)** | **2.596 ± 0.060** | 2 | 0.051 |
| β free | 0.753 ± 0.047 | 10.6 | 0.024 |
| β free, relative-weighted | 0.443 ± 0.029 | 25.8 | 0.017 |

- **Controls pass.** The identity control (fit code on I3) returns 2.243 / 1.321 exactly; the injection (I1) returns
  0.711 / 0.636 exactly.
- **Split by experiment.** Maynard gives γ = 2.478 (β = 2) and 0.952 (β free, β = 7.3). Tam & Ahlers gives 2.698 and
  0.598 (β = 15.2).
  - At β free the two experiments disagree by 0.35 in γ, on the same physics.
  - Tam & Ahlers sample densely near T_λ, where the template's linear onset is worst, so β runs up to push the linear
    zone below the grid and γ follows.
- **Forecasts.**
  - Mine (registered, not blind) missed on γ: I said 2.0–2.3 at β = 2 and got 2.60; I said 0.9–1.3 at β free and got
    0.75.
  - Right on β > 3.95 (10.6).
  - The shape forecast S held.
- **Rule R, as registered:** within 10 % of neither incumbent under both conventions, and not more than 20 % from both
  under both, so AMBIGUOUS. In bootstrap units it is 5.9σ from I3 at β = 2.
  - I am reporting the registered verdict, not the stronger-sounding σ, for two reasons. σ_boot here only measures
    the stability of the data. And the gap is the incumbent's own 0.05 rms misfit projected onto ∂template/∂γ, not
    anything the template supplies.

### Why the rule is an identity, and what it can and cannot test
- **Linearised least squares.** γ_fit − γ_eq(I) = ⟨J, y − I⟩ / ⟨J, J⟩, with J = ∂template/∂γ on the data grid.
  - The rule "γ lands on the incumbent's γ_eq" is therefore true exactly when the data–incumbent residual is
    orthogonal to J (or small).
  - It holds in the four 11-15 sectors because the incumbents there (Λ, the RAR, BCS at a pinned knee, Newton) fit
    their data at the precision those fits resolve.
  - It fails or turns ambiguous in He-4 because no closed-form textbook curve fits ρ_s/ρ at 0.2 % precision.
- **Post-hoc check.** With the data-describing curve as the "incumbent", the rule lands within 2 % (0.737 vs 0.753;
  2.557 vs 2.596).
- **Consequence for the ledger's Bucket 3.** The "N_corr-divergence test reads diverging by construction" (PREDICTIONS
  11-16 block (ii)) stands, and more strongly.
  - A blind sector cannot make γ informative, because whatever γ the data give is the projection of the data's own
    curve.
  - γ can carry framework content only if it is predicted **from the framework** (γ = 2/√N_corr with N_corr stated
    in advance), not from an incumbent. No sector on file has a stated N_corr for an order-parameter system.
  - The experiment the topic called "the one left" therefore cannot discriminate in either direction. That is worth
    knowing before anyone runs a second one.

### The shape result: onset exponent locked to 1
- **Why it is locked.** Near t → 1, x = β(1/t − 1) ≈ β(1 − t), so C ≈ γβ(1 − t). The onset is linear for every γ and
  β.
- **Rival fit.** The same-dimension rival (1 − t^a)^b gives a = 4.96, b = 0.745, rms 0.0058, against the template's
  0.0236 (4.08×).
- **Binned residuals.** Template / rival mean residuals in t ∈ [0.55, 0.8), [0.8, 0.95), [0.95, 1): +0.016 / −0.016 /
  +0.028 for the template, against +0.006 / −0.004 / +0.004 for the rival.
- **Sector by sector.** This is the 11-13 forbidden-shapes row "+1 inside ln, power 1 (onset μ ≈ γx)" in the
  temperature mapping.
  - He-4 ρ_s/ρ (onset 0.67–0.75): **refuted**, if C is read as the superfluid fraction.
  - The BCS gap (onset ½): the same failure. It is why `sc2.py`'s β-free fit slid to β = 16 and γ to 0.57.
  - The BCS superfluid density λ(0)²/λ(T)² (mean-field onset 1): **allowed**.
- **So the forbidden shape is sector-conditional.** It depends on which observable C is mapped to, the same
  "which variable?" fork as elsewhere in the ledger.
- **Consistent with the existing scope box.** /coherence-function's "Scope Limit: Universality Classes" box already
  says C(ρ) cannot encode universality classes. This is the first time that statement has been confronted with
  measured order-parameter data, and in this sector the data refute it at 12× the measurement scatter.

### SPARC side question: 0.489 vs 0.595 (`sparc_0489_vs_0595.py`, `sparc_dchi2.py`)
- **Identity.** The frozen 2,807-row likelihood (Υ_disk 0.5, Υ_bul 0.7, 10 % error cut, vertical log g_obs loss)
  reproduces γ = 0.489.
- **Grid and loss ruled out.** Replacing every g_obs by McGaugh's RAR at its own g_bar (g† = 1.2e-10, or 1.128e-10 as
  fitted to these rows) and refitting with the same code gives γ_eq = **0.587 / 0.588**.
- **Error cut ruled out.** Dropping the 10 % cut moves γ to 0.434, away from 0.595, not toward it.
- **What is left is the data.**
  - Residuals about the fitted RAR, binned in log g_bar: −0.019 dex at [−11.5, −11), +0.009, +0.014, +0.015 up to
    −9.5, then −0.012.
  - The template absorbs this wiggle by moving γ down 0.1.
- **The cost is negligible.**
  - The 1-parameter RAR is only Δχ² = 0.83 (point level) worse than the template's 2-parameter minimum.
  - Inside the template, γ = 0.588 costs Δχ² = 8.2 at point level, ≈ 0.6 at the galaxy-block scale the 08-14
    bootstrap implies.
  - So γ is a high-gain readout of ≈ 0.02 dex residual structure, and SPARC does not distinguish 0.49 from 0.59.
- **Referee paragraph:** "The 0.1 gap is neither loss nor sampling: the RAR's own γ on SPARC's points with the
  frozen loss is 0.587. It is the data's few-hundredths-dex departure from McGaugh's function, which both curves fit
  to the same rms."

## Implications for the Site
- **The /coherence-function#incumbent-map lead overstates the rule.** "Every γ the site reports from data lands where
  the known theory of that sector already sits" was true of the four sectors on file. The first new sector tested
  lands on neither textbook function.
  - The accurate statement is weaker in one way and stronger in another. A fitted γ is the γ of whatever curve the
    data follow, measured on that dataset's grid, loss and knee convention. Where a known function fits the data, γ
    lands on it; where none does (He-4), γ still carries no template content. It then varies 0.44–4.8 with analysis
    choices, and even between two experiments.
- **"Fit γ" is not a measurement of a sector constant.** It should never be quoted without the convention (β, loss,
  grid range). The superconductor rows (2.31–2.65 at β = 2) are an instance.
- **The template's linear onset is a testable, sector-conditional prediction.** Read as the superfluid fraction, it is
  refuted on He-4 (onset 0.67–0.75 vs 1). That is a concrete stake to add beside the universality-class scope box.

## Action: Maintainer
1. **/coherence-function#incumbent-map lead paragraph.** Replace the second sentence with: "Where a known function fits
   a sector's data, the fitted γ lands on that function's γ. In the first sector tested blind (liquid-helium superfluid
   fraction, Donnelly & Barenghi 1998), no textbook function fits and the fitted γ lands on neither: it moves from 0.44
   to 4.8 with the knee convention and the loss, and two experiments on the same liquid give 0.60 and 0.95. Either way
   a fitted γ carries nothing the data's own curve did not already supply."
   - Source: `explorer/scripts/blind_sector_he4/`, PREREG `9ad8437`, not blind.
2. **Add a row to the incumbent-map table.**
   - Known function: liquid helium (London ideal Bose gas 1 − t^1.5; Andronikashvili 1 − t^5.6).
   - γ that matches it: 0.64 / 1.32 (β free); 0.71 / 2.24 (β = 2).
   - Third column: "data give 0.75 (β free), 2.60 (β = 2); neither; template rms 4× a same-size rival".
3. **Scope Limit: Universality Classes box.** Add one sentence: "Tested on data once: near the transition the template
   is linear in (1 − T/T_c) for every γ; liquid helium's superfluid fraction goes as (1 − T/T_c)^0.67, and the template
   misfits it at 12× the measurement scatter (explorer 2026-11-16)."
4. **Under the incumbent-map table, after "SPARC alone cannot tell γ = ½ … from 0.595".** Add the referee paragraph from
   the SPARC side question above.
5. **Grep `src/` for superconductor γ values quoted without "β = 2" / "knee pinned".** Add the convention wherever it is
   missing.

## Open Threads
- **A framework-predicted γ, not an incumbent one.** The only test that could make γ informative is γ = 2/√N_corr with
  N_corr stated *before* the fit. Does any archive document state N_corr for liquid helium, or for any order-parameter
  system, independently of a fitted γ? If not, the Bucket 3 test is not runnable at all, not merely "diverging".
- **Onset exponent across sectors.** The template's linear onset is allowed for mean-field superfluid density and
  refuted for He-4 and the BCS gap. Is there any archive sector where C is mapped to an observable with onset exponent
  1? That would be the template's only native territory in the temperature mapping.
- **A second precise dataset with a textbook incumbent that does fit.** Ni magnetisation vs the 3D-Heisenberg critical
  law plus Bloch T^1.5 (Crangle & Goodman, if the table can be obtained) would show whether the projection identity
  holds prospectively, rather than post hoc as here.
