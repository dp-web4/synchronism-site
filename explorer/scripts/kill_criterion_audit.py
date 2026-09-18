#!/usr/bin/env python3
"""Extract every registered kill criterion from the four tier pages.

Mechanical extraction only -- no classification here. Classification is applied
by hand against the rules fixed in kill_criterion_audit_PREREG.md (2026-09-18).
"""
import re, json, sys, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
PAGES = [
    ('Tier 1', 'src/app/tier-1-existing/page.tsx'),
    ('Tier 2', 'src/app/tier-2-pilots/page.tsx'),
    ('Tier 3', 'src/app/tier-3-major/page.tsx'),
    ('Tier 4', 'src/app/tier-4-frontier/page.tsx'),
]

# Match a JS string literal that may contain escaped quotes, across newlines.
def js_string(src, start):
    """Given index of the opening quote, return (value, index_after_close)."""
    q = src[start]
    i = start + 1
    out = []
    while i < len(src):
        c = src[i]
        if c == '\\':
            out.append(src[i:i+2]); i += 2; continue
        if c == q:
            return ''.join(out), i + 1
        out.append(c); i += 1
    raise ValueError('unterminated string')

FIELD = re.compile(r"\n\s{4}(id|name|prediction|kill|data|protocol|preregistration|notes)\s*:\s*(['\"])")

def extract(path):
    src = open(path, encoding='utf-8').read()
    rows, cur = [], {}
    for m in FIELD.finditer(src):
        key = m.group(1)
        val, _ = js_string(src, m.end() - 1)
        val = val.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ')
        if key == 'id':
            if cur:
                rows.append(cur)
            cur = {'id': val}
        else:
            cur.setdefault(key, val)
    if cur:
        rows.append(cur)
    return [r for r in rows if r.get('id', '').startswith('TEST-')]

all_rows = []
for tier, rel in PAGES:
    p = os.path.normpath(os.path.join(ROOT, rel))
    rs = extract(p)
    for r in rs:
        r['tier'] = tier
        r['source'] = rel
    all_rows.extend(rs)
    print(f'{tier}: {len(rs)} tests with a kill field -> ' +
          ', '.join(r['id'] for r in rs))

print()
print('=' * 78)
print(f'TOTAL ROWS WITH A kill: FIELD = {len(all_rows)}')
missing = [r["id"] for r in all_rows if not r.get("kill")]
print(f'rows missing a kill string: {missing or "none"}')
print('=' * 78)

for r in all_rows:
    print()
    print(f"--- {r['id']}  [{r['tier']}]  {r.get('name','')[:70]}")
    print(f"  DATA/PROTOCOL: {r.get('data') or r.get('protocol') or '(none named)'}")
    print(f"  PREDICTION   : {r.get('prediction','(none)')}")
    print(f"  KILL         : {r.get('kill','(none)')}")
    if r.get('preregistration'):
        print(f"  PREREG       : {r['preregistration'][:300]}")

out = os.path.join(ROOT, 'explorer/work/2026-09-18-kill-criteria/criteria.json')
json.dump(all_rows, open(out, 'w'), indent=1)
print(f'\nwrote {out}')
