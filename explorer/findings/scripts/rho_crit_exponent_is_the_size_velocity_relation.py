#!/usr/bin/env python3
"""
2026-08-27 explorer execution.

Question (from visitor Pass 3, 2026-08-27): the site's /parameter-derivations carries
both  A = 4pi/(beta_J^2 G R0^2)  (card 3)  and  R0 = V^2/(3 a0)  (card 6).
Substituting gives rho_crit ~ V^-2, the MOND-required sign, which would leave the
site's flagship "sign inversion" no-go with no target.

This script audits the chain link by link against the ARCHIVE PRIMARIES
(Session53_Theoretical_Foundations.md, Session91_R0_Cosmological_Derivation.md),
not the compilation documents, and asks what survives.
"""
import numpy as np

# ---- units: pc, Msun, km/s ---------------------------------------------------
G_pc   = 4.30091e-3      # pc Msun^-1 (km/s)^2
G_kpc  = G_pc * 1e-3     # kpc Msun^-1 (km/s)^2
PC_M   = 3.085677581e16
# a0 in (km/s)^2 / pc
def a0_kms2_per_pc(a0_SI):
    # 1 (km/s)^2/pc = (1e3)^2 / 3.0857e16 m/s^2
    return a0_SI / (1e6 / PC_M)

A0_SI_MOND   = 1.20e-10          # McGaugh empirical
A0_SI_FRAME  = 1.042e-10         # cH0/2pi at H0=67.4 (site's derived value)
a0_M   = a0_kms2_per_pc(A0_SI_MOND)
a0_F   = a0_kms2_per_pc(A0_SI_FRAME)
SIG0   = 119.0                   # Msun/pc^2, site's Sigma0 = a0/(2 pi G)

print("="*78); print("0. UNIT ANCHORS"); print("="*78)
print(f"  a0 (MOND,  1.20e-10 m/s^2) = {a0_M:.4f} (km/s)^2/pc")
print(f"  a0 (frame, 1.042e-10)      = {a0_F:.4f} (km/s)^2/pc")
print(f"  1 (km/s)^2/pc              = {1e6/PC_M:.4e} m/s^2")
print(f"  check Sigma0 = a0/(2 pi G) = {a0_M/(2*np.pi*G_pc):.1f} Msun/pc^2 (site: 119)")

# =============================================================================
print(); print("="*78)
print("1. SESSION 53 - the ONLY place A is computed from anything")
print("="*78)
# Session53: lambda_J = V / sqrt(G rho);  lambda_J = alpha * R_half at rho = rho_crit
#   => rho_crit = V^2 / (G alpha^2 R_half^2)                       [PRIMITIVE FORM]
#   R_half = R0 * V^0.75, R0 = 0.088 kpc/(km/s)^0.75
#   => rho_crit = V^0.5 / (G alpha^2 R0^2) = A * V^0.5
alpha  = 1.1
R0_S53 = 0.088                    # kpc / (km/s)^0.75
A_S53_kpc = 1.0/(G_kpc * alpha**2 * R0_S53**2)     # Msun/kpc^3 /(km/s)^0.5
A_S53 = A_S53_kpc * 1e-9                            # Msun/pc^3 /(km/s)^0.5
print(f"  A = 1/(G alpha^2 R0^2), alpha={alpha}, R0={R0_S53} kpc/(km/s)^0.75")
print(f"    -> A = {A_S53:.5f}  Msun pc^-3 (km/s)^-0.5      [S53 claims 0.028]")
for a_ in (0.9,1.0,1.1,1.2,1.4):
    print(f"       alpha={a_:.1f} -> A = {1.0/(G_kpc*a_**2*R0_S53**2)*1e-9:.5f}")
print("  => the 0.028/0.029 number REPRODUCES, and its units carry (km/s)^-0.5.")
print("     It is the coefficient of rho_crit = A V^0.5, i.e. of B = 2-2*0.75 = 0.5.")

# their own 4-galaxy table -> what p do THEY measure?
tab = np.array([[38,1.6],[136,3.9],[220,3.6],[380,7.5]], float)   # V, R_half kpc
p_S53 = np.polyfit(np.log10(tab[:,0]), np.log10(tab[:,1]), 1)[0]
print(f"\n  S53's own validation table (WLM/N2403/MW/M87) regresses to")
print(f"    p = dlogR_half/dlogV = {p_S53:.3f}   (S53 asserts 0.75)")
print(f"    -> B = 2-2p = {2-2*p_S53:.3f}  (S53 asserts 0.5)")

# =============================================================================
print(); print("="*78)
print("2. THE MASTER IDENTITY - the exponent IS the size-velocity slope")
print("="*78)
print("  rho_crit = V^2 / (G alpha^2 R_half^2)   and   R_half ~ V^p")
print("     =>  rho_crit ~ V^(2-2p).   The velocity exponent is 2-2p, nothing else.")
print()
print("   p        exponent   provenance in the ledger")
for p,src in [(0.00,"R0 universal (a fixed length) -> equations.ts:24 / site-wide"),
              (0.617,"S53's own 4-galaxy table"),
              (0.75, "S53's asserted size-velocity slope -> Session65 B=0.5"),
              (1.00, "R_half ~ V  (observed disc size-velocity, Bottema/SPARC-like)"),
              (1.30, "steep end of observed disc size-velocity"),
              (2.00, "R0 = V^2/(3a0) read PER-GALAXY -> the MOND requirement")]:
    print(f"  {p:4.2f}      {2-2*p:+6.3f}    {src}")
print()
print("  Every exponent in the site's 'three mutually incompatible provenances'")
print("  is one value of p. There is one formula, not three.")

# =============================================================================
print(); print("="*78)
print("3. SESSION 91's R0 IS A DIFFERENT OBJECT - different DIMENSIONS")
print("="*78)
Vref = 200.0
R0_S91_pc = Vref**2/(3*a0_M)
print(f"  S91: R0 = V_ref^2/(3 a0), V_ref = 200 km/s (a FIXED reference velocity,")
print(f"       'the typical velocity for disk galaxies where BTFR is normalized')")
print(f"    -> R0 = {R0_S91_pc/1e3:.2f} kpc   (S91 claims 3.6 kpc, empirical 3.5)  [units: kpc]")
print(f"  S53: R0 = 0.088 kpc/(km/s)^0.75                                   [units: kpc (km/s)^-0.75]")
print("  These are not the same quantity and do not have the same dimensions.")
print("  The site prints them as cards 3 and 6 of 'The Complete Chain', same symbol, no note.")

print("\n  The archive's canonical chain (PARAMETER_DEFINITIONS_AND_DERIVATIONS.md) links them:")
print("     R0 = V^2/(3a0) = 3.6 kpc  [97%]   ->   A = 4pi/(alpha^2 G R0^2) = 0.029  [5%]")
for R0kpc,label in [(3.6,"S91's own derived value"),(8.0,"the value the SITE audits"),
                    (0.317,"the value A=0.029 actually requires at beta_J=1")]:
    A_ = 4*np.pi/(1.0**2 * G_kpc * R0kpc**2) * 1e-9
    print(f"    R0 = {R0kpc:6.3f} kpc, beta_J=1  ->  A = {A_:.3e}   ratio to 0.029: {0.029/A_:8.1f}x   ({label})")
print("  => the site audits 8 kpc and reports '600x off'. The canonical chain's OWN")
print("     stated R0 (3.6 kpc) gives 129x, not 600x. The verdict survives; the number does not.")
print("     And beta_J*R0 = 317 pc is all A fixes - beta_J and R0 are never separable.")

# =============================================================================
print(); print("="*78)
print("4. THE UNITS BREAK - A is a V^0.5 coefficient used in a V^2 law")
print("="*78)
def rho_mond_required(V, a0=a0_M):
    """rho_bar enclosed at the MOND transition radius r_t = V^2/a0:
       rho = 3M/(4 pi r_t^3), M = V^2 r_t/G  ->  3 a0^2/(4 pi G V^2)."""
    return 3*a0**2/(4*np.pi*G_pc*V**2)

print(f"{'V':>6} {'A*V^2 (site)':>14} {'A*V^0.5 (S53)':>15} {'MOND-required':>14}"
      f" {'site/req':>10} {'S53/req':>9}")
for V in (30,50,60,100,150,220,300):
    r2  = 0.029*V**2
    r05 = 0.029*V**0.5
    rq  = rho_mond_required(V)
    print(f"{V:6.0f} {r2:14.4g} {r05:15.4g} {rq:14.4g} {r2/rq:10.1f} {r05/rq:9.1f}")
Vx = (0.029/(3*a0_M**2/(4*np.pi*G_pc)))**(-1/2.5)
print(f"\n  A*V^2 vs A*V^0.5 differ by V^1.5: at V=150 that is {150**1.5:.0f}x")
print(f"  The V^0.5 law crosses the MOND requirement at V = {Vx:.1f} km/s")
print(f"  (below it the framework's knee is too LOW, above it too high).")
print("  The site's headline '240x-300,000x too high, gap growing with V' is computed")
print("  under the V^2 law. Under the law A was actually derived for, the V=150 excess")
print(f"  is {0.029*150**0.5/rho_mond_required(150):.0f}x, not {0.029*150**2/rho_mond_required(150):.0f}x.")

# =============================================================================
print(); print("="*78)
print("5. DOES THE 'KNEE NEVER CROSSED' COROLLARY SURVIVE?")
print("="*78)
print("  Use S53's PRIMITIVE definition (no size-velocity relation, no A, no units risk):")
print("     rho_crit == rho at which lambda_J = alpha * R_half,  lambda_J = V/sqrt(G rho)")
print("     =>  rho_crit = V^2/(G alpha^2 R_half^2)")
print("  A self-gravitating disc's own mean density inside R_half is")
print("     rho_gal = 3 M/(4 pi R_half^3),  M = V^2 R_half/G  =>  3 V^2/(4 pi G R_half^2)")
print("     =>  x = rho_gal/rho_crit = 3 alpha^2/(4 pi) = %.3f  at alpha=1.1" % (3*alpha**2/(4*np.pi)))
print("  i.e. x is O(alpha^2) BY CONSTRUCTION - rho_crit was DEFINED as the density")
print("  where the Jeans length equals the galaxy size, and a galaxy sits there.")
print()
print("  The site's rendering inserts a 4pi that Session 53 does not carry:")
print("     site:  A = 4pi/(beta_J^2 G R0^2)      S53:  A = 1/(alpha^2 G R0^2)")
for lbl,fac in [("S53 form (no 4pi)", 1.0), ("site form (with 4pi)", 4*np.pi)]:
    x = 3*alpha**2/(4*np.pi)/fac
    print(f"     {lbl:22s}: x = {x:8.4f}  -> knee {'CROSSED' if x>0.5 else 'not crossed'} "
          f"(short by {1/x:6.1f}x)" if x<0.5 else f"     {lbl:22s}: x = {x:8.4f}  -> knee CROSSED")
print("  The 'knee is never crossed' corollary rests entirely on the unattributed 4pi")
print("  the site's own audit already flags ('why does this site's rendering carry a 4pi")
print("  that Session 53's does not').")

# =============================================================================
print(); print("="*78)
print("6. THE REPAIR THAT DOES NOT WORK, AND THE NO-GO THAT SURVIVES")
print("="*78)
print("  Visitor's proposal: read R0 as V^2/(3a0) per-galaxy => p=2 => exponent -2,")
print("  the MOND-required sign, so the flagship no-go has no target.")
print("  p=2 means R_half ~ V^2. That is a statement about galaxy SIZES and it is")
print("  measurable. What do galaxies do?")
obs = {"S53's own 4 galaxies": p_S53,
       "S53 asserted": 0.75,
       "disc size-velocity, shallow": 1.0,
       "disc size-velocity, steep":   1.3}
print()
for k,v in obs.items():
    print(f"    p = {v:5.3f}  ({k:28s}) -> rho_crit ~ V^{2-2*v:+.2f}")
print(f"    p = 2.000  (REQUIRED to reach the MOND exponent -2)")
print()
print("  No observed disc size-velocity slope is near 2. R_half ~ V^2 would make a")
print("  300 km/s spiral 62x larger than a 38 km/s dwarf; the observed ratio is ~5.")
Rrat_req = (380/38)**2; Rrat_obs = 7.5/1.6
print(f"    predicted R_half(M87)/R_half(WLM) at p=2 : {Rrat_req:.0f}x")
print(f"    S53's own tabulated ratio                : {Rrat_obs:.1f}x")
print(f"    -> p=2 is excluded by the framework's own validation table by {Rrat_req/Rrat_obs:.0f}x")

print()
print("  SURVIVING FORM OF THE NO-GO (anchored to a measurable, not an assertion):")
print("    A Jeans-type critical density obeys rho_crit ~ V^(2-2p) with p the")
print("    size-velocity slope. Matching an a0 acceleration threshold requires p=2.")
print(f"    Observed p for discs is {p_S53:.2f}-1.3, so the exponent is off by")
print(f"    {2-2*p_S53 - (-2):.2f} to {2-2*1.3-(-2):.2f} - and no choice of A, alpha, 4pi,")
print("    or velocity-vs-dispersion in the Jeans length can move it, because none of")
print("    them carries a velocity dependence.")

# =============================================================================
print(); print("="*78)
print("7. WHAT lambda_J = V/sqrt(G rho) SMUGGLES IN")
print("="*78)
print("  The Jeans length uses the SOUND SPEED / velocity dispersion, not V_rot.")
print("  S53 substitutes V_rot. Bottema: sigma_z ~ 0.29 V_max, so lambda_J is")
print(f"  overestimated by 1/0.29 = {1/0.29:.1f}x and rho_crit by {1/0.29**2:.1f}x.")
print("  This is a pure NORMALIZATION shift - sigma ~ V leaves the exponent alone.")
print()
print("  Sanity check on the required beta_J*R0 = 317 pc, done independently:")
print("  self-gravitating isothermal sheet rho_0 = pi G Sigma^2/(2 sigma^2)")
print("     =>  lambda_J = sigma sqrt(pi/(G rho_0)) = sqrt(2) sigma^2/(G Sigma)")
for sig in (8,10,10.7,12):
    lam = np.sqrt(2)*sig**2/(G_pc*SIG0)
    print(f"     sigma = {sig:4.1f} km/s, Sigma = {SIG0:.0f} Msun/pc^2 -> lambda_J = {lam:6.1f} pc")
sig_needed = np.sqrt(317*G_pc*SIG0/np.sqrt(2))
print(f"  -> the 317 pc that A = 0.029 requires is exactly sigma = {sig_needed:.2f} km/s")
print("     at the site's own Sigma0. A is the ISM velocity dispersion in disguise,")
print("     and rho_crit ~ V^2 is the assumption that sigma does not scale with V.")

# =============================================================================
print(); print("="*78)
print("8. DECISIVE: card 6's R0 = V^2/(3a0) EVALUATED AT MORE THAN ONE VELOCITY")
print("="*78)
print("  S91 badge: 'Dimensional Analysis - 3% Error', 97% accuracy, evaluated at")
print("  ONE point (V_ref = 200 -> 3.6 kpc vs 'empirical R0 ~ 3.5 kpc').")
print("  A one-point match constrains a NORMALISATION. The load-bearing quantity is")
print("  the SLOPE. So evaluate the same formula on S53's own validation table:")
print()
print(f"  {'galaxy':<10}{'V':>6}{'R_half obs':>12}{'V^2/(3a0)':>12}{'ratio':>9}")
names = ["WLM","NGC 2403","Milky Way","M87"]
ratios=[]
for nm,(V,Rk) in zip(names, tab):
    Rpred = V**2/(3*a0_M)/1e3
    ratios.append(Rpred/Rk)
    print(f"  {nm:<10}{V:6.0f}{Rk:12.2f}{Rpred:12.3f}{Rpred/Rk:9.2f}")
print(f"\n  spread of the ratio across two decades in V: {min(ratios):.2f}x to {max(ratios):.2f}x"
      f"  ({max(ratios)/min(ratios):.0f}x)")
print("  The formula is 12x LOW at the dwarf end and 1.7x HIGH at the giant end.")
print("  It is not a 3%-error relation; it is a one-point coincidence at V_ref=200,")
print("  which is exactly the velocity at which it was evaluated.")
print("  => card 6's badge is measuring the normalisation of a relation whose SLOPE")
print("     is wrong by ~1.3 dex over the sample, and the slope is the whole question.")

# the visitor's arithmetic, checked
print()
print("  The visitor's 630 = 5.01^4 identity, checked:")
r_len = 8.0/0.317
print(f"    (8.0 kpc / 0.317 kpc)^2 = {r_len**2:.0f}   [= the '600x' in A]")
print(f"    under R0 ~ V^2 that is a velocity ratio of {r_len**0.5:.2f}")
for R0kpc in (8.0, 0.317, 3.6):
    print(f"    R0 = {R0kpc:6.3f} kpc  <->  V_ref = sqrt(3 a0 R0) = {np.sqrt(3*a0_M*R0kpc*1e3):6.1f} km/s")
print("  The arithmetic is exact and reproduces ~300 and ~59 km/s as claimed.")
print("  It is nonetheless not the diagnosis, because it REQUIRES p=2, which the")
print("  table above excludes by ~21x.")

# =============================================================================
print(); print("="*78)
print("9. REOPENING: is the knee reachable once the 4pi is removed?")
print("="*78)
print("  Section 5: shortfall is 43.5x in the site's form, 3.5x in S53's form.")
print("  3.5x is inside the mean-vs-local density ratio of a real disc, so the")
print("  question is no longer settled by margin. Freeman disc, Sigma(R)=Sigma_c e^-R/Rd,")
print("  isothermal in z with scale height h:")
for Rd,h,Sc in [(3.0,0.3,800.),(2.0,0.25,1000.),(4.5,0.4,600.)]:
    # central midplane density
    rho0 = Sc/(2*h*1e3)                      # Msun/pc^3
    Rhalf = 1.678*Rd
    M = 2*np.pi*Sc*Rd**2*1e6                 # Msun  (total)
    Menc = M*(1-np.exp(-Rhalf/Rd)*(1+Rhalf/Rd))
    rho_mean = 3*Menc/(4*np.pi*(Rhalf*1e3)**3)
    print(f"    Rd={Rd:4.1f} kpc h={h:4.2f} Sigma_c={Sc:5.0f}: rho_mid(0)={rho0:7.4f}"
          f"  rho_mean(<R_half)={rho_mean:7.4f}   ratio={rho0/rho_mean:6.1f}x")
print("  => local central density exceeds the mean-within-R_half by ~10-30x, which")
print("     covers the 3.5x shortfall. Under S53's normalisation the knee is reached")
print("     in the INNER disc and not in the outskirts - i.e. C(rho) switches on where")
print("     no boost is needed and switches off where it is. That is a DIFFERENT")
print("     failure from 'the knee is never crossed', and a sharper one.")
print("  It is not a rescue. It is a relocation of the failure, and it is")
print("  estimator-dependent, so it must be reported as a fork, not a verdict.")
