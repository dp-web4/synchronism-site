#!/usr/bin/env python3
"""EFE-free corner vs Chae 2023's two published DR3 points. Maintainer 2026-11-25.

Why: visitor log 2026-11-25 Pass 4 (HIGH, time-critical): /wide-binaries and its DR4 reading key cover only the
EFE-included compander; the EFE-free algebraic corner (gamma ~ 0.87-0.95, internal-acceleration reading) predicts a
boost that keeps rising as g_N falls, and "has not been run against binned wide-binary data".

Inputs (abstract read verbatim 2026-11-25, arXiv:2305.04613 v-latest, ApJ 952, 128):
  delta_obs-newt = 0.034 +/- 0.007 at g_N ~ 10^-8.91 and 0.109 +/- 0.013 at g_N ~ 10^-10.15 m/s^2;
  ratio g_obs/g_pred = 10^(sqrt(2)*delta); the abstract prints 1.43 +/- 0.06 at 10^-10.15.
  Chae 2024 (arXiv:2309.10404): 1.49 +0.21/-0.19 "for acceleration <~ 10^-10" (a whole-bin value; used only as a
  second, weaker comparison at the bin's upper edge).
These are values at each bin's characteristic g_N, not bin edges, so this is a point comparison. The corner's boost is
convex in log g_N, so averaging over a bin centred (in log) on that value raises the prediction: the point comparison
is the conservative side for an exclusion, and the generous side for a pass.

Model: algebraic internal reading, g_N = g tanh(gamma ln(1 + g/a0')), a0' = gamma * aM, no external field.
Grid: gamma in {0.87, 0.91, 0.95} x aM in {1.0, 1.1, 1.2} x 1e-10 m/s^2 (galaxy-level a0'/gamma is 1.04-1.18e-10).

PREDICTIONS (written before running; committed before the script is run):
  P1  corner boost at 10^-10.15 spans 1.55-1.80 over the grid, i.e. 2-6 sigma above 1.43 +/- 0.06 everywhere.
  P2  corner boost at 10^-8.91 spans 1.03-1.12; Chae's 1.117 +/- 0.025 at that point is NOT exceeded by more than 1 sigma
      anywhere (the corner is not excluded at the high-acceleration point).
  P3  the corner's ratio boost(10^-10.15)/boost(10^-8.91) is >= 1.45 everywhere, against Chae's 1.28 +/- 0.07
      (ratio of the two printed points, errors in quadrature): >= 2 sigma above it everywhere.
  P4  identity control: deep limit g^2 = g_N * aM to < 0.5 % at g_N = 1e-15; and gamma = 0.87, aM = 1.1 reproduces the
      2026-11-09 table (1.666 at 0.70e-10, 1.487 at 1.00e-10) to 3 decimals.
"""
import numpy as np


def boost(gN, gamma, aM):
    a0p = aM * gamma
    lo, hi = np.log(gN), np.log(gN) + 12
    for _ in range(200):
        m = 0.5 * (lo + hi)
        g = np.exp(m)
        if g * np.tanh(gamma * np.log1p(g / a0p)) < gN:
            lo = m
        else:
            hi = m
    return np.exp(0.5 * (lo + hi)) / gN


def ratio_and_err(delta, sd):
    r = 10 ** (np.sqrt(2) * delta)
    return r, r * np.log(10) * np.sqrt(2) * sd


r_lo, e_lo = ratio_and_err(0.109, 0.013)   # at 10^-10.15
r_hi, e_hi = ratio_and_err(0.034, 0.007)   # at 10^-8.91
print("Chae 2023 points from the abstract's delta values:")
print(f"  10^-10.15: {r_lo:.3f} +/- {e_lo:.3f}   (abstract prints 1.43 +/- 0.06)")
print(f"  10^-8.91 : {r_hi:.3f} +/- {e_hi:.3f}")
rr = r_lo / r_hi
rr_e = rr * np.hypot(e_lo / r_lo, e_hi / r_hi)
print(f"  ratio    : {rr:.3f} +/- {rr_e:.3f}")

print("\nP4 identity controls")
print(f"  deep limit g^2/(gN aM) at gN=1e-15: {boost(1e-15, .87, 1.1e-10)**2 * 1e-15 / 1.1e-10:.4f}")
print(f"  gamma=0.87 aM=1.1: B(0.70e-10)={boost(0.70e-10, .87, 1.1e-10):.3f}  B(1.00e-10)={boost(1.0e-10, .87, 1.1e-10):.3f}")

gN_lo, gN_hi = 10 ** -10.15, 10 ** -8.91
print("\n gamma  aM/1e-10 | B(10^-10.15)  z vs 1.43 | B(10^-8.91)  z vs Chae | ratio   z vs Chae ratio | B(1e-10) z vs 1.49(+0.21)")
rows = []
for gam in (0.87, 0.91, 0.95):
    for aM in (1.0, 1.1, 1.2):
        b1 = boost(gN_lo, gam, aM * 1e-10)
        b2 = boost(gN_hi, gam, aM * 1e-10)
        b3 = boost(1e-10, gam, aM * 1e-10)
        z1 = (b1 - 1.43) / 0.06
        z2 = (b2 - r_hi) / e_hi
        z3 = (b1 / b2 - rr) / rr_e
        z4 = (b3 - 1.49) / 0.21
        rows.append((b1, z1, b2, z2, b1 / b2, z3))
        print(f" {gam:5.2f}  {aM:6.1f}    | {b1:8.3f}   {z1:+6.1f}    | {b2:8.3f}  {z2:+6.1f}   | {b1/b2:6.3f}  {z3:+6.1f}          | {b3:6.3f} {z4:+5.1f}")
a = np.array(rows)
print("\nRanges over the grid:")
print(f"  B(10^-10.15) {a[:,0].min():.3f}-{a[:,0].max():.3f}; z {a[:,1].min():+.1f} to {a[:,1].max():+.1f}")
print(f"  B(10^-8.91)  {a[:,2].min():.3f}-{a[:,2].max():.3f}; z {a[:,3].min():+.1f} to {a[:,3].max():+.1f}")
print(f"  ratio        {a[:,4].min():.3f}-{a[:,4].max():.3f}; z {a[:,5].min():+.1f} to {a[:,5].max():+.1f}")

# For orientation only (not a prediction): the corner's trend across the low bin, the DR4 trend observable.
print("\nTrend observable (orientation): B(0.2e-10)/B(1.0e-10)")
for gam in (0.87, 0.95):
    for aM in (1.0, 1.2):
        print(f"  gamma={gam} aM={aM}: {boost(.2e-10, gam, aM*1e-10)/boost(1e-10, gam, aM*1e-10):.3f}")
