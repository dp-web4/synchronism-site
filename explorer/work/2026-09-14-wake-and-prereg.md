# Explorer 2026-09-14 — WAKE + pre-registration (written before any computation or literature fetch)

## WAKE

1. **Inherited assumptions.** (a) The maintainer's import "Koivisto+2005 excludes Cardassian except near ΛCDM" is
   *harmless* for us because γ = 0.487 ± 0.02 is "near ΛCDM". (b) The 08-18 locality-fork result — "no channel of
   order ε⁰", "no instability", "power, not data, is the blocker" for TEST-26 — is the standing description of the DE
   sector's perturbations. (c) The DE sector is Bucket-3 dead weight: ties ΛCDM, nothing left to find.
2. **If the frame is wrong.** "Near ΛCDM" is an amplitude word. Fluid-Cardassian and generalized-Chaplygin-gas
   exclusions are *not* amplitude-suppressed: a pressure-gradient (Jeans) term carries a factor (k/aH)² ~ 10⁴–10⁶
   on the scales P(k) is measured. The 08-18 growth ODE (`findings/scripts/de_locality_fork_perturbations.py`,
   `growth()`) is quasi-static with the Poisson source only — **it has no k² c_s² term.** If Horn L is a fluid, the
   "no ε⁰ channel" conclusion was computed with the dominant channel deleted. Then the "small neighbourhood of ΛCDM"
   might be |ε| ~ 10⁻⁵, not ±0.04 — and the DE sector's one free parameter would be pinned, not merely unpowered.
3. **Highest-information experiment.** Execute the import: add the Jeans term and the (1−3c_s²) friction to the
   Horn L growth equation (the only change), integrate per k, and read off where |ε| is allowed. Cheap, decisive
   either way: if the term is negligible, 08-18 stands and the Koivisto import is a non-constraint (an
   over-refutation to retract); if it dominates, 08-18's TEST-26 language is wrong in the opposite direction.
4. **What would falsify the current posture.** A channel that is O(ε·(k/aH)²) and not O(ε) would falsify
   "power, not data, is the blocker" — current P(k) data would already be decisive.

**Decision:** the queue contains it (`prior-art-pass-on-every-defining-equation.md`, ask 2), but the reason it
matters is new: the import is not "consistent with 08-18", it may *contradict* 08-18. Do that first; the prior-art
table (ask 1) second, as far as time allows.

## Pre-registration (fixed before computing or reading Koivisto / Sandvik / Amarzguioui)

**Model (Horn L as a unified barotropic fluid).** ρ_tot = ρ_m + f(ρ_m), f = ρ_m(1−C)/C, ρ_m number-conserved,
p = ρ_m f' − f, DE comoving with matter. Sub-horizon linear, Newtonian gauge, ln a time:

  δ_m'' + (2 + dlnH/dlna − 3c_s²) δ_m' = [ (3/2) C (1+f') − c_s² (k/aH)² ] δ_m ,   c_s² = ρ_m f''/(1+f')

Setting c_s² → 0 in both places recovers 08-18's "HornL(rho)" exactly (checked in-script as a positive control).
Integrate z = 200 → 0, δ ∝ a initially, same initial amplitude as γ = ½. Calibration C(z=0) = Ω_m = 0.315.

**Observable & rule.** R(k) = [δ_m(k, z=0; γ) / δ_m(k, z=0; ½)]².
- **Excluded** at a given γ if |R − 1| > 10 % at any k ≤ 0.1 h/Mpc (linear P(k) shape + σ₈ from CMB lensing are
  known far better than 10 %; the threshold is deliberately generous).
- **Allowed** if |R − 1| < 1 % for all k ≤ 0.2 h/Mpc.
- Between: "tension", reported as such.
Report |ε|_10% and |ε|_1% on both signs of ε; compare to the DESI-fit σ_ε = 2σ_γ ≈ 0.04 and to ε_SPARC = −0.022.
Positive control: γ = ½ must give R ≡ 1 at every k (c_s² ≡ 0 there — check numerically, not assumed).
Secondary (ISW, the literal import): ratio of dψ/dlna at k = 0.01 h/Mpc, z ∈ [0, 1], vs γ = ½.

**Scope, fixed now.** This executes only the *fluid* completion. If Horn L is instead read as modified gravity
with no pressure force on matter, the result does not apply — and that reading must then say where the momentum
that ∇p_DE would carry goes (08-11: both minimal covariant completions already excluded). Horn N (background-only)
is untouched by construction. **A result here refutes a completion, not a registered prediction: count stays 6.**
