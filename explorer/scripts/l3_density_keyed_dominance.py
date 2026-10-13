#!/usr/bin/env python3
"""Is the first-order density-keyed L3 change carried by a few galaxies / by points where striction > gravity?
Ups_d = 0.5 fixed. Explorer 2026-10-13."""
import sys, numpy as np, types
sys.argv = ['x']
src = open('/home/dp/ai-workspace/synchronism-site/explorer/scripts/l3_density_keyed_first_order_sparc.py').read()
src = src.split('gal = K.load_sparc()')[0]       # definitions only
ns = {}; exec(compile(src, 'l3dk', 'exec'), ns)
K, Gal, solve23, fw, rg = ns['K'], ns['Gal'], ns['solve23'], ns['fw'], ns['rg']
gal = K.load_sparc(); GG = []
for gid in sorted(gal):
    try: GG.append(Gal(gal[gid], "bershady", "vgas", 0.5))
    except Exception: pass
for name, mk in (("Jeans gamma=.489 rho_c=0.161 floor=Om", lambda V: fw(0.489, 0.161, 0.315)),
                 ("RG-form fl=.315 q=.47 rc=1.47e-3", lambda V: rg(0.315, 0.47, 0.0014678))):
    d = []; n_big = n_all = 0; n_neg = 0; dsmall = 0.0
    for gg in GG:
        B2, B3, r = solve23(gg, mk(max(gg.d["props"]["Vflat"], 10.0)))
        c2 = gg.score(B2*gg.vbar2)[0]; c3 = gg.score(np.clip(B3, 0, None)*gg.vbar2)[0]
        d.append((c3 - c2, c2, c3, gg.gid)); o = gg.ok
        n_big += np.sum(np.abs(r[o]) > 0.5); n_all += o.sum(); n_neg += np.sum(B3[o] <= 0)
        if np.all(np.abs(r[o]) <= 0.5): dsmall += c3 - c2
    d.sort(key=lambda t: -abs(t[0])); tot = sum(t[0] for t in d)
    lr = np.array([np.log10(max(t[2], 1e-3)/max(t[1], 1e-3)) for t in d])
    print(f"\n{name}: sum dchi2 {tot:+.0f};  top-5 galaxies carry {sum(t[0] for t in d[:5]):+.0f}  ({', '.join(t[3] for t in d[:5])})")
    print(f"  median per-galaxy log10(chi2_L3/chi2_L2) {np.median(lr):+.3f};  L3 better in {np.mean(lr < 0):.2f}")
    print(f"  points with |g_strict/g_L2| > 0.5: {n_big}/{n_all};  B3 <= 0 (striction outward > gravity): {n_neg}")
    print(f"  dchi2 summed over galaxies where every point has |gs/g| <= 0.5 (first order defensible): {dsmall:+.0f}")
