#!/usr/bin/env python3
"""Direct (EFE-free) tail of the mu-convention compander vs planetary supplementary perihelion precessions.

PREREG: direct_tail_planetary_precession_PREREG.md (commit cbfa9c5).
mu(x) = tanh(gamma ln(1+x)), x = g/a0, g_N = mu g  =>  g = g_N (1 + 2/((1+x)^(2 gamma) - 1)).
a0(gamma) from the frozen SPARC profile TEST-25 used. Secular d(varpi)/dt from the Gauss equation, R only.

Bounds (verbatim, mas/cy):
  EPM2011  (Pitjeva & Pitjev 2013 MNRAS 432 3431, Table 4, quoted in mas/yr there)
  INPOP15a criteria 1 (Fienga et al. 2016, arXiv:1601.00947, Table; Mercury and Saturn only) -- conservative
"""
import json
import sys
import numpy as np
from scipy.integrate import quad

GM = 1.32712440018e20
AU = 1.495978707e11
C_LIGHT = 2.99792458e8
YR = 365.25 * 86400
MAS_CY = np.pi / 180 / 3600 / 1000 / (100 * YR)   # rad/s per mas/cy

PLANETS = {  # a [AU], e (J2000)
    "Mercury": (0.387098, 0.205630),
    "Venus": (0.723332, 0.006772),
    "Earth": (1.000000, 0.016709),
    "Mars": (1.523679, 0.093400),
    "Jupiter": (5.202600, 0.048498),
    "Saturn": (9.554900, 0.055546),
}
EPM2011 = {  # mas/cy  (Table 4 mas/yr x 100)
    "Mercury": (-2.0, 3.0), "Venus": (2.6, 1.6), "Earth": (0.19, 0.19),
    "Mars": (-0.020, 0.037), "Jupiter": (58.7, 28.3), "Saturn": (-0.32, 0.47),
}
INPOP15A_C1 = {"Mercury": (0.0, 3.1), "Saturn": (1.2, 5.0)}

PROFILE = "/home/dp/ai-workspace/Synchronism/Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json"


def dg_tail(r, gamma, a0):
    """Extra attraction g - g_N (positive), exact fixed point."""
    gN = GM / r**2
    g = gN
    for _ in range(60):
        x = g / a0
        # 2/((1+x)^(2g)-1) computed stably
        eps = 2.0 / np.expm1(2 * gamma * np.log1p(x))
        g_new = gN * (1 + eps)
        if abs(g_new - g) <= 1e-15 * g:
            break
        g = g_new
    return gN * eps  # no subtraction: tails below 1e-16 g would round to 0


def precession(a_au, e, R_of_r):
    """Secular d(varpi)/dt [rad/s] from radial perturbing acceleration R(r) (outward positive)."""
    a = a_au * AU
    n = np.sqrt(GM / a**3)
    p = a * (1 - e**2)

    def integrand(f):
        r = p / (1 + e * np.cos(f))
        dM_df = r**2 / (a**2 * np.sqrt(1 - e**2))
        return -R_of_r(r) * np.cos(f) * dM_df

    avg = quad(integrand, 0, 2 * np.pi, limit=400, epsabs=0, epsrel=1e-11)[0] / (2 * np.pi)
    return np.sqrt(1 - e**2) / (n * a * e) * avg


def controls():
    out = []
    # constant A
    A = 1e-10
    for name in ("Mercury", "Saturn"):
        a, e = PLANETS[name]
        num = precession(a, e, lambda r: A)
        n = np.sqrt(GM / (a * AU) ** 3)
        ana = np.sqrt(1 - e**2) * A / (n * a * AU)
        out.append((f"const-A {name}", num / ana - 1))
    # GR via effective radial term R = -3 GM h^2/(c^2 r^4)
    a, e = PLANETS["Mercury"]
    h2 = GM * a * AU * (1 - e**2)
    num = precession(a, e, lambda r: -3 * GM * h2 / (C_LIGHT**2 * r**4)) / MAS_CY / 1000  # arcsec/cy
    n = np.sqrt(GM / (a * AU) ** 3)
    ana = 6 * np.pi * GM / (C_LIGHT**2 * a * AU * (1 - e**2)) * n / (2 * np.pi) / MAS_CY / 1000
    out.append(("GR Mercury arcsec/cy num", num))
    out.append(("GR Mercury arcsec/cy analytic", ana))
    return out


def main():
    prof = json.load(open(PROFILE))
    rows = prof["rows"]
    gam_grid = np.array([r["gamma"] for r in rows])
    la0 = np.log([r["a0_m_s2"] for r in rows])
    dbic = np.array([r["delta_bic_profile"] for r in rows])

    def a0_of(g):
        return float(np.exp(np.interp(g, gam_grid, la0)))

    print("== controls ==")
    for k, v in controls():
        print(f"  {k}: {v:.6g}")

    def table(gamma, a0, bounds):
        res = {}
        for name, (mu_obs, sig) in bounds.items():
            a, e = PLANETS[name]
            pred = precession(a, e, lambda r: -dg_tail(r, gamma, a0)) / MAS_CY
            res[name] = (pred, (pred - mu_obs) / sig)
        return res

    print("\n== selected gammas (profiled a0), EPM2011 ==")
    print(f"{'gamma':>6} {'a0':>10} {'dBIC':>8} " + " ".join(f"{p+' pred':>14} {'z':>9}" for p in PLANETS))
    for g in [0.425, 0.489, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.25, 1.5, 1.7, 2.0]:
        a0 = a0_of(g)
        t = table(g, a0, EPM2011)
        print(f"{g:6.3f} {a0:10.3e} {np.interp(g, gam_grid, dbic):8.1f} " +
              " ".join(f"{t[p][0]:14.4g} {t[p][1]:9.3g}" for p in PLANETS))
    sys.stdout.flush()

    def floor(bounds, kz, a0_fn):
        for g in np.round(np.arange(0.40, 3.001, 0.01), 2):
            t = table(g, a0_fn(g), bounds)
            if all(abs(z) <= kz for _, z in t.values()):
                worst = max(t, key=lambda p: abs(t[p][1]))
                return g, worst
        return None, None

    print("\n== floors (smallest grid gamma passing every planet) ==")
    fixed = lambda g: 5.332645831339649e-11
    for label, bounds in (("EPM2011 6 planets", EPM2011), ("INPOP15a C1 Me+Sa", INPOP15A_C1),
                          ("EPM2011 Saturn only", {"Saturn": EPM2011["Saturn"]}),
                          ("EPM2011 Mars only", {"Mars": EPM2011["Mars"]}),
                          ("EPM2011 w/o Jupiter", {k: v for k, v in EPM2011.items() if k != "Jupiter"})):
        for kz in (3, 2):
            g, _ = floor(bounds, kz, a0_of)
            gf, _ = floor(bounds, kz, fixed)
            gd = np.interp(g, gam_grid, dbic) if g else float("nan")
            print(f"  {label:22s} {kz}sigma: gamma_min={g} (dBIC_profile {gd:.1f}); fixed a0: {gf}")
            # binding planet just below the floor
            if g:
                t = table(round(g - 0.01, 2), a0_of(round(g - 0.01, 2)), bounds)
                print(f"      just below ({g-0.01:.2f}) z: " + ", ".join(f"{p} {t[p][1]:.2f}" for p in t))


if __name__ == "__main__":
    main()
