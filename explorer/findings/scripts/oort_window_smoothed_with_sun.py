#!/usr/bin/env python3
r"""
C2 of explorer/work/2026-09-15-wake-and-prereg.md (committed ab620af before this ran).

Oort-limit window on rho_c when the density at the Sun is a top-hat ball average of radius D, with and without the
Sun's own mass in the ball.  Local baryons rho(z) = 0.084 sech^2(z/z_h), z_h = 280 pc (Sigma = 47 Msun/pc^2).
Window: McKee+2015 f_DM = 0.134 +/- 0.036 at 2 sigma, f_DM,pred = 1 - C(rho_D), floor Omega_m (as 09-08).
Rule: window "moves" if either edge changes by > 1.5x from D = 0; "closes" if it has no overlap with the C1
not-EXCL GC band at the same D (C1: every window-edge knee stays ok to D = 30 pc).

Post-hoc (not in the pre-registration, labelled as such): the L2 tracer-bubble correction for a 1 Msun Oort tracer
star, using compact_tracer_bubble_factor.bubble, i.e. the tracer feels F * g instead of g, so
f_DM,apparent = 1 - C/F.
"""
import math
import numpy as np
from scipy.optimize import brentq
from compact_tracer_bubble_factor import bubble, LAWS

OM = 0.315
RHO0, ZH = 0.084, 280.0
MCKEE = (0.134, 0.036)
DS = [0.0, 1.0, 3.0, 10.0, 30.0, 100.0, 300.0]


def C(rho, gamma, rc):
    return OM + (1 - OM) * np.tanh(gamma * np.log1p(rho / rc))


def rho_ball(D, sun):
    if D == 0.0:
        return RHO0 + (np.inf if sun else 0.0)
    z = np.linspace(-D, D, 4001)
    V = 4 / 3 * math.pi * D ** 3
    m = np.trapz(RHO0 / np.cosh(z / ZH) ** 2 * math.pi * (D ** 2 - z ** 2), z)
    return m / V + (1.0 / V if sun else 0.0)


def window(rho_at_sun, gamma, bubbleF=None):
    """rho_c interval with |1 - C(rho)/F - f_meas| <= 2 sigma.  bubbleF(rc) optional."""
    lo_f, hi_f = MCKEE[0] - 2 * MCKEE[1], MCKEE[0] + 2 * MCKEE[1]
    def fdm(rc):
        Cv = C(rho_at_sun, gamma, rc)
        F = bubbleF(rc) if bubbleF else 1.0
        return 1 - Cv / F
    grid = np.logspace(-6, 2, 800)
    vals = np.array([fdm(rc) for rc in grid])
    ok = (vals >= lo_f) & (vals <= hi_f)
    if not ok.any():
        return None
    return grid[ok].min(), grid[ok].max(), vals


def main():
    print(f"rho(z) = {RHO0} sech^2(z/{ZH} pc); Sigma = {2*RHO0*ZH:.1f} Msun/pc^2")
    print(f"{'D [pc]':>7s} {'<rho> slab':>11s} {'Sun term':>10s} {'rho_D (sun on)':>15s}")
    for D in DS[1:]:
        print(f"{D:7.1f} {rho_ball(D, False):11.4g} {1/(4/3*math.pi*D**3):10.4g} {rho_ball(D, True):15.4g}")
    for gamma, edges in ((0.489, (0.0039, 0.0079)), (2.0, (0.0735, 0.078))):
        print("\n" + "=" * 96)
        print(f"gamma = {gamma}: McKee 2 sigma window on rho_c [Msun/pc3]   (joint-window edges {edges})")
        print("=" * 96)
        w0 = window(rho_ball(0.0, False), gamma)
        print(f"{'D':>6s} {'Sun off':>24s} {'moves?':>7s} {'Sun on':>24s} {'moves?':>7s} {'GC-edge knees inside (on)?':>28s}")
        for D in DS:
            wo = window(rho_ball(D, False), gamma)
            won = window(rho_ball(D, True), gamma) if D > 0 else wo
            mv = lambda w: ('--' if w is None else ('YES' if (w[0] / w0[0] > 1.5 or w0[0] / w[0] > 1.5 or
                                                            w[1] / w0[1] > 1.5 or w0[1] / w[1] > 1.5) else 'no'))
            fmt = lambda w: 'EMPTY' if w is None else f"{w[0]:.4g}-{w[1]:.4g}"
            inside = 'EMPTY' if won is None else ', '.join(f"{e}:{'in' if won[0] <= e <= won[1] else 'out'}" for e in edges)
            print(f"{D:6.0f} {fmt(wo):>24s} {mv(wo):>7s} {fmt(won):>24s} {mv(won):>7s} {inside:>28s}")
        # post-hoc: L2 bubble on a 1 Msun tracer, background = the smoothed disc density (Sun term off: the tracer is
        # not the Sun; its own mass is the bubble)
        print(f"  POST-HOC L2 tracer bubble (1 Msun tracer star, background = slab average):")
        for D in (1.0, 3.0, 10.0, 30.0):
            bg = rho_ball(D, False)
            def Fof(rc, D=D, bg=bg):
                LAWS['tmp'] = ('F', dict(gamma=gamma, rc=rc))
                return bubble('tmp', 1.0, 0.0, D, bg)['F_L2']
            # coarse: evaluate F on a small rc grid and interpolate
            rcg = np.logspace(-4, 0.5, 19)
            Fg = np.array([Fof(rc) for rc in rcg])
            Fi = lambda rc: float(np.interp(math.log(rc), np.log(rcg), Fg))
            wb = window(bg, gamma, bubbleF=Fi)
            inside = 'EMPTY' if wb is None else ', '.join(f"{e}:{'in' if wb[0] <= e <= wb[1] else 'out'}" for e in edges)
            Fe = [Fi(e) for e in edges]
            print(f"    D={D:5.1f} pc: F at the edges {Fe[0]:.4f}, {Fe[1]:.4f};  window "
                  f"{'EMPTY' if wb is None else f'{wb[0]:.4g}-{wb[1]:.4g}'};  edges {inside}")


if __name__ == '__main__':
    main()
