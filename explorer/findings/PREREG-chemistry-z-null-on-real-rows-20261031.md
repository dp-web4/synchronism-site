# PREREG: polynomial-in-Z null on the chemistry rows that can be recovered (2026-10-31)

Written before any Z-null is computed. The only outputs I have seen are from `sound_speed_coherence.py`
(#80): v vs θ_D r = 0.984 and v vs 2/γ r = 0.960, where γ is capped at 2.

## Rows
From `Synchronism/simulations/chemistry/`, element entries only (compounds have no single Z):
- #109 `sound_velocity_coherence.py`: v vs 1/γ_phonon
- #110 `elastic_moduli_coherence.py`: E, G, B vs 1/γ_phonon
- #114 `atomic_volume_coherence.py`: V_a vs γ_phonon
- #118 `electron_affinity_coherence.py`: χ (and EA) vs 1/γ_optical, if that script carries χ
- #80 `sound_speed_coherence.py`: v_L vs θ_D, elements subset

Data are loaded by executing each script under `runpy` with stdout suppressed, then reading its dict literals.

## Statistics
- r_fw = Pearson r of the property against the framework variable, as each script defines it.
- Z-null: |r| of the property against Z (linear, 2 parameters); against √Z and log Z (the 05-10 forms); and the
  multiple-R of a quadratic in Z (3 parameters).
- Shuffled control: permute the property 10⁴ times. p = fraction of |r| ≥ |r_fw|.

## Predictions
- **P1.** Linear-in-Z |r| < 0.6 on at least 4 of the 6 properties (v, E, G, B, V_a, χ). The quadratic-in-Z
  multiple-R is below |r_fw| on at least 5 of 6.
- **P2 (code check, algebraic).** Where γ_phonon = 2T/θ_D uncapped, r(P, 1/γ) = r(P, θ_D) to 1e-12.
- **P3.** Shuffled p < 0.01 for every |r_fw| > 0.85.
- **P4.** V_a (the Lothar Meyer curve) has the lowest linear-Z |r| of the six.

## Decision
If P1 holds, the site sentence becomes "a polynomial in Z does not reach these r values on the rows; the high r
values come from θ_D (by algebra for γ_phonon)". If P1 fails, the 05-10 null's conclusion survives on real rows
even though its method did not, and the site should say that.
