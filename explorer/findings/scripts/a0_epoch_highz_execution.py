"""
a0(z) epoch-branch execution: does Synchronism branch (A), a0(z) = c H(z) / 2pi,
survive current high-z data?

REVISION NOTE (same session, 2026-07-30): the first version of this script tested
branch (A) against the six Genzel et al. 2017 discs as tabulated in Milgrom 2017
(arXiv:1703.06110) Table I, and reported branch (A) refuted at 5-6 of 6 galaxies.
That result was an artifact of a SUPERSEDED sample.  The same group published RC100
(Nestor Shachar et al. 2023, arXiv:2209.12199, N=100) with median f_DM(R_e) =
0.38+-0.23 at z~1 and 0.27+-0.18 at z~2 -- far above the N=6 values (0.00-0.21).
Against RC100 the branch-(A) predictions are CONSISTENT.  Arm 1 is retracted; it is
kept below, computed against both samples, so the retraction is auditable.

The surviving test is Ciocan et al. 2026 (MUSE-DARK III, A&A 709 L16,
arXiv:2604.22613), which fits a0 directly per redshift bin from the RAR -- the
correct observable, because it controls for g_bar rather than for radius.
"""
import math

Om, OL = 0.315, 0.685
def E(z):
    return math.sqrt(Om * (1 + z) ** 3 + OL)

def zeta_simple(x):
    return 1.0 / (1.0 + x)

def zeta_mcgaugh(x):
    z = 0.3
    for _ in range(300):
        z = math.exp(-math.sqrt(max((1 - z) * x, 0.0)))
    return z

SEP = "=" * 100

# ---------------------------------------------------------------- ARM 1 (RETRACTED)
# Milgrom 2017 Table I: Genzel+2017 N=6.  zeta = phantom-matter fraction at R_1/2.
GAL = [
    ("COS4 01351", 0.854, 0.21, 2.8), ("D3a 6397", 1.500, 0.17, 3.5),
    ("GS4 43501", 1.613, 0.19, 3.6), ("zC 406690", 2.196, 0.00, 4.4),
    ("zC 400569", 2.242, 0.00, 10.8), ("D3a 15504", 2.383, 0.12, 4.0),
]
# RC100 (arXiv:2209.12199), same group, N=100: median f_DM(R_e) with 1-sigma spread
RC100 = {1.0: (0.38, 0.23), 2.0: (0.27, 0.18)}

print(SEP); print("ARM 1 (RETRACTED): phantom-matter fractions"); print(SEP)
print(f"  {'galaxy':<12}{'z':>6}{'E(z)':>7}{'zeta_A':>8}{'Genzel+2017 N=6':>18}{'vs RC100 N=100':>22}")
for (name, z, zo, x12) in GAL:
    x_A = x12 * (1.20 / 1.04) / E(z)            # framework a0 = 1.04e-10
    zA = zeta_mcgaugh(x_A)                      # most forgiving interpolating fn
    ref_z = 1.0 if z < 1.75 else 2.0
    med, sd = RC100[ref_z]
    nsig_rc = (zA - med) / sd
    print(f"  {name:<12}{z:>6.2f}{E(z):>7.2f}{zA:>8.3f}{zo:>18.2f}"
          f"{f'{med:.2f}+-{sd:.2f} -> {nsig_rc:+.2f}sig':>22}")
print("  -> vs the N=6 2017 values branch (A) looked refuted; vs the N=100 2023")
print("     resample from the SAME GROUP it is consistent within 1 sigma everywhere.")
print("     Arm 1 carries no weight.  A refutation built on it would have been false.")

# ---------------------------------------------------------------- ARM 2 (SURVIVING)
# Ciocan+2026 MUSE-DARK III: RAR-fitted a0 per z-bin, 79 galaxies, 0.33 < z < 1.44.
# Global: a0(z) = a0(0) + a1*z with a0(0) = 1.00 +- 0.04, a1 = 1.59 +0.11/-0.10 (1e-10 SI)
# Whole-sample:  a0|z~1 = 2.38 +0.12/-0.10
C_A0, C_A1, C_A0ERR = 1.00, 1.59, 0.04
BINS = [(0.45, 1.99), (0.65, 2.15), (0.95, 2.50), (1.25, 2.71)]   # z_eff, a0 (1e-10)

print("\n" + SEP)
print("ARM 2 (SURVIVING): direct RAR-fitted a0(z) -- Ciocan+2026, arXiv:2604.22613")
print("Branch (A) is a ZERO-PARAMETER prediction: a0(z)/a0(0) = E(z).")
print(SEP)
for norm_name, a00 in (("framework cH0/2pi = 1.04", 1.04),
                       ("Milgrom local   = 1.20", 1.20),
                       ("Ciocan's own fit = 1.00", C_A0)):
    print(f"\n  normalisation a0(0) = {norm_name} e-10 m/s^2")
    print(f"  {'z_eff':>7}{'Ciocan a0':>12}{'branch(A)':>12}{'Ciocan lin.':>13}{'A shortfall':>13}")
    for (ze, a0obs) in BINS:
        bA = a00 * E(ze)
        lin = C_A0 + C_A1 * ze
        print(f"  {ze:>7.2f}{a0obs:>12.2f}{bA:>12.2f}{lin:>13.2f}{a0obs - bA:>13.2f}")
    bA1 = a00 * E(1.0)
    print(f"  whole-sample a0|z~1 = 2.38 (+0.12/-0.10) vs branch(A) = {bA1:.2f}"
          f"  ->  {(2.38 - bA1) / 0.10:+.1f} sigma LOW")

print("\n  Ciocan+2026 states it directly: 'Our measured a0(z) is faster than that of H(z).'")
print("  Branch (A) says a0 tracks H(z) EXACTLY.  So the 2026 measurement disfavours")
print("  branch (A) for evolving TOO SLOWLY -- the opposite direction from the one")
print("  the site, and every visitor persona, has assumed.")

# ---------------------------------------------------------------- CONTEXT
print("\n" + SEP); print("THE LITERATURE IS IN CONFLICT WITH ITSELF"); print(SEP)
print("  Ciocan+2026  (N=79, 0.33<z<1.44, RAR-fitted)  : a0 grows, FASTER than H(z)")
print("  Gueorguiev 2024 (arXiv:2409.11425, SIV revisit): log10(a0) z-slope ~ ZERO")
print("  Milgrom 2017 (N=6, superseded by RC100)        : ~4 a0 at z~2 'all but excluded'")
print("  RC100 2023   (N=100, supersedes the N=6)       : f_DM 0.38(z~1) -> 0.27(z~2)")
print("\n  Branch (A) sits between the first and third and is disfavoured by both,")
print("  from OPPOSITE sides.  It is not closed; it is squeezed -- structurally the")
print("  same shape as TEST-11's Cassini/SPARC empty intersection, but with the two")
print("  bounding measurements mutually inconsistent, so neither bound is yet firm.")

print("\n" + SEP); print("CALIBRATION: what Milgrom actually excluded"); print(SEP)
print(f"  {'z':>6}{'E(z) branch(A)':>17}{'(1+z)^1.5 excluded':>21}{'ratio':>8}")
for z in (1.0, 2.0, 2.2):
    print(f"  {z:>6.2f}{E(z):>17.2f}{(1 + z) ** 1.5:>21.2f}{E(z) / (1 + z) ** 1.5:>8.2f}")
print("  -> Milgrom's named exclusion a0 ~ (1+z)^1.5 is the matter-dominated limit and is")
print("     42-58% STRONGER than LCDM E(z).  His sentence does not cover branch (A).")
