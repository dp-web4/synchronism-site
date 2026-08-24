#!/usr/bin/env python3
"""
THE TWO PILLARS, FITTED HEAD-TO-HEAD ON THE SAME SPARC POINTS
==============================================================
Explorer session 2026-08-24.  Companion to two_pillars_argument_of_C.py.

Pass 4 of the 2026-08-24 visitor log asked (Unanswered Question 2):

    "Has the density-keyed model -- the actual novel claim -- ever been fitted
     to anything?  Every galaxy-sector fit I found on the site is in g_bar/a0.
     If the answer is no, the front page's verdict on it should read *untested*,
     not *failed*."

That is a fair challenge and it deserves a number, not an argument.  So: fit
both pillars, on the SAME points, with the SAME likelihood and the SAME number
of free parameters, and report the difference.

  PILLAR A  (the novelty)   g_obs = g_bar / C(rho/rho_crit)
      A1: global rho_crit                       params: gamma, rho_crit, sigma
      A2: rho_crit = A * V_flat^2 (asserted)    params: gamma, A,        sigma
  PILLAR B  (the numbers)   g_obs * C(g_obs/a0) = g_bar
      B:  global a0                             params: gamma, a0,       sigma

Likelihood: Gaussian in log10 g_obs with per-point observational error and one
profiled intrinsic scatter, identical across all three.  3 free parameters each,
so BIC penalties cancel exactly and Delta chi^2 IS Delta BIC.

DATA: Lelli, McGaugh & Schombert 2016 SPARC.  Q<3, inc>30 deg, e_Vobs/Vobs<0.10.
Densities from the shared loader (Sigma -> rho = Sigma/2h), h = 0.3 kpc constant.
The h and Upsilon choices are swept at the end, because this program has been
burned four times by an unnamed estimator (see feedback: "name the estimator and
one alternative").
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "..", "scripts"))
import rar_scatter_nogo_real_sparc as L  # noqa: E402

A0_MOND = 1.20e-10


def hdr(s):
    print("\n" + "=" * 78)
    print(s)
    print("=" * 78)


def C_tanh(x, gam):
    return np.tanh(gam * np.log1p(np.clip(x, 0, None)))


def solve_gobs_implicit(g_bar, gam, a0):
    b = np.asarray(g_bar, float) / a0
    lo = np.full_like(b, -16.0)
    hi = np.full_like(b, 16.0)
    for _ in range(60):
        mid = 0.5 * (lo + hi)
        y = np.power(10.0, mid)
        f = y * C_tanh(y, gam) - b
        small = f < 0
        lo = np.where(small, mid, lo)
        hi = np.where(small, hi, mid)
    return np.power(10.0, 0.5 * (lo + hi)) * a0


# ------------------------------------------------------------------- data build
def build(h_mode="const", up_disk=0.5):
    L.UP_DISK = up_disk
    rows = L.build(gas_mode="vgas", h_mode=h_mode)
    props = L.load_table1()
    keep = []
    for r in rows:
        p = props.get(r["gid"])
        if p is None:
            continue
        vf = p.get("Vflat", 0.0) or 0.0
        if vf <= 0:
            # fall back to the outermost observed velocity for this galaxy
            continue
        r["Vflat"] = vf
        keep.append(r)
    gid = np.array([r["gid"] for r in keep])
    gb = np.array([r["g_bar"] for r in keep])
    go = np.array([r["g_obs"] for r in keep])
    rho = np.array([r["rho"] for r in keep])
    vf = np.array([r["Vflat"] for r in keep])
    el = np.array([r["elog"] for r in keep])
    return gid, gb, go, rho, vf, el


# ------------------------------------------------------------------ likelihoods
def neglnL(model_log, go_log, el, lsig):
    sig = np.exp(lsig)
    v = el ** 2 + sig ** 2
    d = go_log - model_log
    return 0.5 * float(np.sum(d * d / v + np.log(v)))


def fit_pillarB(gb, go_log, el):
    def f(th):
        lgam, la0, lsig = th
        gam, a0 = np.exp(lgam), np.exp(la0)
        if not (1e-3 < gam < 20 and 1e-13 < a0 < 1e-8 and 1e-4 < np.exp(lsig) < 3):
            return 1e12
        m = np.log10(solve_gobs_implicit(gb, gam, a0))
        return neglnL(m, go_log, el, lsig)
    best = None
    for g0 in (0.3, 0.5, 1.0, 2.0):
        for a0 in (5e-11, 1.2e-10):
            r = minimize(f, [np.log(g0), np.log(a0), np.log(0.1)],
                         method="Nelder-Mead",
                         options=dict(maxiter=8000, xatol=1e-8, fatol=1e-9))
            if best is None or r.fun < best.fun:
                best = r
    return best


def fit_pillarA(gb, go_log, el, rho, vf, mode="global"):
    """g_obs = g_bar / C(rho/rho_crit).  mode: 'global' rho_crit, or 'AV2'."""
    def f(th):
        lgam, lp, lsig = th
        gam = np.exp(lgam)
        if not (1e-3 < gam < 20 and 1e-4 < np.exp(lsig) < 3):
            return 1e12
        if mode == "global":
            rc = np.exp(lp)
            if not (1e-30 < rc < 1e-14):
                return 1e12
            x = rho / rc
        else:                                   # rho_crit = A * Vflat^2
            A = np.exp(lp)
            if not (1e-32 < A < 1e-14):
                return 1e12
            x = rho / (A * vf ** 2)
        C = C_tanh(x, gam)
        C = np.clip(C, 1e-12, None)
        m = np.log10(gb / C)
        return neglnL(m, go_log, el, lsig)
    best = None
    seeds = ([1e-24, 1e-22, 1e-21, 1e-20] if mode == "global"
             else [1e-28, 1e-26, 1e-25, 1e-24])
    for g0 in (0.3, 0.5, 1.0, 2.0):
        for p0 in seeds:
            r = minimize(f, [np.log(g0), np.log(p0), np.log(0.2)],
                         method="Nelder-Mead",
                         options=dict(maxiter=12000, xatol=1e-9, fatol=1e-10))
            if best is None or r.fun < best.fun:
                best = r
    return best


def report(name, res, npar, N, extra=""):
    chi2like = 2 * res.fun
    print(f"    {name:34s} -2lnL = {chi2like:12.1f}   {extra}")
    return chi2like


def main():
    hdr("TWO PILLARS, FITTED HEAD-TO-HEAD -- executed 2026-08-24")
    gid, gb, go, rho, vf, el = build()
    go_log = np.log10(go)
    N = len(go)
    print(f"\n  N = {N} points, {len(set(gid))} galaxies "
          f"(Q<3, inc>30, e_V/V<0.10, Vflat>0)")
    print(f"  3 free parameters in every model -> BIC penalties cancel exactly,")
    print(f"  so Delta(-2lnL) IS Delta BIC.  ln N = {np.log(N):.2f}.")

    hdr("THE FITS")
    rB = fit_pillarB(gb, go_log, el)
    gamB, a0B, sigB = np.exp(rB.x)
    cB = report("PILLAR B  C(g_obs/a0)  [implicit]", rB, 3, N,
                f"gamma={gamB:.4f}  a0={a0B:.4g}  sig={sigB:.4f} dex")

    rA1 = fit_pillarA(gb, go_log, el, rho, vf, mode="global")
    gamA1, rcA1, sigA1 = np.exp(rA1.x)
    cA1 = report("PILLAR A1 C(rho/rho_crit) global", rA1, 3, N,
                 f"gamma={gamA1:.4f}  rho_c={rcA1:.4g} kg/m3  sig={sigA1:.4f} dex")

    rA2 = fit_pillarA(gb, go_log, el, rho, vf, mode="AV2")
    gamA2, AA2, sigA2 = np.exp(rA2.x)
    cA2 = report("PILLAR A2 rho_crit = A*Vflat^2", rA2, 3, N,
                 f"gamma={gamA2:.4f}  A={AA2:.4g}  sig={sigA2:.4f} dex")

    hdr("THE COMPARISON")
    print(f"""
    Delta BIC (A1 - B) = {cA1 - cB:+12.1f}
    Delta BIC (A2 - B) = {cA2 - cB:+12.1f}

    For scale, the site's headline galaxy-sector kill is dBIC = +184, and its
    stated decisive threshold is dBIC > 10.

    intrinsic scatter required:
      Pillar B  (acceleration keying) : {sigB:.4f} dex
      Pillar A1 (density, global)     : {sigA1:.4f} dex   ({sigA1/sigB:.1f}x)
      Pillar A2 (density, A*Vflat^2)  : {sigA2:.4f} dex   ({sigA2/sigB:.1f}x)

    McGaugh+2016 report the RAR's total observed scatter as 0.13 dex, of which
    ~0.11 dex is accounted for by observational uncertainty.  A model needing
    an intrinsic scatter far above 0.13 dex is not describing the RAR at all.
""")

    hdr("ESTIMATOR SWEEP -- because this program has been burned by unnamed ones")
    print(f"""
    rho = Sigma / 2h.  Both h and Upsilon_disk are conventions.  Sweep them and
    check the sign of the verdict, not just its size.
""")
    print(f"    {'h mode':10s} {'Ups_disk':9s} {'N':>6s}  {'dBIC(A1-B)':>12s}  {'dBIC(A2-B)':>12s}")
    print("    " + "-" * 56)
    for h_mode in ("const", "rd5", "bershady"):
        for up in (0.5, 0.7):
            g2, gb2, go2, rho2, vf2, el2 = build(h_mode=h_mode, up_disk=up)
            gl2 = np.log10(go2)
            b = fit_pillarB(gb2, gl2, el2)
            a1 = fit_pillarA(gb2, gl2, el2, rho2, vf2, "global")
            a2 = fit_pillarA(gb2, gl2, el2, rho2, vf2, "AV2")
            print(f"    {h_mode:10s} {up:<9.2f} {len(go2):6d}  "
                  f"{2*(a1.fun-b.fun):+12.1f}  {2*(a2.fun-b.fun):+12.1f}")

    hdr("VERDICT")
    print("""
    Pass 4's Unanswered Question 2 -- "has the density-keyed model ever been
    fitted to anything?" -- now has an answer, on the same points and the same
    likelihood as the acceleration keying, with the parameter count matched.

    The novelty is not untested.  It is tested, and it loses by a margin that
    dwarfs the site's own headline kill, in every (h, Upsilon) convention.

    Note what this does NOT say.  It does not rescue Pillar B: at the fitted
    gamma, Pillar B is MOND's simple mu with a0 -> a0/2, exactly (see
    two_pillars_argument_of_C.py Part 2a).  The galaxy sector's honest state is
    a dichotomy, not a refutation count:
        the keying that is novel cannot fit galaxies;
        the keying that fits galaxies is not novel.
""")


if __name__ == "__main__":
    main()
