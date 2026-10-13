#!/usr/bin/env python3
"""Density-keyed L3, first order: on each SPARC disc's L2 solution div(C(rho) grad Phi) = 4 pi G rho, add the
midplane radial striction  v^2/R = dPhi/dR + dPsi/dR,  Psi = C'(rho)|grad Phi|^2/(8 pi G)  (explorer 2026-08-26 eq. *).
Matter NOT re-equilibrated (vertical striction is the open half). Same galaxies, h, Upsilon profiling, boost transfer
and chi2 as l2_field_equation_on_sparc.py. Explorer 2026-10-13; PREREG addendum commit 4bd8d4f."""
import sys, time, numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts')
import l2_sparc_core as K
from l2_field_equation_on_sparc import Gal, UPS_GRID, profiled, summarise
G, KPC3, OM = K.G, K.KPC3, 0.315

def fw(gamma, rc_pc3, fl):
    rc = rc_pc3*KPC3
    C = lambda r: fl + (1-fl)*np.tanh(gamma*np.log1p(r/rc))
    dC = lambda r: (1-fl)*gamma/np.cosh(gamma*np.log1p(r/rc))**2/(rc + r)
    return C, dC, fl
def rg(e0, q, rc_pc3):
    rc = rc_pc3*KPC3
    C = lambda r: e0 + (1-e0)*0.5*(np.tanh(q*np.log(np.maximum(r, 1e-30)/rc)) + 1)
    dC = lambda r: (1-e0)*0.5*q/np.cosh(np.clip(q*np.log(np.maximum(r, 1e-30)/rc), -300, 300))**2/np.maximum(r, 1e-30)
    return C, dC, e0

def solve23(gg, model):
    C, dC, Cmin = model
    Phi = K.solve_poisson_fast(gg.g, C(gg.rho), gg.Mc, Cmin, gg.Mtot)
    dR = np.gradient(Phi, gg.g.Rc, axis=0, edge_order=2); dz = np.gradient(Phi, gg.g.zc, axis=1, edge_order=2)
    Psi = dC(gg.rho)*(dR**2 + dz**2)/(8*np.pi*G)
    gs = np.gradient(Psi, gg.g.Rc, axis=0, edge_order=2)[:, 0]      # +ve = extra inward pull
    g2 = dR[:, 0]
    R = gg.d["R"]
    g2R = np.interp(R, gg.g.Rc, g2); gsR = np.interp(R, gg.g.Rc, gs)
    den = np.where(gg.ok, gg.gN, 1.0)
    B2 = np.where(gg.ok, g2R/den, 1.0); B3 = np.where(gg.ok, (g2R + gsR)/den, 1.0)
    return B2, B3, gsR/np.where(np.abs(g2R) > 0, g2R, 1.0)

gal = K.load_sparc(); gids = sorted(gal); t0 = time.time()
GU = {u: [] for u in UPS_GRID}
for gid in gids:
    try:
        tmp = {u: Gal(gal[gid], "bershady", "vgas", u) for u in UPS_GRID}
    except Exception as e:
        print("skip", gid, e); continue
    for u in UPS_GRID: GU[u].append(tmp[u])
NG = len(GU[0.5]); print(f"built {NG} galaxies x {len(UPS_GRID)} Upsilon in {time.time()-t0:.0f}s", flush=True)

ref = summarise("MOND", [profiled([GU[u][i].score(K.mond_simple(GU[u][i].gbar_sparc)*GU[u][i].d["R"]) for u in UPS_GRID])
                         for i in range(NG)])
print(f"MOND simple mu chi2/N = {ref['chi2_per_pt']:.2f}")

def score(make):
    s2, s3, ratio = [], [], []
    for i in range(NG):
        a2, a3 = [], []
        for u in UPS_GRID:
            gg = GU[u][i]; m = make(max(gg.d["props"]["Vflat"], 10.0))
            B2, B3, r = solve23(gg, m)
            a2.append(gg.score(B2*gg.vbar2)); a3.append(gg.score(np.clip(B3, 0, None)*gg.vbar2))
            if u == 0.5: ratio.extend(np.abs(r[gg.ok]).tolist())
        s2.append(profiled(a2)); s3.append(profiled(a3))
    S2, S3 = summarise("L2", s2), summarise("L3", s3)
    c2, c3 = np.array(S2["per_gal_chi2"]), np.array(S3["per_gal_chi2"])
    return S2, S3, np.array(ratio), np.mean(c3 < c2)

print("\nFIXED MODELS  (chi2/N profiled over Upsilon; |g_strict/g_L2| at Ups 0.5 over scored points)")
models = {
 "site  gamma=.489 rho_c=0.029V^2 floor=Om (Q1)": lambda V: fw(0.489, 0.029*V**2, OM),
 "Jeans gamma=.489 rho_c=0.161   floor=Om (Q1)": lambda V: fw(0.489, 0.161, OM),
 "site  gamma=2   rho_c=0.029V^2 floor=Om": lambda V: fw(2.0, 0.029*V**2, OM),
 "RG-form best L2 grid fl=.315 q=.47 rc=1.47e-3 (Q2)": lambda V: rg(0.315, 0.47, 0.0014678),
 "fw-form fl=.315 rc=3.16e-4": lambda V: fw(0.489, 3.162e-4, OM),
 "RG Cesare22-E0 e0=.089 q=.47 rc=8.3e-3": lambda V: rg(0.089, 0.47, 8.3e-3),
 "RG DMS-mean e0=.56 Q=.92 rc=7.4e-4": lambda V: rg(0.56, 0.92, 7.4e-4),
 "RG DMS-unique e0=.661 Q=1.79 rc=4.3e-3": lambda V: rg(0.661, 1.79, 4.3e-3),
}
for n, mk in models.items():
    S2, S3, r, w = score(mk)
    print(f"  {n:52s} L2 {S2['chi2_per_pt']:8.2f}  L3 {S3['chi2_per_pt']:8.2f}  d {100*(S3['chi2_per_pt']/S2['chi2_per_pt']-1):+7.1f}%"
          f"   |gs/g| med {np.median(r):.2e} 90% {np.percentile(r,90):.2e} max {r.max():.2e}   L3 better in {w:.2f} gal", flush=True)

print("\nGRID under first-order L3 (chi2/N; L2 in brackets)")
for form in ("framework", "RG"):
    print(f"  --- {form} form ---")
    for fl in (0.089, 0.15, 0.315, 0.661):
        row = []
        for rc in np.logspace(-3.5, -0.5, 5):
            mk = (lambda V, fl=fl, rc=rc: fw(0.489, rc, fl)) if form == "framework" else (lambda V, fl=fl, rc=rc: rg(fl, 0.47, rc))
            S2, S3, r, w = score(mk); row.append(f"{S3['chi2_per_pt']:7.1f} [{S2['chi2_per_pt']:6.1f}]")
        print(f"  fl {fl:5.3f}  " + "  ".join(row), flush=True)
print(f"  rho_c columns (Msun/pc^3): " + " ".join(f"{x:.3g}" for x in np.logspace(-3.5, -0.5, 5)))
print(f"elapsed {time.time()-t0:.0f}s")
