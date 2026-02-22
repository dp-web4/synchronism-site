/**
 * Core Synchronism equations for interactive tools and page computations.
 */

/** Coherence function: C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) */
export function coherence(rho: number, gamma: number, rhoCrit: number): number {
  if (rho <= 0 || rhoCrit <= 0) return 0;
  return Math.tanh(gamma * Math.log(rho / rhoCrit + 1));
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

/** Critical density: ρ_crit = A × V_flat² */
export function criticalDensity(vFlat: number, A: number = 0.029): number {
  return A * vFlat * vFlat;
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

/** Determine regime from γ value */
export function regime(gamma: number): 'quantum' | 'boundary' | 'classical' {
  if (gamma > 1.5) return 'quantum';
  if (gamma > 0.5) return 'boundary';
  return 'classical';
}

/** Regime label with color */
export function regimeLabel(gamma: number): { label: string; color: string } {
  const r = regime(gamma);
  switch (r) {
    case 'quantum': return { label: 'Quantum (γ > 1.5)', color: '#38bdf8' };
    case 'boundary': return { label: 'Boundary (γ ≈ 1)', color: '#8b5cf6' };
    case 'classical': return { label: 'Classical (γ < 0.5)', color: '#22c55e' };
  }
}

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
