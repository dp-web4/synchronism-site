#!/usr/bin/env python3
"""POST-HOC diagnostic for test10_bmax_3sigma_scan.py (not pre-registered). The scan's binding disc at high caps is UGC 06667,
with UGC 00731 next; the 10-29 run marked both 'gas multiplier needed = inf'. Which radii carry their chi2? Prints the residuals
at nominal D, i, Ups = 0.5, gas x1 and at caps 6.39 and 14; then repeats the scan statistic with the innermost point(s) removed,
and on the outer half of each curve only (closer to TEST-10's own outer-3 statistic)."""
import importlib.util, pathlib
import numpy as np
HERE = pathlib.Path(__file__).resolve()
spec = importlib.util.spec_from_file_location("s", HERE.parent / "test10_bmax_3sigma_scan.py")
S = importlib.util.module_from_spec(spec); spec.loader.exec_module(S)
t10 = S.t10
rows = S.sample()
for nm in ("UGC06667", "UGC00731", "NGC2915", "NGC3741"):
    name, arr, m = [r for r in rows if r[0] == nm][0]
    r, vo, ev, vg, vd, vb = arr.T
    vb2 = t10.vbar2(vg, vd, vb, 0.5)
    print(f"\n{nm} D={m['D']}±{m['eD']} fD={m['fD']} i={m['inc']}±{m['einc']}  Q={m['q']}")
    print("   r    Vobs   eV    Vgas  Vdisk  Vbar^2     B     z@6.39   z@14")
    for k in range(len(r)):
        z = [max(vo[k] - np.sqrt(max(c * vb2[k], 0)), 0) / ev[k] for c in (6.39, 14)]
        print(f"{r[k]:6.2f} {vo[k]:6.1f} {ev[k]:5.1f} {vg[k]:6.1f} {vd[k]:6.1f} {vb2[k]:8.1f} {vo[k]**2/max(vb2[k],1e-9):7.1f} {z[0]:7.2f} {z[1]:7.2f}")
t10.SIG_LGAS = 0.1
print("\nProfile chi2 (D, i, Ups, gas 0.1 dex) on the OUTER HALF of each curve, and largest cap with chi2>=9 / >=18.4:")
out = {}
for cap in S.CAPS:
    t10.BMAX = cap
    res = []
    for name, arr, m in rows:
        o = arr[len(arr)//2:]
        res.append((float(t10.stat_b(o, m, gas=True)[0]), name))
    res.sort(reverse=True); out[cap] = res
    print(f"  B_max {cap:7.3f} >=4:{sum(c>=4 for c,_ in res):3d} >=9:{sum(c>=9 for c,_ in res):3d} >=18.4:{sum(c>=18.4 for c,_ in res):3d} top: "+", ".join(f"{n} {c:.1f}" for c,n in res[:4]), flush=True)

print("\nExact single-disc edges on the outer half (bisection on B_max, D/i/Ups/gas profiled):")
def chi(arr, m, cap):
    t10.BMAX = cap
    return float(t10.stat_b(arr[len(arr)//2:], m, gas=True)[0])
for nm in ("NGC2915", "NGC3741", "UGC06667"):
    name, arr, m = [r for r in rows if r[0] == nm][0]
    line = f"  {nm:10s}"
    for thr in (4.0, 9.0, 18.4):
        lo, hi = 2.0, 30.0
        if chi(arr, m, lo) < thr:
            line += f"  chi2={thr}: <2"; continue
        for _ in range(16):
            mid = 0.5 * (lo + hi)
            if chi(arr, m, mid) >= thr: lo = mid
            else: hi = mid
        line += f"  chi2={thr}: {lo:.2f}"
    print(line, flush=True)
n = sum(1 for _ in rows)
print(f"  discs in sample: {n}; family-wise threshold chi2 >= 18.4 is one-sided p = 0.00135/{n}")
