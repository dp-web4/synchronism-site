"""Density-keyed permittivity law vs. the interplanetary medium.

Executes the rule in density_keyed_law_vs_interplanetary_medium_PREREG.md (committed 0ad68f3 before this ran).

Spherical symmetry, field equation div[C(rho) grad Phi] = 4 pi G rho. Outside the Sun the flux is exact:
g(r) = G M_sun / (C(rho(r)) r^2). A planet's inferred GM_sun is GM_sun / C at its orbit.
Statistic: D = |C(1 AU) / C(9.54 AU) - 1|. Excluded if D > 1e-6.
"""
import itertools
import numpy as np

M_P = 1.67262e-27          # kg
MSUN_PC3 = 1.98892e30 / (3.08568e16) ** 3   # kg/m^3 per Msun/pc^3
HE_MASS_FACTOR = 1.16
AU_PC = 4.84814e-6
THRESH = 1e-6

PLANETS = {"Mercury": 0.387, "Venus": 0.723, "Earth": 1.0, "Mars": 1.524,
           "Jupiter": 5.203, "Saturn": 9.537, "Uranus": 19.19, "Neptune": 30.07}


def rho_wind(r_au, n1):
    """Solar-wind mass density in Msun/pc^3, n1 protons/cm^3 at 1 AU, falling as r^-2."""
    return n1 * 1e6 * M_P * HE_MASS_FACTOR / MSUN_PC3 * r_au ** -2


def C_framework(rho, rho_c, gamma, f):
    return f + (1 - f) * np.tanh(gamma * np.log1p(rho / rho_c))


def C_rg(rho, rho_c, Q, eps0, base="ln"):
    lg = np.log(rho / rho_c) if base == "ln" else np.log10(rho / rho_c)
    return eps0 + (1 - eps0) / 2 * (np.tanh(Q * lg) + 1)


def D_of(Cfun):
    return abs(Cfun(1.0) / Cfun(PLANETS["Saturn"]) - 1)


def main():
    print("rho_wind(1 AU) for n1 = 3/5/10 cm^-3:",
          ", ".join(f"{rho_wind(1, n):.3g}" for n in (3, 5, 10)), "Msun/pc^3")
    print("rho_wind(9.54 AU), n1=5:", f"{rho_wind(9.537, 5):.3g}", " rho_wind(30 AU):", f"{rho_wind(30.07, 5):.3g}")
    print("Earth-to-Saturn density span: factor", f"{(9.537) ** 2:.1f}", "; Mercury-to-Neptune:", f"{(30.07 / 0.387) ** 2:.0f}")
    print()

    # ---- Framework floored form on the 09-09 grid ----
    rho_cs = sorted(set(list(np.logspace(np.log10(3.2e-4), np.log10(0.161), 12)) + [0.0039, 0.0079, 0.0735, 0.078]))
    n_tot = n_ex = 0
    worst_pass = None
    print("FRAMEWORK floored C = f + (1-f) tanh(gamma ln(1+rho/rho_c))")
    print(f"{'f':>6} {'gamma':>6} {'rho_c':>9} {'n1':>3} {'C(1AU)':>8} {'C(Sat)':>8} {'D':>9} verdict")
    for f, gamma, rho_c, n1 in itertools.product((0.089, 0.315), (0.489, 2.0), rho_cs, (3, 5, 10)):
        Cf = lambda r: C_framework(rho_wind(r, n1), rho_c, gamma, f)
        D = D_of(Cf)
        n_tot += 1
        ex = D > THRESH
        n_ex += ex
        if not ex and (worst_pass is None or D > worst_pass[0]):
            worst_pass = (D, f, gamma, rho_c, n1)
        if n1 == 5 and rho_c in (0.0039, 0.0079, 0.0735, 0.078, rho_cs[0], rho_cs[-1]):
            print(f"{f:6.3f} {gamma:6.3f} {rho_c:9.3g} {n1:3d} {Cf(1.0):8.4f} {Cf(9.537):8.4f} {D:9.3g} {'EXCLUDED' if ex else 'ok'}")
    print(f"framework grid: {n_ex}/{n_tot} excluded (D > {THRESH:g}); largest passing D: {worst_pass}")
    print()

    # ---- Refracted Gravity, Eq. 4.1 ----
    print("REFRACTED GRAVITY eps = eps0 + (1-eps0)/2 [tanh(Q log(rho/rho_c)) + 1], rho_c = 0.0083")
    print(f"{'base':>5} {'eps0':>5} {'Q':>5} {'n1':>3} {'eps(1AU)':>9} {'eps(Sat)':>9} {'D':>9} verdict")
    n_tot = n_ex = 0
    for base, eps0, Q, n1 in itertools.product(("ln", "log10"), (0.20, 0.25), (0.1, 0.5, 1.0, 2.0), (3, 5, 10)):
        Cr = lambda r: C_rg(rho_wind(r, n1), 0.0083, Q, eps0, base)
        D = D_of(Cr)
        n_tot += 1
        ex = D > THRESH
        n_ex += ex
        if n1 == 5:
            print(f"{base:>5} {eps0:5.2f} {Q:5.2f} {n1:3d} {Cr(1.0):9.4f} {Cr(9.537):9.4f} {D:9.3g} {'EXCLUDED' if ex else 'ok'}")
    print(f"RG grid: {n_ex}/{n_tot} excluded")
    print()

    # ---- How flat must the law be? smallest Q (RG, ln) that passes, at n1 = 5 ----
    for eps0 in (0.20, 0.25):
        Qs = np.logspace(-9, 0, 2000)
        ok = [Q for Q in Qs if D_of(lambda r: C_rg(rho_wind(r, 5), 0.0083, Q, eps0)) <= THRESH]
        print(f"RG eps0={eps0}: largest Q passing D<=1e-6 at rho_c=0.0083: {max(ok) if ok else None:.3g}")
    print()

    # ---- Non-verdict quantity: coarse-graining radius ell (ball centred on the planet) ----
    # Ball of radius ell centred at planet distance r: contains the Sun iff ell > r.
    # Smoothed density = wind average (approx rho_wind(r)) + (M_sun/(4/3 pi ell^3) if ell > r).
    print("Coarse-graining: ell must exceed each planet's heliocentric distance to swallow the Sun.")
    print("Below that, the smoothed density is still the wind's (to within O(1) geometry), so D stays O(1).")
    for rho_c, gamma, f in ((0.0079, 0.489, 0.315), (0.078, 2.0, 0.315)):
        def C_smooth(r, ell):
            if ell > r:
                # Ball swallows the Sun. Wind mass inside radius R ~ 4 pi rho1 AU^2 R, so its mean over a ball of
                # radius ~ell is ~3 rho1 (AU/ell)^2. (First run kept the pointwise rho_wind(r) here, which is wrong
                # for ell >> r and produced a spurious 0.0375 at ell = 1 pc.)
                rho = 3 * rho_wind(1.0, 5) * ell ** -2 + 1.0 / (4 / 3 * np.pi * (ell * AU_PC) ** 3)
            else:
                rho = rho_wind(r, 5)
            return C_framework(rho, rho_c, gamma, f)
        for ell in (0.5, 5, 10, 31, 100, 1000, 206265):
            Cs = [C_smooth(r, ell) for r in PLANETS.values()]
            Dmax = max(Cs) / min(Cs) - 1
            print(f"  rho_c={rho_c:<6} gamma={gamma:<5} ell={ell:>7} AU: max over Mercury..Neptune of C_i/C_j - 1 = {Dmax:.3g}")
    print()
    print("Note: at ell > 30 AU every planet sees the same smoothed density (Sun-dominated), so C is uniform and absorbed")
    print("into GM_sun. Lab G (Cavendish) with the same ell also sees the Sun. The pointwise reading is what fails.")


if __name__ == "__main__":
    main()
