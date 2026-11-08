#!/usr/bin/env python3
"""Why does my Chae-kernel arm give Gamma 0.137 against the paper's 0.102? Per-system medians on a wide grid vs Table 2. argv: gaia chae"""
import sys
import numpy as np
import wb_estimators as W

W.GAMMA_GRID = np.linspace(-1.0, 1.0, 401)
W.GAM = 10 ** (2 * W.GAMMA_GRID)
S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", "v4")
cfg = W.CONFIGS["chae"]
L = np.array([W.lnL_system(s, cfg) for s in S])
G = W.GAMMA_GRID
med = []
for l in L:
    p = np.exp(l - l.max())
    c = np.cumsum(p) / p.sum()
    med.append(np.interp(0.5, c, G))
med = np.array(med)
tab = np.array([s["Gamma_csv"] for s in S])
print("id  mine_median  table  diff  eta  sigR  z_obs/s sig_z/s")
for k in np.argsort(med - tab):
    s = S[k]
    print("%3d %7.3f %7.3f %7.3f  %.2f %5.0f %7.2f %7.2f" % (s["id"], med[k], tab[k], med[k] - tab[k], s["eta_csv"], s["rv_sig"], s["z_obs"] / s["s"], s["sig_z"] / s["s"]))
print("median diff %.3f, mean %.3f, rms %.3f" % (np.median(med - tab), np.mean(med - tab), np.std(med - tab)))


def conflate(lnL):
    t = lnL.sum(0)
    p = np.exp(t - t.max())
    c = np.cumsum(p) / p.sum()
    q = np.interp([0.023, 0.16, 0.5, 0.84, 0.977], c, G)
    return q


print("\nconsolidated Gamma (2.3, 16, 50, 84, 97.7 pct):", conflate(L).round(3))
# What the paper's published per-system PDFs imply: split-Gaussian product of the Table 2 Gamma only needs widths; use my widths around the table's medians.
shifted = np.array([np.interp(G, G + (tab[i] - med[i]), L[i], left=-700, right=-700) for i in range(len(S))])
print("my PDFs shifted to Table 2 medians:", conflate(shifted).round(3))
# Sensitivity: floor each per-system PDF (a finite-sample histogram cannot represent tails below ~1/N_samples)
for fl in [1e-3, 1e-4, 1e-6, 1e-8]:
    Lf = np.array([np.log(np.exp(l - l.max()) + fl) for l in L])
    print(" PDF floor %.0e relative to peak: Gamma" % fl, conflate(Lf).round(3))
ids = [s["id"] for s in S]
for drop in [(3,), (59,), (3, 59)]:
    keep = [i for i in range(len(S)) if S[i]["id"] not in drop]
    print(" drop", drop, conflate(L[keep]).round(3), " floor1e-4:", conflate(np.array([np.log(np.exp(L[i] - L[i].max()) + 1e-4) for i in keep])).round(3))
# g_N split, as in the paper
gN = np.array([W.GMSUN_KAU * s["M"] / s["s"] ** 2 / 1.495978707e14 for s in S])
print(" log gN(s) range %.2f to %.2f" % (np.log10(gN).min(), np.log10(gN).max()))
print(" n with gN(s) < 10^-9.5:", (np.log10(gN) < -9.5).sum(), conflate(L[np.log10(gN) < -9.5]).round(3))
