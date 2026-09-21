"""TEST-04a DR2 pre-commitment: what can each branch-B reading fire on?

Arithmetic only (no data). Compares the adopted 2026-07-17 branch B
("fσ8 > 0.46 at >=3σ", read as obs > 0.46 + 3σ) with the clean reading on
the prediction itself ((obs - 0.418)/σ > 3), and with a 5-bin χ² over
Session 107's own bin-by-bin forecast. Truth is taken to be either ΛCDM or
the Session 107 prediction. σ_DR2 is an ASSUMPTION (DR2 unpublished);
DR1 delivered σ = 0.062 at LRG1 against Session 107's forecast 0.018 (3.4×).
"""
from math import erf, sqrt

def Phi(z):
    return 0.5 * (1 + erf(z / sqrt(2)))

PRED, LCDM = 0.418, 0.474
print("Single bin z=0.51.  pred 0.418, ΛCDM 0.474, separation 0.056")
print(f"{'σ_DR2':>6} {'sep/σ':>6} | {'compound thr':>12} {'P|ΛCDM':>7} | {'clean thr':>9} {'P|ΛCDM':>7} | {'P(A: obs<=0.46)|ΛCDM':>20}")
for s in (0.020, 0.025, 0.030, 0.036, 0.045, 0.062):
    tc = 0.46 + 3 * s          # compound: 0.46 is already pred + 3σ_forecast
    tk = PRED + 3 * s          # clean: 3σ on the prediction itself
    pc = 1 - Phi((tc - LCDM) / s)
    pk = 1 - Phi((tk - LCDM) / s)
    pa = Phi((0.46 - LCDM) / s)
    print(f"{s:6.3f} {0.056/s:6.2f} | {tc:12.3f} {pc:7.3f} | {tk:9.3f} {pk:7.3f} | {pa:20.3f}")
print("σ needed for the clean single-bin kill to fire with 50% prob under ΛCDM: 0.056/3 =", round(0.056/3, 4))
print("σ needed for 3σ separation at 80% power (z_a+z_b = 3+0.84):", round(0.056/3.84, 4))
print("DR1 check: clean statistic (0.550-0.418)/0.062 =", round((0.550-0.418)/0.062, 2), "σ; compound needs obs >", round(0.46+3*0.062, 3))

# Session 107 five-bin forecast: (z, ΛCDM, pred, forecast σ)
bins = [(0.51, .474, .418, .018), (0.71, .461, .414, .015), (0.93, .439, .402, .020),
        (0.90, .443, .404, .023), (1.19, .410, .382, .019)]
print("\nFive bins (Session 107 table), σ_i = forecast σ_i × inflation; bins treated independent (optimistic)")
for infl in (1.0, 2.0, 2.4, 3.4):
    d2 = sum(((p - l) / (s * infl)) ** 2 for _, l, p, s in bins)
    # expected Δχ² between models if one is true; significance ≈ sqrt(Δχ²)
    print(f"  inflation {infl:3.1f}: expected separation sqrt(Δχ²) = {sqrt(d2):.2f}σ")
