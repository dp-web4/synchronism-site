#!/usr/bin/env python3
"""Parse Baumgardt & Hilker Galactic GC catalogue (structural params + binned
velocity-dispersion profiles) from the public HTML tables into JSON.

Source: https://people.smp.uq.edu.au/HolgerBaumgardt/globular/
        parameter.html  (165 N-body-fit clusters)
        veldis.html     (binned sigma profiles, RV + PM)
"""
import re, html, json, sys

def cells(row):
    cs = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.S)
    return [html.unescape(re.sub('<[^>]+>', '', c)).replace('\xa0', ' ').strip() for c in cs]

def num(s):
    """First float in a string like '8.53 ± 0.05 · 105' -> 8.53e5 ; '' -> None."""
    if s is None: return None
    s = s.replace('−', '-').replace('–', '-')
    m = re.match(r'\s*(-?\d+\.?\d*(?:[eE]-?\d+)?)', s)
    if not m: return None
    v = float(m.group(1))
    # Baumgardt writes powers as ' \xb7 105' meaning x10^5 (superscript stripped)
    m2 = re.search(r'·\s*10(-?\d+)', s)
    if m2: v *= 10.0 ** float(m2.group(1))
    return v

def err(s):
    m = re.search(r'±\s*(\d+\.?\d*)', s or '')
    return float(m.group(1)) if m else None

# ---------- structural parameters ----------
h = open('/tmp/gcparam.html', encoding='utf-8', errors='replace').read()
t = re.search(r"<table id='sort', class=\"table1\">.*?</table>", h, re.S).group(0)
rows = re.findall(r'<tr.*?</tr>', t, re.S)
hdr = cells(rows[0])
COL = {name: i for i, name in enumerate(hdr)}

clusters = {}
for r in rows[1:]:
    c = cells(r)
    if len(c) != len(hdr): continue
    name = re.sub(r'\s{2,}.*$', '', c[0]).strip()          # drop the alias ("NGC 104   47 Tuc")
    alias = c[0][len(name):].strip()
    d = dict(
        name=name, alias=alias,
        R_sun=num(c[COL['R☉[kpc]']]), R_sun_e=err(c[COL['R☉[kpc]']]),
        R_GC=num(c[COL['RGC[kpc]']]),
        N_RV=num(c[COL['NRV']]), N_PM=num(c[COL['NPM']]),
        M=num(c[COL['Mass[M☉]']]), M_e=None,
        r_c=num(c[COL['rc[pc]']]), r_hl=num(c[COL['rh,l[pc]']]),
        r_hm=num(c[COL['rh,m[pc]']]), r_t=num(c[COL['rt[pc]']]),
        log_rho_c=num(c[COL['log ρc[M☉/pc3]']]),
        log_rho_hm=num(c[COL['log ρh,m[M☉/pc3]']]),
        sigma0=num(c[COL['σ0[km/sec]']]),
    )
    # mass error: "8.53 ± 0.05 · 105"
    e = err(c[COL['Mass[M☉]']])
    m2 = re.search(r'·\s*10(-?\d+)', c[COL['Mass[M☉]']])
    if e is not None:
        d['M_e'] = e * (10.0 ** float(m2.group(1)) if m2 else 1.0)
    clusters[name] = d

# ---------- velocity dispersion profiles ----------
v = open('/tmp/gcveldis.html', encoding='utf-8', errors='replace').read()
vrows = re.findall(r'<tr.*?</tr>', v, re.S)
prof, cur = {}, None
for r in vrows:
    c = cells(r)
    c = [x for x in c if x not in ('', ' ')]
    if not c: continue
    # a name row starts a cluster block; data rows have 6 numeric-ish fields
    if len(c) >= 7 and re.match(r'^[A-Za-z0-9]', c[0]) and not re.match(r'^-?\d+\.?\d*$', c[0]):
        cur = re.sub(r'\s{2,}.*$', '', c[0]).strip()
        prof.setdefault(cur, [])
        rest = c[1:]
    elif cur is not None:
        rest = c
    else:
        continue
    if len(rest) >= 6:
        try:
            r_as, n, s, eu, el = float(rest[0]), float(rest[1]), float(rest[2]), float(rest[3]), float(rest[4])
        except ValueError:
            continue
        prof[cur].append(dict(r_arcsec=r_as, N=int(n), sigma=s, e_up=eu, e_low=el,
                              type=rest[5].strip()))

prof = {k: v_ for k, v_ in prof.items() if v_}
out = dict(clusters=clusters, profiles=prof)
json.dump(out, open('baumgardt_gc.json', 'w'), indent=0)
print(f"clusters: {len(clusters)}   profiles: {len(prof)}   "
      f"total bins: {sum(len(x) for x in prof.values())}")
matched = [k for k in prof if k in clusters]
print(f"name-matched: {len(matched)}")
print("unmatched profile names:", sorted(set(prof) - set(clusters))[:15])
