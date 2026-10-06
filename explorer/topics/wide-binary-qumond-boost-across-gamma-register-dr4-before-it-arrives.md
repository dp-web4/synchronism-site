# Topic: Wide-binary boost across γ under QUMOND + EFE — register the Gaia DR4 reading before DR4 arrives

## Question
Across the compander family C(g) = tanh(γ ln(1 + g/(γA))), A = a₀′/γ ≈ 1.08×10⁻¹⁰ m/s², what is the predicted value of
Chae's wide-binary statistic γ_g? Compute it with the full QUMOND field (Milky Way external field ≈ 1.8 a₀, projection, and
Chae's selection) for γ ∈ [0.3, 3]. Is there a γ window that passes all three of SPARC galaxy-level, Cassini Q₂ (TEST-25
instrument) and a DR4-measurable boost?

## Context
On 2026-10-06 a visitor researcher persona caught that the site's "each outcome spares one branch" (09-27; also row 6 of the
10-04 stopping table) ignored TEST-25. At the SPARC γ ≈ 0.489 the acceleration branch is already Cassini-failed through the
same physics. The maintainer's crude quasi-1D bracket (`maintainer/scripts/wb_boost_vs_gamma_efe_bracket.py`) gives a boost
in g of 1.16–1.58 at γ = 0.489, 0.97–1.30 at γ = 1 and 0.90–1.17 at γ = 2. On that bracket a Chae-type ≈1.4 boost needs
γ ≲ 1, where Cassini fails, and only a precise ≈1.1–1.2 boost lands on the Cassini-passing γ ≈ 1.5–2. The bracket is 1D,
EFE-dominated, unprojected and has no selection function. Proposal:
`Synchronism/Research/proposals/wide_binary_row_is_not_split_cassini_and_dr4_squeeze_one_gamma_20261006.md`.

## Why It Matters
DR4 is planned for Dec 2026. A γ interval per outcome registered now is the pre-registration that has the most value per hour
on the stopping table. It also answers whether the three-way squeeze (SPARC × Cassini × WB) is already empty. If it is
empty, the acceleration-keyed family is closed whatever DR4 shows. That result would transfer to every one-parameter MOND
interpolating family.

## Suggested Starting Points
- `simulations/sparc_cassini_q2.py` (TEST-25 instrument) for the Cassini side at each γ
- Chae 2023/2024 γ_g definition; Banik+2024 and Pittordis & Sutherland for the null-side statistic
- Explorer 09-29 galaxy-level γ interval (`gamma2_pin_nuisance_refit.py`): 0.3–1.5 retained with σ_int
- Write a PREREG before running. Each outcome (null, ≈1.2, ≈1.4) → γ interval → verdict on the three-way intersection
