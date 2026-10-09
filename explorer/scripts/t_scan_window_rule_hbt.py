"""T_scan under the archive's window-integral rule, scored against HBT g2(0).
PREREG: scripts/t_scan_window_rule_PREREG.md (commit 5139489).
Units: time in units of the scan period T; window w = tau_w / T. p = 1/2 (50:50 beam splitter)."""
import numpy as np
rng = np.random.default_rng(20261009)
p, eta = 0.5, 0.5

def frac_in_A(u, w):
    """Fraction of window [u, u+w] spent in mode A = [0,p) mod 1 (exact, vectorised)."""
    def cum(t):  # time in A on [0, t]
        n = np.floor(t); r = t - n
        return n * p + np.minimum(r, p)
    return (cum(u + w) - cum(u)) / w

def g2_zero(w, rule, N=400_000):
    u = rng.random(N)
    x = frac_in_A(u, w)
    mixed = (x > 1e-12) & (x < 1 - 1e-12)
    if rule == "R1":   # any presence -> detector can fire with eta
        pa = np.where(x > 1e-12, eta, 0.0); pb = np.where(x < 1 - 1e-12, eta, 0.0)
    elif rule == "R2": # linear response
        pa, pb = eta * x, eta * (1 - x)
    elif rule == "R3": # mixed -> neither fires
        pa = np.where(x >= 1 - 1e-12, eta, 0.0); pb = np.where(x <= 1e-12, eta, 0.0)
    elif rule == "R0": # instantaneous sampling at window opening
        a = (u % 1) < p; pa, pb = eta * a, eta * (~a)
    pab = np.mean(pa * pb)                    # same-pulse coincidence
    side = np.mean(pa) * np.mean(pb)          # independent pulses
    return mixed.mean(), (pab / side if side > 0 else np.nan)

print("== MC check of f = 2w and g2(0) per rule ==")
for w in [1e-4, 1e-3, 1e-2, 0.1, 0.5, 3.0, 1e3]:
    row = [f"w={w:<7g}"]
    for r in ["R0", "R1", "R2", "R3"]:
        f, g = g2_zero(w, r); row.append(f"{r}: f={f:.4g} g2={g:.4g}")
    print("  ".join(row), f"| analytic f(w<=1/2)=2w={2*w:.4g}")

g2, sg = 7.5e-5, 1.6e-5
g2_2s = g2 + 2 * sg
print(f"\n== Data: Schweickert+2018 raw g2(0) = {g2:.2e} +- {sg:.1e}; 2-sigma ceiling {g2_2s:.2e} ==")
# small-w analytics: R1 g2 = 4f ; R2 g2 = f * E[x(1-x)]/(p(1-p)) with x ~ U(0,1) on mixed windows -> (1/6)/(1/4) f = 2f/3
f_max = {"R1": g2_2s / 4, "R2": g2_2s * 1.5}
# confirm R2 small-w slope numerically
fm, gm = g2_zero(1e-2, "R2", N=4_000_000); print(f"R2 numeric g2/f at w=0.01: {gm/fm:.3f} (analytic 0.667)")
fm, gm = g2_zero(1e-2, "R1", N=4_000_000); print(f"R1 numeric g2/f at w=0.01: {gm/fm:.3f} (analytic 4)")
for tau_name, tau in [("photon duration 125 ps", 125e-12), ("coincidence window 5 ns", 5e-9)]:
    for r in ["R1", "R2"]:
        Tmin = 2 * tau / f_max[r]
        print(f"  tau_w = {tau_name:<24} {r}: f <= {f_max[r]:.2e} -> T_scan >= {Tmin:.2e} s ({Tmin/tau:.1e} x tau_w)")

print("\n== Archive candidate clocks under R1/R2 (tau_w = 125 ps) ==")
for name, T in [("Planck tick", 5.39e-44), ("electron Compton h/mc^2", 8.09e-21),
                ("optical Bohr period (~500 THz)", 2e-15), ("hyperfine Bohr period (9.2 GHz)", 1.09e-10)]:
    w = 125e-12 / T
    fR1, gR1 = g2_zero(min(w, 1e3), "R1", 200_000); fR2, gR2 = g2_zero(min(w, 1e3), "R2", 200_000)
    print(f"  {name:<34} T={T:.2e}s w={w:.1e}: f={fR1:.3f}, g2(R1)={gR1:.2f}, g2(R2)={gR2:.2f}  vs data {g2:.1e}")

print("\n== Global persistent clock: pulses every 12.5 ns, emission jitter exp(125 ps) ==")
def side_peaks(T, kmax=20, N=200_000, rep=12.5e-9, tau=125e-12):
    u0 = rng.random()
    n = np.arange(N)
    t = n * rep + rng.exponential(tau, N)
    x = frac_in_A((u0 + t / T) % 1.0, tau / T)  # R2, fresh window at each arrival
    pa, pb = eta * x, eta * (1 - x)
    base = pa.mean() * pb.mean()
    out = [np.mean(pa[:-k] * pb[k:]) / base for k in range(1, kmax + 1)]
    return np.array(out), np.mean(pa * pb) / base
for T in [1e-9, 1e-7, 1e-6, 1e-5, 1e-4]:
    s, g0 = side_peaks(T)
    print(f"  T={T:.0e}s  g2(0)={g0:.3g}  side peaks k=1,2,5,10,20 (norm. to independent): "
          + ", ".join(f"{s[k-1]:.3f}" for k in [1, 2, 5, 10, 20]))

print("\n== Post-hoc (not in PREREG): long photons, Farrera+2016 Nat. Commun. 7, 13556 ==")
# heralded photons from a cold ensemble; g2 data to ~1 us duration; long-photon g2(0) = 0.17 +- 0.02,
# authors attribute the rise (short 0.10) to SPD dark counts in longer gates.
for r, k in [("R1", 0.25), ("R2", 1.5)]:
    fmax = (0.17 + 2 * 0.02) * k
    print(f"  {r}: tau_w = 1 us, f <= {fmax:.3f} -> T_scan >= {2*1e-6/fmax:.2e} s")
dg = 0.17 - 0.10
print(f"  If the whole rise dg2 = {dg:.2f} were the R2 mixed-window term (slope 4/(3T) per unit tau): "
      f"T ~ {4/3*1e-6/dg:.1e} s -- not excluded by Schweickert R2 bound (>= 1.56e-6 s); dark counts are the stated cause")
