# Finding: The uniform G/C growth reading is excluded by existing data. Without slip the ISW sign flips; the slip branch is excluded at ≈ 3.5σ without any weak lensing

## Origin
Topic `uniform-g-over-c-growth-vs-s8-isw-and-mu0.md`, seeded by the maintainer on 2026-10-07. Pre-registered
`be3ecba` before any of the quantities below were computed.

## Summary
The uniform reading (U) gives μ(a) = 1/Ω_m(a) for every γ. It is **EXCLUDED-BY-EXISTING-DATA** under the registered
rule: both light-deflection branches meet the ≥ 2-probes-at-≥ 3σ bar.

- **Σ = μ (no slip).** A pure rescaling of G gives no anisotropic stress, so this is the plain reading.
  - The lensing potential Φ+Ψ ∝ D/(aΩ_m) *grows* 2.7× from z = 3 to today.
  - The ISW–galaxy cross-correlation therefore flips sign: proxy A ≈ −8.5 against the observed positive ≈ 1.0 ± 0.2.
    That is the same categorical test that killed the cubic Galileon (Renk+2017, A = −2.4, 7.8σ).
  - Σ₁ ≈ 1.6 against DESI DR1's 1.021 ± 0.029 (~20σ).
- **Σ = 1 (lensing unmodified).** This branch needs a slip mechanism that the framework does not supply.
  - S₈ = 0.890 is +4.7σ from KiDS-Legacy. That is +3.7σ incremental over ΛCDM's own offset.
  - DESI+CMB with no lensing of any kind puts it at +3.2 to +3.6σ (post-hoc row).
  - ISW is only reduced (A ≈ 0.52, −2.4σ), not flipped.

What this does to TEST-04a: of the three growth readings, (S) is withdrawn and (U) is excluded. (F) is
ΛCDM to 0.2 % and nested. **No live growth reading differs from ΛCDM at DESI DR2 precision**, so the TEST-04a DR2
registration has nothing to discriminate. That answers dp's open "name S/F/U, or retire it": retire it as a
discriminating test.

## Research Notes

### Set-up
- Flat ΛCDM background, Ω_m0 = 0.315.
- μ(a) = 1/Ω_m(a), early amplitude fixed at a = 10⁻³ (μ → 1 there, so the CMB-era amplitude is unchanged).
- Script `findings/scripts/uniform_g_over_c_growth_vs_isw_s8_mu.py` (+ `_output.txt`).
- Identity controls pass to 10⁻⁵: μ = 1 gives A = 1, μ_eff = 1 and μ₀_eff = 0. A template run at μ₀ = 0.05 returns
  0.0500.

### Growth itself (reproduces the maintainer)

| z | μ_U | D_U/D_ΛCDM | fσ₈ (U) | fσ₈ (ΛCDM) |
|---|---|---|---|---|
| 0 | 3.18 | 1.129 | — | — |
| 0.3 | 1.99 | 1.071 | 0.627 | 0.474 |
| 0.5 | 1.64 | 1.050 | 0.578 | 0.475 |
| 1.0 | 1.27 | 1.023 | 0.473 | 0.431 |
| 2.0 | 1.08 | 1.007 | 0.334 | 0.324 |

The enhancement is late and concentrated at z < 1. That is why a single bin like LRG1 (+0.4σ) can look fine while
the binned and integrated constraints do not.

### Registered probes

| Probe | Data | Σ = μ | Σ = 1 |
|---|---|---|---|
| ISW proxy A, z = 0.3 / 0.5 / 1.0 kernels | ≈ 1.0 ± 0.2 (derived from Stölzner+2018's 4.7–5.0σ) | −9.7 / −8.5 / −7.5 (**sign flip**) | +0.53 / +0.52 / +0.52 (−2.4σ) |
| μ₁ (0 ≤ z < 1) | 1.02 ± 0.13 (Ishak+2024 Table 6) | 1.615 (+4.6σ) | 1.615 (+4.6σ) |
| μ₂ (1 ≤ z < 2) | 1.04 ± 0.11 | 1.129 (+0.8σ) | 1.129 (+0.8σ) |
| Σ₁ | 1.021 ± 0.029 | ≈ 1.6 (+20σ) | 1 (pass) |
| μ₀ template (Ω_DE(a)/Ω_Λ) | 0.05 ± 0.22 | 0.99 (D(0) match) / 0.91 (fσ₈(0.5) match): +4.3 / +3.9σ | same |
| S₈ at z_eff = 0.3 | KiDS-Legacy 0.815⁺⁰·⁰¹⁶₋₀.₀₂₁; DES Y3 0.776 ± 0.017 | 1.77 (+60σ) | 0.890 (+4.7σ KiDS, +6.7σ DES) |

- Σ = μ: 3/3 probes exclude.
- Σ = 1: 2/3 exclude (μ/μ₀ and S₈); ISW does not reach 3σ.
- Verdict: EXCLUDED-BY-EXISTING-DATA.

### Predictions
- Held: P1 (sign flip), P2 (Σ = 1 reduces A to 0–0.6), P3 (μ₁ ≥ 1.5), P4 (μ₂ within 2σ).
- Failed: P5 (S₈ ≥ 0.90; it came out 0.890 because z_eff = 0.3 dilutes the z = 0 boost) and P6 (μ₀_eff ≥ 1.0;
  it came out 0.993).
- Both failures are narrow and in the direction of a weaker exclusion. I note them rather than round them.

### Post-hoc: independence of the two Σ = 1 probes
The registered rule counted "growth (D1)" and "S₈ (KiDS)" as separate probes. Reading Ishak's table afterwards, the
D1 rows I registered include **DES Y3 3×2pt**. That is a different survey from KiDS, but the same lensing physics,
so under Σ = 1 the two probes are not fully independent.

Script `findings/scripts/uniform_g_over_c_posthoc_lensing_free_mu0.py` re-scores μ₀ against Ishak's Table 3 rows
that use no galaxy weak lensing. Those rows use the μ₀–η parameterization with η free, so Σ is marginalized and the
comparison covers both branches.

| Dataset (no galaxy WL) | μ₀ | (U) at D(0) / fσ₈(0.5) match |
|---|---|---|
| DESI FS+BAO+BBN+n_s (no CMB) | 0.17 ⁺⁰·⁴⁵₋₀.₅₆ | +1.8σ / +1.6σ |
| DESI + CMB (L-H) no lensing | 0.17 ± 0.23 | +3.6σ / +3.2σ |
| DESI + CMB (L-H) with CMB lensing | 0.18 ± 0.23 | +3.5σ / +3.2σ |

- The lensing-free exclusion of Σ = 1 is ≈ 3.2–3.6σ. It is anchored on the CMB primordial amplitude against DESI's
  late-time fσ₈.
- DESI clustering alone (no CMB anchor) gives only ≈ 1.7σ.
- KiDS S₈ is then a second, independent ≈ 3.7σ (incremental).
- So the Σ = 1 branch is excluded at ≈ 3.5σ on each of two independent legs, not at the ≥ 5σ the registered D1 row
  suggests. That is a solid exclusion, but nowhere near the Σ = μ branch's categorical sign flip.

### Why Σ = μ is the reading, not one of two
"G → G/C" with no other field content rescales both metric potentials together, so Φ = Ψ and Σ = μ. Getting Σ = 1
needs gravitational slip, which needs an anisotropic-stress source. The framework has no such source, and no
covariant action exists for it at all (site note). Σ = 1 is a rescue the theory does not supply. The plain reading
is the categorically failed one.

### Prior art
Koivisto, Kurki-Suonio & Ravndal 2005 (PRD 71, 064027) found that modified-gravity Cardassian branches over-produce
the ISW. The site imports that line; this run executes the corresponding sign test for (U). The direction agrees:
at fixed CMB amplitude, the late-time growth of Φ+Ψ is the failure.

### Caveats (registered or found)
- The ISW proxy is a Limber-style kernel ratio with bias fixed to D_ΛCDM. It does not replace a Boltzmann-code
  C_ℓ^{Tg}. The sign is robust: Φ+Ψ grows monotonically for z < 3. The magnitude (−8.5) is indicative only.
- μ₀ and μ₁ are projections, not refits. The template's time dependence (∝ Ω_DE) differs from (U)'s (Ω_DE/Ω_m).
  The two matching choices bracket the result (0.91–0.99), and the binned μ₁ agrees in direction and size.
- S₈ is ΛCDM-conditioned and the lensing kernel z_eff = 0.3 is a single-point stand-in.
- The background is held at ΛCDM. That is the substituted family's own corner (γ ≈ 0.487); a w ≠ −1 corner would
  shift Ω_m(a) slightly.
- A full MGCAMB run with μ(a) = 1/Ω_m(a) is the next rung. It would turn every σ here into a likelihood. I expect it
  to strengthen Σ = μ (Planck TT large-scale ISW, which this run does not include) and to leave Σ = 1 near 3–4σ.

## Implications for the Site
- In /dark-energy#growth-readings, the "Uniform G/C" row's open question ("does the uniform reading survive weak-lensing
  S₈…") is now answered. Without slip the ISW sign flips (A ≈ −8.5 vs +1.0 ± 0.2; the cubic Galileon died the same
  way). With slip it is excluded at ≈ 3.5σ by DESI+CMB with no lensing, and independently by KiDS S₈ at ≈ 3.7σ. The
  row's verdict becomes "excluded by existing data (retrodiction; estimate, projected, not refit)".
- On TEST-04a (/tier-1-existing card): with (S) withdrawn and (U) excluded, the only growth reading left is (F),
  which is ΛCDM to 0.2 % (0.10σ). The DR2 registration cannot discriminate the framework from ΛCDM, in either
  direction. Retire it as a discriminating test and keep it as a record row: "growth: no live non-nested reading".
- This also moves the 10-04 stopping table. Growth was implicitly a candidate fourth "can-only-lose" row. It is not
  one: it cannot lose against ΛCDM, so it is not a test at all.

## Action: Maintainer
1. /dark-energy `#growth-readings`, Uniform G/C row, status cell. Append: "Excluded by existing data (2026-10-07,
   explorer; estimate). Without slip (Σ = μ, the reading a G-rescaling gives) the ISW–galaxy correlation changes sign
   (proxy A ≈ −8.5 vs observed ≈ +1.0 ± 0.2), and Σ₁ ≈ 1.6 vs DESI's 1.021 ± 0.029. With slip (Σ = 1, no mechanism
   in the framework), DESI+CMB without lensing puts μ₀ at +3.2–3.6σ and KiDS-Legacy S₈ = 0.890 sits +3.7σ beyond
   ΛCDM's own offset. Script: `explorer/findings/scripts/uniform_g_over_c_growth_vs_isw_s8_mu.py` (pre-registered
   be3ecba)." Replace the closing "Open question: does the uniform reading survive…" sentence with the result.
2. /tier-1-existing TEST-04a provenance note. Add: "Of the three readings, (S) is withdrawn and (U) is excluded by
   existing data. (F) differs from ΛCDM by 0.2 %, so DR2 cannot discriminate. Recommended: retire as a
   discriminating test." Let dp choose the badge (`superseded` or `audited-negative`).
3. site_lint: add a REQUIRES rule so that "0.575" or "+21 %" on any page carries "excluded" or "retrodiction" within
   ±3 lines. Otherwise the enhancement number will propagate as a live prediction.

## Action: dp
- TEST-04a: this finding recommends **retire**, not "name a reading". The only living reading is nested.
- Rule candidate: before counting probes as independent, list each probe's datasets. The registered "growth" row
  here carried DES Y3 lensing, and the independent margin fell from ~5σ to ~3.5σ.

## Open Threads
- MGCAMB with μ = 1/Ω_m(a) under both Σ choices. This gives a real likelihood, including Planck's large-scale TT ISW.
- Is there *any* growth reading between (F) and (U)? For example, G/C keyed on a smoothed density at the perturbation
  scale, which would interpolate. If so, it carries a scale and therefore a parameter, so it is nested and no longer
  parameter-free. A short argument may close this without computing anything.
- The local/global split: (U) keys C on ρ̄_m for linear modes, while galaxies key it on local density. The
  transition scale is exactly the locality question of 08-18, seen from the growth side.
