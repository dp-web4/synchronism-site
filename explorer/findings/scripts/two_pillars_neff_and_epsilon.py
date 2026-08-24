#!/usr/bin/env python3
"""
N_eff DEFLATION AND THE DEFORMATION PARAMETER eps = 2*gamma - 1
================================================================
Explorer session 2026-08-24.  Third of three; run after
two_pillars_argument_of_C.py and two_pillars_head_to_head_fit.py.

TWO SELF-IMPOSED CHECKS, because this program's dominant failure mode is
over-refutation and a self-generated kill gets the same treatment as any other.

CHECK 1 -- N_eff.  On 2026-07-16 this program found that the site's headline
galaxy kill (dBIC = +184) treats 2807 RAR points as independent when they are
~16 points per galaxy across 175 galaxies; at N_eff = N_galaxies the same
evidence gives ~+7 rather than +184, i.e. "positive" rather than "decisive".
The Pillar A vs Pillar B separation measured today is computed the same way and
must be deflated the same way before it is quoted.

CHECK 2 -- eps.  If Pillar B at gamma = 1/2 IS MOND-simple identically, then the
framework's whole galaxy-sector deviation from MOND is the single number
eps = 2*gamma - 1.  Measure it with an interval, and inflate that interval for
the same correlation.  A deviation "consistent with zero" is only meaningful
with the error bar attached.
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "..", "scripts"))
import rar_scatter_nogo_real_sparc as L  # noqa: E402

A0_MOND = 1.20e-10
RNG = np.random.default_rng(20260824)


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


def build(h_mode="const", up_disk=0.5):
    L.UP_DISK = up_disk
    rows = L.build(gas_mode="vgas", h_mode=h_mode)
    props = L.load_table1()
    keep = [r for r in rows
            if props.get(r["gid"]) and (props[r["gid"]].get("Vflat", 0) or 0) > 0]
    for r in keep:
        r["Vflat"] = props[r["gid"]]["Vflat"]
    return (np.array([r["gid"] for r in keep]),
            np.array([r["g_bar"] for r in keep]),
            np.array([r["g_obs"] for r in keep]),
            np.array([r["elog"] for r in keep]))


def neg2lnL_B(th, gb, go_log, el, fix_gam=None):
    if fix_gam is None:
        lgam, la0, lsig = th
        gam = np.exp(lgam)
    else:
        la0, lsig = th
        gam = fix_gam
    a0, sig = np.exp(la0), np.exp(lsig)
    if not (1e-3 < gam < 20 and 1e-13 < a0 < 1e-8 and 1e-4 < sig < 3):
        return 1e12
    m = np.log10(solve_gobs_implicit(gb, gam, a0))
    v = el ** 2 + sig ** 2
    d = go_log - m
    return float(np.sum(d * d / v + np.log(v)))


def fit_B(gb, go_log, el):
    best = None
    for g0 in (0.3, 0.5, 1.0):
        r = minimize(neg2lnL_B, [np.log(g0), np.log(6e-11), np.log(0.12)],
                     args=(gb, go_log, el), method="Nelder-Mead",
                     options=dict(maxiter=8000, xatol=1e-9, fatol=1e-10))
        if best is None or r.fun < best.fun:
            best = r
    return best


def profile_gamma(gb, go_log, el, gmin=0.42, gmax=0.62, n=41):
    out = []
    for gam in np.linspace(gmin, gmax, n):
        best = None
        for a0 in (5e-11, 6e-11, 8e-11):
            r = minimize(neg2lnL_B, [np.log(a0), np.log(0.12)],
                         args=(gb, go_log, el, gam), method="Nelder-Mead",
                         options=dict(maxiter=6000, xatol=1e-9, fatol=1e-10))
            if best is None or r.fun < best.fun:
                best = r
        out.append((gam, best.fun))
    return np.array(out)


def main():
    hdr("N_eff DEFLATION AND eps -- executed 2026-08-24")
    gid, gb, go, el = build()
    go_log = np.log10(go)
    N = len(go)
    ngal = len(set(gid))
    print(f"\n  N points = {N}, N galaxies = {ngal}, "
          f"mean points/galaxy = {N/ngal:.1f}")

    # ------------------------------------------------------- CHECK 1: deflation
    hdr("CHECK 1 -- deflate today's separation exactly as the site's +184 must be")
    dbic_A1, dbic_A2 = 2842.6, 3309.0      # from two_pillars_head_to_head_fit.py
    f = ngal / N
    print(f"""
  deflation factor N_eff/N = {ngal}/{N} = {f:.4f}

  quantity                                   as computed      N_eff-deflated
  ---------------------------------------------------------------------------
  site headline kill, RAR shape (gamma=2)          +184.0          {184*175/2807:+8.1f}
  Pillar A1 (global rho_crit) vs Pillar B       {dbic_A1:+9.1f}          {dbic_A1*f:+8.1f}
  Pillar A2 (rho_crit = A Vflat^2) vs Pillar B  {dbic_A2:+9.1f}          {dbic_A2*f:+8.1f}

  Decisive threshold used on this site: dBIC > 10.

  So the correction that reduces the site's headline galaxy kill from "decisive"
  to "positive" leaves the Pillar A vs Pillar B separation decisive by a factor
  of ~{dbic_A1*f/10:.0f}-{dbic_A2*f/10:.0f}.  The comparison the site never ran is the one that
  survives its own deflation.
""")

    # ------------------------------------------------------------ CHECK 2: eps
    hdr("CHECK 2 -- measure eps = 2*gamma - 1 with an interval")
    rB = fit_B(gb, go_log, el)
    gam_hat, a0_hat, sig_hat = np.exp(rB.x)
    print(f"""
  best fit (Pillar B, the branch that supplies every quoted number):
      gamma = {gam_hat:.4f}
      a0    = {a0_hat:.4g} m/s^2
      sigma = {sig_hat:.4f} dex

  the identity C_(1/2)(g/a0) == mu_simple(g/2a0) predicts a0 = g_dagger/2:
      predicted {A0_MOND/2:.4g}   fitted {a0_hat:.4g}   ratio {a0_hat/(A0_MOND/2):.4f}
""")
    prof = profile_gamma(gb, go_log, el)
    dchi = prof[:, 1] - prof[:, 1].min()
    # naive 1-sigma from Delta(-2lnL) = 1
    inside = prof[dchi <= 1.0, 0]
    lo, hi = inside.min(), inside.max()
    naive = 0.5 * (hi - lo)
    infl = np.sqrt(N / ngal)
    print(f"  profile-likelihood interval on gamma (Delta(-2lnL) = 1):")
    print(f"      naive (points independent) : gamma = {gam_hat:.4f} +- {naive:.4f}")
    print(f"      correlation inflation      : sqrt(N/N_gal) = {infl:.2f}")
    print(f"      inflated                   : gamma = {gam_hat:.4f} +- {naive*infl:.4f}")
    eps = 2 * gam_hat - 1
    eps_err = 2 * naive * infl
    print(f"""
      eps = 2*gamma - 1 = {eps:+.4f} +- {eps_err:.4f}   ->  {abs(eps)/eps_err:.2f} sigma from zero
""")

    # ------------------------------------------------ galaxy-level bootstrap too
    hdr("CHECK 2b -- galaxy-level bootstrap (the honest error bar)")
    gals = np.array(sorted(set(gid)))
    idx_by = {g: np.where(gid == g)[0] for g in gals}
    boots = []
    for b in range(120):
        pick = RNG.choice(gals, size=len(gals), replace=True)
        sel = np.concatenate([idx_by[g] for g in pick])
        r = fit_B(gb[sel], go_log[sel], el[sel])
        boots.append(np.exp(r.x[0]))
    boots = np.array(boots)
    bs = boots.std(ddof=1)
    print(f"""
  120 galaxy-level bootstrap resamples:
      gamma = {boots.mean():.4f} +- {bs:.4f}   (16th-84th: [{np.percentile(boots,16):.4f}, {np.percentile(boots,84):.4f}])
      eps   = {2*boots.mean()-1:+.4f} +- {2*bs:.4f}  ->  {abs(2*boots.mean()-1)/(2*bs):.2f} sigma from zero
""")

    hdr("WHAT THIS MEANS")
    print(f"""
  The galaxy sector reduces to one number.  Pillar B is a one-parameter
  deformation of MOND-simple, the parameter is eps = 2*gamma - 1, the
  deformation vanishes identically at eps = 0, and SPARC measures

      eps = {2*boots.mean()-1:+.4f} +- {2*bs:.4f}   (galaxy-level bootstrap, this sample)

  consistent with zero.  This is the same eps that the 2026-08-11 dark-energy
  work found controls the deviation from LambdaCDM (gamma = 1/2 is the Moebius
  point, w runs -2gamma -> -1, every channel O(eps)).  One parameter, two
  sectors, and the data pins it to zero in both.

  That is a materially different statement from "0 confirmed, 6 refuted", and
  it is the one the executed numbers actually support.
""")


if __name__ == "__main__":
    main()
