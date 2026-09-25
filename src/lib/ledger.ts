/**
 * Single source of truth for the site's headline NUMBERS and the sentences that
 * carry them. Added 2026-09-05 after four visitor personas independently found that
 * the site has one source of truth for navigation and none for counts, IDs, badge
 * definitions, or the refutation ledger (visitor log 2026-09-05, cross-persona pattern).
 *
 * Rules:
 *  - Every page that prints one of these numbers imports it from here.
 *  - A number changes HERE first, with a dated note, then propagates.
 *  - Keep the archive ledger (`Synchronism/PREDICTIONS.md`) as the upstream; this file
 *    mirrors it and never softens a refutation.
 */

/** Executed refutations — the count everywhere on the site. */
export const REFUTATIONS_EXECUTED = 6;

/** Of the six, how many ran on external data (astronomical, ephemeris, laboratory). The
 *  sixth is the Bell/CHSH substrate check — not data. Its local arm illustrates Bell's theorem; its two
 *  nonlocal arms are construction nulls (three constructions built, the substrate class untested —
 *  Toner & Bacon 2003 hidden-communication models never built). Relabelled from "theorem" 2026-09-14
 *  after a researcher persona noted Bell's theorem says nothing about nonlocal no-signaling models. */
export const REFUTATIONS_ON_EXTERNAL_DATA = 5;

/**
 * Independent roots behind the six. Three live figures existed on the site until
 * 2026-09-05 (2 / 3–4 / 6). The reconciliation, derivable from published numbers:
 *   - 2 framework-specific mechanism roots: the boost ceiling B ≤ 1/Ω_m (TEST-09 ≡ TEST-10,
 *     one inequality) and the γ = 2 pin (ΔBIC +184);
 *   - 1 registration-specific: the environment null (S177's registration; site card TEST-03s —
 *     the research ledger calls it "TEST-08", which collides with the site's Freeman-law TEST-08) refuted S177's registered
 *     >20 % amplitude, which C(ρ)'s own lever (≤2×10⁻³ dex ⇒ r² ~ 10⁻⁴) never predicted —
 *     the measured r² = 1×10⁻⁴ is consistent with the equation;
 *   - 1 inherited from MOND's interpolating-function family: TEST-25 Cassini/SPARC;
 *   - 1 Bell/CHSH check: local arm = Bell's theorem illustrated; nonlocal arms = construction nulls.
 * The archive's own independence audit (2026-08-08) says "≤5" and the exact figure GATES
 * ON DP. Quote the split, not a single number.
 */
export const ROOTS_FRAMEWORK_SPECIFIC = 2;
export const ROOTS_SENTENCE =
  '6 executed refutations from 5 roots: 2 framework-specific (the boost ceiling, behind both TEST-09 and TEST-10; the γ=2 pin — RAR transition shape, unnumbered, closed 2026-05-21) + 1 refuted registration (environment amplitude) + 1 inherited from MOND (Cassini/SPARC) + 1 Bell/CHSH check (local arm = Bell\'s theorem; two nonlocal constructions null; the substrate class untested)';
/** Sentence rewritten 2026-09-14: the old form ("6 executed refutations; 2 … roots + 1 + 1 + 1") summed
 *  to 5 and a graduate-physics persona read it as an arithmetic error. */

/** Galaxy samples. 14,610 is the sample actually RUN (175 SPARC + 14,435 ALFALFA–SDSS after
 *  the optimal quality cut). 14,760 (175 + 14,585) is the full cross-match before cuts;
 *  the landing tile was corrected to 14,610 on 2026-08-10 and the rest of the site is
 *  being aligned to it. State the sample whenever the total appears. */
export const GALAXIES_RUN = '14,610';
export const GALAXIES_RUN_BREAKDOWN = '175 SPARC + 14,435 ALFALFA–SDSS (quality cut)';
export const GALAXIES_FULL = '14,760';
export const GALAXIES_FULL_BREAKDOWN = '175 SPARC + 14,585 ALFALFA–SDSS (full cross-match)';

/** The number that actually tested the MECHANISM. Every executed kill (γ=2 pin, boost ceiling
 *  via TEST-09/10, environment null, Cassini squeeze) ran on the 175 resolved SPARC rotation
 *  curves (123 after TEST-09's quality cut, 153 for TEST-10). The ALFALFA–SDSS Tully–Fisher
 *  scatter test (TEST-03) was registered and never run as registered; its 14,435 objects were
 *  used for a morphology statistic, not a mechanism test. Added 2026-09-06 after three visitor
 *  personas independently asked which number is honest. */
export const GALAXIES_MECHANISM = '175';
export const GALAXIES_SENTENCE =
  '14,610 galaxies run (175 SPARC + 14,435 ALFALFA–SDSS after the quality cut); the mechanism itself was tested on the 175 resolved SPARC rotation curves — the 14,435-object Tully–Fisher scatter test (TEST-03) was registered and never run as registered';

/** A2ACW session count. The archive's own tallies disagree by hundreds; 3,308 is the
 *  figure the site quotes when a point value is needed, "~3,300" in prose. */
export const SESSIONS_POINT = '3,308';
export const SESSIONS_APPROX = '~3,300';

/** The A2ACW specificity arm's held-out calibration set (Session 662; proposal
 *  `a2acw_specificity_null_baseline.md`). Until 2026-09-05 the /a2acw page listed a
 *  different set ("COBE, Higgs, GW first detection") that appears nowhere in the archive. */
export const A2ACW_CALIBRATION_SET = 'Dirac 1928, Bell 1964, BCS 1957, Higgs 1964, Hawking 1974, Noether 1918';

/** Registered test namespace. TEST-01 … TEST-24 is the registry the "24 experiments"
 *  count refers to; TEST-25 (Cassini/SPARC squeeze, renumbered 2026-08-10) and TEST-26
 *  (dark-energy sector, proposed) were added after the registry closed and are listed but
 *  not counted. */
export const REGISTERED_TESTS = 24;
export const POST_REGISTRY_TESTS = ['TEST-25', 'TEST-26'];

/**
 * The six executed refutations, one row each, in one place (2026-09-25). Three visitor personas
 * on 2026-09-25 could not map "6 refutations" to a list of IDs on any single page: the catalog
 * named 4 items, the 5th was unnumbered elsewhere, roots were named by mechanism, and "5 executed"
 * on Tier 1 meant a different set. Rendered by <RefutationLedger /> on /honest-assessment#refutation-ledger;
 * every scoreboard links there. `whichC` follows the archive's 2026-08-24 three-C mapping
 * (#1,#2 → C_a floored; #3,#5 → C_g; #4 → C_ρ; #6 → no C).
 */
export interface RefutationRow {
  n: number;
  what: string;
  ids: string;
  root: string;
  whichC: string;
  data: string;
  convention: string;
}

export const REFUTATION_ROWS: RefutationRow[] = [
  {
    n: 1,
    what: 'BTFR slope: a capped boost cannot give the observed mass–velocity slope',
    ids: 'TEST-09',
    root: 'Boost ceiling (same inequality as #2)',
    whichC: 'C_a, acceleration-keyed, floored at Ω_m',
    data: '123 SPARC rotation curves',
    convention: 'Registered kill fires only at B_max = 1/Ω_m (not at the two baryon-budget ceilings). The ceiling itself is excluded at every Ω_m-based convention by the weak-lensing RAR (#1–#2 note below).',
  },
  {
    n: 2,
    what: 'Dwarf dark-matter fractions: 69% of galaxies exceed the 68.5% cap',
    ids: 'TEST-10',
    root: 'Boost ceiling (same inequality as #1)',
    whichC: 'C_a, acceleration-keyed, floored at Ω_m',
    data: '153 SPARC rotation curves',
    convention: 'Headline figure is for 1/Ω_m; convention-free on SPARC, B_max ≲ 14 is excluded. Lensing: as #1.',
  },
  {
    n: 3,
    what: 'RAR transition shape at the framework\'s own γ = 2 (ΔBIC = +184)',
    ids: 'unnumbered (closed 2026-05-21)',
    root: 'The γ = 2 pin',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'SPARC radial acceleration relation (2,807 points)',
    convention: 'None. With γ free the fit lands on MOND\'s simple μ (a reparametrization, not a refutation).',
  },
  {
    n: 4,
    what: 'Environment: void galaxies do not sit high on the RAR (r² = 0.0001 vs a registered > 20%)',
    ids: 'TEST-01 / TEST-03s / TEST-05 (one run; the archive calls it TEST-08)',
    root: 'A refuted registration (S177\'s > 20% amplitude, which C(ρ)\'s own lever never predicted)',
    whichC: 'C_ρ, density-keyed',
    data: 'SPARC + Cosmicflows-4 density field',
    convention: 'None.',
  },
  {
    n: 5,
    what: 'Cassini/SPARC squeeze: no γ fits galaxies and the Solar System together (+17.95σ)',
    ids: 'TEST-25',
    root: 'Inherited from MOND (McGaugh\'s own RAR function fails the same instrument by +15.9 to +20.9σ)',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'Cassini quadrupole bound + SPARC',
    convention: 'None.',
  },
  {
    n: 6,
    what: 'Bell/CHSH: the substrate constructions stay at S ≤ 2 (quantum needs 2√2)',
    ids: 'Bet B1 (not a TEST ID)',
    root: 'Bell\'s theorem (local arm); two nonlocal constructions null',
    whichC: 'none (no C function involved)',
    data: 'Construction check, not external data',
    convention: 'None.',
  },
];
