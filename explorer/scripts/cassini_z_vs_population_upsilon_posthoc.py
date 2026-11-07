"""POST-HOC (explorer 2026-11-07), written after cassini_both_families_upsilon_free.py showed z tracking the prior width.
Scale the population mass-to-light ratio (Ud = 0.5 s, Ub = 0.7 s, one s for every galaxy), profile a0 on SPARC at each s,
and evaluate Cassini z@2.32e-10. Question: what population Upsilon does each family need to pass Cassini, and what does
SPARC itself say about s (SSR at profiled a0)?
"""
import sys
import numpy as np
from scipy.optimize import minimize_scalar, brentq

sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
import cassini_both_families_upsilon_free as C  # noqa: E402
from sparc_cassini_q2 import TanhLogNu  # noqa: E402

nob = np.array([g not in C.BUL for g in C.GID])


def fit(nu, s, mask):
    gb = C.GG[mask] + 0.5 * s * C.GD[mask] + 0.7 * s * C.GB[mask]
    lo = C.LGOBS[mask]
    ok = gb > 0
    f = lambda la: np.sum((lo[ok] - np.log10(gb[ok] * nu(gb[ok] / 10**la)))**2)
    r = minimize_scalar(f, bounds=(-11.5, -9), method='bounded', options={'xatol': 1e-6})
    return 10**r.x, r.fun, int((~ok).sum())


fams = [('MOND d=1', C.M.nu_delta(1.0)), ('MOND d=4', C.M.nu_delta(4.0)), ('MOND d=6', C.M.nu_delta(6.0)),
        ('tanh g=0.489', TanhLogNu(0.489)), ('tanh g=1', TanhLogNu(1.0)), ('tanh g=2', TanhLogNu(2.0)),
        ('tanh g=3', TanhLogNu(3.0))]
S = [0.8, 1.0, 1.2, 1.4, 1.6, 2.0, 2.5, 3.0]
for arm, mask in (('nobulge', nob), ('all', np.ones_like(nob))):
    print(f"\n=== {arm}: N = {mask.sum()}  (s scales Ud=0.5s, Ub=0.7s)")
    for name, nu in fams:
        zs, ssr = [], []
        for s in S:
            a0, ss, nneg = fit(nu, s, mask)
            zs.append(C.z(nu, a0, 2.32e-10)); ssr.append(ss)
        smin = S[int(np.argmin(ssr))]
        cross = '-'
        for i in range(len(S) - 1):
            if (zs[i] - 1.96) * (zs[i + 1] - 1.96) < 0:
                cross = f"{brentq(lambda s: C.z(nu, fit(nu, s, mask)[0], 2.32e-10) - 1.96, S[i], S[i+1], xtol=1e-3):.3f}"
                break
        print(f"{name:13s} z: " + " ".join(f"{s}:{z:+6.2f}" for s, z in zip(S, zs)) + f" | s_pass(z=1.96) {cross}"
              + f" | SSR-min s {smin} dSSR(s=1) {ssr[S.index(1.0)]-min(ssr):+.2f}", flush=True)
