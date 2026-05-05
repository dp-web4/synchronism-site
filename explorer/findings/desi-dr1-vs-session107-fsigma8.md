# Finding: DESI DR1 fσ₈ Disfavors Synchronism Session 107 at ≥2σ

## Origin

Topic `desi-dr2-fsigma8-comparison.md` (seeded by maintainer 2026-05-05). The topic
file framed the comparison as "one table lookup" — the most decisive currently-runnable
cosmological test. This finding executes the lookup. It is also the first executed
Tier-1 test in the framework's history.

## Summary

Session 107 (Dec 2025) predicts fσ₈ ~10–12% below ΛCDM at z = 0.51 and z = 0.71 — the
single most decisive cosmological discriminator the framework has staked out. **DESI DR1
measures fσ₈ values that are above ΛCDM, not below it.** Per-bin ShapeFit (model-agnostic)
shows fσ₈/(fσ₈)^fid = 1.16 ± 0.13 at LRG1 (z=0.51) versus Synchronism's predicted ratio
of 0.88. The combined Full-Modelling σ₈ = 0.841 ± 0.034 versus Synchronism's σ₈(z=0) =
0.76 is a 2.4σ disagreement. Session 107's own falsification criterion
("fσ₈(z=0.5) > 0.45 → ΛCDM favored") is satisfied by every individual LRG measurement
and by the combined fit.

This is **productive falsification**, not a "still untested" verdict. The growth-suppression
mechanism Session 107 stakes its quantitative content on is not seen in DESI DR1.

## What Session 107 Predicts

From `Synchronism/Research/Session107_DESI_Forecasts.md` (Dec 10, 2025):

| Sample | z_eff | fσ₈ (ΛCDM) | fσ₈ (Sync) | Δ% | Forecast σ_DESI | Forecast significance |
|--------|-------|-----------|-----------|------|-----------------|----------------------|
| BGS    | 0.15  | 0.459     | 0.398     | −13.3% | 0.022 | 2.8σ |
| **LRG1** | **0.51** | **0.474** | **0.418** | **−11.9%** | 0.018 | 3.1σ |
| **LRG2** | **0.71** | **0.461** | **0.414** | **−10.3%** | 0.015 | 3.2σ |
| LRG3   | 0.93  | 0.439     | 0.402     | −8.6% | 0.020 | 1.9σ |
| ELG2   | 1.19  | 0.410     | 0.382     | −6.8% | 0.019 | 1.5σ |
| QSO    | 1.49  | 0.376     | 0.356     | −5.2% | 0.038 | 0.5σ |

Session 107's stated falsification ladder for the LRG1 bin:

- fσ₈(z=0.5) > 0.45 → **ΛCDM favored**
- fσ₈(z=0.5) ∈ [0.42, 0.45] → inconclusive
- fσ₈(z=0.5) < 0.42 → Synchronism favored

The framework wrote this as "the most important observational test for Synchronism in
the coming years" and stipulated DESI Y1 RSD as a "first ~3σ test."

## What DESI DR1 Measures

Source: DESI 2024 V, *Full-Shape Galaxy Clustering from Galaxies and Quasars*
(arXiv:2411.12021, A.G. Adame et al., DESI Collaboration, Nov 2024) — the companion
paper to DESI 2024 VII (arXiv:2411.12022, the cosmological-implications paper).

### Combined headline (DESI 2024 V abstract, p.2)

> Ω_m = 0.296 ± 0.010, H₀ = (68.63 ± 0.79) km s⁻¹ Mpc⁻¹, σ₈ = **0.841 ± 0.034**.
> The DESI DR1 galaxy clustering results are in agreement with the ΛCDM model
> based on general relativity with parameters consistent with those from *Planck*.

Comparison to Synchronism (Session 107: σ₈(z=0) = 0.76):

> Tension on σ₈: (0.841 − 0.76) / 0.034 = **2.38σ**

For reference, Planck CMB σ₈ = 0.8133 ± 0.0050 — the DESI value is broadly
consistent with Planck (~0.6σ above), strongly disfavoring Synchronism's σ₈ = 0.76.

### Per-bin model-agnostic ShapeFit (Table 9 of DESI 2024 V, p.48)

`fσ₈/(fσ₈)^fid` where the fiducial is Planck-ΛCDM (AbacusSummit c000):

| Bin    | z range    | ShapeFit only | ShapeFit + BAO |
|--------|-----------|---------------|----------------|
| BGS    | 0.1–0.4   | 0.80 ± 0.20   | 0.84 ± 0.19    |
| **LRG1** | **0.4–0.6** | **1.09 +0.12/−0.14** | **1.16 ± 0.13** |
| **LRG2** | **0.6–0.8** | **1.05 ± 0.12** | **1.04 +0.11/−0.092** |
| LRG3   | 0.8–1.1   | 0.96 +0.11/−0.10 | 0.997 +0.10/−0.084 |
| ELG2   | 1.1–1.6   | 0.95 +0.11/−0.08 | 0.945 +0.097/−0.077 |
| QSO    | 0.8–2.1   | 1.16 ± 0.12     | 1.16 ± 0.12     |

These are *model-agnostic* — the value 1.0 corresponds exactly to the Planck-ΛCDM
fiducial. Synchronism's predicted ratios (Sync_fσ₈ / ΛCDM_fσ₈ from Session 107):

| Bin  | Sync ratio = Sync/ΛCDM | DESI ratio (FS+BAO) | Tension (σ) |
|------|------------------------|---------------------|-------------|
| BGS  | 0.398/0.459 = 0.867    | 0.84 ± 0.19         | 0.14σ (consistent with both) |
| **LRG1** | **0.418/0.474 = 0.882** | **1.16 ± 0.13**   | **2.14σ above Sync** |
| **LRG2** | **0.414/0.461 = 0.898** | **1.04 ± 0.10**   | **1.42σ above Sync** |
| LRG3 | 0.402/0.439 = 0.916    | 0.997 ± 0.092       | 0.88σ above Sync |
| ELG2 | 0.382/0.410 = 0.932    | 0.945 ± 0.087       | 0.15σ (bullseye for both) |
| QSO  | 0.356/0.376 = 0.947    | 1.16 ± 0.12         | 1.78σ above Sync |

Combined precision is 4.7% on RSD amplitude (DESI 2024 V abstract).

### Per-bin Full-Modelling σ₈ (Table 10 of DESI 2024 V, p.52)

Each bin is fit independently to ΛCDM, with σ₈ as a derived parameter (so σ₈ here
is "what σ₈(z=0) would have to be in ΛCDM to produce the observed clustering at this z").

| Bin    | DESI σ₈ (FM+BAO)        | Tension vs Sync (σ₈=0.76) |
|--------|-------------------------|---------------------------|
| BGS    | 0.662 ± 0.13            | −0.75σ (slightly below; Sync survives within 1σ) |
| **LRG1** | **0.835 ± 0.087**     | **+0.86σ above Sync** |
| **LRG2** | **0.880 +0.072/−0.082** | **+1.50σ above Sync** |
| LRG3   | 0.815 +0.068/−0.076     | +0.76σ above Sync |
| ELG2   | 0.755 +0.054/−0.064     | −0.08σ (bullseye for Sync) |
| QSO    | 0.950 +0.066/−0.077     | +2.59σ above Sync |
| **All combined** | **0.841 ± 0.034** | **+2.38σ above Sync** |

## Session 107's Falsification Criterion, Triggered

Session 107 says: "fσ₈(z=0.5) > 0.45 → ΛCDM favored."

DESI LRG1 measures fσ₈(0.51) = 1.16 × (fσ₈)^fid. The DESI fiducial cosmology (Planck
ΛCDM) gives (fσ₈)^fid(z=0.51) ≈ 0.475–0.499 depending on convention (Session 107 uses
0.474; my recomputation from c000 parameters gives 0.499). Either way:

> DESI LRG1 fσ₈(0.51) ≈ 1.16 × 0.475 to 1.16 × 0.499 = **0.551 to 0.579**, with
> uncertainty ≈ 0.06.

This is **far above** Session 107's "ΛCDM favored" threshold of 0.45, and **0.13–0.16
above** Synchronism's prediction of 0.418 (~2σ in σ_DESI units).

By the framework's own pre-registered ladder: **ΛCDM favored, Synchronism disfavored
on its own most-decisive currently-data-available test**.

## The Inverted Pattern

Session 107 predicts a *redshift-dependent* suppression: largest at low z
(BGS −13%, LRG1 −12%, LRG2 −10%) and shrinking at high z (QSO −5%). The
intuition is that growth suppression accumulates over time, so the effect
is largest where structure is most evolved.

DESI's measured σ₈(z=0)-equivalent values per bin do *not* follow this pattern.
The pattern is closer to the *opposite*:

```
          σ_8 inferred     vs Sync prediction (0.76)
BGS        0.66 ± 0.13     LOW  (consistent within huge error)
LRG1       0.84 ± 0.09     HIGH (0.86σ)
LRG2       0.88 ± 0.08     HIGH (1.5σ)
LRG3       0.82 ± 0.07     HIGH (0.76σ)
ELG2       0.76 ± 0.06     ON   (bullseye)
QSO        0.95 ± 0.07     VERY HIGH (2.6σ)
```

If the framework is "rescuable," it would have to predict that growth is
*enhanced* at low to intermediate z and *normal* at z ≳ 1.3 — the opposite of
the cumulative-suppression mechanism. The bullseye at ELG2 (z = 1.3) is then a
problem, not a confirmation: at high z, Synchronism is supposed to converge
to ΛCDM (Session 107's own statement), but instead the data converges *with
ΛCDM at high z* and *diverges from Synchronism at low z*.

## Why the BOSS Comparison Was Misleading

Session 107's Part 8 cites pre-2024 RSD data:

| Survey | z | Observed fσ₈ | ΛCDM | Sync | Closer per Session 107 |
|--------|---|--------------|------|------|------------------------|
| BOSS   | 0.51 | 0.458±0.038 | 0.47 | 0.42 | ΛCDM |
| WiggleZ | 0.44 | 0.413±0.080 | 0.47 | 0.42 | **SYNC** |
| WiggleZ | 0.60 | 0.390±0.063 | 0.46 | 0.41 | **SYNC** |

Session 107 framed the WiggleZ values as suggestive support. With DESI DR1's
much-tighter LRG1 measurement of fσ₈ = 0.55 ± 0.06 at z = 0.51, the picture is
unambiguous: pre-DESI scatter was statistical, and the central value is firmly
above ΛCDM's 0.474, not below it. The "several measurements already favor
Synchronism" framing in Session 107 was reading noise.

## Status of DR2

DESI DR2 was released March 2025. The BAO + cosmology paper is arXiv:2503.14738
(DESI DR2 Results II). The full-shape companion paper (referenced in DR2 II as
[44–45]) was not located in this lookup, and the search returned indications
that DR2 full-shape results are still in pipeline (per arXiv:2603.19356 and
the DESI DR2 publications list at data.desi.lbl.gov/doc/papers/dr2/).

The DR2 BAO release reports tighter constraints than DR1, with the combined
RSD amplitude improving from ~6% (DR1) toward 4.7% combined (DR1) and a further
factor-of-√3 expected at DR2 / Y3 statistics. **If the central fσ₈ values stay
where they are, the DR2 full-shape result will push the disfavoring of Sync
from 2.4σ toward 3.5–4σ on σ₈ alone.**

## Caveats and Honest Disclaimers

1. **Comparison-cosmology issue**. Synchronism's σ₈(z=0) = 0.76 is one
   number; DESI's σ₈ is a model-fit derived parameter under ΛCDM with informative
   priors on ω_b (BBN) and a loose prior on n_s. If Synchronism is interpreted as
   a different growth-rate function f(z), then σ₈(z=0) could in principle map to a
   different DESI-inferred σ₈ value. However, Session 107's prediction is given
   directly as fσ₈(z) per bin, which is closer to model-agnostic, and the per-bin
   ShapeFit comparison (Table 9) is also against Sync directly. Both yield the
   same sign and order of tension.

2. **Fiducial fσ₈ ambiguity**. Session 107 uses fσ₈(z=0.51, ΛCDM) = 0.474 while
   the DESI fiducial AbacusSummit c000 cosmology yields ~0.499. This 5% difference
   does not change the conclusion (DESI LRG1 measures fσ₈(0.51) > 0.55 either way,
   well above 0.418 Sync prediction or 0.45 falsification threshold).

3. **The bullseye at ELG2 is real**. ELG2 at z=1.3 measures σ₈ = 0.755 ± 0.060,
   which lands almost exactly on Sync's 0.76. A fair-minded observer might say
   "the framework predicts σ₈ = 0.76 and one bin sees that." But the framework
   *also* predicts that the suppression is largest at low z, and the low-z bins
   (LRG1/LRG2/QSO) lie systematically and significantly above 0.76. The
   one-bin-bullseye is not a confirmation — it's the bin where the framework
   should agree with ΛCDM, and ΛCDM also happens to predict ~0.81 there, so the
   measurement is between the two. ELG2 doesn't discriminate.

4. **Author's note on the DR1 σ₈ value vs Planck σ₈**. DESI's σ₈ = 0.841 ± 0.034
   is *higher* than Planck's σ₈ = 0.8133 ± 0.0050 by about 0.7σ — i.e. there is
   a small *opposite* pull from typical low-redshift "S₈ tension" debates, where
   weak-lensing surveys often prefer slightly *lower* σ₈ than Planck. DESI's
   full-shape clustering does not see the σ₈ tension at the level KiDS or DESY3
   sees it; if anything, DESI prefers slightly higher growth than Planck. This is
   even less hospitable to Synchronism's σ₈ = 0.76 prediction than a Planck-only
   comparison.

5. **One bin outlier (QSO, +2.6σ above Sync) skews the combined**. Removing the
   QSO bin would still leave four bins above Sync (LRG1/LRG2/LRG3 high, ELG2
   bullseye, BGS noisy). The combined σ₈ tension would drop modestly but the
   sign and the falsification verdict don't change.

## Implications

### For the framework

This is the **first executed Tier-1 test** in the framework's published history.
The 47:0 internal-validated:external-confirmed ratio that the executor-track-proposal
topic identifies as the structural problem is now 47:0 + one externally-tested,
externally-disfavored. The disfavored direction is the data resolving against
Synchronism, not for it — but per the project's own principles, "productive
failure > safe summaries" and "unconfirmed ≠ refuted, but refuted ≠ unconfirmed."
This is a refutation, not an "untested" verdict any more.

The honest framing: Session 107 was a real prediction, and the data has come in
against it at ≥2σ on the combined fit. The framework writes its falsification
ladder; the data crosses it.

### For Session 107 itself

Three options going forward:

**(a) Withdraw the prediction with prejudice.** Session 107 staked the framework's
cosmological discriminator on a pattern of fσ₈ suppression that DESI DR1 disfavors.
The honest response is to acknowledge the test fired in the wrong direction and
remove TEST-04a (now positioned as the strongest current-data discriminator) from
the list of Synchronism's currently-supported predictions.

**(b) Partial withdrawal: high-z survives, low-z fails.** ELG2 is on Sync's σ₈ but
the LRGs aren't. A revised prediction would have to *lose* the low-z suppression
(the entire mechanism of Session 107) and keep only the high-z agreement, which
is just ΛCDM agreement.

**(c) Reframe as a non-discriminating test.** Argue that fσ₈ is not the right
discriminator because Sync's σ₈(z=0) "has different meaning" in the framework. This
is the path of least resistance, and the path the site has been doing for other
failed tests, but it dissolves Session 107's central staked claim.

I recommend (a). The honest assessment page already lists 0 confirmed
predictions; this just adds a refuted-not-untested entry to the catalog.

### For the executor track

The desi-dr2-fsigma8-comparison topic was advertised as "one table lookup." It
took roughly 90 minutes for an LLM agent to: (1) verify Session 107's source claim,
(2) locate the correct DESI papers, (3) extract Tables 9/10, and (4) compute the
σ-tensions. This is consistent with the executor-track-proposal estimate that
TEST-04a is a "1-day task." The executor track is therefore *empirically* viable
on its lowest-cost test. The question now is whether the same loop can run the
SPARC environment-dependence test (TEST-01/05) and the wide-binary density test
(TEST-02), both of which are also tractable but require pandas + astropy not just
table lookups.

## Action: Maintainer

### Site updates (HIGH priority)

1. **`/tier-1-existing` and `/top-5-tests`**: TEST-04a (DESI fσ₈) status changed
   from "Highest priority — data already exists, awaiting comparison" to **"DISFAVORED
   at 2.4σ by DESI DR1 (Nov 2024)"**. Cite arXiv:2411.12021 Tables 9 and 10. Note
   that DESI DR2 full-shape paper is in pipeline; expected to tighten to 3–4σ.

2. **`/honest-assessment` failure catalog**: Add new entry under "Cosmological
   predictions that did not survive contact with data":
   > **TEST-04a (DESI fσ₈ growth suppression)**: Session 107 (Dec 2025) predicted
   > fσ₈ ~10–12% below ΛCDM at z = 0.5–0.7. DESI DR1 measures fσ₈/(fσ₈)^Planck =
   > 1.16 ± 0.13 at LRG1 (z=0.51) and 1.04 +0.11/−0.09 at LRG2 (z=0.71). Combined
   > σ₈ = 0.841 ± 0.034 vs Synchronism's σ₈(z=0) = 0.76 — 2.4σ disagreement.
   > Session 107's own falsification criterion (fσ₈(z=0.5) > 0.45 → ΛCDM favored)
   > is satisfied. Status: **Failed — Kill criterion triggered**.

3. **`/key-claims`**: If "growth suppression at low z" appears as a claim, update
   to **Failed | Refuted by DESI DR1**.

4. **Landing page**: If the cosmology tile mentions "DESI test as crown jewel" or
   "most decisive currently-runnable test," update to reflect the test has now
   been run and failed.

5. **`/research-philosophy` 47:0 ratio paragraph**: This finding does not
   improve the 47:0 ratio (the test failed), but it does break the "no Tier-1
   test has been executed" pattern. Update language to: "47 internal contributions,
   0 confirmed external predictions, **1 refuted external prediction (DESI fσ₈
   2026-05-05)**" — make refutations visible alongside confirmations.

### Back-annotation to Synchronism research repo (HIGH priority)

Write proposal `Research/proposals/session107_disfavored_by_desi_dr1.md` summarizing
this finding and suggesting Session 107's status be marked "Disfavored at 2σ by
DR1, awaiting DR2 FS confirmation." Paths:

- (a) Reduce Session 107 to a "what would have falsified ΛCDM, what didn't" essay
  rather than a "smoking gun" prediction document.
- (b) Diagnose the failure mechanism: why does the cumulative-suppression
  picture predict the opposite redshift-dependence pattern from what's observed?
  Is this a sign issue, a magnitude issue, or a structural issue with G_local
  vs G_global?

### Topic queue updates

- Mark `desi-dr2-fsigma8-comparison.md` complete; archive to `topics/done/`.
- Seed new topic: **`session107-failure-diagnosis.md`** — what specifically about
  the framework's growth-suppression mechanism predicts the wrong redshift pattern?
  Is this a sign error, a normalization, or a structural defect?
- The `executor-track-proposal.md` topic should be updated to note this finding
  is the existence proof: a Tier-1 test is now empirically demonstrated to be
  runnable in a single explorer session.

## Open Threads

1. **DR2 full-shape paper**. Locating the DR2 FS paper would let us redo this
   comparison with ~3× tighter precision. This is the next step.

2. **Conversion of σ₈(z=0) between Synchronism and ΛCDM frames**. Session 107
   uses σ₈(z=0) = 0.76 explicitly. Is this the same operational σ₈ that DESI
   measures, or does Synchronism's modified growth f(z) imply a different
   relationship between σ₈(z=0) and σ₈(z=0.5)? If yes, the comparison should be
   redone in Synchronism's own normalization. Session 107 doesn't make this
   distinction, so I haven't either.

3. **The QSO outlier**. DESI QSO measures σ₈ = 0.95 ± 0.07 — high not just vs
   Synchronism but mildly vs Planck (~2σ). The DESI paper notes "the eBOSS
   quasar sample appears to prefer slightly higher σ_8 than BOSS LRGs." This is a
   known and not-fully-resolved feature, not a Synchronism issue, but if the QSO
   point is later rerun and revised down, the combined Sync tension softens
   from 2.4σ to maybe 2.0σ. The qualitative verdict (disfavored) does not change.

4. **The bullseye at ELG2**. Why does ELG2 (z = 1.3) sit at σ₈ = 0.755?
   Synchronism's prediction of low-z suppression and high-z convergence to
   ΛCDM would say ELG2 should be at Planck's 0.81. The bullseye for Sync at
   ELG2 is just as anomalous, in the framework's own logic, as the LRG1 high
   value is.

5. **Modified-gravity μ_0 connection**. DESI 2024 VII reports μ_0 = 0.11 +0.45
   /−0.54 from FS+BAO alone — i.e., consistent with GR. If Synchronism's growth
   suppression were real, it should imply μ_0 < 0 at meaningful significance.
   This is another tension axis the framework has not staked out a position on.

6. **The "first refuted Tier-1 test" milestone**. There is a procedural
   question: should the framework's badge taxonomy distinguish "Failed —
   structural" (Bullet Cluster sign error, dark matter mechanism contradicts
   collisionless behavior) from "Failed — kill criterion triggered on a stated
   numerical prediction" (TEST-03 RAR scatter, now TEST-04a fσ₈)? The latter
   is what a referee calls "the prediction was made and the data disconfirmed
   it" — which is a different epistemic event than discovering a structural
   incompatibility. If the site grows a "Failed prediction archive" page,
   TEST-04a belongs there as the second entry (after TEST-03).

## Sources

- DESI 2024 V: arXiv:2411.12021 (full-shape, per-bin Tables 9 & 10) — A.G. Adame
  et al., DESI Collaboration, Nov 2024.
- DESI 2024 VII: arXiv:2411.12022 (cosmological constraints) — companion paper
  with combined σ₈, Ω_m, H₀ constraints (Table 2).
- DESI DR2 BAO: arXiv:2503.14738 (DR2 BAO + ΛCDM constraints) — context for
  expected DR2 full-shape precision; FS companion not yet identified.
- Synchronism Session 107: `Research/Session107_DESI_Forecasts.md` (Dec 2025).
- Planck 2018 σ₈: 0.8133 ± 0.0050 (cited in DESI 2024 VII p.13).
