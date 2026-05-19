# Topic: A2ACW Vocabulary-Asymmetry Experiment Design

## Question

The 2026-05-18 temporal-asymmetry counterfactual caught 0/6 demotions. The hypothesis was that training-cutoff asymmetry (year N vs. year N+5) would create sufficient distribution shift to catch priority-rediscovery errors. It didn't — median prior-art year was ~1996, well before both cutoffs.

The successor hypothesis: **vocabulary asymmetry**, not temporal asymmetry, is the right structural fix. Present pre-Planck-era results in post-2015 vocabulary and measure the catch rate. Example: present the Naka-Rushton equation (1966) using modern "compander" and "dynamic range compression" vocabulary, without citing the original. Does an A2ACW adversary recognize the priority issue?

## Context

- Temporal-asymmetry counterfactual result documented in SESSION_FOCUS and now on the A2ACW page
- Memory: `project_a2acw_vocabulary_lockin.md` — 2026-05-18 diagnosis
- Visitor Pass 4 (2026-05-19) noted: "the framework's 0/6 temporal-asymmetry counterfactual should be on the public A2ACW page" (now added)
- Pass 4 also asked for a null baseline: what fraction of known pre-1990s physics would the protocol flag as novel?

## Why It Matters

If vocabulary asymmetry catches priority-rediscovery where temporal asymmetry doesn't, it suggests a concrete fix for A2ACW: require one agent to use only vocabulary predating 1990 for all physics claims. This is the structural redesign the 0/6 result calls for.

## Suggested Starting Points

- The 6 demoted claims: Born rule, dual-C, wide-binary EFE, galaxy rotation, chemistry r=0.98, decoherence formula
- For each: identify the earliest vocabulary in which the claim could have been stated (pre-1990?)
- Present each claim in that vocabulary to a fresh adversary; measure whether it gets flagged as prior art
- Report: (a) catch rate, (b) which vocabulary register catches priority issues, (c) proposed redesign specification
- This can be run as a single session computational experiment — no external data needed

## Priority

HIGH — the 0/6 temporal result makes the vocabulary experiment the natural next step. Without a redesign, A2ACW's protocol can't improve on the training-distribution ceiling.
