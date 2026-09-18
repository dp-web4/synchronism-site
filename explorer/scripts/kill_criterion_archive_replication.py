#!/usr/bin/env python3
"""Replication: run the SAME classifier over the archive's independent registry.

`Synchronism/Research/EXPERIMENTAL_TEST_CATALOG.md` (dated 2026-02-20) is a
DISJOINT namespace from the site's tier pages (its own 2026-08-22 namespace
declaration: 11 of 12 IDs checked name different tests). It states its criteria
under '**Falsification**:' rather than a `kill:` field. Same authors, one day
earlier, different tests -- so it is a genuine second sample of the same
drafting practice.

Flag rules are byte-identical to kill_criterion_classify.py (PREREG 57959fe).
"""
import re, os

CAT = '/home/dp/ai-workspace/Synchronism/Research/EXPERIMENTAL_TEST_CATALOG.md'
src = open(CAT, encoding='utf-8').read()

# A row is "### TEST-NN: Name" ... "**Falsification**: <text>"
rows = []
for m in re.finditer(r'^#+\s*(TEST-[0-9A-Za-z]+)\s*[:.—-]\s*(.+)$', src, re.M):
    tid, name = m.group(1), m.group(2).strip()
    tail = src[m.end():m.end() + 4000]
    f = re.search(r'\*\*Falsification\*\*:\s*(.+)', tail)
    nxt = re.search(r'^#+\s*TEST-', tail, re.M)
    if f and (not nxt or f.start() < nxt.start()):
        rows.append((tid, name, f.group(1).strip()))

SUPER = '⁰¹²³⁴⁵⁶⁷⁸⁹'
def has_numeral(s): return any(c.isdigit() or c in SUPER for c in s)
EXACT_NULL = ['perfectly', 'identical', 'no correlation', 'uncorrelated', 'no difference',
              'independent of', 'no radial', 'no systematic', 'no behavioral discontinuity',
              'no improvement', 'no clustering', 'no scale-free', 'at all measured']
SIGNIF = [re.compile(p) for p in (r'\d\s*σ', r'\dσ', r'p\s*[<>=]', r'95\s*%', r'confidence')]

print(f'archive rows with a **Falsification** line: {len(rows)}\n')
n_no_num = n_null = n_sig = 0
for tid, name, k in rows:
    fl = []
    if not has_numeral(k): fl.append('NO-NUMERAL'); 
    if not has_numeral(k): n_no_num += 1
    hits = [w for w in EXACT_NULL if w in k.lower()]
    if hits: fl.append('EXACT-NULL'); n_null += 1
    if any(p.search(k) for p in SIGNIF): fl.append('STATES-SIGNIFICANCE'); n_sig += 1
    print(f"{tid:<9} {'; '.join(fl) if fl else 'none':<34} {k[:88]}")

n = len(rows)
print()
print(f'  no numeral at all   : {n_no_num:>2}/{n}  ({100*n_no_num/n:.0f} %)')
print(f'  exact-null lexeme   : {n_null:>2}/{n}  ({100*n_null/n:.0f} %)')
print(f'  states significance : {n_sig:>2}/{n}  ({100*n_sig/n:.0f} %)')
print()
print('SITE registry for comparison (26 rows): no numeral 11/26 (42 %),')
print('                                        exact-null 15/26 (58 %),')
print('                                        states significance 3/26 (12 %)')
