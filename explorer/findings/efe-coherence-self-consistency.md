# Finding: Can the Coherence Framework Encode the MOND External Field Effect?

## Origin
Topic: `topics/external-field-effect.md` (seeded by maintainer 2026-02-28, from leading-edge researcher friction log)

## Summary

The Synchronism research archive has **extensively explored** the EFE question across at least 8 dedicated sessions (#137, #184, #207, #212, #215, #409, and others). The current position is unambiguous: **Synchronism explicitly predicts NO External Field Effect**. The coherence function C(a) depends only on local acceleration, making it fundamentally local. However, this finding paper argues that the current formulation has an unexamined loophole related to the MRH boundary and self-consistency that could either (a) naturally produce an EFE-like effect, or (b) definitively rule one out based on structural arguments. Either way, the site needs to address this far more explicitly.

## Research Notes

### 1. What the Archive Says About the EFE

The archive's position crystallized across several sessions:

**Session #184 (EFE vs Density Degeneracy)**
`/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session184_EFE_Density_Degeneracy.md`

This session identified a fundamental degeneracy: in the cosmic web, external gravitational field g_ext and local density rho are strongly correlated (r = 0.89). This means that Synchronism's density-dependent G_eff and MOND's acceleration-dependent EFE make nearly identical predictions in most environments. The key finding: Tidal Dwarf Galaxies (TDGs) break this degeneracy because they have LOW density (tidal debris) but HIGH g_ext (near parent galaxy).

**Session #212 (MOND-Synchronism Convergence)**
`/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session212_MOND_Sync_Convergence.md`

Explicitly maps the fundamental divergences:

| Aspect | MOND | Synchronism |
|--------|------|-------------|
| EFE present? | Yes | **No** |
| Mechanism | Non-local: mu(|g_int + g_ext|) | Local: C(a) only |
| Prediction | Embedded dwarfs weaker | No environment effect |

**Session #215 (EFE Predictions)**
`/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session215_EFE_Predictions.md`

The most definitive statement. Synchronism predicts sigma_field / sigma_satellite = ~1.0 (no environmental dependence), while MOND predicts ~1.2-1.5. Explicitly frames the *absence* of EFE as a "FEATURE, not a bug" that connects to the local nature of coherence dynamics.

**Session #409 (EFE Test on SPARC Data)**
`/mnt/c/exe/projects/ai-agents/Synchronism/simulations/session409_efe_test.py`

Tests whether the MOND EFE can explain the R_eff effect in SPARC data. Concludes it cannot: "The MOND External Field Effect CANNOT explain the R_eff effect" -- environment indicators barely mediate the R_eff-offset link.

### 2. The Formulation Evolution: Density vs Acceleration

A critical subtlety emerges from the archive's own evolution:

**Phase 1 (Sessions #1-184): Density-based C(rho)**
```
C(rho) = tanh(gamma * ln(rho/rho_crit + 1))
```
Here, rho is the local baryonic density. The coherence function naturally depends on what mass is present locally.

**Phase 2 (Session #191 onward): Acceleration-based C(a)**
```
C(a) = Omega_m + (1 - Omega_m) * (a/a_0)^(1/phi) / [1 + (a/a_0)^(1/phi)]
```
Here, a = G*M(r)/r^2 is the local Newtonian acceleration. This shift was driven by empirical performance -- density-based C gave poor fits to the Milky Way rotation curve, while acceleration-based C achieved chi^2 = 9.3.

**The critical implication**: The switch from C(rho) to C(a) has a subtle but important consequence for the EFE question. In the density formulation, the argument was straightforward: "rho is local, so C is local, so no EFE." But in the acceleration formulation, a = G*M(r)/r^2 -- and what determines M(r)? The mass distribution. And what determines the mass distribution? The gravitational potential. And what determines the gravitational potential? G_eff = G/C(a). This is a self-referential loop.

### 3. The Self-Consistency Loop: C -> Gravity -> rho -> C

This loop is the key unexplored territory. The modified Poisson equation from Appendix D (`/mnt/c/exe/projects/ai-agents/Synchronism/manuscripts/Appendix_D_Synchronism_in_General_Relativistic_Form.md`) is:

```
nabla^2 Phi = 4*pi*G * rho/C(rho)
```

Or equivalently with the acceleration formulation:
```
nabla^2 Phi = 4*pi*G * rho/C(|nabla Phi|)
```

This is a **nonlinear Poisson equation**. The solution Phi depends on C, but C depends on |nabla Phi|. This is structurally identical to the AQUAL (A QUAdratic Lagrangian) formulation of MOND:

```
nabla . [mu(|nabla Phi|/a_0) * nabla Phi] = 4*pi*G*rho
```

In AQUAL, the nonlinearity of the Poisson equation is precisely what generates the EFE. When you have a subsystem embedded in a larger system, the total gravitational field is the sum of internal and external contributions. Because mu (or equivalently 1/C) is a nonlinear function of the total field, you cannot simply superpose solutions. The external field changes the total field, which changes mu/C, which changes the effective gravity on the internal system.

**The question is whether the nonlinearity in the Synchronism Poisson equation also generates this coupling.**

### 4. Why the Current "No EFE" Claim May Be Premature

The archive's claim of "no EFE" in Sessions #212 and #215 rests on the algebraic form of C(a):

```
C(a) depends ONLY on local acceleration a
-> No external field effect
-> sigma_field = sigma_satellite at same M_star, r_half
```

But this reasoning treats C(a) as if it is evaluated on the *internal* acceleration alone. In the full nonlinear Poisson equation, the "local acceleration" at a point inside a subsystem is not just the acceleration from the subsystem -- it includes the external field. The total acceleration is:

```
a_total = |nabla Phi_total| = |nabla Phi_internal + nabla Phi_external|
```

If C is evaluated on a_total rather than a_internal, then **the external field does enter the coherence function**, and you get an EFE-like effect. This is exactly how AQUAL works.

The question then becomes: **is the argument of C the internal acceleration or the total acceleration?** The answer depends on the field equation structure:

- If the field equation is: nabla^2 Phi = 4*pi*G*rho/C(|nabla Phi|), then C is evaluated on the TOTAL field, and an EFE naturally emerges.
- If the field equation is: nabla^2 Phi = 4*pi*G*rho/C(a_internal), where a_internal is somehow separated from a_external, then no EFE.

The first option is the natural one for any local field theory. You do not get to choose which part of the field to evaluate the nonlinearity on -- the field equation operates on the total field at each point.

### 5. The MRH Connection

The Markov Relevancy Horizon concept provides a separate channel through which the external environment could enter.

From the whitepaper (Section 4.9, `/mnt/c/exe/projects/ai-agents/Synchronism/synchronism_extracted.txt`):
> "The Markov Relevancy Horizon defines the boundary beyond which including additional information or complexity in a model does not significantly improve its predictive power or explanatory value."

Session #180 (`/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session180_MRH_Reexamination.md`) established a critical principle: **you cannot mix scales**. The MRH for galactic rotation curves is the galactic scale (~10^5 light-years), not the atomic scale or the cosmological scale.

But here is the question the archive does not address: **does the MRH of a subsystem shift when the subsystem is embedded in a larger system?** Consider a dwarf galaxy that is isolated versus one orbiting the Milky Way:

- Isolated: The MRH is set by the dwarf galaxy's own dynamics. The relevant density/acceleration is the dwarf's internal field.
- Embedded: The dwarf's MRH might expand to include the host galaxy's field, because the host's gravitational influence is dynamically relevant to the dwarf's internal dynamics at every point.

If the MRH shifts, then the "local" in "C depends on local acceleration" would be redefined to include the host galaxy's contribution. This would be a MRH-mediated EFE.

### 6. What MOND's EFE Actually Requires

The EFE in MOND arises from two structural features:

1. **Nonlinear field equation**: The modified Poisson equation is nonlinear in the gravitational potential.
2. **The field at any point is the total field**: You cannot decompose the field into "internal" and "external" and apply the nonlinearity separately.

In the AQUAL formulation: nabla . [mu(|nabla Phi|/a_0) * nabla Phi] = 4*pi*G*rho

When a subsystem with internal potential Phi_int is embedded in a uniform external field g_ext, the total potential is Phi = Phi_int + Phi_ext (where nabla Phi_ext = -g_ext). Because mu is nonlinear, mu(|nabla Phi|/a_0) != mu(|nabla Phi_int|/a_0), and the internal dynamics are modified.

For Synchronism, the analogous equation would be:
nabla . [nabla Phi / C(|nabla Phi|)] = 4*pi*G*rho

This is a nonlinear Poisson equation with exactly the same structural property. **If this is the correct field equation, Synchronism DOES predict an EFE**, despite what Sessions #212 and #215 claim.

The discrepancy arises because the research sessions treated C(a) as if it can be evaluated independently for each system, without considering the nonlinear coupling through the field equation. This is the algebraic vs. field-theoretic distinction.

### 7. The Bounded Nature Changes the EFE Character

Even if Synchronism does predict an EFE through the nonlinear Poisson equation, the character would be different from MOND's EFE because C is bounded:

- **MOND**: In the deep MOND regime (a << a_0), mu -> a/a_0, so G_eff -> infinity. The EFE can completely suppress the MOND boost when g_ext >> g_int.
- **Synchronism**: C is bounded below by Omega_m ~= 0.315, so G_eff is bounded above by 1/Omega_m ~= 3.17. Even without any external field, the gravity boost saturates. With an external field, the EFE would be present but **weaker** than MOND's EFE.

This is actually a testable prediction: Synchronism-with-EFE would predict a weaker EFE than standard MOND, because the bounded coherence function limits how much the external field can modify internal dynamics.

### 8. The Self-Consistency Loop at Cosmological Scale

The question about C -> gravity -> rho -> C being self-consistent at cosmological scale is partially addressed in Session #100 (`/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session100_Modified_Friedmann.md`), which derives a modified Friedmann equation:

```
H^2 = (8*pi*G / 3*C) * rho_m
```

At z=0, setting C_0 = Omega_m = 0.3 exactly reproduces LCDM. The "dark energy" emerges as rho_DE = rho_m * (1-C)/C.

This IS a self-consistent loop: the expansion rate H depends on C, which depends on the density rho, which depends on how the universe expands (which depends on H). The modified Friedmann equation is the cosmological version of the self-consistency loop you asked about.

However, the archive does not explicitly connect this cosmological self-consistency to the EFE question. The self-consistency at galactic scale -- where the mass distribution of a galaxy is shaped by the gravitational potential, which is shaped by C, which depends on the acceleration, which depends on the mass distribution -- has not been explored as a self-consistent problem. All existing calculations treat C(a) as an explicit function evaluated on the Newtonian acceleration, without solving the full nonlinear problem iteratively.

## Implications for the Site

### Critical Gap
The site currently has zero content about the External Field Effect. This is a glaring omission for a framework claiming MOND unification. The MOND unification page (`/mond-unification`) derives a_0 but says nothing about the EFE. The galaxy rotation page mentions "environment-dependent effects" but does not connect them to the EFE.

### The Honest Position
Based on the archive analysis, the honest position is more nuanced than "no EFE":

1. **The algebraic coherence function C(a) is local** -- if evaluated in isolation, it depends only on local acceleration.
2. **The field equation is nonlinear** -- the modified Poisson equation couples internal and external fields through the nonlinear C function.
3. **If the field equation is properly formulated as a nonlinear PDE**, an EFE-like effect naturally emerges, but it is **weaker** than MOND's EFE due to the bounded nature of C.
4. **This has not been numerically tested** -- no simulation in the archive solves the full nonlinear Poisson equation for an embedded subsystem.
5. **The MRH principle could either strengthen or weaken this conclusion**, depending on whether the MRH of a subsystem expands when embedded.

### What the Site Should Say
The site should have a dedicated section (perhaps within the MOND unification page or as its own page) that:
- Explains what the EFE is and why it matters
- Acknowledges that the current formulation's prediction regarding the EFE is **unresolved**, not "no EFE"
- Notes that the nonlinear Poisson equation structurally permits an EFE-like effect
- Highlights that the bounded nature of C would make Synchronism's EFE weaker than MOND's
- Frames the EFE question as one of the most important open questions for the framework
- Presents the TDG degeneracy-breaking test from Session #184 as a concrete path forward

## Action: Maintainer
- Create an EFE discussion section, either on the MOND unification page or as a standalone page
- The honest assessment of this topic should be: **Speculative / Open Question**
- The field equation structure (nonlinear Poisson) is the key argument; it should be presented clearly
- Reference Sessions #184, #212, #215 for the current positions, but note the field-theoretic gap
- The self-consistency loop (C -> gravity -> rho -> C) deserves its own treatment, possibly on a "mathematical structure" page

## Open Threads

1. **Numerical test**: Solve the nonlinear Poisson equation nabla.[nabla Phi / C(|nabla Phi|)] = 4*pi*G*rho for a dwarf galaxy embedded in a uniform external field. Compare the resulting rotation curve with and without the external field. This would definitively settle whether Synchronism predicts an EFE.

2. **AQUAL correspondence**: Write out the Lagrangian for the Synchronism field equation and compare with AQUAL's Lagrangian. If they have the same structure (differing only in the interpolating function), then Synchronism inherits MOND's EFE by construction.

3. **MRH boundary shift**: Formalize whether the MRH of a subsystem expands when the subsystem is embedded. If the MRH is defined by the correlation length xi(rho) from Grok's Proposal 1 (in the MRH formalization topic), does embedding in a denser environment change xi?

4. **Weaker EFE prediction**: Quantify how much weaker Synchronism's EFE would be compared to MOND's, given the bounded C function. This is a concrete, testable prediction: if the EFE is observed at the MOND-predicted strength, Synchronism's bounded formulation would be in tension.

5. **Cosmological self-consistency**: The modified Friedmann equation (Session #100) is one instantiation of the C -> gravity -> rho -> C loop. Can this same self-consistency be demonstrated at the galactic scale? Does the iterative solution of the nonlinear Poisson equation converge?

6. **Chae et al. (2020) reinterpretation**: Session #184 proposed that the 4-sigma EFE detection could be reinterpreted as a density effect. But if Synchronism also predicts an EFE (through the nonlinear Poisson equation), this reinterpretation is unnecessary -- the detection would simply validate a shared prediction.
