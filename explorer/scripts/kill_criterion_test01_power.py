#!/usr/bin/env python3
"""TEST-01's registered criterion is a null-ACCEPTANCE at 2 sigma with no
equivalence margin. How large a sample would it need to mean what it says?

Post-hoc extension of class A from kill_criterion_audit_PREREG.md: rule A as
written requires a numeric central value in the prediction field, and TEST-01's
prediction ("residuals correlate with local galaxy density") states none, so by
the letter of the pre-registration this row is class D. Reported as exploratory.
"""
import math
N = 141                       # SPARC galaxies with Cosmicflows-4 environment, 2026-07-14 run
lever = 1e-4                  # the framework's OWN predicted r^2 (ledger.ts: <=2e-3 dex => r^2 ~ 1e-4)
se_r = 1 / math.sqrt(N - 3)
bound_r2 = (2 * se_r) ** 2
need_N = 4 / lever + 3
print(f"N = {N};  SE(r) = 1/sqrt(N-3) = {se_r:.4f}")
print(f"strongest 2-sigma upper bound on r:  {2*se_r:.3f}   -> on r^2: {bound_r2:.4f}")
print(f"framework's own predicted lever:     r^2 ~ {lever:.0e}  (r ~ {math.sqrt(lever):.3f})")
print(f"achievable bound is {bound_r2/lever:.0f}x ABOVE the effect it must exclude")
print(f"N needed to exclude r^2 = {lever:.0e} at 2 sigma: {need_N:,.0f}   ({need_N/N:,.0f}x the sample used)")
print()
print("The executed run reported r^2 = 0.0001, p = 0.89 and the criterion was recorded as met.")
print("p = 0.89 is 'no evidence of correlation', not 'correlation excluded at 2 sigma'.")
print("The site already records that the measured r^2 is CONSISTENT with the equation's own")
print("lever (ledger.ts). This script is the power statement standing behind that sentence.")
