"""Density-keyed C(rho) under kernel-smoothed L3: does LLR (Gdot/G) still close it, and what does striction add?

Executes explorer/scripts/llr_under_smoothed_l3_PREREG.md (committed edb0108 before this file existed).

Action -C(rho_s)|grad Phi|^2/8piG - rho Phi, rho_s = K_ell * rho.
  Field eq.: div[C(rho_s) grad Phi] = 4 pi G rho   (same as L2 -> Gdot/G = -Cdot/C unchanged)
  Force:     g = -grad Phi - grad Psi_s,  Psi_s = K_ell * [C'(rho_s)|grad Phi|^2] / 8piG
Dominant Psi_s near the Sun: the Sun's own field energy E_sun = |U_sun| smoothed by K:
  Psi_sun(r) = s f_sun (E/M)_sun / C * exp(-r^2/2 ell^2),  s = dlnC/dlnrho, f_sun = M_sun K(0)/rho_s
  -> planet-minus-Sun radial acceleration R(r) = Psi0 * r/ell^2 * exp(-r^2/2ell^2)  (outward, repulsive)
"""
import itertools
import sys
import numpy as np

sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/scripts")
import density_keyed_gdot_solar_motion as G923           # noqa: E402  (09-23 kinematics, unchanged)
import direct_tail_planetary_precession as P1015          # noqa: E402  (10-15 precession(), EPM2011 table)

PC = 3.0857e16
AU_M = 1.495978707e11
GM_SUN = 1.32712440018e20
R_SUN = 6.957e8
EM_SUN = 1.5 * GM_SUN / R_SUN            # |U|/M, n = 3 polytrope: 2.86e11 m^2/s^2
MAS_CY = P1015.MAS_CY
YR = 365.25 * 86400

# Earth / Moon self-energy per unit mass (|U|/(M c^2) = 4.64e-10, 1.9e-11; standard LLR values)
C2 = 2.99792458e8 ** 2
EM_EARTH, EM_MOON = 4.64e-10 * C2, 1.9e-11 * C2
GM_EARTH, A_MOON = 3.986004418e14, 3.844e8
N_MOON = 2 * np.pi / (27.321661 * 86400)
M_EARTH_MSUN = 3.0035e-6

ELLS = np.array([30, 100, 300, 1000]) * G923.AU_PC
ELLS = np.concatenate([ELLS, [0.01, 0.03, 0.1, 0.3, 1, 2, 3, 5, 10]])


# ---- laws with analytic s = dlnC/dlnrho (finite differences fail below s ~ 1e-10) ----
def sech2(y):
    t = np.exp(-2 * abs(y))
    return 4 * t / (1 + t) ** 2


def fw(rc, g, f):
    def C(rho):
        return f + (1 - f) * np.tanh(g * np.log1p(rho / rc))

    def s(rho):
        x = rho / rc
        return (1 - f) * g * sech2(g * np.log1p(x)) * x / (1 + x) / C(rho)
    return C, s


def rg(rc, Q, e0):
    def C(rho):
        return e0 + (1 - e0) / 2 * (np.tanh(Q * np.log(rho / rc)) + 1)

    def s(rho):
        return (1 - e0) / 2 * Q * sech2(Q * np.log(rho / rc)) / C(rho)
    return C, s


def laws():
    out = []
    rcs = sorted(set(list(np.logspace(np.log10(3.2e-4), np.log10(0.161), 12)) + [0.0039, 0.0079, 0.0735, 0.078]))
    for f, g, rc in itertools.product((0.089, 0.315), (0.489, 2.0), rcs):
        out.append((f"FW f={f} g={g} rc={rc:.3g}", *fw(rc, g, f), "grid", g))
    for g, rcs2 in ((0.489, np.logspace(np.log10(3.8e-5), np.log10(3.2e-4), 4)), (2.0, np.linspace(0.016, 0.030, 4))):
        for rc in rcs2:
            out.append((f"FW-T02null f=0.315 g={g} rc={rc:.3g}", *fw(rc, g, 0.315), "t02", g))
    out.append(("RG ellip e0=.089 Q=.47 rc=.0083", *rg(0.0083, 0.47, 0.089), "rg", None))
    out.append(("RG disc  e0=.56 Q=.92 rc=7.4e-4", *rg(7.4e-4, 0.92, 0.56), "rg", None))
    return out


def striction_psi0(s, C, ell_pc, rho):
    f_sun = G923.kern(0, ell_pc) / rho
    return s * f_sun * EM_SUN / C, f_sun


def planet_z(psi0, ell_m):
    """EPM2011 z-scores for the Sun-centred Gaussian striction."""
    R = lambda r: psi0 * r / ell_m ** 2 * np.exp(-r ** 2 / (2 * ell_m ** 2))
    z = {}
    for name, (a, e) in P1015.PLANETS.items():
        if name not in P1015.EPM2011:
            continue
        pred = P1015.precession(a, e, R) / MAS_CY
        c, sig = P1015.EPM2011[name]
        z[name] = (pred, (pred - c) / sig)
    return z


def main():
    L = laws()
    R = {ell: G923.rates(ell) for ell in ELLS}

    print("== controls ==")
    # (a) analytic s vs 09-23 finite difference where well conditioned
    worst = 0
    for name, Cf, sf, fam, g in L:
        for ell in (1.0, 10.0):
            rho = R[ell]['rho']
            sa, sn = sf(rho), G923.dlnC(Cf, rho)
            if abs(sa) > 1e-6:
                worst = max(worst, abs(sn / sa - 1))
    print(f"  max |s_fd/s_analytic - 1| over laws with s > 1e-6 at ell = 1, 10 pc: {worst:.2e}")
    # (b) harmonic limit: R = k r -> d(varpi)/dt = 1.5 k sqrt(1-e^2)/n
    k = 1e-25
    a, e = P1015.PLANETS["Saturn"]
    n = np.sqrt(GM_SUN / (a * AU_M) ** 3)
    num = P1015.precession(a, e, lambda r: k * r)
    print(f"  harmonic k r, Saturn: numeric/analytic(1.5 k sqrt(1-e^2)/n) = {num / (1.5 * k * np.sqrt(1 - e**2) / n):.6f}")
    print(f"  (E/M)_sun = {EM_SUN:.3e} m^2/s^2")

    print("\n== f_sun and rho_s by ell ==")
    for ell in ELLS:
        print(f"  ell={ell:9.3g} pc  rho_s={R[ell]['rho']:9.3g}  f_sun={G923.kern(0, ell) / R[ell]['rho']:.3g}")

    # ---- per law, per ell ----
    rows = {}
    for name, Cf, sf, fam, g in L:
        rows[name] = []
        for ell in ELLS:
            r = R[ell]; rho = r['rho']
            s, C = sf(rho), Cf(rho)
            gdot = max(abs(s) * r['smooth_min'], abs(s) * r['discrete'])
            psi0, f_sun = striction_psi0(s, C, ell, rho)
            z = planet_z(psi0, ell * PC)
            zmax_name = max(z, key=lambda p: abs(z[p][1]))
            rows[name].append(dict(ell=ell, s=s, C=C, gdot=gdot, gx=gdot > G923.BOUND, psi0=psi0,
                                   zmax=z[zmax_name][1], zp=zmax_name, sx=abs(z[zmax_name][1]) > 3,
                                   k=psi0 / (ell * PC) ** 2))

    def count(ell, key):
        i = list(ELLS).index(ell)
        return sum(rows[n][i][key] for n in rows)

    print("\n== counts (of %d laws) ==" % len(L))
    print(f"{'ell pc':>9} {'Gdot':>5} {'strict':>6} {'L3 union':>8} {'strict-only':>11}")
    for ell in ELLS:
        i = list(ELLS).index(ell)
        g = sum(rows[n][i]['gx'] for n in rows); st = sum(rows[n][i]['sx'] for n in rows)
        u = sum(rows[n][i]['gx'] or rows[n][i]['sx'] for n in rows)
        so = sum(rows[n][i]['sx'] and not rows[n][i]['gx'] for n in rows)
        print(f"{ell:9.3g} {g:5d} {st:6d} {u:8d} {so:11d}")

    surv1 = [n for n in rows if not (rows[n][list(ELLS).index(1.0)]['gx'] or rows[n][list(ELLS).index(1.0)]['sx'])]
    print(f"\nSurvivors at ell = 1 pc under L3 (Gdot U striction): {len(surv1)}")
    for n in surv1:
        print("   ", n)

    print("\n== the small-ell hole: per-law pass map (G = Gdot-excluded, S = striction-only excluded, . = passes) ==")
    print("   ell grid:", " ".join(f"{e:.2g}" for e in ELLS))
    hole_open = {"0.489": [], "2.0": [], "rg": []}
    for name, Cf, sf, fam, g in L:
        marks = "".join("G" if r_['gx'] else ("S" if r_['sx'] else ".") for r_ in rows[name])
        l2marks = "".join("x" if r_['gx'] else "." for r_ in rows[name])
        print(f"{name:>40} L2 {l2marks}  L3 {marks}")
        passing_sub1 = [r_['ell'] for r_ in rows[name] if r_['ell'] < 1 and not (r_['gx'] or r_['sx'])]
        key = "rg" if fam == "rg" else ("0.489" if g == 0.489 else "2.0")
        if passing_sub1:
            hole_open[key].append((name, max(passing_sub1)))
    for k_, v in hole_open.items():
        print(f"  family {k_}: {len(v)} laws keep a passing ell < 1 pc under L3")

    print("\n== magnitudes for representative laws ==")
    reps = [n for n in rows if ("g=0.489 rc=0.0079" in n or "g=2.0 rc=0.0295" in n or "RG" in n
                                or "g=2.0 rc=0.00099" in n)]
    for n in reps:
        print(f"  {n}")
        for r_ in rows[n]:
            print(f"     ell={r_['ell']:9.3g} s={r_['s']:9.2e} C={r_['C']:.4f} Gdot={r_['gdot']:9.2e} "
                  f"k={r_['k']:9.2e} s^-2  worst planet {r_['zp']:>7} z={r_['zmax']:10.3g}")

    # ---- P4: Earth-Moon terms vs Sun term, at the strongest k that still passes the planets ----
    print("\n== Earth-Moon (P4) ==")
    kmax_pass = max((r_['k'] for n in rows for r_ in rows[n] if not r_['sx'] and r_['ell'] >= 1), default=0)
    kmax_pass_all = max((r_['k'] for n in rows for r_ in rows[n] if not r_['sx']), default=0)
    for label, kk in (("max k passing planets, ell>=1pc", kmax_pass), ("max k passing planets, any ell", kmax_pass_all)):
        dperi = 1.5 * kk / N_MOON * YR                       # rad/yr, Moon's perigee, Sun-term tidal (isotropic)
        frac = kk * A_MOON ** 3 / GM_EARTH                   # relative to Earth's pull on the Moon
        nordt = kk * AU_M * (EM_EARTH - EM_MOON) / EM_SUN    # differential Earth-Moon accel toward/away the Sun
        print(f"  {label}: k={kk:.2e} s^-2 -> lunar perigee {dperi:.2e} rad/yr; k d^3/GM_E = {frac:.2e}; "
              f"Nordtvedt-type Delta a = {nordt:.2e} m/s^2 (= {nordt / (GM_SUN / AU_M**2):.2e} of solar g)")
    print(f"  Earth-centred / Sun-centred striction on the Moon (ratio of k): "
          f"{M_EARTH_MSUN * EM_EARTH / EM_SUN:.2e}")

    # ---- P5: white-dwarf neighbours ----
    print("\n== neighbour white dwarfs, tidal striction at the Sun relative to the Sun's own k (P5) ==")
    WDS = [("Sirius B", 2.64, 1.018, 0.0084), ("Procyon B", 3.51, 0.592, 0.0123),
           ("van Maanen 2", 4.31, 0.68, 0.011), ("40 Eri B", 5.01, 0.573, 0.0136)]
    for n in reps[:2]:
        Cf, sf = next((c, s_) for nm, c, s_, *_ in L if nm == n)
        print(f"  {n}")
        for ell in (1.0, 2.0, 3.0, 5.0, 10.0):
            rho_sun = R[ell]['rho']
            k_sun = sf(rho_sun) * G923.kern(0, ell) * EM_SUN / Cf(rho_sun) / rho_sun
            parts = []
            for wn, d, m, rr in WDS:
                em = 6 / 7 * GM_SUN * m / (rr * R_SUN)      # n = 1.5 polytrope
                rho_b = m * G923.kern(0, ell) + (rho_sun - G923.kern(0, ell))
                psi_b = sf(rho_b) * m * G923.kern(d, ell) * em / Cf(rho_b) / rho_b
                eig = psi_b * max(abs(d ** 2 / ell ** 2 - 1), 1.0)   # |largest eigenvalue| * ell^2
                parts.append((wn, eig / (k_sun if k_sun else np.nan)))
            tot = sum(p for _, p in parts)
            print(f"     ell={ell:4.1f}: " + ", ".join(f"{w} {p:.2g}" for w, p in parts) + f"  | sum {tot:.2g}")


if __name__ == "__main__":
    main()
