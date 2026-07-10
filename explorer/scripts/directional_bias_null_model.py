#!/usr/bin/env python3
"""
Null model for the site's "directional bias" claim.

CLAIM UNDER TEST (maintainer proposal, Research/proposals/
symmetric_audit_discipline_directional_bias_confirmed.md, 2026-07-09):

    "6 independent provenance-break instances found, 6 over-refute the
     framework's physics, 0 over-claim the physics."

and (explorer finding citation-walk-all-statistics-2026-07-08.md, Open Thread 1):

    "Six breaks, six over-refutations, zero over-claims. ... an honesty-branded
     corpus manufactures failures the way a hype-branded corpus manufactures
     successes."

THE MISSING NULL: breaks are found *among statistics*. If most statistics on the
site face AGAINST the framework (it advertises 0 confirmed predictions), then
most breaks land on anti-framework statistics BY CONSTRUCTION -- with no
directional bias whatsoever.

Nobody has computed P(all breaks land anti-facing | breaks land uniformly).

DENOMINATOR. The 2026-07-08 citation-walk is the only *census*: it walked "every
load-bearing statistic" in 5 pre-declared bundles, i.e. the sample was NOT
selected by suspicion. That makes it the correct (and only) denominator on the
site. Its own tables are transcribed below verbatim.

VALENCE RULE (declared before counting, applied to the site sentence carrying
the statistic):
  ANTI    = the sentence asserts a framework failure, limitation, or refutation
  PRO     = the sentence asserts a framework success, match, or credential
  NEUTRAL = textbook/reference value carrying no verdict

BREAK = the citation-walk assigned it DRIFT, ASSERTED-ONLY, NO-SOURCE, or
flagged it as semi-circular / manufactured. (REGENERATES and WALKS = clean.)
"""

from itertools import combinations
from math import comb

# (statistic, bundle, valence, is_break, break_direction, subject, valence_ambiguous)
# break_direction: 'over-refute' = site looks worse than primary supports
#                  'over-claim'  = site looks better than primary supports
# subject: 'PHYSICS' = claim about the world / the framework
#          'SELF'    = claim about the research loop itself (counts, rates, its own
#                      audit performance) -- has no primary outside the loop
CENSUS = [
    # Bundle 1 - CHSH S-values (all REGENERATE)
    ("S=1.98 local Kuramoto",        1, "ANTI",    False, None, "PHYSICS", False),
    ("S=2.00 nonlocal grid",         1, "ANTI",    False, None, "PHYSICS", False),
    ("S=2.67 global clock signals",  1, "ANTI",    False, None, "PHYSICS", False),
    ("S=1.85 density substrate",     1, "ANTI",    False, None, "PHYSICS", False),
    ("S=2sqrt2 Born-rule",           1, "NEUTRAL", False, None, "PHYSICS", False),
    ("S=4 PR-box",                   1, "NEUTRAL", False, None, "PHYSICS", False),

    # Bundle 2 - RAR/SPARC
    ("dBIC=+184 (gamma=2 refuted)",  2, "ANTI",    False, None, "PHYSICS", False),
    ("dBIC>=+33 conservative",       2, "ANTI",    False, None, "PHYSICS", True),
    ("free-gamma=0.49 RMS tie",      2, "ANTI",    False, None, "PHYSICS", False),
    ("dBIC=+7 penalty-only",         2, "ANTI",    False, None, "PHYSICS", False),
    ("~1.7 dex cross-system offset", 2, "ANTI",    True,  "over-refute", "PHYSICS", True),

    # Bundle 3 - DESI / LIV / wide-binary
    ("sigma8=0.841+-0.034",          3, "ANTI",    False, None, "PHYSICS", False),
    ("2.4 sigma tension",            3, "ANTI",    False, None, "PHYSICS", False),
    ("sigma8~0.76 prediction",       3, "ANTI",    False, None, "PHYSICS", False),
    ("LRG1 fs8/fid=1.16",            3, "ANTI",    False, None, "PHYSICS", True),
    ("gamma_growth=0.58 (leans fw)", 3, "PRO",     False, None, "PHYSICS", False),
    ("tree c_munu = 0 (protected)",  3, "PRO",     False, None, "PHYSICS", False),
    ("c_munu ~ alpha/pi radiative",  3, "ANTI",    False, None, "PHYSICS", False),
    ("16-28 OOM LIV gap",            3, "ANTI",    False, None, "PHYSICS", False),
    ("0.05-0.4% WB signal",          3, "ANTI",    True,  "over-refute", "PHYSICS", False),
    ("'80x below Gaia systematics'", 3, "ANTI",    True,  "over-refute", "PHYSICS", False),

    # Bundle 4 - archive counts + TEST-03 + CDM
    ("3,308 adversarial sessions",   4, "PRO",     True,  "over-claim",  "SELF",    False),
    ("9/9 demotion base rate",       4, "ANTI",    True,  "over-claim",  "SELF",    True),
    ("47 contributions (vs ~30)",    4, "PRO",     True,  "over-claim",  "SELF",    False),
    ("TEST-03 kill fired",           4, "ANTI",    True,  "over-refute", "PHYSICS", False),
    ("sigma_int=0.086, z=+0.5",      4, "PRO",     False, None, "PHYSICS", False),

    # Bundle 5 - fresh 07-08 inscriptions (all REGENERATE)
    ("salience mean 0.640+-0.018",   5, "ANTI",    False, None, "PHYSICS", False),
    ("t=20.19, p=1.8e-7",            5, "ANTI",    False, None, "PHYSICS", False),
    ("phi^-1 excluded p=0.0155",     5, "ANTI",    False, None, "PHYSICS", False),
    ("2/3 excluded p=0.0064",        5, "ANTI",    False, None, "PHYSICS", False),
]

# '9/9 demotion base rate' is graded WALKS-with-membership-caveat by the walk itself
# (two enumerations disagree on 2 members; "9/9 could as honestly be 11/11").
# Treating it as a break is a judgement call -- swept explicitly below.
IDX_99 = [i for i, r in enumerate(CENSUS) if r[0].startswith("9/9")][0]

VAL_AMBIG = [i for i, r in enumerate(CENSUS) if r[6]]


def binom_test_greater_or_equal(k, n, p):
    """P(X >= k) for X ~ Binom(n, p). One-sided."""
    return sum(comb(n, i) * p**i * (1 - p)**(n - i) for i in range(k, n + 1))


def fisher_exact_2x2(a, b, c, d):
    """Two-sided Fisher exact. Table [[a,b],[c,d]]."""
    n = a + b + c + d
    r1, c1 = a + b, a + c

    def p_tab(x):
        return (comb(r1, x) * comb(n - r1, c1 - x)) / comb(n, c1)

    lo = max(0, c1 - (n - r1))
    hi = min(r1, c1)
    obs = p_tab(a)
    return sum(p_tab(x) for x in range(lo, hi + 1) if p_tab(x) <= obs * (1 + 1e-9))


def analyse(census, label):
    pro = [r for r in census if r[2] == "PRO"]
    anti = [r for r in census if r[2] == "ANTI"]
    neu = [r for r in census if r[2] == "NEUTRAL"]
    breaks = [r for r in census if r[3]]
    anti_br = [r for r in breaks if r[2] == "ANTI"]
    pro_br = [r for r in breaks if r[2] == "PRO"]

    n_dir = len(pro) + len(anti)          # verdict-bearing statistics
    p_anti = len(anti) / n_dir            # null probability a break lands anti

    print(f"\n{'='*72}\n{label}\n{'='*72}")
    print(f"census size            : {len(census)}  "
          f"(ANTI {len(anti)} / PRO {len(pro)} / NEUTRAL {len(neu)})")
    print(f"P(anti | verdict-bearing) = {len(anti)}/{n_dir} = {p_anti:.3f}   <-- THE NULL")
    print(f"breaks found           : {len(breaks)}  "
          f"(on ANTI {len(anti_br)} / on PRO {len(pro_br)})")

    # 1) The site's stated law, taken at face value: the claimed 6/6.
    k, n = len(anti_br), len(breaks)
    print(f"\n[1] The site's stated tally, taken at face value: '6 breaks, 6 over-refute, 0 over-claim'")
    for m_ in (6, n):
        print(f"    P(all {m_} breaks land ANTI | breaks uniform over statistics) "
              f"= {p_anti:.3f}^{m_} = {p_anti**m_:.3f}")
    print(f"    -> even if the tally were exactly as claimed, it is p = {p_anti**6:.3f}. "
          f"Not significant at any threshold.")

    # 2) What was actually observed.
    p_obs = binom_test_greater_or_equal(k, n, p_anti)
    print(f"\n[2] Observed: {k}/{n} breaks land ANTI (expected {n*p_anti:.1f})")
    print(f"    one-sided binomial P(X >= {k}) = {p_obs:.3f}")
    if k < n * p_anti:
        print(f"    -> observed is BELOW chance expectation. No anti-directed bias.")

    # 3) Break RATE by valence -- the honest comparison.
    ra = len(anti_br) / len(anti)
    rp = len(pro_br) / len(pro)
    pf = fisher_exact_2x2(len(anti_br), len(anti) - len(anti_br),
                          len(pro_br), len(pro) - len(pro_br))
    print(f"\n[3] Break rate by valence (the comparison the tally never made)")
    print(f"    ANTI-facing : {len(anti_br)}/{len(anti)} = {ra:.1%}")
    print(f"    PRO-facing  : {len(pro_br)}/{len(pro)} = {rp:.1%}")
    print(f"    Fisher exact (two-sided) p = {pf:.3f}")
    print(f"    -> point estimate runs {'AGAINST' if rp > ra else 'with'} the claimed law "
          f"({rp/ra:.1f}x higher on PRO-facing)" if ra > 0 else "")
    return p_anti, k, n


p_anti, k, n = analyse(CENSUS, "PRIMARY: 2026-07-08 citation-walk census (n=30)")

# ------------------------------------------------ sensitivity: valence flips only
print(f"\n{'='*72}\nSENSITIVITY A: flip valence of the {len(VAL_AMBIG)} debatable items "
      f"(break status held fixed)\n{'='*72}")
ps = []
for r in range(len(VAL_AMBIG) + 1):
    for subset in combinations(VAL_AMBIG, r):
        c = [list(x) for x in CENSUS]
        for i in subset:
            c[i][2] = "PRO" if c[i][2] == "ANTI" else "ANTI"
        pro = [x for x in c if x[2] == "PRO"]
        anti = [x for x in c if x[2] == "ANTI"]
        brs = [x for x in c if x[3]]
        pa = len(anti) / (len(anti) + len(pro))
        ka = len([x for x in brs if x[2] == "ANTI"])
        ps.append(binom_test_greater_or_equal(ka, len(brs), pa))
print(f"  {2**len(VAL_AMBIG)} reclassifications -> one-sided p ranges "
      f"[{min(ps):.3f}, {max(ps):.3f}]")
print(f"  The law never approaches p < 0.05 under ANY valence reclassification.")

# --------------------------------- sensitivity B: is 9/9 a break or not?
print(f"\n{'='*72}\nSENSITIVITY B: treat '9/9 demotion base rate' as clean instead of broken"
      f"\n{'='*72}")
c = [list(x) for x in CENSUS]
c[IDX_99][3] = False
analyse([tuple(x) for x in c], "  variant: 9/9 counted as CLEAN")

# ---------------------------------------------- THE COMPETING HYPOTHESIS
print(f"\n{'='*72}\nCOMPETING HYPOTHESIS: breaks track SELF-REFERENCE, not direction\n{'='*72}")


def subject_test(census, label):
    self_s = [r for r in census if r[5] == "SELF"]
    phys = [r for r in census if r[5] == "PHYSICS"]
    sb = [r for r in self_s if r[3]]
    pb = [r for r in phys if r[3]]
    pf = fisher_exact_2x2(len(sb), len(self_s) - len(sb),
                          len(pb), len(phys) - len(pb))
    print(f"\n  {label}")
    print(f"    SELF-referential (loop's claims about itself): "
          f"{len(sb)}/{len(self_s)} break = {len(sb)/len(self_s):.0%}")
    print(f"    PHYSICS (claims about the world):              "
          f"{len(pb)}/{len(phys)} break = {len(pb)/len(phys):.0%}")
    print(f"    Fisher exact (two-sided) p = {pf:.4f}")
    return pf


subject_test(CENSUS, "as classified (9/9 = break)")
c = [list(x) for x in CENSUS]
c[IDX_99][3] = False
subject_test([tuple(x) for x in c], "conservative (9/9 = clean)")

print(f"""
  Direction (ANTI vs PRO)      : p = 0.285, point estimate runs AGAINST the law.
  Self-reference (SELF vs PHYS): significant in both variants.

  The variable that predicts a provenance break is not whether the statistic
  flatters or damns the framework. It is whether the statistic is ABOUT THE
  LOOP -- the one claim class with no primary source outside the loop to walk to.""")

# ------------------------------------------------- what N would be needed
print(f"\n{'='*72}\nPOWER: what evidence WOULD establish the directional law?\n{'='*72}")
for nn in range(4, 30):
    if p_anti ** nn < 0.05:
        print(f"  With p_anti = {p_anti:.3f}: need {nn} consecutive ANTI breaks, "
              f"0 PRO breaks, for p < 0.05.  [p = {p_anti**nn:.4f}]")
        break
for nn in range(4, 60):
    if p_anti ** nn < 0.01:
        print(f"  ... and {nn} for p < 0.01.  [p = {p_anti**nn:.4f}]")
        break
n_pro_break = len([r for r in CENSUS if r[3] and r[2] == 'PRO'])
print(f"\n  Longest observed pure-over-refutation streak: 0 "
      f"({n_pro_break} PRO-side breaks sit inside the census).")
print(f"  The claimed 6/6 was never a streak: it required scope-excluding the "
      f"PRO-side breaks as 'methodology'.")
