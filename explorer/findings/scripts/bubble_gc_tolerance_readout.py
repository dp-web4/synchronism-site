#!/usr/bin/env python3
r"""
Readout of compact_tracer_bubble_factor.json against the one GC tolerance located in the literature (POST-HOC reading,
not a pre-registered threshold):

  Watkins+2019 (arXiv:1804.11348): halo-GC kinematics give M(<21.1 kpc) = 2.1 (+0.4/-0.3) e11 Msun.
  Eilers+2019 (arXiv:1810.09466): red-giant v_c = 229.0 - 1.7 (R - 8.12) km/s gives v_c(21.1) = 206.9 km/s, hence
  v^2 r / G = 2.10e11 Msun (spherical).  Kinematic-to-kinematic ratio GC/disc-stars = 1.00 (+0.19 / -0.14 from
  Watkins alone; Eilers' 2-5% systematic on v adds 4-10% in M; lower-side combined ~0.17).
  Under L2, halo GCs feel F g_out while disc red giants (D >~ 10 pc: not bubbles) feel g_out, so the ratio is F.

Semi-binding reading: F_GC >= 1 - 2 x 0.17 = 0.66 (2 sigma); T = 0.34.  Estimator systematics (anisotropy, tracer
profile, spherical vs disc geometry, inner GCs that sit in the dense disc where F -> 1) are NOT modelled; they dilute
the effect, so this tolerance is optimistic for the law.
"""
import json, math
import numpy as np

d = json.load(open('compact_tracer_bubble_factor.json'))['table']
SIG = 0.17
print(f"{'law':20s} {'F(3pc)':>7s} {'F(10pc)':>7s} {'F(30pc)':>7s} {'F(100pc)':>8s} {'F(300pc)':>8s} "
      f"{'n-sigma@10pc':>12s} {'Dmin(T=0.34)':>13s} {'Dmin(T=0.17)':>13s}")
for key, v in d.items():
    bg, law, tr = key.split('|')
    if bg != 'halo 1e-5' or tr != 'typical GC 2e5':
        continue
    D = np.array(v['D']); F = np.array(v['F'])
    pick = lambda x: float(np.interp(math.log(x), np.log(D), F))
    def dmin(T):
        bad = np.where(np.abs(1 - F) > T)[0]
        if len(bad) == 0: return '<0.01pc'
        if bad[-1] == len(D) - 1: return '>3kpc'
        return f"{D[bad[-1]+1]:.3g}pc"
    print(f"{law:20s} {pick(3):7.3f} {pick(10):7.3f} {pick(30):7.3f} {pick(100):8.3f} {pick(300):8.3f} "
          f"{(1-pick(10))/SIG:12.1f} {dmin(0.34):>13s} {dmin(0.17):>13s}")
