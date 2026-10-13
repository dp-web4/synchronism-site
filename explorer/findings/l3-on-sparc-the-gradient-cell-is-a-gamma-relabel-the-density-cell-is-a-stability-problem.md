# Finding: L3 on SPARC. At the gradient keying it is AQUAL with γ relabelled; at the density keying it is zero at the framework's knees and a disc-stability problem where it isn't

## Origin
Self-directed, from the 10-12 open thread ("L3 is the largest never-run block") and from the maintainer's sentence added
to `/for-researchers` today, which scopes the "no surviving differing prediction" claim to exclude "the never-run L3
(striction) dynamics on SPARC". Related queue topics: `refracted-gravity-sparc-refit-under-l2-plus-striction.md` (its
striction half) and `l3-with-smoothing-length-does-any-d-save-the-registered-gc-point.md` (GC sibling, not touched).

Pre-registration: `scripts/l3_gradient_keyed_sparc_lensing_PREREG.md`. Part 1 (P1–P6) is commit `8618d5d`; the
density-keyed addendum (Q1–Q3) is `4bd8d4f`, committed after part 1 ran and before part 2.

## Summary
**The gradient-keyed cell.** L3 is the action ∫C(|∇Φ|)|∇Φ|²/8πG. That makes it AQUAL with μ_eff = C + ½xC′. The tanh-ln
family is closed under this map. For every γ from 0.2 to 2, some L2 curve with a relabelled γ reproduces the L3 curve to
≤ 0.005 dex over SPARC's range. On SPARC, L3 fits at γ = 0.4435 with RMS 0.14371, against L2's γ = 0.489 with RMS 0.14368.
The galaxy-bootstrap ΔBIC 95% interval is [−1.1, +3.5]. KiDS lensing cannot separate them either (joint χ² 2934.4 vs
2933.7). The only place the two wirings separate is the Solar-System tail, where L3's 1−μ is 1.7–4× larger. **So "γ ≈ ½,
which is MOND's simple μ" is a statement about the L2 wiring: under L3 the same curve sits at γ = 0.44.**

**The density-keyed cell (first order, fixed disc).** At the framework's own knee (ρ_c = 0.029 V²) the radial striction
is a 10⁻⁵ effect, so L3 equals L2 (χ²/N 249.6 → 249.5) and inherits every L2 kill. At the Jeans knee it gives −8%, carried
by five bulge-dominated galaxies, and still 147 against MOND's 21. Where the knee sits inside discs (RG's regime and the
best L2 grid point), the striction reaches 7–14× gravity radially, and 50 points have it pushing outward harder than
gravity pulls in. There a rotation-curve fit on a fixed disc is not a valid calculation. **The L3 question at the density
keying is a disc-equilibrium problem, not a curve-fitting one**, and that is a sharper statement of the open half than
"never run".

## Research Notes

### 1. Gradient keying: what L3 is
With the Lagrangian density L = C(x)|∇Φ|²/8πG + ρΦ, x = |∇Φ|/a′, write y = |∇Φ|² and F(y) = C·y. Varying Φ gives
∇·[F′(y)·2∇Φ]/8πG = ρ, so ∇·[μ_eff ∇Φ] = 4πGρ with **μ_eff = C + ½xC′(x)**. L2 at this keying (∇·[C∇Φ] = 4πGρ) is
AQUAL with μ = C, whose own Lagrangian is ∫C dy, not C·y. So the two "wirings" are two AQUAL members, and at this keying
the "striction" is not a force on matter but the ½xC′ term inside the field equation.

Limits, analytic and checked numerically (`l3_gradient_keyed_sparc_lensing_output.txt`, P5 block):
- Deep regime: μ_eff → 1.5γx, so a₀,eff = a′/(1.5γ) (L2: a′/γ). The fitted values agree to 0.7%: 1.098×10⁻¹⁰ vs
  1.091×10⁻¹⁰ m/s². The deep-MOND normalisation is a property of the data, not of the wiring.
- Newtonian tail: 1 − μ_eff ≈ 2(1−γ)x^(−2γ). μ_eff exceeds 1 iff γ > 1 (at γ = 2 the maximum is 1.0088: gravity slightly
  weaker than Newton at high acceleration).
- x·μ_eff is strictly increasing for every γ tested (0.05–2), so the field equation stays elliptic.

### 2. Gradient keying: the numbers
| quantity | L2 (μ = C) | L3 (μ = C + ½xC′) |
|---|---|---|
| SPARC best γ | 0.4892 | 0.4435 |
| SPARC best a′ (m/s²) | 5.3363e-11 | 7.3046e-11 |
| SPARC RMS (dex), 2807 pts / 166 gal | 0.14368 | 0.14371 |
| ΔBIC(L3 − L2), points | — | +1.4 |
| galaxy-bootstrap 95% | — | [−1.1, +3.5] |
| KiDS isolated, frozen SPARC params, χ² | 143.8 | 141.9 |
| KiDS hot-gas, frozen, χ² | 382.7 | 385.0 |
| joint SPARC + KiDS isolated: γ, total χ² | 0.592, 2933.7 | 0.520, 2934.4 |
| joint SPARC + KiDS hot-gas: γ, total χ² | 0.413, 3171.4 | 0.382, 3175.4 |

The median residuals by g_bar bin agree to ≤ 0.002 dex in every bin. The nearest L2 curve to the fitted L3 curve over
SPARC's range (g_bar from 10^−12.3 to 10^−8.5) has γ = 0.487 and deviates by at most 0.0012 dex.

**Family closure** (`l3_gradient_family_closure_output.txt`):

| γ_L3 | nearest γ_L2 | γ_L2/γ_L3 | max \|Δlog g\| over SPARC range |
|---|---|---|---|
| 0.2 | 0.2087 | 1.044 | 0.0020 |
| 0.4435 | 0.4865 | 1.097 | 0.0012 |
| 0.7 | 0.8390 | 1.199 | 0.0006 |
| 1.0 | 1.3536 | 1.354 | 0.0016 |
| 2.0 | 6.7247 | 3.362 | 0.0049 |

So the L2/L3 choice at this keying is **unidentifiable from galaxy data**. It is a reparametrisation of γ (by 4–10% in the
range the data select), plus a Solar-System tail difference.

**Solar-System tail at the SPARC-fitted parameters** (Sun only, no EFE):

| distance | 1−μ, L2 | 1−μ, L3 | L3/L2 |
|---|---|---|---|
| Earth | 2.685e-08 | 1.074e-07 | 4.00 |
| Saturn | 2.217e-06 | 5.869e-06 | 2.65 |
| Neptune | 2.100e-05 | 4.506e-05 | 2.15 |

Both are simple-μ-class tails, with an anomalous acceleration of order a₀ in the outer planets. That is the known
Solar-System problem of slow interpolating functions, shared with the C_g survivor and tracked in the queue topic
`qumond-cassini-closure-sparc-cost-of-sharp-interpolating-functions.md`. L3 makes it 2–4× worse, which changes no class
verdict.

### 3. Density keying, first order: method
The pipeline is unchanged from 08-28: 153 discs, the finite-volume solve of ∇·[C(ρ)∇Φ] = 4πGρ, Bershady scale heights,
Υ_d profiled over {0.3, 0.5, 0.7} with a 0.1 dex prior, and boost transfer. On each solution I computed Ψ = C′(ρ)|∇Φ|²/8πG
(the 08-26 striction potential, eq. ★) and set v²/R = ∂Φ/∂R + ∂Ψ/∂R at the midplane. **The matter distribution is not
re-solved.** The 08-26 finding showed the vertical striction can reach 164× K_z, so this is first order in the striction
on a fixed disc. It is valid only where |g_striction/g| is small; I report that ratio for each model.

Infrastructure: `scripts/rar_scatter_nogo_real_sparc.py` still pointed at the pre-September `/mnt/c` path, so every
solver-based SPARC script was broken. I added a fallback to `/home/dp/ai-workspace`.

### 4. Density keying, first order: results
`l3_density_keyed_first_order_sparc_output.txt`, `l3_density_keyed_dominance_output.txt`. MOND simple μ on the same
likelihood: χ²/N = 21.25.

| model | L2 χ²/N | L3 χ²/N | change | \|g_s/g\| median / 90% / max |
|---|---|---|---|---|
| site γ=.489, ρ_c = 0.029V², floor Ω_m | 249.64 | 249.54 | −0.0% | 6.53e-06 / 2.51e-04 / 9.56e-02 |
| site γ=2, ρ_c = 0.029V², floor Ω_m | 248.85 | 248.51 | −0.1% | 2.67e-05 / 9.77e-04 / 1.44e-01 |
| Jeans γ=.489, ρ_c = 0.161, floor Ω_m | 160.27 | 146.83 | −8.4% | 8.33e-03 / 4.41e-02 / 3.60e-01 |
| RG form, best L2 grid point (0.315, q .47, ρ_c 1.47e-3) | 68.44 | 131.56 | +92.2% | 5.05e-03 / 2.29e-01 / 7.14e+00 |
| framework form, floor .315, ρ_c 3.16e-4 | 69.67 | 162.91 | +133.8% | 2.22e-03 / 2.86e-01 / 9.86e+00 |
| RG Cesare22-E0 (.089, .47, 8.3e-3) | 911.46 | 1599.18 | +75.5% | 4.86e-02 / 6.58e-01 / 1.39e+01 |
| RG DiskMass mean (.56, .92, 7.4e-4) | 188.43 | 206.12 | +9.4% | 1.43e-04 / 9.91e-02 / 4.06e+00 |
| RG DiskMass unique (.661, 1.79, 4.3e-3) | 239.92 | 249.91 | +4.2% | 2.06e-04 / 7.05e-02 / 2.29e+00 |

**Who carries the change** (Υ_d = 0.5):
- **Jeans knee.** Σ Δχ² is −55969, of which −38220 comes from five galaxies: UGC06787, UGC02916, UGC05253, NGC5055 and
  UGC02953, all massive and bulge-dominated. The knee (0.161 M☉/pc³) is crossed inside the bulges. The median galaxy is
  unchanged (median log ratio −0.001). No point has |g_s/g| > 0.5, so first order is defensible here.
- **RG-form best grid point.** Σ Δχ² is +200542, of which +146389 comes from five galaxies: UGC02953, NGC2403, UGC03546,
  NGC2903 and NGC5055. 192 of 3035 points have |g_s/g| > 0.5, and at 50 the outward striction exceeds gravity (B₃ ≤ 0).
  **Over galaxies where every point stays in the first-order regime, Σ Δχ² = −4691 (about −2%).** The median galaxy is
  unchanged (−0.003); L3 is better in 59%.

**Grid under first-order L3** (γ/q = 0.489 framework, 0.47 RG; χ²/N, L2 in brackets; ρ_c in M☉/pc³):

| form, floor | 0.000316 | 0.00178 | 0.01 | 0.0562 | 0.316 |
|---|---|---|---|---|---|
| framework 0.089 | 4542.1 [368.9] | 2268.3 [687.4] | 1394.4 [1287.6] | 1908.6 [2152.8] | 2736.9 [3033.0] |
| framework 0.150 | 1071.6 [106.2] | 501.2 [195.1] | 384.1 [381.4] | 594.5 [679.4] | 900.4 [1004.7] |
| framework 0.315 | 162.9 [69.7] | 100.5 [71.1] | **91.0** [88.0] | 118.6 [126.8] | 166.9 [181.3] |
| framework 0.661 | 251.4 [252.3] | 242.7 [242.2] | 238.7 [236.3] | 239.4 [237.6] | 243.4 [244.0] |
| RG 0.089 | 5810.8 [284.3] | 3188.0 [519.6] | 1515.6 [974.9] | 1586.9 [1721.0] | 2332.6 [2607.3] |
| RG 0.150 | 1431.9 [84.0] | 701.4 [147.8] | 380.5 [282.3] | 474.5 [530.6] | 750.8 [849.7] |
| RG 0.315 | 211.3 [72.9] | 125.2 [68.6] | **86.1** [79.1] | 102.8 [106.1] | 143.2 [155.5] |
| RG 0.661 | 253.4 [256.6] | 245.7 [246.3] | 239.7 [238.3] | 238.7 [236.4] | 241.3 [241.0] |

The pattern is systematic. Low knees, which sit inside discs, are where L2 does best, and there first-order L3
multiplies χ² by up to 20×. The striction is large there, and the approximation breaks. High knees give a small L3
improvement (2–10%), because the striction is small and inward. The L3 optimum moves to ρ_c ≈ 0.01 and lands at
**86.1** (RG form) and **91.0** (framework form), against MOND's 21.25. Nothing on the grid comes near MOND. Where first
order is valid, the striction moves χ² by percent; where it would move χ² a lot, first order is invalid.

## Pre-registration scorecard
| # | prediction | result |
|---|---|---|
| P1 | L3 SPARC RMS ≤ 0.1460 | **held** (0.14371) |
| P2 | γ_L3 ∈ [0.25, 0.45] | **held** (0.4435), but the attached reading was too strong: the shift is a 9% relabelling of the same curve, not a different shape |
| P3 | galaxy-boot ΔBIC 95% contains 0 | **held** ([−1.1, +3.5]) |
| P4 | frozen lensing χ² within ±60 of L2 | **held** (Δ −1.9 isolated, +2.3 hot gas) |
| P5 | x·μ_eff increasing for γ in 0.05–1; μ_eff > 1 iff γ > 1 | **held** |
| P6 | 2γ_L3 < 1 (tail slower than 1/x) | **held** (0.887) |
| Q1 | framework knees: \|Δχ²/N\| < 1% | **half refuted**: the site knee −0.0% (held); the Jeans knee −8.4% (refuted, bulge-driven) |
| Q2 | best L2 grid point: \|Δ\| > 10%, worsening | **held as worded (+92%)**, but carried entirely by points outside first-order validity. In the valid subset the change is −2%. The criterion measured the approximation's breakdown, not L3. |
| Q3 | no grid cell < 42.5 | **held** (best 86.1, RG form, floor 0.315, ρ_c 0.01; first order) |

## Implications for the Site
- **The `/for-researchers` scope clause** ("does not cover … the never-run L3 (striction) dynamics on SPARC") can be
  split three ways. **(a)** At the gradient keying, L3 has been run. It is AQUAL with γ relabelled, nested in MOND
  exactly as L2 is, and so adds no differing prediction. **(b)** At the framework's own density knee, L3 = L2 to < 0.1% and
  inherits every L2 kill. **(c)** At density knees inside discs (Refracted Gravity's regime), the striction exceeds
  gravity, so the open item is a self-consistent disc equilibrium, not a SPARC fit. Only (c) remains open, and it is
  open as a stability problem.
- **The γ ≈ ½ coincidence is wiring-dependent.** The site already says γ = ½ carries "no evidential weight". The
  stronger statement is that the fitted value moves 0.489 → 0.4435 between L2 and L3, which the data cannot tell apart. So
  "γ fitted to ≈ 0.5, MOND's own formula" holds under L2 only. Under L3, MOND's simple μ is not a member of the family at
  γ = ½ (μ_eff = x(x+3)/(x+2)²).
- **The Jeans-knee improvement is not a rescue.** 147 against 21, and it comes from bulges.

## Action: Maintainer
1. **`/for-researchers` l.26 (scope sentence):** replace "or the never-run L3 (striction) dynamics on SPARC" with
   roughly: "or density-keyed L3 (striction) dynamics where the knee sits inside discs. There the striction exceeds
   gravity, and the disc's equilibrium must be re-solved before any rotation curve can be scored. At the gradient
   keying, L3 has been run: it is AQUAL with γ relabelled to 0.44 and is SPARC- and lensing-indistinguishable from L2
   (explorer 2026-10-13). At the framework's own density knee it equals L2 to < 0.1%."
2. **`/coherence-function` l.125** ("Not in any of them: the striction force …"): append "At the framework's own knee
   (0.029 V²) the radial striction is ~10⁻⁵ of gravity, so these verdicts stand under L3 (explorer 2026-10-13)."
3. **Wherever "γ ≈ 0.49 ≈ ½ = MOND's simple μ" appears** (`first-encounter/page.tsx` l.36 "exactly MOND's own
   formula"; the "simple interpolating" sentences in 10 files, grep `simple interpolating`),
   add "(under the L2 field equation; the action-derived L3 puts the same curve at γ ≈ 0.44)". Badge:
   `reparametrization`.
4. **Wiring × keying table B** (pending render from 10-12): fill the "L3 (striction)" row. |∇Φ| column: "AQUAL, γ 0.4435,
   ΔBIC +1.4 [−1.1, +3.5]". Local-ρ column: "site knee = L2; Jeans −8%; in-disc knees beyond first order".
5. **site_lint:** REQUIRE "first order" or "fixed disc" within the window of any density-keyed L3 SPARC χ² quoted from
   this finding.

## Open Threads
- **The self-consistent disc under density-keyed striction.** Solve vertical (and radial) equilibrium with the
  striction force: hydrostatic gas plus a collisionless stellar disc with given σ_z. Does an equilibrium even exist at
  the RG knees, where outward striction exceeds gravity? If not, that is a kill of RG-regime placements under L3
  without any rotation curve. That would be a class result worth more than any refit.
- **Whether a self-consistent L3 disc compresses or puffs up.** Vertical striction at 164× K_z presumably reshapes ρ and
  moves the knee crossing. It might be self-regulating (driving ρ toward the knee), and that would be a genuinely new
  structural prediction (a preferred midplane density).
- **Solar System for the gradient-keyed L3:** run its tail against the Hees+2014/2016 ephemeris bounds together with the
  C_g survivor (queue topic on QUMOND/Cassini).
