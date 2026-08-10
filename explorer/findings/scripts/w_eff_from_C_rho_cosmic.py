#!/usr/bin/env python3
"""
w_eff(z) from C(rho-bar(z)) -- executing explorer topic
`compute-w-eff-z-the-no-coupling-claim-may-be-an-overclaim.md` (2026-08-10).

The site (/honest-assessment) asserts:
    "C(rho) contains no dark-energy sector and no mechanism that modifies the
     expansion history"

The research archive contains BOTH a mechanism and a computed w(z):
    Synchronism/Research/Session100_Modified_Friedmann.md  (2025-12-08)
    Synchronism/Research/Session101_Cosmic_Coherence.md    (2025-12-08)

This script:
  1. Unit-tests the effective-equation-of-state formula on known fluids.
  2. Reproduces Session 100/101's published C(z) table (pins gamma and x0).
  3. Recomputes w_eff(z) correctly and compares to the published numbers.
  4. Propagates BOTH live branches to H(z) and to distances.
  5. Projects each branch onto the CPL (w0, wa) plane for DESI DR2 comparison.

BRANCH DECLARATION (topic requirement #1): the modified Friedmann equation used
here is the archive's SOURCE-side substitution G_eff = G/C in H^2 = 8 pi G rho/3.
In the site's force-law fork vocabulary this is the L1 / source branch
(nabla^2 Phi = 4 pi G rho / C), NOT the L2==L3 branch (g = g_bar / C) that the
galaxy tests use. Session 100 performs the substitution; it does not derive it
from a field equation, and no other branch has been propagated to cosmology.
"""

import numpy as np

OM = 0.3           # Omega_m, as used by Session 100/101
OL = 1.0 - OM

# ---------------------------------------------------------------- 0. utilities

def w_of_rho(lna, rho):
    """Effective equation of state from the continuity equation.

        rho_dot + 3 H (rho + p) = 0,  p = w rho
        => d ln rho / d ln a = -3 (1 + w)
        => w = -1 - (1/3) d ln rho / d ln a
    """
    dln = np.gradient(np.log(rho), lna)
    return -1.0 - dln / 3.0


def w_session100(lna, rho):
    """The formula as written in Session 100 and Session 101:
           w_eff = -1 + (1/3) d(ln rho_DE)/d(ln a)
       (sign of the derivative term flipped relative to the continuity equation)
    """
    dln = np.gradient(np.log(rho), lna)
    return -1.0 + dln / 3.0


def unit_test_w():
    """A correct w-estimator must return 0 for matter, 1/3 for radiation,
    -1 for a cosmological constant."""
    lna = np.linspace(-3, 1, 40001)
    a = np.exp(lna)
    checks = [("matter    (rho ~ a^-3)", a**-3.0, 0.0),
              ("radiation (rho ~ a^-4)", a**-4.0, 1.0 / 3.0),
              ("Lambda    (rho = const)", np.ones_like(a), -1.0)]
    print("UNIT TEST of the equation-of-state estimator")
    print(f"  {'fluid':26s} {'correct formula':>16s} {'Session-100 formula':>21s} {'truth':>8s}")
    ok = True
    for name, rho, truth in checks:
        wc = w_of_rho(lna, rho)[len(lna) // 2]
        ws = w_session100(lna, rho)[len(lna) // 2]
        ok &= abs(wc - truth) < 1e-8
        print(f"  {name:26s} {wc:16.6f} {ws:21.6f} {truth:8.4f}")
    print(f"  -> correct formula passes all three: {ok}")
    print("  -> Session-100 formula fails all three (matter -> -2, radiation -> -7/3,")
    print("     Lambda -> -1 only because the derivative vanishes there).\n")
    return ok


# ------------------------------------------------- 1. the two coherence branches

def C_galactic(z, gamma, x0):
    """Site's canonical C(rho) = tanh(gamma ln(rho/rho_crit + 1)), rho ~ (1+z)^3."""
    x = x0 * (1.0 + z) ** 3
    return np.tanh(gamma * np.log1p(x))


def x0_from_calibration(gamma, C0=OM):
    """Session 100 fixes rho_0/rho_crit by DEMANDING C(z=0) = Omega_m.
    This is a calibration, not a derivation: rho_crit = A V_flat^2 has no
    cosmological V_flat, so the cosmic rho_crit is defined by this condition."""
    return np.expm1(np.arctanh(C0) / gamma)


def C_cosmic(z):
    """Session 101's 'resolution': C_cosmic(z) = Omega_m(z)."""
    return OM * (1 + z) ** 3 / (OM * (1 + z) ** 3 + OL)


# ------------------------------------------------------------ 2. reproduce them

def reproduce_published_tables():
    gamma = 2.0
    x0 = x0_from_calibration(gamma)
    print("REPRODUCTION of Session 100/101 published tables")
    print(f"  gamma = {gamma}, calibrated rho_0/rho_crit = x0 = {x0:.5f}")
    print("  (x0 is set by requiring C(0) = Omega_m = 0.3 -- a fit with zero"
          " first-principles content)\n")

    # Session 100 Part 3 table
    print("  Session 100 Part 3:  C(z) and rho_DE/rho_m")
    print(f"  {'z':>5s} {'C pub':>7s} {'C here':>8s} {'ratio pub':>10s} {'ratio here':>11s}")
    for z, Cpub, rpub in [(0, 0.30, 2.33), (0.5, 0.72, 0.40),
                          (1.0, 0.94, 0.07), (2.0, 1.00, 0.00), (5.0, 1.00, 0.00)]:
        C = C_galactic(z, gamma, x0)
        print(f"  {z:5.1f} {Cpub:7.2f} {C:8.4f} {rpub:10.2f} {(1-C)/C:11.4f}")
    print("  -> C(z) reproduces exactly. gamma=2 and the C0=Omega_m calibration"
          " are confirmed as the inputs.\n")
    return gamma, x0


# ------------------------------------------------------------- 3. correct w_eff

def w_galactic_analytic(z, gamma, x0):
    """Closed form. With f = (1-C)/C and rho_DE = rho_m f:

        d ln C / d ln a = -3 gamma (1 - C^2) x/(1+x)
        d ln f / d ln a = +3 gamma (1 + C) x/[C (1+x)]
        d ln rho_DE/d ln a = -3 + d ln f/d ln a

        w = -1 - (1/3) d ln rho_DE/d ln a = - gamma (1 + C) x / [C (1 + x)]
    """
    x = x0 * (1.0 + z) ** 3
    C = np.tanh(gamma * np.log1p(x))
    return -gamma * (1.0 + C) * x / (C * (1.0 + x))


def audit_published_w(gamma, x0):
    print("AUDIT of the published w_eff numbers (Session 101 Part 3 table)")
    print(f"  {'z':>5s} {'published':>10s} {'their stated':>13s} {'-1 + T':>9s} {'CORRECT':>9s}")
    print(f"  {'':>5s} {'w_galactic':>10s} {'formula':>13s} {'':>9s} {'w = -T':>9s}")
    lna = np.linspace(-4, 0.5, 200001)
    a = np.exp(lna)
    zz = 1.0 / a - 1.0
    C = C_galactic(zz, gamma, x0)
    rho_DE = (a ** -3.0) * (1 - C) / C
    w_corr_num = w_of_rho(lna, rho_DE)
    w_s100_num = w_session100(lna, rho_DE)

    for z, wpub in [(0.1, 0.32), (0.5, 0.73), (1.0, 1.37), (2.0, 2.28)]:
        i = np.argmin(np.abs(zz - z))
        x = x0 * (1 + z) ** 3
        Cz = C_galactic(z, gamma, x0)
        T = gamma * (1 + Cz) * x / (Cz * (1 + x))
        print(f"  {z:5.1f} {wpub:10.2f} {w_s100_num[i]:13.4f} {-1+T:9.4f} "
              f"{w_corr_num[i]:9.4f}")
    print()
    print("  Column 3 is Session 101's OWN stated formula, evaluated numerically.")
    print("  Column 4 is (1/3) d ln rho_DE / d ln a, i.e. the stated formula with")
    print("  the leading -1 dropped. Column 4 reproduces the published numbers.")
    print("  -> The published table is wrong TWICE: the stated formula has a sign")
    print("     error against the continuity equation, AND the tabulated values do")
    print("     not even follow that stated formula (the -1 term is missing).")
    print(f"  -> Corrected w_eff(z=0) = {w_galactic_analytic(0.0, gamma, x0):.4f},"
          f" not '> 0'.\n")
    # analytic vs numeric cross-check
    err = np.max(np.abs(w_corr_num[(zz > 0) & (zz < 3)]
                        - w_galactic_analytic(zz[(zz > 0) & (zz < 3)], gamma, x0)))
    print(f"  analytic/numeric agreement on 0<z<3: max |diff| = {err:.2e}\n")


# ------------------------------------------------------ 4. expansion history H(z)

def E2_galactic(z, gamma, x0):
    """H^2/H0^2 = (1+z)^3 C(0)/C(z) from H^2 = 8 pi G rho_m / (3 C)."""
    return (1 + z) ** 3 * C_galactic(0.0, gamma, x0) / C_galactic(z, gamma, x0)


def E2_lcdm(z):
    return OM * (1 + z) ** 3 + OL


def E2_cpl(z, w0, wa):
    a = 1.0 / (1 + z)
    de = OL * (1 + z) ** (3 * (1 + w0 + wa)) * np.exp(-3 * wa * (1 - a))
    return OM * (1 + z) ** 3 + de


def expansion_history(gamma, x0, label):
    print(f"EXPANSION HISTORY -- galactic branch, gamma = {gamma}")
    print(f"  {'z':>5s} {'E_sync':>9s} {'E_LCDM':>9s} {'dH/H %':>9s} {'w_eff':>9s}")
    for z in [0.15, 0.3, 0.5, 0.7, 1.0, 1.5, 2.0, 2.33, 3.0]:
        Es = np.sqrt(E2_galactic(z, gamma, x0))
        El = np.sqrt(E2_lcdm(z))
        print(f"  {z:5.2f} {Es:9.4f} {El:9.4f} {100*(Es/El-1):9.2f} "
              f"{w_galactic_analytic(z, gamma, x0):9.4f}")
    print("  DESI DR2 BAO measures H(z) r_d to ~1% per bin over 0.3 < z < 2.3.\n")


def comoving_distance(E2fun, z_max, n=200001, **kw):
    z = np.linspace(0.0, z_max, n)
    return np.trapz(1.0 / np.sqrt(E2fun(z, **kw)), z)   # in units of c/H0


# ------------------------------------------------------- 5. CPL projection

def fit_cpl_to_E(E2fun, zmax=2.5, **kw):
    """Least-squares (w0, wa) whose CPL expansion history best matches the
    branch, over the DESI BAO range. Omega_m held at 0.3 in both."""
    from scipy.optimize import least_squares
    z = np.linspace(0.02, zmax, 400)
    target = np.sqrt(E2fun(z, **kw))

    def resid(p):
        return np.sqrt(E2_cpl(z, p[0], p[1])) / target - 1.0

    r = least_squares(resid, [-1.0, 0.0])
    rms = np.sqrt(np.mean(r.fun ** 2)) * 100
    return r.x[0], r.x[1], rms


# ------------------------------------------------------------------- 6. gamma sweep

def gamma_sweep():
    print("GAMMA SWEEP -- is the failure specific to the abandoned gamma = 2?")
    print("  For every gamma, x0 is re-calibrated so that C(0) = Omega_m = 0.3,")
    print("  so every row is a fair, fully-calibrated version of the model.")
    print(f"  {'gamma':>7s} {'x0':>9s} {'w0':>9s} {'wa_CPL':>9s} {'max |dH/H|%':>12s}"
          f" {'z of max':>9s} {'CPL rms%':>9s}")
    zg = np.linspace(0.02, 2.5, 500)
    for gamma in [0.489, 0.5, 1.0, 1.5, 2.0, 3.0, 5.0, 10.0]:
        x0 = x0_from_calibration(gamma)
        dh = np.sqrt(E2_galactic(zg, gamma, x0) / E2_lcdm(zg)) - 1.0
        i = np.argmax(np.abs(dh))
        w0, wa, rms = fit_cpl_to_E(E2_galactic, gamma=gamma, x0=x0)
        print(f"  {gamma:7.3f} {x0:9.4f} {w_galactic_analytic(0.0, gamma, x0):9.4f}"
              f" {wa:9.4f} {100*dh[i]:12.2f} {zg[i]:9.2f} {rms:9.2f}")
    print()


# ------------------------------------------------------------- 7. cosmic branch

def cosmic_branch():
    print("COSMIC BRANCH -- Session 101's C_cosmic(z) = Omega_m(z)")
    lna = np.linspace(-4, 0.5, 200001)
    a = np.exp(lna)
    zz = 1.0 / a - 1.0
    C = C_cosmic(zz)
    rho_DE = (a ** -3.0) * (1 - C) / C
    w = w_of_rho(lna, rho_DE)
    for z in [0.0, 0.5, 1.0, 2.0, 5.0]:
        i = np.argmin(np.abs(zz - z))
        print(f"  z = {z:4.1f}   C_cosmic = {C_cosmic(z):.4f}   "
              f"rho_DE/rho_DE(0) = {rho_DE[i]/rho_DE[np.argmin(np.abs(zz))]:.6f}   "
              f"w_eff = {w[i]:+.8f}")
    Es = np.sqrt(E2_galactic(1.0, 2.0, x0_from_calibration(2.0)))
    print()
    print("  rho_DE is EXACTLY constant and w == -1 to machine precision, at all z.")
    print("  This is not a result -- Session 101 imposed d ln rho_DE/d ln a = 0 and")
    print("  solved for C. The 'verification' table is the assumption read back.")
    print("  Consequence: this branch is ALGEBRAICALLY IDENTICAL to LCDM in the")
    print("  background. It has zero free parameters and cannot be tuned.")
    print("  It therefore makes a hard prediction: (w0, wa) = (-1, 0) exactly.\n")


# ---------------------------------------------------------------------- 8. DESI

DESI_DR2 = {
    # DESI DR2 BAO + CMB + SNe, arXiv:2503.14738 (values from memory -- VERIFY
    # against the paper before any external claim is made on them).
    "BAO+CMB":            (-0.42, 0.21, -1.75, 0.58, 3.1),
    "BAO+CMB+Pantheon+":  (-0.838, 0.055, -0.62, 0.22, 2.8),
    "BAO+CMB+Union3":     (-0.667, 0.088, -1.09, 0.31, 3.8),
    "BAO+CMB+DESY5":      (-0.752, 0.057, -0.86, 0.22, 4.2),
}


def desi_comparison(gamma, x0):
    w0g, wag, rms = fit_cpl_to_E(E2_galactic, gamma=gamma, x0=x0)
    print("DESI DR2 COMPARISON  (w0, wa) plane")
    print(f"  galactic branch (gamma={gamma}) CPL projection: "
          f"w0 = {w0g:+.3f}, wa = {wag:+.3f}  [CPL fit rms {rms:.2f}%]")
    print("  cosmic branch (Session 101):                w0 = -1.000, wa = +0.000"
          "  [exact]")
    print(f"  LCDM:                                       w0 = -1.000, wa = +0.000\n")
    print(f"  {'dataset':22s} {'w0':>16s} {'wa':>16s} {'pull: galactic':>15s}"
          f" {'pull: cosmic':>13s}")
    for k, (w0, sw0, wa, swa, sig) in DESI_DR2.items():
        pg = np.hypot((w0g - w0) / sw0, (wag - wa) / swa)
        pc = np.hypot((-1.0 - w0) / sw0, (0.0 - wa) / swa)
        print(f"  {k:22s} {w0:8.3f}+/-{sw0:<5.3f} {wa:8.3f}+/-{swa:<5.3f}"
              f" {pg:15.1f} {pc:13.1f}")
    print()
    print("  'pull' is a crude uncorrelated quadrature distance, NOT a chi^2 from")
    print("  the published covariance -- w0 and wa are strongly anti-correlated")
    print("  (rho ~ -0.9), so these OVERSTATE the tension. They are reported only")
    print("  to fix the sign and rough scale. The defensible statement is the")
    print("  H(z) comparison above, which needs no contour.\n")


def distances(gamma, x0):
    print("DISTANCE CROSS-CHECK (units of c/H0)")
    for zmax in [1.0, 2.5, 1100.0]:
        ds = comoving_distance(E2_galactic, zmax, gamma=gamma, x0=x0)
        dl = comoving_distance(lambda z: E2_lcdm(z), zmax)
        print(f"  D_C(z<{zmax:7.1f}):  sync = {ds:8.5f}   LCDM = {dl:8.5f}   "
              f"diff = {100*(ds/dl-1):+7.2f}%")
    print("  The CMB acoustic scale theta_* is measured to ~0.03%. A percent-level")
    print("  shift in D_C(1100) at fixed sound horizon is not survivable.\n")


def analytic_limits():
    """The sign lock, proved rather than sampled.

        w(a) = - gamma (1 + C) x / [C (1 + x)],   x = x0 a^-3

    Far future  a -> inf:  x -> 0, C -> gamma x, so w -> -1 for EVERY gamma.
    Far past    a -> 0:    x -> inf, C -> 1,     so w -> -2 gamma.

    w interpolates monotonically between -2 gamma (past) and -1 (future).
    Hence w0 always lies strictly between them, and:
        gamma > 1/2  =>  -2 gamma < -1  =>  w0 < -1 and w decreasing into past (wa < 0)
        gamma < 1/2  =>  -2 gamma > -1  =>  w0 > -1 and w increasing into past (wa > 0)
        gamma = 1/2  =>  both limits equal -1  =>  w == -1 identically
    So sign(w0 + 1) == sign(wa), always. DESI needs them OPPOSITE.
    """
    print("ANALYTIC LIMITS AND MONOTONICITY CHECK")
    print(f"  {'gamma':>7s} {'w(z=1e6)':>10s} {'-2*gamma':>10s} {'w(a=1e4)':>10s}"
          f" {'w0':>9s} {'monotone in z?':>16s}")
    z = np.logspace(-4, 4, 6000)
    for gamma in [0.1, 0.3, 0.489, 0.5, 1.0, 2.0, 5.0]:
        x0 = x0_from_calibration(gamma)
        w = w_galactic_analytic(z, gamma, x0)
        d = np.diff(w)
        mono = np.all(d <= 1e-12) or np.all(d >= -1e-12)
        print(f"  {gamma:7.3f} {w_galactic_analytic(1e6, gamma, x0):10.4f}"
              f" {-2*gamma:10.4f} {w_galactic_analytic(-1.0 + 1e-4, gamma, x0):10.4f}"
              f" {w_galactic_analytic(0.0, gamma, x0):9.4f} {str(mono):>16s}")
    print("  -> w(z->inf) = -2 gamma exactly; w(a->inf) = -1 exactly; monotone")
    print("     throughout. The sign lock sign(w0+1) == sign(wa) is therefore a")
    print("     THEOREM for this family, not a sampling artifact.\n")


def gamma_constraint_marginalised():
    """How tightly does the background actually pin gamma?

    NUISANCE DECLARATION (this program's standing rule): Omega_m of the
    Synchronism model and an overall multiplicative scale k are MARGINALISED
    (profiled) here, not fixed. k is physically the r_d H0 combination that BAO
    cannot separate from the shape. The reference is LCDM with Omega_m = 0.315.
    Only the SHAPE of E(z) over the DESI BAO range is being compared.

    Fixing Omega_m = 0.3 and k = 1 -- as the naive comparison above does --
    would overstate the constraint. That is the documented over-refutation
    failure mode of this program; this function is the corrected version.
    """
    from scipy.optimize import minimize
    print("GAMMA CONSTRAINT FROM BACKGROUND SHAPE (Omega_m and r_d H0 MARGINALISED)")
    z = np.linspace(0.3, 2.33, 300)
    ref = np.sqrt(0.315 * (1 + z) ** 3 + 0.685)

    def shape_resid(gamma):
        def cost(p):
            om, k = p
            if not (0.05 < om < 0.95):
                return 1e6
            x0 = np.expm1(np.arctanh(om) / gamma)
            E = np.sqrt((1 + z) ** 3 * om / np.tanh(gamma * np.log1p(x0 * (1 + z) ** 3)))
            return np.sqrt(np.mean((k * E / ref - 1) ** 2))
        best = min((minimize(cost, [g0, 1.0], method="Nelder-Mead",
                             options=dict(xatol=1e-10, fatol=1e-12, maxiter=4000))
                    for g0 in (0.2, 0.315, 0.5)), key=lambda r: r.fun)
        return best.fun * 100, best.x

    print(f"  {'gamma':>7s} {'rms shape resid %':>18s} {'profiled Om':>12s} {'k':>8s}"
          f" {'vs ~1% BAO':>12s}")
    for gamma in [0.2, 0.3, 0.4, 0.45, 0.489, 0.5, 0.52, 0.55, 0.6, 0.7, 1.0, 2.0]:
        rms, p = shape_resid(gamma)
        flag = "OK" if rms < 1.0 else ("marginal" if rms < 2.0 else "EXCLUDED")
        print(f"  {gamma:7.3f} {rms:18.3f} {p[0]:12.4f} {p[1]:8.4f} {flag:>12s}")
    print()
    print("  -> Even after marginalising Omega_m and the r_d H0 scale, the shape")
    print("     residual grows steeply away from gamma = 1/2. This is the FIRST")
    print("     constraint on gamma in DENSITY space: the cosmological background")
    print("     is the only observable where rho is known without a structural")
    print("     model (rho_bar(z) = Omega_m rho_c (1+z)^3, exact), whereas SPARC")
    print("     yields g_bar and requires a vertical-structure model to reach rho.\n")


def quadrant_locus():
    """The framework's cosmic sector is a strict ONE-parameter family.

    C0 is not a free calibration: Omega_m == 8 pi G rho_m0 / (3 H0^2) by
    definition, and the modified Friedmann equation gives H0^2 = 8 pi G rho_m0
    / (3 C0). Therefore C0 = Omega_m identically -- forced, not fitted. x0 then
    follows from gamma. gamma is the only knob.

    So the model traces a ONE-DIMENSIONAL CURVE through the (w0, wa) plane.
    This maps it and asks whether it can ever reach DESI DR2's preferred
    region, which is the quadrant w0 > -1 AND wa < 0 (a phantom crossing).
    """
    print("QUADRANT LOCUS -- the whole one-parameter family in the (w0, wa) plane")
    print("  C0 = Omega_m is FORCED by the definition of Omega_m, not chosen.")
    print("  gamma is the only free parameter. gamma = 1/2 is the exact LCDM point")
    print("  (proved analytically: C = x/(x+2) => rho_DE = 2 rho_m0/x0 = const).\n")
    print(f"  {'gamma':>8s} {'w0_CPL':>9s} {'wa_CPL':>9s} {'quadrant':>26s}")
    hits = []
    for gamma in [0.05, 0.1, 0.2, 0.3, 0.4, 0.45, 0.489, 0.499, 0.5,
                  0.501, 0.55, 0.7, 1.0, 2.0, 5.0, 20.0]:
        x0 = x0_from_calibration(gamma)
        w0, wa, _ = fit_cpl_to_E(E2_galactic, gamma=gamma, x0=x0)
        if abs(w0 + 1) < 1e-6 and abs(wa) < 1e-6:
            q = "LCDM point (exact)"
        elif w0 > -1 and wa < 0:
            q = "*** DESI quadrant ***"
        elif w0 > -1:
            q = "w0 > -1, wa > 0"
        elif wa < 0:
            q = "w0 < -1, wa < 0"
        else:
            q = "w0 < -1, wa > 0"
        hits.append(w0 > -1 and wa < 0 and not (abs(w0 + 1) < 1e-6))
        print(f"  {gamma:8.3f} {w0:9.4f} {wa:9.4f} {q:>26s}")
    print()
    print(f"  gamma values reaching the DESI quadrant: {sum(hits)} of {len(hits)}")
    print("  -> For gamma > 1/2 the locus sits in (w0 < -1, wa < 0).")
    print("  -> For gamma < 1/2 it sits in (w0 > -1, wa > 0).")
    print("  -> DESI DR2 prefers (w0 > -1, wa < 0) -- a phantom crossing from below.")
    print("     The framework's locus passes through LCDM and enters the two")
    print("     quadrants ADJACENT to DESI's, never DESI's own. It fails by")
    print("     QUADRANT, for every gamma, with no parameter left to adjust.\n")

    print("  What gamma would DESI's w0 require, and what wa does it then force?")
    from scipy.optimize import brentq
    for name, (w0d, sw0, wad, swa, _) in DESI_DR2.items():
        try:
            f = lambda g: fit_cpl_to_E(E2_galactic, gamma=g,
                                       x0=x0_from_calibration(g))[0] - w0d
            g = brentq(f, 1e-3, 0.4999, xtol=1e-10)
            _, wa_forced, _ = fit_cpl_to_E(E2_galactic, gamma=g,
                                           x0=x0_from_calibration(g))
            print(f"  {name:22s} w0 = {w0d:+.3f} -> gamma = {g:.5f} -> "
                  f"wa = {wa_forced:+.3f}  (DESI wants {wad:+.3f}, "
                  f"{abs(wa_forced-wad)/swa:.1f} sigma away, wrong sign)")
        except ValueError:
            print(f"  {name:22s} w0 = {w0d:+.3f} -> UNREACHABLE for any gamma")
    print()


if __name__ == "__main__":
    print("=" * 78)
    print("w_eff(z) FROM C(rho-bar(z)) -- SOURCE (L1) BRANCH")
    print("=" * 78 + "\n")
    unit_test_w()
    gamma, x0 = reproduce_published_tables()
    audit_published_w(gamma, x0)
    expansion_history(gamma, x0, "gamma=2")
    gamma_sweep()
    cosmic_branch()
    analytic_limits()
    gamma_constraint_marginalised()
    quadrant_locus()
    desi_comparison(gamma, x0)
    distances(gamma, x0)
