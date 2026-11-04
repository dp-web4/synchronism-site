#!/usr/bin/env python3
"""Does local density carry boost information beyond g_bar on the 11-02 sample?
Explorer 2026-11-04. Pre-registered in PREREG_density_partial_beyond_gbar.md (commit 4891f7e).
Frozen loader/likelihood: two_pillars_head_to_head_fit (h = 0.3 kpc, Upsilon_disk 0.5, sigma_int free).
"""
import os
import sys
import numpy as np
from scipy.optimize import minimize

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import two_pillars_head_to_head_fit as H  # noqa: E402

RNG = np.random.default_rng(20261104)
NM = dict(maxiter=20000, xatol=1e-9, fatol=1e-10)
NBOOT = 1000


def load(h_mode="const"):
    gid, gb, go, rho, vf, el = H.build(h_mode=h_mode)
    return dict(gid=gid, gb=gb, gl=np.log10(go), lr=np.log10(rho), lg=np.log10(gb), el=el, vf=vf, rho=rho)


def idx_by_gal(gid):
    gal = np.unique(gid)
    return gal, [np.where(gid == g)[0] for g in gal]


def wls(X, y, w):
    sw = np.sqrt(w)
    coef, *_ = np.linalg.lstsq(X * sw[:, None], y * sw, rcond=None)
    return coef


def design_poly(lg, lr, deg=3, with_rho=True):
    z = lg - lg.mean()
    cols = [z ** k for k in range(deg + 1)]
    if with_rho:
        cols.append(lr - lr.mean())
    return np.column_stack(cols)


def boot_poly(d, w, idx, nboot=NBOOT, y=None, lr=None):
    """Galaxy-block bootstrap of the rho coefficient in log B = poly3(log g_bar) + beta log rho."""
    y = (d["gl"] - d["lg"]) if y is None else y
    lr = d["lr"] if lr is None else lr
    X = design_poly(d["lg"], lr)
    b0 = wls(X, y, w)[-1]
    bs = np.empty(nboot)
    ng = len(idx)
    for b in range(nboot):
        pick = np.concatenate([idx[i] for i in RNG.integers(0, ng, ng)])
        Xb = design_poly(d["lg"][pick], lr[pick])
        bs[b] = wls(Xb, y[pick], w[pick])[-1]
    return b0, np.percentile(bs, [2.5, 97.5]), bs.std(ddof=1)


def main():
    d = load("const")
    N = len(d["gl"])
    lnN = np.log(N)
    gal, idx = idx_by_gal(d["gid"])
    print(f"N = {N}, galaxies {len(gal)}")
    lB = d["gl"] - d["lg"]

    # ---------------- G baseline (identity control vs 11-02: -2lnL -7564.2)
    rB = H.fit_pillarB(d["gb"], d["gl"], d["el"])
    g0, a0, ls0 = np.exp(rB.x[0]), np.exp(rB.x[1]), rB.x[2]
    mG = np.log10(H.solve_gobs_implicit(d["gb"], g0, a0))
    print(f"\nIDENTITY G: -2lnL {2*rB.fun:.1f} (target -7564.2)  gamma {g0:.4f} a0 {a0:.3e} sig {np.exp(ls0):.4f}")
    w = 1.0 / (d["el"] ** 2 + np.exp(ls0) ** 2)

    # ---------------- G + beta, everything refit
    lrc = d["lr"] - d["lr"].mean()

    def fGb(th):
        lgam, la0, beta, ls = th
        gam, a = np.exp(lgam), np.exp(la0)
        if not (1e-3 < gam < 20 and 1e-13 < a < 1e-8 and 1e-4 < np.exp(ls) < 3):
            return 1e12
        m = np.log10(H.solve_gobs_implicit(d["gb"], gam, a)) + beta * lrc
        return H.neglnL(m, d["gl"], d["el"], ls)
    best = None
    for b0 in (-0.05, 0.0, 0.05):
        r = minimize(fGb, [rB.x[0], rB.x[1], b0, rB.x[2]], method="Nelder-Mead", options=NM)
        if best is None or r.fun < best.fun:
            best = r
    beta_G = best.x[2]
    dbic_G = (2 * best.fun + 4 * lnN) - (2 * rB.fun + 3 * lnN)
    # per-galaxy sd of the -2lnL difference
    mGb = np.log10(H.solve_gobs_implicit(d["gb"], np.exp(best.x[0]), np.exp(best.x[1]))) + beta_G * lrc

    def pp(m, s):
        v = d["el"] ** 2 + np.exp(s) ** 2
        return (d["gl"] - m) ** 2 / v + np.log(v)
    dd = pp(mGb, best.x[3]) - pp(mG, ls0)
    dg = np.array([dd[i].sum() for i in idx])
    sdG = np.sqrt(len(gal) * dg.var(ddof=1))
    # conditional bootstrap: G shape fixed, beta + offset refit by WLS
    yres = d["gl"] - mG
    bs = np.empty(NBOOT)
    for b in range(NBOOT):
        pick = np.concatenate([idx[i] for i in RNG.integers(0, len(idx), len(idx))])
        X = np.column_stack([np.ones(len(pick)), lrc[pick]])
        bs[b] = wls(X, yres[pick], w[pick])[1]
    print(f"\nG+beta (all refit): beta {beta_G:+.4f}  dBIC(G+b vs G) {dbic_G:+.1f}  (-2lnL diff {2*best.fun-2*rB.fun:+.1f}, "
          f"gal-sd {sdG:.1f})")
    print(f"   conditional bootstrap (G shape fixed, beta+offset WLS): 95% CI [{np.percentile(bs,2.5):+.4f}, "
          f"{np.percentile(bs,97.5):+.4f}]  sd {bs.std(ddof=1):.4f}")

    # ---------------- P + beta (flexible cubic baseline)
    bP, ciP, sdP = boot_poly(d, w, idx)
    print(f"\nP+beta (cubic log g_bar + beta log rho): beta {bP:+.4f}  95% CI [{ciP[0]:+.4f}, {ciP[1]:+.4f}]  sd {sdP:.4f}")
    for deg in (1, 2, 5):
        X = design_poly(d["lg"], d["lr"], deg=deg)
        print(f"   degree {deg} baseline: beta {wls(X, lB, w)[-1]:+.4f}")

    # within-galaxy version (galaxy fixed effects) -- not registered, labelled as such
    yw, xw, Xg = lB.copy(), d["lr"].copy(), design_poly(d["lg"], d["lr"], with_rho=False)
    Z = np.column_stack([Xg[:, 1:], xw])
    Zd, yd = Z.copy(), yw.copy()
    for i in idx:
        Zd[i] -= Z[i].mean(axis=0)
        yd[i] -= yw[i].mean()
    bW = wls(Zd, yd, w)[-1]
    bsw = np.empty(NBOOT)
    for b in range(NBOOT):
        pk = RNG.integers(0, len(idx), len(idx))
        pick = np.concatenate([idx[i] for i in pk])
        bsw[b] = wls(Zd[pick], yd[pick], w[pick])[-1]
    print(f"   [unregistered] within-galaxy (galaxy fixed effects): beta {bW:+.4f}  95% CI "
          f"[{np.percentile(bsw,2.5):+.4f}, {np.percentile(bsw,97.5):+.4f}]")

    # ---------------- marginal and leakage
    X1 = np.column_stack([np.ones(N), lrc])
    bm = wls(X1, lB, w)[1]
    bleakG = wls(X1, mG - d["lg"], w)[1]
    # F model (density law, 11-02) fitted response
    rF = H.fit_pillarA(d["gb"], d["gl"], d["el"], d["rho"], d["vf"], mode="global")
    gF, rcF = np.exp(rF.x[0]), np.exp(rF.x[1])
    mF = np.log10(d["gb"] / np.clip(H.C_tanh(d["rho"] / rcF, gF), 1e-12, None))
    bF = wls(X1, mF - d["lg"], w)[1]
    print(f"\nIDENTITY F: -2lnL {2*rF.fun:.1f} (target -4721.7)  gamma {gF:.4f}")
    print(f"MARGINAL: data log B on log rho slope {bm:+.4f};  G-model (g_bar only) fitted log B on log rho {bleakG:+.4f} "
          f"(ratio {bleakG/bm:.3f});  F-model fitted log B on log rho {bF:+.4f}")
    print(f"   corr(log g_bar, log rho) = {np.corrcoef(d['lg'], d['lr'])[0,1]:+.4f}")

    # ---------------- reverse: F + delta log g_bar
    lgc = d["lg"] - d["lg"].mean()

    def fFd(th):
        lgam, lp, delta, ls = th
        gam, rc = np.exp(lgam), np.exp(lp)
        if not (1e-3 < gam < 20 and 1e-30 < rc < 1e-14 and 1e-4 < np.exp(ls) < 3):
            return 1e12
        m = np.log10(d["gb"] / np.clip(H.C_tanh(d["rho"] / rc, gam), 1e-12, None)) + delta * lgc
        return H.neglnL(m, d["gl"], d["el"], ls)
    bestF = None
    for d0 in (-0.3, 0.0, 0.3):
        r = minimize(fFd, [rF.x[0], rF.x[1], d0, rF.x[2]], method="Nelder-Mead", options=NM)
        if bestF is None or r.fun < bestF.fun:
            bestF = r
    dbic_F = (2 * bestF.fun + 4 * lnN) - (2 * rF.fun + 3 * lnN)
    print(f"\nREVERSE F+delta: delta {bestF.x[2]:+.4f}  gamma {np.exp(bestF.x[0]):.4f}  dBIC(F+d vs F) {dbic_F:+.1f}")
    print(f"   F+delta vs G: dBIC {(2*bestF.fun + 4*lnN) - (2*rB.fun + 3*lnN):+.1f}")

    # ---------------- controls
    perm = np.empty(200)
    for k in range(200):
        lp = d["lr"].copy()
        for i in idx:
            lp[i] = RNG.permutation(lp[i])
        perm[k] = wls(design_poly(d["lg"], lp), lB, w)[-1]
    print(f"\nCONTROL within-galaxy rho permutation (200): beta mean {perm.mean():+.4f} sd {perm.std(ddof=1):.4f} "
          f"[2.5,97.5] [{np.percentile(perm,2.5):+.4f}, {np.percentile(perm,97.5):+.4f}];  "
          f"|real P beta| exceeds {np.mean(np.abs(perm) < abs(bP))*100:.1f}% of perms")
    for btrue in (-0.05, -0.10):
        yinj = lB + btrue * lrc
        bi, cii, _ = boot_poly(d, w, idx, nboot=400, y=yinj)
        print(f"POSITIVE CONTROL inject {btrue:+.2f}: recovered {bi:+.4f}  95% CI [{cii[0]:+.4f}, {cii[1]:+.4f}]  "
              f"(expected {bP+btrue:+.4f})")

    # ---------------- robustness: scale-height prescriptions
    for hm in ("rd5", "bershady"):
        e = load(hm)
        ge, ie = idx_by_gal(e["gid"])
        we = 1.0 / (e["el"] ** 2 + np.exp(ls0) ** 2)
        bb, cc, _ = boot_poly(e, we, ie, nboot=600)
        print(f"ROBUST h={hm:8s}: N {len(e['gl'])}  beta {bb:+.4f}  95% CI [{cc[0]:+.4f}, {cc[1]:+.4f}]")


if __name__ == "__main__":
    main()
