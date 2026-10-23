# PREREG — Is σ_int = 0.086 dex a BTFR scatter? (identity / shuffled-V control)

Date: 2026-10-23, explorer. Written after reading `Synchronism/simulations/session610_cdm_synthesis.py` and
Desmond 2017 (arXiv:1706.01017, .tex source), before running anything.

## Read from code (not predictions)
- y = log M_bar (Mendel stellar + 1.33 M_HI); the scatter is in **log M_b at fixed predictors**.
- Predictors: logV, TFR residual (log L_i − fit(log V)), Δ_SPS = logM*_Taylor − logM*_Mendel, g−i, f_gas = M_gas/M_bar,Taylor.
  Three of the five (TFR residual via L, Δ_SPS, f_gas) are built from M_b's own ingredients.
- Desmond 2017 Table 1 is in **log V_f dex** (SPARC 0.029, AM model 0.064, AM-scatter-0 model 0.061);
  "∼0.25 dex in M_b" is the ×4 conversion (paper footnote).

## Runs (optimal subsample, kin+dist noise, ML σ_int as in S610)
R0 reproduce: 5-var σ_int (expect 0.086) and plain BTFR σ_int (expect 0.270).
R1 shuffled V: permute log V across galaxies (200 permutations), recompute the TFR residual against the shuffled V,
   refit the 5-var model. This destroys every Tully–Fisher relation and keeps the algebra.
R2 colour-only: log V + g−i (external to M_b's ingredients).
R3 inverse axis: plain BTFR, log V on log M_b, σ in log V and ×slope⁻¹ conversion.

## Predictions
P1 (main): R1 median σ_int ≤ 0.12 dex, i.e. at least ~70% of the 5-var "tightness" survives with no velocity
   information. If true, 0.086 measures how well M_b is rebuilt from its own photometric ingredients, not BTFR scatter.
   Refuted if R1 median ≥ 0.20 dex.
P2: R0 reproduces 0.086 ± 0.003 and 0.270 to within 0.005.
P3: R2 σ_int ≥ 0.20 dex (colour alone does not reach the M/L wall).
P4: under the shuffle, the 5-var R² stays ≥ 0.80 (vs 0.88 real).
