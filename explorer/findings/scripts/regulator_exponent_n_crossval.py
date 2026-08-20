#!/usr/bin/env python3
"""
THE DECIDING STATISTIC: does freeing the regulator exponent n predict GALAXIES IT HAS
NOT SEEN better than n = 1?

An in-sample Delta(2 lnL) computed over 2700 correlated rotation-curve points in 149
galaxies is exactly the statistic this program has already been burned by once: the
RAR "Delta BIC = +184" that became +7 once N_eff was corrected from 2807 points to 175
effective galaxies (memory: rar_deltabic_effective_n_inflated).  So the in-sample
number is reported but NOT used as the verdict.

Instead: galaxy-level K-fold cross-validation.  Fit on 90% of GALAXIES, score the
held-out 10%.  Out-of-sample log-likelihood cannot be inflated by correlated points
and cannot be bought by a parameter that only fits noise.  This is also the statistic
arXiv:2608.08945 used to conclude that one-parameter structural corrections to the RAR
in SPARC are absorbed by zero-point freedom in the full sample.

Three models, same likelihood, same data:
    M0  MOND simple-mu     gam = 1/2, n = 1, a0 free                 (1 shape param)
    M1  site equation      gam free, n = 1, a0 free                  (2 shape params)
    M2  n-extension        gam free, n free, a0 free                 (3 shape params)
M1 nests M0 (gam = 1/2 exactly reproduces mu_simple); M2 nests M1 (n = 1).
"""
import os
import sys
import json
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from regulator_exponent_n_real_sparc import (            # noqa: E402
    build_rar, fit, solve_gobs, A0_REF,
)

RNG = np.random.default_rng(20260820)


def score(gb, go, elog, gam, a0, n, sig):
    """Held-out mean log-likelihood per point (higher is better)."""
    mod = np.log10(solve_gobs(gb, gam, a0, n))
    v = elog ** 2 + sig ** 2
    d = np.log10(go) - mod
    return -0.5 * (d * d / v + np.log(2 * np.pi * v))


def kfold(gid, gb, go, elog, K=10, seed=0, start=None):
    rng = np.random.default_rng(seed)
    gals = np.unique(gid)
    rng.shuffle(gals)
    folds = np.array_split(gals, K)
    per_gal = {}
    for f in folds:
        te = np.isin(gid, f)
        tr = ~te
        specs = {
            "M0 MOND simple-mu": dict(fix={"lgam": np.log(0.5), "n": 1.0}),
            "M1 site (n=1)":     dict(fix={"n": 1.0}),
            "M2 n free":         dict(fix=None),
        }
        for name, sp in specs.items():
            r = fit(gb[tr], go[tr], elog[tr], fix=sp["fix"], start=start, nrestart=2)
            ll = score(gb[te], go[te], elog[te], r["gam"], r["a0"], r["n"], r["sig"])
            for g in f:
                m = gid[te] == g
                if m.sum():
                    per_gal.setdefault(g, {})[name] = float(ll[m].mean())
            per_gal.setdefault("__params__", {})[name] = per_gal.get(
                "__params__", {}).get(name, []) + [(r["gam"], r["a0"], r["n"], r["sig"])]
    return per_gal


def main():
    res = {}
    gid, gb, go, elog, _ = build_rar()
    base = fit(gb, go, elog)
    print("=" * 78)
    print("IN-SAMPLE (reported, NOT the verdict)")
    print("=" * 78)
    ins = {}
    for name, fx in (("M0 MOND simple-mu", {"lgam": np.log(0.5), "n": 1.0}),
                     ("M1 site (n=1)", {"n": 1.0}),
                     ("M2 n free", None)):
        r = fit(gb, go, elog, fix=fx, start=base["x"])
        k = 4 - (len(fx) if fx else 0)
        ins[name] = r
        print(f"  {name:20s}  gam={r['gam']:7.4f}  a0={r['a0']/A0_REF:6.3f} a0ref  "
              f"n={r['n']:6.4f}  sig={r['sig']:6.4f}  -lnL={r['nll']:10.2f}  k={k}")
    d21 = 2 * (ins["M1 site (n=1)"]["nll"] - ins["M2 n free"]["nll"])
    d10 = 2 * (ins["M0 MOND simple-mu"]["nll"] - ins["M1 site (n=1)"]["nll"])
    print(f"\n  Delta(2 lnL)  M1 -> M2 (freeing n)    = {d21:7.2f}   "
          f"(1 dof, naive {np.sqrt(max(d21,0)):.2f} sigma)")
    print(f"  Delta(2 lnL)  M0 -> M1 (freeing gamma) = {d10:7.2f}")
    print(f"  N points = {len(gb)}  in  {len(np.unique(gid))} galaxies  "
          f"-> points are NOT independent; see cross-validation below.")
    res["in_sample"] = {k: {kk: float(v[kk]) for kk in ("gam", "a0", "n", "sig", "nll")}
                        for k, v in ins.items()}
    res["in_sample_d2lnL_n"] = float(d21)

    print("\n" + "=" * 78)
    print("OUT-OF-SAMPLE: 10-fold cross-validation over GALAXIES, 3 independent shuffles")
    print("=" * 78)
    allg = {}
    for seed in (11, 22, 33):
        pg = kfold(gid, gb, go, elog, K=10, seed=seed, start=base["x"])
        pg.pop("__params__", None)
        for g, d in pg.items():
            allg.setdefault(g, []).append(d)
    names = ["M0 MOND simple-mu", "M1 site (n=1)", "M2 n free"]
    mean_ll = {nm: np.array([np.mean([r[nm] for r in v]) for v in allg.values()])
               for nm in names}
    gl = list(allg.keys())
    print(f"  galaxies scored: {len(gl)}\n")
    print(f"  {'model':>20} | {'mean held-out lnL/pt':>21} | {'vs M1':>9}")
    print("  " + "-" * 58)
    for nm in names:
        print(f"  {nm:>20} | {mean_ll[nm].mean():21.5f} | "
              f"{mean_ll[nm].mean()-mean_ll['M1 site (n=1)'].mean():+9.5f}")

    print("\n  --- the verdict statistic: per-galaxy paired difference M2 - M1 ---")
    d = mean_ll["M2 n free"] - mean_ll["M1 site (n=1)"]
    nb = np.array([d[i].mean() for i in RNG.integers(0, len(d), size=(5000, len(d)))])
    wins = int((d > 0).sum())
    from scipy.stats import wilcoxon, binomtest
    W = wilcoxon(d)
    B = binomtest(wins, len(d), 0.5)
    print(f"  mean  Delta lnL/pt = {d.mean():+.5f} +- {nb.std():.5f} (galaxy bootstrap)"
          f"   -> {abs(d.mean())/nb.std():.2f} sigma")
    print(f"  median Delta lnL/pt = {np.median(d):+.5f}")
    print(f"  galaxies where n-free predicts BETTER: {wins}/{len(d)} = "
          f"{wins/len(d):.3f}   binomial p = {B.pvalue:.4f}")
    print(f"  Wilcoxon signed-rank p = {W.pvalue:.4f}")
    tot = d.mean() * len(gb) / len(d) * len(d)
    print(f"\n  Total held-out 2*Delta lnL over the whole sample = "
          f"{2*d.mean()*len(gb)/len(gl)*len(gl)/len(gl)*len(gl):.2f} "
          f"(vs in-sample {d21:.2f})")
    res["cv"] = dict(mean_dll=float(d.mean()), sd=float(nb.std()),
                     median_dll=float(np.median(d)), wins=wins, N=len(d),
                     binom_p=float(B.pvalue), wilcoxon_p=float(W.pvalue),
                     ll={nm: float(mean_ll[nm].mean()) for nm in names})

    print("\n  --- same test for M1 vs M0 (does the site's gamma buy anything?) ---")
    d0 = mean_ll["M1 site (n=1)"] - mean_ll["M0 MOND simple-mu"]
    nb0 = np.array([d0[i].mean() for i in RNG.integers(0, len(d0), size=(5000, len(d0)))])
    print(f"  mean Delta lnL/pt = {d0.mean():+.5f} +- {nb0.std():.5f}  -> "
          f"{abs(d0.mean())/nb0.std():.2f} sigma;  "
          f"galaxies better: {int((d0>0).sum())}/{len(d0)}")
    res["cv_gamma"] = dict(mean_dll=float(d0.mean()), sd=float(nb0.std()),
                           wins=int((d0 > 0).sum()), N=len(d0))

    with open(os.path.join(HERE, "regulator_exponent_n_crossval_output.json"), "w") as f:
        json.dump(res, f, indent=2)
    print("\n[json written]")


if __name__ == "__main__":
    main()
