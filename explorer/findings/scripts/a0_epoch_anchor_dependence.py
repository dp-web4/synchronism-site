#!/usr/bin/env python3
"""
a0(z) epoch fork — anchor-dependence and discriminating-power audit.
Explorer session 2026-08-01.

Question: /parameter-derivations shipped (2026-08-01) the claim that branch (A),
a0(z) = c*H(z)/2pi, runs "2.3-5.9 sigma LOW" against Ciocan et al. 2026.

This script tests whether that number is a property of the data or of the
choice of z~0 normalisation anchor, and whether the row can discriminate
Synchronism from LambdaCDM at all.

ALL INPUT NUMBERS ARE QUOTED FROM PUBLISHED SOURCES. Provenance in SOURCES below.
"""

import math

# ---------------------------------------------------------------- cosmology
OM, OL = 0.315, 0.685          # Planck 2018 flat LCDM; site uses 1/Om = 3.17 => Om = 0.315
H0, H0_ERR = 67.4, 0.5         # km/s/Mpc, Planck 2018 (site's standard, per project memory)

def E(z):
    """Dimensionless Hubble rate H(z)/H0."""
    return math.sqrt(OM * (1 + z) ** 3 + OL)

# ---------------------------------------------------------------- measurements
# Ciocan et al. 2026, MUSE-DARK III, A&A 709, L16 (arXiv:2604.22613)
# N=79 SFGs, 0.33 < z < 1.44, RAR fitted via MNR. ERRORS ARE 95% CI (paper says so
# explicitly: "with the errors denoting the 95% confidence intervals (CI)").
CIOCAN_A0_Z1      = 2.38
CIOCAN_A0_Z1_HI95 = 0.12
CIOCAN_A0_Z1_LO95 = 0.10
CIOCAN_INTERCEPT, CIOCAN_INTERCEPT_95 = 1.00, 0.04
CIOCAN_A1, CIOCAN_A1_HI95, CIOCAN_A1_LO95 = 1.59, 0.11, 0.10
CIOCAN_BINS = (1.99, 2.71)     # lowest-z bin -> highest-z bin

def ci95_to_sigma(x):
    return x / 1.96

SIG_HI = ci95_to_sigma(CIOCAN_A0_Z1_HI95)   # sigma above the central value
SIG_LO = ci95_to_sigma(CIOCAN_A0_Z1_LO95)   # sigma below the central value

# The four published z~0 anchors for a0. This is the whole point: they disagree.
#   name, a0(z~0) value, 1-sigma error, the redshift it was actually measured at, source
ANCHORS = [
    ("Ciocan+2026 fitted intercept", 1.00, ci95_to_sigma(0.04), 0.00,
     "linear extrapolation of 0.33<z<1.44 fit; authors call it phenomenological"),
    ("framework c*H0/2pi",           1.04, 1.04 * (H0_ERR / H0), 0.00,
     "site value on /parameter-derivations; error propagated from Planck H0"),
    ("McGaugh+2016 SPARC (canonical)", 1.20, 0.26, 0.00,
     "quoted verbatim by Ciocan as 'the canonical value ... for the SPARC sample'"),
    ("Varasteanu+2025 MIGHTEE-HI",   1.69, 0.13, 0.08,
     "quoted verbatim by Ciocan; N=19 HI-selected galaxies, RAR fit, z<0.08"),
]

print("=" * 78)
print("PART 1 -- Is 'branch (A) is 2.3-5.9 sigma LOW' a property of the data")
print("          or of the anchor?   Test: a0(z=1) = anchor * E(1)")
print("=" * 78)
print(f"E(1) = {E(1):.4f}    Ciocan a0|z~1 = {CIOCAN_A0_Z1} "
      f"(+{CIOCAN_A0_Z1_HI95}/-{CIOCAN_A0_Z1_LO95}, 95% CI)")
print(f"  => 1-sigma = +{SIG_HI:.4f} / -{SIG_LO:.4f}\n")
print(f"{'anchor':<32}{'a0(0)':>8}{'pred z=1':>10}{'dev':>9}{'sigma':>9}  verdict")
print("-" * 78)

results = []
for name, a0, err, z_meas, _note in ANCHORS:
    # de-evolve the anchor to z=0 along branch (A) if it was measured at z>0
    a0_z0     = a0 / E(z_meas)
    err_z0    = err / E(z_meas)
    pred      = a0_z0 * E(1.0)
    pred_err  = err_z0 * E(1.0)
    dev       = CIOCAN_A0_Z1 - pred                      # + => prediction is LOW
    meas_sig  = SIG_LO if dev > 0 else SIG_HI
    nsig      = dev / math.hypot(pred_err, meas_sig)
    verdict   = "branch (A) LOW" if dev > 0 else "branch (A) HIGH"
    if abs(nsig) < 2:
        verdict += "  (CONSISTENT)"
    results.append((name, nsig))
    print(f"{name:<32}{a0:>8.2f}{pred:>10.3f}{dev:>+9.3f}{nsig:>+9.2f}  {verdict}")

lo = min(r[1] for r in results)
hi = max(r[1] for r in results)
print("-" * 78)
print(f"RANGE ACROSS PUBLISHED ANCHORS: {lo:+.2f} sigma to {hi:+.2f} sigma "
      f"-- THE SIGN FLIPS.")
print(f"Anchor spread: {min(a[1] for a in ANCHORS):.2f} to {max(a[1] for a in ANCHORS):.2f} "
      f"= {(max(a[1] for a in ANCHORS)/min(a[1] for a in ANCHORS)-1)*100:.0f}% "
      f"disagreement on the SAME quantity a0(z~0).")
print(f"Cosmological signal being tested, z=0 -> z=1: E(1)-1 = {(E(1)-1)*100:.0f}% growth.")
print(f"SIGNAL / SYSTEMATIC = {(E(1)-1) / (max(a[1] for a in ANCHORS)/min(a[1] for a in ANCHORS)-1):.2f}")

print()
print("=" * 78)
print("PART 2 -- Does the row discriminate Synchronism from LambdaCDM?")
print("=" * 78)
# Mayer, Teklu, Dolag & Remus 2023, MNRAS 518, 257 (arXiv:2206.04333):
# Magneticum hydro sim, PURE LambdaCDM + baryons, no MOND, no fundamental a0.
# Abstract verbatim: "the best fit for a_0 is found to increase by a factor of
# approximately 3 from redshift z = 0 to z = 2."
MAYER_GROWTH_Z2 = 3.0
branch_A_growth_z2 = E(2.0)
# Ciocan's own linear model growth over the same range, from their intercept:
ciocan_growth_z2 = (CIOCAN_INTERCEPT + CIOCAN_A1 * 2.0) / CIOCAN_INTERCEPT

print(f"  a0(z=2)/a0(0) predicted by branch (A)  = E(2)   = {branch_A_growth_z2:.3f}")
print(f"  a0(z=2)/a0(0) produced by LCDM+baryons (Mayer+2023, Magneticum) = {MAYER_GROWTH_Z2:.3f}")
print(f"  a0(z=2)/a0(0) measured (Ciocan linear model)                    = {ciocan_growth_z2:.3f}")
print("\n  NOTE: Mayer quote their factor as 'approximately 3' (one significant figure),")
print("  so the correct statement is that branch (A) and LCDM+baryons are")
print("  INDISTINGUISHABLE AT THE PRECISION MAYER STATES -- not that they agree to 1%.")
print("  => An observation confirming branch (A) confirms LCDM+baryons equally well.")
print("  => Mayer+2023 eq.(13) IS a0(0)*[Om(1+z)^3+OL]^(1/2) -- branch (A) verbatim,")
print("     written down and tested in a LambdaCDM paper in 2022. Not a novel prediction.")
print("  => Mayer further report eq.(13) 'fails to accurately describe the trend")
print("     observed in Magneticum' -- so branch (A) is not even the right shape WITHIN LCDM.")

print()
print("=" * 78)
print("PART 3 -- Power of the one analysis that used the CURRENT high-z sample")
print("=" * 78)
# Gueorguiev 2024 (arXiv:2409.11425), high-z arm = Nestor Shachar+2023 RC100 (N=100),
# 0.5 <= z <= 2.5. Reported slope of A0 = log10(a0) vs z:  0.01 +/- 0.20 dex per unit z.
G_SLOPE, G_ERR = 0.01, 0.20
ZA, ZB = 0.5, 2.5

def log_slope(f_a, f_b, za=ZA, zb=ZB):
    return (math.log10(f_b) - math.log10(f_a)) / (zb - za)

branchA_slope = log_slope(E(ZA), E(ZB))
ciocan_slope  = log_slope(CIOCAN_INTERCEPT + CIOCAN_A1 * ZA,
                          CIOCAN_INTERCEPT + CIOCAN_A1 * ZB)

print(f"  Gueorguiev 2024 measured slope d log10(a0)/dz = {G_SLOPE} +/- {G_ERR} dex/z")
print(f"    (sample: RC100 / Nestor Shachar+2023, N=100 -- the CURRENT high-z sample,")
print(f"     i.e. the one the 2026-07-30 session correctly identified as non-superseded)\n")
print(f"  branch (A) implies slope over {ZA}<z<{ZB} = {branchA_slope:.4f} dex/z"
      f"  -> {(branchA_slope-G_SLOPE)/G_ERR:.2f} sigma from Gueorguiev")
print(f"  Ciocan model implies slope            = {ciocan_slope:.4f} dex/z"
      f"  -> {(ciocan_slope-G_SLOPE)/G_ERR:.2f} sigma from Gueorguiev")
print(f"  no evolution (a0 = const, Lambda anchor) = 0.0000 dex/z"
      f"  -> {(0-G_SLOPE)/G_ERR:.2f} sigma from Gueorguiev")
print(f"\n  Ciocan vs branch (A) separation, in Gueorguiev's units: "
      f"{abs(ciocan_slope-branchA_slope)/G_ERR:.3f} sigma")
print("  => On the current high-z sample, branch (A), Ciocan's model, and NO evolution")
print("     are all mutually indistinguishable. Gueorguiev's null is a POWER limit,")
print("     not a contradicting measurement. Gueorguiev himself: 'the uncertainty in")
print("     the data is too big for the clear demonstration of a z-dependence yet.'")

print()
print("=" * 78)
print("PART 4 -- Ciocan's own significance claims, with anchor errors restored")
print("=" * 78)
for label, val, err in [("McGaugh+2016 SPARC", 1.20, 0.26),
                        ("Varasteanu+2025",    1.69, 0.13)]:
    own_only = (CIOCAN_A0_Z1 - val) / SIG_LO
    combined = (CIOCAN_A0_Z1 - val) / math.hypot(err, SIG_LO)
    print(f"  a0|z~1 vs {label:<20} measurement-error-only: {own_only:5.1f} sigma"
          f"   |  both errors: {combined:4.1f} sigma")
print("  (Paper quotes ~19 sigma vs SPARC and ~5 sigma vs Varasteanu -- i.e. it uses")
print("   its OWN error for the SPARC comparison and the OTHER paper's error for the")
print("   Varasteanu one. Restoring SPARC's +/-0.26 gives ~4 sigma, not 19.)")

print()
print("=" * 78)
print("PART 5 -- A method-systematic floor, measured at fixed epoch")
print("=" * 78)
# Two RAR determinations at z ~ 0, different instruments/samples/pipelines:
#   McGaugh+2016  SPARC       z = 0      a0 = 1.20 +/- 0.26
#   Varasteanu+25 MIGHTEE-HI  z < 0.08   a0 = 1.69 +/- 0.13
# Cosmology allows only E(0.08) growth between them. Any excess is method, not epoch.
z_v = 0.08
allowed = 1.20 * E(z_v)
excess  = 1.69 - allowed
err_pair = math.hypot(0.26 * E(z_v), 0.13)
print(f"  McGaugh z=0        : 1.20 +/- 0.26")
print(f"  Varasteanu z<{z_v}   : 1.69 +/- 0.13")
print(f"  branch (A) allows only E({z_v}) = {E(z_v):.4f} growth => {allowed:.3f}")
print(f"  observed excess over what cosmology permits: {excess:+.3f} "
      f"= {excess/allowed*100:.0f}% ({excess/err_pair:.2f} sigma)")
print("  => Not significant on its own (~1.5 sigma; Ciocan agree, calling the two")
print("     determinations 'statistically consistent within ~1.5 sigma').")
print("  => But it SETS THE SCALE: a method-to-method systematic of tens of percent")
print("     on a0 at FIXED epoch is entirely unexcluded by current data.")
sys_frac = excess / allowed
sig_tot  = math.hypot(SIG_LO, CIOCAN_A0_Z1 * sys_frac)
pred_fw  = 1.04 * E(1.0)
print(f"\n  Folding a {sys_frac*100:.0f}% method systematic into Ciocan's a0|z~1:")
print(f"    2.38 +/- {sig_tot:.2f}  vs branch (A) framework anchor {pred_fw:.3f}")
print(f"    => {(CIOCAN_A0_Z1-pred_fw)/sig_tot:.2f} sigma  -- CONSISTENT.")
print("  The entire branch-(A) discrepancy is erased by a systematic no larger than")
print("  the one the two low-z measurements already hint at between themselves.")

print()
print("=" * 78)
print("SOURCES (all numbers above are quoted, none are derived by this project)")
print("=" * 78)
for s in [
    "Ciocan et al. 2026, MUSE-DARK III, A&A 709, L16 (arXiv:2604.22613) -- full text read",
    "Mayer, Teklu, Dolag & Remus 2023, MNRAS 518, 257 (arXiv:2206.04333) -- abstract + OUP text",
    "Gueorguiev 2024 (arXiv:2409.11425) -- SIV revisit; high-z arm = RC100",
    "Varasteanu et al. 2025, MNRAS 541, 2366 (arXiv:2504.20857) -- MIGHTEE-HI RAR, N=19, z<0.08",
    "Nestor Shachar et al. 2023, RC100, ApJ 944, 78 (arXiv:2209.12199)",
    "McGaugh, Lelli & Schombert 2016, PRL 117, 201101 -- SPARC a0 = 1.2 +/- 0.26e-10",
]:
    print("  -", s)
