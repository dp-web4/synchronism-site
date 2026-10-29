#!/usr/bin/env python3
"""Supplement (NOT registered; descriptive): (1) finer gas grid for statistic B+gas; (2) Ups free (flat, 0.05-5)
with gas prior — the 'M/L-unconditional' reading of ledger 2026-07-30; (3) Ups free AND gas free (census-free)."""
import numpy as np
import test10_full_error_propagation as T

def prof(arr, m, ups_free, gas_sig, nG=49):
    r, vobs, ev, vg, vd, vb = arr.T
    D = np.maximum(m["D"] + m["eD"] * np.linspace(-4, 4, 81), 0.2 * m["D"])
    inc = np.clip(m["inc"] + m["einc"] * np.linspace(-4, 4, 81), 10, 90)
    pD = ((D - m["D"]) / m["eD"]) ** 2; pI = ((inc - m["inc"]) / m["einc"]) ** 2
    ups_grid = np.geomspace(0.05, 5, 41) if ups_free else 10 ** (np.log10(0.5) + 0.1 * np.linspace(-4, 4, 33))
    lg = np.linspace(-0.4, 0.4, nG) if gas_sig else np.zeros(1)
    best = (np.inf, None)
    for l in lg:
        sg = 10 ** l; pg = (l / gas_sig) ** 2 if gas_sig else 0
        for ups in ups_grid:
            pu = 0 if ups_free else ((np.log10(ups / 0.5)) / 0.1) ** 2
            vb2 = T.vbar2(vg, vd, vb, ups, sg)
            vpred = np.sqrt(np.clip(T.BMAX * vb2[None, None, :] * (D / m["D"])[:, None, None], 0, None))
            vo = vobs[None, None, :] * (np.sin(np.radians(m["inc"])) / np.sin(np.radians(inc)))[None, :, None]
            chi = ((np.clip(vo - vpred, 0, None) / ev) ** 2).sum(-1)
            tot = chi + pD[:, None] + pI[None, :] + pu + pg
            k = np.unravel_index(np.argmin(tot), tot.shape)
            if tot[k] < best[0]:
                best = (tot[k], (round(D[k[0]], 2), round(inc[k[1]], 1), round(ups, 2), round(sg, 2), round(chi[k], 1)))
    return best

meta, mm = T.load_meta(), T.load_mm()
names = ["NGC2915","NGC3741","ESO444-G084","NGC3109","D631-7","UGCA442","F571-8","UGC06667","NGC0024","DDO154",
         "UGC00731","UGC05764","UGCA444"]
print(f"{'galaxy':13s} {'B+gas fine':>22s} | {'Ups free + gas prior':>32s} | {'Ups free, no gas nuisance':>30s}")
for n in names:
    m = meta[n]; arr = mm[n]; arr = arr[arr[:, 2] > 0]
    a = prof(arr, m, False, 0.1); b = prof(arr, m, True, 0.1); c = prof(arr, m, True, 0)
    print(f"{n:13s} {a[0]:6.1f} {str(a[1][2:4]):>15s} | {b[0]:6.1f} {str(b[1]):>25s} | {c[0]:6.1f} {str(c[1]):>23s}")

# (4) Census thresholds: smallest Ups_disk (gas = 1) and smallest gas multiplier (Ups under its 0.1 dex prior)
#     that bring the profiled chi^2 (D, i under priors) below 1.
def needed(arr, m, which):
    r, vobs, ev, vg, vd, vb = arr.T
    D = np.maximum(m["D"] + m["eD"] * np.linspace(-4, 4, 81), 0.2 * m["D"])
    inc = np.clip(m["inc"] + m["einc"] * np.linspace(-4, 4, 81), 10, 90)
    pD = ((D - m["D"]) / m["eD"]) ** 2; pI = ((inc - m["inc"]) / m["einc"]) ** 2
    vo = vobs[None, None, :] * (np.sin(np.radians(m["inc"])) / np.sin(np.radians(inc)))[None, :, None]
    for x in np.geomspace(0.5 if which == "ups" else 1.0, 50, 400):
        best = np.inf
        ugrid = [x] if which == "ups" else 10 ** (np.log10(0.5) + 0.1 * np.linspace(-4, 4, 33))
        for ups in ugrid:
            pu = 0 if which == "ups" else (np.log10(ups / 0.5) / 0.1) ** 2
            sg = 1.0 if which == "ups" else x
            vb2 = T.vbar2(vg, vd, vb, ups, sg)
            vpred = np.sqrt(np.clip(T.BMAX * vb2[None, None, :] * (D / m["D"])[:, None, None], 0, None))
            chi = ((np.clip(vo - vpred, 0, None) / ev) ** 2).sum(-1)
            best = min(best, (chi + pD[:, None] + pI[None, :] + pu).min())
        if best < 1:
            return x
    return np.inf

print("\ncensus thresholds (chi2<1, D and i profiled under SPARC priors):")
print(f"{'galaxy':13s} {'Ups_disk needed (gas x1)':>26s} {'gas x needed (Ups~0.5±0.1dex)':>31s}  gas frac of V_bar^2 (outer)")
for n in names:
    m = meta[n]; arr = mm[n]; arr = arr[arr[:, 2] > 0]
    o = arr[-3:]; gfrac = (o[:, 3] * np.abs(o[:, 3])).sum() / T.vbar2(o[:, 3], o[:, 4], o[:, 5], 0.5).sum()
    print(f"{n:13s} {needed(arr, m, 'ups'):26.2f} {needed(arr, m, 'gas'):31.2f}  {gfrac:.2f}")
