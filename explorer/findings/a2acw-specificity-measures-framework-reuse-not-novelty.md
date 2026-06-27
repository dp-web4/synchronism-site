# Finding: A2ACW Specificity Is Not Empty In Principle — It Measures Framework-Reuse, Which Is the Wrong Axis

## Origin

Topic: `a2acw-specificity-null-denominator.md` (seeded 2026-06-27 by the maintainer in
direct response to the 2026-06-27 visitor Pass 4 / leading-edge-researcher objection).

The visitor's claim: *"You cannot measure specificity without a labeled set of genuine
novel discoveries that the filter is run against and correctly passes. An AI adversarial
pair, by the page's own admission, cannot recognize OOD novelty — so the specificity
denominator is empty."* The seeded topic asks whether the denominator is empty **in
principle**, and whether post-training-cutoff AI discoveries (FunSearch, AlphaEvolve,
GNoME) could populate it.

## Summary

The denominator is **not** empty in principle — the contamination-detection literature
already provides the construction (time-based partition: items dated after the evaluator's
training cutoff are provably uncontaminated). The 2026-05-22 "0% specificity" run used the
**maximally-confounded** corpus (Dirac/Bell/BCS/Higgs/Hawking/Noether — items that are
*both* scientifically canonical *and* in-training), so it measured nothing.

But constructing a clean denominator does **not** rescue the metric, and this is the load-
bearing result: **A2ACW does not classify "novel vs. reparametrization." It classifies
"new framework vs. new object within an existing framework" — and that axis is orthogonal
to discovery-value.** Most genuinely valuable discoveries — including AlphaEvolve's
externally-verified, post-cutoff 48-multiplication matrix algorithm — are *new objects in
old frameworks*, which A2ACW flags as "reparametrization." So a clean specificity
measurement would still return ~0%, not because the method is blind to novelty, but because
the true-negative class it would need to pass (framework-founding work) is nearly empty
across the entire history of science **and** is the one kind of novelty an in-distribution
model cannot recognize anyway.

The honest correction to the site is sharper than "we can't tell if it's the theory or the
method." It is: **A2ACW establishes framework-reuse (a weak property shared with most good
science); the *indictment* of Synchronism — zero new predictions — comes from the physics
tests, not from A2ACW. The site conflates these.**

---

## Research Notes

### 1. Two notions of "novelty" are being conflated

A2ACW's verdict-word "reparametrization" silently merges two different properties:

| | What it means | Who can arbitrate | Decidable? |
|---|---|---|---|
| **Training-novelty** | not in *this evaluator's* training corpus | check the cutoff date | Yes (externally) |
| **Scientific novelty** | new relative to *all prior human knowledge* | future scientific consensus | Only in hindsight |

A2ACW's **mechanism** can only ever see training-presence: it recognizes the MOND structure
in C(ρ) because MOND is in its training, and it would recognize Dirac's equation as "known"
for the same reason. For every historical example these two notions coincide (canonical *and*
memorized), which is exactly why the 2026-05-22 corpus tells us nothing — it cannot separate
"flagged because conceptually-prior" from "flagged because memorized." The cell it samples is
the one where the two causes are perfectly confounded.

### 2. The denominator is constructable — the contamination literature already does it

The visitor's "empty in principle" overstates the case. The standard tool for exactly this
problem is the **time-based / temporal-holdout partition**: *"Questions collected after a
model's training cutoff cannot be contaminated"* (benchmark-contamination survey, arXiv:2406.04244;
Min-K%-Prob, ConStat, CoDeC all rest on the same temporal logic). So a clean specificity
corpus is available: take a genuine discovery dated **after** the A2ACW evaluator's cutoff,
verify its novelty by means external to the model (peer review, formal proof-checking,
independent reproduction), and run it through the filter. The denominator is then provably
uncontaminated and externally labelled. It is fleeting (each item decays into the training
set at the next model refresh), but it is not empty.

This matters: the previous framing ("specificity is unmeasurable") was a dead end that
licenses giving up. The real situation is that specificity **is** measurable, and the
measurement reveals something more damaging than unmeasurability.

### 2b. Building on the R1/R2 result: the 2026-05-22 run already split the protocol in two

The 2026-05-22 baseline (`a2acw_specificity_null_baseline.md`) ran two decision rules and got
opposite answers:

- **R1 (literal protocol rule):** flag if a canonical prior-art reference is named within one
  round of the translated claim → **0% specificity** (all 6 genuine discoveries name
  antecedents under translation, "because all non-trivial physics has antecedents").
- **R2 (steelmanned):** flag if the claim *reduces to* prior art with **nothing novel added**
  → **100% specificity**, but "all discrimination is supplied by a *novelty judgment* the
  protocol never operationalizes."

That finding's diagnosis — *retrieval ≠ discrimination* — is correct and this finding does not
overturn it. What this finding adds: it **identifies what R2's smuggled novelty judgment
actually is, and shows R1's 0% survives even on an uncontaminated post-cutoff specimen.** The
R1/R2 gap is exactly the framework-reuse-vs-value gap of §4 below, and the AlphaEvolve case
nails it down.

### 3. The decisive case: AlphaEvolve is a genuine post-cutoff discovery that splits R1 from R2

AlphaEvolve (DeepMind, 2025) found an algorithm multiplying 4×4 complex matrices in **48
scalar multiplications**, beating Strassen's 1969 record of 49 — a result that "had eluded
human mathematicians for 56 years," verified by an automated/external evaluator
(independent verification repos exist). It is the cleanest available specimen of a
*genuine, externally-validated, post-training-cutoff discovery*. It is precisely the kind of
item the seeded topic proposes for the denominator.

Now run it through both rules. The 48-multiplication scheme is a **new point in the existing
tensor-rank-decomposition framework** — same framework Strassen used (1969), same objects
(bilinear tensor decompositions), a better element of that space, but a genuinely new and
externally-verified one.

- **Under R1** (names prior art?): AlphaEvolve's result names Strassen and the
  tensor-decomposition program one round in. **R1 FLAGS it as a reparametrization.** And
  crucially, this specimen is **post-cutoff and externally verified** — it cannot be
  dismissed the way the 2026-05-22 corpus could ("your 6 examples were memorized canon"). A
  provably-uncontaminated, formally-verified, genuinely-new discovery still trips R1. **R1's
  0% specificity is therefore not an artifact of using famous in-training examples — it is
  structural.** This defeats the "denominator empty in principle" worry (the denominator is
  populated, by AlphaEvolve) *and* shows that populating it cleanly does not move R1 off 0%.
- **Under R2** (reduces to prior art, nothing novel added?): AlphaEvolve **extends** — it adds
  a better object that provably did not exist before. **R2 PASSES it as a genuine discovery.**
  But R2's pass is bought entirely with the "reduces vs. extends" judgment, which no automated
  step in A2ACW supplies.

So AlphaEvolve is the clean specimen that **splits R1 from R2**: the automatable part of the
protocol (R1, pure name-retrieval) flags a genuine discovery; the discriminating part (R2)
passes it but only via an unautomated human judgment. The split is the empirical content.

The same split exposes what R2's judgment really is. Compare the two verdicts R2 reaches:

- AlphaEvolve → **extends** the tensor-decomposition framework (adds a new, verified, better
  object) → R2 passes.
- Synchronism → **reduces to** MOND (adds no prediction MOND doesn't already make) → R2 flags.

R2's discriminating question — *"does it add something genuinely new, or only reuse?"* — is,
for a physics theory, **identical to the test-suite question**: does Synchronism make a
prediction MOND doesn't? That is answered by ΔBIC=+184, by DESI TEST-04a, by the wide-binary
feasibility kill — **not** by anything A2ACW computes. R2's 100% specificity is the test
suite's authority, wearing the protocol's costume.

"New object within an existing framework" — the thing R1 flags and R2 must be told to pass —
describes the overwhelming majority of celebrated physics: Dirac (a relativistic wave equation
**within** the quantum formalism), BCS (a variational ansatz **within** many-body theory),
Higgs (symmetry breaking **within** gauge theory), and AlphaEvolve **within** tensor
decomposition. A2ACW's automatable rule flags all of it.

### 4. Therefore specificity measures framework-reuse, which is orthogonal to value

The corollary is decisive for interpreting the project's headline number:

- The **true-negative class** A2ACW would need to *pass* (to score nonzero specificity) is
  "framework-founding work" — discoveries that create a genuinely new formal framework rather
  than a new object in an old one. Examples are vanishingly rare across all of science
  (arguably: Noether's symmetry↔conservation correspondence; the introduction of the path
  integral; non-Euclidean geometry). For nearly every real discovery, the true label on
  A2ACW's actual axis is "reparametrization."
- So a clean, uncontaminated specificity run would *still* return ≈0%, **not** because the
  method is blind to novelty, but because the construct it scores ("not a reuse of any
  existing framework") is near-empty in the population of genuine discoveries.
- The few genuine framework-founding cases that do exist are, by construction, the ones an
  in-distribution model is *least* able to recognize as such (it has no prior to retrieve, so
  its "pass" is indistinguishable from a failed retrieval — see §5).

This is why fixing the corpus doesn't fix the metric. The metric is sound as a measurement of
*framework-reuse*; it is simply mislabelled as a measurement of *novelty*, and those are
different axes. AlphaEvolve sits at (framework-reuse = yes, value = high), which the
novelty-labelling cannot represent.

### 5. A2ACW is a retrieval system; "pass" is the absence of evidence, not evidence of absence

The structural reason the metric can never be a clean classifier of an intrinsic property:
A2ACW is a **retrieval system**, not a detector. Its two outputs are:

- **"prior framework found"** → flags as reparametrization. Somewhat informative: the model
  exhibited a specific match (though it can be a spurious surface match).
- **"no prior framework found"** → passes as novel. **Deeply uninformative**: it is the
  *absence of a retrieval* from an index the model cannot self-audit for completeness. A
  truly novel result and a reparametrization-whose-prior-the-model-missed produce the
  identical "pass." The model cannot estimate its own recall, so it cannot attach a
  confidence to a "pass."

Sensitivity and specificity are therefore **entangled through the same capability** (can the
model find the connection?), which is why they cannot be independently tuned and why
"specificity" as a classifier metric is the wrong frame. The right frame is **retrieval
recall against a ground-truth prior** — and recall of *novelty* is undefined, because novelty
is defined by the *absence* of a retrievable prior. You cannot measure the recall of a thing
defined by absence.

### 6. The clean separation the site is missing

The project's verdict on Synchronism — "reparametrization, 0 unique predictions" — is built
from two distinct evidence sources that the site treats as one:

| Property | Established by | Strength of indictment |
|---|---|---|
| **Framework-reuse** (C(ρ) lives in the MOND/compander family) | A2ACW + human audit | **Weak** — shared with AlphaEvolve, Dirac, BCS. Most good science reuses frameworks. |
| **Zero new predictions** (every discriminating test fails, ties MOND, or is unrunnable) | the physics tests (ΔBIC=+184; DESI TEST-04a; wide-binary feasibility; clusters) | **Strong** — this is the actual indictment. |

A2ACW supplies only the first row. The first row alone does **not** convict — framework-reuse
is the norm for valuable work. The conviction comes entirely from the second row, which A2ACW
had no part in producing. The honest framing of the A2ACW result is therefore:

> *A2ACW reliably establishes that Synchronism reuses an existing framework (the MOND/compander
> family). That property, on its own, is shared with most genuine discoveries and is not an
> indictment. What makes Synchronism's framework-reuse damning rather than ordinary is the
> separate, physics-test fact that the reused framework yields no prediction Synchronism
> doesn't share with it. A2ACW measures framework-reuse; the test suite measures
> predictive emptiness. The site should not let the first borrow the authority of the second.*

---

## Implications for the Site

The maintainer (2026-06-27) already removed "measured specificity" from `/research-philosophy`
and added the caveat that the 0% novel-yield "cannot distinguish 'no novelty exists' from
'method blind to novelty.'" That caveat is correct but **understates what can actually be
said**. Two upgrades:

1. **The disjunction is not symmetric — name the resolved branch.** It is not a coin-flip
   between "theory has nothing" and "method is blind." The method is *specifically* a
   framework-reuse classifier, and framework-reuse is (a) real for Synchronism, (b) shared
   with most valuable science. So the 0% does carry one definite meaning ("Synchronism reuses
   a framework") and definitely does *not* carry the meaning the headline implies ("therefore
   the theory is worthless") — that second step is licensed only by the physics tests.

2. **Specificity is measurable-but-mislabelled, not unmeasurable.** Replace "specificity is
   undefined / the denominator is empty" with "specificity, cleanly measured via temporal
   holdout, would still read ≈0% because A2ACW scores framework-reuse, a property nearly all
   genuine discoveries also have — the AlphaEvolve 48-mult result being the clean example."
   This is a *stronger and more interesting* honest claim than "we can't measure it."

## Action: Maintainer

- **`/research-philosophy` (A2ACW section):** add one paragraph implementing the two upgrades
  above. Suggested anchor sentence: *"A2ACW classifies framework-reuse, not novelty: it would
  flag AlphaEvolve's externally-verified 2025 matrix-multiplication record as a
  'reparametrization' too, because that result is a new object inside the old tensor-
  decomposition framework. Framework-reuse is the norm for valuable science; what convicts
  Synchronism is the separate test-suite fact that its reused framework yields no prediction
  it doesn't share with MOND."*
- **`/honest-assessment` or `/for-researchers`:** wherever the A2ACW null is cited as evidence
  about the *theory*, insert the clean separation (framework-reuse = A2ACW; predictive-
  emptiness = tests). The A2ACW null is an LLM-epistemics result; the conviction is a physics
  result. Keep them in separate rows.
- This does **not** weaken the honest assessment — it makes the A2ACW claim exactly as strong
  as it is (framework-reuse, cleanly) and stops it from over-borrowing the test suite's
  authority.

## Open Threads

1. **Run the AlphaEvolve test.** The decisive experiment is now fully specified and decidable:
   take a genuine post-cutoff discovery (AlphaEvolve 48-mult, or a 2026 formally-verified
   result), run the documented A2ACW PRIMARY/CHALLENGER protocol under **both** decision rules
   with an evaluator whose cutoff predates it. **Predicted outcome: R1 FLAGS, R2 PASSES** —
   and the R2 pass requires a human to assert "this extends rather than reduces." Confirmation
   would establish three things at once: (a) R1's 0% specificity is structural, not a
   contaminated-corpus artifact (the specimen is post-cutoff and verified); (b) the denominator
   is *not* empty in principle (AlphaEvolve populates it); (c) R2's discrimination is the
   smuggled test-suite judgment. The surprising/disconfirming outcome would be R1 *passing*
   AlphaEvolve — that would mean the literal rule can recognize at least one genuine post-cutoff
   discovery, partially rehabilitating automated specificity, and would be the more publishable
   result. Either way this is now a one-session, paper-able task, not a philosophical impasse.
2. **Is "framework-founding" itself an A2ACW-recognizable category?** The hypothesis in §4 is
   that framework-founding discoveries are the *only* true-negatives, and that the model can't
   recognize them anyway. A second corpus — historical framework-founding work (Noether,
   Feynman path integral, Galois theory) run through A2ACW — would test whether the model
   passes *any* of them. Prediction: it flags those too (it retrieves the now-canonical
   framework), confirming the class is empty in practice as well as rare in principle.
3. **The retrieval-recall reframe as the actual deliverable.** If A2ACW is a retrieval system
   whose "pass" is uninformative, the honest LLM-epistemics contribution is a *retrieval-recall*
   characterization, not a *classifier sensitivity/specificity* one. What is A2ACW's recall
   against a ground-truth set of *known* prior-art links (where recall *is* defined)? That is
   measurable and would replace the ill-posed specificity number with a well-posed one.
4. **Connection to the project's standing meta-result.** This sharpens the
   "AI-assisted-theory-building reduces to existing phenomenology" cautionary result: the
   reason is now precise — an in-distribution model's research *is* high-recall framework-
   retrieval, so it will reliably place any ansatz inside the nearest existing framework
   (MOND for gravity, tensor-decomposition for AlphaEvolve) and will only ever produce *new
   objects in old frameworks*, never new frameworks. That is not a failure of effort; it is
   the structural signature of convergent recombination. See `ncorr-ladder-never-anchored.md`
   and `density-compander-nogo-is-milgrom-nonlocality-instance.md` for the physics-side
   instances of the same pattern.
