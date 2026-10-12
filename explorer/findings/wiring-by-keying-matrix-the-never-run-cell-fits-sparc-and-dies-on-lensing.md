# Finding: The wiring × keying matrix. The one "never run" cell fits SPARC to 0.005 dex and dies on weak lensing, and the only surviving cell is MOND's μ

## Origin
Topic `wiring-by-keying-matrix.md` (visitor 2026-10-12, Pass 3, graduate persona, rated high: "Without a fixed force law,
a 'Failed' verdict is per-wiring"). The maintainer asked for a table to render on Honest Assessment.

PREREG: `explorer/scripts/wiring_keying_matrix_sparc_PREREG.md`, committed `6c38284` before any cell ran.
Scripts and outputs, all in `explorer/scripts/`:
- `wiring_keying_matrix_sparc.py` with `_output.txt`
- `wiring_keying_lensing_rar_brouwer2021.py` with `_output.txt`
- `wiring_keying_joint_sparc_lensing_refit.py` with `_output.txt`

## Summary
I built a census of 30 galaxy-sector force-law tests in the archive and the site, placing each in a wiring × keying × floor
cell, and then ran every cell not yet run on SPARC with γ and a′ free.

The one cell the site calls "never run" is unfloored tanh, keyed on g_bar and used by division. The site says it "could
never reach 0.1437 dex RMS". With γ refit it reaches **0.1491 dex**, with γ = 0.177 and
a′ = 2.44×10⁻¹² m/s². At galaxy level it is disfavoured by only ~2.8σ, and the reference fit wins in just 62% of galaxies.

The site's sentence is true only at γ = ½. There the cell gives 0.182 dex with a′ refit, and 0.448 dex at the
reference fit's parameters.

The cell is killed by data the archive had never used. Its deep limit is a constant acceleration, a′/γ ≈ 1.4×10⁻¹¹ m/s².
The KiDS-1000 weak-lensing RAR (Brouwer+2021) measures g_obs = 4.2×10⁻¹³ at g_bar = 1.4×10⁻¹⁵, which is 1.5 dex lower.
A joint SPARC + lensing refit cannot rescue the cell: Δχ² = **+2972** against the MOND-like reference (+3862 with the hot-gas
baryon budget).

The same lensing data also price the floors:
- An Ω_b floor costs nothing on SPARC (ΔBIC +0.9) but Δχ² ≈ +690 on lensing. With hot gas included that falls to +240, so
  this kill is conditional on the baryon budget.
- An Ω_m floor costs ΔBIC ≈ +2000 on SPARC alone.

With these runs the matrix has no surviving cell other than C keyed on g_obs, unfloored (or floored ≲ 0.02), used by
division. That cell is MOND's μ formulation.

## Research Notes

### 1. Pre-registration scorecard (5 of 7 held)

Data: N = 2807 points in 166 galaxies, with Υ_d = 0.5, Υ_b = 0.7 and eV/V < 0.10. Newton's RMS is 0.5177 dex. The reference
R is division keyed on g_obs with f = 0.

| ID | Prediction | Result | Verdict |
|---|---|---|---|
| P1 | R reproduces γ = 0.489, RMS 0.1437 | γ = 0.489, a′ = 5.336×10⁻¹¹, RMS 0.1437 | **held** (identity control) |
| P2 | g_bar-keyed division, f = 0: RMS ≥ 0.18, ΔBIC ≥ +300 | RMS **0.1491**, ΔBIC **+208** [galaxy bootstrap 95%: +61, +357] | **refuted** |
| P3 | g_bar-keyed, f = Ω_m: ΔBIC ≥ +500 | **+1930** [+1259, +2621] | held |
| P4 | g_obs-keyed, f = Ω_m: ΔBIC ≥ +300 | **+2040** [+1368, +2740] | held |
| P5 | Multiplication fits run to C → 1 (Newton), ΔBIC ≥ +3000 | C → 1, RMS = Newton's, **+7196** | held |
| P6 | g_obs-keyed with f free: f̂ < 0.07 | f̂ = **0.025** (ΔBIC +4.6, a cost of 1 parameter) | held |
| P7 | R beats each of P2–P5 in ≥ 75% of galaxies, and the bootstrap excludes 0 | Bootstrap excludes 0 for all four; win fractions 0.62 / 0.73 / 0.76 / 0.95 | **split** (P2, P3 below 75%) |

Why P2 was wrong: I reasoned from the deep limit, where every γ gives g_obs → a′/γ, a constant. SPARC barely reaches that
limit. The fit puts a′ at 2.4×10⁻¹², so the data sit at y = g_bar/a′ ≈ 0.4–4000. In that range a slow tanh with
2γ = 0.35 imitates the RAR's bend. The binned residuals show the floor starting to bite only in the lowest bin: −0.061 dex
at log g_bar ∈ [−12, −11.5), against +0.011 for R.

This is the third time a closed-form "this reading can't work" was evaluated at another reading's parameters (cf. memory
`run-the-plainest-reading-first`). The site sentence was computed at γ = ½ with R's a′, and no refit was done.

Fits that ran to boundaries: P3 (γ → 20, a′ = 6.2×10⁻⁹) and P4 (a′ → 10⁻⁸). The Ω_m-floored cells degenerate to "Newton ×
3.17 up to a switch near the top of the data". Their ΔBIC is a lower bound on how bad the cell is.

### 2. Lensing kills the never-run cell (no refit, then joint refit)

Data: Brouwer et al. 2021 (A&A 650, A113), KiDS-1000 isolated lenses, 15 bins, g_bar from 1.4×10⁻¹⁵ to 3.9×10⁻¹² m/s².
The source is the public release `kids.strw.leidenuniv.nl/sci_data/brouwer2021_rar.tar`. g_obs was converted from ESD with
the README's Eq. 7 and the full covariance was used.

At the frozen SPARC parameters:

| cell | χ² (isolated) | χ² (+hot gas) | prediction at g_bar = 1.4×10⁻¹⁵ (observed 4.2×10⁻¹³) |
|---|---|---|---|
| R: g_obs-keyed, f = 0 | **144** | 383 | 3.9×10⁻¹³ |
| P2: g_bar-keyed, f = 0 | **124,698** | 626,362 | **1.38×10⁻¹¹** |
| g_bar-keyed, f = Ω_b | 738 | 527 | 2.8×10⁻¹⁴ |
| g_obs-keyed, f = Ω_b | 805 | 599 | 2.8×10⁻¹⁴ |
| either keying, f = Ω_m | 1425 | 1348 | 4.4×10⁻¹⁵ |
| g_obs = 0 / Newton | 1788 / 1659 | 1769 / 1620 | — |

Joint refit (SPARC log residuals at σ = 0.1437 dex per point, plus lensing with full covariance):

| cell | isolated: SPARC χ² + lens χ² = total | Δ vs R | hot gas: total | Δ vs R |
|---|---|---|---|---|
| R | 2820 + 114 = 2934 | 0 | 3171 | 0 |
| P2 | 5135 + 771 = 5906 | **+2972** | 7033 | **+3862** |
| g_bar-keyed, f = Ω_b | 2914 + 737 = 3651 | +717 | 3441 | +269 |
| g_obs-keyed, f = Ω_b | 2809 + 801 = 3610 | +676 | 3404 | +233 |
| g_obs-keyed, f = Ω_m | 5804 + 1426 = 7229 | +4296 | 7153 | +3981 |

**Discounts (stated, not chosen to help):**
- R's own lensing χ² is 114 for 15 bins (352 with hot gas). The Eq. 7 SIS conversion, the 2-halo term and isolation
  leakage all inflate it, so the lensing Δχ² should be divided by R's χ²/dof (7.6, or 23.5 with hot gas).
- SPARC points are not independent (N_eff ≈ N_gal, memory `point-count-dbic-needs-a-galaxy-block-bootstrap`). That
  divides the SPARC Δχ² by about 2807/166 ≈ 17.
- After both discounts P2 still loses by ≈ 137 (SPARC) + 86 (lensing), or 137 + 36 with hot gas. **The kill survives.**
- The Ω_b floor after discounting: (737 − 114)/7.6 ≈ 82 isolated, but (527 − 352)/23.5 ≈ 7 with hot gas, about 2.7σ.
  It is **conditional on the baryon budget**, which agrees with the 10-04 explorer verdict ("1/Ω_b excluded only
  conditionally").

What lensing does to the floor: the observed boost at the lowest bin is g_obs/g_bar ≈ 300 (isolated) or ≈ 50 (hot gas).
Any floor f > 1/50 = 0.02 is therefore excluded on the most conservative baryon budget. SPARC alone gives f̂ = 0.025.
The floor, which is the framework's one structural addition to μ, is pushed below Ω_b by two independent datasets.

### 3. The matrix (render-ready)

The census comes from a sweep of the archive and the site: 30 tests, with dates and paths. Cell entries give the headline
number and source. "This session" marks today's runs.

**A. Algebraic wirings on SPARC (RAR, 2807 points / 153–166 galaxies)**

| wiring ↓ / keying → | g_obs (implicit μ) = C_g | g_bar (explicit) | local ρ = C_ρ | ρ smoothed (ℓ) | Σ |
|---|---|---|---|---|---|
| **division g = g_bar/C, f = 0** | **survivor**: γ = 0.489, 0.1437 dex = MOND simple μ at γ = ½. γ = 2 pin +184 (pts) / ≈ +11 (galaxy) | **killed today**: SPARC 0.149 dex (+208, about 2.8σ galaxy-level); lensing joint Δχ² +2972 | ΔBIC **+2843** vs C_g (γ → 0.046); +3309 for ρ_c = A·V² | one-shot L2 only (below) | admixture α = 1.00 [0.75, 1.00]: density weight ≤ 25% |
| **division, f = Ω_b** | SPARC free (+0.9); lensing +676 (hot gas +233); **conditional** | SPARC +105; lensing +717 (+269) | — | — | — |
| **division, f = Ω_m** | **+2040** (today) | **C_a**: TEST-09 BTFR n = 3.35 ± 0.07 vs 3.75 (fires); TEST-10 69% of outer points over the cap; today +1930 | plotter solid line (since 10-08); per-disc max C_ρ ≈ 1.2×10⁻³, so f binds everywhere | — | — |
| **division, f free** | f̂ = 0.025 (today) | f̂ = 0.094, +70 (today) | — | — | — |
| **multiplication g = C·g_bar** | +7196 (today; fit is Newton) | +7196 (today) | retracted 08-04 as "L5", wrong direction vs f_DM = 1 − C | — | — |
| **quadrature v² = v_b² + (V_flat·C)²** | not a prediction (V_flat is read from V_obs) | — | plotter dashed line, "untested display"; inert at C ≈ 10⁻³ | — | — |

**B. Field-equation wirings (L2 = ∇·[C∇Φ] = 4πGρ without striction; L3 = with the striction term; χ²/N vs MOND 21.25 on 153 SPARC discs)**

| wiring ↓ / keying → | \|∇Φ\| or g_obs | g_N (one-shot) | local ρ | ρ smoothed / ρ̄(<r) |
|---|---|---|---|---|
| **L2, f = Ω_m** | AQUAL self-consistent, 51 discs: 0.95× MOND | 55.4 (2.61×) | 68.5; γ = 0.489: 160, γ = 2: 108 | ρ_MRH(1 kpc) / ρ̄: one-shot, see 09-09 finding |
| **L2, f = 0.089 (RG)** | — | 31.3 (1.47×); self-consistent 2.07× | 170 | — |
| **L2, f free** | — | — | optimum f = 0.20–0.25 (52.8) | — |
| **L3 (striction)** | **never run on SPARC** | never run | discs: striction up to 164× K_z (models only) | never run |
| **L2/L3, Solar System** | — | — | solar-wind flux: 192/192 grid points exceed 10⁻⁶ | LLR Ġ/G: 68/74 excluded at ℓ = 1 pc |
| **L2/L3, GCs (42 Baumgardt)** | MOND+EFE −0.093 | — | L2 γ = 0.489 −0.211 excluded; L3 γ = 2 −0.203 excluded | — |

**C. Keying-only tests (no wiring needed):** environment r² = 0.0001 (TEST-08); ρ_crit ∝ V⁺² excluded at 12.2σ.

**What the archive asserts is "the theory" (none of these agree):**
- Appendix D §D.2 gives **L1 + division, keyed on ρ, no floor**. PREDICTIONS 08-26 mislabels it as the L2 field equation.
- The plotter's "real equation" is C_ρ at γ = 2, **floored at Ω_m, by division**.
- The 08-29 and 08-30 explorations call **L2** "the framework's actual field equation".
- The 10-08 GC proposal says "No archive document says which column is the theory".

### 4. Discrepancies to fix before rendering (from the census)
1. **"L2"/"L3" changed meaning around 09-15.** Before that date L3 meant the algebraic g = g_bar/C. After it, L3 means
   the action with striction. A rendered matrix must define them once, as I do above.
2. **Appendix D §D.2 is L1, not L2.** PREDICTIONS 08-26 calls ∇·[C∇Φ] "(Appendix D §D.2)".
3. **PREDICTIONS 09-18 says the plotter's C_ρ "carries no floor".** Since 10-08 it is floored at Ω_m.
4. **The 08-24 block calls the ceiling function C_Ω.** The site and later blocks call it C_a.
5. **The site sentence (coherence-function/page.tsx ~l.84) is wrong as a general claim.** "The explicit reading … could
   never reach 0.1437 dex RMS. It was never run." It holds at γ = ½ only. With γ free the cell reaches 0.149 on SPARC and is
   killed by lensing, not by SPARC.

## Implications for the Site
- The visitor's question, "which law failed?", now has an answer per cell, and every algebraic cell has a number. The
  framework-specific elements each have their own kill: ρ keying (+2843), the Ω_m floor (TEST-09/10, +2000), g_bar keying
  (lensing, +2972 joint), the Ω_b floor (lensing, conditional). What survives is C_g = MOND's simple μ at γ ≈ ½. This
  strengthens the site's existing "reduces to MOND" statement: it is not one reduction among several, it is the only cell
  left standing.
- **The force-law fork no longer gates the galaxy verdict in the algebraic sector.** It still gates L3 (striction), which
  has never been run on SPARC under any keying. That is now the largest unrun block in the matrix, and the Solar-System
  striction topic is its stellar-scale sibling.
- **Weak lensing is a new probe for the ledger.** The archive had used SPARC, GCs, the Solar System and wide binaries for
  galaxy-sector laws, never the lensing RAR. It is the only data that reaches 2–3 dex below SPARC, which is exactly where
  floors and keying choices separate.

## Action: Maintainer
1. **Honest Assessment:** render §3 tables A and B as they stand (with the L2/L3 definitions on top). Put "killed today"
   with this finding's path.
2. **/coherence-function ~l.84:** replace "could never reach 0.1437 dex RMS. It was never run." with roughly: "At γ = ½ it
   gives a constant additive floor and 0.18 dex. With γ free (0.177) it reaches 0.149 dex on SPARC, 2.8σ behind the
   implicit form at galaxy level. It is excluded by the KiDS-1000 weak-lensing RAR, which reaches g_bar = 1.4×10⁻¹⁵ m/s²,
   where the cell predicts 1.4×10⁻¹¹ against an observed 4×10⁻¹³ (joint Δχ² +2972; explorer 2026-10-12)." Badge:
   `audited-negative`.
3. **site_lint rules:**
   - Retire "could never reach 0.1437".
   - REQUIRE "γ = ½" or "γ free" within the window of any "never run" claim about the g_bar cell.
4. **Ω_b floor:** cite this joint fit beside the 10-04 "conditional" verdict. The SPARC-alone cost is +0.9, so any page
   that says SPARC excludes a 1/Ω_b ceiling would be wrong. Grep for it.
5. **Ledger:** this kills a reading, not an asserted law. No archive document asserts g_bar keying with the tanh form (C_a
   is the Hill form, floored). Under the printed counting rule it does not add to "6". It belongs in the "readings excluded"
   list next to the uniform G/C growth reading (maintainer 10-12 counting question; same class).

## Open Threads
- **L3 on SPARC.** This is the largest never-run block: striction at the C_g keying, where it is ∝ C′(|∇Φ|)|∇Φ|² and not
  ρ-driven. Is that just AQUAL? (The action ∫C(|∇Φ|)|∇Φ|² is an AQUAL Lagrangian, but its field equation carries
  μ_eff = C + ½|∇Φ|C′, not C. So L3 keyed on |∇Φ| is AQUAL with a *different* μ. Check whether μ_eff still fits the
  RAR at some γ before any solver run; that is a one-line algebraic fit.)
- **Lensing for every acceleration-keyed γ.** R's best lensing-joint γ is 0.592 (0.413 with hot gas) against SPARC's 0.489.
  Does γ drift with g_bar depth, the way the "level vs slope" lessons suggest? A level-free fit on the lensing bins alone
  would answer it.
- **Conversion systematics.** Eq. 7 is the SIS approximation. Brouwer's main analysis deprojects more carefully. R's
  χ²/dof of 7.6 says the absolute numbers are not trustworthy, though the ordering is. A rerun with the paper's own
  conversion would tighten the Ω_b-floor verdict, the only one here that is close.
- The census agent could not place the 05-21 "+184" keying with certainty. It is presumed C_g because the 07-22 pipeline
  reproduces it exactly.
