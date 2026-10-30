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
 *  nonlocal arms are construction nulls (three constructions built). Toner & Bacon 2003 is an existence proof
 *  that one classical bit per trial reproduces singlet correlations without marginal signaling, so the class works;
 *  the open cost is a substrate that supplies the bit across spacelike separation, i.e. a preferred frame (2026-10-24). Relabelled from "theorem" 2026-09-14
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
  '6 executed refutations from 5 roots: 2 framework-specific (the boost ceiling, behind both TEST-09 and TEST-10; the γ=2 pin — RAR transition shape, unnumbered, closed 2026-05-21; at the threshold once galaxies, not points, are the unit — 2026-09-29) + 1 refuted registration (environment amplitude) + 1 inherited from MOND (Cassini/SPARC) + 1 Bell/CHSH check (local arm = Bell\'s theorem; two nonlocal constructions null; the hidden-communication class works by Toner–Bacon\'s existence proof, at the cost of a preferred frame)';
/**
 * How the four headline counts relate (2026-10-07). A technical-writer persona found one count stated four
 * ways (6 refutations / 4 Tier 1 kills fired / 2 discriminated / 0 of 9) with no stated relationship. They are
 * nested subsets of one table plus one separate audit.
 */
export const COUNT_MAP_SENTENCE =
  'How the counts relate: the 6 refutations are the six rows of this table. 4 of them are the Tier 1 kills fired (#1 TEST-09, #2 TEST-10, #4 the environment run, #5 TEST-25); #3 has no TEST number and #6 is a bet, not a test. 2 of those 4 discriminated between Synchronism and MOND (#1 and #2), and both selected the MOND class. "0 of 9" is a different thing: an audit of the site\'s former "Validated" badges, not a test count. "0 prospective predictions tested" means none of the six was predicted before its data existed; all six used data already published.';

/**
 * The count is rule-dependent (2026-10-18). Three simulated-visitor personas in one pass asked for the self-critical
 * number to meet the standard applied to claims. Every delta below is on file in PREDICTIONS.md (10-12, 10-13, 10-16
 * blocks, 09-29 for the γ=2 pin); the rule choice gates on the project lead. Do not change REFUTATIONS_EXECUTED here.
 * 2026-10-24: lower end 4 → 3. The 09-29 block already records that TEST-25's in-house empty intersection holds only
 * under point independence (galaxy-level ΔBIC ≤ 10 band 0.3–1.7 reaches Cassini-passing γ ≳ 1.5); the range omitted it
 * (graduate simulated-visitor persona). It moves with the γ = 2 pin under one convention, so the two are not independent.
 */
export const COUNT_RULE_SENTENCE =
  'The 6 is not rule-free. It is the count under the rule the site uses today (a stated failure condition, actually executed, fired as registered). Rules already on file move it: a 2σ significance rule drops TEST-09 (−1); with each galaxy counted once the γ = 2 pin sits at the threshold (−1 if "at the threshold" does not count), and under that same convention the in-house intersection of TEST-25 is no longer empty (γ ≈ 1.5–1.7 survives both; −1); the executed-and-excluded uniform growth reading meets the current rule but is not counted because no archive document asserted it (+1); a point-estimate rule adds TEST-04a, on a withdrawn mechanism (+1). So 3 to 8, depending on rules the project lead has not yet chosen, with at most 5 independent. Under every rule on file three rows stay: #2 (dwarf dark-matter fractions), #4 (the environment run) and #6 (Bell/CHSH, a construction check rather than data). Three move with the rule: #1, #3 and #5. In plain words, the count varies because some failures are close calls (does a result at the threshold count?) and some share a cause (count once or twice?). Routes that re-kill a branch already refuted (lunar laser ranging, the Oort limit at the published knee) are second roots for an existing row, not new rows.';

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
  '14,610 galaxies run (175 SPARC + 14,435 ALFALFA–SDSS after the quality cut); the mechanism itself was tested on the 175 resolved SPARC rotation curves — the registered Tully–Fisher environment test (TEST-03, on the 14,585-galaxy cross-match) was never run as registered';

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
    convention: 'Not convention-dependent in kind, unlike #1. At 1/Ω_m (cap 68.5%) 106/153 discs exceed; at the most permissive Ω_m/Ω_b = 6.39 (cap 84%) 28/153 still do at face value, and with distance, inclination and M/L propagated (explorer 2026-10-29) 3 stay above it at ≥ 3σ (NGC 2915, NGC 3741, UGC 06667; 6 at 2σ). ESO 444-G084 drops to 1.65σ under its inclination error. The condition is the gas census: gas × 2.0 removes NGC 3741 and × 3.1 removes NGC 2915; a uniform factor that large is disfavoured by the BTFR (c ≤ 1.25 at Υ* = 0.5), but gas hidden differently in each galaxy is not excluded. Lensing: as #1, also census-conditional.',
  },
  {
    n: 3,
    what: 'RAR transition shape at the framework\'s own γ = 2 (ΔBIC = +184 by point, ≈ +11 by galaxy)',
    ids: 'unnumbered (closed 2026-05-21)',
    root: 'The γ = 2 pin',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'SPARC radial acceleration relation (2,807 points)',
    convention: 'Effective-N. The +184 treats 2,807 points as independent; with the galaxy as the unit (measured N_eff ≈ 150, 2026-09-29) it is ΔBIC ≈ +11, 1.6σ with Υ, D, i frozen and 1.9–2.3σ with them refitted per galaxy under Li+2018 priors (explorer 2026-09-29): disfavoured at the threshold, not decisive. Refitting the nuisances does not narrow the galaxy-level interval. With γ free the fit lands on MOND\'s simple μ (a reparametrization, not a refutation).',
  },
  {
    n: 4,
    what: 'Environment: void galaxies do not sit high on the RAR (r² = 0.0001 vs a registered > 20%)',
    ids: 'TEST-03s (archive: S177 / TEST-08); the TEST-01 and TEST-05 cards point to this one run',
    root: 'A refuted registration (S177\'s > 20% amplitude, which C(ρ)\'s own lever never predicted)',
    whichC: 'C_ρ, density-keyed',
    data: 'SPARC + Cosmicflows-4 density field',
    convention: 'None.',
  },
  {
    n: 5,
    what: 'Cassini/SPARC squeeze: no γ fits galaxies and the Solar System together (published, marginalized: 8.7σ, Desmond, Hees & Famaey 2024; in-house at fixed Υ: +17.95σ)',
    ids: 'TEST-25',
    root: 'Inherited from MOND\'s slowly-transitioning interpolating functions under a modified-Poisson completion (Desmond, Hees & Famaey 2024; McGaugh\'s own RAR function fails the same instrument by +15.9 to +20.9σ). Not a refutation of MOND as a whole.',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'Cassini quadrupole bound + SPARC',
    convention: 'The published 8.7σ: none. The in-house empty intersection: yes. It treats the 2,807 points as independent; with the galaxy as the unit the SPARC-allowed γ band widens to 0.3–1.7 and γ ≈ 1.5–1.7 passes both, so it moves with #3.',
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
