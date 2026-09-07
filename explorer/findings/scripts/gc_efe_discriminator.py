#!/usr/bin/env python3
"""
The discriminator globular clusters actually offer.

A density-keyed coherence law has NO external field effect: the boost outside the
knee is 1/C_min = 1/Omega_m = 3.175 for every cluster, whatever its Galactocentric
distance.  MOND's boost in a cluster's outskirts is set by the EXTERNAL field
g_ext = V_c^2/R_GC, so it runs from ~1 for bulge clusters to ~7 for outer-halo
clusters.  The two frameworks therefore differ in a variable neither of them fits:
the correlation of the outer dynamical excess with R_GC.

This script computes, per cluster:
  - g_int at the outermost measured bin, g_ext at its orbit, both in units of a0
  - B_density : the density-law boost there, per knee placement (floored + unfloored)
  - B_MOND    : the 1-D EFE-corrected MOND boost there
  - the MEASURED outer logarithmic slope of sigma(r), against the Newtonian
    expectation for the same radii -- a model-light look at whether the profiles
    flatten at all (Scarpa+2003-11 and Hernandez+2012 claim they do).
"""
import json, math
import numpy as np

G = 4.30091e-3
A0 = 3.702                # a0 = 1.2e-10 m/s^2 expressed in (km/s)^2 / pc
V_MW = 233.0              # local circular speed, Eilers+2019
OMEGA_M, GAMMA = 0.315, 0.489
MSUN_PC3_TO_KGM3 = 6.7699e-20

def mu_simple(x):   return x/(1.0+x)
def nu_simple(y):   return 0.5 + math.sqrt(0.25 + 1.0/y)      # inverse of simple mu

def C_floor(x):     return OMEGA_M + (1-OMEGA_M)*math.tanh(GAMMA*math.log1p(x))
def C_nofloor(x):   return math.tanh(GAMMA*math.log1p(x))

class ModHubble:
    def __init__(s, M, r_c, r_t):
        s.rc, s.r_t = r_c, r_t
        x = r_t/r_c
        s.rho0 = M/(4*math.pi*r_c**3*(math.asinh(x)-x/math.sqrt(1+x**2)))
    def rho(s, r): return s.rho0*(1+(r/s.rc)**2)**-1.5 if r < s.r_t else 0.0
    def Menc(s, r):
        r = min(r, s.r_t); x = r/s.rc
        return 4*math.pi*s.rho0*s.rc**3*(math.asinh(x)-x/math.sqrt(1+x**2))

def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']
    rows = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')):
            continue
        D = c['R_sun']*1000.0
        bins = [(b['r_arcsec']*D/206265.0, b['sigma'], 0.5*(b['e_up']+b['e_low']), b['type'])
                for b in p]
        bins = [b for b in bins if b[2] > 0 and b[0] < c['r_t']]
        if len(bins) < 6: continue
        bins.sort()
        rmax = bins[-1][0]
        mod = ModHubble(c['M'], c['r_c'], c['r_t'])
        g_int = G*mod.Menc(rmax)/rmax**2
        g_ext = V_MW**2/(c['R_GC']*1000.0)
        rho_out = mod.rho(rmax)

        # --- density-law boosts at the outermost measured radius
        knees = {'measured_0.161': 0.161,
                 'oort_0.113': 0.113,
                 'AV2_sigma0': 0.029*c['sigma0']**2,
                 'AV2_host220': 0.029*220.0**2}
        B_dens = {k: 1.0/C_floor(rho_out/v) for k, v in knees.items()}
        B_dens_nf = {k: 1.0/C_nofloor(rho_out/v) for k, v in knees.items()}

        # --- MOND with the 1-D external field effect
        # g_tot solves  g_tot mu(|g_tot+g_ext|/a0) = g_int  (aligned 1-D approximation)
        lo, hi = g_int, g_int*50 + 1e-9
        for _ in range(200):
            mid = 0.5*(lo+hi)
            if mid*mu_simple((mid+g_ext)/A0) < g_int: lo = mid
            else: hi = mid
        B_mond = 0.5*(lo+hi)/g_int

        # --- measured outer slope of sigma(r), outer half-decade of the profile
        rr = np.array([b[0] for b in bins]); ss = np.array([b[1] for b in bins])
        ee = np.array([b[2] for b in bins])
        m = rr > rmax/3.0
        slope = np.nan; nsl = int(m.sum())
        if nsl >= 4:
            w = 1.0/ (ee[m]/ss[m])**2
            X = np.log10(rr[m]); Y = np.log10(ss[m])
            W = np.sum(w); Sx = np.sum(w*X); Sy = np.sum(w*Y)
            Sxx = np.sum(w*X*X); Sxy = np.sum(w*X*Y)
            den = W*Sxx - Sx*Sx
            slope = (W*Sxy - Sx*Sy)/den if den > 0 else np.nan
            slope_e = math.sqrt(W/den) if den > 0 else np.nan
        else:
            slope_e = np.nan
        rows.append(dict(name=name, R_GC=c['R_GC'], M=c['M'], r_hm=c['r_hm'], rmax=rmax,
                         rmax_rhm=rmax/c['r_hm'], nbin=len(bins), nsl=nsl,
                         g_int_a0=g_int/A0, g_ext_a0=g_ext/A0, rho_out=rho_out,
                         B_mond=B_mond, slope=slope, slope_e=slope_e,
                         **{f'Bd_{k}': v for k, v in B_dens.items()},
                         **{f'Bnf_{k}': v for k, v in B_dens_nf.items()}))

    rows.sort(key=lambda r: r['R_GC'])
    print(f"# {len(rows)} clusters with >=6 usable bins\n")
    print("="*118)
    print("BOOST AT THE OUTERMOST MEASURED RADIUS -- density law (no EFE) vs MOND (EFE)")
    print("="*118)
    print(f"{'cluster':13s}{'R_GC':>6s}{'r_max':>7s}{'r/rhm':>6s}{'rho_out':>9s}"
          f"{'g_int/a0':>9s}{'g_ext/a0':>9s}{'B_MOND':>8s}{'B_meas':>8s}{'B_oort':>8s}"
          f"{'B_AV2s':>8s}{'B_AV2h':>8s}{'d ln s':>8s}")
    for r in rows:
        if r['nbin'] < 10: continue
        print(f"{r['name']:13s}{r['R_GC']:6.1f}{r['rmax']:7.1f}{r['rmax_rhm']:6.1f}"
              f"{r['rho_out']:9.3f}{r['g_int_a0']:9.3f}{r['g_ext_a0']:9.2f}{r['B_mond']:8.2f}"
              f"{r['Bd_measured_0.161']:8.2f}{r['Bd_oort_0.113']:8.2f}"
              f"{r['Bd_AV2_sigma0']:8.2f}{r['Bd_AV2_host220']:8.2f}"
              f"{r['slope']:8.2f}")

    # --- the discriminating regression: does the outer boost demand track R_GC?
    print("\n" + "="*118)
    print("THE DISCRIMINATOR: spread of the predicted outer boost with R_GC")
    print("="*118)
    sub = [r for r in rows if r['nbin'] >= 10]
    x = np.log10([r['R_GC'] for r in sub])
    for key, lab in (('B_mond', 'MOND + EFE'),
                     ('Bd_measured_0.161', 'density law, measured knee 0.161'),
                     ('Bd_oort_0.113', 'density law, Oort knee 0.113'),
                     ('Bd_AV2_sigma0', 'density law, A V^2 (V = sigma_0)'),
                     ('Bd_AV2_host220', 'density law, A V^2 (V = 220)')):
        y = np.array([r[key] for r in sub])
        s = np.polyfit(x, y, 1)[0]
        print(f"  {lab:36s}  B range {y.min():5.2f}-{y.max():5.2f}  median {np.median(y):5.2f}"
              f"   d B / d log R_GC = {s:+6.2f}")
    print("\n  Density-law slopes are nonzero only because rho_out differs between clusters,")
    print("  not because of any environmental coupling: the law has no g_ext.")

    # --- measured slopes vs Newtonian expectation
    print("\n" + "="*118)
    print("MEASURED OUTER LOG-SLOPE d log sigma / d log r  (outer factor 3 in radius)")
    print("="*118)
    sl = np.array([r['slope'] for r in rows if r['nsl'] >= 4 and np.isfinite(r['slope'])])
    se = np.array([r['slope_e'] for r in rows if r['nsl'] >= 4 and np.isfinite(r['slope'])])
    print(f"  N = {len(sl)} clusters with >=4 outer bins")
    print(f"  median slope        = {np.median(sl):+.3f}")
    print(f"  inverse-var mean    = {np.sum(sl/se**2)/np.sum(1/se**2):+.3f}"
          f" +- {math.sqrt(1/np.sum(1/se**2)):.3f}")
    print(f"  Keplerian (point mass, sigma ~ r^-1/2) would be -0.500")
    print(f"  flat (MOND-like / boosted floor) would be  0.000")
    print(f"  fraction with slope > -0.25 : {np.mean(sl > -0.25):.2f}")
    print(f"  fraction with slope < -0.40 : {np.mean(sl < -0.40):.2f}")
    json.dump(rows, open('gc_efe_discriminator.json', 'w'), indent=0)

if __name__ == '__main__':
    main()
