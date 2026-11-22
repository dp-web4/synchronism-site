"""Can a 26-neighbour (Moore) rule run at one cell per tick (lambda = 1) in 3D? (explorer 2026-11-22, post hoc)

Tensor-product stencil: symbol L(k) = (4/a^2) (1 - prod_i cos^2(k_i a/2)), a 27-point stencil.
Leapfrog: sin^2(w tau/2) = (lambda^2 a^2 / 4) L(k). Stable iff max over BZ of (a^2/4) L <= 1/lambda^2.
"""
import mpmath as mp
import numpy as np

mp.mp.dps = 50


def L_tensor(kv):
    return 4 * (1 - mp.fprod([mp.cos(k / 2) ** 2 for k in kv]))


def E2_leap(kv, lam=1):
    s = lam ** 2 * L_tensor(kv) / 4
    return (2 / lam * mp.asin(mp.sqrt(s))) ** 2


def eta(khat, p=mp.mpf("1e-6")):
    kv = [p * c for c in khat]
    return (E2_leap(kv) - p ** 2) / p ** 4


n = 120
th = (np.arange(n) + 0.5) / n * np.pi
c2 = np.cos(th) ** 2
sym = 1 - c2[:, None, None] * c2[None, :, None] * c2[None, None, :]
print(f"max (a^2/4) L over BZ = {sym.max():.6f} (stable at lambda=1 iff <= 1)")
dirs = {"axis": (1, 0, 0), "face-diag": (1 / mp.sqrt(2), 1 / mp.sqrt(2), 0),
        "body-diag": (1 / mp.sqrt(3),) * 3}
for d, k in dirs.items():
    print(f"  eta[{d}] = {float(eta(k)):+.6f}")
print("  predicted: -sum_{i<j} khat_i^2 khat_j^2 / 12 -> axis 0, face -1/48 = -0.020833, body -1/36 = -0.027778")
rng = np.random.default_rng(2)
v = rng.normal(size=(400, 3)); v /= np.linalg.norm(v, axis=1)[:, None]
vals = [float(eta([mp.mpf(x) for x in r])) for r in v]
print(f"  sphere scan: min {min(vals):+.5f} max {max(vals):+.5f}")
