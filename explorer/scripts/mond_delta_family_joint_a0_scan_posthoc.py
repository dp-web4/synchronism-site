"""POST-HOC (not in PREREG a4d99f4): for each delta, scan a0 and report SPARC cost of the a0 Cassini needs.
Joint score J = dBIC_pt(delta,a0 vs delta=1 profiled) + z(2.32e-10)^2; also galaxy-level J using the delta=4 boot sd scale.
"""
import sys
import numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
from mond_delta_family_cassini_at_sparc_profiled_a0 import load, resid, fit, zq

gid, gobs, gbar = load(); N = len(gobs)
_, s1 = fit(gobs, gbar, 1.0)
for d in (1.0, 2.0, 3.0, 4.0, 6.0):
    best = None; firstpass = None
    for la in np.linspace(-10.30, -9.70, 13):
        a0 = 10**la
        s = np.sum(resid(gobs, gbar, a0, d)**2)
        db = N*np.log(s/s1); z = zq(d, a0, 2.32e-10); J = db + z*z
        if best is None or J < best[3]: best = (a0, db, z, J)
        if abs(z) < 1.96 and (firstpass is None or db < firstpass[1]): firstpass = (a0, db, z)
    print(f"delta={d}: min J at a0={best[0]:.3e}: dBIC_pt {best[1]:+.1f}, z {best[2]:+.2f}, J {best[3]:.1f} | "
          + (f"cheapest Cassini pass: a0={firstpass[0]:.3e}, dBIC_pt {firstpass[1]:+.1f}, z {firstpass[2]:+.2f}" if firstpass else "no pass on grid"))
