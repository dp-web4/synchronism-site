# PREREG — blind-sector γ test, He-4 superfluid fraction (explorer 2026-11-16)

**Status: registered before the fit code exists. NOT blind.** The fetch agent's report printed Donnelly & Barenghi
Table 2.4 (ρ_s/ρ vs T, rounded) before this file was written, so I had seen the data's shape (e.g. 0.447 at 2.00 K,
0.259 at 2.10 K). The registration below fixes the numbers, conventions and pass/fail lines; it does not hide the data.

## Data
- Donnelly & Barenghi 1998 (JPCRD 27, 1217) Table 2.1, rows with key 2 (Maynard 1976) and key 3 (Tam & Ahlers 1987):
  48 rows, 31 unique T, 1.203–2.164 K (t = T/T_λ = 0.553–0.994), from second- and fourth-sound velocities, "< 5 %".
- Key 1 (Landau theory, T < 1.25 K) and key 4 (Singsaas & Ahlers asymptotic formula, T > 2.07 K) are **excluded**:
  they are model output, not measurements (catalogue-columns-can-be-model-derived).
- ρ_s/ρ uses total ρ = ρ_s + ρ_n interpolated from Table 2.3. T_λ = 2.1768 K (last knot, ρ_s = 0).

## Template and conventions
ρ_s/ρ = tanh(γ ln(β(1/t − 1) + 1)), the archive's superconductor form (`gamma_incumbent_map/sc2.py`).
Conventions: β = 1, **β = 2 (primary; the archive's SC convention)**, β free. Loss: unweighted least squares in ρ_s/ρ
(primary); relative-weighted (secondary).

## Registered γ_eq (incumbent fitted on the data's own T grid, no ρ_s values used) — `incumbents_output.txt`
| incumbent | β=1 | β=2 | β free (β) | β free, rel-wt |
|---|---|---|---|---|
| I1 London ideal BEC 1−t^1.5 | 1.220 | 0.711 | 0.636 (2.34) | 0.624 |
| I2 Landau phonon+roton gas | out of span: never vanishes at T_λ (ρ_s/ρ = 0.55 at 2.16 K); γ_eq meaningless | | | |
| I3 Andronikashvili 1−t^5.6 | 4.090 | 2.243 | 1.321 (3.95) | 1.135 |

## Predictions / criteria
- **R (the incumbent rule).** PASS if γ_fit is within 10 % of γ_eq(I1) or γ_eq(I3) under both β = 2 and β free (unweighted);
  FAIL if it is more than 20 % from both under both; otherwise AMBIGUOUS. Also reported in bootstrap σ_γ units.
- **My forecast (not blind):** β = 2: γ_fit in 2.0–2.3 (near I3). β free: γ_fit in 0.9–1.3 with β_fit > 3.95.
- **S (shape).** The template is linear in (1 − t) at the transition for every γ, β; the measured ρ_s ∝ (1 − t)^0.67
  (3D XY). Forecast: template rms on the data exceeds the rms of the same-dimension rival (1 − t^a)^b (2 parameters,
  exponent b at T_λ), and exceeds 2× the duplicate-row scatter.
- **Controls.** Identity: the fit code on I3 evaluated on the grid returns 2.243 (β = 2) and 1.321 (β free).
  Injection: on I1 it returns 0.711 / 0.636. Split: Maynard-only and Tam & Ahlers-only fits (two experiments).
