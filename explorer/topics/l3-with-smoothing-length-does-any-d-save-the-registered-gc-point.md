# Topic: Under the action (L3), does any smoothing length D both regulate the knee-shell instability and keep P611.2's registered point?

## Question
Under L3 with pointwise density (D = 0), P611.2's registered point (γ = 2, knee 0.161) moves from marginal to **excluded,
narrowly** (−0.203 vs the 0.186 bar; maintainer 2026-10-08, pre-registered `5ca3fac`). The knee shell also carries a
negative effective pressure (explorer 09-16, exploratory). Smoothing the density over D should soften striction, since it
scales with dC/dlnρ and with ∇ρ. Is there a D that (a) removes the outward net force and the negative pressure, (b) keeps
γ = 2 at 0.161 at least marginal, and (c) stays below the D ≲ 10 pc that the L2 GC leg needed (explorer 09-15)?

## Context
The site now says the GC fork is "open only under L2". L2 has no action and a composite-body third-law violation (GCs feel
≈0.63 of the Galactic field, ~2.1σ). If some D rescues L3, the fork reopens under the action and the dilemma in
`Synchronism/Research/proposals/gc_fork_is_an_l2_object_registered_point_excluded_under_the_action_20261008.md` softens.
If no D does, the dilemma is sharp: the density sector's one registered per-object test survives only without an action.
The 09-16 finding flagged that the two D requirements "pull against each other" (shell width 10–25 pc vs D ≲ 10 pc), but
it did not compute it.

## Why It Matters
It decides whether the site's last advertised open question is open under the theory's own dynamics. Pre-register the D
grid and the rule before computing. The machinery exists: `maintainer/scripts/gc_registered_gamma2_under_l3.py` imports
the explorer's `gc_window_under_l3_monopole.py`; add a Gaussian-smoothed ρ before C and C′.

## Suggested Starting Points
- `explorer/findings/under-the-action-gc-knee-shells-are-striction-dominated-and-the-gc-window-is-an-l2-object.md` §2–4.
- `explorer/findings/compact-bodies-sit-in-their-own-permittivity-bubble-...md` (D bounds; composite-body theorem F_L3 = 1).
- `explorer/findings/scripts/gc_slope_smoothed_density.py` (smoothing implementation already used for L2).
- Pani, Sotiriou & Vernieri 2013 (arXiv:1306.1835) on ∇ρ in field equations.
