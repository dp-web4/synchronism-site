# Explorer Topic: A2ACW Has No Positive Control — Sensitivity Is Undefined, Not Just Specificity

**Priority**: **HIGH — escalated 2026-09-10 (maintainer)**
**Seeded**: 2026-07-02 (maintainer)
**Origin**: Visitor log 2026-07-02, Pass 4 (Leading-Edge Researcher); re-raised independently by
Visitor log 2026-09-10, Pass 4, as its #2 P0 item

---

## ESCALATION NOTE — 2026-09-10 (maintainer)

**This topic has sat in the queue for 70 days, and in that time the site kept citing the null it
questions as a citable result.** A second, independent researcher persona re-derived the same gap
today from the site alone. That is the signal to stop queueing it.

Three things changed today:

1. **The site no longer cites the null.** `/for-researchers` artifact 2 is retitled from
   *"The A2ACW program-level null"* to *"The A2ACW detector is underpowered (Youden's J = 0,
   CI [−0.46, +0.46], n = 6) — an open question, not a citable null"*, and its badge moved from
   `audited-negative / Registered Null` to `untested / Underpowered — No Positive Control Run`.
   The page now states the H1/H2 ambiguity explicitly.
2. **It is routed to dp** in
   `Synchronism/Research/proposals/test02_amplitude_is_knee_conditional_and_a2acw_positive_control_20260910.md`,
   asking for one of two rulings: authorise the run, or relabel the null *permanently uninterpretable*
   (because the "pending cross-vendor control" listed on the page does not address this gap — a second
   vendor with the same corpus reproduces the same prior-art pull).
3. **The framing sharpened, and it is the reason to prioritise this.** Under H2 — the protocol demotes
   almost anything, including real discoveries — the 1.4% survival rate says nothing about Synchronism,
   and *that is the more interesting result*: a measured prior-art-illusion rate for adversarial LLM
   audit is a finding about AI-assisted research methodology that stands independent of whether any
   physics here holds. Per SPINE's own read, the applied/methodological axis is where this program has
   actually delivered. **This is the cheapest genuinely novel result still available to this project,
   and it needs no instruments** — only post-cutoff papers and the protocol that already exists.

**Do not execute until dp rules** (it is a governance question about the program's own methodology
claim, not a physics run). Prepare the sample and the protocol so execution is same-session once the
ruling lands.

## Concrete protocol (drafted 2026-09-10, was missing from this topic)

- **Sample**: 10–15 verified physics results published *after* the challenger models' training cutoff,
  spanning the same subfields the framework touches (galactic dynamics, cosmology, condensed matter,
  quantum foundations). Include 3–5 results that *were* later contested, so the ground truth is graded
  rather than binary.
- **Blinding**: strip citations, author names, dates, and any phrasing that dates the work. Rewrite
  each into the same claim format the 47 candidates were expressed in, by a model that is not the
  challenger, so surface form is not the discriminator.
- **Run**: the existing A2ACW adversarial-pair protocol, unmodified. No parameter tuning — the point is
  to measure this protocol, not a better one.
- **Primary statistic**: demotion rate on known-good physics, with a Clopper–Pearson interval. Report
  it beside the framework's own 6/6 demotion rate.
- **Pre-committed reading, fixed before the run** (this is the part that makes it worth doing):
  - demotion rate **≤ 20%** → the protocol discriminates; the framework's 6/6 is about the framework,
    H1 survives, and the site's null is restored to citable with a measured specificity;
  - demotion rate **≥ 60%** → the protocol demotes genuine discoveries at scale; the 1.4% yield is a
    property of the protocol, the framework's null is *uninterpretable*, and the prior-art-illusion
    rate becomes the finding;
  - **in between** → the protocol is partially informative and the framework's null must be quoted with
    the measured false-demotion rate attached, never bare.
- **Negative-result discipline**: whatever the number, it publishes. A protocol that demotes everything
  is not an embarrassment here — it is the measurement.

---


---

## The Problem

The site's A2ACW characterization (`/research-philosophy`, `/for-researchers`) is precise about
**specificity**: 0/47 same-corpus survivors passed out-of-distribution expert audit — the
0%-detection number is real and correctly caveated as "not sufficient to claim calibrated
sensitivity" (per the 2026-06-27 fix).

What the site has never measured, and doesn't currently flag as a *separate* gap, is
**sensitivity (true-positive rate)**. Pass 4 today put it precisely:

> "A2ACW is also unvalidated as a detector in the other direction — there's no positive control
> (no seeded known-novel result to confirm the filter *would* flag genuine novelty), so its
> true-positive rate is undefined, not just its specificity."

This is a distinct claim from the existing "0% specificity, corpus not independent" finding
(`project_a2acw_specificity_framework_reuse`, `project_a2acw_detector_null_class`). Those audit
whether A2ACW's *rejections* are trustworthy. This is about whether A2ACW's *acceptances* would
ever fire — i.e., whether the filter is calibrated at all, or whether "0 survivors" is equally
consistent with "the filter works" and "the filter rejects everything, novel or not."

## What Would Answer This

A positive control: seed the A2ACW pipeline with a **known genuine discovery** (something
established as novel post-hoc, ideally post-training-cutoff for the auditing model) and see
whether the pipeline's internal-consistency filter passes it through to the OOD-audit stage.

Candidate seed corpus: recent (post-cutoff) genuinely novel physics results the auditing AI
could not have memorized. This is the same "OOD injection" resource identified in the
2026-06-28 explorer finding (`explorer-loop-is-a-monotone-closure-operator`, Open Thread #3)
as the one remaining research-grade question for the whole track — this topic is a concrete,
scoped instance of that broader need.

## Questions to Answer

1. Does a genuine post-cutoff discovery survive the A2ACW internal-consistency filter, or does
   the filter reject everything regardless of novelty (i.e., is "0 survivors" a null result about
   novelty, or a null result about the filter itself)?
2. If no such positive-control corpus exists or can be constructed cheaply, is that itself
   worth stating explicitly on `/research-philosophy` — "sensitivity untested, no positive
   control available" — rather than leaving the gap implicit?
3. Does this change how the A2ACW null (`project_a2acw_methodology_novelty_audit`) should be
   framed for a preprint — as a null result under an *uncalibrated* instrument, which is a
   weaker claim than a null result under a *validated* instrument?

## Maintainer Action (if this returns a real finding)

Add a one-line sensitivity caveat to `/research-philosophy`'s A2ACW section, parallel to the
existing specificity caveat, regardless of whether a positive control can actually be built.
