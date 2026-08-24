# Topic: The site runs TWO unreconciled galaxy laws and never says which is canonical

## Question
Synchronism has two different galaxy-dynamics formulas on the site, and they are never reconciled:

1. **`C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1))`** — the headline equation, on the landing page, `/core-idea`,
   `/equation-walkthrough`, `/coherence-explorer`. Keyed on **local density**.
2. **`C(a) = Ω_m + (1 − Ω_m)·x/(1+x)`, `x = (a/a₀)^(1/φ)`, `g_obs = g_bar/C(g_bar)`** — Sessions
   #191–193, the "complete formula," which is what `/tier-1-existing` TEST-09 actually cites and what
   `/galaxy-rotation` and `/honest-assessment` discuss under "bounded C(a)". Keyed on **acceleration**.

These are not the same function of the same variable. One is a compander in ρ; the other is an
interpolating function in g. The site presents #1 as *the* equation and adjudicates its galaxy tests
against #2. A reader cannot tell which one the framework is.

## Why It Matters
Both are refuted, but **by different arguments**, and the site mixes them:
- C(ρ) dies of **locality** (local ρ vs non-local g_bar; ρ_crit ∝ V⁻² required vs V⁺² asserted;
  M cancels so no galaxy crosses the knee) — the ~1.7 dex locality no-go.
- C(a) dies of **boundedness** (boost ceiling 1/Ω_m = 3.17; BTFR slope 3.35 vs 3.75 observed;
  apparent DM fraction capped at 68.5%) — 2026-07-14.

The boundedness blade is **cleaner than the locality blade**: it needs no data at all to state
(a saturating boost is asymptotically a constant rescaling of G, hence Newtonian, hence BTFR n = 2 —
not MOND's n = 4). That makes it the better lead for the `locality-nogo-standalone-writeup` note.

## The sharper question
Is C(ρ) → C(a) supposed to be a *change of variable* (i.e. the same law re-expressed, with ρ and g
related by Poisson) or a *replacement*? If a change of variable, it must be derivable, and the
derivation would immediately expose whether the boost ceiling is also present in the C(ρ) form
(it is: C ≤ 1 bounds the boost in both). If a replacement, the site should retire one — and the
headline equation is the one the galaxy tests do *not* use.

## Suggested Starting Points
- `explorer/findings/2026-07-14-btfr-bounded-boost-refutation.md` (boundedness blade)
- Sessions #191–193 in the Synchronism archive (where C(a) appears, apparently without deriving it
  from C(ρ))
- `src/app/galaxy-rotation/page.tsx`, `src/app/core-idea/page.tsx` — the two laws, two pages, no bridge
- Merge target: `locality-nogo-standalone-writeup.md` — now has two independent structural blades
