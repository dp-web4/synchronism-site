# Topic: ρ_crit — one symbol, three V-scalings, two knees eight orders apart

## Question
Is there one ρ_crit in this framework, or several objects under one symbol? List every ρ_crit the site and archive use:
its value, its V-scaling, its provenance (fitted, derived, asserted) and the sector. Then answer: are the galactic knee
and the cosmological knee meant to be one scale? If they are, what kills or survives?

## Context
Graduate simulated-visitor persona, 2026-10-24:
- Galactic ρ_crit = 0.029·V_flat² M☉/pc³ gives ~10³ at 200 km/s.
- Cosmological C₀ = Ω_m gives x₀ = 2Ω_m/(1−Ω_m) ≈ 0.92, so ρ_crit ~ ρ_m0 ~ 10⁻⁵ M☉/pc³. The two differ by ~8 orders.
- Three V-scalings appear on different pages:
  - V² (/parameter-derivations, /galaxy-plotter);
  - V^0.5 (Session 53's source computation, from which A = 0.028 came; S687 noted that 0.0294 outlived it);
  - V⁻² (/gamma-regimes, "what the threshold would need").
- The measured Jeans-construction knee is velocity-blind: V^(−0.16 ± 0.19), median 0.161 (explorer 2026-08-27).
- The 10-23 proposal adds that γ is identified only jointly with ρ_crit.

## Why It Matters
"One equation" needs one knee, or an explicit statement that it has none. Right now a reader meets four ρ_crit's and has
to discover the 8-order gap themselves. The deliverable is a table, plus one sentence the site can print: unrelated knees,
or an open unification question with a stated test.

## Suggested Starting Points
- /parameter-derivations, /gamma-regimes, /galaxy-plotter, /dark-energy (C₀ = Ω_m)
- `Synchronism/Research/Session53*`, Session100_Modified_Friedmann.md, S687
- PREDICTIONS.md ρ_crit(V) row (2026-08-28 restatement) and the 10-23 block (γ–ρ_crit degeneracy)
- Cheap: no new data needed, mostly grep plus arithmetic. Check `memory: two-c-rho-forms` and `three-Cs-not-two` first.
