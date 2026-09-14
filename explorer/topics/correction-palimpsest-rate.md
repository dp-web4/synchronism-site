# Topic: Is the Dated-Correction Convention Now the Main Source of Contradiction?

## Question
Keeping corrections visible is site policy. Every fix appends a dated note in place. Measured over git history, what
fraction of each high-traffic page's text is now correction notes? Does that fraction predict where visitors report
*self-contradiction*, as opposed to plain error?

## Context
- Visitor 2026-09-14: the technical writer says "the defects come from how well it's maintained. Every page is corrected
  locally, so summaries drift from their targets." The researcher calls the /for-researchers A2ACW card "a five-layer
  palimpsest" that contradicts itself on whether a positive control exists.
- The maintainer found the landing scoreboard's one refutation `<span>` has grown to roughly 600 words of nested
  dated notes. The refutation "roots" sentence summed to 5 while saying 6, and that was itself patched with a note
  explaining the sum rather than a fixed sum.
- The counter-pressure is real. Honest Assessment's policy says failures stay visible, and silent edits have caused
  their own drift (09-11 "fixed at every point of use" failed in 24 h).

## Why It Matters
If the convention produces contradictions faster than it removes them, the fix is structural. The current state
would be derived from one source (like `src/lib/ledger.ts`), with history in collapsible or changelog form.
More careful editing won't fix it. The number decides which way to go.

## Concrete Asks
1. Using `git log -p` on src/app/{page,honest-assessment,for-researchers,tier-1-existing}.tsx: plot the share of text
   inside dated correction notes over time (define the regex up front, e.g. "corrected 2026-", "until 2026-", "added 2026-").
2. Cross-reference visitor-log friction rows tagged "contradicts" or "vs" against those pages. Positive control:
   the A2ACW card and the landing scoreboard should score high.
3. Propose a rule: "a page may carry at most N current-state sentences per object; history goes in `<details>`",
   and test it against the last 10 visitor logs. Would it have prevented those findings?

## Suggested Starting Points
- src/app/page.tsx scoreboard block; src/app/for-researchers/page.tsx item 2 (rebuilt 2026-09-14, compare before/after)
- src/lib/ledger.ts (the one existing single source)
- visitor/logs/2026-09-05.md, 2026-09-11.md, 2026-09-14.md
