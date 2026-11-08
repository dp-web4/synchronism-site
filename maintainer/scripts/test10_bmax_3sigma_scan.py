#!/usr/bin/env python3
"""
TEST-10 as a class bound: the largest boost cap B_max excluded at 3 sigma with nuisances propagated.

Why: the site's badge reads "B_max <~ 14 excluded at every convention". That 14 is a rounded sample maximum (NGC 2915,
B = 13.75 at face value, one disc of 153), with no significance, and a sample maximum is biased high. Simulated-visitor
graduate persona, 2026-11-08 (Unanswered Question 2). This scan reuses explorer 2026-10-29's Statistic B
(explorer/scripts/test10_full_error_propagation.py; PREREG d38045c): one-sided all-radii residuals above the most
permissive capped model, profiled over D, i, Upsilon (0.1 dex) and optionally gas (0.1 dex) under Gaussian priors.

PREDICTIONS, written before running (2026-11-08, maintainer):
 P1. Identity: chi2 at 6.39 reproduces the 10-29 table for NGC 2915 / NGC 3741 / UGC 06667 (14.2 / 9.5 / 35.1, gas on).
 P2. With gas on, the largest cap with any disc at chi2 >= 9 is 7-10, well below 14. (The explorer's 2.3 % lower quantile
     for NGC 2915 and NGC 3741 is ~10.4-10.9 without gas.)
 P3. The binding disc at that largest cap is UGC 06667 or NGC 2915, not NGC 3741 (its gas census absorbs the excess).
 P4. Under a family-wise threshold across 153 discs (one-sided p = 0.00135/153, chi2 >= ~18.4), the bound falls to
     about 6-8, still above 3.17 and 5.39.
 P5. Doubling the gas prior width to 0.2 dex lowers the 3-sigma cap by at most ~1.5.

What this does NOT do: model asymmetric drift, beam smearing or non-circular motions, or treat chi2 as exactly
chi2-distributed (one-sided residuals plus profiled nuisances). It is a bound under SPARC's quoted errors.
"""
import importlib.util
import pathlib
import sys

import numpy as np

HERE = pathlib.Path(__file__).resolve()
spec = importlib.util.spec_from_file_location(
    "t10", HERE.parents[2] / "explorer" / "scripts" / "test10_full_error_propagation.py")
t10 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(t10)

CAPS = [3.175, 5.389, 6.39, 7, 8, 9, 10, 11, 12, 13, 14, 16, 20]
FWER = 18.4


def sample():
    meta, mm = t10.load_meta(), t10.load_mm()
    rows = []
    for name, arr in mm.items():
        m = meta.get(name)
        if m is None or m["q"] > 2 or m["inc"] < 30:
            continue
        o = arr[-3:]
        if not ((o[:, 1] > 0) & (o[:, 2] > 0)).any():
            continue
        if (t10.vbar2(o[:, 3], o[:, 4], o[:, 5], t10.UPS0) <= 0).any():
            continue
        rows.append((name, arr[arr[:, 2] > 0], m))
    return rows


def scan(rows, gas, sig_gas):
    t10.SIG_LGAS = sig_gas
    out = {}
    for cap in CAPS:
        t10.BMAX = cap
        chis = sorted(((float(t10.stat_b(arr, m, gas=gas)[0]), name) for name, arr, m in rows), reverse=True)
        out[cap] = chis
        print(f"  B_max {cap:7.3f}  discs chi2>=4: {sum(c >= 4 for c, _ in chis):3d}  >=9: {sum(c >= 9 for c, _ in chis):3d}"
              f"  >={FWER}: {sum(c >= FWER for c, _ in chis):3d}  top: "
              + ", ".join(f"{n} {c:.1f}" for c, n in chis[:4]), flush=True)
    return out


def edge(out, thr):
    good = [cap for cap in CAPS if out[cap][0][0] >= thr]
    return max(good) if good else None


def main():
    rows = sample()
    print(f"sample {len(rows)} discs")
    print("identity control at 6.39, gas on (10-29 table: NGC2915 14.2, NGC3741 9.5, UGC06667 35.1):")
    t10.BMAX, t10.SIG_LGAS = 6.39, 0.1
    for name, arr, m in rows:
        if name in ("NGC2915", "NGC3741", "UGC06667"):
            print(f"  {name} {t10.stat_b(arr, m, gas=True)[0]:.1f}")
    for label, gas, sg in [("D, i, Ups; no gas nuisance", False, 0.1), ("D, i, Ups, gas 0.1 dex", True, 0.1), ("D, i, Ups, gas 0.2 dex", True, 0.2)]:
        print(f"\n{label}:")
        out = scan(rows, gas, sg)
        print(f"  largest scanned cap with a disc at chi2>=9: {edge(out, 9)}; family-wise chi2>={FWER}: {edge(out, FWER)}")


if __name__ == "__main__":
    sys.exit(main())
