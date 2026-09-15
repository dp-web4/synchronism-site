#!/usr/bin/env python3
r"""
C3 of explorer/work/2026-09-15-wake-and-prereg.md (committed ab620af before this ran).

A compact body (star, cluster) in a density-keyed permittivity law sits in its own high-C region: its own mass,
averaged over the smoothing ball, raises rho above the ambient value.  Under L2 (div[C grad Phi] = 4 pi G rho, matter
follows -grad Phi) the external field inside a dielectric sphere is F = 3 eps_out/(eps_in + 2 eps_out) times the field
outside, so a compact tracer feels M F g_out while a diffuse tracer at the same place feels g_out.

Under L3 (the action L = -C|grad Phi|^2/8piG - rho Phi, force -grad Phi - grad Psi, Psi = W*[C'(rho_D)|grad Phi|^2]/8piG)
the centre-of-mass force on the body is claimed to be exactly M g_out.  Proof sketch (sharp step, point mass): the
striction force integrates to (1/8piG) int |grad Phi|^2 grad C dV; only the self x external cross term survives the
angular integral, giving -M A (eps_in - eps_out)/(eps_in + 2 eps_out); added to the L2 force -M F A it gives -M A.
Checked numerically here for smooth profiles.

Method: l = 1 external-field mode Phi_ext = f(r) cos(theta) in the spherically symmetric eps(r) = C(rho_bg + rho_D(r)).
  (eps r^2 f')' = 2 eps f,  f ~ r at the origin.  Far away (eps const) f = A r + B/r^2, so 3A = 2 f/r + f'.
  F_L2 = (force on body under L2) / (M A)  = [int rho 4 pi r^2 (f' + 2 f/r)/3 dr] / (M A)
  F_str = (1/3) int M_enc(r) f'(r) eps'(r)/eps(r) dr / (M A)     [G cancels; self field g_s = G M_enc/(eps r^2)]
  F_L3 = F_L2 + F_str   (must be 1)
"""
import json, math
import numpy as np
from scipy.integrate import solve_ivp, quad

OM = 0.315
LAWS = {
    'F g0.489 rc0.0039': ('F', dict(gamma=0.489, rc=0.0039)),
    'F g0.489 rc0.0079': ('F', dict(gamma=0.489, rc=0.0079)),
    'F g2 rc0.0735':     ('F', dict(gamma=2.0, rc=0.0735)),
    'F g2 rc0.078':      ('F', dict(gamma=2.0, rc=0.078)),
    'RG e0.089':         ('RG', dict(eps0=0.089, Q=0.47, rc=0.0083)),
    'RG e0.25':          ('RG', dict(eps0=0.25, Q=0.47, rc=0.0083)),
    'RG e0.56':          ('RG', dict(eps0=0.56, Q=0.47, rc=0.0083)),
}
TRACERS = [  # name, M [Msun], Plummer r_h [pc] (0 = point mass)
    ('star 1 Msun', 1.0, 0.0),
    ('star 10 Msun', 10.0, 0.0),
    ('open cluster 1e3', 1e3, 2.0),
    ('Pal5-like 1.5e4', 1.5e4, 20.0),
    ('typical GC 2e5', 2e5, 3.0),
    ('omegaCen-like 3.5e6', 3.5e6, 7.0),
]
TOLS = (0.01, 0.05, 0.2)
DGRID = np.logspace(-2, math.log10(3000.0), 43)   # pc


def eps_of(law, rho):
    kind, p = LAWS[law]
    rho = np.maximum(rho, 1e-30)
    if kind == 'F':
        return OM + (1 - OM) * np.tanh(p['gamma'] * np.log1p(rho / p['rc']))
    return p['eps0'] + (1 - p['eps0']) / 2 * (np.tanh(p['Q'] * np.log(rho / p['rc'])) + 1)


def plummer_rho(M, rh):
    a = rh / 1.30477
    return lambda s: 3 * M / (4 * math.pi * a ** 3) * (1 + (s / a) ** 2) ** -2.5, a


def smoothed_body_density(M, rh, D, kernel):
    """Return rho_D(r) (callable on arrays) for the body alone."""
    if rh == 0.0:
        if kernel == 'tophat':
            V = 4 / 3 * math.pi * D ** 3
            return lambda r: np.where(r < D, M / V, 0.0), D
        norm = M / ((2 * math.pi) ** 1.5 * D ** 3)
        return lambda r: norm * np.exp(-np.asarray(r) ** 2 / (2 * D ** 2)), None
    rho, a = plummer_rho(M, rh)
    smax = 60 * a
    s = np.geomspace(a * 1e-4, smax, 3000)
    w = 4 * math.pi * s ** 2 * rho(s)
    if kernel == 'tophat':
        V = 4 / 3 * math.pi * D ** 3
        def f(r):
            out = []
            for x in np.atleast_1d(r):
                if x < 1e-12:
                    frac = (s < D).astype(float)
                else:
                    frac = np.clip((D ** 2 - (x - s) ** 2) / (4 * x * s), 0.0, 1.0)
                    frac = np.where(s + x <= D, 1.0, np.where(np.abs(x - s) >= D, 0.0, frac))
                out.append(np.trapz(w * frac, s) / V)
            return np.array(out)
        return f, None
    def f(r):
        out = []
        for x in np.atleast_1d(r):
            if x < 1e-9:
                k = np.exp(-s ** 2 / (2 * D ** 2))
            else:
                u = x * s / D ** 2
                k = np.exp(-(x - s) ** 2 / (2 * D ** 2)) * (-np.expm1(-2 * u)) / (2 * u)
            out.append(np.trapz(w * k, s) / ((2 * math.pi) ** 1.5 * D ** 3))
        return np.array(out)
    return f, None


def menc_body(M, rh):
    if rh == 0.0:
        return lambda r: M * np.ones_like(np.asarray(r, float))
    a = rh / 1.30477
    return lambda r: M * np.asarray(r) ** 3 / (np.asarray(r) ** 2 + a ** 2) ** 1.5


def bubble(law, M, rh, D, rho_bg, kernel='tophat', step=None):
    """Return dict(F_L2, F_L3, eps_in, eps_out).  step=(R, eps_in, eps_out) forces a sharp top-hat for validation."""
    L = max(D, rh if rh > 0 else D)
    rmax = 40 * L
    r = np.concatenate([np.geomspace(L * 1e-5, L * 0.9, 900), np.linspace(L * 0.9, 1.1 * L, 1200)[1:],
                        np.geomspace(1.1 * L, rmax, 1500)[1:]])
    if step is not None:
        R, ei, eo = step
        eps = np.where(r < R, ei, eo)
    else:
        rhoD, _ = smoothed_body_density(M, rh, D, kernel)
        if rh == 0.0:
            rho_r = rhoD(r)
        else:   # evaluate the (expensive) convolution on a coarse log grid, interpolate in log-log
            rc_ = np.geomspace(r[0], r[-1], 500)
            vals = np.maximum(rhoD(rc_), 1e-300)
            rho_r = np.exp(np.interp(np.log(r), np.log(rc_), np.log(vals)))
        eps = eps_of(law, rho_bg + rho_r)
    eps_out = eps[-1]
    # integrate p = eps r^2 f', f ; dp/dr = 2 eps f ; df/dr = p/(eps r^2), piecewise-linear eps in log r
    lr = np.log(r)
    le = np.log(eps)
    def rhs(t, y):
        x = math.exp(t)
        e = math.exp(np.interp(t, lr, le))
        p, fv = y
        return [2 * e * fv * x, p / (e * x ** 2) * x]
    r0 = r[0]
    e0 = eps[0]
    y0 = [e0 * r0 ** 2 * 1.0, r0]
    sol = solve_ivp(rhs, (lr[0], lr[-1]), y0, t_eval=lr, rtol=1e-9, atol=1e-14, max_step=0.01)
    p, fv = sol.y
    fp = p / (eps * r ** 2)
    A = (2 * fv[-1] / r[-1] + fp[-1]) / 3
    F_centre = 1.0 / A          # f'(0) = 1
    res = dict(F_centre=F_centre, eps_in=float(eps[0]), eps_out=float(eps_out))
    if step is not None:
        res['analytic'] = 3 * eps_out / (eps[0] + 2 * eps_out)
        # striction for the point mass with sharp step: p continuous across the step
        R, ei, eo = step
        pR = np.interp(math.log(R), lr, p)
        # int f' dln(eps) across the step = q (1/ei - 1/eo), q = eps f' continuous = p/R^2
        # normalised like F: force / (-M A)
        res['F_str'] = -(1 / 3) * (pR / R ** 2) * (1 / ei - 1 / eo) / A
        res['F_L3'] = F_centre + res['F_str']
        return res
    # L2 force on the body: int rho_actual 4 pi r^2 (f' + 2f/r)/3 dr / (M A)
    if rh == 0.0:
        F_L2 = F_centre
    else:
        rho_act, _ = plummer_rho(M, rh)
        integrand = rho_act(r) * 4 * math.pi * r ** 2 * (fp + 2 * fv / r) / 3
        F_L2 = np.trapz(integrand, r) / (M * A)
    # int M_enc f' eps'/eps dr = int (M_enc eps f') d(-1/eps); eps f' is continuous even across a sharp step
    Me = menc_body(M, rh)(r)
    q = Me * eps * fp
    # striction force_z = +(1/3) int M_enc f' eps'/eps dr (in units G M... ); normalised like F_L2: force / (-M A)
    F_str = -(1 / 3) * np.sum(0.5 * (q[1:] + q[:-1]) * np.diff(-1 / eps)) / (M * A)
    res.update(F_L2=float(F_L2), F_str=float(F_str), F_L3=float(F_L2 + F_str))
    return res


def main():
    out = dict(validation=[], table={})
    print('=' * 100)
    print('VALIDATION 1: sharp top-hat step, point mass; F(centre) vs 3 eps_out/(eps_in+2 eps_out); L3 = F_L2 + F_str -> 1')
    print('=' * 100)
    for ei, eo in ((1.0, 0.315), (1.0, 0.089), (0.6, 0.315), (0.95, 0.9)):
        r = bubble(None, 1.0, 0.0, 1.0, 0.0, step=(1.0, ei, eo))
        print(f"  eps_in={ei:5.3f} eps_out={eo:5.3f}: F num {r['F_centre']:.5f}  analytic {r['analytic']:.5f}  "
              f"rel err {abs(r['F_centre']/r['analytic']-1):.1e}   F_str {r['F_str']:+.5f}  F_L3 {r['F_L3']:.5f}")
        out['validation'].append(dict(ei=ei, eo=eo, **{k: float(v) for k, v in r.items()}))

    print('\n' + '=' * 100)
    print('VALIDATION 2: smooth profiles, L3 = F_L2 + F_str must be 1 (numerical check of the composite-body claim)')
    print('=' * 100)
    for law, (nm, M, rh), D, bg in (('F g0.489 rc0.0079', TRACERS[4], 100.0, 1e-5),
                                    ('RG e0.089', TRACERS[3], 30.0, 1e-5),
                                    ('F g2 rc0.078', TRACERS[5], 3.0, 1e-5)):
        for kern in ('tophat', 'gauss'):
            r = bubble(law, M, rh, D, bg, kernel=kern)
            print(f"  {law:18s} {nm:20s} D={D:6.1f} {kern:6s}: eps_in {r['eps_in']:.4f} eps_out {r['eps_out']:.4f}  "
                  f"F_L2 {r['F_L2']:.4f}  F_str {r['F_str']:+.4f}  F_L3 {r['F_L3']:.4f}")
    r = bubble('F g0.489 rc0.0079', 1.0, 0.0, 1.0, 1e-5, kernel='gauss')
    print(f"  point mass, Gaussian D=1 pc: F_L2 {r['F_L2']:.4f}  F_L3 {r['F_L3']:.4f}")

    BGS = {'halo 1e-5': lambda law: 1e-5,
           'outskirt 0.1 rc': lambda law: 0.1 * LAWS[law][1]['rc'],
           'solar nbhd 0.084': lambda law: 0.084}
    print('\n' + '=' * 100)
    print('C3 TABLE: D_min(T) = smallest D beyond which |1 - F_L2| <= T for all larger D on the grid (top-hat kernel)')
    print('          F_L2 at D = 0.01 pc shown as "pointwise"; ">3kpc" = never within T on the grid')
    print('=' * 100)
    for bgname, bgf in BGS.items():
        print(f"\n--- background: {bgname} ---")
        print(f"{'law':18s} {'tracer':20s} {'eps_out':>7s} {'F(0.01pc)':>9s} {'F(1pc)':>7s} {'F(10pc)':>7s} {'F(100pc)':>8s} {'F(300pc)':>8s}"
              + ''.join(f"{'Dmin T='+str(t):>13s}" for t in TOLS))
        for law in LAWS:
            for nm, M, rh in TRACERS:
                Fs = []
                for D in DGRID:
                    Fs.append(bubble(law, M, rh, D, bgf(law))['F_L2'])
                Fs = np.array(Fs)
                dmins = []
                for t in TOLS:
                    bad = np.where(np.abs(1 - Fs) > t)[0]
                    if len(bad) == 0:
                        dmins.append(DGRID[0])
                    elif bad[-1] == len(DGRID) - 1:
                        dmins.append(np.inf)
                    else:
                        dmins.append(DGRID[bad[-1] + 1])
                pick = lambda d: float(np.interp(math.log(d), np.log(DGRID), Fs))
                eo = bubble(law, M, rh, 1000.0, bgf(law))['eps_out']
                fmt = lambda d: ('>3kpc' if not np.isfinite(d) else (f'{d:.3g}pc' if d > DGRID[0] else '<0.01pc'))
                print(f"{law:18s} {nm:20s} {eo:7.4f} {Fs[0]:9.4f} {pick(1):7.4f} {pick(10):7.4f} {pick(100):8.4f} {pick(300):8.4f}"
                      + ''.join(f"{fmt(d):>13s}" for d in dmins), flush=True)
                out['table'][f'{bgname}|{law}|{nm}'] = dict(F=Fs.tolist(), D=DGRID.tolist(),
                                                           Dmin={str(t): (None if not np.isfinite(d) else float(d))
                                                                 for t, d in zip(TOLS, dmins)})
    json.dump(out, open('compact_tracer_bubble_factor.json', 'w'))


if __name__ == '__main__':
    main()
