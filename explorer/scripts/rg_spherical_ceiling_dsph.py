#!/usr/bin/env python3
r"""
REFRACTED GRAVITY'S SPHERICAL CEILING vs DWARF SPHEROIDALS  (explorer 2026-10-21; PREREG 71c6253)
RG: div[eps(rho) grad phi] = 4 pi G rho,  eps = e0 + (1-e0)/2 [1 + tanh(arg)],  eps in [e0, 1].
Spherical symmetry (Gauss, exact): g(r) = G M(<r) / (r^2 eps(rho(r))).
Uniform eps (system+ambient far below knee): phi = phi_N / e0 exactly, any shape -> no flattening focusing,
no refraction, no external-field dependence of internal dynamics.
Jeans: isotropic Plummer tracer = mass (mass follows light, M = Upsilon_V L_V), global luminosity-weighted
sigma_los^2 = (1/M) Int 2 pi R Sigma sigma_los^2 dR = (1/M) Int 4 pi r^2 rho sigma_r^2 dr  (isotropic identity).
Calibrations: Cesare 2024 review (arXiv 2404.06538) Table: DMS mean (0.56, 0.92, -25.30), DMS joint
(0.661, 1.79, -24.54), E0 mean (0.089, 0.47, -24.25), cluster fixed e0 0.045 (A1991, Q=2, rho_c 1e-24).
Permittivity readings: 'Qln' = tanh(Q ln x) (review Eq. 10 verbatim, ln); '/Q' = tanh(log10 x / Q).
"""
import math, numpy as np
G = 4.3009e-3   # pc (km/s)^2 / Msun
GCC = 6.77e-23  # g/cm^3 per Msun/pc^3
CAL = {  # name: (e0, Q, log10 rho_c [g/cm3])
  'DMS mean':  (0.56, 0.92, -25.30),
  'DMS joint': (0.661, 1.79, -24.54),
  'E0 mean':   (0.089, 0.47, -24.25),
  'E0 -1sig e0': (0.054, 0.47, -24.25),
  'cluster A1991': (0.045, 2.0, -24.0),
}
def eps(rho, e0, Q, lrc, reading):
    x = np.maximum(rho, 1e-30) / (10**lrc / GCC)
    arg = Q*np.log(x) if reading == 'Qln' else np.log10(x)/Q
    return e0 + (1-e0)*0.5*(1+np.tanh(arg))
# (L_V [Lsun], R_h projected [pc], sigma_los, err [km/s], ellipticity, source)
# classical: McConnachie 2012 (as in gamma_ladder_precheck_dsph_open_clusters.py); Crater II Caldwell+2017; Antlia II Torrealba+2019
# UFDs: RECALL values (Simon 2019 review era) -- order-of-magnitude use only
SYS = {
 'Fornax':(2.0e7,710,11.7,0.9,.30,'M12'),'Leo I':(5.5e6,251,9.2,0.4,.21,'M12'),'Sculptor':(2.3e6,283,9.2,1.1,.32,'M12'),
 'Leo II':(7.4e5,176,6.6,0.7,.13,'M12'),'Sextans':(4.4e5,695,7.9,1.3,.35,'M12'),'Carina':(3.8e5,250,6.6,1.2,.33,'M12'),
 'Ursa Minor':(2.9e5,181,9.5,1.2,.56,'M12'),'Draco':(2.9e5,221,9.1,1.2,.31,'M12'),
 'Crater II':(1.6e5,1066,2.7,0.3,.12,'C17'),'Antlia II':(3.7e5,2900,5.7,1.1,.38,'T19'),
 'Bootes I*':(2.8e4,242,4.6,0.8,.30,'recall'),'Ursa Major II*':(4.1e3,149,6.7,1.4,.56,'recall'),
 'Coma Ber*':(3.7e3,77,4.6,0.8,.38,'recall'),'Segue 1*':(3.4e2,29,3.7,1.2,.48,'recall'),
 'Reticulum II*':(2.4e3,32,3.3,0.7,.56,'recall'),
}
r = np.logspace(-3, 3, 4000)  # in units of a
def sigma_glob(M, a, epsf):
    rr = r*a
    rho = 3*M/(4*math.pi*a**3)*(1+(rr/a)**2)**-2.5
    Mr = M*(rr/a)**3/(1+(rr/a)**2)**1.5
    g = G*Mr/rr**2/epsf(rho)
    # rho sigma_r^2 = Int_r^inf rho g dr
    f = rho*g; I = np.zeros_like(rr)
    seg = 0.5*(f[1:]+f[:-1])*np.diff(rr); I[:-1] = np.cumsum(seg[::-1])[::-1]
    w = 4*math.pi*rr**2*I
    return math.sqrt(np.trapz(w, rr)/M), rho
def run(ups, reading):
    rows = []
    for n,(L,Rh,s,ds,e,src) in SYS.items():
        M = ups*L; a = Rh  # Plummer: projected half-light radius = a
        sN,rho = sigma_glob(M, a, lambda x: np.ones_like(x))
        out = {'N': sN}
        for c,(e0,Q,lrc) in CAL.items():
            sp,_ = sigma_glob(M, a, lambda x: eps(x,e0,Q,lrc,reading))
            # fraction of mass where eps within 5% of its range above e0
            out[c] = sp
        Breq = (s/sN)**2
        rows.append((n,L,Rh,s,ds,sN,Breq,out,src))
    return rows
if __name__ == '__main__':
    print(__doc__)
    print("Ceilings 1/e0:", {c: round(1/v[0],2) for c,v in CAL.items()})
    print("rho_c [Msun/pc3]:", {c: f"{10**v[2]/GCC:.2g}" for c,v in CAL.items()})
    for reading in ('Qln','/Q'):
      for ups in (1.0, 1.5, 3.0):
        print(f"\n=== reading {reading}  Upsilon_V = {ups}  -- predicted global sigma_los [km/s]; obs; pull=(obs-pred)/err ===")
        print(f"{'system':<15s}{'obs':>10s}{'Newt':>6s}{'B_req':>7s} | " + " | ".join(f"{c:>15s}" for c in CAL))
        nfail = {c:0 for c in CAL}
        for n,L,Rh,s,ds,sN,Breq,out,src in run(ups, reading):
            cells=[]
            for c in CAL:
                p = out[c]; pull=(s-p)/ds; cells.append(f"{p:6.2f} ({pull:+5.1f})")
                if pull > 2: nfail[c]+=1
            print(f"{n:<15s}{s:5.1f}±{ds:<4.1f}{sN:6.2f}{Breq:7.1f} | " + " | ".join(f"{x:>15s}" for x in cells))
        print("  # systems with obs > pred by >2 sigma:", nfail, f"of {len(SYS)} (classical 10 + 5 UFD*)")
    # eps profile check: is each system below the knee?
    print("\n=== eps at centre / at R_h / ambient 1e-4 Msun/pc3, Upsilon 1.5, Qln ===")
    for n,(L,Rh,s,ds,e,src) in SYS.items():
        M=1.5*L; rho0=3*M/(4*math.pi*Rh**3); rh=rho0*2**-2.5
        print(f"{n:<15s} rho0 {rho0:8.2g} | " + " | ".join(f"{c}: {eps(rho0,*CAL[c],'Qln'):.3f}/{eps(rh,*CAL[c],'Qln'):.3f}/{eps(1e-4,*CAL[c],'Qln'):.3f}" for c in ('DMS mean','DMS joint','E0 mean')))
