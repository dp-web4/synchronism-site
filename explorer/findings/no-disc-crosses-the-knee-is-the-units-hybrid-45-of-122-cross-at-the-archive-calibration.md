# Finding: "No galaxy disc crosses the knee" holds only at the units-hybrid 0.029·V². At the archive's 0.028·V^0.5, 45 of 122 galaxies cross

## Origin
Topic `v2-dependent-site-claims-at-the-archive-v05-knee.md` (maintainer 2026-11-13). Desk check on the 11-12 loader
(`two_pillars_head_to_head_fit.build()`: 2438 points, 122 galaxies, h = 0.3 kpc, Υ_disk 0.5). Script
`findings/scripts/knee_crossing_at_each_calibration.py` with output alongside. Not pre-registered: it is a count, with
no fit and no threshold.

## Summary
The `/key-claims` locality no-go says no galaxy disc crosses the coherence knee at the published calibration. That holds
**only** for ρ_crit = 0.029·V² (0 of 122 galaxies; maximum x = 0.018). It fails at both forms the archive can stand behind:
- at its own 0.028·V^0.5 (Sessions 52/62/64/65), **45/122 galaxies** have at least one point with x > 1, which is **12.2%
  of points** (median x 0.0975, maximum 59);
- at the Jeans-consistent A = 4.6×10⁻⁵·V² (S687), **22/122** galaxies cross, 2.8% of points.

The density law is still excluded: ΔBIC +8,404 at 0.028·V^0.5 (11-12), and +2,843 with a global knee. But the exclusion
comes from data, not from the no-go. Under V^0.5 the mass does not cancel either: the slope of log max x against
log V_flat is +2.42. This is the over-refutation direction: a correct verdict reached by a reason that depends on a
units slip.

## Research Notes
Per-claim verdicts for the topic's five items:

| # | surface | claim | at 0.028·V^0.5 | at 4.6×10⁻⁵·V² |
|---|---|---|---|---|
| 1 | `/key-claims` ≈ l. 531, 625–636, 784 | "no galaxy disk, of any mass, crosses the coherence knee at the published calibration"; "mass cancels out" | **fails** (45/122 cross; mass does not cancel, slope +2.42) | **fails** (22/122; mass cancels in form, but radius sets crossings) |
| 2 | `/coherence-explorer` l. 293 | SPARC median x ≈ 7×10⁻⁵ | reproduced exactly at 0.029·V² (7.14×10⁻⁵); **0.0975** at V^0.5 | 0.045 |
| 2b | `/coherence-function` l. 150, `/for-researchers` l. 43 | radial striction ~10⁻⁵ of gravity "at the framework's own knee" | **not computed**; it scales with C′, so it must be ≫ 10⁻⁵ where x ~ 0.1–60 | not computed |
| 3 | `/coherence-function` l. 201, `/galaxy-plotter` l. 170, 352 | DDO 154 knee 0.029 × 47² ≈ 64 M☉/pc³ | **0.19** M☉/pc³ | **0.10** M☉/pc³ |
| 4 | `/galaxy-rotation#vflat-twice` | V_flat is handed in twice | true for both forms | true |
| 5 | `src/lib/equations.ts:44` `criticalDensity(vFlat, A = 0.029)` | multiplies by V² | **no callers** in `src/` (dead code) | — |

The 09-08 scope note on `/key-claims` already says the no-go is "a statement about the calibration A = 0.029". What it does
not say is that A = 0.029 on a V² law is the 08-27 units slip, which `/parameter-derivations` l. 297 now states. The two
pages contradict each other: one calls 0.029·V² "the published calibration", and the other calls it "not a published
calibration".

The cancellation algebra itself (ρ/ρ_crit ∝ 1/(A·G·R²) when ρ_crit ∝ V²) is right as algebra. It is not a property of the
archive's law, because the archive's knee goes as V^0.5.

**Not checked:** the striction magnitude at the V^0.5 knee (item 2b). That needs the L3 striction computation from the
10-xx findings at the new knee, which is beyond a desk count.

## Implications for the Site
The "Failed" badge on the density interpretation stays. Its reason should change from a structural no-go to the data
verdict at the archive's own calibration (ΔBIC +8,404, worse in 115/122 galaxies). "Milgrom's locality no-go" stays as
the general argument. The SPARC instance of it ("no disc crosses at the published calibration") should be withdrawn or
re-labelled "at the units-hybrid form only".

## Action: Maintainer
- `/key-claims` ≈ l. 531, 625–636, 784: replace "no galaxy disk … crosses the coherence knee at the published
  calibration" with: "at the archive's own calibration (0.028·V^0.5) 45 of 122 SPARC galaxies cross the knee, and the
  law loses anyway (ΔBIC +8,404, worse in 115/122); the 'no disc crosses' statement held only for 0.029·V², a units slip".
- `/coherence-explorer` l. 293: give the median x as 0.0975 at 0.028·V^0.5, and as 7×10⁻⁵ only in the units-hybrid form.
- `/coherence-function` l. 201 and `/galaxy-plotter` l. 170/352: the DDO 154 knee is 0.19 M☉/pc³ at the archive form.
  The plotter's violet curve should be recomputed or labelled "units-hybrid form" (the knee moves by ×330).
- `/coherence-function` l. 150, `/for-researchers` l. 43: mark the "~10⁻⁵ striction at the framework's own knee" as
  computed at 0.029·V² only. Untested at V^0.5.
- `src/lib/equations.ts` `criticalDensity`: delete, or change it to A·V^B with the archive's defaults. It has no callers.
- Lint REQUIRES rule: `0.029·V²` / `0.029&middot;V` must co-occur with "units" or "hybrid" on the same surface.

## Open Threads
- Striction magnitude at the V^0.5 knee (item 2b).
- Does the GC "wholesale crossing" statement change at V^0.5? GC V is small, so the knee falls only as V^0.5. Probably
  unchanged in kind, but nobody has checked.
