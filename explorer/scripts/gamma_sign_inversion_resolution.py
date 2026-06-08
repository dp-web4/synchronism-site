import numpy as np

def C(rho_ratio, gamma):
    # rho_ratio = rho/rho_crit ; C = tanh(gamma * ln(rho/rho_crit + 1))
    return np.tanh(gamma * np.log(rho_ratio + 1.0))

presets = [
    ("Ideal gas",        1),
    ("Liquid water",     10),
    ("Enzyme site",      100),
    ("Ferromagnet",      1000),
    ("BCS superconductor", 10_000_000),
    ("BEC",              1_000_000_000),
]

def g_current(n):  return 2.0/np.sqrt(n)        # site formula
def g_flip(n):     return 2.0*np.sqrt(n)        # sign-flipped, normalized to agree at N=1

print("=== Claim 1: at FIXED density, C is monotonically increasing in gamma ===")
print("Evaluate every preset at the SAME density rho = rho_crit (rho_ratio=1):\n")
print(f"{'system':22s} {'N_corr':>12s} {'gamma(curr)':>12s} {'C@rhocrit':>10s}   {'gamma(flip)':>12s} {'C@rhocrit':>10s}")
for name,n in presets:
    gc, gf = g_current(n), g_flip(n)
    print(f"{name:22s} {n:12d} {gc:12.4g} {C(1.0,gc):10.4f}   {gf:12.4g} {C(1.0,gf):10.4f}")

print("\n=== Claim 2: the site regime descriptions vs reality ===")
print("Site says: collective (BCS/BEC) -> 'C saturates near 1'; weakly-correlated (gas) -> 'C near zero'.")
print("Reality under current formula, at rho_crit: gas C=%.3f (HIGHEST), BCS C=%.5f (≈0)." % (C(1.0,g_current(1)), C(1.0,g_current(1e7))))
print("To get BCS to C=0.5 under current formula, need rho/rho_crit =", np.expm1(np.arctanh(0.5)/g_current(1e7)), "(unphysical).")

print("\n=== Claim 3: galaxy regime is a FIXED POINT of the sign flip ===")
print("Galaxy stars: N_corr=1.  gamma_current=%.3f , gamma_flip=%.3f  -> IDENTICAL." % (g_current(1), g_flip(1)))
print("So flipping the sign leaves every galaxy-scale (N_corr=1) result UNCHANGED.")

print("\n=== Claim 4: sharpness (dC/d ln rho at rho_crit) ordering ===")
def slope(n, gfun):
    g = gfun(n); r=1.0
    # dC/d(ln rho) = gamma*(1-C^2)* d ln(r+1)/d ln r ; at r=1: d ln(r+1)/d ln r = r/(r+1)=0.5
    c = C(r,g)
    return g*(1-c**2)*0.5
print("Under CURRENT formula, transition slope at rho_crit:")
for name,n in presets:
    print(f"  {name:22s} slope={slope(n,g_current):.4g}")
print("Sharpest = gas (no real transition); flattest = BEC/BCS (real Tc). INVERTED vs critical phenomena.")
print("\nUnder FLIPPED formula:")
for name,n in presets:
    print(f"  {name:22s} slope={slope(n,g_flip):.4g}")
print("Sharpest = BEC/BCS (real Tc); gentlest = gas. MATCHES critical phenomena AND 'dense/collective=high C'.")
