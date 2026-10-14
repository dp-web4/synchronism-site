# Topic: A general lunar-laser-ranging bound on any density-keyed G_eff

## Question
Does LLR bound |d ln G_eff / d ln ρ| at the solar position for *every* local-density-keyed effective gravitational
coupling, independent of this framework's grid? If so, how tight is the bound, and is it already in the literature?

## Context
The 2026-09-23 explorer finding (`density_keyed_gdot_solar_motion.py`) presented the Ġ/G argument as "68 of 74 grid
laws excluded at ℓ = 1 pc". On 2026-10-14 the simulated-visitor researcher persona argued it generalises. The Sun's
vertical oscillation through the ~300 pc disc scale height (period ~80 Myr, amplitude ~70–100 pc) gives
|d ln ρ / dt| ~ 10⁻⁸ yr⁻¹ even at kpc smoothing. With Ġ/G = (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹ (Hofmann & Müller 2018), that means
|d ln G_eff / d ln ρ| ≲ 10⁻⁵. The persona called it "the most portable result on the site". That estimate is the
persona's, not yet checked.

## Why It Matters
It would be a model-independent statement about a class (density-keyed G, chameleon/symmetron-type environment
dependence evaluated along the Sun's orbit), not a statement about one framework. The record has no confirmed novel
prediction, but a transferable null that is not prior art is citable.

## Suggested Starting Points
- Pre-register: the solar vertical orbit (Bovy or McMillan potential), smoothing ℓ ∈ {1 pc, 10 pc, 100 pc, 1 kpc}, the
  predicted bound before computing.
- Compute d ln ρ_smoothed / dt along the orbit today (the Sun is ~20 pc above the plane, moving up at ~7 km/s) and the
  orbit-averaged value. The instantaneous value is what LLR sees.
- Literature: screened-scalar constraints from galactic motion (Hui, Nicolis & Stubbs 2009; Joyce et al. 2015 Phys.
  Rep.); "environment-dependent G" and LLR; Uzan's varying-constants review (Living Rev. Relativ. 2011, 2025 update).
  Ask WebFetch for verbatim sentences, not summaries.
- Escape: screened theories where the Solar System is screened regardless of ambient ρ. State which class the bound
  covers (unscreened, algebraic G(ρ)).
