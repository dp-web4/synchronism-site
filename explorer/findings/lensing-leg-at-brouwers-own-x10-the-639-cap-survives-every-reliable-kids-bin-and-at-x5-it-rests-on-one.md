# Finding: at Brouwer's own ×10 allowance the 6.39 cap survives every reliable KiDS bin; at the site's ×5 its exclusion rests on one bin at the edge of the reliable range

**Date**: 2026-11-10 · **Track**: explorer · **Origin**: `topics/lensing-leg-deflection-rule-and-brouwer-hot-gas-at-x10.md` (maintainer 2026-11-10, from a researcher persona). Question 2 of the topic answered on the bins; question 1 (the deflection rule) answered as a statement of what would have to be added, not a derivation.
**Script**: `scripts/lensing_cap_639_f_needed_per_bin.py` (+ `_output.txt`). Arithmetic on the eight KiDS-1000 isolated bins already transcribed from the public tar on 2026-10-04 (`the-lensing-kill-of-the-no-cdm-cap-lives-in-bins-the-data-paper-flags-the-dwarf-leg-carries-it.md`). No new data read. Not pre-registered: three divisions per bin.

## Summary
The ledger sentence `LENSING_LEG_ASSUMPTION` says that at ×10 the most permissive cap (6.39) "passes at 10⁻¹⁴ and fails only at 10⁻¹⁵". That was computed on the represented MOND curve (`maintainer/scripts/lensing_ceiling_every_convention.py`, 2026-09-25). On the published bins the picture is sharper and less favourable to the leg:

| g_bar (m/s²) | B_obs ± 1σ | f the 6.389 cap needs | z at ×5 | z at ×10 | B21 §5.1 |
|---|---|---|---|---|---|
| 1.4e-15 | 307 ± 39 | 48 | +7.1 | +6.2 | flagged |
| 7.6e-15 | 193 ± 15 | 30 | +10.7 | +8.6 | flagged |
| 4.2e-14 | 84 ± 6 | 13 | +8.7 | +3.4 | flagged |
| **1.3e-13** | **46 ± 3.4** | **7.2 (6.1 at −2σ)** | **+4.1** | **−5.3** | reliable (edge) |
| 2.3e-13 | 29.7 ± 2.5 | 4.6 | −0.9 | −13.7 | reliable |
| 4.0e-13 | 23.7 ± 1.9 | 3.7 | −4.3 | −21 | reliable |
| 1.3e-12 | 11.5 ± 1.1 | 1.8 | −19 | −48 | reliable |
| 3.9e-12 | 4.9 ± 0.6 | 0.8 | −45 | −98 | reliable |

- **At ×10 (Brouwer et al.'s own footnote-3 allowance for hot gas, dust and missing baryons at the outer edge), no bin in the range the paper calls reliable excludes the 6.39 cap.** The exclusions that remain (+3.4σ to +8.6σ) are all in the three bins below 10⁻¹³ m/s² that B21 §5.1 flags as satellite-contaminated, where the two-halo upturn takes B_obs to ~300.
- **At ×5 (the site's allowance), the reliable-range exclusion is one bin**: 1.3×10⁻¹³, +4.1σ, which sits at the boundary of the paper's reliability cut. The next bin up (2.3×10⁻¹³) already passes (−0.9σ).
- So the lensing leg's cap kill is a statement about the hidden-baryon factor at r ≈ 0.3 Mpc for a 10¹¹ M☉ lens: the cap dies if f < 6.1 there (−2σ on the one bin), and lives if f ≥ 7.2. Brouwer's ×10 is for "the outer edge" (~Mpc); whether it applies at 0.3 Mpc is a census question the paper does not answer. The 10-04 finding's conclusion for the 20.3 cap (f ≈ 1.9 in the reliable range) carries over to 6.39 with f ≈ 6–7.

## On question 1 (the deflection rule), briefly
For the leg to be unconditional the framework would have to state one of: (a) a metric in which test particles and photons both move on geodesics of a potential whose gradient is the boosted g_obs (what AeST, TeVeS and the relativistic QUMOND completions do by construction: the lensing potential Φ+Ψ is tied to the dynamical Φ by the conformal/disformal coupling choice), or (b) an explicit refractive rule for light in the C field. The archive's only attempt at (b) was the Phase-3c inflow light-bending, refuted radiatively. The algebraic corner and the compander have neither; the floored family has a field equation (Refracted-Gravity form) but no coupling to light. Without (a) or (b) the leg is, as the ledger now says, "a statement about completions that have one". Nothing today changes that; it only narrows where the data bite under each allowance.

## Implications for the site
- `LENSING_LEG_ASSUMPTION`: replace "at ×10 … passes at 10⁻¹⁴ and fails only at 10⁻¹⁵" (curve-derived) with the bin statement: at ×10 the 6.39 cap passes every bin B21 call reliable and fails only in the flagged sub-10⁻¹³ bins; at ×5 the reliable-range exclusion is a single bin (1.3×10⁻¹³, 4.1σ) at the reliability edge.
- TEST-10 card / Roadmap: the lensing leg should not be described as excluding "every candidate ceiling, 6.39 included" without the f-condition: f < 6.1 at ~0.3 Mpc.
- The maintainer's 11-10 status ("at ×10 the 6.39 cap then passes at 1e-14") is right in direction; the bins make it pass at every reliable g_bar.

## Open threads
- B21 Table/Fig. for the hot-gas sensitivity case (gas-to-stellar fraction 1 within 100 h⁻¹ kpc) gives a radius-dependent f; reading that file from the tar (already on disk from 10-04: `isolated / hot-gas` files) would replace the flat f with the paper's own profile. One script, no new download.
- Whether B21's reliability boundary is "g_bar < 10⁻¹³" or "the three lowest bins" decides whether the 1.3×10⁻¹³ bin is in or out; read §5.1 verbatim before quoting the single-bin statement on the site.
