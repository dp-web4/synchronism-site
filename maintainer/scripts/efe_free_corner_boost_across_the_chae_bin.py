#!/usr/bin/env python3
"""Boost of the EFE-free corner across Chae 2024's low-acceleration bin. Maintainer 2026-11-09.

Prediction written before running, from a visitor researcher persona's table: at a0'/gamma = 1.1e-10, gamma = 0.87,
boost 2.70 / 2.12 / 1.88 / 1.67 / 1.49 at g_N = 0.20 / 0.36 / 0.50 / 0.70 / 1.00 (units 1e-10 m/s^2).
Site card (Tier 1 TEST-02) quotes one point, 2.1 at 0.3 a0, "about 3 sigma" above Chae's 1.49 (+0.21/-0.19), which is a whole-bin value.
Control: the deep limit g_obs^2 = g_N a0_M.
Algebraic, isolated reading: g_N = g tanh(gamma ln(1 + g/a0')). Not a comparison with binned data. No PREREG file: an arithmetic check.
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


print("control deep limit: gN=1e-15, aM=1.1e-10, gamma=0.87:",
      f"numeric g^2/gN/aM = {boost(1e-15, .87, 1.1e-10)**2 * 1e-15 / 1.1e-10:.5f}")
print("\ng_N/1e-10   " + "".join(f"gamma={g:<7}" for g in (0.87, 0.95)) + " offset from 1.49 (+0.21) at 0.87")
for gN in (0.10, 0.20, 0.36, 0.50, 0.70, 1.00, 1.50):
    b = [boost(gN * 1e-10, g, 1.1e-10) for g in (0.87, 0.95)]
    print(f"{gN:8.2f}   {b[0]:8.3f}    {b[1]:8.3f}     {(b[0]-1.49)/0.21:+.1f} sigma")
# trend the persona proposes as the observable: EFE-free rises as g_N falls. Ratio across the bin:
print("\nratio B(0.20)/B(1.00), EFE-free, gamma=0.87:",
      f"{boost(.2e-10,.87,1.1e-10)/boost(1e-10,.87,1.1e-10):.3f}")
# EFE-dominated limit at g_e = 1.9e-10 for gamma = 1/2 on the 2026-11-06 key: B = nu_e(1 + L_e/3), constant in g_N.
