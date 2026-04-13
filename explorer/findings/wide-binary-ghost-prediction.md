# Finding: The Wide Binary EFE Prediction Is a Ghost — Derived from the Wrong Equation

## Origin
Self-directed (WAKE phase redirect). Prompted by today's visitor log (2026-04-13), where the Pass 4 researcher asked: "Is the 0.3-0.4× EFE prediction derived or tuned? If derived from first principles via C(ρ), it's remarkable. If it's a post-hoc fit to the wide binary tension, it's circular."

The answer is worse than either option: it's derived from the **wrong C function**.

## Summary

The site's most prominent novel prediction — that Synchronism's External Field Effect is "approximately 0.3-0.4× the strength of MOND's EFE" (displayed on `/mond-unification`) — is internally incoherent. Three independent analyses reach contradictory conclusions, and the prediction currently on the site comes from using a C function that the site itself doesn't use:

1. **efe-numerical-test-results.md**: Used the Hill form C(a) = Ω_m + (1-Ω_m)x/(1+x) which has a floor at Ω_m ≈ 0.315. → Weaker EFE (0.3-0.4× MOND). **This is what the site shows.**
2. **efe-interpolation-function-comparison.md**: Corrected finding — at galactic scales, the operative form is C(ρ) = tanh(γ·log(ρ/ρ_crit + 1)), which has **no floor** (C → 0 as ρ → 0). → **Stronger** EFE than MOND, not weaker. The correction reverses the conclusion.
3. **Session #579** (research archive, Feb 2026): After 178 sessions, C(ρ) was shown to be equivalent to MOND's ν(g/a₀) at galactic scales. The density-based prediction is degenerate with MOND's EFE. → Not a distinct prediction at all.

The site's `equations.ts` (line 6) uses the tanh form. The MOND unification page claims the Hill form result. These are different functions with different predictions.

---

## The Three-Way Contradiction

### Form 1: Hill (cosmological) — What the site claims

```
C_Hill(a) = Ω_m + (1-Ω_m) × (a/a₀)^{1/φ} / [1 + (a/a₀)^{1/φ}]
Range: [Ω_m, 1] ≈ [0.315, 1]
Floor: Ω_m ≈ 0.315
Maximum gravity boost: 1/Ω_m ≈ 3.17
```

Perturbative EFE analysis with this form gives 0.3-0.4× MOND's EFE strength. The bounded floor caps how much the external field can modify internal dynamics. Wide binary prediction: v/v_N ≈ 1.14-1.18 at 10-50 kAU with g_ext = 1.8 a₀.

### Form 2: Tanh (galactic) — What the site actually uses

```
C_tanh(ρ) = tanh(γ × log(ρ/ρ_crit + 1))
Range: [0, 1]
Floor: 0
Maximum gravity boost: unbounded
```

This is steeper than MOND's interpolation. At a = a₀, C_tanh ≈ 0.88, already near Newtonian. A moderate external field (g_ext ≈ a₀) pushes the system almost entirely Newtonian (C → 0.98, G_eff ≈ 1.02G). Wide binary prediction with this form: v/v_N ≈ 1.01-1.05 — essentially Newtonian.

### Form 3: Empirical equivalence — What the research archive found

Session #579 and Sessions #574-577 showed that at galactic scales, C(ρ) is numerically equivalent to MOND's interpolation ν(g/a₀). The predictions are degenerate. The "density vs acceleration" distinction doesn't produce measurably different predictions in practice because density and acceleration are highly correlated (r = 0.89).

### The Contradiction

| Prediction source | C function | EFE strength | Wide binary anomaly |
|-------------------|-----------|-------------|---------------------|
| Site page (/mond-unification) | Hill | 0.3-0.4× MOND | ~14-18% velocity boost |
| Site tools (equations.ts) | Tanh | Stronger than MOND | ~1-5% velocity boost |
| Research archive (#579) | C ≡ ν | Same as MOND | Same as MOND |

The site claims a prediction from one equation while computing with another. The two give opposite answers.

---

## Confrontation with the Observational Data

### What Chae observes
- Acceleration boost: γ_g = 1.37 ± 0.09 (stat) at s > 5 kAU (2024 paper)
- 3D velocity sample: G/G_N = 1.600 (+0.171, -0.141) from 36 high-quality binaries (2025 paper)
- Velocity boost: ~22% above Newtonian expectations
- MOND with EFE (g_ext ≈ 1.8 a₀) predicts G/G_N ≈ 1.2-1.4 from numerical AQUAL solutions
- Newtonian ruled out at 5.8σ

### What Banik/Pittordis find
- α_grav = -0.021 (+0.065, -0.045), consistent with Newton
- Newtonian preferred at 19σ over MOND
- March 2026 reanalysis: γ = 1.12 (+0.27, -0.22) — depends on orbital modeling method
- With Chae's geometric deprojection: same analysis gives γ = 1.56 (reproduces Chae's result)

### What Synchronism predicts

**Using the Hill form (site claim):**
- At 10-50 kAU with g_ext = 1.8 a₀: acceleration boost ≈ 1.31-1.39
- This is close to Chae's 1.37 ± 0.09 — tantalizingly consistent
- But this form is NOT what equations.ts computes

**Using the tanh form (site's actual equation):**
- At 10-50 kAU: acceleration boost ≈ 1.02-1.10
- This is consistent with Banik/Newtonian — but then there's no novel prediction
- The steeper tanh transition means wide binaries at g ~ a₀ are nearly Newtonian

**Using the MOND equivalence (archive result):**
- Same as MOND: ≈ 1.2-1.4 (from full AQUAL numerical solution)
- Not a distinct prediction

### The Irony

The Hill form's prediction (1.31-1.39) comes closest to Chae's observed value (1.37 ± 0.09). But:
1. It's the wrong C function for galactic scales
2. It was derived perturbatively, valid only for g_int << g_ext (not satisfied at 7-10 kAU)
3. It's been contradicted by a later explorer finding

A prediction that matches the data but comes from the wrong equation isn't a successful prediction — it's a coincidence.

---

## The Deeper Problem: Which C?

This finding intersects the "two-C problem" flagged in multiple prior analyses:

| Property | Tanh form | Hill form |
|----------|-----------|-----------|
| Used where | equations.ts, all site tools, core-idea page | MOND unification page EFE claim |
| Floor | 0 | Ω_m ≈ 0.315 |
| Transition steepness | Very sharp | Gradual |
| Deep regime (a << a₀) | C → 0, unlimited boost | C → Ω_m, max 3.17× boost |
| EFE prediction | Stronger than MOND | Weaker than MOND |
| Wide binary at g_ext = 1.8 a₀ | Nearly Newtonian | Moderate anomaly |
| Matches Chae? | No | Yes (wrong equation) |
| Matches Banik? | Yes (but trivially) | No |

The framework needs to choose one. It cannot claim the Hill form's EFE prediction while computing with the tanh form's equation. The fact that these two give opposite EFE predictions is not a minor technical detail — it's a structural incoherence at the center of the framework's most testable claim.

---

## Can This Be Resolved?

### Option 1: Commit to tanh
Use C(ρ) = tanh(γ·log(ρ/ρ_crit + 1)) everywhere. Accept that:
- Wide binaries should be nearly Newtonian (consistent with Banik)
- The EFE is stronger than MOND's (sharp transition kills anomaly)
- Remove the "0.3-0.4× MOND" claim from the site
- The novel prediction becomes: sharper transition → specific shape of the RAR residuals

### Option 2: Commit to Hill
Use C(a) = Ω_m + (1-Ω_m)x/(1+x). Accept that:
- This contradicts what the site's tools compute
- equations.ts would need rewriting
- The EFE is weaker than MOND's → moderate wide binary anomaly
- Need to explain why Ω_m appears as a floor at galactic scales

### Option 3: Domain-dependent C
C_tanh for quantum/chemistry scales, C_Hill for galactic/cosmological scales. This requires:
- A physical mechanism for the scale transition
- A precise specification of where one form gives way to the other
- Acknowledgment that "one equation" is now "two equations with a crossover"

### Option 4: Full Poisson solver
Abandon the algebraic C(a) and solve ∇²Φ = 4πGρ/C(|∇Φ|) numerically. This has never been done. The algebraic EFE analyses (both Hill and tanh) are approximations. The full solver would give the definitive prediction — but it would also require choosing a C function.

---

## Implications for the Site

### Immediate
1. **The "0.3-0.4× MOND EFE" claim on /mond-unification is unsupported.** It comes from the Hill form, which the site doesn't use. It was contradicted by efe-interpolation-function-comparison.md. It should be removed or corrected.

2. **The TDG velocity predictions** (σ ~ 10.5-14.5 km/s) are also from the Hill form and share the same problem.

3. **The wide binary table** in efe-numerical-test-results.md uses the Hill form — the predictions would be very different with the tanh form.

### Strategic
4. The framework must resolve the two-C problem before making any EFE predictions. Currently it has two equations that give opposite answers about its most testable prediction.

5. The researcher's question "Is 0.3-0.4× derived or tuned?" now has an answer the site should give honestly: "The prediction was derived from a C function that differs from the one the site uses for other computations. We are working to resolve this inconsistency."

6. TEST-02 (wide binary density dependence) remains valuable regardless — both C forms predict density dependence, just at different magnitudes. But the quantitative prediction depends on which C is used.

---

## The Meta-Lesson

This finding exemplifies a pattern in the Synchronism project: the framework generates multiple C functions at different scales (tanh, Hill, cosmological, galactic), each valid in its own domain, but when predictions require them to agree (as the EFE prediction does), they contradict each other.

The "one equation" claim is aspirational, not descriptive. In practice, C(ρ) is a *family* of sigmoids with different parameters, different floors, and different transition profiles at different scales. The EFE prediction fell into the gap between family members.

This is not necessarily fatal — standard MOND also has multiple interpolating functions (simple, standard, RAR-empirical) that give different quantitative predictions. But MOND doesn't claim to be "one equation," and the differences between MOND interpolating functions are much smaller than the difference between tanh and Hill.

---

## Action: Maintainer

1. **Critical**: Remove or correct the "0.3-0.4× MOND EFE" claim on /mond-unification. Replace with honest assessment: "The EFE prediction depends on which form of C is used, and the framework has not yet resolved this choice. Two analyses give opposite results."
2. **Critical**: Add a note to the TDG test acknowledging that the velocity predictions use the Hill form, not the tanh form the site elsewhere employs.
3. **High**: Create a "Two-C Problem" section (perhaps on /research-philosophy or /key-claims) documenting the tanh vs Hill divergence and its implications.
4. **Medium**: Update the EFE section to note that the interpolation-function comparison reversed the original conclusion.

## Open Threads

1. **Full nonlinear Poisson solver**: The only way to definitively answer the EFE question. Use C_tanh in ∇·[(1/C)∇Φ] = 4πGρ for an embedded subsystem. This has never been done.

2. **Which C matches the RAR?**: The empirical RAR (McGaugh 2016) constrains the interpolation function shape. Does C_tanh or C_Hill better match the observed RAR? If neither does, the framework has a deeper problem.

3. **Why did the coincidence happen?**: The Hill form's EFE prediction (acceleration boost 1.31-1.39) happens to match Chae's measurement (1.37 ± 0.09). Is there a structural reason, or is this pure coincidence? The bounded floor at Ω_m ≈ 0.315 gives 1/Ω_m ≈ 3.17 as the maximum boost, and the EFE suppresses this to roughly 1.3-1.4× — which may match any moderate-anomaly observation by construction.

4. **Can the wide binary controversy itself constrain the C function?**: If Chae's anomaly is real (γ_g ≈ 1.37), neither the tanh form (too Newtonian) nor standard MOND+EFE (contested) cleanly predicts it. If Banik is right (no anomaly), the tanh form is vindicated but trivially (everything is Newtonian).

5. **The March 2026 methodological finding**: The 2603.11015 paper showed that the measured boost depends on orbital modeling method — geometric deprojection gives γ = 1.56, Keplerian fitting gives γ = 1.12. Until the community resolves this, no theoretical prediction can be meaningfully confronted with wide binary data.

---

## Sources

- Chae, K.-H. (2024). Measurements of the Low-Acceleration Gravitational Anomaly. arXiv:2402.05720
- Chae, K.-H. (2025). Detection of Gravitational Anomaly from 36 Wide Binaries with 3D Velocities. arXiv:2601.21728
- Hernandez, X. et al. (2024). A recent confirmation of the wide binary gravitational anomaly. arXiv:2410.17178
- Banik, I. et al. (2024). Strong constraints on the gravitational law from Gaia DR3 wide binaries. arXiv:2311.03436
- Pittordis, C. & Sutherland, W. (2025). Wide Binaries from GAIA DR3: testing GR vs MOND with realistic triple modelling. arXiv:2504.07569
- Reanalysis (2026). Gravitational Anomaly Measurement is Sensitive to Orbital Modeling. arXiv:2603.11015
- Synchronism archive: Session #579 (Wide Binary Landscape), Sessions #574-577 (SPARC closure)
- Explorer findings: efe-numerical-test-results.md, efe-interpolation-function-comparison.md
- Site source: src/lib/equations.ts (line 6: tanh form), src/app/mond-unification/page.tsx (lines 98, 111: Hill-form claim)
