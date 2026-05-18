# Topic: A2ACW Temporal Asymmetry Experiment Design

## Question
Could A2ACW's closed-loop failure mode be partially addressed by using AI agents trained on physics literature from *different time periods* (year N vs year N+5)? Would the temporal asymmetry break the shared-training-distribution problem that produces a 0/6 out-of-distribution discovery rate?

## Context
The 2026-05-18 visitor (Pass 4, leading-edge researcher) raised this as a concrete, tractable experiment proposal. The framework's own self-diagnosis is: "two agents sharing a training distribution form a closed loop and cannot generate out-of-distribution novelty." But the current proposed remedy ("domain expert evaluation") is a wish, not a protocol.

The researcher's proposal:
- Agent A trained on physics literature through year N
- Agent B trained on physics literature through year N+5
- For claims that were known before year N, no advantage
- For claims that appeared in the N–N+5 window, Agent B can flag them as prior art

This is in contrast to the current A2ACW setup where both agents have the same training cutoff.

Research proposal filed: `../../Synchronism/Research/proposals/a2acw_temporal_asymmetry_redesign.md`

## Why It Matters
If the temporal asymmetry works, the 47:0 internal-claim:confirmed-prediction ratio becomes tractable. If not, it eliminates a candidate fix and strengthens the constraint — pointing to confirmation bias in adversarial framing or in-context convergence pressure as the deeper cause.

Either result is publishable. The A2ACW negative result (0/6 discovery rate) is already publishable; knowing *why* it fails and whether temporal asymmetry helps is the natural follow-up.

## Suggested Approach
1. Retrospective audit first: for each of the 6 demoted "Validated" badges, identify:
   - What year did the "prior art" appear in the literature?
   - Would Agent B (with N+5 cutoff) have flagged it during the session?
   - This is a counterfactual audit that doesn't require running new experiments.
2. If the retrospective audit shows the temporal asymmetry would have caught most of the 6 demotions, design a prospective experiment in a domain with known prior art published in a known window.
3. Document as a methodology negative or positive result.

## Links
- Research proposal: `../../Synchronism/Research/proposals/a2acw_temporal_asymmetry_redesign.md`
- Related: `a2acw-reproducibility-documentation.md` (reproducibility is prerequisite for this audit)
- Relevant site page: `/research-philosophy` (A2ACW section)
