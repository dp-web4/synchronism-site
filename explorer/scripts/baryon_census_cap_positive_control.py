"""Positive control for the galaxy leg of the McGaugh+2010 baryon census against a capped boost.

Universe: no dark matter. g_obs = B(g_bar) * g_bar with B = min(nu_simple(g_bar/a0), CAP), CAP = 6.39.
Mock discs: exponential stars + exponential gas (R_gas = 2.5 R_d), thin-disc Newtonian V via Freeman's Bessel formula.
Census (McGaugh+2010 Sec. II.1, read 2026-11-14): V_c = outermost measured velocity; V_500 = V_c / f_V with f_V = 1.1;
M_500 = 204552 * V_500^3 (km/s, Msun; Delta = 500, H0 = 72); f_d = M_b / (f_b M_500) with f_b = 0.17.
Truth in the model: radius where the model's own enclosed dynamical mass (V^2 r / G) has mean density 500 rho_crit,
f_d,true = M_b(<r) / (f_b M_dyn(<r)). By construction M_dyn <= CAP * M_b, so f_d,true >= 1/(CAP f_b) = 0.92.
"""
import numpy as np
from scipy.special import i0, i1, k0, k1

G = 4.30091e-6          # kpc (km/s)^2 / Msun
A0 = 1.2e-10 * 3.0857e19 / 1e6   # m/s^2 -> (km/s)^2/kpc : 1.2e-10 m/s^2 * (kpc in m) / (1e3)^2
CAP = 6.39
FV, FB, H0 = 1.1, 0.17, 72.0
RHO_C = 3 * (H0 / 1e3) ** 2 / (8 * np.pi * G)   # Msun/kpc^3 (H0 in km/s/kpc)

def v2_expdisc(r, M, Rd):
    y = np.clip(r / (2 * Rd), 1e-6, 300)
    return 4 * np.pi * G * (M / (2 * np.pi * Rd**2)) * Rd * y**2 * (i0(y) * k0(y) - i1(y) * k1(y))

def v2_bar(r, Ms, Mg, Rd):
    return v2_expdisc(r, Ms, Rd) + v2_expdisc(r, Mg, 2.5 * Rd)

def boost(gbar):
    y = gbar / A0
    return np.minimum(0.5 + np.sqrt(0.25 + 1 / y), CAP)

def enclosed_bar(r, Ms, Mg, Rd):
    m = lambda M, R: M * (1 - (1 + r / R) * np.exp(-r / R))
    return m(Ms, Rd) + m(Mg, 2.5 * Rd)

rows = []
for logMb in np.arange(7.5, 11.76, 0.5):
    Mb = 10**logMb
    fgas = np.clip(0.9 - 0.25 * (logMb - 7.5), 0.1, 0.9)      # gas-rich dwarfs, star-dominated giants
    Ms, Mg = Mb * (1 - fgas), Mb * fgas
    Rd = 2.5 * (Mb / 1e10) ** 0.33
    for Rlast_over_Rd in (4.0, 6.0, 10.0):
        Rl = Rlast_over_Rd * Rd
        gb = v2_bar(Rl, Ms, Mg, Rd) / Rl
        Vc = np.sqrt(boost(gb) * gb * Rl)
        M500 = 204552.0 * (Vc / FV) ** 3
        fd_census = Mb / (FB * M500)
        # model truth: solve mean enclosed dynamical density = 500 rho_c
        r = np.logspace(np.log10(Rd), 4, 4000)
        gbr = v2_bar(r, Ms, Mg, Rd) / r
        # far field: thin-disc Bessel form underflows; use point mass beyond 30 Rd
        far = r > 30 * Rd
        gbr[far] = G * Mb / r[far] ** 2
        Mdyn = boost(gbr) * gbr * r**2 / G
        dens = Mdyn / (4 / 3 * np.pi * r**3)
        i = np.argmax(dens < 500 * RHO_C)
        r500 = r[i]
        fd_true = enclosed_bar(r500, Ms, Mg, Rd) / (FB * Mdyn[i])
        rows.append((logMb, Rlast_over_Rd, Vc, Rl, r500, r500 / Rl, Mdyn[i] / enclosed_bar(r500, Ms, Mg, Rd), fd_census, fd_true))

print(f"cap={CAP}  a0=1.2e-10  f_V={FV}  f_b={FB}  H0={H0}")
print("logMb Rl/Rd  Vc[km/s]  Rlast[kpc]  r500_model[kpc]  r500/Rlast  B(<r500)  f_d,census  f_d,model")
for t in rows:
    print(f"{t[0]:5.2f} {t[1]:5.1f} {t[2]:8.1f} {t[3]:10.1f} {t[4]:14.1f} {t[5]:10.1f} {t[6]:9.2f} {t[7]:11.3f} {t[8]:10.3f}")
fdc = np.array([t[7] for t in rows]); fdt = np.array([t[8] for t in rows])
print(f"\ncensus f_d range {fdc.min():.3f}-{fdc.max():.3f} (all < 0.5: {np.all(fdc < 0.5)});  model f_d range {fdt.min():.3f}-{fdt.max():.3f} (all >= 1/(cap f_b) = {1/(CAP*FB):.3f}: {np.all(fdt >= 1/(CAP*FB) - 1e-3)})")
