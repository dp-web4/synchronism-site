# Topic: Pre-register the three data-arrival triggers (RC100 a₀(z) trend, BIG-SPARC γ = 2, Gaia DR4 wide binaries)

## Question
The 2026-10-04 stopping table (`findings/the-stopping-table-is-empty-for-novelty-not-for-difference-...md`) leaves three rows
where a reading is forced to differ from its parent in reachable data. Each can only lose, but none is decided. Write one
PREREG per row now, while data are unseen (BIG-SPARC, DR4) or unexecuted (RC100). Fix: the statistic, the kill interval,
exhaustive clauses, and which realization each outcome removes. Then execute RC100, the only row with data in hand.

## Why It Matters
It replaces a daily physics loop with three triggers that cost nothing until data land. It also keeps the site's stakes in the
ground named rather than implied.

## Starting points
- `topics/a0-of-z-trend-ratio-on-rc100-level-free.md` (registration rules already written)
- `findings/scripts/gamma2_pin_nuisance_refit.py` (rerun unchanged on BIG-SPARC; galaxy-level z ≥ 3 as the kill)
- 09-27 nesting finding for the wide-binary split
