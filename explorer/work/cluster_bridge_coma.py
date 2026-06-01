"""
C(ρ) Cluster-Scale Bridge Test — Coma cluster
2026-05-28 explorer session

The question: given C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)) calibrated on galaxies,
does ANY natural ansatz reproduce the cluster-scale apparent-mass discrepancy?

Coma (well-measured):
  M_500 (baryonic, mostly gas, within r_500 ≈ 1.4 Mpc) ≈ 1.5–2.0 × 10^14 M_sun
  M_500 (lensing/total) ≈ 5.5–7 × 10^14 M_sun
  Apparent mass discrepancy factor ≈ 4–5 within r_500.
  At larger radii (r_200, virial), the ratio grows to ~6–8.

  Gas density: isothermal beta model
    n_e(r) = n_0 [1 + (r/r_c)^2]^(-3β/2)
    n_0 ≈ 3.4 × 10^-3 cm^-3, r_c ≈ 290 kpc, β ≈ 0.65 (Briel+1992)
    ρ_gas(r) = 1.4 m_p n_e(r) for primordial composition

  Star fraction is small (~5–10% of gas at cluster scale) — neglect for now.

Galaxy ρ_crit calibration:
  ρ_crit = A · V_flat^2 where A = 4π / (α² G R_0²)
  For a Milky-Way-like galaxy: V_flat = 220 km/s, R_0 = 10 kpc (galactic scale-length), α ≈ 1.
  This gives ρ_crit ≈ V_flat^2 / (G R_0^2) in SI/cgs.

  Numerically: V_flat^2 = (220e5 cm/s)^2 = 4.84e12 cm²/s²
               G = 6.674e-8 cgs
               R_0 = 10 kpc = 3.086e22 cm; R_0^2 = 9.52e44 cm²
               ρ_crit ≈ 4.84e12 / (6.674e-8 × 9.52e44 × 4π) ≈ 6.1e-24 g/cm³ for α=1.

  (Actual value used on site varies because α and R_0 are anchor choices.
   I will scan over a plausible range to avoid order-of-magnitude lock-in.)

The four ansätze tested:
  A1: G_eff = G / C̄,  M_app = M_B × ⟨1/C(ρ)⟩      (acceleration-style legacy from Session 197/199)
  A2: M_app = M_B / (1 − ⟨C⟩)                       (saturation as "shielding fraction")
  A3: M_app = M_B + ∫ C(ρ)·ρ dV                     (coherent fraction adds apparent mass)
  A4: M_app = M_B × ⟨C(ρ)⟩^(-η),  η chosen          (compander-encoded mass amplification)
"""

import numpy as np

# Physical constants (cgs)
G = 6.674e-8
m_p = 1.673e-24
kpc = 3.086e21
Mpc = 1000 * kpc
M_sun = 1.989e33
km_per_s = 1e5

# ===== Galaxy-calibration of ρ_crit =====
def rho_crit_galaxy(V_flat_kms=220.0, R0_kpc=10.0, alpha=1.0):
    """ρ_crit = 4π V²/(α² G R0²) per Session 53 Jeans-criterion anchor."""
    V_cms = V_flat_kms * km_per_s
    R0_cm = R0_kpc * kpc
    return 4 * np.pi * V_cms**2 / (alpha**2 * G * R0_cm**2)

# ===== C(ρ) =====
def C(rho, rho_crit, gamma=2.0):
    """Compander: tanh(γ·ln(ρ/ρ_crit + 1)). Returns scalar or array."""
    return np.tanh(gamma * np.log(rho / rho_crit + 1.0))

# ===== Coma gas density profile (Briel+ 1992 / standard) =====
def rho_gas_coma(r_kpc, n0=3.4e-3, rc_kpc=290.0, beta=0.65):
    """Gas mass density in g/cm³ from isothermal beta model.
    n_e in cm^-3; ρ_gas = 1.4 m_p n_e."""
    n_e = n0 * (1 + (r_kpc/rc_kpc)**2)**(-1.5*beta)
    return 1.4 * m_p * n_e

def baryon_mass_within(r_max_kpc, n_samples=2000):
    """M_B(<r) from gas (mass-dominant) by spherical integration."""
    r = np.linspace(0.1, r_max_kpc, n_samples)
    rho = rho_gas_coma(r)
    r_cm = r * kpc
    dM = 4 * np.pi * rho * r_cm**2
    # trapezoidal integral over r_cm
    return np.trapz(dM, r_cm)

def volume_averaged_C(r_max_kpc, rho_crit, gamma=2.0, n_samples=2000, weight='volume'):
    """Compute <C> over the cluster volume.
    weight='volume': uniform volume weighting
    weight='mass':   baryonic-mass weighting
    weight='inv_C':  for ansatz A1, we need <1/C>"""
    r = np.linspace(0.1, r_max_kpc, n_samples)
    rho = rho_gas_coma(r)
    r_cm = r * kpc
    dV = 4 * np.pi * r_cm**2
    Cvals = C(rho, rho_crit, gamma)
    if weight == 'volume':
        num = np.trapz(Cvals * dV, r_cm)
        den = np.trapz(dV, r_cm)
    elif weight == 'mass':
        dM = rho * dV
        num = np.trapz(Cvals * dM, r_cm)
        den = np.trapz(dM, r_cm)
    elif weight == 'inv_C':
        # <1/C> volume-averaged
        Csafe = np.maximum(Cvals, 1e-30)
        num = np.trapz((1/Csafe) * dV, r_cm)
        den = np.trapz(dV, r_cm)
    return num / den

def coherent_mass_integral(r_max_kpc, rho_crit, gamma=2.0, n_samples=2000):
    """∫ C(ρ)·ρ dV — for ansatz A3."""
    r = np.linspace(0.1, r_max_kpc, n_samples)
    rho = rho_gas_coma(r)
    r_cm = r * kpc
    dV = 4 * np.pi * r_cm**2
    return np.trapz(C(rho, rho_crit, gamma) * rho * dV, r_cm)


def main():
    print("="*70)
    print("C(ρ) CLUSTER-BRIDGE TEST — COMA")
    print("="*70)

    # Observed Coma (Briel+ 1992; Łokas-Mamon 2003; weak-lensing Okabe+2014)
    # M_500: gas ≈ 1.7e14, lens ≈ 6e14 → M_lens/M_gas ≈ 3.5 within r_500
    # At r_200 (~2 Mpc): gas+stars ≈ 2.5e14, total ≈ 1.5e15 → ratio ≈ 6
    r500_kpc = 1390  # ≈ 1.39 Mpc per Reiprich-Bohringer 2002
    r200_kpc = 2080  # ≈ 2.08 Mpc

    M_B_r500 = baryon_mass_within(r500_kpc) / M_sun
    M_B_r200 = baryon_mass_within(r200_kpc) / M_sun
    M_lens_r500_obs = 6.0e14
    M_lens_r200_obs = 1.4e15

    print(f"\nComa baryonic mass within r_500 ({r500_kpc} kpc): "
          f"{M_B_r500:.2e} M_sun  (literature: ~1.7e14)")
    print(f"Coma baryonic mass within r_200 ({r200_kpc} kpc): "
          f"{M_B_r200:.2e} M_sun  (literature: ~2.5e14)")
    print(f"Observed apparent-mass discrepancy:")
    print(f"  Within r_500: M_lens/M_B ≈ {M_lens_r500_obs/M_B_r500:.2f}")
    print(f"  Within r_200: M_lens/M_B ≈ {M_lens_r200_obs/M_B_r200:.2f}")

    # Scan over plausible galaxy ρ_crit anchors
    print("\n" + "="*70)
    print("SCAN: How does the cluster prediction depend on the galaxy ρ_crit anchor?")
    print("="*70)

    anchors = [
        ("MW low-V (V=180, R0=8)",  rho_crit_galaxy(180, 8)),
        ("MW std (V=220, R0=10)",   rho_crit_galaxy(220, 10)),
        ("MW high-R0 (V=220, R0=15)", rho_crit_galaxy(220, 15)),
        ("Dwarf-like (V=80, R0=3)", rho_crit_galaxy(80, 3)),
        ("Massive (V=300, R0=20)",  rho_crit_galaxy(300, 20)),
    ]

    # Also compute the central baryon density of Coma for context
    rho_central = rho_gas_coma(1.0)  # 1 kpc — basically the core
    rho_at_rc = rho_gas_coma(290.0)
    rho_at_r500 = rho_gas_coma(r500_kpc)
    print(f"\nComa gas density:")
    print(f"  central (r=1 kpc):    {rho_central:.2e} g/cm³")
    print(f"  at r_c (290 kpc):     {rho_at_rc:.2e} g/cm³")
    print(f"  at r_500 (1390 kpc):  {rho_at_r500:.2e} g/cm³")
    # For reference: cosmological mean baryon density ~4e-31, ρ_crit_cosmo ~1e-29

    for label, rho_crit in anchors:
        print(f"\n--- Anchor: {label} ---")
        print(f"    galaxy ρ_crit = {rho_crit:.2e} g/cm³")
        print(f"    ρ_coma_central / ρ_crit = {rho_central/rho_crit:.2e}")
        print(f"    ρ_coma(r_500) / ρ_crit  = {rho_at_r500/rho_crit:.2e}")
        # C at characteristic radii
        print(f"    C(ρ_central)  = {C(rho_central, rho_crit):.4f}")
        print(f"    C(ρ at r_c)   = {C(rho_at_rc, rho_crit):.4f}")
        print(f"    C(ρ at r_500) = {C(rho_at_r500, rho_crit):.4f}")

        # Ansatz predictions for r_500 region
        C_bar_vol = volume_averaged_C(r500_kpc, rho_crit, weight='volume')
        C_bar_mass = volume_averaged_C(r500_kpc, rho_crit, weight='mass')
        inv_C_bar = volume_averaged_C(r500_kpc, rho_crit, weight='inv_C')
        M_coh = coherent_mass_integral(r500_kpc, rho_crit) / M_sun

        print(f"    ⟨C⟩_volume = {C_bar_vol:.4f}")
        print(f"    ⟨C⟩_mass   = {C_bar_mass:.4f}")
        print(f"    ⟨1/C⟩_volume = {inv_C_bar:.3e}")
        print(f"    ∫C·ρdV / M_B = {M_coh/M_B_r500:.3f}")
        print(f"")
        # A1: M_app/M_B = ⟨1/C⟩  (G_eff = G/C averaged → mass discrepancy)
        # Use volume-weighted because we want a representative scale
        A1 = inv_C_bar
        # A2: M_app/M_B = 1/(1−⟨C⟩)
        A2 = 1.0 / max(1e-12, 1.0 - C_bar_vol)
        # A3: M_app/M_B = 1 + ∫C·ρdV/M_B  (coherent fraction adds mass)
        A3 = 1.0 + M_coh / M_B_r500
        # A4: M_app/M_B = ⟨C⟩^(-1)  (compander-encoded amplification with η=1)
        A4 = 1.0 / max(1e-12, C_bar_vol)
        OBS = M_lens_r500_obs / M_B_r500

        print(f"    Predictions for M_app/M_B at r_500 (OBS = {OBS:.2f}):")
        print(f"      A1 ⟨1/C⟩:       {A1:.3e}")
        print(f"      A2 1/(1−⟨C⟩):   {A2:.3e}")
        print(f"      A3 1+∫Cρ/M_B:   {A3:.3e}")
        print(f"      A4 ⟨C⟩^(-1):    {A4:.3e}")

if __name__ == "__main__":
    main()
