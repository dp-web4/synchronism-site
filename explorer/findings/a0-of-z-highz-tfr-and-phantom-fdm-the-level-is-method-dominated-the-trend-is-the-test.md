# Finding: a₀(z) = cH(z)/2π against high-z Tully–Fisher zero points and 41 published f_DM(R_e) — non-discriminating twice, for a reason that names the better test

## Origin
Topic `a0-of-z-against-high-z-btfr-zero-points.md` (maintainer 2026-09-19, from a researcher persona; the persona's
from-memory result was marked do-not-cite and is not cited — it is checked, below).

**Pre-registered.** `explorer/work/2026-09-19-a0z-btfr/PREREG.md`, commit `7567ad1`, before any offset was fetched and
before any script existed. Addendum A1, commit `a10ad64`, after reading the papers and before any script existed, with
an exposure declaration. Scripts, each with `_output.txt`: `explorer/scripts/a0z_highz_tfr_and_phantom_fdm.py`
(registered Part 1 + addendum Part 2) and `explorer/scripts/a0z_phantom_fdm_posthoc_kfit.py` (**post-hoc, labelled**).
Numbers were read from the arXiv LaTeX sources (`explorer/work/2026-09-19-a0z-btfr/sources/`), not from summaries.

## Summary
The topic's prediction (bTFR mass offset −log₁₀E(z) at fixed V) is the asymptotic deep-MOND statement, and high-z surveys
measure the peak velocity of compact discs at g_N ≈ 1–3 a₀. Modelled properly, the branch-(A)-vs-constant-a₀ lever is
**−0.125 dex at z ≈ 0.9 and −0.243 dex at z ≈ 2.3**, while two surveys measuring the *same* stellar TFR at z ≈ 0.9
disagree by 0.25–0.35 dex. The handle is non-discriminating, and Milgrom 2017 said so in one sentence nine years ago.
Milgrom's own route — the phantom-matter fraction at R_e — executed on 41 discs instead of his 6, returns a
**method-split**: the Price+2021 MCMC fits prefer branch (A) by Δχ² = −39.7, the Genzel+2020 least-squares fits of the
same galaxies prefer constant a₀ by +10.9. My registered expectation that (A) would be disfavoured was **refuted**.
Post-hoc, the split is a *level* disagreement (the two methods want a₀ × 3.8 and a₀ × 1.6 at **all** redshifts), and a
level is not what branch (A) predicts. What it predicts is a *trend*: k(z ≥ 1.5)/k(z < 1.5) = 1.80. Observed: 1.46
(Price), 0.91 (Genzel). That ratio cancels the level systematic and is the statistic a registered test should use.

Count stays 6. No badge or ledger change proposed. Branch (A) remains *not counted / non-discriminating*.

## Research Notes

### 1. What the three papers actually say (read from source)
- **Übler+2017** (KMOS³D, arXiv:1703.04321), Table 2, slope fixed to Lelli+2016 (3.75), v_ref = 242 km/s: bTFR zero
  point 10.68 ± 0.04 at z ≈ 0.9 (65 galaxies), 10.85 ± 0.05 at z ≈ 2.3 (46). Against the local relation:
  **Δb = −0.44 and −0.27**. sTFR vs Reyes+2011: −0.44, −0.42. Without the pressure-support correction the bTFR offsets
  become −0.33 and −0.09 — the correction alone moves the z ≈ 2.3 point by 0.18 dex.
- **Tiley+2019** (KROSS–SAMI, arXiv:1810.07202): **stellar** TFR only. KROSS minus *matched* SAMI, disky subsample:
  −0.09 ± 0.06 dex. Their headline is that degrading SAMI to KROSS quality moves the zero point by as much as the
  epoch difference does. There is no bTFR in this paper; the topic's pairing of it with a bTFR prediction needs a gas
  fraction the paper does not supply.
- **Milgrom 2017** (arXiv:1703.06110) §4, verbatim: *"'Evolution' of the zero point of some versions of the BTFR, using
  available velocity measures such as the maximum speed have been studied. But these are not what the MOND MASR
  dictates, and cannot be used to constrain cosmological variations of the MOND constant."* He constrains a₀(z) through
  f_DM at R_1/2 of six Genzel+2017 discs instead: 4a₀ at z ~ 2 is "uncomfortably in tension"; (1+z)^{3/2} is excluded.
  He does **not** claim to exclude a₀ ∝ H(z): the paper says the result "may help constrain" it. E(2.2) = 3.3.

### 2. The registered TFR test (Part 1)
Freeman disc with the survey's median (M_bar, R_e), thick-disc factor 0.95, simple ν, V read at 2.15 R_d (where
Übler's modelled v_circ,max sits), offset taken against Lelli+2016 exactly as the paper does. σ_tot = stat ⊕ 0.10.

| | z ≈ 0.9 | z ≈ 2.3 |
|---|---|---|
| observed Δb | −0.44 ± 0.04 | −0.27 ± 0.05 |
| naive N = −log E | −0.220 | −0.530 |
| **C** constant a₀ | −0.100 | −0.296 |
| **A** a₀·E(z) | −0.224 | −0.540 |
| lever A − C | −0.125 (1.16 σ_tot) | −0.243 (2.18 σ_tot) |
| pull obs−C / obs−A | −3.16 / −2.00 | +0.24 / +2.41 |
| model V vs observed median | C 189, A 204, obs 239 km/s | C 252, A 293, obs 260 km/s |

Three things fall out.

**(a) The null is not zero.** Constant-a₀ MOND predicts −0.296 dex at z ≈ 2.3 because a compact disc's peak velocity
exceeds its asymptotic one. The measured −0.27 is that number to +0.24σ. Read against a null of zero — which is how the
topic, the persona and the naive formula all read it — the same datum looks like 2.4σ evidence *for* evolution.

**(b) The naive number is right for the wrong reason.** A = −0.224/−0.540 lands on N = −0.220/−0.530 to a hundredth of
a dex. That is a coincidence of two errors cancelling: the a₀ lever is roughly halved by dilution (−0.243 against
−0.530), and the compact-disc baseline supplies the other half. It will not hold for a sample with different sizes —
across the 68 % R_e range the A column runs −0.391 to −0.115 at z ≈ 0.9.

**(c) The non-monotonicity is real in the data and belongs to neither model.** Observed Δb(2.3) − Δb(0.9) = +0.17;
C predicts −0.197, A predicts −0.315. The persona's recollection was half right: the z-ordering is inverted relative to
H(z) scaling — but z ≈ 2.3 is not "the right order" either (2.3–2.4σ off A), and the inversion is **equally a mismatch
for constant a₀**, so it discriminates nothing. It is carried by the z ≈ 0.9 point, where the median galaxy rotates at
239 km/s and MOND at either a₀ gives 189–204 from the listed baryons. Übler's M_bar is stars + molecular gas from
scaling relations; H I is omitted, and at z ≈ 0.9 that is the first suspect. Significance is 2.65σ stat-only, 1.10σ
with my floor applied to each subsample — my registration did not say which, and the weaker reading scores.

**Verdict by the registered rule: none of the four clauses fires.** |A − C| is not < 2σ_tot everywhere (2.18 at
z ≈ 2.3), (A) is disfavoured in one survey not two, and "both fail" holds in one not two. **My rule was not
exhaustive** — the same defect class I counted in the site's registry yesterday, in my own registration the next
morning. By the tie convention it defaults to the weaker verdict, NON-DISCRIMINATING, and I am recording that this is a
default, not a firing. Independently of the rule: the two Übler subsamples share one method and one local reference,
so the number of independent bTFR surveys here is **one**, and the between-survey spread in the one quantity two
surveys both measured (sTFR at z ≈ 0.9: −0.44 or −0.34 vs −0.09) is 0.25–0.35 dex against a registered floor of 0.10
and a lever of 0.125. I set the floor before looking and it was 3× too small.

### 3. Milgrom's route on 41 discs (addendum A1, Part 2)
f_pred = 1 − 1/ν(g_N/a₀) at R_e from Price+2021 Table 1 masses (disc + point bulge, 0.2 dex mass scatter Monte-Carlo'd
into σ_pred), against two published f_DM(R_e) for the same galaxies. z ≥ 1.5, N = 21:

| ν | f_DM method | χ²_C (/N) | χ²_A (/N) | χ²_A − χ²_C |
|---|---|---|---|---|
| simple | Price+21 MCMC | 61.0 (2.90) | 21.3 (1.01) | −39.7 |
| simple | Genzel+20 LSQ | 28.3 (1.35) | 39.1 (1.86) | +10.9 |
| RAR | Price+21 MCMC | 73.4 (3.50) | 23.7 (1.13) | −49.7 |
| RAR | Genzel+20 LSQ | 33.3 (1.58) | 33.1 (1.58) | −0.1 |

Median f_obs is 0.43 (Price) and 0.22 (Genzel) **for the same 21 galaxies**; the models give 0.16 (C) and 0.34 (A).
Verdict by the rule: **NON-DISCRIMINATING** (signs disagree across methods). **PA1 refuted** — I declared this a
confirmation-shaped test expecting (A) to lose, and one of two published fits prefers (A) by forty units of χ².

This bears on a sentence the site carries. `/parameter-derivations:325` says 1703.06110 "*tests and disfavors* an
evolving a₀ against six high-z discs." On six discs with Genzel+2017's fits, yes, for 4a₀. On 41 discs the verdict
depends on which of two published fits of the same data you take, and the 09-11 finding met the same split from the
other side (10–13 of 21 over the cap on MCMC, 6 of 21 on least squares). **The fitting method is a larger lever than
E(z) on this sample, in both tests that have used it.**

### 4. Post-hoc: it is a level, and branch (A) predicts a trend
Fitting one constant multiple k of a₀ per redshift bin (0.2 dex scatter, simple ν):

| f_DM method | k (z < 1.5) | k (z ≥ 1.5) | ratio | all-z χ²: best k / C / A |
|---|---|---|---|---|
| Price+21 MCMC | 3.11 [2.51, 3.85] | 4.55 [3.67, 5.64] | 1.46 | 30.5 (k = 3.76) / 96.5 / 39.9 |
| Genzel+20 LSQ | 1.63 [1.35, 1.97] | 1.48 [1.23, 1.80] | 0.91 | 45.8 (k = 1.56) / 55.0 / 60.6 |

Branch (A) predicts a ratio of 1.80 (1.79 on the Genzel subset); constant a₀ predicts 1. Across mass scatter 0.1–0.3
dex and both ν the ratio is 1.36–1.50 (Price) and 0.79–1.05 (Genzel). Both methods want k > 1 **already at z < 1.5**,
so Price's preference for (A) in §3 is mostly (A) being the only registered model that raises a₀ at all — a constant
k ≈ 3.8 beats it (30.5 against 39.9). With interval half-widths of ~0.2 in ln k per bin the ratio carries ~0.3 in ln:
Genzel sits ≈ 2.5σ from 1.80 and on top of 1; Price sits ≈ 0.7σ from 1.80 and ≈ 1.3σ from 1. These σ are my
arithmetic from the Δχ² = 1 intervals, not a script output, and the whole section is post-hoc.

Why k > 1 everywhere: f_DM from an NFW + baryon fit is not the MOND phantom fraction; SED masses may run low; or these
discs carry more dynamical mass at R_e than their baryons explain under *either* a₀. I cannot separate these and have
not tried. It is the same excess that made the z ≈ 0.9 TFR point miss both models in §2(c) — two tests, one residual.

### 5. Scored predictions
| | prediction | outcome |
|---|---|---|
| P1 | lever at z ≈ 0.9 < 0.15 dex | **held** (0.125) |
| P2 | lever at z ≈ 2.3 in [0.10, 0.30] | **held** (0.243) |
| P3 | Δ_C(z ≈ 2.3) ≤ −0.10 | **held** (−0.296) |
| P4 | overall NON-DISCRIMINATING | **held by default only** — no clause fired; rule not exhaustive |
| P5 | naive N gives a different verdict from the model | **refuted on the strict reading** — N ≈ A to 0.01 dex; what changes is the *null* (C ≠ 0), which P5 did not say |
| P6 | the dilution argument is prior art | **held** — Milgrom 2017 §4, verbatim above |
| PA1 | (A) disfavoured on f_DM | **refuted** — method-split, Δχ² = −39.7 / +10.9 |
| PA2 | median f_pred: C in [0.10, 0.30], A in [0.30, 0.55] | **held** (0.16, 0.34) |
| PA3 | χ²_C/N > 2 on at least one method | **held** (2.90, Price) |
| PA4 | all-z Δχ² has the z ≥ 1.5 sign | **held**, 4 of 4 — though RAR × Genzel is −0.1 → −9.6, a sign match on a number that is zero |

7 held (one by default, one on a zero), 2 refuted, and two defects in my own registration: a systematic floor 3× too small, and a
decision rule with a gap between its clauses.

## Implications for the Site
- The row's verdict does not change. Its *support* does: "non-discriminating" now rests on three independent handles
  (Ciocan RAR intercepts — anchor-dominated; TFR zero points — definition- and survey-dominated; f_DM(R_e) —
  fit-method-dominated), each with a number.
- `/parameter-derivations:321` still opens the block in bold with "branch (A) has been tested and disfavored (updated
  2026-08-01)" and closes it with "Verdict — non-discriminating (revised 2026-08-04)". The first is the superseded
  state. `:325`'s "tests and disfavors" about Milgrom 2017 overstates what that paper claims for H(z) scaling and does
  not survive 41 discs.
- The visitor's P3/P4 request (say why the TFR literature is uninformative) has a two-sentence answer with a citation.

## Action: Maintainer
- **P1** `/parameter-derivations:321` — retitle the block to the current verdict; move "tested and disfavored
  (2026-08-01)" into the revision trail. Add a `site_lint` rule for "tested and disfavored" adjacent to a₀(z).
- **P1** `/parameter-derivations:325–326` — "the paper that *tests and disfavors* an evolving a₀" → "the paper that
  constrains a₀(z) from six high-z discs (≈ 4a₀ at z ~ 2 in tension; H(z) scaling, 3.0–3.5×, not claimed excluded);
  on 41 discs the same test splits by fitting method (explorer 2026-09-19)".
- **P2** `/mond-unification` a₀(z) paragraph — one sentence: high-z TFR zero points (Übler+2017, Tiley+2019) do not
  constrain this, per Milgrom 2017 §4; modelled lever 0.12–0.24 dex against a 0.25–0.35 dex between-survey spread.
  Link arXiv:2604.22613 (persona P3 could not verify the citation from inside the site).
- **Do not** add "constant a₀ fits the z ≈ 2.3 bTFR to 0.24σ" as a positive for anything: one median galaxy, one
  survey, and a₀ is not the framework's.

## Open Threads
- **Register the trend statistic prospectively.** k(z_hi)/k(z_lo) with the level free, on RC100 (Nestor Shachar+2023,
  100 discs, one fitting method throughout). Branch (A): 1.80 for this z-split; constant a₀: 1. State the kill as a
  ratio interval, make the clauses exhaustive, and set the systematic from the Price-vs-Genzel spread measured here
  (ln-ratio difference ≈ 0.47), not from a guess.
- **Why does every handle want more mass at z ≈ 0.7–1 than either a₀ supplies?** k_lo = 3.1 and 1.6; the z ≈ 0.9 TFR
  median at 239 vs 189–204 km/s. If H I is the answer it is checkable against the f_gas scaling relations Übler cite.
- **Ciocan+2026 says a₀ grows faster than H(z); Genzel's fits here say it does not grow.** Three datasets, three
  signs, each method-dominated. Is there any high-z a₀ handle whose systematic is below its lever? I have not found one.
