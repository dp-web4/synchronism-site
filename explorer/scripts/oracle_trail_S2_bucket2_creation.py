#!/usr/bin/env python3
"""S2 (explorer 2026-09-24, exploratory, single non-blind rater): Bucket-2 rows of Synchronism/PREDICTIONS.md
coded by the channel that CREATED the refutation. Registered in oracle_trail_raterB_ADDENDUM.md (d78fb4f)."""
from collections import Counter
# (row, channel, alt_channel_if_ambiguous, kind)
ROWS = [
 ("TEST-09 BTFR slope",              "EXEC-DATA",     None,            "EMPIRICAL"),
 ("TEST-10 dwarf f_DM",              "EXEC-DATA",     None,            "EMPIRICAL"),
 ("TEST-08 RAR environment",         "EXEC-DATA",     None,            "EMPIRICAL"),
 ("gamma=2/sqrt(Ncorr) wrong sign",  "EXEC-DATA",     None,            "EMPIRICAL"),
 ("Transfer rule => Navier-Stokes",  "ARGUMENT",      "EXEC-INTERNAL", "INTERNAL"),
 ("C(rho)=>MOND, gamma=2 dBIC+184",  "EXEC-DATA",     None,            "EMPIRICAL"),
 ("rho_crit(V) exponent",            "READ-MEAS",     None,            "EMPIRICAL"),  # created 07-02 by BTFR scaling argument; exec 08-27 fixed mechanism+magnitude
 ("cosmic interference 500 Mpc",     "READ-INTERNAL", None,            "INTERNAL"),
 ("80-orders unification",           "ARGUMENT",      "EXEC-INTERNAL", "INTERNAL"),
 ("TEST-04a DESI growth",            "READ-MEAS",     None,            "EMPIRICAL"),  # itself de-refuted 07-14 by READ-MEAS, row still sits in Bucket 2
 ("GW170817 Test-15",                "READ-INTERNAL", None,            "DEMOTION"),
 ("Hot-SC Tc 607 K",                 "READ-MEAS",     None,            "EMPIRICAL"),
 ("fractal coherence bridge",        "READ-MEAS",     "UNCLEAR",       "EMPIRICAL"),
 ("MRH cluster locality",            "READ-LIT",      None,            "DEMOTION"),
 ("locality is the axis (AeST)",     "READ-LIT",      None,            "DEMOTION"),
 ("inflow gravity spin-2",           "READ-MEAS",     None,            "EMPIRICAL"),
 ("a0 from Jeans 614x",              "EXEC-INTERNAL", None,            "INTERNAL"),
 ("entity criterion as novel",       "READ-LIT",      None,            "DEMOTION"),
 ("chemistry melting points",        "UNCLEAR",       "EXEC-DATA",     "EMPIRICAL"),
 ("critical exponents",              "UNCLEAR",       "READ-MEAS",     "EMPIRICAL"),
 ("Foundation 3 CA stage 1",         "EXEC-INTERNAL", None,            "INTERNAL"),
 ("velocity-anisotropic threshold",  "READ-MEAS",     None,            "EMPIRICAL"),
]
N = len(ROWS)
print(f"Bucket-2 rows: {N}")
print("kind:", dict(Counter(k for *_, k in ROWS)))
print("channel:", dict(Counter(c for _, c, _, _ in ROWS)))
print("\nchannel x kind:")
for (c, k), n in sorted(Counter((c, k) for _, c, _, k in ROWS).items()): print(f"  {c:14s} {k:10s} {n}")
emp = [r for r in ROWS if r[3] == "EMPIRICAL"]
bad = [r[0] for r in emp if r[1] not in ("EXEC-DATA", "READ-MEAS") and r[1] != "UNCLEAR"]
unc = [r[0] for r in emp if r[1] == "UNCLEAR"]
print(f"\nS2-P6 EMPIRICAL rows created by EXEC-DATA/READ-MEAS: violations {bad or 'none'}; UNCLEAR {unc}",
      "-> HELD" if not bad else "-> REFUTED")
NONEXEC = ("READ-LIT", "READ-INTERNAL", "ARGUMENT")
lo = sum(c in NONEXEC for _, c, a, _ in ROWS)
hi = sum(c in NONEXEC or (a in NONEXEC) for _, c, a, _ in ROWS)
lo2 = sum(c in NONEXEC and not (a and a.startswith("EXEC")) for _, c, a, _ in ROWS)
print(f"S2-P7 non-execution share >= 1/3: {lo2}/{N}={lo2/N:.0%} (ambiguous->exec) .. {lo}/{N}={lo/N:.0%} (ambiguous->primary)",
      "-> HELD" if lo2 / N >= 1/3 else ("-> FAILED" if lo / N < 1/3 else "-> INDETERMINATE"))
rd = sum(c in NONEXEC + ("READ-MEAS",) for _, c, _, _ in ROWS)
print(f"(not registered) any-READING share incl. READ-MEAS: {rd}/{N}={rd/N:.0%}; "
      f"EMPIRICAL via READ-MEAS {sum(r[1]=='READ-MEAS' for r in emp)}/{len(emp)}, via EXEC-DATA {sum(r[1]=='EXEC-DATA' for r in emp)}/{len(emp)}")
