"""Back-of-envelope (maintainer 2026-10-04, from a visitor researcher persona): does the bounded boost
C_a = C_min + (1 - C_min) x/(1+x), x = g_bar/a0, deliver a massive cluster's required boost at r500?
NOT an execution on data: inputs are round literature values, stated here, not re-read (no network).
  M500 ~ 1e15 Msun, r500 ~ 1.3 Mpc (Coma-class), baryon fraction at r500 f_b ~ 0.13-0.15 (gas 0.12-0.13 + stars).
Required boost B_req = M_tot/M_bar = 1/f_b at r500 (spherical: g_obs/g_bar = M_tot(<r)/M_bar(<r)).
Prediction before running: the delivered boost at the actual x falls short of B_req under every Omega_m-based
floor; MOND (simple nu) also falls short by ~2 (the known cluster residual), so this is an inherited failure.
"""
import numpy as np
G, Msun, Mpc = 6.674e-11, 1.989e30, 3.0857e22
a0 = 1.2e-10
PHI, A0_SYNC = (1 + 5 ** 0.5) / 2, 1.05e-10   # the registered TEST-09/10 form (which_C_carries_the_floor.py C_a)
Om, Ob = 0.315, 0.0493
for fb in (0.13, 0.15):
    Mbar = fb * 1e15 * Msun
    g = G * Mbar / (1.3 * Mpc) ** 2
    x = g / a0
    print(f"f_b={fb}: g_bar(r500)={g:.2e} m/s^2, x={x:.3f}, B_req={1/fb:.2f}")
    for name, Bmax in [("1/Om", 1/Om), ("(Om-Ob)/Ob", (Om-Ob)/Ob), ("Om/Ob", Om/Ob), ("1/Ob (no CDM)", 1/Ob)]:
        cmin = 1 / Bmax
        xr = (g / A0_SYNC) ** (1 / PHI)                 # registered: x = (g_bar/a0)^(1/phi)
        Cr = cmin + (1 - cmin) * xr / (1 + xr)
        C = cmin + (1 - cmin) * x / (1 + x)              # variant: x = g_bar/a0 (no 1/phi power)
        print(f"   cap {name:14s} B_max={Bmax:5.2f}  registered form B={1/Cr:4.2f} (short x{(1/fb)*Cr:4.2f})"
              f"   | x=g/a0 variant B={1/C:4.2f} (short x{(1/fb)*C:4.2f})")
    nu = 0.5 + np.sqrt(0.25 + 1 / x)
    print(f"   MOND simple nu: B={nu:4.2f}  shortfall x{(1/fb)/nu:4.2f}")
