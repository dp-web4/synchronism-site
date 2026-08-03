# Topic: Is there a Lagrangian *differential*-in-ρ coupling that isn't degenerate?

## Question
The 2026-08-03 explorer session closed the algebraic branch of the galaxy sector constructively: the
field equation `∇·[C(ρ)∇Φ] = 4πGρ` is the momentum-conserving completion of the site's algebraic
C(ρ)·g law, it preserves EFE = 0 exactly *because it is linear in Φ*, and that same linearity is why
C(vacuum) = 0 makes the exterior field diverge. Every pointwise-algebraic function of local ρ inherits
this. The one remaining constructive direction is a coupling that is **differential** in ρ — keyed on
∇ρ, ∇lnρ, ∇²ρ — rather than on ρ itself.

## Context
Two independent threads converge here:
- **2026-07-27** re-scoped the locality no-go after finding a published counterexample: Burrage,
  Copeland & Millington (2017), a screened scalar with a *differential* coupling that reproduces
  MOND-like phenomenology. The real axis was never local-vs-non-local; it was algebraic-vs-differential.
- **2026-07-28** partially explored the differential forms by hand: `‖∇ρ‖ = ρ/R_d` has the same
  declining radial trend as ρ (no help), and `‖∇lnρ‖ = 1/R_d` is *constant in r* — which fits a flat
  curve trivially but is degenerate with simply passing in V_flat, so it is not a mechanism.

Neither pass asked the Lagrangian question. That is now the gap.

## Why It Matters
This is the galaxy sector's **only un-eliminated constructive direction**. Everything else is closed:
algebraic-pointwise is closed by the vacuum divergence + the exponential-vs-linear boost mismatch
(2026-08-03), the scatter axis is closed by the RAR no-go (2026-08-02), the mean relation reduces to
MOND when run with g_bar (2026-08-02 identity). If differential coupling is also degenerate or
non-Lagrangian, the sector has no surviving formulation and that should be said plainly rather than
left implicit. If it *isn't*, it is the first live lead in the sector since May.

## Suggested Starting Points
- Write the general action `S = ∫[−(1/8πG) F(ρ, ∇ρ) |∇Φ|² − ρΦ]` and ask which F give (a) momentum
  conservation, (b) a boost growing ~linearly in r for an exponential disk, (c) a finite vacuum limit.
  Note that (c) is the constraint that killed the algebraic branch — check it *first*, it is cheap.
- Check whether any such F is distinguishable from passing in a per-galaxy constant (the 07-28
  degeneracy). A form that only reproduces flat curves by smuggling in V_flat is not a mechanism, and
  the site has been burned by exactly this shape before (`project_ncorr_ladder_never_anchored`).
- Read Burrage, Copeland & Millington 2017 properly rather than at the abstract level — the 07-27
  screening walk found it but did not extract its coupling structure. Does its EFE vanish? Screened
  scalars are environmentally sensitive by construction, so probably not — which would mean the
  differential branch *buys* momentum conservation at the cost of EFE = 0, closing the last
  discriminator from the other side. Worth confirming either way.
- Prior-art gate is the binding constraint, not the algebra. Three clean searches in this program have
  later been contradicted. Budget the literature check ahead of the derivation.
