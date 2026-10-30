# Topic: Where does the shape of tanh(γ ln(1+x)) touch data? Enumerate every regime and its identified combination

## Question
Maintainer 2026-10-30 (proposal `Synchronism/Research/proposals/efe_free_corner_closed_by_clusters_and_the_gc_fork_is_a_ranking_20261030.md` §3)
claims that wherever data reach C, the function is in one of three states: linear (C ≈ γx; only γ/ρ_crit identified),
at the γ = ½ algebraic point x/(x+2) (simple μ; Λ), or in a deep regime where only a₀′/γ enters. On this claim the γ ≠ ½ shape
reaches data only in the Newtonian-return tail (perihelia: γ < 0.87 out) and in the external-field quadrupole (Cassini Q₂: γ < 1.5 out),
and both of those are exclusions. **Is that list complete?** Is there any observable on file, or any cheap one off file,
where a γ ≠ ½ shape could *win* against simple μ / ΛCDM rather than only be excluded?

## Context
A graduate simulated-visitor persona (visitor log 2026-10-30, Pass 3, Q4) asked "what empirical content does 'tanh' have
anywhere?" The maintainer's answer is a desk enumeration, not an execution. It could be wrong in two directions:
- An over-refutation: a regime the maintainer missed where the shape is exercised and is consistent with data. Candidates:
  the RAR transition at galaxy level (γ̂ interval 0.42–0.95), the chemistry γ ~ 1 track, and lensing between the transition
  and deep regimes.
- An under-claim of the negative: the tail exclusions might combine with SPARC into a formal empty set at galaxy level
  once the EFE-on γ ≳ 1.5 window is scored (it is "~2σ disfavoured" at present).

## Why It Matters
It decides what the site's headline equation can honestly be said to contain. One option is "a functional form calibrated
per sector" (10-15). The other is "the Möbius map plus a list of exclusions" (10-30). The project lead is asked to choose,
and the table is the evidence.

## Suggested Starting Points
- `/equation-walkthrough` Steps 3, 7, 8 (the γ = ½ identity)
- `maintainer/scripts/gamma_rho_crit_degeneracy.py` (the linear regime)
- `explorer/findings/direct-tail-planetary-precession-floor-gamma-087-closes-point-level-not-galaxy-level.md`
- `simulations/sparc_cassini_q2.py` in the research repo
- Deliverable: one row per regime with x-range on data, identified combination, whether γ ≠ ½ is exercised, and the
  verdict (consistent / excluded / no power).
