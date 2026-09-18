#!/usr/bin/env python3
"""When did each registered kill criterion acquire its current precision?

Reconstructs the `kill:` string of every test at every commit that touched its
tier page, and reports the date of each CHANGE. The question this answers:
were the criteria sharpened at registration, or near execution?

Exploratory (not in the 2026-09-18 pre-registration, which covered the static
audit only). Labelled as such in the finding.
"""
import subprocess, re, os, sys, json

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
PAGES = ['src/app/tier-1-existing/page.tsx', 'src/app/tier-2-pilots/page.tsx',
         'src/app/tier-3-major/page.tsx', 'src/app/tier-4-frontier/page.tsx']

def sh(*a):
    return subprocess.run(a, cwd=ROOT, capture_output=True, text=True).stdout

def js_string(src, start):
    q = src[start]; i = start + 1; out = []
    while i < len(src):
        c = src[i]
        if c == '\\':
            out.append(src[i:i+2]); i += 2; continue
        if c == q:
            return ''.join(out)
        out.append(c); i += 1
    return ''.join(out)

FIELD = re.compile(r"\n\s{4}(id|kill)\s*:\s*(['\"])")

def parse(src):
    d, cur = {}, None
    for m in FIELD.finditer(src):
        v = js_string(src, m.end() - 1)
        if m.group(1) == 'id':
            cur = v
        elif cur and cur not in d:
            d[cur] = v
    return d

SUPER = '⁰¹²³⁴⁵⁶⁷⁸⁹'
def precision(k):
    """Crude precision score: numerals present + significance stated + commit/date cited."""
    s = 0
    if any(c.isdigit() or c in SUPER for c in k): s += 1
    if re.search(r'\d\s*σ|\dσ|p\s*[<>=]|95\s*%', k): s += 1
    if re.search(r'commit [0-9a-f]{6,}|pre-?registered|20\d\d-\d\d-\d\d', k, re.I): s += 1
    return s

history = {}
for page in PAGES:
    log = sh('git', 'log', '--format=%H|%ad', '--date=short', '--reverse', '--', page)
    for line in log.strip().splitlines():
        h, date = line.split('|')
        src = sh('git', 'show', f'{h}:{page}')
        if not src: continue
        for tid, kill in parse(src).items():
            if not tid.startswith('TEST-'): continue
            prev = history.setdefault(tid, [])
            if not prev or prev[-1][2] != kill:
                prev.append((date, h[:7], kill))

order = ([f'TEST-{i:02d}' for i in range(1, 11)] + ['TEST-04a', 'TEST-25'] +
         [f'TEST-{i}' for i in range(11, 25)])
EXEC = {'TEST-01': '2026-07-14', 'TEST-03': '2026-07-14', 'TEST-04a': '2026-07-14',
        'TEST-05': '2026-07-14', 'TEST-09': '2026-07-14', 'TEST-10': '2026-07-14',
        'TEST-25': '2026-07-28'}

print('=' * 78)
print('KILL-CRITERION REVISION HISTORY  (one line per CHANGE to the kill string)')
print('=' * 78)
rows = []
for tid in order:
    if tid not in history: continue
    h = history[tid]
    ex = EXEC.get(tid)
    print(f"\n### {tid}   revisions: {len(h)}" + (f"   EXECUTED {ex}" if ex else "   (never executed)"))
    for date, sha, kill in h:
        mark = ''
        if ex:
            mark = ' <-- AFTER EXECUTION' if date > ex else ''
        print(f"  {date}  {sha}  prec={precision(kill)}  {kill[:150]}{mark}")
    rows.append((tid, len(h), h[0][0], h[-1][0], precision(h[0][2]), precision(h[-1][2]), ex))

print()
print('=' * 78)
print('SUMMARY')
print('=' * 78)
print(f"{'test':<10}{'revs':>5}{'first':>12}{'last':>12}{'prec0':>7}{'precN':>7}  executed")
for tid, n, f, l, p0, pn, ex in rows:
    print(f"{tid:<10}{n:>5}{f:>12}{l:>12}{p0:>7}{pn:>7}  {ex or '-'}")

ex_rows = [r for r in rows if r[6]]
un_rows = [r for r in rows if not r[6]]
def avg(xs): return sum(xs)/len(xs) if xs else 0
print()
print(f"EXECUTED rows  (n={len(ex_rows)}): mean revisions {avg([r[1] for r in ex_rows]):.1f}, "
      f"mean precision {avg([r[4] for r in ex_rows]):.2f} -> {avg([r[5] for r in ex_rows]):.2f}")
print(f"NEVER-RUN rows (n={len(un_rows)}): mean revisions {avg([r[1] for r in un_rows]):.1f}, "
      f"mean precision {avg([r[4] for r in un_rows]):.2f} -> {avg([r[5] for r in un_rows]):.2f}")
unchanged = [r[0] for r in un_rows if r[1] == 1]
print(f"\nNever-run criteria NEVER revised since first commit: {len(unchanged)}/{len(un_rows)}")
print('  ' + ', '.join(unchanged))
