#!/usr/bin/env python3
"""Where does the density law's knee sit on SPARC, and does its verdict depend on A?
Explorer 2026-11-02.  Pre-registered in PREREG_density_law_knee_placement.md (commit c62bc9d) before this file.

Frozen loader/likelihood: two_pillars_head_to_head_fit (h = 0.3 kpc, Upsilon_disk 0.5, sigma_int free).
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize, minimize_scalar

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import two_pillars_head_to_head_fit as H  # noqa: E402

MSUN_PC3 = H.L.MSUN / H.L.PC ** 3          # kg/m^3 per Msun/pc^3
GID, GB, GO, RHO, VF, EL = H.build()
GL = np.log10(GO)
N = len(GO)
LN_N = np.log(N)
GAL = np.unique(GID)
IDX = [np.where(GID == g)[0] for g in GAL]
NM = dict(maxiter=12000, xatol=1e-9, fatol=1e-10)


def prof_sig(model_log):
    """-lnL minimised over sigma_int; returns (neglnL, lsig)."""
    r = minimize_scalar(lambda s: H.neglnL(model_log, GL, EL, s), bounds=(np.log(1e-4), np.log(3)),
                        method="bounded", options=dict(xatol=1e-8))
    return r.fun, r.x


def mlog_density(gam, rc):
    C = np.clip(H.C_tanh(RHO / rc, gam), 1e-12, None)
    return np.log10(GB / C)


def per_gal(model_log, lsig, ref_log, ref_lsig):
    def pp(m, s):
        v = EL ** 2 + np.exp(s) ** 2
        return (GL - m) ** 2 / v + np.log(v)
    d = pp(model_log, lsig) - pp(ref_log, ref_lsig)
    dg = np.array([d[i].sum() for i in IDX])
    return d.sum(), np.sqrt(len(GAL) * dg.var(ddof=1))


def fit(fun, starts):
    best = None
    for s in starts:
        r = minimize(fun, s, method="Nelder-Mead", options=NM)
        if best is None or r.fun < best.fun:
            best = r
    return best


def main():
    print(f"N = {N}, galaxies {len(GAL)}; 1 Msun/pc^3 = {MSUN_PC3:.4e} kg/m^3")
    lr = np.log10(RHO / MSUN_PC3)
    print(f"disc densities log10(rho/[Msun/pc^3]): min {lr.min():+.2f}  5% {np.percentile(lr,5):+.2f}  "
          f"median {np.median(lr):+.2f}  95% {np.percentile(lr,95):+.2f}  max {lr.max():+.2f}")

    # ---- B and F (identity controls)
    rB = H.fit_pillarB(GB, GL, EL)
    rF = H.fit_pillarA(GB, GL, EL, RHO, VF, mode="global")
    rF2 = H.fit_pillarA(GB, GL, EL, RHO, VF, mode="AV2")
    mB = np.log10(H.solve_gobs_implicit(GB, np.exp(rB.x[0]), np.exp(rB.x[1])))
    m2B = 2 * rB.fun
    print(f"\nIDENTITY  B  -2lnL {m2B:.1f} (target -7564.2)   F {2*rF.fun:.1f} (target -4721.7)   "
          f"F2 {2*rF2.fun:.1f} (target -4255.2)")
    gF, rcF = np.exp(rF.x[0]), np.exp(rF.x[1])
    print(f"F: gamma {gF:.4f}  rho_c {rcF:.4e} kg/m3 = {rcF/MSUN_PC3:.3e} Msun/pc3")
    A2 = np.exp(rF2.x[1])
    print(f"F2: gamma {np.exp(rF2.x[0]):.4f}  A {A2:.4e} kg m-3 (km/s)-2 = {A2/MSUN_PC3:.3e} Msun pc-3 (km/s)-2")

    rows = []  # name, -2lnL, k, model_log, lsig

    def add(name, m2l, k, mlog, lsig):
        rows.append((name, m2l, k, mlog, lsig))

    add("B  accel-keyed (gamma,a0,sig)", m2B, 3, mB, rB.x[2])
    add("F  density, global rho_c free", 2 * rF.fun, 3, mlog_density(gF, rcF), rF.x[2])
    mF2 = mlog_density(np.exp(rF2.x[0]), A2 * VF ** 2)
    add("F2 density, A*V^2, A free", 2 * rF2.fun, 3, mF2, rF2.x[2])

    # ---- fixed-A arms, gamma free
    for tag, A_msun in (("K_f formula A=4.6e-5", 4.6e-5), ("K_p published A=0.029", 0.029)):
        rc = A_msun * MSUN_PC3 * VF ** 2

        def fK(th, rc=rc):
            lg, ls = th
            if not (1e-4 < np.exp(lg) < 50 and 1e-4 < np.exp(ls) < 3):
                return 1e12
            return H.neglnL(np.log10(GB / np.clip(H.C_tanh(RHO / rc, np.exp(lg)), 1e-12, None)), GL, EL, ls)
        r = fit(fK, [[np.log(g), np.log(0.2)] for g in (1e-3, 0.03, 0.3, 2.0, 20.0)])
        g = np.exp(r.x[0])
        x = RHO / rc
        print(f"{tag}: gamma {g:.4g}  x median {np.median(x):.3g}  [5%,95%] [{np.percentile(x,5):.3g}, {np.percentile(x,95):.3g}]"
              f"  -> gamma*median x {g*np.median(x):.3g}")
        add(f"{tag.split()[0]} A fixed {A_msun:g}, gamma free", 2 * r.fun, 2,
            np.log10(GB / np.clip(H.C_tanh(x, g), 1e-12, None)), r.x[1])

    # ---- registered gamma = 2
    def fR(th):
        lp, ls = th
        rc = np.exp(lp)
        if not (1e-34 < rc < 1e-12 and 1e-4 < np.exp(ls) < 3):
            return 1e12
        return H.neglnL(mlog_density(2.0, rc), GL, EL, ls)
    rR = fit(fR, [[np.log(p), np.log(0.2)] for p in (1e-30, 1e-27, 1e-24, 1e-21, 1e-18)])
    print(f"R_f gamma=2: rho_c {np.exp(rR.x[0])/MSUN_PC3:.3e} Msun/pc3")
    add("R_f gamma=2, rho_c free", 2 * rR.fun, 2, mlog_density(2.0, np.exp(rR.x[0])), rR.x[1])
    mRp = mlog_density(2.0, 0.029 * MSUN_PC3 * VF ** 2)
    v, s = prof_sig(mRp)
    add("R_p gamma=2, A=0.029 (published)", 2 * v, 1, mRp, s)

    # ---- constant boost
    def fC(th):
        lc, ls = th
        if not (1e-4 < np.exp(ls) < 3):
            return 1e12
        return H.neglnL(np.log10(GB) - lc / np.log(10), GL, EL, ls)
    rC = fit(fC, [[np.log(0.4), np.log(0.2)], [np.log(0.1), np.log(0.3)]])
    print(f"C0: constant C = {np.exp(rC.x[0]):.4f} (boost {np.exp(-rC.x[0]):.3f})")
    add("C0 constant boost (C0,sig)", 2 * rC.fun, 2, np.log10(GB) - rC.x[0] / np.log(10), rC.x[1])

    print("\n" + "=" * 112)
    print(f"{'arm':42s} {'k':>2s} {'-2lnL':>10s} {'BIC':>10s} {'dBIC vs B':>11s} {'gal-sd':>8s} {'dBIC vs F':>11s} {'sig_int':>8s}")
    bicB = m2B + 3 * LN_N
    bicF = 2 * rF.fun + 3 * LN_N
    for name, m2l, k, mlog, lsig in rows:
        bic = m2l + k * LN_N
        dv, sd = per_gal(mlog, lsig, mB, rB.x[2])
        print(f"{name:42s} {k:2d} {m2l:10.1f} {bic:10.1f} {bic-bicB:+11.1f} {sd:8.1f} {bic-bicF:+11.1f} {np.exp(lsig):8.4f}")
    print("  (gal-sd = sqrt(N_gal var(Delta_i)) of the -2lnL difference vs B; matched the B=2000 bootstrap for F on 10-18)")
    res = {r[0].split()[0]: (r[1] + r[2] * LN_N) for r in rows}

    # ---- P1 knee placement and response exponent at F
    x = RHO / rcF
    frac = np.mean(x > 100)
    arg = gF * np.log1p(x)
    Cf = np.tanh(arg)
    expo = gF * x / (1 + x) * (1 - Cf ** 2) / Cf      # d ln C / d ln rho
    print(f"\nF: x median {np.median(x):.3g}, min {x.min():.3g}; frac(x>100) = {frac:.4f};  "
          f"gamma ln(1+x) range [{arg.min():.3f}, {arg.max():.3f}];  C range [{Cf.min():.3f}, {Cf.max():.3f}]")
    lin = arg / Cf - 1
    print(f"   tanh curvature (arg/tanh(arg) - 1): median {np.median(lin):.4f}, max {lin.max():.4f}")
    print(f"   response exponent d lnC / d ln rho: median {np.median(expo):.4f} [5%,95%] "
          f"[{np.percentile(expo,5):.4f}, {np.percentile(expo,95):.4f}]  -> boost ~ rho^-{np.median(expo):.3f}")
    print(f"P1 frac(x>100) = {frac:.4f}  {'HELD' if frac >= 0.95 else 'REFUTED'}")

    # ---- P4 Hessian correlation at F
    th0 = rF.x.copy()

    def fA(th):
        return H.neglnL(mlog_density(np.exp(th[0]), np.exp(th[1])), GL, EL, th[2])
    hstep = np.array([1e-3, 1e-2, 1e-3])
    Hm = np.zeros((3, 3))
    for i in range(3):
        for j in range(3):
            ei = np.zeros(3); ej = np.zeros(3)
            ei[i] = hstep[i]; ej[j] = hstep[j]
            Hm[i, j] = (fA(th0 + ei + ej) - fA(th0 + ei - ej) - fA(th0 - ei + ej) + fA(th0 - ei - ej)) / (4 * hstep[i] * hstep[j])
    cov = np.linalg.inv(Hm)
    corr = cov[0, 1] / np.sqrt(cov[0, 0] * cov[1, 1])
    print(f"\nP4 Hessian at F: sd(ln gamma) {np.sqrt(cov[0,0]):.4f}, sd(ln rho_c) {np.sqrt(cov[1,1]):.4f}, "
          f"corr {corr:+.4f}   (point-iid; galaxy-level widths ~4x larger)")
    print(f"   gamma/bound(1e-3) = {gF/1e-3:.0f}x;  corr > 0.9: {'HELD' if corr > 0.9 else 'REFUTED'}")

    # ---- profile grid
    lgs = np.linspace(-4, 1, 51)
    lrs = np.linspace(-12, 3, 61)
    G = np.full((len(lgs), len(lrs)), np.nan)
    for i, lg in enumerate(lgs):
        for j, lrc in enumerate(lrs):
            v, _ = prof_sig(mlog_density(10 ** lg, 10 ** lrc * MSUN_PC3))
            G[i, j] = 2 * v
    np.save(os.path.join(HERE, "density_law_knee_profile_grid.npy"), G)
    dG = G - 2 * rF.fun
    i0, j0 = np.unravel_index(np.nanargmin(G), G.shape)
    print(f"\nGRID min: log gamma {lgs[i0]:+.2f}, log rho_c {lrs[j0]:+.2f} Msun/pc3, -2lnL {G[i0,j0]:.1f} "
          f"(F {2*rF.fun:.1f})  edge? {'YES' if i0 in (0, len(lgs)-1) or j0 in (0, len(lrs)-1) else 'no'}")
    print("profile over rho_c (min over gamma), d(-2lnL) vs F:")
    for j in range(0, len(lrs), 4):
        i = np.nanargmin(G[:, j])
        print(f"   log rho_c {lrs[j]:+6.2f}  best log gamma {lgs[i]:+.2f}  d {dG[i,j]:+9.1f}")
    print("profile over gamma (min over rho_c):")
    for i in range(0, len(lgs), 5):
        j = np.nanargmin(G[i, :])
        print(f"   log gamma {lgs[i]:+6.2f}  best log rho_c {lrs[j]:+6.2f}  d {dG[i,j]:+9.1f}")
    inside = (lrs >= -2) & (lrs <= 0)
    sub = dG[:, inside]
    ii, jj = np.unravel_index(np.nanargmin(sub), sub.shape)
    best_in = sub[ii, jj]
    print(f"P5 best with knee inside discs (rho_c in [1e-2,1] Msun/pc3): log gamma {lgs[ii]:+.2f}, "
          f"log rho_c {lrs[inside][jj]:+.2f}, d(-2lnL) vs F {best_in:+.1f}  {'HELD' if best_in > 300 else 'REFUTED'}")

    # ---- verdicts
    print("\nVERDICTS")
    print(f"P2 K_f - B {res['K_f']-bicB:+.1f} (> +2843?) {'yes' if res['K_f']-bicB > 2842.6 else 'no'};  "
          f"K_f - F2 {res['K_f']-res['F2']:+.1f} (> 100?) {'yes' if res['K_f']-res['F2'] > 100 else 'no'}")
    print(f"P3 C0 - F {res['C0']-res['F']:+.1f}  {'HELD' if res['C0']-res['F'] > 100 else 'REFUTED'}")
    print(f"P6 R_f - B {res['R_f']-bicB:+.1f}  {'HELD' if res['R_f']-bicB > 2842.6 else 'REFUTED'}")


if __name__ == "__main__":
    main()
