#!/usr/bin/env python3
"""
Correction-hazard cohort, step 3: pre-registered analysis (PREREG e3282c4). Written before any outcome code was read.

Primary: T0 codes from rater A (Claude, fresh context); outcome from outcome rater A (Claude, fresh context).
Sensitivity: T0 from rater B (gemma4:e4b); both-agree T0 subset; outcome from the kappa rater where it exists.
"""
import json
import math
import pathlib
import sys
from collections import Counter

D = pathlib.Path(next((a for a in sys.argv[1:] if not a.startswith("--")), "work/cohort-2026-09-17"))


def load(pattern):
    out = {}
    for f in sorted(D.glob(pattern)):
        for line in open(f):
            line = line.strip()
            if line:
                r = json.loads(line)
                out[r["id"]] = r
    return out


def kappa(pairs):
    pairs = [(a, b) for a, b in pairs if a is not None and b is not None]
    n = len(pairs)
    if n == 0:
        return float("nan"), 0
    po = sum(a == b for a, b in pairs) / n
    ca, cb = Counter(a for a, _ in pairs), Counter(b for _, b in pairs)
    pe = sum(ca[k] * cb[k] for k in set(ca) | set(cb)) / n / n
    return (po - pe) / (1 - pe) if pe < 1 else float("nan"), n


def fisher_two_sided(a, b, c, d):
    """2x2 [[a,b],[c,d]] exact two-sided p (sum of tables with prob <= observed)."""
    n1, n2, m1, n = a + b, c + d, a + c, a + b + c + d
    def p(x):
        return math.comb(n1, x) * math.comb(n2, m1 - x) / math.comb(n, m1)
    lo, hi = max(0, m1 - n2), min(n1, m1)
    p0 = p(a)
    return min(1.0, sum(p(x) for x in range(lo, hi + 1) if p(x) <= p0 * (1 + 1e-9)))


def binom_upper(k, n, p):
    return sum(math.comb(n, i) * p ** i * (1 - p) ** (n - i) for i in range(k, n + 1))


def rr_ci(a, n1, c, n2):
    """risk ratio with Haldane-corrected log CI"""
    a_, c_ = a + 0.5, c + 0.5
    n1_, n2_ = n1 + 1, n2 + 1
    rr = (a_ / n1_) / (c_ / n2_)
    se = math.sqrt(1 / a_ - 1 / n1_ + 1 / c_ - 1 / n2_)
    return rr, rr * math.exp(-1.96 * se), rr * math.exp(1.96 * se)


def report(title, t0, oc):
    ids = [i for i in t0 if i in oc and t0[i].get("valence") in ("ANTI", "PRO", "NEUTRAL")]
    print(f"\n=== {title}: verdict units with outcome = {len(ids)} ===")
    print("valence:", dict(Counter(t0[i]["valence"] for i in ids)))
    print("outcome:", dict(Counter(oc[i]["outcome"] for i in ids)))
    corr = [i for i in ids if oc[i]["outcome"] == "CORRECTED"]
    print("CORRECTED err_dir:", dict(Counter(oc[i].get("err_dir") for i in corr)))
    print("valence x err_dir among CORRECTED:",
          dict(Counter((t0[i]["valence"], oc[i].get("err_dir")) for i in corr)))

    # H1 primary: hazard(TOO_NEGATIVE | ANTI) vs hazard(TOO_POSITIVE | PRO)
    anti = [i for i in ids if t0[i]["valence"] == "ANTI"]
    pro = [i for i in ids if t0[i]["valence"] == "PRO"]
    a = sum(oc[i]["outcome"] == "CORRECTED" and oc[i].get("err_dir") == "TOO_NEGATIVE" for i in anti)
    c = sum(oc[i]["outcome"] == "CORRECTED" and oc[i].get("err_dir") == "TOO_POSITIVE" for i in pro)
    rr, lo, hi = rr_ci(a, len(anti), c, len(pro))
    pf = fisher_two_sided(a, len(anti) - a, c, len(pro) - c)
    print(f"H1 primary: TOO_NEG|ANTI {a}/{len(anti)} = {a/max(len(anti),1):.3f}; TOO_POS|PRO {c}/{len(pro)} = "
          f"{c/max(len(pro),1):.3f}; RR {rr:.2f} [{lo:.2f}, {hi:.2f}] Fisher p = {pf:.3f}")
    # any-correction hazard by valence
    ca = sum(oc[i]["outcome"] == "CORRECTED" for i in anti)
    cp = sum(oc[i]["outcome"] == "CORRECTED" for i in pro)
    rr2, lo2, hi2 = rr_ci(ca, len(anti), cp, len(pro))
    print(f"   any-correction: ANTI {ca}/{len(anti)}, PRO {cp}/{len(pro)}; RR {rr2:.2f} [{lo2:.2f}, {hi2:.2f}] "
          f"Fisher p = {fisher_two_sided(ca, len(anti)-ca, cp, len(pro)-cp):.3f}")
    # H1 secondary: binomial among directional corrections vs ANTI share
    dirn = [i for i in corr if oc[i].get("err_dir") in ("TOO_NEGATIVE", "TOO_POSITIVE")]
    k = sum(oc[i]["err_dir"] == "TOO_NEGATIVE" for i in dirn)
    p_anti = len(anti) / max(len(anti) + len(pro), 1)
    print(f"H1 secondary: TOO_NEGATIVE {k}/{len(dirn)} directional corrections; base rate p_anti = {p_anti:.3f}; "
          f"expected {p_anti*len(dirn):.1f}; one-sided P(>= k) = {binom_upper(k, len(dirn), p_anti):.3f}")

    def hazard(pred_a, pred_b, la, lb):
        A = [i for i in ids if pred_a(t0[i])]
        B = [i for i in ids if pred_b(t0[i])]
        xa = sum(oc[i]["outcome"] == "CORRECTED" for i in A)
        xb = sum(oc[i]["outcome"] == "CORRECTED" for i in B)
        r, l, h = rr_ci(xa, len(A), xb, len(B))
        print(f"   {la} {xa}/{len(A)} = {xa/max(len(A),1):.3f} vs {lb} {xb}/{len(B)} = {xb/max(len(B),1):.3f}; "
              f"RR {r:.2f} [{l:.2f}, {h:.2f}] Fisher p = {fisher_two_sided(xa, len(A)-xa, xb, len(B)-xb):.3f}")

    print("H2 reflexivity:")
    hazard(lambda t: t.get("reflex") == "SELF", lambda t: t.get("reflex") == "PHYSICS", "SELF", "PHYSICS")
    print("H3 form:")
    hazard(lambda t: t.get("form") in ("CLASS", "MODAL"), lambda t: t.get("form") == "NUMERIC", "CLASS|MODAL", "NUMERIC")
    changed = [i for i in ids if oc[i]["outcome"] in ("UPDATED", "CORRECTED")]
    upd = sum(oc[i]["outcome"] == "UPDATED" for i in changed)
    print(f"H4: UPDATED {upd}/{len(changed)} of claim-changed units = {upd/max(len(changed),1):.2f} (prediction >= 0.25)")
    return corr


def apply_d1(oc):
    """Deviation D1 (logged in the finding): a unit present verbatim at HEAD whose +-900-char neighbourhood is
    byte-identical at T0 and HEAD cannot have been corrected after T0; any correction note there predates T0.
    Flagged by outcome rater A part 1; enforces the registered T0->HEAD window. Applied identically to every rater."""
    flag = json.load(open(D / "d1_neighbourhood.json"))
    out = {}
    for i, r in oc.items():
        r = dict(r)
        if flag.get(i) == "NEIGHBOURHOOD_SAME" and r.get("outcome") == "CORRECTED":
            r["outcome"], r["err_dir"], r["d1"] = "UNCHANGED", "NA", True
        out[i] = r
    return out


def main():
    t0A, t0B = load("t0_raterA_part*.jsonl"), load("t0_raterB.jsonl")
    ocA, ocA2, ocB = load("outcome_raterA_part*.jsonl"), load("outcome_raterA2_kappa.jsonl"), load("outcome_raterB.jsonl")
    if "--d1" in sys.argv:
        n = sum(1 for i, r in ocA.items() if r.get("outcome") == "CORRECTED")
        ocA, ocA2, ocB = apply_d1(ocA), apply_d1(ocA2), apply_d1(ocB)
        print(f"D1 applied: rater A CORRECTED {n} -> {sum(1 for r in ocA.values() if r['outcome'] == 'CORRECTED')}")
    print(f"T0 rater A {len(t0A)}, rater B {len(t0B)}; outcome A {len(ocA)}, A2 {len(ocA2)}, B {len(ocB)}")
    for code in ("valence", "reflex", "form"):
        k, n = kappa([(t0A[i].get(code), t0B[i].get(code)) for i in t0A if i in t0B])
        print(f"kappa T0 {code} A-vs-B: {k:.2f} (n={n})")
    k, n = kappa([(ocA[i]["outcome"], ocA2[i]["outcome"]) for i in ocA2 if i in ocA])
    print(f"kappa outcome A-vs-A2: {k:.2f} (n={n})")
    k, n = kappa([(ocA[i]["outcome"] == "CORRECTED", ocA2[i]["outcome"] == "CORRECTED") for i in ocA2 if i in ocA])
    print(f"kappa CORRECTED-vs-not A-vs-A2: {k:.2f} (n={n})")
    k, n = kappa([(ocA[i].get("err_dir"), ocA2[i].get("err_dir")) for i in ocA2 if i in ocA
                  and ocA[i]["outcome"] == "CORRECTED" and ocA2[i]["outcome"] == "CORRECTED"])
    print(f"kappa err_dir on both-CORRECTED: {k:.2f} (n={n})")
    if ocB:
        k, n = kappa([(ocA[i]["outcome"] == "CORRECTED", ocB[i].get("outcome") == "CORRECTED") for i in ocB if i in ocA])
        print(f"kappa CORRECTED-vs-not A-vs-gemma: {k:.2f} (n={n})")

    corr = report("PRIMARY (T0 A, outcome A)", t0A, ocA)
    if t0B:
        report("SENSITIVITY (T0 gemma, outcome A)", {i: r for i, r in t0B.items() if "error" not in r}, ocA)
        agree = {i: t0A[i] for i in t0A if i in t0B and t0A[i].get("valence") == t0B[i].get("valence")}
        report("SENSITIVITY (T0 A==B valence subset, outcome A)", agree, ocA)
    mixed = dict(ocA)
    mixed.update(ocA2)
    report("SENSITIVITY (T0 A, outcome A2 where coded)", t0A, mixed)
    print("\nCORRECTED units (primary):")
    for i in sorted(corr):
        print(f"  {i} {t0A[i]['valence']:7s} {t0A[i].get('reflex'):7s} {t0A[i].get('form'):9s} "
              f"{ocA[i].get('err_dir'):14s} {ocA[i].get('confidence')} | {ocA[i].get('why')}")


if __name__ == "__main__":
    main()
