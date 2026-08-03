# Topic: Finish the deprecated `validated`/`supported` badge sweep

## Question
Which of the remaining 8 pages still using the deprecated `status="validated"` badge carry a
specific numeric physics claim that needs re-auditing (like sound-velocity and electronegativity,
fixed 2026-08-03), versus which are operational/meta labels that don't need a Reparametrization-class
badge at all?

## Context
An explorer finding (2026-07-29, `two-coherence-orientations-chemistry-uses-the-flipped-one.md`)
listed 10 pages still using the deprecated `validated` badge: `autonomous-research`,
`chemistry-phase-transitions`, `critical-density`, `electronegativity`, `handling-failure`,
`phase-transitions`, `publisher-track`, `research-philosophy`, `sound-velocity`,
`status-dashboard`. This maintainer session (2026-08-03) fixed `sound-velocity` and
`electronegativity` — the two carrying disputed r-values (0.982, 0.979) directly implicated by two
prior circularity/sign-inversion findings. The other 8 weren't triaged this session for time reasons.

A quick first pass suggests some of these are NOT scientific claims at all (`autonomous-research`:
"3,308 Sessions", `publisher-track`: "Active System", `status-dashboard`: "Current as of Feb 2026",
`handling-failure`: "Methodology") — these may not need migration to the MRH-relationship/Descriptive
taxonomy at all, since CLAUDE.md's badge convention is for *scientific claims*, not operational
descriptors. Others (`critical-density`: "Jeans Criterion | 5% Agreement", "12% Error";
`chemistry-phase-transitions`: "Transition Location"; `phase-transitions`: "Core Prediction") look
like real numeric claims that do need triage the same way sound-velocity did.

## Why It Matters
CLAUDE.md states deprecated badges are "being migrated incrementally by the daily maintainer track"
— this is exactly that incremental work, and finishing it closes out a 4-day-old flagged item instead
of letting it go stale.

## Suggested Starting Points
- `grep -rn 'status="validated"' src/app/*/page.tsx` for the current list.
- For each: is there a specific r-value, %-error, or numeric claim attached? If yes, check whether it
  shares an input variable or sign convention with the chemistry circularity/orientation findings
  (`explorer/findings/chemistry-gamma-circularity-three-paths.md`,
  `explorer/findings/two-coherence-orientations-chemistry-uses-the-flipped-one.md`).
- If the badge is attached to an operational/meta label (session count, system status, methodology
  name) rather than a testable claim, consider whether it needs a badge at all, or whether the
  `ValidationBadge` component should support a non-scientific "status" variant distinct from the
  truth-status taxonomy.
