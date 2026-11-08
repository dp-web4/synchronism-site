#!/usr/bin/env python3
"""P11: uniform boost vs Newton + contaminants vs both. For Opik a with thermal e at fixed s, xi = v/(sqrt(gamma) v_esc(s)) has a universal density h(xi),
so each system's density in |v| is computed from orbit draws. Contaminants add an isotropic kick, log-uniform 100-2000 m/s. argv: gaia chae nmocks nproc"""
import sys
import numpy as np
from multiprocessing import Pool
import wb_estimators as W

S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", "v4")
NM = int(sys.argv[3])
NP = int(sys.argv[4])
CAP = float(sys.argv[5]) if len(sys.argv) > 5 else 2000.0
TRUTHS = eval(sys.argv[6]) if len(sys.argv) > 6 else None
GG = np.linspace(-0.2, 0.5, 36)
GAM = 10 ** (2 * GG)
FF = np.linspace(0, 0.5, 26)
rng0 = np.random.default_rng(42)
r_u, v_u = W.kepler_unit(rng0, 2000000, 1.0)
g_u = np.hypot(r_u[:, 0], r_u[:, 1])
# speed at s=1, GM=1: orbit has a=1/g; v = v_u * sqrt(GM/a) = v_u * sqrt(g). v_esc(s=1) = sqrt 2.
xi_u = np.linalg.norm(v_u, axis=1) * np.sqrt(g_u) / np.sqrt(2.0)
vec_u = v_u * np.sqrt(g_u)[:, None] / np.sqrt(2.0)
LB = np.linspace(np.log(1e-3), np.log(30.0), 400)
h_cts, _ = np.histogram(np.log(xi_u), bins=LB)
LC = 0.5 * (LB[:-1] + LB[1:])
dl = LB[1] - LB[0]
# density per unit ln xi
H = h_cts / h_cts.sum() / dl
print("h(xi): P(xi>1) = %.4f (0 expected up to bound), median xi %.3f" % ((xi_u > 1).mean(), np.median(xi_u)))


def p3_boost(v, vesc, gam):
    """3D density at |v| for a uniform boost."""
    xi = v / (np.sqrt(gam) * vesc)
    return np.interp(np.log(xi), LC, H, left=0.0, right=0.0) / (4 * np.pi * v**3)


def contam_table(vesc, gam, rng):
    n = 100000
    idx = rng.integers(0, len(xi_u), n)
    vo = vec_u[idx] * np.sqrt(gam) * vesc
    k = 10 ** rng.uniform(2, np.log10(CAP), n)
    d = rng.standard_normal((n, 3))
    d /= np.linalg.norm(d, axis=1, keepdims=True)
    sp = np.linalg.norm(vo + k[:, None] * d, axis=1)
    b = np.linspace(np.log(1.0), np.log(20000.0), 300)
    c, _ = np.histogram(np.log(sp), bins=b)
    return 0.5 * (b[:-1] + b[1:]), c / c.sum() / (b[1] - b[0])


def p3_contam(v, tab):
    lc, d = tab
    return np.interp(np.log(v), lc, d, left=0.0, right=0.0) / (4 * np.pi * v**3)


TABS = {}


def get_tabs():
    rng = np.random.default_rng(9)
    for j, s in enumerate(S):
        vesc = np.sqrt(2 * W.GMSUN_KAU * s["M"] / s["s"])
        s["vesc"] = vesc
        TABS[j] = [contam_table(vesc, g, rng) for g in GAM]


get_tabs()
K = W.Kernel(n=4000, seed=21)


def curves(v_list):
    """a[j, ig], c[j, ig] for all systems."""
    a = np.zeros((len(S), len(GAM)))
    c = np.zeros((len(S), len(GAM)))
    for j, s in enumerate(S):
        v2, M, wk = W.draws_gauss(s, v_list[j], kern=K)
        v = np.sqrt(v2)
        # mass only through vesc in this script
        vesc = s["vesc"] * np.sqrt(M / s["M"])
        for ig, g in enumerate(GAM):
            a[j, ig] = np.mean(wk * p3_boost(v, vesc, g))
            c[j, ig] = np.mean(wk * p3_contam(v, TABS[j][ig]))
    return a, c


def fits(a, c):
    best = {}
    A = np.log(np.maximum(a, 1e-300)).sum(1 - 1)  # sum over systems
    i = np.argmax(A)
    best["uniform"] = (A[i], GG[i], 0.0)
    ig1 = np.argmin(abs(GAM - 1.0))
    tab = np.array([[np.log(np.maximum((1 - f) * a[:, ig] + f * c[:, ig], 1e-300)).sum() for f in FF] for ig in range(len(GAM))])
    k = np.argmax(tab[ig1])
    best["newton+c"] = (tab[ig1, k], 0.0, FF[k])
    ij = np.unravel_index(np.argmax(tab), tab.shape)
    best["both"] = (tab[ij], GG[ij[0]], FF[ij[1]])
    best["newton"] = (A[ig1], 0.0, 0.0)
    return best


def job(args):
    mode, k = args
    rng = np.random.default_rng(777 + k + (10000 if mode == "boost" else 0) + (hash(str(mode)) % 1000 if isinstance(mode, tuple) else 0))
    if isinstance(mode, tuple):
        cat = W.mock_catalog(S, mode[0], rng, comp_frac=mode[1], kick_cap=CAP)
    elif mode == "boost":
        cat = W.mock_catalog(S, BF["boost_gamma"], rng)
    else:
        cat = W.mock_catalog(S, 1.0, rng, comp_frac=BF["newton_f"], kick_cap=CAP)
    a, c = curves([m["v_c"] for m in cat])
    return mode, fits(a, c), max(np.linalg.norm(m["v_c"]) / s["vesc"] for m, s in zip(cat, S)), sum(np.linalg.norm(m["v_c"]) / s["vesc"] > 1.26 for m, s in zip(cat, S))


BF = {}
a0, c0 = curves([s["v_c"] for s in S])
f0 = fits(a0, c0)
print("real rows (v4):")
for k, v in f0.items():
    print("  %-9s lnL %.2f  gamma %.3f  f %.2f" % (k, v[0], 10 ** (2 * v[1]), v[2]))
eta = np.array([np.linalg.norm(s["v_c"]) / s["vesc"] for s in S])
print("  max eta %.3f; n(eta>1.26) %d; n(eta>1) %d" % (eta.max(), (eta > 1.26).sum(), (eta > 1).sum()))
print("  per-system ln[p_c/p_a] at uniform best fit (largest):", [(S[j]["id"], round(float(np.log(c0[j, np.argmax(GG >= f0['uniform'][1])] / a0[j, np.argmax(GG >= f0['uniform'][1])])), 1)) for j in np.argsort(-c0[:, np.argmax(GG >= f0['uniform'][1])] / a0[:, np.argmax(GG >= f0['uniform'][1])])[:6]])
BF["boost_gamma"] = 10 ** (2 * f0["uniform"][1])
BF["newton_f"] = max(f0["newton+c"][2], 0.02)
if __name__ == "__main__":
    print("kick cap", CAP)
    with Pool(NP) as P:
        if TRUTHS is None:
            sets = [("uniform-boost truth (gamma=%.2f)" % BF["boost_gamma"], P.map(job, [("boost", k) for k in range(NM)], chunksize=2)),
                    ("Newton+contaminants truth (f=%.2f)" % BF["newton_f"], P.map(job, [("newton", k) for k in range(NM)], chunksize=2))]
        else:
            sets = [("truth gamma=%.2f f=%.2f" % tr, P.map(job, [(tr, k) for k in range(NM)], chunksize=2)) for tr in TRUTHS]
    for nm, o in sets:
        lr_c = np.array([x[1]["both"][0] - x[1]["uniform"][0] for x in o])
        d_un = np.array([x[1]["uniform"][0] - x[1]["newton+c"][0] for x in o])
        lnU = np.array([x[1]["uniform"][0] for x in o])
        print("\nmocks:", nm, "N", len(o))
        print("  lnL(both)-lnL(uniform): median %.2f, 95pct %.2f; observed %.2f; P(>=obs) %.3f" % (np.median(lr_c), np.percentile(lr_c, 95), f0["both"][0] - f0["uniform"][0], (lr_c >= f0["both"][0] - f0["uniform"][0]).mean()))
        print("  lnL(uniform)-lnL(newton+c): median %.2f, 16-84 [%.2f, %.2f]; observed %.2f; P(<=obs) %.3f" % (np.median(d_un), *np.percentile(d_un, [16, 84]), f0["uniform"][0] - f0["newton+c"][0], (d_un <= f0["uniform"][0] - f0["newton+c"][0]).mean()))
        print("  lnL(uniform) itself: median %.2f, 2.5pct %.2f; observed %.2f; P(<=obs) %.3f" % (np.median(lnU), np.percentile(lnU, 2.5), f0["uniform"][0], (lnU <= f0["uniform"][0]).mean()))
        mx = np.array([x[2] for x in o])
        n126 = np.array([x[3] for x in o])
        print("  max eta: median %.2f, P(>=obs) %.3f | n(eta>1.26): mean %.2f, P(>=obs) %.3f" % (np.median(mx), (mx >= eta.max()).mean(), n126.mean(), (n126 >= (eta > 1.26).sum()).mean()))
