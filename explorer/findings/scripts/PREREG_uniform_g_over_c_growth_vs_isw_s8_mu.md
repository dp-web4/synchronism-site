# PRE-REGISTRATION — the uniform G/C growth reading (U) vs ISW, S8, μ binned/μ0 (2026-10-07)

Written before computing any of the quantities below. The maintainer's σ8(0) = 0.916 and fσ8(0.51) = 0.575 are already
known, so P5 is a near-retrodiction; it is labelled as such.

## Model
- Background: flat ΛCDM, Ω_m0 = 0.315.
- (U): μ(a) = 1/Ω_m(a), with the early amplitude fixed at a = 1e-3.
- Two light-deflection branches:
  - Σ = μ (no slip: the lensing potential gets the same G/C);
  - Σ = 1 (lensing unmodified).

## Data (quoted; not refit)
- D1 DESI DR1 FS+BAO+CMB+DESY3+DESY5, ΛCDM background (Ishak+2024, 2411.12026):
  - μ0 = 0.05 ± 0.22, Σ0 = 0.008 ± 0.045, with template μ − 1 = μ0 Ω_DE(a)/Ω_Λ;
  - binned: μ1 = 1.02 ± 0.13 (0 ≤ z < 1), μ2 = 1.04 ± 0.11 (1 ≤ z < 2), Σ1 = 1.021 ± 0.029, Σ2 = 1.022 ± 0.025.
- D2 KiDS-Legacy cosmic shear: S8 = 0.815 (+0.016 −0.021); DES Y3: 0.776 ± 0.017.
- D3 ISW–galaxy cross-correlation: Stölzner+2018 detect it at 4.7–5.0σ. I read that as A_ISW ≈ 1.0 ± 0.2 (derived
  from the significance; positive sign). Renk+2017 excluded the cubic Galileon at 7.8σ on the *sign* alone.

## Projections (the method, fixed now)
- **ISW proxy.** A = ∫ n(z) D_L(z) d[Σ D/a]/dz dz ÷ (the same with D_L, Σ = 1). Use three n(z): Gaussian at
  z = 0.3 (σ 0.15), 0.5 (σ 0.2), 1.0 (σ 0.4). The galaxy weight is D_L (bias fixed by the auto-spectrum), and the
  potentials share the CMB normalization.
- **Binned μ_eff.** The constant μ in each bin that reproduces (U)'s D at the bin's upper edge. For bin 2 it starts
  from (U)'s own state at z = 2.
- **μ0_eff.** The value of μ0 in the Ω_DE template that reproduces (U)'s D(z = 0) and, separately, fσ8(0.5).
- **S8_eff.** σ8 scaled by D_U/D_L at the lensing-weighted z_eff = 0.3, times √(Ω_m/0.3). Under Σ = μ, multiply
  by Σ(z_eff), because the shear amplitude is ∝ Σσ8.

## Predictions
- P1 Σ = μ: A < 0 (sign flip) for the z = 0.3 and z = 0.5 kernels.
- P2 Σ = 1: 0 < A < 0.6 (reduced, not flipped).
- P3 μ1_eff ≥ 1.5, i.e. ≥ 3.5σ from D1.
- P4 μ2_eff within 2σ of D1 (≤ 1.26).
- P5 (near-retrodiction) S8_eff(Σ = 1) ≥ 0.90, i.e. ≥ 4σ above KiDS-Legacy.
- P6 μ0_eff ≥ 1.0, i.e. ≥ 4σ from D1.

## Verdict rule (exhaustive)
- **EXCLUDED-BY-EXISTING-DATA**: under BOTH Σ branches, ≥ 2 of {ISW, μ1/μ0 growth, S8} each exclude at ≥ 3σ.
- **BRANCH-SPLIT**: one branch meets that bar and the other does not. Name the surviving branch.
- **LIVE**: neither branch meets the bar. Then (U) is registered as a DR2 row before DR2 full-shape.
- The ISW counts only in the direction measured: A ≤ 0.4 is ≥ 3σ given σ_A ≈ 0.2 (derived).

## Identity controls
μ = 1 must give A = 1, μ_eff = 1 and μ0_eff = 0 to 1e-3. A template run with μ0 = 0.05 must return μ0_eff = 0.05.

## Caveat registered in advance
D1 is fitted with the Ω_DE template, not (U)'s 1/Ω_m − 1. The binned μ is the closer comparison. Neither is a refit;
a refit needs a Boltzmann code (MGCAMB with a custom μ(a)), and that is out of scope today.
