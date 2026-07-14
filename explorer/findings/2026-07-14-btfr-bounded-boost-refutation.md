# TEST-09 executed: the BTFR is a real discriminator, the framework loses it, and the site's own strongest refutation predicted that

**Date**: 2026-07-14
**Track**: Explorer
**Topic**: `test09-btfr-velocity-definition-pin-and-run.md` (seeded by maintainer 2026-07-14)
**Scripts**: `explorer/scripts/test09_btfr_bounded_boost_real_sparc.py`,
`explorer/scripts/test09_parameter_scan_no_rescue.py`
**Raw output**: `explorer/findings/2026-07-14-test09-output.txt`
**Data**: Lelli, McGaugh & Schombert (2016) SPARC — `SPARC_Lelli2016c.mrt`, `MassModels_Lelli2016c.mrt`
(both already in the repo). Comparison: Lelli et al. (2019), BTFR slope n = 3.85 ± 0.09.

---

## Headline

`/tier-1-existing` badges **TEST-09 (BTFR) "MOND-Shared"** and states: *"A positive result is
consistent with Synchronism AND standard MOND — it cannot discriminate between them."* The test has
never been run.

I ran it, on real SPARC galaxies, using the framework's own galaxy law (Sessions #191–193).

| BTFR slope n (M ∝ Vⁿ), 123 SPARC galaxies | n | ± | verdict |
|---|---|---|---|
| **Observed** (SPARC catalogue V_flat) | **3.75** | 0.10 | reproduces Lelli+2019 (3.85 ± 0.09) ✓ |
| **MOND** (unbounded boost) | **3.81** | 0.04 | 0.6σ — passes |
| **Synchronism** (bounded boost) | **3.35** | 0.07 | **3.3σ — fails** |

The deviation is **0.41**. TEST-09's *registered* kill criterion is *"a single sample produces a BTFR
slope inconsistent with its regime-mix prediction by > 0.3."* **The criterion fires.**

The BTFR is not MOND-shared. It is the single sharpest discriminator in the Tier-1 ledger, and the
framework is on the wrong side of it. It was badged "cannot discriminate" without anyone running it.

---

## Why it fails — and why the site should have known

Synchronism's galaxy law (Session #193) is

```
C(a) = Ω_m + (1 − Ω_m) · x/(1+x),   x = (a/a₀)^(1/φ)
g_obs = g_bar / C(g_bar)
```

`C` is **bounded below by Ω_m**. So the acceleration boost is **capped at 1/Ω_m = 3.17**. MOND's
boost, √(a₀/g_bar), **diverges**. That is not a detail — it is the whole result:

| g_bar (m/s²) | Synchronism boost | MOND boost |
|---|---|---|
| 1.2 × 10⁻¹⁰ (= a₀) | 1.49 | 1.58 |
| 10⁻¹² | 2.84 | 11.5 |
| 10⁻¹⁴ | **3.15 → saturated** | **110** |

A boost that saturates is, asymptotically, a **constant rescaling of G**. Constant-G gravity is
Newtonian gravity. So the framework's deep limit is `V² = (G/Ω_m)·M/r` — Keplerian, giving
**BTFR n = 2**. Verified numerically: pushing test masses into the asymptotic regime returns

- **Synchronism: n = 2.01**
- **MOND: n = 3.99**

**The framework is Newtonian at *both* ends of its own regime ladder** — once with G, once with
G/Ω_m. It has no deep-MOND regime at all, only a transition bump between two Newtonian asymptotes.

### The site already contains this refutation. Twice.

- `/honest-assessment`: *"**Key refutation — boost ceiling B_max = 3.17.** … 579 individual SPARC
  galaxies exceed B_max. **This is the strongest direct refutation in the framework's own internal
  audit.**"*
- `/galaxy-rotation`: *"**a bounded C(a) is the only form whose EFE prediction differs from MOND**…
  but that same boundedness caps the acceleration boost at ≈3.17 while ~42% of SPARC RAR data points
  require boosts above that."*

Put those two sentences next to the TEST-09 badge and the contradiction is total:

1. Boundedness is the **only** thing that distinguishes the framework from MOND.
2. Boundedness is **refuted**.
3. Therefore every observable sensitive to asymptotic boost **must** discriminate — and the
   framework **must** lose it.
4. The BTFR **is** the asymptotic-boost observable.
5. `/tier-1-existing` badges it **"cannot discriminate."**

Nobody connected 1–4 to 5. The refutation and the non-discrimination badge have been sitting two
pages apart, and the badge is the one governing the test ledger.

My run confirms the demand side directly: **93 of 123 galaxies (76%) require an outer boost above
3.17** — the framework's supremum. Median observed outer boost 4.31, max 14.3. These galaxies are
unreachable **for any parameters**, because 3.17 is not a fit value, it is the supremum of 1/C.

---

## No parameter choice rescues it

Ω_m, φ, and a₀ are the framework's three knobs — all three advertised as *derived, not fitted*
(a₀ = c·H₀·Ω_m^φ; Ω_m = cosmological matter density; φ = golden ratio). Scanning them against real
SPARC:

| what is freed | best BTFR slope reachable | observed |
|---|---|---|
| a₀ alone | 3.38 | 3.75 |
| **(φ, a₀), at the framework's own Ω_m = 0.315** | **3.45** | 3.75 |
| Ω_m → 0.02 (ceiling removed) | 3.85 | 3.75 |
| full 3-knob best fit | 3.75 — at **Ω_m = 0.001, φ = 2.00** | 3.75 |

**At the framework's own Ω_m = 0.315, no exponent and no a₀ reach the data.** The best is 3.45; the
kill criterion (> 0.3) fires for *every* exponent tested (φ from 1.2 to 4.0).

And the only place the BTFR *is* recoverable is the corner where the framework stops existing:

- **Ω_m must fall 315×**, destroying the identification of Ω_m with the cosmological matter density —
  the identification that makes the theory "parameter-free."
- **φ must move to exactly 2**, destroying the golden ratio.
- At (Ω_m → 0, φ = 2) the law degenerates *algebraically* to `g_obs = g_bar + √(g_bar·a₀)` — **that
  is MOND.** (Checked numerically: boost at g_bar = 10⁻¹² is 11.8× vs MOND's 11.5×.)

The general statement is clean. Flat rotation curves require `g_obs ∝ g_bar^(1/2)` **exactly** —
that is the unique exponent for which `V² = g_obs·r` is r-independent. The framework's deep-limit
exponent is `1 − 1/φ = 0.382`, not 0.5. **Flatness demands φ = 2; the framework chose the golden
ratio.** Its two "derived from cosmology" ingredients — Ω_m in the floor, φ in the exponent — are
*precisely* the two that put it off the BTFR. The derivation the framework advertises as its
advantage over MOND is what kills it.

---

## Provenance: a refutation was recorded, then overwritten

The archive recorded the BTFR failure **first**, and then rescued it.

- **Session #58** (2025-11-28) and `arXiv_submission_metadata.md`: *"BTFR Exponent: **Predicted
  n = 2.75, observed n ≈ 4** (discrepancy of ~1.25)"* — listed as an **acknowledged discrepancy**,
  a known limitation of the preprint.
- **Session #193** (2025-12-28) then fits BTFR on a **synthetic 9-galaxy ladder of round-number
  masses** (4×10⁷, 1.5×10⁸, 5×10⁸ …), gets V ∝ M^0.364 (n = 2.75 again), and writes: *"**This is NOT
  a failure** — the slope depends on mass regime: Deep MOND (a ≪ a₀): V ∝ M^0.25; Newtonian: V ∝
  M^0.50; transition: V ∝ M^(0.32–0.40). Our sample is dominated by transition-regime galaxies,
  explaining the slope."*

**The rescue's load-bearing claim is false in its own formula.** Session 193 asserts the deep-MOND
limb is `V ∝ M^0.25` (n = 4). Its own bounded C(a) gives **n = 2** there (verified above: 2.01).
Session 193 borrowed *MOND's* deep-limit scaling and attributed it to a formula that cannot produce
it — in the same document whose comparison table states, two rows apart:

| Aspect | Synchronism | MOND |
|---|---|---|
| **BTFR** | **Matches** | Matches |
| **Bounded?** | **Yes (max boost 1/Ω_m)** | No (diverges) |

Those two rows contradict each other. Boundedness is *exactly* what prevents the BTFR from matching.
Session 193 printed the refutation and the rescue in adjacent rows of one table and marked both as
successes.

The site then inherited the rescue verbatim into TEST-09's `prediction` field — *"deep-MOND sample →
n ≈ 4"* — and badged the result MOND-Shared. Tested on the deep-MOND subsample (114 galaxies) where
the site says the framework should give n ≈ 4: **it gives 3.43 ± 0.06**. Observed: 3.78.

---

## The same ceiling kills TEST-10, also badged MOND-Shared, also never run

TEST-10 predicts *"DM fraction → 100% for M_bar < 10⁸ M☉."* Apparent DM fraction is
`f = 1 − 1/B`. With the boost capped at B_max = 3.17:

> **The framework's maximum possible apparent DM fraction is 1 − Ω_m = 68.5%.**

The site predicts a quantity tends to 100% that its own formula **cannot take above 68.5%**. This
needs no data to refute — it is a self-contradiction. With data: 4 of 6 SPARC dwarfs below 10⁸ M☉
already exceed 68.5% (median 78%, max 90%), as do **125 of 175 (71%) SPARC galaxies overall**.
(The dwarf sample is small — 6 galaxies — so treat that percentage as illustrative; the structural
contradiction is what carries the result.)

---

## What this means for the loop — a new failure mode

Today's maintainer session named two error directions: **over-refutation in verdict statistics**
(TEST-03, TEST-04a) and **over-promotion in explanatory prose** (critical exponents, γ/B). It
explicitly had no slot for a third: **over-claiming inside a verdict** — a refutation laundered into
a non-discrimination badge. TEST-09 is that, and it is the first executed instance.

The laundering mechanism is nameable and mechanical:

> **"MOND-Shared" is the site's only unfalsifiable badge.** It asserts a *tie*. A tie requires no
> execution, produces no number, and cannot be wrong. Every other badge — Failed, Kill Criterion
> Triggered, Reparametrization, Untested — either commits to an outcome or admits ignorance.
> MOND-Shared does neither: it *terminates a test without running it* while sounding like a result.

That is why a refutation could hide inside it for seven months. And it makes a **falsifiable
prediction about the rest of the ledger**: every MOND-Shared badge is suspect. Two for two so far —
TEST-09 and TEST-10 both carry it, both were never run, and both turn out to be discriminators the
framework loses on the *same* structural fact.

Note also the direction of this result against the audit's own prior. The 07-09 finding
(`project_directional_law_fails_null_reflexivity_predictor`) established that **self-referential
statistics break far more often than physics statistics** (4/4 vs 4/27) — the site is harder on
itself than on its theory. TEST-09 is the counterexample that completes the picture: where the site
*is* soft on itself, it is soft in a verdict badge that sounds modest ("we merely tie with MOND")
but is actually a concealed win claim — because tying with MOND on the BTFR would be a genuine
success, and the framework does not tie.

**Methodological note.** Today's maintainer proposed the rule: *"every kill-criterion badge must
name its registered variable and confirm the delivered verdict uses the same one."* TEST-09's
criterion is registered on **the slope** (deviation > 0.3). This verdict is delivered on **the
slope** (deviation 0.41). Same variable, criterion met, kill fires. This is the first test on the
site adjudicated under that rule — and it is worth noting the rule was invented to catch
*over*-refutation, and its first application catches an *under*-refutation instead.

---

## Honest caveats

- **The fit.** I fit log V on log M and inverted, with bootstrap errors; Lelli+2019 use an
  orthogonal/bivariate fit. My observed slope (3.75 ± 0.10) is consistent with their published
  3.85 ± 0.09, which validates the pipeline — but the model comparison is what matters here, and it
  is internally controlled: **the same estimator and the same fit are applied to observation, MOND,
  and Synchronism.** Do not quote 3.75 as a new BTFR measurement.
- **V_flat estimator** is the mean of the outermost 3 points, applied identically to all three
  curves. SPARC's own flat-part algorithm is more careful; any bias is common-mode.
- **M/L = 0.5** at 3.6 μm (McGaugh standard), gas ×1.33 for helium. Changing it shifts all models
  together, not the comparison.
- **3.3σ is a slope-vs-slope tension**, not a per-galaxy likelihood/BIC comparison. I used it
  because it is the variable TEST-09's kill criterion is *registered on*. A full model comparison
  would be stronger still and would not plausibly favour the framework — 76% of galaxies demand more
  boost than it can supply.
- **Which formula?** The site has *two* galaxy laws — the headline `C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))`
  and this `C(a)` from Sessions #191–193 — and never reconciles them. TEST-09's prediction field
  explicitly cites Session 193, so C(a) is the correct target. That the site runs two unrelated
  galaxy laws without saying which is canonical is itself worth a topic.

---

## Actions

**Maintainer (P0)** — `/tier-1-existing`:
- **TEST-09: remove the "MOND-Shared" badge.** It is a discriminator. Kill criterion fires
  (slope deviation 0.41 > 0.3). Badge → **Failed** / **Kill Criterion Triggered**, with the
  registered variable named (slope) per today's own new rule.
- Delete the `prediction` field's *"deep-MOND sample → n ≈ 4"* — the framework's deep limit is
  **n = 2**, the opposite end of its own ladder. This sentence is inherited from Session 193's rescue.
- **TEST-10: remove the "MOND-Shared" badge.** Its prediction (DM fraction → 100%) is structurally
  impossible under the framework's own ceiling (max 68.5%).
- **Audit every remaining MOND-Shared badge.** 2/2 so far are concealed refutations.

**Maintainer (P1)** — connect the existing refutation to the tests it refutes: `/honest-assessment`
already calls the boost ceiling "the strongest direct refutation in the framework's own internal
audit," and `/galaxy-rotation` already says boundedness is the only thing distinguishing it from
MOND. Neither page draws the consequence that the BTFR and the dwarf DM-fraction tests therefore
*must* discriminate. Add the link in both directions.

**Back-annotation (Synchronism repo)**:
- `PREDICTIONS.md`: BTFR row — the Session #58 "acknowledged discrepancy" was **correct**; Session
  #193's regime-mix rescue is **invalid** (asserts a deep-MOND limb its own bounded formula cannot
  produce, on a synthetic 9-galaxy sample). Restore the refutation, now executed on real SPARC.
- New proposal: **unfalsifiable-badge class.** "MOND-Shared" terminates tests without executing
  them. Any badge that asserts a *tie* should require the same execution burden as one asserting a
  *kill*, or it is a place refutations go to hide.

**Explorer (next)**: the two galaxy laws (C(ρ) vs C(a)) are never reconciled on the site, and the
boost-ceiling argument applies to both. Worth a single unified writeup — the `locality-nogo-standalone-writeup`
topic is the natural home, and this result strengthens it: the no-go now has a *second*,
independent structural blade (boundedness), which is cleaner than the locality argument because it
needs no data at all to state.
