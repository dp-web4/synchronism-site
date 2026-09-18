# Finding: Most registered kill criteria are not specific enough to be inconsistent

## Origin

Topic `audit-registered-kill-criteria-for-internal-inconsistency.md` (maintainer, 2026-09-18), which
asked how many registered criteria state a **threshold** and a **significance** that cannot both be
satisfied at the adjudicating data's σ — TEST-04a's shape. Pre-registration: `explorer/scripts/kill_criterion_audit_PREREG.md`,
committed `57959fe` **before** the classification was run, with an exposure declaration (I had already
read the 14 Tier 2–4 `kill:` strings) and scored pre-execution predictions.

## Summary

The topic's hypothesis is **refuted as a class**: over all 26 registered kill criteria there is exactly
**one** unsatisfiable threshold/significance pair — TEST-04a, both of its limbs — and the site already
publishes that arithmetic in its own scorecard. The audit's actual return is the opposite defect and it
is much larger. **Only 3 of 26 criteria state a significance level at all, and only 1 of those states one
its data can deliver. 11 of 26 contain no numeral of any kind** — their entire content is the negation of
the prediction. You cannot be internally inconsistent without stating two things; most of this registry
states one. Separately, **15 of the 19 never-run criteria have not been touched since the repository's
first commit (2026-02-21)**, so the registry has two populations: a small, heavily-worked executed core
and a seven-month-frozen periphery. The rate **replicates at 42 % on the archive's disjoint 24-row
registry**, so this is a property of how the program drafts criteria, not of four page files — and where
a site row has an archive counterpart, the site's is the *less* specific of the two: TEST-15's registered
power requirement crossed over as "20+ events" where the archive says "50+", with the archive's stated
"3σ detection" dropped entirely.

## Research Notes

### Method

`explorer/scripts/kill_criterion_audit.py` extracts the `kill:` field of every test from the four tier
pages — the site's own registry — with no exclusions: 26 rows, none missing a kill string. Withdrawn,
executed and unrunnable rows all stay in, because exclusions are where a favourable denominator gets
manufactured. `kill_criterion_classify.py` applies the pre-registered flags. Raw outputs and
`criteria.json` are committed under `explorer/work/2026-09-18-kill-criteria/`.

### The mechanical result (denominator 26 throughout)

| flag | count | % |
|---|---|---|
| states a significance (Nσ, p, 95 %) | **3** | 12 % |
| contains **no numeral at all** | **11** | 42 % |
| exact-null lexeme with no tolerance ("perfectly", "identical", "no correlation", "independent of", "at all measured …") | 15 | 58 % |
| names no adjudicating dataset | 10 | 38 % |
| declares itself not falsifiable (TEST-07) | 1 | 4 % |
| **well-formed** (numeric threshold + tolerance/significance + a dataset whose σ makes them jointly satisfiable) | **2** | **8 %** |

The eleven with no numeral: TEST-05, 07, 12, 14, 16, 17, 18, 20, 22, 23, 24.
The two well-formed: **TEST-06** and **TEST-25**.

### The single class-A instance, and why it is not a class

TEST-04a, both limbs, computed in `kill_criterion_classify.py` Part 2:

| limb | threshold presumes σ = | DESI DR1 delivers σ = | threshold actually sits at | honest threshold would be |
|---|---|---|---|---|
| "> 0.46 rules out at > 3σ" | 0.0140 | 0.062 (**4.4×**) | 0.68σ | 0.604, not 0.46 |
| "> 0.45 disfavors at > 2σ" | 0.0160 | 0.062 (**3.9×**) | 0.52σ | 0.542, not 0.45 |

The site publishes the first line verbatim in TEST-04a's `scorecard.power`. The second limb's arithmetic
is not published, and the page currently calls that limb "met" — it is met *literally* (2.1σ separation
exceeds the stated 2σ) but the threshold 0.45 was still placed at 0.52σ, so meeting it carries none of
the discriminating weight the registration intended. Minor, and worth one sentence rather than a card.

**No second A instance exists in the registry.** My pre-registered prediction of "at least one further A
instance besides TEST-04a" is **refuted**, and the reason is informative: almost no other criterion states
enough to be checked. A-class inconsistency is a defect of *specific* registrations. It is rare here
because specificity is rare here.

### TEST-01 — the same disease reached by the other route (exploratory)

`kill_criterion_test01_power.py`. TEST-01's criterion is *"No correlation between residuals and
environment at 2σ"* — a null-**acceptance** at a stated significance with **no equivalence margin**.
Executed 2026-07-14 on N = 141 SPARC galaxies with Cosmicflows-4 environment:

- SE(r) = 1/√(N−3) = 0.085, so the strongest 2σ upper bound the sample can place is r ≤ 0.170, i.e.
  r² ≤ 0.029.
- The framework's **own** predicted environment lever is r² ~ 10⁻⁴ (`ledger.ts`: ≤ 2×10⁻³ dex).
- The achievable bound is **290× above the effect it must exclude**. Excluding r² = 10⁻⁴ at 2σ needs
  **≈ 40,000** galaxies with environment data; 141 were available — a **284×** shortfall.
- The run reported r² = 0.0001, p = 0.89 and the criterion was recorded as met. p = 0.89 is *"no evidence
  of correlation"*, not *"correlation excluded at 2σ"*.

By the letter of pre-registered rule A this row is class D, because its prediction field states no numeric
central value — so I am **not** counting it as a second A instance. It is reported as an exploratory
extension. The site already records that the measured r² is consistent with the equation's own lever; this
is the power statement standing behind that sentence, and it generalises the defect: *a criterion that
accepts a null at a stated σ without an equivalence margin asserts a precision no sample size mentioned
anywhere on the card can deliver.*

### TEST-06 — the nominated row is the best-formed row in the registry

The visitor persona nominated TEST-06 ("σ_int ≤ 0.086 dex requiring N > 1000") as smelling like TEST-04a.
I pre-registered the prediction that it is not an A instance; it holds, and by more than expected. The SE
of a dispersion estimate is s/√(2N) = 0.086/√2000 = **0.0019 dex**, so the 0.12 dex threshold sits **17.7σ**
from the 0.086 prediction. TEST-06 is not underpowered — it is one of only two **CLEAN** rows, and it is
clean precisely *because* it states its own power requirement inside the criterion. The registration
practice the persona flagged as a smell is the one thing the registry should do more of.

### The timing question: retro-fitting is NOT supported

`kill_criterion_history.py` reconstructs every `kill:` string at every commit touching a tier page
(65 commits, back to 2026-02-21). Hypothesis under test: the precise criteria got precise near execution,
i.e. the thresholds were retro-fitted. **Refuted.**

- TEST-09's operative threshold was fixed **2026-04-24** (`89825cf`) — eleven weeks before its 2026-07-14
  execution. TEST-04a's was fixed 2026-05-05, ten weeks before adjudication.
- Every post-execution revision to an executed row is a **result annotation appended to the kill field**,
  not a threshold change. TEST-09 gained "— FIRED: deviation 0.41 …"; TEST-10 gained "The kill fires in
  REVERSE …". The registered inequalities themselves did not move.
- The one genuine pre-execution change is TEST-09's, and the site discloses it in the row: the 2026-04-24
  restatement **changed the criterion's variable** (band-universality → regime-mix deviation) while
  carrying the 0.3 magnitude across. That is a real defect — a threshold with no derivation for the
  statistic it now adjudicates — but it is disclosed, and it is one instance, not a pattern.

What the history does show is an **asymmetry of attention**, not of honesty:

| | n | mean revisions | never revised since 2026-02-21 |
|---|---|---|---|
| executed rows | 7 | 2.1 | 0 |
| never-run rows | 19 | 1.4 | **15** |

**A caution against over-reading this, and it matters.** Not revising a criterion you are not executing is
*correct* pre-registration behaviour — revising it would be worse. The defect is not that the 15 are
frozen; it is that they were never specific enough to be registrations, and freezing preserves that. The
registry's problem is at drafting time, not at maintenance time. (Filed with the 2026-09-17 result that
the over-refutation share of directional corrections rose 1/20 → 9/24 while remaining a minority: this is
exactly the shape of finding that invites an unearned adverse reading, so the earned one is stated.)

### An intra-site ID collision the archive's namespace declaration does not record

The reconstruction threw an apparent artifact — TEST-11 with two unrelated kill strings — which turned
out to be real. Verified directly at `31af0f8` (2026-07-28):

```
tier-1-existing ids: TEST-01 … TEST-10, TEST-04a, TEST-11   <- the Cassini squeeze
tier-2-pilots   ids: TEST-11, TEST-12, TEST-13, TEST-14     <- TEST-11 = EEG Anesthesia
```

**From 2026-07-28 to the 2026-08-10 renumber, the site carried two different TEST-11s simultaneously, on
two tier pages.** The archive's namespace declaration (`Research/EXPERIMENTAL_TEST_CATALOG.md`, added
2026-08-22) records the row as *"TEST-11 | EEG Anesthesia Phase Transition | Cassini squeeze until the
site's intra-site renumber of 2026-08-10"* — correctly identifying the cross-repo divergence, but reading
the site's TEST-11 as a single referent. It was two, concurrently, and Tier 2's EEG TEST-11 has been
continuously present since 2026-02-21. The declaration's TEST-11 row is therefore incomplete: this was an
intra-site collision *as well as* a cross-repo one. Small, but it is a correction to the document whose
whole job is to stop TEST-NN citations from being misread — and it was found by a script, not a reading.

### Namespace context — which closes one of this finding's own open threads

`Research/EXPERIMENTAL_TEST_CATALOG.md` (dated 2026-02-20) and the site registry (first commit
2026-02-21) are **disjoint namespaces**: eleven of twelve IDs checked name different tests, and site
TEST-02 duplicates the archive's TEST-14 under a different number. So the IDs do not align — but the
*content* of many rows plainly does, one day apart, and that turned out to be the important part.

### Replication on the archive's independent registry — and it holds

`kill_criterion_archive_replication.py` runs the byte-identical flag rules over the archive catalog's 24
`**Falsification**:` lines. Different tests, different IDs, same program, one day earlier:

| | site registry (26) | archive catalog (24) |
|---|---|---|
| **no numeral at all** | 11 (**42 %**) | 10 (**42 %**) |
| exact-null lexeme | 15 (58 %) | 8 (33 %) |
| states a significance | 3 (12 %) | 1 (**4 %**) |

The no-numeral rate replicates **exactly**, on two disjoint samples. That converts the headline from a
statement about four page files into a statement about the practice: **this program drafts kill criteria
containing no number about 42 % of the time.** The archive is not the worse of the two — it is cleaner on
exact-nulls and carries crisp rows the site has no analogue for (`τ > 10⁸ s`; `S < 2.2 in 10 repeated
experiments`). Both are near-zero on stated significance.

### The numbers existed upstream and were lost in transcription

This is the part that reverses my first draft's conclusion. Several site rows are evidently the same
experiment as an archive row, and where they are, **the site's version is the less specific one**:

| archive | site | what changed |
|---|---|---|
| TEST-08 `Environment correlation < 0.3 (r² < 0.09)` | TEST-05 `RAR scatter independent of Hubble type / environment` | the numeric bar is gone from the kill field (it survives in the site's *prediction* field) |
| TEST-11 `If 20 subjects show Φ_LOC ranging 1.0–6.0 with no clustering…` | TEST-11 `Φ at LOC ranges from 1.0 to 6.0 with no clustering` | the sample size drops out of the criterion |
| TEST-15 `No correlation at 10⁻¹⁶ level across **50+** events` | TEST-15 `No correlation at 10⁻¹⁶ level after **20+** multi-messenger events` | **the power requirement is cut from 50+ to 20+, undisclosed** |

The TEST-15 pair is the cleanest instance of the whole thesis and worth stating in full. Both rows are the
same experiment — LIGO O4/O5 multi-messenger, the same 10⁻¹⁶ null, the same α parameterisation. The
archive row carries a separate line the site's does not: *"Sample size needed: 20–50 events for **3σ
detection**."* So upstream there was a stated significance and a stated sample range, the criterion was
registered at the **top** of that range (50+), and what crossed into the registry the program actually
cites is the **bottom** (20+) with the significance dropped. The site's criterion is materially weaker
than the one that was registered, and neither document records the change.

**Corrected conclusion: this is a transcription gap, not purely a drafting gap.** For the rows with an
archive counterpart, σ and N often existed and were lost crossing over. For the frozen Tier 2–4 rows
without one, the site text is all there is. Both roads end at the same P0 — the registry that gets cited
is the less specific of the two — but the repair differs: the first is recoverable by reading the archive
row, the second is not.

Adjacent prior art, in the archive's namespace: **Session 674 (2026-05-27)** censused that catalog against
a *derived-amplitude* discriminator and found 0 of 9 untested rows had a verified first-principles
amplitude. That is the **prediction-side twin** of this finding — a test needs a derived predicted
amplitude *and* a specific kill threshold, and only the first has ever been counted. The site imported
that verdict for exactly one row: TEST-07's kill field reads "no amplitude derivation exists." The other
direction has not been counted in either namespace until now.

### Two site claims that the count contradicts

1. **"Every experiment has an explicit kill criterion."** It appears unqualified on four surfaces:
   `test-catalog/page.tsx:174`, `research-philosophy/page.tsx:38`, `quantum-predictions/page.tsx:32`, and
   — most publicly — the `<meta description>` at `falsifiability/layout.tsx:5`, which is the one-liner a
   search engine shows. It is contradicted **by a row in the registry itself**: TEST-07's kill field reads
   *"N/A — no amplitude derivation exists; no mechanism is specified; not falsifiable as stated."* The
   site's own data structure refutes its own sentence, on four pages, and neither side has noticed.
   `/falsifiability` is the honourable exception — it states the principle and then immediately says
   *"This page used to stop there."*
2. **`/falsifiability`'s scoreboard: "4 criteria cannot fire."** That is a count over the page's **8
   hand-picked examples**, presented in a scoreboard as a registry figure. The registry denominator is 26,
   and the 4 are unreachable by *instrument sensitivity* (Gaia reach, 10⁻¹⁶ GW timing, 10⁻⁵ BAO nulls) —
   a different and much narrower class than unreachable *by construction*, which is 11–15 of 26 depending
   on coding and has never been counted. This is an **R6 (DIRECTION LAW, NO DENOMINATOR)** instance sitting
   on the page whose job is to audit reachability. `explorer/tools/findings_lint.py` would flag the
   sentence if it were pointed at `src/`.

Note the July 2026 rewrite of `/falsifiability` adopted the rule *"a kill criterion is listed with its
REACHABILITY, not just its statement"* (source comment, line 19). The rule was **never propagated to the
tier pages, where the criteria actually live**: 0 reachability mentions in Tier 2, 0 in Tier 4, 1 each in
Tier 1 and Tier 3. A policy adopted on the page that argues for it, and absent from the pages it governs.

### TEST-24 is already dead by the site's own adjudication

TEST-24's kill criterion is *"No behavioral discontinuity at any C threshold, **or C cannot be meaningfully
measured for AI**."* The site's protocol-status box (`/test-catalog`, restated as a rule over all tiers
2026-09-14) adjudicates exactly that, as the site's own finding: *"No protocol maps any laboratory or
astronomical observable to the coherence value C, in any domain."* The second limb of TEST-24's kill
criterion is therefore **met by the site's own published verdict**. The row carries no badge, no
reachability tag and no note — only "Challenge: … may be decades away or impossible."

**I am not recommending this be promoted to a seventh refutation, and the reason is not caution.** A test
that kills itself on its own unmeasurability is a statement about the framework's incompleteness, which the
site already carries prominently and globally; converting it into a refutation count would double-count a
known gap and is precisely the over-refutation the 2026-09-17 cohort measured. The honest fix is one
sentence of scope: does "cannot be meaningfully measured" mean *ever*, or *not yet*? The registration does
not say, and the answer decides whether the limb is already met or is a live future condition.

### Scoring the pre-registration (`57959fe`)

| # | prediction | outcome |
|---|---|---|
| 1 | Tier 2–4: C (exact-null) ≥ 8 | **held** — 11 of 14 |
| 2 | Tier 2–4: E (unmapped quantity) ≥ 10 | **refuted, narrowly** — 9 of 14 |
| 3 | Tier 2–4: CLEAN = 0 | **held** — 0 |
| 4 | Tier 1: CLEAN ≥ 3 | **refuted** — 2 (TEST-06, TEST-25) |
| 5 | Tier 1: C ≤ 3 | **held at the boundary** — exactly 3 |
| 6 | ≥ 1 further A instance besides TEST-04a | **refuted** — 1 total |
| 7 | TEST-06 is not an A instance | **held** — and it is CLEAN |
| 8 | CLEAN ≤ 6 of 26 | **held** — 2 of 26 |

5 held, 3 refuted. Two notes against myself. (a) Prediction 5 landed on **exactly** its boundary — the same
zero-margin shape this audit flags as class B on TEST-09's `> 0.3` versus a computed 0.30. My own
registration failed to state a tie-breaking convention, which is the defect I came here to count. (b) The
regex for flag E hits 13 of 26, but 4 of those (TEST-02, 09, 10, 25) are **false positives**: their
prediction text names C or γ as quantities *computed from a fitted model*, not measured observables. The
site's own unrunnable list is the Tier 2–4 subset, 9 rows. The instrument is reported with its error rate.

## Implications for the Site

The site's falsifiability apparatus is honest about outcomes and has never been audited for **form**. It
counts what fired, what could not fire for lack of instrument sensitivity, and whether registration
preceded data. It has never counted whether a criterion says enough to adjudicate anything. On that axis
the registry is 2 of 26.

This is not a demotion of the framework — a vague kill criterion on an unrun Tier 3 proposal costs
nothing scientifically, and 24 of these 26 have never been run. It is a correction to a **claim about the
method**, and the method claim is doing real rhetorical work: "every experiment has an explicit kill
criterion" is the sentence that licenses calling the roadmap falsifiable, and it is in the site's search
description.

The frame-level question, which I think is the more interesting one: the program treats pre-registration
as a **timing** discipline (register before you look) and measures itself on that axis — "0 of 24 completed
prospectively" is a timing statistic. But a registration filed early and stated as "no correlation" defers
the decision rule to execution time just as completely as one filed late. **Timing is the cheap half of
pre-registration; specificity is the expensive half, and only the cheap half is currently measured.**
`/falsifiability`'s scoreboard is four timing-and-outcome bullets with no specificity bullet. That is the
missing line, and it now has a number.

## Action: Maintainer

- **P0** The unqualified *"every experiment has an explicit kill criterion"* is contradicted by TEST-07's
  own kill field. Four surfaces: `test-catalog/page.tsx:174`, `research-philosophy/page.tsx:38`,
  `quantum-predictions/page.tsx:32`, `falsifiability/layout.tsx:5` (meta description). The last is what
  search engines show. Suggested replacement carries the measured form: *26 registered tests each carry a
  kill field; 2 state a threshold, a tolerance and a dataset whose σ makes them jointly satisfiable, and
  one (TEST-07) states in the field itself that it is not falsifiable as written.*
- **P0** `/falsifiability` scoreboard: *"4 criteria cannot fire"* is a count over 8 hand-picked examples
  rendered as a registry figure — R6, no denominator, on the reachability-audit page. Give it its
  denominator and add the by-construction class alongside the by-instrument class.
- **P1** Add a specificity bullet to the `/falsifiability` scoreboard, beside the timing bullet: 3/26 state
  a significance; 1/26 states one its data can deliver; 11/26 contain no numeral.
- **P1** Propagate the 2026-07-27 reachability rule from `/falsifiability` to the tier pages, where the
  criteria live (Tier 2 and Tier 4 carry zero reachability tags). A tag per row, not new prose.
- **P0 (new, transcription)** **TEST-15's registered power requirement is wrong on the site.** The
  archive row for the same experiment registers *"No correlation at 10⁻¹⁶ level across **50+** events"*
  plus *"Sample size needed: 20–50 events for 3σ detection"*; `tier-3-major/page.tsx` carries *"after
  **20+** multi-messenger events"* with no significance. The criterion on the cited registry
  (20+) is weaker than the one registered (50+), and nothing records the change. Restore 50+ and the 3σ, or state why
  20+ supersedes it. (The row's `verdict` correctly calls the whole criterion unreachable at 10⁻¹⁶ vs the
  10⁻¹⁵ GW170817 bound — that stands and is unaffected.)
- **P1** TEST-05: the numeric kill bar (`r² < 0.09`) is in the **prediction** field while the **kill**
  field is a bare negation ("RAR scatter independent of Hubble type / environment"). It comes from the
  archive's TEST-08, which states it *in* the falsification line: `Environment correlation < 0.3
  (r² < 0.09)`. Mirror it into the kill field — a pure restatement of an already-published number.
- **P1** TEST-11's criterion drops the archive's `If 20 subjects…` clause. The site carries "20 subjects"
  in the `protocol` field, so the number is on the page; it is just not in the criterion. Same one-line fix.
- **P1** TEST-24: state the scope of *"or C cannot be meaningfully measured for AI"* — ever, or not yet.
  As written the site's own protocol verdict meets it. **Do not promote to a refutation** (reason in the
  finding).
- **P2** TEST-04a: the "> 0.45 disfavors at > 2σ" limb is recorded as met; add that the 0.45 threshold sits
  0.52σ from the prediction, so meeting it carries little discriminating weight. One sentence.
- **P2** TEST-01: add the power statement — N = 141 is ~284× short of the sample needed to exclude the
  framework's own r² ~ 10⁻⁴ lever at the registered 2σ. This is the arithmetic behind the sentence the site
  already carries (measured r² consistent with the equation).
- **P2** TEST-21 predicts BAO fine structure with no amplitude derivation — the exact defect for which
  TEST-04 was **withdrawn** and TEST-07 was declared **not falsifiable**. Three rows, one defect, three
  different treatments. Pick one and apply it.
- **→ dp / back-annotation** The archive's namespace declaration (2026-08-22) reads site TEST-11 as a
  single referent (the Cassini squeeze). Between 2026-07-28 and 2026-08-10 the site carried **two**
  TEST-11s concurrently, on two tier pages; Tier 2's EEG TEST-11 has been present since 2026-02-21. One
  row of that table is worth amending. Verified at `31af0f8`.
- **Lint** `findings_lint.py`'s R6 currently runs on `explorer/findings/`. The two R6 instances found today
  are both in `src/app/`. Consider pointing it (or a `site_lint.py` rule) at printed counts that carry no
  denominator.

## Open Threads

- ~~Is specificity measurable across the archive, not just the site?~~ ~~Does the same rate hold there?~~
  **Both executed this session.** The no-numeral rate replicates at 42 % on a disjoint 24-row sample, and
  the transcription losses (TEST-15's 50+ → 20+, TEST-08's r² < 0.09) were found while checking. See above.
- **How many more rows lost a number in transcription?** I paired three by content in a few minutes;
  nobody has built the alias table the archive's namespace declaration says is "the artifact worth
  producing" (REC-2026-036). A content-similarity pass over the two registries would produce both the
  alias table and the full transcription-loss list in one run. This is now the highest-value follow-up in
  this thread and it serves a need the archive has already recorded and left open.
- **The equivalence-margin class.** TEST-01 is one null-acceptance criterion stated at a σ with no
  equivalence bound. How many of the 15 exact-null rows would become CLEAN if each simply named the effect
  size it must exclude? My guess is most of them, cheaply — which would make this a repairable defect
  rather than a structural one. That is a concrete, testable follow-up and the highest-value one here.
- **Does specificity predict outcome?** Both CLEAN rows (TEST-06, TEST-25) and the three significance-
  stating rows are executed or imminent. With n = 26 and 7 executed this cannot be tested now, but if the
  program keeps executing, "did the criterion state a σ before it ran?" is a scorable prospective variable.
- **The registry's two populations.** 15 rows untouched for seven months, several depending on quantities
  the site has globally adjudicated as unmeasurable. Is the right move to sharpen them, or to move them out
  of a registry whose count ("24 registered experiments") is quoted as evidence of falsifiability? That is
  a dp-gated question about what the registry is *for*, and I don't think the explorer should answer it.
