# Finding: With Wolf's coefficient fixed, dwarfs no longer close 1/Ω_b = 20.3, and Crater II is now observed to be disrupting, so the dSph leg rests on Draco

## Origin
Maintainer addendum (2026-11-19) on `can-tides-rescue-the-cap-family-on-draco-and-crater-ii-and-a-registered-dsph-class-test.md`.
The request: (1) fix the coefficient in my 08-23 script and re-run the table, including the 20.3 row; (2) check Crater II
against published tidal-disruption work. This is a side task. The session's main work is the reinvention ablation.

## Summary
- **Coefficient.** My 08-23 scripts (`pressure_supported_boost_ceiling.py`, `pressure_supported_dsph_fork_matrix.py`)
  used Wolf's coefficient 4 with the 3D half-light radius. Wolf's 4 goes with the projected R_e; with r₁/₂ the
  coefficient is 3. Every B_req was 4/3 too high.
- **Corrected values.** B_req is 45.1 for Crater II and 76.1 for Draco at fiducial M/L = 2 (was 60.2 and 101.5).
  - Identity control: these match the maintainer's independent `cap6p39_vs_dsph_estimator.py` Wolf rows exactly
    (45.1 / 76.1; M/L = 4 edges 22.6 / 38.1).
- **The 1/Ω_b = 20.3 row.** Both systems' entire M/L bands sit above 20.3 (lower edges 22.6, 38.1). On the random σ
  error alone they clear it at only **2.5σ (Crater II) and 2.8σ (Draco)** at fiducial M/L, so neither passes the
  script's own 3σ rule.
  - The maintainer's Wolf rows put the largest excluded cap at 8.4 (Crater II) and 11.0 (Draco).
  - **"Dwarfs close 20.3" is withdrawn**, not merely "fiducial only".
- **Crater II is observed to be disrupting.**
  - Limberg et al. 2025 (S⁵, arXiv:2512.02177, abstract as returned by search) report "central velocity dispersion
    2.51 +0.33 −0.30 km s⁻¹" and "a ≈7σ velocity gradient consistent with its tidal debris track".
  - Vivas et al. 2025 (arXiv:2512.05535) cite ~15°-long RR Lyrae tails. I read only the snippet; I did not read their
    conclusion.
  - An equilibrium estimator on a system with a detected debris gradient is not a light-rule-free test. Crater II
    should leave the equilibrium leg.
  - Separately, the newer central σ (2.51 vs 2.7) multiplies B_req by 0.86 before any tidal argument.
- **What is left: Draco.** It is usually called the most equilibrium-safe classical dSph.
  - Under Wolf it excludes the cap family to ≈ 11, with a ≥ 1.31× σ inflation needed to escape (maintainer numbers).
  - Under Walker+2009 it excludes to ≈ 6.9, still above 6.39 (needs ≥ 1.04×).
  - So the 6.39 cap is excluded by one system, and the significance depends on the estimator.

## Research Notes
- Corrected table (`findings/scripts/pressure_supported_boost_ceiling_output.txt`). The 6.39 and 20.3 rows were added,
  and the old output is in git history.

| system | B_req (M/L fid) | M/L band | vs 6.39 | vs 20.3 |
|---|---|---|---|---|
| Crater II | 45.1 | 22.6–90.3 | band-robust, 3.9σ | band above, 2.5σ (fid only) |
| Draco | 76.1 | 38.1–152.3 | band-robust, 3.5σ | band above, 2.8σ (fid only) |
| Sculptor | 20.0 | 10.7–32.0 | fid only | passes |
| Fornax | 4.2 | 2.6–7.0 | passes | passes |

- The σ in the "vs" columns uses the random σ_obs error only, at fiducial M/L (the 08-23 convention). The maintainer's
  z values use a different error model. The B_req values agree exactly, and the significances need not.
- **My 2.34 km/s recall for Ji+2021 is unverified.** I recalled a Ji et al. 2021 Crater II σ of 2.34 km/s; the search did
  not confirm it, so it is not used. The 2.51 figure is quoted from the Limberg+2025 abstract text returned by the
  search.
- **Direction of the tidal effect.** In ΛCDM work (Sanders+2018; Borukhovetskaya+2022 per arXiv:2112.01540's snippet),
  tides *lower* Crater II's σ, and its large size is the problem. That points the "inflation" escape the wrong way. A
  detected debris gradient means the measured global σ can carry streaming, though, and the central σ is already
  lower. The honest status is "not an equilibrium tracer", not "escape closed".

## Implications for the Site
- Every surface that says dwarfs close 20.3, or that names Crater II as an equilibrium exclusion, needs the downgrade.
- The cap-family exclusion by matter dynamics is one system (Draco), estimator-dependent (≈ 7–11).

## Action: Maintainer
- `/for-researchers#other-theories` and the bounded-boost joint-constraint text (the `BOUNDED_BOOST_JOINT` constant in src):
  - drop "dwarfs close 1/Ω_b = 20.3";
  - move Crater II from the exclusion leg to "observed disrupting (Limberg+2025 7σ gradient)";
  - state the Draco-only exclusion as ≈ 7 (Walker) to ≈ 11 (Wolf).
- PREDICTIONS `TEST-10` / cap rows: the same one-line change.

## Open Threads
- A registered dSph class test on a full compilation, with Draco-like systems and no detected gradients, is still the
  real test (the topic's second half, unworked).
- Read Vivas+2025's conclusion and the Limberg+2025 dispersion profile. Is the 2.51 central σ binary-corrected?
