"""Density-keyed C(rho) as an ambient G_eff: Gdot/G from the Sun's motion through the Galaxy.

Executes explorer/scripts/density_keyed_gdot_solar_motion_PREREG.md (committed 80b8c9c before this file existed).

G_eff(t) = G / C(rho_s(t)), rho_s = Gaussian-kernel (width ell) smoothed baryonic density at the Earth-Moon system.
Gdot/G = -(dlnC/dlnrho) * dln(rho_s)/dt.
Bound (prereg): |Gdot/G| < 1e-12 /yr. Published LLR (Hofmann & Mueller 2018): (7.1 +- 7.6)e-14 /yr.
"""
import itertools
import numpy as np

KMS_PC_PER_YR = 1.0227e-6          # 1 km/s in pc/yr
AU_PC = 4.84814e-6
BOUND = 1e-12
LLR = (7.1e-14, 7.6e-14)

# ---- Solar motion and local disc (prereg values) ----
U, V, W = 11.1, 12.24, 7.25        # km/s; U toward GC
Z_SUN = 20.8                       # pc
RHO_GAS, RHO_STAR = 0.041, 0.043   # Msun/pc^3 at midplane
M_SUN = 1.0

# ---- Nearby systems: (name, d pc, mass Msun, heliocentric v_r km/s) -- hand list, approximate ----
STARS = [("alpha Cen AB", 1.34, 2.01, -22.4), ("Proxima", 1.30, 0.12, -22.2), ("Barnard", 1.83, 0.16, -110.6),
         ("Wolf 359", 2.41, 0.11, 19.0), ("Lalande 21185", 2.55, 0.39, -84.7), ("Sirius AB", 2.64, 3.04, -5.5),
         ("L 726-8 AB", 2.68, 0.20, 29.0), ("Ross 154", 2.97, 0.17, -10.7), ("eps Eri", 3.22, 0.82, 16.4),
         ("Procyon AB", 3.51, 2.10, -3.2), ("61 Cyg AB", 3.49, 1.33, -65.0), ("eps Ind", 3.64, 0.76, -40.0),
         ("Altair", 5.13, 1.80, -26.1)]


def kern(r, ell):
    return (2 * np.pi * ell ** 2) ** -1.5 * np.exp(-r ** 2 / (2 * ell ** 2))


def vert_smoothed(rho0, h, z, ell):
    """sech^2(z/2h) profile convolved in z with a Gaussian of width ell; returns (rho, drho/dz).
    For ell < 5 pc (<< h) smoothing is negligible; use the analytic point value (the grid would be under-resolved:
    first run of this script produced spurious 2e-11/yr at ell = 0.01 pc from that)."""
    if ell < 5:
        z0 = 2 * h
        rho = rho0 / np.cosh(z / z0) ** 2
        return rho, -rho * 2 / z0 * np.tanh(z / z0)
    zz = np.linspace(-6 * ell - 3000, 6 * ell + 3000, 60001)
    prof = rho0 / np.cosh(zz / (2 * h)) ** 2
    w = np.exp(-(z - zz) ** 2 / (2 * ell ** 2)); w /= w.sum()
    rho = (prof * w).sum()
    drho = (prof * w * (zz - z) / ell ** 2).sum()
    return rho, drho


def smooth_terms(ell, h_gas, h_star, R_d, bubble):
    """Galactic smooth part: value and d/dt. Radial exponential: dlnrho/dR = -1/R_d, unchanged by smoothing."""
    comps = [(RHO_STAR, h_star)] + ([] if (bubble and ell < 100) else [(RHO_GAS, h_gas)])
    rho = drdt = 0.0
    for r0, h in comps:
        rv, dz = vert_smoothed(r0, h, Z_SUN, ell)
        rho += rv
        drdt += dz * W * KMS_PC_PER_YR + rv * (U * KMS_PC_PER_YR) / R_d   # moving inward (U>0) raises rho
    return rho, drdt


def star_named(ell):
    return sum(m * kern(d, ell) * (-d * vr * KMS_PC_PER_YR / ell ** 2) for _, d, m, vr in STARS)


def star_poisson_rms(ell, n=0.1, m2_over_m=0.5, sigma=30.0):
    """rms of d rho_s/dt from Poisson stars: n<m^2> int W'(r)^2 v_r^2 d^3r, W' = -W r/ell^2 * v_r."""
    r = np.linspace(1e-4, 8 * ell, 20000)
    integ = kern(r, ell) ** 2 * (r / ell ** 2) ** 2 * 4 * np.pi * r ** 2
    m2 = m2_over_m * RHO_STAR / n                  # <m^2> with <m> = rho/n
    return np.sqrt(n * m2 * (sigma * KMS_PC_PER_YR) ** 2 * np.trapz(integ, r))


def C_fw(rho, rc, g, f):
    return f + (1 - f) * np.tanh(g * np.log1p(rho / rc))


def C_rg(rho, rc, Q, e0):
    return e0 + (1 - e0) / 2 * (np.tanh(Q * np.log(rho / rc)) + 1)


def dlnC(Cf, rho):
    e = 1e-6
    return (np.log(Cf(rho * (1 + e))) - np.log(Cf(rho * (1 - e)))) / (np.log1p(e) - np.log1p(-e))


ELLS = np.array([30 * AU_PC, 1e-3, 3e-3, 0.01, 0.03, 0.1, 0.3, 1, 2, 3, 5, 10, 30, 100, 300])
BRACKETS = list(itertools.product((75, 150), (250, 350), (2000, 2600, 3500), (False, True)))


def rates(ell):
    sun = M_SUN * kern(0, ell)
    sm = [smooth_terms(ell, *b) for b in BRACKETS]
    rho_g = np.array([s[0] for s in sm]); dr = np.array([s[1] for s in sm])
    rho_tot = sun + rho_g
    dln_s = dr / rho_tot
    k = np.argmin(np.abs(dln_s))
    rho_ref = sun + smooth_terms(ell, 100, 300, 2600, False)[0]
    sign_change = dln_s.min() < 0 < dln_s.max()
    # prereg rule: brackets that straddle zero allow exact cancellation -> smooth term decides nothing
    bub = [i for i, b in enumerate(BRACKETS) if b[3]]
    return dict(rho=rho_ref, rho_range=(rho_tot.min(), rho_tot.max()), smooth_min=0.0 if sign_change else abs(dln_s[k]),
                bubble_min=np.abs(dln_s[bub]).min(), bubble_max=np.abs(dln_s[bub]).max(),
                smooth_max=np.abs(dln_s).max(), smooth_sign_change=(dln_s.min() < 0 < dln_s.max()),
                named=star_named(ell) / rho_ref, poisson=star_poisson_rms(ell) / rho_ref,
                # prereg: named list for ell <= 2 pc; Poisson rms where the list is incomplete (ell >= 3 pc)
                discrete=abs(star_named(ell) / rho_ref) if ell <= 2 else star_poisson_rms(ell) / rho_ref)


def main():
    print(f"Bound (prereg) |Gdot/G| < {BOUND:g}/yr; LLR Hofmann&Mueller 2018 = ({LLR[0]:.1e} +- {LLR[1]:.1e})/yr\n")
    print("dln(rho_s)/dt per yr (kinematic part, independent of the C law)")
    print(f"{'ell pc':>9} {'rho_s':>9} {'smooth min':>11} {'smooth max':>11} {'sgnchg':>6} {'named stars':>12} {'Poisson rms':>12} {'bubble min':>11} {'bubble max':>11}")
    R = {}
    for ell in ELLS:
        R[ell] = r = rates(ell)
        print(f"{ell:9.3g} {r['rho']:9.3g} {r['smooth_min']:11.3g} {r['smooth_max']:11.3g} {str(r['smooth_sign_change']):>6}"
              f" {r['named']:12.3g} {r['poisson']:12.3g} {r['bubble_min']:11.3g} {r['bubble_max']:11.3g}")
    print("\nNamed-star breakdown at ell = 1, 3 pc (dln rho_s/dt per yr):")
    for ell in (1.0, 3.0):
        parts = sorted(((m * kern(d, ell) * (-d * vr * KMS_PC_PER_YR / ell ** 2) / R[ell]['rho'], n) for n, d, m, vr in STARS),
                       key=lambda t: -abs(t[0]))[:4]
        print(f"  ell={ell}: " + ", ".join(f"{n} {v:+.2e}" for v, n in parts))

    laws = []
    rcs = sorted(set(list(np.logspace(np.log10(3.2e-4), np.log10(0.161), 12)) + [0.0039, 0.0079, 0.0735, 0.078]))
    for f, g, rc in itertools.product((0.089, 0.315), (0.489, 2.0), rcs):
        laws.append((f"FW f={f} g={g} rc={rc:.3g}", (lambda rho, f=f, g=g, rc=rc: C_fw(rho, rc, g, f)), "grid"))
    for g, rcs2 in ((0.489, np.logspace(np.log10(3.8e-5), np.log10(3.2e-4), 4)), (2.0, np.linspace(0.016, 0.030, 4))):
        for rc in rcs2:
            laws.append((f"FW-T02null f=0.315 g={g} rc={rc:.3g}", (lambda rho, g=g, rc=rc: C_fw(rho, rc, g, 0.315)), "t02"))
    laws.append(("RG ellip e0=.089 Q=.47 rc=.0083", lambda rho: C_rg(rho, 0.0083, 0.47, 0.089), "rg"))
    laws.append(("RG disc  e0=.56 Q=.92 rc=7.4e-4", lambda rho: C_rg(rho, 7.4e-4, 0.92, 0.56), "rg"))

    print("\nPer-law: ell_max passing (both conservative terms below bound); Gdot/G at ell = 1 and 10 pc")
    print(f"{'law':>40} {'C(1pc)':>7} {'dlnC(1pc)':>9} {'GdotS 1pc':>10} {'GdotD 1pc':>10} {'GdotS 10pc':>10} {'ell_max':>8}")
    summary = {"grid": [0, 0], "t02": [0, 0], "rg": [0, 0]}
    bub_ex = {"grid": [0, 0], "t02": [0, 0], "rg": [0, 0]}
    ellmax_all = []
    for name, Cf, fam in laws:
        passes = []
        for ell in ELLS:
            r = R[ell]; s = dlnC(Cf, r['rho'])
            gs, gn = abs(s) * r['smooth_min'], abs(s) * r['discrete']
            passes.append(max(gs, gn) < BOUND)
        # ell_max = largest ell such that all ell' <= ell pass (contiguous from the bottom)
        em = None
        for ell, p in zip(ELLS, passes):
            if p: em = ell
            else: break
        r1, r10 = R[1.0], R[10.0]
        s1, s10 = dlnC(Cf, r1['rho']), dlnC(Cf, r10['rho'])
        ex1 = not passes[list(ELLS).index(1.0)]
        summary[fam][0] += ex1; summary[fam][1] += 1
        # Local-Bubble physical reading at ell = 10 pc, smooth term only (no discrete term at all)
        bx = abs(s10) * R[10.0]['bubble_min'] > BOUND
        bub_ex[fam][0] += bx; bub_ex[fam][1] += 1
        ellmax_all.append((name, em))
        print(f"{name:>40} {Cf(r1['rho']):7.4f} {s1:9.2e} {abs(s1)*r1['smooth_min']:10.2e} {abs(s1)*r1['discrete']:10.2e}"
              f" {abs(s10)*r10['smooth_min']:10.2e} {('<30AU' if em is None else f'{em:.3g}'):>8}")
    print("\nExcluded at ell = 1 pc (prereg rule):", {k: f"{v[0]}/{v[1]}" for k, v in summary.items()})
    print("Excluded at ell = 10 pc by the smooth term ALONE, Local-Bubble brackets (non-prereg):",
          {k: f"{v[0]}/{v[1]}" for k, v in bub_ex.items()})
    for ell in (1.0, 10.0, 100.0):
        excl = sum(1 for name, Cf, fam in laws
                   if max(abs(dlnC(Cf, R[ell]['rho'])) * R[ell]['smooth_min'], abs(dlnC(Cf, R[ell]['rho'])) * R[ell]['discrete']) > BOUND)
        print(f"  prereg rule at ell = {ell:g} pc: {excl}/{len(laws)} excluded")
    surv1 = [n for n, em in ellmax_all if em is not None and em >= 1.0]
    print(f"Laws passing at every ell up to >= 1 pc: {len(surv1)}/{len(laws)}")
    for n in surv1: print("   ", n)

    print("\nPass/fail map across ell (x = excluded under prereg rule, . = passes). ell grid:", " ".join(f"{e:.2g}" for e in ELLS))
    for name, Cf, fam in laws:
        if fam == "grid" and "0.315" not in name: continue
        marks = "".join("x" if max(abs(dlnC(Cf, R[e]['rho'])) * R[e]['smooth_min'], abs(dlnC(Cf, R[e]['rho'])) * R[e]['discrete']) > BOUND
                        else "." for e in ELLS)
        print(f"{name:>40} {marks}")

    # Relaxation-time escape: the smooth drift is linear on Myr scales; a first-order lag tau does not reduce a steady
    # rate. Averaging needs tau >~ vertical oscillation period.
    nu = np.sqrt(4 * np.pi * 4.5e-3 * 0.097)   # G in pc (km/s)^2/Msun * rho -> km/s/pc
    P_z = 2 * np.pi / nu / KMS_PC_PER_YR / 1e6
    print(f"\nVertical oscillation period (rho_dyn 0.097): {P_z:.0f} Myr; a relaxation time must exceed ~this to average the smooth term.")


if __name__ == "__main__":
    main()
