"""
TEST-02 / local-sector audit, 2026-09-10 explorer.

Three questions, one artifact:

  A. The maintainer's 2026-09-10 local-boost table was computed with the UNFLOORED
     C = tanh(g ln(1+rho/rho_c)).  src/lib/equations.ts has carried an explicit CAUTION
     since 2026-09-08 that the galaxy-sector law adjudicated on Tier 1 is the FLOORED
     form C = f + (1-f) tanh(...), f = Omega_m.  Recompute both, side by side, and add
     the knee TEST-02 is actually REGISTERED against (Session 691: rho_c = 1e-23 kg/m^3,
     gamma = 2), which the 09-10 table omits.

  B. Which (form, knee, gamma) can produce the site's published 0.05-0.4% band?

  C. The Gaia wide-binary statistic (Chae's gamma_g, Banik's alpha_grav) is DIFFERENTIAL
     IN SEPARATION at fixed sky position: the high-acceleration (close) binaries calibrate
     the mass-luminosity relation, the low-acceleration (wide) ones are the signal.  A
     density-keyed C depends on ambient rho only -- it does not depend on separation.
     So the zeroth-order predicted statistic is IDENTICALLY 1 at every knee, every gamma,
     floored or not.  Quantify the first-order term: the signal is proportional to the
     ambient-density CONTRAST between the wide and close subsamples, and we solve for the
     contrast each knee would need to reproduce 0.05-0.4%.

Run: python3 test02_form_audit_and_separation_blindness.py
"""
import math

# ---- units -----------------------------------------------------------------
MSUN = 1.98892e30          # kg
PC   = 3.0856775814913673e16  # m
KGM3_PER_MSUNPC3 = MSUN / PC**3
def kgm3_to_msunpc3(x): return x / KGM3_PER_MSUNPC3

RHO_LOCAL_691 = kgm3_to_msunpc3(5.77e-21)   # Session 691's rho_local (incl. a DM term)
RHO_LOCAL_BAR = 0.084                       # solar midplane BARYON density (09-06/09-09 runs)
OMEGA_M = 0.315
OMEGA_B_OVER_M = 0.0493 / 0.315

def C_bare(rho, rc, g):
    return math.tanh(g * math.log(rho / rc + 1.0))
def C_floor(rho, rc, g, f=OMEGA_M):
    return f + (1.0 - f) * C_bare(rho, rc, g)

def vpct(C): return 100.0 * (1.0 / math.sqrt(C) - 1.0)
def apct(C): return 100.0 * (1.0 / C - 1.0)

print("UNIT CHECK")
print("  1 M_sun/pc^3 = %.4g kg/m^3" % KGM3_PER_MSUNPC3)
print("  Session 691 registered knee 1e-23 kg/m^3 = %.4g M_sun/pc^3" % kgm3_to_msunpc3(1e-23))
print("  Session 691 rho_local 5.77e-21 kg/m^3   = %.4g M_sun/pc^3" % RHO_LOCAL_691)
print("  S691 ratio rho_local/rho_c = %.1f   (S691 states 577)" % (RHO_LOCAL_691/kgm3_to_msunpc3(1e-23)))
print("  Omega_b/Omega_m = %.4f" % OMEGA_B_OVER_M)

KNEES = [
    (0.029 * 229.0**2, "PUBLISHED calibration 0.029*V_flat^2, MW V_flat=229 (/galaxy-plotter,/key-claims)"),
    (0.029 * 47.0**2,  "same calibration, DDO 154 V_flat=47"),
    (4.6e-5 * 229.0**2,"STATED A=4.6e-5 calibration, MW (09-06 finding row 2)"),
    (0.161,            "measured velocity-blind knee 2026-08-27 (GC fork)"),
    (0.0083,           "Refracted Gravity E0 knee (explorer 2026-09-09)"),
    (kgm3_to_msunpc3(1e-23), "*** REGISTERED for TEST-02: Session 691 1e-23 kg/m^3, gamma=2 ***"),
    (3.2e-4,           "low end of the refuted rho_c grid (PREDICTIONS.md 2026-09-09)"),
]

print("\n" + "="*100)
print("A. LOCAL BOOST AT rho = %.3f M_sun/pc^3 (solar midplane baryons) -- BOTH FORMS" % RHO_LOCAL_BAR)
print("="*100)
print("%-11s %-6s | %-10s %-12s | %-10s %-12s | %s"
      % ("rho_crit", "gamma", "C bare", "vel% bare", "C floored", "vel% floored", "knee"))
def eng(v):
    if v == 0: return "0"
    if math.isinf(v): return "inf"
    e = math.floor(math.log10(abs(v))); 
    return "%.3g" % v if -2 <= e <= 4 else "%.2fe%d" % (v/10.0**e, e)
for rc, tag in KNEES:
    for g in (0.489, 2.0):
        cb, cf = C_bare(RHO_LOCAL_BAR, rc, g), C_floor(RHO_LOCAL_BAR, rc, g)
        print("%-11.4g %-6.3f | %-10s %-12s | %-10s %-12s | %s"
              % (rc, g, eng(cb), eng(vpct(cb)), eng(cf), eng(vpct(cf)), tag))

print("\n  BOUND: under the floored form C >= Omega_m = %.3f, so the velocity excess at ANY" % OMEGA_M)
print("  knee, any gamma, any density is at most %.1f%% (B_max = 1/Omega_m = %.2f)."
      % (vpct(OMEGA_M), 1/OMEGA_M))
print("  The 09-10 table's headline +1.8e4%% is therefore a property of the UNFLOORED form,")
print("  not of the published calibration. Floored, the same row is %.1f%%." % vpct(C_floor(RHO_LOCAL_BAR, 0.029*229**2, 0.489)))

print("\n" + "="*100)
print("B. WHICH (form, gamma) CAN PRODUCE THE PUBLISHED 0.05-0.4%% VELOCITY BAND?")
print("="*100)
def solve_knee(target_vel_pct, gamma, form, rho=RHO_LOCAL_BAR):
    """rho_crit giving a given fractional VELOCITY excess in percent; excess rises with rho_crit."""
    lo, hi = 1e-12, 1e9
    for _ in range(400):
        mid = math.sqrt(lo*hi)
        v = vpct(form(rho, mid, gamma))
        if v < target_vel_pct: lo = mid
        else: hi = mid
    return math.sqrt(lo*hi)
for name, form in (("bare (unfloored)", C_bare), ("floored f=Omega_m", C_floor)):
    for g in (0.489, 2.0):
        lo, hi = solve_knee(0.05, g, form), solve_knee(0.40, g, form)
        note = ""
        if name.startswith("floored") and vpct(OMEGA_M) < 0.40:
            note = "  <-- unreachable"
        print("  %-18s gamma=%-6.3f  rho_crit in [%.4g, %.4g] M_sun/pc^3%s" % (name, g, lo, hi, note))
rc_reg = kgm3_to_msunpc3(1e-23)
print("\n  REGISTERED KNEE CHECK (S691: rho_c = %.4g M_sun/pc^3, gamma = 2):" % rc_reg)
for name, form in (("bare", C_bare), ("floored", C_floor)):
    print("    %-8s C = %.10f  ->  velocity excess %s %%"
          % (name, form(RHO_LOCAL_BAR, rc_reg, 2.0), eng(vpct(form(RHO_LOCAL_BAR, rc_reg, 2.0)))))
print("    S691's own rho_local (%.4g, DM included): bare C = %.10f -> %s %%"
      % (RHO_LOCAL_691, C_bare(RHO_LOCAL_691, rc_reg, 2.0), eng(vpct(C_bare(RHO_LOCAL_691, rc_reg, 2.0)))))
print("  => the knee TEST-02 is registered against predicts a null ~1e-9 %, not 0.05-0.4%.")
print("     The published band is not produced by the registered knee in EITHER form.")

print("\n" + "="*100)
print("C. THE GAIA WIDE-BINARY STATISTIC IS DIFFERENTIAL IN SEPARATION; C(rho) IS NOT.")
print("="*100)
print("""  Chae's gamma_g (and Banik's alpha_grav) are defined as g_obs/g_N in the LOW-internal-
  acceleration (wide) bin, with the HIGH-acceleration (close) bin used to calibrate the
  mass-luminosity relation and the eccentricity/projection model.  The statistic is a RATIO
  between two separation bins drawn from the same volume.

  Under g_eff = g_N / C(rho_ambient) the boost is identical in both bins, so it cancels:

        gamma_g,pred = C(rho_close) / C(rho_wide)  ->  1  exactly, when rho_close = rho_wide.

  This holds at EVERY rho_crit, EVERY gamma, floored or bare.  The zeroth-order prediction
  of the density-keyed law for the measured statistic is not 0.05-0.4%; it is 0.
  The only first-order signal is a density CONTRAST between the two subsamples.""")

def contrast_needed(target_vel_pct, rc, g, form, rho_ref=RHO_LOCAL_BAR):
    """rho_close/rho_wide needed to give target velocity deviation, holding rho_close = rho_ref."""
    lo, hi = 1.0, 1e12
    tgt = (1.0 + target_vel_pct/100.0)**2          # = C_close / C_wide
    for _ in range(400):
        mid = math.sqrt(lo*hi)
        r = form(rho_ref, rc, g) / form(rho_ref/mid, rc, g)
        if r < tgt: lo = mid
        else: hi = mid
    v = math.sqrt(lo*hi)
    return v if v < 1e11 else float('inf')

print("\n  Density contrast rho_close/rho_wide required to reproduce the published band")
print("  (rho_close held at %.3f M_sun/pc^3):" % RHO_LOCAL_BAR)
print("  %-11s %-6s %-9s | %-14s %-14s" % ("rho_crit","gamma","form","for 0.05%","for 0.40%"))
for rc, tag in KNEES:
    for g in (0.489, 2.0):
        for nm, form in (("bare", C_bare), ("floored", C_floor)):
            a = contrast_needed(0.05, rc, g, form); b = contrast_needed(0.40, rc, g, form)
            print("  %-11.4g %-6.3f %-9s | %-14s %-14s" % (rc, g, nm, eng(a), eng(b)))
print("""
  READ: a contrast of ~1.2-2 is the most the within-250-pc sample can plausibly supply
  (the thin-disc vertical scale height is ~300 pc, and wide pairs are preferentially
  disrupted in dense regions, so surviving wide pairs sample slightly LOWER rho).  Any row
  above needing a contrast >> 2 cannot produce the published band by this mechanism at all;
  any row needing 'inf' cannot produce it at any contrast, because C is already saturated.""")

print("\n" + "="*100)
print("D. DO SOLAR-SYSTEM EPHEMERIDES CONSTRAIN THE DENSITY-KEYED LAW? (they are cited as if they do)")
print("="*100)
H_DISC = 300.0        # pc, thin-disc effective vertical scale height
R_SS   = 100.0 * 4.84813681e-6   # 100 AU in pc
frac_grad = 1.0 - math.exp(-R_SS / H_DISC)
print("  AMBIENT KEYING: rho varies on the disc scale height h ~ %.0f pc." % H_DISC)
print("    Over the whole solar system (100 AU = %.3g pc) the fractional change in rho is" % R_SS)
print("    Delta rho / rho ~ %.2e." % frac_grad)
print("    C is therefore constant across the Solar System to ~1 part in 1e6, and")
print("    g_eff = (1/C) GM/r^2 is a pure rescaling of GM_sun -- degenerate with the mass")
print("    that ephemerides FIT.  No anomalous perihelion precession, no Cassini range residual.")
print("    Ephemerides place NO constraint on rho_crit under ambient keying.")
print()
for r_au in (1.0, 10.0, 100.0):
    r_pc = r_au * 4.84813681e-6
    rho_mrh = 1.0 / (4.0/3.0*math.pi*r_pc**3)     # 1 M_sun smoothed over a sphere of radius r
    print("  MRH KEYING at r = %6.1f AU: rho_MRH = M_sun/(4/3 pi r^3) = %.3e M_sun/pc^3" % (r_au, rho_mrh))
    for rc, _ in [(1521.0,""), (0.161,""), (kgm3_to_msunpc3(1e-23),"")]:
        print("      rho_c=%-10.4g  1 - C_bare = %.2e   1 - C_floored = %.2e"
              % (rc, 1-C_bare(rho_mrh, rc, 2.0), 1-C_floor(rho_mrh, rc, 2.0)))
print("    Under MRH keying rho is 10-20 orders above every knee: C = 1 to <1e-13. Also no constraint.")
print("  => On BOTH keyings the ephemerides sector is EMPTY for the density-keyed law.")
print("     TEST-25's +17.95-sigma Cassini result is an ACCELERATION-keyed (QUMOND IF) result")
print("     and does not transfer to the density branch.")

print("\n" + "="*100)
print("E. WHAT EACH SECTOR CONSTRAINS: the floor, not the knee")
print("="*100)
print("  Oort / local dark fraction (McKee+2015 f_DM = 0.134 +/- 0.036, 2-sigma):")
CLO, CHI = 1-(0.134+2*0.036), 1-(0.134-2*0.036)
print("    C(rho_local) must lie in [%.3f, %.3f]." % (CLO, CHI))
print("    Bare form:    reachable (C spans 0..1).")
print("    Floored form: reachable (C spans %.3f..1)." % OMEGA_M)
print("    Floor f alone is NOT excluded by Oort: at the saturated end C -> f = %.3f, which is" % OMEGA_M)
print("    below %.3f, so f = Omega_m is excluded only if rho_crit >> rho_local. It is a JOINT" % CLO)
print("    constraint on (f, rho_crit), never on rho_crit alone.")
def oort_window(g, f):
    """rho_crit window from the Oort C-window, at floor f. None where unreachable."""
    out = []
    for Ct in (CLO, CHI):
        T = (Ct - f) / (1.0 - f)
        if not (0 < T < 1): out.append(None); continue
        x = math.exp(math.atanh(T)/g) - 1.0
        out.append(RHO_LOCAL_BAR / x if x > 0 else None)
    return out[1], out[0]     # (lower rho_c from C_hi, upper rho_c from C_lo)
print("\n  Oort-admitted rho_crit window vs floor and gamma [M_sun/pc^3]:")
print("  %-8s | %-26s %-26s %-26s" % ("gamma", "f = 0 (bare)", "f = Omega_b/Omega_m = 0.157", "f = Omega_m = 0.315"))
for g in (0.3, 0.489, 0.7, 1.0, 2.0, 3.0):
    row = "  %-8.3f |" % g
    for f in (0.0, OMEGA_B_OVER_M, OMEGA_M):
        lo, hi = oort_window(g, f)
        row += " %-26s" % ("%.4g - %.4g" % (lo, hi) if lo and hi else "unreachable")
    print(row)
print("""
  The window MOVES BY LESS THAN A FACTOR OF 2 across the whole floor axis at fixed gamma,
  and by three orders across the gamma axis at fixed floor.  So the local sector's knee
  window is a statement about gamma, not about the floor -- and the boost CEILING (1/f) is
  a statement about the floor, not about the knee.  They are close to orthogonal.""")

print("\n" + "="*100)
print("SUMMARY LINES (for the finding; grep these against the table above)")
print("="*100)
print("  1. floored ceiling on local velocity excess, ANY knee/gamma: %.1f%%" % vpct(OMEGA_M))
print("  2. published calibration, gamma=0.489: bare %s%%  vs  floored %.1f%%"
      % (eng(vpct(C_bare(RHO_LOCAL_BAR, 1521.0, 0.489))), vpct(C_floor(RHO_LOCAL_BAR, 1521.0, 0.489))))
print("  3. registered TEST-02 knee at its registered gamma=2: %s%% (bare), %s%% (floored)"
      % (eng(vpct(C_bare(RHO_LOCAL_BAR, rc_reg, 2.0))), eng(vpct(C_floor(RHO_LOCAL_BAR, rc_reg, 2.0)))))
print("  4. registered TEST-02 knee at the SPARC gamma=0.489: %.3f%% (bare) -- inside the published band"
      % vpct(C_bare(RHO_LOCAL_BAR, rc_reg, 0.489)))
print("  5. band-required knee window, floored, gamma=0.489: [%.4g, %.4g]"
      % (solve_knee(0.05,0.489,C_floor), solve_knee(0.40,0.489,C_floor)))
print("  6. band-required knee window, bare,    gamma=0.489: [%.4g, %.4g]"
      % (solve_knee(0.05,0.489,C_bare), solve_knee(0.40,0.489,C_bare)))

print("\n" + "="*100)
print("F. THE MRH SCALE, NOT THE KNEE, SETS THE WIDE-BINARY AMPLITUDE")
print("="*100)
AU_PC = 4.84813681e-6
def rho_enclosed(M, s_au):
    """rho-bar(<r): the mass of the system smoothed over a sphere of its own size."""
    r = s_au * AU_PC
    return M / (4.0/3.0*math.pi*r**3)
print("""  Which rho enters C for a wide binary is not fixed by any registered text.  Two keyings
  are both in live use in this program:

    (i)  AMBIENT / kpc-smoothed rho  -- what every SPARC run in the archive uses for a disc
         star (rho_mid = Sigma/2h).  For a binary this is rho_local = 0.084, the SAME value
         for the close calibration bin and the wide signal bin.
    (ii) rho-bar(<r) = M/(4/3 pi r^3) -- the system's own mass over its own size.  This is
         the 'MRH bubble' reading, and it is ALSO one of the five arguments run head-to-head
         on SPARC on 2026-09-09, where it placed SECOND at the Omega_m floor (chi2/N 58.97
         vs g_N's 55.42).  It is not a straw man.

  Under (i) the boost is common-mode and cancels out of the measured statistic: prediction 0.
  Under (ii) rho depends on SEPARATION, so it does NOT cancel, and the prediction is large.""")
M_TOT = 1.0
BINS = [("close calib bin", 500.0), ("Chae wide bin", 1.0e4), ("widest bin", 3.0e4)]
print("\n  rho-bar(<r) for a %.1f M_sun pair:" % M_TOT)
for nm, s in BINS:
    print("    %-16s s = %-8.0f AU  rho = %.4g M_sun/pc^3" % (nm, s, rho_enclosed(M_TOT, s)))
print("    (note: the PUBLISHED knee 0.029*V_flat^2 = 1521 sits INSIDE this range --")
print("     the wide-binary separations straddle the framework's own calibrated knee.)")

rho_close = rho_enclosed(M_TOT, 500.0)
print("\n  Predicted Gaia statistic under keying (ii):  gamma_g = C(rho_close)/C(rho_wide),")
print("  velocity deviation = sqrt(gamma_g) - 1.   Measured: Banik+2024 alpha_grav = -0.021")
print("  (+0.065/-0.045) i.e. gamma_g = 1.00 +0.07/-0.05; Chae 2024b gamma_g = 1.37 (+0.10/-0.09).")
print("\n  %-11s %-6s %-9s | %-11s %-11s | %-11s %-11s | verdict vs Banik / Chae"
      % ("rho_crit","gamma","form","gamma_g 1e4AU","dv 1e4AU %","gamma_g 3e4AU","dv 3e4AU %"))
for rc, tag in KNEES:
    for g in (0.489, 2.0):
        for nm, form in (("bare", C_bare), ("floored", C_floor)):
            gg = [form(rho_close, rc, g)/form(rho_enclosed(M_TOT, s), rc, g) for s in (1.0e4, 3.0e4)]
            dv = [100*(math.sqrt(x)-1) for x in gg]
            v = ("consistent w/ Banik" if gg[0] <= 1.07 else
                 "consistent w/ Chae"  if 1.28 <= gg[0] <= 1.47 else
                 "EXCLUDED by Banik (>19 sigma bar)")
            print("  %-11.4g %-6.3f %-9s | %-11.4g %-11.4g | %-11.4g %-11.4g | %s"
                  % (rc, g, nm, gg[0], dv[0], gg[1], dv[1], v))

print("\n  Knee window admitted by Banik+2024 (gamma_g <= 1.07 at s = 1e4 AU), keying (ii):")
def gg_of_rc(rc, g, form, s=1.0e4):
    return form(rho_close, rc, g)/form(rho_enclosed(M_TOT, s), rc, g)
for g in (0.489, 2.0):
    for nm, form in (("bare", C_bare), ("floored", C_floor)):
        # gamma_g rises with rho_crit; find the rho_crit where it crosses 1.07
        lo, hi = 1e-8, 1e12
        for _ in range(400):
            mid = math.sqrt(lo*hi)
            if gg_of_rc(mid, g, form) < 1.07: lo = mid
            else: hi = mid
        print("    gamma=%-6.3f %-9s : Banik admits rho_crit <= %.4g M_sun/pc^3" % (g, nm, math.sqrt(lo*hi)))
print("""
  READ, stated as narrowly as the rows support.  Under keying (ii) the wide-binary sector
  is neither non-discriminating nor 'practically untestable': it is a measured upper bound
  on rho_crit.  The published calibration 1521 is NOT excluded at every gamma in the 1e4 AU
  bin -- at gamma = 2 it gives gamma_g = 1.065/1.043, inside Banik's error bar.  It is
  excluded at gamma = 0.489 in that bin (2.50 / 1.70), and at BOTH gammas in the 3e4 AU bin
  (10.1 / 2.61 bare, 3.02 / 2.61 floored) which is inside Banik+2024's 2-30 kAU range.
  Under keying (i) the sector says nothing at all, at any knee.  The published 0.05-0.4%
  band is the prediction of NEITHER keying.""")

print("\n" + "="*100)
print("G. THE SHAPE ARGUMENT: keying (ii) predicts a RISING gamma_g; the data SATURATE")
print("="*100)
print("""  Both sides of the Chae-Banik dispute agree on one thing: the measured gamma_g does not
  grow without bound with separation.  Chae has it saturating near 1.37-1.49 above ~5 kAU
  (the MOND/EFE plateau); Banik has it flat at 1.00.  Under keying (ii), rho-bar ~ s^-3, so
  once s passes the knee C falls and gamma_g RISES monotonically -- without bound in the
  bare form, and to the ceiling 1/f = %.2f in the floored form.  That is a shape
  discriminator that does not depend on where the knee is, only on it being inside the
  measured separation range at all.""" % (1/OMEGA_M))
print("\n  gamma_g vs separation at the published knee rho_crit = 1521:")
print("  %-10s %-12s | %-10s %-10s %-10s %-10s" % ("s [AU]","rho-bar","g=.489 bare","g=.489 fl","g=2 bare","g=2 fl"))
for s_au in (500, 2000, 5000, 10000, 20000, 30000):
    r = rho_enclosed(M_TOT, s_au)
    vals = [C_bare(rho_close,1521.,0.489)/C_bare(r,1521.,0.489),
            C_floor(rho_close,1521.,0.489)/C_floor(r,1521.,0.489),
            C_bare(rho_close,1521.,2.0)/C_bare(r,1521.,2.0),
            C_floor(rho_close,1521.,2.0)/C_floor(r,1521.,2.0)]
    print("  %-10d %-12.4g | %-10.4g %-10.4g %-10.4g %-10.4g" % (s_au, r, *vals))
print("  measured  (Chae 2024b) : 1.37 +0.10/-0.09, flat above ~5 kAU")
print("  measured  (Banik+2024) : 1.00 +0.07/-0.05 over the whole 2-30 kAU range")

print("\n" + "="*100)
print("H. SENSITIVITY: the bound scales with the assumed pair mass (rho-bar is linear in M)")
print("="*100)
print("  %-8s | %-28s %-28s" % ("M_tot", "Banik-admitted rho_c, g=.489", "g=2.0"))
for M in (0.5, 1.0, 2.0):
    rc_close_M = rho_enclosed(M, 500.0)
    row = "  %-8.1f |" % M
    for g in (0.489, 2.0):
        lo, hi = 1e-8, 1e12
        for _ in range(400):
            mid = math.sqrt(lo*hi)
            gg = C_bare(rc_close_M, mid, g)/C_bare(rho_enclosed(M,1.0e4), mid, g)
            if gg < 1.07: lo = mid
            else: hi = mid
        row += " %-28s" % ("<= %.4g (bare)" % math.sqrt(lo*hi))
    print(row)
print("  A factor 4 in assumed mass moves the bound by a factor 4. The published knee 1521")
print("  is above the gamma=0.489 bound for every mass in 0.5-2 M_sun.")


print("\n" + "="*100)
print("I. WHERE THE WIDE-BINARY SECTOR ACTUALLY BITES -- and where it does not")
print("="*100)
G_PC = 4.30091e-3     # pc M_sun^-1 (km/s)^2
print("  Self-consistency check: what knee does each KEYING need for the GALAXY sector?")
V, R = 229.0, 10000.0
rho_bar_gal = 3*V**2/(4*math.pi*G_PC*R**2)
print("    keying (ii) rho-bar(<R) at MW R = %.0f pc, V = %.0f km/s : %.4g M_sun/pc^3" % (R, V, rho_bar_gal))
print("    keying (i)  rho_mid = Sigma/2h at the solar radius        : %.4g M_sun/pc^3" % RHO_LOCAL_BAR)
print("    published calibration 0.029*V_flat^2 (MW)                 : %.4g M_sun/pc^3" % (0.029*V**2))
print("    stated calibration    4.6e-5*V_flat^2 (MW)                : %.4g M_sun/pc^3" % (4.6e-5*V**2))
print()
print("  Banik+2024 upper bound on rho_crit under keying (ii), s = 1e4 AU, M = 1 M_sun:")
print("    gamma = 0.489: rho_crit <= 67.78     gamma = 2.0: rho_crit <= 1573")
print()
print("  So:")
print("    - keying (ii) + a knee near the galaxy value %.4g  -> gamma_g = %.6f  : SILENT"
      % (rho_bar_gal, C_bare(rho_close, rho_bar_gal, 0.489)/C_bare(rho_enclosed(1.0,1e4), rho_bar_gal, 0.489)))
print("    - keying (ii) + the PUBLISHED knee 1521               -> gamma_g = %.3f  : EXCLUDED (gamma=0.489)"
      % (C_bare(rho_close,1521.,0.489)/C_bare(rho_enclosed(1.0,1e4),1521.,0.489)))
print("    - keying (i)  + ANY knee                              -> gamma_g = 1 exactly : SILENT")
print()
print("  The wide-binary sector excludes exactly one thing: the pairing of the PUBLISHED")
print("  0.029*V_flat^2 calibration with a system-scale MRH.  It does not exclude the")
print("  density-keyed law, and it does not exclude rho-bar(<r) keying at its own knee.")
print("  Its real content is a NEGATIVE one about the test card: under the keying every")
print("  SPARC run in this archive uses, the Gaia statistic is identically 1 -- so the")
print("  card's '~80x below Gaia DR3 systematics' and its 'Gaia DR4 will re-open this'")
print("  milestone both describe a gap that no amount of data closes.")
