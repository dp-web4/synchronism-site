# Finding: Covariant Refracted Gravity is unscreened ω = −1 Brans–Dicke. It fails Cassini, LLR (Ġ and Nordtvedt), and its weak field never reproduces RG

## Origin
Topic `does-covariant-refracted-gravity-pass-lunar-laser-ranging.md`, maintainer 2026-10-22. It names "the missing RG cell".
PREREG `4e3898f` with addendum `1244148`, both committed before the script ran. Script:
`scripts/covariant_rg_local_tests.py`; output in `_output.txt`. I read the source of the paper (arXiv:2109.11217 v4, the
A&A 2023 version) and grepped the equations. The RG review (2404.06538 §6–7) was also read from source.

## Summary
The published covariant completion of Refracted Gravity (CRG; Sanna, Matsakos & Diaferio 2023) fixes W(φ) = −1 and
V(φ) = −Ξφ.
- **The scalar equation is exactly linear.** The paper's own trace combination gives □φ − 2Ξφ = 8πG T (sympy-verified).
  That is ω = −1 Brans–Dicke with a scalar of Hubble-scale range (2.2 Gpc). The equation is linear, so nothing can
  screen it. The paper's chameleon argument does not hold.
- **Three local exclusions follow:**
  - Cassini: γ_PPN = 0 exactly, which is ~4×10⁴σ off.
  - LLR, Nordtvedt: η_N = 1, which is ~2×10³σ off.
  - LLR, Ġ/G: the paper's flat FLRW system forces q − ζ = 2 and |φ̇/φ| ≥ 0.99 H₀ at every admissible parameter point,
    which is ≥ 900σ off (~2,600σ at the paper's best fit).
- **The topic's literal question has the opposite answer from the one feared.** The Sun's galactic orbit drives Ġ/G of
  only 8×10⁻¹⁶ yr⁻¹, 90× below the LLR error. CRG's φ tracks the potential, not the density, so the 09-24 mechanism
  does not carry over.
- **Worse for RG than any of the exclusions:** CRG's weak field cannot vary φ by more than ~10⁻⁴ across a galaxy. RG's
  permittivity needs Δε/ε = O(1). The covariant theory therefore does not contain Refracted Gravity at galaxy scales:
  its galaxies are Newtonian with a renormalized G, to 10⁻⁵ in v(100 kpc).

## Research Notes

### What the paper defines (verbatim from source)
- Action (their Eq. 3): (1/16πG)∫√g [φR + (W/φ)(∇φ)² + 2V] + S_m. CRG is "W(φ) = −1" (Eq. 6) and "V(φ) = −Ξφ" (Eq. 7).
- Their Eq. 9: "□φ − 2Ξφ = 8πG T".
- Their Eq. 24: "∇·(φ∇Φ) ≃ 8πGρ … We thus recover the RG equation if we identify the scalar field with twice the
  permittivity: φ = 2ε."
- Their Eq. 26: "φ(r) = 2[1 − ∫₀ʳ Gm(<r′)/r′² dr′]". Units are c = 1, so the integral is the Newtonian potential
  difference over c², ~10⁻⁶ for a galaxy. The paper's own near-source solution therefore already shows the problem.
- Their Sect. 3.3 claims a chameleon screening from an Einstein-frame V_eff = (Ξ/2πG)e^{−Ψ} + ρe^{Ψ}.
- Their Sect. 4: Ω₀ = 0.31, Ω_Ξ0 = 0.650 (+0.005/−0.085, 90 %), with H₀ = 67.7.

### A. The scalar equation is exactly linear, and ω = −1
I traced their Einstein equation (Eq. 8) and eliminated R using the scalar equation (their Eq. 8, second line). The
result is □φ = 8πG T + 2Ξφ. It holds exactly, with no weak-field approximation. It is linear in φ and contains no
(∇φ)² term.
- Brans–Dicke's trace equation is (3+2ω)□φ = 8πG T + …, and coefficient 1 means ω = −1.
- The mass is √(2Ξ) = √(6Ω_Ξ0) H₀/c, a range of 2.2 Gpc. On solar-system scales m·AU = 2×10⁻¹⁵.
- **Screening is impossible.** With a linear equation and a constant mass, δφ ∝ M for every source (superposition).
  A chameleon thin shell needs a response that is sublinear in M.
- The paper's Einstein-frame V_eff does not even reproduce its own Jordan-frame static solution. V_eff's minimum gives
  φ² ∝ ρ^{±1}, while the JF equation gives φ_far = 4πGρ/Ξ, which is linear in ρ. The chameleon reading is a template,
  not a transform of this theory.

### B. PPN γ = 0, and η_N = 1
I linearized their Eq. 8 (Einstein3) for the static metric diag(−(1+2Φ), (1−2U)δ_ij) in sympy. I converted Weinberg's
sign convention and checked that the 00 component reproduces their Eq. 24.
- The off-diagonal ij equation then forces φ₀(U − Φ) = δφ.
- The scalar equation gives δφ = 2GM/r and the 00 equation gives Φ = −2GM/(φ₀r), so U ≡ 0. The xx residual is 0.
- **γ = 0.** Light bending and the Shapiro delay are half of GR's value. Cassini measures γ − 1 = (2.1 ± 2.3)×10⁻⁵, and
  CRG gives −1: **4.35×10⁴σ**.
- Brans–Dicke has β = 1, so η_N = 4β − γ − 3 = 1. LLR's Nordtvedt bound is (4.4 ± 4.5)×10⁻⁴ (Will 2014 review):
  **2.2×10³σ**.
  - The Earth–Moon differential acceleration toward the Sun is 4.5×10⁻¹⁰ in fractional terms.
  - LLR equivalence-principle tests resolve ~10⁻¹³.
- The paper itself notes that Brans–Dicke with W of order unity is "ruled out … W ≳ 40 000". It says the constraint
  "can be avoided by adding a self-interaction potential". That holds only if the potential makes the scalar heavier
  than 1/AU. Ξ ~ Λ makes it lighter by 15 orders.

### C. The cosmology forces Ġ/G = O(H₀)
Their flat, baryon-only system is Eqs. 47–49 (system4a–c).
- 4a − 4b gives **q − ζ = 2** (ζ ≡ φ̇/Hφ), which the paper prints.
- 4b + 4c gives ζ²/3 + 2ζ + 2 = Ω − 2Ω_Ξ, so ζ₀ = −3 ± √(3(1+Ω₀−2Ω_Ξ0)).
- Their admissibility bound is 0 < Ω_Ξ0 ≤ (1+Ω₀)/2. This confines ζ₀ to [−4.97, −1.03] at Ω₀ = 0.31.
  - At the paper's best fit (0.31, 0.65), the discriminant is √0.03, giving ζ₀ = −2.83 or −3.17.
- G_cav = 2G/φ (section B), so Ġ/G = −ζH₀ = **(1.96–2.20)×10⁻¹⁰ yr⁻¹**. LLR measures (7.1 ± 7.6)×10⁻¹⁴, so CRG is
  **2,574σ** off.
- The most favourable admissible point anywhere in Ω₀ ∈ [0.25, 0.35] still gives 6.8×10⁻¹¹ yr⁻¹, or **899σ**.
- With the older workshop LLR reduction, (1.4 ± 1.5)×10⁻¹³ (recall-level), the numbers are 1,304σ and 455σ. The verdict
  is insensitive to the choice.
- Unscreened, the local φ follows the cosmological φ. The local δφ from the Sun plus the Galaxy is ~10⁻⁶, so it cannot
  decouple.

### D. The weak field never produces an RG permittivity
I solved the exact Yukawa equation ∇²δφ − 2Ξδφ = −8πGρ/c² for a 10¹¹ M☉ Hernquist sphere (a = 3 kpc).

| φ₀ (background) | max \|Δφ/φ\| over 0.1–100 kpc |
|---|---|
| 2 (Newtonian normalization) | 1.5×10⁻⁶ |
| 0.316 (paper's cosmological φ₀ = 2Ω_b/Ω₀) | 9.47×10⁻⁶ |
| 0.038 (paper's static "far" solution, 4πGρ_bg/Ξ) | 8.0×10⁻⁵ |

- The Yukawa and massless solutions differ by < 5×10⁻⁵ on these scales.
- The rotation curve from ∇·(φ∇Φ) = 8πGρ is v(100 kpc) = 463.857 km/s. Newton with G calibrated at 8 kpc gives
  463.853 km/s, so ratio − 1 = 10⁻⁵. A flat curve would need 0.43.
- The paper's far-field relation (Eq. 27) has a radicand 1 + (2Ξ − 8πGρ/φ)/Φ′² that is **negative everywhere inside
  ~200 kpc**: the relation has no real solution in the galaxy it is meant to describe.
  - At φ₀ = 0.038 it is negative out to 1 Mpc.
  - Where the relation is defined, its own magnitude bound gives |Δ ln φ| ≤ ∫(2Φ′ + √(2Ξ))dr = 2×10⁻⁴.
  - The "acceleration scale a_Ξ" does exist: Φ′/√(2Ξ) crosses 1 near 4 kpc. But it marks a change of branch with an
    amplitude of order r/L_Hubble. It does not produce an O(1) boost.
- **Why, structurally.** In any canonical scalar–tensor theory sourced by T, the weak-field response is
  δφ/φ ~ (Φ/c²)/(3+2ω).
  - An O(1) permittivity from galactic potentials (~10⁻⁶) needs 3+2ω ≲ 10⁻⁶, the ghost edge ω → −3/2. There Cassini
    is worse (γ−1 → −2).
  - The alternative is a non-canonical kinetic sector (AQUAL / k-essence), which is MOND's route.
  - *This generalization is a sketch, not executed.* It says a density-keyed permittivity cannot be the weak-field limit
    of a canonical scalar–tensor theory.

### E. The topic's literal question
The question was whether the Sun's galactic orbit drifts ε. It does, through δφ/φ₀ = −Φ_N/c², so Ġ/G = Φ̇/c²:
- radial term, U⊙g_R: 8.4×10⁻¹⁶ yr⁻¹;
- vertical term: 9×10⁻¹⁸ yr⁻¹.

Together that is 0.011σ of LLR. **The 09-24 density-keyed mechanism does not carry over**, because CRG keys on potential,
not density, and no relaxation time is needed. The cosmological drift (C) and the Nordtvedt term (B) are the binding
constraints, and both are generic Brans–Dicke physics that 09-24 never needed.

### PREREG scoring
| # | prediction | result |
|---|---|---|
| P1 | \|Ġ/G\| ≥ 900σ at every admissible point, ~2,700σ at best fit | **HELD** (899σ / 2,574σ) |
| P2 | \|Δφ/φ\| < 10⁻⁵ on 0.1–100 kpc; refuted if > 10⁻² | **HELD on verdict; numeric threshold missed at the lowest φ₀** (8×10⁻⁵ at φ₀ = 0.038; < 10⁻⁵ for φ₀ ≥ 0.316) |
| P3 | \|Δ ln φ\| < 10⁻⁵ from Eq. 27; v ratio − 1 < 1 % | **PARTLY.** v ratio 10⁻⁵ held. Eq. 27 is undefined in the galaxy (unanticipated), and its bound where defined is 2×10⁻⁴, above my 10⁻⁵ |
| P4 | γ = 0; no screening (linear) | **HELD** (sympy: exact linearity; U ≡ 0) |
| P5 | orbital Ġ/G < 10⁻¹⁴ yr⁻¹ | **HELD** (8.4×10⁻¹⁶ radial + 9.3×10⁻¹⁸ vertical) |
| P6 | η_N = 1, ≥ 2×10³σ | **HELD** (2.2×10³σ) |

The analytic claims in P1 and P4 were derived while reading the paper. Their registration fixes thresholds, not
priority (stated in the PREREG).

### Prior art
Searches for "covariant refracted gravity" with PPN, Cassini or varying G returned nothing.
- The RG review (2404.06538 §6–7, source-grepped) lists CRG's open items: the a_Ξ ↔ a₀ link, w_DE, CMB, and P(k). It
  does not mention solar-system tests, Ġ, or screening.
- The physics is textbook. The ω = −1 PPN values and the Nordtvedt formula are in Will's Living Review, and "a light
  scalar with a linear equation cannot chameleon" is standard. What is new is applying it to CRG, the q − ζ = 2 lock
  on Ġ, and the weak-field Δφ number. As far as these searches reach, nobody has published it.

## Implications for the Site
1. **/honest-assessment comparison-table RG row (line ~1920)** currently says: *"a covariant scalar-tensor completion
   exists (Sanna, Matsakos & Diaferio 2023), which is exactly what this framework's 'postulated, not derived' field
   equation lacks."*
   - That came from this track's 09-19 correction ("'No covariant completion exists' is false"), made on reading alone.
   - Executed, it reverses. The completion exists as a theory. But its weak field does not contain RG's density-keyed ε
     (Δφ ~ 10⁻⁵), and it is excluded by Cassini (4×10⁴σ) and by LLR twice (Nordtvedt 2×10³σ; Ġ ≥ 900σ).
   - RG, like this framework, has no surviving derivation of its field equation. The asymmetry the row draws is false.
2. **/test-catalog#what-excluded-covers (line ~479)** says "Its covariant completion's lunar-ranging status is unchecked."
   Replace it with the result. The RG record becomes:
   - GCs pass; disc calibrations fail 15/15 dSphs; E0 calibration in 2–4σ tension;
   - covariant completion: doesn't reduce to RG at galaxy scales, and is excluded by Cassini and LLR.
3. **The project-lead fork ("adopt RG's dynamics").** The dynamics on offer is excluded, and it does not produce the
   galaxy phenomenology anyway. Adopting RG buys a field equation with the same status as the framework's own: postulated
   at the Poisson level, with Matsakos & Diaferio's Lagrangian (their Eq. 2.6) deferred since 2016. **The adopt option
   does not buy a dynamics.** That removes the stated reason to adopt.
4. Nothing here touches the "6" or Bucket 0. It is about RG, and about the site's comparison of RG with itself.

## Action: Maintainer
- **P1** /honest-assessment RG row: replace the "covariant scalar-tensor completion exists … exactly what this framework
  lacks" clause with: "a covariant scalar–tensor completion was published (Sanna, Matsakos & Diaferio 2023). It is
  ω = −1 Brans–Dicke with a Hubble-range, unscreened scalar. Its weak field varies φ by ~10⁻⁵ across a galaxy, so it
  does not reproduce the density-keyed ε. It is excluded by Cassini (γ = 0) and by lunar laser ranging (Nordtvedt
  η = 1; Ġ/G ≥ 0.99 H₀) (explorer 2026-10-22). Neither RG nor this framework has a surviving derivation of the field
  equation."
  - Keep the old clause in a history `<details>` (09-19 → 10-22).
- **P1** /test-catalog#what-excluded-covers: swap "Its covariant completion's lunar-ranging status is unchecked" for the
  result. Link this finding.
- **P2** Lint rule: `covariant (scalar.tensor )?completion exists` near `Refracted|Sanna` → REQUIRES `excluded|Cassini|does
  not reproduce`.
- **P2** Back-annotate `Synchronism/Research/proposals/the_density_keyed_exclusion_is_one_permittivity_and_refracted_gravity_needs_its_own_row_20261022.md:28`
  ("completion … is unchecked") with the result.
- **P3** For-researchers distinct-content / negative-results pitch: "a density-keyed permittivity cannot be the weak-field
  limit of a canonical scalar–tensor theory (δφ/φ ~ (Φ/c²)/(3+2ω))". Label it sketch, not executed.

## Open Threads
- **Execute the generalization.** Does any (W(φ), V(φ)) give δφ = O(1) on galactic potentials while passing Cassini?
  The canonical class says no. Non-canonical K(X) is AQUAL, i.e. MOND, i.e. acceleration-keyed, not density-keyed. If
  that closes, "density keying has no covariant home" is a citable, framework-independent negative result.
- **The baryon-amplification sketch (registered as unregistered).** Ω₀ = 2Ω_b/φ₀ uses the same 2/φ that sets Cavendish
  G. CRG's "Ω₀ = 0.3 from baryons" then implies a baryon density ~6× above the η-based value. The Yukawa range ~ L_H
  makes this not clean. Worth a page of algebra.
- **Internal inconsistency.** The paper's static "far" φ (4πGρ_bg/Ξ = 0.038) and its cosmological φ₀ (2Ω_b/Ω₀ = 0.32)
  differ by 8×. That is because ζ₀ ≈ −3, so φ is far from static. Minor, but it shows the "far" limit is not a state
  the theory occupies.
- Should this be sent to the RG authors? The result is about their published theory, and they list CRG follow-ups as
  future work. That is an outward-facing act and dp's call.

## Correction trail
This track's 09-19 finding (`the-field-equation-has-a-name-refracted-gravity-...`, row 3, **P0**) told the site that
"No covariant completion exists" is false. The site adopted it, and the /honest-assessment row then credited RG with
what the framework "lacks". Both were made on reading the abstract-level claim "reduces to RG in the weak-field limit".
The paper's own Eq. 26, read with c restored, already contradicted that. This is a record-facing verdict caught by
executing (cf. `reading-changes-record-facing-verdicts`), and another instance of "a correction is a claim — re-derive
it."
