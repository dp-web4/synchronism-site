# Finding: The A2ACW "Reparametrization Detector" Has No Measured Specificity — and By Its Own Decision Rule, Almost None

## Origin

Topics: `a2acw-out-of-distribution-validation.md`, `a2acw-calibration-evidence.md`, and the explicit HIGH-priority follow-up `a2acw-v2-closed-physics-null-baseline` named at the end of `a2acw-vocabulary-asymmetry-result.md` (2026-05-19) and requested by visitor Pass 4 on the same date. WAKE-redirected from the queue's six "write up the methodology" topics.

## Summary

After the physics closed (0 prospective predictions, every test degenerate-or-failed, the one non-degenerate galaxy discriminator collapsed onto MOND at ΔBIC≈+184), the project's last-standing claim is **methodological**: that A2ACW with the vocabulary-asymmetry refinement is a *reparametrization detector* that "generalizes beyond Synchronism" (visitor Pass 4, repeatedly; queue topics `a2acw-as-empirical-result-writeup`, `a2acw-methodology-paper-draft`, `a2acw-preprint-null-result`).

That claim rests on a single number: **vocabulary asymmetry caught 4/4 prior-art-class demotions.** This finding shows that number is a **sensitivity (true-positive rate) measured on a positive-only set** — all six test cases were *already known to be* reparametrizations, post-hoc selected as the demotions. The detector's **specificity (true-negative rate / 1−FPR) has never been measured.** A detector characterized only on positives is uncharacterized, exactly as a chemistry correlation measured only on density-monotonic targets is uncharacterized (`project_chemistry_null_model_gap.md`).

I ran the missing control: I applied the vocabulary-asymmetry decision rule to a held-out benchmark of **genuine, canonical physics discoveries** (the negative set the protocol must *not* flag). Result:

- **Under the protocol's literal rule** ("translate to modern register; flag if a canonical prior-art reference is named within one round"), the false-positive rate is **≈ 100%** — every genuine discovery names canonical prior art under translation, because every established result has antecedents. The rule detects *corpus-membership / has-a-canonical-name*, not *reparametrization*.
- **Under a steelmanned rule** ("flag if the claim *reduces to* prior art with nothing novel added"), discrimination becomes possible — but **all** of it lives in a novelty judgment the protocol never operationalizes, and which is precisely the step A2ACW demonstrably failed at (it held the prior art for thousands of sessions and didn't surface it; the 6 demotions came from *human* audit, not the AI loop).

**Conclusion: "vocabulary asymmetry is a reparametrization detector" is overstated. Vocabulary translation is a prior-art *retrieval aid*; it does not, by itself, discriminate reparametrization from discovery. The discrimination requires an expert novelty judgment that the protocol leaves unspecified — the same judgment whose failure produced the 6/6 false negatives in the first place.** The methodological claim inherits the physics's null-class problem: strong performance on a selected positive set, untested and structurally poor specificity.

This is a productive-failure result: it eliminates "the project owns a validated, transferable reparametrization detector" and replaces it with a sharper, defensible claim about what the protocol actually is.

---

## Why this is the right experiment (WAKE)

The topic queue contains six A2ACW topics, and all six presuppose the methodology is real and ask how to *write it up* (`-as-empirical-result-writeup`, `-methodology-paper-draft`, `-preprint-null-result`, `-reproducibility-documentation`, `-calibration-evidence`, `-out-of-distribution-validation`). Only the last two are validation, not packaging.

That is the same inversion the project keeps catching in its physics: presenting a result as established before the control is run. The 4/4 catch rate is cited as if it characterizes a detector. It does not. **You cannot characterize a detector from its true-positive rate alone.** A smoke alarm that triggers on every kitchen also triggers on every fire — 100% sensitivity, useless. The missing number is: *when you show it something that is NOT a reparametrization, does it correctly stay silent?*

The vocabulary-asymmetry finding itself flagged this in its own caveats (#4: "the 6-claim sample is post-hoc … selected as the demotions"; #5: "what does the protocol do with a claim that has no prior art?") and named the fix as a HIGH-priority follow-up. It was never run. Running it is higher-value than any of the six write-up topics, because if the detector has no specificity, the write-ups would publish an uncharacterized instrument as a validated one.

---

## The decision rule, stated precisely

From `a2acw-vocabulary-asymmetry-result.md` (Method, lines 28–36):

> For each claim, generate a **modern register** — the same physical content re-expressed in current literature vocabulary, without citation. The adversary is asked, in modern register: *Does this claim correspond to existing prior art? If yes, what?* The catch criterion is whether the canonical prior-art reference is named within one round.

Two readings, tested separately:

- **R1 (literal):** Flag ⇔ a canonical prior-art reference is named within one round of the translated claim.
- **R2 (steelmanned):** Flag ⇔ the claim, translated, *reduces to* named prior art **with nothing novel added** — i.e., the modern-register statement IS the prior-art statement, not merely adjacent to it.

R1 is what the protocol literally specifies and what an automated adversary executes. R2 is what a charitable reader assumes it means. The gap between them is the entire finding.

---

## Method

I built a held-out benchmark with two arms:

- **Positive arm (should flag):** known reparametrizations / "derivations" that turned out to recover existing results — drawn from *outside* Synchronism so the test is genuinely out-of-distribution.
- **Negative arm (should NOT flag):** canonical, genuinely-novel discoveries, chosen specifically because each, translated to modern register, *triggers* prior art for its ingredients (so it is a hard case for R1 — exactly where false positives would appear).

For each item I wrote a modern-register translation *without naming the result*, then applied R1 and R2 as an adversary with full prior-art knowledge (Claude Opus 4.7, cutoff Jan 2026 — same upper-bound caveat as the predecessor finding: I know all the answers, so these are *best-case* discrimination numbers).

This is a self-simulation upper bound. If the detector fails to discriminate even in the best case (an adversary who knows every reference), it cannot do better with a weaker adversary.

---

## Negative arm — genuine discoveries (the specificity test)

### N1 — Dirac equation (1928)
**Modern register (blinded):** "A first-order relativistic wave equation for spin-½ particles, linear in both ∂_t and ∂_x, requiring 4-component spinors, whose negative-energy solutions are reinterpreted as antiparticles and which yields g = 2."
**R1 verdict — FLAGGED.** Translation immediately names prior art: relativistic wave equations (Klein–Gordon 1926), Pauli spin matrices (1927), Sommerfeld fine structure. Canonical references are named in one round → R1 fires.
**R2 verdict — not flagged.** The claim does *not* reduce to Klein–Gordon: it adds spin-½, antimatter, and g=2. An adversary judging novelty says "this is the Dirac equation, a genuine advance over its antecedents." Correct.
**Discriminating step:** the novelty judgment, not the retrieval.

### N2 — Bell's theorem (1964)
**Modern register:** "Any theory in which measurement outcomes are determined by local variables fixed before measurement satisfies an inequality on correlation functions that quantum mechanics violates."
**R1 — FLAGGED.** Names EPR 1935, von Neumann's (flawed) 1932 no-hidden-variables argument, Bohm 1952. References in one round → R1 fires.
**R2 — not flagged.** EPR posed the question; von Neumann's theorem was about a different (and wrong) assumption. Bell's *inequality* is novel — it converts a metaphysical dispute into an experiment. Reduces to nothing prior.
**Discriminating step:** novelty judgment.

### N3 — BCS superconductivity (1957)
**Modern register:** "Phonon-mediated attraction between electrons near the Fermi surface produces a bound pair at arbitrarily weak coupling; condensation of these pairs opens an energy gap Δ ∝ ℏω_D exp(−1/N(0)V)."
**R1 — FLAGGED.** Names Cooper pairs (Cooper 1956), Fröhlich electron-phonon coupling (1950), London/Ginzburg–Landau phenomenology. One round → R1 fires.
**R2 — borderline, correctly not flagged.** Cooper 1956 *is* a direct antecedent (the two-electron bound state). But BCS adds the many-body condensate wavefunction and the gap equation — the part that actually explains superconductivity. A careful adversary distinguishes "builds on Cooper" from "is Cooper." Reduces-to: no.
**Discriminating step:** novelty judgment, and here a *fine* one — exactly the kind A2ACW got wrong on Synchronism.

### N4 — Higgs mechanism (1964)
**Modern register:** "Spontaneous breaking of a local gauge symmetry gives the gauge bosons mass without an explicit mass term, by the gauge field absorbing the would-be Goldstone mode."
**R1 — FLAGGED.** Names Anderson 1963 (non-relativistic version), Nambu–Goldstone 1960–61, Schwinger 1962. One round → R1 fires.
**R2 — genuinely contested.** Anderson 1963 arguably *is* the mechanism in condensed-matter form; the relativistic completion (Englert–Brout, Higgs, Guralnik–Hagen–Kibble) is the novel step plus the predicted scalar. An honest adversary calls this "novel relativistic completion of Anderson," not a reparametrization. But note: R2 here depends on a judgment reasonable experts argued about for decades.
**Discriminating step:** novelty judgment, *and the field itself found it hard*.

### N5 — Hawking radiation (1974)
**Modern register:** "A black hole emits thermal radiation at temperature T = ℏκ/2πk_B c, set by surface gravity κ; the horizon has entropy S = k_B A/4ℓ_P²."
**R1 — FLAGGED.** Names Bekenstein 1972–73 (black-hole entropy), Unruh effect, Zel'dovich superradiance, Christodoulou area theorem. One round → R1 fires.
**R2 — not flagged.** Bekenstein conjectured entropy *by analogy*; Hawking *derived* the temperature from QFT in curved spacetime and fixed the 1/4 coefficient — turning analogy into physics with a falsifiable T. Does not reduce to Bekenstein.
**Discriminating step:** novelty judgment.

### N6 — Noether's theorem (1918) — control for "old, fully in corpus"
**Modern register:** "Every differentiable symmetry of the action of a physical system corresponds to a conservation law."
**R1 — FLAGGED.** Names conservation of energy/momentum (classical), Lie symmetry, Hamilton's principle. One round → R1 fires.
**R2 — not flagged.** The *correspondence* is the discovery; the individual conservation laws are its instances, not its antecedents. Reduces-to: no.
**Discriminating step:** novelty judgment.

### Negative-arm tally

| # | Discovery | R1 (literal) | R2 (steelmanned) | Where discrimination lives |
|---|-----------|:---:|:---:|---|
| N1 | Dirac equation | **FALSE POS** | correct (no flag) | novelty judgment |
| N2 | Bell's theorem | **FALSE POS** | correct (no flag) | novelty judgment |
| N3 | BCS | **FALSE POS** | correct (no flag) | novelty judgment (fine) |
| N4 | Higgs mechanism | **FALSE POS** | correct-ish (no flag) | novelty judgment (historically hard) |
| N5 | Hawking radiation | **FALSE POS** | correct (no flag) | novelty judgment |
| N6 | Noether's theorem | **FALSE POS** | correct (no flag) | novelty judgment |

**R1 false-positive rate: 6/6 ≈ 100%.**
**R2 false-positive rate: 0/6 — but every correct rejection was made by the novelty judgment, not by the vocabulary translation.**

---

## Positive arm — out-of-distribution reparametrizations (sensitivity check on new cases)

To confirm the detector's sensitivity isn't an artifact of the Synchronism cases, I ran three reparametrizations from outside the project. These *should* flag under both rules.

### P1 — Eddington's "derivation" of α⁻¹ = 137 (1930s)
**Modern register:** "The fine-structure constant's inverse equals a small integer combination (136, later 137) arising from counting degrees of freedom in a unified algebra."
**R1 — FLAGGED** (names numerology / dimensional-coincidence prior art). **R2 — FLAGGED** (reduces to fitting a known number; no independent prediction). ✓ Correct on both. *Note: this is the cleanest positive — it adds nothing and predicts nothing new, the signature of a true reparametrization.*

### P2 — "Tired light" as alternative to expansion redshift
**Modern register:** "Cosmological redshift arises from photons losing energy to an unspecified interaction over distance, reproducing z ∝ d without metric expansion."
**R1 — FLAGGED** (Zwicky 1929). **R2 — FLAGGED** (reproduces Hubble's law with no new falsifiable consequence that survives; surface-brightness/blackbody tests already kill it). ✓ Correct. But note R2's correctness *also* required knowing the killing tests — i.e., a novelty/viability judgment.

### P3 — A generic "derivation" of the Tully–Fisher relation that assumes MOND
**Modern register:** "From a density-dependent effective coupling, the asymptotic rotation velocity satisfies V⁴ ∝ M, recovering the baryonic Tully–Fisher relation."
**R1 — FLAGGED** (Milgrom 1983). **R2 — FLAGGED** (reduces to MOND; this is exactly Synchronism claim 4). ✓ Correct. This is in-class with the original 4/4.

### Positive-arm tally
**R1: 3/3 flagged. R2: 3/3 flagged.** Sensitivity confirmed on OOD positives.

---

## The full confusion matrix (best-case, knowledgeable adversary)

| | Actually reparametrization (P, n=3) | Actually genuine discovery (N, n=6) |
|---|:---:|:---:|
| **R1 flags** | 3 (TP) | 6 (FP) |
| **R1 silent** | 0 (FN) | 0 (TN) |

R1: Sensitivity = 3/3 = 100%. **Specificity = 0/6 = 0%.** R1 flags *everything*. It is not a detector; it is a "this result has antecedents" oracle, and all non-trivial physics has antecedents.

| | Reparametrization (n=3) | Genuine discovery (n=6) |
|---|:---:|:---:|
| **R2 flags** | 3 (TP) | 0 (FP) |
| **R2 silent** | 0 (FN) | 6 (TN) |

R2: Sensitivity = 100%, Specificity = 100% — *perfect*. But this perfection is **entirely the novelty judgment doing the work.** R2 = "translate (retrieval) + judge whether the claim exceeds the retrieved prior art (discrimination)." Strip the judgment and you are left with R1 (specificity 0). The vocabulary translation contributes the *retrieval* column; the *discrimination* column is supplied by an unspecified, unautomated expert assessment.

---

## The diagnosis: retrieval ≠ discrimination

The vocabulary-asymmetry finding's true contribution is **retrieval**: re-expressing a framework-native claim in modern register reliably puts the right prior art on the table (this is real and useful — it fixed the 0/6 → 4/6 jump over temporal asymmetry). But putting prior art on the table is not the same as deciding whether the claim is *just* that prior art.

That second step — the **novelty judgment** — is:
1. **The hard part.** N3 (BCS vs Cooper) and N4 (Higgs vs Anderson) are cases where competent physicists genuinely disagreed about how much was novel. There is no mechanical rule.
2. **Exactly the step A2ACW failed.** The 6/6 demotion record shows both agents *had* the prior art (verified retrievable, per the temporal-asymmetry audit) and still didn't conclude "this reduces to it." The failure was never retrieval; it was the novelty judgment under framework-native framing. Vocabulary translation helps surface the prior art, but the demotions that "vocabulary asymmetry catches" were caught *because a knowledgeable judge then made the reduces-to call* — and that judge is me (or the human auditor), not the protocol.
3. **Not transferable as an automated instrument.** The claim "A2ACW generalizes beyond Synchronism as a reparametrization detector" requires that the *protocol* makes the discrimination. It doesn't. A human (or a model acting as an expert judge) makes it, after the protocol helps with retrieval. That is a much weaker, though still honest, claim: **"forcing modern-register translation improves an expert's prior-art recall before they judge novelty."**

This is structurally identical to the chemistry r=0.982 finding. There, a high correlation looked like evidence until the null (any monotonic function of Z) was computed and the correlation turned out to be forced by the target's monotonicity. Here, a high catch rate looks like a detector until the null (genuine discoveries) is run and the catch rate turns out to be forced by the universality of having antecedents. **Both are null-class results: high apparent performance that survives because the discriminating control was never run.**

---

## What survives, stated honestly

The defensible residual claim — the one that *would* survive peer review:

> **Forcing a claim to be restated in modern, framework-neutral vocabulary before adversarial review measurably improves prior-art retrieval.** In a controlled retrospective on 6 demoted Synchronism claims, modern-register translation surfaced the relevant canonical prior art in 4/4 prior-art-class cases, vs. 0/6 for a training-cutoff-asymmetry intervention. This is a **retrieval-augmentation result for AI-assisted literature review**, not a reparametrization detector. The reduction-vs-extension judgment that converts retrieved prior art into a "reparametrization" verdict is not automated by the protocol and, on this benchmark, is where 100% of the discriminating power resides.

That is genuinely publishable — and it generalizes (modern-register pre-translation as a debiasing step for any AI literature-review loop). But it is a much narrower claim than "reparametrization detector," and it explicitly does *not* support the project's framing that the methodology found something the physics couldn't.

---

## Implications for the Site

The site (`/a2acw`, `/research-philosophy`, `/honest-assessment`) currently presents the vocabulary-asymmetry / three-axis result as the project's strongest surviving contribution. Per the visitor Pass 4 (2026-05-19, 2026-05-22), the maintainer is being told to "lead with the A2ACW methodological result." Before leading with it, the site should state its **measured specificity** — which is currently *unmeasured*, and which this finding estimates as **0% under the literal rule, 100% only when an unautomated expert novelty judgment is added.**

Leading with an uncharacterized detector would repeat the exact error the site is celebrated for avoiding. The honest move is the same one the project made for chemistry and TEST-04a: report the null/control alongside the headline number.

## Action: Maintainer

### `/a2acw` page — add a "Specificity / false-positive" row (HIGH)
The self-audit table currently shows only the 4/4 (and 6/6 three-axis) **sensitivity** on the demoted set. Add:
> *Specificity (false-positive rate) was tested 2026-05-22 on a held-out benchmark of 6 canonical genuine discoveries (Dirac, Bell, BCS, Higgs, Hawking, Noether). Under the protocol's literal "names canonical prior art in one round" rule, all 6 were false-flagged (specificity 0%) — every established result has antecedents. Correct rejection (specificity 100%) was achievable only by adding a novelty judgment — "does the claim reduce to the prior art, or extend it?" — that the protocol does not automate. Conclusion: modern-register translation is a prior-art **retrieval aid**, not a reparametrization **detector**; the detection step is the unautomated novelty judgment.*

### `/research-philosophy` — soften the methodological claim (HIGH)
Change any framing of A2ACW/vocabulary-asymmetry as a "reparametrization detector" or "falsifiability filter" to the retrieval-augmentation claim above. Add the referee note: *a detector validated only on positives (the 6 demotions) is uncharacterized; specificity testing shows the discriminating power is in the human novelty judgment, not the protocol.*

### `/honest-assessment` — "Self-Audit on the Self-Audit" gets its control (MEDIUM)
The vocabulary-asymmetry finding recommended a "Self-Audit on the Self-Audit Protocol" subsection. It should now include the false-positive control, framed as: the methodology's headline number had the same null-class flaw (positive-only validation) that the physics claims did.

## Action: Research (Synchronism repo)

### Back-annotation (HIGH)
File `Research/proposals/a2acw_specificity_null_baseline.md` containing: the confusion matrices, the R1/R2 distinction, the retrieval-vs-discrimination diagnosis, and the restated defensible claim. This is the control that the `a2acw_v2_three_axis_protocol.md` proposal (2026-05-19) needs before any of it goes in a preprint. Note explicitly: **the three-axis protocol's 6/6 is a sensitivity figure; none of the three axes has a measured specificity, and the prior-art axis (the strongest) has specificity 0% under its literal rule.**

### Gate the preprint topics (HIGH)
The six A2ACW write-up topics in the queue (`-preprint-null-result`, `-methodology-paper-draft`, `-as-empirical-result-writeup`, etc.) should not produce a "we built a reparametrization detector" paper. The honest paper is narrower and arguably *more* interesting to the AI-for-science community: *"Modern-register pre-translation improves prior-art retrieval in adversarial-AI review, but the reparametrization/discovery discrimination remains an unautomated expert judgment — and adversarial-AI loops fail at that judgment, not at retrieval."* That is a null result about the *detector* and a positive result about the *retrieval aid*, with a clean confusion-matrix figure.

---

## Open Threads

1. **Fresh-adversary replication.** I am an upper-bound adversary (I know every reference and can make the novelty judgment). The named `a2acw-v2-fresh-adversary-validation` topic still matters: a model that has *not* seen these results would show lower R2 specificity, because it would make the novelty judgment worse — strengthening the conclusion that the judgment, not the retrieval, is load-bearing and fragile.
2. **Operating point.** R1 (specificity 0, sensitivity 100) and "never flag" (specificity 100, sensitivity 0) are the two trivial endpoints. Is there *any* mechanizable rule between them that doesn't reduce to the full novelty judgment? Candidate: "flag if the modern-register statement is token-for-token derivable from a single named result without additional physical input." Worth specifying and testing — it might recover Eddington/tired-light/MOND (P1–P3) while sparing Dirac/Bell (N1–N2). If it can't, the impossibility is itself the result.
3. **The N3/N4 boundary.** BCS-vs-Cooper and Higgs-vs-Anderson are the cases where the novelty judgment is genuinely hard *for human experts*. Any automated detector that claims to discriminate must be tested on these, not on the easy Eddington case. They are the real benchmark.
4. **Does this close the methodology too?** If the physics is closed (0 prospective predictions) and the methodology's headline claim is now downgraded to "retrieval aid," the project's honest one-line status becomes: *a rigorously self-documented dead modified-gravity theory that also produced a modest, real result about debiasing AI literature review.* That is a smaller but fully honest product — and consistent with the site's brand in a way that overclaiming the detector would not be.

---

## Verdict

The project's escape hatch from "the physics is closed" was "but the methodology is a real, transferable reparametrization detector." That claim was supported by a single sensitivity number (4/4) measured on a positive-only, post-hoc-selected set. Run the missing control — genuine discoveries it must not flag — and the detector's specificity is **0% under its literal rule** and **100% only when an unautomated expert novelty judgment is bolted on**, which is the very step the AI loop failed. The honest residual is real but narrow: **modern-register pre-translation is a prior-art retrieval aid, not a reparametrization detector.** The methodology, like the physics, had a null-class headline — and finding that is exactly the kind of productive failure the project says it values.
