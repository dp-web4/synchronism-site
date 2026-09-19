#!/usr/bin/env python3
"""a0(z) = cH(z)/2pi against (1) published high-z TFR zero points and (2) published f_DM(R_e) of 41 high-z discs.

PREREG: explorer/work/2026-09-19-a0z-btfr/PREREG.md (7567ad1), addendum A1 (a10ad64). Both precede this file.
Part 1 is the registered test. Part 2 is addendum A1 (Milgrom 2017's route, 41 discs instead of 6).
Anything labelled POST-HOC was not registered.
"""
import csv, os
import numpy as np
from scipy.special import i0, i1, k0, k1

G = 4.30091e-6            # kpc (km/s)^2 / Msun
KPC = 3.0857e16           # km -> g in m/s^2: (km/s)^2/kpc * 1e6/(KPC*1e3)
A0 = 1.2e-10              # m/s^2
ACC = 1e6 / (KPC * 1e3)   # (km/s)^2/kpc -> m/s^2
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'data', 'highz_fdm')


def E(z, om=0.3):
    return np.sqrt(om * (1 + z) ** 3 + 1 - om)


def nu_simple(y):
    return 0.5 + np.sqrt(0.25 + 1.0 / y)


def nu_rar(y):
    return 1.0 / (1.0 - np.exp(-np.sqrt(y)))


def vN2_freeman(M, Rd, R):
    """Newtonian V^2 of a razor-thin exponential disc (Freeman 1970), (km/s)^2."""
    y = R / (2.0 * Rd)
    return 2.0 * G * M / Rd * y ** 2 * (i0(y) * k0(y) - i1(y) * k1(y))


def v_mond(M, Rd, R, a0, nu=nu_simple, thick=1.0, Mb=0.0):
    vN2 = thick ** 2 * vN2_freeman(M, Rd, R) + G * Mb / R
    gN = vN2 / R * ACC
    return np.sqrt(nu(gN / a0) * vN2), gN / a0


# ---------------------------------------------------------------- Part 1
def part1():
    print('=' * 100)
    print('PART 1 (REGISTERED) - TFR zero-point offsets: naive N, constant-a0 C, branch A')
    print('=' * 100)
    # Uebler+2017 Table 2 / Table 1 medians; local reference Lelli+2016: b=11.12 at v_ref=242, slope 3.75
    surveys = [
        dict(name='Uebler+17 KMOS3D z~0.9', z=0.9, logM=10.62, Re=4.8, Re68=(3.0, 7.6), vobs=239, d_obs=-0.44, s=0.04),
        dict(name='Uebler+17 KMOS3D z~2.3', z=2.3, logM=10.89, Re=4.0, Re68=(2.5, 5.2), vobs=260, d_obs=-0.27, s=0.05),
    ]
    b_loc, slope, vref = 11.12, 3.75, 242.0
    print(f'check: Lelli+16 3.75*log10(242)+2.18 = {3.75*np.log10(242)+2.18:.3f} (paper-implied b_local = 10.68+0.44 = 11.12)')
    print(f'check: MOND normalisation log10[V^4/(G a0)] at 242 km/s = '
          f'{np.log10(242.0**4/(G*A0/ACC)):.3f}  -> the two references differ by '
          f'{np.log10(242.0**4/(G*A0/ACC))-b_loc:+.3f} dex at v_ref')
    out = []
    for s in surveys:
        M, Rd = 10 ** s['logM'], s['Re'] / 1.678
        Ez = E(s['z'])
        row = {}
        for tag, a0 in (('C', A0), ('A', A0 * Ez)):
            for thick in (0.92, 0.95, 0.97):
                v, y = v_mond(M, Rd, 2.15 * Rd, a0, thick=thick)
                row[(tag, thick)] = (v, y, s['logM'] - (b_loc + slope * np.log10(v / vref)),
                                     s['logM'] - np.log10(v ** 4 / (G * A0 / ACC)))
        vN, _ = np.sqrt(0.95 ** 2 * vN2_freeman(M, Rd, 2.15 * Rd)), None
        vC, yC, dC, dC4 = row[('C', 0.95)]
        vA, yA, dA, dA4 = row[('A', 0.95)]
        stot = np.hypot(s['s'], 0.10)
        print(f"\n{s['name']}:  E(z)={Ez:.3f}  naive N = {-np.log10(Ez):+.3f} dex   observed {s['d_obs']:+.2f} +- {s['s']:.2f} (sigma_tot {stot:.3f})")
        print(f"  median galaxy logM_bar={s['logM']}, R_e={s['Re']} kpc; Newtonian V(2.15Rd)={vN:.0f}; observed median v_circ,max={s['vobs']}")
        print(f"  C: V={vC:.0f} km/s  g_N/a0={yC:.2f}  offset vs Lelli {dC:+.3f}   vs V^4/(G a0) {dC4:+.3f}")
        print(f"  A: V={vA:.0f} km/s  g_N/a0(z)={yA:.2f}  offset vs Lelli {dA:+.3f}   vs V^4/(G a0) {dA4:+.3f}")
        print(f"  lever A-C = {dA-dC:+.3f} dex  = {abs(dA-dC)/stot:.2f} sigma_tot   (naive lever {-np.log10(Ez):+.3f})")
        print(f"  pulls: (obs-C)/sig = {(s['d_obs']-dC)/stot:+.2f}   (obs-A)/sig = {(s['d_obs']-dA)/stot:+.2f}   (obs-N)/sig = {(s['d_obs']+np.log10(Ez))/stot:+.2f}")
        print(f"  predicted-vs-observed median velocity: C {vC:.0f}, A {vA:.0f}, obs {s['vobs']}")
        print('  sensitivity (thick-disc factor x R_e 68% range): offset vs Lelli  [C | A | lever]')
        for thick in (0.92, 0.95, 0.97):
            for Re in (s['Re68'][0], s['Re'], s['Re68'][1]):
                rd = Re / 1.678
                c = s['logM'] - (b_loc + slope * np.log10(v_mond(M, rd, 2.15 * rd, A0, thick=thick)[0] / vref))
                a = s['logM'] - (b_loc + slope * np.log10(v_mond(M, rd, 2.15 * rd, A0 * Ez, thick=thick)[0] / vref))
                print(f'     thick={thick} Re={Re:4.1f}:  {c:+.3f} | {a:+.3f} | {a-c:+.3f}')
        out.append(dict(s=s, dC=dC, dA=dA, stot=stot, Ez=Ez))

    print('\n-- registered verdict logic --')
    nd = all(abs(o['dA'] - o['dC']) < 2 * o['stot'] for o in out)
    print('|A-C| < 2 sigma_tot in every survey ->', nd, '=> NON-DISCRIMINATING' if nd else '')
    for o in out:
        print(f"  {o['s']['name']}: |obs-A|>2s? {abs(o['s']['d_obs']-o['dA'])>2*o['stot']}   |obs-C|>2s? {abs(o['s']['d_obs']-o['dC'])>2*o['stot']}"
              f"   |obs-N|>2s? {abs(o['s']['d_obs']+np.log10(o['Ez']))>2*o['stot']}")
    print('  NOTE: the two Uebler subsamples are disjoint in galaxies but share method + local reference; n_independent surveys with a bTFR = 1.')

    print('\n-- non-monotonicity clause --')
    d = out[1]['s']['d_obs'] - out[0]['s']['d_obs']
    s_stat = np.hypot(0.04, 0.05)
    s_floor = np.sqrt(0.04 ** 2 + 0.05 ** 2 + 2 * 0.10 ** 2)
    print(f'  observed Delta b(2.3)-Delta b(0.9) = {d:+.2f};  stat-only {d/s_stat:.2f} sigma;  with 0.10 floor on each {d/s_floor:.2f} sigma (weaker reading scores)')
    for tag, k in (('C', 'dC'), ('A', 'dA')):
        print(f"  model {tag}: {out[1][k]-out[0][k]:+.3f}")
    print(f"  naive N: {-np.log10(out[1]['Ez'])+np.log10(out[0]['Ez']):+.3f}")

    print('\n-- POST-HOC: baseline-subtracted offsets (model high-z minus model local disc of the same mass, V_flat asymptote) --')
    for o in out:
        M = 10 ** o['s']['logM']
        vflat = (G * M * A0 / ACC) ** 0.25
        base = o['s']['logM'] - (b_loc + slope * np.log10(vflat / vref))
        print(f"  {o['s']['name']}: local-model baseline vs Lelli {base:+.3f};  C-base {o['dC']-base:+.3f}  A-base {o['dA']-base:+.3f}  obs {o['s']['d_obs']:+.2f}")

    print('\n-- between-survey systematic at z~0.9 (stellar TFR, same quantity) --')
    print('  Uebler+17 sTFR vs Reyes+11: -0.44 (pressure-corrected), -0.34 (uncorrected); Tiley+19 KROSS - matched SAMI disky: -0.09 +- 0.06')
    print(f'  spread 0.25-0.35 dex  vs  registered floor 0.10  vs  model lever at z~0.9 {out[0]["dA"]-out[0]["dC"]:+.3f}, z~2.3 {out[1]["dA"]-out[1]["dC"]:+.3f}')
    return out


# ---------------------------------------------------------------- Part 2
def load():
    def rd(fn):
        with open(os.path.join(DATA, fn)) as f:
            rows = [r for r in csv.DictReader(l for l in f if not l.startswith('#'))]
        return {r['id']: r for r in rows}
    m, p, g = rd('price2021_table1_masses.csv'), rd('price2021_table3_1d.csv'), rd('genzel2020_tableD1_fdm.csv')
    return m, p, g


def part2():
    print('\n' + '=' * 100)
    print('PART 2 (ADDENDUM A1) - phantom dark-matter fraction at R_e, 41 discs, two published f_DM fits')
    print('=' * 100)
    m, p, g = load()
    print(f'rows: masses {len(m)}, Price MCMC {len(p)}, Genzel LSQ {len(g)}; common ids {len(set(m)&set(p)&set(g))}')
    rng = np.random.default_rng(20260919)
    NMC = 4000

    def fpred(r, evolve, nu):
        z = float(r['z']); Mtot = 10 ** float(r['logMstar']) + 10 ** float(r['logMgas'])
        bt = float(r['BT']); Re = float(r['Re_disk']); Rd = Re / 1.678
        a0 = A0 * (E(z) if evolve else 1.0)
        fac = 10 ** np.concatenate([[0.0], rng.normal(0, 0.2, NMC)])
        vN2 = vN2_freeman((1 - bt) * Mtot * fac, Rd, Re) + G * bt * Mtot * fac / Re
        y = vN2 / Re * ACC / a0
        f = 1.0 - 1.0 / nu(y)
        return f[0], f[1:].std(), y[0]

    results = {}
    for nuname, nu in (('simple', nu_simple), ('RAR', nu_rar)):
        for meth, tab in (('Price+21 MCMC', p), ('Genzel+20 LSQ', g)):
            for cut, lab in ((1.5, 'z>=1.5'), (0.0, 'all z')):
                chi = {'C': 0.0, 'A': 0.0}; n = 0; fp = {'C': [], 'A': []}; fo = []
                for gid, r in m.items():
                    if gid not in tab or float(r['z']) < cut:
                        continue
                    t = tab[gid]; fobs = float(t['fdm_re'])
                    n += 1; fo.append(fobs)
                    for tag, ev in (('C', False), ('A', True)):
                        f0, sp, y = fpred(r, ev, nu)
                        if 'err' in t:
                            so = float(t['err'])
                        else:
                            so = float(t['err_plus']) if f0 > fobs else float(t['err_minus'])
                        so = max(so, 0.02)
                        chi[tag] += (fobs - f0) ** 2 / (so ** 2 + sp ** 2)
                        fp[tag].append(f0)
                results[(nuname, meth, lab)] = (n, chi['C'], chi['A'])
                print(f"nu={nuname:6s} {meth:14s} {lab:7s} N={n:2d}  chi2_C={chi['C']:7.1f} ({chi['C']/n:5.2f}/N)  chi2_A={chi['A']:7.1f} ({chi['A']/n:5.2f}/N)"
                      f"  A-C={chi['A']-chi['C']:+7.1f}   median f_obs={np.median(fo):.2f}  f_C={np.median(fp['C']):.2f}  f_A={np.median(fp['A']):.2f}")
    print('\n-- registered A1 verdict (z>=1.5, both methods, both nu) --')
    d = [results[k][2] - results[k][1] for k in results if k[2] == 'z>=1.5']
    print('  Delta chi2 (A-C):', ', '.join(f'{x:+.1f}' for x in d))
    if all(x > 9 for x in d):
        v = '(A) DISFAVOURED'
    elif all(x < -9 for x in d):
        v = '(C) DISFAVOURED'
    else:
        v = 'NON-DISCRIMINATING'
    print('  verdict:', v)
    print('  chi2_C/N > 2 anywhere at z>=1.5?', any(results[k][1] / results[k][0] > 2 for k in results if k[2] == 'z>=1.5'))

    print('\n-- per-galaxy table, z>=1.5, simple nu --')
    print(f"  {'id':16s} {'z':>5s} {'gN/a0':>6s} {'f_C':>5s} {'f_A':>5s} {'Price':>6s} {'Genzel':>6s}")
    for gid, r in sorted(m.items(), key=lambda kv: float(kv[1]['z'])):
        if float(r['z']) < 1.5:
            continue
        fc, _, y = fpred(r, False, nu_simple); fa, _, _ = fpred(r, True, nu_simple)
        print(f"  {gid:16s} {float(r['z']):5.2f} {y:6.2f} {fc:5.2f} {fa:5.2f} {float(p[gid]['fdm_re']) if gid in p else float('nan'):6.2f} {float(g[gid]['fdm_re']) if gid in g else float('nan'):6.2f}")

    print('\n-- POST-HOC: what constant multiple k of a0 do the z>=1.5 f_DM prefer? (simple nu, 0.2 dex mass scatter) --')
    for meth, tab in (('Price+21 MCMC', p), ('Genzel+20 LSQ', g)):
        ks = np.array([0.25, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 6.0]); chis = []
        for k in ks:
            c = 0.0
            for gid, r in m.items():
                if gid not in tab or float(r['z']) < 1.5:
                    continue
                z = float(r['z']); Mtot = 10 ** float(r['logMstar']) + 10 ** float(r['logMgas'])
                bt = float(r['BT']); Re = float(r['Re_disk']); Rd = Re / 1.678
                fac = 10 ** np.concatenate([[0.0], np.random.default_rng(1).normal(0, 0.2, 2000)])
                vN2 = vN2_freeman((1 - bt) * Mtot * fac, Rd, Re) + G * bt * Mtot * fac / Re
                f = 1 - 1 / nu_simple(vN2 / Re * ACC / (k * A0))
                t = tab[gid]; fobs = float(t['fdm_re'])
                so = float(t['err']) if 'err' in t else (float(t['err_plus']) if f[0] > fobs else float(t['err_minus']))
                c += (fobs - f[0]) ** 2 / (max(so, 0.02) ** 2 + f[1:].std() ** 2)
            chis.append(c)
        print(f'  {meth}: ' + '  '.join(f'k={k:g}:{c:.1f}' for k, c in zip(ks, chis)))
    print(f'  for reference E(z) over the z>=1.5 sample runs {E(1.5):.2f} - {E(2.5):.2f}')


if __name__ == '__main__':
    part1()
    part2()
