"""POST-HOC: same as the registered sweep but excluding every galaxy with any Vbul>0 (Desmond+2024's mitigation direction)."""
import sys
import numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
import mond_delta_family_cassini_at_sparc_profiled_a0 as M
bul = set()
for line in open(M.MRT):
    p = line.split()
    if len(p) == 10:
        try:
            if float(p[7]) > 0: bul.add(p[0])
        except ValueError: pass
gid, gobs, gbar = M.load()
keep = np.array([g not in bul for g in gid])
gobs, gbar = gobs[keep], gbar[keep]; N = len(gobs)
print(f"bulge galaxies dropped: {len(bul)}; N points = {N}; galaxies = {len(set(gid[keep]))}")
_, s1 = M.fit(gobs, gbar, 1.0)
for d in (1.0, 2.0, 4.0, 6.0):
    a0, s = M.fit(gobs, gbar, d)
    print(f"delta={d}: a0_prof {a0:.4e}, dBIC_pt vs delta=1 {N*np.log(s/s1):+.1f}, z@2.32 {M.zq(d, a0, 2.32e-10):+.2f}")
