#!/usr/bin/env python3
"""Arms C and D of PREREG c31d20e: the plan's section B instrument (wb_estimators likelihood, exact s, no z, Gaussian kernel) on S1.
Truths: newton; newton+HC (forward-model kicks and mass bias per system); flat (EFE-dominated); efe_free (simple nu).
Statistics: per-bin gamma, pooled g<1, trend beta across the three low bins, calibration bin. Frequency of each outcome row.
Also: real 36 rows; 36 rows with physical kick mixture at physical f; DR4 proper-motion errors /3.
argv: gaia_csv chae_csv tables nmocks nproc"""
import sys
import numpy as np
from multiprocessing import Pool
import wb_estimators as W
import wb_hidden_companions as H

S0 = W.load(sys.argv[1], sys.argv[2], sys.argv[3], "v4")
NM = int(sys.argv[4])
NP = int(sys.argv[5])
G_UNIT = 1.32712440018e20 / (1.495978707e14) ** 2 / 1e-10
EDGES = [0, 0.3, 0.6, 1.0, 3.0, 1e9]
KERN = W.Kernel(n=3000, seed=31)
GAM = W.GAM
LN = np.log(GAM)
for sd in S0:
    sd["g"] = G_UNIT * sd["M"] / sd["s"] ** 2
    sd["Gt"] = W.build_G(sd["s"], W.q_opik, None, None, None)
    # apparent G from a rough M-L: only sets the astrometric noise, flat below G=13
    sd["G"] = 4.8 + 10 * np.log10(1.0 / (0.5 * sd["M"])) + 5 * np.log10(sd["d"] / 10)
GS = np.array([s["g"] for s in S0])
print("S1 g_N (1e-10 m/s^2) sorted:", np.round(np.sort(GS), 2))
print("plan bin counts (<0.3, .3-.6, .6-1, 1-3, >3):", np.histogram(GS, EDGES)[0], " v_r sigma median %.0f m/s; PM sigma median %.0f m/s" % (np.median([s["rv_sig"] for s in S0]), np.median([s["sE"] for s in S0])))


def nu(y):
    return 0.5 + np.sqrt(0.25 + 1 / y)


TR = {"newton": lambda g: 1.0, "flat": lambda g: float(np.interp(np.log(g), np.log([1.0, 10.0]), [1.38, 1.03])), "efe_free": lambda g: float(nu(g / 1.2))}

# Pools of surviving companions per system, for F-weighted mixtures (RV cut applied with probability 21/36, as in Chae+'s stable subset)
POOL = []
FRAC = {}


def make_pools(F=0.3, q_mode="flat"):
    rng = np.random.default_rng(5150)
    pools = []
    fs = []
    for sd in S0:
        n = 30000
        Mh = np.full(n, 0.5 * sd["M"])
        o = H.forward(rng, Mh, np.full(n, sd["d"]), np.full(n, sd["G"]), s_kau=np.full(n, sd["s"]), q_mode=q_mode)
        rv = rng.uniform(0, 1, n) < 21 / 36
        k0, _ = H.cuts(o)
        k1, _ = H.cuts(o, rv_stable=100.0)
        k = np.where(rv, k1, k0)
        surv = k.mean()
        pure = (o["ruwe_plain"] < 1.25).mean()
        comp = 2 * F * (1 - F) * surv * pure
        f = comp / (comp + (1 - F) ** 2 * pure**2)
        sgn = rng.choice([-1.0, 1.0], k.sum())
        pools.append(dict(kE=o["k_pm"][k, 0] * sgn, kN=o["k_pm"][k, 1] * sgn, kR=o["rv0"][k] * sgn, Mfac=(o["Mt"][k] + 0.5 * sd["M"]) / sd["M"]))
        fs.append(f)
    return pools, np.array(fs)


def mock_v(sd, gam, rng, sig_pm_scale=1.0):
    while True:
        r, v = W.kepler_unit(rng, 1, 1.0)
        r, v = r[0], v[0]
        g = np.hypot(r[0], r[1])
        return v * np.sqrt(gam * W.GMSUN_KAU * sd["M"] * np.exp(0.05 * rng.standard_normal()) * g / sd["s"])


def catalog(S, truth, rng, pools=None, fs=None, idx=None, pm_scale=1.0):
    vs = []
    for j, sd in zip(idx, S):
        gam = TR[truth](sd["g"])
        vv = mock_v(sd, gam, rng)
        if pools is not None and rng.uniform() < fs[j]:
            p = pools[j]
            i = rng.integers(0, len(p["kE"]))
            vv = vv * np.sqrt(p["Mfac"][i]) + np.array([p["kE"][i], p["kN"][i], p["kR"][i]])
        vs.append(vv + np.array([sd["sE"] * pm_scale, sd["sN"] * pm_scale, sd["rv_sig"]]) * rng.standard_normal(3))
    return vs


def lnL_all(S, vs, pm_scale=1.0):
    out = np.zeros((len(S), len(GAM)))
    for j, (sd, v) in enumerate(zip(S, vs)):
        s2 = dict(sd)
        s2["sE"], s2["sN"] = sd["sE"] * pm_scale, sd["sN"] * pm_scale
        d = W.draws_gauss(s2, v, kern=KERN)
        out[j] = W.log_L_curve(*d, *sd["Gt"])
    return out


def post(lnL):
    """median, sd of ln gamma; None if empty."""
    if lnL.shape[0] == 0:
        return None
    t = lnL.sum(0)
    p = np.exp(t - t.max())
    p = p / p.sum()
    m = (p * LN).sum()
    sd = np.sqrt((p * (LN - m) ** 2).sum())
    return m, sd


def stats(S, L):
    g = np.array([s["g"] for s in S])
    b = np.digitize(g, EDGES) - 1
    per = [post(L[b == k]) for k in range(5)]
    low = post(L[g < 1.0])
    # trend: weighted fit over low bins that exist
    gm = [np.median(g[b == k]) if (b == k).any() else np.nan for k in range(5)]
    xs, ys, ss = [], [], []
    for k in range(3):
        if per[k] is not None:
            xs.append(np.log(gm[k]))
            ys.append(per[k][0])
            ss.append(per[k][1])
    beta, sb = np.nan, np.nan
    if len(xs) >= 2:
        xs, ys, ss = np.array(xs), np.array(ys), np.array(ss)
        w = 1 / ss**2
        xb = (w * xs).sum() / w.sum()
        den = (w * (xs - xb) ** 2).sum()
        beta = (w * (xs - xb) * ys).sum() / den
        sb = 1 / np.sqrt(den)
    return dict(per=per, low=low, beta=beta, sb=sb)


def rows(st):
    m, s = st["low"]
    lo, hi = m - 2 * s, m + 2 * s
    cal = st["per"][4]
    calibrated = cal is None or abs(cal[0]) < 2 * cal[1]
    r = dict(cal_fail=not calibrated,
             null=(lo <= 0) and (hi < np.log(1.2)),
             boost=(lo > 0) and (hi >= np.log(1.3)) and (lo <= np.log(1.5)),
             trend_rise=(st["beta"] / st["sb"] < -2) if np.isfinite(st["beta"]) else False,
             trend_flat_level=((abs(st["beta"] / st["sb"]) < 2) and (lo > 0)) if np.isfinite(st["beta"]) else False)
    return r


def job(args):
    truth, N, hc, k, pm = args
    rng = np.random.default_rng(1000 + k + 7919 * N + (31 if hc else 0) + {"newton": 0, "flat": 1, "efe_free": 2}[truth] * 101 + int(100 * pm))
    idx = rng.integers(0, len(S0), N) if N != len(S0) else np.arange(N)
    S = [S0[i] for i in idx]
    vs = catalog(S, truth, rng, POOL if hc else None, FRAC.get("f") if hc else None, idx, pm)
    L = lnL_all(S, vs, pm)
    st = stats(S, L)
    return st["low"][0], st["low"][1], st["beta"], st["sb"], rows(st), [p[0] if p else np.nan for p in st["per"]]


def report(lb, res):
    lev = np.array([x[0] for x in res])
    sl = np.array([x[1] for x in res])
    be = np.array([x[2] for x in res])
    sb = np.array([x[3] for x in res])
    rr = [x[4] for x in res]
    per = np.array([x[5] for x in res])
    print("%-34s n=%3d  pooled g<1 gamma med %.3f (sd over cats %.3f, mean post sd %.3f in ln) | beta mean %+.3f sd %.3f, mean formal %.3f | P(cal fail) %.2f P(null row) %.2f P(boost row) %.2f P(trend rises >=2s) %.2f P(flat+level) %.2f | per-bin med γ %s" % (
        lb, len(res), np.exp(np.median(lev)), np.std(lev), np.mean(sl), np.nanmean(be), np.nanstd(be), np.nanmean(sb), np.mean([r["cal_fail"] for r in rr]), np.mean([r["null"] for r in rr]), np.mean([r["boost"] for r in rr]), np.mean([r["trend_rise"] for r in rr]), np.mean([r["trend_flat_level"] for r in rr]), np.round(np.exp(np.nanmedian(per, axis=0)), 2)), flush=True)


POOL, FRAC["f"] = make_pools()
print("physical f per system at F=0.3 (RV cut with prob 21/36): median %.3f range %.3f-%.3f; surviving kick median by system %.0f m/s" % (np.median(FRAC["f"]), FRAC["f"].min(), FRAC["f"].max(), np.median([np.median(np.hypot(p["kE"], p["kN"])) for p in POOL])))

if __name__ == "__main__":
    print("\n=== D. REAL 36 rows (v4 inputs), plan's statistics")
    Lr = lnL_all(S0, [s["v_c"] for s in S0])
    st = stats(S0, Lr)
    print(" pooled g<1: gamma %.3f (ln sd %.3f); beta %+.3f ± %.3f; per-bin γ %s; ln-sd %s; rows %s" % (np.exp(st["low"][0]), st["low"][1], st["beta"], st["sb"], [round(float(np.exp(p[0])), 2) if p else None for p in st["per"]], [round(float(p[1]), 2) if p else None for p in st["per"]], rows(st)))
    print(" pooled all 36: gamma %.3f (ln sd %.3f)" % (np.exp(post(Lr)[0]), post(Lr)[1]))
    print("\n=== C. Mocks")
    arms = [("newton", 36, False), ("newton", 36, True), ("flat", 36, False), ("efe_free", 36, False), ("newton", 150, False), ("newton", 150, True), ("flat", 150, False), ("efe_free", 150, False), ("newton", 500, False), ("newton", 500, True), ("flat", 500, False), ("efe_free", 500, False)]
    with Pool(NP) as P:
        for truth, N, hc in arms:
            nm = NM if N == 36 else (NM // 2 if N == 150 else NM // 4)
            res = P.map(job, [(truth, N, hc, k, 1.0) for k in range(nm)], chunksize=2)
            report("%s%s N=%d" % (truth, "+HC(F=.3)" if hc else "", N), res)
        print("\n=== E. DR4 precision on S1: PM errors x 1/3 at fixed RV errors")
        for truth, hc in (("newton", False), ("flat", False)):
            res = P.map(job, [(truth, 36, hc, k, 1 / 3) for k in range(NM)], chunksize=2)
            report("%s N=36, PM err/3" % truth, res)
