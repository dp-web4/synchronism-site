# PREREG — what RAR shape can the tanh-log template not fit? (explorer 2026-11-13)

Committed before `findings/scripts/template_forbidden_shapes.py` is run. Not blind: I have read the 11-06 δ-family
output (SPARC prefers δ = 1, rms 0.1437; δ = 4 costs +466 by point, ~3σ by galaxy) and the 08-20 regulator finding
(onset exponent p = 0.76 ± 0.16, consistent with 1). The hand estimates below are written before any new number.

## Object
Template μ_γ(x) = tanh(γ ln(1+x)), x = g_obs/a₀ (μ-convention, the wiring every SPARC fit on file uses).
Comparators: MOND ν_δ(y) = (1 − e^{−y^{δ/2}})^{−1/δ} (δ = 1 is the RAR function) and the n-family
ν_n(y) = [½(1 + √(1 + 4y^{−n}))]^{1/n} (n = 1 simple, n = 2 standard).

Shape statistics, all in the μ-convention:
- **W** = log₁₀ x(μ = 0.9) − log₁₀ x(μ = 0.1), the 10–90% width of the transition in dex.
- **tail exponent** t(x) = −d ln(1 − μ)/d ln x, read at x = 10 and x = 100.

Data: SPARC MassModels_Lelli2016c.mrt, the 11-06 loader (eV/V ≤ 0.10, Υ_disk 0.5, Υ_bul 0.7; N = 2807), a₀ profiled
per member. Υ frozen is a known weakness (memory: a headline ΔBIC can freeze the key nuisance), so P5 repeats the
data step with one global Υ scale factor profiled as well.

## Predictions
- **P1 (class floor).** W(γ) decreases monotonically over γ ∈ [0.05, 50]; its minimum is ≥ 1.15 dex; W(½) = 1.908
  (identity: μ_½ = x/(x+2)).
- **P2 (MOND families leave the template's reach).** W(δ = 1) lies in [1.3, 1.8]; every δ ≥ 4 member has W < 1.17;
  every n ≥ 3 member has W < 1.17.
- **P3 (the template fits the RAR's shape).** Best template γ on SPARC (frozen Υ) lies in [0.4, 0.8]. Template best vs
  δ best: galaxy-block bootstrap ΔBIC within ±2 sd of zero.
- **P4 (data width is a property of the data).** W read off each family's best fit lies in [1.4, 2.0] dex, spread across
  the three families ≤ 0.2 dex; galaxy-bootstrap 2.5th percentile of W (δ family, a₀ and δ both profiled) > 1.3.
- **P5 (Υ free).** With a global Υ scale profiled, P4's lower bound still > 1.17.
- **P6 (the 11-07 Cassini asymmetry is the width floor).** W(δ = 6) < 1.17: the MOND member that came within 3σ of
  Cassini without bulges sits where no γ can reach.

## Reading rule
If P4–P5 hold, the template's one MOND-distinguishing shape restriction (W ≥ 1.17 dex) is real but unexercised by
SPARC: data sit inside the allowed region, and the template forbids what SPARC already disfavours. If the W lower bound
falls below 1.17, SPARC presses on the boundary, and that is the template's first shape-level tension on galaxy data.
If P3 fails with ΔBIC > 2 sd in δ's favour, the template cannot fit the RAR's shape and that is a refutation at the
template level, not the parameter level.
