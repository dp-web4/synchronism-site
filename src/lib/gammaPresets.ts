/**
 * Canonical γ ↔ N_corr ladder — SINGLE SOURCE OF TRUTH.
 *
 * Created 2026-07-27 after visitor Pass 3/Pass 4 found the two tools that display this
 * mapping disagreed with each other:
 *   - /coherence-explorer quoted BCS at γ ≈ 0.02  (⇒ N_corr = 10⁴)
 *   - /gamma-calculator   quoted BCS at γ = 6.32×10⁻⁴ (⇒ N_corr = 10⁷)
 * — a factor of 32, and the two tools also disagreed about whether BCS or BEC is the more
 * collective system. Any page showing this mapping must import from here.
 *
 * The relation γ = 2/√N_corr is itself audited as SIGN-INVERTED (see Caveat 2 on
 * /gamma-calculator): it gives the least-correlated system the earliest, steepest-starting rise and the
 * most collective system the flattest. (No γ gives a sharp switch: the 10–90% width never drops below 1.17 dex.)
 * Captions below use 'earlier/later, gentler/steeper rise' for the curve and keep 'sharp' for real materials
 * only (2026-11-22, after a technical-writer visitor found captions contradicting the regime labels).
 * This file is the canonical statement of what the framework asserts, not an endorsement.
 */

export function gammaFromNcorr(n: number): number {
  return 2 / Math.sqrt(n);
}

/** Inverse of the framework's own map: N_corr = (2/γ)². */
export function ncorrFromGamma(g: number): number {
  return Math.pow(2 / g, 2);
}

export interface GammaPreset {
  label: string;
  ncorr: number;
  story: string;
  /** Galaxy-sector entries are framework parameters, not condensed-matter systems. */
  galaxySector?: boolean;
}

export const GAMMA_PRESETS: GammaPreset[] = [
  {
    // The framework's stated galaxy value (γ = 2) inverts to this same row, N_corr = 1. It is
    // named in the label rather than added as a second N_corr = 1 button (see GALAXY_PIN_GAMMA).
    label: 'Ideal gas (N_corr = 1, γ = 2; also the framework’s original galaxy guess, now disfavoured)',
    ncorr: 1,
    story:
      'Nothing moves together in an ideal gas — every particle is its own unit (N_corr = 1) — so γ hits its maximum of 2. On this curve that means the earliest rise this family allows, starting at the lowest density. It is not a sharp switch: above γ ≈ 1 raising γ mostly moves the rise earlier, and its width never drops below 1.17 dex (a factor of about 15 in density).',
  },
  {
    label: 'Liquid water',
    ncorr: 4,
    story:
      'Water molecules hydrogen-bond into small transient clusters (~4 moving together), which drops γ from 2 to 1, so the rise starts a little later. (The archive once called γ ≈ 1 the zone where chemistry lives; that reading is retracted, see The γ ≈ 1 Band.) Compare: one preset click took you from "lone particles" to "small teams."',
  },
  {
    // Label says 'back-fitted' up front (visitor 2026-09-23): a reader arriving from
    // /first-encounter (galaxy stars 'uncorrelated, N_corr = 1') took N_corr = 17 as a claim.
    // 2026-10-24: casual visitor still read '17' as a count ('a galaxy is 17 particles?'); say what 17 is.
    label: 'Galaxy, fitted to data (γ ≈ 0.49 from SPARC, so N_corr = (2/0.49)² ≈ 17, not a count of anything; the pre-fit guess was γ = 2)',
    ncorr: 17,
    galaxySector: true,
    story:
      'This is not a condensed-matter system — it is the framework\'s own galaxy parameter, run backwards through its own formula. The SPARC best fit quoted on /galaxy-rotation is γ ≈ 0.49, and N_corr = (2/γ)² sends it to ≈ 17 correlated units: between liquid water (4) and an enzyme active site (30). The framework\'s data-preferred galaxy value therefore says a galaxy is about as collectively organized as a small protein pocket — while the BCS superconductor at the bottom of the table gets 10⁷.',
  },
  {
    label: 'Enzyme site',
    ncorr: 30,
    story:
      'An enzyme’s active site moves as one unit of ~30 atoms. More teamwork → smaller γ → a gentler S-curve that rises later. You’re watching γ measure "how big is the team?"',
  },
  {
    label: 'Ferromagnet',
    ncorr: 100,
    story:
      'In a magnet, ~100 spins per correlated patch flip together. γ keeps falling as the teams get bigger — and notice the direction: bigger teams are getting later, FLATTER curves, while in real materials bigger correlated teams go with sharper transitions.',
  },
  {
    label: 'BEC',
    ncorr: 1000000,
    story:
      'A million atoms share one quantum state in a BEC — maximal quantum coherence — yet this "coherence" function scores it nearly flat and low. That mismatch is why the site warns that C is not quantum coherence.',
  },
  {
    label: 'BCS superconductor (10⁷ — mid of physical 10⁶–10⁹)',
    ncorr: 10000000,
    story:
      'Ten million Cooper pairs overlap in a superconductor, so γ collapses to ~0.0006 — the flattest curve on this tool. That is the audited failure in one click: a real superconductor has one of the SHARPEST transitions in nature, and this formula gives it the flattest. The formula’s sharpness direction is inverted.',
  },
];

/**
 * The galaxy pin γ = 2 (quoted on /core-idea) inverts to N_corr = 1 — the ideal-gas row
 * exactly. Kept separate from the preset list because it is numerically identical to the
 * ideal-gas entry; that identity is the finding, not a duplicate.
 */
export const GALAXY_PIN_GAMMA = 2;
export const GALAXY_SPARC_GAMMA = 0.49;
