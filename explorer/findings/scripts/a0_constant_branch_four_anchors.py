#!/usr/bin/env python3
"""
Topic: a0-lambda-branch-four-anchor-symmetry (seeded maintainer 2026-09-05).
Apply the SAME four-anchor table the site gives branch (A) [a0(z) = cH(z)/2pi] to branch (B)
[a0 = const, the c*sqrt(Lambda) reading of Milgrom's coincidence] against Ciocan+2026's
a0(z~1) = 2.38 (+0.12/-0.10, 95% CI) x1e-10 m/s^2.

Two error conventions are reported because the site's row 4 table uses 0.10 as if it were 1 sigma
while Ciocan quotes 95% intervals; the site ALSO folds the anchor's own error into the sigma
(that is how McGaugh's 2.15 vs 2.38 becomes "+0.5 sigma": sqrt((0.26*1.79)^2 + 0.10^2) = 0.48).
Both conventions are shown for both branches so the comparison is like-for-like.
"""
import numpy as np

CIOCAN = 2.38
# anchors: (label, a0(0) value, 1-sigma error used by the site; None = no error quoted)
anchors = [
    ("Ciocan fitted intercept", 1.00, 0.02),
    ("framework cH0/2pi",       1.04, 0.0),
    ("McGaugh+2016 SPARC",      1.20, 0.26),
    ("Varasteanu+2025 MIGHTEE", 1.69, 0.13),
]
Om, OL = 0.315, 0.685
E1 = np.sqrt(Om * 8 + OL)                      # E(z=1)
print(f"E(z=1) = H(1)/H0 = {E1:.3f}   (site's branch-A ratio 1.79)\n")

for sig_c, tag in ((0.10, "site convention: Ciocan +/-0.10 as 1 sigma"),
                   (0.10 / 1.96, "Ciocan 95% CI -> 1 sigma = 0.051")):
    print(f"=== {tag} ===")
    print(f"{'anchor':26s} {'a0(0)':>6s} | {'A: cH(z)/2pi':>12s} {'sigma':>7s} | {'B: const':>9s} {'sigma':>7s}")
    for lab, a, ea in anchors:
        # branch A
        predA = a * E1
        sA = np.hypot(ea * E1, sig_c)
        zA = (CIOCAN - predA) / sA
        # branch B
        predB = a
        sB = np.hypot(ea, sig_c)
        zB = (CIOCAN - predB) / sB
        print(f"{lab:26s} {a:6.2f} | {predA:12.2f} {zA:+7.1f} | {predB:9.2f} {zB:+7.1f}")
    print()

# What a0 systematic would be needed to make constant a0 consistent at 2 sigma with the McGaugh anchor?
# Deep-MOND: g_obs^2 = a0 g_bar  =>  a0_inferred scales as 1/M_bar. Ciocan themselves flag a
# ~0.2 dex disk-mass systematic from unaccounted molecular gas at z~1.
for dex in (0.1, 0.2, 0.3):
    print(f"Ciocan a0 if baryonic mass under-estimated by {dex:.1f} dex: {CIOCAN/10**dex:.2f}")
