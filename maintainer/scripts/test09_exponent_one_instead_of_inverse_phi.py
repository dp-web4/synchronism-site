#!/usr/bin/env python3
"""TEST-09 BTFR slope with exponent 1 instead of 1/phi (maintainer 2026-09-17; visitor Pass 3 question).

Expectation stated before running (not committed first, so treat as a quick check): n ~3.3-3.5, |n_obs - n| > 0.3 still.
Reuses explorer/scripts/test09_parameter_scan_no_rescue.py unchanged; only the data path is overridden."""
import sys, numpy as np
sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/scripts")
import test09_btfr_bounded_boost_real_sparc as b
b.BASE = "/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/"
import test09_parameter_scan_no_rescue as t
gals = t.build_sample()
print("N gals:", len(gals))
for phi in (1.0, t.PHI_GOLDEN):
    fixed = t.slope_for(gals, 0.315, phi, 1.05e-10)
    best = max((t.slope_for(gals, 0.315, phi, a0) for a0 in np.logspace(-12.0, -8.5, 30)
                if np.isfinite(t.slope_for(gals, 0.315, phi, a0))), default=np.nan)
    print(f"phi={phi:.3f} (exponent {1/phi:.3f}): n at a0=1.05e-10 = {fixed:.3f}; best over a0 = {best:.3f}")
c=2.99792458e8; H0=67.4e3/3.0857e22
for phi in (1.0, t.PHI_GOLDEN):
    a0d = c*H0*0.315**phi
    print(f"phi={phi:.3f}: 'derived' a0 = cH0*Om^phi = {a0d:.3e}; n = {t.slope_for(gals, 0.315, phi, a0d):.3f}")
for a0 in np.logspace(-12.0, -8.5, 30):
    n=t.slope_for(gals, 0.315, 1.0, a0)
    if np.isfinite(n) and n>3.45: print(f"  phi=1 a0={a0:.2e} n={n:.3f}")
