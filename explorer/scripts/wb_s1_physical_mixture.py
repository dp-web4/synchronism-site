#!/usr/bin/env python3
"""S1 with physical contaminants. (1) Which systems drive the calibration-bin gamma: per-system ML gamma, robust kernels, z kept.
(2) Mixture (1-f_j) orbit + f_j orbit-with-companion, where f_j and the kick pool come from the forward model at per-star F, per system.
Reports gamma posterior vs F, the scale on f that the data want, and a Newton+HC mock check of this mixture estimator.
argv: gaia_csv chae_csv tables nmocks nproc. Post-hoc parts labelled in the finding."""
import sys
import numpy as np
from multiprocessing import Pool
import wb_estimators as W
import wb_hidden_companions as H

S = W.load(sys.argv[1], sys.argv[2], sys.argv[3], "v4")
NM = int(sys.argv[4])
NP = int(sys.argv[5])
QMODE = sys.argv[6] if len(sys.argv) > 6 else "flat"
RVFRAC = float(sys.argv[7]) if len(sys.argv) > 7 else 21 / 36
AMED = float(sys.argv[8]) if len(sys.argv) > 8 else 40.0
print("VARIANT q=%s rv_frac=%.3f a_med=%.0f" % (QMODE, RVFRAC, AMED))
G_UNIT = 1.32712440018e20 / (1.495978707e14) ** 2 / 1e-10
EDGES = [0, 0.3, 0.6, 1.0, 3.0, 1e9]
for s in S:
    s["g"] = G_UNIT * s["M"] / s["s"] ** 2
    s["G"] = 4.8 + 10 * np.log10(1.0 / (0.5 * s["M"])) + 5 * np.log10(s["d"] / 10)
    s["vesc"] = np.sqrt(2 * W.GMSUN_KAU * s["M"] / s["s"])
LN = np.log(W.GAM)


def post(t):
    p = np.exp(t - t.max())
    p /= p.sum()
    c = np.cumsum(p)
    m = np.interp(0.5, c, LN)
    return np.exp(m), np.exp(np.interp(0.16, c, LN)), np.exp(np.interp(0.84, c, LN)), p[LN <= 0].sum()


print("=== 1. per-system, ordered by g (config opik_noz Gaussian, then chae with z; robust = t5 with 40 m/s, no v_sys)")
cfg_a, cfg_b = W.CONFIGS["opik_noz"], W.CONFIGS["chae"]
K = W.Kernel(n=12000, seed=41)
cur = {}
for j, s in enumerate(sorted(S, key=lambda x: x["g"])):
    Ga = W.G_for(s, cfg_a)
    Gb = W.G_for(s, cfg_b)
    la = W.log_L_curve(*W.draws_gauss(s, s["v_c"], kern=K), *Ga)
    lb = W.log_L_curve(*W.draws_gauss(s, s["v_c"], kern=K), *Gb)
    lr = W.log_L_curve(*W.draws_coded(s, s["v_c"], kern=K, use_vsys=False), *Ga)
    cur[s["id"]] = (la, lb, lr)
    vn = np.linalg.norm(s["v_c"])
    print("  #%-3d g %5.2f  s %6.2f d %5.1f M %.2f v %5.0f±(%3.0f,%3.0f) eta %.2f  RV:%-10s | gamma_ML %5.2f  with z %5.2f  robust %5.2f | dlnL(1->ML) %5.1f" % (s["id"], s["g"], s["s"], s["d"], s["M"], vn, s["sE"], s["rv_sig"], vn / s["vesc"], s["rv_source"][:10], W.GAM[np.argmax(la)], W.GAM[np.argmax(lb)], W.GAM[np.argmax(lr)], la.max() - la[np.argmin(abs(W.GAM - 1))]))
print("\n  by plan bin:")
for k in range(5):
    ids = [s["id"] for s in S if EDGES[k] <= s["g"] < EDGES[k + 1]]
    if not ids:
        continue
    for nm, i in (("no z", 0), ("with z", 1), ("robust", 2)):
        print("   bin %d n=%2d %-7s gamma %.2f [%.2f, %.2f]  P(gamma<=1) %.3f" % (k, len(ids), nm, *post(sum(cur[q][i] for q in ids))))
ids = [s["id"] for s in S if s["g"] >= 3]
srt = sorted(ids, key=lambda q: -(cur[q][0].max() - cur[q][0][np.argmin(abs(W.GAM - 1))]))
print("  g>3 bin, dropping its top systems one at a time (no z):", end=" ")
for n in range(0, 5):
    print("%s:%.2f" % (srt[:n], post(sum(cur[q][0] for q in ids if q not in srt[:n]))[0]), end="  ")
print()
print("  all 36: no z %.3f; with z %.3f; robust %.3f" % (post(sum(v[0] for v in cur.values()))[0], post(sum(v[1] for v in cur.values()))[0], post(sum(v[2] for v in cur.values()))[0]))

# ------- 2. mixture with physical pools
rng0 = np.random.default_rng(42)
r_u, v_u = W.kepler_unit(rng0, 1500000, 1.0)
g_u = np.hypot(r_u[:, 0], r_u[:, 1])
vec_u = v_u * np.sqrt(g_u)[:, None] / np.sqrt(2.0)
xi_u = np.linalg.norm(vec_u, axis=1)
LB = np.linspace(np.log(1e-3), np.log(30.0), 400)
LC = 0.5 * (LB[:-1] + LB[1:])
H0 = np.histogram(np.log(xi_u), bins=LB)[0]
H0 = H0 / H0.sum() / (LB[1] - LB[0])
GG = np.linspace(-0.2, 0.5, 29)
GAM = 10 ** (2 * GG)
BIN = np.linspace(np.log(1.0), np.log(40000.0), 300)
BC = 0.5 * (BIN[:-1] + BIN[1:])


def build_pools(q_mode="flat", a_med=40.0):
    rng = np.random.default_rng(777)
    out = []
    for s in S:
        n = 60000
        o = H.forward(rng, np.full(n, 0.5 * s["M"]), np.full(n, s["d"]), np.full(n, s["G"]), s_kau=np.full(n, s["s"]), q_mode=q_mode, a_med=a_med)
        rvm = rng.uniform(0, 1, n) < RVFRAC
        k0, _ = H.cuts(o)
        k1, _ = H.cuts(o, rv_stable=100.0)
        k = np.where(rvm, k1, k0)
        kv = np.column_stack([o["k_pm"][k, 0], o["k_pm"][k, 1], o["rv0"][k]])
        Mf = (o["Mt"][k] + 0.5 * s["M"]) / s["M"]
        out.append(dict(surv=k.mean(), pure=(o["ruwe_plain"] < 1.25).mean(), kv=kv, Mf=Mf))
    return out


P0 = build_pools(QMODE, AMED)
rng_t = np.random.default_rng(11)
TAB = []
for j, s in enumerate(S):
    row = []
    pl = P0[j]
    for g in GAM:
        n = 80000
        i = rng_t.integers(0, len(xi_u), n)
        q = rng_t.integers(0, len(pl["kv"]), n)
        sgn = rng_t.choice([-1.0, 1.0], n)[:, None]
        v = vec_u[i] * s["vesc"] * np.sqrt(g * pl["Mf"][q])[:, None] + sgn * pl["kv"][q]
        sp = np.linalg.norm(v, axis=1)
        c = np.histogram(np.log(sp), bins=BIN)[0]
        row.append(c / c.sum() / (BIN[1] - BIN[0]))
    TAB.append(np.array(row))
K2 = W.Kernel(n=3000, seed=21)


def fj_of(F):
    f = []
    for pl in P0:
        c = 2 * F * (1 - F) * pl["surv"] * pl["pure"]
        f.append(c / (c + (1 - F) ** 2 * pl["pure"] ** 2))
    return np.array(f)


def curves(vs):
    a = np.zeros((len(S), len(GAM)))
    c = np.zeros((len(S), len(GAM)))
    for j, s in enumerate(S):
        v2, M, wk = W.draws_gauss(s, vs[j], kern=K2)
        v = np.sqrt(v2)
        ves = s["vesc"] * np.sqrt(M / s["M"])
        for ig, g in enumerate(GAM):
            xi = v / (np.sqrt(g) * ves)
            a[j, ig] = np.mean(wk * np.interp(np.log(xi), LC, H0, left=0, right=0) / (4 * np.pi * v**3))
            c[j, ig] = np.mean(wk * np.interp(np.log(v), BC, TAB[j][ig], left=0, right=0) / (4 * np.pi * v**3))
    return a, c


def pg(t):
    p = np.exp(t - t.max())
    p /= p.sum()
    cdf = np.cumsum(p)
    return 10 ** (2 * np.interp(0.5, cdf, GG)), 10 ** (2 * np.interp(0.16, cdf, GG)), 10 ** (2 * np.interp(0.84, cdf, GG)), p[GAM <= 1.0001].sum(), t.max()


def fit_table(a, c):
    out = {}
    for F in (0.0, 0.1, 0.2, 0.3, 0.45, 0.5):
        f = fj_of(F)
        t = np.log(np.maximum((1 - f[:, None]) * a + f[:, None] * c, 1e-300)).sum(0)
        out[F] = pg(t)
    return out


def mock_job(k):
    rng = np.random.default_rng(90000 + k)
    F = TRUE_F
    f = fj_of(F)
    vs = []
    for j, s in enumerate(S):
        r, v = W.kepler_unit(rng, 1, 1.0)
        g = np.hypot(r[0, 0], r[0, 1])
        vv = v[0] * np.sqrt(TRUE_G * W.GMSUN_KAU * s["M"] * np.exp(0.05 * rng.standard_normal()) * g / s["s"])
        if rng.uniform() < f[j]:
            pl = P0[j]
            q = rng.integers(0, len(pl["kv"]))
            vv = vv * np.sqrt(pl["Mf"][q]) + rng.choice([-1.0, 1.0]) * pl["kv"][q]
        vs.append(vv + np.array([s["sE"], s["sN"], s["rv_sig"]]) * rng.standard_normal(3))
    a, c = curves(vs)
    tb = fit_table(a, c)
    t0 = np.log(np.maximum(a, 1e-300)).sum(0)
    return tb[F][0], pg(t0)[0]


a0, c0 = curves([s["v_c"] for s in S])
print("\n=== 2. real 36, mixture with forward-model pools; surv by system median %.3f; kick median %.0f m/s" % (np.median([p["surv"] for p in P0]), np.median([np.median(np.linalg.norm(p["kv"], axis=1)) for p in P0])))
for F, r in fit_table(a0, c0).items():
    print("  per-star F=%.2f  median f %.3f  gamma %.3f [%.3f, %.3f]  P(gamma<=1) %.4f  lnL_max %.2f" % (F, np.median(fj_of(F)), *r))
lam = np.linspace(0, 8, 33)
best = []
f3 = fj_of(0.3)
for L in lam:
    f = np.minimum(L * f3, 0.95)
    t = np.log(np.maximum((1 - f[:, None]) * a0 + f[:, None] * c0, 1e-300)).sum(0)
    best.append((t.max(), GAM[np.argmax(t)]))
best = np.array(best)
print("  profile over a scale on f (F=0.3 pattern): ", " ".join("x%.1f:%.1f(g%.2f)" % (lam[i], best[i, 0], best[i, 1]) for i in range(0, 33, 4)), " | best scale %.2f, gamma %.2f, median f %.3f, lnL %.2f" % (lam[np.argmax(best[:, 0])], best[np.argmax(best[:, 0]), 1], np.median(lam[np.argmax(best[:, 0])] * f3), best[:, 0].max()))
if __name__ == "__main__":
    real_nomix = pg(np.log(np.maximum(a0, 1e-300)).sum(0))[0]
    if NM > 0:
        for TRUE_G, TRUE_F in ((1.0, 0.0), (1.0, 0.3), (1.0, 0.5), (1.4, 0.3), (1.4, 0.5), (1.6, 0.5)):
            # fork after setting module globals
            globals()["TRUE_G"], globals()["TRUE_F"] = TRUE_G, TRUE_F
            with Pool(NP) as P2:
                res = np.array(P2.map(mock_job, range(NM), chunksize=1))
            print("  mock truth gamma=%.1f F=%.2f: mixture-at-true-F median %.3f (16-84 %.3f, %.3f); no-mixture reads %.3f (16-84 %.3f, %.3f); P(no-mixture >= real %.2f) = %.3f" % (TRUE_G, TRUE_F, np.median(res[:, 0]), *np.percentile(res[:, 0], [16, 84]), np.median(res[:, 1]), *np.percentile(res[:, 1], [16, 84]), real_nomix, (res[:, 1] >= real_nomix).mean()), flush=True)
