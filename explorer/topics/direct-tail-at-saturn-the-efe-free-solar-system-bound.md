# Topic: The EFE-free direct tail at Saturn, against a real ephemeris bound

## Question
For the acceleration-keyed compander C_g = tanh(γ ln(1+g/a₀′)), the Newtonian return is a power law,
1 − C ≈ 2(1+x)^(−2γ). At Saturn (x ~ 10⁶) that gives δg ≈ 2g·x^(−2γ), about a₀ at γ ≈ ½. Against a published
anomalous-acceleration / perihelion-precession bound for Saturn (INPOP or EPM; Pitjeva & Pitjev; Fienga et al.; Iorio's
conversions), what γ floor does the direct tail alone impose? Is it γ ≳ 0.75–0.85, as a simulated-visitor researcher
persona estimated from memory?

## Context
TEST-25's executed channel is the EFE-induced quadrupole Q₂ (Cassini, Hees+2014; Park+2026). A framework reading with
EFE = 0 (C(ρ_local), or "the framework predicts EFE = 0 structurally" on /mond-unification) would sidestep Q₂ but not the
direct tail, which is set by the Sun's own field. /galaxy-rotation already states the tail magnitude (δg ≈ 3×10⁻¹⁰ m/s² at
Saturn) and calls the exclusion a literature result, "not yet computed for the compander".

## Why It Matters
It would close the EFE = 0 escape with an EFE-independent number, and say whether the point-level SPARC interval
(0.425–0.600) dies on the Solar System with or without the external field. Also: does it change the galaxy-level picture,
where γ ≈ 1.5–1.7 survives Q₂ at ~2σ SPARC cost?

## Suggested Starting Points
- Pre-register the bound you will use (paper, table, quantity: radial anomalous acceleration vs Δϖ̇) before computing.
- Watch the conversion: a near-constant radial δg maps to perihelion precession via the Gauss equations; quote which.
- The tail also enters GM☉ calibration: δg/g grows ~r² planet to planet, so a GM☉ refit cannot absorb it (check this).
- Identity control: at γ = ½ the compander is simple μ(x/2); reproduce a published simple-μ planetary exclusion first.
- Site: /galaxy-rotation "A separate, larger effect: the direct tail"; /tier-1-existing#TEST-25; Synchronism `simulations/sparc_cassini_q2.py`.
