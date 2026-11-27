/**
 * One source for the γ band names (2026-11-27).
 *
 * A technical-writer simulated-visitor persona (2026-11-27) found the same three γ ranges named four ways across the
 * γ Calculator, the Crossover Regime Visualizer, the γ Regimes page and the Coherence Explorer: "Collective" meant
 * γ < 0.6 on one page and γ < 0.2 on another, and the retracted "Boundary" survived in a diagram and in a live label.
 * Every band label on those pages now renders from here. The edges map to N_corr through γ = 2/√N_corr:
 * γ = 1.4 ⇔ N_corr ≈ 2.04 and γ = 0.6 ⇔ N_corr ≈ 11.1, so the integer counts are 1–2, 3–11 and ≥ 12.
 *
 * The names describe the N_corr assignment, not the physics: the assignment is audited-negative (sign inverted), so the
 * "collective" band gets the flattest curves while real collective transitions are the sharpest.
 */

export type GammaBandId = 'single' | 'crossover' | 'collective';

export interface GammaBand {
  id: GammaBandId;
  /** Short name, used on bars, readouts and table headers. */
  name: string;
  /** γ range, plain text. */
  range: string;
  /** N_corr range, plain text. */
  ncorr: string;
  color: string;
}

export const GAMMA_BAND_HIGH_EDGE = 1.4;
export const GAMMA_BAND_LOW_EDGE = 0.6;
/** Inside the collective band, the γ Calculator marks the flattest curves separately. A sub-range, not a fourth band. */
export const GAMMA_DEEP_COLLECTIVE_EDGE = 0.2;

export const GAMMA_BANDS: Record<GammaBandId, GammaBand> = {
  single: {
    id: 'single',
    name: 'Single-particle band',
    range: 'γ > 1.4',
    ncorr: 'N_corr = 1 or 2',
    color: '#8b5cf6',
  },
  crossover: {
    id: 'crossover',
    name: 'Crossover band',
    range: '0.6 ≤ γ ≤ 1.4',
    ncorr: 'N_corr ≈ 2.04–11.1 (whole counts 3–11)',
    color: '#f59e0b',
  },
  collective: {
    id: 'collective',
    name: 'Collective band',
    range: 'γ < 0.6',
    ncorr: 'N_corr ≥ 12',
    color: '#10b981',
  },
};

/** Band order from low γ to high γ, for bars drawn left to right. */
export const GAMMA_BANDS_LOW_TO_HIGH: GammaBand[] = [GAMMA_BANDS.collective, GAMMA_BANDS.crossover, GAMMA_BANDS.single];

export function gammaBand(g: number): GammaBand {
  if (g > GAMMA_BAND_HIGH_EDGE) return GAMMA_BANDS.single;
  if (g >= GAMMA_BAND_LOW_EDGE) return GAMMA_BANDS.crossover;
  return GAMMA_BANDS.collective;
}

/** "Crossover band (0.6 ≤ γ ≤ 1.4)" */
export function gammaBandLabel(g: number): string {
  const b = gammaBand(g);
  return `${b.name} (${b.range})`;
}
