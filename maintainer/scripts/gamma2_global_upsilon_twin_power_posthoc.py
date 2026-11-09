#!/usr/bin/env python3
"""POST-HOC power check for gamma2_global_upsilon_per_law.py (not in its PREREG). Maintainer 2026-11-09.

Question: how far apart are gamma = 2 and McGaugh's nu once each law has its own global Upsilon? Noise-free twins:
make g_obs from one law at its best real-data (Upsilon, a0), on SPARC's own radii and components, and fit the other law with Upsilon and a0 free.
RSS_twin/N is the squared model separation d^2. Expected dBIC at the data's scatter s: N ln(1 + d^2/s^2).
Galaxy-block sd of the own-Upsilon dBIC comes from the registered run (-26 to +132, so sd about 40).
Control: a twin fit with its own law returns RSS near 0.
"""
import sys, os
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from gamma2_pin_galaxy_level import tanhlog_pred, mcgaugh_pred, KPC_M, KMS
from gamma2_global_upsilon_per_law import load_rows, gbar_at

UPS = np.round(np.arange(0.35, 0.8501, 0.005), 3)
LA = np.arange(-10.6, -9.2, 0.002)
names, r, vo, vg, vd, vb = load_rows()
g5, _ = gbar_at(0.5, r, vg, vd, vb)
gm = lambda g, a: mcgaugh_pred(g, a)
g2 = lambda g, a: tanhlog_pred(g, a, 2.0)
N = len(r)
S_OBS = 0.1437
gobs_real = (vo * KMS) ** 2 / (r * KPC_M)


def fit(ly, law):
    best = (9e9, None, None)
    for u in UPS:
        gb, _ = gbar_at(u, r, vg, vd, vb)
        for la in LA[::10]:
            s = ((ly - np.log10(law(gb, 10.0**la))) ** 2).sum()
            if s < best[0]:
                best = (s, u, la)
    # refine a0
    u = best[1]
    gb, _ = gbar_at(u, r, vg, vd, vb)
    for la in np.arange(best[2] - 0.03, best[2] + 0.03, 0.0005):
        s = ((ly - np.log10(law(gb, 10.0**la))) ** 2).sum()
        if s < best[0]:
            best = (s, u, la)
    return best


ly_real = np.log10(gobs_real)
sm, um, lam = fit(ly_real, gm)
s2, u2, la2 = fit(ly_real, g2)
print(f"real: McGaugh Y={um} a0={10**lam:.3e} rms {np.sqrt(sm/N):.4f}; gamma=2 Y={u2} a0'={10**la2:.3e} rms {np.sqrt(s2/N):.4f}; dBIC {N*np.log(s2/sm):+.1f}")

for name, law_t, ut, lat, law_f in (("McGaugh truth, fit gamma=2", gm, um, lam, g2), ("gamma=2 truth, fit McGaugh", g2, u2, la2, gm)):
    gb, _ = gbar_at(ut, r, vg, vd, vb)
    ly = np.log10(law_t(gb, 10.0**lat))
    sc, uc, lc = fit(ly, law_t)
    sf, uf, lf = fit(ly, law_f)
    d2 = sf / N
    exp_full = N * np.log(1 + d2 / S_OBS**2)
    exp_gal = 166 * np.log(1 + d2 / S_OBS**2)
    print(f"{name}: control rms {np.sqrt(sc/N):.2e}; twin rms d = {np.sqrt(d2):.4f} dex at Y={uf}; expected |dBIC| {exp_full:.1f} (N), {exp_gal:.2f} (N_gal)")
