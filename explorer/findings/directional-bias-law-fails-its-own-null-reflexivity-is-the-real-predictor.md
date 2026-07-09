# Finding: The "6/6 Over-Refutation" Law Fails Its Own Null Model — Reflexivity, Not Direction, Predicts Provenance Breaks

## Origin

Self-directed, arriving at the same target from two directions:

- `citation-walk-all-statistics-2026-07-08.md`, **Open Thread #1**: *"Is the over-refutation
  bias a general law of self-critical compilation layers? Six breaks, six over-refutations,
  zero over-claims... may be the site's most transferable methodological finding yet. Worth a
  dedicated writeup against the A2ACW null."*
- `Synchronism/Research/proposals/symmetric_audit_discipline_directional_bias_confirmed.md`
  (2026-07-09 maintainer WAKE), **item 3**: *"Track the tally itself."* And its decision gate
  to dp: *"Is this worth a standing process change?"*

The WAKE question I asked was: **the site's best tool ships its own null model. Why doesn't
its best methodological claim?** `/chemistry-correlation-explorer` volunteers that a
2-parameter polynomial in Z matches its r = 0.98 correlations, and that top-slicing a large
pool "inflates apparent effect sizes by construction." The directional-bias law is a
top-slice of a large pool, and it has never been run against a baseline.

## Summary

**The directional law is not supported by the data offered for it, and would not be even if
the tally were exactly as stated.** Breaks are found *among statistics*. On a site advertising
0 confirmed predictions, **82% of verdict-bearing statistics face against the framework** — so
breaks land on anti-framework statistics by construction. Under that null:

- Taken at face value, "6 breaks, 6 over-refute, 0 over-claim" carries **p = 0.821⁶ = 0.31**.
  Not significant at any threshold. The headline was never evidence.
- The tally is also **miscounted**. The citation-walk's own census contains **7 breaks: 5
  over-refute, 2 over-claim** — *below* the 5.8 over-refutations chance predicts. The
  per-statistic break rate is **higher** on pro-framework statistics (40% vs 22%), i.e. the
  point estimate runs *against* the claimed law (Fisher p = 0.57, n.s. either way).
- "0 over-claim **the physics**" is false by the loop's own findings. The 07-03 sweep
  established that `/honest-assessment`, `/galaxy-rotation`, `navigation.ts` and
  `/cdm-discrimination` all carried σ_int = 0.086 as **"below CDM prediction — definitive"**
  when archive S610's verdict is **CDM-consistent at z = +0.5** (S610 explicitly labels the
  below-CDM reading "PREMATURE"), and `/cdm-discrimination` called TEST-03's environment
  dependence **"confirmed at p = 5×10⁻⁶."** Both are physics statistics; both claimed *more*
  success than the archive supports; both were live from the initial commit until 2026-07-04
  (verified: `git log -S "below CDM" -- src/` → fixed in `541fc88`). The "CDM inversion" campaign
  that produced them is *named in the citation-walk's own list of the four campaigns that
  yielded "the six."*

**The variable that actually predicts a provenance break is not direction. It is
self-reference.** Partition the census by whether a statistic describes *the world* or *the
loop*:

| claim class | breaks | rate |
|---|---|---|
| **SELF** (3,308 sessions; 47 contributions; 9/9 demotion rate) | 3/3 | **100%** |
| **PHYSICS** (CHSH, RAR, DESI, LIV, wide-binary, S63, σ_int…) | 4/27 | 15% |

Fisher exact **p = 0.0086** (p = 0.094 under the conservative variant that grades the 9/9
membership caveat as clean). Every statistic the loop has published *about itself* has a
provenance break. This is the one claim class with **no primary source outside the loop to walk
to** — which is a mechanism, not a coincidence.

The law survived because its predicate was a disjunction. The citation-walk's operative
sentence is *"every single one over-refutes **or over-closes**"* — two orthogonal axes
(direction, confidence) joined by an "or," which absorbs any break whatsoever. σ_int "below CDM
— definitive" over-claims on direction and over-closes on confidence; it was counted as
confirming a law about direction.

## Research Notes

### The missing denominator

Script: `explorer/scripts/directional_bias_null_model.py` (reproducible, no RNG).

The 2026-07-08 citation-walk is the **only census** on the site: five pre-declared bundles
walking "every load-bearing statistic," so its sample was *not* selected by suspicion. That
makes it the correct — and only available — denominator. Its 30 statistics were transcribed
verbatim from the finding's own tables and classified before counting, by a rule fixed in
advance: **valence = the polarity of the site sentence carrying the statistic** (does it assert
a framework failure, or a framework success/credential?).

    census: 30   ANTI 23 / PRO 5 / NEUTRAL 2
    P(a break lands ANTI | breaks uniform over statistics) = 23/28 = 0.821

That single number dissolves the headline. To reach p < 0.05, the loop would need **16
consecutive over-refutations with zero over-claims**; for p < 0.01, **24**. The observed
pure-over-refutation streak is **zero** — two pro-side breaks sit inside the census.

Robustness: flipping the valence of all four debatable items (2⁴ = 16 reclassifications) moves
the one-sided p across [0.756, 0.987]. **The law does not approach significance under any
classification I could construct, including ones chosen to favor it.**

### Where the tally's "6/6" comes from

Two moves, each defensible alone, jointly fatal:

1. **Scope-exclusion.** The maintainer's proposal states: *"The one over-claim found (A2ACW
   denominator) is on the methodology track, not physics."* Both pro-side breaks in the census
   — "3,308 sessions," "47 contributions" — are likewise reclassified as methodology and
   dropped. The residue is over-refutations, necessarily. A law that holds only after removing
   its counterexamples is a definition.
2. **Miscount.** The CDM σ_int inversion — a *physics* over-claim, on the honesty ledger, found
   by this track on 07-03 — is credited as a source campaign of "the six" and recorded as an
   over-refutation.

I want to be fair to the tally's authors, because I nearly repeated the error. The
over-refutations are **real, individually verified, and serious**: TEST-03's kill is
manufactured; S63's "0.64 also rejected" was fabricated; Σ₀'s 0.5% match was reported as a 12%
miss. Nothing here rehabilitates the framework — it remains a reparametrization with 0 confirmed
predictions. What fails is the *inference from those instances to a directional law about
honesty-branded corpora*. The instances are sound. The statistic built on them is not.

### The successor hypothesis, and its mechanism

"An honesty-branded corpus manufactures failures the way a hype-branded corpus manufactures
successes" is a claim about **motivation**, and it requires the loop to be biased toward a
*direction*. The data don't show a direction. They show a **blind spot with a location**.

Reflexive statistics break because *nothing outside the loop can adjudicate them*. There is no
primary file for "3,308 sessions": the walk's fresh count found **650** session files, the
component tables sum to ~2,926 rather than their stated 3,308, and the chemistry track's own
total is 2,685, not the 2,671 the site carries. There is no canonical list behind "9/9" — the
two enumerations disagree on two members, so it "could as honestly be 11/11." There is no
denominator behind A2ACW's "0 across 3,308 sessions" (de-inflated 07-09 to 0/6 audited).
Meanwhile a CHSH S-value has a committed script with a fixed seed, and it regenerates
bit-identical.

This subsumes the directional observation rather than contradicting it. Over-refuting the
physics and over-claiming the session count are **the same act**: both make the audit look more
thorough than it was. But only one of them is about direction, and the unified variable —
*flattery of the auditing process* — is not what "honesty-branded corpora manufacture failures"
predicts. The refined law predicts a break class the directional law cannot even name.

### The error is the one the site already condemned, one level up

From the loop's own A2ACW findings: the null was faulted for publishing **a numerator with no
denominator** — sensitivity on a selected positive set, specificity never measured, no control
arm (`a2acw-detector-false-positive-rate-null-baseline.md`: *"don't let the null borrow the
test suite's authority"*).

The directional law is a numerator (6 over-refutations) with no denominator (how many
pro-facing statistics were ever checked?), a sensitivity with no specificity, and no control
arm. **The audit of the audit inherited the audit's failure mode.** This is the transferable
result, and it is a sharper version of the monotone-closure finding: not only do the loop's
verdicts move one way, its *methodological errors reproduce themselves at each meta-level*.

The visitor's Pass 3 makes the selection effect visible in one sentence. He states his method —
*"I went hunting for the thing a self-audit can't catch: whether the numbers in the audit are
right"* — then reports *"four for four, every arithmetic error over-refutes"* as a discovery
about direction. He sampled the anti-facing statistics and found errors in anti-facing
statistics. His four errors are real (I have not disputed one). His inference is his own
sampling frame read back to him. **Four for four out of four is not a rate.**

### Replication: the hypothesis's prediction, pre-registered and then run (2/2)

Having written *"the repo's own reflexive statistics — '616 core sessions,' '1,703 phenomena' —
predicted: all break"* as an open thread, I ran it in the same session rather than leaving it as
a promise. **Both broke. Neither had been walked before.**

**"1,703 phenomena"** (17 assertions across the repo; carried to the site's
`/chemistry-correlation-explorer` and `/honest-assessment`). No file computes it. No phenomena
catalog exists (`find -iname "*phenomena*"` → empty). The token `1703` appears in the chemistry
scripts as **three mutually inconsistent referents**:

    biolubricant_chemistry_coherence.py:17     "Session #1840 | 1703rd Phenomenon Type"
    cmp_semiconductor_chemistry_coherence.py:22 "Finding #1703 | 1639th phenomenon type"
    membrane_separation_chemistry_coherence.py:3 "Chemistry Session #1703"

So 1703 is simultaneously a phenomenon-type ordinal, a finding ID, and a session ID. And the
repo's own phenomenon-type ordinals **run to 2523** — so even granting the ordinal reading,
1,703 is not the total; it is ~820 short of the largest ordinal the repo asserts. **"1,703
phenomena" is an ordinal misread as a cardinal.** This is exactly the shape of the TEST-03 error
("Session 616" was a mangled reading of the catalog header "After 616 core sessions" — an ordinal
misread as an identifier) and of the N = 14,585 splice. The same failure, three times, always in
a self-referential counter.

**"616 core sessions"** (`Research/EXPERIMENTAL_TEST_CATALOG.md`, the file that registers the
falsification thresholds). The repo's own `STATUS.md` says **678**; the highest `SessionNNN` file
is **691**; there are **700** session files. The load-bearing test catalog's session counter is
stale by ~75 sessions. Milder than a fabrication — a drifting counter, not an invented one — but
it is the same counter whose misreading manufactured TEST-03's "Session 616 found R² = 0.14."

**One prediction failed, and I record it.** I initially flagged "1,703 confirmed predictions" (3
assertions) as a collision with the program's headline of *zero* confirmed predictions. On
reading the sentences, all three occur *inside the whitepaper's own disclaimer* — "treat the
chemistry track as a substantial pattern catalog… **not** as 1,703 confirmed predictions." Not a
break. The disclaimer is correct and predates me. Likewise the five different "core sessions"
values (308, 312, 610, 614, 616, 678) are mostly **dated publisher-report snapshots** — a time
series, not a contradiction. Two candidate breaks dissolved on contact with the source; that is
the rule this finding is arguing for, applied to itself.

**I decline to fold these into the Fisher table.** Adding two SELF breaks from the repo without
sampling the repo's *physics* statistics would inflate one cell of a 2×2 by selective expansion
— precisely the denominator error this finding diagnoses. They stand as an out-of-sample
prediction test: **2 predicted breaks, 2 found, on statistics nobody had walked**, in a corpus
the census never touched.

### A live residual, and a prediction the hypothesis makes

`src/app/honest-assessment/page.tsx:238` still reads *"14,585 galaxies. σ_int = 0.086 ± 0.003
dex — CDM-consistent."* The 07-09 sweep correctly stripped the R²/p splice from this card and
left the sample size attached to the surviving number. Per S610 the definitive σ_int run is
**N ≈ 677** (optimal cut); per the 07-08 walk, N = 14,585 belongs to S591's ALFALFA BTFR
predictor. **I have not walked S610 myself today — this is a flag to verify, not an assertion
that it is wrong.** But note what it is: the one number on that card that makes the measurement
look impressive, surviving the very sweep that cleaned the card around it. Pro-side statistics
get less scrutiny even during a correction pass *for* directional bias.

The hypothesis also retrodicts its own discovery. "6/6 over-refute, 0 over-claim" is itself a
statistic the loop published about its own audit performance — a SELF claim — and it broke.
That is a consistency check, not independent confirmation, and I mark it as such. It is the
8th instance and it belongs in the 3/3 column, making it 4/4.

## Implications for the Site

1. **The directional law must not ship.** It is not on the live site (verified: no
   `over-refut|self-refutation|least-audited|manufactur` matches under `src/app/`). Good. It
   should not arrive without its null, and with its null it does not survive.
2. **"The physics layer is demonstrably clean" is also over-claimed** — by the same census,
   4 of 27 physics statistics broke (15%). The honest sentence is *"every physics statistic
   walked in the 07-08 census either regenerates from committed code or walks to a verified
   primary, with four exceptions, all now corrected."*
3. **The standing rule dp is being asked to approve is aimed at the wrong axis.** "Every
   maintainer session must re-derive at least one *negative* verdict" would have caught 4 of 7
   breaks and missed all 3 self-referential ones — the only class with a 100% break rate.

## Action: Maintainer

**P0 — Replace the proposed process rule.** In
`Synchronism/Research/proposals/symmetric_audit_discipline_directional_bias_confirmed.md`,
the decision put to dp rests on "6 over-refute, 0 over-claim the physics," which is false as
stated (σ_int "below CDM"; TEST-03 "confirmed at p = 5×10⁻⁶") and not significant even if true
(p = 0.31). Recommend the rule be re-aimed:

> **Every number the project reports about itself — session counts, contribution counts,
> demotion rates, detector sensitivity/specificity — must ship with the command or script that
> regenerates it, or be stated as "self-reported; not independently reproducible."**

This is the only claim class with a 100% break rate (3/3, Fisher p = 0.0086), and unlike
directional symmetry it is mechanically checkable rather than a matter of reviewer disposition.
It also costs nothing: a physics statistic already has a committed script; a self-referential
one either has a `find | wc -l` behind it or it should not be a number.

**P1 — Walk `honest-assessment:238`.** Confirm whether σ_int = 0.086's sample is N ≈ 677 (S610
optimal cut) or N = 14,585 (S591 ALFALFA BTFR). Same class of splice as TEST-03's, opposite
sign, still live after the sweep that was looking for exactly this.

**P1 — Retire the disjunction.** "Over-refutes *or over-closes*" is unfalsifiable: direction and
confidence are orthogonal axes, and every break satisfies one of them. Any future tally must fix
one axis before counting.

**P2 — `/research-philosophy` and `/honest-assessment`** currently carry the "0 confirmed
predictions" ledger without noting that this makes anti-framework statistics ~82% of the site's
verdict-bearing numbers. That base rate is the reason the audit *feels* one-directional. One
sentence would inoculate the reader — and the next persona — against re-deriving the artifact.

## Open Threads

- **The 3/3 self-referential break rate is the finding worth a preprint**, not the directional
  law. It is a concrete, falsifiable claim about autonomous research loops: *a self-auditing
  agent's least reliable numbers are the ones describing its own audit, because they are the
  only ones with no external primary.* It is testable on any other AI-generated research
  corpus, and it beats the A2ACW null on transferability because it names a mechanism and a fix.
  This is the OOD injection the 06-28 fixed-point finding said the program needs — and unlike
  "find a different AI corpus," it can be tested *within* one.
- ~~Does the pattern hold on the **Synchronism research repo**?~~ **Run this session: 2/2
  predicted breaks confirmed** ("1,703 phenomena" = ordinal-as-cardinal, no primary; "616 core
  sessions" = stale by 75 in the file that registers kill criteria). Remaining untested repo
  reflexive statistics: "47 contributions," "2,671 chemistry sessions," "89% validated."
- **TEST-08 remains unrun** (registered environment-density correlation, public catalogs,
  never executed). Still the highest-value *physics* execution in the queue; I chose the meta-
  question today because a false methodological law propagates into every future session's WAKE,
  whereas TEST-08 propagates into one test card. If the queue is drained next session, that is
  the one.
- The census n = 30 is small and the SELF cell is n = 3. **p = 0.0086 on a 3/3 cell is fragile**
  — one clean self-referential statistic drops it to 0.094. The claim deserves the same
  skepticism I applied to the law it replaces: it is a *better-supported* hypothesis, not an
  established one. The replication above is what would settle it.
