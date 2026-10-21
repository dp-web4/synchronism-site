#!/usr/bin/env python3
r"""
(1) Largest universal e0 each dwarf allows (obs sigma - 2 err <= predicted), E0's Q and rho_c, both readings, Upsilon_V 3.
(2) Refraction EFE amplitude.  Uniform external field g_e z^ far away, radial eps(r) = eps(rho_dwarf(r) + rho_amb):
    div(eps grad phi) = 0 for the external part, phi = -g_e u(r) cos(theta),  (eps r^2 u')' = 2 eps u.
    Uniform medium -> u = r exactly (interior field uniform, no internal effect).  The NON-uniform interior part
    is |u' - u/r| (radial vs tangential components differ), in units of g_e after normalising u -> r at infinity.
    It is an l=1 (lopsided) perturbation: odd in g_e, so it cannot change the isotropic virial sigma at first order;
    it shifts/lopsides the dwarf.  We report D(r_h) g_e / g_int(r_h).  Self-gravity boost is g_e-independent (linear).
Laws: RG E0 mean, RG DMS mean (Qln reading), framework floored (Omega_m) and UNFLOORED C, gamma 0.489, rho_c 0.0079.
Ambient: MW hot halo ~3e-6 Msun/pc3 (100 kpc/D)^1.5 [recall-level; irrelevant below every knee].
g_e = (200 km/s)^2 / D  [flat MW, recall-level].
"""
import math, numpy as np
from scipy.integrate import solve_ivp
from rg_spherical_ceiling_dsph import SYS, sigma_glob, eps, CAL, G
DIST = {'Fornax':147,'Leo I':254,'Sculptor':86,'Leo II':233,'Sextans':86,'Carina':105,'Ursa Minor':76,'Draco':76,
        'Crater II':117,'Antlia II':132,'Bootes I*':66,'Ursa Major II*':32,'Coma Ber*':44,'Segue 1*':23,'Reticulum II*':32}
print(__doc__)
print("=== (1) max universal e0 allowed at 2 sigma (Q, rho_c of E0 mean), Upsilon_V = 3 ===")
for reading in ('Qln','/Q'):
    print(f"-- reading {reading}")
    for n,(L,Rh,s,ds,e,src) in SYS.items():
        M=3.0*L; target = s-2*ds
        lo,hi = 1e-5, 1.0
        f = lambda e0: sigma_glob(M,Rh,lambda x: eps(x,e0,0.47,-24.25,reading))[0]
        if f(hi) >= target: print(f"   {n:<15s} any e0 (Newton suffices at 2 sig)"); continue
        if f(lo) < target: print(f"   {n:<15s} none >= 1e-5"); continue
        for _ in range(50):
            m = math.sqrt(lo*hi)
            if f(m) >= target: lo = m
            else: hi = m
        print(f"   {n:<15s} e0 <= {lo:.4f}   (src {src})")

def C_fw(rho, floor):
    x = rho/0.0079; f = 0.315 if floor else 0.0
    return f + (1-f)*np.tanh(0.489*np.log1p(x))
LAWS = {'RG E0':lambda r: eps(r,0.089,0.47,-24.25,'Qln'), 'RG DMS':lambda r: eps(r,0.56,0.92,-25.30,'Qln'),
        'fw floored':lambda r: C_fw(r,True), 'fw UNfloored':lambda r: C_fw(r,False)}
print("\n=== (2) refraction-EFE: non-uniform interior part D(R_h) g_e vs internal g(R_h); Upsilon_V 1.5 ===")
print(f"{'system':<15s}{'g_e/g_N(Rh)':>12s} | " + " | ".join(f"{k:>22s}" for k in LAWS))
for n,(L,Rh,s,ds,e,src) in SYS.items():
    M=1.5*L; a=Rh; D=DIST[n]
    ge = 200.0**2/(D*1e3)
    amb = 3e-6*(100/D)**1.5
    rho = lambda r: 3*M/(4*math.pi*a**3)*(1+(r/a)**2)**-2.5 + amb
    gN = G*M*(Rh/a)**3/(1+(Rh/a)**2)**1.5/Rh**2
    cells=[]
    for k,lw in LAWS.items():
        epsr = lambda r: lw(np.array([rho(r)]))[0]
        h=1e-3*a
        def deps(r): return (epsr(r*1.001)-epsr(r*0.999))/(0.002*r)
        # y = [u, w = eps r^2 u'];  u' = w/(eps r^2), w' = 2 eps u
        def rhs(r,y): ep=epsr(r); return [y[1]/(ep*r*r), 2*ep*y[0]]
        r0=1e-3*a; ep0=epsr(r0)
        sol = solve_ivp(rhs,(r0,60*a),[r0, ep0*r0*r0],rtol=1e-9,atol=1e-14,dense_output=True)
        R=60*a; u,w = sol.sol(R); up = w/(epsr(R)*R*R)
        # outside: u = alpha r + beta/r^2 ; u' = alpha - 2 beta/r^3  -> alpha = (2u/R + up)/3
        alpha = (2*u/R + up)/3
        uh,wh = sol.sol(Rh); uph = wh/(epsr(Rh)*Rh*Rh)
        Dn = abs(uph - uh/Rh)/alpha
        gint = gN/epsr(Rh)
        cells.append(f"D={Dn:.2e} ratio={Dn*ge/gint:.2e}")
    print(f"{n:<15s}{ge/gN:12.1f} | " + " | ".join(f"{c:>22s}" for c in cells))
