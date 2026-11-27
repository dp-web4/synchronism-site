/**
 * Core Synchronism equations for interactive tools and page computations.
 */

/**
 * Coherence function: C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1))
 *
 * CAUTION (2026-09-08): this is the UNFLOORED form — C → 0 as ρ → 0, so any boost 1/C
 * diverges at low density. The galaxy-sector law actually adjudicated on Tier 1 is the
 * floored form C ≥ Ω_m (see coherenceFloored). On the 2026-09-07 globular-cluster test
 * the unfloored form was the worst performer (outer-slope mismatch −0.428 vs −0.211 floored
 * at γ = 0.489), and it diverges where the floored form saturates. Tools that plot this
 * function at low density are plotting the variant the data exclude hardest; caption it.
 */
export function coherence(rho: number, gamma: number, rhoCrit: number): number {
  if (rho <= 0 || rhoCrit <= 0) return 0;
  return Math.tanh(gamma * Math.log(rho / rhoCrit + 1));
}

/**
 * Floored coherence: C_floored = floor + (1 − floor) · tanh(γ · ln(ρ/ρ_crit + 1)).
 * With floor = Ω_m ≈ 0.315 this is the bounded-boost law (B_max = 1/Ω_m ≈ 3.17) that
 * TEST-09/TEST-10 refute and the globular-cluster test scores. Default floor is Ω_m.
 */
export function coherenceFloored(rho: number, gamma: number, rhoCrit: number, floor: number = 0.315): number {
  if (rhoCrit <= 0) return floor;
  const c = rho <= 0 ? 0 : Math.tanh(gamma * Math.log(rho / rhoCrit + 1));
  return floor + (1 - floor) * c;
}

/** γ from N_corr: γ = 2/√N_corr */
export function gammaFromNcorr(nCorr: number): number {
  if (nCorr <= 0) return 0;
  return 2 / Math.sqrt(nCorr);
}

/** N_corr from γ: N_corr = (2/γ)² */
export function ncorrFromGamma(gamma: number): number {
  if (gamma <= 0) return Infinity;
  return Math.pow(2 / gamma, 2);
}

/**
 * Critical density, archive form: ρ_crit = A × V_flat^0.5, A = 0.028 M☉ pc⁻³ (km/s)^-0.5
 * (Session 53/65 Jeans-style estimate with a fitted length scale R₀; calibrated, not derived).
 * Until 2026-11-22 this function computed 0.029 × V_flat², the V^0.5 coefficient on a V² law
 * (the units slip traced 2026-08-27). It has no callers; it is kept so the site's library states one form.
 */
export function criticalDensity(vFlat: number, A: number = 0.028): number {
  return A * Math.sqrt(vFlat);
}

/** MOND acceleration: a₀ = cH₀/(2π) */
export function mondAcceleration(
  c: number = 2.998e8,   // m/s
  H0: number = 2.27e-18  // s⁻¹ (70 km/s/Mpc)
): number {
  return (c * H0) / (2 * Math.PI);
}

/** Freeman surface density: Σ₀ = cH₀/(4π²G) */
export function freemanDensity(
  c: number = 2.998e8,
  H0: number = 2.27e-18,
  G: number = 6.674e-11
): number {
  return (c * H0) / (4 * Math.PI * Math.PI * G);
}

// regime()/regimeLabel() removed 2026-11-27: unused, and a fourth γ band vocabulary (Quantum/Boundary/Classical at
// 1.5/0.5). Band names now live in lib/gammaBands.ts.

/** Coupling-coherence model (generalized form for multi-agent experiments) */
export function couplingCoherence(p: number, gamma: number, pCrit: number): number {
  if (p <= 0 || pCrit <= 0) return 0;
  return Math.tanh(gamma * Math.log(p / pCrit + 1));
}

/** Hill function sigmoid (power-law alternative to tanh) */
export function hillSigmoid(p: number, k: number, pHalf: number): number {
  if (p <= 0 || pHalf <= 0) return 0;
  return Math.pow(p, k) / (Math.pow(p, k) + Math.pow(pHalf, k));
}

/** Format a number in scientific notation for display */
export function sciNotation(n: number, decimals: number = 2): string {
  if (n === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(n)));
  const mantissa = n / Math.pow(10, exp);
  if (exp === 0) return mantissa.toFixed(decimals);
  return `${mantissa.toFixed(decimals)} × 10^${exp}`;
}
