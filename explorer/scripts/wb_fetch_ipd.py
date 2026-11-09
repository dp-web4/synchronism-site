#!/usr/bin/env python3
"""Fetch Gaia DR3 purity columns for fiducial pairs with g<3, plus a random 4000 pairs at g>=3, from the ARI Heidelberg TAP mirror. Public catalogue, ids only.
argv: real_csv out_csv"""
import csv
import sys
import time
import urllib.parse
import urllib.request
import numpy as np
import wb_real_vs_mock_2d as R

path, out = sys.argv[1], sys.argv[2]
rows = list(csv.DictReader(open(path)))
D = R.load(path)
Q = R.derive(D)
RU = np.maximum(D["ruwe1"], D["ruwe2"])
base = (D["R_chance"] < 0.01) & (RU < 1.4) & (Q["sv"] < 0.10) & (Q["d"] < 200)
rng = np.random.default_rng(3)
hi = np.where(base & (Q["g"] >= 3))[0]
sel = np.r_[np.where(base & (Q["g"] < 3))[0], rng.choice(hi, 4000, replace=False)]
ids = sorted({rows[i]["source_id1"] for i in sel} | {rows[i]["source_id2"] for i in sel})
print("pairs", len(sel), "sources", len(ids), flush=True)
URL = "https://gaia.ari.uni-heidelberg.de/tap/sync"
COLS = "source_id,ipd_frac_multi_peak,ipd_gof_harmonic_amplitude,non_single_star,rv_nb_transits,rv_chisq_pvalue,rv_amplitude_robust,astrometric_excess_noise_sig,visibility_periods_used,astrometric_n_good_obs_al"
with open(out, "w") as f:
    head = False
    for st in range(0, len(ids), 300):
        chunk = ids[st:st + 300]
        q = "SELECT %s FROM gaiadr3.gaia_source WHERE source_id IN (%s)" % (COLS, ",".join(chunk))
        data = urllib.parse.urlencode(dict(REQUEST="doQuery", LANG="ADQL", FORMAT="csv", QUERY=q)).encode()
        for attempt in range(4):
            try:
                txt = urllib.request.urlopen(urllib.request.Request(URL, data=data), timeout=120).read().decode()
                if txt.startswith("source_id"):
                    break
            except Exception as ex:
                txt = "ERR %s" % ex
            time.sleep(5)
        ls = txt.strip().split("\n")
        if not ls[0].startswith("source_id"):
            print("failed chunk", st, ls[0][:100], flush=True)
            continue
        if not head:
            f.write(ls[0] + "\n")
            head = True
        f.write("\n".join(ls[1:]) + "\n")
        f.flush()
        if st % 3000 == 0:
            print("done", st, flush=True)
