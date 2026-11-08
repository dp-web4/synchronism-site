#!/usr/bin/env python3
"""Real-row table for PREREG 704cd42: identity controls P3, decomposition P4, sign P2, kernel P8. argv: gaia_csv chae_csv"""
import sys
import numpy as np
import wb_estimators as W

DS = sys.argv[3]
S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", DS)
print("dataset", DS, "N systems", len(S))
if DS == "v4":
    vm = np.array([np.linalg.norm(s["v_c"]) for s in S]); vt = np.array([s["v_tab"] for s in S])
    print(" v_3D mine vs Table 3: median ratio %.3f, max |ln| %.3f, worst id %d" % (np.median(vm / vt), np.abs(np.log(vm / vt)).max(), S[int(np.argmax(np.abs(np.log(vm / vt))))]["id"]))

print("\n--- data checks: my eta vs the CSV's v_obs/v_esc column")
eta = np.array([np.linalg.norm(s["v_c"]) / np.sqrt(2 * W.GMSUN_KAU * s["M"] / s["s"]) for s in S])
csv = np.array([s["eta_csv"] for s in S])
print(" median ratio mine/csv %.3f, 16-84 [%.3f, %.3f]; max |ln| %.3f" % (np.median(eta / csv), *np.percentile(eta / csv, [16, 84]), np.abs(np.log(eta / csv)).max()))
print(" n(central eta>1): mine %d, csv %d; csv eta-2sig>1: %d, eta-3sig>1: %d" % ((eta > 1).sum(), (csv > 1).sum(), ((csv - 2 * np.array([s['eta_err'] for s in S])) > 1).sum(), ((csv - 3 * np.array([s['eta_err'] for s in S])) > 1).sum()))
print(" id eta_mine eta_csv err M s_kau v_ms")
for i in np.argsort(-csv)[:10]:
    s = S[i]
    print(" %3d %.3f %.2f %.2f %.2f %.2f %.0f %s" % (s["id"], eta[i], csv[i], s["eta_err"], s["M"], s["s"], np.linalg.norm(s["v_c"]), s["rv_source"]))

print("\n--- configurations on real rows (median [16, 84] of gamma)")
res = {}
for name, cfg in W.CONFIGS.items():
    tot = np.zeros_like(W.GAMMA_GRID)
    per = []
    for s in S:
        l = W.lnL_system(s, cfg)
        per.append(l)
        tot += l
    res[name] = np.array(per)
    g, q = W.posterior_summary(tot)
    print(" %-14s gamma %.3f [%.3f, %.3f]  Gamma %.3f" % (name, g[1], g[0], g[2], q[1]))

print("\n--- one-knob walks from st_geom to st_base (kernel coded unless stated)")


def run(cfg, **kw):
    t = sum(W.lnL_system(s, cfg, **kw) for s in S)
    g, q = W.posterior_summary(t)
    return "%.3f [%.3f, %.3f]" % (g[1], g[0], g[2])


base = dict(sig="exact", q=W.q_opik, rng=False, z=False, kern="coded")
print(" geom                        ", run(base))
print(" + a-range only (Opik)       ", run({**base, "rng": True}))
print(" + BPL + range, exact s      ", run({**base, "q": W.q_bpl, "rng": True}))
print(" + BPL + range, s true sigma ", run({**base, "sig": "true", "q": W.q_bpl, "rng": True}))
for sg in ["0.01", "0.05", "0.1", "0.2", "0.5", "1.0", "coded"]:
    print(" + BPL + range, sigma_s=%-5s " % sg, run({**base, "sig": sg, "q": W.q_bpl, "rng": True}))
print(" Opik + no range, sigma_s=coded", run({**base, "sig": "coded"}))
print(" Opik + range, sigma_s=coded   ", run({**base, "sig": "coded", "rng": True}))

print("\n--- P8: kernel swap at exact s, Opik, no z")
g0 = dict(sig="exact", q=W.q_opik, rng=False, z=False, kern="gauss")
print(" gaussian table sigma         ", run(g0))
print(" coded kernel (t5, 40, vsys)  ", run({**g0, "kern": "coded"}))
cw = dict(use_vsys=False)
print(" coded, no vsys (raw diffs)   ", run({**g0, "kern": "coded"}, coded_kw=cw))
print(" coded, no vsys, Gaussian RV  ", run({**g0, "kern": "coded"}, coded_kw=dict(use_vsys=False, rv_gauss=True)))
print(" coded with vsys, Gaussian RV ", run({**g0, "kern": "coded"}, coded_kw=dict(rv_gauss=True)))
vs = np.array([np.sqrt(((30e3 * s["B"]) ** 2).sum(1)) for s in S])
print(" v_sys-induced noise (m/s) E,N,R: median", np.median(vs, axis=0).round(0), " max", vs.max(axis=0).round(0), " median table sE", round(float(np.median([s["sE"] for s in S])), 1))
print("\n--- baseline without the free v_sys (t5 kept)")
for sg in ["exact", "0.05", "coded"]:
    print(" sigma_s=%-6s BPL+range no vsys " % sg, run({**base, "sig": sg, "q": W.q_bpl, "rng": True}, coded_kw=cw))
print(" sigma_s=coded, no vsys, Gaussian RV ", run({**base, "sig": "coded", "q": W.q_bpl, "rng": True}, coded_kw=dict(use_vsys=False, rv_gauss=True)))
print(" pm_jit marginal sensitivity (st_base): ", end="")
for pj in [0.0, 0.02, 0.05, 0.1]:
    print("%.2f:%s " % (pj, run(W.CONFIGS["st_base"], pm_jit=pj)), end="")
print()
print(" pm_jit (st_geom): ", end="")
for pj in [0.0, 0.02, 0.05, 0.1]:
    print("%.2f:%s " % (pj, run(W.CONFIGS["st_geom"], pm_jit=pj)), end="")
print()

print("\n--- leave-out: chae configuration")
ids = [s["id"] for s in S]
tot = res["chae"].sum(0)
for drop in [(3,), (59,), (3, 59)]:
    t = tot - sum(res["chae"][ids.index(d)] for d in drop)
    g, q = W.posterior_summary(t)
    print(" drop %s: gamma %.3f [%.3f, %.3f] Gamma %.3f" % (drop, g[1], g[0], g[2], q[1]))

print("\n--- per-system contribution to ln L(gamma=1.56) - ln L(gamma=1) (top and bottom), chae and st_base")
i1, i2 = np.argmin(abs(W.GAM - 1.0)), np.argmin(abs(W.GAM - 1.56))
for nm in ["chae", "st_geom", "st_base"]:
    d = res[nm][:, i2] - res[nm][:, i1]
    o = np.argsort(-d)
    print(" %s total %.2f; top:" % (nm, d.sum()), [(S[k]["id"], round(d[k], 2)) for k in o[:5]], "bottom:", [(S[k]["id"], round(d[k], 2)) for k in o[-3:]])
print("\n per-system Gamma: mine(chae) vs csv Gamma (peak)")
pk = W.GAMMA_GRID[np.argmax(res["chae"], axis=1)]
csvG = np.array([s["Gamma_csv"] for s in S])
print(" corr %.3f  median diff %.3f" % (np.corrcoef(pk, csvG)[0, 1], np.median(pk - csvG)))
vm = np.array([np.linalg.norm(s["v_c"]) for s in S])
if DS == "v4":
    print(" worst v mismatch:", [(S[k]["id"], round(vm[k]), S[k]["v_tab"]) for k in np.argsort(-np.abs(np.log(vm / np.array([s["v_tab"] for s in S]))))[:4]])
