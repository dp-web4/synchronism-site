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
 *     one inequality) and the γ = 2 pin (ΔBIC +184 at frozen Υ, +46 with Υ free per law);
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
  '6 executed refutations from 5 roots: 2 framework-specific (the boost ceiling, behind both TEST-09 and TEST-10; the γ=2 pin — RAR transition shape, unnumbered, closed 2026-05-21; about 2σ once galaxies are the unit and each law has its own Υ — 2026-11-09) + 1 refuted registration (environment amplitude) + 1 inherited from MOND (Cassini/SPARC) + 1 Bell/CHSH check (local arm = Bell\'s theorem; two nonlocal constructions null; the hidden-communication class works by Toner–Bacon\'s existence proof, at the cost of a preferred frame)';
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
 * under point independence (galaxy-level ΔBIC ≤ 10 band 0.3–1.7 reaches a γ ≳ 1.5 then thought to pass Cassini, withdrawn 2026-11-06); the range omitted it
 * (graduate simulated-visitor persona). It moves with the γ = 2 pin under one convention, so the two are not independent.
 * 2026-11-06: lower end back to 4. The Cassini pass at γ ≳ 1.5 (withdrawn) came from sparc_cassini_q2.py's preparatory scan, which
 * holds a₀ = 1.03e-10 fixed. Re-profiled from SPARC at each γ, with M/L pinned, Cassini fails at 14.5–19.3σ for γ 0.3–3
 * (maintainer/scripts/cassini_q2_at_sparc_profiled_a0_high_gamma.py), so TEST-25's intersection is empty at galaxy level too.
 */
export const COUNT_RULE_SENTENCE =
  'The 6 is not rule-free. It is the count under the rule the site uses today (a stated failure condition, actually executed, fired as registered). Rules already on file move it: a rule requiring the 0.3 threshold itself to be excluded at 2σ drops TEST-09 (−1; its margin is 0.95σ on a paired galaxy bootstrap); with each galaxy counted once the γ = 2 pin sits at the threshold (−1 if "at the threshold" does not count); TEST-25 does not move with it (until 2026-11-06 it was listed as −1 here, on a Cassini pass at γ ≈ 1.5–1.7 that came from a scan holding a₀ fixed; with a₀ taken from SPARC at each γ and M/L pinned, Cassini fails at 14.5–19.3σ for every γ from 0.3 to 3); the executed-and-excluded uniform growth reading meets the current rule but is not counted because no archive document asserted it (+1); a point-estimate rule adds TEST-04a, on a withdrawn mechanism (+1). So 4 to 8, depending on rules the project lead has not yet chosen, with at most 5 independent. Under every rule on file four rows stay: #2 (dwarf dark-matter fractions), #4 (the environment run), #5 (TEST-25, inherited from MOND) and #6 (Bell/CHSH, a construction check rather than data). Two move with the rule: #1 and #3. In plain words, the count varies because some failures are close calls (does a result at the threshold count?) and some share a cause (count once or twice?). Routes that re-kill a branch already refuted (lunar laser ranging, the Oort limit at the published knee) are second roots for an existing row, not new rows.';

/**
 * The 6 by kind (2026-11-05). A researcher simulated-visitor persona read the 6 as one undifferentiated count and asked
 * for it split by kind, with the weak-lensing exclusion visible. Descriptive only: do not change REFUTATIONS_EXECUTED.
 * Printing executed exclusions outside the count as a line beside it gates on the project lead (proposal 2026-11-04).
 */
export const COUNT_BY_KIND_SENTENCE =
  'By kind (criterion: a row refutes the framework\'s own content on data when the archive asserts the statement for this framework and the kill came from an external dataset, not a simulation): 3 rows refute content the framework itself asserts, on data (#1 TEST-09 and #2 TEST-10, the boost cap; #3 the γ = 2 pin, a choice among MOND\'s functions at about 2σ); 1 shares its root with MOND (#5 TEST-25: Cassini excludes McGaugh\'s own function too, though MOND\'s δ = 6 escapes near stellar-population M/L at about 1.8σ on SPARC, while the compander needs more than twice that M/L); 1 is a registration the equation could never have met (#4, the environment amplitude); 1 is a construction check, not data (#6 Bell/CHSH). The strongest independent dataset against the boost cap, galaxy weak lensing (KiDS-1000), excludes every Ω_m-based cap; it is recorded on rows #1–#2 rather than as a seventh row because it shares their root. Several executed exclusions of the archive\'s own equations sit outside the count because no failure condition was written before they ran (the covariant dark-energy completions, the density fit at the formula knee, the modified-G reading against lunar laser ranging); whether to print them beside the count is the project lead\'s call.';

/**
 * The lensing leg's two conditions, one sentence (2026-11-10). A researcher simulated-visitor persona pointed out that
 * /for-researchers says "no light-deflection rule exists" while TEST-10's card and the ledger note use the KiDS lensing RAR
 * as the "independent leg" that settles the ceiling convention. Reading a lensing g_obs as a dynamical boost assumes light
 * follows the same effective potential as stars (true by construction in AeST/TeVeS; undefined here). The ×5 is the site's own
 * allowance (09-25), not Brouwer et al.'s: their fiducial g_bar is stars + cold gas only (Sec. 1 footnote 3, read verbatim
 * 2026-11-10), so hot gas is not double-counted, but their own footnote allows up to about ×10 at the outer edge, at which
 * the most permissive cap would pass at 1e-14. Rendered wherever the leg is used to settle anything.
 */
export const LENSING_LEG_ASSUMPTION =
  'Two conditions travel with the lensing leg. (1) It assumes light follows the same effective potential that moves stars, as it does by construction in AeST and TeVeS; this framework has no light-deflection rule (see For Researchers), so the leg is a statement about completions that have one. (2) The "×5 on the baryons" is this site\'s own allowance for every cosmic baryon inside the lensing radius, not a number from Brouwer et al. 2021, whose fiducial g_bar "only takes into account the stellar and cold gas mass" (their footnote 3); their own footnote allows hot gas, dust and missing baryons to raise g_bar by up to about an order of magnitude at the outer edge, and at ×10 the most permissive cap (6.39) passes at 10⁻¹⁴ and fails only at 10⁻¹⁵, where the isolation criterion is least reliable. So the leg settles the TEST-09 convention question only under (1), and the census condition recorded on 2026-10-04 is the paper\'s own.';

/**
 * What "refutes the framework's own content on outside data" means, defined once (2026-11-10). A technical-writer persona
 * counted fifteen count sentences and found "only row #2", "3 rows" and "only TEST-10" answering the same question with
 * three unnamed criteria. They are consistent once the criterion and its scope are printed.
 */
export const FRAMEWORK_CONTENT_CRITERION =
  'A row "refutes the framework\'s own content on outside data" when both hold: (a) the statement killed is one the archive asserts for this framework (not a registered amplitude its own equation cannot produce, as in #4, and not a function it shares with MOND, as in #5), and (b) the kill came from an external dataset the framework did not fit, not from a simulation (which excludes #6). Of all six, three meet it (#1 TEST-09, #2 TEST-10, #3 the γ = 2 pin). Of the four that survive every counting rule on file (#2, #4, #5, #6), only #2 does.';

/**
 * One statement of TEST-25, rendered on every page that gives its status (2026-11-08). A graduate persona found three different
 * statements on three pages; a researcher persona found 8.7σ quoted without the published range. Explorer 2026-11-07 supplied
 * the Υ-free column (scripts/cassini_both_families_upsilon_free.py, PREREG 10d0bdf). Do not quote "stays above 10σ with Υ free":
 * that held by 0.03σ at one prior width. The robust statement is the Υ_d each family needs in order to pass.
 */
/**
 * The EFE-free corner, one status (2026-11-09). A researcher persona found it alive in some sentences of Tier 1 and dead in others,
 * and absent from /for-researchers' DR4 row. Every page that discusses it renders this.
 */
export const GAMMA2_OWN_UPSILON_SENTENCE =
  'Both numbers hold Υ_disk = 0.5 for both laws. With one global Υ per law (γ = 2 best at 0.61, McGaugh at 0.54; same parameter count), ΔBIC is +46 by point (galaxy-block bootstrap 95%: −26 to +132) and +2.7 by galaxy. A noise-free twin puts a McGaugh world at +44 and a γ = 2 world at −43, so the data sit about 2σ from a γ = 2 world, in line with the 1.9–2.3σ from per-galaxy nuisances. Read this row as disfavoured at about 2σ. (maintainer/scripts/gamma2_global_upsilon_per_law.py, PREREG 5a95614; twin post-hoc.)';

/** Every γ is a MOND μ (2026-11-09, graduate persona; checked by hand). */
export const EVERY_GAMMA_IS_A_MU_SENTENCE =
  'Every γ is a MOND interpolating function: C ≈ γx in the deep regime, so the compander has the right limits with a₀ = a₀′/γ, and γ only picks the transition shape and the return exponent q = 2γ. So γ = 2 against McGaugh selects among MOND\'s functions. It does not test a rival to MOND.';

export const EFE_FREE_CORNER_STATUS =
  'The EFE-free corner, one status (2026-11-09): alive, disfavoured, not novel. It is the acceleration-keyed compander at γ ≈ 0.87–0.95, read algebraically with no external field effect. Cassini\'s quadrupole test does not reach it, because Q₂ is the external field\'s effect; the direct perihelion tail sets its floor of γ ≳ 0.87. It costs about 1.2σ on SPARC at galaxy level and about 3σ on globular clusters (Δχ² = +54 ± 19 against Newton, conditional on the mass model). It has no field equation: it is an algebraic fit, and a modified-inertia reading would have to be non-local in time. It differs from MOND with its external field only the way MOND without one does, so keeping or losing it cannot move Bucket 0. Gaia DR4 can kill it: its boost keeps rising as the internal acceleration falls (estimate: 1.49 at 1.0×10⁻¹⁰ m/s², 2.70 at 0.2×10⁻¹⁰), where external-field-dominated MOND levels off. Not yet run against binned wide-binary data.';

export const TEST25_STATUS_SENTENCE =
  'TEST-25 status (2026-11-08). Published, for MOND\'s own slowly-transitioning functions: 1.9–15σ depending on mass model and sample (Desmond, Hees & Famaey 2024: 8.7σ fiducial, 1.9σ with M/L freedom and bulge galaxies removed; Park et al. 2026: 3–15σ). In-house, for this compander with a₀ refit to SPARC: 14.5–19.3σ for every γ from 0.3 to 3 with M/L pinned at Υ = 0.5/0.7 (13–18σ without bulges; the γ = 0.3 row is solver-limited to about ±6σ). Those σ values track the M/L prior (at γ = 3, about 10σ with Υ free per galaxy at 0.1 dex and about 7σ at 0.2 dex), so the number that travels is the M/L each family needs in order to pass. MOND\'s sharpest member tested (δ = 6, no bulges) passes at Υ_d ≈ 0.54, near stellar-population values, at about 1.8σ on SPARC. The compander needs Υ_d ≈ 1.2–1.4, more than twice that, which makes 36–42% of discs over-maximal and costs 2.9σ on SPARC at γ = 3; at γ ≤ 1 it does not pass for any Υ_d up to 1.5, and neither does McGaugh\'s RAR function. So the root is shared with MOND at δ = 1 / γ ≈ ½, and the family-wide failure is the compander\'s own. Earlier "2σ edge" and "narrow, not empty" statements compared against a Cassini pass that held a₀ fixed; both were superseded on 2026-11-06.';

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
    convention: 'Not convention-dependent in kind, unlike #1. At 1/Ω_m (cap 68.5%) 106/153 discs exceed; at the most permissive Ω_m/Ω_b = 6.39 (cap 84%) 28/153 still do at face value, and with distance, inclination and M/L propagated (explorer 2026-10-29) 3 stay above it at ≥ 3σ (NGC 2915, NGC 3741, UGC 06667; 6 at 2σ). UGC 06667\'s excess sits in inner points where SPARC lists no gas; on the outer half of each curve 2 stay at ≥ 3σ, and none clears a trials correction for 153 discs (2026-11-08). As a bound: caps up to B_max ≈ 7.5 are excluded at 3σ for one disc, up to ≈ 5.7 after that correction; the 13.7 is a sample maximum, not a bound. ESO 444-G084 drops to 1.65σ under its inclination error. The condition is the gas census: gas × 2.0 removes NGC 3741 and × 3.1 removes NGC 2915; a uniform factor that large is disfavoured by the BTFR (c ≤ 1.25 at Υ* = 0.5), but gas hidden differently in each galaxy is not excluded. Lensing: as #1, also census-conditional.',
  },
  {
    n: 3,
    what: 'RAR transition shape at the framework\'s own γ = 2 (ΔBIC = +184 by point, ≈ +11 by galaxy, both at Υ = 0.5; +46 and +2.7 with each law\'s own global Υ)',
    ids: 'unnumbered (closed 2026-05-21)',
    root: 'The γ = 2 pin',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'SPARC radial acceleration relation (2,807 points)',
    convention: 'Effective-N. The +184 treats 2,807 points as independent; with the galaxy as the unit (measured N_eff ≈ 150, 2026-09-29) it is ΔBIC ≈ +11, 1.6σ with Υ, D, i frozen and 1.9–2.3σ with them refitted per galaxy under Li+2018 priors (explorer 2026-09-29): disfavoured at the threshold, not decisive. Refitting the nuisances does not narrow the galaxy-level interval. Both numbers hold Υ_disk = 0.5 for both laws. With one global Υ per law (γ = 2 best at 0.61, McGaugh at 0.54; same parameter count), ΔBIC is +46 by point (galaxy-block bootstrap 95%: −26 to +132) and +2.7 by galaxy. A noise-free twin puts a McGaugh world at +44 and a γ = 2 world at −43, so the data sit about 2σ from a γ = 2 world, in line with the 1.9–2.3σ from per-galaxy nuisances. Read this row as disfavoured at about 2σ. Every γ is itself a MOND μ, so this row selects among MOND\'s functions. With γ free at Υ = 0.5 the fit lands on MOND\'s simple μ (a reparametrization, not a refutation).',
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
    what: 'Cassini/SPARC squeeze: no γ fits galaxies and the Solar System together (published for MOND\'s functions: 1.9–15σ by mass model, 8.7σ fiducial; in-house compander at the SPARC fit with M/L pinned: +17.95σ)',
    ids: 'TEST-25',
    root: 'Shared with MOND\'s slowly-transitioning interpolating functions under a modified-Poisson completion (Desmond, Hees & Famaey 2024; McGaugh\'s own RAR function fails the same instrument by +15.9 to +20.9σ). Not symmetric: MOND\'s δ = 6 escapes near stellar-population M/L at about 1.8σ on SPARC; the compander\'s only route needs Υ_d ≈ 1.2–1.4. Not a refutation of MOND as a whole.',
    whichC: 'C_g, keyed on observed acceleration',
    data: 'Cassini quadrupole bound + SPARC',
    convention: 'None, for the published range or the in-house intersection (2026-11-06). With the galaxy as the unit the SPARC-allowed γ band widens to 0.3–1.7, but with a₀ taken from SPARC at each γ and M/L pinned, Cassini fails at 14.5–19.3σ for every γ from 0.3 to 3, so the intersection stays empty. Until 2026-11-06 this row said γ ≈ 1.5–1.7 passes both; that pass came from a scan that held a₀ fixed at 1.03×10⁻¹⁰.',
  },
  {
    n: 6,
    what: 'Bell/CHSH: the no-signaling substrate constructions stay at S ≤ 2 (quantum needs 2√2; the one arm above 2, up to 2.67, signals)',
    ids: 'Bet B1 (not a TEST ID)',
    root: 'Bell\'s theorem (local arm); two nonlocal constructions null',
    whichC: 'none (no C function involved)',
    data: 'Construction check, not external data',
    convention: 'None.',
  },
];
