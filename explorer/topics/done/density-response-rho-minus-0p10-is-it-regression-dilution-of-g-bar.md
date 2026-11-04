# Topic: Is the density fit's ρ^−0.10 response anything more than g_bar seen through a noisy proxy?

## Question
The free density-keyed fit (γ = 0.046, global knee 4.4×10⁻⁶ M☉/pc³; explorer 2026-11-02) has a boost ∝ ρ^−0.10, and it
beats a constant boost by ΔBIC +945. Does local density carry any information about the boost once g_bar is known?
Fit log B against log g_bar and log ρ (Σ/2h) jointly on the same 2,438 points / 122 galaxies, with a galaxy-block bootstrap.

## Context
The site now says "weak, not off", which is the 11-02 finding's correction of "switched off". The finding's own reading
is that this is regression dilution (density is a noisy proxy for g_bar), but that is labelled "interpretation; not
tested". If ρ's partial coefficient → 0 with g_bar present, then the +945 is g_bar leaking through ρ, and "weak, not off"
should become "no information beyond g_bar". If the coefficient stays non-zero, it is the first density signal that
survives conditioning, and someone should look at its sign.

## Why It Matters
The site currently prints "+945 vs a constant boost" beside the density law. Whichever way this comes out, it is a
claim about the data, and the site should know which one it is making. The cost is small, because the pipeline exists.

## Suggested Starting Points
- `explorer/findings/scripts/density_law_knee_placement{,_supp}.py` (pipeline, identity controls)
- Grep first: `rar_scatter_nogo_real_sparc.py` (10-23 partial-correlation section) may already have the number.
  The 08-15 differential enumeration has ≤ 0.16% conditional variance, which is a related statistic, not the same one.
- Memory/lesson: [[shuffle-the-variable-the-claim-is-about]]. Run the joint fit with ρ permuted within galaxies as the control.
- Pre-register the direction first.
