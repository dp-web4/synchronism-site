# PREREG — the compander's direct tail against planetary supplementary perihelion precessions (explorer 2026-10-15)

Written before any ephemeris number was fetched. Topics: `direct-tail-at-saturn-the-efe-free-solar-system-bound.md`,
`planetary-ephemerides-vs-compander-tail-and-floored-rho-knee-crossings.md` (part 1 only).

## Object
Algebraic μ-convention compander (the instrument's `mu_tanh_log`): g_N = μ(g/a₀)·g, μ = tanh(γ ln(1+x)), x = g/a₀.
Point-mass Sun, EFE = 0 (this is the EFE-free channel; spherical symmetry makes AQUAL agree with the algebraic form).
δg(r) = g(r) − g_N(r), radial, attractive. a₀(γ) is the SPARC-profiled value from
`Synchronism/Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json` (same file TEST-25 used). Also run at
fixed a₀ = 5.33×10⁻¹¹ (the γ = 0.489 optimum) as a sensitivity.

## Statistic
Secular supplementary perihelion precession Δϖ̇ from the Gauss equation (R radial, S = W = 0), averaged numerically over
the mean anomaly with the planet's real a, e. Compared with published supplementary precessions (Iorio's method: the
perturbation is not in the dynamical model; this is the standard approximate test and is flagged as such).

## Bound (named before fetching)
- Primary: Pitjeva & Pitjev 2013, MNRAS 432, 3431 (EPM2011), supplementary perihelion precessions per planet.
- Sensitivity: Fienga et al. 2011 (INPOP10a), same quantity. If either table is unavailable verbatim, use the other and say so.
- Record whether the quoted σ is formal or realistic (e.g. ×3 / ×10). Use as given.

## Decision rule
A planet excludes γ if |Δϖ̇_pred − Δϖ̇_obs| > 3σ_obs. γ floor = smallest grid γ (step 0.01) passed by every planet in the table.
Also report the 2σ floor.

## Predictions
| ID | Prediction |
|----|-----------|
| P1 | Controls: the integrator reproduces GR's Mercury 42.98″/cy to 0.5 % (1PN as a radial 1/r⁴-type term is NOT exact; use the standard analytic 3GM/(c²a(1−e²)) per orbit with the Gauss integrand for A·(GM/c²)·… — if no clean radial analog, use constant-A analytic √(1−e²)A/(na) and a power-law analytic (Adkins & McDonnell 2007) instead). |
| P2 | At γ = 0.489 (profiled a₀), |Δϖ̇_pred(Saturn)| ≥ 50 mas/yr, i.e. ≥ 100σ. Sign: retrograde (attractive extra pull). |
| P3 | The 3σ direct-tail floor γ_min lies in [0.60, 0.80] (persona estimate 0.75–0.85; my hand estimate ≈ 0.65). |
| P4 | The whole point-level SPARC interval γ ∈ [0.425, 0.600] is excluded by the direct tail alone, at every γ in it. |
| P5 | Saturn sets the floor (outer planets' larger lever loses to their weaker bounds). |
| P6 | Galaxy-level survivors γ ≈ 1.5–1.7 pass the direct tail with ≥ 10× margin. |
| P7 | SPARC ΔBIC_profile at γ_min ≥ +30 (point level), so direct-tail-alone already empties the point-level intersection without Q₂. |

Identity note for the finding's first paragraph: at γ = ½ the compander is simple μ with a₀_simple = 2a₀; any kill here is
inherited from MOND's simple-μ branch.
