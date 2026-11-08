#!/usr/bin/env python3
"""Mock injection (PREREG 704cd42 P5, P6, P7, P9). Mocks come from orbital elements (kepler_unit), independent of the phase-space reduction.
argv: gaia chae n_catalogs nproc"""
import sys
import time
import numpy as np
from multiprocessing import Pool
import wb_estimators as W

S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", "v4")
N = int(sys.argv[3])
NP = int(sys.argv[4])

CFG = {
    "chae": W.CONFIGS["chae"],
    "opik_noz": W.CONFIGS["opik_noz"],
    "bpl_noz": W.CONFIGS["bpl_noz"],
    "st_geom": W.CONFIGS["st_geom"],
    "robust": dict(sig="exact", q=W.q_opik, rng=False, z=False, kern="coded", kw=dict(use_vsys=False)),
    "st_base_5pc": W.CONFIGS["st_base_5pc"],
    "st_base": W.CONFIGS["st_base"],
    "st_base_novsys": dict(sig="coded", q=W.q_bpl, rng=True, z=False, kern="coded", kw=dict(use_vsys=False)),
}
ALL = list(CFG)
ARMS = []
for g in [1.0, 1.2, 1.4, 1.6]:
    ARMS.append(dict(name="opik g=%.1f" % g, gamma=g, cfgs=ALL))
for g in [1.0, 1.6]:
    ARMS.append(dict(name="BPL-truth g=%.1f" % g, gamma=g, truth="bpl", cfgs=["opik_noz", "bpl_noz", "st_base"]))
    ARMS.append(dict(name="e-alpha1.3 g=%.1f" % g, gamma=g, alpha=1.3, cfgs=["opik_noz", "chae"]))
for x in [50.0, 100.0, 200.0]:
    ARMS.append(dict(name="Newton rv_extra=%d" % x, gamma=1.0, rv_extra=x, cfgs=["chae", "opik_noz", "robust", "st_geom"]))
for f in [0.03, 0.10, 0.19]:
    ARMS.append(dict(name="Newton comp=%.2f" % f, gamma=1.0, comp_frac=f, cfgs=["chae", "opik_noz", "robust", "st_geom"]))

GT = {}


def init():
    for c in ALL:
        if not CFG[c]["z"]:
            GT[c] = [W.G_for(s, CFG[c]) for s in S]


def job(args):
    ia, k = args
    arm = ARMS[ia]
    rng = np.random.default_rng(100000 * ia + k + 7)
    cat = W.mock_catalog(S, arm["gamma"], rng, truth=arm.get("truth", "opik"), alpha=arm.get("alpha", 1.0), rv_extra=arm.get("rv_extra", 0.0), comp_frac=arm.get("comp_frac", 0.0))
    res = {}
    for c in arm["cfgs"]:
        cfg = CFG[c]
        t = np.zeros_like(W.GAMMA_GRID)
        for j, s in enumerate(S):
            m = cat[j]
            v = m["v_c"] if cfg["kern"] == "gauss" else m["v_raw"]
            Gt = GT[c][j] if c in GT else None
            t += W.lnL_system(s, cfg, v=v, Gt=Gt, zobs=m["z_obs"], coded_kw=cfg.get("kw"))
        g, q = W.posterior_summary(t)
        res[c] = g
    eta = np.array([m["eta"] for m in cat])
    return ia, k, res, (eta > 1).sum(), ((eta * (1 - 2 * np.array([np.linalg.norm([s["sE"], s["sN"], s["rv_sig"]]) / max(np.linalg.norm(s["v_c"]), 50.0) for s in S]))) > 1).sum()


if __name__ == "__main__":
    t0 = time.time()
    tasks = [(ia, k) for ia in range(len(ARMS)) for k in range(N)]
    with Pool(NP, initializer=init) as P:
        out = P.map(job, tasks, chunksize=4)
    print("catalogs per arm", N, " elapsed %.0f s" % (time.time() - t0))
    print("%-22s %-15s %8s %8s %8s %7s %7s" % ("arm", "estimator", "med g", "mean g", "std g", "cov68", "P(g>=real-ish)"))
    for ia, arm in enumerate(ARMS):
        rows = [o for o in out if o[0] == ia]
        gt = arm["gamma"]
        for c in arm["cfgs"]:
            A = np.array([r[2][c] for r in rows])
            med = A[:, 1]
            cov = ((A[:, 0] <= gt) & (gt <= A[:, 2])).mean()
            print("%-22s %-15s %8.3f %8.3f %8.3f %7.3f   frac(med>=1.6)=%.3f  frac(16pct>1)=%.3f  semean=%.3f" % (arm["name"], c, np.median(med), med.mean(), med.std(), cov, (med >= 1.6).mean(), (A[:, 0] > 1).mean(), med.std() / np.sqrt(len(med))))
        n1 = np.array([r[3] for r in rows])
        n2 = np.array([r[4] for r in rows])
        print("   count eta>1: mean %.2f  P(>=6) %.4f | eta-2sig>1: mean %.2f  P(>=4) %.4f" % (n1.mean(), (n1 >= 6).mean(), n2.mean(), (n2 >= 4).mean()))
