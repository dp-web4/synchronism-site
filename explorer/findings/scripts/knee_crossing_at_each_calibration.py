import sys, numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts')
import two_pillars_head_to_head_fit as H
M = H.L.MSUN / H.L.PC**3
GID, GB, GO, RHO, VF, EL = H.build()
gal = np.unique(GID)
for lab, rc in (("archive 0.028*V^0.5", 0.028*M*VF**0.5), ("site 0.029*V^2", 0.029*M*VF**2),
                ("Jeans-consistent 4.6e-5*V^2", 4.6e-5*M*VF**2)):
    x = RHO/rc
    crossg = sum(np.any(x[GID==g] > 1) for g in gal)
    print(f"{lab:30s} x median {np.median(x):.3g} max {x.max():.3g}  points x>1 {np.mean(x>1):.3f}  "
          f"galaxies with any x>1 {crossg}/{len(gal)}")
# does the inner-disc ratio track V? correlation of per-galaxy max log x with log V_flat
for lab, B, A in (("V^0.5", 0.5, 0.028), ("V^2", 2.0, 0.029)):
    mx = np.array([np.log10((RHO/(A*M*VF**B))[GID==g].max()) for g in gal])
    vf = np.array([np.log10(VF[GID==g][0]) for g in gal])
    print(f"{lab}: slope d log max x / d log V_flat = {np.polyfit(vf, mx, 1)[0]:+.2f}  (0 = mass cancels)")
