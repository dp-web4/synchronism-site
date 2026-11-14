# Finding: At the archive's 0.028·V^0.5 knee the radial striction is percent-level and never outward-dominant, but the vertical striction is of order vertical gravity and compresses the disc

## Origin
Queue topic `striction-at-the-archive-v05-knee-where-45-of-122-discs-cross.md` (maintainer 2026-11-14). This was item 2b
of the 11-13 knee-crossing finding, the one quantity not yet computed. PREREG `f9b5293`
(`scripts/l3_striction_archive_v05_knee_PREREG.md`). The vertical half is post-hoc.

## Summary
- **Radial.** The site's "radial striction ~10⁻⁵ of gravity" is the median at the units-hybrid 0.029·V² knee. At the
  archive's own knee, 0.028·V^0.5, the midplane radial striction is 5.4×10⁻³ of gravity at the median for γ = 0.489,
  and 1.6×10⁻² for γ = 2. The maxima are 0.26 and 0.51. In 3,035 scored points it never pushes outward harder than
  gravity. First-order L3 lowers χ²/N by 7.6% and 9.5%, mostly through bulge-dominated discs. The density law stays far
  from MOND (173 and 123 against 21.25), so the L2 verdicts carry over. There is no radial disc-stability problem.
- **Vertical (post-hoc).** On the same solves, the vertical striction is median 9% of vertical gravity for γ = 0.489,
  and 27% for γ = 2. It exceeds half of gravity somewhere in 40 and 110 of 153 discs, with maxima of 1.9× and 13×. It
  points the same way as gravity in 99% of the |ratio|-weighted cells, so it compresses rather than puffs. Only 3 and 16
  cells, out of 377,186, are anti-restoring, all in UGC 6787 and UGC 5253.
- **Consequence.** The radial first-order result is computed on a disc whose vertical structure L3 would change by an
  O(1) factor. That disc has not been solved, so "the L2 verdicts stand under L3" holds only at fixed disc thickness.

## Research Notes
Machinery: `scripts/l3_density_keyed_first_order_sparc.py` (10-13), unchanged.
- 153 SPARC discs, the finite-volume L2 solve of ∇·[C(ρ)∇Φ] = 4πGρ, Bershady scale heights, floor Ω_m = 0.315.
- Υ_d profiled over {0.3, 0.5, 0.7}.
- Striction potential Ψ = C′(ρ)|∇Φ|²/8πG. Midplane radial force ∂Ψ/∂R.
- The matter is not re-equilibrated.

Scripts: `scripts/l3_striction_archive_v05_knee.py`, `scripts/l3_vertical_striction_archive_v05_posthoc.py`,
`scripts/l3_vertical_striction_sign_posthoc.py` (outputs alongside).

**Identity control.** The 0.029·V² row reproduces 10-13 exactly: L2 249.64, L3 249.54, |g_s/g| median 6.53×10⁻⁶,
90th percentile 2.51×10⁻⁴, max 9.56×10⁻².

| knee, γ | L2 χ²/N | L3 χ²/N | radial \|g_s/g\| med / 90% / 99% / max | points > 0.5 | outward > gravity | vertical \|g_zs/g_z\| med / 90% / max | discs with vertical > 0.5 | compressive (weighted) |
|---|---|---|---|---|---|---|---|---|
| 0.028·V^0.5, γ = 2 (preprint) | 136.39 | 123.44 (−9.5%) | 1.6e-2 / 7.6e-2 / 0.24 / 0.51 | 1/3035 | 0 | 0.27 / 0.98 / 13.1 | 110/153 | 0.993 |
| 0.028·V^0.5, γ = 0.489 | 187.59 | 173.39 (−7.6%) | 5.4e-3 / 4.1e-2 / 0.11 / 0.26 | 0 | 0 | 0.093 / 0.31 / 1.9 | 40/153 | 0.986 |
| 0.029·V² (units hybrid, control) | 249.64 | 249.54 | 6.5e-6 / 2.5e-4 / 5.4e-3 / 0.096 | 0 | 0 | 1.1e-4 / 6.3e-3 / 0.18 | 0/153 | 0.974 |
| Jeans 0.161, γ = 0.489 (10-13 knee) | — | — | (10-13: 8.3e-3 / 4.4e-2 / max 0.36) | 0 | 0 | 0.12 / 0.46 / 4.8 | 58/153 | — |

- **Which discs carry the χ² change.** The same bulge-dominated galaxies as at the Jeans knee: UGC 6787, UGC 2916,
  NGC 2903, UGC 5253 and NGC 5055. The knee is crossed in bulges and inner discs (x_max up to 154).
- **How many discs cross.** With Bershady heights and the solved density, 63 of 153 cross the knee somewhere on the
  midplane. The 11-13 count, 45 of 122, used ρ = Σ/2h at h = 0.3 kpc on scored points. Different density definitions
  give different counts. Both are about a third.
- **Why the vertical term is large when the radial one is small.** Ψ carries |∇Φ|², which at small z is dominated by
  the radial field. C′(ρ) grows as ρ falls with height. So ∂Ψ/∂z ≈ (∂C′/∂z)·g_R²/8πG, and that is compared with a
  vertical gravity that vanishes at the midplane. The radial derivative of the same Ψ is small because C′ changes
  slowly with R. In 08-26 language: the vertical striction is the one that bites.

**Prediction scorecard** (S1–S4 registered; vertical unregistered):

| # | prediction | result |
|---|---|---|
| S1 | γ = 0.489: median 1e-3–1e-2, 90th percentile ≤ 5e-2, max < 0.5, none outward | **held** (5.4e-3, 4.1e-2, 0.26, 0) |
| S2 | γ = 2: max 0.2–1.0, at most 20 points > 0.5, at most 5 outward | **held** (0.51, 1, 0) |
| S3 | χ² change within ±10%, carried by bulge-dominated galaxies | **held** (−7.6%, −9.5%, at the edge) |
| S4 | the site's 10⁻⁵ is off by ≥ 100× at the median; no χ²/N within 2× of MOND | **held** (×830 and ×2,400; 123 vs 21) |

Registered kill reading (≥ 1 disc with outward radial striction > gravity): **not met**. The radial disc-stability
problem does not exist at the archive knee. That is the opposite of the GC knee shells (10-08, 1.7–13×).

## Implications for the Site
- `/coherence-function` (the striction item) and `/for-researchers` (the L3 paragraph) give "~10⁻⁵" as the striction
  "at the framework's own knee". That is the units-hybrid median. The archive knee is 830–2,400× larger, though still
  small radially.
- The 11-14 maintainer text "not computed at V^0.5" can now be replaced.
- The verdicts survive: the density law still loses badly under first-order L3. But the honest qualifier is "at fixed
  disc thickness". The vertical term is order unity and has not been solved self-consistently.

## Action: Maintainer
Replace the striction sentence on `/coherence-function` and `/for-researchers` with roughly:

> "At the units-hybrid 0.029·V² knee the radial striction is ~10⁻⁵ of gravity. At the archive's own 0.028·V^0.5 knee it
> is 0.5–1.6% at the median (at most 26–51%), never outward-dominant, and first-order L3 improves χ² by 8–10% without
> approaching MOND (χ²/N 123–173 against 21). The vertical striction is not small: it is 9–27% of vertical gravity at
> the median, compressive, and above half of gravity somewhere in 40–110 of 153 discs. These verdicts therefore hold at
> fixed disc thickness; a self-consistent vertical equilibrium has not been solved (explorer 2026-11-14)."

## Open Threads
- **The self-consistent vertical disc.** This has now been carried three times (08-26, 10-13, today). A compressive
  striction of order gravity thins the disc. That raises ρ and C′, which feeds back. Does it converge, or collapse?
  Solving one isothermal gas layer in Φ + Ψ, column by column, for one disc would tell you if the fixed point exists.
  UGC 2916 at γ = 2 is a natural first case.
- **Does compression move the fit?** Thinner discs at fixed Σ have higher ρ, so more points cross the knee. That could
  move χ² in either direction. Until it is solved, "L3 changes χ² by 8–10%" is a fixed-thickness number.
- **Vertical striction against observed scale heights.** Edge-on discs have measured h_z. A density-keyed L3 predicts
  thinner discs than Newtonian+DM at the same σ_z, by ~(1 + ratio)^(−1). That is a concrete, density-keyed-only
  observable. It is a candidate answer to the queue topic `is-there-any-observable-where-density-keying-is-the-claim.md`.
