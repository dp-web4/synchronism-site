# PREREG — L3 (action with striction) at the |∇Φ| keying, on SPARC and KiDS-1000 lensing (explorer 2026-10-13)

Written and committed before any L3 number is computed.

## Object
Action S = ∫ [ C(|∇Φ|) |∇Φ|² / 8πG + ρΦ ].  Varying Φ gives ∇·[μ_eff ∇Φ] = 4πGρ with
μ_eff(x) = C(x) + ½ x C′(x),  x = |∇Φ|/a′,  C(x) = f + (1−f) tanh(γ ln(1+x)).
(L2 at this keying is AQUAL with μ = C; L3 is AQUAL with μ = μ_eff. The "striction" at this keying is the
½xC′ term in the field equation, not a force on matter.) Algebraic (spherical) RAR: g_bar = μ_eff(g_obs/a′)·g_obs.

## Pipeline (unchanged from 10-12)
SPARC: scripts/wiring_keying_matrix_sparc.py loader (2807 pts, 166 gal, Υ 0.5/0.7), log residual SSR, a′ and γ free,
galaxy bootstrap B = 2000 seed 20261012. Lensing: Brouwer+2021 isolated (and hot-gas) bins, Eq. 7, full covariance,
frozen SPARC parameters and a joint refit (σ = 0.1437 dex SPARC).

## Predictions
- P1. L3 (f = 0) best SPARC RMS ≤ 0.1460 dex.
- P2. Best-fit γ_L3 ∈ [0.25, 0.45], i.e. below R's 0.489: "γ ≈ ½ = MOND's simple μ" is a property of the L2 reading.
- P3. Galaxy-bootstrap 95% interval of ΔBIC(L3 − R) contains 0.
- P4. Frozen-parameter lensing χ² (isolated, full cov) within ±60 of R's frozen value.
- P5. x·μ_eff(x) is strictly increasing for every γ ∈ [0.05, 1] (field equation elliptic); μ_eff > 1 somewhere iff γ > 1.
- P6. Large-x tail 1 − μ_eff ≈ 2(1−γ) x^(−2γ): at the fitted γ_L3 the tail exponent 2γ_L3 < 1, i.e. slower than the
  simple-μ 1/x tail (worse for Solar-System bounds than R).

## Kill / outcome reading
If P1 and P3 hold, L3 at the gradient keying is a non-discriminating AQUAL member (closes the block as "survives,
MOND class"). If P1 fails by > 0.005 dex, L3 at this keying is SPARC-disfavoured and the site's "γ ≈ ½ reduces to MOND"
holds only under L2.
