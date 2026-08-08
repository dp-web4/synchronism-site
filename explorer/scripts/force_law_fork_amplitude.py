#!/usr/bin/env python3
"""
Force-law fork amplitude: how far apart are the framework's own readings?

Motivation (explorer 2026-08-08). SESSION_FOCUS's P0 topic says every candidate
discriminator dies on an unmade definitional choice, and proposes "no Lagrangian"
as the common cause.  The archive contradicts the premise: manuscripts/
Appendix_D_Synchronism_in_General_Relativistic_Form.md D.2 DOES state a field
equation, and D.3 embeds it in effective Einstein equations.

D.2 states, on one page, both of:

    (L1)  nabla^2 Phi = 4 pi G rho / C(rho)          "modified Poisson equation"
    (L3)  g_obs = g_bar / C(rho)                     "observed acceleration"

and presents them as the same statement.  They are not.  L3 is the spherical
solution of a DIFFERENT field equation,

    (L2)  div [ C(rho) grad Phi ] = 4 pi G rho       (AQUAL-like; the site's form)

This script measures the gap, using the site's own baryonic model, its own
C(rho), and its own five galaxies (src/app/galaxy-plotter/page.tsx).

Control: MOND's own realization fork (AQUAL vs QUMOND) is computed the same way.
"""

import math

# ---------------------------------------------------------------- site constants
# verbatim from src/app/galaxy-plotter/page.tsx
G_KPC = 4.301e-6   # kpc (km/s)^2 / Msun
A0_KPC = 3703.0    # a0 = 1.2e-10 m/s^2 in (km/s)^2/kpc
BTFR_A = 47.0      # M_b = 47 V^4
H_Z = 0.3          # toy disk scale height, kpc
GAMMA = 2.0        # framework's asserted gamma
A_RHOCRIT = 0.029  # rho_crit = 0.029 * V^2

GALAXIES = [
    # name, rd (kpc), vflat (km/s), r_outermost observed point (kpc)
    ("DDO 154",  1.5,  47.0,  5.0),
    ("NGC 2403", 2.7, 136.0, 11.0),
    ("NGC 3198", 3.2, 150.0, 20.0),
    ("UGC 128",  4.0,  55.0, 18.0),
    ("NGC 7331", 6.5, 250.0, 20.0),
]


def disk_mass(vflat):
    return BTFR_A * vflat ** 4


def sigma(r, vflat, rd):
    """Exponential disk surface density, Msun/pc^2 (site's midplaneDensity numerator)."""
    sigma0 = disk_mass(vflat) / (2 * math.pi * rd * rd * 1e6)
    return sigma0 * math.exp(-r / rd)


def midplane_density(r, vflat, rd):
    """Msun/pc^3 -- verbatim port of the site's midplaneDensity()."""
    return sigma(r, vflat, rd) / (2 * H_Z * 1000)


def rho_crit(vflat):
    return A_RHOCRIT * vflat * vflat


def C_of_rho(r, vflat, rd, gamma=GAMMA):
    """Verbatim port of the site's coherenceC()."""
    ratio = midplane_density(r, vflat, rd) / rho_crit(vflat)
    return math.tanh(gamma * math.log(ratio + 1.0))


def M_bar(r, vflat, rd):
    """Enclosed baryonic mass of the exponential disk (site's enclosedMassFrac)."""
    x = r / rd
    return disk_mass(vflat) * (1 - math.exp(-x) * (1 + x))


def M_eff_L1(r, vflat, rd, n=20000, gamma=GAMMA):
    """Enclosed EFFECTIVE mass for L1: integral of 2 pi r' Sigma(r')/C(r') dr'.

    Source rescaling rho -> rho/C at fixed scale height gives Sigma -> Sigma/C,
    so this is the disk-consistent form of nabla^2 Phi = 4 pi G rho/C.
    Sigma is in Msun/pc^2; convert to Msun/kpc^2 with 1e6.
    """
    total = 0.0
    h = r / n
    for i in range(n):
        rp = (i + 0.5) * h
        s = sigma(rp, vflat, rd) * 1e6            # Msun/kpc^2
        c = C_of_rho(rp, vflat, rd, gamma)
        if c <= 0:
            continue
        total += 2 * math.pi * rp * (s / c) * h
    return total


# ------------------------------------------------------------------ the four laws
def g_newton(r, vflat, rd):
    return G_KPC * M_bar(r, vflat, rd) / (r * r)


def g_L1(r, vflat, rd):
    """Appendix D.2 field equation, source form."""
    return G_KPC * M_eff_L1(r, vflat, rd) / (r * r)


def g_L2L3(r, vflat, rd):
    """div[C grad Phi] = 4 pi G rho  ==(spherical)==  g_bar / C.  Identical to the
    algebraic division reading g_obs = g_bar/C.  This is what TEST-09/10 use."""
    return g_newton(r, vflat, rd) / C_of_rho(r, vflat, rd)


def g_L4(r, vflat, rd):
    """The galaxy-plotter's quadrature stand-in: V^2 = V_bar^2 + (V_flat C)^2."""
    vb2 = g_newton(r, vflat, rd) * r
    v2 = vb2 + (vflat * C_of_rho(r, vflat, rd)) ** 2
    return v2 / r


def v_from_g(g, r):
    return math.sqrt(max(g, 0.0) * r)


# ------------------------------------------------------- MOND realization control
def g_aqual_spherical(r, vflat, rd):
    """AQUAL: div[mu(|grad Phi|/a0) grad Phi] = 4 pi G rho.
    Spherical => mu(g/a0) g = g_N.  Solve for g with mu_simple(x)=x/(1+x)."""
    gn = g_newton(r, vflat, rd)
    # mu(g/a0)*g = gn  with mu = x/(1+x), x=g/a0  =>  g^2/(a0+g) = gn
    # => g^2 - gn*g - gn*a0 = 0
    return 0.5 * (gn + math.sqrt(gn * gn + 4 * gn * A0_KPC))


def g_qumond_spherical(r, vflat, rd):
    """QUMOND: nabla^2 Phi = div[nu(|grad Phi_N|/a0) grad Phi_N].
    Spherical => g = nu(gn/a0) gn, nu = inverse of mu."""
    gn = g_newton(r, vflat, rd)
    y = gn / A0_KPC
    nu = 0.5 + math.sqrt(0.25 + 1.0 / y)
    return nu * gn


# ----------------------------------------------------------------------- reporting
def dex(a, b):
    if a <= 0 or b <= 0:
        return float('nan')
    return abs(math.log10(a / b))


print("=" * 78)
print("FORCE-LAW FORK AMPLITUDE  --  site's own C(rho), gamma=2, rho_crit=0.029 V^2")
print("=" * 78)
print()
print("L1  = Appendix D.2 field eq:  nabla^2 Phi = 4 pi G rho/C   (source rescaling)")
print("L2  = div[C grad Phi] = 4 pi G rho  (site /key-claims; AQUAL-like)")
print("L3  = g_obs = g_bar/C  (algebraic division; TEST-09/10's f_DM = 1-C)")
print("L4  = galaxy-plotter quadrature: V^2 = V_bar^2 + (V_flat C)^2")
print()
print("PROVEN IDENTITY: in spherical symmetry L2 and L3 are the SAME law")
print("  (integrate div[C grad Phi]=4 pi G rho over a ball: C g r^2 = G M(<r)).")
print("  So the live fork is L1 vs L2=L3 vs L4.")
print()

rows = []
for name, rd, vflat, rout in GALAXIES:
    print("-" * 78)
    print(f"{name}   rd={rd} kpc   V_flat={vflat} km/s   rho_crit={rho_crit(vflat):.3g} Msun/pc^3")
    print(f"{'r/kpc':>7} {'C':>9} {'V_bar':>8} {'V_L1':>9} {'V_L2=L3':>10} {'V_L4':>8} "
          f"{'|L1-L3| dex(g)':>15}")
    for frac in (0.25, 0.5, 1.0):
        r = rout * frac
        c = C_of_rho(r, vflat, rd)
        gb = g_newton(r, vflat, rd)
        g1 = g_L1(r, vflat, rd)
        g3 = g_L2L3(r, vflat, rd)
        g4 = g_L4(r, vflat, rd)
        d = dex(g1, g3)
        print(f"{r:7.2f} {c:9.2e} {v_from_g(gb,r):8.1f} {v_from_g(g1,r):9.1f} "
              f"{v_from_g(g3,r):10.3g} {v_from_g(g4,r):8.1f} {d:15.2f}")
        if frac == 1.0:
            rows.append((name, d, v_from_g(g1, r), v_from_g(g3, r), v_from_g(g4, r), vflat))

print()
print("=" * 78)
print("AT THE OUTERMOST OBSERVED POINT")
print("=" * 78)
print(f"{'galaxy':>10} {'V_obs':>7} {'V_L1':>9} {'V_L2=L3':>12} {'V_L4':>8} {'fork dex(g)':>12}")
for name, d, v1, v3, v4, vflat in rows:
    print(f"{name:>10} {vflat:7.0f} {v1:9.1f} {v3:12.4g} {v4:8.1f} {d:12.2f}")

print()
forks = [r[1] for r in rows]
print(f"Synchronism force-law fork amplitude L1 vs L3: "
      f"min {min(forks):.2f} dex, median {sorted(forks)[len(forks)//2]:.2f} dex, "
      f"max {max(forks):.2f} dex")

print()
print("=" * 78)
print("CONTROL: MOND's OWN realization fork (AQUAL vs QUMOND), same galaxies")
print("=" * 78)
print(f"{'galaxy':>10} {'r/kpc':>7} {'g_AQUAL':>12} {'g_QUMOND':>12} {'fork dex':>10}")
mond_forks = []
for name, rd, vflat, rout in GALAXIES:
    for frac in (0.25, 0.5, 1.0):
        r = rout * frac
        ga = g_aqual_spherical(r, vflat, rd)
        gq = g_qumond_spherical(r, vflat, rd)
        d = dex(ga, gq)
        mond_forks.append(d)
        if frac == 1.0:
            print(f"{name:>10} {r:7.2f} {ga:12.4g} {gq:12.4g} {d:10.2e}")
print()
print(f"MOND realization fork amplitude: max {max(mond_forks):.2e} dex over all points")
print("(exact zero to roundoff -- nu is the functional inverse of mu, so AQUAL and")
print(" QUMOND coincide IDENTICALLY in spherical symmetry.  Milgrom 2010.)")

print()
print("=" * 78)
print("ASYMPTOTICS -- why L1 and L3 cannot be reconciled by tuning")
print("=" * 78)
print("Small-x expansion of the site's compander:")
print("  C = tanh(gamma ln(1+x)) -> gamma x   as x = rho/rho_crit -> 0")
print("  => rho/C -> rho_crit/gamma  = a CONSTANT, independent of rho.")
print()
for name, rd, vflat, rout in GALAXIES:
    floor = rho_crit(vflat) / GAMMA
    # check numerically far out
    r = 4 * rout
    num = midplane_density(r, vflat, rd) / C_of_rho(r, vflat, rd)
    print(f"  {name:>10}: rho_crit/gamma = {floor:.4g}   rho/C at r={r:.0f} kpc = {num:.4g} "
          f"Msun/pc^3  (ratio {num/floor:.4f})")
print()
print("L1 therefore sources a UNIFORM effective density floor rho_crit/gamma that")
print("fills all space: M_eff diverges, V(r) rises without bound, and the total")
print("mass of an isolated galaxy is infinite.  L3 has no such floor.")
print("The two laws are not two calibrations of one theory; they have different")
print("asymptotic mass functions.")
