#!/usr/bin/env python3
"""
Adjudicating the four rho_crit placements for a globular cluster, using only
the Baumgardt & Hilker catalogue.

(1) M/L test.  If rho_crit = A V_flat^2 is evaluated with the HOST galaxy's
    V_flat = 220 km/s, then rho_crit = 1400 Msun/pc^3 and every part of a
    globular cluster outside ~2 pc sits below the knee, at the coherence floor
    C = Omega_m.  The boost is then a CONSTANT 1/Omega_m = 3.175 -- exactly the
    'G -> G/Omega_m' degeneracy the archive already found for discs.  It is
    invisible to the shape of sigma(r) but it divides the dynamical mass by
    3.175, and therefore divides M/L_V by 3.175.  Stellar populations set a
    hard floor on M/L_V for a 12 Gyr metal-poor population.

(2) Slope test.  Model-referenced: measured outer d log sigma / d log r against
    the Newtonian prediction for the SAME radii and the same mass model.

(3) Discriminating power.  The density law has no external field effect and MOND
    does; but cluster density and Galactocentric distance are correlated in the
    real population, so the two predicted boost patterns may be collinear anyway.
    Measure the collinearity before claiming globular clusters discriminate.
"""
import json, math
import numpy as np
from gc_knee_jeans_test import ModHubble, sigma_los, C_floored, C_unfloored

OMEGA_M = 0.315

def weighted_slope(r, s, e):
    X, Y = np.log10(r), np.log10(s)
    w = 1.0/(e/s)**2
    W, Sx, Sy = w.sum(), (w*X).sum(), (w*Y).sum()
    Sxx, Sxy = (w*X*X).sum(), (w*X*Y).sum()
    den = W*Sxx - Sx*Sx
    if den <= 0: return np.nan, np.nan
    return (W*Sxy - Sx*Sy)/den, math.sqrt(W/den)

def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']
    disc = {r['name']: r for r in json.load(open('gc_efe_discriminator.json'))}

    # ---------------- (1) M/L test ----------------
    print("="*100)
    print("(1) M/L_V TEST -- the saturated placement rho_crit = A x (220 km/s)^2")
    print("="*100)
    ml = [(n, c['M']/ (10**(-0.4*(c['V']-4.83)) if c.get('V') else np.nan))
          for n, c in cl.items()]
    # the catalogue gives M/L_V directly; re-read it
    import re, html as H
    raw = open('/tmp/gcparam.html', encoding='utf-8', errors='replace').read()
    t = re.search(r"<table id='sort', class=\"table1\">.*?</table>", raw, re.S).group(0)
    rows = re.findall(r'<tr.*?</tr>', t, re.S)
    def cells(row):
        cs = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.S)
        return [H.unescape(re.sub('<[^>]+>', '', c)).replace('\xa0',' ').strip() for c in cs]
    hdr = cells(rows[0]); idx = hdr.index('M/LV[M☉/L☉]'); idxm = hdr.index('Mass[M☉]')
    mlv = []
    for r in rows[1:]:
        c = cells(r)
        if len(c) != len(hdr): continue
        m = re.match(r'\s*(\d+\.?\d*)', c[idx])
        if m: mlv.append(float(m.group(1)))
    mlv = np.array([v for v in mlv if 0 < v < 10])
    print(f"  N = {len(mlv)} clusters with a measured M/L_V")
    print(f"  observed M/L_V : median {np.median(mlv):.2f}, "
          f"16-84% [{np.percentile(mlv,16):.2f}, {np.percentile(mlv,84):.2f}]")
    print(f"  if the boost is a uniform 1/Omega_m = {1/OMEGA_M:.3f}, the STELLAR M/L_V must be")
    print(f"     median {np.median(mlv)*OMEGA_M:.2f}, "
          f"16-84% [{np.percentile(mlv,16)*OMEGA_M:.2f}, {np.percentile(mlv,84)*OMEGA_M:.2f}]")
    print(f"  simple stellar populations at 12 Gyr, [Fe/H] = -1.5, Kroupa IMF give M/L_V ~ 1.5-2.5")
    print(f"     (Maraston 2005; BaSTI, Pietrinferni+2004; McLaughlin & van der Marel 2005 measure")
    print(f"      a population-model median of ~1.5-2.0 for Galactic GCs)")
    frac = np.mean(mlv*OMEGA_M < 1.2)
    print(f"  fraction of clusters pushed below M/L_V = 1.2 (an absolute floor for any old")
    print(f"     metal-poor population without a bottom-light IMF): {frac:.2f}")

    # ---------------- (2) model-referenced slope test ----------------
    print("\n" + "="*100)
    print("(2) OUTER SLOPE, MEASURED vs PREDICTED  (outer factor 3 in radius, >=5 bins)")
    print("="*100)
    print(f"{'cluster':13s}{'R_GC':>6s}{'nb':>4s}{'meas':>8s}{'+-':>6s}{'Newt':>8s}"
          f"{'meas0.161':>10s}{'AV2sig':>8s}{'AV2host':>9s}{'MONDish':>8s}")
    rec = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','sigma0')): continue
        D = c['R_sun']*1000.0
        b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
        b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]
        b.sort()
        if len(b) < 10: continue
        rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b])
        ee = np.array([x[2] for x in b])
        m = rr > rr.max()/3.0
        if m.sum() < 5: continue
        sm, se = weighted_slope(rr[m], ss[m], ee[m])
        mod = ModHubble(c['M'], c['r_c'], c['r_t'])
        out = {}
        for lab, rc_, law in (('newt', 1.0, None),
                              ('meas', 0.161, C_floored),
                              ('avs', 0.029*c['sigma0']**2, C_floored),
                              ('avh', 0.029*220.0**2, C_floored)):
            mo = sigma_los(mod, rc_, law, 1.0, rr[m])
            ok = np.isfinite(mo) & (mo > 0)
            out[lab] = weighted_slope(rr[m][ok], mo[ok], ee[m][ok]*0+1e-3)[0] if ok.sum() >= 3 else np.nan
        dm = disc.get(name, {})
        print(f"{name:13s}{c['R_GC']:6.1f}{int(m.sum()):4d}{sm:8.3f}{se:6.3f}{out['newt']:8.3f}"
              f"{out['meas']:10.3f}{out['avs']:8.3f}{out['avh']:9.3f}{dm.get('B_mond',np.nan):8.2f}")
        rec.append(dict(name=name, R_GC=c['R_GC'], obs=sm, e=se, **out,
                        B_mond=dm.get('B_mond', np.nan),
                        B_meas=dm.get('Bd_measured_0.161', np.nan)))
    arr = lambda k: np.array([x[k] for x in rec], dtype=float)
    print(f"\n  N = {len(rec)} clusters")
    for k, lab in (('newt','Newtonian'), ('meas','density law, knee 0.161'),
                   ('avs','density law, A V^2 (V=sigma_0)'), ('avh','density law, A V^2 (V=220)')):
        d_ = arr('obs') - arr(k)
        w = 1.0/arr('e')**2
        mn = np.nansum(d_*w)/np.nansum(w); sd = math.sqrt(1/np.nansum(w))
        print(f"    measured - {lab:34s} = {mn:+.3f} +- {sd:.3f}   ({abs(mn/sd):5.1f} sigma)"
              f"   rms {np.sqrt(np.nanmean(d_**2)):.3f}")

    # ---------------- (3) discriminating power ----------------
    print("\n" + "="*100)
    print("(3) DO GLOBULAR CLUSTERS ACTUALLY DISCRIMINATE?  collinearity of the two")
    print("    predicted boost patterns across the real cluster population")
    print("="*100)
    sub = [r for r in disc.values() if r['nbin'] >= 10]
    bm = np.array([r['B_mond'] for r in sub])
    for key, lab in (('Bd_measured_0.161','knee 0.161'), ('Bd_oort_0.113','knee 0.113'),
                     ('Bd_AV2_sigma0','A V^2 (V=sigma_0)'), ('Bd_AV2_host220','A V^2 (V=220)')):
        bd = np.array([r[key] for r in sub])
        if bd.std() < 1e-6:
            print(f"  {lab:22s}: predicted boost is CONSTANT ({bd.mean():.3f}) "
                  f"-> degenerate with the cluster mass, no shape signal at all")
            continue
        r_p = np.corrcoef(bm, bd)[0,1]
        r_s = np.corrcoef(np.argsort(np.argsort(bm)), np.argsort(np.argsort(bd)))[0,1]
        # scatter of MOND boost about the best linear function of the density boost
        A = np.vstack([bd, np.ones_like(bd)]).T
        res = bm - A@np.linalg.lstsq(A, bm, rcond=None)[0]
        print(f"  {lab:22s}: Pearson r = {r_p:+.3f}  Spearman {r_s:+.3f}   "
              f"residual spread of B_MOND about it = {res.std():.3f} "
              f"({100*res.std()/bm.mean():.1f}% of the mean boost)")
    lrgc = np.log10([r['R_GC'] for r in sub])
    lrho = np.log10([max(r['rho_out'],1e-6) for r in sub])
    print(f"\n  the confounder: corr(log rho at r_max, log R_GC) = {np.corrcoef(lrho,lrgc)[0,1]:+.3f}"
          f"  (N={len(sub)})")
    print("  outer-halo clusters are also the diffuse ones, so 'no EFE' and 'EFE' predict")
    print("  boost patterns that largely track each other in the real population.")

if __name__ == '__main__':
    main()
