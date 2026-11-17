#!/usr/bin/env python3
"""PREREG 1a4d020, parent leg: per-star DR4 flag rate r(F) among DR3-clean stars matched to S1 (same d, G, s, mass),
under the 11-09 companion model, and how well a large parent sample pins F given the unknown single-star false-flag rate eps.
Parent cuts: RUWE<1.25 + resolved + IPD + CMD (no RV, no speckle). argv: gaia_csv chae_csv [variant]."""
import sys
import numpy as np
import wb_estimators as W
sys.argv += [] if len(sys.argv) > 3 else ["base"]
import wb_dr4_companion_reading as R   # noqa: E402  (reads VARIANT from argv[3])
H = R.H

S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", "v4")
rng = np.random.default_rng(2117)
surv, pure, c = [], [], []
for s in S:
    s["G"] = 4.8 + 10 * np.log10(1.0 / (0.5 * s["M"])) + 5 * np.log10(s["d"] / 10)
    n = 20000
    o = R.forward_dr4(rng, np.full(n, 0.5 * s["M"]), np.full(n, s["d"]), np.full(n, s["G"]), np.full(n, s["s"]), q_mode=R.QMODE)
    k, _ = H.cuts(o)
    surv.append(k.mean())
    pure.append((o["ruwe_plain"] < 1.25).mean())
    c.append(o["flag"][k].mean())
surv, pure, c = map(np.array, (surv, pure, c))
print("variant %s: DR3 survival of companion hosts median %.3f; DR4 flag rate among survivors median %.3f [%.2f-%.2f]" % (R.VARIANT, np.median(surv), np.median(c), c.min(), c.max()))
print(" per-star DR4 flag rate r(F, eps) = F*surv*c/(F*surv+(1-F)*pure) + eps*(1-F)*pure/(...)  (averaged over S1-matched stars)")
Fs = (0.1, 0.2, 0.3, 0.45, 0.5)
for eps in (0.0, 0.01, 0.03, 0.05):
    r = []
    for F in Fs:
        hostfrac = F * surv / (F * surv + (1 - F) * pure)
        r.append(np.mean(hostfrac * c + (1 - hostfrac) * eps))
    print("  eps %.2f: " % eps + "  ".join("F=%.2f r=%.4f" % (F, x) for F, x in zip(Fs, r)))
for N in (2000, 20000):
    print(" binomial sigma on r at N=%d stars and r=0.05: %.4f" % (N, np.sqrt(0.05 * 0.95 / N)))
