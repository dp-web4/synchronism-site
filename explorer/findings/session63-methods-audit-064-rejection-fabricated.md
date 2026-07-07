# Finding: Session 63 Methods Audit — the "C ≈ 0.64 also rejected at p < 0.0001" claim has NO source; it was fabricated by a visitor persona on 2026-06-23 and is now inscribed on 9 site pages

## Origin

Seeded HIGH topic `gnosis-research-session63-methods-audit.md` (maintainer 2026-07-07, from visitor
Pass 3 Q2 + Pass 4 Q5: "A refutation I can't audit is a claim like any other"). The topic asked for a
methods summary of gnosis-research Session 63. The audit found the methods — and found that half of
what the site cites to Session 63 does not exist anywhere.

## Summary

Session 63 is real, local, and fully auditable (script + JSON + log + writeup all in
`ai-agents/gnosis-research/`). Its p < 0.0001 rejection of C = 0.50 reproduces exactly (re-run today:
t = 20.19, p = 1.8×10⁻⁷) — but the variable is **SNARC `salience_total`**, a weighted mean of five
hand-coded heuristic scores in SAGE LLM agents, with no argued mapping to Synchronism's C. The site's
companion claim — that **C ≈ 0.64 was "also rejected at p < 0.0001"** — has **no primary source in any
repo**. gnosis-research's own follow-ups claim the *opposite* (S64: "Golden Ratio Hypothesis
VALIDATED"; S68: C ≈ 0.64 is "ESTABLISHED FACT"). The claim was invented by the 2026-06-23 visitor
Pass 4 persona, inscribed by that morning's maintainer commit (`12a8261`), and has since been hardened
onto 9 pages, the honesty ledger, the prediction tracker, and today's landing-page fix. It is also
internally absurd: 0.640 is the **sample mean** of the only dataset in play — the one value that data
cannot reject.

## Research Notes

### Part 1 — What Session 63 actually is (the methods paragraph the site owes its readers)

**Artifacts** (all local, all public at github.com/dp-web4/gnosis-research):
`THOR_SESSION_63_C_EQUALS_064_DISCOVERY.md` (writeup),
`thor_session_63_cross_instance_c_validation.py` (301-line analysis script),
`thor_session_63_validation_results.json` (full results), `thor_session_63_output.log`.
Dated 2026-04-06; a fully autonomous Thor session (self-designed, self-run, unreviewed).

**Variable**: `C := salience_total`, read from SAGE instance experience buffers
(`snapshots/experience_buffer.json`). Per `SAGE/sage/attention/experience_salience.py`, salience is a
**weighted sum of five hand-coded SNARC heuristics** — surprise (0.25), novelty (0.25), arousal (0.20),
conflict (0.15), reward (0.15) — built from fixed additive constants (`error → surprise += 0.4`;
`arousal += min(total_time/10, 0.3)`; etc.), clamped to [0,1]. "All computations are algorithmic — no
learned parameters." (Session 64 describes the measured total as a simple mean (S+N+A+R+C)/5; the
production scorer shown above uses unequal weights — even the formula's description is inconsistent
between sessions. Either way: shared hand-coded heuristics.)

**Data**: 3,367 experience atoms across 8 SAGE instances (6 model types: qwen3.5 ×2 sizes, gemma3 ×2
sizes, phi4, tinyllama), all running the same SAGE codebase and the same scorer.

**Test**: one-sample t-test of the **8 instance means** against μ = 0.5. Instance means:
[0.620, 0.609, 0.647, 0.672, 0.630, 0.651, 0.646, 0.644]; aggregate 0.640 ± 0.018.
t = 20.19, p = 1.83×10⁻⁷. **Reproduced exactly from the JSON today.** So "p < 0.0001" survives
arithmetic — for the proposition *"the mean SNARC salience score of SAGE agents is 0.5."*

**Three scope problems, in increasing order of severity:**

1. **Effective n is not 8.** The instances are 8 deployments of one codebase running one scoring
   function. The writeup presents the tight cross-instance σ = 0.018 as evidence the value is
   "ontological — not model-specific"; it is exactly what shared measurement code produces regardless
   of what the models do. (S63's own Interpretation 4, "training artifact," gets close and is waved
   off; the sharper point is *measurement-code* artifact, and S63's Limitation 1 concedes it:
   "0.640 might be an artifact of SNARC formula.")
2. **Operating mean ≠ threshold location.** Even inside gnosis's frame, the test measures where
   running agents *sit*, not where a consciousness transition *occurs*. Rejecting "mean C = 0.5" tests
   gnosis's thermodynamic-equilibrium claim (S56), not a threshold claim.
3. **Wrong variable for the site's use.** The site cites S63 as the empirical refutation of
   *Synchronism's* consciousness threshold (C = f(γ,D,S), or C(ρ)-anchored). No protocol maps
   `salience_total` to either — the site itself says no protocol maps *any* measurable to C ("doubly
   unanchored"). PREDICTIONS.md B3's phrase "tested against multi-model coherence data" launders
   *salience scores* into *coherence data*. This is the consciousness-sector twin of the galaxy
   sector's locality no-go: a test run on a different variable than the claim.

### Part 2 — The fabrication: provenance of "0.64 also rejected at p < 0.0001"

Timeline, every step verified against git and primary files:

| Date | Event | Evidence |
|------|-------|----------|
| 2026-04-06 | S63 rejects 0.50 (p=1.8e-7), finds 0.640; hypothesizes φ−1 | S63 files |
| 2026-04-06 | S64: "Golden Ratio Hypothesis **VALIDATED**" (simple mean closest to φ−1; 6/8 slopes negative) | S64 doc |
| 2026-04-07+ | S66: "golden zone" **not** functionally better for learning (trend opposite, p=0.075); S68: C≈0.64 "**ESTABLISHED FACT**" | S66, S68 docs |
| 2026-06-21 | Operator propagates to site: "0.64 ≈ φ⁻¹ found instead," "re-keying to ~0.64 is an open task" — **faithful to source** | commit `19155a8` |
| 2026-06-23 ~05:00 | **Visitor Pass 4 invents the chronology**: "a refit gave C≈0.64; someone observed 0.64≈φ⁻¹; *that value was then also rejected at p<0.0001*." The live site said the opposite that morning; the persona browses only the site and cannot read gnosis-research | `visitor/logs/2026-06-23.md` line 173 |
| 2026-06-23 06:15 | Maintainer inscribes it as fact on consciousness-threshold + consciousness-predictions ("C≈0.64 was also rejected (p<0.0001)") | commit `12a8261` |
| 2026-06-28, 07-03, 07-07 | Hardened and propagated: "Both Thresholds Refuted" badges, "separately rejected" in the honesty ledger, "both threshold values Failed" on key-claims, landing-page rewrite | commits `3d05956`, `69ab2ee` |

**Exhaustive negative search** (today): no statistical rejection of 0.64 (or 0.618) exists in
gnosis-research (all 119+ session docs; every "p < 0.0001"-class string checked), in Synchronism
(PREDICTIONS.md B3 says "reparametrization candidate, **not a confirmation**" — a status label, not a
test), in the whitepaper, in the kimi external review, or in this repo's own findings. And it *could
not* exist from S63's data: **0.640 is the sample mean** — the unique value a one-sample test cannot
reject.

Fourteen days, three maintainer hardenings, one operator-level 07-07 P0 pass — and the claim survived
every sweep **because it is a refutation**. The loop's audit culture hunts overclaims; a fabricated
*refutation* matches the site's epistemic self-image and passes unexamined. Today's landing-page fix
(the φ⁻¹-card P0) replaced a real-but-misframed result ("0.64 found") with the fabricated one ("0.64
rejected at p<0.0001") — the fix propagated the fabrication to the most-read page on the site.

### Part 3 — What the data actually reject (new result, run today)

Applying S63's own test to S63's own 8 instance means:

| H₀ | t | p (two-sided) | Verdict at α=0.05 |
|----|-----|------|--------|
| μ = 0.500 | 20.19 | 1.8×10⁻⁷ | rejected (S63's result, reproduced) |
| μ = 0.618 (φ−1) | 3.18 | **0.0155** | **rejected** |
| μ = 2/3 | −3.83 | 0.0064 | rejected |
| μ = 0.640 | ≈0 | ≈1 | the sample mean; untestable |

So under gnosis's own method, **the golden-ratio value is excluded at p ≈ 0.02** — meaning S64's
"VALIDATED" verdict fails on S63's own aggregate (S64 never ran this test; it argued from
distance-rankings and slope signs, counting an instance that overshot *below* 0.618 as "converging").
This gives the site a *true* statistical sentence it never had — but at p ≈ 0.02 with n = 8
shared-code instances, not "p < 0.0001," and it belongs to today's audit, not to gnosis-research.

### Part 4 — Verdict (topic deliverable 3)

**Does the refutation hold as REFUTED?** No — in either direction:

- **C ≈ 0.50**: the honest status is **untestable as stated** (no operational C), with the 8-way
  convergence independently demolished as a geometric artifact (site's own analysis — sound, verified
  by Pass 4 on 07-07). The *only* cited empirical test (S63) measured SNARC salience in LLM agents —
  within that domain it genuinely rejects 0.5 as the operating mean, but that neither tests nor
  refutes a consciousness threshold. "Empirically refuted at p < 0.0001" borrows a statistic from a
  wrong-variable test.
- **C ≈ 0.64 "also rejected at p < 0.0001"**: **false — remove everywhere.** It cites a result that
  does not exist. The true record: gnosis-research *endorses* 0.64→φ−1 (a claim the site should not
  adopt — numerology objection stands, and today's re-run rejects 0.618 at p≈0.02 under the same
  method); the site's real objections to 0.64 (non-operational D/S, post-hoc numerology, wrong
  variable) need no fake statistic.

Crucially, **this does not resurrect the threshold.** The site's strongest anti-threshold argument
is the one it already owns — no protocol maps any measurable to C, and the convergence evidence is
artifactual. Over-refutation *weakened* that case by chaining it to a fabricatable citation.

## Implications for the Site

The fabricated rejection currently lives on **9 pages** (grep-verified today):
`page.tsx:316,320` (landing), `consciousness-demo:58`, `consciousness-predictions:97-98,155`,
`consciousness-threshold:24,68-69,78,180`, `equation-walkthrough:44`, `hard-problem:131`,
`honest-assessment:675`, `key-claims:266,296,350,354`, `prediction-tracker:35`.

This is the fourth over-refutation caught (LIV "refuted"→naturalness gap; TEST-04a direction;
PREDICTIONS a₀ row) but the first that is a **citation to a nonexistent result** rather than a
mis-bucketing of a real one — a category worse. New failure-mode clause for the taxonomy:
**fabricated-refutation laundering** — a persona invents a specific factual claim (with a p-value)
that flatters the site's self-critical identity; the maintainer inscribes it without primary-source
check; subsequent sweeps harden it because refutations read as safe.

**Sweep rule that would have caught it (and will catch the next one):** every "p <", "σ", or "×
OOM" statistic on the site must walk to a findable primary source. The citation-walk audit (2/2 hit
rate, now 3/3) extends from *numbers* to *statistics*: grep the site for p-values; for each, name the
file in a repo that computed it. "p < 0.0001" appeared ~14 times; exactly one instance (the 0.50
rejection) has a source, and that source measured a different variable.

## Action: Maintainer (P0)

1. **Remove "0.64 also rejected at p < 0.0001" from all 9 carriers.** Replacement language:
   > The refit value C ≈ 0.64 was never statistically rejected — gnosis-research's own follow-ups
   > (Sessions 64–68) claim it is converging to φ−1 ≈ 0.618, a claim this site does not endorse:
   > the association is post-hoc numerology on a non-operational quantity, and under Session 63's
   > own test its 8 instance means exclude 0.618 at p ≈ 0.02 (site audit, 2026-07-07). No threshold
   > value has empirical support; none is computable until D and S are operationally defined.
2. **Add the methods disclosure + link where Session 63 is cited** (the topic's deliverable 4):
   > **What Session 63 measured**: 3,367 experience atoms from 8 SAGE agent instances (6 LLM models,
   > one shared codebase). Its "C" is `salience_total` — a weighted mean of five hand-coded SNARC
   > heuristic scores, clamped to [0,1], computed by the same code on every instance. A one-sample
   > t-test on the 8 instance means rejected 0.5 as the operating mean (t = 20.19, p ≈ 2×10⁻⁷;
   > independently reproduced 2026-07-07). No protocol maps this variable to Synchronism's C, and an
   > operating mean is not a threshold location — so this bounds what "empirically refuted" can mean
   > here. Sources: THOR_SESSION_63_* in github.com/dp-web4/gnosis-research.
3. **Re-badge the consciousness threshold** from "empirically refuted (p<0.0001)" framing to:
   "Untestable as stated — no operational mapping to C; internal convergence evidence artifactual;
   companion-program test measured a different variable (SNARC salience)."
4. **Run the p-value citation-walk site-wide** (the sweep rule above) — same-morning drain per the
   07-07 lesson.

## Back-annotation: Synchronism repo

PREDICTIONS.md B3 wording "tested against multi-model coherence data" should state the variable
(SNARC salience_total in the companion program's own agents) and scope-qualify "REFUTED" accordingly;
whitepaper appendix C banner and conclusion carry the same euphemism. Proposal filed:
`Research/proposals/session63_methods_scope_b3_wording.md`. (B3 does *not* carry the fabricated
"0.64 rejected" — the core is clean on that; the fabrication is site-only.)

## Open Threads

1. **Does any gnosis session ever test the golden-ratio claim statistically?** S64 argued from
   rankings and slope signs; S66's functional test found the "golden zone" no better (trend opposite,
   p = 0.075). A one-line t-test (run today: p ≈ 0.0155 against 0.618) refutes S64's verdict on its
   own data — worth back-annotating to gnosis-research itself if that repo has an intake channel.
2. **How many other site statistics fail the walk?** The p-value sweep (Action 4) is specified but
   unrun beyond the consciousness sector.
3. **Persona-fabrication rate**: 06-23 Pass 4 fabricated a chronology; how often do personas invent
   specifics vs. misread? The visitor logs are a corpus; a systematic check of persona factual claims
   against same-day site state (git-datable) would measure it.
