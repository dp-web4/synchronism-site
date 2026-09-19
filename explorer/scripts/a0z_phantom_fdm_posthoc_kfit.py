#!/usr/bin/env python3
"""POST-HOC (not registered; written after a0z_highz_tfr_and_phantom_fdm.py returned a method-split verdict).
Q: do the published f_DM(R_e) want a LARGER a0, or an a0 that GROWS with z? Fit a constant multiple k of a0 in two
redshift bins, per f_DM method, and compare k_hi/k_lo with <E>_hi/<E>_lo. Also vary the assumed mass scatter."""
import numpy as np, importlib.util, os
spec = importlib.util.spec_from_file_location('m', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'a0z_highz_tfr_and_phantom_fdm.py'))
M = importlib.util.module_from_spec(spec); spec.loader.exec_module(M)
m, p, g = M.load()
ks = np.geomspace(0.1, 30, 240)

def chi2(tab, sel, a0fun, nu, sm):
    rng = np.random.default_rng(7); fac = 10 ** np.concatenate([[0.0], rng.normal(0, sm, 3000)])
    c = np.zeros_like(ks) if a0fun is None else 0.0
    for gid, r in m.items():
        z = float(r['z'])
        if gid not in tab or not sel(z): continue
        Mt = 10**float(r['logMstar']) + 10**float(r['logMgas']); bt = float(r['BT']); Re = float(r['Re_disk']); Rd = Re/1.678
        vN2 = M.vN2_freeman((1-bt)*Mt*fac, Rd, Re) + M.G*bt*Mt*fac/Re
        gN = vN2/Re*M.ACC
        t = tab[gid]; fo = float(t['fdm_re'])
        def one(a0):
            f = 1 - 1/nu(gN/a0)
            so = float(t['err']) if 'err' in t else (float(t['err_plus']) if f[0] > fo else float(t['err_minus']))
            return (fo - f[0])**2 / (max(so, 0.02)**2 + f[1:].std()**2)
        if a0fun is None: c += np.array([one(k*M.A0) for k in ks])
        else: c += one(a0fun(z))
    return c

def interval(c):
    i = c.argmin(); ok = ks[c <= c.min()+1]
    return ks[i], ok.min(), ok.max(), c.min()

for sm in (0.1, 0.2, 0.3):
    print(f'\n=== mass scatter {sm} dex ===')
    for nun, nu in (('simple', M.nu_simple), ('RAR', M.nu_rar)):
        for meth, tab in (('Price MCMC', p), ('Genzel LSQ', g)):
            zs_lo = [float(r['z']) for k_, r in m.items() if k_ in tab and float(r['z']) < 1.5]
            zs_hi = [float(r['z']) for k_, r in m.items() if k_ in tab and float(r['z']) >= 1.5]
            lo = interval(chi2(tab, lambda z: z < 1.5, None, nu, sm)); hi = interval(chi2(tab, lambda z: z >= 1.5, None, nu, sm))
            al = interval(chi2(tab, lambda z: True, None, nu, sm))
            cC = chi2(tab, lambda z: True, lambda z: M.A0, nu, sm); cA = chi2(tab, lambda z: True, lambda z: M.A0*M.E(z), nu, sm)
            Er = np.mean(M.E(np.array(zs_hi)))/np.mean(M.E(np.array(zs_lo)))
            print(f'{nun:6s} {meth:10s}: k_lo={lo[0]:.2f} [{lo[1]:.2f},{lo[2]:.2f}] (N={len(zs_lo)})  k_hi={hi[0]:.2f} [{hi[1]:.2f},{hi[2]:.2f}] (N={len(zs_hi)})'
                  f'  ratio={hi[0]/lo[0]:.2f}  (A predicts {Er:.2f}, C predicts 1)   | all-z: best const k={al[0]:.2f} chi2={al[3]:.1f}; C(k=1)={cC:.1f}; A={cA:.1f}')
