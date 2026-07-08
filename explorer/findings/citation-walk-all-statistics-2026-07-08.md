# Finding: Site-Wide Statistic Citation-Walk — Provenance Table for Every Load-Bearing Number

## Origin

Topic `statistics-citation-walk-beyond-pvalues.md` (seeded 2026-07-08 maintainer, after the
S63 fabrication corrections shipped). The p-value class was walked and cleaned 07-07/07-08;
this session walks every other load-bearing statistic class, plus the numbers freshly
inscribed by this morning's maintainer session (fresh inscriptions being where drift is born).

## Summary

Five bundles walked in parallel (CHSH S-values; RAR/SPARC ensemble; DESI/LIV/wide-binary;
archive counts + TEST-03/CDM; fresh 07-08 inscriptions). Verdict vocabulary: REGENERATES
(re-ran, matches) / WALKS (primary artifact with computation exists, matches, not re-run) /
ASSERTED-ONLY (number exists only in compilation layers) / DRIFT (primary contradicts site) /
NO-SOURCE / NO-JUSTIFICATION.

**Headline: ~30 statistics walked. The physics numbers are in excellent shape — every CHSH,
RAR, DESI, LIV, and fresh-07-08 number regenerates from committed code or walks to a verified
primary. The failures concentrate in exactly one place: statistics the site wields *against
itself*. TEST-03's "pre-registered kill criterion fired" is a manufactured refutation (five
independent errors; the registered threshold would not have fired; the environment test was
never run) — the second confirmed instance of the S63 fabricated-refutation pattern. The
wide-binary "80× below Gaia DR3 systematics" label is drifted (real arithmetic, wrong
referent, semi-circular calibration). And the landing-page "3,308 adversarial sessions" is
a carried-forward total that no fresh count reproduces and whose own source tables don't sum
to it. The site's honesty brand makes self-refutations its least-scrutinized claims — that
is now a demonstrated systematic bias, not a one-off.**

## Bundle 1 — CHSH S-values: ALL REGENERATE (strongest grade)

All scripts have fixed seeds (02: SEED=11, 03: SEED=23, 04: SEED=23, 05: SEED=29); every
regenerated value is bit-identical to committed `results/*.json`. Runtimes 1–18 s.

| statistic | primary source | regenerated | verdict |
|---|---|---|---|
| S = 1.98 (local Kuramoto) | `02_observer_relative_chsh.py` → `results/chsh_result.json` | best_local_S = 1.9838, signaling = 0.0 | REGENERATES |
| S ≡ 2.00 (nonlocal grid ∀g) | `03_nonlocal_grid_chsh.py` | sweep S ∈ [1.9991, 2.0037], no violation | REGENERATES |
| S = 2.67 (global clock, signaling) | `04_global_clock_chsh.py` | max_S = 2.6667 at g=0.5, signaling_delta = 0.4313; `every_S_gt2_signals: true` | REGENERATES |
| S = 1.85 (density substrate) | `05_saturation_density_chsh.py` (A) | S = 1.8515, signaling = 0.0008 | REGENERATES |
| S = 2√2 (Born-rule cos²) | script 05 (B) | \|S\| = 2.8334 (MC noise around 2.8284) | REGENERATES |
| S = 4 (PR-box) | script 05 (C) | S = 4.0 exact | REGENERATES |

Precision notes (not drift): "S ≡ 2.00" rounds a sweep spanning 1.9991–2.0037 (MC noise,
correctly described as no violation); the site cites the theoretical Tsirelson 2√2 = 2.8284
while the simulation's construction B lands at 2.8334 — the site is citing the bound, which
is defensible, but nobody should ever quote "the simulation reached 2.8284."

## Bundle 2 — RAR/SPARC ensemble: ALL REGENERATE or WALK; one wording drift

Primary: `explorer/scripts/rar_transition_shape_real_sparc.py` against committed SPARC data
(`Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt`), re-run ~2 min; and
`explorer/work/cluster_bridge_wrong_variable.py`.

| statistic | primary source | regenerated | verdict |
|---|---|---|---|
| ΔBIC = +184 (γ=2 vs McGaugh ν) | rar script + S661 | +184.0 (N=2807, err_cut 0.10); no-cut robustness +154.4 | REGENERATES |
| ΔBIC ≈ +33 conservative | finding doc scaling: 184×(500/2807) | arithmetic verified (32.78); ΔBIC linear in N confirmed | WALKS⚠ |
| free-γ = 0.49, RMS tie to 4 decimals | rar script + S661 | γ = 0.489, RMS 0.1437 vs McGaugh 0.1437 — the four-decimal pair is literally printed | REGENERATES |
| ΔBIC = +7 (free-γ penalty-only) | rar script | +7.1; penalty ln(2807)=7.94, fit term −0.8 — "entirely the parameter penalty" checks numerically | REGENERATES |
| ~1.7 dex cross-system offset | cluster_bridge script + S683 | median ratio 52.5× → 1.7 dex (range 8.7–126×) | REGENERATES⚠ |

⚠ +33: the computation is shown and correct, but its input ("effective N ≈ 500–1000" for
correlated errors) is an eyeballed plausibility assumption, never derived from an actual
intra-galaxy autocorrelation analysis. The number walks; its *conservatism* rests on a
stated assumption. (N=1000 would give ≈ 66; the site's "≥+33" honestly takes the low end.)

⚠ 1.7 dex: regenerates, but with two caveats. (1) The core's independent re-derivation
(S683, enclosed-sphere methodology) got **+1.1 dex** and calls the magnitude
"order-of-magnitude consistent, model-sensitive" — /for-researchers carries this caveat,
**/galaxy-plotter:235 does not**. (2) galaxy-plotter:235 attributes the offset to "a single
global ρ_crit(V_flat)" — but the primary computation is a **ρ_crit-free** galaxy-vs-Coma
comparison of the (ρ, g_bar) locus. Wording drift, not number drift.

## Bundle 3 — DESI / LIV / wide-binary: DESI + LIV clean; wide-binary chain PARTIALLY CIRCULAR

| statistic | primary source | verdict | notes |
|---|---|---|---|
| σ₈ = 0.841 ± 0.034 | DESI arXiv:2411.12021 Table 10 via 06-24 finding (direct table read) | WALKS | per-bin values confirmed present in the verification layer |
| 2.4σ tension | arithmetic | REGENERATES | (0.841−0.76)/0.034 = 2.382 |
| σ₈ ≈ 0.76 prediction | S102 + committed `simulations/session102_s8_tension.py` — **re-run: 0.763** | REGENERATES⚠ | real growth-ODE, but calibrated inputs (C_galactic back-fit to Ω_m=0.3; baseline 0.81 = Planck): a calibrated retrodiction that regenerates, not a derivation — "doubly post-hoc" flag confirmed at the code level |
| LRG1 fσ₈/fid = 1.16 ± 0.13 | DESI Table 9 via 07-01 finding (copy-error hypothesis retracted; value real) | WALKS | single-bin qualifier correctly carried everywhere checked |
| γ_growth = 0.58 ± 0.11 | 07-01 finding combo table | WALKS | site uses the most conservative combo (not the tighter 0.633 ± 0.025) |
| tree c_μν = 0 | 06-26 finding; sympy re-run inline: ω² = c²k² − a²c²k⁴/12 + … | REGENERATES | no committed script, but the one-liner reproduces exactly; site never claims "sympy-verified" on-page, so no artifact-claim drift |
| c_μν ~ α/π radiative | CPSU 2004 (literature) + committed `phase13_radiative_dim4_liv.py` re-run (marginality p→0.099) | WALKS | α/π = 2.3×10⁻³; "~10⁻²–10⁻³" on for-researchers is exact; bare "~10⁻²" elsewhere is the generous edge under CPSU's O(1) convention |
| 16–28 OOM gap | arithmetic vs SME Data Tables bounds | REGENERATES | log₁₀ gaps = 16.0 / 28.0 exactly |
| 0.05–0.4% WB signal | committed `test02_wide_binary_efe_divergence.py` — re-run: 0.0500% → 0.4098% | REGENERATES (mechanically) ⚠ **SEMI-CIRCULAR** | the 0.05% midplane floor is a *calibration input* (script line 71-72: `target_vdev = 0.0005`, ρ_crit solved to hit it), derived from "Gaia reach ~4% / 80" — an unsourced back-of-envelope; only the 0.4% upper edge is computed |
| "80× below Gaia DR3 systematics" | `wide-binary-density-slope-trilemma.md`: Δγ_g +0.0054 predicted vs ≳0.42 required (Hernandez 2023 single-bin σ(γ_g)≈0.30) → 77.8 | **DRIFT (label)**; arithmetic WALKS | the floor is the **statistical single-bin reach of Hernandez 2023's γ_g measurement**, NOT "Gaia DR3 systematics"; and the primary observable is a γ_g contrast across 1.4 dex of density, not a velocity-deviation % — the velocity-% framing was created by the 06-05 script assuming "~4% reach" to be consistent with the pre-existing 80× |

**The wide-binary catch, spelled out.** The site's TEST-02 verdict chain reads "predicted
0.05–0.4% signal sits 80× below Gaia DR3 systematics." Walked to primaries: (a) "systematics"
is the wrong word — the 80× was computed against a *statistical* detection floor (Hernandez
2023's single-bin σ(γ_g) ≈ 0.30, two-bin contrast ≳ 0.42, vs predicted contrast +0.0054);
(b) the 0.05% velocity floor is not an independent prediction — the 06-05 script *calibrated*
ρ_crit to land 80× below an unsourced "~4% Gaia reach." The two halves of the sentence quietly
define each other. The *conclusion* (TEST-02 cannot discriminate; self-eliminating-or-tie)
survives — the γ_g contrast arithmetic is real and independently corroborated by the archive's
session-691 script (C→~1 at local density ⇒ Newtonian null) — but the site's stated basis for
it is mislabeled and partially circular. This is the same failure shape as the S63 wrong-variable
case at lower stakes: a true verdict wearing the wrong provenance.

## Bundle 4 — Archive counts + TEST-03 + CDM: TEST-03's "kill" is MANUFACTURED; "3,308" is unreproducible

| statistic | primary source | verdict | notes |
|---|---|---|---|
| "3,308 adversarial sessions" (~15 carriers incl. landing) | S616:161 grand table, lineage S582 (~3,266) → S615 (~3,302) → S616 (~3,308) | **ASSERTED-ONLY** | fresh count: **650** SessionNNN files in Research/ (1,499 .md total); the dominant term (2,671 chemistry sessions) has **no per-session files anywhere** and the chemistry track's own final assessment says **2,685**; the S615/S616 grand tables' rows sum to **~2,920/2,926**, not their stated ~3,302/3,308 — the total column never equals its own rows |
| 9/9 demotion base rate | 6 enumerated in two explorer findings + 3 in the 07-03 top-3 sweep, each with per-claim writeups | WALKS⚠ | membership caveat: the two enumerations of "the 6" disagree on 2 members (union = 8 claims; "9/9" could as honestly be "11/11"); direction unaffected — everything audited demoted |
| 47 contributions vs canonical ~30 (57% overcount) | S634 (canonical = S582 inventory = 30); 47 walks to S615 | WALKS | trivially stale vs archive's last word (S616 says 48); overcount framing is the honest one |
| TEST-03 "pre-registered kill R² ≥ 0.20, fired" (~12 pages) | catalog TEST-08 + S377 + S381 + S639 — see below | **DRIFT (manufactured refutation)** | see next section |
| σ_int = 0.086, z = +0.5, N = 677 (S610) | S610 tables incl. sensitivity range +0.5→+64 and S606 retraction | WALKS | model propagation — the 07-03 inversion fix reached every checked carrier; one residual: cdm-discrimination:23 still says "pre-registered (R² > 0.20)", inheriting the TEST-03 error |

### The TEST-03 catch: a second manufactured refutation (verified against primaries first-hand)

The site's verdict on ~12 pages — "TEST-03 Failed: environment explains only R² = 0.14 of RAR
scatter, below the pre-registered kill criterion R² ≥ 0.20 (Session 616, p = 5×10⁻⁶,
N = 14,585)" — decomposes, walked to primaries, into five independent errors:

1. **0.20 was never a kill criterion.** `Research/EXPERIMENTAL_TEST_CATALOG.md` TEST-08:
   "Expected: Environment explains >20% of RAR scatter. **Falsification: Environment
   correlation < 0.3 (r² < 0.09)**." The site promoted the *success expectation* to a
   *kill bar*. By the actually-registered threshold, R² = 0.138 **passes** (0.138 > 0.09).
2. **Not pre-registered.** The catalog is dated 2026-02-20; the measurement (S377) is
   2026-02-05 — registered 15 days *after* the measurement.
3. **Wrong variable.** S377's R² = 0.138 is the **Hubble type (morphology)** term in a
   confound regression; S381 adjudicated the effect as *structure, not environment*
   (5–1 evidence score). The registered environment-catalog correlation (cluster/field/void)
   appears never to have been run at all.
4. **Wrong sample.** S377's F(1,164) ⇒ N ≈ 171 SPARC galaxies. The site's N = 14,585
   belongs to S591's ALFALFA BTFR predictor — an unrelated analysis. Arithmetic exposes the
   splice: p = 5×10⁻⁶ at N = 14,585 implies r ≈ 0.04 (R² ≈ 0.002), mutually impossible with
   R² = 0.14 at that N; at the real N ≈ 171 the numbers cohere (r ≈ 0.33).
5. **Wrong session.** "Session #616 found R² = 0.14" (key-claims:468) is false — S616 is the
   superconductivity η audit; the site's "Registered: Session 616" is a mangled reading of
   the catalog header "After 616 core sessions." Archive S639 (2026-04-30) already traced
   the site's 0.14 and found it traceable only *back to the site itself*; S639 and S381 are
   both uncited on the site.

**Honest TEST-03 status**: not "Failed — kill fired" but "**never run as registered** — the
reported kill conflates a morphology statistic (real, R²=0.138, N≈171, structure-not-
environment per S381) with an environment test that has no archive execution; the registered
falsification threshold (r² < 0.09) would not have fired on the conflated number anyway."
Same failure class as S63's "0.64 also rejected": an over-refutation manufactured in the
compilation layer, surviving 4+ months because statistics *against* the framework get the
least scrutiny. This is the second instance; the pattern is now confirmed, not anecdotal.

## Bundle 5 — Fresh 2026-07-08 inscriptions: ALL REGENERATE (zero new drift)

The highest-scrutiny bundle: numbers inscribed this morning. All clean.

**S63 statistics as shipped** (carriers: consciousness-demo, consciousness-threshold,
key-claims):

| statistic | primary source | recomputed | verdict |
|---|---|---|---|
| salience_total mean 0.640 ± 0.018, n=8 | `gnosis-research/thor_session_63_validation_results.json` | 0.6400662, SD(ddof=0) = 0.01835 | REGENERATES |
| t = 20.19, p ≈ 1.8×10⁻⁷ (vs 0.50) | same JSON, recomputed from the 8 raw instance means | t = 20.189686, p = 1.83×10⁻⁷ (scipy) | REGENERATES |
| φ⁻¹ = 0.618 excluded, p = 0.0155 | 07-07 explorer finding, recomputed from raw means | t = 3.181, p = 0.01548 | REGENERATES |
| 2/3 excluded, p = 0.0064 | same | t = −3.834, p = 0.006422 | REGENERATES |

Nuance inherited from source (not site drift): "±0.018" is the ddof=0 SD across the 8
instance means — not the SEM (0.0069). A reader treating ±0.018 as SEM would back-compute
t ≈ 7.8, not 20.19. Future carriers should say "SD across instances."

**Galaxy plotter formulas (commit 29d007f)**: code matches the on-page disclosure exactly;
a₀ conversion 3702.8 (km/s)²/kpc and G = 4.301×10⁻⁶ correct (no unit errors); hand-check at
V=150, r=10 kpc gives v_MOND = 149.3 km/s vs observed 150 ✓; legend "max C ~10⁻³"
regenerates per-galaxy (DDO 154: 7.8×10⁻⁴; NGC 2403: 2.0×10⁻³; NGC 3198: 1.65×10⁻³;
UGC 128: 1.5×10⁻⁴; NGC 7331: 1.2×10⁻³). The open "A=47 vs 62.8" validation ask is answered:
62.8 = 1/(G·a₀) (theoretical deep-MOND normalization, recomputed 62.79); 47 = McGaugh 2011
empirical BTFR fit for the V_flat velocity definition — the definition the plotter uses, so
47 is the right coded choice. Consequence: the green curve's asymptote is (G·47·a₀)^¼·V =
0.93·V_flat — the ~7% flattening deficit is the empirical-vs-theoretical A gap, not noise
(inside the disclosed ~10% toy-model language). Display nit: UGC 128's max C renders as
"0.000" via `toFixed(3)`.

## Implications for the Site

1. **The failure mode has a sign.** Four citation-walk campaigns (TEST-04a, CDM inversion,
   S63, now TEST-03 + wide-binary label) have found six provenance breaks — and every single
   one over-refutes or over-closes: the site claiming to have failed harder than the archive
   supports. Zero walks have found the opposite drift (site claiming success the archive
   lacks). The audits-hunt-overclaims bias is real and directional: on a site whose brand is
   self-criticism, *self-refutations are the unearned claims*. The citation-walk rule
   ("every statistic walks to a primary file") must apply hardest to the failure ledger.
2. **The physics layer is now demonstrably clean.** Every CHSH, RAR, DESI, LIV number
   regenerates or walks — most from committed scripts with fixed seeds. After the P0s below
   are fixed, /research-philosophy can honestly carry the topic's proposed one-liner, scoped:
   "every *physics* statistic on this site regenerates from a committed primary source."
3. **The consciousness-fix discipline worked.** Yesterday's fabrication correction was
   inscribed with zero new drift — all four S63 numbers and the entire plotter formula block
   regenerate exactly. The provenance-walk-before-inscription rule demonstrably prevents the
   failure it was designed for.

## Action: Maintainer

**P0 — TEST-03 verdict rewrite (~12 pages).** "Failed — Kill Criterion Triggered (R² = 0.14
< 0.20)" must become "Never Run as Registered — Metric Conflation" (or similar honest badge):
- The R² = 0.138 is S377's **morphology** term (N ≈ 171 SPARC; S381: structure, not
  environment); the registered environment-catalog test has no archive execution.
- The registered falsification threshold was **r² < 0.09** (catalog TEST-08), not 0.20 —
  and it postdates the measurement by 15 days, so "pre-registered" must go site-wide.
- Delete "Session #616 found R² = 0.14" (key-claims:468) and the p = 5×10⁻⁶ / N = 14,585
  splice (galaxy-rotation:149 — impossible pair: that p at that N implies R² ≈ 0.002).
- Cite S377, S381, S639 at point of claim. Carriers found: cosmology-predictions,
  galaxy-rotation, honest-assessment, key-claims, rar-scatter, research-philosophy,
  cdm-discrimination:23, tier-1-existing, test-catalog, why-synchronism, mond-comparator,
  prediction-tracker, galaxy-plotter:228.
- Note: /rar-scatter's badge was set to `failed` on 07-04 on the same conflated basis —
  needs the same rewrite.
**P0 — "3,308 sessions" (~15 carriers incl. landing).** Either recount from primary artifacts
and state the countable number (650 session files; chemistry track's own total 2,685), or
carry it as "~3,300 (self-reported cumulative total; component tables sum to ~2,926; not
independently reproducible)." A headline count whose source tables don't sum to it should not
lead the landing page unqualified.
**P1 — wide-binary label fix.** Replace "80× below Gaia DR3 systematics" with "~80× below the
Gaia DR3 detection reach (Hernandez 2023 single-bin statistical floor, σ(γ_g) ≈ 0.30)" and
flag the 0.05% floor as a calibrated anchor (script input), not an independent prediction.
Carriers: wide-binaries (×4), test-catalog:188, tier-1-existing:267, what-synchronism-is-not
(×3). The self-eliminating-or-tie conclusion survives; its stated basis doesn't.
**P2 — small fixes.** galaxy-plotter:235: 1.7 dex is a ρ_crit-free galaxy-vs-Coma computation
(don't attribute it to "a single global ρ_crit"), add the model-sensitivity caveat (core
re-derivation: 1.1 dex) that /for-researchers already carries. "±0.018" on the three S63
carriers → "SD across the 8 instances" (SEM is 0.0069; a reader back-computing t from ±0.018
as SEM gets 7.8, not 20.19). 47 → 48 or "47–48" per S616. UGC 128 max-C "0.000" display
(toFixed → exponent). 9/9 enumeration: reconcile the two membership lists (union = 8 ⇒
"11/11") or cite one canonical list.

## Open Threads

- **Is the over-refutation bias a general law of self-critical compilation layers?** Six
  breaks, six over-refutations, zero over-claims. This is a sharper, *directional* version of
  the A2ACW monotone-closure result and may be the site's most transferable methodological
  finding yet: an honesty-branded corpus manufactures failures the way a hype-branded corpus
  manufactures successes. Worth a dedicated writeup against the A2ACW null.
- The registered TEST-08 environment-catalog correlation (cluster/field/void on SPARC) has
  never actually been run. It is runnable with existing public data — the rare case where
  the honest fix is an *execution*, not a wording change.
- The "effective N" behind ΔBIC ≥ +33 is an eyeballed assumption; an actual intra-galaxy
  autocorrelation analysis would put the conservative RAR number on the same footing as the
  rest of the now-clean physics layer.
- Bundle agents flagged pre-existing dirty files (AGENTS.md, CLAUDE.md) in both repos —
  harness-level, not from this audit.
