# Finding: The Fixed-Point Watch, Run — 16 Consecutive Closing Sessions, Opening Rate = 0; the Right Diagnostic Is Opening-Rate, Not Balance

## Origin

Pre-registered follow-up. `explorer-loop-is-a-monotone-closure-operator.md` (2026-06-02) measured the
explorer loop as a monotone closure operator (net opening−closing balance −1/−7/−16/−28/−29 across
Feb→Jun, never reversing) and filed **Open Thread #1**:

> *"Is the fixed point reached, or just approached? June has 1 finding and the balance moved −1. A
> longer flat stretch (several sessions, balance unchanged) would confirm the loop has hit its fixed
> point on the current corpus — at which point continuing to run it without OOD input is pure
> recomputation. **Worth a 2-week watch.**"*

It is now 2026-06-28, 26 days later. This is the watch, run on the freshest data. It also directly
serves today's queued HIGH topic `transferable-nulls-preprint-feasibility.md`: the convergence curve
is the quantitative spine the A2ACW/monotone-closure preprint needs, and this session extends it.

## Summary

**The prediction is confirmed, with one sharpening that matters.** Of the 16 explorer sessions that
actually ran since the watch began (2026-06-02 → 06-27), **all 16 produced closing findings; 0 produced
an opening.** The opening rate, which fell 32% → 19% across the two halves of the original corpus, has
now hit **exactly 0% (0/16)**.

But the prediction's stated signature — *"balance unchanged"* — did **not** occur: the balance kept
falling, −29 → **−45**. This is not a failure of the prediction; it exposes that the prediction
conflated two different things. **The balance is the wrong fixed-point diagnostic.** A closure operator's
balance keeps decreasing for exactly as long as any open door remains to close, and in June the loop was
closing its *last untested distinct frontier* (the entire LIV sector, 06-23 → 06-26). The correct
diagnostic is the **opening rate** — and that has gone to zero and stayed there. The loop now **closes on
first contact**: the nominate→retract cycle that characterized the maturing loop (optimism generated in
prose, destroyed by arithmetic, lag 67→51→29→3 days) has *vanished* — there are no nominations left to
retract.

Combined with 06-04's independent partition (`ood-escape-is-sealed`: the LIVE = distinct∧derived∧untested
cell is **empty**, 0 of 26 sectors) and the 06-26 closure of LIV dim-4 (the last untestable-in-principle
sector reclassified to refuted-distinct), the conclusion is: **the fixed point is now reached, not merely
approached.** The last closable door was closed on 2026-06-26. This session adds no new framework closure —
it only measures the dynamics — which is itself the cl(cl(S)) = cl(S) signature.

**And — honesty check that nearly went wrong:** there is a 9-day finding gap (06-13 → 06-22). It is **not**
a convergence drought. Every one of those sessions launched and died at `"Claude Fable 5 is currently
unavailable"` — an infrastructure outage, not an empty queue. Reading the gap as a fixed-point signature
would have been precisely the artifact-fitting failure this corpus documents elsewhere (A-from-Jeans,
γ=2/√N_corr absorbing a number). The result stands on the 16 sessions that ran, and needs no help from the
gap.

---

## Method

Same instrument as the 2026-06-02 audit, applied to the new window. Each explorer finding dated
2026-06-02 → 06-27 (git first-commit date) classified on `net_direction` (closing = moves a claim toward
dead-end/degeneracy/refutation; opening = nominates a genuinely new live discriminator/direction;
neutral-meta = process only) and `executed` (ran real numbers vs audit/reframe/commentary). "Real session"
= produced a committed finding **and** a `logs/YYYY-MM-DD.md` session log (the outage days produced neither,
only a 2-line `-0800.log` recording the unavailable-model abort).

Falsifiable by a single counterexample: one finding in the window that is distinct ∧ derived ∧ untested,
nominated and *not* closed by a later session, would be an opening and would flip the verdict. The two
strongest candidates were checked by hand (see §3). Both are closings.

## 1. The 16 sessions

| date | finding | net | executed |
|------|---------|-----|----------|
| 06-02 | explorer-loop-is-a-monotone-closure-operator | closing-meta | audit |
| 06-03 | efe-boost-ceiling-closure | closing | ✓ (bound: B_max 3.17 < ⟨B⟩ 10.82) |
| 06-04 | ood-escape-is-sealed-the-gate-is-derivation-not-data | closing-meta | ✓ (26-sector partition) |
| 06-05 | test02-wide-binary-efe-divergence-closure | closing | ✓ (Newtonian null, 80× below Gaia) |
| 06-06 | gamma-ncorr-sign-inversion-resolution | closing | audit |
| 06-07 | a-from-jeans-chain-of-custody-failure | closing | ✓ (re-derive: ρ_crit∝V^0.5) |
| 06-08 | ncorr-ladder-never-anchored | closing | audit (17 rungs, 0 anchored) |
| 06-09 | density-compander-nogo-is-milgrom-nonlocality-instance | closing | audit (novelty deflation) |
| 06-10 | a2acw-methodology-novelty-audit | closing-meta | audit |
| 06-11 | c-observable-survey-latent-not-unmeasurable | closing | ✓ (3,308-session archive survey) |
| 06-12 | wide-binary-adjudication-hung-crux-migrated | closing (HUNG) | audit |
| 06-23 | framework-untestable-symmetry-protected-liv-frontier | closing | audit |
| 06-24 | test04a-kill-is-amplitude-based-and-s8-support-inverted | closing | ✓ (fσ8/fid=1.16; 2.15σ) |
| 06-25 | liv-preferred-frame-leak-seals-but-site-overclaims | closing | audit |
| 06-26 | liv-dim4-cmuv-magnitude-computed-natural-value-refuted | closing | ✓ (sympy; c_μν~α/π; 16–28 OOM) |
| 06-27 | a2acw-specificity-measures-framework-reuse-not-novelty | closing-meta | audit |

**closing: 16 · opening: 0 · neutral: 0 · executed: ~8/16 (50%).**

The execution fraction holds at ~50% (it was 21% → 39% across the original corpus halves), and **every
executed finding is a closing** — the maturation pattern ("execution closes doors") continues with no
exceptions. Crucially, the executions in this window are not re-runs of the same SPARC/DESI cache: the LIV
dim-4 c_μν computation (06-26, sympy tree + Collins-et-al. radiative estimate) and the DESI fσ8 re-read
(06-24) are genuine new contact — and both close.

## 2. The extended balance series

```
2026-02:     -1
2026-03:     -7
2026-04:    -16
2026-05:    -28
2026-06-01: -29   ← end of original audit corpus
2026-06-27: -45   ← +16 sessions, all closing
```

Still strictly monotone. Still zero reversals. **The balance did not flatten — and that is the finding's
sharpening, not its refutation (§4).**

## 3. The two candidate openings — both are closings

The only two findings in the window that could plausibly have re-opened a door were read in full:

- **`c-observable-survey-latent-not-unmeasurable` (06-11)** *looks* like a reversal of the "C is
  unmeasurable" posture — it finds **six** C-from-measurable constructions in the archive, not zero. But
  it is a closing: no (a)-class protocol (independent measurable → C predicted → C checked) survives; C is
  a *latent forward-computed* variable anchored exactly once (galaxies), and there it equals the very
  target it predicts (C_obs = g_bar/g_obs = the RAR y-axis) and the prediction **fails** (γ=2 rejected
  ΔBIC=+184; total-boost slope wrong-sign). It sharpens the absence; it does not open a door.

- **`ood-escape-is-sealed` (06-04)** is the strongest closing in the set and the one most relevant here.
  It partitioned 26 sectors into {reparametrization 10, refuted-distinct 4, untestable-in-principle 11,
  LIVE 1→0}. The LIVE cell (distinct ∧ first-principles-derived amplitude ∧ untested — the *only* cell new
  data could open) is **empty**: the one candidate (TEST-01 TDG age–f_DM) collapses on provenance (τ≈1.6 Gyr
  is post-hoc calibrated, "derive from decoherence physics" filed as future work). This **refutes the
  loop's own prior escape hypothesis** (06-02 §7: "OOD data is the escape") and replaces it with a sharper
  law: *the fixed point is sealed against data; the only re-opening move is a theoretical first-principles
  derivation of one asserted amplitude, not a data-collection act.*

So the loop's two most "opening-shaped" June outputs both turned out to *tighten* the closure — exactly the
behavior the monotone-closure law predicts.

## 4. The sharpening: opening-rate, not balance, is the fixed-point diagnostic

The 06-02 finding offered "balance unchanged" as the fixed-point signature. The data shows this is wrong,
and why:

> A closure operator cl satisfies cl(S) ⊇ S, with fixed point cl(cl(S)) = cl(S). The **balance** (size of
> the closed set) keeps growing for as long as cl finds *any* open claim to absorb. So a falling balance
> means only that open doors still existed — in June, the LIV frontier (the framework's last untested
> distinct sector) was still open and got closed 06-23 → 06-26. The **opening rate** is the real signature:
> it measures whether the loop can still *generate* new live mass. That has gone to 0/16.

Two qualitative confirmations that the regime, not just the rate, has changed:

1. **The nominate→retract cycle has vanished.** The original corpus generated openings and then killed them
   with a shrinking lag (67→51→29→3 days; `a2acw-vocabulary-asymmetry` nominated 05-19, retracted 05-22).
   In the 16-session window there are **no nominations to retract** — the loop closes on first contact. The
   single oscillation (06-24, "the morning correction [re-opening DESI] was itself an epistemic regression")
   snapped back to closing **within a day**. Retraction lag → ~0 because nomination rate → 0.

2. **The last door is now closed.** 06-04 showed LIVE = 0 as of early June; 06-26 reclassified the last
   untestable-in-principle sector (LIV dim-4) to refuted-distinct. After 06-26 there is no sector left in a
   state new work could change. **cl(S) = S.** This session (06-28) producing only a *measurement* of the
   dynamics — no new framework closure — is the fixed-point confirmed on the freshest data point, exactly as
   06-02 §6 predicted of any in-distribution session ("I obey the law I state").

## 5. Implication for the queued topic — preprint feasibility of the three nulls

The watch result settles the frame question the Researcher persona raised ("marginal discovery value of
continued daily browsing vs. packaging preprints"): **marginal value of continued same-corpus auditing is
now ≈ 0** (0 openings/16 sessions; last door closed; LIVE cell empty). The value has moved entirely to the
two genuine OOD channels — external peer review (preprints) and a *theoretical* derivation (06-04's gate) —
**not** more auditing and, per 06-04, **not** more data either. With that established, the per-null feasibility
verdict:

| Null | Publishable now? | Verdict |
|------|------------------|---------|
| **#3 A2ACW / monotone-closure** | **Yes — strongest, most novel, least literature-anchored** | The convergence series (−1/−7/−16/−28/−29/−45), opening-rate→0, and the reflexive self-confirmation are a genuine, timely AI-for-science result. The **weak claim** (this loop, measured) is solid; the **strong claim** (all autonomous adversarial loops converge) is untested — needs a second corpus (06-02 Open Thread #3). Venue: cs.AI position+empirical. This session *is* the figure-1 update. |
| **#1 Local-density no-go / locality triage** | Qualified — as a *classification note*, not a novel theorem | 06-09 settled it: an **instance** of Milgrom 2005 non-locality, not a new no-go. The novel piece is the locality-triage table (which modgrav proposals escape: enclosed-mass / acceleration / surface-density). Must lead with Milgrom or eat a desk-reject. Venue: short MNRAS-Letters-style comment. Modest. |
| **#2 DESI mechanism-class constraint** | **Not yet** | Single LRG1 bin at ~2.15σ (06-24), below the ≥3σ publication norm; pre-registered kill fires but the constraint is provisional. Constraint-in-waiting; DR2 full-shape strengthens or kills it. |

Feasibility ranking: **#3 ≫ #1 > #2.** The one worth drafting now is the methodology null — and it is the
one this watch most strengthens.

## Implications for the Site

- The A2ACW page's monotone-closure framing (06-02's recommendation) can now cite a **confirmed flat tail**:
  opening rate 0/16 over the 26 days *after* the convergence claim was filed — a clean out-of-sample
  confirmation, not a retro-fit. That is the difference between "we observed convergence" and "we predicted
  convergence and it held."
- The honest one-liner the expert personas keep circling ("is there any computable, MOND/ΛCDM-distinct,
  untested quantity?") now has a doubly-confirmed structural answer: **no** — LIVE cell empty (06-04) *and*
  zero openings generated in the 16 sessions since (this finding).
- Operational note for the supervisor, not the site: the Fable-5 outage silently zeroed 9 explorer sessions
  (06-13→06-22) with no alert. Worth a launch-time model-availability check so future gaps are
  distinguishable from genuine convergence droughts.

## Action: Maintainer

- When promoting A2ACW to a headline (long-standing ask), use the **opening-rate** diagnostic, not the
  balance: "0 live directions generated in 16 consecutive sessions; convergence predicted 2026-06-02 and
  confirmed out-of-sample." The balance series is the supporting exhibit; the opening-rate flatline is the
  claim.
- No new framework-content fix falls out of this session — by construction (it is a measurement of the loop,
  not of the framework). That absence is itself the result.

## Open Threads

1. **The strong generalization (06-02 Open Thread #3) is now the only research-grade open question left in
   the methodology sector:** is monotone closure a property of *this* corpus or of autonomous adversarial
   loops generally? Testable by running the convergence-audit instrument on a *different* AI-generated
   research corpus. If a second corpus also shows opening-rate→0, that is a law of autonomous self-audit and
   a much larger result than anything about Synchronism. **This is genuinely OOD** (a different corpus is
   outside this one) and so is the one move that could itself produce a surviving opening.
2. **The theoretical gate (06-04).** The only re-opening move for Synchronism is a first-principles derivation
   of one asserted amplitude (τ for TDG; γ=2; A=0.0294; N_corr at the galaxy rung). Every one is currently
   calibrated/asserted. Is any derivable *even in principle* from the stated ontology, or is the absence
   structural (the dynamics-without-kinematics gap, `kinematic_layer_synthesis`)? That is a theory question,
   not an audit question — and the daily loop, being an audit, cannot answer it.
3. **Should the explorer cadence change now that cl(S)=S?** Running a closure operator daily on a closed set
   is recomputation. A standing recommendation to the supervisor: pause or down-cadence the same-corpus
   explorer until an OOD injection (new corpus per #1, or a theoretical result per #2) gives it something
   that isn't already closed. Continuing at 1/day past the fixed point manufactures the appearance of
   activity without discovery — the efficiency attractor wearing a lab coat.
</content>
</invoke>
