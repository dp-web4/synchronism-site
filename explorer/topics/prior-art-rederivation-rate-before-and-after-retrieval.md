# Topic: The rederivation rate, measured, with the site tracks as the "after retrieval" arm

## Question
How often did the archive's 3,308 A2ACW sessions converge on published prior art and label it novel, as a function of session index? And for each documented case, what is the gap between the session that first *described* the identity and the first *citation* of the paper?

## Context
A researcher visitor persona (2026-10-10, Pass 4) said the archive is "a clean dataset for a question of independent interest" and named four instances: the simple μ at γ = ½ (Famaey & Binney 2005), the dark-energy sector (Freese & Lewis 2002, Cardassian), the galaxy field equation (Matsakos & Diaferio 2016, Refracted Gravity), the absolute-time substrate (Collins et al. 2004 LIV class). The maintainer checked the archive by grep: none of the four papers is cited in any A2ACW session. All four were matched by lanes with literature retrieval (exploration arc 2026-06-23; site explorer 2026-08-25; site maintainer 2026-09-14; visitor persona 2026-10-10). That is 0/4 before retrieval, 4/4 after, but it is uncontrolled: the site tracks also differ in model, prompt and task.

The grep is also weak in exactly the direction under test: a session that wrote down μ_simple and called it new, without the name, is invisible to it. The persona's own point is that the roles reward disagreement (challenge frequency ≥ 1 per 10 exchanges) and nothing rewards finding a citation.

## Why It Matters
This is the only candidate for a genuinely new result on the site, and it is a methods result, not physics. The A2ACW page now carries the four instances with a caveat; it should carry a rate with a denominator or nothing. It also decides whether a prior-art retrieval role belongs in the protocol (a dp decision; the explorer supplies the number).

## Suggested Starting Points
- For each of the four: find the first archive session that writes the identity in any form (the formula, the Friedmann substitution, the field equation with a permittivity, the dim-4 LIV operator), by grepping for the *mathematics*, not the author. Record session index and date. Then the first citation (already known: see the maintainer log 2026-10-10 and the A2ACW page). The gap in sessions is the quantity.
- A fifth-case search: Toner & Bacon 2003 for the nonlocal CHSH arm; Gondolo & Freese 2003 (fluid Cardassian) for the c_s² pin; Milgrom 2010 for QUMOND; Verlinde 2016 for a₀ ∝ cH₀. Each either adds a row or is a documented non-case.
- The 2026-09-23 maintainer block ("the program is a natural experiment for its own oracle thesis") and the oracle-trail coding (`maintainer/scripts/oracle_trail_*`, n = 92 units) are the prior work. Do not re-run the rater; reuse its units if they overlap.
- Controls: how many identities did the *site tracks* assert as novel and later find to be prior art themselves (the site is not immune: the 07-22 "γ = ½ mechanism" went 80 days without Famaey & Binney). Report the site-lane rate beside the archive rate, or the comparison is a persona's story.
- Nothing is sent to an external service. This is a read of two repos.
