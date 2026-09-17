#!/usr/bin/env python3
"""Addendum A2 (registered f35ee24 before building): the maintainer's H-a as a two-cohort comparison.
May cohort T0 2026-05-01 (8022b0e) -> 2026-06-12 (7d716ab); Aug cohort T0 2026-08-01 (fae5536) -> 2026-09-17 (24b9c87).
Both: rater-A T0 codes, rater-A outcome codes, deviation D1 applied, verdict units only.
Prediction: TOO_NEGATIVE share of directional corrections lower in May; Fisher one-sided p < 0.10."""
import json
import math
import pathlib
from collections import Counter

W = pathlib.Path(__file__).resolve().parent.parent / "work"


def cohort(name):
    D = W / name
    T = {}
    for f in sorted(D.glob("t0_raterA_part*.jsonl")):
        for l in open(f):
            r = json.loads(l); T[r["id"]] = r
    O = {}
    for f in sorted(D.glob("outcome_raterA_part*.jsonl")):
        for l in open(f):
            r = json.loads(l); O[r["id"]] = r
    flag = json.load(open(D / "d1_neighbourhood.json"))
    for i, r in O.items():
        if flag.get(i) == "NEIGHBOURHOOD_SAME" and r["outcome"] == "CORRECTED":
            r["outcome"], r["err_dir"] = "UNCHANGED", "NA"
    ids = [i for i in T if i in O and T[i]["valence"] in ("ANTI", "PRO", "NEUTRAL")]
    return T, O, ids


def fisher_one_sided_less(a, b, c, d):
    """P(X <= a) for table [[a,b],[c,d]] with fixed margins (row 1 has fewer 'successes')."""
    n1, n2, m1, n = a + b, c + d, a + c, a + b + c + d
    p = lambda x: math.comb(n1, x) * math.comb(n2, m1 - x) / math.comb(n, m1)
    return sum(p(x) for x in range(max(0, m1 - n2), a + 1))


res = {}
for name in ("cohort-2026-05-01", "cohort-2026-09-17"):
    T, O, ids = cohort(name)
    val = Counter(T[i]["valence"] for i in ids)
    corr = [i for i in ids if O[i]["outcome"] == "CORRECTED"]
    ed = Counter(O[i]["err_dir"] for i in corr)
    vx = Counter((T[i]["valence"], O[i]["err_dir"]) for i in corr)
    oc = Counter(O[i]["outcome"] for i in ids)
    res[name] = (ed["TOO_NEGATIVE"], ed["TOO_POSITIVE"])
    print(f"{name}: verdict units {len(ids)} {dict(val)} | ANTI/(ANTI+PRO) = {val['ANTI']/(val['ANTI']+val['PRO']):.2f}")
    print(f"   outcomes {dict(oc)}")
    print(f"   corrected {len(corr)} ({len(corr)/len(ids):.3f} per verdict unit); err_dir {dict(ed)}")
    print(f"   valence x err_dir {dict(vx)}")
(mn, mp), (an, ap) = res["cohort-2026-05-01"], res["cohort-2026-09-17"]
print(f"\nTOO_NEGATIVE share: May {mn}/{mn+mp} = {mn/max(mn+mp,1):.2f}; Aug {an}/{an+ap} = {an/max(an+ap,1):.2f}")
print(f"Fisher one-sided P(May share this low or lower | margins) = {fisher_one_sided_less(mn, mp, an, ap):.3f}")
print("prediction (A2): May lower, p < 0.10")
