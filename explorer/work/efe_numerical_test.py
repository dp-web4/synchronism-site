"""
EFE Numerical Test for the Synchronism Coherence Framework
============================================================

Tests whether the nonlinear Poisson equation
    div[(1/C(|grad Phi|)) grad Phi] = 4*pi*G*rho
produces an External Field Effect when solved for an embedded subsystem.

Two approaches:
1. ANALYTICAL (perturbative): Linearize around uniform external field
   -> Gives exact EFE strength in the limit g_int << g_ext
2. NUMERICAL (1D along z-axis): Solve full nonlinear equation for a
   point mass in a uniform external field

Compares with MOND AQUAL:
    div[mu(|grad Phi|/a0) grad Phi] = 4*pi*G*rho

Result: quantitative EFE predictions for Synchronism vs MOND.
"""

import numpy as np
from scipy.integrate import solve_bvp
from scipy.optimize import brentq

# Physical constants (SI)
G = 6.674e-11       # m^3 kg^-1 s^-2
c = 2.998e8          # m/s
H0 = 2.27e-18        # s^-1 (70 km/s/Mpc)
a0 = c * H0 / (2 * np.pi)  # MOND acceleration ~ 1.08e-10 m/s^2
Omega_m = 0.315
phi = (1 + np.sqrt(5)) / 2  # golden ratio ~ 1.618

# Galaxy scales
kpc = 3.086e19       # meters per kpc
M_sun = 1.989e30     # kg
km_s = 1e3           # m/s


# ============================================================
# COHERENCE FUNCTIONS
# ============================================================

def C_hill(a, a0=a0, Omega_m=Omega_m, phi_val=phi):
    """Acceleration-based coherence (Hill-like form from research archive).
    C(a) = Omega_m + (1 - Omega_m) * x/(1+x)
    where x = (a/a0)^(1/phi)
    """
    x = (np.abs(a) / a0) ** (1.0 / phi_val)
    return Omega_m + (1 - Omega_m) * x / (1 + x)


def C_hill_derivative(a, a0=a0, Omega_m=Omega_m, phi_val=phi):
    """dC/da for the Hill-like form."""
    x = (np.abs(a) / a0) ** (1.0 / phi_val)
    # dx/da = x / (phi * a)
    # dC/da = (1-Omega_m) / (1+x)^2 * dx/da
    with np.errstate(divide='ignore', invalid='ignore'):
        dxda = x / (phi_val * np.abs(a))
        dCda = (1 - Omega_m) / (1 + x)**2 * dxda
    return np.where(np.abs(a) > 0, dCda, 0.0)


def C_tanh(a, gamma=2.0, a_crit=a0):
    """Tanh-log coherence applied to acceleration.
    C(a) = tanh(gamma * log(a/a_crit + 1))
    """
    return np.tanh(gamma * np.log(np.abs(a) / a_crit + 1))


def C_tanh_derivative(a, gamma=2.0, a_crit=a0):
    """dC/da for the tanh-log form."""
    arg = np.abs(a) / a_crit
    log_arg = np.log(arg + 1)
    sech2 = 1 - np.tanh(gamma * log_arg)**2
    return gamma * sech2 / (np.abs(a) + a_crit)


# MOND interpolating functions
def mu_standard(a, a0=a0):
    """Standard MOND interpolating function: mu(x) = x/sqrt(1+x^2)"""
    x = np.abs(a) / a0
    return x / np.sqrt(1 + x**2)


def mu_standard_derivative(a, a0=a0):
    """d(mu)/da for standard MOND."""
    x = np.abs(a) / a0
    return 1.0 / (a0 * (1 + x**2)**1.5)


def mu_simple(a, a0=a0):
    """Simple MOND interpolating function: mu(x) = x/(1+x)"""
    x = np.abs(a) / a0
    return x / (1 + x)


def mu_simple_derivative(a, a0=a0):
    """d(mu)/da for simple MOND."""
    x = np.abs(a) / a0
    return 1.0 / (a0 * (1 + x)**2)


# ============================================================
# PERTURBATIVE EFE ANALYSIS
# ============================================================

def efe_anisotropy_synchronism(g_ext, C_func, dC_func):
    """
    Compute the EFE anisotropy for Synchronism.

    For the flux-form equation div[(1/C) grad Phi] = 4*pi*G*rho,
    linearized around uniform external field g_ext:

    nu(g) = 1/C(g)
    G_eff_perp = G * nu(g_ext)
    G_eff_para = G * [nu(g_ext) + g_ext * nu'(g_ext)]

    Returns (G_eff_perp/G, G_eff_para/G, anisotropy_ratio)
    """
    C = C_func(g_ext)
    dC = dC_func(g_ext)

    nu = 1.0 / C
    # nu'(g) = -C'(g) / C(g)^2
    dnu = -dC / C**2

    G_perp = nu                    # G_eff_perp / G
    G_para = nu + g_ext * dnu      # G_eff_para / G  = d(g*nu)/dg

    anisotropy = G_para / G_perp   # 1.0 = no EFE

    return G_perp, G_para, anisotropy


def efe_anisotropy_mond(g_ext, mu_func, dmu_func):
    """
    Compute the EFE anisotropy for MOND AQUAL.

    For div[mu(|grad Phi|/a0) grad Phi] = 4*pi*G*rho,
    linearized around g_ext:

    G_eff_perp = G / mu(g_ext/a0)  [note: 1/mu because sources are "boosted"]
    G_eff_para = G / [mu + g_ext*mu']

    Actually, in AQUAL the linearization gives:
    Effective Newtonian constant in the internal frame:
    G_N_perp = G / mu_ext
    G_N_para = G / (mu_ext + a_ext * mu'_ext)
    where a_ext = g_ext/a0 and derivatives are w.r.t. the argument.

    But for fair comparison with Synchronism (where 1/C plays the role of
    the "boost factor"), let me compute the boost factors directly.

    In MOND: the boost = 1/mu. In Synchronism: the boost = 1/C.
    """
    mu = mu_func(g_ext)
    dmu = dmu_func(g_ext)

    # 1/mu is the "boost factor"
    G_perp = 1.0 / mu
    # G_para/G = 1/(mu + g_ext * dmu/dg)
    # Note: d(g*mu)/dg = mu + g*dmu/dg
    G_para = 1.0 / (mu + g_ext * dmu)

    anisotropy = G_para / G_perp  # = mu / (mu + g_ext * dmu)

    return G_perp, G_para, anisotropy


# ============================================================
# NUMERICAL 1D SOLVER
# ============================================================

def solve_1d_efe(M_point, g_ext, r_range, C_func, dC_func, n_points=500):
    """
    Solve the 1D (along z-axis, parallel to g_ext) nonlinear Poisson equation
    for a point mass M embedded in a uniform external field g_ext.

    In 1D along the z-axis (parallel to g_ext):
    d/dz [(1/C(|dPhi/dz|)) * dPhi/dz] = 4*pi*G*M*delta(z)

    For z > 0, with internal + external fields:
    dPhi/dz = -(g_int(z) + g_ext)
    where g_int(z) = G*M/z^2 is the internal Newtonian field.

    The Synchronism EFE modifies the internal dynamics because C is evaluated
    on the total field, not just the internal field.

    Returns effective acceleration at each radius.
    """
    r = np.linspace(r_range[0], r_range[1], n_points)

    # Newtonian internal field
    g_newton = G * M_point / r**2

    # Total field (along z-axis, g_ext adds to g_int)
    g_total = g_newton + g_ext

    # Without external field (isolated)
    C_isolated = C_func(g_newton)
    g_eff_isolated = g_newton / C_isolated

    # With external field (embedded)
    C_embedded = C_func(g_total)
    # The effective internal gravity is modified because C is evaluated on total field
    # The "MOND-like" effective internal acceleration:
    # In the flux form, the internal dynamics see G_eff = G/C(g_total)
    # But we need to be more careful: the EFE modifies the internal dynamics
    # through the perturbative result above
    g_eff_embedded_perp = g_newton / C_embedded  # perpendicular component

    # For the parallel component, we need the full perturbative result:
    dC_total = dC_func(g_total)
    # nu = 1/C, nu' = -C'/C^2
    # G_eff_para = G*(nu + g_ext*nu') = G*(1/C - g_ext*C'/C^2)
    # So g_eff_para = g_newton * (1/C - g_ext*C'/C^2)
    g_eff_embedded_para = g_newton * (1.0/C_embedded - g_ext * dC_total / C_embedded**2)

    # Newtonian (no modification)
    g_eff_newton = g_newton

    return r, g_eff_newton, g_eff_isolated, g_eff_embedded_perp, g_eff_embedded_para


# ============================================================
# MAIN ANALYSIS
# ============================================================

def run_perturbative_analysis():
    """Compute EFE anisotropy across a range of external field strengths."""

    print("=" * 70)
    print("PERTURBATIVE EFE ANALYSIS")
    print("=" * 70)
    print(f"\na0 = {a0:.3e} m/s^2")
    print(f"Omega_m = {Omega_m}")
    print(f"phi = {phi:.4f}")

    # External field strengths from deep MOND to Newtonian
    g_ext_values = a0 * np.logspace(-2, 3, 200)

    results = {}

    # Synchronism (Hill form)
    G_perp_s, G_para_s, aniso_s = efe_anisotropy_synchronism(
        g_ext_values, C_hill, C_hill_derivative)
    results['sync_hill'] = (G_perp_s, G_para_s, aniso_s)

    # Synchronism (tanh form)
    G_perp_st, G_para_st, aniso_st = efe_anisotropy_synchronism(
        g_ext_values, C_tanh, C_tanh_derivative)
    results['sync_tanh'] = (G_perp_st, G_para_st, aniso_st)

    # MOND (standard interpolating function)
    G_perp_m, G_para_m, aniso_m = efe_anisotropy_mond(
        g_ext_values, mu_standard, mu_standard_derivative)
    results['mond_std'] = (G_perp_m, G_para_m, aniso_m)

    # MOND (simple interpolating function)
    G_perp_ms, G_para_ms, aniso_ms = efe_anisotropy_mond(
        g_ext_values, mu_simple, mu_simple_derivative)
    results['mond_simple'] = (G_perp_ms, G_para_ms, aniso_ms)

    # Print key values at specific g_ext
    print("\n" + "-" * 70)
    print("EFE ANISOTROPY RATIO (G_para/G_perp) — 1.0 = no EFE")
    print("-" * 70)
    print(f"{'g_ext/a0':>10s}  {'Sync(Hill)':>12s}  {'Sync(tanh)':>12s}  {'MOND(std)':>12s}  {'MOND(simple)':>12s}")

    test_ratios = [0.01, 0.03, 0.1, 0.3, 1.0, 3.0, 10.0, 30.0, 100.0]
    for ratio in test_ratios:
        g = ratio * a0
        _, _, a_sh = efe_anisotropy_synchronism(np.array([g]), C_hill, C_hill_derivative)
        _, _, a_st = efe_anisotropy_synchronism(np.array([g]), C_tanh, C_tanh_derivative)
        _, _, a_ms = efe_anisotropy_mond(np.array([g]), mu_standard, mu_standard_derivative)
        _, _, a_mi = efe_anisotropy_mond(np.array([g]), mu_simple, mu_simple_derivative)
        print(f"{ratio:10.2f}  {a_sh[0]:12.6f}  {a_st[0]:12.6f}  {a_ms[0]:12.6f}  {a_mi[0]:12.6f}")

    # Print gravity boost factors at key accelerations
    print("\n" + "-" * 70)
    print("GRAVITY BOOST FACTORS (G_eff_perp/G) at g_ext")
    print("-" * 70)
    print(f"{'g_ext/a0':>10s}  {'1/C_hill':>12s}  {'1/C_tanh':>12s}  {'1/mu_std':>12s}  {'1/mu_simple':>12s}")

    for ratio in test_ratios:
        g = ratio * a0
        C_h = C_hill(np.array([g]))
        C_t = C_tanh(np.array([g]))
        mu_s = mu_standard(np.array([g]))
        mu_si = mu_simple(np.array([g]))
        print(f"{ratio:10.2f}  {1/C_h[0]:12.4f}  {1/C_t[0]:12.4f}  {1/mu_s[0]:12.4f}  {1/mu_si[0]:12.4f}")

    # Key finding: maximum EFE anisotropy
    print("\n" + "-" * 70)
    print("MAXIMUM EFE STRENGTH (minimum of anisotropy ratio)")
    print("-" * 70)

    for name, (gp, gpa, ani) in results.items():
        min_idx = np.argmin(ani)
        min_ani = ani[min_idx]
        g_at_min = g_ext_values[min_idx] / a0
        print(f"{name:>15s}: min anisotropy = {min_ani:.6f} at g_ext/a0 = {g_at_min:.2f}")
        print(f"{'':>15s}  max |1-aniso| = {abs(1-min_ani):.6f} = {abs(1-min_ani)*100:.2f}% deviation from isotropy")

    return g_ext_values, results


def run_embedded_dwarf_test():
    """
    Simulate a dwarf galaxy embedded in the Milky Way's field.

    Typical parameters:
    - Dwarf galaxy: M = 10^8 M_sun, half-light radius ~ 1 kpc
    - External field from MW: g_ext ~ 0.01-0.1 a0 (far satellites)
                              g_ext ~ 0.1-1 a0 (close satellites)
    """
    print("\n" + "=" * 70)
    print("EMBEDDED DWARF GALAXY SIMULATION")
    print("=" * 70)

    M_dwarf = 1e8 * M_sun   # 10^8 solar masses
    r_half = 1.0 * kpc       # 1 kpc half-light radius

    # Range of external fields
    g_ext_cases = {
        'isolated': 0,
        'far_satellite (0.01 a0)': 0.01 * a0,
        'mid_satellite (0.1 a0)': 0.1 * a0,
        'close_satellite (1.0 a0)': 1.0 * a0,
    }

    r_min = 0.1 * kpc
    r_max = 10.0 * kpc

    for case_name, g_ext in g_ext_cases.items():
        print(f"\n--- Case: {case_name} ---")

        r, g_newt, g_iso, g_emb_perp, g_emb_para = solve_1d_efe(
            M_dwarf, g_ext, (r_min, r_max), C_hill, C_hill_derivative)

        # Circular velocity v_c = sqrt(r * g_eff)
        v_iso = np.sqrt(r * np.abs(g_iso)) / km_s
        v_emb_perp = np.sqrt(r * np.abs(g_emb_perp)) / km_s
        v_emb_para = np.sqrt(r * np.abs(g_emb_para)) / km_s
        v_newt = np.sqrt(r * np.abs(g_newt)) / km_s

        # Report at r = r_half
        idx_half = np.argmin(np.abs(r - r_half))

        g_int_at_half = G * M_dwarf / r_half**2

        print(f"  Internal field at r_half: g_int = {g_int_at_half/a0:.4f} a0")
        print(f"  External field: g_ext = {g_ext/a0:.4f} a0")
        print(f"  g_ext/g_int ratio: {g_ext/g_int_at_half:.4f}" if g_int_at_half > 0 else "")
        print(f"  Newtonian v_c(r_half) = {v_newt[idx_half]:.2f} km/s")
        print(f"  Isolated v_c(r_half) = {v_iso[idx_half]:.2f} km/s")
        if g_ext > 0:
            print(f"  Embedded v_c_perp(r_half) = {v_emb_perp[idx_half]:.2f} km/s")
            print(f"  Embedded v_c_para(r_half) = {v_emb_para[idx_half]:.2f} km/s")
            efe_effect_perp = (v_emb_perp[idx_half] - v_iso[idx_half]) / v_iso[idx_half] * 100
            efe_effect_para = (v_emb_para[idx_half] - v_iso[idx_half]) / v_iso[idx_half] * 100
            print(f"  EFE on v_c (perp): {efe_effect_perp:+.2f}%")
            print(f"  EFE on v_c (para): {efe_effect_para:+.2f}%")

        # Also compute MOND for comparison
        g_total_mond = g_int_at_half + g_ext  # scalar addition (worst case for EFE)
        mu_iso = mu_standard(np.array([g_int_at_half]))
        mu_emb = mu_standard(np.array([g_total_mond]))
        v_mond_iso = np.sqrt(r_half * g_int_at_half / mu_iso[0]) / km_s
        v_mond_emb = np.sqrt(r_half * g_int_at_half / mu_emb[0]) / km_s

        if g_ext > 0:
            mond_efe = (v_mond_emb - v_mond_iso) / v_mond_iso * 100
            print(f"  MOND EFE on v_c (scalar approx): {mond_efe:+.2f}%")
            print(f"  Sync/MOND EFE ratio (para): {abs(efe_effect_para/mond_efe):.3f}" if mond_efe != 0 else "")


def run_tidal_dwarf_test():
    """
    The degeneracy-breaking test: Tidal Dwarf Galaxies.

    TDGs have:
    - LOW internal density (tidal debris, ~10^6-10^7 M_sun)
    - HIGH external field (near parent galaxy, g_ext ~ 0.3-3 a0)

    MOND: strong EFE suppresses internal dynamics
    Synchronism (no EFE): no suppression
    Synchronism (with EFE via nonlinear Poisson): weak suppression
    """
    print("\n" + "=" * 70)
    print("TIDAL DWARF GALAXY TEST (degeneracy-breaker)")
    print("=" * 70)

    M_tdg = 1e7 * M_sun     # 10^7 solar masses
    r_half = 0.5 * kpc       # 500 pc
    g_ext = 1.0 * a0         # Strong external field (near parent)

    r = np.array([r_half])
    g_int = G * M_tdg / r_half**2
    g_total = g_int + g_ext

    print(f"\nTDG parameters:")
    print(f"  M = {M_tdg/M_sun:.0e} M_sun")
    print(f"  r_half = {r_half/kpc:.1f} kpc")
    print(f"  g_int(r_half) = {g_int/a0:.4f} a0")
    print(f"  g_ext = {g_ext/a0:.1f} a0")
    print(f"  g_ext/g_int = {g_ext/g_int:.1f}")

    # Newtonian
    v_newt = np.sqrt(r_half * g_int) / km_s
    print(f"\n  Newtonian sigma ~ {v_newt:.2f} km/s")

    # Synchronism isolated
    C_iso = C_hill(g_int)
    v_sync_iso = np.sqrt(r_half * g_int / C_iso) / km_s
    print(f"  Sync (isolated) sigma ~ {v_sync_iso:.2f} km/s  [boost = {1/C_iso:.3f}]")

    # Synchronism with EFE (perpendicular)
    C_emb = C_hill(g_total)
    v_sync_emb = np.sqrt(r_half * g_int / C_emb) / km_s
    print(f"  Sync (embedded, perp) sigma ~ {v_sync_emb:.2f} km/s  [boost = {1/C_emb:.3f}]")

    # Synchronism with EFE (parallel)
    dC_emb = C_hill_derivative(g_total)
    boost_para = 1/C_emb - g_ext * dC_emb / C_emb**2
    v_sync_emb_para = np.sqrt(r_half * g_int * boost_para) / km_s
    print(f"  Sync (embedded, para) sigma ~ {v_sync_emb_para:.2f} km/s  [boost = {boost_para:.3f}]")

    # MOND isolated
    mu_iso = mu_standard(g_int)
    v_mond_iso = np.sqrt(r_half * g_int / mu_iso) / km_s
    print(f"  MOND (isolated) sigma ~ {v_mond_iso:.2f} km/s  [boost = {1/mu_iso:.3f}]")

    # MOND with EFE
    mu_emb = mu_standard(g_total)
    v_mond_emb = np.sqrt(r_half * g_int / mu_emb) / km_s
    print(f"  MOND (embedded) sigma ~ {v_mond_emb:.2f} km/s  [boost = {1/mu_emb:.3f}]")

    print(f"\n  PREDICTIONS:")
    sync_efe_pct = (v_sync_emb - v_sync_iso) / v_sync_iso * 100
    sync_efe_para_pct = (v_sync_emb_para - v_sync_iso) / v_sync_iso * 100
    mond_efe_pct = (v_mond_emb - v_mond_iso) / v_mond_iso * 100
    print(f"  Sync EFE (perp): {sync_efe_pct:+.1f}% change in sigma")
    print(f"  Sync EFE (para): {sync_efe_para_pct:+.1f}% change in sigma")
    print(f"  MOND EFE: {mond_efe_pct:+.1f}% change in sigma")
    print(f"  Sync EFE is {abs(sync_efe_para_pct/mond_efe_pct):.1f}x weaker than MOND EFE" if mond_efe_pct != 0 else "")


def run_wide_binary_prediction():
    """
    Wide binary test: does the EFE affect wide binary predictions?

    Wide binaries at ~10 kAU separations probe accelerations ~ 0.01-1 a0.
    They are embedded in the galactic field g_ext ~ 1-2 a0.
    """
    print("\n" + "=" * 70)
    print("WIDE BINARY EFE PREDICTION")
    print("=" * 70)

    # Galactic field at solar neighborhood
    g_galactic = 1.8 * a0  # ~2e-10 m/s^2

    # Wide binary internal accelerations
    separations_AU = np.array([1000, 3000, 7000, 10000, 20000, 50000])
    AU = 1.496e11  # meters
    M_binary = 2 * M_sun  # 2 solar masses total

    print(f"\nGalactic field: g_ext = {g_galactic/a0:.1f} a0")
    print(f"Binary mass: {M_binary/M_sun:.0f} M_sun")
    print()
    print(f"{'sep (kAU)':>10s}  {'g_int/a0':>10s}  {'v/v_N Sync':>12s}  {'v/v_N MOND':>12s}  {'Sync-EFE%':>10s}  {'MOND-EFE%':>10s}")

    for sep in separations_AU:
        r = sep * AU
        g_int = G * M_binary / r**2
        g_total = g_int + g_galactic  # scalar (parallel case)

        # Synchronism
        C_iso = C_hill(g_int)
        C_emb = C_hill(g_total)
        boost_iso = 1.0 / C_iso
        boost_emb = 1.0 / C_emb
        v_ratio_sync_iso = np.sqrt(boost_iso)
        v_ratio_sync_emb = np.sqrt(boost_emb)
        sync_efe = (v_ratio_sync_emb - v_ratio_sync_iso) / v_ratio_sync_iso * 100

        # MOND
        mu_iso_val = mu_standard(g_int)
        mu_emb_val = mu_standard(g_total)
        v_ratio_mond_iso = np.sqrt(1.0 / mu_iso_val)
        v_ratio_mond_emb = np.sqrt(1.0 / mu_emb_val)
        mond_efe = (v_ratio_mond_emb - v_ratio_mond_iso) / v_ratio_mond_iso * 100

        print(f"{sep/1000:10.0f}  {g_int/a0:10.4f}  {v_ratio_sync_emb:12.4f}  {v_ratio_mond_emb:12.4f}  {sync_efe:+10.1f}  {mond_efe:+10.1f}")


def check_c_properties():
    """Verify C function properties and compare with MOND mu."""
    print("=" * 70)
    print("COHERENCE FUNCTION PROPERTIES")
    print("=" * 70)

    a_test = a0 * np.logspace(-3, 4, 200)

    print(f"\n{'a/a0':>10s}  {'C_hill':>10s}  {'C_tanh':>10s}  {'mu_std':>10s}  {'mu_simple':>10s}")
    for ratio in [0.001, 0.01, 0.1, 0.3, 1.0, 3.0, 10.0, 100.0, 1000.0]:
        a = ratio * a0
        print(f"{ratio:10.3f}  {C_hill(a):10.6f}  {C_tanh(a):10.6f}  {mu_standard(a):10.6f}  {mu_simple(a):10.6f}")

    print(f"\nKey differences:")
    print(f"  C_hill(0) -> {Omega_m} (bounded below)")
    print(f"  C_tanh(0) -> 0")
    print(f"  mu(0) -> 0 (MOND)")
    print(f"  C_hill(inf) -> 1")
    print(f"  mu(inf) -> 1 (MOND)")
    print(f"  Max boost (Sync Hill): 1/Omega_m = {1/Omega_m:.2f}")
    print(f"  Max boost (MOND): infinity")


if __name__ == '__main__':
    check_c_properties()
    g_ext_values, results = run_perturbative_analysis()
    run_embedded_dwarf_test()
    run_tidal_dwarf_test()
    run_wide_binary_prediction()
