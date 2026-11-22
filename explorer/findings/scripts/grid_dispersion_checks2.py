"""Follow-up checks (explorer 2026-11-22): Wilson O(ma) speed term; GZK shift where LIV term is O(1).

Written after the first run of grid_dispersion_thresholds.py (post hoc, not pre-registered).
"""
import mpmath as mp
from grid_dispersion_thresholds import (SCHEMES, DIAG, AXIS, eta, threshold, golden_min, E_of)

mp.mp.dps = 60
f = SCHEMES["F Wilson fermion r=1, cont. time"]
et = eta(f, DIAG)
for me in [mp.mpf("1e-12"), mp.mpf("1e-14"), mp.mpf("1e-16")]:
    pth = threshold(f, DIAG, 0, (me, me), me * 10, mp.mpf("1e-3"))
    ana = (16 * me ** 2 / (3 * et)) ** mp.mpf(0.25)
    print(f"Wilson gamma->ee m={mp.nstr(me,2)}: numeric/analytic(eta only) = {mp.nstr(pth/ana,6)}; "
          f"m/(eta p_th^2) = {mp.nstr(me/(et*pth**2),4)}")

g = SCHEMES["S1 scalar, continuous time"]
mpr, mpi = mp.mpf("1e-10"), mp.mpf("1.44e-11")
et = eta(g, AXIS)
xp = mpr / (mpr + mpi)
S = 1 - xp ** 3 - (1 - xp) ** 3
dm2 = (mpr + mpi) ** 2 - mpr ** 2
for p in [mp.mpf("1e-5"), mp.mpf("2e-5"), mp.mpf("4e-5")]:
    def gap(eps):
        eout, _ = golden_min(lambda x: E_of(g, x * (p - eps), AXIS, mpr) + E_of(g, (1 - x) * (p - eps), AXIS, mpi),
                             mp.mpf("0.5"), 1 - mp.mpf("1e-6"))
        return E_of(g, p, AXIS, mpr) + eps - eout
    a, b = mp.mpf("1e-40"), mp.mpf("1e-8")
    for _ in range(200):
        c = mp.sqrt(a * b)
        a, b = (a, c) if gap(c) > 0 else (c, b)
    eps_num = mp.sqrt(a * b)
    eps_ana = (dm2 - et * p ** 4 * S) / (4 * p)
    print(f"GZK S1 axis p={mp.nstr(p,2)}: numeric/analytic {mp.nstr(eps_num/eps_ana,6)}; "
          f"shift vs LI {mp.nstr(eps_num/(dm2/(4*p)),5)}; 1-sum x^3 = {mp.nstr(S,4)}")
