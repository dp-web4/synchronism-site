# Finding: The Synchronism Interpolation Function Is Empirically Distinct from MOND — and the Prior EFE Analysis Was Wrong

## Origin
Self-directed, following Open Thread #1 from `theoretical-status-synthesis.md`: "Numerical EFE test." Corrects Thread 3 of that finding ("The External Field Effect — An Unexamined Consequence").

## Summary
The theoretical-status-synthesis (2026-02-28) concluded that bounded C predicts a **weaker** EFE than MOND because C ≥ Ω_m ≈ 0.315 caps G_eff ≤ 3.17G. This conclusion is **wrong** — it incorrectly applied the cosmological C(a) form (which has an Ω_m floor) to galactic scales, where the operative form C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) has **no floor** (C → 0 as ρ → 0). The correct analysis reveals that Synchronism's interpolation function tanh(2·log(x+1)) is **much steeper** than all standard MOND interpolation functions, predicting a **sharper transition** from modified to Newtonian gravity. This means the EFE is actually **stronger** under Synchronism, not weaker — and the shape difference is empirically testable against the Radial Acceleration Relation.

---

## The Error in the Prior Analysis

### What the synthesis said
> "Synchronism: C is bounded below by Ω_m ≈ 0.315, so G_eff is bounded above by ~3.17. The EFE has a ceiling."

### Why this is wrong

Two different C functions exist in the framework:

1. **Cosmological**: C(a) = Ω_m + (1 - Ω_m) × (a/a₀)^{1/φ} / [1 + (a/a₀)^{1/φ}] — from Session #218
   - Range: [Ω_m, 1]
   - Floor: Ω_m ≈ 0.315
   - Context: Cosmic scale factor, modified Friedmann equation

2. **Galactic/density**: C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) — from equations.ts, all site tools
   - Range: [0, 1]
   - Floor: 0
   - Context: Local density/acceleration, galaxy rotation curves

The cosmological form models the fraction of gravity attributable to baryons vs. "dark matter effects" across cosmic time. The galactic form models the transition from Newtonian to modified gravity across acceleration scales within galaxies.

At galactic scales, the relevant form is #2. There is **no Ω_m floor**. The prior analysis applied form #1 to galactic EFE — a category error.

---

## Numerical Comparison of Interpolation Functions

With x = a/a₀:

| x = a/a₀ | MOND simple | MOND standard | RAR (empirical) | Sync (γ=2) | G_eff/G (MOND) | G_eff/G (Sync) |
|-----------|------------|---------------|-----------------|------------|----------------|----------------|
| 0.001 | 0.0010 | 0.0010 | 0.031 | 0.0020 | 1000 | 500 |
| 0.01 | 0.010 | 0.010 | 0.095 | 0.020 | 101 | 50 |
| 0.05 | 0.048 | 0.050 | 0.200 | 0.097 | 21 | 10 |
| 0.1 | 0.091 | 0.100 | 0.271 | 0.188 | 11 | 5.3 |
| 0.2 | 0.167 | 0.196 | 0.361 | 0.349 | 6.0 | 2.9 |
| 0.5 | 0.333 | 0.447 | 0.507 | 0.670 | 3.0 | 1.5 |
| 1.0 | 0.500 | 0.707 | 0.632 | 0.882 | 2.0 | 1.13 |
| 2.0 | 0.667 | 0.894 | 0.757 | 0.976 | 1.5 | 1.03 |
| 5.0 | 0.833 | 0.981 | 0.893 | 0.999 | 1.2 | 1.00 |

### Key observations

**1. Steepness**: Synchronism transitions from 10% to 90% of Newtonian across approximately one decade in acceleration (x ≈ 0.1 to x ≈ 1). MOND simple takes more than two decades (x ≈ 0.1 to x ≈ 10). The empirical RAR is intermediate.

**2. At the transition (x = 1)**: Sync is already 88% Newtonian; MOND simple is 50% Newtonian; RAR is 63% Newtonian. Sync under-predicts the gravity enhancement in the transition region relative to observations.

**3. Deep MOND regime (x << 1)**:
- MOND simple: μ → x (linear) → G_eff → G·a₀/a
- Synchronism: C → 2x (linear, slope 2) → G_eff → G·a₀/(2a)
- RAR: μ → √x (sub-linear) → G_eff → G·√(a₀/a)

At very low accelerations, Sync gives HALF the gravity boost of MOND simple. But the RAR gives even less. The leading behavior is qualitatively different: MOND/Sync are linear in x while RAR is sub-linear (√x).

---

## Implications for the External Field Effect

### The EFE scenario

A dwarf satellite galaxy with:
- Internal acceleration: a_int ≈ 0.1 × a₀ (deep MOND internally)
- External field from host: a_ext ≈ a₀ (transition region)
- Total: a_total ≈ a_ext ≈ a₀ (external dominates)

### Predictions

| Framework | μ/C without EFE (a_int) | μ/C with EFE (a_total) | G_eff ratio change |
|-----------|------------------------|------------------------|-------------------|
| MOND simple | 0.091 (G_eff = 11G) | 0.500 (G_eff = 2G) | 5.5× reduction |
| Synchronism | 0.188 (G_eff = 5.3G) | 0.882 (G_eff = 1.13G) | 4.7× reduction |
| RAR | 0.271 (G_eff = 3.7G) | 0.632 (G_eff = 1.58G) | 2.3× reduction |

**Under Synchronism, a moderate external field (a_ext ≈ a₀) almost completely restores Newtonian dynamics.** The satellite would show only ~13% gravity enhancement over Newton. Under MOND, the satellite retains a 2× enhancement. Under RAR, ~58%.

This is a **strong, testable prediction**: dwarf satellite galaxies of the Milky Way (which have a_ext of order a₀) should be NEARLY NEWTONIAN under Synchronism.

### Observable consequences

1. **Milky Way dwarf satellites**: With a_ext ≈ (0.5-2) × a₀ from the Milky Way's field, Sync predicts nearly Newtonian internal dynamics. MOND predicts significant modification. Current observations (Fornax, Sculptor internal kinematics) are debated but generally favor significant modification.

2. **Wide binary stars**: At separations ~10 kAU, the internal acceleration drops below a₀. Sync predicts the transition to modified gravity is SHARPER — binaries at a ≈ a₀ should be nearly Newtonian, then rapidly transition. The Chae (2023-24) vs. Banik et al. (2024) debate about wide binaries is partly about the shape of the interpolation function in the transition region.

3. **Tidal Dwarf Galaxies**: These break the ρ-a_ext degeneracy (low density but high external field). Under Sync, they should be strongly Newtonian. Under MOND, they should show partial MOND effects.

---

## The Shape Problem

The steeper transition of Sync's C function raises a potential empirical problem. The Radial Acceleration Relation (McGaugh et al. 2016) is an empirical fact with tight scatter (~0.13 dex). The RAR interpolation μ_RAR = 1 - exp(-√(g_bar/a₀)) fits the data well. If Sync's C function doesn't match this shape, the framework has a problem at galactic scales.

**Caveat**: The Galaxy Plotter on the site doesn't use C(a/a₀) as a direct replacement for μ(a/a₀). It uses galaxy-specific ρ_crit derived from V_flat, and the mapping from density ρ to acceleration a depends on the galaxy's mass profile. So the direct comparison above (treating C and μ as functions of the same variable x = a/a₀) may not be the right analysis. The full comparison requires solving the modified Poisson equation with C(ρ) for each galaxy profile.

This is the **single most important open calculation in the framework**: does tanh(2·log(ρ/ρ_crit + 1)), when embedded in the full Poisson solver with galaxy-specific ρ_crit, reproduce the empirical RAR shape?

---

## Corrected EFE Assessment

| Claim | Prior synthesis (2026-02-28) | This finding |
|-------|----------------------------|--------------|
| C floor at galactic scales | Ω_m ≈ 0.315 | 0 (no floor) |
| G_eff ceiling | 3.17G | Unbounded |
| EFE strength | Weaker than MOND | **Stronger** than MOND |
| EFE character | Bounded, partial suppression | Sharp, near-complete suppression |
| Testable? | Yes (TDGs) | Yes, and more sharply (satellites, wide binaries, TDGs) |

The prior finding's Thread 3 conclusion that "Synchronism-with-EFE predicts a weaker EFE than standard MOND" is **reversed**: Synchronism predicts a **stronger, sharper** EFE. This is because the steeper interpolation function means even moderate external fields drive the system close to Newtonian.

---

## Action: Maintainer

1. **If an EFE page is created** (as suggested by the prior synthesis): the content should reflect the corrected analysis — Sync predicts stronger EFE, not weaker.

2. **The galaxy tools should clarify** which C form they use: the galactic form (no floor) or the cosmological form (Ω_m floor). Currently this distinction is implicit.

3. **Consider adding a RAR comparison plot**: overlay the Sync C function with the empirical RAR interpolation on the Galaxy Plotter or a new page. The shape difference is visually striking and scientifically honest.

## Open Threads

1. **RAR shape test**: Does the full Poisson solver with C(ρ) reproduce the empirical RAR, or does the steeper Sync interpolation produce a systematically different shape? This is calculable with existing SPARC data.

2. **Dwarf satellite kinematics**: Do Fornax, Sculptor, etc. favor the strong-EFE (Sync) or partial-EFE (MOND) prediction? Literature review needed.

3. **Wide binary transition shape**: The Chae vs. Banik debate is partly about interpolation function shape. Does Sync's sharper transition align with either group's data?

4. **The two-C problem**: Why does the cosmological derivation (Session #218) give C with an Ω_m floor while the density derivation gives C without one? Are these supposed to compose (C_total = C_cosmo × C_galactic)? Or are they alternative expressions for different regimes? The framework needs to clarify this.

5. **Scale-dependent γ**: If γ differs between quantum (γ = 2) and galactic scales, the transition steepness changes. At what γ does the Sync interpolation match the empirical RAR shape? If γ_RAR ≈ 0.8 (much less than 2), does this have a physical interpretation via N_corr?

---

## Sources

- McGaugh, S. et al. (2016). Radial Acceleration Relation in Rotationally Supported Galaxies. *Physical Review Letters* 117, 201101.
- Chae, K.-H. (2023, 2024). Breakdown of the Newton-Einstein Standard Gravity at Low Acceleration in Binary Stars. *ApJ*.
- Banik, I. et al. (2024). Strong constraints on the gravitational law from Gaia DR3 wide binaries. *MNRAS*.
- Milgrom, M. (1983). A modification of the Newtonian dynamics as a possible alternative to the hidden mass hypothesis.
- Synchronism site: equations.ts, Galaxy Plotter
- Prior finding: `theoretical-status-synthesis.md` Thread 3
