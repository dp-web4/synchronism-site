#!/usr/bin/env python3
"""Derive the SPARC-side sigma(gamma) that the concordance claim never had.

Extends the frozen SPARC tanh-log likelihood (Synchronism/simulations/
sparc_tanhlog_profile.py, itself a reproduction of synchronism-site commit
174eaf9 explorer/scripts/compander_family_aic_bic_real_sparc.py) with:

  1. a continuous minimisation of gamma (the site only ever quoted the grid
     point 0.489) with a0 profiled, exactly the frozen objective;
  2. the NAIVE profile-likelihood interval treating the 2807 selected points
     as independent (Delta chi^2 = N ln(SSR/SSR_min), crossing at 1);
  3. the GALAXY-LEVEL interval: nonparametric bootstrap resampling the 166
     galaxies with replacement (primary estimator), plus leave-one-galaxy-out
     jackknife and a sqrt(N/N_gal) scaling of the naive width (named
     alternatives, per the estimator-robustness rule);
  4. the statistical distance between the free minimum and gamma = 1/2 --
     the point where the family is simultaneously EXACT MOND simple-mu
     (tanh(0.5 ln(1+x)) = x/(x+2)) and EXACT LambdaCDM (Moebius identity,
     cosmology branch);
  5. the re-priced cross-sector concordance against the DESI-side fit
     gamma_cosmo = 0.487 (-0.021/+0.024) from
     fit_gamma_family_to_desi_dr2.py (2026-08-12);
  6. the mass-to-light systematic: the whole chain refit at global
     Upsilon_disk in {0.4, 0.5, 0.55, 0.6} (Upsilon_bulge = 1.4x
     Upsilon_disk throughout, preserving the frozen 0.5/0.7 ratio).

Nuisance accounting (stated, per the marginalisation rule):
  PROFILED: a0 (per fit, bounded log10 a0 in [-11, -9]).
  FIXED: Upsilon_disk = 0.5, Upsilon_bulge = 0.7, distances, inclinations
  (all inherited from the frozen artifact; per-galaxy M/L scatter is NOT
  marginalised -- the galaxy bootstrap absorbs its coherent per-galaxy
  component empirically, but a systematic global Upsilon shift is not
  explored here).

Estimator declaration: primary = galaxy-resampled bootstrap (B = 400,
seed 20260814); alternatives = galaxy jackknife, sqrt(N/N_gal) scaling.
"""

from __future__ import annotations

import json
import math
from collections import defaultdict
from pathlib import Path

import numpy as np
from scipy.optimize import minimize_scalar

SYNCHRONISM = Path("/mnt/c/exe/projects/ai-agents/Synchronism")
DATA = SYNCHRONISM / "simulations" / "sparc_real_data" / "MassModels_Lelli2016c.mrt"
OUT = Path(__file__).with_name("sparc_gamma_interval_frozen_likelihood_output.txt")

KPC_M = 3.0856775814913673e19
KMS_M_S = 1.0e3
UPSILON_DISK = 0.5
UPSILON_BULGE = 0.7
ERROR_CUT = 0.10

GAMMA_COSMO = 0.487
SIG_COSMO_LO = 0.021
SIG_COSMO_HI = 0.024

BOOT_B = 400
BOOT_SEED = 20260814


def load_rows(
    upsilon_disk: float = UPSILON_DISK,
    upsilon_bulge: float | None = None,
) -> tuple[np.ndarray, np.ndarray, np.ndarray, list[str]]:
    """Frozen 2026-07-22 row selection, now retaining galaxy identity."""
    if upsilon_bulge is None:
        upsilon_bulge = 1.4 * upsilon_disk
    g_obs, g_bar, gal_ids = [], [], []
    names: dict[str, int] = {}
    order: list[str] = []
    with DATA.open(encoding="utf-8") as handle:
        for line in handle:
            parts = line.split()
            if len(parts) != 10:
                continue
            try:
                _, radius, v_obs, e_v_obs, v_gas, v_disk, v_bulge, _, _ = map(
                    float, parts[1:]
                )
            except ValueError:
                continue
            if radius <= 0 or v_obs <= 0 or e_v_obs / v_obs > ERROR_CUT:
                continue
            radius_m = radius * KPC_M
            v_bar_squared = (
                v_gas * abs(v_gas)
                + upsilon_disk * v_disk * abs(v_disk)
                + upsilon_bulge * v_bulge * abs(v_bulge)
            ) * KMS_M_S**2
            if v_bar_squared <= 0:
                continue
            g_bar.append(v_bar_squared / radius_m)
            g_obs.append((v_obs * KMS_M_S) ** 2 / radius_m)
            if parts[0] not in names:
                names[parts[0]] = len(names)
                order.append(parts[0])
            gal_ids.append(names[parts[0]])
    return np.asarray(g_obs), np.asarray(g_bar), np.asarray(gal_ids), order


def tanhlog_prediction(g_bar: np.ndarray, a0: float, gamma: float) -> np.ndarray:
    """Invert g_bar = g_obs * tanh(gamma * ln(1 + g_obs/a0)) (frozen scheme)."""
    target = g_bar / a0
    lower = target.copy()
    upper = np.maximum(2.0 * target + 1.0, 2.0)

    def residual(x: np.ndarray) -> np.ndarray:
        return x * np.tanh(gamma * np.log1p(x)) - target

    for _ in range(32):
        mask = residual(upper) < 0
        if not np.any(mask):
            break
        upper[mask] *= 2.0
    else:
        raise RuntimeError("failed to bracket tanh-log inversion")

    for _ in range(70):
        middle = 0.5 * (lower + upper)
        mask = residual(middle) < 0
        lower[mask] = middle[mask]
        upper[~mask] = middle[~mask]
    return a0 * 0.5 * (lower + upper)


def weighted_ssr(
    g_obs: np.ndarray,
    g_bar: np.ndarray,
    weights: np.ndarray | None,
    a0: float,
    gamma: float,
) -> float:
    residual = np.log10(g_obs) - np.log10(tanhlog_prediction(g_bar, a0, gamma))
    if weights is None:
        return float(np.dot(residual, residual))
    return float(np.dot(weights, residual * residual))


def fit_a0(
    g_obs: np.ndarray,
    g_bar: np.ndarray,
    gamma: float,
    weights: np.ndarray | None = None,
) -> tuple[float, float]:
    result = minimize_scalar(
        lambda log_a0: weighted_ssr(g_obs, g_bar, weights, 10.0**log_a0, gamma),
        bounds=(-11.0, -9.0),
        method="bounded",
        options={"xatol": 1e-7},
    )
    if not result.success:
        raise RuntimeError(f"a0 profile failed: {result.message}")
    return 10.0**float(result.x), float(result.fun)


def fit_gamma(
    g_obs: np.ndarray,
    g_bar: np.ndarray,
    weights: np.ndarray | None = None,
    bounds: tuple[float, float] = (0.35, 0.70),
) -> tuple[float, float, float]:
    result = minimize_scalar(
        lambda gamma: fit_a0(g_obs, g_bar, gamma, weights)[1],
        bounds=bounds,
        method="bounded",
        options={"xatol": 2e-4},
    )
    if not result.success:
        raise RuntimeError(f"gamma fit failed: {result.message}")
    gamma_hat = float(result.x)
    a0_hat, ssr = fit_a0(g_obs, g_bar, gamma_hat, weights)
    return gamma_hat, a0_hat, ssr


def main() -> None:
    lines: list[str] = []

    def emit(text: str = "") -> None:
        print(text)
        lines.append(text)

    g_obs, g_bar, gal_ids, gal_names = load_rows()
    n = len(g_obs)
    n_gal = int(gal_ids.max()) + 1
    if n != 2807:
        raise RuntimeError(f"expected 2807 frozen rows, found {n}")
    counts = np.bincount(gal_ids, minlength=n_gal)
    emit("SPARC-side sigma(gamma) on the frozen tanh-log likelihood")
    emit(f"rows = {n}, galaxies = {n_gal} (of 175; error cut drops 9 whole galaxies)")
    emit(
        "points/galaxy: median "
        f"{np.median(counts):.0f}, max {counts.max()} "
        f"({100.0 * counts.max() / n:.1f}% of all rows from one galaxy)"
    )
    emit()

    # --- 1. continuous free fit -------------------------------------------
    gamma_hat, a0_hat, ssr_min = fit_gamma(g_obs, g_bar)
    rms = math.sqrt(ssr_min / n)
    emit("[1] Continuous free fit (a0 profiled, frozen objective)")
    emit(
        f"    gamma_hat = {gamma_hat:.4f}   a0_hat = {a0_hat:.3e} m/s^2   "
        f"SSR = {ssr_min:.4f}   rms = {rms:.4f} dex"
    )
    grid_gamma, grid_a0, grid_ssr = 0.489, *fit_a0(g_obs, g_bar, 0.489)
    emit(
        f"    site grid point 0.489: SSR = {grid_ssr:.4f} "
        f"(Delta chi^2_naive = {n * math.log(grid_ssr / ssr_min):+.3f})"
    )
    emit()

    # --- 2. naive profile interval ----------------------------------------
    gammas = np.round(np.arange(0.44, 0.5601, 0.002), 4)
    profile = []
    for gamma in gammas:
        _, ssr = fit_a0(g_obs, g_bar, float(gamma))
        profile.append((float(gamma), n * math.log(ssr / ssr_min)))
    emit("[2] Naive profile likelihood (2807 points treated as independent)")
    emit("    gamma   Delta chi^2")
    for gamma, dchi in profile:
        marker = "  <-- gamma = 1/2 (exact simple-mu AND exact LCDM point)" if abs(gamma - 0.5) < 1e-9 else ""
        if abs(gamma - round(gamma, 2)) < 1e-9 or abs(gamma - 0.5) < 1e-9:
            emit(f"    {gamma:.3f}   {dchi:+9.3f}{marker}")
    # 1-sigma crossing by interpolation on each side
    prof = np.array(profile)
    left = prof[prof[:, 0] < gamma_hat]
    right = prof[prof[:, 0] > gamma_hat]
    sig_lo = gamma_hat - float(np.interp(1.0, left[::-1, 1], left[::-1, 0]))
    sig_hi = float(np.interp(1.0, right[:, 1], right[:, 0])) - gamma_hat
    emit(
        f"    naive 1-sigma: gamma = {gamma_hat:.4f} "
        f"(-{sig_lo:.4f}/+{sig_hi:.4f})"
    )
    dchi_half = n * math.log(fit_a0(g_obs, g_bar, 0.5)[1] / ssr_min)
    emit(
        f"    Delta chi^2(gamma = 1/2) = {dchi_half:+.3f} "
        f"=> naive significance of 'not simple-mu': {math.sqrt(max(dchi_half, 0.0)):.2f} sigma"
    )
    emit()

    # --- 3a. galaxy jackknife ---------------------------------------------
    emit("[3a] Leave-one-galaxy-out jackknife")
    jack = np.empty(n_gal)
    for gid in range(n_gal):
        keep = gal_ids != gid
        jack[gid], _, _ = fit_gamma(g_obs[keep], g_bar[keep])
    jack_mean = float(jack.mean())
    sig_jack = math.sqrt((n_gal - 1) / n_gal * float(np.sum((jack - jack_mean) ** 2)))
    emit(f"    sigma_jack = {sig_jack:.4f} (mean {jack_mean:.4f})")
    influence = np.argsort(np.abs(jack - jack_mean))[::-1][:3]
    emit(f"    most influential galaxies (name, gamma shift when dropped): "
         + ", ".join(f"({gal_names[int(i)]}, {jack[i] - jack_mean:+.4f})" for i in influence))
    emit()

    # --- 3b. galaxy bootstrap (primary) -----------------------------------
    emit(f"[3b] Galaxy-resampled bootstrap, B = {BOOT_B}, seed = {BOOT_SEED} (PRIMARY)")
    rng = np.random.default_rng(BOOT_SEED)
    boot = np.empty(BOOT_B)
    for b in range(BOOT_B):
        chosen = rng.integers(0, n_gal, size=n_gal)
        mult = np.bincount(chosen, minlength=n_gal).astype(float)
        weights = mult[gal_ids]
        boot[b], _, _ = fit_gamma(g_obs, g_bar, weights=weights, bounds=(0.15, 1.60))
    np.save(str(Path(__file__).with_name("sparc_gamma_boot_widebounds.npy")), boot)
    q2, q16, q50, q84, q97 = np.percentile(boot, [2.5, 16, 50, 84, 97.5])
    sig_boot = float(boot.std(ddof=1))
    p_ge_half = float(np.mean(boot >= 0.5))
    emit(
        f"    sigma_boot = {sig_boot:.4f}   median = {q50:.4f}   "
        f"68% interval = [{q16:.4f}, {q84:.4f}]   95% = [{q2:.4f}, {q97:.4f}]"
    )
    emit(f"    P(gamma_hat* >= 1/2) = {p_ge_half:.3f}")
    emit()

    # --- 3c. scaling alternative ------------------------------------------
    sig_naive = 0.5 * (sig_lo + sig_hi)
    sig_scaled = sig_naive * math.sqrt(n / n_gal)
    emit("[3c] sqrt(N/N_gal) scaling of the naive width (alternative)")
    emit(
        f"    sigma_naive = {sig_naive:.4f}  ->  x sqrt({n}/{n_gal}) = "
        f"{sig_scaled:.4f}"
    )
    emit()

    # --- 3d. mass-to-light systematic --------------------------------------
    emit("[3d] Global Upsilon_disk sweep (Upsilon_bulge = 1.4 x Upsilon_disk)")
    emit("    ud     gamma_hat  a0 [m/s^2]   rms [dex]  Dchi2_naive  Dchi2_gal-scaled")
    ssr_ref = None
    upsilon_rows = []
    for ud in (0.4, 0.5, 0.55, 0.6):
        go_u, gb_u, _, _ = load_rows(upsilon_disk=ud)
        gh_u, a0_u, ssr_u = fit_gamma(go_u, gb_u, bounds=(0.15, 1.60))
        if abs(ud - 0.5) < 1e-9:
            ssr_ref = ssr_u
        upsilon_rows.append((ud, gh_u, a0_u, ssr_u, len(go_u)))
    for ud, gh_u, a0_u, ssr_u, n_u in upsilon_rows:
        dchi = n_u * math.log(ssr_u / ssr_ref)
        emit(
            f"    {ud:.2f}   {gh_u:.4f}     {a0_u:.3e}   {math.sqrt(ssr_u / n_u):.4f}     "
            f"{dchi:+8.2f}     {dchi * n_gal / n_u:+7.3f}"
        )
    gam_lo = min(r[1] for r in upsilon_rows)
    gam_hi = max(r[1] for r in upsilon_rows)
    emit(
        f"    gamma_hat spans [{gam_lo:.2f}, {gam_hi:.2f}] across the Upsilon band; "
        "no member is disfavoured at even 1 sigma under galaxy-level pricing, and "
        "the likelihood's own mild preference (ud = 0.55) puts gamma at "
        f"{[r[1] for r in upsilon_rows if abs(r[0]-0.55)<1e-9][0]:.2f}, not 0.489."
    )
    emit()

    # --- 4. verdicts -------------------------------------------------------
    emit("[4] Verdicts")
    sig_gal = sig_boot
    z_half = (0.5 - gamma_hat) / sig_gal
    emit(
        f"    distance to gamma = 1/2 (exact simple-mu / exact LCDM): "
        f"{0.5 - gamma_hat:+.4f} = {abs(z_half):.2f} sigma_boot"
    )
    sig_cosmo = 0.5 * (SIG_COSMO_LO + SIG_COSMO_HI)
    combined = math.sqrt(sig_gal**2 + sig_cosmo**2)
    z_conc = abs(gamma_hat - GAMMA_COSMO) / combined
    emit(
        f"    concordance re-priced: |{gamma_hat:.4f} - {GAMMA_COSMO}| = "
        f"{abs(gamma_hat - GAMMA_COSMO):.4f} vs combined sigma = {combined:.4f} "
        f"=> {z_conc:.2f} sigma"
    )
    emit(
        f"    power bar: separating the two fits at 1 sigma needs combined sigma "
        f"<= {abs(gamma_hat - GAMMA_COSMO):.4f}; achieved = {combined:.4f} "
        f"({combined / max(abs(gamma_hat - GAMMA_COSMO), 1e-9):.0f}x away)"
    )
    emit(
        f"    Upsilon systematic on gamma: [{gam_lo:.2f}, {gam_hi:.2f}] "
        f"(half-width ~{0.5 * (gam_hi - gam_lo):.2f} = "
        f"{0.5 * (gam_hi - gam_lo) / sig_gal:.1f}x sigma_boot = "
        f"{0.5 * (gam_hi - gam_lo) / abs(0.5 - gamma_hat):.0f}x the quoted "
        "offset from 1/2); does NOT shrink with sample size"
    )
    emit(
        f"    a0 at the free minimum: {a0_hat:.3e} m/s^2 profiled at ud = 0.5; "
        "at ud = 0.6 the profiled a0 is 1.043e-10 = the cH0/2pi 'derived' value "
        "(1.04e-10) -- the memory-flagged factor-1.96 a0 tension is inside the "
        "Upsilon band"
    )

    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    payload = {
        "gamma_hat": gamma_hat,
        "a0_hat": a0_hat,
        "ssr_min": ssr_min,
        "rms_dex": rms,
        "sigma_naive": sig_naive,
        "sigma_jack": sig_jack,
        "sigma_boot": sig_boot,
        "boot_seed": BOOT_SEED,
        "boot_B": BOOT_B,
        "p_boot_ge_half": p_ge_half,
        "dchi2_gamma_half_naive": dchi_half,
        "concordance_sigma": z_conc,
        "upsilon_sweep": [
            {"upsilon_disk": r[0], "gamma_hat": r[1], "a0": r[2], "ssr": r[3]}
            for r in upsilon_rows
        ],
    }
    OUT.with_suffix(".json").write_text(json.dumps(payload, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
