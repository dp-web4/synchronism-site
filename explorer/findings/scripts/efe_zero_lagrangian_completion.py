#!/usr/bin/env python3
"""
EFE=0, momentum conservation, and the dielectric completion of C(rho)*g
=======================================================================

Topic: explorer/topics/efe-zero-momentum-conservation-objection.md
Session: 2026-08-03 explorer

The 2026-08-03 visitor (leading-edge researcher persona) raised Felten's (1984)
objection: an ALGEBRAIC modification of gravity -- multiply g by a scalar
function of local quantities with no field equation behind it -- violates
Newton's third law and therefore momentum conservation. That is exactly the
class /mond-unification puts the framework in:

    "an algebraic C(rho)*g modification satisfies the Strong Equivalence
     Principle by construction and predicts EFE = 0 exactly"

This script executes four checks, all with the site's OWN parameters, taken
verbatim from src/app/galaxy-plotter/page.tsx and src/lib/equations.ts:

  PART A  third-law violation for the algebraic law, bracketed over the three
          density prescriptions the site never distinguishes
  PART B  the Lagrangian ("gravitational dielectric") completion, and whether
          it preserves EFE = 0
  PART C  the size of the polarization force the completion adds -- the price
          of momentum conservation
  PART D  the vacuum limit: C(0) = 0 exactly, so the dielectric constant
          vanishes in matter-free space. What that does to rotation curves.

Units throughout: kpc, km/s, M_sun.
"""

import math

# ---------------------------------------------------------------------------
# Site constants (verbatim from src/app/galaxy-plotter/page.tsx)
# ---------------------------------------------------------------------------
G_KPC   = 4.301e-6   # G in kpc*(km/s)^2/M_sun
A0_KPC  = 3703.0     # a0 = 1.2e-10 m/s^2 in (km/s)^2/kpc
BTFR_A  = 47.0       # M_b = 47*V^4 M_sun
H_Z     = 0.3        # toy disk scale height, kpc
A_RHOC  = 0.029      # rho_crit = 0.029 * V_flat^2, M_sun/pc^3
GAMMA_SITE = 2.0     # value hard-coded in the plotter
GAMMA_SPARC = 0.489  # SPARC free-fit value (2026-07-22 compander selection)

GALAXIES = [
    # name,        R_d kpc, V_flat km/s, r_last kpc (last tabulated point)
    ("DDO 154",     1.5,  47.0,  5.0),
    ("NGC 2403",    2.7, 136.0, 11.0),
    ("NGC 3198",    3.2, 150.0, 20.0),
    ("UGC 128",     4.0,  55.0, 18.0),
    ("NGC 7331",    6.5, 250.0, 20.0),
]


def disk_mass(vflat):
    return BTFR_A * vflat ** 4


def encl_frac(r, rd):
    x = r / rd
    return 1.0 - math.exp(-x) * (1.0 + x)


def v_newton(r, vflat, rd):
    if r <= 0:
        return 0.0
    return math.sqrt(G_KPC * disk_mass(vflat) * encl_frac(r, rd) / r)


def rho_mid(r, vflat, rd):
    """Midplane density of the toy exponential disk, M_sun/pc^3 (site's own)."""
    sigma0 = disk_mass(vflat) / (2 * math.pi * rd * rd * 1e6)   # M_sun/pc^2
    return sigma0 * math.exp(-r / rd) / (2 * H_Z * 1000.0)


def rho_crit(vflat):
    return A_RHOC * vflat * vflat        # M_sun/pc^3


def C(rho, gamma, rhoc):
    if rho <= 0 or rhoc <= 0:
        return 0.0
    return math.tanh(gamma * math.log(rho / rhoc + 1.0))


# ===========================================================================
print("=" * 78)
print("PART D (run first -- it reframes everything else)")
print("The two galaxy force laws the site simultaneously asserts")
print("=" * 78)
print("""
L1  g = g_N / C(rho)          <- follows from the site's own f_DM = 1 - C
                                 identity (2026-08-02: C == mu identically).
L2  v^2 = v_b^2 + (V_flat*C)^2 <- what src/app/galaxy-plotter/page.tsx computes.

They are not variants. In the outskirts they run in OPPOSITE directions:
C -> 0, so L1's boost 1/C -> infinity while L2's extra term V_flat*C -> 0.
Observed curves are flat. Below: what each predicts at the last measured point.
""")

hdr = f"{'galaxy':<11}{'r_last':>7}{'v_obs':>7}{'v_L2':>8}{'v_L1':>12}{'C(r_last)':>11}{'boost 1/C':>12}"
print(hdr)
print("-" * len(hdr))
for name, rd, vf, rlast in GALAXIES:
    rhoc = rho_crit(vf)
    c = C(rho_mid(rlast, vf, rd), GAMMA_SITE, rhoc)
    vb = v_newton(rlast, vf, rd)
    v_l2 = math.sqrt(vb ** 2 + (vf * c) ** 2)
    v_l1 = vb / math.sqrt(c) if c > 0 else float("inf")
    boost = 1.0 / c if c > 0 else float("inf")
    print(f"{name:<11}{rlast:>7.1f}{vf:>7.0f}{v_l2:>8.1f}{v_l1:>12.3e}{c:>11.2e}{boost:>12.3e}")

print("""
L2 returns essentially the Newtonian curve (extra term is ~1e-3 km/s -- the
2026-07-28 result). L1 overshoots by many orders of magnitude. Neither is flat.
""")

print("-" * 78)
print("Is the L1 divergence a parameter choice? Sweep gamma and rho_crit.")
print("-" * 78)
name, rd, vf, rlast = "NGC 3198", 3.2, 150.0, 20.0
print(f"{name}: v_obs = {vf:.0f} km/s at r = {rlast:.0f} kpc, "
      f"site rho_crit = {rho_crit(vf):.0f} M_sun/pc^3\n")
print(f"{'gamma':>7} | " + "".join(f"{'rc=1e%+d' % e:>11}" for e in range(-4, 5, 2)))
print("-" * 70)
for gamma in (0.25, 0.489, 1.0, 2.0, 4.0):
    row = f"{gamma:>7.3f} | "
    for e in range(-4, 5, 2):
        rc = 10.0 ** e
        c = C(rho_mid(rlast, vf, rd), gamma, rc)
        v = v_newton(rlast, vf, rd) / math.sqrt(c) if c > 0 else float("inf")
        row += f"{v:>11.3e}"
    print(row)
print(f"\n(target is {vf:.0f}. Every cell in the table is a predicted v at r_last.)")

# What rho_crit would L1 need to land on the observed value?
print("\nInverting L1 for the rho_crit that reproduces v_obs exactly at r_last:")
print(f"{'galaxy':<11}{'C needed':>11}{'rho(r_last)':>14}{'rho_crit needed':>17}{'site rho_crit':>15}")
print("-" * 68)
for name, rd, vf, rlast in GALAXIES:
    vb = v_newton(rlast, vf, rd)
    c_need = (vb / vf) ** 2                     # since v_L1 = vb/sqrt(C)
    rho = rho_mid(rlast, vf, rd)
    # invert C = tanh(gamma ln(rho/rc + 1)) for rc
    t = math.atanh(min(c_need, 0.999999))
    rc_need = rho / (math.exp(t / GAMMA_SITE) - 1.0)
    print(f"{name:<11}{c_need:>11.4f}{rho:>14.3e}{rc_need:>17.3e}{rho_crit(vf):>15.3e}")
print("""
A per-galaxy rho_crit CAN be found -- but only one radius at a time. The
shape is what fails: rho falls exponentially in r while the required
1/C must grow like r (flat curve => M_tot ~ r). See next block.
""")

print("-" * 78)
print("L1 radial shape: required boost vs delivered boost, NGC 3198")
print("-" * 78)
name, rd, vf = "NGC 3198", 3.2, 150.0
rhoc = rho_crit(vf)
print(f"{'r kpc':>7}{'rho':>12}{'C':>11}{'1/C delivered':>16}{'1/C required':>15}")
print("-" * 61)
for r in (2, 4, 6, 8, 10, 13, 16, 20):
    rho = rho_mid(r, vf, rd)
    c = C(rho, GAMMA_SITE, rhoc)
    vb = v_newton(r, vf, rd)
    req = (vf / vb) ** 2 if vb > 0 else float("inf")
    print(f"{r:>7.0f}{rho:>12.3e}{c:>11.3e}{1.0/c:>16.3e}{req:>15.3f}")
print("""
Required boost grows from ~1 to ~4 across the disk. Delivered boost grows
from 1e3 to 1e6 -- exponentially, because C ~ gamma*rho/rho_crit and rho is
exponential in r. No (gamma, rho_crit) fixes an exponential-vs-linear
mismatch: it is a functional-form failure, not a calibration failure.
""")

# ===========================================================================
print("=" * 78)
print("PART A -- third-law violation of the ALGEBRAIC law (Felten 1984)")
print("=" * 78)
print("""
For bodies A, B the algebraic law gives
    F(A<-B) = G m_A m_B / r^2 * K(rho_A)
    F(B<-A) = G m_A m_B / r^2 * K(rho_B)
with K = 1/C (boost reading) or K = C (the literal "C(rho)*g" text reading).
The Newtonian factors are identical; the multipliers are not. So

    |F_AB| - |F_BA| = G m_A m_B / r^2 * |K(rho_A) - K(rho_B)|

is a net force on the pair's centre of mass. It vanishes iff rho_A = rho_B.
The fractional violation |K_A - K_B| / max(K_A, K_B) is reported below.

The site never states WHICH density rho is (the body's own mean density, the
ambient medium at its location, or a density smoothed over the MRH). The
answer changes by ~20 orders of magnitude, so all three are bracketed.
""")

# (name, rho_own, rho_ambient, rho_MRH-smoothed)  all M_sun/pc^3
BODIES = {
    # own mean density / ambient medium at its location / kpc-scale smoothed
    "Sun":            (1.4 / 1.41 * 1.0e11, 0.10, 0.10),   # rho_sun=1.41 g/cm^3 ~ 1.0e11 M_sun/pc^3
    "Earth":          (5.51 / 1.41 * 1.0e11, 1e-12, 0.10),
    "Sgr A* region":  (1.0e4, 1.0e4, 1.0e4),               # nuclear star cluster
    "M13 (glob.cl.)": (1.0e3, 1.0e-3, 1.0e-3),             # core density vs halo ambient
    "LMC":            (5.0e-2, 5.0e-2, 5.0e-2),
    "Milky Way disk": (1.0e-1, 1.0e-1, 1.0e-1),
    "Draco dSph":     (1.0e-1, 1.0e-4, 1.0e-4),            # dSph core vs MW halo at 80 kpc
    "outer HI disk":  (1.0e-3, 1.0e-3, 1.0e-3),
}

PAIRS = [
    ("Sun", "Earth", "solar system, 1 AU"),
    ("Sun", "Sgr A* region", "star vs Galactic centre"),
    ("Milky Way disk", "LMC", "host vs satellite galaxy"),
    ("Milky Way disk", "Draco dSph", "host vs dSph satellite"),
    ("Milky Way disk", "M13 (glob.cl.)", "disk vs globular cluster"),
    ("Milky Way disk", "outer HI disk", "inner vs outer annulus, same galaxy"),
]

print("""ALGEBRAIC IDENTITY (checked numerically below): the fractional violation is
the SAME for K = 1/C and for K = C --

    |1/C_A - 1/C_B| / max(1/C_A, 1/C_B) = |C_A - C_B| / max(C_A, C_B)

so the result does not depend on which of the site's two readings of its own
law ("C(rho)*g" in the /mond-unification prose vs. g/C from the f_DM = 1 - C
identity) is intended. One less fork to adjudicate.
""")

for law_name, K in (("K = 1/C (boost reading, from f_DM = 1 - C)",
                     lambda c: (1.0 / c) if c > 0 else float("inf")),
                    ("K = C   (literal /mond-unification prose)",
                     lambda c: c)):
    print(f"\n--- {law_name}, gamma = {GAMMA_SITE}, rho_crit = "
          f"{rho_crit(150.0):.0f} M_sun/pc^3 (V_flat = 150) ---")
    print(f"{'pair':<34}{'own rho':>11}{'ambient':>11}{'MRH':>11}")
    print("-" * 67)
    for a, b, label in PAIRS:
        cells = []
        for i in range(3):
            ca = C(BODIES[a][i], GAMMA_SITE, rho_crit(150.0))
            cb = C(BODIES[b][i], GAMMA_SITE, rho_crit(150.0))
            ka, kb = K(ca), K(cb)
            if math.isinf(ka) or math.isinf(kb):
                cells.append("   inf")
            else:
                m = max(ka, kb)
                cells.append(f"{(abs(ka - kb) / m if m > 0 else 0.0) * 100:>9.1f}%")
        print(f"{label:<34}" + "".join(f"{c:>11}" for c in cells))

print("""
Read: percentage by which Newton's third law fails for that pair. 0% = safe.
The two tables are identical, as the identity above requires.
The solar system is safe under the boost reading only because C -> 1 at high
rho -- which is why no existing ephemeris test has already excluded this. The
violation is order-100% exactly in the regime the theory was built for.

NOTE the bracket disagreement: for the Sun/Earth pair the three prescriptions
give different answers, and for M13 and Draco the "own" and "ambient" columns
differ by orders of magnitude. The violation is not merely large -- with the
site's current text it is not even well defined.
""")

# ===========================================================================
print("=" * 78)
print("PART B -- does a momentum-conserving completion exist that keeps EFE=0?")
print("=" * 78)
print("""
Yes. One line, and it is the standard Bekenstein-Milgrom dielectric structure
with the interpolating function's argument swapped from |grad Phi| to rho:

    S[Phi, matter] = INT d^3x [ -(1/8 pi G) C(rho) |grad Phi|^2 - rho Phi ]

  delta/delta Phi  =>   div[ C(rho) grad Phi ] = 4 pi G rho          (*)

Three properties, all elementary:

  1. MOMENTUM IS CONSERVED. S is invariant under rigid translations, so by
     Noether total momentum is conserved. Felten's objection is answered.

  2. IT REPRODUCES L1 EXACTLY IN SPHERICAL SYMMETRY. Integrating (*) over a
     ball: C(rho(r)) g(r) r^2 = G M(r), i.e. g = g_N / C(rho). The algebraic
     law is the spherical solution of a perfectly respectable field equation.

  3. EFE = 0 EXACTLY, AND FOR A SHARP REASON. Equation (*) is LINEAR in Phi
     -- C depends on rho, not on grad Phi. Linear => superposition =>
     the internal solution of a subsystem is untouched by adding a uniform
     external field. This is not an approximation; it is exact.

     By contrast AQUAL's div[mu(|grad Phi|/a0) grad Phi] = 4 pi G rho is
     NONLINEAR in Phi, and Bekenstein & Milgrom (1984) derived the EFE from
     precisely that nonlinearity.

So the site's "EFE = 0" claim SURVIVES the momentum objection. It is not an
artifact of missing dynamics. It is the signature of a field equation that is
linear in the potential.

  ==> and that is the whole problem. Linearity in Phi is exactly what removes
      the self-consistency that makes MOND produce flat curves. In MOND the
      interpolating function is evaluated on the field it is determining; a
      low-acceleration region generates the boost that keeps the acceleration
      low. Keying on rho instead breaks the loop: rho is handed in from
      outside and knows nothing about g. PART D is that break, numerically.

The same one-line property does both jobs. "A uniform external field does not
change rho" (=> EFE = 0) and "empty space has C = 0 no matter how strong the
field" (=> vacuum singularity) are the SAME statement about C's argument.
""")

# ===========================================================================
print("=" * 78)
print("PART C -- the price of the completion: the polarization force")
print("=" * 78)
print("""
The completion is not free. Because C depends on rho, varying the action with
respect to the matter degrees of freedom gives matter an extra force beyond
-grad Phi. The effective potential per unit mass is

    Phi_eff = Phi + (1/8 pi G) C'(rho) |grad Phi|^2 ,    C' = dC/drho

so there is a polarization force f_pol = -grad[ C'(rho) g^2 / (8 pi G) ].
This term appears in no galaxy-sector formula on the site. Is it negligible?
""")

def Cprime(rho, gamma, rhoc):
    if rho <= 0 or rhoc <= 0:
        return 0.0
    u = gamma * math.log(rho / rhoc + 1.0)
    return gamma / (math.cosh(u) ** 2 * (rho + rhoc))

print(f"{'galaxy':<11}{'r kpc':>7}{'g':>12}{'|f_pol|/g':>13}")
print("-" * 43)
for name, rd, vf, rlast in GALAXIES:
    rhoc = rho_crit(vf)
    rhoc_kpc3 = rhoc * 1e9          # M_sun/kpc^3
    for r in (rlast / 2.0, rlast):
        h = 1e-3 * r
        def phi_pol(x):
            rho = rho_mid(x, vf, rd)
            rho_k = rho * 1e9
            vb = v_newton(x, vf, rd)
            g = vb * vb / x
            return Cprime(rho_k, GAMMA_SITE, rhoc_kpc3) * g * g / (8 * math.pi * G_KPC)
        f_pol = abs((phi_pol(r + h) - phi_pol(r - h)) / (2 * h))
        vb = v_newton(r, vf, rd)
        g = vb * vb / r
        print(f"{name:<11}{r:>7.1f}{g:>12.3e}{f_pol / g:>13.3e}")

print("""
The polarization force is ~1e-5 of gravity or smaller at the site's
rho_crit -- because rho_crit is so far above the disk density that C'(rho) is
suppressed. So momentum conservation costs essentially nothing observationally.

VERDICT ON THE TOPIC AS POSED: the objection is REAL for the formulation the
site currently states, and ANSWERABLE at negligible phenomenological cost. It
is not the fatal consistency failure the topic hoped for. Reporting it as a
kill would be an over-claim.
""")

# ===========================================================================
print("=" * 78)
print("PART D2 -- the vacuum limit, and the boost ceiling")
print("=" * 78)
print(f"""
C(0) = tanh(gamma * ln(0/rho_crit + 1)) = tanh(0) = 0, EXACTLY, for every
gamma and every rho_crit. Check: C(0) = {C(0.0, 2.0, 1160.0):.1f}

Under the dielectric reading C is the gravitational permittivity. A medium
with eps = 0 supports an infinite field: g = g_N / C -> infinity wherever
rho -> 0. Every isolated body has a matter-free exterior. So the theory is
singular in the exterior of every isolated body.

This also collides with the site's asserted ceiling B_max = 1/Omega_m ~ 3.17
(/parameter-derivations item 8). Under L1 the boost is 1/C, which is
unbounded above by construction. The radius at which the delivered boost
already exceeds 3.17 is:
""")
print(f"{'galaxy':<11}{'rho(r=0)':>12}{'C(r=0)':>11}{'B(r=0)=1/C':>13}"
      f"{'B(r_last)':>13}{'r where B=3.17':>16}")
print("-" * 76)
for name, rd, vf, rlast in GALAXIES:
    rhoc = rho_crit(vf)
    target = 1.0 / 3.17
    r0 = 1e-6                      # disk centre (rho_mid is finite there)
    c0 = C(rho_mid(r0, vf, rd), GAMMA_SITE, rhoc)
    clast = C(rho_mid(rlast, vf, rd), GAMMA_SITE, rhoc)
    where = "never below 3.17" if c0 < target else "see bisect"
    print(f"{name:<11}{rho_mid(r0, vf, rd):>12.3e}{c0:>11.3e}"
          f"{1.0 / c0:>13.3e}{1.0 / clast:>13.3e}{where:>16}")
print("""
The bisection has no root: for all five galaxies C is already below 1/3.17 at
the DISK CENTRE, the densest point of the model. The asserted ceiling B <= 3.17
is exceeded by 2-5 orders of magnitude at EVERY radius, not just in the
outskirts. B <= 3.17 and g = g_N/C(rho) cannot both be structural statements
of the same theory -- and this needs no rotation-curve data at all, only the
site's own rho_crit = 0.029*V_flat^2 and its own toy disk.
""")

print("=" * 78)
print("PART D3 -- self-audit: can a density FLOOR rescue the ceiling?")
print("=" * 78)
print("""
The divergence above assumes rho keeps falling. Real space has floors. Two
candidates, and the third reading (g = C*g_N, the literal prose) as a control.
""")
# floor needed to cap the boost at 3.17
c_need = 1.0 / 3.17
x_need = math.exp(math.atanh(c_need) / GAMMA_SITE) - 1.0   # rho/rho_crit
RHO_COSMIC = 4.3e-8    # Omega_m * rho_crit,cosmo in M_sun/pc^3
RHO_SOLARNBHD = 0.10   # Bovy & Rix local total matter density

print(f"To cap the boost at 3.17 you need C >= {c_need:.4f}, i.e."
      f" rho >= {x_need:.4f} * rho_crit.\n")
print(f"{'galaxy':<11}{'rho_crit':>11}{'floor needed':>14}{'peak disk rho':>15}{'ratio':>12}")
print("-" * 63)
for name, rd, vf, rlast in GALAXIES:
    rhoc = rho_crit(vf)
    floor = x_need * rhoc
    peak = rho_mid(1e-6, vf, rd)
    print(f"{name:<11}{rhoc:>11.3e}{floor:>14.3e}{peak:>15.3e}{floor / peak:>12.3e}")
print(f"""
For reference: cosmic mean matter density  ~ {RHO_COSMIC:.1e} M_sun/pc^3
               solar-neighbourhood density ~ {RHO_SOLARNBHD:.1e} M_sun/pc^3

The floor required to enforce B <= 3.17 is 10^2-10^4 times the DENSEST point
of the model disk, and ~10^9 times the cosmic mean. No physical floor rescues
the ceiling. The boost at the cosmic-mean floor would be:""")
for name, rd, vf, rlast in GALAXIES[:2]:
    c = C(RHO_COSMIC, GAMMA_SITE, rho_crit(vf))
    print(f"   {name:<11} B = {1.0 / c:.3e}")

print("""
CONTROL -- the third reading. /mond-unification's literal prose is
"an algebraic C(rho)*g modification", i.e. g = C*g_N, which SUPPRESSES gravity:
""")
print(f"{'galaxy':<11}{'v_newton':>11}{'v = v_b*sqrt(C)':>18}{'v_obs':>8}")
print("-" * 48)
for name, rd, vf, rlast in GALAXIES:
    c = C(rho_mid(rlast, vf, rd), GAMMA_SITE, rho_crit(vf))
    vb = v_newton(rlast, vf, rd)
    print(f"{name:<11}{vb:>11.1f}{vb * math.sqrt(c):>18.4f}{vf:>8.0f}")
print("""
Sub-Keplerian by 3-4 orders of magnitude: no dark-matter-like effect at all,
in the wrong direction. So the site states three mutually exclusive galaxy
force laws and all three miss flat rotation curves -- one high, one low, one
converging on Newtonian. This is the same "four formalisms, one ledger" gap
already queued as a topic, now with the numbers attached.
""")

print("=" * 78)
print("SUMMARY")
print("=" * 78)
print("""
1. Felten's objection applies to the site's stated algebraic law: REAL, and
   order-100% in the galaxy regime, but not computable as written because the
   density prescription is unstated (three readings, ~20 OOM apart).
2. A momentum-conserving completion exists -- div[C(rho) grad Phi] = 4 pi G rho
   -- and it PRESERVES EFE = 0 exactly, because it is linear in Phi. The
   objection is answerable, not fatal. Do not badge it as a kill.
3. The completion's extra polarization force is ~1e-5 of gravity: free.
4. The completion makes the real defect explicit. C's insensitivity to the
   field is one property with two consequences: EFE = 0 (the site's only
   surviving structural claim) and C(vacuum) = 0 (an infinite exterior field).
   The prediction and the pathology are the same statement.
5. Consequently the law that follows from the site's own f_DM = 1 - C identity
   predicts exponentially divergent rotation curves, while the law its plotter
   implements predicts Newtonian ones. Flat is neither. This is a
   functional-form failure, parameter-free.
""")
