#!/usr/bin/env python3
"""H-oracle pilot, step 3: analysis per oracle_trail_PREREG.md. Written before either rater file existed."""
import json, pathlib
from collections import Counter

D = pathlib.Path("/home/dp/ai-workspace/synchronism-site/maintainer/scripts"); DB = pathlib.Path(__file__).parent
def load(n): return {r["id"]: r for r in (json.loads(l) for l in open(D / n) if l.strip())}
A, B = load("oracle_trail_codes_raterA.jsonl"), {r["id"]: r for r in (json.loads(l) for l in open(DB / "oracle_trail_codes_raterB.jsonl") if l.strip())}
U = {r["id"]: r for r in (json.loads(l) for l in open(D / "oracle_trail_units.jsonl"))}
ids = sorted(U)
assert set(A) == set(B) == set(ids), "rater files incomplete"

def kappa(pairs):
    n = len(pairs)
    if not n: return float("nan")
    po = sum(a == b for a, b in pairs) / n
    ca, cb = Counter(a for a, _ in pairs), Counter(b for _, b in pairs)
    pe = sum(ca[k] * cb[k] for k in set(ca) | set(cb)) / n / n
    return (po - pe) / (1 - pe) if pe < 1 else float("nan")

q1 = [(A[i]["is_correction"], B[i]["is_correction"]) for i in ids]
print(f"units {len(ids)}; Q1 yes A={sum(a=='yes' for a,_ in q1)} B={sum(b=='yes' for _,b in q1)}; "
      f"agree {sum(a==b for a,b in q1)}/{len(ids)}; kappa {kappa(q1):.2f}")
both = [i for i in ids if A[i]["is_correction"] == B[i]["is_correction"] == "yes"]
print(f"both-yes units: {len(both)}")
for f in ("caught_by", "effect", "direction"):
    pr = [(A[i][f], B[i][f]) for i in both]
    print(f"  {f:10s} agree {sum(a==b for a,b in pr)}/{len(pr)}  kappa {kappa(pr):.2f}")

def agreed(i, f): return A[i][f] if A[i][f] == B[i][f] else None

print("\nAgreed effect x agreed caught_by (both-yes units, both fields agreed):")
tab = Counter((agreed(i, "caught_by"), agreed(i, "effect")) for i in both
              if agreed(i, "caught_by") and agreed(i, "effect"))
cbs = ["EXEC-DATA", "EXEC-INTERNAL", "READ-MEAS", "READ-LIT", "READ-INTERNAL", "ARGUMENT", "UNCLEAR"]
effs = ["VERDICT", "SCOPE", "CONSISTENCY", "WORDING"]
print(f"{'':15s}" + "".join(f"{e:>12s}" for e in effs))
for c in cbs:
    print(f"{c:15s}" + "".join(f"{tab[(c, e)]:>12d}" for e in effs))

V = [i for i in both if agreed(i, "effect") == "VERDICT"]
Vc = [(i, agreed(i, "caught_by")) for i in V]
print("\nAgreed-VERDICT units:")
for i, c in Vc:
    print(f"  {i} caught_by A={A[i]['caught_by']} B={B[i]['caught_by']} | A: {A[i]['note']} | B: {B[i]['note']}")

p1 = [i for i, c in Vc if c in ("READ-INTERNAL", "ARGUMENT")]
p2 = [i for i, c in Vc if c and c != "EXEC-DATA"]
p3 = [i for i, c in Vc if c == "EXEC-INTERNAL"]
kcb = kappa([(A[i]["caught_by"], B[i]["caught_by"]) for i in both])
dirs = [agreed(i, "direction") for i in both if agreed(i, "direction")]
p5 = sum(d == "OVERREFUTATION-FIX" for d in dirs) / len(dirs) if dirs else float("nan")
print("\nP1 (0 agreed VERDICT from READ-INTERNAL/ARGUMENT):", "HELD" if not p1 else f"REFUTED by {p1}")
print("P2 (>=1 agreed VERDICT not EXEC-DATA):", "HELD " + str(p2) if p2 else "FAILED")
print("P3 (>=1 agreed VERDICT from EXEC-INTERNAL):", "HELD " + str(p3) if p3 else "FAILED")
print(f"P4 (kappa caught_by >= 0.40): {kcb:.2f}", "HELD" if kcb >= 0.40 else "FAILED")
print(f"P5 (OVERREFUTATION-FIX >= 25% of agreed direction): {p5:.0%} of {len(dirs)}", "HELD" if p5 >= 0.25 else "FAILED")

print("\nVERDICT units where raters disagree on caught_by, or only one rater says VERDICT (reported, not in primary):")
for i in both:
    ea, eb = A[i]["effect"], B[i]["effect"]
    if ("VERDICT" in (ea, eb)) and not (ea == eb == "VERDICT" and A[i]["caught_by"] == B[i]["caught_by"]):
        print(f"  {i} effect A={ea} B={eb}; caught_by A={A[i]['caught_by']} B={B[i]['caught_by']} | A: {A[i]['note']} | B: {B[i]['note']}")
