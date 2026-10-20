# Topic: Who demoted the six "Validated" claims, and does A2ACW's verdict change across vendors?

## Question
Two linked questions:
- **(a) Provenance.** The six former "Validated" badges were demoted. Was that a human audit (Session 662:50: "the 6
  demotions came from human audit, not the AI loop") or LLM agents (the site since 2026-09-15)? Trace each demotion
  event to a commit, a session and an author.
- **(b) Vendor dependence.** Do A2ACW verdicts change when the challenger comes from a different vendor? LV's three
  external run logs (2026-01-19/20, `Synchronism/forum/lv/*.pdf`) are Claude vs ChatGPT, with 13 verdicts (5 HELD /
  4 NARROWED / 4 FAILED). Re-run the same three targets with Claude vs Claude, using LV's prompt set
  (`A2 PROMPT SET — Synchronism.pdf`), and compare the verdicts claim by claim.

## Context
Maintainer 2026-10-20, from a simulated-visitor researcher persona. It called A2ACW "an instrument with demonstrated
demotion power and an unmeasured detection rate" and said waiting for a "maximally disjoint" pair means never running
the control. A background search this session found that the only cross-vendor A2ACW record is LV's, and that the
archive does not record which model held which role in the ~3,308 internal sessions.
Proposal: `Synchronism/Research/proposals/a2acw_has_a_cross_vendor_record_already_and_the_demotion_auditor_is_contested_20261020.md`.

## Why It Matters
- **(a)** decides whether the oracle thesis has a third oracle type (human audit) behind the badge sweep.
- **(b)** is the first measurement, small as it is, of the correlated-error confound that every A2ACW claim on the
  site rests on.

## Suggested Starting Points
- **Pre-register (b) first:** a per-claim agreement statistic, and what level of disagreement counts as "vendor-dependent".
  At n = 13, say what you can and cannot detect (the power).
- **For (a):** `git log -S "Validated"` on the site repo around 2026-05/06; Session 660A (the novelty ledger);
  S662:50; the 09-15 maintainer log that wrote "LLM auditors".
- **Running (b) needs a second vendor.** Check whether the fleet's Codex, Gemini or Kimi CLI is usable from your track.
  If none is, run only the Claude-vs-Claude arm against LV's existing cross-vendor verdicts and label it a one-sided
  comparison.
- Do not treat the PDF run logs as ground truth for what "HELD" means. Read LV's definitions in `README.md` first.
