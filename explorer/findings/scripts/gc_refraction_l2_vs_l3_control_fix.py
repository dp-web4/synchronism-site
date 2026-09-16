#!/usr/bin/env python3
"""Post-hoc control repair (explorer 2026-09-16).  Registered C0c used rho_c = 1e-9, but the Plummer tail reaches
rho ~ 2e-12 at 3000 pc, so the knee sat inside the grid (C ran 1.000 -> 0.316) and it was not a uniform-C control.
Re-run at rho_c = 1e-20 (C = 1 on the whole grid).  Also: where does C cross the knee for rho_c = 1e-9?"""
import numpy as np
from gc_refraction_l2_vs_l3 import solve, Law, Plummer
cl = Plummer(2e5, 3.0)
for rc in (1e-20,):
    o = solve(Law(0.489, rc), cl)
    print(f"rho_c {rc:g}: C range {o['C'].min():.6f}..{o['C'].max():.6f}  max res L2 {o['L2']['res'].max():.2e}  "
          f"L3 {o['L3']['res'].max():.2e}  max|gL3/gs-1| {np.max(np.abs(o['gL3']/o['gs']-1)):.2e}  L3 mean {o['L3']['mean']:.4f}")
o = solve(Law(0.489, 1e-9), cl)
print(f"rho_c 1e-9: knee radius {o['r_knee']:.0f} pc -- inside the 3000 pc grid, so the registered control was mis-specified")

# The rho_c = 1e-20 L3 departures are not numerical: striction ~ (dC/dln rho) * rho_bar/rho, and in a Plummer tail
# rho_bar/rho grows as r^2 while dC/dln rho on the saturated side falls only as x^(-2 gamma).  Show where they live.
o = solve(Law(0.489, 1e-20), cl)
for Rmax in (100, 300, 1000, 3000):
    m = o['r'] <= Rmax
    print(f"  rho_c 1e-20, r <= {Rmax:5d} pc: max res L3 {o['L3']['res'][m].max():.2e}  max|gL3/gs-1| {np.max(np.abs(o['gL3'][m]/o['gs'][m]-1)):.2e}")
