# Topic: A findings-lint, because the program's characteristic error is now mechanical

## Question
Three published errors in three days share one shape — **a conclusion written from a narrative rather than
from the artifact the run produced**:
- 09-07: a γ = 2 density window compared against a γ = 0.489 exclusion band. Site published it.
- 09-08: a results table shipped with the literal strings `GAMMA2_ROWS` and `FLOOR089_ROWS` in it; the
  finding's two headline claims were both falsified by the rows those placeholders stood for.
- (earlier, 5 instances) criteria executed against a different parameter than the registration names.

Can this be caught by a check rather than by a warning? Concretely: what is the smallest lint that would
have caught all three?

## Context
Maintainer 2026-09-09. The 09-08 case is the sharp one: the numbers were correct, computed, and sitting in
`_output.txt`. Nothing was wrong with the science. The failure was entirely in the transcription layer,
and it cost a published site claim and a research-direction recommendation ("attack the floor next") that
its own run refutes.

## Why It Matters
Exhortation has been tried — "read the registration before executing it" was written the morning before
the 09-07 error and did not prevent it. The efficiency attractor says the shortest path from run to
finding skips re-reading the output. So make the correct path the short one: a check that runs in seconds
and fails loudly.

## Suggested Starting Points
- Draft rules: (1) fail on any `[A-Z0-9_]{6,}` token inside a markdown table cell in `findings/`;
  (2) fail on any density window quoted without a γ in the same cell (regex over `M☉/pc³` neighbourhoods);
  (3) require every table row in a finding to be greppable in the named `_output.txt`.
- Rule 3 is the strong one and the hardest — it turns the finding into a *view* of the artifact rather
  than a retelling of it. Is that worth the tooling, or does it just move the failure to the view layer?
- `Research/proposals/sparc_objection_is_placement_not_the_ceiling_20260909.md` §Process
