#!/usr/bin/env python3
"""Classify all 26 registered kill criteria against the rules fixed in
kill_criterion_audit_PREREG.md (committed 57959fe, before execution).

Two parts:
  (1) MECHANICAL  -- computed from the criterion text, no judgement:
        * does the kill string contain any numeral (ASCII or unicode superscript)?
        * does it contain an exact-null lexeme with no tolerance?
        * does it state a significance (Nsigma / p-value / confidence)?
  (2) A-ARITHMETIC -- for every row where the site itself publishes a central
      value, a threshold, a stated significance AND the sigma of the adjudicating
      dataset, check |threshold - prediction| >= significance * sigma.

Rows are never dropped. Denominator is 26 throughout.
"""
import json, os, re, unicodedata

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
rows = json.load(open(os.path.join(ROOT, 'explorer/work/2026-09-18-kill-criteria/criteria.json')))

SUPER = '⁰¹²³⁴⁵⁶⁷⁸⁹'
def has_numeral(s):
    return any(c.isdigit() or c in SUPER for c in s)

EXACT_NULL = [
    'perfectly', 'identical', 'no correlation', 'uncorrelated', 'no difference',
    'independent of', 'no radial', 'no systematic', 'no behavioral discontinuity',
    'no improvement', 'no clustering', 'no scale-free', 'at all measured',
]
SIGNIF = [re.compile(p) for p in (
    r'\d\s*σ', r'\dσ', r'p\s*[<>=]', r'95\s*%', r'confidence', r'>\s*\d\s*sigma')]

def flags(r):
    k = r.get('kill', '')
    kl = k.lower()
    f = []
    if not has_numeral(k):
        f.append('NO-NUMERAL')
    hits = [w for w in EXACT_NULL if w in kl]
    if hits:
        f.append('EXACT-NULL(' + ';'.join(hits) + ')')
    if any(p.search(k) for p in SIGNIF):
        f.append('STATES-SIGNIFICANCE')
    if re.search(r'\bN/A\b|not falsifiable', k):
        f.append('NO-CRITERION')
    if re.search(r'\bC\b|γ|N_corr|Φ|MRH', k + ' ' + r.get('prediction', '')):
        f.append('E:UNMAPPED-QUANTITY')
    return f

print('=' * 78)
print('PART 1 -- MECHANICAL PASS OVER ALL %d REGISTERED KILL CRITERIA' % len(rows))
print('=' * 78)
tally = {}
for r in rows:
    f = flags(r)
    for x in f:
        tally[x.split('(')[0]] = tally.get(x.split('(')[0], 0) + 1
    print(f"{r['id']:<9} {r['tier']:<7} {'; '.join(f) if f else 'none'}")

n = len(rows)
print()
for k in sorted(tally):
    print(f'  {k:<22} {tally[k]:>2} / {n}   ({100*tally[k]/n:.0f} %)')

no_num = [r['id'] for r in rows if not has_numeral(r.get('kill', ''))]
print(f"\nKill criteria containing NO numeral at all: {len(no_num)}/{n}")
print('  ' + ', '.join(no_num))

print()
print('=' * 78)
print('PART 2 -- A-CLASS ARITHMETIC (threshold vs stated significance vs real sigma)')
print('=' * 78)
# Only rows where the site itself publishes all four numbers.
CASES = [
    # id,  limb,             prediction, threshold, stated_sig, sigma, sigma_source
    ('TEST-04a', 'rules out at >3σ',   0.418, 0.46, 3.0, 0.062,
     'DESI DR1 LRG1 fsigma8 = 0.550 +/- 0.062 (site, tier-1 scorecard)'),
    ('TEST-04a', 'disfavors at >2σ',   0.418, 0.45, 2.0, 0.062,
     'same'),
    ('TEST-06',  'sigma_int > 0.12 dex at N > 1000', 0.086, 0.12, None, None,
     'sigma of a dispersion estimate = s/sqrt(2N); N>1000 is stated IN the criterion'),
]
for tid, limb, pred, thr, sig, sd, src in CASES:
    print(f"\n{tid}  [{limb}]")
    if sd is None:
        # TEST-06: the criterion states its own power requirement; derive the SE it buys.
        import math
        N = 1000
        se = pred / math.sqrt(2 * N)
        margin = (thr - pred) / se
        print(f"  prediction {pred} dex, threshold {thr} dex, stated power N > {N}")
        print(f"  SE of a dispersion estimate at N={N}: {pred}/sqrt(2N) = {se:.4f} dex")
        print(f"  threshold sits {margin:.1f} sigma from the prediction  -> SATISFIABLE")
        print(f"  source: {src}")
        continue
    need = (thr - pred) / sig
    gap = (thr - pred) / sd
    print(f"  prediction {pred}, threshold {thr}, stated significance {sig}sigma")
    print(f"  the threshold PRESUMES sigma = ({thr} - {pred})/{sig} = {need:.4f}")
    print(f"  the data DELIVER      sigma = {sd}   ({sd/need:.1f}x larger)")
    print(f"  the threshold actually sits {gap:.2f} sigma from the prediction")
    print(f"  -> UNSATISFIABLE AS REGISTERED (class A)" if gap < sig else "  -> ok")
    print(f"  a threshold honestly placed at {sig}sigma would be "
          f"{pred + sig*sd:.3f}, not {thr} (short by {pred + sig*sd - thr:.3f})")
    print(f"  sigma source: {src}")

print()
print('=' * 78)
print('PART 3 -- ROWS WITH NO ADJUDICATING DATASET NAMED')
print('=' * 78)
nod = [r['id'] for r in rows if not (r.get('data') or r.get('protocol'))]
print(f'{len(nod)}/{n}  ({100*len(nod)/n:.0f} %): ' + ', '.join(nod))
