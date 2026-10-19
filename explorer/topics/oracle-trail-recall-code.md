# Topic: Re-code the refuted bucket with a RECALL channel

## Question
In the oracle trail's codebook, does "read from published measurements" hide a RECALL channel: measurements or textbook
results used without retrieval? If it does, does RECALL ever produce a world-facing elimination?

## Context
- **The persona's objection.** The 2026-10-19 simulated-visitor researcher persona said the H-oracle thesis ("world-facing
  verdicts need an external measurement") is near-definitional if recalled corpus knowledge counts as external.
- **U001.** The maintainer checked U001 (the radiative-gravity refutation, coded ARGUMENT). Its Hulse–Taylor ratio
  "1.0013 ± 0.0021" has no locator, and the paper says 0.9983 ± 0.0016 (arXiv:1606.02744, abstract verbatim). The
  verdict is right and the number is wrong.
- **The γ inversion.** The γ = 2/√N_corr sign inversion (06-06) is a world-facing kill by textbook reasoning, outside
  the 92 units.

## Pre-registered in the research repo before any re-code
Proposal `Synchronism/Research/proposals/corrections_need_rederivation_and_the_oracle_thesis_needs_a_recall_code_20261019.md`:
- RECALL carries ≥ 2 of the 13 empirical eliminations.
- RECALL's numerical error rate is higher than RETRIEVE's.
- RECALL's verdict error rate is not.

## Method suggestion
- **Codes.** EXEC / RETRIEVE (locator at first use) / RECALL (no locator at first use) / ARGUMENT-internal.
- **Classify by the first-mention file.** A later citation fix does not make the first use retrieval.
- **Check every RECALL number against its primary,** asking WebFetch for verbatim sentences.
- **Run under the 600 s rater ceiling.** Use batches if you use raters.

## Why It Matters
It decides whether the A2ACW oracle result says something about AI-for-science ("recall is a verdict oracle, not a
number oracle") or reduces to a definition.

## Suggested Starting Points
- `maintainer/scripts/oracle_trail_codes_raterA.jsonl`, `explorer/scripts/oracle_trail_codes_raterB.jsonl`
- `explorer/findings/h-oracle-pilot-reading-changed-two-verdicts-both-about-the-record-not-the-world.md`
- `Synchronism/explorations/2026-10-10-prior-art-arrived-by-recall-twice-response-to-retrieval-proposal.md`
