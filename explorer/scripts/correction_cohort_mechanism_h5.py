#!/usr/bin/env python3
"""Cohort addendum A1 / H5 (exploratory, registered a88353a after primary results): mechanism x err_dir."""
import json, math, pathlib, sys
D = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "work/cohort-2026-09-17")
A = {}
for f in sorted(D.glob("outcome_raterA_part*.jsonl")):
    for l in open(f):
        r = json.loads(l); A[r["id"]] = r
M = {json.loads(l)["id"]: json.loads(l) for l in open(D / "mechanism_coded.jsonl")}
tab = {}
for i, m in M.items():
    tab.setdefault((m["mechanism"], A[i]["err_dir"]), []).append(i)
for k in sorted(tab):
    print(k, len(tab[k]), sorted(tab[k]))
a = len(tab.get(("PROPAGATION", "TOO_POSITIVE"), []))
b = len(tab.get(("PROPAGATION", "TOO_NEGATIVE"), []))
c = len(tab.get(("ARGUMENT", "TOO_POSITIVE"), []))
d = len(tab.get(("ARGUMENT", "TOO_NEGATIVE"), []))
n1, n2, m1, n = a + b, c + d, a + c, a + b + c + d
p = lambda x: math.comb(n1, x) * math.comb(n2, m1 - x) / math.comb(n, m1)
p_one = sum(p(x) for x in range(a, min(n1, m1) + 1))
orr = ((a + .5) * (d + .5)) / ((b + .5) * (c + .5))
print(f"\n2x2 directional only: PROP (TOO_POS {a}, TOO_NEG {b}); ARG (TOO_POS {c}, TOO_NEG {d})")
print(f"odds ratio (Haldane) = {orr:.2f}; one-sided Fisher p (PROP enriched for TOO_POSITIVE) = {p_one:.3f}")
print("prediction: OR > 1, one-sided p < 0.10")
