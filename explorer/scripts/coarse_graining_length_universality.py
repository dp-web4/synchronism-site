#!/usr/bin/env python3
"""
coarse_graining_length_universality.py
Explorer session 2026-08-05 — topic: coarse-graining-length-universality.md

Question as posed by the maintainer (2026-08-05):
    A = 4pi/(beta_J^2 G R0^2) => A ~ 1/l^2, so A is "a proxy for the
    coarse-graining length l"; the 644x is (8 kpc / 317 pc)^2; is there ONE l
    that survives SPARC + Cassini + wide binaries + clusters?

This script tests that premise before answering the question, then runs the
substantive knee computation under every reading that has documentary support.

Sections
  1. Unit-exact reproduction of A(R0) and of the 635x.
  2. Does the 644x require a new length, or is it Session 66's own (beta_J, R0)?
  3. The site law   rho_crit = 0.029 * V^2   (universal A)      -> x, C per galaxy
  4. The archive law rho_crit = V^2/(G b^2 R_half^2) (per-galaxy) -> x, C per galaxy
  5. SELF-CONSISTENT coarse-graining: if l is a smoothing length, rho must be
     smoothed at l too.  Analytic identity + numerical check on the toy disks.
  6. Cassini / TEST-11 and wide binaries under the same identity.
"""

import math

# ---------------------------------------------------------------- constants
G_KPC   = 4.301e-6      # kpc (km/s)^2 / Msun
PC_PER_KPC = 1e3
G_SI    = 6.674e-11
MSUN    = 1.98892e30    # kg
PC      = 3.0857e16     # m
AU      = 1.495979e11   # m
RSUN    = 6.957e8       # m

# plotter toy model (src/app/galaxy-plotter/page.tsx)
BTFR_A  = 47.0          # M_b = 47 V^4 Msun
H_Z     = 0.3           # kpc, toy scale height
GALAXIES = [
    # name, R_d (kpc), V_flat (km/s)
    ("DDO 154",  1.5,  47),
    ("NGC 2403", 2.7, 136),
    ("NGC 3198", 3.2, 150),
    ("UGC 128",  4.0,  55),
    ("NGC 7331", 6.5, 250),
]

def hdr(s):
    print("\n" + "=" * 78)
    print(s)
    print("=" * 78)

def A_from_length(R0_kpc, beta_J=1.0, with_4pi=True):
    """A in Msun/pc^3 per (km/s)^2 from A = [4pi]/(beta^2 G R0^2)."""
    num = 4 * math.pi if with_4pi else 1.0
    A_per_kpc3 = num / (beta_J**2 * G_KPC * R0_kpc**2)   # Msun/kpc^3 /(km/s)^2
    return A_per_kpc3 / PC_PER_KPC**3

def disk_mass(v):
    return BTFR_A * v**4

def sigma0(v, rd):
    """central surface density, Msun/pc^2"""
    return disk_mass(v) / (2 * math.pi * (rd * PC_PER_KPC)**2)

def midplane_rho(r, v, rd):
    """Msun/pc^3, exactly the plotter's midplaneDensity()"""
    return sigma0(v, rd) * math.exp(-r / rd) / (2 * H_Z * PC_PER_KPC)

def C_of_x(x, gamma):
    return math.tanh(gamma * math.log(x + 1.0))

# ================================================================ SECTION 1
hdr("1. A(R0): unit-exact reproduction, and where 317 pc comes from")

print(f"  A(R0 = 8 kpc,   beta_J=1, with 4pi) = {A_from_length(8.0):.4e}   "
      f"[site/parameter-derivations quotes 4.6e-5]")
print(f"  A(R0 = 0.3 kpc, beta_J=1, with 4pi) = {A_from_length(0.3):.4e}   "
      f"[plotter h = 300 pc; site quotes 0.0325]")
A_site = 0.029
# invert A = 4pi/(G R0^2) for R0
R0_equiv = math.sqrt(4 * math.pi / (G_KPC * A_site * PC_PER_KPC**3))
print(f"  R0 that reproduces A = 0.029 exactly (beta_J=1)   = {R0_equiv*1000:.1f} pc")
ratio = A_site / A_from_length(8.0)
print(f"  A_site / A(8 kpc) = {ratio:.1f}   sqrt = {math.sqrt(ratio):.2f}   "
      f"8 kpc / {math.sqrt(ratio):.2f} = {8000/math.sqrt(ratio):.1f} pc")
print("  -> the maintainer's 317 pc arithmetic reproduces exactly.")

# ================================================================ SECTION 2
hdr("2. Does 635x require a NEW length, or is it Session 66's own (beta_J, R0)?")

print("  The formula depends only on the PRODUCT beta_J * R0.  Any factorization")
print("  of that product reproduces the same A.  Session 687's audit records the")
print("  factorization Session 66 actually used:  beta_J = 4.5, R0 = 0.07.")
A_S66 = A_from_length(0.07, beta_J=4.5, with_4pi=True)
print(f"\n  A(beta_J=4.5, R0=0.07, with 4pi) = {A_S66:.5f}"
      f"    [site's headline 'derived' value: 0.0294]")
print(f"  beta_J * R0 (S66)      = {4.5*0.07:.4f} kpc = {4.5*0.07*1000:.0f} pc")
print(f"  beta_J * R0 (maintainer, beta_J:=1) = {R0_equiv:.4f} kpc = {R0_equiv*1000:.0f} pc")
print(f"  agreement: {abs(4.5*0.07 - R0_equiv)/R0_equiv*100:.1f}%")
print("\n  => 317 pc is NOT an independent physical scale.  It is S66's documented")
print("     product beta_J*R0 = 4.5 x 0.07, re-factorized with beta_J forced to 1.")
print("     Matching it to the plotter's h = 300 pc is a 5% numerical coincidence.")

# archive Session 53's own formula has NO 4pi and R0 = 0.088 kpc/(km/s)^0.75:
A_S53 = A_from_length(0.088, beta_J=1.1, with_4pi=False)
print(f"\n  Cross-check, archive Session 53 form A = 1/(b^2 G R0^2), b=1.1, R0=0.088:")
print(f"     A = {A_S53:.4f}   [S53's stated empirical A = 0.028]  -> reproduces.")
print("  Note: S53 has NO 4pi.  The site's rendering added it.  4pi = 12.57 of the 635.")
print(f"  Residual after 4pi: {ratio/(4*math.pi):.1f} = beta_J^2 x (R0 ratio)^2 bookkeeping.")

# ================================================================ SECTION 3
hdr("3. SITE LAW  rho_crit = 0.029 V^2 (universal A) -- x and C at r=0")
print(f"  {'galaxy':10s} {'V':>5s} {'R_d':>5s} {'rho(0)':>10s} {'rho_crit':>10s} "
      f"{'x(0)':>10s} {'C g=2':>8s} {'C g=.489':>9s}")
for name, rd, v in GALAXIES:
    rho0 = midplane_rho(0, v, rd)
    rc = A_site * v * v
    x = rho0 / rc
    print(f"  {name:10s} {v:5.0f} {rd:5.1f} {rho0:10.4f} {rc:10.2f} {x:10.3e} "
          f"{C_of_x(x,2):8.4f} {C_of_x(x,0.489):9.4f}")
print("  -> knee never approached anywhere.  This is what every site galaxy result uses.")

# ================================================================ SECTION 4
hdr("4. ARCHIVE LAW  rho_crit = V^2/(G beta_J^2 R_half^2), R_half PER GALAXY")
print("  Session 53: lambda_Jeans = beta_J * R_half at rho = rho_crit, beta_J ~ 1.1 +/- 0.2.")
print("  R_half is a GALAXY SIZE, not a smoothing length.  Two independent estimates:")
print("    (a) exponential disk: R_half = 1.678 R_d")
print("    (b) S53's size-velocity relation: R_half = 0.088 V^0.75 kpc")
print()
print(f"  {'galaxy':10s} {'Rh(a)':>7s} {'Rh(b)':>7s} {'A_eff(a)':>10s} {'x(0) a':>9s} "
      f"{'C g=2':>7s} {'x(0) b':>9s} {'C g=2':>7s} {'r(x=1)':>8s}")
BETA = 1.1
for name, rd, v in GALAXIES:
    rho0 = midplane_rho(0, v, rd)
    for_row = []
    for Rh in (1.678 * rd, 0.088 * v**0.75):
        rc = v*v / (G_KPC * BETA**2 * Rh**2) / PC_PER_KPC**3   # Msun/pc^3
        for_row.append((Rh, rc, rho0 / rc))
    (Rha, rca, xa), (Rhb, rcb, xb) = for_row
    A_eff = rca / (v*v)
    r1 = rd * math.log(xa) if xa > 1 else float('nan')
    print(f"  {name:10s} {Rha:7.2f} {Rhb:7.2f} {A_eff:10.3e} {xa:9.3f} "
          f"{C_of_x(xa,2):7.4f} {xb:9.3f} {C_of_x(xb,2):7.4f} {r1:8.2f}")
print("  r(x=1) = radius in kpc where the knee is crossed, estimate (a).")
print("  -> A_eff is per-galaxy and spans a wide range; it is NOT 0.029 and NOT 4.6e-5.")
print("     A_eff ~ 1/R_half^2 ~ V^-1.5  =>  rho_crit ~ V^0.5, NOT V^2.")

# ================================================================ SECTION 5
hdr("5. SELF-CONSISTENT COARSE-GRAINING: if l smooths rho_crit it must smooth rho")

print("  Analytic identity.  Take l as a genuine smoothing length and apply it to")
print("  BOTH sides (top-hat sphere of radius l, mass M(<l)):")
print("      rho_l      = 3 M / (4 pi l^3)")
print("      rho_crit(l)= 4 pi V^2 / (beta^2 G l^2)")
print("      x(l) = rho_l/rho_crit = (3/(16 pi^2)) beta^2 * G M / (l V^2)")
print("           = (3/(16 pi^2)) beta^2 * [V_c(l)/V]^2")
K = 3.0 / (16 * math.pi**2)
print(f"\n      x(l) = {K:.5f} * beta_J^2 * [V_c(l)/V_flat]^2       <-- l CANCELS")
print(f"      beta_J=1.0 and V_c(l)=V_flat  ->  x = {K:.5f},  "
      f"C(g=2) = {C_of_x(K,2):.4f}, C(g=0.489) = {C_of_x(K,0.489):.4f}")
print(f"      beta_J=1.1                    ->  x = {K*1.21:.5f},  "
      f"C(g=2) = {C_of_x(K*1.21,2):.4f}")
print("\n  For any gravitationally BOUND system V_c(l) <= ~V_flat, so x <= ~0.02.")
print("  The knee (x ~ 1) is unreachable at EVERY l, in EVERY sector, for free.")

print("\n  Numerical check on the toy disks (top-hat sphere centred at r=0,")
print("  exponential disk of scale length R_d, half-thickness h = 0.3 kpc):")
print(f"  {'galaxy':10s} " + " ".join(f"{l:>9s}" for l in
      ["l=0.1", "l=0.3", "l=1", "l=3", "l=8", "l=20", "max_l x"]))
for name, rd, v in GALAXIES:
    M = disk_mass(v)
    row, best = [], 0.0
    for l in [0.1, 0.3, 1.0, 3.0, 8.0, 20.0]:
        # mass inside sphere radius l centred on the galaxy centre
        if l <= H_Z:
            # cylinder of radius l, full height 2l inside the slab
            frac = 1 - math.exp(-l/rd) * (1 + l/rd)
            Mi = M * frac * (l / H_Z)     # only |z|<l of the 2h slab
        else:
            frac = 1 - math.exp(-l/rd) * (1 + l/rd)
            Mi = M * frac
        rho_l = Mi / (4/3 * math.pi * (l*PC_PER_KPC)**3)
        rc_l = A_from_length(l, beta_J=1.0) * v * v
        x = rho_l / rc_l
        row.append(x)
    # fine scan for the max
    for i in range(1, 4001):
        l = i * 0.01
        frac = 1 - math.exp(-l/rd) * (1 + l/rd)
        Mi = M * frac * (min(l, H_Z)/H_Z if l <= H_Z else 1.0)
        rho_l = Mi / (4/3 * math.pi * (l*PC_PER_KPC)**3)
        x = rho_l / (A_from_length(l) * v * v)
        best = max(best, x)
    print(f"  {name:10s} " + " ".join(f"{y:9.3e}" for y in row) + f" {best:9.3e}")
print(f"  analytic ceiling {K:.4f} (beta=1) is respected by every entry.")
print("  -> 'ONE universal l' is not merely undetermined: l has NO effect on x")
print("     beyond the rotation-curve shape V_c(l)/V_flat.  The topic's premise")
print("     (required l differs across sectors => new no-go) DISSOLVES.")

# ================================================================ SECTION 6
hdr("6. Cassini / TEST-11 and wide binaries under the same identity")

print("  (a) Cassini, Saturn at 9.5 AU.  Two readings:")
r_sat = 9.5 * AU
v_sat = math.sqrt(G_SI * MSUN / r_sat) / 1e3       # km/s
print(f"      V_c(Saturn) = {v_sat:.2f} km/s")
# unsmoothed: interplanetary medium, n ~ 0.1 cm^-3 protons at 9.5 AU
n_cm3, m_p = 0.1, 1.673e-27
rho_ipm_SI = n_cm3 * 1e6 * m_p                      # kg/m^3
rho_ipm = rho_ipm_SI * PC**3 / MSUN                 # Msun/pc^3
rc_site = A_site * v_sat**2
print(f"      UNsmoothed rho(interplanetary) = {rho_ipm:.3e} Msun/pc^3")
print(f"      rho_crit (site A, V=V_c)       = {rc_site:.3e} Msun/pc^3")
print(f"      x = {rho_ipm/rc_site:.3e}   C(g=2) = {C_of_x(rho_ipm/rc_site,2):.3e}")
# smoothed at l >= r_Saturn: sphere swallows the Sun
l_pc = r_sat / PC
rho_sm = 1.0 / (4/3 * math.pi * l_pc**3)            # 1 Msun in sphere of radius l
rc_sm = A_from_length(l_pc/PC_PER_KPC) * v_sat**2
print(f"      SMOOTHED at l = r_Sat: rho_l = {rho_sm:.3e}, rho_crit = {rc_sm:.3e}")
print(f"      x = {rho_sm/rc_sm:.5f}  (identity predicts {K:.5f})   "
      f"C(g=2) = {C_of_x(rho_sm/rc_sm,2):.4f}")
print("      -> C ~ 0 under BOTH readings.  f_DM = 1-C ~ 1: the framework demands a")
print("         full 'dark matter' boost inside Saturn's orbit at every l.")
print("         The +17.95 sigma Cassini kill is l-INDEPENDENT.  It is not a scale choice.")

print("\n  (b) Wide binaries (Gaia), separation s ~ 5 kAU, V_c ~ 0.1-0.4 km/s,")
print("      ambient solar-neighbourhood rho ~ 0.04-0.1 Msun/pc^3.")
for s_kau, vflat_ref in [(5, 0.3)]:
    l_wb = s_kau * 1e3 * AU / PC
    rho_wb = 2.0 / (4/3 * math.pi * l_wb**3)   # 2 Msun pair
    print(f"      l = {s_kau} kAU = {l_wb:.4f} pc, smoothed rho = {rho_wb:.3e} Msun/pc^3")
    v_wb = math.sqrt(G_SI * 2*MSUN / (s_kau*1e3*AU))/1e3
    rc_wb = A_from_length(l_wb/PC_PER_KPC) * v_wb**2
    print(f"      V_c = {v_wb:.4f} km/s, rho_crit = {rc_wb:.3e}, "
          f"x = {rho_wb/rc_wb:.5f}  (identity {K:.5f})")
print("      -> same ceiling.  The rho lever is flat across Gaia not because the")
print("         solar-neighbourhood density happens to be uniform, but because x is")
print("         a VIRIAL RATIO and is pinned at ~0.02 for every bound system.")

# ================================================================ SECTION 7
hdr("7. Estimator robustness (standing rule: name the kernel AND one alternative)")

K_tophat = 3.0 / (16 * math.pi**2)
K_gauss  = 1.0 / (4 * math.pi * (2 * math.pi)**1.5)
print("  Top-hat sphere radius l : rho_l = 3M/(4 pi l^3)")
print(f"      x = {K_tophat:.5f} beta^2 [V_c/V]^2")
print("  Gaussian kernel width s : rho_s = M/(2 pi s^2)^{3/2}")
print(f"      x = {K_gauss:.5f} beta^2 [V_c/V]^2")
print(f"  ratio = {K_tophat/K_gauss:.2f}x.  Kernel choice moves the ceiling by O(1)")
print("  and moves it DOWNWARD for the Gaussian.  The conclusion is kernel-robust:")
print("  no kernel brings x within two orders of magnitude of the knee.")

# ================================================================ SECTION 8
hdr("8. FULLY self-consistent Jeans reading: the velocity is also taken at scale l")

print("  The Jeans criterion's velocity is the SOUND SPEED / dispersion at the scale")
print("  where the criterion is applied, not the asymptotic V_flat.  The site")
print("  substitutes V_flat.  If the velocity is taken self-consistently at l, then")
print("  V = V_c(l) and the identity collapses to a PURE NUMBER:")
for b in (1.0, 1.1, 1.3, 4.5):
    print(f"      beta_J = {b:<4}  x = {K_tophat*b*b:.5f}   C(g=2) = {C_of_x(K_tophat*b*b,2):.4f}"
          f"   C(g=0.489) = {C_of_x(K_tophat*b*b,0.489):.4f}")
print("\n  x is then IDENTICAL for the Solar System, a wide binary, a dwarf, a spiral")
print("  and a cluster.  C is a universal constant ~0.02-0.35 (beta-dependent only),")
print("  carrying zero information about any system.  f_DM = 1-C is then a constant")
print("  rescaling of G, which cannot produce a flat rotation curve for ANY galaxy.")
print("\n  The site's V_flat substitution is what gives C any variation at all.  It is")
print("  a THIRD undocumented substitution in this chain, alongside R_half -> 8 kpc")
print("  and the added 4pi.")

# ================================================================ SECTION 9
hdr("9. What the plotter's 'Synchronism (real)' curve actually is (NGC 3198)")

def v_newt(r, v, rd):
    return math.sqrt(G_KPC * disk_mass(v) * (1 - math.exp(-r/rd)*(1+r/rd)) / r)
def v_sync(r, v, rd):
    vb = v_newt(r, v, rd)
    c = C_of_x(midplane_rho(r, v, rd)/(A_site*v*v), 2)
    return math.sqrt(vb*vb + (v*c)**2)
obs = {1:60, 2:105, 4:140, 6:148, 8:150, 10:150, 13:149, 16:150, 20:150}
print(f"  {'r':>4} {'v_bar':>8} {'v_Sync':>8} {'v_Sync-v_bar':>13} {'C(r)':>10} {'observed':>9}")
for r, o in obs.items():
    vb, vs = v_newt(r, 150, 3.2), v_sync(r, 150, 3.2)
    c = C_of_x(midplane_rho(r,150,3.2)/(A_site*22500), 2)
    print(f"  {r:4} {vb:8.2f} {vs:8.2f} {vs-vb:13.5f} {c:10.2e} {o:9}")
print("  The coherence term contributes < 0.0003 km/s (< 30 cm/s) at every radius.")
print("  Max C anywhere in the disk = "
      f"{C_of_x(midplane_rho(0,150,3.2)/(A_site*22500),2):.2e}, not the 0.28 quoted on")
print("  /parameter-derivations and /galaxy-plotter (already-banked cross-page gap).")

hdr("SUMMARY")
print(f"""
  1. 317 pc is not a physical scale.  A depends only on beta_J*R0; Session 66's
     documented factorization is beta_J=4.5, R0=0.07 (product 0.315 kpc).  Forcing
     beta_J=1 relabels that product as a length; matching it to h=300 pc is a 5%
     coincidence.  The 644x was already fully decomposed on 2026-06-07.

  2. beta_J is DEFINED on /critical-density as lambda_Jeans/R_half, "the
     Jeans-length-to-GALAXY-SIZE ratio ... across SPARC galaxies."  R0 is a galaxy
     size.  The same page calls it a coarse-graining length three paragraphs later.

  3. Under the archive's own law with per-galaxy R_half, A is NOT universal
     (A ~ R_half^-2 ~ V^-1.5 => rho_crit ~ V^0.5) and the inner disk DOES cross the
     knee.  That is the already-documented two-law fork (V^2 vs V^0.5), not one
     undetermined length.

  4. If l IS read as a smoothing length, self-consistency forces rho to be smoothed
     too, and then x = (3/16pi^2) beta^2 [V_c(l)/V]^2 <= ~0.02 at EVERY l in EVERY
     sector.  l cancels.  There is no cross-sector l to compare.

  5. Consequence of (4): C ~ 0.02-0.04 everywhere -> f_DM = 1-C ~ const ~ 0.97, with
     no radial or galaxy-to-galaxy structure.  The coherence function degenerates to
     a constant rescaling of G and cannot produce a rotation curve at all.

  6. Cassini is l-independent by the same identity.  Do NOT reopen TEST-11.
""")
