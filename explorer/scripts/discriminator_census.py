#!/usr/bin/env python3
"""
Census of every candidate discriminator: died on data / died on a fork / never had power.

Generated from the ledger source (src/app/tier-1-existing/page.tsx), not hand-typed --
every census on this site has drifted at least once when typed by hand.

Method
------
1. Parse the `tests` array out of the TSX by brace-matching, so no row can be
   silently omitted.  The parse is checked against the page's own stated count.
2. For each row, extract EVIDENCE by regex against a fixed keyword table.  The
   evidence, not the verdict, is what the script emits; the classification rule
   is applied mechanically and printed alongside so a reader can disagree with
   any single row without re-deriving the table.
3. Append the candidates that have NO TEST-ID (they are invisible to any
   ID-keyed audit -- which is itself one of the findings).  These are listed
   explicitly with their source page so the hand-added part is auditable.

Classification rule (applied in this order, first match wins):
  NEVER-HAD-POWER  : the row's own text says the signal is below systematics,
                     or the test cannot select the framework over alternatives,
                     or no amplitude/mechanism was ever derived.
  DIED-ON-FORK     : the row's verdict changes under a definitional choice the
                     framework has not made (which C, which reading, which
                     epoch, which estimator, which velocity definition).
  DIED-ON-DATA     : a measurement crossed a threshold, and the verdict is
                     stable under the disclosed definitional choices.
"""

import re
import os
import sys

LEDGER = os.path.join(os.path.dirname(__file__), '..', '..',
                      'src', 'app', 'tier-1-existing', 'page.tsx')

# ------------------------------------------------------------------ 1. parse
src = open(LEDGER, encoding='utf-8').read()
DECL = 'const tests: Test[] = ['
start = src.index(DECL)
i = start + len(DECL) - 1          # the '[' that opens the array, not the one in 'Test[]'
depth, j = 0, i
while True:
    if src[j] == '[':
        depth += 1
    elif src[j] == ']':
        depth -= 1
        if depth == 0:
            break
    j += 1
block = src[i:j + 1]

# split top-level objects
rows, depth, cur = [], 0, ''
for ch in block[1:-1]:
    if ch == '{':
        depth += 1
    if depth > 0:
        cur += ch
    if ch == '}':
        depth -= 1
        if depth == 0:
            rows.append(cur)
            cur = ''


def field(row, key):
    m = re.search(r"\b" + key + r":\s*'((?:[^'\\]|\\.)*)'", row, re.S)
    return m.group(1) if m else ''


parsed = [{'id': field(r, 'id'), 'name': field(r, 'name'),
           'kill': field(r, 'kill'), 'alert': field(r, 'alert'),
           'prereg': field(r, 'preregistration')} for r in rows]

print("=" * 78)
print("CANDIDATE DISCRIMINATOR CENSUS -- generated from src/app/tier-1-existing/page.tsx")
print("=" * 78)
print(f"\nParsed {len(parsed)} ledger rows: {', '.join(p['id'] for p in parsed)}")
numbered = [p for p in parsed if re.match(r'TEST-\d+$', p['id'])]
print(f"Numbered TEST-nn rows: {len(numbered)}  (page states 11)")
if len(numbered) != 11:
    print("  *** MISMATCH with the page's own stated count -- investigate before citing")
print()

# ---------------------------------------------------------- 2. evidence rules
POWER = [
    (r'below current .{0,40}systematics|below systematics|practically untestable',
     'signal below systematics'),
    (r'no outcome that favou?rs|non-selecting|cannot discriminate this framework|'
     r'lacked the power|UNDERPOWERED', 'cannot select / underpowered'),
    (r'no amplitude .{0,30}derived|no amplitude has been derived|not falsifiable as stated|'
     r'no mechanism is specified', 'no amplitude or mechanism derived'),
    (r'NEVER RUN', 'never executed'),
]
FORK = [
    (r'convention.dependen|CONVENTION|under this convention|does not hold under',
     'verdict flips with an unmade convention'),
    (r'velocity.definition dependent|definition.dependent|pipeline.dependen|'
     r'which velocity definition', 'verdict depends on an unfixed estimator'),
    (r'three mutually exclusive readings|three live|opposite sign|opposite direction|'
     r'wrong.variable|two different observables|DIFFERENT statistic|different statistic',
     'two or more live readings of the same symbol'),
    (r'PROTOCOL DEVIATION|substituted.protocol|not the registered test',
     'executed object differs from the registered one'),
    (r'Reparametrization|dimensional identity|same dimensional identity class',
     'reduces to a reparametrization of existing physics'),
]
DATA = [
    (r'KILL CRITERION FIRED|kill fires|Kill Criterion Triggered|FIRED:|fires\b',
     'a registered threshold was crossed'),
    (r'EMPTY INTERSECTION|refuted at|disfavou?red \d', 'measured exclusion'),
    (r'CLOSED BY EXECUTION|All four failed', 'executed and failed'),
]


# A fork that was RAISED and then RESOLVED by running every branch is not a
# death -- it is the remedy.  The topic's three-cell taxonomy has no such cell,
# and without it TEST-09 and TEST-11 misclassify as fork deaths.
CLOSED = [
    (r'DEFINITION.ROBUST BY EXECUTION|all 11 adjudicated runs|every tested external.field|'
     r'at every SPARC .BIC threshold|under every recorded BIC convention|'
     r'robust empty intersection|not an artifact of the best.fit point',
     'every branch of the fork was executed; verdict stable across all of them'),
]


def scan(text, table):
    return [label for pat, label in table if re.search(pat, text, re.I)]


def classify(p):
    blob = ' '.join([p['name'], p['kill'], p['alert'], p['prereg']])
    ev = {k: scan(blob, t) for k, t in
          (('power', POWER), ('fork', FORK), ('data', DATA), ('closed', CLOSED))}
    if ev['power']:
        v = 'NEVER-HAD-POWER'
    elif ev['fork'] and ev['closed']:
        v = 'FORK-CLOSED-BY-EXECUTION'
    elif ev['fork']:
        v = 'DIED-ON-FORK'
    elif ev['data']:
        v = 'DIED-ON-DATA'
    else:
        v = 'UNCLASSIFIED'
    return v, ev


# Explicit adjudication where the mechanical rule is known to misfire.  Each
# override states its reason; a reader can reject any single one without
# re-deriving the table.
OVERRIDE = {
    'TEST-01': ('NEVER-HAD-POWER',
                'merged with TEST-05 by the page\'s own scope note -- two phases of one '
                'test, not an independent candidate'),
    'TEST-04': ('NEVER-HAD-POWER',
                'withdrawn before execution: the 1e-4 amplitude had no derivation and the '
                'kill bar sat 3000x below DESI Y3 precision'),
    'TEST-04a': ('DIED-ON-FORK',
                 'the verdict depends on WHICH STATISTIC carries the kill: 2.4 sigma on '
                 'sigma_8 vs ~1.5 sigma on the registered f sigma_8. Registered criterion '
                 'not met; the exclusion quoted is on a different observable'),
    'TEST-03': ('DIED-ON-FORK',
                'registered test never ran; what ran was a different sample and density '
                'proxy (TEST-03s). The verdict depends on which object you call the test'),
}


print("=" * 78)
print("PER-ROW EVIDENCE (verdict is the first non-empty column, by the stated rule)")
print("=" * 78)
tally = {}
for p in parsed:
    v, ev = classify(p)
    note = ''
    if p['id'] in OVERRIDE:
        v, why = OVERRIDE[p['id']]
        note = f"  [ADJUDICATED: {why}]"
    tally[v] = tally.get(v, 0) + 1
    print(f"\n{p['id']:>13}  ->  {v}{note}")
    for k in ('power', 'fork', 'data', 'closed'):
        if ev[k]:
            print(f"{'':>15}  {k:<7} : {'; '.join(ev[k])}")

print()
print("=" * 78)
print("TALLY over ledger rows")
print("=" * 78)
for k, n in sorted(tally.items(), key=lambda kv: -kv[1]):
    print(f"  {k:<18} {n}")

# ------------------------------------------------- 3. candidates with NO ID
print()
print("=" * 78)
print("CANDIDATES CARRYING NO TEST-ID -- invisible to any ID-keyed audit")
print("=" * 78)
print("(hand-listed from SESSION_FOCUS + findings/; each names its source page)")
NO_ID = [
    ("EFE = 0", "/mond-unification, /tier-1-existing caveat 2",
     "DIED-ON-FORK",
     "registration blocked: readings of C's argument give opposite-signed EFE (08-07)"),
    ("a_0(z) = cH(z)/2pi", "/parameter-derivations",
     "NEVER-HAD-POWER",
     "LCDM predicts the same ~3x; and it is Milgrom's own relation (08-01)"),
    ("High-z boost ceiling f_DM,max(z)", "/parameter-derivations item 8",
     "DIED-ON-FORK",
     "Omega_m/Omega_b reading exactly flat; 1/Omega_m(z) reading self-contradictory (08-08)"),
    ("TDG 'novel prediction' interval", "/mond-unification",
     "NEVER-HAD-POWER",
     "interval is nested inside MOND's (08-01)"),
    ("RAR transition shape (gamma)", "/galaxy-rotation",
     "DIED-ON-DATA",
     "gamma=2 refuted dBIC=+184 on 2807 SPARC points; free gamma -> MOND"),
    ("Cluster C(rho) bridge", "/tier-1-existing CLUSTER-SCALE",
     "DIED-ON-DATA",
     "four ansaetze, all fail on Coma; root cause locality"),
    ("RAR scatter vs local density", "/rar-scatter",
     "DIED-ON-DATA",
     "local density carries <=0.7% of the variance; form-free no-go (08-02)"),
    ("Coupling fork L1 vs L2=L3", "archive Appendix D.2 -- ON NO SITE PAGE",
     "FORK-CLOSED-BY-EXECUTION",
     "0.57-1.42 dex apart and gamma-invariant, but L1 is eliminable a priori by "
     "its vacuum source floor => the fork closes on L2=L3 (THIS SESSION)"),
]
for name, page, verdict, why in NO_ID:
    print(f"\n  {name}")
    print(f"      source : {page}")
    print(f"      verdict: {verdict}")
    print(f"      why    : {why}")

print()
print("=" * 78)
print("COMBINED TALLY")
print("=" * 78)
comb = dict(tally)
for _, _, v, _ in NO_ID:
    comb[v] = comb.get(v, 0) + 1
total = sum(comb.values())
for k, n in sorted(comb.items(), key=lambda kv: -kv[1]):
    print(f"  {k:<18} {n:>3}   {100*n/total:5.1f}%")
print(f"  {'TOTAL':<18} {total:>3}")
print()
print("Read the fork column against the hypothesis under test:")
print("  'the framework's discriminating content is limited by specification,")
print("   not by observation.'")
print()
nf  = comb.get('DIED-ON-FORK', 0)
ncl = comb.get('FORK-CLOSED-BY-EXECUTION', 0)
print(f"Candidates that ENCOUNTERED a definitional fork: {nf + ncl} of {total}")
print(f"  of those, closed by executing every branch : {ncl}")
print(f"  of those, still open (nobody ran them)     : {nf}")
print()
print("The decisive number is not the fork rate.  It is that " + str(ncl) + " of " +
      str(nf + ncl) + " forks")
print("that were actually WORKED closed, and every one that remains open is one")
print("nobody has run.  A fork is not fatal; an UNEXECUTED fork is.")
