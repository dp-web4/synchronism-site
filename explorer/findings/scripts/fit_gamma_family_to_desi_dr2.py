#!/usr/bin/env python3
"""
Fit the framework's actual w(z; gamma) family DIRECTLY to DESI DR2 BAO +
compressed Planck 2018 + DES supernovae -- executing explorer topic
`fit-the-gamma-family-to-desi-chains.md` (2026-08-12).

WHY. Every DESI statement on the site is quadrant-level in CPL (w0, wa)
space: "0/192 gamma values reach the DESI quadrant". But the family does not
live in CPL space, CPL projection of non-CPL w(z) has known biases
(Shlivko & Steinhardt arXiv:2405.03933; Cortes & Liddle arXiv:2404.08056;
Wolf, Garcia-Garcia, Ferreira arXiv:2408.17318, arXiv:2502.04929), and --
the structural point the quadrant rhetoric hides -- LCDM ITSELF is outside
the DESI quadrant. "Forbidden quadrant" is not a fit. This script produces
the fit: chi^2 of the substituted family and completion B against the same
data that generate DESI's w0waCDM preference, compared against LCDM and
w0waCDM on identical terms.

STRUCTURAL FACT the quadrant statements missed: the substituted family NESTS
LCDM exactly (gamma = 1/2, the Mobius point: rho_m/C = rho_m + 2 rho_crit).
So the substituted family can never fit WORSE than LCDM at its best fit --
the honest statement of its DESI status is exactly LCDM's own 2.8-4.2 sigma
tension, not a separate exclusion. Completion B has NO LCDM member (the
C-dot terms break the degeneracy), so its best fit CAN be worse than LCDM.
How much worse is the sharp new number this script computes.

DATA (all verified against sources today, 2026-08-12 -- see finding):
  BAO   DESI DR2 (arXiv:2503.14738), 13 measurements, per-tracer D_M-D_H
        correlations, as tabulated by arXiv:2506.17926 Table 1.
  CMB   Planck 2018 TT,TE,EE+lowE distance priors (R, l_A, omega_b h^2),
        Chen, Huang & Wang arXiv:1808.05724 Table 1 (verified today).
  SN    DES-Dovekie Hubble diagram (des-science/DES-SN5YR repo, 2025
        recalibration of DES-SN5YR), 1820 SNe, full STAT+SYS inverse
        covariance, M marginalised analytically (Goliath et al. A9-A12,
        as in the repo's own likelihood module).

NUISANCE DECLARATION (standing rule -- what is marginalised, what is fixed):
  MARGINALISED per model: Omega_m, h, omega_b (all fits); SN offset M
    (analytic); gamma (family fits); w0, wa (CPL fit).
  FIXED: omega in completion B scanned on {0, 1, 5, 50}, not fitted
    continuously; radiation is standard and uncoupled (C multiplies the
    matter term only, matching Session #100's structure); massless
    neutrinos N_eff = 3.046 (no 0.06 eV mass -- shifts all models' chi^2
    coherently, fair for Delta-chi^2); z* and z_drag from Hu & Sugiyama
    1996 / Eisenstein & Hu 1998 fitting formulas; quasi-static pinning
    ansatz for completion B (standing conditionality); flatness.
  KNOWN LIMITS: compressed CMB priors were derived within w0waCDM-like
    late-time models -- valid here because the family's C -> 1 before
    recombination (checked below per fit); Dovekie is the DES group's own
    2025 recalibration (successor of DESY5 used in DR2 -- the "stale
    inputs" rule cuts this way); no Union3/Pantheon+ arm (deferred).
"""

import os
import sys
import urllib.request

import numpy as np
from scipy.optimize import brentq, minimize
from scipy.integrate import cumulative_trapezoid

C_KMS = 299792.458
T_CMB = 2.7255
OMEGA_G = 2.469e-5 * (T_CMB / 2.7) ** 4   # photon density omega_gamma h^2
N_EFF = 3.046
OMEGA_R = OMEGA_G * (1.0 + 0.2271 * N_EFF)  # massless-neutrino radiation

# ------------------------------------------------------------------ BAO data
# DESI DR2 (arXiv:2503.14738) as tabulated by arXiv:2506.17926 Table 1.
# (z_eff, kind, value, sigma) ; anisotropic pairs carry corr(D_M, D_H).
BAO_DV = [(0.295, 7.944, 0.075)]
BAO_MH = [
    # z_eff,  DM/rd,  sDM,   DH/rd,  sDH,   r_MH
    (0.510, 13.587, 0.169, 21.863, 0.427, -0.475),
    (0.706, 17.347, 0.180, 19.458, 0.332, -0.423),
    (0.934, 21.574, 0.153, 17.641, 0.193, -0.425),
    (1.321, 27.605, 0.320, 14.178, 0.217, -0.437),
    (1.484, 30.519, 0.758, 12.816, 0.513, -0.489),
    (2.330, 38.988, 0.531,  8.632, 0.101, -0.431),
]

# ------------------------------------------------------------------ CMB data
# Planck 2018 TT,TE,EE+lowE distance priors, Chen, Huang & Wang
# arXiv:1808.05724 Table 1 (verified 2026-08-12).
CMB_MEAN = np.array([1.7502, 301.471, 0.02236])          # R, l_A, omega_b
CMB_SIG = np.array([0.0046, 0.090, 0.00015])
CMB_CORR = np.array([[1.00, 0.46, -0.66],
                     [0.46, 1.00, -0.33],
                     [-0.66, -0.33, 1.00]])
CMB_ICOV = np.linalg.inv(CMB_CORR * np.outer(CMB_SIG, CMB_SIG))

# DESI DR2 published w0waCDM posteriors (arXiv:2503.14738; Pantheon+ row
# verified against the paper's text today) -- context only, not fit inputs.
DESI_DR2_CPL = {
    "BAO+CMB":           (-0.42, -1.75),
    "BAO+CMB+Pantheon+": (-0.838, -0.62),
    "BAO+CMB+DESY5":     (-0.752, -0.86),
}

# ------------------------------------------------------------------- SN data
SN_HD_URL = ("https://raw.githubusercontent.com/des-science/DES-SN5YR/main/"
             "4_DISTANCES_COVMAT/DES-Dovekie_HD.csv")
SN_COV_URL = ("https://raw.githubusercontent.com/des-science/DES-SN5YR/main/"
              "4_DISTANCES_COVMAT/STAT%2BSYS.npz")
CACHE = "/tmp"


def fetch(url, fname):
    path = os.path.join(CACHE, fname)
    if not os.path.exists(path):
        print(f"  downloading {fname} ...")
        urllib.request.urlretrieve(url, path)
    return path


def load_sn():
    # SNANA key-row format: "VARNAMES: ..." header, "SN: ..." data rows
    path = fetch(SN_HD_URL, "dovekie_hd.csv")
    cols, zhd, zhel, mu = None, [], [], []
    with open(path) as f:
        for line in f:
            if line.startswith("VARNAMES:"):
                cols = line.split()[1:]
                iz, izh, imu = (cols.index(k) for k in ("zHD", "zHEL", "MU"))
            elif line.startswith("SN:"):
                v = line.split()[1:]
                zhd.append(float(v[iz]))
                zhel.append(float(v[izh]))
                mu.append(float(v[imu]))
    zhd, zhel, mu = map(np.array, (zhd, zhel, mu))
    d = np.load(fetch(SN_COV_URL, "statsys.npz"))
    n = int(d[d.files[0]][0])
    assert n == len(zhd), (n, len(zhd))
    icov = np.zeros((n, n))
    icov[np.triu_indices(n)] = d[d.files[1]]
    il = np.tril_indices(n, -1)
    icov[il] = icov.T[il]
    return zhd, zhel, mu, icov


# ------------------------------------------------------- coherence primitives

def C_of_x(x, gamma):
    return np.tanh(gamma * np.log1p(x))


def one_minus_C(x, gamma):
    u = gamma * np.log1p(x)
    return 2.0 / (np.exp(np.minimum(2.0 * u, 700.0)) + 1.0)


def eps_of_x(x, gamma):
    C = C_of_x(x, gamma)
    return gamma * x * one_minus_C(x, gamma) * (1.0 + C) / (C * (1.0 + x))


def B_of_x(x, gamma, omega):
    e = eps_of_x(x, gamma)
    return 1.0 - 3.0 * e - 1.5 * omega * e * e


def Ceff_of_x(x, gamma, omega):
    return C_of_x(x, gamma) * B_of_x(x, gamma, omega)


def x0_substituted(gamma, C0):
    return np.expm1(np.arctanh(C0) / gamma)


def x0_completionB(gamma, omega, C0):
    if omega == 0.0:
        eps_crit = 1.0 / 3.0
    else:
        eps_crit = (-3.0 + np.sqrt(9.0 + 6.0 * omega)) / (3.0 * omega)
    x_B0 = brentq(lambda x: eps_of_x(x, gamma) - eps_crit, 1e-12, 1e12,
                  xtol=1e-14, rtol=1e-14)
    return brentq(lambda x: Ceff_of_x(x, gamma, omega) - C0,
                  x_B0 * (1 + 1e-10), 1e14, rtol=1e-14)


# ------------------------------------------------------------------- models
# Each model: E2(z, p) with p = dict of parameters. Late-time coupling only;
# radiation standard. Closure E2(0) = 1 defines the calibration.

def make_E2(model, p):
    om, h = p["om"], p["h"]
    orad = OMEGA_R / h ** 2

    if model == "lcdm":
        ol = 1.0 - om - orad
        return lambda z: (om * (1 + z) ** 3 + orad * (1 + z) ** 4 + ol)

    if model == "cpl":
        w0, wa = p["w0"], p["wa"]
        ol = 1.0 - om - orad

        def E2(z):
            a = 1.0 / (1 + z)
            de = ol * (1 + z) ** (3 * (1 + w0 + wa)) * np.exp(-3 * wa * (1 - a))
            return om * (1 + z) ** 3 + orad * (1 + z) ** 4 + de
        return E2

    if model == "subst":
        gamma = p["gamma"]
        C0 = om / (1.0 - orad)          # closure: om/C0 + orad = 1
        if not (0 < C0 < 1):
            return None
        x0 = x0_substituted(gamma, C0)

        def E2(z):
            x = x0 * (1 + z) ** 3
            return om * (1 + z) ** 3 / C_of_x(x, gamma) + orad * (1 + z) ** 4
        return E2

    if model == "compB":
        gamma, omega = p["gamma"], p["omega"]
        C0 = om / (1.0 - orad)
        if not (0 < C0 < 1):
            return None
        try:
            x0 = x0_completionB(gamma, omega, C0)
        except ValueError:
            return None

        def E2(z):
            x = x0 * (1 + z) ** 3
            return om * (1 + z) ** 3 / Ceff_of_x(x, gamma, omega) \
                + orad * (1 + z) ** 4
        return E2

    raise ValueError(model)


# ----------------------------------------------------------- CMB primitives

def z_star(ob, om):
    g1 = 0.0783 * ob ** -0.238 / (1 + 39.5 * ob ** 0.763)
    g2 = 0.560 / (1 + 21.1 * ob ** 1.81)
    return 1048.0 * (1 + 0.00124 * ob ** -0.738) * (1 + g1 * om ** g2)


def z_drag(ob, om):
    b1 = 0.313 * om ** -0.419 * (1 + 0.607 * om ** 0.674)
    b2 = 0.238 * om ** 0.223
    return 1291.0 * om ** 0.251 / (1 + 0.659 * om ** 0.828) \
        * (1 + b1 * ob ** b2)


def sound_horizon(E2, h, ob, z_end, calib=1.0):
    """r_s(z_end) in Mpc: integrate c_s/H from z_end to z ~ 1e8 on a log
    grid. E2 must be valid at early times (C -> 1 checked by caller).
    `calib` is a CAMB-calibration constant (see CALIB_STAR / CALIB_DRAG)."""
    lz = np.linspace(np.log(1 + z_end), np.log(1e8), 4000)
    z = np.exp(lz) - 1.0
    Rb = 31500.0 * ob * (T_CMB / 2.7) ** -4 / (1 + z)
    cs = C_KMS / np.sqrt(3.0 * (1.0 + Rb))
    H = 100.0 * h * np.sqrt(E2(z))
    # r_s = int cs/H dz ; with substitution u = ln(1+z), dz = e^u du
    val = np.trapz(cs / H * np.exp(lz), lz)
    return val * calib


# CAMB calibration of the approximate sound-horizon pipeline. The simple
# integral + Hu&Sugiyama z* + EH98 z_drag are biased at the 2-3% level
# relative to the Boltzmann values the distance priors and BAO r_d are
# defined against. Calibrate both endpoints ONCE at the Planck 2018
# TT,TE,EE+lowE base-LCDM best fit (omega_b = 0.02236, omega_m = 0.1432,
# h = 0.6727; CAMB: r_* = 144.39 Mpc, r_d = 147.05 Mpc) and apply the two
# constants multiplicatively. The residual parameter-dependence of the
# ratio is < 0.2% over the fitted range; all models share it coherently.
_FID = dict(om=0.1432 / 0.6727 ** 2, h=0.6727, ob=0.02236)


def _calibrate():
    p = dict(_FID)
    ol = 1.0 - p["om"] - OMEGA_R / p["h"] ** 2
    E2 = lambda z: (p["om"] * (1 + z) ** 3
                    + (OMEGA_R / p["h"] ** 2) * (1 + z) ** 4 + ol)
    wm = p["om"] * p["h"] ** 2
    cs = 144.39 / sound_horizon(E2, p["h"], p["ob"], z_star(p["ob"], wm))
    cd = 147.05 / sound_horizon(E2, p["h"], p["ob"], z_drag(p["ob"], wm))
    return cs, cd


CALIB_STAR, CALIB_DRAG = None, None  # set in main() after defs are loaded


def comoving_DM(E2, h, z_grid):
    """Comoving distance (flat) to each z in ascending z_grid, Mpc."""
    z = np.concatenate([[0.0], z_grid])
    zz = np.linspace(0, z[-1], 30000)
    integ = cumulative_trapezoid(1.0 / np.sqrt(E2(zz)), zz, initial=0.0)
    DM = C_KMS / (100.0 * h) * np.interp(z_grid, zz, integ)
    return DM


# --------------------------------------------------------------- chi^2 parts

class Likelihood:
    def __init__(self, use_sn=True):
        self.use_sn = use_sn
        if use_sn:
            self.z_sn, self.zhel_sn, self.mu_sn, self.icov_sn = load_sn()

    def chi2_bao(self, E2, h, ob, om):
        zd = z_drag(ob, om * h * h)
        rd = sound_horizon(E2, h, ob, zd, CALIB_DRAG)
        chi2 = 0.0
        # D_V point
        for z, val, sig in BAO_DV:
            DM = comoving_DM(E2, h, np.array([z]))[0]
            DH = C_KMS / (100.0 * h * np.sqrt(E2(z)))
            DV = (z * DM * DM * DH) ** (1.0 / 3.0)
            chi2 += ((DV / rd - val) / sig) ** 2
        # anisotropic pairs
        zs = np.array([r[0] for r in BAO_MH])
        DMs = comoving_DM(E2, h, zs)
        for (z, vM, sM, vH, sH, r), DM in zip(BAO_MH, DMs):
            DH = C_KMS / (100.0 * h * np.sqrt(E2(z)))
            d = np.array([DM / rd - vM, DH / rd - vH])
            cov = np.array([[sM * sM, r * sM * sH],
                            [r * sM * sH, sH * sH]])
            chi2 += d @ np.linalg.solve(cov, d)
        return chi2

    def chi2_cmb(self, E2, h, ob, om):
        zs = z_star(ob, om * h * h)
        rs = sound_horizon(E2, h, ob, zs, CALIB_STAR)
        DMstar = comoving_DM(E2, h, np.array([zs]))[0]
        R = np.sqrt(om) * 100.0 * h * DMstar / C_KMS
        lA = np.pi * DMstar / rs
        d = np.array([R, lA, ob]) - CMB_MEAN
        return d @ CMB_ICOV @ d

    def chi2_sn(self, E2, h):
        # mu_model with M (and hence H0) marginalised analytically
        zmax = self.z_sn.max()
        zg = np.linspace(0, zmax * 1.001, 30000)
        integ = cumulative_trapezoid(1.0 / np.sqrt(E2(zg)), zg, initial=0.0)
        DM = C_KMS / (100.0 * h) * np.interp(self.z_sn, zg, integ)
        DL = (1.0 + self.zhel_sn) * DM
        mu = 5.0 * np.log10(DL) + 25.0
        delta = mu - self.mu_sn
        A = delta @ self.icov_sn @ delta
        B = np.sum(self.icov_sn @ delta)
        Cc = np.sum(self.icov_sn)
        return A - B * B / Cc            # constant log-term dropped

    def total(self, model, p, parts=False):
        E2 = make_E2(model, p)
        if E2 is None or not np.isfinite(E2(0.0)) or E2(0.0) <= 0:
            return 1e10
        # early-physics check: coupling must be off before recombination
        if model in ("subst", "compB"):
            gamma = p["gamma"]
            orad = OMEGA_R / p["h"] ** 2
            C0 = p["om"] / (1.0 - orad)
            x0 = x0_substituted(gamma, C0) if model == "subst" else None
            if model == "compB":
                try:
                    x0 = x0_completionB(gamma, p["omega"], C0)
                except ValueError:
                    return 1e10
            Cst = C_of_x(x0 * 1090.0 ** 3, gamma)
            if Cst < 0.99:               # coupling still active at z*
                return 1e10              # compressed CMB prior invalid there
        try:
            cb = self.chi2_bao(E2, p["h"], p["ob"], p["om"])
            cc = self.chi2_cmb(E2, p["h"], p["ob"], p["om"])
            cs = self.chi2_sn(E2, p["h"]) if self.use_sn else 0.0
        except (ValueError, FloatingPointError):
            return 1e10
        if parts:
            return cb, cc, cs
        return cb + cc + cs


# ------------------------------------------------------------------ fitting

def fit(lik, model, extra_names, x0, bounds, fixed=None):
    """Minimise over (om, h, ob) + extras with Nelder-Mead multi-start.
    `fixed` holds parameters excluded from the simplex (profiling)."""
    base_names = ["om", "h", "ob"]
    names = base_names + extra_names

    def cost(v):
        p = dict(zip(names, v))
        if fixed:
            p.update(fixed)
        if not (0.05 < p["om"] < 0.95 and 0.4 < p["h"] < 1.0
                and 0.015 < p["ob"] < 0.030):
            return 1e10
        for (lo, hi), val in zip(bounds, v[3:]):
            if not (lo <= val <= hi):
                return 1e10
        if model == "compB" and cost.omega is not None:
            p["omega"] = cost.omega
        return lik.total(model, p)
    cost.omega = None

    def run(start, omega=None):
        cost.omega = omega
        best = None
        for s in start:
            r = minimize(cost, s, method="Nelder-Mead",
                         options=dict(xatol=1e-6, fatol=1e-4, maxiter=6000,
                                      maxfev=9000))
            if best is None or r.fun < best.fun:
                best = r
        return best
    return cost, run


def report(tag, lik, model, v, extra_names, omega=None):
    names = ["om", "h", "ob"] + extra_names
    p = dict(zip(names, v))
    if omega is not None:
        p["omega"] = omega
    cb, cc, cs = lik.total(model, p, parts=True)
    tot = cb + cc + cs
    extras = " ".join(f"{k}={p[k]:.4f}" for k in extra_names)
    if omega is not None:
        extras += f" omega={omega}"
    print(f"  {tag:34s} chi2 = {tot:9.3f}  (BAO {cb:7.3f} | CMB {cc:6.3f} |"
          f" SN {cs:8.3f})  Om={p['om']:.4f} h={p['h']:.4f} "
          f"ob={p['ob']:.5f} {extras}")
    return tot, p


# ------------------------------------------------------- CPL projection tool

def cpl_projection(model, p, zmax=3.0):
    """Where the CPL projection of this model's E(z) lands -- the quantity
    the quadrant rhetoric was based on."""
    from scipy.optimize import least_squares
    E2 = make_E2(model, p)
    om, h = p["om"], p["h"]
    orad = OMEGA_R / h ** 2
    z = np.linspace(0.02, zmax, 400)
    target = np.sqrt(E2(z))

    def resid(q):
        w0, wa = q
        a = 1.0 / (1 + z)
        ol = 1.0 - om - orad
        de = ol * (1 + z) ** (3 * (1 + w0 + wa)) * np.exp(-3 * wa * (1 - a))
        E2c = om * (1 + z) ** 3 + orad * (1 + z) ** 4 + de
        return np.sqrt(E2c) / target - 1.0
    r = least_squares(resid, [-1.0, 0.0])
    rms = np.sqrt(np.mean(r.fun ** 2)) * 100
    return r.x[0], r.x[1], rms


# ==================================================================== main

def main():
    global CALIB_STAR, CALIB_DRAG
    np.seterr(all="ignore")
    CALIB_STAR, CALIB_DRAG = _calibrate()
    print(f"CAMB calibration constants: r_* x{CALIB_STAR:.5f}, "
          f"r_d x{CALIB_DRAG:.5f}")
    print("=" * 79)
    print("DIRECT FIT: gamma family vs LCDM vs w0waCDM on DESI DR2 BAO")
    print("+ Planck-2018 distance priors + DES-Dovekie SNe")
    print("=" * 79)

    lik = Likelihood(use_sn=True)
    print(f"  SN loaded: {len(lik.z_sn)} (Dovekie), z in "
          f"[{lik.z_sn.min():.4f}, {lik.z_sn.max():.4f}]\n")

    results = {}

    # ---- LCDM
    cost, run = fit(lik, "lcdm", [], None, [])
    best = run([[0.31, 0.68, 0.0224]])
    results["lcdm"] = report("LCDM", lik, "lcdm", best.x, [])

    # ---- w0waCDM
    cost, run = fit(lik, "cpl", ["w0", "wa"], None,
                    [(-3.0, 1.0), (-6.0, 3.0)])
    best = run([[0.31, 0.68, 0.0224, -1.0, 0.0],
                [0.32, 0.67, 0.0224, -0.75, -0.9],
                [0.33, 0.67, 0.0224, -0.6, -1.5]])
    results["cpl"] = report("w0waCDM", lik, "cpl", best.x, ["w0", "wa"])

    # ---- substituted family (nests LCDM at gamma = 1/2)
    cost, run = fit(lik, "subst", ["gamma"], None, [(0.05, 20.0)])
    best = run([[0.31, 0.68, 0.0224, 0.5],
                [0.31, 0.68, 0.0224, 0.3],
                [0.31, 0.68, 0.0224, 1.0],
                [0.31, 0.68, 0.0224, 3.0]])
    results["subst"] = report("substituted family", lik, "subst",
                              best.x, ["gamma"])

    # gamma profile for the substituted family (is gamma=1/2 the optimum?)
    # gamma held OUT of the simplex (proper profiling), om/h/ob refit.
    print("\n  gamma profile, substituted family (om,h,ob refit per point):")
    prof = {}
    gmin = results["subst"][1]["gamma"]
    for g in [0.30, 0.40, 0.45, 0.47, 0.48, 0.489, 0.50, 0.51, 0.52,
              0.54, 0.60, 0.80, 1.00, 2.00]:
        cost_g, run_g = fit(lik, "subst", [], None, [], fixed={"gamma": g})
        b = run_g([[0.31, 0.68, 0.0224], [0.305, 0.683, 0.0225]])
        prof[g] = b.fun
        print(f"    gamma = {g:5.3f}:  chi2 = {b.fun:9.3f}   "
              f"(Delta vs LCDM {b.fun - results['lcdm'][0]:+8.3f})")
    # 1-sigma width: Delta chi2 = 1 around the free-fit minimum
    import bisect
    gs = sorted(prof)
    c_min = results["subst"][0]
    lo = [g for g in gs if g < gmin and prof[g] > c_min + 1.0]
    hi = [g for g in gs if g > gmin and prof[g] > c_min + 1.0]
    if lo and hi:
        gl, gh = lo[-1], hi[0]
        # linear interp in chi2 across the bracketing intervals
        def cross(g1, g2):
            c1, c2 = prof[g1], prof[g2]
            return g1 + (c_min + 1.0 - c1) * (g2 - g1) / (c2 - c1)
        gl2 = [g for g in gs if g > gl and g <= gmin]
        gh2 = [g for g in gs if g < gh and g >= gmin]
        try:
            glo = cross(gl, gl2[0]) if gl2 else gl
            ghi = cross(gh, gh2[-1]) if gh2 else gh
            print(f"    -> gamma = {gmin:.4f}  (-{gmin-glo:.4f}/+{ghi-gmin:.4f})"
                  f"  at Delta chi2 = 1   [galaxy-sector SPARC best fit:"
                  f" gamma = 0.489]")
        except Exception:
            pass

    # ---- completion B, omega grid
    print()
    for omega in [0.0, 1.0, 5.0, 50.0]:
        cost_b, run_b = fit(lik, "compB", ["gamma"], None, [(0.05, 20.0)])
        best = run_b([[0.31, 0.68, 0.0224, 0.5],
                      [0.31, 0.68, 0.0224, 0.3],
                      [0.31, 0.68, 0.0224, 1.0],
                      [0.31, 0.68, 0.0224, 5.0]], omega=omega)
        results[f"compB_w{omega:g}"] = report(
            f"completion B (omega={omega:g})", lik, "compB", best.x,
            ["gamma"], omega=omega)

    # ---- summary
    print("\n" + "=" * 79)
    print("VERDICT TABLE (Delta chi^2 vs LCDM; negative = better than LCDM)")
    print("=" * 79)
    c0 = results["lcdm"][0]
    for k, (tot, p) in results.items():
        npar = dict(lcdm=3, cpl=5, subst=4).get(k, 4)
        print(f"  {k:16s} chi2 = {tot:9.3f}   Delta = {tot - c0:+8.3f}   "
              f"params = {npar}")

    # ---- CPL projections of best-fit family members vs their direct fits
    print("\nCPL PROJECTION vs DIRECT FIT (the projection-bias measurement):")
    for k in ["subst", "compB_w0", "compB_w1"]:
        if k not in results:
            continue
        tot, p = results[k]
        model = "subst" if k == "subst" else "compB"
        w0, wa, rms = cpl_projection(model, p)
        quad = "IN DESI quadrant" if (w0 > -1 and wa < 0) else "outside"
        print(f"  {k:16s} best-fit member projects to CPL (w0={w0:+.3f}, "
              f"wa={wa:+.3f}, rms {rms:.2f}%)  [{quad}]")
    print(f"  DESI DR2 published centrals for context: "
          f"{DESI_DR2_CPL}")

    # ---- diagnostics: r_d, per-point BAO pulls at the LCDM best fit
    print("\nDIAGNOSTICS (LCDM best fit):")
    p = results["lcdm"][1]
    E2 = make_E2("lcdm", p)
    wm = p["om"] * p["h"] ** 2
    zd = z_drag(p["ob"], wm)
    zs = z_star(p["ob"], wm)
    rd = sound_horizon(E2, p["h"], p["ob"], zd, CALIB_DRAG)
    rs = sound_horizon(E2, p["h"], p["ob"], zs, CALIB_STAR)
    print(f"  z_drag = {zd:.2f}  r_d = {rd:.3f} Mpc  r_d*h = {rd*p['h']:.3f}"
          f"  |  z* = {zs:.2f}  r_s(z*) = {rs:.3f} Mpc")
    for z, val, sig in BAO_DV:
        DM = comoving_DM(E2, p["h"], np.array([z]))[0]
        DH = C_KMS / (100.0 * p["h"] * np.sqrt(E2(z)))
        DV = (z * DM * DM * DH) ** (1.0 / 3.0)
        print(f"  z={z:5.3f}  DV/rd model {DV/rd:7.3f} vs {val:7.3f} "
              f"pull {(DV/rd-val)/sig:+.2f}")
    zsarr = np.array([r[0] for r in BAO_MH])
    DMs = comoving_DM(E2, p["h"], zsarr)
    for (z, vM, sM, vH, sH, r), DM in zip(BAO_MH, DMs):
        DH = C_KMS / (100.0 * p["h"] * np.sqrt(E2(z)))
        print(f"  z={z:5.3f}  DM/rd {DM/rd:7.3f} vs {vM:7.3f} pull "
              f"{(DM/rd-vM)/sM:+.2f}   DH/rd {DH/rd:7.3f} vs {vH:7.3f} "
              f"pull {(DH/rd-vH)/sH:+.2f}")

    # ---- validation arm: BAO+CMB only (DESI DR2 quotes 3.1 sigma there)
    print("\nVALIDATION ARM: BAO + CMB only (no SN)")
    lik2 = Likelihood(use_sn=False)
    res2 = {}
    cost, run = fit(lik2, "lcdm", [], None, [])
    best = run([[0.31, 0.68, 0.0224]])
    res2["lcdm"] = report("LCDM", lik2, "lcdm", best.x, [])
    cost, run = fit(lik2, "cpl", ["w0", "wa"], None,
                    [(-3.0, 1.0), (-6.0, 3.0)])
    best = run([[0.31, 0.68, 0.0224, -1.0, 0.0],
                [0.35, 0.66, 0.0224, -0.45, -1.7],
                [0.33, 0.67, 0.0224, -0.7, -1.0]])
    res2["cpl"] = report("w0waCDM", lik2, "cpl", best.x, ["w0", "wa"])
    cost, run = fit(lik2, "subst", ["gamma"], None, [(0.05, 20.0)])
    best = run([[0.31, 0.68, 0.0224, 0.5],
                [0.31, 0.68, 0.0224, 0.55],
                [0.31, 0.68, 0.0224, 0.3]])
    res2["subst"] = report("substituted family", lik2, "subst", best.x,
                           ["gamma"])
    cost, run = fit(lik2, "compB", ["gamma"], None, [(0.05, 20.0)])
    best = run([[0.31, 0.68, 0.0224, 0.5],
                [0.31, 0.68, 0.0224, 0.32]], omega=0.0)
    res2["compB_w0"] = report("completion B (omega=0)", lik2, "compB",
                              best.x, ["gamma"], omega=0.0)
    c0 = res2["lcdm"][0]
    print("  BAO+CMB Delta chi2 vs LCDM:  " + "  ".join(
        f"{k} {v[0]-c0:+.3f}" for k, v in res2.items() if k != "lcdm"))
    print("  (DESI DR2 full-likelihood BAO+CMB: w0waCDM preferred at 3.1 "
          "sigma, i.e. Delta chi2 ~ -12.5 for 2 params -- arXiv:2503.14738)")

    # ---- completion A for completeness: exact EdS, no free late-time params
    print("\nCOMPLETION A (exact EdS background):")
    pA = dict(om=0.9999, h=0.45, ob=0.0224)
    for h in [0.4, 0.45, 0.5, 0.55, 0.6, 0.68]:
        for ob in [0.020, 0.0224]:
            pA = dict(om=1.0 - OMEGA_R / h ** 2 - 1e-9, h=h, ob=ob)
            E2A = make_E2("lcdm", pA)   # om + orad = 1 => EdS + radiation
            try:
                cb = lik2.chi2_bao(E2A, h, ob, pA["om"])
                cc = lik2.chi2_cmb(E2A, h, ob, pA["om"])
            except Exception:
                continue
            if h == 0.4 and ob == 0.020:
                bestA = (cb + cc, h, ob, cb, cc)
            elif cb + cc < bestA[0]:
                bestA = (cb + cc, h, ob, cb, cc)
    print(f"  best over coarse (h, ob) grid: chi2_BAO+CMB = {bestA[0]:.0f}"
          f"  (BAO {bestA[3]:.0f} | CMB {bestA[4]:.0f}) at h={bestA[1]}, "
          f"ob={bestA[2]}  -- excluded by ~sqrt({bestA[0]:.0f}) sigma-scale")

    # ---- context: DESI's own quoted preferences
    print("""
CONTEXT. DESI DR2 (arXiv:2503.14738) quotes LCDM disfavoured vs w0waCDM at
2.8-4.2 sigma depending on SN sample (3.1 sigma BAO+CMB). The numbers above
recompute that comparison with compressed likelihoods and the Dovekie SN
recalibration, then place the gamma family on the SAME axis -- the number
the CPL quadrant statements could not produce.""")


if __name__ == "__main__":
    main()
