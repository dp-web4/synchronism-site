#!/usr/bin/env python3
r"""
DOES "THE COMPANDER FORM FAILS ON ITS OWN, 2.10x" SURVIVE A LIKE-FOR-LIKE SWAP?
==============================================================================
Maintainer 2026-09-16.  Pre-registration: compander_form_isolation_controls_PREREG.md
(committed before this was run).

The source comparison (explorer 2026-09-09) changed function, gamma, knee AND floor form at once:
MOND mu used a clip floor max(mu, f); the compander used an affine floor f + (1-f) tanh(.).
This script separates them, with an identity control (R1 == R0 algebraically).

Same solver, same 153 discs, Upsilon_disk = 0.5, argument |grad Phi|.
"""
import os
import sys
import time
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "..", "explorer", "findings", "scripts")
sys.path.insert(0, SRC)
import l2_sparc_core as K                                          # noqa: E402
from argument_of_C_head_to_head_l2 import GalArg, C_tanh, RG_FLOOR  # noqa: E402
from aqual_fixed_point_check import solve_selfconsistent, mond_mu_floor, A0  # noqa: E402


def tanh_clip(gamma, x_c, floor):
    """The compander with MOND's clip floor instead of the affine one."""
    return lambda X: np.maximum(np.tanh(gamma * np.log1p(np.maximum(X, 0.0) / x_c)), floor)


def chi2N(G, mu, cmin):
    num = den = 0
    for gg in G:
        B, _ = solve_selfconsistent(gg, mu, cmin)
        v = np.sqrt(np.clip(B * gg.vbar2, 0, None))
        o = gg.ok & (v > 0)
        if o.sum() < 4:
            continue
        num += float((((gg.d["Vobs"] - v) / gg.d["eVobs"])**2)[o].sum())
        den += int(o.sum())
    return num / den


def main():
    t0 = time.time()
    f = RG_FLOOR
    # identity check on a grid before spending solver time
    X = np.logspace(-4, 4, 2001) * A0
    d = np.max(np.abs(tanh_clip(0.5, 0.5 * A0, f)(X) - mond_mu_floor(f)(X)))
    print(f"algebraic identity check  max|R1-R0| on x in [1e-4,1e4]: {d:.2e}")
    x1 = np.array([A0])
    print(f"floor form at x = g/a0 = 1 (gamma=1/2, knee a0/2): clip {tanh_clip(0.5, .5*A0, f)(x1)[0]:.4f}  "
          f"affine {C_tanh(0.5, .5*A0, f)(x1)[0]:.4f}\n")

    gal = K.load_sparc()
    G = []
    for gid in sorted(gal):
        try:
            G.append(GalArg(gal[gid]))
        except Exception as e:                                     # noqa
            print("skip", gid, e)
    print(f"built {len(G)} discs in {time.time()-t0:.0f}s (Upsilon_disk = 0.5 fixed)\n", flush=True)

    cases = [("R0 MOND mu, clip floor",                     mond_mu_floor(f)),
             ("R1 tanh g=0.5  knee .5a0  clip  (== R0)",     tanh_clip(0.5, 0.5 * A0, f)),
             ("R2 tanh g=.489 knee .5a0  clip",              tanh_clip(0.489, 0.5 * A0, f)),
             ("R3 tanh g=.489 knee .32a0 clip",              tanh_clip(0.489, 0.32 * A0, f)),
             ("R4 tanh g=0.5  knee .5a0  affine",            C_tanh(0.5, 0.5 * A0, f)),
             ("R5 tanh g=.489 knee .32a0 affine (source)",   C_tanh(0.489, 0.32 * A0, f))]
    ref = None
    for name, mu in cases:
        c = chi2N(G, mu, f)
        ref = ref or c
        print(f"{name:<44s} chi2/N = {c:8.2f}   ratio to R0 = {c/ref:6.3f}   [{time.time()-t0:.0f}s]", flush=True)


if __name__ == "__main__":
    main()
