#!/usr/bin/env python3
"""Which gas multiplier c (on SPARC's He-corrected gas, M_gas = 1.33 M_HI) does the BTFR allow?
NOT pre-registered in a file; rule fixed here before running (2026-10-29):
  For each c, M_b = Ups*L36 + c*1.33*M_HI (Ups = 0.5). Fit log M_b = a + n log V_flat (OLS on log M_b).
  Statistic: slope s(c) of BTFR residual vs gas fraction f_g(c). Allowed c: galaxy bootstrap (2000) 95% CI of s(c) contains 0.
  Prediction: allowed range includes c = 1, upper end between 1.5 and 2.5 (so NGC 3741's x2.0 is borderline).
Caveat: identifies c relative to Ups (c*M_gas vs Ups*L); repeated at Ups = 0.35 and 0.7.
Sample: Q<=2, i>30, V_flat>0 (SPARC Table 1)."""
import numpy as np
BASE = "/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/SPARC_Lelli2016c.mrt"
rows = []
for line in open(BASE):
    p = line.split()
    if len(p) < 18: continue
    try: inc, L, MHI, Vf, eVf, Q = float(p[5]), float(p[7]), float(p[13]), float(p[15]), float(p[16]), int(p[17])
    except ValueError: continue
    if Q <= 2 and inc > 30 and Vf > 0: rows.append((L, MHI, Vf))
A = np.array(rows); L, MHI, Vf = A.T; lv = np.log10(Vf)
rng = np.random.default_rng(1029)
def s_of(c, ups, idx):
    Mg = c * 1.33 * MHI[idx]; Ms = ups * L[idx]; Mb = Mg + Ms
    y = np.log10(Mb); x = lv[idx]; n, a = np.polyfit(x, y, 1); r = y - (a + n * x)
    fg = Mg / Mb; return np.polyfit(fg, r, 1)[0], n
boots = [rng.integers(0, len(Vf), len(Vf)) for _ in range(2000)]
print(f"N = {len(Vf)}")
for ups in (0.35, 0.5, 0.7):
    print(f"\nUps = {ups}:   c   slope(resid vs f_g)  95% CI        BTFR n   allowed")
    allowed = []
    for c in (0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 3.0, 4.0):
        s0, n0 = s_of(c, ups, np.arange(len(Vf)))
        bs = np.array([s_of(c, ups, b)[0] for b in boots]); lo, hi = np.percentile(bs, [2.5, 97.5])
        ok = lo <= 0 <= hi; allowed += [c] if ok else []
        print(f"           {c:4.2f}  {s0:+.3f}          [{lo:+.3f}, {hi:+.3f}]   {n0:.2f}    {'yes' if ok else 'no'}")
    print(f"  allowed c grid points: {allowed}")
