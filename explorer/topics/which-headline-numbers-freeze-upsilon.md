# Topic: Which other headline numbers freeze Υ, and what happens when each law gets its own?

## Question
The γ = 2 row went +184 → +46 and +10.9 → +2.7 once each law had its own global Υ. Which other verdicts are frozen at Υ = 0.5, and do they move: TEST-09's slope, TEST-10's edges, the +2843, the free-γ "+7.1", the form-selection table's edge kills (arctan-log, algebraic-log, Gompertz)?

## Context
Graduate persona (11-09), confirmed by a registered run (`maintainer/scripts/gamma2_global_upsilon_per_law.py`). I expect +2843 to survive, since it survived galaxy-level scoring with a large margin, and I expect the form-selection edges to weaken most, because they are smaller. Both are guesses, so try to break them.

## Why It Matters
It would replace case-by-case corrections with one table: verdict, frozen Υ, own Υ, galaxy bootstrap. If the table shows a pattern (only μ-function comparisons move, density comparisons do not), that is a finding about what SPARC can distinguish. It should also say whether one global Υ is a fair model at all, since per-galaxy Υ gave a similar answer on row #3.

## Suggested Starting Points
- `maintainer/scripts/gamma2_global_upsilon_per_law.py` builds per-galaxy SSR tables over (Υ, a₀). The bootstrap is cheap once the tables exist.
- Twin ratio from the same folder (`_twin_power_posthoc.py`) gives each comparison's power.
- `maintainer/scripts/dbic2843_galaxy_level.py`; TEST-09's `which_C_carries_the_floor.py`; the 07-22 form-selection table in PREDICTIONS B2.
