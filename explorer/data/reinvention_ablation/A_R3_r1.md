--- PRIMARY ---
**PRIMARY, Round 1**

**1. Bounded claim**

The construction is the nonlinear Poisson equation ∇·[C(ρ)∇Φ] = 4πGρ with g = −∇Φ and C ∈ [Ω_m, 1]. I claim only this:

- (a) In spherical symmetry, Gauss's law gives C(ρ(r))·g(r) = g_N(r) exactly, with g_N sourced by the enclosed mass. So g = g_N/C(ρ(r)) follows from the field equation rather than being postulated.
- (b) Away from the transition shell (ρ ≪ ρ_c or ρ ≫ ρ_c), ∇C = 0 and the theory is Newtonian with G_eff = G/C₀ or G.
- (c) The boost g/g_N is hard-capped at 1/Ω_m ≈ 3.2.

**2. Momentum conservation, stated honestly**

Using ρ = ∇·(C∇Φ)/4πG, the force density is

ρ∇Φ = ∇·T + (1/8πG)|∇Φ|²∇C,

where T_ij = (C/4πG)(∂_iΦ ∂_jΦ − ½δ_ij|∇Φ|²).

The first term is a pure divergence. The residual is not, so total momentum is conserved only up to F_res = −(1/8πG)∫|∇Φ|²∇C d³x.

This residual:
- is localized to the transition shell, where ∇C ≠ 0.
- vanishes in spherical symmetry.
- is generally nonzero for lopsided or interacting systems, where it acts as a net self-force.

The alternative is to derive the equation from L = −C(ρ)|∇Φ|²/8πG − ρΦ. That makes momentum exactly conserved, but matter then feels Φ_eff = Φ + C′(ρ)|∇Φ|²/8πG. This extra term is O(Φ) rather than a small correction, and it breaks g = g_N/C. So "natural" cannot mean both exact conservation and the spherical law. I am choosing the first: the spherical law plus a quantified, localized residual.

**3. Operational variables**

- ρ: the local baryonic mass density, from photometry plus gas, with M/L as the only nuisance parameter. It is not an acceleration and not the cosmic density.
- ρ_c and p: two free parameters. ρ_c must be fixed once, from one galaxy class, and then held fixed for all others.
- Ω_m = 0.31 is an input, not a fit parameter.

If ρ_crit means the cosmic critical density (~10⁻²⁶ kg/m³), then ρ ≫ ρ_crit throughout every galaxy and C ≡ 1. The program therefore needs ρ_c to be a galactic-scale threshold and must say so.

**4. Falsifiable consequence (the cap)**

For any near-spherical system, at every radius,

(V_obs/V_bar)² ≤ 1/Ω_m ≈ 3.2,

and this holds for any ρ_c and p. Equivalently, the dynamical-to-baryonic mass ratio inside r cannot exceed 3.2 (relative to C ≡ 1).

I expect this to be the program's most exposed point. Gas-dominated dwarfs and LSB galaxies (e.g. DDO 154, with (V_obs/V_bar)² ~ 10 or more in the outskirts) are the natural test. The construction survives only if baryonic masses in those systems are systematically underestimated by a factor above 3, which is a separate claim and a hard one to defend.

A related discriminator against MOND-like laws: because C depends on ρ rather than on g_N, two systems with equal g_N but different ρ must show different boosts. The RAR's small intrinsic scatter, with no correlation between residuals and surface density, constrains this.

**5. Questions for the Challenger (max 2)**

1. Do you accept that the spherical law and exact momentum conservation are mutually exclusive here, so the claim reduces to "conserved up to F_res"? If not, show the conserving term.
2. Is the 3.2 cap fatal in your view, or does it only restrict the construction to regimes (clusters? cosmic scales?) where the program has not claimed rotation-curve fits?

**Status: Narrowed.** The construction is coherent as a spherical-law-plus-localized-residual theory, but it is limited by the cap and by the ρ_crit scale ambiguity.

**Would settle:** a sample of gas-dominated dwarfs with robust baryon masses that either respects or violates (V_obs/V_bar)² ≤ 3.2.

--- CHALLENGER ---
**CHALLENGER, Round 2**

**On your questions.**
1. I accept the dichotomy. Exact conservation and g = g_N/C hold together only where F_res vanishes by symmetry. "Natural" therefore means "natural in spherical symmetry", and that is a much weaker claim.
2. The cap is fatal for galaxies. Section 2 gives the numbers.

**1. The spherical law is not the law that gets tested.**
Rotation-curve data come from disks. There C∇Φ = −g_N + ∇×A, and the curl term is nonzero. This is the same QUMOND/AQUAL issue, and it is why those theories need numerical solves. So g = g_N/C(ρ) is not a theorem for disks. The program's algebraic fits and this field equation make different disk predictions, and nobody has computed the difference. The "sourced completion" therefore does not underwrite the fits it is meant to support.

**2. The quantitative check: the cap against the RAR.**
The observed RAR has g_obs ≈ g_N/(1−e^{−√(g_N/g†)}), with g† ≈ 1.2×10⁻¹⁰ m/s².

| g_N (m/s²) | Observed boost g/g_N | Cap 1/Ω_m |
|---|---|---|
| 10⁻¹¹ | ≈ 3.5 | 3.2 |
| 10⁻¹² | ≈ 10 | 3.2 |
| 10⁻¹³ | ≈ 30 | 3.2 |

The cap is exceeded already near g_N ~ 10⁻¹¹, which is the ordinary outer-disk regime. Past that, C = Ω_m means G_eff = G/Ω_m, so outside the transition the curve is Keplerian: V ∝ r^{-1/2}. The theory produces no asymptotically flat curves, no V⁴ ∝ M_b baryonic Tully-Fisher relation, and no explanation for the lensing-based RAR extension to g_N ~ 10⁻¹⁴.

**3. The floor is also mis-set against the program's own input.**
In ΛCDM the total-to-baryonic mass ratio is Ω_m/Ω_b ≈ 6.3. The floor 1/Ω_m ≈ 3.2 is about half of that, so even the cosmic ratio is not reproduced. Ω_m looks like a borrowed number. The natural scale for a "dark-matter-free" floor would be Ω_b/Ω_m ≈ 0.16, giving a boost of ~6, and even that is still capped. Taking Ω_m from ΛCDM while claiming to replace its dark matter also needs a justification.

**4. Hidden premise: the ρ_c scale.**
Typical outer-disk baryon densities are about 10⁻³ M☉/pc³ ≈ 10⁻²⁰ kg/m³, roughly 10⁵–10⁶ times ρ_crit,cosmic. So with cosmic ρ_crit, C ≡ 1 everywhere in galaxies. ρ_c must be a free galactic scale. That is a new dimensionful constant, and g† is not derived from it. The same ρ_c also has to work for clusters, where gas densities are 10²–10³ ρ_crit and the observed boost is ~5–10, again above the cap.

**5. F_res is unquantified, and it is a Newton-III violation.**
A nonzero net self-force on an isolated system is not a small technicality. Any lopsided disk (m=1 amplitude of 10–20% is common), any bar offset, or any merging pair accelerates its own centre of mass. You called F_res "localized". Localized does not mean small, because |∇Φ|² is largest in the transition shell and ∇C is steepest there. Dimensionally, F_res ~ (1−Ω_m)·ε·GM²/R² with ε the asymmetry, which is of order the system's own gravity. Without a bound this is not "quantified".

**Questions (2):**
1. Which g_N range does the program actually claim to fit, given the table above? If it is g_N ≲ 10⁻¹¹, how can it be consistent with the cap? If it is higher, which data does the construction explain?
2. Give F_res/(GM²/R²) for an exponential disk with a 10% m=1 perturbation. State the CoM acceleration over a Gyr. If you cannot, say whether F_res is unbounded.

**Status: Failed** for galaxy-scale rotation curves, because the cap contradicts the RAR above g_N ~ 10⁻¹¹ m/s². **Narrowed** for any residual claim, which is now limited to weak-boost regimes, and F_res is unquantified there too.

**Would settle:** a numerical Poisson solve of ∇·[C∇Φ] = 4πGρ for a realistic disk, compared to the RAR with fixed ρ_c, p, plus the computed CoM drift.

--- PRIMARY ---
**PRIMARY, Round 3**

**Concessions**

1. **Cap vs. RAR.** I checked your table. The RAR boost is 1/(1−e^{−√(g_N/g†)}). That gives about 4.0 at g_N = 10⁻¹¹ and about 11.5 and 35 at 10⁻¹² and 10⁻¹³, so your numbers are slightly low. The boost crosses 3.2 at g_N ≈ 1.7×10⁻¹¹ m/s², so the cap fails across most of the deep-MOND-like regime. I conceded this in my own Round 1 (DDO 154). Galaxy rotation curves are **Failed** with the floor at Ω_m.

2. **A sharper failure than the cap.** Raising the floor does not repair this. In a disk, ρ falls exponentially with radius while g_N falls roughly as 1/r². Any C(ρ) that tracks the RAR in one galaxy therefore cannot track it in another. Outside the baryons, ρ = 0 and C = C₀ exactly, so every system goes Keplerian with G/C₀. The RAR is a function of g_N, not ρ. A ρ-only C is structurally the wrong variable, not just wrongly tuned.

3. **The spherical law is not a theorem for disks.** I accept your Section 1. The curl term means the algebraic fits and the field equation give different disk predictions, and nobody has computed the difference.

4. **ρ_c and Ω_m.** Both are free or borrowed inputs. ρ_crit is not cosmic. Ω_m was chosen without justification, and the cosmic ratio Ω_m/Ω_b ≈ 6.3 does not support it.

**F_res (your Q2)**

I have not run a numerical solve, so this is only a scaling estimate. Bounding the integral by a shell at radius R gives

|F_res| ≲ (ΔC/8πG)·g²·4πR² = ΔC·g²R²/(2G).

With g ~ GM/R², this is ~0.3·GM²/R², which is your dimensional estimate. For an m=1 asymmetry ε ~ 0.1 and g ~ 10⁻¹⁰ m/s²:

- CoM acceleration ≈ 0.03 g_N ≈ 3×10⁻¹² m/s².
- Over 1 Gyr: Δv ~ 100 km/s and displacement ~ 50 kpc.

This is an upper-scale estimate, not a computed value. It is bounded, not unbounded. If it is even within an order of magnitude of the true value, isolated lopsided galaxies would visibly self-propel, which is excluded. The program would have to show a cancellation that suppresses F_res. That is a precise, checkable demand.

**What survives**

Only a structural statement: for a ρ-only C, "∇·[C∇Φ] = 4πGρ" is a well-posed, spherically Gauss-compatible equation with a quantified Newton-III violation and a hard boost cap. It is not a completion of the RAR. The program's claim that it is "the natural one" should be withdrawn. At most it is the minimal ρ-dependent one, and it fails.

The honest repair would make C depend on |∇Φ| (AQUAL/QUMOND-like). That is a different theory. It conserves momentum exactly (it is Lagrangian), and the g_N dependence is built in. It would also give up the program's distinguishing feature, density dependence.

**One testable prediction (usable now)**

At fixed g_N in 2×10⁻¹¹–10⁻¹⁰ m/s², the construction requires the RAR residual to anticorrelate with local baryon density. Higher ρ means C closer to 1 and a smaller boost, with an amplitude of order ΔC × (the boost) across the density range of SPARC galaxies. SPARC shows no such residual correlation with surface brightness, V_flat or morphology beyond the 0.12–0.13 dex scatter. A null result at that level kills the density dependence independently of the cap.

**Questions (2)**

1. Do you accept that the surviving content is "a spherical-only, ρ-dependent toy with a cap and a Newton-III violation", and that C(|∇Φ|) is the only variable that can reproduce the RAR? If so, is there any residual role for ρ-dependence, for example in clusters or in a screening regime?
2. Is there a regime, such as Solar-System, binary-pulsar or high-density environments, where the C → 1 limit makes a sharp prediction the program can claim as a contribution rather than a fit?

**Status:**
- **Failed** for galaxy rotation curves and the RAR.
- **Narrowed** to a spherical, high-density toy.
- **Held** only for the identity C·g = g_N in spherical symmetry.

**Would settle:** a numerical solve for an exponential disk, with a fixed ρ_c, the CoM drift and the SPARC residual-vs-ρ correlation.

--- CHALLENGER ---
**CHALLENGER, Round 4**

**Corrections and agreements**

- Your RAR numbers are right and mine were low: the boost is 4.0, 11.5 and 35 at the three g_N values, and it crosses 3.2 at g_N ≈ 1.7×10⁻¹¹ m/s². I also overstated the outer-disk density in Round 2. 10⁻³ M☉/pc³ is ≈ 7×10⁻²³ kg/m³, not 10⁻²⁰. That is 10³–10⁴ ρ_crit,cosmic rather than 10⁵–10⁶. The conclusion that C ≡ 1 with cosmic ρ_crit is unchanged.
- I checked your force-density identity and it is correct, as is your Δv ≈ 100 km/s and ~50 kpc estimate. Both are upper scales. The residual is ∫|∇Φ|²∇C, which vanishes if |∇Φ|² is uniform. Some cancellation is therefore possible, and only the numerical solve decides it.

**Where it fails, in order of severity**

1. **The floor, not the variable, is the first failure.** Moving to C(|∇Φ|) does not rescue Ω_m. The RAR boost grows without bound as g_N → 0, roughly ∝ (g†/g_N)^{1/2}, so any AQUAL/QUMOND-like repair needs C → 0, not C → 0.31. The program's distinguishing inputs, Ω_m as the floor and ρ as the variable, are both discarded. What remains is AQUAL/QUMOND, which already exists, conserves momentum exactly, and has been studied in disks.

2. **"C(|∇Φ|) is the only variable that works" is too strong.** Any function of g_N or of the Newtonian potential could also reproduce the RAR, and some of these are nonlocal. The defensible claim is narrower: ρ-only C cannot work, because ρ = 0 outside the baryons forces C = C₀ and hence Keplerian falloff.

3. **A hidden premise: the coarse-graining scale of ρ.** The equation needs a smoothed ρ. Microscopically, the density is ≈ 0 almost everywhere, including between a star and its planets. By Gauss's law, any point in a region with ρ < ρ_c feels G/C₀ ≈ 3.2G, regardless of how dense the source is. So the program must state both the smoothing length and which components count (gas, plasma, dust, stars). It must then pass two constraints with one ρ_c:
   - Dwarf outskirts need C ≈ C₀ at ~10⁻²³–10⁻²² kg/m³.
   - Planetary ephemerides need |C−1| ≲ 10⁻⁸ at 30–50 AU, where solar-wind plasma is ~10⁻²³ kg/m³ (my order-of-magnitude figure, with a factor-of-several uncertainty).

   The two densities are comparable, so the window is at best narrow and at worst empty. Wide binaries at 10³–10⁴ AU and passage through the Local Bubble (~10⁻²³ kg/m³) would add further transitions.

4. **No density-dependent role is left.** The prediction you proposed, that the RAR residual at fixed g_N anticorrelates with local ρ, is a sound test, and SPARC has found no such residual dependence (Lelli et al. 2017), though I have not redone that analysis here. But it is secondary, since the cap already fails the construction.

**What would reverse my conclusion**

- A disk solve in which C(ρ) with a fixed ρ_c and p reproduces the RAR beyond g_N ~ 2×10⁻¹¹. The cap forbids this, because the exterior is Keplerian at G/C₀.
- A demonstration that F_res is suppressed by cancellation, to Δv ≲ 1 km/s per Gyr for an ε = 0.1 lopsided disk.
- A principled ρ definition with a ρ_c window that survives both the dwarf outskirts and 30–50 AU.

None is available.

**Questions (2)**

1. State the smoothing scale and the density components that enter ρ. Then give the ρ_c window that keeps C = C₀ in dwarf outskirts (~10⁻²³–10⁻²² kg/m³) and C = 1 to 10⁻⁸ at 30–50 AU. If no window exists, say so.
2. Given AQUAL/QUMOND, which are Lagrangian and already conserve momentum, name one observable where C(ρ) with floor Ω_m predicts something they do not and survives the cap. If there is none, will the program withdraw "natural" and keep only "Gauss identity in spherical symmetry"?

**Status**
- **Held:** C·g = g_N in spherical symmetry, which is just Gauss's law.
- **Narrowed:** momentum conservation, which holds only up to F_res, an unquantified residual with a scaling bound of ~0.03 g_N for ε = 0.1.
- **Failed:** galaxy rotation curves and the RAR (cap), the Ω_m floor, ρ-only C as the RAR variable, and "natural" as a descriptor.

**Would settle:** a disk Poisson solve with fixed (ρ_c, p) giving the RAR comparison and CoM drift, a stated smoothing scale for ρ, and the ρ_c window check against dwarf outskirts and the outer Solar System.

--- PRIMARY ---
**PRIMARY, Round 5 (closing)**

**Answers**

1. **No ρ_c window exists, and I have none to offer.** Dwarf outskirts need x ≪ 1 at ρ ~ 10⁻²³–10⁻²² kg/m³. The outer Solar System, with solar-wind plasma at a comparable ~10⁻²³ kg/m³ (your order-of-magnitude figure), needs 1−C ≲ 10⁻⁸. For C = Ω_m + (1−Ω_m)x/(1+x), that means x ≳ 10⁸. So (ρ_solar/ρ_dwarf)^p ≳ 10⁸ while the two densities are comparable. Satisfying both would need an extreme p, which makes C a step function and adds a third fine-tuned parameter. If the smoothing scale is instead large enough to include the Sun's own mass, the answer is set by the smoothing choice rather than by the theory. Either way the program has not specified the definition.
2. **I know of no observable where C(ρ) with floor Ω_m predicts something AQUAL/QUMOND do not and also survives the cap.** I withdraw "natural". The construction supports only "Gauss's law in spherical symmetry, with a ρ-dependent permittivity."

**Concessions and corrections**

- I withdraw my claim that C(|∇Φ|) is the only variable that works. Your point stands: a ρ-only C is excluded, but other variables are not.
- Your point 1 is right. The RAR boost grows without bound as g_N → 0, so a repair needs C → 0, which discards both Ω_m and ρ. What remains is AQUAL/QUMOND under a different name.
- F_res stays unquantified. My ~0.03 g_N is an upper scale, and cancellation is possible but undemonstrated.

---

**HELD (survives)**
- For ∇·[C(ρ)∇Φ] = 4πGρ in spherical symmetry, C(ρ(r))·g(r) = g_N(r) exactly, so g = g_N/C(ρ) is derived from the field equation there.
- The force density is exactly ∇·T plus (1/8πG)|∇Φ|²∇C. Momentum is conserved only up to F_res.
- The boost cap g/g_N ≤ 1/Ω_m is a firm structural prediction, and it is falsifiable.
- A ρ-only C cannot track a g_N-based law. Outside the baryons ρ = 0, so C = C₀ and the curve is Keplerian.

**NARROWED (must be scoped)**
- The claim is limited to spherical or near-spherical, high-density regimes. Disks have a curl term, and the algebraic law is not a theorem there.
- Momentum conservation holds only up to F_res. The scaling bound is ~0.03 g_N for ε = 0.1, which would give Δv ~ 100 km/s per Gyr. This is an upper scale, and cancellation is possible.
- ρ is undefined until the program fixes a smoothing scale and the components included (gas, plasma, dust, stars). ρ_c must be a free galactic scale, not the cosmic ρ_crit.
- Any role for ρ-dependence would have to lie outside galaxy rotation curves, for example in screening. None has been shown.

**FAILED (unsupported / overreach)**
- "The natural completion." Exact conservation and the spherical law are mutually exclusive. The Lagrangian version breaks g = g_N/C.
- Galaxy rotation curves and the RAR. The cap is crossed at g_N ≈ 1.7×10⁻¹¹ m/s², and the Keplerian exterior rules out flat curves and the baryonic Tully-Fisher relation.
- The Ω_m floor. It is a borrowed ΛCDM number, it is not the cosmic ratio Ω_m/Ω_b ≈ 6.3, and the RAR boost is unbounded.
- A single ρ_c that works for both dwarf outskirts and 30–50 AU. No window exists.
- Any distinguishing prediction relative to AQUAL/QUMOND.

**WOULD SETTLE (decisive evidence/test)**
- A disk Poisson solve of ∇·[C∇Φ] = 4πGρ with fixed (ρ_c, p), compared with the RAR beyond g_N ~ 2×10⁻¹¹ m/s². I expect the cap to forbid agreement.
- The computed CoM drift for an exponential disk with ε = 0.1 lopsidedness. The test is whether Δv ≲ 1 km/s per Gyr.
- The SPARC RAR residual at fixed g_N versus local baryon density. The construction requires an anticorrelation, and published analyses report none, though I have not redone them here.
- Gas-dominated dwarfs with robust baryon masses (for example DDO 154), checked against (V_obs/V_bar)² ≤ 3.2.
- An explicit smoothing-scale definition of ρ with a ρ_c window that passes both the dwarf outskirts and the 30–50 AU ephemeris bound.

HEADLINE: FAILED

--- CHALLENGER ---
**CHALLENGER, closing artifact**

One correction to my own Round 4 first. At 1 AU the solar wind is about 5 protons/cm³ ≈ 8×10⁻²¹ kg/m³. Scaled as r⁻², that gives about 5×10⁻²⁴ kg/m³ at 40 AU, not the 10⁻²³ I stated. That is a few times to ~10× below the dwarf-outskirt range and comparable to the sparsest dwarf gas. The ρ_c window is therefore not provably empty, but it would need C to go from C₀ to 1 − 10⁻⁸ within about a decade in ρ. That implies an extremely steep p, and it still depends on a smoothing scale and component list the program has not stated.

**HELD (survives)**
- In spherical symmetry, ∇·[C∇Φ] = 4πGρ gives C(ρ)·g = g_N exactly (Gauss's law). It is a true identity and nothing more.
- The force-density decomposition ρ∇Φ = ∇·T + (1/8πG)|∇Φ|²∇C is correct. The conserved part and the non-conserved residual are cleanly separated.
- Away from the transition shell, the theory is Newtonian, with G_eff = G or G/C₀.
- The boost is bounded by 1/Ω_m ≈ 3.2.
- Raising the floor cannot repair a ρ-only C. This is a structural result: ρ = 0 outside the baryons forces C = C₀ and Keplerian falloff.

**NARROWED (must be scoped)**
- Momentum conservation holds only up to F_res = −(1/8πG)∫|∇Φ|²∇C d³x. It vanishes in spherical symmetry. Elsewhere the scaling estimate is ≲ 0.03 g_N for ε = 0.1 (Δv ~ 100 km/s per Gyr). This is an upper scale, and cancellation is possible but undemonstrated.
- "Natural" is defensible only as "the Gauss-compatible spherical form". It does not extend to disks, where C∇Φ = −g_N + ∇×A and the algebraic law is no longer a theorem.
- ρ-dependence could survive only in high-density or screening contexts. No such observable has been named.
- ρ_c is a free galactic scale, not ρ_crit,cosmic, which gives C ≡ 1. It requires a stated smoothing length and component list (gas, plasma, dust, stars).

**FAILED (unsupported / overreach)**
- Galaxy rotation curves and the RAR. The boost exceeds 3.2 for g_N ≳ 1.7×10⁻¹¹ m/s² (4.0, 11.5 and 35 at 10⁻¹¹, 10⁻¹² and 10⁻¹³). There are no flat curves, no baryonic Tully-Fisher relation, and no lensing-RAR extension.
- The Ω_m floor. Even a variable that works needs C → 0 as g_N → 0, and Ω_m/Ω_b ≈ 6.3 does not support 1/Ω_m ≈ 3.2. Ω_m is also borrowed from ΛCDM without justification.
- ρ as the RAR variable. The RAR is a function of g_N, while ρ falls exponentially in disks, so no single ρ_c can serve different galaxies.
- "Natural" as a descriptor of the completion.
- Clusters, which show a boost of ~5–10, above the cap.
- A claim to exact momentum conservation alongside the spherical law. The Lagrangian route conserves momentum but gives Φ_eff = Φ + C′|∇Φ|²/8πG, which breaks g = g_N/C.
- Any distinguishing content versus AQUAL/QUMOND. Once the variable becomes |∇Φ| and the floor goes to 0, the construction is those theories.

**WOULD SETTLE (decisive evidence/test)**
- A numerical disk solve of ∇·[C(ρ)∇Φ] = 4πGρ with fixed (ρ_c, p), compared to the RAR beyond g_N ~ 2×10⁻¹¹ m/s². The cap predicts failure.
- The computed F_res and CoM drift for an exponential disk with a 10% m=1 perturbation. Passing requires Δv ≲ 1 km/s per Gyr.
- A stated smoothing scale and component list for ρ, and a ρ_c, p window that gives C = C₀ in dwarf outskirts and |C−1| ≲ 10⁻⁸ at 30–50 AU.
- The RAR residual at fixed g_N (2×10⁻¹¹–10⁻¹⁰) against local baryon density. The construction predicts an anticorrelation, and SPARC (Lelli et al. 2017) reports none, though I have not redone that analysis.
- Gas-dominated dwarfs with robust baryon masses (e.g. DDO 154) tested against (V_obs/V_bar)² ≤ 3.2.

HEADLINE: FAILED