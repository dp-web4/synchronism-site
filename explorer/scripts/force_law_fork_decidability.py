#!/usr/bin/env python3
"""
Is the force-law fork DECIDABLE without data?

Companion to force_law_fork_amplitude.py.  That script measured the gap between
the archive's field equation (Appendix D.2) and the site's algebraic reading.
This one asks the constructive question: can any of the live readings be
eliminated on internal grounds alone, at every parameter value?

Readings in play (see findings/ for provenance):
  L1  nabla^2 Phi = 4 pi G rho/C          Appendix D.2 (archive; NOT on the site)
  L2  div[C grad Phi] = 4 pi G rho        site /mond-unification "one-line completion"
  L3  g = g_bar / C                       algebraic division; TEST-09/10's f_DM = 1-C
  L4  V^2 = V_bar^2 + (V_flat C)^2        galaxy-plotter quadrature stand-in
  L5  g = g_bar * C                       multiplication (site's pre-2026-08-04 reading)

L2 == L3 exactly in spherical symmetry (proved in the companion script).
"""

import math

G_KPC = 4.301e-6
BTFR_A = 47.0
H_Z = 0.3
A_RHOCRIT = 0.029

GALAXIES = [
    ("DDO 154",  1.5,  47.0,  5.0),
    ("NGC 2403", 2.7, 136.0, 11.0),
    ("NGC 3198", 3.2, 150.0, 20.0),
    ("UGC 128",  4.0,  55.0, 18.0),
    ("NGC 7331", 6.5, 250.0, 20.0),
]


def disk_mass(v):
    return BTFR_A * v ** 4


def sigma(r, v, rd):
    return disk_mass(v) / (2 * math.pi * rd * rd * 1e6) * math.exp(-r / rd)


def rho_mid(r, v, rd):
    return sigma(r, v, rd) / (2 * H_Z * 1000)


def rho_crit(v):
    return A_RHOCRIT * v * v


def C(r, v, rd, gamma):
    return math.tanh(gamma * math.log(rho_mid(r, v, rd) / rho_crit(v) + 1.0))


def M_bar(r, v, rd):
    x = r / rd
    return disk_mass(v) * (1 - math.exp(-x) * (1 + x))


def g_N(r, v, rd):
    return G_KPC * M_bar(r, v, rd) / (r * r)


def M_eff_L1(r, v, rd, gamma, n=20000):
    tot, h = 0.0, r / n
    for i in range(n):
        rp = (i + 0.5) * h
        c = C(rp, v, rd, gamma)
        if c <= 0:
            continue
        tot += 2 * math.pi * rp * (sigma(rp, v, rd) * 1e6 / c) * h
    return tot


def dex(a, b):
    return abs(math.log10(a / b)) if a > 0 and b > 0 else float('nan')


print("=" * 78)
print("PART 1 -- does the L1/L3 fork survive at the ONLY viable gamma?")
print("=" * 78)
print()
print("gamma = 2      : the framework's asserted value (refuted by SPARC, dBIC = +184)")
print("gamma = 0.489  : the free-gamma SPARC optimum (= MOND simple-mu; TEST-11)")
print()
for gamma in (2.0, 0.489):
    print(f"--- gamma = {gamma}")
    print(f"{'galaxy':>10} {'V_obs':>6} {'V_L1':>10} {'V_L2=L3':>11} {'fork dex(g)':>12}")
    forks = []
    for name, rd, v, rout in GALAXIES:
        g1 = G_KPC * M_eff_L1(rout, v, rd, gamma) / rout ** 2
        g3 = g_N(rout, v, rd) / C(rout, v, rd, gamma)
        d = dex(g1, g3)
        forks.append(d)
        print(f"{name:>10} {v:6.0f} {math.sqrt(g1*rout):10.4g} "
              f"{math.sqrt(g3*rout):11.4g} {d:12.2f}")
    print(f"{'':>10} fork amplitude: min {min(forks):.2f}, median "
          f"{sorted(forks)[len(forks)//2]:.2f}, max {max(forks):.2f} dex")
    print()

print("=" * 78)
print("PART 2 -- the vacuum source floor: an a-priori kill of L1 for EVERY gamma")
print("=" * 78)
print()
print("C(rho) = tanh(gamma ln(1 + rho/rho_crit)).  As rho -> 0:")
print("  ln(1+x) -> x,  tanh(u) -> u   =>   C -> gamma * rho/rho_crit")
print("  =>  rho_eff = rho/C -> rho_crit/gamma,  a CONSTANT independent of rho.")
print()
print("So L1's source does not vanish in vacuum.  It approaches a uniform floor")
print("that fills all space.  Numerical check of the limit at rho/rho_crit = 1e-8:")
print()
print(f"{'gamma':>8} {'rho_crit/gamma (DDO154)':>26} {'rho/C at x=1e-8':>18} {'ratio':>8}")
for gamma in (0.25, 0.489, 1.0, 2.0, 5.0):
    rc = rho_crit(47.0)
    x = 1e-8
    rho = x * rc
    c = math.tanh(gamma * math.log(1 + x))
    print(f"{gamma:8.3f} {rc/gamma:26.4f} {rho/c:18.4f} {(rho/c)/(rc/gamma):8.4f}")
print()
print("Consequences of a uniform effective source rho_f = rho_crit/gamma:")
print("  M_eff(<r) ~ (4/3) pi r^3 rho_f  ->  diverges")
print("  V^2 = G M_eff/r ~ (4/3) pi G rho_f r^2  ->  V grows LINEARLY with r, forever")
print("  Every isolated galaxy has infinite mass; no rotation curve ever flattens.")
print()
print("Scale of the absurdity -- the implied halo mass inside 100 kpc:")
print(f"{'galaxy':>10} {'rho_f (Msun/pc^3)':>18} {'M(<100kpc) Msun':>18} {'M_bar Msun':>14} {'ratio':>10}")
for name, rd, v, rout in GALAXIES:
    for gamma in (2.0,):
        rho_f = rho_crit(v) / gamma           # Msun/pc^3
        rho_f_kpc = rho_f * 1e9               # Msun/kpc^3
        M100 = (4.0 / 3.0) * math.pi * 100 ** 3 * rho_f_kpc
        print(f"{name:>10} {rho_f:18.4g} {M100:18.4g} {disk_mass(v):14.4g} "
              f"{M100/disk_mass(v):10.4g}")
print()
print("For comparison, the mass of the observable universe is ~1e53 kg ~ 5e22 Msun.")
print()
print("This kill is PARAMETER-FREE in gamma and rho_crit: the floor exists for every")
print("gamma > 0 and every rho_crit > 0.  It is also independent of the disk model --")
print("it follows from the small-x expansion of the compander alone.  L1 is therefore")
print("eliminable WITHOUT data, on internal grounds.")
print()

print("=" * 78)
print("PART 3 -- the surviving reading, and what it costs")
print("=" * 78)
print()
print("L4 (plotter quadrature) has no field equation and appears in no manuscript;")
print("   it is a plotting stand-in, self-labelled as such in the source comment.")
print("L5 (g = g_bar * C) was retracted site-side on 2026-08-04 (wrong direction:")
print("   the site's own f_DM = 1-C identity requires division).")
print("L1 dies on the vacuum floor above.")
print("=> L2 == L3 is the ONLY reading that is (a) sourced by a field equation,")
print("   (b) momentum-conserving, (c) consistent with f_DM = 1-C, and (d) not")
print("   eliminable a priori.")
print()
print("Cost of that survival, stated plainly: L2 = L3 is exactly the reading that")
print("TEST-09 and TEST-10 already refute (boost ceiling B <= 1/Omega_m).  Closing")
print("the coupling fork in favour of L2=L3 does not add a refutation -- it removes")
print("the escape hatch that made the existing two conditional.")
print()
print("L2's own known pathology (already on /mond-unification, 2026-08-04): because")
print("g = g_N/C and C -> 0 in vacuum, the EXTERIOR field of an isolated mass")
print("diverges.  Note this is a DIFFERENT object from L1's floor: L1 diverges in")
print("the SOURCE (rho_eff -> const), L2 diverges in the FIELD (g -> inf at fixed")
print("M).  Both are vacuum pathologies; they are not the same pathology, and")
print("neither implies the other.")
