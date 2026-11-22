# Finding: The grid's quadratic dispersion is at threshold reach, not 10⁷ below it. A universal coefficient does not cancel, the sign depends on how time is discretised, and "one cell per tick" is unstable on a face-neighbour grid

## Origin
Topic `does-the-grids-quadratic-dispersion-survive-threshold-bounds.md` (maintainer 2026-11-22, after a researcher
simulated-visitor persona noted that only time-of-flight had been considered). PREREG
`PREREG-grid-quadratic-dispersion-threshold-bounds-20261122.md`, committed `4752de6` before computing and before reading
the literature retrieval.

## Summary
Convention: E² = p² + m² + η p⁴/M_Pl², with M_Pl = 1.22×10¹⁹ GeV, so a = ℓ_Pl gives η directly.
- **The grid's own coefficient.** It is |η| ≈ 0.03–0.14 depending on stencil, direction and species.
- **Composition-agnostic bounds sit right there.** The Auger 2022 threshold bounds are η_γ ≳ −0.015 and η_had < 0.15.
  The pure-proton bounds (Maccione et al. 2009, Galaverni & Sigl 2008, Gagnon & Moore 2004) exclude it by 1.5 to 5
  orders of magnitude. So "below reach" is wrong.
- **"Excluded" is not earned either.** Every bound that excludes the grid holds one sector Lorentz-invariant. A universal
  subluminal grid switches off CMB photopion production, which removes the cosmogenic photons the photon bounds assume.
- **The maintainer's mechanism fails.** A universal n = 2 coefficient does not cancel in reactions (only n = 0 does).
- **The sign is not "subluminal for every field".** It depends on the time discretisation and on the species' stencil.
- **One cell per tick is unstable.** FUNDAMENTALS fixes tick = t_Pl and spacing = ℓ_Pl, i.e. one cell per tick. A 3D
  face-neighbour update at that ratio blows up in 79 % of its modes, gaining a factor of 9.9 per tick in the worst one.
  A 26-neighbour rule can run there; it is subluminal with η ∈ [−1/36, 0].

## Research Notes

### 1. Low-k coefficients from exact lattice dispersions (P1: held, all four, to 6 digits)
`scripts/grid_dispersion_thresholds.py` (output `scripts/grid_dispersion_thresholds_output.txt`); mpmath at 60 digits, p a = 10⁻⁶.

| Scheme | axis | face diagonal | body diagonal | sign |
|---|---|---|---|---|
| S1 scalar / transverse photon, 7-point, continuous time | −1/12 | −1/24 | −1/36 | subluminal everywhere |
| S2 scalar leapfrog, λ = cτ/a = 1 (FUNDAMENTALS' ratio) | 0 | +1/24 | +1/18 | superluminal off-axis, **unstable** (§2) |
| S3 scalar leapfrog, λ = 1/√3 (stability limit) | −1/18 | −1/72 | 0 | subluminal |
| F Wilson fermion r = 1, continuous time | −1/12 | +1/12 | +5/36 | **mixed by direction** |
| M 26-neighbour tensor stencil, leapfrog λ = 1 | 0 | −1/48 | −1/36 | subluminal, marginally stable |

Identity control C0: a 1D leapfrog at λ = 1 gives ω = k exactly (ω − k = 0 at k = 0.001, 0.3, 2.0). So does the 3D
leapfrog along an axis. Analytically, discretising time adds +λ²k⁴/12. So "a nearest-neighbour lattice is subluminal" holds
only for continuous time, or for a time step at or below the stability limit. The time discretisation can flip the sign.
The coefficient is also a cubic tensor (Σk̂ᵢ⁴ and Σk̂ᵢ²k̂ⱼ²), not a number. The literature bounds assume isotropy.

### 2. FUNDAMENTALS' tick/spacing ratio is unstable for a face-neighbour rule (P2: held)
FUNDAMENTALS §1 specifies discrete time with a Planck-time tick and discrete space with a Planck-length grid, and "all
cells simultaneously evaluate neighbor tensions". That fixes λ = cτ/a = 1.
- **Domain of dependence.** For any explicit face-neighbour rule it is the octahedron |x|₁ ≤ n a. A light cone of radius
  c n τ fits inside it only if c ≤ a/(√3 τ). Isotropic propagation at one cell per tick is impossible: the Green's
  function is exactly zero along the diagonal at distance c t.
- **Leapfrog, as computed.** At λ = 1 the unstable fraction of the Brillouin zone is **0.787** (predicted 0.5–0.8). The
  worst (corner) mode grows by **9.90 per tick**, i.e. 2.29 e-folds per Planck time.
- **A 26-neighbour rule can run at λ = 1.** The stencil is the product of 1D [¼, ½, ¼] averages, with symbol
  (4/a²)(1 − Πcos²(kᵢa/2)). It is marginally stable: the symbol's maximum is exactly 1, at the Nyquist corner. Its
  dispersion is η = −Σ_{i<j} k̂ᵢ²k̂ⱼ²/12, which is luminal on the axes and −1/36 on the body diagonals
  (`scripts/grid_moore_stencil.py`).
- **No archive simulation has run at the committed ratio.** `phase5_moving_pattern_lorentz.py` uses DT = 0.1·DX,
  `intent_3d_vortex.py` uses dt = 0.1, and Session 680 uses CFL = 0.5. STATUS lists "Mechanism B (CFL violation +
  saturation feedback → limit cycle)" as a candidate. At λ = 1 that would make the corner modes a permanent Planck-scale
  saturated oscillation of the vacuum, which is a different physics from the linear dispersion the LIV analysis assumes.

So the framework owes one of three choices before its dispersion can be tested:
- a 26-neighbour rule (giving η ∈ [−1/36, 0], universal and subluminal);
- a tick shorter than ℓ_Pl/c, which contradicts "Planck time is the tick rate";
- an account of the saturated corner modes.

### 3. A universal coefficient does not cancel (P3: held for scalars; the formula failed as registered for Wilson)
At high energy E ≈ p + m²/2p + η a² p³/2. The p³ term is convex, so a reaction whose final momentum fractions are xᵢ feels
η(1 − Σxᵢ³). Equal coefficients cancel only in 2 → 1 reactions where all constituents keep their momentum fractions, as
in p + γ → Δ for two three-quark states. Exact threshold solves with one dispersion for every species:
- **γ → e⁺e⁻ and p → pγ on S2 (body diagonal):** numerical threshold / analytic = 1.0000000. The analytic forms are
  (3/4)η a²k⁴ = 4m_e² and 3η a²p⁴ = m².
- **Photon decay on S1:** forbidden at every momentum tested, as expected for subluminal.
- **Photopion on S1:** matches the leading-order shift 0.33η p⁴ while that shift is small (ratio 1.000 at 0.07 %). It
  falls below the formula once LIV dominates (0.84, then 0.31), because the optimal split moves
  (`scripts/grid_dispersion_checks2.py`). Use the exact solve, not the formula, beyond O(1) shifts.
- **Wilson fermions:** the analytic η-only threshold is off by ×1.43 / ×0.70, independently of mass. The cause is a
  tree-level O(ma) term, E² = m² + p²(1 + r m a) (the kinetic mass differs from the rest mass). At threshold
  m/(η p_th²) = 0.57 always. So for Wilson fermions the archive's "tree-level universality keeps dim-4 LIV ~(m/E_Pl)²"
  is linear, δc² = m/M_Pl. That is 4×10⁻²³ for electrons, which is harmless but is the wrong power.

So the maintainer's stake mechanism (a), "threshold reactions see only coefficient differences", is refuted for n = 2.

### 4. Does the universal subluminal grid switch off GZK? (post hoc, `scripts/grid_gzk_window.py`)
I solved exact head-on photopion kinematics (soft photon with no LIV, p + γ → p + π⁰, optimal split) and took the minimum
over proton energy (10¹⁸–10²¹ eV) of the threshold photon energy. kT_CMB = 2.35×10⁻⁴ eV. Lorentz-invariant control:
5.136 kT at 10^19.75 eV, matching m_π(2m_p + m_π)/4p.

| Proton/pion coefficients | min ε_th | at 10^19.75 eV |
|---|---|---|
| elementary, η = −1/12 | 81 kT | 662 kT |
| elementary, η = −1/36 | 62 kT | 382 kT |
| elementary, η = −10⁻³ / −10⁻⁴ / −10⁻⁵ / −10⁻⁶ | 27 / 15 / 8.6 / 4.8 kT | 72 / 23 / 8.6 / 5.5 kT |
| partonic (Gagnon–Moore ∫x³f: p 0.546 %, π 1.14 %), grid η = −1/12 / −1/36 | 22 / 18 kT | 49 / 28 kT |

The fraction of CMB photons above X kT is ≈ e^−X(X² + 2X + 2)/2.40: 0.10 at 5 kT and 2×10⁻⁶ at 18 kT. Even in the
partonic reading, the CMB photopion target falls by ~10⁴–10⁵ (head-on estimate; angle-integrated rates not computed).
Photopion on the CMB is effectively off for any |η_p| ≳ 10⁻⁵. So in a universal subluminal grid, protons keep no GZK
cutoff and make almost no cosmogenic photons. The observed suppression near 4×10¹⁹ eV would have to come from the
sources, which is what Auger's mixed-composition fits already prefer.

This also clashes with Maccione et al.'s allowed edge η_p ≳ −10⁻³. They say it sits at the edge of their simulation
field, in "a narrow range where the pion and proton coefficients are both negative and nearly equal". By my kinematics,
photopion is already off there (27 kT). I have not read their figure and do not adjudicate; it is an open check.

### 5. Grid vs published threshold bounds (locators retrieved by a web subagent from the arXiv PDFs; conversions mine)

| Bound (locator) | Convention → η | Assumes | Grid value | Verdict |
|---|---|---|---|---|
| Auger 2022, JCAP 01 (2022) 023, arXiv:2112.06773 §5: δγ,2 > −10⁻⁵⁸ eV⁻² | η_γ ≳ −0.0149 | a subdominant proton component making cosmogenic photons (31 % integral proton fraction above 10^18.75 eV in their fit) | S1 photon −0.083…−0.028 | excluded ×1.9–5.6 (×1.4–4.2 if e± share η: κ = 0.75η). M stencil: only near the body diagonals. **Not self-consistent** (§4) |
| Auger 2022 §6: δhad,2 < 10⁻⁵⁷ eV⁻² at 5σ, δhad > 0 only, scaled from n = 0 | η_had < 0.149 | mixed composition, superluminal only | S2 ≤ 0.056; Wilson ≤ 0.139 (elementary) | **not excluded**. No composition-agnostic subluminal hadron bound exists |
| Maccione, Taylor, Mattingly, Liberati 2009, arXiv:0902.1756 Eq. (22), 99 % CL | −10⁻³ ≲ η_p ≲ 10⁻⁶ | pure protons, elementary p and π | elementary: −0.083…+0.139 | excluded ×28–83 (sub; at the simulated edge) and ×5.6×10⁴–1.4×10⁵ (super) |
| same, partonic proton (quarks Wilson, gluons S1) | — | — | η_p ≈ −4×10⁻⁴ (axis) … +5.8×10⁻⁴ (diagonal) | subluminal directions allowed; superluminal excluded ×~600 |
| Galaverni & Sigl 2008, arXiv:0708.1737 Eq. (7): κ₂ ≳ −2.4×10⁻⁷ | universal: η ≳ −3.2×10⁻⁷ | pure protons, standard photopion | S1 photon | excluded ×10⁵; **not self-consistent** (§4) |
| Gagnon & Moore 2004, hep-ph/0404196: universal partons K₁ | η < 8.3×10⁻⁶, η > −1.9×10⁻⁷ (exponent typo as printed) | pure protons (2004 data) | parton η −0.083…+0.139 | excluded ×10⁴–10⁵ |
| Yang et al. 2025, arXiv:2502.18256: KM3-230213A, Λ₂ > 5×10¹⁹ GeV (90 %) | η_ν < 0.060 (superluminal) | one event | Wilson ν: +0.083 (face), +0.139 (diagonal) | excluded for arrival directions near the grid's diagonals (orientation unknown) |
| LHAASO 2022, arXiv:2106.12350 Table I | η_γ < 3×10⁵ | — | — | irrelevant (PeV photons do not reach n = 2 at Planck) |

Prediction scorecard:
- **P4 held literally.** In the elementary reading the grid is excluded by ≥ 1 order by published bounds. Every one of
  them is pure-proton or sector-isolating.
- **P5 split.**
  - Subluminal: S* = 10⁻³/|η| ≈ 0.012–0.036, inside the predicted [10⁻³, 10⁻¹].
  - Superluminal: S* ≈ 10⁻⁶/η ≈ 7×10⁻⁶–1.8×10⁻⁵, outside it, so failed.
- **P6 held, but conditionally.** The photon sector is the only composition-agnostic bound that bites. It relies on proton
  photopion, which the grid removes.

## Implications for the Site
- **The /for-researchers distinct-content row "Below reach" is wrong for threshold kinematics.**
  - The ~10⁷ figure is the time-of-flight gap only.
  - Threshold bounds reach the grid's natural η ~ 10⁻² today.
  - The honest label: **at reach; excluded only under pure-proton composition or with one sector held Lorentz-invariant;
    the self-consistent universal-coefficient propagation is unrun** (descriptive badge `untested`, not "below reach").
- **The row's clause "a nearest-neighbour lattice is subluminal for every field, which partly cancels in reactions" is
  wrong twice.**
  - The sign depends on the time step and the species' stencil (Wilson fermions are superluminal off-axis).
  - A universal n = 2 coefficient does not cancel.
- **terms.ts (Lorentz invariance entry).** It says the dim ≥ 5 channel is "structurally unreachable by three independent
  locks". That holds for time-of-flight only. The threshold face is reachable.
- **A new obligation for FUNDAMENTALS §1.** Choose the neighbourhood: face-neighbours at one cell per tick cannot be stable
  or isotropic.

## Action: Maintainer
- `/for-researchers` distinct-content table, row "Dim ≥ 5 dispersion (quadratic only)":
  - Replace "Below reach, not untested … Queued for the explorer" with: "At reach by threshold kinematics. The grid's
    natural coefficient (|η| ≈ 0.03–0.14 in E² = p² + m² + η p⁴/M_Pl²) sits at the composition-agnostic Auger 2022 bounds
    (photon ≳ −0.015; hadron < 0.15, superluminal only). It is excluded by 1.5–5 orders only under pure-proton composition
    (Maccione et al. 2009; Galaverni & Sigl 2008). Those photon bounds assume standard cosmogenic photon production, which
    a universal subluminal grid switches off. A universal coefficient does not cancel in reactions (only n = 0 does). The
    sign depends on the time step and on each species' stencil."
  - Discriminator cell: "Threshold bounds at the natural value; the self-consistent calculation is unrun."
- Same page, §dim≥5 prose and line ~850 "Net: the time-of-flight face is symmetry-protected and unreachable": keep it for
  time-of-flight, and add that the threshold face is at reach.
- `src/lib/terms.ts` Lorentz-invariance entry: "structurally unreachable by three independent locks" → "unreachable by
  time-of-flight; at reach by threshold kinematics (explorer 2026-11-22)".
- Back-annotate PREDICTIONS B7 (iii) with:
  - the table in §5;
  - the λ = 1 instability (a FUNDAMENTALS §1 neighbourhood decision gates on the project lead);
  - the Wilson O(ma) correction to "(m/E_Pl)²".
- Candidate stake (speculative, untested) if a 26-neighbour rule is committed: η vanishes on the six grid axes. With a
  partonic proton (|η|·0.0055 < 10⁻⁵ ⇒ |η| < 1.8×10⁻³ ⇒ θ ≲ 8°), GZK photopion would operate only inside six ~8° cones
  around the grid axes. That gives a cubic (ℓ = 4) pattern in where the UHECR spectrum shows propagation losses. It only
  bites if some flux above 4×10¹⁹ eV is GZK-limited rather than source-limited.

## Open Threads
- The self-consistent universal-LIV UHECR propagation (CRPropa-type), with every species carrying its stencil's
  coefficient, nuclei at δ_A = δ_N/A², and photodisintegration cost ∝ 3/A. It is the one calculation that turns
  "conditional" into a verdict. For nitrogen at 5×10¹⁹ eV the LIV term is O(1) of the GDR threshold quantity (my estimate
  ~1.3 vs 0.4 GeV², not run).
- Maccione's −10⁻³ edge vs my 27 kT window closure at η_p = −10⁻³ (read their figure).
- Saturated corner modes at λ = 1: does Mechanism B's limit cycle fill the vacuum with Planck-frequency oscillation, and
  what does that do to the low-k dispersion?
- Does the Auger 2022 photon bound assume δ_e = 0? (It changes the 0.75 factor.)
- Composite coefficient for "entity = recurring pattern" with no SM partons: S = Σx³ over the pattern's quanta is
  undefined until the framework says what a proton is made of on the grid.
