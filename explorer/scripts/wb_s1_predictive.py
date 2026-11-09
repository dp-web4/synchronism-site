#!/usr/bin/env python3
"""Posterior-predictive check of the S1 tail under physical companions: could Newton + hidden companions make the real tail, and not more than it?
Statistics: max eta, n(eta>1.26), n(eta>1), and no-mixture gamma is in wb_s1_physical_mixture. Observed: 1.67, 3, count printed.
argv: gaia_csv chae_csv tables nmocks. Variants of q and F printed. Also counts of Gaia RV precision in the catalogue if real_csv given as argv[5]."""
import csv
import sys
import numpy as np
import wb_estimators as W
import wb_hidden_companions as H

S = W.load(sys.argv[1], sys.argv[2], sys.argv[3], "v4")
NM = int(sys.argv[4])
for s in S:
    s["G"] = 4.8 + 10 * np.log10(1.0 / (0.5 * s["M"])) + 5 * np.log10(s["d"] / 10)
    s["vesc"] = np.sqrt(2 * W.GMSUN_KAU * s["M"] / s["s"])
eta_real = np.array([np.linalg.norm(s["v_c"]) / s["vesc"] for s in S])
print("real: max eta %.2f; n(eta>1.26) %d; n(eta>1) %d; n(eta>0.8) %d" % (eta_real.max(), (eta_real > 1.26).sum(), (eta_real > 1).sum(), (eta_real > 0.8).sum()))


def pools(q_mode):
    rng = np.random.default_rng(99)
    P = []
    for s in S:
        n = 40000
        o = H.forward(rng, np.full(n, 0.5 * s["M"]), np.full(n, s["d"]), np.full(n, s["G"]), s_kau=np.full(n, s["s"]), q_mode=q_mode)
        rv = rng.uniform(0, 1, n) < 21 / 36
        k0, _ = H.cuts(o)
        k1, _ = H.cuts(o, rv_stable=100.0)
        k = np.where(rv, k1, k0)
        P.append(dict(surv=k.mean(), pure=(o["ruwe_plain"] < 1.25).mean(), kv=np.column_stack([o["k_pm"][k, 0], o["k_pm"][k, 1], o["rv0"][k]]), Mf=(o["Mt"][k] + 0.5 * s["M"]) / s["M"]))
    return P


def fj(P, F):
    return np.array([2 * F * (1 - F) * p["surv"] * p["pure"] / (2 * F * (1 - F) * p["surv"] * p["pure"] + (1 - F) ** 2 * p["pure"] ** 2) for p in P])


rng = np.random.default_rng(2)
for qm in ("flat", "chae_msc"):
    P = pools(qm)
    for gam, F in ((1.0, 0.0), (1.0, 0.1), (1.0, 0.2), (1.0, 0.3), (1.0, 0.45), (1.0, 0.5), (1.4, 0.0), (1.4, 0.3), (1.6, 0.0), (1.2, 0.3), (1.2, 0.5)):
        f = fj(P, F)
        mx, n1, n2, n3 = [], [], [], []
        for _ in range(NM):
            e = []
            for j, s in enumerate(S):
                r, v = W.kepler_unit(rng, 1, 1.0)
                g = np.hypot(r[0, 0], r[0, 1])
                vv = v[0] * np.sqrt(gam * W.GMSUN_KAU * s["M"] * np.exp(0.05 * rng.standard_normal()) * g / s["s"])
                if rng.uniform() < f[j]:
                    pl = P[j]
                    q = rng.integers(0, len(pl["kv"]))
                    vv = vv * np.sqrt(pl["Mf"][q]) + rng.choice([-1.0, 1.0]) * pl["kv"][q]
                vv = vv + np.array([s["sE"], s["sN"], s["rv_sig"]]) * rng.standard_normal(3)
                e.append(np.linalg.norm(vv) / s["vesc"])
            e = np.array(e)
            mx.append(e.max())
            n1.append((e > 1.26).sum())
            n2.append((e > 1).sum())
            n3.append((e > 0.8).sum())
        mx, n1, n2, n3 = map(np.array, (mx, n1, n2, n3))
        print("q=%-8s gamma %.1f F %.2f med f %.3f | max eta med %.2f [16-84 %.2f, %.2f] P(>=real)=%.3f P(<=real)=%.3f | n(>1.26) mean %.2f P(>=3)=%.3f P(<=3)=%.3f | n(>1) mean %.2f P(>=real)=%.3f | n(>.8) mean %.1f P(>=real)=%.3f" % (
            qm, gam, F, np.median(f), np.median(mx), *np.percentile(mx, [16, 84]), (mx >= eta_real.max()).mean(), (mx <= eta_real.max()).mean(), n1.mean(), (n1 >= (eta_real > 1.26).sum()).mean(), (n1 <= (eta_real > 1.26).sum()).mean(), n2.mean(), (n2 >= (eta_real > 1).sum()).mean(), n3.mean(), (n3 >= (eta_real > 0.8).sum()).mean()), flush=True)

if len(sys.argv) > 5:
    rows = list(csv.DictReader(open(sys.argv[5])))
    e1 = np.array([float(r["RV1_err[km/s]"]) if r["RV1_err[km/s]"] else np.nan for r in rows])
    e2 = np.array([float(r["RV2_err[km/s]"]) if r["RV2_err[km/s]"] else np.nan for r in rows])
    ok = (e1 > 0) & (e2 > 0)
    h = np.hypot(e1[ok], e2[ok])
    print("Gaia DR3 RV errors, both stars present (N=%d): min per-star %.3f km/s; sigma_dRV quantiles 0.1,1,10,50%%: %s; N(sigma_dRV<0.1)=%d <0.2=%d <0.5=%d <1=%d" % (ok.sum(), min(e1[ok].min(), e2[ok].min()), np.round(np.percentile(h, [0.1, 1, 10, 50]), 3), (h < 0.1).sum(), (h < 0.2).sum(), (h < 0.5).sum(), (h < 1).sum()))
