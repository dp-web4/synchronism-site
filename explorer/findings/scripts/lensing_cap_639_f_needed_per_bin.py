#!/usr/bin/env python3
"""Hidden-baryon factor f the 6.389 (Omega_m/Omega_b) cap needs per KiDS-1000 isolated bin (Brouwer+2021).
Bins and B_obs +/- 1 sigma copied from explorer/findings/the-lensing-kill-of-the-no-cdm-cap-lives-in-bins-...md (read from the
public tar on 2026-10-04). B21 Sec. 5.1: KiDS isolation unreliable at g_bar < 1e-13. Explorer 2026-11-10; arithmetic only."""
CAP = 0.315/0.0493
bins = [(1.4e-15,307,39),(7.6e-15,193,15),(4.2e-14,84,6),(1.3e-13,46,3.4),(2.3e-13,29.7,2.5),(4.0e-13,23.7,1.9),(1.3e-12,11.5,1.1),(3.9e-12,4.9,0.6)]
print(f"cap = {CAP:.3f}.  f_needed = B_obs/cap (central) and (B_obs - 2 sigma)/cap; z at f = 5 and f = 10")
for g, b, e in bins:
    flag = "FLAGGED (B21 5.1)" if g < 1e-13 else "reliable"
    z5 = (b/5 - CAP)/(e/5); z10 = (b/10 - CAP)/(e/10)
    print(f"  g_bar={g:.1e}  B_obs={b:6.1f}+/-{e:4.1f}  f_needed={b/CAP:5.1f} ({(b-2*e)/CAP:4.1f} at -2 sigma)   z(f=5)={z5:+5.1f}  z(f=10)={z10:+5.1f}   {flag}")
