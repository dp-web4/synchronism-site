#!/usr/bin/env python3
"""What carries the real low-g rise? E2 (and E1) on the real catalogue split by things a contaminant should depend on and gravity should not.
Post-hoc relative to the PREREG arms, labelled so in the finding: added after seeing the g<0.3 bin. Also: chi2 of the five plan bins against each truth,
using truth curves from the same pipeline. argv: real_csv [nboot]"""
import csv
import sys
import numpy as np
import wb_real_vs_mock_2d as R

path = sys.argv[1]
NB = int(sys.argv[2]) if len(sys.argv) > 2 else 200
D = R.load(path)
rows = list(csv.DictReader(open(path)))
Q = R.derive(D, persp=True)
Qn = R.derive(D, persp=False)
RU = np.maximum(D["ruwe1"], D["ruwe2"])
base = (D["R_chance"] < 0.01) & (RU < 1.4) & (Q["sv"] < 0.10) & (Q["d"] < 200)
rv1, rv2 = D["RV1[km/s]"], D["RV2[km/s]"]
e1, e2 = D["RV1_err[km/s]"], D["RV2_err[km/s]"]
both = np.isfinite(rv1) & np.isfinite(rv2) & (np.abs(rv1) < 5000) & (np.abs(rv2) < 5000) & (e1 > 0) & (e2 > 0)
drv = np.where(both, np.abs(rv1 - rv2), np.nan)
srv = np.where(both, np.hypot(e1, e2), np.nan)
Z = {k: R.ZONES[k] for k in ("g<0.3", "g 0.3-0.6", "g 0.6-1", "g 1-3", "g>3", "test 2-30kau")}
rng = np.random.default_rng(99)


def show(lb, m, Qx=Q, kinds=("chae_sdep", "thermal")):
    for kind in kinds:
        for nm, tr in (("E2", R.SQ2),):
            r = R.zone_stats(D, Qx, m, Z, kind, tr, rng, NB)
            print("%-44s %-9s %s " % (lb, kind, nm) + " ".join("%s %.2f±%.2f(%d)" % (k.replace(" ", ""), r[k]["gam"], r[k]["sd"], r[k]["n"]) for k in Z), flush=True)


print("=== positive control of the perspective term on real data: regress observed sky dv along the separation on the predicted perspective term, g<1 pairs with RV")
# predicted term is the difference with and without correction
pe, pn = Qn["dE"] - Q["dE"], Qn["dN"] - Q["dN"]
for lo, hi in ((0, 1e-3), (1e-3, 3e-3), (3e-3, 1)):
    th = np.radians(np.hypot((D["RA2[deg]"] - D["RA1[deg]"]) * np.cos(np.radians(D["DEC1[deg]"])), D["DEC2[deg]"] - D["DEC1[deg]"]))
    m = base & Q["has_rv"] & (th >= lo) & (th < hi) & (np.hypot(pe, pn) > 20)
    x = np.r_[pe[m], pn[m]]
    y = np.r_[Qn["dE"][m], Qn["dN"][m]]
    w = np.abs(y) < 3000
    sl = np.sum(x[w] * y[w]) / np.sum(x[w] ** 2)
    print("  theta %.4f-%.4f rad: n %d median |pred| %.0f m/s  slope %.3f (1 = perspective removed correctly)" % (lo, hi, m.sum(), np.median(np.hypot(pe, pn)[m]), sl))

print("\n=== real, fiducial, baseline, then split")
show("baseline", base)
show("no perspective correction", base, Qx=Qn)
show("R_chance<0.001", base & (D["R_chance"] < 0.001))
show("d<80", base & (Q["d"] < 80))
show("80<=d<130", base & (Q["d"] >= 80) & (Q["d"] < 130))
show("130<=d<200", base & (Q["d"] >= 130))
show("has both RV, sig_dRV<1 km/s", base & both & (srv < 1))
show("both RV consistent |dRV|<3 sig (+0.3)", base & both & (drv < 3 * srv + 0.3))
show("both RV |dRV|>3 sig", base & both & (drv >= 3 * srv + 0.3))
show("no RV pair or only one", base & ~both)
show("RUWE<1.1", base & (RU < 1.1))
show("M_tot<1", base & (Q["M"] < 1))
show("M_tot>=1", base & (Q["M"] >= 1))
show("s<30 kau", base & (Q["s"] < 30))
show("s>=30 kau", base & (Q["s"] >= 30))
print("\nfraction of g<0.3 pairs with s>=30 kau: %.3f; median s %.1f kau" % ((Q["s"][base & (Q["g"] < 0.3)] >= 30).mean(), np.median(Q["s"][base & (Q["g"] < 0.3)])))
