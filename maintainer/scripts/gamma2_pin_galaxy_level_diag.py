#!/usr/bin/env python3
"""Diagnostic (NOT pre-registered) after gamma2_pin_galaxy_level.py: (a) the gamma profile with
N -> N_gal, i.e. which gamma interval the dBIC <= 10 rule retains once the galaxy is the unit;
(b) which galaxies carry the paired excess."""
import numpy as np
from gamma2_pin_galaxy_level import load, fit_a0, tanhlog_pred, mcgaugh_pred

names, gobs, gbar = load()
N, gal = len(gobs), np.unique(names); Ngal = len(gal)
grid = sorted(set(np.round(np.arange(0.20, 0.35, 0.05), 6)) | set(np.round(np.arange(0.35, 1.2500001, 0.025), 6))
              | set(np.round(np.arange(1.3, 5.0000001, 0.1), 6)) | {0.489, 0.5, 2.0})
prof = {}
for g in grid:
    a0, s = fit_a0(gobs, gbar, lambda gb, a, g=g: tanhlog_pred(gb, a, g))
    prof[g] = (a0, s)
smin = min(s for _, s in prof.values()); gmin = min(prof, key=lambda g: prof[g][1])
print(f"profile minimum gamma = {gmin:.3f}")
print(" gamma   dChi2(N=2807)  dChi2(N_gal=166)  dChi2(N/5.6)")
for g in grid:
    d = np.log(prof[g][1] / smin)
    if g in (0.2, 0.3, 0.4, 0.425, 0.45, 0.489, 0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0):
        print(f" {g:5.3f}   {N*d:12.1f}   {Ngal*d:14.1f}   {N/5.6*d:11.1f}")
def interval(scale):
    ok = [g for g in grid if scale * np.log(prof[g][1] / smin) <= 10]
    return min(ok), max(ok)
print("retained gamma interval (dChi2 <= 10 from the free minimum):")
print(f"  N = 2807 : {interval(N)}   N/5.6 : {interval(N/5.6)}   N_gal = 166 : {interval(Ngal)}")
# vs McGaugh with N_gal
a0m, sm = fit_a0(gobs, gbar, mcgaugh_pred)
print(f"  gamma=2 vs McGaugh, N_gal: {Ngal*np.log(prof[2.0][1]/sm):+.1f};  vs free minimum, N_gal: {Ngal*np.log(prof[2.0][1]/smin):+.1f}")
# (b) galaxies carrying the excess
a0_2, _ = prof[2.0]; a0_f, _ = prof[gmin]
r2 = (np.log10(gobs) - np.log10(tanhlog_pred(gbar, a0_2, 2.0))) ** 2
rf = (np.log10(gobs) - np.log10(tanhlog_pred(gbar, a0_f, gmin))) ** 2
d = np.array([r2[names == g].sum() - rf[names == g].sum() for g in gal])
npts = np.array([(names == g).sum() for g in gal])
medx = np.array([np.median(gbar[names == g]) / a0m for g in gal])
order = np.argsort(-d)
tot = d.sum()
print(f"total paired excess (log10^2 units) = {tot:.4f}; positive-galaxy sum = {d[d>0].sum():.4f}; negative = {d[d<0].sum():.4f}")
print("top 12 galaxies by excess (share of total, n_pts, median g_bar/a0):")
cum = 0
for i in order[:12]:
    cum += d[i]
    print(f"  {gal[i]:12s} {d[i]:+.4f} ({100*d[i]/tot:5.1f}%, cum {100*cum/tot:5.1f}%)  n={npts[i]:3d}  med x={medx[i]:.2f}")
print("bottom 5 (free-gamma worse):")
for i in order[-5:]:
    print(f"  {gal[i]:12s} {d[i]:+.4f}  n={npts[i]:3d}  med x={medx[i]:.2f}")
