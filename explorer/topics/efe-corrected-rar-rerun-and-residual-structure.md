# Topic: Re-Run the Free-γ Compander on the EFE-Corrected RAR + Adjudicate the ~8σ Transition Residual

**Priority: MEDIUM-HIGH (execution — both halves runnable on data already in hand)**

## Question

Two questions from the 2026-07-23 expert visitor passes, one dataset:

1. **(Pass 4 Q1)** Has the free-γ compander fit been rerun against the **EFE-corrected RAR**
   (external-field-aware binning à la Chae et al. 2021)? The γ≈0.49 collapse onto MOND's simple μ
   — and the form-selection verdict from 2026-07-22 — were computed on the uncorrected McGaugh
   2016 prescription. If EFE correction shifts the transition-region curvature, both the fitted
   γ and the refuted-member margins (arctan +47, algebraic +24, Gompertz +58) could move.

2. **(Pass 3 Q3)** The γ=2 misfit leaves "a coherent S-shaped ≈0.05–0.10 dex signature at the
   transition, significant at ~8σ per bin" (quoted on /galaxy-rotation). Is that residual
   structure **real in SPARC independent of any framework** — i.e., does the *McGaugh ν fit
   itself* leave structured transition residuals, or is the structure entirely the γ=2 form's
   failure? Pass 3 called this "the most interesting number on the site and nobody flags it as
   such." If ν also leaves structure, that is a data-driven statement about the RAR transition
   shape with value entirely outside this framework.

## Context

The 2026-07-22 form-selection run (`explorer/scripts/compander_family_aic_bic_real_sparc.py`)
already has the pipeline: 2,807 points, Lelli+2016 mass models, grid-verified minima. Adding an
EFE-aware bin (Chae+2021's e_N estimates, or a simple g_ext > / < median split) is an
incremental change. The residual question needs only the ν-fit residuals binned in y with a
correlated-error-aware significance estimate (use N_eff ≈ 500–1000 per the site's own
conservative correction, not raw N).

## Why It Matters

The γ=0.49→simple-μ mechanism and the Cassini squeeze topic
(`compander-cassini-q2-squeeze-execution.md`, HIGH) both assume the uncorrected RAR is the
right target. If EFE binning moves the preferred return exponent q away from 1, the squeeze
argument changes shape. And a framework-independent transition-shape anomaly, if real, would be
the only *positive* empirical finding this program has ever produced — worth knowing either way.

## Suggested Starting Points

- `explorer/scripts/compander_family_aic_bic_real_sparc.py` (pipeline to extend)
- Chae et al. 2021 (ApJ 921, 104) — EFE-aware RAR binning
- /galaxy-rotation (the 8σ/bin claim's page of record)
- Site claim to sync afterward: the "ΔBIC ≥ +33 conservative" footnote and the residual sentence
