#!/usr/bin/env python3
"""Post-hoc: does the g<0.3 rise survive Cookson-style purity cuts, using Gaia DR3 columns fetched by wb_fetch_ipd.py? Same E2/E1 pipeline. Each rung is cumulative.
Prints the per-bin reading and, for the same rung, the Newton+HC expectation is NOT recomputed here (see wb_2d_forward_mock). argv: real_csv ipd_csv [nboot]"""
import csv
import sys
import numpy as np
import wb_real_vs_mock_2d as R

path, ipdp = sys.argv[1], sys.argv[2]
NB = int(sys.argv[3]) if len(sys.argv) > 3 else 150
D = R.load(path)
rows = list(csv.DictReader(open(path)))
Q = R.derive(D)
I = {r["source_id"]: r for r in csv.DictReader(open(ipdp))}


def col(name, sid_key, default=np.nan):
    out = np.full(len(rows), default, float)
    for i, r in enumerate(rows):
        x = I.get(r[sid_key])
        if x is not None and x[name] not in ("", "null"):
            out[i] = float(x[name])
    return out


ipd1, ipd2 = col("ipd_frac_multi_peak", "source_id1"), col("ipd_frac_multi_peak", "source_id2")
nss1, nss2 = col("non_single_star", "source_id1"), col("non_single_star", "source_id2")
pv1, pv2 = col("rv_chisq_pvalue", "source_id1"), col("rv_chisq_pvalue", "source_id2")
amp1, amp2 = col("rv_amplitude_robust", "source_id1"), col("rv_amplitude_robust", "source_id2")
hg1, hg2 = col("ipd_gof_harmonic_amplitude", "source_id1"), col("ipd_gof_harmonic_amplitude", "source_id2")
MG1 = np.array([float(r["MagG1"]) if r["MagG1"] else np.nan for r in rows])
MG2 = np.array([float(r["MagG2"]) if r["MagG2"] else np.nan for r in rows])
BR1 = np.array([float(r["bp_rp1"]) if r["bp_rp1"] else np.nan for r in rows])
BR2 = np.array([float(r["bp_rp2"]) if r["bp_rp2"] else np.nan for r in rows])


def ms_excess(mg, br):
    e = np.arange(0.4, 4.2, 0.1)
    c = 0.5 * (e[:-1] + e[1:])
    med = np.array([np.nanmedian(mg[(br >= a) & (br < b)]) if ((br >= a) & (br < b)).sum() > 20 else np.nan for a, b in zip(e[:-1], e[1:])])
    k = np.isfinite(med)
    return np.interp(br, c[k], med[k]) - mg


X1, X2 = ms_excess(MG1, BR1), ms_excess(MG2, BR2)
OKC = (np.nan_to_num(X1, nan=9) < 0.4) & (np.nan_to_num(X2, nan=9) < 0.4)
RU = np.maximum(D["ruwe1"], D["ruwe2"])
have = np.isfinite(ipd1) & np.isfinite(ipd2)
b0 = (D["R_chance"] < 0.01) & (RU < 1.4) & (Q["sv"] < 0.10) & (Q["d"] < 200) & have
ladder = [("fiducial, fetched subset", b0)]
m = b0 & (ipd1 == 0) & (ipd2 == 0)
ladder.append(("+ ipd_frac_multi_peak=0", m))
m = m & (nss1 == 0) & (nss2 == 0)
ladder.append(("+ non_single_star=0", m))
m = m & (RU < 1.25)
ladder.append(("+ RUWE<1.25", m))
m = m & OKC
ladder.append(("+ CMD 0.4 mag", m))
mk = m & ~((pv1 < 0.01) | (pv2 < 0.01))
ladder.append(("+ no RVS variable (p<0.01)", mk))
m2 = m & (Q["d"] <= 130)
ladder.append(("CMD rung + d<=130", m2))
m3 = m2 & (Q["s"] >= 1) & (Q["s"] < 30)
ladder.append(("+ s 1-30 kau (Cookson-like)", m3))
m4 = m & (Q["d"] < 100)
ladder.append(("CMD rung + d<100", m4))
Z = {k: R.ZONES[k] for k in ("g<0.3", "g 0.3-0.6", "g 0.6-1", "g 1-3", "g>3")}
rng = np.random.default_rng(1212)
for lb, mm in ladder:
    for kind in ("chae_sdep", "thermal"):
        for nm, tr in (("E2", R.SQ2), ("E1", np.inf)):
            r = R.zone_stats(D, Q, mm, Z, kind, tr, rng, NB)
            be, sb, _ = R.slope(r, Q, mm)
            print("%-30s %-9s %s " % (lb, kind, nm) + " ".join("%s %.2f±%.2f(%d)" % (k.replace(" ", ""), r[k]["gam"], r[k]["sd"], r[k]["n"]) for k in Z) + "  beta %.3f±%.3f" % (be, sb), flush=True)
