#!/usr/bin/env python3
"""Does the consolidated Gamma follow from the published per-system entries? Split-normal product from the S&T CSV's Gamma columns (Chae v1 era),
and comparison of my per-system widths to those columns. argv: gaia chae"""
import csv
import sys
import numpy as np
import wb_estimators as W

G = np.linspace(-1, 1, 2001)
rows = list(csv.DictReader(open(sys.argv[1])))
ids = [int(r["chae_id"]) for r in rows]
med = np.array([float(r["Gamma"]) for r in rows])
up = np.array([float(r["Gamma_err_upper"]) for r in rows])
lo = np.array([abs(float(r["Gamma_err_lower"])) for r in rows])
print("CSV (v1-era) medians %s; upper-err median %.3f; lower-err median %.3f" % (np.round(np.median(med), 3), np.median(up), np.median(lo)))


def consol(idx, sc=1.0):
    t = np.zeros_like(G)
    for i in idx:
        s = np.where(G > med[i], up[i] * sc, lo[i] * sc)
        t += -0.5 * ((G - med[i]) / s) ** 2 - np.log(up[i] * sc + lo[i] * sc)
    p = np.exp(t - t.max())
    c = np.cumsum(p) / p.sum()
    return np.interp([0.16, 0.5, 0.84], c, G).round(3)


idx = np.arange(len(rows))
print("split-normal product, table entries as 1-sigma:", consol(idx))
print("drop 3, 59:", consol([i for i in idx if ids[i] not in (3, 59)]))
print("Paper v1 abstract: 0.102 (+0.023/-...), v4: 0.102 +0.028/-0.021; without 3 and 59: 0.042")

# my posterior median and half-95% widths on the same (CSV) kernel, for the same system
W.GAMMA_GRID = np.linspace(-1, 1, 401)
W.GAM = 10 ** (2 * W.GAMMA_GRID)
S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", "st")
cfg = W.CONFIGS["chae"]
out = []
for s in S:
    l = W.lnL_system(s, cfg)
    p = np.exp(l - l.max())
    c = np.cumsum(p) / p.sum()
    q = np.interp([0.023, 0.16, 0.5, 0.84, 0.977], c, W.GAMMA_GRID)
    out.append((q[2], (q[4] - q[2]) / 2, (q[2] - q[0]) / 2, q[3] - q[2], q[2] - q[1]))
o = np.array(out)
print("mine vs CSV: median diff in Gamma %.3f, rms %.3f; my half-95 upper median %.3f, lower %.3f; my 68 upper %.3f lower %.3f" % (np.median(o[:, 0] - med), np.std(o[:, 0] - med), np.median(o[:, 1]), np.median(o[:, 2]), np.median(o[:, 3]), np.median(o[:, 4])))
print("id   mine_med csv_med | mine+ csv+ | mine- csv-")
for i in np.argsort(-np.abs(o[:, 0] - med))[:12]:
    print("%3d %7.3f %7.3f | %.3f %.3f | %.3f %.3f" % (ids[i], o[i, 0], med[i], o[i, 1], up[i], o[i, 2], lo[i]))
t = sum(W.lnL_system(s, cfg) for s in S)
p = np.exp(t - t.max())
c = np.cumsum(p) / p.sum()
print("my product on the st/v1 inputs (Gaussian kernel, z used):", np.interp([0.16, 0.5, 0.84], c, W.GAMMA_GRID).round(3))
