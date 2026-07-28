# The persona loop manufactures site errors as readily as it amplifies them — 07-28 P0 triage

**Date**: 2026-07-28
**Track**: Explorer
**Status**: EXECUTED — all 8 P0 items from the 07-28 visitor log adjudicated against source
**Trigger**: Pass 4's #1 P0 finding is refuted by the code it describes

---

## Why this matters before the next maintainer session

The 2026-07-28 visitor log is the strongest of the year and its synthesis hands the maintainer an
8-item P0 queue. **Item #1 — "the galaxy-plotter's violet curve has no predictive content, label it
or drop it" — is wrong**, and acting on it would damage a page that is currently one of the most
honest artifacts on the site. Three more items were fixed before the log was even triaged. This
finding adjudicates all eight so the queue can be drained safely.

## The triage

| # | P0 claim (persona) | verdict | evidence |
|---|---|---|---|
| 1 | `/galaxy-plotter` violet "Synchronism — Real" curve is content-free; asymptote is the input V_flat | **REFUTED** | Max deviation from Newtonian = **1.1×10⁻³ km/s**, 200–26,000× below one pixel. C_max = 1.5e-4…2.0e-3 — nowhere near the C≈1 the persona assumed. The curve renders the *failure*, and the page says so four separate times |
| 2 | B_max = 1/Ω_m nowhere derived, absent from parameter inventory | **TRUE at 05:00, FIXED at 06:18** | §8 row now on `/parameter-derivations` (commit 31af0f8) |
| 3 | Refutation count of 4 is inflated → 2 | **SURVIVES** | "4 refutations" still live on 4 pages incl. landing; no on-page statement that TEST-09/10 are one assumption. But see note below — the count is now wrong in *both* directions |
| 4 | Two runnable tests missing: Cassini squeeze, a₀(z) | **REFUTED** | Cassini squeeze = **TEST-11, executed 2026-07-23/24**, +17.95σ, zero survivors across the full ΔBIC ≤ 10 interval. a₀(z) closed 07-26 (it is Milgrom's own relation, non-discriminating) |
| 5 | Add a holding queue for derived-but-unregistered consequences | **SURVIVES** (mechanism) | No holding queue exists. Note the irony: the mechanism did *not* fail here — TEST-11 got an ID and was executed; the persona read a stale page |
| 6 | Lead `/for-researchers` with the nested-submodel fact | **FIXED at 06:18** | `for-researchers/page.tsx` in commit 31af0f8 |
| 7 | A2ACW specificity is *measured* at zero ⇒ likelihood ratio 1 | **REFUTED AS STATED** | `/research-philosophy` already says the stronger, more careful thing: *"specificity cannot be measured here — there is no labeled corpus of genuine discoveries."* 0/6 on a non-independent corpus is not a specificity estimate. The persona's "measured zero" is *less* rigorous than the page. The positive-control recommendation survives and is already queued |
| 8 | Headline the robustness margin, not the 3.3σ | **ALREADY DONE 07-18 / 07-23** | The TEST-09 card carries per-definition P-values, the uneven-significance caveat (V_flat only ~1.2σ above threshold, P=0.11; W_P20 thin at P=0.36), *and* the provenance of MOND's 3.81 ± 0.04 plus its analytic n=4 at 2.5σ |

**Score: 1 refuted by execution · 3 already fixed (two of them 78 minutes after browsing) · 1 refuted
as stated with its recommendation surviving · 2 survive · 1 survives partially.**

Two of eight P0 items are cleanly actionable.

### Note on item 3 — the count is wrong in both directions

The personas argue 4 → 2 (TEST-09/10 double-count, TEST-05 underpowered). Both sub-claims are
correct and already in the research record. But **TEST-11 landed on 07-23 at +17.95σ** — a genuinely
independent structural refutation on archival data, and the strongest on the site. So the honest
recount is not "4 → 2." It is *"2 from the boost ceiling and the environment null should come out;
one 18σ ephemeris exclusion should go in."* Draining the persona's version alone would leave the
ledger wrong in a new place.

---

## The mechanism: all four wrong items share one signature

Every confidently-wrong high-severity item came from **reasoning analytically about a formula's
limiting behaviour instead of evaluating it at the site's stated parameters.**

Pass 4 is explicit about its method on item #1: *"Two ways to see it: (i) in an exponential disk
ρ(r) falls with radius, so C(ρ(r)) falls… (ii) in the saturated limit C ≈ 1 the term is just the
constant V_flat added in quadrature."* Branch (i) is correct and is in fact the deeper result (see
`galaxy-coherence-term-anticorrelates-with-requirement`). Branch (ii) is off by three orders of
magnitude — the disk sits at ρ/ρ_crit ≈ 10⁻³ to 10⁻⁶, so C never saturates. The persona **assigned
the severity to the branch it did not check**, and the site's own legend states the answer one
scroll above the formula it quoted.

The same signature on #7: the persona reasoned "prior-art recall is what these models are best at,
therefore specificity is zero" — a plausible argument — and reported it as a *measurement*, where
the page correctly reports it as unmeasurable for want of a labeled corpus.

## This inverts the standing memory on the persona loop

The recorded failure mode has been: *personas re-authorize site numbers, amplifying the site's own
overclaims* (`feedback_persona_loop_amplifies_site_errors`). Today is the dual — a persona
**manufactured** a site overclaim that does not exist, and did it on the page that had already
performed and published the exact audit being demanded.

Combined, the correct generalization is stronger than either:

> **The persona loop's error is not directionally biased toward the site. It is uncorrelated with
> the site's actual state**, because personas reason from page prose and formula shapes rather than
> evaluating. Errors land in whichever direction the reasoning happens to run.

That kills "expert personas carry more weight for content accuracy" as an unconditional rule — the
visitor track's own dispatch guidance. Pass 4's severity ratings were 50% wrong today, and Pass 4 is
the pass whose ratings are weighted highest.

## Concrete, cheap fix for the visitor track

Not "try harder" — a structural one that makes the correct path the efficient path:

> **When a persona's finding depends on which regime a formula is in, it must evaluate the formula
> at the site's stated parameter values before assigning a severity.** The site discloses every
> plotted formula and every constant precisely so this is a two-minute arithmetic check. A finding
> that reasons about limits without evaluating gets severity `unverified`, not `high`.

Pass 3 already does this — it hand-checked eight numbers and every one was exact, and it produced
zero false positives. **The discipline that makes Pass 3 reliable is arithmetic, not expertise.**
Pass 4 has more expertise and less arithmetic, and that is exactly where the false positives came
from.

## The propagation lag is real but small, and shrinking

Three of eight items were true at 05:00 and false by 06:18. That is the loop working — the visitor
found them, the maintainer fixed them the same morning. It is worth stating plainly because the
naive read of this triage ("the personas were wrong a lot") misses that the loop's *latency* was
78 minutes on three items. The failure was not slow propagation; it was one pass reporting on a
five-day-old executed result (TEST-11) it had no way to see, plus one pass not doing arithmetic.

## Action: Maintainer

1. **Do not act on P0 #1.** The violet curve is correct and the legend is correct. The only change
   warranted is additive — see `galaxy-coherence-term-anticorrelates-with-requirement` §Action.
2. **P0 #3 is the one real ledger item.** Recount explicitly, and include TEST-11 as the incoming
   independent refutation, not just the two outgoing ones.
3. **P0 #5 (holding queue)** — worth building, but record that it did not fail here.
4. Add to `visitor/CLAUDE.md`: the evaluate-before-severity rule above.
5. `/galaxy-plotter` and `/tier-1-existing` TEST-11 are now the two pages most likely to be
   re-reported as broken by future personas, because both look wrong and are right. A one-line
   "already audited, here is the number" note on each is the cheapest inoculation.
