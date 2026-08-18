#!/usr/bin/env python3
"""
DE-sector locality fork: does making rho_DE a function of the LOCAL matter density
give the framework an independent, testable channel -- as the 2026-08-18 visitor
(Pass 4) proposed -- or does it collapse onto the same (2*gamma-1) that already
makes the background test unpowered?

Model (Session 100/101, as the site states it):
    C(x)      = tanh(gamma * ln(1+x)),        x = rho_m / rho_crit
    rho_DE    = rho_m * (1-C)/C
    H^2       = 8 pi G rho_m / (3 C)          [equivalently rho_m + rho_DE]

Horn N (non-local / background-only): F evaluated at the mean density rho_bar_m(t).
Horn L (local):                        F evaluated at the local density rho_m(vec x,t).

Everything below is exact algebra plus one ODE integration. No fitting, no free
parameters beyond gamma and the Session-101 calibration C(z=0) = Omega_m.
"""
import numpy as np
import sympy as sp
from scipy.integrate import solve_ivp

OM = 0.3
np.set_printoptions(precision=6, suppress=True)

def rule(t=""):
    print("\n" + "=" * 78)
    if t: print(t); print("=" * 78)

# ---------------------------------------------------------------- 1. exact algebra
rule("1. EXACT ALGEBRA (SymPy)")
x, g = sp.symbols('x gamma', positive=True)
C = sp.tanh(g * sp.log(1 + x))
Csimp = sp.simplify(sp.expand(C.rewrite(sp.exp)))
F = sp.simplify((1 - Csimp) / Csimp)                       # rho_DE / rho_m
rho_DE = sp.simplify(x * F)                                # in units of rho_crit
print("C(x)            =", sp.simplify(Csimp))
print("F = rho_DE/rho_m=", F)
print("rho_DE/rho_crit =", rho_DE)

print("\n  -- at gamma = 1/2 --")
rho_DE_half = sp.simplify(rho_DE.subs(g, sp.Rational(1, 2)))
print("rho_DE/rho_crit (gamma=1/2) =", rho_DE_half)
print("  d(rho_DE)/dx  =", sp.simplify(sp.diff(rho_DE.subs(g, sp.Rational(1,2)), x)))
assert sp.simplify(sp.diff(rho_DE.subs(g, sp.Rational(1,2)), x)) == 0
print("  => rho_DE is INDEPENDENT OF DENSITY, identically. Not just constant in time.")

# the site's own identity: w_DE = dlnF/dlnx.  Locality forces delta_DE/delta_m = dln(rho_DE)/dln(rho_m).
w_of_x   = sp.simplify(x * sp.diff(sp.log(F), x))
onepw    = sp.simplify(1 + w_of_x)
dlnrhoDE = sp.simplify(x * sp.diff(sp.log(rho_DE), x))
print("\n  -- the locality identity --")
print("  1 + w_DE                       =", sp.simplify(onepw))
print("  dln(rho_DE)/dln(rho_m)         =", sp.simplify(dlnrhoDE))
print("  difference (must be 0)         =", sp.simplify(onepw - dlnrhoDE))
assert sp.simplify(onepw - dlnrhoDE) == 0
print("  => delta_DE / delta_m = 1 + w_DE, EXACTLY, at all x and all gamma.")
print("     The clustering amplitude IS the departure from Lambda. Same number, one channel.")

# ---------------------------------------------------------------- numeric helpers
def x0_of(gamma):
    """Session-101 calibration: C(x0) = Omega_m at z=0."""
    return ((1 + OM) / (1 - OM)) ** (1.0 / (2 * gamma)) - 1.0

def C_of(xv, gamma):   return np.tanh(gamma * np.log1p(xv))
def F_of(xv, gamma):
    u = (1.0 + xv) ** (2 * gamma)
    return 2.0 / (u - 1.0)
def rhoDE_of(xv, gamma):  return xv * F_of(xv, gamma)          # units of rho_crit
def onepw_of(xv, gamma):
    """1 + w = dln(rho_DE)/dln x  (analytic)."""
    u = (1.0 + xv) ** (2 * gamma)
    return 1.0 - 2 * gamma * u / (u - 1.0) * xv / (1.0 + xv)

# ---------------------------------------------------------------- 2. nonlinear regime
rule("2. HORN L IN THE NONLINEAR REGIME -- rho_DE across the real density range")
print("x0 (mean density today) per gamma, then rho_DE/rho_crit at density contrast d:")
decs = [1e-1, 1.0, 2e2, 1e5, 1e7]     # void, mean, cluster, galaxy disk, inner disk
names = ["void (0.1x)", "mean", "cluster (200x)", "disk (1e5 x)", "inner (1e7 x)"]
print(f"{'gamma':>7} {'x0':>9} " + " ".join(f"{n:>16}" for n in names))
for gam in [0.27, 0.40, 0.489, 0.500, 0.60, 0.96, 2.0]:
    X0 = x0_of(gam)
    vals = [rhoDE_of(X0 * d, gam) for d in decs]
    print(f"{gam:7.3f} {X0:9.4f} " + " ".join(f"{v:16.6f}" for v in vals))
print("\nAt gamma=1/2 the row is flat at 2.000000 -> an exact cosmological constant AS A FIELD.")
print("Departure over 8 decades of density scales as (density)^(1-2*gamma):")
for gam in [0.489, 0.40, 0.27, 0.96]:
    X0 = x0_of(gam)
    r = rhoDE_of(X0 * 1e7, gam) / rhoDE_of(X0 * 1e-1, gam)
    print(f"  gamma={gam:5.3f}:  rho_DE(1e7 x mean)/rho_DE(0.1 x mean) = {r:9.4f}"
          f"   [predicted 1e8^(1-2g) = {1e8**(1-2*gam):9.4f}]")

# ---------------------------------------------------------------- 3. growth
rule("3. HORN L GROWTH -- does DE clustering give an independent handle on gamma?")

def growth(gamma, cluster_de=True, adiabatic_pressure=False, zmax=10.0):
    """Sub-horizon quasi-static growth. Omega_m(a) = C(a) exactly in this model."""
    X0 = x0_of(gamma)
    def bg(lna):
        a  = np.exp(lna)
        xv = X0 * a ** -3
        Cv = C_of(xv, gamma)
        return xv, Cv
    def dlnH_dlna(lna):
        h = 1e-5
        def lnH(l):
            xv, Cv = bg(l)
            # H^2 propto rho_m / C
            return 0.5 * np.log(xv / Cv)
        return (lnH(lna + h) - lnH(lna - h)) / (2 * h)
    def geff(lna):
        if not cluster_de: return 1.0
        xv, Cv = bg(lna)
        Fv = F_of(xv, gamma)
        opw = onepw_of(xv, gamma)
        if not adiabatic_pressure:
            return 1.0 + Fv * opw
        # adiabatic pressure perturbation: c_a^2 = dp_DE/drho_DE
        h = 1e-4
        lx = np.log(xv)
        def lnrho(l): return np.log(rhoDE_of(np.exp(l), gamma))
        def p(l):
            xx = np.exp(l)
            return (onepw_of(xx, gamma) - 1.0) * rhoDE_of(xx, gamma)
        ca2 = ((p(lx + h) - p(lx - h)) /
               (rhoDE_of(np.exp(lx + h), gamma) - rhoDE_of(np.exp(lx - h), gamma)))
        return 1.0 + Fv * opw * (1.0 + 3.0 * ca2)
    def rhs(lna, y):
        d, dp = y
        xv, Cv = bg(lna)
        return [dp, -(2.0 + dlnH_dlna(lna)) * dp + 1.5 * Cv * geff(lna) * d]
    lna_i = np.log(1.0 / (1.0 + 200.0))
    sol = solve_ivp(rhs, [lna_i, 0.0], [np.exp(lna_i), np.exp(lna_i)],
                    rtol=1e-10, atol=1e-14, dense_output=True)
    return sol

ZS = np.array([0.0, 0.3, 0.5, 0.8, 1.1, 1.5])
def fsigma8(sol, zs):
    lna = -np.log(1 + zs)
    d, dp = sol.sol(lna)
    d0, _ = sol.sol(0.0)
    return (dp / d) * (d / d0)          # f * (D/D0); sigma8 normalisation divides out in ratios

ref = growth(0.5)                        # gamma=1/2 == exact LambdaCDM in this family
ref_v = fsigma8(ref, ZS)
print("Fractional change in f*sigma8 relative to gamma=1/2 (= LambdaCDM), in %:")
print(f"{'gamma':>7} {'chan':>12} " + " ".join(f"z={z:<5.1f}" for z in ZS))
rows = {}
for gam in [0.27, 0.40, 0.45, 0.489, 0.55, 0.60, 0.96]:
    bg_only = 100 * (fsigma8(growth(gam, cluster_de=False), ZS) / ref_v - 1)
    loc     = 100 * (fsigma8(growth(gam, cluster_de=True), ZS) / ref_v - 1)
    loc_p   = 100 * (fsigma8(growth(gam, True, True), ZS) / ref_v - 1)
    rows[gam] = (bg_only, loc, loc_p)
    print(f"{gam:7.3f} {'HornN(bg)':>12} " + " ".join(f"{v:7.3f}" for v in bg_only))
    print(f"{'':7} {'HornL(rho)':>12} " + " ".join(f"{v:7.3f}" for v in loc))
    print(f"{'':7} {'HornL(+p)':>12} " + " ".join(f"{v:7.3f}" for v in loc_p))

print("\nAdded power of the LOCAL horn over the background horn (|HornL| - |HornN|), max over z, in %:")
for gam, (b, l, lp) in rows.items():
    print(f"  gamma={gam:5.3f}:  bg {np.abs(b).max():7.3f}   local {np.abs(l).max():7.3f}"
          f"   local+p {np.abs(lp).max():7.3f}   ratio local/bg = {np.abs(l).max()/max(np.abs(b).max(),1e-12):6.2f}")

# ---------------------------------------------------------------- 4. required sigma_gamma
rule("4. WHAT PRECISION WOULD THE LOCAL HORN NEED?")
eps = lambda gam: 2 * gam - 1
gs = np.linspace(0.46, 0.54, 401)
sig = np.array([np.abs(100*(fsigma8(growth(gv), ZS)/ref_v - 1)).max() for gv in gs])
# local slope d(%fs8)/d(gamma) near 1/2
i = np.argmin(np.abs(gs - 0.505))
slope = sig[i] / (gs[i] - 0.5)
print(f"d|Delta f*sigma8| / d gamma near 1/2  = {slope:.3f} % per unit gamma")
for prec in [0.5, 1.0, 3.0]:
    print(f"  DESI-class f*sigma8 precision {prec:4.1f}% -> 1-sigma on gamma = {prec/slope:6.3f}"
          f"   (3-sigma detection of gamma=0.489 needs {abs(0.489-0.5)*3:.4f})")
print("\nSPARC galaxy-sector gamma (2026-08-14): 0.489 +/- 0.11 (stat), Upsilon band [0.27, 0.96]")
print(f"  epsilon = 2*gamma-1 = {eps(0.489):+.4f} +/- {2*0.11:.3f}  ->  {abs(eps(0.489))/(2*0.11):.2f} sigma from zero")

# ---------------------------------------------------------------- 5. backreaction
rule("5. DOES HORN L EVEN REPRODUCE THE BACKGROUND THE SITE SOLVED?")
print("Lognormal matter PDF, volume-weighted.  <rho_DE(rho_m)>  vs  rho_DE(<rho_m>).")
print(f"{'gamma':>7} " + " ".join(f"s_lnrho={s:<5.1f}" for s in [0.5, 1.0, 2.0, 3.0]))
for gam in [0.489, 0.45, 0.40, 0.27, 0.96, 0.50]:
    X0 = x0_of(gam)
    out = []
    for s in [0.5, 1.0, 2.0, 3.0]:
        mu = -0.5 * s ** 2                       # <delta+1> = 1
        n = 400001
        t = np.linspace(-8 * s, 8 * s, n)
        pdf = np.exp(-(t - mu) ** 2 / (2 * s ** 2)) / (s * np.sqrt(2 * np.pi))
        dens = np.exp(t)                         # rho_m / rho_bar_m
        mean_rhoDE = np.trapz(pdf * rhoDE_of(X0 * dens, gam), t)
        out.append(100 * (mean_rhoDE / rhoDE_of(X0, gam) - 1))
    print(f"{gam:7.3f} " + " ".join(f"{v:12.4f}%" for v in out))
print("\n(gamma=1/2 row is identically 0 -- rho_DE has no density dependence to average over.)")

# ---------------------------------------------------------------- 6. small-epsilon structure
rule("6. WHY EVERYTHING SCALES AS epsilon = 2*gamma - 1  (series, exact)")
eps_s = sp.symbols('epsilon')
Fe   = 2 / ((1 + x) ** (1 + eps_s) - 1)
rDE  = sp.simplify(x * Fe)
opw  = sp.simplify(1 + x * sp.diff(sp.log(Fe), x))
print("1 + w  to O(eps):", sp.simplify(sp.series(opw, eps_s, 0, 2).removeO()))
print("   -> 1 + w = eps * ( ln(1+x)/x - 1 ) + O(eps^2).  Vanishes identically at eps=0.")
src = sp.simplify(sp.series(Fe * opw, eps_s, 0, 2).removeO())
print("F*(1+w) [the Poisson-source correction] to O(eps):", sp.simplify(src))
x0h = sp.Rational(6, 7)     # gamma=1/2 calibration, C(x0)=0.3
val = sp.simplify(src.subs(x, x0h))
print(f"   at x0 = 6/7 (mean density today): coefficient = {sp.N(val/eps_s, 6)} (times eps)")
print(f"   with eps = 2*0.489-1 = -0.022  ->  G_eff/G - 1 = {float(sp.N(val.subs(eps_s,-0.022))):+.5f} at z=0")

rule("7. IS THE LOCAL HORN EXCLUDED BY DENSE OBJECTS?  (rho_DE ~ x^(1-2gamma) for x>>1)")
print(f"{'object':>26} {'rho_m/rho_bar':>14} " + " ".join(f"g={gv:<6.3f}" for gv in [0.489,0.45,0.40,0.27]))
objs = [("cosmic mean", 1.0), ("cluster core", 2e2), ("galaxy disk", 1e5),
        ("molecular cloud", 1e12), ("water", 1e30), ("nuclear matter", 1e45)]
for nm, d in objs:
    row = []
    for gv in [0.489, 0.45, 0.40, 0.27]:
        row.append(rhoDE_of(x0_of(gv) * d, gv))
    print(f"{nm:>26} {d:14.0e} " + " ".join(f"{v:12.4g}" for v in row))
print("\nUnits are rho_crit(cosmological) ~ 1e-29 g/cm^3.  Even 45 decades of density contrast")
print("moves rho_DE by ~1 decade at gamma=0.489.  No laboratory, stellar, or compact-object")
print("constraint touches the local horn -- which is the same fact as its untestability.")
