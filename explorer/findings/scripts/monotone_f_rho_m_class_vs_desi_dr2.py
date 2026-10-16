#!/usr/bin/env python3
"""
Does the dark-energy "sign lock" generalize beyond the framework?
Explorer 2026-10-16, topic `which-negative-results-generalize-beyond-the-framework.md`, candidate 1.
PREREG: explorer/scripts/negative_results_generalize_PREREG.md (commit e8adcd8).

CLASS. rho_DE = f(rho_m), matter separately conserved (rho_m ∝ a^-3), flat, standard radiation.
Continuity gives, exactly,
    1 + w(a) = eps(rho_m) := d ln f / d ln rho_m
    dw/d ln a = -3 d eps / d ln rho_m          (since d ln rho_m / d ln a = -3)
So (i) w = -1 only where f' = 0: monotone f never crosses (general).
   (ii) the local CPL slope w_a = -dw/da|_{a=1} = 3 d eps/d ln rho_m |_0. Its sign is the sign of
        d eps/d ln rho_m, NOT the sign of eps. So sign(w0+1) = sign(wa) needs |eps| to grow with
        density. That is a property of the framework's f, not of the class.

This script
  1. checks (i)-(ii) numerically on four monotone f's (framework tanh-log f as positive control);
  2. fits two generic monotone, non-crossing members to the SAME likelihood the 2026-08-12 gamma-family
     fit used (DESI DR2 BAO + Planck-2018 distance priors + DES-Dovekie SNe), imported unchanged:
       sat   : f = F (1 - exp(-rho_m/rho*))           thawing, w in (-1, 0), LCDM at rho* -> 0
       pow   : f = L + K rho_m^n  (n free, sign of K free; Cardassian-like)
  3. reports Delta chi^2 vs LCDM and vs CPL, and the CPL projection of each best fit.
"""
import importlib.util
import os
import sys

import numpy as np
from scipy.optimize import minimize

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location(
    "gfit", os.path.join(HERE, "fit_gamma_family_to_desi_dr2.py"))
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)

_orig_make_E2 = g.make_E2


def make_E2(model, p):
    om, h = p["om"], p["h"]
    orad = g.OMEGA_R / h ** 2
    ol = 1.0 - om - orad
    if model == "sat":
        x0 = p["x0"]                    # rho_m0 / rho*
        F = ol / (-np.expm1(-x0))

        def E2(z):
            x = x0 * (1 + z) ** 3
            return om * (1 + z) ** 3 + orad * (1 + z) ** 4 + F * (-np.expm1(-x))
        return E2
    if model == "pow":
        n, q = p["n"], p["q"]           # q = K rho_m0^n / ol  (fraction of DE today in the power term)

        def E2(z):
            return (om * (1 + z) ** 3 + orad * (1 + z) ** 4
                    + ol * ((1 - q) + q * (1 + z) ** (3 * n)))
        return E2
    return _orig_make_E2(model, p)


g.make_E2 = make_E2


# ---------------------------------------------------------------- 1. analytic checks
def w_from_f(f, lnrho):
    lnf = np.log(np.abs(f(np.exp(lnrho))))
    eps = np.gradient(lnf, lnrho)
    return -1.0 + eps


def local_w0_wa(f, rho0):
    lnr = np.linspace(np.log(rho0) - 0.3, np.log(rho0) + 0.3, 6001)
    w = w_from_f(f, lnr)
    i = len(lnr) // 2
    # a = (rho/rho0)^(-1/3);  dw/da = dw/dlnrho * dlnrho/da = dw/dlnrho * (-3/a)
    dw_dlnr = np.gradient(w, lnr)[i]
    wa = -(dw_dlnr * -3.0)              # wa = -dw/da at a = 1
    return w[i], wa


def analytic_section():
    print("=" * 79)
    print("1. LOCAL (w0, wa) AND CROSSING FOR MONOTONE f(rho_m); rho_m0 = 0.3, f(rho_m0) = 0.7")
    print("=" * 79)
    om, ol = 0.3, 0.7
    cases = []
    for gam in (0.3, 0.5, 0.8):
        def f(r, gam=gam):
            # framework substituted branch: rho_DE = rho_m (1-C)/C, C = tanh(gam ln(1+x))
            C0 = om / (om + ol)
            x0 = np.expm1(np.arctanh(C0) / gam)
            x = x0 * r / om
            C = np.tanh(gam * np.log1p(x))
            return r * (1 - C) / C
        cases.append((f"framework tanh-log gamma={gam}", f))
    for x0 in (0.5, 2.0, 2.9):
        def f(r, x0=x0):
            F = ol / (-np.expm1(-x0))
            return F * (-np.expm1(-x0 * r / om))
        cases.append((f"sat x0={x0}", f))
    for n, q in ((0.5, 0.2), (-0.5, 0.2), (0.5, -0.2)):
        def f(r, n=n, q=q):
            return ol * ((1 - q) + q * (r / om) ** n)
        cases.append((f"pow n={n} q={q}", f))

    def finv(r):
        return ol + 0.1 - 0.1 * om / r   # f = L - b/rho_m, monotone increasing
    cases.append(("inverse L - b/rho", finv))

    print(f"  {'model':34s} {'w0':>8s} {'wa':>8s} {'sign lock?':>11s} {"f' sign change (crossing)?":>28s}")
    for name, f in cases:
        w0, wa = local_w0_wa(f, om)
        lnr = np.linspace(np.log(om) - 3 * np.log(10.0), np.log(om) + 3 * np.log(20.0), 20001)
        fr = f(np.exp(lnr))
        dfr = np.gradient(fr, lnr)
        big = np.abs(dfr) > 1e-9 * np.abs(fr).max()   # ignore round-off where f has saturated
        sg = np.sign(dfr[big])
        cross = bool(np.any(sg[1:] != sg[:-1]))       # w = -1 exactly where f' = 0
        pole = bool(np.any(np.diff(np.sign(fr)) != 0))  # f -> 0: w -> ±inf (a pole, not a crossing)
        cross = f"{cross}" + (" (f=0 pole)" if pole else "")
        lock = "yes" if np.sign(w0 + 1) == np.sign(wa) else "NO"
        print(f"  {name:34s} {w0:+8.3f} {wa:+8.3f} {lock:>11s} {str(cross):>28s}")
    print("  Expectation: framework rows obey the lock (control); 'sat' and 'inverse' rows break it")
    print("  with w0 > -1, wa < 0 and no crossing.\n")


# ---------------------------------------------------------------- 2. direct fit
def main():
    np.seterr(all="ignore")
    analytic_section()
    g.CALIB_STAR, g.CALIB_DRAG = g._calibrate()
    lik = g.Likelihood(use_sn=True)
    print("=" * 79)
    print("2. DIRECT FIT: DESI DR2 BAO + Planck18 distance priors + DES-Dovekie (same likelihood as 08-12)")
    print("=" * 79)
    res = {}

    _, run = g.fit(lik, "lcdm", [], None, [])
    r = run([[0.31, 0.68, 0.0224], [0.30, 0.69, 0.0225]])
    res["lcdm"] = g.report("LCDM", lik, "lcdm", r.x, [])

    _, run = g.fit(lik, "cpl", ["w0", "wa"], None, [(-3, 1), (-5, 3)])
    r = run([[0.31, 0.67, 0.0224, -0.75, -0.8], [0.32, 0.66, 0.0224, -0.6, -1.3]])
    res["cpl"] = g.report("w0waCDM", lik, "cpl", r.x, ["w0", "wa"])

    _, run = g.fit(lik, "sat", ["x0"], None, [(0.01, 50.0)])
    starts = [[0.31, 0.67, 0.0224, s] for s in (0.5, 1.5, 3.0, 6.0, 15.0)]
    r = run(starts)
    res["sat"] = g.report("sat (monotone, thawing, no cross)", lik, "sat", r.x, ["x0"])

    _, run = g.fit(lik, "pow", ["n", "q"], None, [(-8, 3), (-5, 5)])
    starts = [[0.31, 0.67, 0.0224, n, q] for n in (-1.0, -0.3, 0.3, 1.0) for q in (-0.5, 0.3)]
    r = run(starts)
    res["pow"] = g.report("pow L + K rho^n (monotone)", lik, "pow", r.x, ["n", "q"])

    # profile sat on a grid of x0 to show how close to LCDM the class can go
    print("\n  sat profile over x0 (w0_local = -1 + x0/(e^x0 - 1)):")
    for x0 in (0.3, 1.0, 2.0, 3.0, 5.0, 10.0):
        _, run = g.fit(lik, "sat", [], None, [], fixed={"x0": x0})
        rr = run([[0.31, 0.67, 0.0224], [0.33, 0.66, 0.0224]])
        w0l = -1 + x0 / np.expm1(x0)
        print(f"    x0={x0:5.1f}  w0_local={w0l:+.3f}  chi2={rr.fun:9.3f}  "
              f"Δ vs LCDM={rr.fun - res['lcdm'][0]:+7.3f}")

    print("\n  Delta chi2 vs LCDM / vs CPL, and CPL projection of each best fit:")
    for k in ("cpl", "sat", "pow"):
        tot, p = res[k]
        line = (f"    {k:5s} Δχ²(LCDM) = {tot - res['lcdm'][0]:+8.3f}   "
                f"Δχ²(CPL) = {tot - res['cpl'][0]:+8.3f}")
        if k != "cpl":
            w0, wa, rms = g.cpl_projection(k, p)
            line += f"   CPL projection w0={w0:+.3f} wa={wa:+.3f} (rms {rms:.2f}%)"
        print(line)
    tot, p = res["pow"]
    n, q = p["n"], p["q"]
    lnr = np.linspace(-6, 10, 4001)
    eps = q * n * np.exp(n * lnr) / ((1 - q) + q * np.exp(n * lnr))
    fp = q * n * np.exp(n * lnr)
    print(f"    pow best fit: f' sign changes over e^-6..e^10 x rho_m0? {np.any(np.diff(np.sign(fp)) != 0)}"
          f" (sign changes of 1+w there come only from f=0 poles: {np.any(np.diff(np.sign((1-q)+q*np.exp(n*lnr))) != 0)})")
    N = len(lik.z_sn) + 13 + 3
    for k, kpar in (("lcdm", 3), ("cpl", 5), ("sat", 4), ("pow", 5)):
        tot = res[k][0]
        print(f"    {k:5s} k={kpar}  AIC-AIC_LCDM = {tot + 2*kpar - res['lcdm'][0] - 6:+7.2f}   "
              f"BIC-BIC_LCDM = {tot + kpar*np.log(N) - res['lcdm'][0] - 3*np.log(N):+7.2f}  (N={N}, SN-dominated)")
    x0 = res["sat"][1]["x0"]
    print(f"    sat best fit x0={x0:.3f}: local w0={-1 + x0/np.expm1(x0):+.3f}, "
          f"local wa={3*x0*(1/np.expm1(x0) - x0*np.exp(x0)/np.expm1(x0)**2):+.3f}")


if __name__ == "__main__":
    main()
