#!/usr/bin/env python3
"""
Cross-check: Session #107's DESI f*sigma8 forecast (2025-12-10, "3.1-3.2sigma per bin,
6.6sigma combined") against the Session #100 dark-energy sector (2025-12-08) -- the same
cosmology arc, two days apart, on the same observable.

Partially adjudicates explorer/topics/session107-desi-forecasts-unaudited.md.
Companion to de_locality_fork_perturbations.py (same model, same integrator).
"""
import numpy as np
from scipy.integrate import solve_ivp
from scipy.optimize import brentq

OM = 0.3
def x0_of(g):    return ((1 + OM) / (1 - OM)) ** (1.0 / (2 * g)) - 1.0
def C_of(x, g):  return np.tanh(g * np.log1p(x))
def F_of(x, g):  return 2.0 / ((1.0 + x) ** (2 * g) - 1.0)
def onepw_of(x, g):
    u = (1.0 + x) ** (2 * g)
    return 1.0 - 2 * g * u / (u - 1.0) * x / (1.0 + x)

def growth(g, cluster=True):
    X0 = x0_of(g)
    def bg(l):
        a = np.exp(l); x = X0 * a ** -3
        return x, C_of(x, g)
    def dlnH(l):
        h = 1e-5
        f = lambda L: 0.5 * np.log(bg(L)[0] / bg(L)[1])
        return (f(l + h) - f(l - h)) / (2 * h)
    def geff(l):
        if not cluster: return 1.0
        x, _ = bg(l)
        return 1.0 + F_of(x, g) * onepw_of(x, g)
    def rhs(l, y):
        d, dp = y; _, C = bg(l)
        return [dp, -(2 + dlnH(l)) * dp + 1.5 * C * geff(l) * d]
    li = np.log(1 / 201.)
    return solve_ivp(rhs, [li, 0.0], [np.exp(li)] * 2, rtol=1e-10, atol=1e-14, dense_output=True)

def fs8(sol, z):
    l = -np.log(1 + np.array(z, dtype=float))
    d, dp = sol.sol(l); d0, _ = sol.sol(0.0)
    return (dp / d) * (d / d0)

ref = growth(0.5)                       # gamma=1/2 IS LambdaCDM in this family
S107 = [(0.15, -13.3), (0.51, -11.9), (0.71, -10.3), (0.93, -8.6),
        (1.19, -6.8), (1.49, -5.2), (2.33, -2.8)]     # Session107_DESI_Forecasts.md "Delta%" column
zs = np.array([z for z, _ in S107])

print("Session #107 forecast vs the Session #100 DE sector -- same arc, 2 days apart")
print("Delta f*sigma8 relative to LambdaCDM, in %\n")
print("z:                                        " + " ".join(f"{z:7.2f}" for z in zs))
for cl, name in [(True, "Horn L (local)"), (False, "Horn N (background)")]:
    for g in [0.489, 0.40, 0.27]:
        v = 100 * (fs8(growth(g, cl), zs) / fs8(ref, zs) - 1)
        print(f"{name:22} gamma={g:5.3f}: " + " ".join(f"{x:7.3f}" for x in v))
print("Session #107              (as published): " + " ".join(f"{d:7.3f}" for _, d in S107))

print("\nWhat gamma would be needed to reproduce Session #107's -11.9% at z=0.51?")
for cl, name in [(True, "Horn L"), (False, "Horn N")]:
    f = lambda g: 100 * (fs8(growth(g, cl), [0.51])[0] / fs8(ref, [0.51])[0] - 1) + 11.9
    try:
        gs = brentq(f, 0.05, 0.499, xtol=1e-6)
        print(f"  {name}: gamma = {gs:.4f}  (epsilon = {2*gs-1:+.4f} = {abs(2*gs-1)/0.022:.1f}x the measured |eps|)")
    except ValueError:
        gg = np.linspace(0.05, 0.499, 60)
        vv = [100 * (fs8(growth(x, cl), [0.51])[0] / fs8(ref, [0.51])[0] - 1) for x in gg]
        print(f"  {name}: UNREACHABLE for any gamma in [0.05, 0.499]. "
              f"Most negative attainable = {min(vv):.3f}% at gamma={gg[int(np.argmin(vv))]:.3f}")
r = 11.9 / abs(100 * (fs8(growth(0.489), [0.51])[0] / fs8(ref, [0.51])[0] - 1))
print(f"\nOverstatement at the framework's own best-fit gamma=0.489, z=0.51: {r:.0f}x")
print("\nShape diagnosis: Session #107's |Delta| declines monotonically with z (-13.3% -> -2.8%),")
print("the signature of a sigma8 NORMALISATION offset (its Part 2 states sigma8(z=0)=0.76).")
print("The DE sector's |Delta| PEAKS at z~0.5-0.7 and is POSITIVE at z=0.15 in the local horn.")
print("Different shape, not just different amplitude.")
