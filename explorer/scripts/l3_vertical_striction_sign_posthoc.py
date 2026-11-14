#!/usr/bin/env python3
"""POST-HOC (sign + hybrid control variant) (not in the 11-14 PREREG): vertical striction dPsi/dz vs vertical gravity dPhi/dz on the same L2 solves,
archive knee 0.028 V^0.5, Ups_d 0.5. Cells counted where rho > 1% of the local midplane density and R <= last data radius.
'Anti-restoring' = total vertical force points away from the midplane (dPhi/dz + dPsi/dz < 0 for z > 0)."""
import sys, numpy as np
sys.argv = ['x']
src = open('/home/dp/ai-workspace/synchronism-site/explorer/scripts/l3_density_keyed_first_order_sparc.py').read()
ns = {}; exec(compile(src.split('gal = K.load_sparc()')[0], 'l3dk', 'exec'), ns)
K, Gal, fw = ns['K'], ns['Gal'], ns['fw']; G = K.G
gal = K.load_sparc(); GG = []
for gid in sorted(gal):
    try: GG.append(Gal(gal[gid], "bershady", "vgas", 0.5))
    except Exception: pass
for name, gam, A, B in (("archive gamma=2", 2.0, 0.028, 0.5), ("site gamma=.489", 0.489, 0.028, 0.5), ("control hybrid gamma=.489 0.029V^2", 0.489, 0.029, 2.0)):
    SG = []; W = []; allr = []; n_anti = n_cells = 0; gal_anti = []; gal_big = 0
    for gg in GG:
        V = max(gg.d["props"]["Vflat"], 10.0); C, dC, Cmin = fw(gam, A*V**B, 0.315)
        Phi = K.solve_poisson_fast(gg.g, C(gg.rho), gg.Mc, Cmin, gg.Mtot)
        dR = np.gradient(Phi, gg.g.Rc, axis=0, edge_order=2); dz = np.gradient(Phi, gg.g.zc, axis=1, edge_order=2)
        Psi = dC(gg.rho)*(dR**2 + dz**2)/(8*np.pi*G)
        dPz = np.gradient(Psi, gg.g.zc, axis=1, edge_order=2)
        mask = (gg.rho > 0.01*gg.rho[:, :1]) & (gg.g.Rc[:, None] <= gg.d["R"][-1]) & (gg.g.zc[None, :] > 0) & (np.abs(dz) > 0)
        rs = dPz[mask]/dz[mask]; r = np.abs(rs); allr.extend(r.tolist()); SG.append(np.mean(rs > 0)); W.append(np.sum(np.where(rs>0, r, 0)) / max(np.sum(r),1e-30))
        anti = np.sum((dz[mask] + dPz[mask]) < 0); n_anti += anti; n_cells += mask.sum()
        if anti: gal_anti.append(gg.gid)
        gal_big += np.any(r > 0.5)
    a = np.array(allr)
    print(f"{name}: same-sign-as-gravity (compressive) cell fraction median over galaxies {np.median(SG):.3f}, |ratio|-weighted {np.median(W):.3f}"); print(f"   |gz_s/gz| median {np.median(a):.2e} 90% {np.percentile(a,90):.2e} 99% {np.percentile(a,99):.2e} max {a.max():.2e}; "
          f"galaxies with any cell >0.5: {gal_big}/{len(GG)}; anti-restoring cells {n_anti}/{n_cells} in {len(gal_anti)} galaxies {gal_anti[:8]}", flush=True)
