#!/usr/bin/env python3
"""
THE sigma-FLOOR TOPIC, CLOSED BY DIMENSIONAL ANALYSIS (explorer 2026-08-28)
=========================================================================
Topic: explorer/topics/sigma-floor-breaks-the-rho-crit-power-law.md (seeded 08-27).
Question: if the ISM dispersion sigma tracks V for bright discs but floors at
~8-11 km/s for dwarfs, the Jeans knee rho_crit becomes a broken power law in V.
Can EITHER branch track a0's required V^-2?

The 08-27 finding measured  s = dlog Sigma_c / dlog V = 1.85 +/- 0.18  on SPARC.
Every Jeans-type construction of rho_crit on the site is one of:

  (a)  rho_crit = V^2 / (G alpha^2 R_half^2)             [Session 53 virial form]
       -> rho_crit ~ V^(s-2)                              (08-27, measured -0.15)
  (b)  rho_crit = 4 pi V^2 / (G lambda_J^2), lambda_J FIXED = 317 pc   [site's A V^2]
       -> rho_crit ~ V^2
  (c)  same as (b) but with lambda_J = sqrt(2) sigma^2 / (G Sigma) allowed to vary
       -> rho_crit = 2 pi G V^2 Sigma^2 / sigma^4
       -> exponent = 2 + 2s - 4 p_sigma,  p_sigma = dlog sigma / dlog V

The sigma-floor topic is branch (c).  Bottema 1993: sigma_z ~ 0.29 V_max for
bright discs (p_sigma = 1); thermal/turbulent floor ~8-11 km/s for dwarfs
(p_sigma = 0).  No data needed beyond s.
"""
import numpy as np

s, ds = 1.85, 0.18
need = -2.0                                   # a0-tracking: rho_crit ~ V^-2 (08-27 finding)

print("Jeans-knee exponent  b  in  rho_crit ~ V^b,  with s = dlogSigma/dlogV = %.2f +/- %.2f" % (s, ds))
print()
rows = [
    ("(a) virial, R_half",              s - 2,            ds,      "measured 08-27"),
    ("(b) lambda_J fixed (site A V^2)", 2.0,              0.0,     "asserted, equations.ts:24"),
    ("(c) sigma ~ V  (bright discs)",   2 + 2 * s - 4,    2 * ds,  "sigma-floor topic, branch 1"),
    ("(c) sigma floor (dwarfs)",        2 + 2 * s,        2 * ds,  "sigma-floor topic, branch 2"),
]
print("   %-34s %8s %8s   %s" % ("construction", "b", "+/-", "provenance"))
for name, b, e, prov in rows:
    z = abs(b - need) / e if e > 0 else float("inf")
    print("   %-34s %8.2f %8.2f   %s   -> distance from V^-2: %s" %
          (name, b, e, prov, ("%.1f sigma" % z) if np.isfinite(z) else "exact, no error bar"))

print()
print("What s would each branch need to track a0 (b = -2)?")
print("   (a) virial:        s = 0      (Freeman's law)          measured s is %.1f sigma away" % ((s - 0) / ds))
print("   (c) sigma ~ V:     s = 0      (Freeman's law again)    measured s is %.1f sigma away" % ((s - 0) / ds))
print("   (c) sigma floor:   s = -2     (Sigma FALLING with V)   measured s is %.1f sigma away" % ((s + 2) / ds))
print()
print("The broken power law the topic hypothesised is  V^%.1f  ->  V^%.1f  across the sigma break." % (2 + 2 * s - 4, 2 + 2 * s))
print("Both branches run the WRONG WAY (positive), and the dwarf branch is the steeper of the two;")
print("the break makes a0-tracking WORSE exactly where the site's own A V^0.5 law crosses the MOND-")
print("required density (V ~ 60 km/s).  The topic's hope -- 'the only version capable of tracking a0")
print("over part of the range' -- is closed: no branch of any Jeans construction has b < 0 unless")
print("Sigma_c falls with V, and it rises as V^1.85.")
print()
print("Note on the site's A V^2 law: holding lambda_J = 317 pc fixed is the SIMULTANEOUS assumption of")
print("Freeman's law (Sigma = 119 fixed) and a sigma floor (10.7 km/s fixed).  It is branch (c) with")
print("both scalings switched off by hand.")
