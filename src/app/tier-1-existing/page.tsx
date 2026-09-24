'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import TermTooltip from '@/components/TermTooltip';
import { ROOTS_SENTENCE } from '@/lib/ledger';

type Test = {
  id: string;
  name: string;
  data: string;
  cost: string;
  time: string;
  prediction: string;
  kill: string;
  preregistration?: string;
  alert?: string;
  derivationHref?: string;
  /** One run, one primary card (2026-09-14): the 2026-07-14 environment run's Failed verdict is filed on
   * TEST-03 (as TEST-03s, matching /honest-assessment); cards killed by the same run point there. */
  sameRun?: { role: 'primary' | 'secondary'; text: string };
  /** One kill-statistic convention (2026-09-15, visitor researcher persona): every executed card that
   * quotes a σ states the same three numbers, in this order, so "3.3σ" (prediction vs data) is never
   * read as the margin by which the registered criterion was met. */
  scorecard?: { separation: string; criterion: string; power: string };
  /** Dated correction meta-commentary, kept verbatim, rendered in a collapsed block after the state text. */
  revisionNotes?: string[];
};

const tests: Test[] = [
  {
    id: 'TEST-01',
    name: 'SPARC Environment Dependence — Killed by the 2026-07-14 Environment Run (Filed Once, on TEST-03s)',
    data: 'SPARC (175 galaxies; 141 with Cosmicflows-4 environment in the executed run)',
    cost: '$0',
    time: 'EXECUTED (2026-07-14)',
    prediction: 'Rotation curve residuals correlate with local galaxy density',
    kill: 'No correlation between residuals and environment at 2σ — met by the 2026-07-14 run (per-galaxy SPARC RAR offsets vs Cosmicflows-4 density: r² = 0.0001, p = 0.89, N = 141)',
    sameRun: {
      role: 'secondary',
      text: 'That run is this card\'s SPARC phase, so the SPARC phase is not open. TEST-05 carries the lever-magnitude adjudication of the same run.',
    },
    alert: 'Scope note (corrected 2026-09-14): TEST-01, TEST-03s and TEST-05 all test one prediction, environment-dependent RAR, and all three were answered by one SPARC run. Read them as one test, not three. The large-sample phase has never been run: the registered TEST-03 on ALFALFA-SDSS (14,585 galaxies classified cluster/field/void). (See revision notes.)',
    revisionNotes: [
      'Until 2026-09-14 this card read as an open $0 / 6-week proposal.',
      'The scope note previously assigned the ALFALFA-SDSS sample to TEST-05, whose data line is SPARC.',
    ],
  },
  {
    id: 'TEST-02',
    name: 'Wide Binary Density Dependence',
    data: 'Gaia DR3',
    cost: '$0',
    time: '6 months',
    prediction: 'Wide binary anomaly depends on local stellar density: systems in LOWER-density environments should show STRONGER coherence-driven deviation from Newtonian dynamics. Mechanism: g_eff = g_N/C(ρ); lower ρ → smaller C → larger boost above Newtonian. [Sign corrected 2026-06-06; see revision notes.]',
    kill: 'REWRITTEN 2026-06-12 (see revision notes): a Gaia-confirmed MOND-scale wide-binary anomaly (~18% velocity deviation; Chae-type ~1.4× boost at low internal acceleration) in the clean sample REFUTES C(ρ), which predicts a Newtonian null (0.05–0.4%). A confirmed Newtonian null is consistent with C(ρ) but equally consistent with GR — survival without points, non-discriminating. | WHICH MODEL MAKES THE 0.05–0.4% (added 2026-09-06, visitor researcher persona): the DENSITY-keyed branch C(ρ/ρ_crit), but only at a knee between 3.8×10⁻⁵ and 3.2×10⁻⁴ M☉/pc³ (γ = 0.489), a window no other page uses. At the published knee ρ_crit = 0.029·V² the solar-neighbourhood density sits far below the knee, so C ≈ γx ≪ 1 and, with g_eff = g_N/C, the boost is maximal: about 3.5×10⁴ in g, excluded by the Oort limit (arithmetic in the 2026-09-10 note under the alert). That is the same branch SPARC refutes head-to-head (ΔBIC +2843, archive 2026-08-24). The ACCELERATION-keyed branch that fits SPARC is μ_simple(x/2) at γ = ½ and predicts MOND\'s wide-binary boost, EFE included — on that branch TEST-02 was never a discriminator. And "MOND ~18%" is the EFE-INCLUDED figure (corrected 2026-09-24; until then this line called it EFE-free): with the Milky Way external field (~1.8 a₀), AQUAL/QUMOND + EFE give a 1.0–1.4× boost in g depending on treatment, i.e. up to ~18% in velocity (√1.4 ≈ 1.18), which is the entire Chae (2023–25) vs Banik et al. (2024) dispute. Without the EFE the boost would be several times larger. State the range, not the point.',
    alert: 'DENSITY BRANCH EXCLUDED BY A RATE, NOT THE AMPLITUDE (explorer 2026-09-23; pre-registered at site commit 80b8c9c before the script): the "practically untestable" below is true only of the static 0.05–0.4% amplitude. A boost shared by everything in one neighbourhood cancels in a same-instant ratio, but not in time: the Sun moves through the disc and past nearby stars, so G_eff = G/C(ρ) drifts today. At density smoothing ℓ = 1–10 pc (what the galaxy fits need), the density-keyed knee grid predicts Ġ/G ≈ 10⁻⁸ to 10⁻⁵ per year, and these very 0.05–0.4% windows 7×10⁻⁹ to 6×10⁻⁸, against lunar laser ranging\'s (7.1 ± 7.6)×10⁻¹⁴ (Hofmann & Müller 2018). 68 of 74 laws are excluded, all 8 of this card\'s windows among them. The survivors are Newtonian to 10⁻⁸ at the Sun. This is a second, SPARC-independent root for the existing density-keyed kill (ΔBIC +2843), not a seventh refutation; whether it becomes a ledger row is dp\'s call. It does not touch the acceleration-keyed branch. Finding: explorer/findings/density-keyed-C-is-a-moving-G-lunar-laser-ranging-excludes-it-at-pc-smoothing.md. | KILL BRANCH ADJUDICABLE NOW (2026-06-12): the refutation branch does not wait on future Gaia data — it waits on the published Gaia DR3 adjudication already in the literature: Chae (2023–2025) claims a MOND-like ~1.4× boost at low internal accelerations; Banik et al. (2024) claims Newtonian behavior excludes that boost at high significance, from the same data with different cuts. If the Chae side prevails, C(ρ) is refuted with existing data; if Banik holds, C(ρ) survives degenerately with Newton. Adjudication queued to the explorer track (proposal: test02_kill_branch_adjudicable_now.md). | SELF-ELIMINATING-OR-TIE (2026-06-07): This test has no outcome that favors Synchronism. If Gaia confirms the null (Banik 2024 / Pittordis & Sutherland 2023): that confirms Newton — Synchronism merely reproduces Newton here. If Gaia confirms ~18% anomaly (Chae 2023): that confirms MOND and refutes Synchronism-C(ρ) — Newton and Synchronism are refuted together. No measurement selects Synchronism over the standard alternatives. Additionally, 0.05–0.4% (C(ρ) prediction) is below current Gaia DR3 wide-binary systematics — practically untestable, not just difficult. | SIGN CORRECTION (2026-06-06; see revision notes): The correct direction is lower density → stronger deviation (g_eff = g_N/C(ρ) gives low ρ → low C → larger boost). Both MOND+EFE and C(ρ) agree on this direction — direction is not a discriminator. The amplitude IS structurally distinct: C(ρ)-density form predicts ~0.05–0.4% velocity deviation (Newtonian null level) vs MOND ~18%; Gaia DR3 reach is ~80× insufficient. Substrate contingency: the anomaly\'s existence is actively disputed (Chae 2023 detects it; Banik 2024, Pittordis & Sutherland 2023, Saurabh 2024 do not). This is the third C(a)→C(ρ) fork: C(a) predicts the anomaly but is MOND-degenerate (refuted by SPARC RAR at ΔBIC=+184); C(ρ) is structurally distinct but predicts the Newtonian null. | DATA MILESTONE (2026-07-03): Gaia DR4 (~late 2026) will reset the wide-binary systematics floor and re-open the Chae/Banik adjudication on better data — the next scheduled event that could move this test. Clarifier: "adjudicable now" and "practically untestable" refer to different branches — the REFUTATION branch (Chae-type boost confirmed → C(ρ) dead) is adjudicable from published DR3 literature today; the CONFIRMATION branch (measuring the predicted 0.05–0.4% null as distinct from zero) is below systematics reach regardless.  | AMPLITUDE IS KNEE-CONDITIONAL, AND THE QUOTED BAND COMES FROM A KNEE NOTHING ELSE ON THIS SITE USES (maintainer 2026-09-10, arithmetic shown): the 0.05-0.4% figure that generates the \'~80x below Gaia reach / practically untestable\' verdict is not a property of the coupling g_eff = g_N/C(rho) - it is a property of an unstated rho_crit. At the local disc density rho = 0.09 M_sun/pc^3, C = tanh(gamma ln(rho/rho_crit + 1)) gives a velocity excess of: +1.8x10^4 % at the framework\'s PUBLISHED calibration rho_crit = 0.029*V_flat^2 (= 1.52x10^3 M_sun/pc^3 for the Milky Way at V_flat = 229 km/s, gamma = 0.489); +116% at the measured velocity-blind knee 0.161; +9.4% at Refracted Gravity\'s 0.0083; +0.005% at that same 0.0083 with gamma = 2. The band that reproduces 0.05-0.4% requires rho_crit in [3.8x10^-5, 3.2x10^-4] M_sun/pc^3 at gamma = 0.489, or [0.016, 0.030] at gamma = 2 - windows DISJOINT from every knee the galaxy sector uses, seven orders below the published calibration. (The gamma = 0.489 window\'s upper edge, 3.2x10^-4, is exactly the bottom edge of the rho_c grid the research ledger records as killed on SPARC by placement.) So at the framework\'s own published calibration the solar-neighbourhood prediction is a factor ~3.5x10^4 boost in g, excluded by the Oort limit and Solar-System ephemerides by orders of magnitude. This is NOT a new refutation and the count stays at 6: it is the same statement /key-claims already publishes as \'rotation curves under this reading do not fail to flatten - they blow up\' and as the AQUAL-1984 vacuum-singularity attribution, evaluated at a radius where rho is well measured and not small, so the vacuum limit is not needed to reach it. What it changes is the reading of THIS card: \'practically untestable\' is true only at a knee the rest of the framework excludes. Whether the density branch now converts from non-discriminating to executed-and-locally-excluded is a ledger question and GATES ON DP - proposal test02_amplitude_is_knee_conditional_and_a2acw_positive_control_20260910.md (maintainer recommends scoping TEST-02 into 02rho / 02a with the count unchanged, explicitly NOT a seventh refutation, because over-refutation is this program\'s live failure mode). Script: maintainer/scripts/test02_amplitude_is_knee_conditional.py (+ _output.txt).',
    revisionNotes: [
      'Prediction line until 2026-06-06: "higher-density → stronger deviation". That was backwards; the prediction direction was reversed on this page from 2026-05-05 to 2026-06-06.',
      'Kill criterion rewritten 2026-06-12: the previous criterion predated the C(a)→C(ρ) fork and was inverted — it would have killed the framework for its own prediction coming true.',
      'The kill line\'s "which model makes the 0.05–0.4%" note used to say the knee "sits above any stellar-neighbourhood density, so C = γx and the boost never turns on". With g_eff = g_N/C, C ≈ γx ≪ 1 is the maximal boost, not zero. Caught by a researcher visitor persona, 2026-09-17.',
    ],
  },
  {
    id: 'TEST-03',
    name: 'ALFALFA-SDSS TFR Scatter — Registered Test Never Run; Substitute TEST-03s FAILED (the One Environment Run)',
    data: 'ALFALFA + SDSS (14,585 galaxies)',
    cost: '$0',
    time: '3 months',
    prediction: 'TFR residual captures all intrinsic scatter (51% improvement)',
    kill: 'TFR residual explains <20% of scatter',
    sameRun: {
      role: 'primary',
      text: 'the substitute TEST-03s, 141 SPARC galaxies against Cosmicflows-4 density, gave r² = 0.0001 (p = 0.89) against Session 177\'s kill bar r² < 0.09. This is the one card that carries that verdict, matching Honest Assessment\'s ledger row. TEST-01 and TEST-05 were killed by the same run and point here, so count one failure, not three. The registered ALFALFA-SDSS TEST-03 is still never run.',
    },
    alert: 'NEVER RUN AS REGISTERED — metric conflation (corrected 2026-07-09; see revision notes). The R² = 0.14 figure previously shown here as TEST-03\'s result is not a valid measurement of the N = 14,585 ALFALFA-SDSS sample: at N = 14,585, R² = 0.14 implies t ≈ 48.7 (p of order 10⁻⁵⁰⁰), not the p = 5×10⁻⁶ quoted alongside it. The (R², p) pair is self-consistent only at N ≈ 130–175 — SPARC scale, i.e. the sample used by TEST-05, not TEST-03. Tracing the number further (archive S377/S381/S591): 0.14 is a Hubble-type/morphology term on N ≈ 171, not a measurement of environmental density on the 14,585-galaxy ALFALFA-SDSS cross-match; the registered environment-density correlation (classify by cluster/field/void, apply the <20% bar) was never executed. The 51% TFR-residual/BTFR prediction above (Session 593, N = 14,437) is a separate, already-passing result, not the 14% figure (conflation corrected 2026-07-09; see revision notes). Honest status update (2026-07-15): the registered environment-density test HAS NOW BEEN RUN (research repo, 2026-07-14, on SPARC RAR offsets vs Cosmicflows-4 densities): r² = 0.0001 — no environment dependence at the registered amplitude; the framework\'s environment prediction is refuted by execution, not by the old conflated statistic. See TEST-05 for the lever-magnitude adjudication. PROTOCOL DEVIATION, NOW DECLARED (2026-07-27, flagged independently by two expert visitor passes): the executed run is NOT the registered test. The registered test was N = 14,585 ALFALFA-SDSS galaxies classified by cluster/field/void. What ran on 2026-07-14 was N = 141 SPARC galaxies against Cosmicflows-4 ambient density — a different dataset, a different density proxy, and a ~100× smaller sample. That substitution may well be the better measurement (Cosmicflows-4 gives a continuous distance-corrected density rather than a three-way classification), but on a program whose distinguishing methodological claim is pre-registration, swapping the sample and keeping the kill is exactly the move pre-registration exists to prevent. The substitute is therefore designated TEST-03s and adjudicated on its own terms; the registered TEST-03 remains NEVER RUN and is still runnable on ALFALFA-SDSS. The headline refutation census reads more honestly as 3 registered kills + 1 substituted-protocol kill. Both readings are shown rather than one being quietly chosen. RECONCILIATION (2026-09-11; see revision notes): Honest Assessment\'s "run as registered" and this card\'s "never run" are both true, of different registrations. The 2026-07-14 run IS run-as-registered against the Session 177 RAR-environment claim (environment explains >20% of RAR scatter; kill bar r² < 0.09), and is a substitute (TEST-03s) against this card\'s ALFALFA TEST-03. The claim and the kill bar bracket an undecided band, 0.09 ≤ r² < 0.20, where neither verdict fires; the old R² = 0.138 would sit inside it, and the measured 0.0001 is below both. The research ledger files this run as "TEST-08"; on this site TEST-08 is the Freeman-law card. That ID collision is routed to the operator; this card keeps TEST-03s.',
    revisionNotes: [
      'The 2026-07-09 correction closed a "presumptively failed" note on this card, after independent citation-walks by the explorer track 2026-07-08 and two visitor personas 2026-07-09 converged on the same five errors.',
      'From 2026-04 until 2026-07-09 this card conflated the passing 51% TFR-residual/BTFR result with the failing 14% figure.',
      'Until the 2026-07-27 protocol-deviation declaration this card carried both statuses (registered test never run; substitute run executed) in one entry without saying which applied to what.',
      'The 2026-09-11 reconciliation was prompted by a visitor graduate-physics persona who found Honest Assessment saying "run as registered" and this card saying "never run".',
    ],
  },
  {
    id: 'TEST-04',
    name: 'BAO Coherence Modulation — WITHDRAWN',
    data: 'DESI, SDSS DR17, Euclid',
    cost: '$0',
    time: 'N/A',
    prediction: '[Withdrawn] BAO peak shifts ~10⁻⁴ between high/low-density regions',
    kill: '[Withdrawn] BAO identical everywhere to 10⁻⁵ precision',
    derivationHref: '/bao-coherence-modulation',
    alert: 'WITHDRAWN (2026-05-04) — Three converging failures: (1) The framework\'s own Session 107 (Dec 2025) explicitly forecasts BAO matches ΛCDM at 0.0% in all five DESI redshift bins — the sound horizon is set at z~1100 when C ≈ 1 everywhere, so no modification is possible. (2) The 10⁻⁴ number has no session-level derivation; it appeared only in compilation documents that drifted from the underlying sessions. (3) Standard nonlinear physics already produces ~6×10⁻² environment-dependent BAO shifts (600× larger); the kill criterion of 10⁻⁵ is 3000× below DESI Y3 precision. See /bao-coherence-modulation for full documentation. Replacement: TEST-04a (DESI RSD fσ8 suppression) — the test Session 107 actually predicts.',
  },
  {
    id: 'TEST-04a',
    name: 'DESI RSD fσ₈ — FAILED: Disfavored 2.4σ on σ₈ (a GR-Conditioned Statistic); ~1.5σ on the Registered fσ₈(z=0.51); Underpowered as Registered; Post-hoc, Not Counted as a Refutation (Corrected 2026-07-14)',
    data: 'DESI DR1 (arXiv:2411.12021, Table 9 & 10)',
    cost: '$0',
    time: 'ADJUDICATED (2026-05-05)',
    prediction: 'fσ₈(z=0.51) ≈ 0.418 — a ~12% suppression below ΛCDM (0.474). Mechanism: G_local/G_global = C_cosmic/C_galactic suppresses structure growth at late times. Session 107 forecasts 1.7σ–3.2σ discrimination per DESI LRG bin. [Provenance, added 2026-09-14: the 0.418 comes from Session 107\'s G_local/G_global = C_cosmic/C_galactic growth suppression, with σ₈(z=0) = 0.76 calibrated to S₈ in Session 102. The background-only dark-energy sector now on /dark-energy does not produce it. That sector\'s own growth forecast is ≈ −0.22% (0.10σ, ΛCDM-like), so this card tests a mechanism the current framework no longer contains.]',
    kill: 'fσ₈(z=0.51) > 0.46 (rules out Synchronism at >3σ); fσ₈(z=0.51) > 0.45 disfavors at >2σ',
    preregistration: 'Post-hoc retrodiction — σ₈ calibrated to lensing S₈ tension in Session 102; propagated to DESI fσ₈ in Session 107 (committed 2025-12-10); DESI DR1 published April 2024. Status: disfavored 2.4σ on σ₈ (a different, GR-conditioned statistic). On the REGISTERED fσ₈ statistic the prediction sits 2.1σ from the data and the data clear the 0.46 threshold by ~1.5σ, against the >3σ the kill criterion demands, so the threshold is crossed on the point estimate but not at the registered significance (see the three numbers above).',
    alert: 'Current verdict: FAILED — disfavored 2.4σ on σ₈ AMPLITUDE (a GR-conditioned statistic); ~1.5σ on the registered fσ₈(z=0.51); UNDERPOWERED AS REGISTERED; post-hoc retrodiction either way; not counted as a refutation. The adopted DR2 kill (branch B) fires with under 1% probability if ΛCDM is true (2026-09-21, below). LRG1 fσ₈ = (fσ₈)_fid × 1.16 ± 0.13 = 0.474 × 1.16 ± 0.062 = 0.550 ± 0.062; the three numbers above are computed from this. The "Kill Criterion Triggered" claim of the 2026-07-02 reframe (revision notes) was delivered on σ₈ = 0.841 ± 0.034, a DIFFERENT statistic inferred from a full-shape fit that assumes GR growth kernels — using a GR-conditioned amplitude to falsify a modified-growth model risks circularity (the EFTofLSS citation below already half-concedes a 1-2σ theory systematic on this exact number). DESI\'s own purpose-built modified-gravity analysis — Ishak et al., arXiv:2411.12026 (JCAP 09 (2025) 053) — gives μ0 = 0.11 (+0.45/-0.54) from DESI alone, tightening to 0.05 ± 0.22 with CMB+SN; a ~12% fσ₈ suppression maps to a μ0 inside DESI-alone\'s 1σ band (exact mapping not yet run — seeded as explorer topic). Honest reading: the test as registered lacked the power to discriminate this framework from GR. This does not rescue the framework\'s cosmology sector (the growth suppression was calibrated, never derived: Appendix D §D.3 states effective Einstein equations G_μν = 8πG T_μν/C(ρ), committed 2025-12-01, which are cosmology-capable and have simply never been solved for the growth history; the gap is an unrun calculation, not a missing object. The σ₈≈0.76 vs 0.841 gap remains a real 2.4σ miss on that GR-conditioned parameter) — it corrects which statistic carries the kill and how confidently. DESI DR1 full-shape (arXiv:2411.12021) combined σ₈ = 0.841 ± 0.034 (Table 10) vs Synchronism\'s predicted σ₈ ≈ 0.76: the predicted suppression is absent; data ΛCDM-consistent. The load-bearing statistic is the ensemble amplitude, NOT direction: the LRG1 (z=0.51) fσ₈/(fσ₈)_fid = 1.16 ± 0.13 "enhancement" is a single ~1.2σ bin the DESI collaboration does not treat as robust, and the DR1 ensemble growth index γ_growth ≈ 0.58 ± 0.11 (above GR\'s 0.545) leans mildly toward suppression — the framework\'s own predicted direction. A "wrong direction" framing would be fragile against DR2; the amplitude framing is the defensible one. DR2 full-shape growth constraints remain unpublished (~Spring 2027). PROSPECTIVE REGISTRATION ADOPTED (dp, 2026-07-17 — the program\'s first genuinely prospective test; the pre-registration audit had found 0/10): all three DR2 outcomes are pre-committed IN WRITING before publication, adjudicated within 7 days, on the REGISTERED statistic (DR2 full-shape fσ₈ at z≈0.51, not σ₈): (A) fσ₈ ≤ 0.46 → registered criterion met by suppression direction, but the prediction remains post-hoc — confirmed-count stays 0; (B) fσ₈ > 0.46 at ≥3σ → the kill fires as registered, at registered power — the clean prospective refutation DR1 could not deliver; (C) between → "underpowered to discriminate" survives its own test and the row retires. No branch can be chosen after the data. (Research repo: PREDICTIONS.md, Bucket 1 registration block. This supersedes the narrower 2026-06-12 re-open policy below.) BRANCH B AS ADOPTED CANNOT FIRE UNLESS ΛCDM ALSO FAILS (maintainer 2026-09-21, from a visitor researcher persona; arithmetic in maintainer/scripts/test04a_dr2_branch_power.py): 0.46 is already the prediction plus 3σ of a forecast error (0.418 + 3 × 0.014), and branch B then asks for another 3σ at the measured error, i.e. obs > 0.46 + 3σ_DR2 ≈ 0.55–0.57, which puts ΛCDM (0.474) itself ~2.5σ low. If ΛCDM is true, branch B fires with under 1% probability at any σ_DR2 between 0.025 and 0.045, while branch A (≤ 0.46, the framework-friendly wording) fires 29–38% of the time. The clean reading, (obs − 0.418)/σ > 3, would fire 4–22% of the time; a single bin needs σ ≈ 0.015 to separate 0.418 from 0.474 with real power, so Session 107\'s own five-bin table is the statistic worth co-registering. The source forecast σ at this bin is 0.018, not 0.014. DR2 galaxy full-shape is still unpublished, so re-registering is still prospective. Changing a dp-adopted registration GATES ON DP (proposal test04a_dr2_branch_b_cannot_fire_reregister_before_data_20260921.md). Until it changes, read branch C as the near-certain outcome, and do not read branch A as support. CONTEXT (2026-05-23): EFTofLSS analyses (Cabass, Simonović, Zaldarriaga et al. 2024-2025) explain DESI DR1 fσ₈ within ΛCDM at 1-2σ. CURRENCY (2026-06-11): this verdict is frozen at DR1 — DR2 growth has not been re-run against the kill criterion. FRAMING: predicting σ₈ ≈ 0.76 in late 2025 was a bet that the S8 lensing tension (KiDS/DES) was physical; KiDS-Legacy and DESI full-shape have since moved against that camp. The failure is a documented bet on a tension that dissolved — which is what makes the mechanism-class reading (any coherence-damped growth-suppression framework sits in the same disfavored box) a statement about a real corner of the literature, not just this framework.',
    scorecard: {
      separation: 'Predicted fσ₈(z=0.51) = 0.418 sits 2.1σ below LRG1 (0.550 ± 0.062). ΛCDM\'s 0.474 sits 1.2σ from the same point, so Δχ² ≈ 3.1 in ΛCDM\'s favour, one bin.',
      criterion: 'fσ₈ > 0.46 "rules out at >3σ": the point estimate crosses 0.46 (met literally), but only by 1.5σ, so the >3σ it was registered to deliver is not met. The weaker "> 0.45 disfavors at >2σ" clause is met: the prediction sits 2.1σ from the data.',
      power: 'Placing the 0.46 threshold at 3σ from 0.418 presumes σ ≈ (0.46 − 0.418)/3 = 0.014. DESI DR1 delivers σ = 0.062, 4.4× larger. This shortfall is why the verdict is underpowered, not failed.',
    },
    revisionNotes: [
      'Pre-registration status line until 2026-09-15 read: Status (corrected 2026-07-14): disfavored 2.4σ on σ₈ (a different, GR-conditioned statistic); on the REGISTERED fσ₈ statistic the disfavor is only ~1.5σ against the >3σ the kill criterion demands — the criterion was not met as registered. (Changed because "disfavor is only ~1.5σ" named the margin over the 0.46 threshold, not the prediction-to-data separation, which is 2.1σ; visitor researcher persona 2026-09-15.)',
      'Status note until 2026-09-15 opened: CORRECTED 2026-07-14: the kill criterion below is registered on fσ₈(z=0.51) > 0.46 for a >3σ ruling-out. Computed directly: LRG1 fσ₈ = (fσ₈)_fid × 1.16 ± 0.13 = 0.474 × 1.16 ± 0.062 = 0.550 ± 0.062 — exceeds 0.46 by only ~1.5σ, well short of the >3σ the criterion demands (it does clear the weaker >2σ "disfavors" clause at 0.45).',
      'Cosmology-sector parenthesis in the status note: CORRECTED 2026-08-09 from "no field equation sources a growth suppression" (the parenthesis now states only the corrected reading).',
      'PRIOR REFRAME (2026-07-02, superseded by the statistic correction above but the amplitude-vs-direction point still stands): post-hoc retrodiction — disfavored 2.4σ on σ₈ AMPLITUDE. [The amplitude-vs-direction detail that followed now sits in the status note.] (Independently converged: 2026-06-24 explorer, 2026-07-01 explorer re-execution, 2026-07-02 + 2026-07-03 visitor Pass 4 researcher reads.)',
      'HISTORY — CORRECTED 2026-05-26 (previous 2026-05-25 "correction" was itself an error): LIKE-FOR-LIKE single-bin fσ₈ comparison: predicted fσ₈ ≈ 0.418; LRG1 observed fσ₈ ≈ 1.16 × 0.474 ≈ 0.55 — gap ~2σ (single-bin, qualified — see current verdict). SEPARATE σ₈ comparison: 2.4σ (ensemble, robust). These are two different observables — do not compare the 0.418 fσ₈ prediction to the 0.841 σ₈ observation directly. The 0.4497 ± 0.0548 figure cited in the 2026-05-25 edit belongs to arXiv:2512.03230 (DESI Peculiar Velocity Survey, z≈0.07) — a different survey misattributed to the z=0.51 full-shape slot. Note: the "mechanism-class sign reversal / transferable contribution" characterization is NOT restored — that was an overstatement; this is a post-hoc test.',
      'RE-OPEN POLICY (2026-06-12): the verdict would unfreeze only if DR2 full-shape reported fσ₈(z≈0.5) ≤ 0.46 (back under the kill threshold). A DR2 value at or above DR1\'s would not change the verdict, only deepen it; no DR2 outcome can convert a post-hoc retrodiction into a prospective success.',
    ],
  },
  {
    id: 'TEST-05',
    name: 'RAR Environment Partition',
    data: 'SPARC + density catalogs',
    cost: '$0',
    time: '2 months',
    prediction: 'RAR scatter shows NP2 environment dependence at the registered amplitude: Session 177 says environment explains > 20% of RAR scatter, with a kill bar of r² < 0.09. [Corrected 2026-09-14; see revision notes.]',
    kill: 'RAR scatter independent of Hubble type / environment',
    sameRun: {
      role: 'secondary',
      text: 'r² = 0.0001 (N = 141, 2026-07-14). The kill bar fires, but this card is not a second environment failure. The status note below keeps the lever-magnitude adjudication.',
    },
    alert: 'RE-ADJUDICATED (2026-07-15): the "MOND-shared" tie assigned on 2026-07-09 dissolves on lever magnitude — the two frameworks\' environment mechanisms couple to DIFFERENT variables, and their predicted effect sizes differ by orders of magnitude. MOND+EFE couples to external ACCELERATION (non-local): at SPARC outer radii (median g_bar/a₀ = 0.055) a typical external field (e_N ≈ 0.033, Chae 2020 median) modulates g_obs by ~0.09 dex — comparable to the full observed RAR scatter (~0.11 dex), which is why it is statistically detectable (Chae et al. 2020/2021, ~4σ, though disputed — Freundlich et al. 2022 and Paranjape & Sheth 2022 offer non-EFE readings in which ΛCDM-expected correlations mimic the signal). C(ρ) couples to ambient DENSITY added to local ρ (strictly local): even with the outer-disk density taken maximally low, the ambient contribution is a 4×10⁻⁵ (field) to 4×10⁻³ (δ~100 group) fractional perturbation, giving ~2×10⁻⁵ to 2×10⁻³ dex — roughly 50× smaller than MOND\'s lever at like-for-like environments and 2–4 orders of magnitude below the scatter. Undetectable. And the framework\'s OTHER galaxy law — C(a) on internal acceleration, the one TEST-09/10 actually use — predicts exactly ZERO environment dependence. Either law, a DETECTED environment dependence is specific evidence for the non-local coupling and unreachable by the framework\'s own mechanism: this is the locality no-go on the environment axis. AND THE REGISTERED RUN NOW EXISTS (research repo, 2026-07-14): per-galaxy SPARC RAR offsets vs distance-corrected Cosmicflows-4 ambient density (N = 141; instrument validated on 28 UMa cluster members) give r² = 0.0001 (p = 0.89) — ~900× under the framework\'s registered ">20% of scatter" claim; the kill bar (r² < 0.09) fires. The weak non-significant secondaries are OPPOSITE-signed (EFE-like, not Synchronism-like; Chae\'s detection uses a different estimator and is not contradicted). The execution and the structural adjudication agree: the framework registered an environment effect its own local mechanism cannot produce (predicted lever ~10⁻³ dex), and the data show none at its registered amplitude. S381\'s caveat resolved: the old R² = 0.14 signal was Hubble-type/morphology on N ≈ 171, not environment. (Earlier 2026-07-09 classification: see revision notes.) Script: explorer/scripts/test05_environment_lever_magnitudes.py. | WHERE THIS NULL SITS IN THE LITERATURE (added 2026-09-08, visitor researcher persona): the r² = 0.0001 environment null lands directly on the Rodrigues, Marra, del Popolo & Davari (2018, Nature Astronomy) claim that a₀ varies across SPARC galaxies, and on the rebuttals by McGaugh, Li, Lelli & Schombert (2018) and Kroupa et al. (2018) arguing the apparent variation is a fitting/uncertainty artifact. This null is consistent with the rebuttals — a universal a₀, no environmental modulation at the 10⁻⁴ level — which makes it the nearest thing on this site to a positive contribution: a framework-independent bound, not a framework confirmation.',
    revisionNotes: [
      'Prediction field until 2026-09-14 read "(p = 5×10⁻⁶)". That is a result, not a prediction, and it belongs to the Hubble-type R² = 0.14 term, not to environment.',
      'HISTORY (2026-07-09): TEST-05\'s registered criterion is a null-independence test ("RAR scatter independent of Hubble type / environment"), and the p = 5×10⁻⁶ / R² = 0.14 result (N ≈ 130–175, SPARC scale — see the corrected TEST-03 note above) rejects that null on its own terms; the 07-09 pass reclassified it MOND-shared on the grounds that MOND+EFE predicts the same qualitative dependence — an argument that compared directions while neither side\'s amplitude had been computed.',
    ],
  },
  {
    id: 'TEST-06',
    name: 'CDM σ_int with BIG-SPARC',
    data: 'Future resolved rotation curves',
    cost: '$0 (data)',
    time: '1–2 years (data availability)',
    prediction: 'σ_int remains at 0.086 dex with larger sample',
    kill: 'σ_int > 0.12 dex with N > 1000',
    alert: 'UNDERPOWERED AS REGISTERED (marked 2026-07-17, before the data arrives, not after): the registered kill threshold (σ_int > 0.12 dex) sits inside the disclosed ~3× pipeline-dependence range below — either outcome would be attributable to velocity-definition choice, so the test cannot adjudicate anything until the registration fixes one velocity definition in advance. Pipeline-dependence caveat (2026-07-04): Lelli et al. 2019 (MNRAS 484, 3267) report BTFR orthogonal intrinsic scatter on the same galaxy population ranging 0.026–0.070 dex depending solely on which velocity definition is used (V_flat vs. W_P20 vs. V_max vs. V_2.2). A single-pipeline σ_int value is not a fixed target — the kill threshold should be read against that ~3× pipeline-dependent range, not as a precise number. See CDM Discrimination for the corrected CDM verdict (z = +0.5, CDM-consistent) this test is downstream of.',
  },
  {
    id: 'TEST-07',
    name: 'Cosmic Interference Patterns — Exploratory Hypothesis (Not a Tier 1 Test)',
    data: 'SDSS, DES, DESI surveys',
    cost: '$0',
    time: 'N/A — no prediction yet',
    prediction: '[Exploratory] Galaxy cluster separations may show oscillatory modulation at λ ~ 500 Mpc',
    kill: 'N/A — no amplitude derivation exists; no mechanism is specified; not falsifiable as stated',
    derivationHref: '/cosmic-interference',
    alert: 'DEMOTED — EXPLORATORY, NOT YET FALSIFIABLE (a readiness label, not a cost tier: this stays a $0 item and is not on the Tier 2 pilots page; relabelled 2026-09-11, see revision notes) (executed 2026-07-07; flagged 2026-05-17): This does not qualify as a Tier 1 falsification test and no longer counts toward the Tier 1 inventory. The /cosmic-interference page itself states "Without a derivation, this is not a prediction in the scientific sense — it is an exploratory hypothesis." No amplitude has been derived from γ or ρ_crit. No mechanism is specified (sound-horizon shift? phase rotation? coherence interference?). No engagement with DESI 2024-2025 BAO results. No kill criterion is physically meaningful without an amplitude. The row is retained here, demoted in place, so the demotion is visible rather than silent — it is an exploratory hypothesis pending derivation, not a test.',
    revisionNotes: [
      'The status note read "DEMOTED TO TIER-2" until 2026-09-11, when the glossary separated the two meanings of Tier.',
    ],
  },
  {
    id: 'TEST-08',
    name: 'Freeman Law Derivation Test',
    data: 'SPARC surface brightness data',
    cost: '$0',
    time: '1 month',
    prediction: 'Σ₀ emerges from first principles with <5% error',
    kill: 'Derived Σ₀ differs from observed by >15%',
    alert: 'RECLASSIFIED (see /honest-assessment): Σ₀ = cH₀/(4π²G) is the unique surface-density scale buildable from the cosmological constants c, H₀, G — the same dimensional identity class as a₀ = cH₀/(2π). Any framework that imports these constants recovers the same relation. The ≈4% agreement with Freeman\'s observed value (124 M☉/pc²; corrected 2026-07-09, see revision notes) is consistent with dimensional analysis, not a framework-specific prediction, and is not independent of a₀\'s own ~10% gap (Σ₀ = a₀/(2πG) exactly). Classified: Reparametrization — Dimensional Identity.',
    revisionNotes: [
      'Corrected 2026-07-09 from a prior arithmetic error stating 110/12%.',
    ],
  },
  {
    id: 'TEST-09',
    name: 'BTFR Slope — FAILED, Kill Fired at B_max = 1/Ω_m; Convention-Dependent (Executed 2026-07-14, Ceiling Sweep 2026-09-18)',
    data: 'SPARC (Lelli 2016 mass models, 123 galaxies after quality cuts)',
    cost: '$0',
    time: 'EXECUTED (2026-07-14)',
    prediction: 'Computed from the framework\'s own formula (C(a) = Ω_m + (1−Ω_m)x/(1+x), boost capped at 1/Ω_m = 3.17): BTFR slope n = 3.35 ± 0.07. [Which acceleration, stated 2026-09-14: the TEST-09 and TEST-10 scripts evaluate C explicitly at the baryonic acceleration, with x = (g_bar/a₀)^(1/φ), a₀ = 1.05×10⁻¹⁰ m/s², and g_obs = g_bar/C(g_bar). There is no implicit solve in g_obs. The RAR-shape fits on /galaxy-rotation are the ones solved implicitly in g_obs. The 3.17 cap holds under either keying, because C ≥ Ω_m for every x ≥ 0.] The previously listed "deep-MOND sample → n ≈ 4" limb is retracted — a bounded boost has NO deep-MOND regime. As g_bar → 0 the boost saturates at 3.17, a constant rescaling of G, which is Newtonian: the framework\'s deep limit is n → 2 (verified numerically: 2.01), the OPPOSITE end of the ladder from MOND\'s n = 4. MOND\'s n = 4 comes precisely from the √(a₀/g_bar) divergence a bounded boost cannot follow.',
    kill: 'A single sample produces a BTFR slope inconsistent with its regime-mix prediction by > 0.3 — FIRED at B_max = 1/Ω_m: deviation 0.41 (convention-dependent: the 2026-09-18 ceiling sweep finds it does not fire at (Ω_m−Ω_b)/Ω_b, |Δn| = 0.30 against a strict > 0.3, or at Ω_m/Ω_b, 0.26, so it does not survive its own pre-fixed rule; convention-free, a bounded-boost law with B_max ≲ 5.4 is excluded by the SPARC BTFR slope; whether it stays in the count of 6 is pending dp; see the status note) (registered variable, same V_flat estimator applied to observation, MOND, and Synchronism alike). Threshold provenance: the >0.3 criterion in its operative wording was fixed 2026-04-24 (site commit 89825cf, restating the 2026-04-23 back-annotation) — eleven weeks before execution and before the bounded-boost analysis existed. Disclosed: that restatement changed the criterion\'s variable (band-universality → regime-mix deviation) while carrying the 0.3 magnitude over.',
    alert: 'CEILING-CONVENTION SWEEP EXECUTED (2026-09-18, site maintainer; closes the TEST-09 half of the registered Branch 1 of Research/proposals/boost_ceiling_provenance_and_class_exclusion.md, unrun since 2026-07-27). THIS KILL IS CONVENTION-DEPENDENT, like TEST-10\'s. The ceiling enters as the floor of C(a) = C_min + (1−C_min)x/(1+x); the site sets C_min = Ω_m, i.e. B_max = 1/Ω_m = 3.175, which no archive document derives. Re-running TEST-09\'s own pipeline — same cuts, same V_flat estimator, same bootstrap, identity control reproducing the published n = 3.35 ± 0.07 exactly — across the registered candidate ceilings: B_max = 3.175 (1/Ω_m) gives n = 3.35, |Δn| = 0.41, FIRES; B_max = 5.389 ((Ω_m−Ω_b)/Ω_b) gives n = 3.46, |Δn| = 0.30, DOES NOT FIRE (the registered threshold is a strict >0.3, and this lands exactly on it); B_max = 6.389 (Ω_m/Ω_b, the baryon budget) gives n = 3.49, |Δn| = 0.26, DOES NOT FIRE. Per the pre-fixed verdict rule (the kill stands iff it fires under every candidate), TEST-09\'s kill does NOT survive the sweep. Both discriminating galaxy-sector kills are therefore convention-dependent on the same undefended number, and the honest statement of this one is a class exclusion: a bounded-boost law with B_max ≲ 5.4 is excluded by the SPARC BTFR slope, which is the TEST-09 analogue of TEST-10\'s "B_max ≲ 14 excluded by SPARC dwarfs". COUNT UNCHANGED PENDING REVIEW — whether a convention-dependent kill still counts in the "6 refutations" headline is the recount question the proposal gates on dp (open question 4), and this run supplies the number, not the decision. Pre-registered at site commit 89e0467 before the script was written; maintainer/scripts/which_C_carries_the_floor.py (+ _PREREG.md, _output.txt). | THE "FLOOR BINDS EVERYWHERE, SO THIS TEST IS ALGEBRA" READING IS REFUTED (same run). A 2026-09-18 visitor researcher pass argued from /galaxy-plotter\'s "max C on this disk: 0.001" that the Ω_m floor binds at every radius on every disc, so the galaxy sector applies a constant 3.17, so TEST-09\'s slope was forced before execution (a constant boost shifts a BTFR intercept, never a slope). The persona flagged it as needing a source check first. It fails on the premise: the plotter draws the DENSITY-keyed C_ρ = tanh(γ ln(1+ρ/ρ_crit)), which carries no floor, while TEST-09/TEST-10 evaluate the ACCELERATION-keyed C_a, whose floor is part of its functional form. On 123 real SPARC discs C_ρ\'s per-disc maximum is indeed tiny (median 1.2×10⁻³ at γ = 2; 0/123 reach Ω_m) — so the plotter\'s number generalises — but C_a runs 0.329–0.954 over the same 2,856 radii, with 0.00% of them within 1% of the floor and an applied boost of 1.05×–3.04× that never reaches the ceiling. The corollaries fail with the premise: the predicted f_DM is not a delta at 0.685 (median 0.585, s.d. 0.062, no galaxy within 0.01 of the cap), and the slope is not ceiling-independent (it moves 0.62 across B_max ∈ [2, 100] — which is exactly why the convention sweep above has a result at all). Logged here at the same prominence a confirmed finding would get: the over-refutation share of corrections rose from 1/20 to 9/24 between May and August 2026, and visitor-supplied refutations are inside that denominator. | EXPONENT CHECK (2026-09-17, visitor Pass 3 asked whether the kill depends on the audited-negative 1/φ exponent): at the registered a₀ = 1.05×10⁻¹⁰ it does not. Exponent 1 gives n = 3.348 against 3.346 for 1/φ, and the kill fires the same way. At exponent 1 with its own cH₀·Ω_m a₀ = 2.06×10⁻¹⁰, n = 3.285. But with a₀ retuned freely, exponent 1 reaches n = 3.50 at a₀ ≈ 1.6×10⁻¹¹, a deviation of 0.25, under the 0.3 threshold. So the "no rescue for any φ ∈ [1.2, 4]" scan does not extend to φ = 1 with a₀ free, although that a₀ sits 6.5× below the registered value. The ceiling root (B ≤ 1/Ω_m) does not depend on the exponent. Script: maintainer/scripts/test09_exponent_one_instead_of_inverse_phi.py. | FAILED — KILL CRITERION FIRED (executed 2026-07-14 on real SPARC; MOND-shared flag RETRACTED). Observed n = 3.75 ± 0.10 (reproduces Lelli 2019\'s 3.85 ± 0.09); MOND n = 3.81 ± 0.04 (passes, 0.6σ); Synchronism n = 3.35 ± 0.07: the predicted slope is excluded at 3.3σ from the data; the registered criterion |Δn| > 0.3 is met on the point estimate (0.41), ~1σ above threshold under V_flat alone (P = 0.11), and robust under V_max (P ≤ 0.001). The three numbers above give the detail. Precision on the MOND comparison (added 2026-07-23, expert-review point): the 3.81 is MOND run through the same regime-mix fit pipeline as the other two slopes — a like-for-like differential, which is what the criterion adjudicates. MOND\'s PARAMETER-FREE deep-limit prediction is exactly n = 4 (M ∝ V⁴/Ga₀), and the observed 3.75 ± 0.10 sits ~2.5σ below that — mild tension with canonical MOND worth naming, and it sharpens rather than softens this card\'s verdict: Synchronism\'s 3.35 fails against both the fitted and the canonical MOND comparison. No parameters rescue it: at the framework\'s own Ω_m = 0.315 the best over all (φ, a₀) is 3.45 — the kill fires for every exponent; reaching 3.75 requires Ω_m → 0.001 and φ → 2, at which point the law degenerates algebraically to MOND. The honest parameter accounting (φ provenance audit, 2026-07-17): ONE derived ingredient (Ω_m, from cosmology) plus ONE fitted exponent dressed as a constant — φ is fitted-then-named (archive S45 adjudicated the first φ-sighting "intriguing coincidence, not significant"; the later "derivations" restate φ\'s defining identity x+x²=1 rather than derive it; see /parameter-derivations). A free exponent that still cannot reach the data is a deeper failure than a derived one — the no-rescue scan already covers every exponent value. RESOLVED — DEFINITION-ROBUST BY EXECUTION (2026-07-18, same-day run of the registered protocol under its pre-fixed verdict rule): all 11 adjudicated runs exceed 0.3 (minimum 0.32) — V_flat 0.44 ± 0.12; W_P20 across 8 generator/sample variants 0.32–0.61; V_max 0.56–0.72 with paired-bootstrap P(dev ≤ 0.3) ≤ 0.001. The observed arm reproduces Lelli 2019\'s per-definition slopes (V_max 3.47 vs 3.52; V_2.2 3.08 vs 3.06). Two disclosed caveats: (1) the point estimate is definition-robust but the SIGNIFICANCE is uneven — it is carried by V_max (P ≤ 0.001); V_flat alone is only ~1.2σ above threshold (P(≤0.3) = 0.11) and the W_P20 margin is thin (0.34 ± 0.10, P = 0.36); (2) exploratory inner-disc/single-point measures outside the registered outer-velocity scope (V_2.2, V_last: 0.25–0.28) sit under threshold — the kill is a statement about outer/flat rotation velocities, where the bounded boost binds. When citing this kill\'s strength, prefer the V_max form (0.72 ± 0.09) or pair it with TEST-10\'s definition-free ceiling violation (69% of galaxies exceed 3.17). MOND passes the same differential under every definition (max 0.20). Robustness script: explorer/scripts/test09_velocity_definition_robustness.py. The old "MOND-shared / cannot discriminate" badge was wrong in structure, not just in outcome: the BTFR is an asymptotic-boost observable, and boundedness — the framework\'s only feature distinguishing it from MOND — forces disagreement exactly there (this is a corollary of the boost-ceiling refutation on /honest-assessment). Provenance: archive S58 recorded the discrepancy honestly ("predicted n=2.75, observed n≈4"); S193 overwrote it with a synthetic 9-galaxy rescue asserting a deep-MOND limb the bounded formula cannot produce. S58 was right. Scripts: explorer/scripts/test09_btfr_bounded_boost_real_sparc.py, test09_parameter_scan_no_rescue.py.',
    scorecard: {
      separation: 'Predicted n = 3.35 ± 0.07 vs observed 3.75 ± 0.10 (catalogue V_flat, N = 123): excluded at 3.3σ (unrounded 3.7527 − 3.3465 = 0.406; combined σ = 0.124). MOND\'s 3.81 ± 0.04 sits 0.6σ from the same data.',
      criterion: '|Δn| > 0.3 on the regime-mix slope: met on the point estimate, 0.41 (0.406 unrounded). The margin above 0.3 is about 1σ under V_flat alone: 1.2σ, P(dev ≤ 0.3) = 0.11, in the 2026-07-18 paired bootstrap (outer-3 V_flat estimator, 0.44 ± 0.12); 0.9σ from a plain Gaussian on the unpaired errors in the row above. Robust under V_max: 0.72 ± 0.09 (flat sample) and 0.56 ± 0.09 (full sample), P ≤ 0.001. Thin under W_P20: 0.34 ± 0.10, P = 0.36.',
      power: 'The registration fixes a point threshold and no significance level, so there is no registered power to fall short of. A 3σ exceedance of 0.3 would need Δn ≳ 0.3 + 3σ_dev: 0.66 at V_flat\'s σ_dev = 0.12, 0.57 at V_max\'s 0.09. V_max on the flat sample (0.72) clears it; V_max on the full sample (0.56) sits at 2.9σ; V_flat (0.44) and W_P20 (0.34) do not.',
    },
    revisionNotes: [
      'Status note until 2026-09-15 read "Synchronism n = 3.35 ± 0.07 (fails, 3.3σ; deviation 0.41 > 0.3)." (Changed because 3.3σ is the prediction-to-data separation, not the margin by which the registered |Δn| > 0.3 criterion is exceeded; visitor researcher persona 2026-09-15.)',
      'OPEN ROBUSTNESS ITEM (flagged by two independent expert reviews 2026-07-18): the observed BTFR slope is velocity-definition dependent (Lelli 2019: V_flat vs W_P20 vs V_max spans roughly 3.0–4.1 — the same systematic this page cites on TEST-06), and the kill margin (0.41 vs 0.3) sits inside that range. The execution\'s defense is that the SAME V_flat estimator was applied to observation, MOND, and Synchronism — the adjudicated quantity is a differential under one consistent definition — but whether the differential stays above 0.3 under W_P20 and V_max has NOT been executed. [Superseded the same day by the definition-robustness run in the status note.]',
    ],
  },
  {
    id: 'TEST-10',
    name: 'Dwarf Galaxy DM Dominance — FAILED, Ceiling Exceeded; Headline Convention-Dependent, B_max ≲ 14 Excluded at Every Convention (Executed 2026-07-15)',
    data: 'SPARC outer rotation-curve points (Q ≤ 2, i > 30°, N = 153)',
    cost: '$0',
    time: 'EXECUTED (2026-07-15)',
    prediction: 'CORRECTED: the registered "DM fraction → 100% for M_bar < 10⁸ M☉" was never the framework\'s prediction — it is MOND\'s (unbounded ν). The framework\'s own bounded boost (B ≤ 1/Ω_m = 3.17) caps the apparent DM fraction at f_DM = 1 − C(g_bar) ≤ 1 − Ω_m = 68.5% (C evaluated explicitly at g_bar; see TEST-09), for every galaxy, at every radius, for every parameter choice.',
    kill: 'As registered: "baryon-dominated dwarfs below 10⁸ M☉ exist." The kill fires in REVERSE: the framework dies at the DM-dominated tail its own ceiling forbids. Threshold provenance (restated 2026-09-11): the 68.5% figure is fixed by Ω_m = 0.315 once the normalization B_max = 1/Ω_m is chosen — but that normalization is itself underived (Ω_m/Ω_b ≈ 6.4 is the other candidate), so it is a choice. What does NOT depend on the choice: the most dark-matter-dominated SPARC disc (f_DM = 0.927) needs B = 1/(1 − 0.927) = 13.7, above both 3.17 and 6.4 — the refutation survives either convention. What does depend on it: under 6.4 the per-galaxy exceedance is mass-to-light-conditional for all but two gas-dominated dwarfs (NGC 3741, ESO 444-G084; research ledger 2026-07-30), so lead with the tail, not the percentage.',
    alert: 'FAILED (executed 2026-07-15 on SPARC outer points; MOND-shared flag RETRACTED). The kill, stated in the form that survives every convention: SPARC\'s MAXIMUM observed outer f_DM = 0.927 requires a boost B ≥ 1/(1−0.927) = 13.7, and no candidate cosmic ratio supplies it — a class exclusion, B_max ≲ 14 is excluded by SPARC dwarfs. Everything below is the fuller accounting. Observed outer apparent DM fractions: median 0.755, max 0.927 — 106/153 = 69% of ALL SPARC galaxies exceed the framework\'s structural 68.5% ceiling ONLY under the underived convention B_max = 1/Ω_m (dwarfs below 10⁹ M☉: 67% exceed; the ten most DM-dominated galaxies are all impossible for the bounded boost while MOND matches them to a few percent — median residual f_obs − f_pred is +0.18 for Synchronism vs −0.03 for MOND). Beyond SPARC it is worse: pressure-supported dwarf spheroidals reach M_dyn/M_bar ~ 10²–10³ (Walker & Peñarrubia 2011 and subsequent dispersion-based mass modeling) against the framework\'s cap of 3.17. "A positive result confirms Synchronism and MOND equally" was wrong: MOND\'s boost is unbounded and accommodates near-100% fractions; the framework\'s cannot — this observable discriminates, and the framework loses it. Same structural root as TEST-09: both are corollaries of the boost ceiling. CEILING CONVENTION-DEPENDENCE (propagated from /parameter-derivations, flagged 2026-07-28 and independently re-confirmed by a 2026-07-29 visitor pass): B_max = 1/Ω_m has no derivation — no archive document connects it to the compander. A dynamical-to-baryonic boost more plausibly references the baryon budget Ω_m/Ω_b ≈ 6.40, giving f_DM,max ≈ 0.844, under which the reported MEDIAN (0.755) actually PASSES and the "69% of SPARC exceeds the ceiling" headline does not hold under this convention. Script: explorer/scripts/test10_dwarf_dm_fraction_ceiling.py.',
    scorecard: {
      separation: 'The framework caps f_DM ≤ 0.685 (B ≤ 3.17) at every radius. Tail: NGC 2915 (f_DM = 0.927) needs B = 13.7; NGC 3741 (f_DM = 0.924, gas-dominated) needs B = 13.1. Velocity errors alone give σ_B ≈ 1.0 and 0.8, i.e. ≈10σ and ≈12σ above 3.17, ≈7σ and ≈8σ above the 6.40 alternative (maintainer re-run 2026-09-15). Distance, inclination and M/L are not propagated, so these are upper bounds on significance, not the verdict; the 2026-07-15 execution propagated no per-galaxy errors. Under 6.40, NGC 2915\'s exceedance is M/L-conditional; NGC 3741\'s is not.',
      criterion: 'As registered, "baryon-dominated dwarfs below 10⁸ M☉ exist" tested MOND\'s f_DM → 100%, not this framework\'s cap, so it does not carry the verdict. (Read literally it is met too: 2 of the 6 SPARC dwarfs in that range, CamB and UGC 7577, have outer f_DM ≈ 0.40.) The ceiling kill: 4 of those 6 exceed 0.685, but their maximum is f_DM = 0.851 (B = 6.7), barely above 6.40. The convention-free tail sits above the registered mass cut: NGC 3741 at 2.6×10⁸ M☉, NGC 2915 at 1.0×10⁹ M☉.',
      power: 'No significance level was registered and no per-galaxy uncertainty was propagated, so no power figure exists. The velocity-only σ above is a floor on the error budget, not a power calculation.',
    },
    revisionNotes: [
      'Kill line: This card previously argued the threshold needed no registration date because it was structural rather than tuned; a visitor graduate-physics persona pointed out that a choosable normalization is a tuning freedom, and it is.',
      'LEAD REWRITTEN 2026-08-10 — this card previously led with the "69% exceed the ceiling" percentage while its own text, further down, said the surviving kill was "not the median-based percentage this card leads with." The page stated its lead was wrong and left the lead standing; a visitor Pass 4 then re-reported the convention-dependence as a new P0.',
      'Last sentence of the ceiling-convention paragraph (stale since the 2026-08-10 lead rewrite: the card no longer leads with the percentage): The kill that survives regardless of convention is narrower and lives in the tail: SPARC\'s maximum observed f_DM = 0.927 requires B ≥ 13.7, which no candidate cosmic ratio supplies — a class exclusion (B_max ≲ 14 is excluded by SPARC dwarfs), not the median-based percentage this card leads with.',
    ],
  },
  {
    id: 'TEST-25',
    name: 'Solar System / SPARC Joint Squeeze — FAILED, Empty Intersection (Executed 2026-07-23, propagated to site 2026-07-28)',
    data: 'SPARC (2,807-point RAR, McGaugh 2016 pipeline) + Cassini spacecraft quadrupole bound on the Solar System',
    cost: '$0',
    time: 'EXECUTED (2026-07-23; re-verified 2026-07-24)',
    prediction: 'The free-γ fit to SPARC converges to γ ≈ 0.489 (ΔBIC = +7.1 vs McGaugh, ΔBIC = +184.0 at the framework\'s fixed γ = 2). Applying the site\'s own Hill identity, tanh(γ·ln(1+x)) = [(1+x)^2γ − 1]/[(1+x)^2γ + 1], the fitted γ sets the compander\'s high-acceleration return exponent q = 2γ ≈ 0.98 — indistinguishable from MOND\'s SIMPLE interpolating function ν − 1 ∝ 1/y (q = 1). If the SAME scale-universal tanh-log compander is used as a QUMOND interpolation function for the Solar System, it makes a parameter-free prediction for the Cassini-bound post-Newtonian quadrupole.',
    kill: 'Pre-registered (commit 9c77e7be): the SPARC-retained ΔBIC ≤ 10 grid interval (γ = 0.425–0.600) is incompatible with the signed, two-sided 95% Cassini quadrupole bound under every recorded BIC convention and external-field sensitivity — a robust empty intersection, not a boundary artifact.',
    alert: 'FAILED — ROBUST EMPTY INTERSECTION (executed 2026-07-23, re-verified 2026-07-24; propagated to this site 2026-07-28, see revision notes). At the SPARC optimum (γ = 0.489, profiled a₀ = 5.33×10⁻¹¹ m/s²) the Cassini discrepancy is +17.95σ; across the full ΔBIC ≤ 10 retained interval it spans +17.71σ to +18.00σ — the result is not an artifact of the best-fit point or a boundary. Zero survivors at every tested external-field strength (g_ext = 2.00×10⁻¹⁰ and 2.48×10⁻¹⁰ m/s², plus the legacy 2014 Cassini interval) and at every SPARC ΔBIC threshold (6, 10, 14). The framework\'s own fixed γ = 2 is separately excluded by SPARC alone (ΔBIC = +184) and cannot rescue the joint fit. Instrument self-validated: RAR checkpoints (γ = 0.489, ΔBIC values) reproduce the 2026-07-22 compander form-selection run exactly; mu-to-nu mapping error ≤1.4×10⁻¹⁰; quadrature convergence <0.22% radial / <0.006% angular on every accepted row. Scope, stated as narrowly as the result supports: this closes the realization "universal tanh-log interpolation used as a QUMOND modified-gravity function for both galaxies and the Solar System" — the SAME γ that fits SPARC cannot also satisfy planetary ephemerides. It does NOT directly test modified inertia, a non-gravitational engineering compander, system-dependent or multi-scale functions, dark-matter/hybrid models, or the Synchronism umbrella ontology — escaping requires changing the realization, not retuning γ inside it. PRIOR ART AND DISCRIMINATING POWER — ADDED 2026-08-09 (visitor Pass 4; see revision notes): this result is, to within the choice of interpolating-function family, Desmond, Hees & Famaey (2024), MNRAS 530, 1781, who found the RAR&ndash;Cassini quadrupole tension at 8.7σ for AQUAL and QUMOND with RAR-preferred interpolating functions (shape parameter δ ≈ 1; Cassini demands δ ≳ 2.5), and reported that the tension persists across all IF families they tested. Executed here 2026-07-23, two years later, without citing it. Three consequences the row must carry. (1) It is not a Synchronism-specific refutation. It excludes the RAR-preferred IF family in modified-gravity MOND; this framework inherits it by sitting in that family — at γ = 1/2 the compander is Milgrom\'s simple μ identically. (2) It is therefore non-discriminating between MOND and Synchronism, which is applied asymmetrically elsewhere on this site: TEST-09 and TEST-10 declare MOND the winner, while /galaxy-plotter draws its MOND reference curve with ν(y) = ½ + √(¼ + 1/y) — the simple-ν function, the exact object this test excludes. The squeeze applies to both or to neither. (2b) MOND\'s own functions fail on this same instrument (pre-registered maintainer run, maintainer/scripts/cassini_q2_mond_interpolating_functions.py): McGaugh\'s RAR ν = 1/(1−e^−√y), the δ = 1 member of the δ-family, fails by +15.9σ to +20.9σ; Milgrom\'s simple ν by +15.3σ to +20.1σ; the compander at the SPARC fit, +17.95σ. The grid is a₀ ∈ {1.128, 1.20}×10⁻¹⁰ with the three registered external fields. No δ-family member enters the Cassini 95% interval below δ = 4, and δ = 4 enters at only 3 of 6 grid points; its SPARC cost was not computed. So the inheritance is literal: the function MOND fits the RAR with is excluded as hard as the compander. (3) The magnitude is ~2× the published figure (+17.95σ here vs 8.7σ there) because Desmond et al. marginalize over a₀, mass-to-light, and RAR-fit uncertainty while this computation fixes γ and profiles a₀ only — the same over-refutation signature as the ΔBIC = +184 effective-N inflation and the standalone a₀ &ldquo;8σ&rdquo;. Note the same paper also pre-empts TEST-02 (wide binaries). Related literature this squeeze operationalizes: Blanchet & Novak (2011) supplies the quadrupole channel (Q₂ = (3±3)×10⁻²⁷ s⁻²) and Hees et al. (2016) previously showed MOND\'s simple-μ family is disfavored by planetary ephemerides for the same reason (slow high-acceleration return). Artifacts: Research/preregistrations/sparc_cassini_tanhlog/ (PREREGISTRATION.md, RESULT.md, joint_result.json), simulations/sparc_cassini_joint.py (Synchronism research repo).',
    revisionNotes: [
      'When propagated on 2026-07-28 the status note read "not yet on this site until today, though flagged independently by a 2026-07-28 visitor persona who thought it unregistered".',
      'Before 2026-08-09 this row cited only the two older papers (Blanchet & Novak 2011; Hees et al. 2016) and never stated the consequence of the Desmond, Hees & Famaey (2024) prior art.',
    ],
  },
  {
    id: 'CLUSTER-SCALE',
    name: 'Cluster Scale — Bridge Tested on Coma, Closed 2026-05-28 (Not a Tier 1 Test)',
    data: 'Coma cluster (X-ray gas + galaxy velocity dispersion mass estimates)',
    cost: '$0',
    time: 'Closed',
    prediction: '[Closed] Four natural C(ρ)-to-apparent-mass ansätze were tried against Coma: A1 M_app/M_B = ⟨1/C⟩_vol; A2 M_app/M_B = 1/(1−⟨C⟩); A3 M_app/M_B = 1 + ∫Cρ dV/M_B; A4 M_app/M_B = 1/⟨C⟩_mass.',
    kill: 'All four failed: A1 and A4 overshoot the observed mass ratio by 10⁴; A2 collapses to Newtonian (no boost at all); A3 is structurally bounded at ≤2 regardless of parameters, vs. the observed ratio of 4.6 — impossible by construction, not by fit.',
    alert: 'CLOSED BY EXECUTION (2026-05-28, refined 2026-06-01 and 2026-06-09; see revision notes): the bridge was built four ways and tested on Coma; all four fail. Root cause (2026-06-01): NOT one-scale insufficiency — MOND has exactly one scale (a₀) and only misses clusters by a factor ~2 (Sanders 2003). C(ρ) also has one scale (ρ_crit) and misses by 10⁴. The dominant cause is the WRONG VARIABLE: g_bar = G·M(<r)/r² is non-local in ρ, so a function of local density cannot reproduce an acceleration-space law (the RAR) across systems of very different density profiles at matched acceleration. Novelty audit (2026-06-09): this is a quantified INSTANCE of Milgrom\'s non-locality theorem (astro-ph/0510117) — the discriminating axis is locality, not "density-based" per se, so non-local density constructions (Verlinde 2016\'s enclosed M_B(<r), MOND-Σ) are not caught by this no-go. See /for-researchers and /honest-assessment for the full derivation; explorer/findings/cluster-bridge-impossibility-coma.md, cluster-bridge-wrong-variable-not-one-scale.md, and density-compander-nogo-is-milgrom-nonlocality-instance.md for the computation.',
    revisionNotes: [
      'Superseded framing, before the 2026-05-28 execution: "if [a bridge] exists in the archive, it is the last open door".',
    ],
  },
];

/**
 * Tally for the page badge. One place, with the ID-merge stated, so the badge cannot say
 * "4 executed" while seven cards carry execution dates (visitor researcher persona 2026-09-06:
 * "Executed: 6 lists seven IDs; Kills: 5 lists six"). TEST-01, TEST-03s and TEST-05 are ONE
 * environment test on the same SPARC sample under three IDs and are counted once, matching
 * the honest-assessment ledger's single environment row.
 */
const TALLY = {
  killsFired: ['TEST-01/03s/05 (one environment test, three IDs)', 'TEST-09', 'TEST-10', 'TEST-25'],
  underpowered: ['TEST-04a'],
  /** Kills that fire at the site's B_max = 1/Ω_m but not at every candidate ceiling (TEST-10 sweep 2026-07-29,
   * TEST-09 sweep 2026-09-18). Whether they stay in the count of 6 is gated on dp. */
  conventionDependent: ['TEST-09', 'TEST-10'],
};
const EXECUTED_COUNT = TALLY.killsFired.length + TALLY.underpowered.length;

/**
 * Traceability for the 6 (2026-09-15, visitor researcher persona): ROOTS_SENTENCE names "the γ=2 pin" and
 * a "Bell/CHSH check", neither of which has a TEST ID, so a reader summing this page's cards gets 4.
 * The 6 = the 4 fired kills above, with TEST-09 and TEST-10 counted separately (5 refutations on 4 cards
 * minus the shared environment ID), + the RAR transition shape test + the Bell/CHSH check.
 */
const SIX_TRACE =
  'Tracing the 6: TEST-01/03s/05 (environment), TEST-09, TEST-10, TEST-25, RAR shape (unnumbered, closed 2026-05-21; this is "the γ=2 pin", card under Recommended Start below), and the Bell/CHSH check (unnumbered; not a Tier 1 test)';

export default function Tier1Existing() {
  return (
    <>
      <Breadcrumbs currentPath="/tier-1-existing" />
      <h1>Tier 1: Existing Data</h1>
      <ValidationBadge status="failed" label={`Failed — all ${EXECUTED_COUNT} numbered executed tests (+ the unnumbered RAR-shape test, card under Recommended Start): ${TALLY.killsFired.length} with the kill fired (${TALLY.killsFired.join('; ')}) + ${TALLY.underpowered.length} disfavored but underpowered as registered, not counted as a refutation (${TALLY.underpowered.join('; ')}). Convention-dependent: ${TALLY.conventionDependent.join(' and ')} fire at B_max = 1/Ω_m but not at every candidate ceiling (TEST-09 does not survive the 2026-09-18 sweep; convention-free, B_max ≲ 5.4 is excluded by the BTFR slope and B_max ≲ 14 by SPARC dwarfs); whether they stay in the count of 6 is pending dp. Not executed: TEST-04 withdrawn; TEST-02 self-eliminating; rest untested. Site-ledger split: ${ROOTS_SENTENCE}. ${SIX_TRACE}. $0 cost`} />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          <strong>Tier 1 is zero-cost reanalysis of existing public data</strong>: no new hardware, no new
          observations, no telescope time, only analysis, which is why this is where Synchronism should be tested
          first. The testing hierarchy (Tiers 1–4) is defined on the{' '}
          <Link href="/test-catalog" style={{ color: 'var(--color-accent-blue)' }}>Test Roadmap</Link>.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
          <strong>What is on this page:</strong> <strong>11</strong> numbered tests (TEST-01 through TEST-10, plus
          TEST-25), plus two variants: TEST-04a, a sub-test of TEST-04 added after TEST-04 was withdrawn, and
          TEST-03s, a substituted protocol. After failures, withdrawals and shared runs, about 4 of them are
          effectively independent. The badge above gives the executed tally.
        </p>
        <details style={{ margin: '-0.5rem 0 1rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
          <em style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>(Count corrected from &ldquo;10&rdquo;
          2026-08-08 — a hand-maintained number that drifted when the Cassini squeeze was added. Flagged by a
          visitor documentation persona, along with the observation that every hand-typed count on this site has
          drifted at least once.)</em>
        </details>
        <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.375rem', padding: '0.8rem 1rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
          <strong style={{ color: '#ef4444' }}>TEST-ID collision resolved 2026-08-10 — the Cassini/SPARC squeeze
          was renumbered TEST-11 &rarr; TEST-25.</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            A visitor Pass 3 found that <code>TEST-11</code> denoted <em>two unrelated experiments</em> on
            mutually linked pages: the Cassini/SPARC joint squeeze here, and the EEG Anesthesia Phase
            Transition on{' '}
            <Link href="/tier-2-pilots" style={{ color: 'var(--color-accent-blue)' }}>Tier 2</Link> and{' '}
            <Link href="/top-5-tests" style={{ color: 'var(--color-accent-blue)' }}>Top 5 Tests</Link>.
            Cause: the 24-test catalog assigns TEST-01–10 to Tier 1 and TEST-11–14 to Tier 2, and the Cassini
            squeeze — added out-of-band on 2026-07-28 — took the next number on <em>this page</em> rather than
            the next free number in the catalog. The EEG test holds the number by seniority; the interloper
            moved. <strong>There is one flat namespace, TEST-01 … TEST-26</strong> (updated 2026-08-12; see revision
            notes), and no ID denotes two
            things. Citations to &ldquo;TEST-11 (Cassini)&rdquo; dated before 2026-08-10 mean TEST-25; the
            anchor <code>/tier-1-existing#TEST-25</code> is the stable target. This defect made every TEST-ID
            on the site non-citable for 13 days and was not caught by any internal audit.
          </span>
          <details style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
            The namespace sentence read &ldquo;… TEST-25&rdquo; for two days (until 2026-08-12) while TEST-26, the proposed
            DESI DR3 dark-energy no-go, already existed on Top Decisive Tests &mdash; the namespace claim was stale on
            arrival, which is the exact defect this box documents.
          </details>
        </div>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1.5rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#ef4444' }}>
            Three caveats that belong here, not only on the pages that discovered them (added 2026-08-07)
          </h3>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            <strong>1. TEST-09 and TEST-10 are convention-dependent, and they share one root.</strong> Both are
            corollaries of the boost ceiling B &#x2264; 1/&#x03A9;<sub>m</sub> = 3.17, which follows from the
            f<sub>DM</sub> = 1&minus;C identity &mdash; i.e. from reading the coupling as
            g<sub>obs</sub> = g<sub>bar</sub>/C, with C evaluated explicitly at g<sub>bar</sub> in both executions,
            not solved implicitly in g<sub>obs</sub> (stated 2026-09-14). The site runs <strong>three mutually exclusive readings</strong> of
            that substitution, documented on{' '}
            <Link href="/galaxy-rotation" style={{ color: '#ef4444' }}>Galaxy Rotation</Link> since 2026-08-04, and
            they miss the observed curves in three different directions (~10²&ndash;10³&times; high, converging on
            Newtonian, ~10²&ndash;10³&times; low). Counting TEST-09 and TEST-10 as two independent
            refutations overstates the ledger twice over: they are one structural root, and that root presupposes
            one of three live conventions. The honest accounting, reconciled 2026-09-05 and rendered here from the
            site ledger rather than typed: <strong>{ROOTS_SENTENCE}</strong>. {SIX_TRACE}.
            <br /><br />
            <strong style={{ color: '#f59e0b' }}>&ldquo;Convention-dependent&rdquo; is measured for both tests (see
            revision notes for when).</strong> TEST-10&apos;s convention-dependence was
            executed 2026-07-29 (106/153 discs exceed the cap at B<sub>max</sub> = 3.17, 28/153 at 6.39).
            TEST-09&apos;s, the other half of the same registered sweep, was executed 2026-09-18: re-running TEST-09&apos;s own pipeline with the ceiling
            as the only thing changed gives n = 3.35 (|&#x0394;n| = 0.41, <em>fires</em>) at B<sub>max</sub> = 3.175,
            n = 3.46 (0.30, <em>does not fire</em>) at 5.389, and n = 3.49 (0.26, <em>does not fire</em>) at 6.389.
            Under the pre-fixed rule &mdash; the kill stands iff it fires under every candidate &mdash;{' '}
            <strong>TEST-09&apos;s kill does not survive its own sweep</strong>, and the convention-free form of the
            result is a class exclusion: B<sub>max</sub> &#8818; 5.4 is excluded by the SPARC BTFR slope. The
            refutation count is unchanged pending the dp-gated recount; this run supplies the number, not the
            decision. Pre-registered at commit <code style={{ fontSize: '0.76rem' }}>89e0467</code>;{' '}
            <code style={{ fontSize: '0.76rem' }}>maintainer/scripts/which_C_carries_the_floor.py</code>.
          </p>
          <details style={{ margin: '0 0 0.5rem 0', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
            <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1.1rem' }}>
              <li><em>This caveat was previously stated only where it was found, not where the tests are counted.</em></li>
              <li><em>The honest-accounting sentence read
              &ldquo;3&ndash;4, not 6&rdquo; until 2026-09-06, one day after the reconciliation &mdash; the same drift
              it complains about.</em></li>
              <li><em>&ldquo;Convention-dependent&rdquo; was asserted here on 2026-08-07 and measured for TEST-09 only on
              2026-09-18. TEST-09&apos;s half was the unrun half of the same registered sweep, and this sentence carried it as a
              claim for six weeks.</em></li>
            </ul>
          </details>
          <p style={{ margin: 0 }}>
            <strong>2. EFE = 0 is missing from this ledger, and that absence is not an oversight &mdash; it has
            no live carrier (reworded 2026-09-05; see revision notes).</strong> A vanishing{' '}
            <TermTooltip term="EFE">External Field Effect</TermTooltip> is the framework&apos;s only
            <em> structurally</em> discriminating prediction against MOND: it follows from
            &#x2207;&middot;[C(&#x03C1;)&#x2207;&#x03A6;] = 4&#x03C0;G&#x03C1; being linear in &#x03A6;, and it is
            testable on data that already exists. It has no TEST ID, appears in no ID-keyed inventory, and is
            therefore invisible to every audit that walks this ledger by ID &mdash; the same mechanism that dropped
            the a&#x2080;(z) prediction. <strong>Why it is not simply registered:</strong> the prediction is attached to
            couplings that are already dead or already MOND. The strict density-keyed C(&#x03C1;<sub>local</sub>) reading
            gives EFE = 0 exactly (it follows from C being independent of &Phi;) &mdash; but that reading is refuted
            head-to-head on SPARC (archive 2026-08-24: &#x0394;BIC +2843 against the acceleration-keyed form; the{' '}
            <Link href="/galaxy-plotter" style={{ color: '#ef4444' }}>plotter&apos;s</Link> quadrature and division
            branches are killed by the same galaxy from opposite sides). The acceleration-keyed reading that <em>does</em>
            fit galaxies collapses at &#x03B3; = &frac12; to MOND&apos;s simple &#x03BC;, whose EFE is MOND&apos;s identically. And
            the boost ceiling screens EFE = 0 from a clean test where it would bite (sparse satellites: Crater II needs
            B = 60 against a ceiling of 3.17). So there is no live model that both fits rotation curves and predicts
            EFE = 0: the &ldquo;only structurally discriminating prediction&rdquo; is real, and it belongs to a model the
            data already excluded. The &ldquo;0 of 24 tests selected Synchronism, and none still unrun can select the framework as postulated&rdquo; framing stands (qualifier added 2026-09-22: TEST-26, outside the 24, can select the mean-density dark-energy reading the local-density postulate forbids; see revision notes); the one test
            which structurally <em>could</em> has nothing left to test.
          </p>
          <p style={{ margin: '0.75rem 0 0 0', paddingTop: '0.6rem', borderTop: '1px solid rgba(239,68,68,0.25)' }}>
            <strong>3. The evolving (high-z) boost ceiling was tested on published disc kinematics and failed as a
            reading (explorer 2026-09-11; corrected 2026-09-14, see revision notes).</strong>{' '}
            The floor&apos;s stated meaning, &ldquo;the cosmic average coherence&rdquo;, gives
            C<sub>DE</sub>(&#x03C1;&#x0304;<sub>m</sub>(z)) &equiv; &#x03A9;<sub>m</sub>(z), hence
            <strong> f<sub>DM,max</sub>(z) = 1 &minus; &#x03A9;<sub>m</sub>(z)</strong> (&#8776; 0.21 at z = 1,
            &#8776; 0.075 at z = 2). Under a pre-registered rule, on the N = 21 z &ge; 1.5 discs and across the
            DESI-allowed band &#x03B3;<sub>DE</sub> &isin; [0.428, 0.560]: Price+2021 (MCMC) puts 10&ndash;13 discs above
            the cap at &gt; 2&sigma;, and Genzel+2020 (least-squares, same galaxies) puts 6, where 5 were enough to
            refute. RC100&apos;s f<sub>DM</sub> &prop; (1+z)<sup>&minus;b</sup> has b = 1.07 &plusmn; 0.33, but the cap
            needs 2.2&ndash;2.9. The only escape, a Salpeter IMF stacked on least-squares, leaves 2&ndash;5 of the 21
            discs super-maximal. The reading gets the sign and the z = 0 level right but falls too steeply. The
            &#x03A9;<sub>m</sub>/&#x03A9;<sub>b</sub> branch is still correct: that
            ratio is epoch-flat, so it gives no high-z test. This was never a registered prediction, so it eliminates a
            reading rather than adding a refutation, and the count stays 6. Numbers are in item 8 on{' '}
            <Link href="/parameter-derivations" style={{ color: '#ef4444' }}>Parameter Derivations</Link>.
          </p>
          <details style={{ margin: '0.5rem 0 0', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes for items 2 and 3 (history; not the current claim)</summary>
            <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1.1rem' }}>
              <li>Item 2&apos;s heading read &ldquo;blocked on a theory decision&rdquo; until 2026-09-05, while{' '}
              <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND Unification</Link> said &ldquo;EFE = 0
              exactly&rdquo; &mdash; both true of different C conventions, neither saying so.</li>
              <li>Item 2&apos;s &ldquo;0 of 24 tests&rdquo; framing read &ldquo;could select&rdquo; until 2026-09-14.</li>
              <li>Item 3 said the evolving boost ceiling &ldquo;closes without data&rdquo; until 2026-09-14. That
              2026-08-08 closure (&ldquo;an internal contradiction&rdquo;) rested on a&#x2080;(z) = cH(z)/2&#x03C0;, which{' '}
              <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link> had already
              marked disfavored on 2026-08-01.</li>
            </ul>
          </details>
        </div>

        <div className="card" id="inherited-mond-exposures" style={{ borderLeft: '3px dashed #94a3b8', marginBottom: '1.5rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#94a3b8' }}>
            Inherited MOND exposures (acceleration-keyed branch), kept apart from framework-specific kills
          </h3>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            The acceleration-keyed galaxy law that fits SPARC sits at &#x03B3; &asymp; &frac12;, where the compander is
            Milgrom&apos;s simple &#x03BC;. Whatever that interpolating function fails, this branch fails with it, and a
            failure shared with MOND says nothing about Synchronism specifically. When the TEST-02 card says the test
            &ldquo;was never a discriminator&rdquo; on this branch, it means the test cannot <em>separate</em> the
            branch from MOND. It can still fail both together, and that is how Cassini entered the count.
          </p>
          <ul style={{ margin: '0 0 0.5rem 0', paddingLeft: '1.2rem' }}>
            <li>
              <strong>Cassini / Solar-System quadrupole, <Link href="#TEST-25" style={{ color: 'var(--color-accent-blue)' }}>TEST-25</Link>:
              failed, and counted.</strong> It is the &ldquo;1 inherited from MOND&rdquo; root in the 6. Desmond, Hees
              &amp; Famaey (2024) found the same tension for the RAR-preferred MOND interpolating functions, and
              TEST-25&apos;s own instrument agrees: McGaugh&apos;s RAR function fails by +15.9&sigma; to +20.9&sigma;, against the
              compander&apos;s +17.95&sigma;. Nothing in the δ-family passes below δ = 4.
            </li>
            <li>
              <strong>Gaia DR3 wide binaries, <Link href="#TEST-02" style={{ color: 'var(--color-accent-blue)' }}>TEST-02</Link>:
              pending, not counted.</strong> It waits on the Chae (boost) vs Banik et al. (Newtonian) adjudication, and
              this branch inherits whichever outcome holds for MOND&apos;s simple &#x03BC; (&asymp;1.4&times; boost with the
              Milky Way external field). A Chae-type boost leaves the branch standing with MOND. A confirmed Newtonian
              null would be a second inherited failure, shared with that MOND interpolating function. Whether such a
              failure would enter the count has not been registered.
            </li>
          </ul>
          <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
            <strong>The density-keyed branch is a separate case.</strong> There TEST-02 is identically null, not
            &ldquo;below reach&rdquo;. The Gaia statistic &gamma;<sub>g</sub> is a ratio of wide to close binaries drawn
            from the same volume. Under the ambient-density keying the galaxy runs use, the boost 1/C is common to both
            bins and cancels, so &gamma;<sub>g,pred</sub> = 1 exactly, at every &#x03C1;<sub>crit</sub> and every
            &#x03B3;, floored or bare. No Gaia release can move that. It turns into a live constraint only under
            enclosed/MRH keying (explorer finding <code>test02-is-not-below-reach-it-is-identically-null.md</code>).
            Neither branch changes the count, which stays at 6.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Acronym key (used throughout the test cards below)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr', gap: '0.25rem 1rem', color: 'var(--color-text-secondary)' }}>
            <strong><TermTooltip term="MOND">MOND</TermTooltip></strong><span>Modified Newtonian Dynamics — Milgrom&apos;s 1983 alternative to dark matter (gravity falls off more gently below a₀ ≈ 1.2×10⁻¹⁰ m/s²). The rival every test on this page is scored against.</span>
            <strong>RAR</strong><span>Radial Acceleration Relation — the tight empirical relation between the gravity galaxies actually exhibit (g_obs) and the gravity their visible matter predicts (g_bar) (McGaugh et al. 2016).</span>
            <strong>BTFR</strong><span>Baryonic Tully&ndash;Fisher Relation — baryonic mass scales as a power law of a galaxy&apos;s flat outer rotation velocity.</span>
            <strong>EFE</strong><span>External Field Effect — a MOND-specific prediction: a system&apos;s internal dynamics depend on the external gravitational field it sits in (no Newtonian analog).</span>
            <strong>DESI</strong><span>Dark Energy Spectroscopic Instrument — ongoing galaxy redshift survey (DR1/DR2 = data releases).</span>
            <strong>SPARC</strong><span>Spitzer Photometry and Accurate Rotation Curves — the 175-galaxy rotation-curve database most tests here run on.</span>
            <strong>DM</strong><span>Dark matter.</span>
          </div>
        </div>

        {/* Badge legend — requested by all four personas 2026-05-23 */}
        <details style={{ marginBottom: '1.5rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>
            Status badge definitions
          </summary>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.25rem 1rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            <strong>Active-MRH</strong><span>In active research focus; being extended or revised</span>
            <strong>Reparametrization</strong><span>Equivalent to existing physics (MOND, textbook QM) in different notation</span>
            <strong>Untested</strong><span>Prediction exists, no data yet</span>
            <strong>Speculative</strong><span>Conceptual proposal without quantitative test</span>
            <strong>Failed</strong><span>Prediction contradicted by data (specific error documented)</span>
            <strong>MOND-shared</strong><span>RETIRED (class audited 2026-07-14/15): all three tests carrying this marker (TEST-05, TEST-09, TEST-10) dissolved on execution or adjudication — each sat on an observable controlled by one of the framework&apos;s two structural differences from MOND (bounded boost; local coupling variable), so none could actually tie. A tie badge now carries the same execution burden as a kill.</span>
            <strong>Kill Criterion Triggered</strong><span>Operational state: measured value crossed the pre-registered kill criterion threshold</span>
            <strong>Withdrawn</strong><span>Operational state: the framework disowned the test (internal contradiction, unmotivated amplitude, or supersession), not a data refutation; no badge</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
            Full canonical definitions, one link per label family:{' '}
            <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>validation badges</Link>{' '}
            &middot;{' '}
            <Link href="/honest-assessment#operational-states" style={{ color: 'var(--color-accent-blue)' }}>operational states</Link>{' '}
            (Kill Criterion Triggered, Withdrawn, Self-Eliminating-or-Tie, Artifact Lesson &hellip;) &middot;{' '}
            <Link href="/honest-assessment#status-lifecycle-verbs" style={{ color: 'var(--color-accent-blue)' }}>status lifecycle verbs</Link>{' '}
            (Underpowered as registered, Demoted to Tier-2, Closed &hellip;).
            <br />A test can carry one of each simultaneously &mdash; e.g. TEST-09 reads
            &ldquo;Failed, Kill Criterion Triggered&rdquo; (at B<sub>max</sub> = 1/&Omega;<sub>m</sub>; convention-dependent, see its card), and TEST-04a
            reads &ldquo;Failed &mdash; Underpowered as Registered&rdquo;. <strong>Read them in that order: badge (what the evidence
            says) &rarr; operational state (what happened to the test) &rarr; lifecycle verb (where the test now sits).</strong>
          </p>
          <details style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>{' '}
            (<em>the three-way split was added 2026-09-10:
            this line pointed only at the badge anchor, so a reader looking up &ldquo;Underpowered as registered,&rdquo;
            &ldquo;Demoted to Tier-2&rdquo; or &ldquo;Closed&rdquo; &mdash; all used on this page, none in the legend
            above &mdash; landed on a section that provably does not contain them</em>)
          </details>
        </details>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Public Data Sources</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem' }}>
            <a href="http://astroweb.cwru.edu/SPARC/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>SPARC</a>
            <a href="https://gea.esac.esa.int/archive/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>Gaia DR3</a>
            <a href="https://www.sdss.org/dr17/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>SDSS DR17</a>
            <a href="http://egg.astro.cornell.edu/alfalfa/data/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>ALFALFA</a>
            <a href="https://www.desi.lbl.gov/the-desi-survey/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>DESI</a>
            <a href="https://www.des.ncsa.illinois.edu/releases" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>DES</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {tests.map(t => (
            <div key={t.id} id={t.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{t.id}: {t.name}</h3>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {t.cost} / {t.time}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Data:</strong> {t.data}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                <strong>Prediction:</strong> {t.prediction}
              </p>
              <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                <strong>Kill:</strong> {t.kill}
              </p>
              {t.scorecard && (
                <div style={{ fontSize: '0.8rem', marginTop: '0.4rem', padding: '0.45rem 0.6rem', border: '1px solid var(--color-dark-border)', borderRadius: '4px', display: 'grid', gridTemplateColumns: 'minmax(8rem, 1fr) 4fr', gap: '0.2rem 0.75rem', color: 'var(--color-text-secondary)' }}>
                  <strong>Prediction vs data</strong><span>{t.scorecard.separation}</span>
                  <strong>Registered criterion</strong><span>{t.scorecard.criterion}</span>
                  <strong>Power</strong><span>{t.scorecard.power}</span>
                </div>
              )}
              {t.sameRun && (
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.4rem', padding: '0.4rem 0.6rem', borderLeft: '3px solid #ef4444', background: 'rgba(239,68,68,0.05)', borderRadius: '4px' }}>
                  {t.sameRun.role === 'primary' ? (
                    <><strong>Primary card for the 2026-07-14 environment run (FAILED, counted once):</strong> {t.sameRun.text}</>
                  ) : (
                    <><strong>Killed by the same run, not a separate failure:</strong> {t.sameRun.text} The verdict is filed once, on{' '}
                    <Link href="/tier-1-existing#TEST-03" style={{ color: 'var(--color-accent-blue)' }}>TEST-03s</Link>.</>
                  )}
                </p>
              )}
              {t.preregistration && (
                <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.4rem', padding: '0.4rem 0.6rem', background: 'rgba(239,68,68,0.08)', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                  <strong>Pre-registration status:</strong> {t.preregistration}
                </p>
              )}
              {t.alert && (
                <p style={{ color: '#f59e0b', fontSize: '0.8rem', marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(245,158,11,0.1)', borderRadius: '4px', borderLeft: '3px solid #f59e0b' }}>
                  <strong>⚠ Status note:</strong> {t.alert}
                </p>
              )}
              {t.revisionNotes && t.revisionNotes.length > 0 && (
                <details style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  <summary style={{ cursor: 'pointer' }}>Revision notes, {t.revisionNotes.length} (history; not the current claim)</summary>
                  <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.1rem' }}>
                    {t.revisionNotes.map((n, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{n}</li>)}
                  </ul>
                </details>
              )}
              {t.derivationHref && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <Link href={t.derivationHref} style={{ color: 'var(--color-accent-blue)' }}>
                    Derivation status &rarr;
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>

        <h2>Recommended Start</h2>
        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.05)' }}>
          <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 0.5rem' }}>
            <strong style={{ color: '#ef4444' }}>RAR Transition Shape — CLOSED (2026-05-21):</strong>{' '}
            The only non-degenerate galaxy discriminating test between the Synchronism γ=2 compander and
            McGaugh&apos;s MOND interpolating function was executed on 2807 real SPARC points.
            γ=2 refuted at ΔBIC=+184 (conservative: ≈33). Free-γ fit: γ≈0.49&nbsp;=&nbsp;MOND,
            RMS identical to McGaugh. There is no γ for which the compander is both distinct from MOND and
            consistent with SPARC. <strong>Galaxy tests that selected Synchronism over MOND: 0, by execution (2 discriminated; both selected MOND).</strong>
            See <Link href="/galaxy-rotation" style={{ color: '#ef4444' }}>Galaxy Rotation: RAR Transition Shape</Link>{' '}
            and <Link href="/honest-assessment" style={{ color: '#ef4444' }}>Honest Assessment</Link>.
          </p>
        </div>
        <div className="card card-highlight" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>TEST-04a: Failed &mdash; disfavored 2.4σ on σ₈ (a GR-conditioned statistic); ~1.5σ on the registered fσ₈(z=0.51), short of the demanded &gt;3σ; underpowered as registered; post-hoc, not counted as a refutation (corrected 2026-07-14). The adopted DR2 kill fires with under 1% probability if &Lambda;CDM is true (2026-09-21).</strong> TEST-04 was withdrawn.
            Tests 01, 03s and 05 are one environment run under three IDs. Count it as one test, filed on TEST-03s (all three were answered on SPARC; corrected 2026-09-14, see revision notes).
            TEST-02 (wide binaries, Gaia DR3) is not waiting on a test of ours &mdash; it is waiting on an external
            dispute (wording corrected 2026-09-08; see revision notes): whether Gaia DR3 wide binaries show a MOND-scale boost at ≲10⁻¹⁰ m/s² is a live 2023–2025 argument
            between Chae (~1.4× boost), Banik et al. (Newtonian at high significance, from the same data with
            different cuts) and Hernandez (intermediate), and it turns on how hidden third stars are modelled, not on
            any framework&apos;s prediction. The 1.0–1.4× spread quoted in the card above is interpolating-function
            dependence (sharp 1.0, standard 1.07, simple 1.41), all <em>with</em> the Milky Way&apos;s external field
            included &mdash; the EFE-free figure is ~38%, not 18% (explorer correction 2026-09-06). No outcome selects
            this framework: a boost confirms MOND and kills the density-keyed law; a null confirms Newton.
          </p>
          <p style={{ color: 'var(--color-accent-warm)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>EFE gap — CLOSED (2026-06-03):</strong> TEST-01, TEST-02, and TEST-05 are all environment-dependent
            predictions. MOND&apos;s External Field Effect (Bekenstein &amp; Milgrom 1984; AQUAL/QUMOND) also predicts
            environment-dependent dynamics. The compander is now known to be MOND-equivalent at its best-fit γ.
            The MOND+EFE divergence was computed on 2026-06-03 (explorer finding):
            bounded-C(a) caps the boost at ~3.17×, while ~42% of SPARC RAR points require &gt;3.17×
            (maximum observed ~34×). RAR-fit quality and EFE distinctness trade off monotonically — no
            boost ceiling fits RAR AND stays EFE-distinct from MOND. This closes the last possible EFE discriminator.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>CORRECTED 2026-07-15 — the &ldquo;MOND-shared&rdquo; class is retired.</strong> Tests 09 and 10 were
            badged MOND-shared until executed (2026-07-14/15): both are discriminators the framework loses, and both
            lose to the same boost ceiling (B ≤ 3.17) quoted in the EFE-closure note above — TEST-09&apos;s kill fired at
            slope deviation 0.41 &gt; 0.3 at B<sub>max</sub> = 1/&Omega;<sub>m</sub> (on the point estimate: ~1σ above threshold under V_flat, robust under V_max; the three numbers are on its card; convention-dependent: it does not fire at the two baryon-budget ceilings in the 2026-09-18 sweep, so the convention-free result is B<sub>max</sub> &#8818; 5.4 excluded, and its place in the count of 6 is pending dp), and 69% of SPARC galaxies exceed TEST-10&apos;s 68.5% DM-fraction ceiling (under the 1&minus;&Omega;<sub>m</sub> convention; the convention-free form is B<sub>max</sub> &#8818; 14 excluded by SPARC dwarfs).
            TEST-05&apos;s tie dissolved on adjudication (environment levers differ by ~50×–5,000×; see its row).
            The 2026-05-13 &ldquo;0 currently discriminating tests&rdquo; analysis is thereby inverted for these three:
            they discriminate <em>by structure</em> — the framework&apos;s bounded boost and local coupling variable, its only
            two differences from MOND, each force disagreement on exactly these observables. What is true post-execution:
            <strong> 0 tests remain where the framework ties MOND; the executed ones it loses.</strong> TEST-02&apos;s
            predicted amplitude remains ~80× below Gaia DR3 single-bin statistical reach (referent: Hernandez 2023-scale
            γ_g analyses, not raw astrometric systematics).
          </p>
          <details style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
            <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
            <ul style={{ margin: '0.3rem 0 0', paddingLeft: '1.1rem' }}>
              <li>Until 2026-09-14 the environment sentence said TEST-01, 03s and 05 ran &ldquo;on different samples&rdquo;.</li>
              <li>Until 2026-09-08 TEST-02 was described as &ldquo;pending&rdquo;, which read as if the site were waiting on its own run.</li>
            </ul>
          </details>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/tier-2-pilots" className="btn-primary">
            Tier 2: Pilot Experiments &rarr;
          </Link>
          <Link href="/test-catalog" className="btn-secondary">
            Back to Catalog
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/tier-1-existing" />
    </>
  );
}
