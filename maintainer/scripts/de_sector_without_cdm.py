"""Can the DE sector carry the dark matter too? Baryons-only rho_m.

Pre-registered in de_sector_without_cdm_PREREG.md (site commit 71ba3e0, before this file existed).

Model (Session 100): H^2 = 8 pi G rho_m / (3 C), C = tanh(gamma ln(1+x)), unfloored.
Here rho_m = rho_b, so rho_dark = rho_b (1-C)/C must be dark matter AND dark energy.
  Variant A: x = rho_b / rho_crit = x0 a^-3                         (explicit, as written)
  Variant B: x = rho_tot / rho_crit, rho_tot C(x) = rho_b             (implicit)
Calibration C0 = Omega_b fixes x0 given gamma, so gamma is the only free parameter.
"""
import numpy as np
from scipy.optimize import brentq

# Planck 2018 (TT,TE,EE+lowE+lensing)
h = 0.6736
omega_b, omega_c = 0.02237, 0.1200
Om_b = omega_b / h**2
Om_m = 0.315
R_target = omega_c / omega_b          # CDM / baryon at recombination in LCDM
z_star = 1090.0
a_star = 1.0 / (1.0 + z_star)
q0_LCDM = 0.5 * Om_m - (1 - Om_m)


def C(x, g):
    return np.tanh(g * np.log1p(x))


def dlnC_dlnx(x, g):
    c = C(x, g)
    return g * (1 - c**2) * (x / (1 + x)) / c


def H2_LCDM(a):
    return Om_m * a**-3 + (1 - Om_m)


# ---------------------------------------------------------------- P4 identity control
def control():
    g = 0.5
    # C0 = Om_m at x0: tanh(0.5 ln(1+x0)) = x0/(x0+2) = Om_m -> x0 = 2 Om_m/(1-Om_m)
    x0 = 2 * Om_m / (1 - Om_m)
    a = np.logspace(np.log10(a_star), 0, 400)
    H2 = (Om_m * a**-3) / C(x0 * a**-3, g)          # in units of H0^2 (rho_crit0 = 1)
    return np.max(np.abs(H2 / H2_LCDM(a) - 1))


# ---------------------------------------------------------------- Variant A
def variant_A(g):
    x0 = np.expm1(np.arctanh(Om_b) / g)
    xs = x0 * a_star**-3
    cs = C(xs, g)
    R_rec = (1 - cs) / cs
    q0 = 0.5 - 1.5 * dlnC_dlnx(x0, g)
    return x0, R_rec, q0


def H2_A(a, g, x0):
    return Om_b * a**-3 / C(x0 * a**-3, g)


# ---------------------------------------------------------------- Variant B
# rho_tot C(rho_tot/rho_crit) = rho_b. Units: rho_crit0-of-today = 1 (so rho_tot(a=1) = 1).
# Today: C(x0) = Om_b with x0 = 1/rc  -> rc = 1/x0.
def variant_B_state(a, g, x0):
    rb = Om_b * a**-3
    rc = 1.0 / x0
    f = lambda lr: np.exp(lr) * C(np.exp(lr) / rc, g) - rb
    lo, hi = np.log(rb) - 1, np.log(rb) + 60
    lr = brentq(f, lo, hi, xtol=1e-14)
    rt = np.exp(lr)
    return rt, C(rt / rc, g)


def variant_B(g):
    x0 = np.expm1(np.arctanh(Om_b) / g)
    _, cs = variant_B_state(a_star, g, x0)
    R_rec = (1 - cs) / cs
    # q0 = -1 - dlnH/dlna, H^2 = rho_tot; numeric derivative at a = 1
    eps = 1e-5
    lp = np.log(variant_B_state(np.exp(eps), g, x0)[0])
    lm = np.log(variant_B_state(np.exp(-eps), g, x0)[0])
    dlnH = 0.5 * (lp - lm) / (2 * eps)
    return x0, R_rec, -1 - dlnH


def H2_B(a, g, x0):
    return np.array([variant_B_state(ai, g, x0)[0] for ai in np.atleast_1d(a)])


# ---------------------------------------------------------------- run
def main():
    print("=" * 78)
    print("DE sector without CDM (rho_m = rho_b) — pre-registered 71ba3e0")
    print("=" * 78)
    print(f"Omega_b = {Om_b:.4f}   R_target (omega_c/omega_b) = {R_target:.3f}   q0(LCDM) = {q0_LCDM:.3f}")

    err = control()
    print(f"\nP4 identity control (CDM included, gamma=1/2, C0=Omega_m): max|H^2/H^2_LCDM - 1| = {err:.2e}")
    print("   ->", "PASS" if err < 1e-10 else "FAIL — stop reading")

    gammas = np.logspace(-4, np.log10(3), 400)
    for name, fn, H2fn in (("A (explicit, x = rho_b/rho_crit)", variant_A, H2_A),
                           ("B (implicit, x = rho_tot/rho_crit)", variant_B, H2_B)):
        rows = []
        for g in gammas:
            try:
                rows.append((g, *fn(g)))
            except (ValueError, OverflowError, FloatingPointError):
                continue
        rows = np.array(rows)
        g_, x0_, R_, q_ = rows.T
        acc = q_ < 0
        p1 = acc & (np.abs(R_ / R_target - 1) < 0.10)
        p2 = acc & (R_ >= R_target / 2) & (R_ <= 2 * R_target)
        print(f"\n--- Variant {name}: {len(rows)} gamma values evaluated ---")
        print(f"  gamma with q0 < 0: {acc.sum()}  (smallest such gamma = {g_[acc].min() if acc.any() else float('nan'):.4g})")
        print(f"  P1 (R_rec within 10% AND q0<0): {p1.sum()} gamma values")
        print(f"  P2 (R_rec within x2  AND q0<0): {p2.sum()} gamma values")
        if acc.any():
            i = np.argmax(np.where(acc, R_, -np.inf))
            print(f"  P3 max R_rec among accelerating: {R_[i]:.3f} at gamma={g_[i]:.4g} (x0={x0_[i]:.3g}, q0={q_[i]:.3f})")
        hit = np.abs(R_ / R_target - 1) < 0.10
        if hit.any():
            j = np.where(hit)[0]
            print(f"  gamma giving R_rec within 10%: {g_[j].min():.4g} .. {g_[j].max():.4g};"
                  f" q0 there = {q_[j].min():.3f} .. {q_[j].max():.3f}")
        # closest joint point: minimize normalized distance in (ln R, q0)
        d = np.hypot(np.log(R_ / R_target) / np.log(2), (q_ - q0_LCDM) / 0.5)
        k = np.argmin(d)
        gk, xk = g_[k], x0_[k]
        a = np.logspace(np.log10(a_star), 0, 200 if name.startswith("A") else 60)
        dev = np.max(np.abs(np.sqrt(H2fn(a, gk, xk) / H2_LCDM(a)) - 1))
        print(f"  closest joint point: gamma={gk:.4g}, x0={xk:.3g}, R_rec={R_[k]:.3f}, q0={q_[k]:.3f}")
        print(f"  P5 max|H/H_LCDM - 1| over 0<=z<=1090 there: {dev:.3f}")
        print("  sample rows (gamma, x0, R_rec, q0):")
        for gg in (1e-3, 3e-3, 0.0065, 0.01, 0.016, 0.03, 0.1, 0.5):
            m = np.argmin(np.abs(g_ - gg))
            print(f"    {g_[m]:.4g}  {x0_[m]:.4g}  {R_[m]:.3f}  {q_[m]:.3f}")


if __name__ == "__main__":
    main()
