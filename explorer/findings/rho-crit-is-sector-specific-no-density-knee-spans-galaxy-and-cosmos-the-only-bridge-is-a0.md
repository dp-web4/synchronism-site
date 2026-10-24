# Finding: ρ_crit is not one scale. No density knee spans galaxies and cosmology; the only bridge on file is a₀ = cH₀/2π, an acceleration

## Origin
Topic `rho-crit-one-symbol-three-scalings-two-knees.md` (maintainer 2026-10-24, from a graduate-persona observation).
Script: `findings/scripts/rho_crit_knee_inventory.py`, output `…_output.txt` (Planck h = 0.674, Ω_m = 0.315).
This is a calculation, not a pre-registered test. Every number below is arithmetic on knees the site already prints.

## Summary
The framework uses **at least six objects called ρ_crit**. They span **10.4 orders of magnitude** at V = 200 km/s,
and the topic's "~8 orders" understates the gap. The cosmological knee is ρ_Λ/2 = **4.3×10⁻⁸ M☉/pc³**, not ~10⁻⁵.

Both one-knee identifications fail by more than six orders of magnitude:
- **Cosmic knee in galaxies:** C = 1 − O(10⁻⁵) at every disc density, so there is no boost at all (Newtonian).
- **Galactic knee in Friedmann:** ρ_DE comes out 3.7×10⁶ (measured knee) to 2.8×10¹⁰ (0.029·V²) times ρ_Λ. That makes
  H₀ wrong by 10³–10⁵.

So "one equation" is one **functional form with a sector-specific knee**, and the knee is a calibration constant in every
sector. In the cosmological sector it is Λ renamed (ρ_crit = ρ_Λ/2).

The only cross-sector constant on file is MOND's a₀ ≈ cH₀/2π. In density language it gives
ρ_knee(V) = (c/2πV)²·(2/3)·ρ_c0. That is V-dependent (∝ V⁻²) and carries a factor (c/V)² ≈ 10⁵ at 200 km/s.
It is therefore an **acceleration** identification, not a density one. This is the same conclusion the ledger already
reached from the galaxy side: the surviving branch is acceleration-keyed.

## Research Notes

### The inventory (one unit: M☉/pc³; last column log₁₀ of knee / cosmic knee, at V = 50 / 100 / 200 / 300 km/s)
| # | Object | Value | V-scaling | Provenance | Sector | log₁₀(knee/ρ_c,cos) |
|---|---|---|---|---|---|---|
| 1 | A·V², A = 0.029 | 72.5 / 290 / 1160 / 2610 | V⁺² | **asserted**; the number was derived for V^0.5 (S53/S65, R₀ = 0.07 kpc/(km/s)^0.75), and its stated formula gives 4.6×10⁻⁵ | galaxy (site-wide, `equations.ts:criticalDensity`, plotter) | 9.2 / 9.8 / 10.4 / 10.8 |
| 2 | A·V², A = 4.6×10⁻⁵ | 0.12 / 0.46 / 1.8 / 4.1 | V⁺² | formula-consistent (R₀ = 8 kpc, β_J = 1); never adopted | galaxy (untested branch) | 6.4 / 7.0 / 7.6 / 8.0 |
| 3 | A·V^0.5 (S53) | per-galaxy | V^0.5 | the computation 0.028 came from | galaxy (archive only) | — |
| 4 | Jeans-construction knee, measured | 0.161 median | V^(−0.16±0.19) (blind) | measured on SPARC (explorer 08-27) | galaxy | 6.6 |
| 5 | a₀-tracking knee a₀²/(4πG V²) | 0.10 / 0.025 / 6.3×10⁻³ / 2.8×10⁻³ | V⁻² | what MOND-matching requires (/gamma-regimes, /parameter-derivations) | galaxy (required, not asserted) | 6.4 / 5.8 / 5.2 / 4.8 |
| 6 | cosmological knee | **4.3×10⁻⁸** (γ = ½); 4.2×10⁻⁸ (γ = 0.487) | none | calibrated so that C₀ = Ω_m, which forces ρ_crit = ρ_Λ/2 | dark energy | 0 |
| — | cluster exclusion window | 0.1–300 (γ = 0.489); 0.5–100 (γ = 2) | — | excluded, /honest-assessment cluster row | clusters | — |
| — | Refracted Gravity knees (not this framework's) | 7.4×10⁻⁴, 4.3×10⁻³ (discs); 0.0083 (ellipticals) | — | Cesare+2022 calibrations | comparison class | — |
| — | ρ_c of the 2026-06-01 one-scale theorem | 10⁻⁴–10⁻⁶ × galaxy value | — | Coma reverse solve | clusters | — |

Not in the table: /coherence-explorer's slider ρ_crit (dimensionless, 0.01–10, a display scale). The consciousness and
chemistry pages do not use ρ_crit as a density.

### Test 1: the cosmic knee in galaxies
With ρ_crit = 4.3×10⁻⁸, disc midplane densities of 10⁻³–1 M☉/pc³ sit at x = 2×10⁴–2×10⁷:
- γ = ½: boost 1/C − 1 = 9×10⁻⁵ … 9×10⁻⁸;
- γ = 2: C = 1 to machine precision.

C reaches 0.5 only below 9×10⁻⁸ M☉/pc³, roughly twice the cosmic mean matter density. That density occurs in voids,
not in galaxies. Every SPARC rotation curve would be Newtonian. **Killed** (it is the Newtonian failure).

### Test 2: a galactic knee in the Friedmann sector
The site's own construction gives late-time ρ_DE → ρ_crit/γ:

| knee | ρ_DE/ρ_Λ | H/H_ΛCDM | C(ρ_m0) (must be Ω_m = 0.315) |
|---|---|---|---|
| 0.161 (measured) | 3.7×10⁶ | 1.6×10³ | 1.2×10⁻⁷ |
| 0.029·200² | 2.7×10¹⁰ | 1.4×10⁵ | 1.7×10⁻¹¹ |
| 4.6×10⁻⁵·200² | 4.3×10⁷ | 5.4×10³ | 1.0×10⁻⁸ |
| a₀-tracking at 200 km/s | 1.5×10⁵ | 3.2×10² | 3.1×10⁻⁶ |

**Killed** in every row. The mean matter density reaches the measured galactic knee only at 1 + z ≈ 160, and the A = 0.029
knee at 1 + z ≈ 3,100. So a single knee would place the "dark-energy transition" before recombination.

The floored galaxy law (C ≥ Ω_m) does not rescue this. It makes the cosmic-mean C sit on the floor by fiat: Ω_m is
inserted, not produced. Then C is constant at z ≲ 150 and there is no late-time dynamics.

### The only bridge: a₀ ≈ cH₀/2π
Substituting MOND's coincidence into knee 5 gives ρ_knee(V) = (c/2πV)²·H₀²/(4πG) = (c/2πV)²·(2/3)·ρ_c0. At
200 km/s that is 4.8×10⁻³ M☉/pc³, 10^5.0 above the cosmic knee. A cosmological quantity does set the galactic
transition, but only through a velocity ratio (c/V)². That ratio is a property of the system, not a constant. A density
knee that tracks it would need ρ_crit ∝ V⁻²:
- the framework asserts V⁺²;
- SPARC's Jeans construction is V-blind (V⁻² excluded at ≈ 9σ, from −0.16 ± 0.19).

Neither one carries the bridge. An acceleration knee does, and that is MOND's (Milgrom 1983). So on this axis the
framework can claim nothing distinct.

**Side observation, not pursued.** Refracted Gravity's calibrated disc knees (7.4×10⁻⁴, 4.3×10⁻³) bracket knee 5 at
V ≈ 200–500 km/s. This fits the obvious story: a density-keyed law that reproduces MOND on typical discs must put its
knee where a = a₀ for those discs. It may explain why RG's calibrations look like a₀ in density units. It is a reading,
not a test.

### Correction to the archive
`Research/proposals/rho_crit_derivation_calibration_vs_prediction.md:89` writes
ρ_crit^galactic ~ ρ_crit^cosmological × (V_flat/c_H)².
- If c_H is c or a Hubble-flow velocity ≫ V, the ratio is **inverted**: it puts the galactic knee ~10⁻⁶–10⁻¹² below
  the cosmic one.
- The dimensional result (from a₀ = cH₀/2π) is × (c/2πV)², about 10⁵ **above**.
- The proposal's conclusion (dimensional analysis, not a derivation) stands. The formula does not.

### Relation to prior work
- **Not new as a structural point.** The 2026-06-01 one-scale-insufficiency theorem (galaxies vs Coma) already showed
  that a single ρ_crit cannot serve two gravitational sectors. This finding extends it to the cosmological sector and
  puts all the knees in one unit.
- **New:**
  - the cosmological knee value (ρ_Λ/2, 4.3×10⁻⁸) next to the galactic ones;
  - the two-sided kill;
  - the identification of the only bridge as an acceleration;
  - the inverted archive ratio.
- **Compatible with the 10-23 result** that γ is identified only jointly with ρ_crit. Even within the galaxy sector,
  "the knee" is not separately identified. Knee 4 is a Jeans construction, not a fitted knee.

## Implications for the Site
- **The sentence the topic asked for:** *"ρ_crit is not one scale. The framework's galactic knees (γ-independent: 0.16–10³ M☉/pc³ at
  V = 200 km/s, knees 1 and 4, by construction) and its cosmological knee (ρ_Λ/2 ≈ 4×10⁻⁸ M☉/pc³, Λ renamed) differ (at either γ) by 6.6–10.4 orders. Using
  either in the other sector fails by more than six orders. The one cross-sector link, a₀ ≈ cH₀/2π, is an acceleration
  coincidence from MOND, not a density knee. 'One equation' therefore means one functional form, calibrated separately
  per sector."*
- This is a **scoped negative**, not a demotion. No badge on file claimed a unified knee. The landing question "what if
  one equation described it all?" is answered here for ρ_crit: not with one parameter set.
- The open question that survives: is there a principled per-sector rule that *predicts* each knee (for example, the
  knee sits where the sector's characteristic acceleration equals a₀)? If so, the unifying object is a₀, not ρ_crit.
  Stated as a test: a rule that maps (sector → knee) without fitting, and lands both 4×10⁻⁸ (cosmos) and the SPARC knee.
  Nobody has proposed one. Untested, not refuted.

## Action: Maintainer
- **P2** /parameter-derivations (near l.214 "ρ_crit ∝ a₀²/(GV²)") and /gamma-regimes: add the inventory table (or link
  it) plus the sentence above. Put the cosmological knee value ρ_Λ/2 = 4.3×10⁻⁸ M☉/pc³ on the same page as 0.029·V².
- **P2** /dark-energy notation warning (l.88): it already says the knee "equals ρ_Λ/2". Add the number in M☉/pc³ and
  "≈ 10^6.6 below the galactic Jeans knee; not the same parameter."
- **P3** glossary entry for ρ_crit: "sector-specific knee; see inventory".
- **Back-annotate** `rho_crit_derivation_calibration_vs_prediction.md:89` with the inverted ratio and the correct
  (c/2πV)²·(2/3)ρ_c0. Back-annotate `one_scale_insufficiency_theorem_cluster_gap.md` with a cosmological-sector
  corollary.
- **Lint (optional):** a bare "ρ_crit ~ 10⁻⁵" or "eight orders" near "cosmolog" should fail. The value is 4×10⁻⁸ and the
  gap is 6.6–10.4 orders.

## Open Threads
- **The per-sector rule question above.** The cheap version: does the chemistry/condensed-matter sector have a knee
  in any variable, and does it sit at a characteristic "a₀-like" scale? Probably no shared variable exists. Worth one
  grep before closing.
- RG knee vs a₀²/(4πG V²) for RG's own calibration sample: is RG's knee a₀ in disguise? It is computable from
  Cesare+2022's sample velocities.
- The shuffled-V control on S483–495 (queued topic) is still open. Note for whoever runs it: S483's target is a MOND
  *offset*, log(g_obs/g_MOND), which contains V directly. The 10-23 prediction "V's marginal share ≲ 0.01 dex" was
  written for L-built mass targets. Read the registration against S483's actual y before executing (memory:
  read-the-registration-text).
