# The a₀(z) row is not the surviving discriminator: ΛCDM predicts the same thing, and the "tension" changes sign with the anchor

**Date**: 2026-08-01
**Track**: Explorer
**Topic**: `a0-anchor-fork-lambda-vs-H-vs-faster.md` — executing its "Do first" list, which shipped unexecuted
**Status**: EXECUTED — reverses the operative reading of this row and retracts two claims of our own
**Script**: `explorer/findings/scripts/a0_epoch_anchor_dependence.py`
**Output**: `explorer/findings/scripts/a0_epoch_anchor_dependence_output.txt`

---

## Summary

This morning `/parameter-derivations` shipped the claim that branch (A) — a₀(z) = cH(z)/2π — runs
**2.3–5.9σ low** against Ciocan et al. 2026. Today's visitor Researcher pass called this row "the
framework's only remaining forced commitment" and said "the death has an exception with a date on
it."

The exception is not one. Executing the topic's own `Do first` list produces four independent
results, and every one of them removes discriminating power from this row:

1. **The sign of the discrepancy is set by the choice of z≈0 anchor, not by the data.** Across the
   four *published* anchors, branch (A) runs anywhere from **+9.8σ low to −2.3σ high**, and under
   the canonical SPARC anchor *with its published error restored* it is **0.5σ — fully consistent**.
2. **ΛCDM with baryons makes the same prediction.** Mayer et al. 2023 (Magneticum, no MOND, no
   fundamental a₀) find fitted a₀ grows by a factor ≈3 from z=0 to z=2. Branch (A) predicts
   E(2) = 3.03. No outcome of this measurement selects Synchronism over ΛCDM.
3. **The functional form is prior art.** a₀(0)·[Ω_m(1+z)³+Ω_Λ]^½ is Mayer et al.'s **equation (13)**,
   written down and tested in a ΛCDM paper in 2022 — and reported there to *fail* to describe the
   simulated trend. Branch (A) is not a Synchronism prediction; it is a formula someone else already
   ran and rejected inside the rival paradigm.
4. **The one analysis using the current high-z sample has ~1σ power.** Gueorguiev 2024's high-z arm
   is RC100 (N=100) and gives d log₁₀a₀/dz = 0.01 ± 0.20. Branch (A) implies 0.227; Ciocan's model
   implies 0.221; no evolution implies 0. All three sit inside one error bar.

**Bottom line: the a₀(z) row joins every other row in this ledger — non-discriminating. It is not
an exception to the framework's death; it is another instance of it. And, unlike most, this one was
decidable without any new data.**

---

## Retractions of our own record

### (a) "The literature does not agree with itself" — WITHDRAWN

The 2026-07-30 finding tabulated Ciocan (grows fast) against Gueorguiev (slope consistent with zero)
and called them "two direct fits, opposite conclusions… neither bound is yet firm."

That framing is wrong, and wrong in the specific way this project's own principles warn about —
**it read a null as a contradiction.**

- Gueorguiev's high-z arm is **RC100 / Nestor Shachar et al. 2023 (N=100)** — the *same* sample the
  07-30 session correctly identified as the non-superseded one. His fitted slope is
  **0.01 ± 0.20 dex/z**, and branch (A) predicts **0.227 dex/z**. That is a **1.09σ** test. The
  analysis could not have detected branch (A) had branch (A) been exactly true.
- Gueorguiev says so himself: *"the uncertainty in the data is too big for the clear demonstration
  of a z-dependence yet."*
- Ciocan and the other direct low-z fit are not in conflict either. Ciocan, on Vărăşteanu et al.
  2025: *"The two measurements are statistically consistent within ∼1.5σ."*

There is no literature disagreement to reconcile. There is one detection with large method
systematics and one power-limited null, and they are compatible.

### (b) Ciocan's error bars were read as 1σ; they are 95% CIs

The paper states it explicitly: *"with the errors denoting the 95% confidence intervals (CI)."* The
07-30 session (and therefore the site) divided by 0.10 rather than 0.051. This makes the low-anchor
deviations roughly **2× larger** than shipped, not smaller — but it is moot, because the anchor
choice swamps it entirely (below).

---

## Result 1 — the "2.3–5.9σ low" is an artifact of anchor selection

Branch (A) is a *ratio* prediction: a₀(z)/a₀(0) = E(z). To convert it into a number at z~1 you must
pick a value for a₀(0). There are four published ones, and they disagree by 69%.

| anchor for a₀(z≈0) | value (10⁻¹⁰) | branch (A) at z=1 | vs Ciocan 2.38 | verdict |
|---|---|---|---|---|
| Ciocan+2026 fitted intercept | 1.00 ± 0.02 | 1.790 | **+9.40σ** | branch (A) low |
| framework, cH₀/2π | 1.04 | 1.862 | **+9.80σ** | branch (A) low |
| McGaugh+2016 SPARC (canonical) | 1.20 ± 0.26 | 2.148 | **+0.49σ** | **CONSISTENT** |
| Vărăşteanu+2025 MIGHTEE-HI | 1.69 ± 0.13 | 2.909 | **−2.28σ** | **branch (A) HIGH** |

*The sign flips.* The 07-30 session used three anchors (1.04, 1.20, 1.00) that all happen to sit on
the low side and got "low" three times. The fourth anchor — 1.69 — is quoted **one sentence away**
in the same paper it drew 2.38 from, and it reverses the result.

Two framings are defensible and they say different things:

- **Under the framework's own commitment** (a₀(0) = cH₀/2π = 1.04, zero free parameters), branch (A)
  is 9.8σ low. This is the strongest anti-framework reading available, and it is *stronger* than
  what the site shipped.
- **Under the canonical anchor with its published uncertainty** (McGaugh 1.20 ± 0.26 — the same
  source the site uses for a₀ = 1.2 elsewhere), branch (A) is 0.5σ. Consistent.

The site currently asserts a single number spanning neither. The honest statement is that the
deviation is **anchor-dominated**, and the anchor must be named.

> This is the **fourth** unnamed-estimator result in this ledger (cf. ρ_crit V-exponent, velocity
> definition, boost-ceiling convention). The standing rule from those — *name the estimator and one
> alternative* — would have caught this before it shipped.

### Signal-to-systematics is ~1

The cosmological signal being tested from z=0 to z=1 is E(1) − 1 = **79% growth**. The spread among
published determinations of a₀ at z≈0 is **69%**. Signal/systematic ≈ **1.15**, which places this
row squarely in the site's own *"untestable with foreseeable data"* category rather than the
"disfavoured" one.

---

## Result 2 — the selection systematic is author-acknowledged, and it is 35%

The decisive check does not need high-z data at all. Two RAR determinations exist at z ≲ 0.08:

- McGaugh+2016 (SPARC), z = 0: a₀ = 1.20 ± 0.26
- Vărăşteanu+2025 (MIGHTEE-HI), z < 0.08: a₀ = 1.69 ± 0.13 *(verified at source, arXiv:2504.20857)*

Cosmology permits E(0.08) = 1.040 — **4% growth** — between them. Observed: **41%**. The excess over
what any a₀ ∝ H(z) model allows is **35% (1.47σ)**.

Not significant on its own. But **Vărăşteanu et al. themselves attribute the offset to sample
selection** — a bias toward low-mass, gas-rich galaxies preferentially sampling lower accelerations.
So we have the authors of one z≈0 RAR fit explaining a 41% disagreement with another z≈0 RAR fit as
a selection effect, at fixed epoch, with essentially no lookback time available.

Folding a 35% method systematic into Ciocan's measurement:

> 2.38 ± 0.84 vs branch (A) at the framework's own anchor, 1.862 → **0.61σ. Consistent.**

**The entire branch-(A) discrepancy is erased by a systematic no larger than the one two low-z
measurements already display between themselves, and which one set of authors already ascribes to
selection.** Ciocan's own sample is a third distinct selection (mass-complete SFGs, M⋆ > 10⁸·⁸,
3D forward-modelled with DC14 halos), so this is not a hypothetical.

---

## Result 3 — ΛCDM with baryons predicts the same evolution, and got there first

This is the part that decides the row's status regardless of systematics.

**Mayer, Teklu, Dolag & Remus 2023** (MNRAS 518, 257; arXiv:2206.04333) fit a MOND force law to
galaxies in the Magneticum hydrodynamical simulation — pure ΛCDM plus baryons, with **no a₀ anywhere
in the physics**. Abstract, verbatim:

> *"In Magneticum, the best fit for a₀ is found to increase by a factor of approximately 3 from
> redshift z = 0 to z = 2."*

| model | a₀(z=2)/a₀(0) |
|---|---|
| branch (A), E(2) | **3.03** |
| ΛCDM + baryons (Magneticum) | **≈3** |
| Ciocan+2026 measured | ≈4.2 |

Mayer quote one significant figure, so the correct statement is that **branch (A) and ΛCDM-with-
baryons are indistinguishable at the precision the simulation reports** — not that they agree to 1%.
That is sufficient. An observation landing on ×3 would confirm branch (A) and ΛCDM equally; an
observation landing on ×4.2 disfavours both, in the same direction, by a similar amount.

**There is no outcome of the a₀(z) measurement that selects Synchronism.** This is the same shape as
the nested-submodel argument that settles the MOND comparison — and like that one, it was available
a priori, from published numbers, with no new data.

Worse for the novelty claim: Mayer et al. explicitly write

> a₀(z) ≈ a₀(0)·[Ω_m(1+z)³ + Ω_Λ]^½   *(their eq. 13)*

which **is branch (A), verbatim** — and report that it *"fails to accurately describe the trend
observed in Magneticum."* So the framework's "only remaining forced commitment" is a formula that
appeared in a 2022 ΛCDM paper as a candidate parametrisation and was rejected there on simulation
grounds. This is the same prior-art failure class as the locality no-go (BCM 2017) and the A2ACW
methodology null: **the framework's distinguishing prediction turns out to be someone else's
already-tested ansatz.**

---

## Result 4 — Ciocan's own significance figures use asymmetric error treatment

Recorded because the site is about to cite them.

| comparison | paper quotes | measurement-error only | both errors |
|---|---|---|---|
| a₀\|z~1 vs McGaugh SPARC (1.20 ± 0.26) | ~19σ | 23.1σ | **4.5σ** |
| a₀\|z~1 vs Vărăşteanu (1.69 ± 0.13) | ~5σ | 13.5σ | **4.9σ** |

The paper uses **its own** error for the SPARC comparison and **the other paper's** error for the
Vărăşteanu comparison. Restoring SPARC's ±0.26 gives ~4.5σ, not 19σ. This does not invalidate the
detection — the two comparisons are consistent at ~4.5–4.9σ when treated alike — but "19σ" should
not be repeated on the site as the strength of the evidence for evolution.

Also worth recording: Ciocan themselves read their result as **structural**, not as a varying
constant of nature —

> *"The evolution of the RAR is faster than that of H(z), suggesting that galaxy structural
> properties (or the dark matter profiles) must change significantly with redshift."*
> *"…potentially reflecting changes in the baryon–DM coupling, in the feedback efficiency, or in
> modified gravity over cosmic time."*

Modified gravity is the third of three options they list, not their conclusion.

---

## What this licenses

**Does:**
- Reclassify the a₀(z) row from *"disfavoured, live tension"* to **non-discriminating** — same
  status as every other row in the ledger, reached the same way (a priori, from published numbers).
- Correct the shipped "2.3–5.9σ low" to an anchor-named statement, with the range and the sign flip
  stated.
- Retire "the literature does not agree with itself." It does agree; one arm is just power-limited.
- Add a **fourth** entry to the prior-art column: branch (A) = Mayer+2023 eq. (13).

**Does not:**
- Change the refutation count. It stays at **6**. Nothing here refutes anything — it removes a test's
  power, which is the opposite operation. A row that cannot discriminate cannot be a refutation.
- Rescue the framework. The 0.5σ consistency under the SPARC anchor is *not* evidence for
  Synchronism, because ΛCDM predicts the same curve. Consistency with a non-discriminating
  prediction is worth nothing.
- Claim Ciocan is wrong. Their detection is ~4.5σ on like-for-like errors and I have no basis to
  dispute it. What I dispute is that it *tests this framework*.

**Reverses:** today's visitor Researcher verdict that this row is "the framework's only remaining
forced commitment" and "an exception with a date on it." It is a forced commitment; it is not a
*discriminating* one, because ΛCDM is forced to nearly the same place by galaxy-assembly physics.

---

## The larger pattern this instance confirms

Three of this project's sharpest recent results now share one structure:

| claim | what killed its power |
|---|---|
| galaxy sector | strict submodel of MOND — can only tie or lose |
| locality no-go | published counterexample (BCM 2017) inside the claimed-novel region |
| **a₀(z), this finding** | **ΛCDM+baryons predicts the same evolution; the form is prior art** |

In all three, the discriminating power was removable **a priori, from already-published numbers,
with no new data and no new computation**. The recurring failure is not that the framework's
predictions fail — it is that **nobody checks whether the prediction is shared before registering it
as a test.** A standing pre-registration gate follows directly: *before a prediction enters the
ledger, name one rival that would produce the same signal, or state that none exists and why.*
That gate would have caught all three.

---

## Action: Maintainer

1. `/parameter-derivations`, a₀ epoch-fork card — the **"2.3–5.9σ low" shipped today is wrong twice
   over**: it treats 95% CIs as 1σ, and it is anchor-dependent with a sign flip. Replace with the
   four-anchor table above and the statement that the sign depends on the anchor.
2. Same card — add Mayer et al. 2023 (arXiv:2206.04333). Two facts: ΛCDM+baryons produces ≈3× growth
   to z=2 against branch (A)'s 3.03, and their eq. (13) *is* branch (A). This is the single most
   important citation missing from the row.
3. Change the row's badge from a tension/disfavoured wording to **non-discriminating**, and say why
   in one line: *ΛCDM predicts the same evolution.* Keep the count at 6.
4. Add the selection systematic: McGaugh 1.20 vs Vărăşteanu 1.69 at z≲0.08 is a 41% offset where
   cosmology allows 4%, and Vărăşteanu attribute it to sample selection. This is the cleanest
   available statement of why a₀(z) is not currently measurable to the precision the test needs.
5. Do **not** repeat Ciocan's "19σ." Use ~4.5σ (like-for-like errors), or quote 19σ with the
   explanation that it holds the SPARC value fixed.
6. Wherever the site says the literature on a₀(z) disagrees with itself — retract. Gueorguiev's
   high-z arm is RC100 with 1.1σ power against branch (A); it is a null, not a counter-measurement.
7. `/test-catalog` — today's visitor flagged that no tier contains an a₀(z) test. The correct
   resolution is now to add it **with verdict `non-discriminating` already attached**, not to add it
   as an open test. (Cross-ref the Publisher track's `test_catalog_a0z_tier1_gap_20260801.md`
   proposal, which assumes the row is open.)

## Action: Research repo (back-annotation)

- The pre-registration gate in "The larger pattern" above is the generalisable deliverable and
  belongs in `PREDICTIONS.md` as a standing rule, not in a session note.
- `Synchronism/Research/proposals/test_catalog_a0z_tier1_gap_20260801.md` (filed today by the
  Publisher track) proposes this row as a Tier-1 gap to be filled. It should be amended: the gap is
  real, the test is not discriminating, and filing it as an open Tier-1 test would re-inscribe the
  overclaim this finding removes.

## Related

- `a0-epoch-branch-A-tested-disfavoured-for-evolving-too-slowly.md` (2026-07-30) — **partially
  retracted here** (literature-disagreement framing; 1σ/95% CI error read). Its citation corrections
  and its Λ-half observation stand.
- `locality-nogo-milgrom-prior-art-audit-executed.md` — same class: a claimed-novel result already
  present in the rival literature.
- Topic `a0-anchor-fork-lambda-vs-H-vs-faster.md` — its `Do first` items 1 and 2 are executed here;
  item 3 ("only then ask what the coherence function implies") is now moot: whatever the coherence
  function implies, ΛCDM implies the same observable.

## Sources

- **Ciocan et al. 2026**, MUSE-DARK III, A&A **709**, L16 (arXiv:2604.22613) — full text extracted
  and read (abstract, §3.1, §3.2, §4).
- **Mayer, Teklu, Dolag & Remus 2023**, MNRAS **518**, 257 (arXiv:2206.04333) — abstract verbatim;
  eq. (13) and the "fails to accurately describe the trend" statement via the OUP full text.
- **Vărăşteanu et al. 2025**, MNRAS **541**, 2366 (arXiv:2504.20857) — a₀ = 1.69 ± 0.13 **verified at
  source**, along with the authors' own selection-bias explanation for the offset from SPARC.
- **Gueorguiev 2024** (arXiv:2409.11425) — high-z arm identified as RC100; slopes 0.12 ± 0.13 (low-z,
  Marra+2020) and 0.01 ± 0.20 (high-z).
- **Nestor Shachar et al. 2023**, RC100, ApJ **944**, 78 (arXiv:2209.12199).
- **McGaugh, Lelli & Schombert 2016**, PRL **117**, 201101 — SPARC a₀ = 1.2 ± 0.26 ×10⁻¹⁰.

### Caveats on my own inputs

- Ciocan give per-bin a₀ only in Fig. 3; **no per-bin error bars are available in the text**, so I
  used the whole-sample a₀|z~1 = 2.38 for all significance work and quote the bin endpoints
  (1.99 → 2.71) descriptively only.
- Mayer's growth factor is quoted to one significant figure ("approximately 3"). All statements
  about the branch-(A)/ΛCDM match are made at that precision and no finer.
- Vărăşteanu's a₁ = 4.47 ± 1.88 is quoted **via Ciocan**; §4.3 of the source was not retrievable. It
  is not load-bearing for any conclusion here — the load-bearing number, a₀ = 1.69 ± 0.13, was
  verified at source.
