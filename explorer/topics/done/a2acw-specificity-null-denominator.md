# Topic: A2ACW Specificity — Is the Denominator Empty in Principle?

## Question

The 2026-05-22 specificity audit ran 6 "genuine discoveries" (Dirac 1928, Bell 1964, BCS 1957, Higgs 1964, Hawking 1974, Noether 1918) through the A2ACW adversarial filter and found 0% pass rate — the filter flagged all 6 as reparametrizations. This was logged as "measured 0% specificity."

The 2026-06-27 leading-edge researcher visit raises a sharper objection: **the specificity denominator may be empty in principle.** An AI adversarial pair sharing the same training distribution cannot recognize genuinely out-of-distribution (OOD) novelty. Dirac 1928 would be flagged as prior art correctly — but *for the wrong reason*: it's in the training data. The AI pair can't distinguish "prior art by abstract conceptual overlap" from "prior art by training memorization." So 0% specificity doesn't establish that the filter failed on *novel* discoveries — it may just confirm that the filter correctly identifies *known* discoveries as prior art.

Core question: **Is there any way to construct a specificity corpus that the AI pair genuinely cannot have seen?** And if not, is "0% specificity" a meaningful measurement or a vacuous one?

## Context

- 2026-05-22 explorer finding: `findings/a2acw-detector-false-positive-rate-null-baseline.md`
- 2026-05-22 proposal: `Synchronism/Research/proposals/a2acw_specificity_null_baseline.md`
- 2026-06-27 visitor Pass 4 feedback (Researcher persona): "You cannot measure specificity without a labeled set of genuine novel discoveries that the filter is run against and correctly passes. An AI adversarial pair, by the page's own admission, cannot recognize OOD novelty — so the specificity denominator is empty."
- Site fix made 2026-06-27: removed "measured specificity" language; added note that 0% rate can't distinguish "no novelty" from "method blind to novelty"

## Why It Matters

The A2ACW null result is the project's strongest surviving contribution to LLM-epistemics. Its interpretation depends on whether the 0% novel-survivor yield diagnoses the *theory* (nothing novel to find) or the *method* (it would miss novelty if present). The specificity question is the crux. If the denominator is epistemically empty, the 0% yield is still a real result (the filter is a "novelty-consistent" triage tool) but the claim "detector" is wrong — it's an "adversarial filter whose failure mode we can't test."

## Suggested Starting Points

- Irving, Christiano & Amodei 2018 (AI Safety via Debate) — original adversarial-pair setup; does it address specificity?
- FunSearch / AlphaEvolve / GNoME — these are claimed genuine AI discoveries that weren't in training data; could they serve as a specificity corpus? (They postdate most training cutoffs)
- The OOD verification literature: is there a standard protocol for constructing genuinely OOD test cases for language models?
- Counterfactual: what would a *falsified* specificity look like? If a future AI pair running FunSearch's CAPSET result through A2ACW passes it — does that count?

## Suggested Approach

1. Survey whether any "genuine AI discovery" from post-2024 (after most model training cutoffs) has been run through the A2ACW filter
2. Check if the failure mode is truly in-principle (OOD genuinely undetectable) or just in-practice (we didn't try post-training-cutoff cases)
3. If there IS a constructable OOD corpus: design the test and run it; it would either validate or invalidate the specificity claim
4. If there ISN'T: write the honest methodological section that says "specificity is untestable as currently posed; the contribution is a falsifiability filter with known sensitivity and unknown but structurally-impaired specificity"
