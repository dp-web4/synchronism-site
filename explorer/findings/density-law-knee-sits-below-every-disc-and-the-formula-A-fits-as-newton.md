# Finding: The density law's free knee sits *below* every SPARC disc; at the formula's A it fits as Newton

## Origin
Two queued topics, merged: `density-law-with-a-free-does-the-knee-enter-the-discs.md` (maintainer 11-02, from the
graduate-physics visitor's question "if you use the formula's 4.6×10⁻⁵, does the density law fit better or worse than
+2843?") and `density-keyed-sparc-free-fit-gamma-0046-boundary-or-interior.md` (10-06).
PREREG `c62bc9d` (committed before the script). Scripts: `findings/scripts/density_law_knee_placement.py` (+ `_output.txt`),
`density_law_knee_placement_supp.py` (+ `_output.txt`). Frozen loader and likelihood from the 08-24 head-to-head;
identity controls reproduce −7564.2 / −4721.7 / −4255.2 exactly.

## Summary
The topic's premise was wrong, and so are two site glosses that share it. The +2843 fit was never at A = 0.029: it fits
**one global ρ_crit, which lands at 4.4×10⁻⁶ M☉/pc³**, below 97% of SPARC disc points by more than 100×. The discs sit
in the *logarithmic* regime, C ≈ γ ln(ρ/ρ_c), where γ and ρ_c are separately identified. So "C ≈ γx, only γ/A
identified" is false for this fit. Density dependence is also not "switched off". The fitted boost scales as
ρ^−0.10, and it beats a constant boost by ΔBIC +945 (≈ 6σ at galaxy level). It is weak, but it is on.

The visitor's question has a number now. At the formula's A = 4.6×10⁻⁵ with γ free, the density law loses to the
acceleration law by **ΔBIC +6593**, and its best curve is Newton's (C ≈ 1 at the median point; Newton alone is +6636).
At γ = 2 and the formula's A it loses by **+10 372**. The A·V² family's own best A is 3.9×10⁻¹¹, which is 6 orders
below the formula and 9 below the published value. **The density law loses at every calibration, its own formula's
included.** Placing the knee inside the discs (ρ_c ∈ [10⁻², 1] M☉/pc³) costs a further ≥ +2800 against the free fit.

## Research Notes

### Pre-registered verdicts
| | Prediction | Result | Verdict |
|---|---|---|---|
| P1 | ≥ 95% of points at x = ρ/ρ_c > 100 under F | 97.4% (median x 7.0×10³; min 0.55) | HELD |
| P2 | formula-A arm worse than B by > +2843, and worse than F2 by > 100 | +6593 vs B; +3284 vs F2 | HELD |
| P3 | constant boost worse than F by > +100 | +945 (galaxy-iid sd 155, z 6.2) | HELD |
| P4 | F interior in γ; corr(ln γ, ln ρ_c) > 0.9 | interior (γ 46× above bound); corr **+0.893** | interior HELD, corr REFUTED (narrowly) |
| P5 | best knee-inside-discs point worse than F by > 300 | +2807 (at ρ_c = 10⁻², γ = 0.5) | HELD |
| P6 | γ = 2 with ρ_c free worse than B by > +2843 | +6065 | HELD |

**Deviation (logged).** The registered fixed-A arms (K_f, K_p) hit the registered γ ≤ 50 bound. Those rows in the main
output (+6957, +14035) are boundary values, not optima. The supplementary run lifts the bound to 10⁸. Both arms then
converge to **the same γ/A ≈ 1.26×10⁷** and the same ΔBIC (+6592.5 / +6592.7). That confirms the 10-23 "only γ/A
identified" result for the fixed-A family, and only for that family. P2's verdict is the same either way.

### All arms (BIC = −2lnL + k ln N, N = 2438 points / 122 galaxies; gal-sd = sqrt(N_gal·var Δ_i) vs B)
| arm | k | ΔBIC vs B | gal-sd | σ_int (dex) |
|---|---|---|---|---|
| B acceleration-keyed C_g | 3 | 0 | — | 0.122 |
| F density, global ρ_c free (**the +2843**) | 3 | +2843 | 372 | 0.226 |
| F2 density, ρ_c = A·V², A free | 3 | +3309 | 415 | 0.250 |
| C0 constant boost 2.61, no density | 2 | +3788 | 479 | 0.277 |
| R_f γ = 2, ρ_c free (best 0.037 M☉/pc³) | 2 | +6065 | 588 | 0.445 |
| K_f/K_p A fixed (4.6×10⁻⁵ or 0.029), γ free → γ/A = 1.26×10⁷ | 2 | +6593 | ≈650* | 0.496 |
| Newton (C = 1) | 1 | +6636 | — | 0.501 |
| γ = 2, A = 4.6×10⁻⁵ (formula) | 1 | +10 372 | — | 1.08 |
| γ = 2, A = 0.029 (published law, unfloored) | 1 | +16 486 | 1392 | 3.0 (bound) |

*gal-sd at the γ = 50 boundary point. The optimum's width was not recomputed. Every z here is > 10.

### Where the knee is, and what the fit actually is
- Disc densities (Σ/2h, h = 0.3 kpc): log₁₀ ρ [M☉/pc³] runs 5%–95% from −2.9 to +0.1, median −1.5.
- F's knee is at log₁₀ ρ_c = −5.36, 3–4 dex below the discs. γ ln(1+x) runs 0.02–0.72 and C runs 0.02–0.62. The tanh's
  curvature is small (median 5.5%, max 17%). So the fit is essentially **C ≈ γ ln(ρ/ρ_c)**: a log law with slope 0.046
  and an offset, and the tanh shape hardly enters.
- Response exponent d ln C / d ln ρ: median **0.10** (5–95%: 0.06–0.17), so boost ∝ ρ^−0.10. The RAR's deep regime
  needs a boost ∝ g_bar^−½. Density is a noisy proxy for g_bar (10-23 / 08-24 scatter results). The likelihood answers
  with a strongly attenuated slope, which is what regression dilution predicts. (Interpretation; not tested here.)
- Along the profile valley, γ → 0 with ln(1/ρ_c) → ∞ at fixed γ·ln(ρ̄/ρ_c) is the constant-boost limit C0. F is
  interior: the profile rises +530 at ρ_c = 10⁻¹² and +945 BIC at the C0 limit.

### Why fixing A turns the law Newtonian
With A·V² ≥ 4.6×10⁻⁵·V², the discs sit at x ≲ 1 (formula A: median x = 0.045). In that regime C ≈ tanh(γx), which
depends on γ/A only. To give a boost ~2.6 to typical points, the law would need C ~ 0.4 at x ~ 0.05 and C ≪ 1 at low x.
A tanh(γx) with one global γ/A cannot spread that across the 3-dex density range. The likelihood instead saturates
C → 1 almost everywhere and boosts only the lowest-density points (C min 0.001). It ends up 43 BIC better than Newton.
**At any A near the derivation's scale, the density law degenerates into Newtonian gravity with a few low-density
outliers.** The 600× gap between formula and published A is absorbed entirely by γ in this family. It matters only when
γ is pinned: γ = 2 gives +10 372 at the formula's A and +16 486 at the published one.

### Was the visitor's question already answered?
In part. Since 2026-09-23, /galaxy-plotter has said that "any fixed A, including 4.6×10⁻⁵ at γ = 2, is a point inside
that search, so its likelihood can only be worse". That nesting argument is correct. It gave a direction but no size,
and the visitor (and the maintainer's topic) read the site as silent. The sizes are now on file. The topic's other
premise, "+2843 rests on A = 0.029", came from the /coherence-explorer preset label, which is wrong (below). This is
[[grep-findings-for-the-result-word-before-executing]] again: the nesting answer was on the site, and the gloss that
contradicted the fit was on the site too.

## Implications for the Site
1. **/coherence-explorer:246 preset label is wrong about its source fit.** "Density-keyed free fit at fixed A = 0.029 in
   ρ_crit = A·V² … at SPARC densities C ≈ γx, so only γ/A is identified and 0.046 is not a measurement of γ alone" should
   become: "global ρ_crit fitted at 4.4×10⁻⁶ M☉/pc³, below every disc; the discs sit at x ~ 10³–10⁵ where C ≈ γ ln(ρ/ρ_c);
   γ and ρ_c are separately identified (correlation +0.89)". If the preset draws γ = 0.046 against a knee anywhere near
   0.029·V², it draws a curve the fit never had. Pair the preset with ρ_c = 4.4×10⁻⁶, or label it "γ only; the fitted
   knee is 4.4×10⁻⁶ M☉/pc³".
2. **"The fit switches its own density dependence off"** (/core-idea:397, /coherence-explorer:272, /for-researchers:379,
   /honest-assessment:1016, /mond-comparator:68) overstates. The fitted boost is ∝ ρ^−0.10 and beats a constant boost by
   ΔBIC +945 (z ≈ 6 at galaxy level). Suggested replacement: "the fit keeps only a weak density response (boost ∝ ρ^−0.1,
   close to a constant 2.6× stretch) and still loses by +2843". /core-idea:134 ("barely responds to density") is fair.
3. **/galaxy-plotter:382 can print the size.** "At the formula's A = 4.6×10⁻⁵ the best γ makes the law Newtonian
   (ΔBIC +6593 vs the acceleration law; Newton itself +6636); at γ = 2 it is +10 372." This is also the visitor's
   requested sentence for /parameter-derivations: the 600× gap does not decide whether the equation is exercised.
   At any A on the formula's scale, the free fit turns into Newton.
4. **A stronger negative becomes printable.** "The density-keyed law loses to the acceleration-keyed law at every
   calibration tried: free global knee +2843, free A +3309, formula A +6593, published A +6593 (γ free) or +16 486
   (γ = 2). Its best knee sits below every disc."

## Action: Maintainer
- /coherence-explorer:246: rewrite the γ = 0.046 preset label (Implication 1), and check what knee the preset draws.
- Replace "switches its own density dependence off" on the five surfaces in Implication 2. Add a lint rule for the
  phrase (REQUIRES the exponent or "weak").
- /galaxy-plotter:382 and /parameter-derivations (A audit): add the +6593 / +10 372 numbers and the "fits as Newton" sentence.
- /for-researchers §4 (unidentifiability): γ/A-only identification is a property of the **fixed-A** family (γ/A = 1.26×10⁷
  at its optimum), not of the +2843 fit (global ρ_c, corr +0.89). State which.
- Source line: `explorer/findings/scripts/density_law_knee_placement{,_supp}_output.txt`.

## Open Threads
- **Attenuation test.** Is the ρ^−0.10 exponent regression dilution? Check: fit log B against log g_bar and log ρ jointly.
  If ρ's partial coefficient → 0 with g_bar present, density adds nothing beyond its correlation with g_bar. The 10-23
  partial-correlation section of `rar_scatter_nogo_real_sparc.py` may already contain it. Grep first.
- The fitted knee at 4.4×10⁻⁶ M☉/pc³ (galaxy-bootstrap range not computed) is 2 dex above the cosmological ρ_Λ/2 = 4.3×10⁻⁸
  and ~3 dex below disc midplanes. It is a log-law offset, not a physical scale. Before anyone adds it to the
  six-knee ρ_crit inventory as a seventh "knee", note that the tanh never reaches its own shape here.
- Floored version: this is the unfloored division wiring. The Ω_m floor (C_f ≥ 0.32) would cap the boost at 3.1×.
  The free fit's C min is 0.02, so the floor binds on the lowest-density points. Not run.
