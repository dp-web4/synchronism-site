"""Ciocan et al. 2026 (arXiv:2604.22613): 2.38 (+0.12/-0.10, 95% CI) is one fit over 0.33<z<1.44 ("z~1"), no median z given.
The paper's own line a0(z) = 1.00 + 1.59 z reaches 2.38 at z_eff = 0.868. Re-evaluate the four-anchor level rows at z = 1 and
z_eff. Conventions as on /parameter-derivations: obs 1-sigma 0.051 (low) / 0.061 (high), anchor error carried in quadrature.
"""
import math
OM = 0.315
E = lambda z: math.sqrt(OM * (1 + z) ** 3 + 1 - OM)
OBS, LO, HI = 2.38, 0.10 / 1.96, 0.12 / 1.96
z_eff = (OBS - 1.00) / 1.59
anchors = [("Ciocan intercept", 1.00, 0.02, 0.0), ("cH0/2pi", 1.04, 0.008, 0.0),
           ("McGaugh+2016", 1.20, 0.26, 0.0), ("MIGHTEE-HI", 1.69, 0.13, 0.08)]
print(f"z_eff = {z_eff:.3f}; E(1) = {E(1):.3f}; E(z_eff) = {E(z_eff):.3f}")
for name, a, da, z0 in anchors:
    out = []
    for z in (1.0, z_eff):
        f = E(z) / E(z0)
        pred, dpred = a * f, da * f
        s = LO if OBS > pred else HI
        out.append(f"z={z:.2f}: pred {pred:.3f}, {(OBS - pred) / math.hypot(s, dpred):+.1f} sigma")
    print(f"{name:18s} " + " | ".join(out))
