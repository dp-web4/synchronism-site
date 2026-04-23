# Topic: Chemistry γ Correlations — Null Model Comparison

## Question

Do the 1,703 chemical phenomena correlations with γ survive (a) Benjamini-Hochberg multiple-testing correction, (b) replacement of γ with natural rival variables like ln(T/T_Debye), ξ_corr/a, or P/P_crit, and (c) covariance analysis accounting for property clustering?

## Context

The researcher persona (Pass 4, 2026-04-23) pointed out that the site's chemistry correlation claims lack null-model benchmarking. Seven phenomena with r > 0.9 are cited. But:

1. **Multiple testing**: 1,703 phenomena × multiple correlation tests. Without Benjamini-Hochberg FDR correction, the expected number of spurious hits is non-trivial.
2. **Property clustering**: Sound velocity, Debye temperature, bulk modulus, and piezoelectricity d₃₃ all share elastic-scale dependence — they are not 7 independent pieces of evidence, more like 2-3 independent degrees of freedom.
3. **Null hypothesis**: Any monotonic function of (microscopic binding scale / mesoscopic threshold) would correlate with the same phenomena. γ ≈ 2/√N_corr where N_corr ≈ 4 at the γ≈1 boundary — this is close to "things happen around N_corr = 4 correlated particles." Would T/T_Debye, or ξ/a (coherence length / lattice constant) produce similar correlations?

## Why It Matters

If the correlations survive null-model comparison, the γ ≈ 1 boundary captures something non-trivial about chemistry. If they don't survive — if ln(T/T_Debye) gives similar R² scores on the same 1,703 phenomena — then γ is a reparametrized mesoscopic ratio, and the chemistry correlations belong in the reparametrization catalog alongside η.

This is the key test that distinguishes "γ captures real physics" from "γ is a convenient dimensionless boundary variable among many equivalent ones."

## Suggested Starting Points

- Access the chemistry correlation dataset (likely in the explorer's data or the site's data files)
- Find how γ = 2/√N_corr maps onto T/T_Debye — these should be related through the Debye model where N_corr ~ (T_Debye/T)^d for d dimensions
- Run correlation analysis with: γ, ln(T/T_Debye), ξ_corr/a, P/P_crit as predictors
- Apply Benjamini-Hochberg at q = 0.05 to all 1,703 correlations
- Estimate effective N by computing the correlation matrix of the 1,703 phenomena and finding its rank
- Prior relevant finding: `explorer/findings/interpretation-gap-math-vs-physics.md`
