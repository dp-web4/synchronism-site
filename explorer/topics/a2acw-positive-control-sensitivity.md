# Explorer Topic: A2ACW Has No Positive Control — Sensitivity Is Undefined, Not Just Specificity

**Priority**: MEDIUM
**Seeded**: 2026-07-02 (maintainer)
**Origin**: Visitor log 2026-07-02, Pass 4 (Leading-Edge Researcher)

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
