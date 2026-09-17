#!/usr/bin/env python3
"""Cassini Q2 for MOND's own interpolating functions, on TEST-25's instrument.

PREREG: cassini_q2_mond_interpolating_functions_PREREG.md (committed 43a66a3 before running).
Instrument: Synchronism/simulations/sparc_cassini_q2.py (Desmond, Hees & Famaey 2024 Eq. 12).
"""

import sys
from pathlib import Path

import numpy as np

SIM = Path(__file__).resolve().parents[3] / "Synchronism" / "simulations"
sys.path.insert(0, str(SIM))
import sparc_cassini_q2 as inst  # noqa: E402

MEAN, SIGMA = 1.6e-27, 1.8e-27


def nu_delta(delta):
    def f(y):
        y = np.asarray(y, dtype=float)
        return (-np.expm1(-y ** (delta / 2.0))) ** (-1.0 / delta)
    return f


def nu_n(n):
    return lambda y: inst.nu_n_family(y, n)


def z_of(nu, a0, g_ext):
    r = inst.qumond_q(nu, g_ext / a0)
    q2 = inst.q2_si(r.q, a0)
    return q2, (q2 - MEAN) / SIGMA, r.estimated_error / max(r.q_abs, 1e-300)


def main():
    # C2: delta = 1 is McGaugh's RAR nu
    y = np.logspace(-8, 3, 2001)
    c2 = float(np.max(np.abs(nu_delta(1.0)(y) / inst.nu_rar(y) - 1)))
    print(f"C2 max|nu_delta1/nu_rar - 1| = {c2:.2e}  -> {'PASS' if c2 < 1e-12 else 'FAIL'}")

    # C1: compander control reproduces TEST-25
    q2, z, err = z_of(inst.TanhLogNu(0.489), 5.33265e-11, 2.32e-10)
    print(f"C1 compander gamma=0.489 a0=5.33265e-11 g_ext=2.32e-10: Q2={q2:.4e} z={z:+.2f} "
          f"-> {'PASS' if abs(z - 17.95) < 0.05 else 'FAIL'}")

    ifs = [("McGaugh RAR nu (delta=1)", inst.nu_rar),
           ("simple n=1", nu_n(1.0)), ("standard n=2", nu_n(2.0))]
    ifs += [(f"delta={d}", nu_delta(d)) for d in (1.5, 2.0, 2.5, 3.0, 4.0)]

    print("\nIF | a0 | g_ext | Q2 [s^-2] | z | rel.int.err | inside 95%?")
    for name, nu in ifs:
        for a0 in (1.20e-10, 1.128e-10):
            for g_ext in (2.00e-10, 2.32e-10, 2.48e-10):
                q2, z, err = z_of(nu, a0, g_ext)
                ok = -1.928e-27 <= q2 <= 5.128e-27
                print(f"{name:26s} | {a0:.3e} | {g_ext:.2e} | {q2:+.3e} | {z:+7.2f} | {err:.1e} | {'yes' if ok else 'no'}")


if __name__ == "__main__":
    main()


def posthoc_compander_gamma_scan():
    """POST-HOC (not in the PREREG): does the compander family have a Cassini-passing member?"""
    print("\nPOST-HOC compander gamma scan (SPARC cost not evaluated; gamma=2 is SPARC-excluded at dBIC +184)")
    for gamma in (0.75, 1.0, 1.5, 2.0, 3.0):
        for a0 in (1.20e-10, 5.33265e-11):
            q2, z, err = z_of(inst.TanhLogNu(gamma), a0, 2.32e-10)
            ok = -1.928e-27 <= q2 <= 5.128e-27
            print(f"compander gamma={gamma:<5} | a0={a0:.3e} | g_ext=2.32e-10 | Q2={q2:+.3e} | z={z:+7.2f} | {'yes' if ok else 'no'}")
