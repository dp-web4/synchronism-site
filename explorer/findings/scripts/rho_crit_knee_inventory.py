"""rho_crit knee inventory: put every knee the site/archive uses in one unit (Msun/pc^3)
and test the two one-knee identifications (cosmic knee in galaxies; galactic knee in Friedmann)."""
import numpy as np
G_SI=6.674e-11; c=2.998e8; Msun=1.989e30; pc=3.0857e16
MSUN_PC3=Msun/pc**3                      # kg/m^3 per Msun/pc^3
h=0.674; H0=h*100e3/(1e6*pc)             # s^-1
rho_c0=3*H0**2/(8*np.pi*G_SI)/MSUN_PC3   # Msun/pc^3
Om=0.315; OL=1-Om
rho_m0=Om*rho_c0; rho_L=OL*rho_c0
print(f"rho_crit(cosmic,3H^2/8piG) = {rho_c0:.3e} Msun/pc^3; rho_m0={rho_m0:.3e}; rho_Lambda={rho_L:.3e}")
# cosmological knee: gamma=1/2 exact form 1/C = 1 + 2 rc/rho_m, C0=Om -> rc = rho_L/2
rc_cos=rho_L/2
# general gamma: tanh(g ln(1+x0)) = Om -> x0
for g in (0.5,0.487):
    x0=np.exp(np.arctanh(Om)/g)-1
    print(f"  gamma={g}: x0=rho_m0/rc={x0:.3f}  rc_cos={rho_m0/x0:.3e}")
print(f"cosmic knee rc_cos (gamma=1/2) = {rc_cos:.3e}  log10={np.log10(rc_cos):.2f}")
V=np.array([50,100,200,300.])
knees={
 "A*V^2, A=0.029 (site, asserted)": 0.029*V**2,
 "A*V^2, A=4.6e-5 (formula-consistent)": 4.6e-5*V**2,
 "Jeans-construction measured (V-blind)": 0.161*np.ones_like(V),
}
# a0-tracking knee: rho ~ a0^2/(4 pi G V^2); with a0=cH0/2pi -> (c/2piV)^2 * H0^2/(4piG) = (c/2piV)^2*(2/3)rho_c0
a0=1.2e-10
Vsi=V*1e3
knees["a0-tracking a0^2/(4piG V^2), a0=1.2e-10"]=a0**2/(4*np.pi*G_SI*Vsi**2)/MSUN_PC3
knees["same with a0=cH0/2pi (=(c/2piV)^2 (2/3) rho_c0)"]=(c/(2*np.pi*Vsi))**2*(2/3)*rho_c0
print("\nknee [Msun/pc^3] at V =",V, " ; log10(knee/rc_cos)")
for k,v in knees.items():
    print(f"  {k:52s}", " ".join(f"{x:9.3e}" for x in v), " | ", " ".join(f"{np.log10(x/rc_cos):5.1f}" for x in v))
# Identification 1: cosmic knee in galaxies. disc midplane densities 0.01-1 Msun/pc^3
print("\n[1] cosmic knee in galaxies, C=tanh(g ln(1+rho/rc_cos)):")
for g in (0.5,2.0):
    for rho in (1e-3,1e-2,0.1,1.0):
        C=np.tanh(g*np.log1p(rho/rc_cos)); print(f"   gamma={g} rho={rho:g}: x={rho/rc_cos:.1e} C={C:.8f}  boost 1/C-1={1/C-1:.1e}")
# lowest density at which boost 1/C reaches the deep-MOND-like 2 (C=0.5)
for g in (0.5,2.0):
    x=np.exp(np.arctanh(0.5)/g)-1; print(f"   gamma={g}: C=0.5 needs rho={x*rc_cos:.2e} Msun/pc^3 (x={x:.3f})")
# Identification 2: galactic knee in Friedmann: late-time rho_DE -> rc/gamma (site); compare to rho_Lambda
print("\n[2] galactic knee in Friedmann (rho_DE,inf = rc/gamma):")
for name,rc in (("Jeans 0.161",0.161),("0.029*200^2",0.029*200**2),("4.6e-5*200^2",4.6e-5*200**2),("a0 V^-2 @200",knees["a0-tracking a0^2/(4piG V^2), a0=1.2e-10"][2])):
    for g in (0.5,0.487):
        rDE=rc/g; print(f"   {name:14s} g={g}: rho_DE/rho_Lambda={rDE/rho_L:.2e}  H/H_LCDM~{np.sqrt((rho_m0+rDE)/(rho_m0+rho_L)):.1e}")
    # also: C at today's mean matter density with this knee
    C=np.tanh(0.487*np.log1p(rho_m0/rc)); print(f"      C(rho_m0) with this knee = {C:.2e} (cosmic sector requires Om=0.315)")
# redshift at which the mean matter density reaches the galactic knee
for name,rc in (("Jeans 0.161",0.161),("0.029*200^2",1160.)):
    print(f"   rho_m(z)=knee {name}: 1+z={(rc/rho_m0)**(1/3):.0f}")
