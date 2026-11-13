"""What RAR shape can the tanh-log template not fit?  Explorer 2026-11-13.
PREREG: explorer/findings/PREREG-template-forbidden-shapes-20261113.md (committed d5e38a3 before running).

Shape statistics in the mu-convention (x = g_obs/a0):
  W  = log10 x(mu=0.9) - log10 x(mu=0.1)       (10-90% transition width, dex)
  t(x) = -dln(1-mu)/dln x                        (tail exponent)
"""
import sys
from pathlib import Path
import numpy as np
from scipy.optimize import minimize_scalar, minimize

SIM = Path('/home/dp/ai-workspace/Synchronism/simulations')
sys.path.insert(0, str(SIM))
from sparc_cassini_q2 import TanhLogNu  # noqa: E402

MRT = SIM / 'sparc_real_data/MassModels_Lelli2016c.mrt'
KPC, KMS = 3.0856775814913673e19, 1.0e3
B = 400
RNG = np.random.default_rng(20261113)


# ---------------------------------------------------------------- data
def load():
    gid, V2, gas, star, Rm = [], [], [], [], []
    for line in open(MRT):
        p = line.split()
        if len(p) != 10:
            continue
        try:
            D, R, V, eV, Vg, Vd, Vb, _, _ = map(float, p[1:])
        except ValueError:
            continue
        if R <= 0 or V <= 0 or eV / V > 0.10:
            continue
        vb2 = (Vg * abs(Vg) + 0.5 * Vd * abs(Vd) + 0.7 * Vb * abs(Vb)) * KMS**2
        if vb2 <= 0:
            continue
        gid.append(p[0]); V2.append((V * KMS)**2); Rm.append(R * KPC)
        gas.append(Vg * abs(Vg) * KMS**2); star.append((0.5 * Vd * abs(Vd) + 0.7 * Vb * abs(Vb)) * KMS**2)
    gid, V2, gas, star, Rm = map(np.array, (gid, V2, gas, star, Rm))
    return gid, V2 / Rm, gas / Rm, star / Rm


# ---------------------------------------------------------------- families (nu-convention, y = g_bar/a0)
def nu_delta(d):
    def f(y):
        y = np.asarray(y, dtype=float)
        with np.errstate(over='ignore', under='ignore'):
            return (-np.expm1(-y ** (d / 2.0))) ** (-1.0 / d)
    return f


def nu_n(n):
    def f(y):
        y = np.asarray(y, dtype=float)
        return (0.5 * (1.0 + np.sqrt(1.0 + 4.0 * y ** (-n)))) ** (1.0 / n)
    return f


_TL = {}


def nu_tl(g):
    g = round(float(g), 6)
    if g not in _TL:
        _TL[g] = TanhLogNu(g)
    return _TL[g]


# ---------------------------------------------------------------- shape statistics
def W_template_analytic(g):
    xa = np.expm1(np.arctanh(0.9) / g)
    xb = np.expm1(np.arctanh(0.1) / g)
    return np.log10(xa / xb)


def tail_template(g, x):
    q = (1 + x) ** (2 * g)
    return 2 * g * x / (1 + x) * q / (1 + q)


def mu_curve_from_nu(nu):
    ly = np.linspace(-14, 14, 40001)
    y = 10**ly
    v = nu(y)
    x = y * v
    mu = 1.0 / v
    return np.log10(x), mu


def W_from_nu(nu):
    lx, mu = mu_curve_from_nu(nu)
    o = np.argsort(mu)
    return np.interp(0.9, mu[o], lx[o]) - np.interp(0.1, mu[o], lx[o])


def tail_from_nu(nu, x0):
    lx, mu = mu_curve_from_nu(nu)
    one = np.clip(1 - mu, 1e-300, None)
    s = -np.gradient(np.log(one), lx * np.log(10))
    return np.interp(np.log10(x0), lx, s)


# ---------------------------------------------------------------- fitting
def ssr(gobs, gbar, a0, nu):
    r = np.log10(gobs) - np.log10(gbar * nu(gbar / a0))
    return np.sum(r * r)


def prof_a0(gobs, gbar, nu):
    r = minimize_scalar(lambda la: ssr(gobs, gbar, 10**la, nu), bounds=(-11, -9), method='bounded',
                        options={'xatol': 1e-7})
    return 10**r.x, r.fun


def prof_a0_s(gobs, gas, star, nu, x0=(-9.95, 0.0)):
    def f(p):
        gb = gas + 10**p[1] * star
        if np.any(gb <= 0):
            return 1e9
        return ssr(gobs, gb, 10**p[0], nu)
    r = minimize(f, x0, method='Nelder-Mead', options={'xatol': 1e-5, 'fatol': 1e-7, 'maxiter': 600})
    return 10**r.x[0], 10**r.x[1], r.fun


GAM = np.round(np.exp(np.linspace(np.log(0.15), np.log(6.0), 41)), 6)
DEL = np.round(np.concatenate([np.linspace(0.3, 2.0, 18), np.linspace(2.25, 6.0, 16)]), 4)
NN = DEL.copy()
FAM = {'template': (GAM, nu_tl), 'delta': (DEL, nu_delta), 'n': (NN, nu_n)}


def best_in_family(gobs, gbar, fam):
    grid, mk = FAM[fam]
    vals = np.array([prof_a0(gobs, gbar, mk(p))[1] for p in grid])
    i = int(np.argmin(vals))
    # parabolic refine on the grid in log-parameter
    if 0 < i < len(grid) - 1:
        xs = np.log(grid[i - 1:i + 2]); ys = vals[i - 1:i + 2]
        c = np.polyfit(xs, ys, 2)
        pbest = float(np.exp(-c[1] / (2 * c[0]))) if c[0] > 0 else float(grid[i])
    else:
        pbest = float(grid[i])
    return pbest, vals[i], vals


def W_of(fam, p):
    if fam == 'template':
        return float(W_template_analytic(p))
    return float(W_from_nu(FAM[fam][1](p)))


def main():
    out = []
    pr = lambda *a: (print(*a), out.append(' '.join(str(x) for x in a)))  # noqa: E731

    pr('=' * 78); pr('PART 1 -- shape statistics of each family (no data)'); pr('=' * 78)
    gl = np.exp(np.linspace(np.log(0.05), np.log(50), 400))
    Wg = W_template_analytic(gl)
    pr(f'template: W(0.5) analytic = {W_template_analytic(0.5):.4f}; numeric via nu->mu route = '
       f'{W_from_nu(nu_tl(0.5)):.4f}   (identity control C2)')
    pr(f'template: W monotone decreasing over [0.05,50]: {bool(np.all(np.diff(Wg) < 0))};  '
       f'min W = {Wg.min():.4f} at gamma={gl[np.argmin(Wg)]:.1f};  limit log10(atanh0.9/atanh0.1) = '
       f'{np.log10(np.arctanh(0.9)/np.arctanh(0.1)):.4f}')
    pr(f"{'gamma':>7} {'W':>7} {'t(10)':>7} {'t(100)':>7}")
    for g in (0.2, 0.3, 0.489, 0.5, 0.7, 1.0, 1.5, 2.0, 3.0, 6.0):
        pr(f'{g:7.3f} {W_template_analytic(g):7.3f} {tail_template(g, 10.):7.3f} {tail_template(g, 100.):7.3f}')
    for fam, mk in (('delta', nu_delta), ('n', nu_n)):
        pr(f"{fam:>7} {'W':>7} {'t(10)':>7} {'t(100)':>7}")
        for p in (0.5, 1, 1.5, 2, 3, 4, 5, 6):
            nu = mk(p)
            pr(f'{p:7.2f} {W_from_nu(nu):7.3f} {tail_from_nu(nu, 10.):7.3f} {tail_from_nu(nu, 100.):7.3f}')
    # nearest template member to each MOND member in (W, t(10)) plane
    pr('\nDistance of MOND members from the template curve in the (W, t(10)) plane:')
    gg = np.exp(np.linspace(np.log(0.05), np.log(50), 4000))
    TW, TT = W_template_analytic(gg), tail_template(gg, 10.)
    for fam, mk in (('delta', nu_delta), ('n', nu_n)):
        for p in (1, 2, 4, 6):
            nu = mk(p); w, t = W_from_nu(nu), tail_from_nu(nu, 10.)
            j = np.argmin(np.abs(TW - w)) if w >= TW.min() else None
            if j is None:
                pr(f'  {fam}={p}: W={w:.3f} < template floor {TW.min():.3f} -> unreachable at any gamma')
            else:
                pr(f'  {fam}={p}: W={w:.3f} t(10)={t:.2f}; template at same W: gamma={gg[j]:.3f}, '
                   f't(10)={TT[j]:.2f}')

    pr('\n' + '=' * 78); pr('PART 2 -- SPARC fits, frozen Upsilon (11-06 loader)'); pr('=' * 78)
    gid, gobs, gas, star = load()
    gbar = gas + star
    pr(f'N = {len(gobs)}  galaxies = {len(np.unique(gid))}')
    a1, s1 = prof_a0(gobs, gbar, nu_delta(1.0))
    pr(f'C1 delta=1: a0 = {a1:.5e} (ref 1.12751e-10)  SSR = {s1:.4f} (ref 57.9649) -> '
       f"{'PASS' if abs(s1-57.9649) < 1e-3 else 'FAIL'}")
    N = len(gobs)
    best = {}
    for fam in FAM:
        p, s, vals = best_in_family(gobs, gbar, fam)
        a0, s_ref = prof_a0(gobs, gbar, FAM[fam][1](p))
        best[fam] = (p, s_ref, a0)
        pr(f'{fam:>8}: best param {p:.4f}  a0 {a0:.4e}  SSR {s_ref:.4f}  rms {np.sqrt(s_ref/N):.4f}  '
           f'W {W_of(fam, p):.3f}  dBIC_pt vs delta=1 {N*np.log(s_ref/s1):+.1f}')
    dTD = N * np.log(best['template'][1] / best['delta'][1])
    pr(f'template best vs delta best: dBIC_pt = {dTD:+.2f} (each family has one shape param + a0)')

    pr('\n' + '=' * 78); pr('PART 3 -- galaxy-block bootstrap (B=%d): W per family, template-vs-delta' % B); pr('=' * 78)
    gals = np.unique(gid)
    idx = {g: np.where(gid == g)[0] for g in gals}
    Wb = {f: [] for f in FAM}; dB = []
    for b in range(B):
        pick = np.concatenate([idx[g] for g in RNG.choice(gals, len(gals), replace=True)])
        go, gb = gobs[pick], gbar[pick]
        ss = {}
        for fam in FAM:
            p, s, _ = best_in_family(go, gb, fam)
            Wb[fam].append(W_of(fam, p)); ss[fam] = s
        dB.append(len(pick) * np.log(ss['template'] / ss['delta']))
    for fam in FAM:
        w = np.array(Wb[fam])
        pr(f'{fam:>8}: W median {np.median(w):.3f}  2.5% {np.percentile(w,2.5):.3f}  16% {np.percentile(w,16):.3f}  '
           f'84% {np.percentile(w,84):.3f}  97.5% {np.percentile(w,97.5):.3f}  frac<1.17 {np.mean(w<1.17):.4f}')
    dB = np.array(dB)
    pr(f'template-vs-delta dBIC (galaxy boot): point {dTD:+.2f}  median {np.median(dB):+.2f}  sd {dB.std():.2f}  '
       f'16-84% [{np.percentile(dB,16):+.2f}, {np.percentile(dB,84):+.2f}]  point/sd {dTD/dB.std():+.2f}')

    pr('\n' + '=' * 78); pr('PART 4 -- global Upsilon scale profiled (P5)'); pr('=' * 78)
    res5 = {}
    for fam in FAM:
        grid, mk = FAM[fam]
        vals = []
        for p in grid:
            a0, s, sv = prof_a0_s(gobs, gas, star, mk(p))
            vals.append((sv, p, a0, s))
        vals.sort()
        sv, p, a0, s = vals[0]
        res5[fam] = p
        pr(f'{fam:>8}: best param {p:.4f}  a0 {a0:.4e}  Ups-scale {s:.3f}  SSR {sv:.4f}  W {W_of(fam, p):.3f}')
    W5 = []
    B5 = 150
    grid = DEL
    for b in range(B5):
        pick = np.concatenate([idx[g] for g in RNG.choice(gals, len(gals), replace=True)])
        vals = [(prof_a0_s(gobs[pick], gas[pick], star[pick], nu_delta(d))[2], d) for d in grid]
        W5.append(W_of('delta', min(vals)[1]))
    W5 = np.array(W5)
    pr(f'delta family, Ups scale free, galaxy boot B={B5}: W median {np.median(W5):.3f}  2.5% '
       f'{np.percentile(W5,2.5):.3f}  97.5% {np.percentile(W5,97.5):.3f}  frac<1.17 {np.mean(W5<1.17):.4f}')

    pr('\n' + '=' * 78); pr('PART 5 -- positive control: could SPARC show a sharp transition?'); pr('=' * 78)
    # truth = delta=6 at the delta=1 a0, plus the real delta=1 residuals (galaxy-correlated structure kept)
    r1 = np.log10(gobs) - np.log10(gbar * nu_delta(1.0)(gbar / a1))
    for dtrue in (6.0, 4.0):
        a6, _ = prof_a0(gobs, gbar, nu_delta(dtrue))
        gfake = gbar * nu_delta(dtrue)(gbar / a6) * 10**r1
        Wt = W_of('delta', dtrue)
        pf, _, _ = best_in_family(gfake, gbar, 'delta')
        pt, st, _ = best_in_family(gfake, gbar, 'template')
        pdl, sdl, _ = best_in_family(gfake, gbar, 'delta')
        Wr = []
        for b in range(100):
            pick = np.concatenate([idx[g] for g in RNG.choice(gals, len(gals), replace=True)])
            Wr.append(W_of('delta', best_in_family(gfake[pick], gbar[pick], 'delta')[0]))
        Wr = np.array(Wr)
        pr(f'inject delta={dtrue} (W_true {Wt:.3f}): recovered delta {pf:.3f} W {W_of("delta", pf):.3f}; '
           f'boot 97.5% {np.percentile(Wr,97.5):.3f}; template best gamma {pt:.3f} dBIC vs delta '
           f'{N*np.log(st/sdl):+.1f}')

    Path(__file__).with_name('template_forbidden_shapes_output.txt').write_text('\n'.join(out) + '\n')


if __name__ == '__main__':
    main()
