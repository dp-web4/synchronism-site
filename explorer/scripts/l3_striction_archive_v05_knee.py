#!/usr/bin/env python3
"""First-order density-keyed L3 striction at the archive's own knee rho_c = 0.028 V^0.5 Msun/pc^3 (explorer 2026-11-14).
Definitions imported unchanged from l3_density_keyed_first_order_sparc.py (explorer 2026-10-13)."""
import sys, time, numpy as np
sys.argv = ['x']
src = open('/home/dp/ai-workspace/synchronism-site/explorer/scripts/l3_density_keyed_first_order_sparc.py').read()
defs, rest = src.split('gal = K.load_sparc()')
ns = {}; exec(compile(defs, 'l3dk', 'exec'), ns)
K, Gal, solve23, fw, UPS_GRID, profiled, summarise = (ns[k] for k in ('K', 'Gal', 'solve23', 'fw', 'UPS_GRID', 'profiled', 'summarise'))
OM = 0.315
gal = K.load_sparc(); t0 = time.time(); GU = {u: [] for u in UPS_GRID}
for gid in sorted(gal):
    try: tmp = {u: Gal(gal[gid], "bershady", "vgas", u) for u in UPS_GRID}
    except Exception as e: print("skip", gid, e); continue
    for u in UPS_GRID: GU[u].append(tmp[u])
NG = len(GU[0.5]); print(f"built {NG} galaxies in {time.time()-t0:.0f}s", flush=True)
ref = summarise("MOND", [profiled([GU[u][i].score(K.mond_simple(GU[u][i].gbar_sparc)*GU[u][i].d["R"]) for u in UPS_GRID]) for i in range(NG)])
print(f"MOND simple mu chi2/N = {ref['chi2_per_pt']:.2f}")
KPC3 = K.KPC3
for name, gam, A, B in (("archive gamma=2 rho_c=0.028V^0.5", 2.0, 0.028, 0.5),
                        ("site gamma=.489 rho_c=0.028V^0.5", 0.489, 0.028, 0.5),
                        ("control: site gamma=.489 rho_c=0.029V^2 (10-13 row)", 0.489, 0.029, 2.0)):
    s2, s3, ratio = [], [], []
    n_big = n_all = n_neg = 0; dsmall = 0.0; per = []; cross_gal = 0
    for i in range(NG):
        a2, a3 = [], []
        for u in UPS_GRID:
            gg = GU[u][i]; V = max(gg.d["props"]["Vflat"], 10.0)
            m = fw(gam, A*V**B, OM)
            B2, B3, r = solve23(gg, m)
            a2.append(gg.score(B2*gg.vbar2)); a3.append(gg.score(np.clip(B3, 0, None)*gg.vbar2))
            if u == 0.5:
                o = gg.ok; rr = np.abs(r[o]); ratio.extend(rr.tolist())
                n_big += np.sum(rr > 0.5); n_all += o.sum(); n_neg += np.sum(B3[o] <= 0)
                rc = A*V**B*KPC3
                xmax = float(np.max(gg.rho[:, 0]/rc)) if gg.rho.ndim == 2 else float(np.max(gg.rho/rc))
                cross_gal += xmax > 1
                c2 = gg.score(B2*gg.vbar2)[0]; c3 = gg.score(np.clip(B3, 0, None)*gg.vbar2)[0]
                per.append((c3 - c2, gg.gid, rr.max() if rr.size else 0.0, np.sum(B3[o] <= 0), xmax))
                if rr.size and np.all(rr <= 0.5): dsmall += c3 - c2
        s2.append(profiled(a2)); s3.append(profiled(a3))
    S2, S3 = summarise("L2", s2), summarise("L3", s3); r = np.array(ratio)
    per.sort(key=lambda t: -abs(t[0]))
    print(f"\n{name}\n  L2 chi2/N {S2['chi2_per_pt']:.2f}  L3 {S3['chi2_per_pt']:.2f}  ({100*(S3['chi2_per_pt']/S2['chi2_per_pt']-1):+.1f}%)")
    print(f"  |g_s/g| median {np.median(r):.2e}  90% {np.percentile(r,90):.2e}  99% {np.percentile(r,99):.2e}  max {r.max():.2e}")
    print(f"  points |g_s/g|>0.5: {n_big}/{n_all};  B3<=0 (outward striction > gravity): {n_neg};  galaxies with midplane x_max>1 (Ups .5): {cross_gal}/{NG}")
    print(f"  galaxies with |g_s/g|>0.1 anywhere: {sum(1 for t in per if t[2] > 0.1)};  >0.5: {sum(1 for t in per if t[2] > 0.5)}")
    print(f"  dchi2 over all-first-order galaxies (Ups .5): {dsmall:+.0f};  total (Ups .5): {sum(t[0] for t in per):+.0f}")
    print("  top-6 by |dchi2|: " + "; ".join(f"{t[1]} {t[0]:+.0f} (max|gs/g| {t[2]:.2f}, x_max {t[4]:.1f}, B3<=0 {t[3]})" for t in per[:6]), flush=True)
print(f"elapsed {time.time()-t0:.0f}s")
