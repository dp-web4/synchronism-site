"""Does a universal subluminal n=2 coefficient switch off photopion production on the CMB? (explorer 2026-11-22, post hoc)

Exact kinematics: E^2 = m^2 + p^2 + eta p^4 / M^2, M = 1.22e19 GeV (non-reduced; a = l_Pl).
Head-on soft photon (no LIV) + proton -> proton + pi0, collinear final state, split fraction optimised.
Reports the minimum over proton momentum of the threshold photon energy, in units of kT_CMB = 2.35e-4 eV.
Species coefficients: proton eta_p, pion eta_pi (both = eta * compositeness factor).
"""
import mpmath as mp

mp.mp.dps = 50
M = mp.mpf("1.22e19")
MP, MPI = mp.mpf("0.93827"), mp.mpf("0.13498")
KT = mp.mpf("2.35e-13")  # GeV


def E(p, m, eta):
    return mp.sqrt(m ** 2 + p ** 2 + eta * p ** 4 / M ** 2)


def golden_min(fun, lo, hi, it=100):
    gr = (mp.sqrt(5) - 1) / 2
    c = hi - gr * (hi - lo); d = lo + gr * (hi - lo)
    for _ in range(it):
        if fun(c) < fun(d):
            hi = d
        else:
            lo = c
        c = hi - gr * (hi - lo); d = lo + gr * (hi - lo)
    return fun((lo + hi) / 2)


def eps_th(p, eta_p, eta_pi):
    def gap(eps):
        q = p - eps
        eout = golden_min(lambda x: E(x * q, MP, eta_p) + E((1 - x) * q, MPI, eta_pi), mp.mpf("0.3"), 1 - mp.mpf("1e-7"))
        return E(p, MP, eta_p) + eps - eout
    a, b = mp.mpf("1e-25"), mp.mpf("1e-3")
    if gap(b) < 0:
        return mp.inf
    for _ in range(160):
        c = mp.sqrt(a * b)
        a, b = (a, c) if gap(c) > 0 else (c, b)
    return mp.sqrt(a * b)


def scan(eta_p, eta_pi, label):
    best = (mp.inf, None)
    rows = []
    for lg in [x / 4 for x in range(72, 85)]:  # 10^18 .. 10^21 eV
        p = mp.mpf(10) ** (lg - 9)  # GeV
        e = eps_th(p, eta_p, eta_pi)
        rows.append((lg, e))
        if e < best[0]:
            best = (e, lg)
    e5 = dict(rows)
    print(f"{label:46s} min eps_th = {mp.nstr(best[0]/KT,4):>8s} kT at E_p=10^{best[1]} eV; "
          f"at 10^19.75: {mp.nstr(e5[19.75]/KT,4)} kT; at 10^20.5: {mp.nstr(e5[20.5]/KT,4)} kT")


if __name__ == "__main__":
    print("Lorentz-invariant control: eps_th(10^19.75 eV) should be ~ (m_pi(2m_p+m_pi))/(4p)")
    p = mp.mpf(10) ** mp.mpf("10.75")
    print("  numeric", mp.nstr(eps_th(p, 0, 0) / KT, 6), "kT; analytic",
          mp.nstr(MPI * (2 * MP + MPI) / (4 * p) / KT, 6), "kT")
    GM_P, GM_PI = mp.mpf("0.00546"), mp.mpf("0.0114")  # Gagnon & Moore 2004 Table II, int x^3 f
    for eta in [mp.mpf(-1) / 12, mp.mpf(-1) / 36, mp.mpf("-1e-3"), mp.mpf("-1e-4"), mp.mpf("-1e-5"), mp.mpf("-1e-6")]:
        scan(eta, eta, f"elementary eta_p=eta_pi={mp.nstr(eta,3)}")
    for eta in [mp.mpf(-1) / 12, mp.mpf(-1) / 36]:
        scan(eta * GM_P, eta * GM_PI, f"partonic (G&M) grid eta={mp.nstr(eta,3)}")
