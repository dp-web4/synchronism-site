#!/usr/bin/env python3
"""
Globular clusters as the one class of objects that crosses the coherence knee.

Registered in the Synchronism archive as S611 P611.2 and never executed.
This is the execution, on Baumgardt & Hilker's public N-body-fit catalogue
(165 clusters) + their binned velocity-dispersion profiles (2025 bins).

The test
--------
The density-keyed law boosts gravity where rho < rho_crit:
      C(rho) = tanh(gamma ln(1 + rho/rho_crit))                [site, equations.ts]
      C(rho) = Om + (1-Om) tanh(gamma ln(1 + rho/rho_crit))    [ledger, floored]
      g = g_N / C(rho)
Inside a globular cluster rho falls by ~7 decades from the core to the tidal
radius, so *every* candidate knee placement is crossed somewhere inside the
cluster.  That makes B(r) = 1/C(rho(r)) a RADIALLY VARYING boost: ~1 in the
core, large outside.  A radially varying boost is NOT degenerate with the
cluster mass -- it changes the SHAPE of sigma_los(R).  That is the test.

MOND's external field effect does the opposite: for a cluster deep in the
Galactic field (g_ext >~ a0) the internal dynamics are quasi-Newtonian with
G_eff = G/mu(g_ext/a0), a CONSTANT rescaling -- degenerate with M/L, no shape
change.  So globular clusters discriminate: one framework predicts a shape
change, the other predicts a normalization change.
"""
import json, math, sys
import numpy as np

G = 4.30091e-3          # pc (km/s)^2 / Msun
MSUN_PC3_TO_KGM3 = 6.7699e-20
A0 = 1.2e-10            # m/s^2
A0_PC = A0 * (3.0857e16) / (1e3)**2   # -> (km/s)^2 / pc  = a0 in pc/(km/s)^2 units
OMEGA_M = 0.315
GAMMA = 0.489           # SPARC best fit

# ---------------------------------------------------------------- knee placements
# name -> rho_crit in Msun/pc^3, provenance
def rho_crit_placements(sigma0, R_GC):
    V_host = 220.0
    return {
        'measured_jeans':   (0.161,  "explorer 2026-08-27: rho_crit propto V^(-0.15+-0.18), "
                                     "velocity-blind, median 0.161 Msun/pc^3 on SPARC N=129"),
        'measured_lo':      (0.161/10**0.45, "same, -1 sigma of the 0.45 dex scatter"),
        'measured_hi':      (0.161*10**0.45, "same, +1 sigma of the 0.45 dex scatter"),
        'oort_window_mid':  (0.113,  "explorer 2026-09-06: 2-sigma Oort-limit window 0.074-0.154"),
        'site_A_V2_host':   (0.029*V_host**2, "site equations.ts rho_crit=A V^2 with V = host V_flat = 220"),
        'site_A_V2_sigma':  (0.029*sigma0**2 if sigma0 else None,
                                     "site equations.ts with V = the cluster's own sigma_0"),
        'session53_V05':    (0.028*math.sqrt(sigma0) if sigma0 else None,
                                     "Session 53's actual derivation rho_crit = A V^0.5, V = sigma_0"),
        's691_1e23':        (1e-23/MSUN_PC3_TO_KGM3, "S691 rho_crit = 1e-23 kg/m^3"),
    }

# ---------------------------------------------------------------- mass models
class Plummer:
    """rho propto (1+r^2/a^2)^{-5/2}; a = r_hm/1.30477.  Steep (r^-5) outer tail."""
    label = 'plummer'
    def __init__(self, M, r_hm, r_t):
        self.a = r_hm / 1.30477
        self.r_t = r_t
        # normalise so that M(<r_t) = M  (Plummer M(<r)=M_tot r^3/(r^2+a^2)^{3/2})
        frac = r_t**3 / (r_t**2 + self.a**2)**1.5
        self.M_tot = M / frac
        self.M = M
    def rho(self, r):
        return 3*self.M_tot/(4*math.pi*self.a**3) * (1 + (r/self.a)**2)**-2.5
    def Menc(self, r):
        return self.M_tot * r**3 / (r**2 + self.a**2)**1.5

class ModHubble:
    """rho propto (1+(r/r_c)^2)^{-3/2}, truncated at r_t.  Analytic King approximation,
    shallow (r^-3) outer tail -- puts the knee FARTHER out than Plummer, i.e. the
    conservative model for this test."""
    label = 'king-like'
    def __init__(self, M, r_c, r_t):
        self.rc, self.r_t = r_c, r_t
        x = r_t/r_c
        shape = math.asinh(x) - x/math.sqrt(1+x**2)
        self.rho0 = M / (4*math.pi*r_c**3*shape)
        self.M = M
    def rho(self, r):
        return self.rho0*(1+(r/self.rc)**2)**-1.5 if r < self.r_t else 0.0
    def Menc(self, r):
        r = min(r, self.r_t); x = r/self.rc
        return 4*math.pi*self.rho0*self.rc**3*(math.asinh(x) - x/math.sqrt(1+x**2))

# ---------------------------------------------------------------- coherence
def C_unfloored(x):    return np.tanh(GAMMA*np.log1p(x))
def C_floored(x):      return OMEGA_M + (1-OMEGA_M)*np.tanh(GAMMA*np.log1p(x))

# ---------------------------------------------------------------- Jeans
def sigma_los(model, rho_crit, law, f_mass, Rbins, ngrid=600):
    """Isotropic spherical Jeans, tracer = mass.  f_mass scales the total mass
    (and therefore rho, and therefore the boost).  Returns sigma_los at Rbins."""
    r_t = model.r_t
    r = np.geomspace(max(1e-3, r_t*1e-5), r_t*(1-1e-9), ngrid)
    rho = f_mass*np.array([model.rho(x) for x in r])
    Menc = f_mass*np.array([model.Menc(x) for x in r])
    gN = G*Menc/r**2
    if law is None:
        g = gN
    else:
        C = law(rho/rho_crit)
        g = gN/C
    # P(r) = rho sigma_r^2 = int_r^{r_t} rho g ds     (P(r_t)=0)
    integ = rho*g
    P = np.concatenate([np.cumsum((integ[:-1]+integ[1:])/2*np.diff(r))[::-1]*0, [0.0]])
    # proper reverse cumulative trapezoid
    dP = (integ[:-1]+integ[1:])/2*np.diff(r)
    P = np.concatenate([np.cumsum(dP[::-1])[::-1], [0.0]])
    out = np.zeros(len(Rbins))
    for i, R in enumerate(Rbins):
        if R >= r_t*0.999: out[i] = np.nan; continue
        m = r > R
        rr, Pr, rhor = r[m], P[m], rho[m]
        w = rr/np.sqrt(np.maximum(rr**2 - R**2, 1e-12))
        num = np.trapz(2*Pr*w, rr)
        den = np.trapz(2*rhor*w, rr)
        out[i] = math.sqrt(max(num/den, 0.0)) if den > 0 else np.nan
    return out

def fit_mass_scale(model, rho_crit, law, R, sig, err, grid=None):
    """1-parameter fit of the mass scale; returns (chi2, f_best)."""
    if grid is None: grid = np.geomspace(0.2, 5.0, 45)
    best = (np.inf, np.nan)
    for f in grid:
        m = sigma_los(model, rho_crit, law, f, R)
        ok = np.isfinite(m)
        if ok.sum() < 3: continue
        chi2 = float(np.sum(((sig[ok]-m[ok])/err[ok])**2))
        if chi2 < best[0]: best = (chi2, f)
    return best

# ---------------------------------------------------------------- main
def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']

    # selection: enough bins, enough radial reach, well-measured structure
    sel = []
    for name, p in pr.items():
        if name not in cl: continue
        c = cl[name]
        if not all(c.get(k) for k in ('M', 'r_hm', 'r_t', 'r_c', 'R_sun')): continue
        D = c['R_sun']*1000.0
        rows = [(b['r_arcsec']*D/206265.0, b['sigma'], 0.5*(b['e_up']+b['e_low']), b['type'])
                for b in p]
        rows = [x for x in rows if x[2] > 0 and x[0] < c['r_t']]
        if len(rows) < 10: continue
        rmax = max(x[0] for x in rows)
        if rmax/c['r_hm'] < 2.0: continue
        sel.append((name, c, rows))
    sel.sort(key=lambda t: -t[1]['M'])
    print(f"# selected clusters: {len(sel)}  (>=10 bins inside r_t, radial reach >= 2 r_hm)")
    print(f"# total bins used: {sum(len(s[2]) for s in sel)}")

    # ---- Part 1: where does the knee sit inside a cluster, per placement?
    print("\n" + "="*100)
    print("PART 1 -- IS THE KNEE INSIDE THE DATA?  r_knee (local rho = rho_crit), King-like model")
    print("="*100)
    hdr = f"{'cluster':14s}{'M[1e5]':>8s}{'r_hm':>7s}{'r_t':>8s}{'r_max':>8s}"
    keys = ['measured_jeans', 'oort_window_mid', 'site_A_V2_sigma', 'site_A_V2_host', 's691_1e23']
    for k in keys: hdr += f"{k[:12]:>14s}"
    print(hdr)
    knee_tab = {}
    for name, c, rows in sel[:22]:
        mod = ModHubble(c['M'], c['r_c'], c['r_t'])
        rmax = max(x[0] for x in rows)
        line = (f"{name:14s}{c['M']/1e5:8.2f}{c['r_hm']:7.2f}{c['r_t']:8.1f}{rmax:8.1f}")
        rr = np.geomspace(c['r_c']*1e-2, c['r_t']*0.999, 4000)
        rho = np.array([mod.rho(x) for x in rr])
        pl = rho_crit_placements(c['sigma0'], c['R_GC'])
        for k in keys:
            rc_ = pl[k][0]
            if rc_ is None: line += f"{'--':>14s}"; continue
            idx = np.where(rho < rc_)[0]
            rk = rr[idx[0]] if len(idx) else float('inf')
            flag = '*' if rk < rmax else ' '
            lab = f'{rk:.1f}' if np.isfinite(rk) else '>r_t'
            line += f"{lab:>13s}{flag}"
            knee_tab.setdefault(k, []).append((name, rk, rmax))
        print(line)
    print("  * = knee falls INSIDE the radius range where sigma is measured  ->  testable")
    for k in keys:
        v = knee_tab.get(k, [])
        n_in = sum(1 for _, rk, rm in v if rk < rm)
        print(f"    {k:20s}: knee inside the data for {n_in}/{len(v)} clusters")

    # ---- Part 2: the shape test
    print("\n" + "="*100)
    print("PART 2 -- SHAPE TEST.  Free mass scale f under each dynamics; chi2 over the")
    print("          binned sigma profile.  A radially varying boost cannot be absorbed by f.")
    print("="*100)
    results = []
    for name, c, rows in sel:
        R = np.array([x[0] for x in rows]); sig = np.array([x[1] for x in rows])
        er = np.array([x[2] for x in rows])
        for MM, mklab in ((ModHubble(c['M'], c['r_c'], c['r_t']), 'king'),
                          (Plummer(c['M'], c['r_hm'], c['r_t']), 'plum')):
            chiN, fN = fit_mass_scale(MM, 1.0, None, R, sig, er)
            row = dict(name=name, model=mklab, nbin=len(rows), M=c['M'], R_GC=c['R_GC'],
                       r_hm=c['r_hm'], rmax=float(R.max()), chi2_newt=chiN, f_newt=fN)
            pl = rho_crit_placements(c['sigma0'], c['R_GC'])
            for k in ['measured_jeans', 'oort_window_mid', 'site_A_V2_sigma', 'site_A_V2_host']:
                rc_ = pl[k][0]
                if rc_ is None: continue
                for lawname, law in (('floor', C_floored), ('nofloor', C_unfloored)):
                    ch, ff = fit_mass_scale(MM, rc_, law, R, sig, er)
                    row[f'chi2_{k}_{lawname}'] = ch
                    row[f'f_{k}_{lawname}'] = ff
            results.append(row)
        if len(results) % 20 == 0:
            print(f"  ... {len(results)//2} clusters done", file=sys.stderr)

    json.dump(results, open('gc_knee_jeans_results.json', 'w'), indent=0)

    for mk in ('king', 'plum'):
        rs = [r for r in results if r['model'] == mk]
        print(f"\n--- mass model: {mk}   ({len(rs)} clusters) ---")
        print(f"{'cluster':14s}{'n':>4s}{'R_GC':>7s}{'chi2/n N':>10s}"
              f"{'meas+fl':>10s}{'meas-fl':>10s}{'oort+fl':>10s}{'AV2sig+fl':>11s}{'AV2host+fl':>12s}")
        tot = {k: 0.0 for k in ('N', 'mf', 'mn', 'of', 'sf', 'hf')}
        ntot = 0
        for r in sorted(rs, key=lambda x: -x['M'])[:22]:
            g = lambda k: r.get(k, float('nan'))/r['nbin']
            print(f"{r['name']:14s}{r['nbin']:4d}{r['R_GC']:7.1f}{r['chi2_newt']/r['nbin']:10.2f}"
                  f"{g('chi2_measured_jeans_floor'):10.2f}{g('chi2_measured_jeans_nofloor'):10.2f}"
                  f"{g('chi2_oort_window_mid_floor'):10.2f}"
                  f"{g('chi2_site_A_V2_sigma_floor'):11.2f}{g('chi2_site_A_V2_host_floor'):12.2f}")
        for r in rs:
            ntot += r['nbin']
            tot['N'] += r['chi2_newt']
            tot['mf'] += r.get('chi2_measured_jeans_floor', 0)
            tot['mn'] += r.get('chi2_measured_jeans_nofloor', 0)
            tot['of'] += r.get('chi2_oort_window_mid_floor', 0)
            tot['sf'] += r.get('chi2_site_A_V2_sigma_floor', 0)
            tot['hf'] += r.get('chi2_site_A_V2_host_floor', 0)
        print(f"\n  STACKED over {len(rs)} clusters, {ntot} bins, 1 free parameter each:")
        for k, lab in (('N', 'Newtonian'), ('mf', 'measured knee 0.161, floored'),
                       ('mn', 'measured knee 0.161, unfloored'),
                       ('of', 'Oort-window knee 0.113, floored'),
                       ('sf', 'A V^2 with V=sigma_0, floored'),
                       ('hf', 'A V^2 with V=220, floored')):
            print(f"    {lab:36s} chi2 = {tot[k]:10.1f}   chi2/dof = {tot[k]/(ntot-len(rs)):7.3f}"
                  f"   Dchi2 vs Newtonian = {tot[k]-tot['N']:+10.1f}")

if __name__ == '__main__':
    main()
