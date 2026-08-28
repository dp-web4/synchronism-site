#!/usr/bin/env python3
"""
L2 vs L3 ON REAL SPARC GALAXIES (explorer 2026-08-28, companion to l2_field_equation_on_sparc.py)

Every prior fit in this program used  L3:  g_obs = g_bar / C(rho_midplane).
The field equation is                  L2:  div[C(rho) grad Phi] = 4 pi G rho.
08-26 showed L2 != L3 on a toy disc by up to B_max.  Here: same C, same rho, same points,
real galaxies -- how far apart are the two laws, and does the verdict vs MOND depend on which
one you solve?   Upsilon_disk = 0.5 fixed (this is a law comparison, not a fit).
"""
import os
import sys
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_sparc_core as K            # noqa: E402
import l2_field_equation_on_sparc as M   # noqa: E402

gal = K.load_sparc()
G = [M.Gal(gal[g]) for g in sorted(gal)]
print(f"{len(G)} galaxies")

models = {
    "site  gamma=2   rho_c=0.029V^2 floor=Om": lambda vf: (K.C_framework(2.0, 0.029 * vf**2, 0.315), 0.315),
    "Jeans gamma=.489 rho_c=0.161   floor=Om": lambda vf: (K.C_framework(0.489, 0.161, 0.315), 0.315),
    "Jeans gamma=2    rho_c=0.161   floor=Om": lambda vf: (K.C_framework(2.0, 0.161, 0.315), 0.315),
    "RG    E0-fit e0=.089 q=.47 rc=8.3e-3":   lambda vf: (K.C_refracted(0.089, 0.47, 8.3e-3), 0.089),
    "RG    DMS-unique e0=.666 Q=1.79 rc=4.3e-3": lambda vf: (K.C_refracted(0.666, 1.79, 4.3e-3), 0.666),
    "fw    gamma=.489 rho_c=0.01    floor=.089": lambda vf: (K.C_framework(0.489, 0.01, 0.089), 0.089),
}
ref = np.array([gg.score(K.mond_simple(gg.gbar_sparc) * gg.d["R"])[0] for gg in G])
print(f"\n{'model':<44s} {'chi2/N L2':>10s} {'chi2/N L3':>10s} {'med rms L2':>10s} {'med rms L3':>10s} "
      f"{'med B_L2/B_L3':>13s} {'max ratio':>9s} {'wins vs MOND L2/L3':>18s}")
for name, mk in models.items():
    s2, s3, rat, ratmax = [], [], [], []
    for gg in G:
        Cf, Cmin = mk(max(gg.d["props"]["Vflat"], 10.0))
        B2, _ = gg.solve(Cf, Cmin)
        C_mid = Cf(gg.rho_mid)
        B3 = 1.0 / C_mid
        s2.append(gg.score(B2 * gg.vbar2)); s3.append(gg.score(B3 * gg.vbar2))
        o = gg.ok
        r = (B2 / B3)[o]
        rat.append(np.median(r)); ratmax.append(r.max())
    c2 = np.array([s[0] for s in s2]); c3 = np.array([s[0] for s in s3])
    n = np.array([s[1] for s in s2])
    print(f"{name:<44s} {c2.sum()/n.sum():10.2f} {c3.sum()/n.sum():10.2f} "
          f"{np.median([s[2] for s in s2]):10.3f} {np.median([s[2] for s in s3]):10.3f} "
          f"{np.median(rat):13.2f} {np.max(ratmax):9.2f} "
          f"{np.mean(c2 < ref)*100:8.0f}% / {np.mean(c3 < ref)*100:3.0f}%")

# where is the L2/L3 gap on a real galaxy?  Print one bright and one dwarf.
print("\nProfile of the gap, Jeans gamma=.489 rho_c=0.161 floor=Om:")
for gid in ["NGC3198", "DDO154", "NGC2841", "UGC07524"]:
    gg = next((x for x in G if x.gid == gid), None)
    if gg is None:
        continue
    Cf, Cmin = models["Jeans gamma=.489 rho_c=0.161   floor=Om"](0)
    B2, _ = gg.solve(Cf, Cmin); B3 = 1.0 / Cf(gg.rho_mid)
    req = gg.d["Vobs"]**2 / np.maximum(gg.vbar2, 1e-9)
    print(f"  {gid}:  R(kpc)  rho_mid(Msun/pc3)  C_mid   B_L3=1/C   B_L2   B_required")
    for i in range(0, len(gg.d["R"]), max(1, len(gg.d["R"]) // 6)):
        if gg.ok[i]:
            print(f"        {gg.d['R'][i]:6.2f}  {gg.rho_mid[i]/1e9:14.4g}  {Cf(gg.rho_mid[i]):6.3f}  {B3[i]:8.2f}  {B2[i]:6.2f}  {req[i]:8.2f}")
