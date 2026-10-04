"""Which a0 does 'a0 = cH0/2pi' predict? (maintainer 2026-10-04)

The SPARC fit solves g_bar = g_obs * tanh(gamma * ln(1 + g_obs/a0')) with a0' profiled.
Deep regime: tanh(gamma ln(1+y)) -> gamma*y, so g_obs -> sqrt((a0'/gamma) g_bar):
the Milgrom-equivalent scale is a0_M = a0'/gamma (= 2a0' at gamma = 1/2).
Input: the explorer's Upsilon_disk sweep (sparc_gamma_interval_frozen_likelihood_output.txt [3d]),
not re-fitted here. Controls: (1) the deep-limit identity numerically; (2) gamma = 1/2 gives 2a0'.
Prediction written before running: a0_M moves less than a0' across the band (a0' spans 3.6x).
"""
import numpy as np

c = 2.99792458e8
Mpc = 3.0856775814913673e22

def deep_scale(gamma, a0p, g_bar):
    # solve the implicit law exactly by bisection in log g_obs
    lo, hi = np.log(g_bar), np.log(g_bar) + 20
    for _ in range(200):
        mid = 0.5 * (lo + hi); g = np.exp(mid)
        f = g * np.tanh(gamma * np.log1p(g / a0p)) - g_bar
        lo, hi = (mid, hi) if f < 0 else (lo, mid)
    g_obs = np.exp(0.5 * (lo + hi))
    return g_obs**2 / g_bar          # = a0_M in the deep limit

# control 1 + 2
for gam, a0p in [(0.5, 5.336e-11), (0.4892, 5.336e-11), (2.0, 3.2e-10)]:
    num = deep_scale(gam, a0p, 1e-15)
    print(f"control gamma={gam}: numeric deep scale {num:.4e}  a0'/gamma {a0p/gam:.4e}  ratio {num/(a0p/gam):.5f}")

sweep = [(0.40, 0.2723, 2.925e-11), (0.50, 0.4892, 5.336e-11),
         (0.55, 0.6779, 7.401e-11), (0.60, 0.9625, 1.043e-10)]
print("\nUd    gamma   a0'          a0_M=a0'/gamma")
aM = []
for ud, g, a in sweep:
    aM.append(a / g); print(f"{ud:.2f}  {g:.4f}  {a:.3e}   {a/g:.4e}")
aM = np.array(aM)
print(f"a0' spans {max(s[2] for s in sweep)/min(s[2] for s in sweep):.2f}x; a0_M spans {aM.max()/aM.min():.4f}x "
      f"({aM.min():.3e}-{aM.max():.3e})")

for H0 in (67.4, 70.0, 73.0):
    pred = c * H0 * 1e3 / Mpc / (2 * np.pi)
    print(f"H0={H0}: cH0/2pi = {pred:.4e}; vs a0_M band: {100*(pred/aM.max()-1):+.1f}% to {100*(pred/aM.min()-1):+.1f}%;"
          f" vs 1.20e-10: {100*(pred/1.2e-10-1):+.1f}%")
print(f"fit scale vs 1.20e-10: {100*(aM.min()/1.2e-10-1):+.1f}% to {100*(aM.max()/1.2e-10-1):+.1f}%")

# Method check: the explorer's 2026-09-29 velocity-chi2 fits (gamma2_pin_nuisance_refit_output.txt, lines B and C)
print("\nmethod check (explorer 09-29 velocity chi2):")
for label, g, la in [("B frozen nuisances, velocity chi2", 0.432, -10.30),
                     ("C Upsilon/D/i profiled, Li+2018 priors", 0.488, -10.24)]:
    a = 10**la
    print(f"  {label}: gamma={g}, a0'={a:.3e}, a0_M={a/g:.4e}; cH0/2pi(67.4) is {100*(1.0422e-10/(a/g)-1):+.1f}%")
