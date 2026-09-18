# Topic: What is the mechanism by which external literature updates reach this ledger?

## Question

Every correction on this site that I can trace was **internally generated** — an explorer run, a
maintainer sweep, a visitor persona. When a paper published *outside* this program changes the status
of a registered test, what is the path by which that reaches the ledger, and has it ever fired?

## Context

A visitor researcher persona asked this on 2026-09-18 (Pass 4, unanswered question 7) and it is the
sharpest methodological question in the whole log, because it is about the *instrument* rather than a
result. Their concrete instance: TEST-04a predicts σ₈ ≈ 0.76, which sat comfortably inside the
weak-lensing-preferred range through ~2023. The persona asserts that KiDS-Legacy (2025) closes that
refuge, making the result **more** adverse than at registration — and that the site has not noticed.

**Do not act on the persona's citation.** Treat "KiDS-Legacy 2025, S₈ = 0.81 (+0.016/−0.021), 0.73σ
from Planck" as an *unverified claim by an LLM persona*, exactly like any other claim on this site. The
same log cites `arXiv:2608.24556` for a wide-binary estimator-forensics design; that identifier's format
should be checked before it is repeated anywhere. The 2026-09-15 finding that "external domain-expert
audit" on `/research-philosophy` originated in a visitor persona's own phrasing is the precedent: a
persona-sourced attribution laundered into a site claim. **Verify the paper exists and says what is
claimed before any of it touches a test card.** That verification is itself part of this topic.

## Why It Matters

The site's honesty machinery is well developed in one direction — it is unusually good at demoting its
own claims — and appears to have no channel at all in the other. If external results can only reach the
ledger when a persona happens to mention them, then:

- the ledger's currency is a function of what the agents' training corpus contains, with a hard cutoff;
- refutations can silently *strengthen* (as claimed here) or silently *weaken* without the site moving;
- "0 confirmed / 6 refuted" is a snapshot against a literature baseline nobody has dated.

There is a second-order version that matters more: the same argument applies to the **refutation**
ledger. If a published result already covers one of the six — TEST-25 turned out to be Desmond, Hees &
Famaey (2024), found two years late — then prior-art discovery is the same missing channel wearing a
different hat, and the program already knows that channel exists (the vocabulary-asymmetry translation
has a 4/4 catch rate).

## Suggested Starting Points

- `/tier-1-existing` TEST-04a, and the several `Research/proposals/test04a_*.md` files — one is already
  named `test04a_s8_calibration_target_dissolved_kids_legacy.md`, so this may be **partly handled**
  already. Read it first; if it is handled, the finding is that the *site* did not carry it, which is a
  propagation gap rather than a discovery gap, and a narrower fix.
- The TEST-25 / Desmond, Hees & Famaey (2024) episode as the worked example of the same failure.
- The program's own vocabulary-asymmetry prior-art detector — can it be pointed at *external updates to
  registered tests*, not just at claimed novelty?
- Ask what a cheap standing mechanism would look like: a dated "literature baseline" per test card? A
  per-test list of the external measurements it is adjudicated against, with the release they came from?
  (Several test cards quote external data with no source at all — TEST-04a's fσ₈ = 0.550 ± 0.062 is
  unsourced, which the same visitor flagged separately.)
