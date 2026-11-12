#!/usr/bin/env python3
"""The density-keyed law at the archive's OWN calibration, rho_crit = A * V^B with A = 0.028, B = 0.5, gamma = 2.
Explorer 2026-11-12. PREREG_density_law_at_archive_calibration_v05.md (commit 09bea5e) written before this file.

Every earlier SPARC fit on the site used rho_crit = A*V^2 (the 2026-08-27 units slip) or one global knee.
Loader/likelihood frozen from density_law_knee_placement.py (two_pillars_head_to_head_fit: h = 0.3 kpc,
Upsilon_disk 0.5, sigma_int free). Comparator B = acceleration-keyed compander.
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize, minimize_scalar

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import two_pillars_head_to_head_fit as H  # noqa: E402

MSUN_PC3 = H.L.MSUN / H.L.PC ** 3
GID, GB, GO, RHO, VF, EL = H.build()
GL = np.log10(GO)
N = len(GO)
LN_N = np.log(N)
GAL = np.unique(GID)
IDX = [np.where(GID == g)[0] for g in GAL]
NM = dict(maxiter=20000, xatol=1e-9, fatol=1e-10)


def prof_sig(model_log):
    r = minimize_scalar(lambda s: H.neglnL(model_log, GL, EL, s), bounds=(np.log(1e-4), np.log(3)),
                        method="bounded", options=dict(xatol=1e-8))
    return r.fun, r.x


def mlog(gam, rc):
    return np.log10(GB / np.clip(H.C_tanh(RHO / rc, gam), 1e-12, None))


def rc_of(A_msun, B):
    return A_msun * MSUN_PC3 * VF ** B


def pp(m, s):
    v = EL ** 2 + np.exp(s) ** 2
    return (GL - m) ** 2 / v + np.log(v)


def per_gal(model_log, lsig, ref_log, ref_lsig):
    d = pp(model_log, lsig) - pp(ref_log, ref_lsig)
    dg = np.array([d[i].sum() for i in IDX])
    return d.sum(), np.sqrt(len(GAL) * dg.var(ddof=1)), int((dg > 0).sum())


def fit(fun, starts):
    best = None
    for s in starts:
        r = minimize(fun, s, method="Nelder-Mead", options=NM)
        if best is None or r.fun < best.fun:
            best = r
    return best


def main():
    print(f"N = {N}, galaxies {len(GAL)}; V_flat range {VF.min():.1f}-{VF.max():.1f} km/s, median {np.median(VF):.1f}")
    lr = np.log10(RHO / MSUN_PC3)
    print(f"disc log10 rho [Msun/pc3]: 5% {np.percentile(lr,5):+.2f} median {np.median(lr):+.2f} 95% {np.percentile(lr,95):+.2f}")

    rB = H.fit_pillarB(GB, GL, EL)
    mB = np.log10(H.solve_gobs_implicit(GB, np.exp(rB.x[0]), np.exp(rB.x[1])))
    m2B = 2 * rB.fun
    rF = H.fit_pillarA(GB, GL, EL, RHO, VF, mode="global")
    print(f"IDENTITY B -2lnL {m2B:.1f} (target -7564.2); F {2*rF.fun:.1f} (target -4721.7)")
    bicB = m2B + 3 * LN_N
    rows = []

    def add(name, m2l, k, ml, ls, note=""):
        rows.append((name, m2l, k, ml, ls, note))

    gF, rcF = np.exp(rF.x[0]), np.exp(rF.x[1])
    add("F  global knee free (on file +2843)", 2 * rF.fun, 3, mlog(gF, rcF), rF.x[2])

    # P_as: preprint as written
    rc = rc_of(0.028, 0.5)
    x = RHO / rc
    print(f"P_as knee rho_c = 0.028 V^0.5: range {rc.min()/MSUN_PC3:.3f}-{rc.max()/MSUN_PC3:.3f} Msun/pc3; "
          f"x median {np.median(x):.3g} [5%,95%] [{np.percentile(x,5):.3g},{np.percentile(x,95):.3g}]")
    m = mlog(2.0, rc)
    v, s = prof_sig(m)
    C = H.C_tanh(x, 2.0)
    print(f"   boost 1/C: median {np.median(1/C):.2f}  [5%,95%] [{np.percentile(1/C,5):.2f},{np.percentile(1/C,95):.2f}]")
    add("P_as A=0.028 B=0.5 gamma=2 (preprint)", 2 * v, 1, m, s)

    # P_orig
    m = mlog(2.0, rc_of(0.25, 1.62))
    v, s = prof_sig(m)
    add("P_orig A=0.25 B=1.62 gamma=2", 2 * v, 1, m, s)

    # P_g
    def fg(th):
        lg, ls = th
        if not (1e-4 < np.exp(lg) < 50 and 1e-4 < np.exp(ls) < 3):
            return 1e12
        return H.neglnL(mlog(np.exp(lg), rc), GL, EL, ls)
    r = fit(fg, [[np.log(g), np.log(0.2)] for g in (1e-3, 0.03, 0.3, 2.0, 20.0)])
    add(f"P_g A=0.028 B=0.5 gamma free ({np.exp(r.x[0]):.4g})", 2 * r.fun, 2, mlog(np.exp(r.x[0]), rc), r.x[1])

    # P_Ag
    def fAg(th):
        lg, lA, ls = th
        if not (1e-4 < np.exp(lg) < 50 and 1e-4 < np.exp(ls) < 3 and -40 < lA < 10):
            return 1e12
        return H.neglnL(mlog(np.exp(lg), rc_of(np.exp(lA), 0.5)), GL, EL, ls)
    r = fit(fAg, [[np.log(g), np.log(A), np.log(0.2)] for g in (0.05, 0.5, 2.0) for A in (1e-8, 1e-5, 1e-3, 0.028)])
    gA, AA = np.exp(r.x[0]), np.exp(r.x[1])
    add(f"P_Ag B=0.5, A free ({AA:.3g}), gamma free ({gA:.3g})", 2 * r.fun, 3, mlog(gA, rc_of(AA, 0.5)), r.x[2])

    # P_ABg
    def fABg(th):
        lg, lA, B, ls = th
        if not (1e-4 < np.exp(lg) < 50 and 1e-4 < np.exp(ls) < 3 and -60 < lA < 20 and -4 < B < 4):
            return 1e12
        return H.neglnL(mlog(np.exp(lg), rc_of(np.exp(lA), B)), GL, EL, ls)
    starts = [[np.log(g), np.log(A), B, np.log(0.2)] for g in (0.046, 0.5, 2.0) for A in (1e-8, 1e-5, 0.028)
              for B in (-1.0, 0.0, 0.5, 2.0)]
    r = fit(fABg, starts)
    g4, A4, B4 = np.exp(r.x[0]), np.exp(r.x[1]), r.x[2]
    add(f"P_ABg A ({A4:.3g}), B ({B4:+.3f}), gamma ({g4:.3g}) free", 2 * r.fun, 4, mlog(g4, rc_of(A4, B4)), r.x[3])

    print("\n" + "=" * 118)
    print(f"{'arm':50s} {'k':>2s} {'-2lnL':>10s} {'dBIC vs B':>11s} {'gal-sd':>8s} {'lose/122':>9s} {'dBIC vs F':>11s} {'sig_int':>8s}")
    bicF = 2 * rF.fun + 3 * LN_N
    out = {}
    for name, m2l, k, ml, ls, _ in rows:
        bic = m2l + k * LN_N
        dv, sd, nl = per_gal(ml, ls, mB, rB.x[2])
        out[name.split()[0]] = (bic - bicB, nl)
        print(f"{name:50s} {k:2d} {m2l:10.1f} {bic-bicB:+11.1f} {sd:8.1f} {nl:5d}/122 {bic-bicF:+11.1f} {np.exp(ls):8.4f}")
    print("  (gal-sd = sqrt(N_gal var(Delta_i)); lose = galaxies where the arm's -2lnL exceeds B's)")

    # ---- local: solar neighbourhood at the archive calibration
    print("\nLOCAL: solar neighbourhood rho = 0.09 Msun/pc3, V = 220 km/s (Milky Way V_flat, recall)")
    for (A, Bx, lab) in ((0.028, 0.5, "archive A*V^0.5"), (0.029, 2.0, "site 0.029*V^2")):
        rcl = A * 220.0 ** Bx
        for gam in (0.489, 2.0):
            Cl = np.tanh(gam * np.log1p(0.09 / rcl))
            print(f"   {lab:16s} rho_c {rcl:9.3g}  gamma {gam:5.3f}: C {Cl:.3e}  boost in g {1/Cl:9.3g}  v excess {100*(1/np.sqrt(Cl)-1):+9.3g}%")

    # ---- scoring
    print("\nSCORING")
    pas, porig, pg, pag, pabg = (out[k][0] for k in ("P_as", "P_orig", "P_g", "P_Ag", "P_ABg"))
    print(f"P1 P_as in [7000,13000] and > R_f 6065: {pas:+.0f} -> {'HELD' if 7000 <= pas <= 13000 and pas > 6065 else 'REFUTED'}")
    print(f"P2 P_g in [5500,8000]: {pg:+.0f} -> {'HELD' if 5500 <= pg <= 8000 else 'REFUTED'}")
    print(f"P3 P_Ag in [3000,5500]: {pag:+.0f} -> {'HELD' if 3000 <= pag <= 5500 else 'REFUTED'}")
    print(f"P4 P_ABg >= 2700 and B_hat < 0.5: {pabg:+.0f}, B {B4:+.3f} -> {'HELD' if pabg >= 2700 and B4 < 0.5 else 'REFUTED'}")
    print(f"P5 P_orig worse than P_as: {porig:+.0f} vs {pas:+.0f} -> {'HELD' if porig > pas else 'REFUTED'}")
    nmin = min(v[1] for k, v in out.items() if k != "F")
    print(f"P6 every new arm loses in >= 100/122: min {nmin} -> {'HELD' if nmin >= 100 else 'REFUTED'}")
    print("P7 see LOCAL block (boost 2-15 at archive calibration)")
    print(f"FRAME CHECK any arm dBIC < 0: {any(v[0] < 0 for v in out.values())}; P_as better than +2843: {pas < 2843}")


if __name__ == "__main__":
    main()
