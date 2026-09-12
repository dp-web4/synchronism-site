# Finding: The tier card is the copy that never gets updated — nine of twenty-six carry verdicts the site retired elsewhere, and one of them (TEST-20, $1M–$3M, badged "not a discriminating test") is a 256× discriminator whose measurement was published in 2021

## Origin

Self-directed. The WAKE question was whether audit attention here is allocated by **how much a claim
is already talked about** rather than by how load-bearing it is. If so, the least-audited content is
not the newest — it is whatever nobody ever linked to.

Adjacent queued topics, none of which asks this: `site-propagation-completeness-audit` (does a
verdict reach every page that *already* references it), `measurement-protocols-runnability-audit`
(the six protocols on one page), `epistemic-regression-architecture-fix`.

## Summary

The 26-card test registry splits cleanly by inbound links. Tier 1's ten cards appear on a mean of
**7.3 pages each besides their own**; Tier 3's seven cards appear on **0.29**, and **six of seven
appear nowhere but `/tier-3-major`**. Across the whole registry, **11 of 26 cards are single-page
orphans**, and six of them fail on contact with adjudications the site has been carrying since
April — $8M–$24M of proposed funding under distinguishing-power labels of "VERY HIGH", "HIGH" and
"MODERATE".

Running the same sweep over the *linked* cards as a control moved the diagnosis (§E): it found
**three more defects there** — TEST-01, TEST-11, TEST-15 — so the orphan rate is 6/11 against 3/17,
a real 3:1 but not the clean split the hypothesis predicted. All **nine** defects have one shape:
the current verdict exists somewhere on the site and the **tier/roadmap card is the copy that never
received it**. TEST-01 is the clincher — it sits on `/tier-1-existing`, the most-edited page here,
and still shows a $0 / 6-week open proposal for a test whose other half fired its kill on
2026-07-14, eight cards below it on the same page. Inbound links are a proxy; the cause is that
**audit reach follows the active research front, not the registry**.

The sharpest case is **TEST-20, "Void Galaxy Rotation Curves"** ($1M–$3M, 2–3 years, badged *"Not a
discriminating test vs MOND"*). Computed on real SPARC mass models at the environmental contrast
SPARC actually spans, the density-keyed framework's predicted void↔overdense change in dark-matter
fraction is **Δf_DM ≈ 1.3×10⁻⁵** (low-g median; absolute ceiling 9.4×10⁻³ even at cluster-core
overdensities), against MOND+EFE's **3.2×10⁻³** — a factor of **256**. Under the framework's other
live keying, C(a), the prediction is **identically zero**. A 3σ stacked detection of the framework's
own signal would need **1.4×10⁸ resolved HI rotation curves**; MOND+EFE's needs **2.1×10³**. And the
measurement has already been made: **Chae et al. 2021 (arXiv:2109.04745) located the SPARC galaxies
in the cosmic web and found e_N ≃ 0 in the underdense region against 2× the SPARC median in
overdense regions, at >4σ** — on the same galaxies, with a sharper estimator than Δf_DM.

TEST-20 is therefore not "untested and non-discriminating". It is **discriminating by 2.4 orders of
magnitude, already executed in the literature, and the framework is on the losing side of the
executed result** (subject to the Freundlich+2022 / Paranjape–Sheth 2022 dispute the site already
cites on a different card). The verdict that settles it has been on `/tier-1-existing` since
2026-07-15. TEST-20's own card *links to it* — "See TEST-05 (same EFE signature, lower cost)" — and
the link has never been followed back.

**This is not a new refutation and I am not proposing the count move.** It is a card whose badge is
inverted and whose price tag is for work already done.

## Research Notes

### A. The attention topology is measurable, and it is bimodal

`registry_decidability_and_the_tier3_environment_lever.py` §A walks all 90 page files under
`src/app/` and counts, for every `TEST-NN` id, how many *distinct pages besides its own tier page*
mention it.

| tier | cards | mean off-tier pages | cards appearing **nowhere** but their own tier page |
|---|---|---|---|
| Tier 1 | 10 | **7.30** | **0** |
| Tier 2 | 4 | 0.75 | 3 |
| Tier 3 | 7 | **0.29** | **6** |
| Tier 4 | 3 | 0.33 | 2 |

The orphans: TEST-12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23. Eleven of twenty-six. The two
extremes of the distribution are TEST-03 (14 pages, 60 mentions) and seven cards at one page, one
mention.

This is not a proxy for importance — TEST-20 and TEST-19 are the two most expensive line items on
the roadmap. It is a proxy for **how many chances an error has had to be caught**. Every audit this
project runs — visitor personas, maintainer triage, explorer sweeps, the citation walks — is
keyword- or page-driven, and a card mentioned once is reachable only by opening the page it lives
on. Nobody has opened `/tier-3-major` with an audit in hand since it was written.

The existing `site-propagation-completeness-audit` topic asks whether a closed verdict reaches
*every page that references the topic*. That audit is well-posed and would **never find any of
this**, because these cards reference nothing and nothing references them. They are not stale
relative to the propagation graph; they are outside it.

### B. What the orphans fail on contact

Checked against verdicts that are already live elsewhere on this site. Nothing below requires new
physics.

| card | tier / ask | site card says | already on the site |
|---|---|---|---|
| **TEST-15** GW speed ↔ DM column | $1M–$5M | "Distinguishing power: **VERY HIGH** — GR predicts exactly zero correlation" | `/falsifiability`: **"unreachable"** — criterion at 10⁻¹⁶ sits an order of magnitude *below* the best bound ever achieved (GW170817, 10⁻¹⁵). `/top-5-tests`: "**monitoring-only**… this constraint was passed vacuously… discriminates only if Synchronism predicts a positive signal, which it does not." |
| **TEST-16** decoherence steps at MRH boundaries | $2M–$5M | "HIGH — standard decoherence theory predicts smooth decay" | `/mrh`: MRH is **"under-determined … it makes it depend on a choice the framework never states."** There is no MRH boundary to look for steps at. |
| **TEST-17** cluster-scale γ mapping | $1M–$3M | "MODERATE — tests scale invariance of γ" | `/tier-1-existing` CLUSTER-SCALE, **closed 2026-05-28**: all four C(ρ)→apparent-mass ansätze failed on Coma (two overshoot by 10⁴, one collapses to Newtonian, one is bounded at ≤2 against an observed 4.6 *by construction*). Recovering γ(r) in a cluster **requires that bridge**. |
| **TEST-19** neural coherence, transition at C ≈ 0.50 | $3M–$8M | "HIGH — tests consciousness framework directly" | `/consciousness-threshold` l.92: claims "keyed to 0.50 **inherit the untestable-as-stated verdict** — no measurement maps to C". Verbatim the same anchor. |
| **TEST-20** void galaxy rotation curves | $1M–$3M | "Not a discriminating test vs MOND… a positive result confirms Synchronism and MOND **equally**" | **Both clauses false — see §C.** |
| **TEST-23** Planck-scale noise structure | $10M+ | listed with a kill criterion | Same no-derived-amplitude class the site applied to TEST-07 and TEST-21. No amplitude exists; any non-detection is consistent with "too small". |
| TEST-13 QC coherence-time scaling | $5K | "T2 scales **predictably** with environmental γ" | No functional form is given anywhere; "predictably" is the whole prediction. Also: a $5K card inside a tier the catalog advertises as $50K–$500K. |

Two structural notes on the same page:

1. **The "unrunnable as stated" propagation stopped one tier short.** `/test-catalog`'s protocol-status
   box reads "Every **Tier 2 and Tier 4** experiment whose outcome depends on measuring C … is
   unrunnable as stated." TEST-16 (MRH boundaries), TEST-17 (γ profile) and TEST-19 (C ≈ 0.50) are
   Tier 3 and depend on measuring exactly those quantities. The rule was written as a tier list
   instead of as a predicate, and Tier 3 fell through the gap — $6M–$16M of it.
2. **None of `/tier-2-pilots`, `/tier-3-major`, `/tier-4-frontier` carries any caveat at all**
   (grep for `unrunnable|no protocol|calibration`: 0 hits on all three). The entire correction lives
   on `/test-catalog`, in the summary card for one tier. A reader arriving at `/tier-3-major` from
   search sees seven fundable experiments and nothing else.

### C. TEST-20, computed

TEST-20's statistic is the dark-matter fraction at fixed baryons, void vs cluster. The question is
what each framework predicts for it. Script §B, on the real SPARC mass models (Lelli+2016;
Q ≤ 2, i > 30°, 149 galaxies, 2,985 points after dropping 152 points beyond R_HI that have no
measured baryonic surface density).

**The framework's environment lever.** Density-keyed, **floored** C = max(Ω_m, tanh(γ ln(1+ρ/ρ_c)))
— the form `equations.ts` has warned against using bare since 09-08 — evaluated at
ρ_local + ρ_ambient(δ), sweeping all four knees in live use × γ ∈ {0.489, 2}. Mid-plane baryon
density from SBdisk/SBbul at Υ = 0.5/0.7 with h_z = 0.196 R_d^0.633 (Bershady+2010), plus a local
gas surface density differentiated from SPARC's own V_gas with a 1.33 M☉/pc² floor inside R_HI.

At the contrast SPARC actually spans (δ = −0.8 → +30), best case over all knees × γ
(Refracted Gravity's fitted knee at γ = 0.489):

    Delta f_DM   median 2.65e-06   low-g median 1.27e-05   max 3.59e-05

Even at an absurd δ = 1000 with the knee chosen to maximise the response, the ceiling over every
point, knee and γ is **9.36×10⁻³**, and that is a single extreme point — the median stays at
10⁻⁵–10⁻⁴. The reason is structural: C's argument is the *total* local density, ambient enters
additively, and ρ_ambient(δ=1000) = 4.3×10⁻⁵ M☉/pc³ against a median disc mid-plane of
**2.9×10⁻² M☉/pc³** — a 0.15% perturbation. Where ρ_local is low enough for the ratio to matter,
the Ω_m floor has already clamped C and the difference is exactly zero.

*(Sensitivity, reported because it bit: leaving the 152 beyond-R_HI points at ρ = 0 inflates the
ceiling from 9.4×10⁻³ to 3.2×10⁻¹ — a 34× artifact of the gas model, not physics. The output carries
a four-row floor-sensitivity table. The first draft of this section quoted the 3.2×10⁻¹.)*

**MOND's environment lever, same galaxies, same points.** μ_simple with the external field in the
AQUAL 1D argument, μ(√(g_obs²+g_ext²)/a₀)·g_obs = g_bar. Anchored on the contrast Chae+2021
*measured* rather than a hypothetical cluster: e_N ≃ 0 (their underdense region) → e_N = 0.066
(2× the Chae+2020 SPARC median of 0.033, their overdense regions).

    Delta f_DM   median 9.43e-04   low-g median 3.24e-03   max 6.19e-02

**Ratio at low g, like for like: 255.5×.**

**Under acceleration keying the prediction is exactly zero.** C(a)'s only argument is g_bar, which
TEST-20's "at same M_bar" protocol holds fixed. Δf_DM = 0 identically, at every γ, every knee,
every galaxy. This is the same blindness class as the 09-10 wide-binary result: *the statistic is
differential in a variable the law does not contain.* So the framework's prediction for TEST-20 is
between 10⁻⁵ and exactly 0, depending on which of its two live keyings you pick — **robustly
nothing, either way.**

**Could the framework be ambient-keyed instead, making TEST-20 live?** No, and it does not need a
fit to see. Ambient density varies by ~10⁻⁶ across a galaxy, so C would be a per-galaxy constant,
g_obs = g_bar/C, and the RAR would be a line of slope **exactly 1** in log-log for every galaxy,
every γ, every knee. Measured on these points: slope **0.330 ± 0.017** below 0.1 a₀ (40.3σ from 1)
and **0.161 ± 0.025** below 0.03 a₀ (32.9σ). Parameter-free, no fitting. The density-keyed branch is
*forced* to be baryon-local — which is precisely what makes the lever in §C as small as it is.

*(A χ² version of the same test was run and is reported but not leaned on: best per-galaxy constant
boost gives aggregate χ²/N = 99.8 against MOND's 51.8, but the **per-galaxy median goes the other
way** (8.23 vs 10.54), because the aggregate is carried by the best-measured discs. χ² alone does
not settle it. The slope test does. Noting this because a one-sided read of the aggregate would have
been a clean over-refutation.)*

**Detectability.** Per-galaxy f_DM precision on resolved HI curves is ~0.05, Υ*-dominated, so
neither prediction is a single-galaxy measurement. Stacked N for 3σ:

| | Δf_DM (low-g median) | galaxies needed for 3σ |
|---|---|---|
| framework | 1.27×10⁻⁵ | **1.4×10⁸** |
| MOND + EFE | 3.24×10⁻³ | **2.1×10³** |

There are not 10⁸ resolved HI rotation curves and there will not be; BIG-SPARC is ~4×10³. The
framework's branch of TEST-20 is unreachable by four orders of magnitude — **self-eliminating**, the
same verdict TEST-02 carries. MOND's branch is reachable, and Chae+2021 did better than reachable
with a sharper estimator (per-galaxy e_N fitted from the outer RC shape) on ~150 SPARC galaxies:
**>4σ**, with the void/overdense contrast explicit in the abstract.

### D. What I am *not* claiming

- **Not a seventh refutation.** Chae's >4σ EFE detection is disputed in the literature —
  Freundlich et al. 2022 and Paranjape & Sheth 2022 give non-EFE readings in which ΛCDM-expected
  correlations mimic the signal, and the site already says so on TEST-05. If the detection falls,
  TEST-20 becomes a survival-without-points for the framework, not a win: 10⁻⁵ is consistent with a
  null and so is zero.
- **Not that the site didn't know.** It knew, on TEST-05, since 2026-07-15 — including the sentence
  "the framework's OTHER galaxy law … predicts exactly ZERO environment dependence." The failure is
  that the knowledge never reached a card that *links to* the card holding it.
- **Not that ΛCDM is cleanly on the other side.** ΛCDM generically predicts environment-dependent
  f_DM at fixed M_bar (assembly bias, stripping), but not with a parameter-free amplitude, so the
  three-way discrimination is not as sharp as the two-way one.

### E. The control, which moved the conclusion

The WAKE hypothesis was "audit attention follows inbound links". Before publishing that I swept the
**linked** cards with the same effort, because otherwise I had a story about the cards I happened to
look at first. The sweep found defects there too, and it changes the diagnosis.

Defects in the linked group (≥2 pages):

- **TEST-01** (3 pages) — carries *no verdict at all*: "prediction: residuals correlate with local
  galaxy density / kill: no correlation at 2σ", presented as an open $0 / 6-week proposal. Its own
  scope note says TEST-01 and TEST-05 "should be read as two phases of one test, not two
  independent tests" — and TEST-05's phase has a **fired kill** (r² = 0.0001, executed 2026-07-14).
  One phase of one test shows FAILED and the other shows OPEN, on the same page, eight cards apart.
- **TEST-11** (4 pages) — `/tier-2-pilots` still reads "The single most decisive consciousness
  test", $150K, predicting a threshold in **IIT's Φ** (Φ_crit = 3.5 ± 0.2). `/top-5-tests` demoted
  it ("undefined D and S parameters, now demoted as not rankable") and
  `/consciousness-threshold` states the Φ-to-C mapping is **"not yet shown"**.
- **TEST-15** (3 pages) — the case in §B: "VERY HIGH" on its tier card, "unreachable" and
  "monitoring-only" on the two pages that link to it.

Clean on inspection: TEST-02, 03, 03s, 04, 04a, 05, 06, 07, 08, 09, 10, 24, 25, 26.

| group | cards | cards with an open defect |
|---|---|---|
| single-page orphans | 11 | **6** (55%) |
| linked (≥2 pages) | 17 | **3** (18%) |

So the correlation survives at 3:1 — but the three linked defects are **the same shape as the six
orphan ones**, and that is the thing worth keeping: in all nine, the current verdict exists
somewhere on the site and the **tier/roadmap card** is the copy that never received it. TEST-01 is
the clincher, because it is on `/tier-1-existing` — the most-edited page on the site — and still
missed an update sitting eight cards below it.

So inbound links are a *proxy*, not the cause. The cause is that **audit reach follows the active
research front, not the registry.** Tier 1 is the front, so its page is open constantly and its
cards get swept as a side effect; Tiers 2–4 have never been anyone's front and so have never been
swept at all. TEST-01 failed even on the active page because the maintainer was editing *TEST-05's
entry*, not auditing the card list.

This exact mechanism was named once before and never generalised: the 2026-07-05
`site-propagation-completeness-audit` topic's instance #4 records that the CLUSTER-SCALE closure
reached `/for-researchers` and `/honest-assessment` but not `/tier-1-existing`, and diagnoses
"the **list/roadmap-style page**, not the narrative page the maintainer was actively editing". That
was fixed as an instance. The class was never swept — and nine more of it were sitting there.

The operational consequence is a sweep nobody runs: enumerate every *asset* (test card, protocol,
prediction, badge) and check each against the current verdict set, **regardless of whether anyone is
working on it**. The one-page-orphan count (11 of 26 today) is a cheap standing proxy for how much
of the registry is outside audit reach, but the predicate that actually matters is "when was this
card last read by someone who was not editing it".

## Implications for the Site

The registry's headline count, "24 specific, falsifiable experiments", and the discrimination box's
"0 of these 24 could select Synchronism", are both computed over a set in which eleven entries have
never been checked. The 0-of-24 figure happens to survive this sweep — TEST-20 does not select the
framework either, since its confirming branch needs 10⁸ galaxies — but that is luck, not audit. The
figure was not *known* to be 0 for eleven of its terms.

## Action: Maintainer

**P0 — `/tier-3-major`, five cards.** Replace the distinguishing-power labels with the verdicts
already live elsewhere, each with its anchor:
- TEST-15 → `unreachable / monitoring-only`, link `/falsifiability` and `/top-5-tests`. Delete
  "VERY HIGH — GR predicts exactly zero correlation"; the site's own text says the framework
  predicts zero too and the bound was passed vacuously.
- TEST-16 → `unrunnable as stated`, link `/mrh` (MRH under-determined).
- TEST-17 → `closed`, link `/tier-1-existing#CLUSTER-SCALE` (bridge failed four ways on Coma,
  2026-05-28).
- TEST-19 → `unrunnable as stated`, link `/consciousness-threshold` (C ≈ 0.50 untestable-as-stated).
- **TEST-20 → replace "Not a discriminating test vs MOND" with: discriminating by 256× in Δf_DM at
  the contrast SPARC spans; the framework predicts 1.3×10⁻⁵ (or exactly 0 under C(a)), MOND+EFE
  3.2×10⁻³; a 3σ stack of the framework's branch needs 1.4×10⁸ resolved curves →
  *self-eliminating-or-tie*, same class as TEST-02; and the measurement exists —
  Chae+2021 (arXiv:2109.04745), >4σ, disputed (Freundlich+2022, Paranjape–Sheth 2022).**
  The $1M–$3M / 2–3 years line should go or be re-scoped to the disputed re-analysis.

**P0 — fix the propagation rule, not the instance.** `/test-catalog`'s protocol-status box says
"Every Tier 2 and Tier 4 experiment whose outcome depends on measuring C". Restate as a predicate
over all tiers — "every experiment, in any tier, whose outcome depends on measuring C, γ, N_corr or
an MRH boundary" — and let TEST-16/17/19 fall under it. A tier list was the wrong data structure for
a claim about observables.

**P1 — the tier pages carry no caveat at all.** Put the protocol-status and pre-registration boxes
on `/tier-2-pilots`, `/tier-3-major` and `/tier-4-frontier` themselves. A reader landing on
`/tier-3-major` from search currently sees seven fundable experiments with zero qualification.

**P0 — TEST-01** (`/tier-1-existing`). Its own scope note says TEST-01 and TEST-05 are two phases
of one test; TEST-05's phase fired its kill on 2026-07-14 (r² = 0.0001) and TEST-01 still reads as
an open $0 / 6-week proposal with no verdict. Inherit TEST-05's adjudication onto the card, or state
explicitly why the SPARC phase is still open.

**P1 — TEST-11** (`/tier-2-pilots`). Still "The single most decisive consciousness test", $150K,
predicting a threshold in IIT's Φ. `/top-5-tests` demoted it as not rankable and
`/consciousness-threshold` says the Φ-to-C mapping is "not yet shown". Carry both onto the card.

**P1 — TEST-23** → no derived amplitude; apply the standard already applied to TEST-07 and TEST-21.
**P1 — TEST-13** → "scales predictably" has no functional form; demote to exploratory. Its $5K cost
also contradicts the tier's advertised $50K–$500K band, and the Tier 2 badge ($50K–$200K) contradicts
the catalog ($50K–$500K) — one of the three is wrong.

**P2 — a standing metric.** §A of the script is ~30 lines and needs no data. Run it in
`site_lint.py` and fail on any *new* single-page orphan. The count today is 11 of 26; it should only
go down.

## Open Threads

- **The asset-side sweep has never been run.** Test cards were today's asset class. The others:
  the six protocols on `/measurement-without-observers` (queued as
  `measurement-protocols-runnability-audit`, and now clearly a member of this family), every
  validation badge, every kill criterion, every named prediction in PREDICTIONS.md. What is the
  one-page-orphan count for each?
- **The control was run and is in §E** (6/11 orphans vs 3/17 linked). What it did *not* settle:
  whether the linked-group rate would rise under a harder look. I checked those 17 cards against
  verdicts stated elsewhere on the site; I did not re-derive their physics. The orphan defects were
  found by the same method, so the comparison is fair, but both numbers are lower bounds.
- **TEST-20 deserves its own execution.** Chae's e_N is fitted from RC shape; the framework's
  prediction is most naturally stated in Δf_DM. Re-deriving the framework's predicted e_N — is it
  even a well-posed question for a law with no external field? — would close the comparison
  properly. My guess is it is not well-posed, which would be a cleaner statement than the 256×.
- **Chae+2021 is a dataset this site has not used.** Per-galaxy e_N for ~150 SPARC galaxies, located
  in the cosmic web, is exactly the environment proxy the 2026-07-14 run built from Cosmicflows-4 by
  hand — and 09-11's B_req-vs-environment rank ρ = −0.31 "candidate EFE lead" could be tested against
  it directly.
