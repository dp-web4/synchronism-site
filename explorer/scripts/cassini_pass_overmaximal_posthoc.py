"""POST-HOC (explorer 2026-11-07): SPARC SSR cost vs own optimum and over-maximal-disc fraction at each family's Cassini-passing
population Upsilon scale s (no-bulge). s_pass values from cassini_z_vs_population_upsilon_posthoc_output.txt."""
import sys
sys.argv = sys.argv[:1]
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
import numpy as np
from scipy.optimize import minimize_scalar
import cassini_both_families_upsilon_free as C
from sparc_cassini_q2 import TanhLogNu
nob = np.array([g not in C.BUL for g in C.GID])
def fit(nu, s, mask):
    gb = C.GG[mask] + 0.5 * s * C.GD[mask] + 0.7 * s * C.GB[mask]; lo = C.LGOBS[mask]
    f = lambda la: np.sum((lo - np.log10(gb * nu(gb / 10**la)))**2)
    r = minimize_scalar(f, bounds=(-11.5, -9), method='bounded', options={'xatol': 1e-6}); return 10**r.x, r.fun
gl = C.GID[nob]
for name, nu, sp in (('MOND d=6', C.M.nu_delta(6.0), 1.089), ('MOND d=4', C.M.nu_delta(4.0), 1.352),
                     ('tanh g=3', TanhLogNu(3.0), 2.438), ('tanh g=2', TanhLogNu(2.0), 2.799)):
    ss = np.arange(0.6, 3.21, 0.05); ssr = [fit(nu, s, nob)[1] for s in ss]; i = int(np.argmin(ssr))
    a0, sps = fit(nu, sp, nob)
    gb = C.GG[nob] + 0.5 * sp * C.GD[nob] + 0.7 * sp * C.GB[nob]
    frac = np.mean([np.max(gb[gl == g] / C.GOBS[nob][gl == g]) > 1.2 for g in np.unique(gl)])
    print(f"{name}: SSR-min s={ss[i]:.2f}; at s_pass={sp}: a0={a0:.3e}, dSSR vs min {sps-ssr[i]:+.2f} "
          f"(N ln ratio {nob.sum()*np.log(sps/ssr[i]):+.1f}); points gbar>gobs {(gb > C.GOBS[nob]).mean():.3f}; "
          f"galaxies with max gbar/gobs>1.2: {frac:.3f}")
gb = C.GG[nob] + 0.5 * C.GD[nob]
print(f"s=1: points gbar>gobs {(gb > C.GOBS[nob]).mean():.3f}; galaxies max>1.2 "
      f"{np.mean([np.max(gb[gl == g] / C.GOBS[nob][gl == g]) > 1.2 for g in np.unique(gl)]):.3f}")
