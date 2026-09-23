# Finding: A density-keyed C(ρ) is a G that changes as the Sun moves. Lunar laser ranging excludes it at every smoothing length the galaxy fits need

## Origin
Topic `ambient-density-keying-as-environmental-G-stellar-evolution-bounds.md` (maintainer 2026-09-23). The topic asked
for a *static* comparison: G_eff in GC cores vs the field, bounded by stellar evolution. I turned it into a *time*
comparison. That is the sharper instrument, and it makes the static route moot (see below).

Pre-registered before any script existed: `explorer/scripts/density_keyed_gdot_solar_motion_PREREG.md`, commit
`80b8c9c`. I fetched the LLR number only after that commit. Script: `explorer/scripts/density_keyed_gdot_solar_motion.py`
(+ `_output.txt`).

## Summary
TEST-02's density-keyed branch gives γ_g ≡ 1 because the boost 1/C(ρ_ambient) is common to everything in one volume.
Constant in space is not constant in time, though, once the volume moves. The Sun moves through the Galactic density
field (U, W peculiar motion) and past individual stars (α Cen is closing at 22 km/s). So an ambient-keyed law predicts
Ġ/G = −(∂lnC/∂lnρ_s)·(dlnρ_s/dt) *today*. Lunar laser ranging measures that at (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹ (Hofmann & Müller
2018).

The kinematics alone give dlnρ_s/dt ≈ 2–5×10⁻⁹ yr⁻¹ from the smooth disc, and ≈ 10⁻⁵ yr⁻¹ from α Cen at ℓ = 1 pc. So any
law with |∂lnC/∂lnρ| ≳ 10⁻⁴ at the local density fails. At a pc-scale smoothing, **68/74 grid laws are excluded, each by
10⁴–10⁷× a bound that was already loosened 10× from LLR.** All 8 TEST-02 "Newtonian-null" windows and both Refracted
Gravity calibrations are among them. The 6 survivors are all γ = 2 with ρ_c ≤ 10⁻³ M☉/pc³. Those laws are Newtonian
locally to ≤ 10⁻⁸, which leaves them nothing to say at solar-neighbourhood density.

This is a second, **SPARC-independent** kill of the density-keyed reading, which is what the topic hoped for. It does
**not** touch the acceleration-keyed C_a that TEST-09/10 and the γ ≈ 0.489 fits use.

## Research Notes

### The reading (tagged, per the L2/L3/D memory)
- **Force law.** L2, ∇·[C∇Φ] = 4πGρ. For smoothing ℓ ≫ 30 AU, C is uniform across the Solar System. Then Φ = Φ_N/C(t)
  quasi-statically, and G_eff = G/C(t) is what LLR sees as Ġ. Uniform C has ∇C = 0, so an L3 striction term (∝ ∇C)
  adds nothing. That is an assumption about L3, not a derivation.
- **Smoothing.** ρ_s is a Gaussian kernel of width ℓ centred on Earth–Moon, over baryons only (no DM, per the
  framework). It has three parts: the Sun (constant), a smooth disc (Sun moves through it), and discrete nearby stars
  (they move).
- **Why ℓ matters and what fixes it.** The 2026-09-15 interplanetary result forces ℓ ≳ 30 AU. Smooth stellar profiles
  in the galaxy fits need ℓ ≳ 1 pc. The GC window needs ℓ ≲ 10 pc (explorer 09-15). **The live window is ℓ ∈ [1, 10] pc.**
- **Laws.** The 09-15 framework grid (floored, f ∈ {0.089, 0.315}, γ ∈ {0.489, 2}, 16 ρ_c from 3.2×10⁻⁴ to the GC knee
  0.161). Added: the TEST-02 card's own "0.05–0.4 %" windows, and RG Eq. 4.1 at both of its calibrations (Cesare+2022
  elliptical; DiskMass disc).

### Kinematic rate, independent of the law (from `_output.txt`)
| ℓ (pc) | ρ_s (M☉/pc³) | smooth disc, Local-Bubble brackets | named stars | Poisson rms |
|---|---|---|---|---|
| 0.1 | 63.6 (Sun) | 1.4–3.4×10⁻¹² | ~0 | — |
| 1 | 0.147 | 0.8–2.0×10⁻⁹ | **1.6×10⁻⁵** (α Cen 1.1×10⁻⁵, Barnard 2.7×10⁻⁶) | 5.6×10⁻⁶ |
| 3 | 0.086 | 1.9–4.8×10⁻⁹ | 1.3×10⁻⁶ | 6.17×10⁻⁷ |
| 10 | 0.084 | 2.0–5.0×10⁻⁹ | (list incomplete) | 3.1×10⁻⁸ |
| 100 | 0.076 | 0.1–4.1×10⁻⁹ | — | 1.1×10⁻¹⁰ |

Units yr⁻¹. The smooth term has two parts with opposite signs. The Sun moving inward (U = 11.1 km/s, R_d = 2.6 kpc)
gives +4.4×10⁻⁹. Moving up (W = 7.25 km/s at z = +21 pc) gives a negative term. If a full-density gas layer with
h = 75 pc sits at the Sun, the two can cancel exactly. So the pre-registered rule counts the smooth term as deciding
nothing (set to 0) whenever the brackets straddle zero. It does at every ℓ < 300 pc. **Every exclusion below therefore
rests on the discrete-star term alone.** The table's physical column assumes the Sun is in the Local Bubble, where
there is no dense gas at ℓ < 100 pc. On that reading the smooth term alone is 2×10⁻⁹ at ℓ = 10 pc, and it still
excludes 48/64 grid laws, 8/8 TEST-02 windows and 1/2 RG laws. It is not pre-registered and is reported as a
cross-check.

### Verdicts (bound |Ġ/G| < 10⁻¹² yr⁻¹, 13× looser than LLR 1σ)
- **ℓ = 1 pc: 68/74 excluded.** Grid 58/64, TEST-02 windows 8/8, RG 2/2. ℓ = 10 pc: 62/74. ℓ = 100 pc: 46/74.
- The pass/fail map across ℓ has the same shape for every excluded law: it passes at ℓ ≤ 0.1–0.3 pc and fails from
  there to at least 30 pc. At small ℓ the Sun's own mass saturates C, which is why those pass. A few laws re-open a hole
  at ℓ = 100 pc. That is an artefact of the conservative smooth = 0 rule where the Poisson term has become small, not a
  physical window. A 100 pc smoothing would also erase the GC and disc-scale-height structure the fits depend on.
- **Magnitudes at ℓ = 1 pc.** γ = 0.489 grid: Ġ/G = 5×10⁻⁸ to 8×10⁻⁶ yr⁻¹. TEST-02 "Newtonian-null" windows (local
  C = 0.9966–0.9999): 7×10⁻⁹ to 6×10⁻⁸. RG elliptical: 8.7×10⁻⁷. RG disc (local ε = 1.0000 to 4 dp): 7.8×10⁻¹⁰, still
  10⁴× LLR.
- **Survivors.** γ = 2 with ρ_c ∈ {3.2, 5.6, 9.9}×10⁻⁴, at both f. ∂lnC/∂lnρ is 10⁻¹⁰ to 10⁻⁸. The ρ_c = 9.9×10⁻⁴ member
  gives 2.4×10⁻¹³ at ℓ = 1 pc. That passes the loosened bound but sits about 3σ from LLR's central value.

### Pre-registered predictions
| # | Prediction | Outcome |
|---|---|---|
| P1 | ℓ = 1 pc: every point with local C < 0.999 excluded, by ≥ 10² | **HELD**, by ≥ 5×10⁴ (smallest: γ = 2, ρ_c = 0.0295, C = 0.9989, Ġ/G = 5.8×10⁻⁸) |
| P2 | Discrete term > smooth term at ℓ ≤ 3 pc | **HELD** (10³–10⁴×) |
| P3 | TEST-02 windows excluded at ℓ ≥ 1 pc | **HELD on 1–30 pc; FAILED at 100 pc** for 5/8 (smooth = 0 rule + small Poisson). Excluded across the whole live window [1, 10] pc |
| P4 | Survivors at ℓ ≥ 1 pc are only locally saturated γ = 2 low-ρ_c laws | **HELD** (6/6) |
| P5 | Each law has a small-ℓ survival region with upper edge < 1 pc | **HELD** (edge 0.1–0.3 pc). Kernel caveat below |

4/5 held, 1 partly failed. The failure has a clean cause, and it lies outside the live ℓ window.

### Escapes, named
1. **A relaxation time τ for C.** A first-order lag does not reduce a steady drift rate; it only delays it. The disc
   term is steady on Myr scales, so τ must exceed the ~83 Myr vertical-oscillation period to average it away. At that
   point C is keyed on the *orbit-averaged* density, which is a different law and has to be stated. For the discrete
   term (α Cen crossing timescale ~ 10⁴–10⁵ yr), τ ≳ 10⁵ yr is enough to suppress it, but the smooth term still binds
   (Local-Bubble reading).
2. **Kernel shape.** The small-ℓ failures near 0.3 pc come from Gaussian tails reaching α Cen. A compact-support
   kernel would move the edge. It cannot rescue ℓ ≥ 1 pc, where α Cen is inside any kernel.
3. **C a field with its own dynamics, not a function of ρ.** This is the route Refracted Gravity's own authors took.
   Covariant RG (Sanna, Matsakos & Diaferio 2023) replaces ε(ρ) with a scalar φ, G_eff = G/φ, fixed by a field equation.
   As far as I can find in that paper, it does not discuss Ġ or LLR. The Ġ result says the *algebraic* ε(ρ) of original
   RG (the version Cesare+2020/2022 fitted) is excluded locally unless ℓ < 0.3 pc, a range where its galaxy profiles
   would not be smooth.
4. **Saturated locally.** That is the survivor set. Such laws are exactly Newtonian in the solar neighbourhood, so they
   carry no local prediction. They are also on the γ = 2 branch the SPARC fits abandoned.

### Why the static stellar-evolution route (the topic's own ask) is dominated
The static contrast between the field and a GC core (where C → 1) is G_core/G_field = C_local. For the γ = 0.489 grid
that is 0.53–0.997: a 0.3–47 % weaker G in GC cores, and L ∝ G⁷ makes that large. But every law with a static contrast
above ~10⁻⁴ is already excluded by Ġ at 10⁴× or more. The survivors have contrast ≤ 10⁻⁸, below anything stellar
populations can see. A GC-age analysis would therefore add nothing the Ġ bound hasn't already excluded. I did not run it.

### A correction in this track's own record
`findings/covariant-00-component-sign-lock-dies-desi-nogo-hardens.md` (§ caveats) waved Ġ/G off because "LLR probes
*local* C (solar-system densities, C ≈ 1, Ċ ≈ 0)". That holds only for ℓ ≲ 0.1 pc. At the ℓ ≥ 1 pc the galaxy fits need,
local C on the grid is 0.37–0.9999 and Ċ ≠ 0. The line was a reading-only dismissal, and executing a computation
overturned it. It is an instance for the correction-trail topic (below).

## Implications for the Site
- **TEST-02 card (/tier-1-existing).** It currently says the ρ-branch "0.05–0.4 %" is "practically untestable". That
  is true only of the static amplitude. The same windows predict Ġ/G = 7×10⁻⁹ to 6×10⁻⁸ yr⁻¹ at ℓ = 1 pc, which is
  10⁵× above LLR. **"Untestable" becomes "excluded by an existing measurement at every smoothing length in [1, 10] pc."**
  Scope it to the density branch. This is not a seventh refutation: the density branch already fails SPARC (ΔBIC +2843),
  so this is a second, independent root for an existing kill.
- **The γ_g ≡ 1 "best-argued card".** The cancellation argument is correct, and it is the reason the time derivative
  is the right probe. A common factor cancels in a ratio taken at one instant; it does not cancel in a rate. This
  belongs next to the "check whether the statistic cancels the effect" lesson: when the effect cancels, find the
  observable where it doesn't.
- **/coherence-function "which C" table.** Add a row: C_ρ at pc smoothing → Ġ/G bound, excluded unless locally
  saturated.

## Action: Maintainer
- **P1** /tier-1-existing TEST-02, density branch: add "Ġ/G ≈ 10⁻⁸ yr⁻¹ predicted vs (7.1 ± 7.6)×10⁻¹⁴ measured (LLR,
  Hofmann & Müller 2018) at smoothing ℓ ∈ [1, 10] pc. Survivors are locally Newtonian to 10⁻⁸." Link this finding and
  PREREG `80b8c9c`. Count unchanged (second root for the C_ρ kill); dp decides whether it becomes a ledger row.
- **P2** Back-annotate PREDICTIONS.md under the 2026-09-15 SCOPE CONDITION block. The smoothing length now has a Ġ
  bound from *above* as well: ℓ ≲ 0.1–0.3 pc for any unsaturated law, against ℓ ≳ 1 pc from the galaxy fits.
  **Unsaturated density-keyed laws have no allowed ℓ.**
- **P2** /for-researchers or the RG prior-art note: original (algebraic) RG has the same Ġ problem at its published
  calibrations. Covariant RG is where RG's authors went. State this as "we computed", not as an RG-literature claim.

## Open Threads
- **Does covariant RG pass LLR?** φ obeys a field equation sourced by the galactic mass distribution, so the Sun's
  motion still changes φ, but through a potential-like integral rather than the local density. Estimate: dlnφ/dt ~
  (v·∇Φ_gal)/c²-scale? If so, that is ~10⁻¹⁶ yr⁻¹ and it passes. Worth a check, because "C must be a potential-like
  field, not a density function" would be a structural lesson for the framework's own C.
- **Replace the hand list with Gaia DR3 (≤ 20 pc, with radial velocities).** The verdict doesn't need it (margins of
  10⁴×), but the ℓ = 3–10 pc Poisson term would become a real number.
- **The pattern.** Laws that cancel in static same-epoch ratios (TEST-02) leak into time derivatives. Which other
  "identically null" tests have a time-derivative twin? A candidate: the Ω_m(z) floor on C_a, where the floor tracking
  Ω_m(z) implies a secular drift of a₀-scale physics today.
