"""Grid quadratic dispersion vs threshold kinematics (explorer 2026-11-22).

PREREG: findings/PREREG-grid-quadratic-dispersion-threshold-bounds-20261122.md (commit 4752de6).
Units: a = 1 (lattice spacing), c = 1. eta defined by E^2 = p^2 + m^2 + eta a^2 p^4 at low p.
"""
import mpmath as mp
import numpy as np

mp.mp.dps = 60

AXIS = (1, 0, 0)
FACE = (1 / mp.sqrt(2), 1 / mp.sqrt(2), 0)
DIAG = (1 / mp.sqrt(3), 1 / mp.sqrt(3), 1 / mp.sqrt(3))
DIRS = {"axis": AXIS, "face-diag": FACE, "body-diag": DIAG}


def lap(kv):  # 7-point Laplacian symbol
    return sum(4 * mp.sin(ki / 2) ** 2 for ki in kv)


def E2_S1(kv, m=0):  # continuous time scalar
    return m ** 2 + lap(kv)


def E2_leapfrog(lam):
    def f(kv, m=0):
        rhs = (m ** 2 + lap(kv)) * lam ** 2 / 4  # = sin^2(w tau/2)
        if rhs > 1:
            return mp.nan  # unstable mode
        w = 2 / lam * mp.asin(mp.sqrt(rhs))
        return w ** 2
    return f


def E2_wilson(r=1):
    def f(kv, m=0):
        kin = sum(mp.sin(ki) ** 2 for ki in kv)
        mw = m + r * sum(1 - mp.cos(ki) for ki in kv)
        return kin + mw ** 2
    return f


SCHEMES = {
    "S1 scalar, continuous time": E2_S1,
    "S2 scalar leapfrog lambda=1": E2_leapfrog(mp.mpf(1)),
    "S3 scalar leapfrog lambda=1/sqrt3": E2_leapfrog(1 / mp.sqrt(3)),
    "F Wilson fermion r=1, cont. time": E2_wilson(1),
}


def eta(E2f, khat, p=mp.mpf("1e-6"), m=0):
    kv = [p * c for c in khat]
    return (E2f(kv, m) - p ** 2 - m ** 2) / p ** 4


def main():
    print("== C0 identity control: 1D leapfrog lambda=1 ==")
    for p in [mp.mpf("1e-3"), mp.mpf("0.3"), mp.mpf("2.0")]:
        w = 2 * mp.asin(mp.sin(p / 2))
        print(f"  k={float(p)}: omega-k = {mp.nstr(w - p, 3)}")
    print("  3D leapfrog lambda=1 along axis, eta:", mp.nstr(eta(E2_leapfrog(mp.mpf(1)), AXIS), 5))

    print("\n== P1 low-k eta per direction (exact dispersion, p=1e-6, m=0) ==")
    results = {}
    for name, f in SCHEMES.items():
        row = {d: float(eta(f, k)) for d, k in DIRS.items()}
        results[name] = row
        print(f"  {name:38s} " + "  ".join(f"{d}: {v:+.6f}" for d, v in row.items()))
    print("  predicted: S1 -1/12=-0.083333..-1/36=-0.027778; S2 0..+1/18=0.055556; "
          "S3 -1/18..0; F -1/12..+5/36=0.138889")

    # random directions: min/max over sphere
    rng = np.random.default_rng(1)
    v = rng.normal(size=(4000, 3)); v /= np.linalg.norm(v, axis=1)[:, None]
    print("  sphere scan (4000 dirs, float):")
    for name, f in SCHEMES.items():
        mp.mp.dps = 40
        vals = [float(eta(f, [mp.mpf(x) for x in d])) for d in v[:600]]
        print(f"    {name:38s} min {min(vals):+.5f} max {max(vals):+.5f}")
    mp.mp.dps = 60

    print("\n== P2 stability: 3D 7-point leapfrog at lambda=1 ==")
    n = 200
    th = (np.arange(n) + 0.5) / n * np.pi  # k_i a/2 in (0, pi), symmetric
    s2 = np.sin(th) ** 2
    tot = s2[:, None, None] + s2[None, :, None] + s2[None, None, :]
    frac = (tot > 1).mean()
    print(f"  unstable fraction of BZ (sum sin^2 > 1): {frac:.4f}")
    # growth per tick of worst mode: lambda^2 * sum = 3 -> cos(w)=1-2*3 = -5 -> |g| = 5+sqrt(24)
    g = 5 + np.sqrt(24)
    print(f"  worst-mode amplification per tick |g| = {g:.3f} (corner k=(pi,pi,pi))")
    print(f"  e-folds per Planck time {np.log(g):.2f}; per second {np.log(g)/5.39e-44:.2e}")
    print(f"  stability limit lambda_max = 1/sqrt(3) = {1/np.sqrt(3):.4f}")

    print("\n== P3 thresholds from exact dispersion, universal (same E2f for all species) ==")
    threshold_checks()


def E_of(E2f, p, khat, m):
    return mp.sqrt(E2f([p * c for c in khat], m))


def min_split(E2f, khat, p, masses, x_grid):
    # min over split fraction x of final energy (two products along khat)
    best = None
    for x in x_grid:
        e = E_of(E2f, x * p, khat, masses[0]) + E_of(E2f, (1 - x) * p, khat, masses[1])
        if best is None or e < best[0]:
            best = (e, x)
    return best


def golden_min(fun, lo, hi, it=120):
    gr = (mp.sqrt(5) - 1) / 2
    c = hi - gr * (hi - lo); d = lo + gr * (hi - lo)
    for _ in range(it):
        if fun(c) < fun(d):
            hi = d
        else:
            lo = c
        c = hi - gr * (hi - lo); d = lo + gr * (hi - lo)
    x = (lo + hi) / 2
    return fun(x), x


def threshold(E2f, khat, m_in, masses, lo, hi):
    """Smallest p with E_in(p) >= min_x E_out(p). Bisection on log p."""
    def gap(p):
        eout, _ = golden_min(lambda x: E_of(E2f, x * p, khat, masses[0]) + E_of(E2f, (1 - x) * p, khat, masses[1]),
                             mp.mpf("1e-9"), 1 - mp.mpf("1e-9"))
        return E_of(E2f, p, khat, m_in) - eout
    a, b = mp.log(lo), mp.log(hi)
    assert gap(mp.e ** a) < 0 < gap(mp.e ** b), (gap(mp.e ** a), gap(mp.e ** b))
    for _ in range(80):
        c = (a + b) / 2
        if gap(mp.e ** c) > 0:
            b = c
        else:
            a = c
    return mp.e ** ((a + b) / 2)


def threshold_checks():
    me = mp.mpf("1e-12")
    # photon decay gamma -> e+ e-, superluminal: S2 body-diagonal (eta=+1/18) and Wilson body-diag (+5/36)
    for name, f in [("S2 lambda=1", SCHEMES["S2 scalar leapfrog lambda=1"]),
                    ("F Wilson", SCHEMES["F Wilson fermion r=1, cont. time"])]:
        et = eta(f, DIAG)
        pth = threshold(f, DIAG, 0, (me, me), mp.mpf("1e-7"), mp.mpf("1e-4"))
        ana = (16 * me ** 2 / (3 * et)) ** mp.mpf(0.25)
        print(f"  gamma->ee [{name}, body-diag, eta={float(et):+.5f}]: numeric {mp.nstr(pth,8)} "
              f"analytic {mp.nstr(ana,8)} ratio {mp.nstr(pth/ana,8)}")
        # vacuum Cherenkov p -> p gamma (massive m, massless photon)
        mpp = mp.mpf("1e-10")
        pth = threshold(f, DIAG, mpp, (mpp, 0), mp.mpf("1e-6"), mp.mpf("1e-3"))
        ana = (mpp ** 2 / (3 * et)) ** mp.mpf(0.25)
        print(f"  p->p gamma [{name}, body-diag]: numeric {mp.nstr(pth,8)} analytic {mp.nstr(ana,8)} "
              f"ratio {mp.nstr(pth/ana,8)}")
    # subluminal universal (S1 axis): photon decay must be forbidden at all p up to 1e-3
    f = SCHEMES["S1 scalar, continuous time"]
    ok = True
    for p in [mp.mpf(10) ** (-k) for k in range(3, 9)]:
        eout, _ = golden_min(lambda x: E_of(f, x * p, AXIS, me) * 1 + E_of(f, (1 - x) * p, AXIS, me),
                             mp.mpf("1e-9"), 1 - mp.mpf("1e-9"))
        if E_of(f, p, AXIS, 0) >= eout:
            ok = False
    print(f"  S1 (subluminal) photon decay forbidden at all tested p: {ok}")
    # GZK-type shift p + gamma_soft -> p + pi, S1 axis: compare 4 eps p threshold to analytic
    mpr, mpi = mp.mpf("1e-10"), mp.mpf("1.44e-11")  # m_pi/m_p = 0.144 like 0.135/0.938
    for p in [mp.mpf("1e-6"), mp.mpf("3e-6")]:
        # find eps_th: E_p(p) + eps >= min split of (p - eps)
        def gap(eps):
            eout, _ = golden_min(lambda x: E_of(f, x * (p - eps), AXIS, mpr) + E_of(f, (1 - x) * (p - eps), AXIS, mpi),
                                 mp.mpf("0.5"), 1 - mp.mpf("1e-6"))
            return E_of(f, p, AXIS, mpr) + eps - eout
        a, b = mp.mpf("1e-40"), mp.mpf("1e-10")
        for _ in range(200):
            c = mp.sqrt(a * b)
            if gap(c) > 0:
                b = c
            else:
                a = c
        eps_num = mp.sqrt(a * b)
        xp = mpr / (mpr + mpi)
        et = eta(f, AXIS)
        dm2 = (mpr + mpi) ** 2 - mpr ** 2
        eps_ana = (dm2 - et * p ** 4 * (1 - xp ** 3 - (1 - xp) ** 3)) / (4 * p)
        eps_LI = dm2 / (4 * p)
        print(f"  GZK-type [S1 axis] p={mp.nstr(p,2)}: eps_th numeric {mp.nstr(eps_num,6)} analytic "
              f"{mp.nstr(eps_ana,6)} ratio {mp.nstr(eps_num/eps_ana,6)}; LI value {mp.nstr(eps_LI,6)} "
              f"(shift factor {mp.nstr(eps_num/eps_LI,5)})")


if __name__ == "__main__":
    main()
