#!/usr/bin/env python3
"""
Quantum control for the disjoint-settings case (explorer 2026-10-04). The no-signaling LP
(no_signaling_chsh_monogamy_lp.py) shows shared maximal violation is allowed when A uses different
settings for B and C. Does QM forbid it when A is a single QUBIT? Horodecki: max CHSH of a 2-qubit
state = 2 sqrt(t1^2 + t2^2), t = top singular values of the correlation matrix. With disjoint settings
the two pairs are optimized independently, so maximize H(rho_AB) + H(rho_AC) over 3-qubit pure states
(12 random restarts + Powell). Control: A = two qubits (dim 4) reaches 2*2.828 = 5.657.
"""
import numpy as np
from scipy.optimize import minimize

P = [np.array([[0, 1], [1, 0]]), np.array([[0, -1j], [1j, 0]]), np.array([[1, 0], [0, -1]])]


def horodecki(rho):
    T = np.array([[np.real(np.trace(rho @ np.kron(a, b))) for b in P] for a in P])
    s = np.sort(np.linalg.svd(T, compute_uv=False))[::-1]
    return 2 * np.sqrt(s[0] ** 2 + s[1] ** 2)


def reduced(psi, keep, dims):
    psi = psi.reshape(dims)
    n = len(dims)
    tr = [i for i in range(n) if i not in keep]
    rho = np.tensordot(psi, psi.conj(), axes=(tr, tr))
    d = int(np.prod([dims[k] for k in keep]))
    return rho.reshape(d, d)


def neg_sum(v, dims):
    psi = v[: len(v) // 2] + 1j * v[len(v) // 2:]
    psi = psi / np.linalg.norm(psi)
    if dims == (2, 2, 2):
        return -(horodecki(reduced(psi, [0, 1], dims)) + horodecki(reduced(psi, [0, 2], dims)))
    # A = two qubits (A1 A2) B C: AB test uses A1, AC test uses A2
    psi = psi.reshape(2, 2, 2, 2)
    rab = reduced(psi.reshape(-1), [0, 2], (2, 2, 2, 2))
    rac = reduced(psi.reshape(-1), [1, 3], (2, 2, 2, 2))
    return -(horodecki(rab) + horodecki(rac))


rng = np.random.default_rng(1)
for dims, label in (((2, 2, 2), "A = one qubit"), ((2, 2, 2, 2), "A = two qubits (control)")):
    d = int(np.prod(dims))
    best = 0
    for _ in range(12):
        r = minimize(neg_sum, rng.normal(size=2 * d), args=(dims,), method="Powell",
                     options={"maxiter": 4000, "xtol": 1e-6, "ftol": 1e-9})
        best = max(best, -r.fun)
    print(f"{label}: max S_AB + S_AC (disjoint A settings) = {best:.4f}   [classical 4, NS 8, 2*Tsirelson 5.657]")
