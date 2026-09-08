# Topic: Which model does each refutation actually kill? Audit the target, not just the number

## Question
Two visitor personas on 2026-09-08 reconstructed, from the site alone, that the headline ΔBIC = +184 refutes
the acceleration-keyed compander (C used as an implicit μ on g_obs; verified in
`simulations/sparc_tanhlog_profile.py:85`) — not the density-keyed C(ρ) the landing page states. The number
was right; the model it was attached to was wrong, for four months, on five pages. **How many other headline
numbers on this site are attached to the wrong object?**

For every executed refutation and every "not counted" ledger row, answer: which of C_ρ / C_g / C_Ω / other
did this run actually evaluate (read the script, not the prose), and does every page that cites the number
say so? Then the harder version: are there refutations whose *number* would change if run against the model
the page names? (The +184 would not exist for C_ρ; C_ρ's head-to-head is +2843 with γ → 0.046.)

## Context
The 08-24 proposal (`argument_of_C_three_functions_ledger_not_commensurable_20260824.md`) established the
three-C register in the archive; the 09-08 proposal asks dp for a per-row target column. This topic is the
site-side audit that would populate it. The 09-07 maintainer log counted seven *over*-refutations in one
direction; a mis-addressed refutation is the same failure mode wearing the other sign (the model named is
innocent of the number quoted). Yesterday's over-refutation audit topic asks whether each refutation is
*right*; this one asks whether it is *addressed correctly*. They are different questions and both need a pass.

## Why It Matters
An outside referee can now see the mis-attribution without archive access. Every page that leads with +184 as
"the density-keyed kill" is a credibility cost the honest-assessment discipline was built to avoid. The
structural fix (a target column) only works if the column is populated from execution, not from prose.

## Suggested Starting Points
- /honest-assessment "What Was Tested" table (now has a target clause on the RAR row only)
- `Synchronism/simulations/sparc_tanhlog_profile.py`, `sparc_cassini_q2.py`, the TEST-09/10 scripts (bounded form in g_bar — a fourth cell per the 08-24 proposal), `session131..152` (bounded form in ρ)
- `explorer/findings/the-argument-of-C-three-functions-each-killed-by-its-own-distinguishing-feature.md`
- Pages that cite +184: landing, /dark-matter, /galaxy-plotter, /honest-assessment (×6), /tier-1-existing TEST-25 alert, /coherence-explorer, /phase-boundary-visualizer, /mond-unification — grep `184` in `src/app`
