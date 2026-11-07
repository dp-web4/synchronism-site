"""POST-HOC (explorer 2026-11-07). Galaxy-block bootstrap of the SPARC cost of each family's Cassini-passing configuration,
no-bulge sample, population Upsilon scale s (Ud = 0.5 s).
  MOND:      delta=6 at s = 1.089 (z@2.32 = 1.96)  vs  delta=1 with s and a0 both profiled.
  Compander: gamma=3 at s = 2.438 (z@2.32 = 1.96)  vs  gamma=0.489 with s and a0 both profiled.
The cost is N ln(SSR_pass / SSR_ref). Each side is re-profiled on every resample (a0 for the pass side; s and a0 for the reference).
"""
import sys
import numpy as np
from scipy.optimize import minimize_scalar

NB = int(sys.argv[1]) if len(sys.argv) > 1 else 300
sys.argv = sys.argv[:1]
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
import cassini_both_families_upsilon_free as C  # noqa: E402
from sparc_cassini_q2 import TanhLogNu  # noqa: E402

nob = np.array([g not in C.BUL for g in C.GID])
GG, GD, LO, GID = C.GG[nob], C.GD[nob], C.LGOBS[nob], C.GID[nob]


def ssr_a0(nu, s, ii):
    gb = GG[ii] + 0.5 * s * GD[ii]
    f = lambda la: np.sum((LO[ii] - np.log10(gb * nu(gb / 10**la)))**2)
    return minimize_scalar(f, bounds=(-11.5, -9), method='bounded', options={'xatol': 1e-5}).fun


def ssr_prof(nu, ii):
    return minimize_scalar(lambda ls: ssr_a0(nu, 10**ls, ii), bounds=(-0.4, 0.6), method='bounded',
                           options={'xatol': 1e-3}).fun


cases = [('MOND d6@s1.089 vs d1 prof', C.M.nu_delta(6.0), 1.089, C.M.nu_delta(1.0)),
         ('tanh g3@s2.438 vs g0.489 prof', TanhLogNu(3.0), 2.438, TanhLogNu(0.489))]
gals = np.unique(GID)
idx = {g: np.where(GID == g)[0] for g in gals}
allii = np.arange(len(LO))
B = NB
rng = np.random.default_rng(20261107)
picks = [np.concatenate([idx[g] for g in rng.choice(gals, len(gals), replace=True)]) for _ in range(B)]
for name, nup, sp, nur in cases:
    pt = len(allii) * np.log(ssr_a0(nup, sp, allii) / ssr_prof(nur, allii))
    v = np.array([len(p) * np.log(ssr_a0(nup, sp, p) / ssr_prof(nur, p)) for p in picks])
    print(f"{name}: point {pt:+.1f}; boot median {np.median(v):+.1f} 16-84% [{np.percentile(v,16):+.1f},{np.percentile(v,84):+.1f}] "
          f"sd {v.std():.1f}; point/sd {pt/v.std():.1f}; frac>0 {np.mean(v>0):.3f}  (B={B}, {len(gals)} galaxies)", flush=True)
