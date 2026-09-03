#!/usr/bin/env python3
r"""
Same-pipeline comparators for the identifiability audit (explorer 2026-09-03).
feedback_count_the_parameters_on_both_sides: the compander's chi2/N = 191.4 is
meaningless without MOND scored by the SAME code, the SAME nuisances and the
SAME coupling algebra.  Also: is the ONE identifiable number (s = gamma/rho_c)
universal across galaxies, or does it need one value per galaxy?
Nuisances FIXED: Ups 0.5/0.7, Vgas, Bershady h, Q<=2, inc>=30.  Nothing marginalised.
Output: parameter_identifiability_comparator_output.txt
"""
import os, sys
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K
KPC3 = 1.0e9
def hdr(s): print("\n" + "=" * 78 + "\n" + s + "\n" + "=" * 78, flush=True)

gals = K.load_sparc(); rows = []
for gid, d in gals.items():
    p = d["props"]; h = 0.196 * max(p["Rdisk"], 0.1)**0.633
    g = K.make_grid(d["R"][-1]); rho, Mc = K.build_density(g, d, h, 0.5, 0.7, "vgas")
    rho_mid = np.interp(d["R"], g.Rc, rho[:, 0]) / KPC3
    vbar, vbar2 = K.vbar_sparc(d, 0.5, 0.7)
    gbar = np.where(vbar2 > 0, vbar2 / d["R"], np.nan)
    Vflat = p["Vflat"] if p["Vflat"] > 0 else float(np.mean(d["Vobs"][-3:]))
    ok = (vbar2 > 0) & (d["Vobs"] > 0) & (d["eVobs"] > 0) & (rho_mid > 0)
    if ok.sum() < 3 or Vflat <= 0: continue
    rows.append(dict(gid=gid, R=d["R"][ok], Vobs=d["Vobs"][ok], eV=d["eVobs"][ok],
                     rho=rho_mid[ok], gbar=gbar[ok], Vflat=Vflat))
RHO=np.concatenate([r["rho"] for r in rows]);  VOBS=np.concatenate([r["Vobs"] for r in rows])
EV=np.concatenate([r["eV"] for r in rows]);    RR=np.concatenate([r["R"] for r in rows])
GBAR=np.concatenate([r["gbar"] for r in rows])
VF=np.concatenate([np.full(len(r["R"]), r["Vflat"]) for r in rows])
NPT=len(RHO); NG=len(rows)
def c2(V): return float(np.sum(((VOBS - V)/EV)**2))

hdr("same-pipeline comparators (all on the identical 153 galaxies / 3166 points)")
gm = K.mond_simple(GBAR)
print(f"  MOND simple mu, a0 = 1.2e-10 FIXED, 0 free params : chi2/N = {c2(np.sqrt(np.clip(RR*gm,0,None)))/NPT:.4g}")
best, ba = 1e99, None
for a0 in np.logspace(-11, -9.3, 120):
    K_A0 = a0
    x = GBAR / (K_A0/3.24078e-14)
    nu = 0.5 + np.sqrt(0.25 + 1.0/x)          # simple-mu nu(x)
    v = np.sqrt(np.clip(RR*GBAR*nu, 0, None))
    s = c2(v)
    if s < best: best, ba = s, a0
print(f"  MOND simple mu, a0 FITTED = {ba:.4e}, 1 free param     : chi2/N = {best/NPT:.4g}")
print(f"  Newtonian, 0 free params                             : chi2/N = {c2(np.sqrt(np.clip(RR*GBAR,0,None)))/NPT:.4g}")
print(f"  density-keyed compander, (gamma, A) BOTH free        : chi2/N = 191.4   [closeout (a)]")
print(f"  ratio compander(2 params) / MOND(0 params)           : {191.4/(c2(np.sqrt(np.clip(RR*gm,0,None)))/NPT):.3g}x")

hdr("is the ONE identifiable number s = gamma/rho_crit universal?")
sg = np.logspace(-8, 6, 1121)
per, ok_i = [], 0
for r in rows:
    Vp = np.sqrt(np.clip(r["R"]*r["gbar"],0,None)[None,:] / (sg[:,None]*r["rho"][None,:]))
    c = np.sum(((r["Vobs"][None,:] - Vp)/r["eV"][None,:])**2, axis=1)
    j = int(np.argmin(c))
    if j in (0, len(sg)-1): continue
    ok_i += 1; per.append((sg[j], c[j], len(r["R"])))
per = np.array(per)
ls = np.log10(per[:,0])
print(f"  interior solutions {ok_i}/{NG}")
print(f"  log10 s: median {np.median(ls):.3f}   16-84 pct [{np.percentile(ls,16):.3f}, {np.percentile(ls,84):.3f}]"
      f"   full range [{ls.min():.3f}, {ls.max():.3f}]  => spread {ls.max()-ls.min():.2f} dex")
print(f"  per-galaxy s (153 free params) chi2/N = {per[:,1].sum()/NPT:.4g}")
sgl = np.logspace(-8, 6, 2241)
Vp = np.sqrt(np.clip(RR*GBAR,0,None)[None,:] / (sgl[:,None]*RHO[None,:]))
cg = np.sum(((VOBS[None,:] - Vp)/EV[None,:])**2, axis=1)
j = int(np.argmin(cg))
print(f"  universal s (1 free param)     chi2/N = {cg[j]/NPT:.4g}  at s = {sgl[j]:.4e}"
      f"  edge? {j in (0, len(sgl)-1)}")
print(f"  cost of forcing s universal: dchi2 = {cg[j]-per[:,1].sum():+.4g} for 152 fewer params")
print("\nDONE")
