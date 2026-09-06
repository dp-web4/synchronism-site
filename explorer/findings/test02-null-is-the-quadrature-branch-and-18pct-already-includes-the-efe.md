# Finding: TEST-02 — the sub-percent null belongs to the quadrature branch, and "MOND ~18 %" already includes the EFE

## Origin
Topic `test02-which-branch-predicts-the-null-and-mond-efe-range.md` (maintainer, 2026-09-06). The literature
check was delegated to a verification agent (Chae 2023/2024/2025, Banik+2024, Pittordis & Sutherland 2023,
Banik & Zhao 2018, Hernandez 2023); the branch computation is in
`findings/scripts/knee_inventory_oort_limit_and_globular_clusters.py` §E4.

## Summary
Both sentences the maintainer added to the TEST-02 row on 2026-09-06 need correcting. (1) The 0.05–0.4 %
null is **not** the density-keyed division branch's prediction at the site's knee: at the calibrated or
stated ρ_crit that branch predicts a **+78 % / +65 %** wide-binary velocity excess (B = 1/Ω_m), four times
MOND's; the null comes either from the quadrature coupling (deviation ~C²/2 ≈ 10⁻⁸) or from Session 691's
evaluation at a fourth knee (10⁻²³ kg/m³) with a dark-matter halo inside ρ_local. (2) "MOND ~18 % is the
EFE-free figure" is backwards: √1.40 − 1 = 18 % *is* the EFE-included AQUAL/QUMOND number at
g_ext = 1.8 a₀ (Banik+2024 Table 4: η = 1.406/1.423 simple IF); EFE-free simple-ν at g_N = 10⁻¹⁰·¹⁵ gives
~1.9× in g, ~38 % in v. The "1.0–1.4× in g" bracket is real but is **interpolating-function** dependence
(sharp IF 1.0, standard 1.07, MLS 1.35, simple 1.41–1.42), not the Chae–Banik dispute; Chae's AQUAL
prediction (1.37 at g_ext ≈ 1.9 a₀) and Banik's (1.41) agree. The dispute is observational.

## Research Notes

### What the site says (verbatim, 2026-09-06)
`/tier-1-existing` TEST-02 kill field: "a Gaia-confirmed MOND-scale wide-binary anomaly (~18 % velocity
deviation; Chae-type ~1.4× boost at low internal acceleration) … REFUTES C(ρ), which predicts a Newtonian
null (0.05–0.4 %)" and "'MOND ~18 %' is the EFE-free figure: with the Milky Way external field (~1.8 a₀),
AQUAL/QUMOND + EFE give a 1.0–1.4× boost in g depending on treatment, which is the entire Chae (2023–25) vs
Banik et al. (2024) dispute." `/wide-binaries` lines 60–62 and 166 carry the 0.05–0.4 % vs ~18 % contrast.

### Literature table (verified by the agent against abstracts / tables; arXiv IDs)

| Paper | MOND+EFE boost in g | in v | Observed | vs Newton | vs MOND |
|---|---|---|---|---|---|
| Banik & Zhao 2018 (1805.12273) | ~1.4 implied | "≈20 %, simple IF" | — | — | — |
| Pittordis & Sutherland 2023, MNRAS 519 1466 (2205.02846) | BZ18 model | ~20 % | Newton-like | — | Δχ² = 525 (as quoted by Banik+24) |
| Chae 2023, ApJ 952 128 (2305.04613) | AQUAL G′ ≈ 1.37 G at g_ext ≈ 1.9 a₀ | 17 % | γ_g = 1.43 ± 0.06 | 10σ | consistent |
| Hernandez 2023, MNRAS 525 1401 (2304.07322) | — | — | anomaly at a ≲ 2 a₀ | — | — |
| Banik+ 2024, MNRAS 527 4573 (2311.03436) | η = 1.4056 AQUAL / 1.4228 QUMOND (simple IF, g_ext = 1.8 a₀) | 19 % | α_grav = −0.021 (+0.065/−0.045) | Newton preferred 19σ | MOND excluded 16σ |
| Chae 2024, ApJ 960 114 (2309.10404) | — | γ_v = 1.20 ± 0.06 ± 0.05 | γ_g = 1.49 (+0.21/−0.19) | ~5σ | consistent |
| Chae 2024b (2402.05720) | AQUAL χ²_ν 0.5–3.1 | — | γ_g = 1.37 (+0.10/−0.09) | 5.8σ (9.2σ largest sample) | acceptable |
| Chae 2025, ApJ 985 (2502.09373) | γ_g ≈ 1.4 predicted | — | 1.48 (N = 35); 1.34 (N = 111); 1.00 ± 0.05 at high g | 3–5σ | consistent |

Banik+2024 Table 4 at g_ext = 1.8 a₀: η = 1.4056/1.4228 (simple, AQUAL/QUMOND), 1.3508/1.3692 (MLS),
1.0661/1.0726 (standard), 1.0 (sharp). Banik states the sharp IF "is in strong tension with rotation curve
constraints." The other no-boost route is modified-inertia MOND (Milgrom 1994/2011/2022), a different theory.
Banik+2024 also states that without the EFE "the boost factor would continue growing linearly with r" — the
saturating ~18–20 % figure exists *because of* the EFE.

Housekeeping: the topic's "Hernandez arXiv:2306.02533" is a machine-learning paper; the correct ID is
2304.07322. The 0.05–0.4 % and "~80× below systematics" numbers are internal and were not verifiable from
literature; their provenance is traced in the companion knee-inventory finding §5.

### The branch computation (script §E4, solar midplane ρ_bar = 0.084 M☉/pc³)

| placement | γ | x | division, floored: Δv/v | division, bare | quadrature: Δv/v |
|---|---|---|---|---|---|
| calibrated A = 0.029 | 2 | 6×10⁻⁵ | **+78 %** | +9×10³ % | 7×10⁻⁷ % |
| stated A = 4.6×10⁻⁵ | 2 | 0.038 | **+65 %** | +268 % | 0.27 % |
| stated A = 4.6×10⁻⁵ | 0.489 | 0.038 | +75 % | +643 % | 0.016 % |
| S691 10⁻²³ kg/m³ | 2 | 570 | 0.00 % | 10⁻⁹ % | (ill-defined) |

The only rows in the site's 0.05–0.4 % band are quadrature at the stated knee (0.02–0.27 %) and S691's
saturated evaluation. The ledger's law (division, floored) — the same law that produces TEST-09/10's boost
ceiling — predicts +78 %, which Gaia excludes at every reading: Banik's gravity-within-8 %-of-Newton and
Chae's +16–22 % both sit far below it. So the row's "self-eliminating-or-tie" verdict is wrong in its reason:
**under the ledger's law, TEST-02 is a kill on both sides of the dispute**, not a tie; under the quadrature
law it is a tie with Newton, and that law is the one the plotter shows failing SPARC by 10×.

## Implications for the Site
- The TEST-02 row now makes three unverified claims, two of them false: the EFE-free attribution, and the
  branch attribution. The 1.0–1.4 bracket is defensible only with "depending on interpolating function
  (sharp → simple); RAR-compatible IFs give 1.35–1.42."
- The "MOND ~18 %" figure was right all along, provided it is labelled EFE-included.

## Action: Maintainer
1. **P1** `/tier-1-existing` TEST-02 kill/alert: delete "EFE-free"; write "MOND + EFE (AQUAL/QUMOND, simple
   IF, g_ext = 1.8 a₀): 1.41–1.42× in g, ≈ 18–19 % in v (Banik+2024 Table 4; Chae 2023 AQUAL 1.37). Range
   1.0–1.42 across interpolating functions; the sharp-IF end is rotation-curve-excluded. The Chae–Banik
   dispute is observational (sample cuts, hidden companions, deprojection), not theoretical."
2. **P1** Same row and `/wide-binaries`: "the 0.05–0.4 % null is the quadrature coupling's (or the S691
   evaluation at ρ_crit = 10⁻²³ kg/m³ with a DM term in ρ_local). The ledger's floored division law predicts
   +78 % — excluded by Gaia under both Chae and Banik."
3. **P2** Fix the Hernandez arXiv ID wherever 2306.02533 appears.

## Open Threads
- Chae 2024's γ_v = 1.20 ± 0.06 ± 0.05 is the one *velocity-space* measurement; the framework's quadrature
  branch predicts 1.000. At what N would Gaia DR4 separate 1.00 from 1.20 at 5σ given Saad & Ting's
  hidden-companion systematics? That is the only residual TEST-02 content once the division branch is dead.
