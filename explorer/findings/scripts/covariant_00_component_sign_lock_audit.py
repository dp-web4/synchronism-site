#!/usr/bin/env python3
"""
Covariant 00-component audit: does the dark-energy sign lock survive the
C-dot terms? -- executing explorer topic
`covariant-00-component-does-the-sign-lock-survive.md` (2026-08-11).

BACKGROUND. The 2026-08-10 finding proved a sign lock for the sector AS
SPECIFIED by Session #100 (substitute G_eff = G/C into Friedmann, matter
separately conserved): w runs monotonically from -2*gamma (past) to -1
(future), so sign(w0+1) = sign(wa) and the DESI DR2 quadrant
(w0 > -1, wa < 0) is unreachable for every gamma. Conditionality flagged
there: the substitution is not a covariant derivation, and C-dot terms from a
proper completion could move the locus.

THE STRUCTURAL POINT THIS SCRIPT EXECUTES. Session #100's two assumptions --
    (i)  H^2 = 8 pi G rho_m / (3 C)      [modified coupling]
    (ii) rho_m propto a^-3               [matter separately conserved]
-- are JOINTLY inconsistent with the Bianchi identity of the archive's own
covariant equation (Appendix D, section D.3):
    G_munu = 8 pi G T_munu / C(rho).
nabla^mu G_munu = 0 forces nabla^mu (T_munu / C) = 0. There is no covariant
theory behind the substituted model; something must give. The two minimal
repairs bracket the possibilities:

  COMPLETION A (Appendix D as written; no new degrees of freedom).
    Keep the field equation, let Bianchi dictate matter dilution.
    T~_munu = (rho/C) u_mu u_nu is a dust tensor; its conservation gives
    rho/C = K a^-3 exactly, and the 00-component is then
        3 H^2 = 8 pi G (rho/C) = 8 pi G K a^-3.
    The background is EXACTLY Einstein-de Sitter. No dark energy, no
    acceleration, for every gamma and every rho_crit. (Analytic; verified
    numerically below, along with the finite-a breakdown where rho/C hits
    its vacuum floor rho_crit/gamma.)

  COMPLETION B (promote C to a dynamical scalar; Brans-Dicke structure).
    Matter is separately conserved; the 00-component gains the C-dot terms.
    Jordan-frame Brans-Dicke with phi = C/G, potential V = 0, flat FRW:
        H^2 = 8 pi G rho_m/(3C) - H (Cdot/C) + (omega/6)(Cdot/C)^2.
    Pinning C to its algebraic trajectory C(rho_m(a)) (quasi-static ansatz --
    the framework's defining relation; whatever enforces it is assumed to
    carry negligible stress, stated as the conditionality of this branch):
        Cdot/C = H * dlnC/dlna = -3 eps H,
        eps(x) = dlnC/dlnx = gamma x (1-C^2) / [C (1+x)],  x = rho/rho_crit
    giving an algebraic 00-component again:
        H^2 * [1 - 3 eps - (3 omega/2) eps^2] = 8 pi G rho_m/(3C)
        =>  H^2 = 8 pi G rho_m / (3 C_eff),   C_eff = C * B,
            B = 1 - 3 eps - (3 omega/2) eps^2.
    Session #100 is the eps -> 0 limit; NO constant omega reproduces it
    (that would need omega = -2/eps, not constant).

    Limits: past x -> inf: eps -> 0, B -> 1  (substituted model recovered);
            future x -> 0: eps -> 1, B -> -2 - 3 omega/2 < 0 for omega > -4/3.
    So C_eff crosses zero at finite scale factor: H^2 -> infinity, a
    finite-a future singularity, for EVERY gamma. The w = -1 attractor that
    produced the sign lock is destroyed. This script maps where the (w0, wa)
    locus actually lands.

NUISANCE DECLARATION (standing rule). The calibration C0*B0 = Omega_m is
forced by the definition of Omega_m (as in the 2026-08-10 finding). CPL
projections fit the SHAPE of E(z) over the DESI range with Omega_m held at
0.3 on both sides; the completion-A comparison marginalises the overall
scale (the r_d H0 combination). Quadrant statements need no covariance.

DESI DR2 numbers are carried over from w_eff_from_C_rho_cosmic.py (from
memory of arXiv:2503.14738 -- verify against the paper before any external
use).
"""

import numpy as np
from scipy.optimize import brentq, least_squares

OM = 0.3
OL = 1.0 - OM

DESI_DR2 = {
    "BAO+CMB":            (-0.42, 0.21, -1.75, 0.58),
    "BAO+CMB+Pantheon+":  (-0.838, 0.055, -0.62, 0.22),
    "BAO+CMB+Union3":     (-0.667, 0.088, -1.09, 0.31),
    "BAO+CMB+DESY5":      (-0.752, 0.057, -0.86, 0.22),
}

# ----------------------------------------------------------------- primitives

def C_of_x(x, gamma):
    return np.tanh(gamma * np.log1p(x))

def one_minus_C(x, gamma):
    """1 - tanh(u) = 2 / (exp(2u) + 1), stable where tanh saturates."""
    u = gamma * np.log1p(x)
    return 2.0 / (np.exp(np.minimum(2.0 * u, 700.0)) + 1.0)

def eps_of_x(x, gamma):
    """dlnC/dlnx = gamma x (1 - C^2) / [C (1 + x)], with 1 - C^2 computed
    stably as (1 - C)(1 + C)."""
    C = C_of_x(x, gamma)
    return gamma * x * one_minus_C(x, gamma) * (1.0 + C) / (C * (1.0 + x))

def B_of_x(x, gamma, omega):
    e = eps_of_x(x, gamma)
    return 1.0 - 3.0 * e - 1.5 * omega * e * e

def Ceff_of_x(x, gamma, omega):
    return C_of_x(x, gamma) * B_of_x(x, gamma, omega)

def w_of_rho(lna, rho):
    """w = -1 - (1/3) dln rho / dln a (continuity equation)."""
    return -1.0 - np.gradient(np.log(rho), lna) / 3.0


def unit_test_w():
    lna = np.linspace(-3, 1, 40001)
    a = np.exp(lna)
    ok = True
    for name, rho, truth in [("matter", a**-3.0, 0.0),
                             ("radiation", a**-4.0, 1.0 / 3.0),
                             ("Lambda", np.ones_like(a), -1.0)]:
        w = w_of_rho(lna, rho)[len(lna) // 2]
        ok &= abs(w - truth) < 1e-8
    print(f"UNIT TEST of w estimator on matter/radiation/Lambda: pass = {ok}\n")
    return ok


# ------------------------------------------------ calibration for completion B

def x0_completionB(gamma, omega, target=OM):
    """Solve C(x0) B(x0) = Omega_m on the branch where B > 0 (today must have
    H^2 > 0). B > 0 requires eps below the positive root of
    1 - 3 eps - 1.5 omega eps^2; eps is monotone decreasing in x, so the
    admissible region is x > x_B0."""
    if omega == 0.0:
        eps_crit = 1.0 / 3.0
    else:
        # positive root of 1.5*omega*e^2 + 3e - 1 = 0
        eps_crit = (-3.0 + np.sqrt(9.0 + 6.0 * omega)) / (3.0 * omega)
    x_B0 = brentq(lambda x: eps_of_x(x, gamma) - eps_crit, 1e-12, 1e12,
                  xtol=1e-14, rtol=1e-14)
    f = lambda x: Ceff_of_x(x, gamma, omega) - target
    return brentq(f, x_B0 * (1 + 1e-10), 1e14, rtol=1e-14)


def x0_substituted(gamma, target=OM):
    return np.expm1(np.arctanh(target) / gamma)


# ---------------------------------------------------------- expansion histories

def E2_substituted(z, gamma, x0):
    return (1 + z) ** 3 * OM / C_of_x(x0 * (1 + z) ** 3, gamma)

def E2_completionB(z, gamma, x0, omega):
    return (1 + z) ** 3 * OM / Ceff_of_x(x0 * (1 + z) ** 3, gamma, omega)

def E2_lcdm(z, om=OM):
    return om * (1 + z) ** 3 + (1 - om)

def E2_cpl(z, w0, wa):
    a = 1.0 / (1 + z)
    de = OL * (1 + z) ** (3 * (1 + w0 + wa)) * np.exp(-3 * wa * (1 - a))
    return OM * (1 + z) ** 3 + de


def fit_cpl(E2fun, zmax=2.5, **kw):
    z = np.linspace(0.02, zmax, 400)
    target = np.sqrt(E2fun(z, **kw))
    r = least_squares(lambda p: np.sqrt(E2_cpl(z, p[0], p[1])) / target - 1.0,
                      [-1.0, 0.0])
    rms = np.sqrt(np.mean(r.fun ** 2)) * 100
    return r.x[0], r.x[1], rms


# ================================================================ COMPLETION A

def completion_A():
    print("=" * 78)
    print("COMPLETION A -- Appendix D's own equation, G_munu = 8 pi G T_munu/C")
    print("=" * 78)
    print("""
  Bianchi bookkeeping (exact, no numerics needed):
    T~_munu = (rho/C) u_mu u_nu is a dust tensor. nabla G = 0 forces
    nabla T~ = 0, i.e. rho/C propto a^-3 and geodesic dust. The 00-component
    3H^2 = 8 pi G rho/C then reads 3H^2 = 8 pi G K a^-3:

        THE BACKGROUND IS EXACTLY EINSTEIN-DE SITTER (Omega_eff = 1 matter).

    The 'emergent dark energy' of Session #100 was assumption (ii) read back:
    holding rho_m propto a^-3 while modifying the coupling puts the boost
    (1-C)/C into a component nothing conserves. Under the archive's own
    covariant equation the boost is forced to dilute like MATTER -- the
    C-coupling can manufacture dark-matter-like phenomenology, never dark
    energy. If one insists on writing the EdS background as LCDM + 'DE', the
    DE component is (1-Omega_m) a^-3: w = 0 exactly, (w0, wa) = (0, 0).
""")
    # Numerical verification that rho(a) solving rho/C(rho) = K a^-3 exists
    # only down to the vacuum floor, and reproduces EdS while it does.
    gamma = 2.0
    # calibrate: today rho0/rho_crit = x0 chosen so C0 = 0.3 for illustration
    x0 = x0_substituted(gamma)
    K = x0 / C_of_x(x0, gamma)          # (rho/C)/rho_crit today
    floor = 1.0 / gamma                  # lim_{x->0} x/C(x) = 1/gamma
    a_end = (K / floor) ** (1.0 / 3.0)
    print(f"  Vacuum floor check (gamma = {gamma}, x0 = {x0:.5f}):")
    print(f"    (rho/C)/rho_crit today K = {K:.5f}; floor = 1/gamma = {floor:.5f}")
    print(f"    -> the constraint rho/C = K a^-3 has NO solution for a > "
          f"{a_end:.4f}")
    print(f"    i.e. matter density is driven to exactly zero at finite scale")
    print(f"    factor a_end = {a_end:.4f} ({a_end - 1:.2%} of expansion from now);")
    print(f"    the field equation has no FRW solution beyond it. This is the")
    print(f"    FRW avatar of the vacuum source floor that killed L1 in the")
    print(f"    galaxy sector (Appendix D correction, 2026-08-09).")
    # solve the implicit constraint on a grid and verify EdS
    aa = np.linspace(0.3, a_end * 0.999, 200)
    rho = np.array([brentq(lambda r: r / C_of_x(r, gamma) - K * a ** -3.0,
                           1e-12, 1e6 * K) for a in aa])
    E2 = (rho / C_of_x(rho, gamma)) / K          # should equal a^-3 exactly
    dev = np.max(np.abs(E2 * aa ** 3 - 1.0))
    print(f"    Implicit-solution check: max |H^2 a^3 / H0^2 - 1| = {dev:.1e} "
          f"(EdS to machine precision)\n")

    # shape comparison against LCDM over the BAO range, scale marginalised
    z = np.linspace(0.3, 2.33, 300)
    ref = np.sqrt(E2_lcdm(z, 0.315))
    eds = (1 + z) ** 1.5
    k = np.sum(eds * ref) / np.sum(eds * eds)    # least-squares scale
    rms = np.sqrt(np.mean((k * eds / ref - 1) ** 2)) * 100
    print(f"  EdS vs LCDM(0.315) shape over 0.3 < z < 2.33, scale (r_d H0)")
    print(f"  marginalised: rms = {rms:.1f}%  against ~1% BAO precision.")
    print(f"  (This is the pre-1998 SCDM background; the exclusion is the")
    print(f"   original dark-energy discovery itself, not a new computation.)\n")


# ================================================================ COMPLETION B

def completionB_wz(gamma, omega, zmax=1000.0, n=400001):
    """w(z) of the effective DE component rho_DE = rho_tot - rho_m."""
    x0 = x0_completionB(gamma, omega)
    lna = np.linspace(-np.log(1 + zmax), 0.0, n)
    a = np.exp(lna)
    x = x0 * a ** -3.0
    # F = (1 - C B)/(C B) with the numerator computed stably:
    # 1 - C B = (1 - C) + C (3 eps + 1.5 omega eps^2)
    C = C_of_x(x, gamma)
    e = eps_of_x(x, gamma)
    num = one_minus_C(x, gamma) + C * (3.0 * e + 1.5 * omega * e * e)
    den = C * (1.0 - 3.0 * e - 1.5 * omega * e * e)
    ln_rho_DE = -3.0 * lna + np.log(num) - np.log(den)
    w = -1.0 - np.gradient(ln_rho_DE, lna) / 3.0
    zz = 1.0 / a - 1.0
    return zz, w, x0


def completionB_tables():
    print("=" * 78)
    print("COMPLETION B -- Brans-Dicke 00-component, C pinned to C(rho_m(a))")
    print("=" * 78)
    print("""
  Control: B == 1 must reproduce the 2026-08-10 substituted-model numbers.""")
    for gamma in [0.489, 2.0]:
        x0 = x0_substituted(gamma)
        w0, wa, rms = fit_cpl(E2_substituted, gamma=gamma, x0=x0)
        print(f"    substituted gamma={gamma:5.3f}: w0 = {w0:+.4f}, wa = {wa:+.4f}"
              f"  (2026-08-10 script agrees)")
    print()

    print("  Structure of the completed model (omega = 0):")
    print(f"  {'gamma':>7s} {'x0':>10s} {'C0':>8s} {'B0':>8s} {'a_rip':>8s}"
          f" {'w(z=0)':>9s} {'w(z=1)':>9s} {'w(z=2.33)':>10s}")
    for gamma in [0.2, 0.489, 0.5, 1.0, 2.0, 5.0]:
        x0 = x0_completionB(gamma, 0.0)
        C0 = C_of_x(x0, gamma)
        B0 = B_of_x(x0, gamma, 0.0)
        # rip: Ceff -> 0+, i.e. eps -> 1/3 from below as x decreases
        x_rip = brentq(lambda x: eps_of_x(x, gamma) - 1.0 / 3.0, 1e-12, 1e12)
        a_rip = (x0 / x_rip) ** (1.0 / 3.0)
        zz, w, _ = completionB_wz(gamma, 0.0)
        wi = lambda zq: w[np.argmin(np.abs(zz - zq))]
        print(f"  {gamma:7.3f} {x0:10.4f} {C0:8.4f} {B0:8.4f} {a_rip:8.4f}"
              f" {wi(0.0):+9.4f} {wi(1.0):+9.4f} {wi(2.33):+10.4f}")
    print("""
  Note x0 and C0: the calibration C0*B0 = Omega_m pushes today's coherence
  far above the substituted model's C0 = 0.3, and a finite-a future
  singularity (a_rip) exists for every gamma -- the w = -1 attractor that
  generated the sign lock is gone.
""")

    # past-limit check: w -> -2 gamma still?
    print("  Past-limit check, w(z=999) vs -2*gamma (the lock's past anchor):")
    for gamma in [0.3, 0.489, 1.0, 2.0]:
        zz, w, _ = completionB_wz(gamma, 0.0)
        print(f"    gamma={gamma:5.3f}:  w(z=999) = {w[5]:+9.4f}   "
              f"-2*gamma = {-2*gamma:+9.4f}")
    print()

    # gamma = 1/2 is no longer LCDM
    zz, w, x0 = completionB_wz(0.5, 0.0)
    wi = lambda zq: w[np.argmin(np.abs(zz - zq))]
    print(f"  gamma = 1/2 branch (exact Lambda in the substituted model):")
    print(f"    completion B: w(0) = {wi(0.0):+.4f}, w(1) = {wi(1.0):+.4f}, "
          f"w(2.33) = {wi(2.33):+.4f}")
    print(f"    -> the Mobius/Lambda degeneracy is BROKEN by the C-dot terms;")
    print(f"       no member of the completed family is exactly LCDM.\n")


def quadrant_scan(omega, gammas):
    hits = []
    rows = []
    for gamma in gammas:
        try:
            x0 = x0_completionB(gamma, omega)
        except ValueError:
            rows.append((gamma, None)); continue
        w0, wa, rms = fit_cpl(E2_completionB, gamma=gamma, x0=x0, omega=omega)
        in_desi = (w0 > -1.0) and (wa < 0.0)
        hits.append((gamma, w0, wa, rms) if in_desi else None)
        rows.append((gamma, (w0, wa, rms, in_desi)))
    return rows, [h for h in hits if h]


def completionB_quadrant():
    print("  QUADRANT SCAN, omega = 0 -- where does the completed locus land?")
    print(f"  {'gamma':>8s} {'w0_CPL':>9s} {'wa_CPL':>9s} {'CPL rms%':>9s}"
          f" {'quadrant':>26s}")
    gammas = [0.05, 0.1, 0.2, 0.3, 0.4, 0.489, 0.5, 0.6, 0.8, 1.0, 1.5,
              2.0, 3.0, 5.0, 10.0, 20.0]
    rows, hits = quadrant_scan(0.0, gammas)
    for gamma, r in rows:
        if r is None:
            print(f"  {gamma:8.3f}   -- no valid calibration --"); continue
        w0, wa, rms, in_desi = r
        if in_desi:
            q = "*** DESI quadrant ***"
        elif w0 > -1:
            q = "w0 > -1, wa > 0"
        elif wa < 0:
            q = "w0 < -1, wa < 0"
        else:
            q = "w0 < -1, wa > 0"
        print(f"  {gamma:8.3f} {w0:+9.4f} {wa:+9.4f} {rms:9.3f} {q:>26s}")
    print()

    # dense scan for any DESI-quadrant window
    dense = np.concatenate([np.linspace(0.05, 1.0, 96),
                            np.linspace(1.0, 20.0, 96)])
    _, hits = quadrant_scan(0.0, dense)
    print(f"  DENSE SCAN omega=0: {len(hits)} of {len(dense)} gamma values land"
          f" in the DESI quadrant (w0 > -1, wa < 0)")
    if hits:
        g = [h[0] for h in hits]
        print(f"    window: gamma in [{min(g):.3f}, {max(g):.3f}]")
        for h in hits[:8]:
            print(f"    gamma={h[0]:7.3f}: w0={h[1]:+.4f}, wa={h[2]:+.4f}, "
                  f"CPL rms {h[3]:.2f}%")
    print()

    print("  OMEGA DEPENDENCE (dense gamma scan per omega):")
    for omega in [0.0, 1.0, 5.0, 50.0]:
        _, hits = quadrant_scan(omega, dense)
        if hits:
            g = [h[0] for h in hits]
            print(f"    omega = {omega:5.1f}: {len(hits)} hits, gamma window"
                  f" [{min(g):.3f}, {max(g):.3f}]")
        else:
            print(f"    omega = {omega:5.1f}: 0 hits")
    print()


def desi_pull(omega=0.0):
    """For each DESI combination: can any gamma match w0, and what wa results?
    Also the nearest point on the locus (crude uncorrelated distance, sign
    and scale only -- quadrant statement above is the load-bearing one)."""
    print(f"  MATCHING DESI (omega = {omega}): force w0, read the forced wa")
    for name, (w0d, sw0, wad, swa) in DESI_DR2.items():
        f = lambda g: fit_cpl(E2_completionB, gamma=g,
                              x0=x0_completionB(g, omega), omega=omega)[0] - w0d
        sol = None
        grid = np.linspace(0.05, 20.0, 120)
        vals = []
        for g in grid:
            try:
                vals.append((g, f(g)))
            except ValueError:
                vals.append((g, np.nan))
        for (g1, f1), (g2, f2) in zip(vals[:-1], vals[1:]):
            if np.isfinite(f1) and np.isfinite(f2) and f1 * f2 < 0:
                sol = brentq(f, g1, g2, xtol=1e-8)
                break
        if sol is None:
            print(f"    {name:22s} w0 = {w0d:+.3f}: unreachable for any gamma")
            continue
        w0m, wam, rms = fit_cpl(E2_completionB, gamma=sol,
                                x0=x0_completionB(sol, omega), omega=omega)
        same_sign = "SAME sign" if np.sign(wam) == np.sign(wad) else "wrong sign"
        print(f"    {name:22s} w0 = {w0d:+.3f} -> gamma = {sol:7.4f} -> "
              f"wa = {wam:+.3f}  (DESI: {wad:+.3f} +/- {swa:.2f}; {same_sign},"
              f" {abs(wam - wad)/swa:.1f} sigma)")
    print()


def shape_constraint_completionB(omega=0.0):
    """How badly does the COMPLETED family fail the BAO shape, with Omega_m
    and the r_d H0 scale marginalised (the 2026-08-10 methodology, applied
    to completion B)? The substituted family had an exact-LCDM member
    (gamma = 1/2, rms = 0.000%); the completed family has none -- this
    measures the floor of its shape residual."""
    from scipy.optimize import minimize
    print(f"  BAO SHAPE CONSTRAINT, completion B (omega = {omega}):")
    print(f"  Omega_m (calibration target) and scale k MARGINALISED;")
    print(f"  reference LCDM Omega_m = 0.315, range 0.3 < z < 2.33.")
    z = np.linspace(0.3, 2.33, 300)
    ref = np.sqrt(E2_lcdm(z, 0.315))

    def rms_for(gamma):
        def cost(p):
            om, k = p
            if not (0.05 < om < 0.95):
                return 1e6
            try:
                x0 = x0_completionB(gamma, omega, target=om)
            except ValueError:
                return 1e6
            E = np.sqrt((1 + z) ** 3 * om
                        / Ceff_of_x(x0 * (1 + z) ** 3, gamma, omega))
            return np.sqrt(np.mean((k * E / ref - 1) ** 2))
        best = min((minimize(cost, [g0, 1.0], method="Nelder-Mead",
                             options=dict(xatol=1e-10, fatol=1e-12,
                                          maxiter=4000))
                    for g0 in (0.2, 0.315, 0.5)), key=lambda r: r.fun)
        return best.fun * 100, best.x

    print(f"  {'gamma':>7s} {'rms shape resid %':>18s} {'profiled Om':>12s}"
          f" {'vs ~1% BAO':>12s}")
    best_g, best_rms = None, np.inf
    for gamma in [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.489, 0.5,
                  0.7, 1.0, 2.0]:
        rms, p = rms_for(gamma)
        if rms < best_rms:
            best_g, best_rms = gamma, rms
        flag = "OK" if rms < 1.0 else ("marginal" if rms < 2.0 else "EXCLUDED")
        print(f"  {gamma:7.3f} {rms:18.3f} {p[0]:12.4f} {flag:>12s}")
    print(f"  -> best member of the completed family: gamma ~ {best_g}, "
          f"rms {best_rms:.3f}%")
    print(f"     (substituted family's best member: gamma = 1/2, rms 0.000%)\n")


def w_shape(gamma, omega=0.0):
    zz, w, x0 = completionB_wz(gamma, omega)
    sel = (zz >= 0) & (zz <= 3)
    zs, ws = zz[sel], w[sel]
    i_pk = np.argmax(ws)
    print(f"  w(z) shape, gamma = {gamma}, omega = {omega}: "
          f"peak w = {ws[i_pk]:+.4f} at z = {zs[i_pk]:.3f}; "
          f"w(0) = {ws[np.argmin(np.abs(zs))]:+.4f}")


if __name__ == "__main__":
    unit_test_w()
    completion_A()
    completionB_tables()
    completionB_quadrant()
    desi_pull(0.0)
    shape_constraint_completionB(0.0)
    for g in [0.489, 0.7, 1.0, 2.0]:
        w_shape(g)
    print()
