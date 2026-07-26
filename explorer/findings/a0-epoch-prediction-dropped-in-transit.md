# Finding: A Registered Prediction Was Dropped in Transit; the Site Asserts Its Absence as a Virtue; and When Executed It Turns Out to Be Milgrom's

**Date**: 2026-07-26
**Session**: Explorer 2026-07-26
**Origin**: Queued topic `hubble-sigma8-tension-framework-posture.md`, plus adjudication of visitor
Pass 4's (2026-07-26) proposed refutation `H₀ = 2πa₀/c = 77.6 km/s/Mpc`.

---

## Summary

Visitor Pass 4 proposed logging `H₀ = 2πa₀/c = 77.6 km/s/Mpc` as an executed refutation, rating it
P1-high and *"the single most valuable unclaimed result on the site."* **The arithmetic is right and
the inference is wrong**: it drops a₀'s published systematic uncertainty, which moves the tension from
4.4σ to ~0.7σ. This is a recurrence of a failure mode already diagnosed on this exact row on
2026-07-05, arriving 21 days later through a different door.

But the instinct that `a₀ = cH₀/(2π)` holds untapped content was correct — **pointed at the wrong
variable**. The content is not in H₀'s *value*. It is in H's *time-dependence*. And the framework
already registered that, five months ago, quantitatively, with a falsification criterion attached:

> **P1**: `a₀(z) = cH(z)/(2π)` — test: high-z rotation curves — expected: a₀ 1.7× higher at z=1
> *(Session #385, 2026-02-06)*
> **Falsification**: "High-z BTFR evolves → *If false*: a₀ is constant, not derived from H"
> *(DECEMBER_2025_COMPREHENSIVE_FRAMEWORK, Appendix B)*

It never entered `PREDICTIONS.md`. It never reached the site. The site now carries a section titled
**"Cosmological Tensions We Don't Address"** asserting *"Synchronism makes no statement on H₀"* —
which is false, and which a prior explorer finding already flagged as false on **2026-04-18**.

**And then the prediction itself fails on execution — but not in the way I expected.** I drafted this
finding claiming a₀(z) was "the framework's only live MOND-discriminator," on the reasoning that MOND
holds a₀ fixed as a constant of nature. **That reasoning is wrong and I retract it.** Milgrom proposed
this himself, in this exact form, and pointed at exactly this test:

> *"If, indeed, cH₀ (and not only the cosmological constant) is causally related to a₀, then, since H
> varies with cosmic time, by its definition, so may a₀. **For example, if always a₀ ~ cH/2π, then a₀
> decreases as H does.** Such variations could be identified directly from MOND analysis of objects at
> high redshift… by measuring a redshift dependence of the proportionality coefficient in the
> mass-velocity relations."*
> — Milgrom, *Scholarpedia* "The MOND paradigm of modified dynamics," doi:10.4249/scholarpedia.31410

So `a₀(z) = cH(z)/(2π)` is **prior art with the same geometric factor**, exactly as the parent relation
`a₀ = cH₀/(2π)` is. It does not discriminate from MOND-the-research-program; only from
MOND-phenomenology-with-a₀-pinned. Three further blows follow in Part 5: Milgrom pre-emptively
objects to the *specific* BTFR route the framework registered; the predicted amplitude is degenerate
with ordinary ΛCDM feedback evolution; and the observational literature is in open, unadjudicated
conflict. **Net: not a discriminator, and not refuted either — another MOND-shared,
ΛCDM-degenerate non-discriminator, reached this time by execution rather than by omission.**

**The structural findings (Parts 1–4, 6, 7) are unaffected by this and are the durable result.** The
ledger gap, the four false silences, the hardened omission, and the TEST-ID drop mechanism all stand
regardless of whether NP3 was ever going to work.

---

## Part 1 — The proposed refutation is an error bar deflation

Pass 4's chain: invert `a₀ = cH₀/(2π)` on the measured a₀ = 1.20×10⁻¹⁰ m/s² to get the H₀ the
relation requires.

The arithmetic checks exactly (script `/tmp/a0/inv.py`, constants: c = 2.99792458×10⁸ m/s,
1 Mpc = 3.0856775814913673×10²² m):

```
a0 = 1.20e-10  ->  H0_required = 77.61 km/s/Mpc     ✓ (Pass 4: 77.6)
```

The error is in what happens next. Pass 4 compares 77.6 against H₀ measurements using **only the
measurement uncertainties**, treating a₀ as exact:

| H₀ measurement | value | gap | σ using **meas. error only** | σ including **a₀ systematic** |
|---|---|---|---|---|
| Planck 2018 | 67.4 ± 0.5 | +10.2 | **20.4σ** | **0.7σ** |
| DESI+BBN | 68.5 ± 0.6 | +9.1 | 15.2σ | 0.6σ |
| CCHP TRGB (JWST) | 70.4 ± 1.9 | +7.2 | 3.8σ | 0.5σ |
| SH0ES 2022 | 73.04 ± 1.04 | +4.6 | **4.4σ** | **0.3σ** |

a₀ is not exact. Its published uncertainty is dominated by a **systematic** far larger than its random
error. Verified verbatim from the primary source — McGaugh, Lelli & Schombert 2016, PRL 117, 201101
(arXiv:1609.05917):

> *"For our adopted Υ⋆, we find g† = 1.20 ± 0.02 (random) ± 0.24 (systematic) × 10⁻¹⁰ m s⁻². The
> random error is a 1σ value, while the systematic uncertainty represents the 20% normalization
> uncertainty in Υ⋆."*

Confirmed independently in Lelli et al. 2017 (arXiv:1610.08981, ApJ 836, 152), which also states
*"in the specific case of MOND, the empirical constant g† is equivalent to the theoretical constant
a₀"* — so the systematic transfers directly. Milgrom 2020 (arXiv:2001.09729) gives a₀ *"to within
10–20%"*; the spread across independent determinations (Begeman+1991: 1.21; Bottema+2002: 0.9, on a
revised distance scale) is consistent with ~20%. Propagated through the same inversion:

```
H0_required = 77.6 +/- 1.3 (random) +/- 15.5 (systematic)
```

Run the same comparison in the forward direction the site actually uses and the point is starker —
the identical 13.2% gap is **7.9σ** against a₀'s random error alone and **0.66σ** against its full
error. The proposed refutation is a ~12× error-bar deflation. **It is not a refutation.**

This is the second time this row has attracted an over-refutation. On 2026-07-05 the *ledger* had it
mis-bucketed as REFUTED with a wrong-session citation and "wrong sign" phrasing borrowed from the γ
result; that was corrected, and `PREDICTIONS.md:271` now carries the explicit note *"Moved here from
Bucket 2 (2026-07-05): the ledger over-refuted."* The correction held in the archive — and did not
immunize the site loop, because nothing on the site records **why** the row is not a refutation. A
fresh reader with correct arithmetic re-derives the same wrong verdict. **A correction that lives
only in the ledger does not defend the claim it corrects.**

## Part 2 — The persona pointed at the powerless half of the relation

`a₀ = cH/(2π)` has two testable axes. They do not have comparable power. Taking a₀'s systematic as
~20%:

| Axis | Registered as | Signal | Signal / systematic | Verdict |
|---|---|---|---|---|
| **H₀ value** (Planck vs SH0ES) | S385 **P2** | 8.4% | **0.42** | **No power** — signal below systematic |
| **Epoch**, z=0.5 | S385 **P1** | 32% | 1.61 | marginal |
| **Epoch**, z=1 | S385 **P1** | 79% | **3.95** | powered |
| **Epoch**, z=2 | S385 **P1** | 203% | **10.2** | strongly powered |

The epoch axis carries roughly **an order of magnitude more signal** than the axis Pass 4 chose. And
it is *better* than this table suggests: a differential z=0 vs z=1 measurement made with consistent
methodology cancels much of the stellar-M/L normalization systematic, which is exactly the term that
dominates a₀'s error budget.

So the honest status of P2 is neither "refuted" nor "no statement" but a third thing the site's badge
vocabulary has no word for: **registered, executable today, and powerless** — the signal sits below
the systematic floor. That is a real and reportable verdict.

## Part 3 — What the archive actually holds on H₀

The queued topic assumed the framework could only couple to H₀ through recombination-era physics, and
concluded that absent recombination physics it is "genuinely silent." **That premise is wrong.** The
coupling runs through a₀, not through recombination. Walking the archive turns up four distinct H₀
engagements, none of which is on the site:

| # | Archive item | Date | Status |
|---|---|---|---|
| 1 | **S226** — "The Hubble Tension from Coherence Physics": environment-dependent H₀ | 2026-01-05 | **EXECUTED, REFUTED BY SIGN** — predicted H₀_local *lower* by 0.4%; observed *higher* by 8.3% |
| 2 | **S385 P2** — a₀ tracks H₀ → ~8% between methods | 2026-02-06 | Registered; **no power** (Part 2) |
| 3 | **S385 P1 / S373 NP3** — a₀(z) = cH(z)/(2π) | 2026-02-05/06 | Registered, **discriminating**, never run |
| 4 | **S385 P4** — dark energy affects a₀(z); ΛCDM vs matter-only | 2026-02-06 | Registered, never run |

Item 1 is a clean, executed, sign-level negative result — the kind of thing this program is otherwise
scrupulous about displaying. It joins a growing list: `ρ_crit ∝ V⁻²` vs asserted `V⁺²`, and the
γ = 2/√N_corr RAR-offset correlation (predicted r = +0.55, measured −0.55). **Three independent
sign inversions** now sit in the cosmological/galactic sector. That is worth treating as a possible
systematic in its own right rather than three separate disappointments.

## Part 4 — "Untestable" was doing the work of "nobody looked"

NP3 was not forgotten. It was tracked continuously and **frozen**. It appears with an unchanged status
in at least eight downstream syntheses — S375, S378, S386, S389, S393, S569 — plus the 2026-04-27
publisher report and the research repo's own `SESSION_FOCUS.md:1711` ("Untestable with current data:
1 (NP3 a₀ redshift)"). The recurring justification, in S569's words:

> "Synchronism predicts a₀ evolves with H₀. **SPARC is local (z≈0), so this remains untestable with
> current data.**"

This is a category error. SPARC being local makes the prediction untestable **with SPARC**. It says
nothing about whether the prediction is testable — high-z disc kinematics is an established field with
its own samples. The status was assigned once against the program's habitual dataset and then
inherited by copy-paste through ~200 sessions without re-examination. The same frozen-inventory
pattern already documented for the "47 contributions" count.

The distinction the program's own principles insist on — *refuted* vs *untested (nobody looked)* —
needs a third bin: **mislabeled untestable**. A prediction filed under "untestable" is invisible to
every subsequent audit, because audits look for open tests. This one has been invisible for five
months while carrying the program's only live MOND-discriminator.

## Part 5 — The prediction, made executable

The archive supplies the observable in closed form (DECEMBER_2025, Appendix A):

```
a₀(z) = a₀ × [H(z)/H₀]
Δlog(V) = 0.25 × log[H(z)/H₀]
```

I re-derived this independently and it is correct: the BTFR is `M_b = V⁴/(G a₀)`, so at fixed baryonic
mass `V ∝ a₀^(1/4)`, giving `Δlog V = ¼ Δlog a₀`. Evaluated for flat ΛCDM, Ω_m = 0.315
(`/tmp/a0/btfr_z.py`):

| z | H(z)/H₀ | **Δlog V (dex)** | V ratio | BTFR mass zero-point shift |
|---|---|---|---|---|
| 0.5 | 1.322 | +0.030 | 1.072 | −0.121 dex |
| 1.0 | 1.790 | **+0.063** | 1.157 | **−0.253 dex** |
| 1.5 | 2.368 | +0.094 | 1.240 | −0.374 dex |
| 2.0 | 3.032 | **+0.120** | 1.320 | **−0.482 dex** |

**The registered test, stated so it can be run**: measure the baryonic Tully–Fisher zero-point at
z ≈ 1–2 against the local anchor. Synchronism (as registered) predicts the velocity zero-point rises
by +0.063 dex at z=1 and +0.120 dex at z=2, i.e. a₀ higher by 1.79× and 3.03×.

### Adjudication — EXECUTED against the literature. Verdict: **non-discriminating, not refuted.**

**(a) The local anchor is not the limitation.** Lelli et al. 2019 (arXiv:1901.05966) Table 1, V_f
sample: slope 3.85 ± 0.09, intercept 1.99 ± 0.18, σ⊥ = 0.026 ± 0.007, σ_obs = 0.24, N = 123. The
statistical SE on the mass zero-point is 0.24/√123 = **0.022 dex**, ~12σ against the predicted
0.25 dex signal. But the slope moves 3.85 → 3.52 → 3.06 across V_f / V_max / V_2.2 — **so a high-z
measurement using a different velocity proxy is compared against a different local relation.**

**(b) Milgrom pre-emptively objects to the registered route.** arXiv:1703.06110, Discussion:

> *"Ideally, we could test for variations of a₀ by searching for evolution in the proportionality
> constant of the MASR… But this is not possible with the present data, as clearly they do not reach
> the asymptotic speeds, as required by the MOND MASR. **'Evolution' of the zero point of some
> versions of the BTFR, using available velocity measures such as the maximum speed have been
> studied. But these are not what the MOND MASR dictates, and cannot be used to constrain
> cosmological variations of the MOND constant.**"*

`M_b = V⁴/(Ga₀)` holds for the *asymptotic* speed V∞, which high-z rotation curves do not reach. The
framework registered exactly the observable Milgrom names as invalid for this purpose. This is a
methodology defect in the registration, not a data limitation.

**(c) The amplitude is degenerate with ΛCDM.** Mayer et al. 2023 (arXiv:2206.04333) fit a₀ to
ΛCDM+baryons *Magneticum* simulations and find the fitted a₀ *"increase[s] by a factor of
approximately 3 from redshift z = 0 to z = 2"* — from ordinary feedback-driven galaxy evolution, with
no modified dynamics at all. The prediction is 3.03× at z=2. **A detection at exactly the predicted
amplitude would not distinguish the framework from ΛCDM.** This is the same degeneracy trap that has
closed every other galactic-sector test in this program.

**(d) The observational literature is in open conflict, and the prediction sits in the gap.**

| Source | arXiv | Result | vs prediction (1.79× at z=1, 3.03× at z=2) |
|---|---|---|---|
| Milgrom 2017 | 1703.06110 | Genzel data *"all but exclude ~4a₀ at z~2, excluding e.g. a₀ ∝ (1+z)^{3/2}"* | **Does not exclude 3.03×** — prediction sits just under the bound |
| Ciocan et al. 2026 (MUSE-DARK III, A&A 709 L16) | 2604.22613 | a₀(z~1) = 2.38⁺⁰·¹²₋₀·₁₀ ×10⁻¹⁰ (**1.98×**), ~30σ, *"faster than H(z)"* | Same direction, ~10% above; **in direct conflict with Milgrom 2017** |
| **Lelli et al. 2023** (A&A 672, A106) | **2302.00030** | **CO kinematics of zC-400569 at z≈2.24 — one of Genzel's own six — with V_rot/σ_CO ≳ 17–22, i.e. *"no significant pressure support"*: *"MOND can successfully fit the rotation curves with the same acceleration scale a₀ measured at z≃0."*** | **Prediction needs 3.38× at z=2.24. This is the most direct constraint available and it says CONSTANT.** N=2 galaxies; a demonstration of sufficiency, not a quantified exclusion |
| Vărăşteanu et al. 2025 | 2504.20857 | ~2.4σ tentative evolution — but the sample is **z ≤ 0.08**, not high-z | negligible lever arm; MUSE-DARK III calls it consistent with theirs within ~1.5σ |
| Gueorguiev 2024 | 2409.11425 | rebuttal: z-slope *"consistent with zero"* | inconsistent |
| Del Popolo & Chan 2024 | 2405.01841 | sign flips between low-z and high-z subsamples | unstable |
| Übler et al. (via Ciocan §4) | — | ΔZP = −0.44 dex at z~0.9 | ~1.7× the predicted −0.25 |
| Alexandre (via Ciocan §4) | — | no evolution at z~1 | inconsistent |

The disagreement tracks **gas-mass treatment** — Ciocan notes Übler's baryonic masses *"rely on
scaling relations and neglect M_HI."* Killing Ciocan's detection would need stellar-mass offsets of
+0.2 to +0.45 dex.

Two cautions on the headline 30σ claim. Its own zero-point, a₀(0) = 1.0×10⁻¹⁰, sits below Desmond
2023's local SPARC value **1.19 ± 0.04 (stat) ± 0.09 (sys)** (MNRAS 526, 3342) — the anchor of the
claimed evolution law is ~2σ off the best local measurement. And extrapolating its linear law
a₀(z) = 1.0 + 1.59z to z=2 gives **4.18×**, essentially exactly the *"~4a₀ at z~2"* that Milgrom 2017
says the Genzel data all but exclude. *(That extrapolation is mine, beyond their fitted range
0.33 < z < 1.44 — neither paper makes the claim.)* Ciocan's a_tot also comes from the same
pressure-support-corrected disk–halo modelling that the Sharma / de Araujo-Carvalho critiques identify
as the dominant cosmic-noon systematic, and an under-corrected pressure gradient pushes the inferred
acceleration the *same* direction as a genuine a₀ rise. That degeneracy appears unaddressed.

**Also note the Genzel result itself has substantially softened.** The 2017 paper's own group revised
median f_DM upward from 0.0–0.21 (N=6) to 0.27–0.38 (N=100, Nestor Shachar et al. 2023,
arXiv:2209.12199), and the falling-curve claim is contested by Tiley et al. 2019 (arXiv:1811.05982 —
shape *"depends upon the normalisation prescription"*; ~1500 galaxies give flat-or-rising),
Sharma et al. 2021 (arXiv:2005.00279 — asymmetric drift *"a more dominant effect than beam smearing"*),
and Puglisi et al. 2023 (arXiv:2305.04382 — only the *dispersion-dominated* objects decline, which is
the pressure-support-artifact signature). Anyone citing Genzel 2017's f_DM values as a current
position is using numbers the authors have since moved.

**(e) The systematic floor — and it sits above the signal.** No paper quotes a total high-z BTFR
systematic floor as a single number, so I had it assembled two ways: a component budget, and the
empirical spread among published measurements of the same quantity. They agree.

*Empirical floor.* Published z≈1 baryonic zero-point offsets **disagree by 0.44 dex**: Übler et al.
2017 (arXiv:1703.04321) give Δb_bTFR = **−0.44**; Jeanneau et al. 2026 (MUSE-DARK II,
arXiv:2603.28856) give **0.00 ± 0.06**. Those are formally inconsistent at >7σ on their own error
bars. Turner et al. 2017 (arXiv:1711.03604) bound 12 "reliable" distant samples to ±0.10 dex in
velocity and show *"the size and sign of the inferred Vc offset depends sensitively on the fraction of
the parent samples used… and how strictly the criterion of 'rotation dominated' is enforced."*

*Component budget.* Quadrature ≈ **0.4 dex (mass) / ≈0.10 dex (velocity)** — dominated by sample
selection, pressure-support prescription, and velocity definition, with M_gas at high z not measured
at all but inferred from SFR via the Tacconi scaling relations (0.2–0.3 dex).

Two items are decisive on their own:

- **Übler's own selection systematic is the entire size of the signal.** Relaxing their disc/S:N/merger
  cuts moves the baryonic zero point by **Δb_bTFR = 0.39 dex** — against a predicted 0.25 dex at z=1.
- **Tiley et al. 2019** (arXiv:1810.07202), the cleanest statement of the floor in the literature:
  matching SAMI data quality to KROSS changes the TFR *"in every case as large or larger than the
  differences between the KROSS z≈1 and matched SAMI z≈0 relations,"* and for disc-like star-forming
  galaxies they find **no significant zero-point difference between the two epochs.**

| | predicted signal | floor | signal/floor |
|---|---|---|---|
| z=1 | 0.253 dex (mass) / 0.063 (vel) | ~0.4 / ~0.10 | **0.63** |
| z=2 | 0.482 dex (mass) / 0.120 (vel) | ~0.4 / ~0.10 | **1.20** |

**Verdict.** At z=1 the signal is **below** the systematic floor — untestable, and any refutation claim
from published high-z zero points would be unsupportable. At z=2 it is marginally comparable, but not
separable, because the dominant systematic can move the answer that far **in either sign**. Combined
with (b) the invalid registered observable, (c) full ΛCDM degeneracy at the predicted amplitude, and
the Milgrom prior art in the Summary:

> **Status: prior-art, methodologically mis-specified, ΛCDM-degenerate, and signal-to-systematics < 1
> on the registered observable. Not refuted. Not supported. Not a discriminator.** The correct badge
> is the site's existing **`unrunnable`** category (created for the doubly-unanchored C problem) —
> *not* `failed`.

**One important asymmetry: the framework registered the weaker of two available observables.** The
BTFR zero-point route is systematics-limited (above) *and* the one Milgrom names as invalid. The
**direct RAR-fitted a₀ at high z** is the stronger route — and it has already been run by others, with
data the framework never touched. That route currently leans **against** the prediction: Lelli et al.
2023 fit a z≈2.24 rotation curve with the unchanged local a₀ where the prediction requires 3.38×, on
the cleanest high-z kinematics available (CO, V_rot/σ ≳ 17–22, so Milgrom's pressure-support objection
does not apply). It is N=2 and a sufficiency demonstration rather than a quantified exclusion, so it
does not convert the verdict to `failed` — but it is the single most direct constraint in the
literature, it was available, and nobody in this program looked. **If NP3 is ever revisited, it should
be revisited on the RAR axis, not the BTFR axis.**

**The archive's "untestable" label was substantively right and its reasoning entirely wrong**, and the
wrong reasoning is what made it unauditable. S569 said untestable *because SPARC is local*. The true
reason is *because the signal sits ~1.6× below the high-z systematic floor*. The first is
unfalsifiable in practice and invites no re-examination ever; the second names a quantity that
improves with instrumentation and would have been re-checked. **A correct status held for a wrong
reason is not a correct status** — it is an unauditable one, and that is why it survived five months
and eight syntheses unexamined.

*Constructive note (the one live path):* these systematics are largely **common-mode**. Tiley+2019
shows a single pipeline applied identically at two epochs cancels much of the data-quality term. A
**differential** formulation — offset *shape* vs z, or a relative offset between two high-z subsamples
analysed identically — can beat the absolute zero-point floor where an absolute test cannot. If this
prediction is ever to be run, that is how.

⚠ **Do not cite Li et al. 2018 (arXiv:1803.00022) against this.** It constrains *galaxy-to-galaxy*
variation in g† (*"no room to accommodate substantial variation"*), not redshift variation — a
different axis, and an easy misreading for a future session to make.

**Everything in Parts 1–4, 6 and 7 stands independent of this outcome.** The ledger gap, the four
false silences, the hardened omission, and the TEST-ID drop mechanism do not depend on which way the
data falls — and the fact that the prediction turned out not to work is *precisely* why it should
have been in the ledger, where it could have been checked in February instead of July.

## Part 6 — The site asserts the absence, in a section framed as honesty

`/honest-assessment` carries a section headed **"Cosmological Tensions We Don't Address"**, introduced
with *"A framework claiming cosmological scope should say explicitly where it is silent. The following
are open problems in cosmology (2024–2026) where Synchronism makes no prediction"* and closed with
*"Explicit silence is more honest than tacit omission."*

I checked each claim against the archive, and I have separated flat contradictions from misleading
omissions deliberately — manufacturing a contradiction would be the same sin this finding documents:

| Site statement | Archive | Verdict |
|---|---|---|
| "Synchronism makes no statement on H₀" (`honest-assessment:1085`, and the "H₀ Tension — Not Addressed / No prediction" card) | S226 executed & sign-refuted; S385 P2 registered | **FLATLY FALSE.** No scope reading rescues it. |
| "JWST early galaxies: … Synchronism has no analysis" (`:1086`) | NP3 registered since 2026-02 as *"needs JWST"* | **FALSE as stated** — a registered prediction is waiting on precisely this instrument |
| "C(ρ) contains no dark-energy sector and no mechanism that modifies the expansion history … no coupling to w(z)" (`:1088`, added 2026-07-22) | S385 **P4**: dark energy affects a₀(z) | **Too strong.** The coupling is real but runs *inward* — w(z) → H(z) → a₀(z). The framework doesn't modify expansion; expansion modifies its acceleration scale. That is a coupling, and it is registered. |
| "Of these 24 proposed tests, 0 currently discriminate from MOND+EFE+ΛCDM" (`test-catalog:109`) | NP3 is outside the 24 — and Part 5 shows it does not discriminate either | **CORRECT — and vindicated by execution.** I drafted this row as "materially misleading" on the assumption NP3 discriminated. It doesn't (Milgrom prior art; ΛCDM-degenerate at the predicted amplitude), so the headline survives, and survives *more* broadly than its own scope claimed. **But it was right by luck, not by audit:** nobody had checked the catalog was complete, and the completeness question is still open (Part 7). |

The structural point is worse than any individual row. On **2026-04-18** an explorer finding
(`cmb-cosmology-site-archive-divergence.md`) already established this exact pattern and explicitly
listed the S226 Hubble result among the archive material missing from the site. Three months later it
is still missing — and in the interval the site **hardened the omission into an assertion**, giving it
a section header, a rationale, and a virtue framing.

**That is a new failure mode, and it is the most important thing in this finding.** A propagation gap
left unfixed does not stay neutral. It gets re-inscribed as a positive claim of absence — and once
inscribed, it is *harder* to detect than the original silence, because it now reads as the most
trustworthy kind of statement the site makes. The honesty mechanism metabolized its own blind spot
into a credential.

## Part 7 — The drop rate is not zero, and the mechanism is the TEST-ID

I swept the other four registered "novel predictions" (S373 §6, the NP series) plus S385's P5 against
`PREDICTIONS.md` and the site source. Result:

| ID | Prediction | Archive adjudication | In ledger? | On site? |
|---|---|---|---|---|
| NP1 | a₀ = cH₀·Ω_m^φ | "SUPPORTED (~10%)" → **"artifact"** (S569) | **no** | **no** |
| NP2 | RAR scatter environment-dependent | reparametrization; executed & refuted | **yes** → TEST-08 | yes |
| NP3 | a₀ evolves with redshift | "untestable" (frozen ×8 syntheses) | **no** | **no** |
| NP4 | Phase transition at g† (V-shaped scatter) | "Tested — V-shape found"; later reparametrization | **no** | **no** |
| NP5 | Wide-binary density dependence | → Gaia | **yes** → TEST-02 | yes |
| P5 | C(a₀) = (1+Ω_m)/2 ⇒ G_eff = 1.521 G | — | **no** | **no** |

**Three of five NP predictions, plus P5, never reached the ledger.** My first read was that the filter
was outcome-correlated — that the refuted ones survived transit. It isn't: NP2 and NP4 were *both*
classified reparametrization, and only NP2 propagated. The actual discriminator is mechanical and
much more useful:

> **Archive predictions reach the ledger only by being assigned a `TEST-nn` ID.** NP2 → TEST-08,
> NP5 → TEST-02. NP1, NP3, NP4 and P5 were never given IDs, and the ledger is organized around IDs —
> so nothing without one is visible to any audit that walks it.

This makes the "untestable" label **self-sealing**, which is why NP3 in particular vanished so
completely. You do not mint a test ID for something you have classified as untestable. So the
classification and the missing ID are the same event: classify → no ID → invisible to the ledger →
never re-examined → *stays* classified. The label protects itself from the audit that would overturn
it. NP3 sat inside that loop for five months while carrying the program's only live discriminator.

---

## Implications for the Site

The site's headline posture — *"0 tests discriminate from MOND+EFE+ΛCDM"* — **survives this
investigation, and is strengthened by it.** The one registered prediction hiding outside the catalog
turned out not to discriminate either, for reasons the catalog never had to invoke. That is a real
result: the verdict now covers material the site did not know it was claiming.

But the *conclusion* being robust does not make the *process* sound. The site reached a correct
answer over a denominator it had never verified, and the sector's fourth H₀ engagement — S226,
executed and refuted by sign — is a negative result the program earned and then lost. **The
correction here runs in the under-claimed direction**, which is the direction this program's
instincts are least tuned to catch: my own memory of this codebase says the systemic bias is
over-refutation, and that prior is what made a dropped prediction invisible to me until I walked the
archive's own tables rather than the ledger.

Note the symmetry in this session. Visitor Pass 4 over-refuted the a₀ row by dropping a systematic.
I then over-claimed the same row in the opposite direction by asserting a discriminator without a
prior-art check. **Both errors were caught by the same discipline — walk it to a primary source —
and neither would have been caught by internal consistency alone.**

And the ledger it rests on is **not a census**. Part 7 shows it is a projection of the archive through
a `TEST-nn` filter that dropped 3 of 5 registered novel predictions. Every headline count the site
publishes — "0 confirmed," "24 proposed tests," "4 refutations" — is computed over that filtered set.
The counts may still be substantively right; three of the four dropped items were adjudicated
artifact or reparametrization in the archive anyway. But **the site does not currently know whether
its own denominators are complete**, and until the sweep in Open Threads is run, it cannot say so.

## Action: Maintainer

Ordered by leverage. Items 1–3 are corrections to false statements and should not wait on the
literature adjudication in Part 5.

1. **`/honest-assessment` — delete "Synchronism makes no statement on H₀" and replace it with what
   actually happened.** Suggested: *"Synchronism has made three statements about H₀. One was executed
   and failed by sign (S226: predicted local H₀ lower than CMB H₀ by 0.4%; observed 8.3% higher). One
   (a₀ tracks H₀) is executable today but powerless — the ~8% signal sits below a₀'s ~20% systematic.
   One (a₀ tracks H(z)) has never been run."* This is strictly more honest than the current text and
   costs the site nothing it should want to keep.
2. **Log S226 as an executed sign-level refutation** in the ledger and on `/honest-assessment`. It is a
   clean negative result the program earned and then lost track of. Note its membership in the
   three-sign-inversion pattern (with `ρ_crit ∝ V^±2` and the γ RAR-offset correlation).
3. **Fix the "JWST — no analysis" line and soften the w(z) line** per the Part 6 table. The w(z) line
   should say the coupling runs inward (w → H → a₀), not that there is none.
4. **Enter `a₀(z) = cH(z)/(2π)` in `PREDICTIONS.md` as a closed, non-discriminating row** — Bucket 3
   (reparametrization), alongside its parent `a₀ = cH₀/(2π)`. The parent is Milgrom's coincidence;
   **the child is Milgrom's own proposed evolution of it, with the same 2π** (Scholarpedia,
   doi:10.4249/scholarpedia.31410). Record: the registered observable is the one Milgrom names as
   invalid for this purpose (asymptotic-speed requirement, arXiv:1703.06110); the predicted amplitude
   is degenerate with ΛCDM feedback evolution (Mayer+2023, arXiv:2206.04333); and the observational
   literature is unresolved (Ciocan+2026 vs Milgrom 2017). **Do not badge it as a discriminator, and
   do not badge it refuted.** Provenance note: S385 self-grades the derivation **B+** with the 2π
   factor and the N_corr = 1 boundary *assumed, not derived*; S569 demoted the sibling NP1 to
   "artifact." Add the ⚠ warning that Li et al. 2018 constrains galaxy-to-galaxy, not redshift,
   variation — it is the obvious misreading and it would manufacture a false refutation.
5. **Leave `/test-catalog:109` alone — it is correct.** I initially flagged it and was wrong; Part 5
   vindicates it. Optionally strengthen it: the "0 discriminate" verdict now also covers a registered
   prediction from *outside* the catalog, which is a stronger statement than the line currently makes.
6. **Back-annotate the archive**: the whitepaper still carries `a₀ = cH₀/(2π) | DERIVED | 10%` at
   `1.08×10⁻¹⁰` — the H₀ = 70 value the site corrected on 2026-07-22 and standardized to 1.04 at
   H₀ = 67.4. This is site→archive drift, the reverse of the usual direction.

## Open Threads

- **⚠ A ~5σ internal tension inside the MUSE-DARK series, which nobody appears to have drawn.**
  MUSE-DARK III (Ciocan et al. 2026) claims a₀(z~1) = 2.38×10⁻¹⁰, i.e. **1.98×** local, at ~30σ.
  Under `M_b = V⁴/(Ga₀)` that forces a BTFR mass zero-point shift of **−0.297 dex**. MUSE-DARK II
  (Jeanneau et al. 2026), the *same series*, measures **Δb_bTFR = 0.00 ± 0.06** — a **5.0σ** conflict
  between two papers from one collaboration. **Caveat before anyone runs with this:** the two are
  strictly linked only under the asymptotic-speed MASR, and Milgrom's objection in Part 5(b) says
  high-z velocities do not reach it — so the tension may dissolve into exactly that methodological
  gap. That is *itself* worth writing up. This is outward-facing modified-gravity phenomenology with
  no Synchronism content, which makes it one of the few places this program could contribute
  something other than a self-audit.
- **Retire "untestable" as a status, or require it to name the instrument.** NP3 shows the label is
  load-bearing and unaudited: anything filed there leaves the audit surface permanently. A cheap rule
  — *"untestable" must cite what measurement would be needed and why it does not exist* — would have
  caught this in February, because the honest answer ("high-z disc kinematics") is a field that
  already exists.
- **Sweep the remaining archive prediction tables.** The NP-series sweep is done (Part 7: 3 of 5
  dropped, plus P5). But S373/S385 are two sessions out of ~700. Every synthesis session with a
  prediction table needs the same walk, and the diagnostic is cheap now that the mechanism is known:
  **grep the archive for prediction tables, extract every row, and check each against the TEST-nn
  registry.** Anything without an ID is invisible by construction. This should be a standing check,
  not a session.
- **Give every registered prediction an ID at registration time**, including — especially — the ones
  classified untestable. An ID costs nothing and is the only thing that makes a prediction visible to
  later audits. This single change would have surfaced NP3 in February.
- **Three sign inversions in one sector.** ρ_crit(V), γ RAR-offset, and now S226 H₀_env all fail by
  sign rather than magnitude. The standing conjecture that C_galactic/C_cosmic may be inverted
  relative to the framework's assertion now has a third data point and deserves a direct test.
- **P3 ("local H → local a₀, ~5% variation") is testable with data the program already has.** The
  environment tests (TEST-05/TEST-08) ran on SPARC + CF4. P3 was never run against them. Worth
  checking whether it is even coherent (local H does not vary in the way P3 seems to assume) before
  spending a session on it.
- **A correction that lives only in the ledger does not defend the claim it corrects.** The 07-05 a₀
  fix was right, propagated to `PREDICTIONS.md`, and still failed to prevent a same-row re-derivation
  three weeks later, because the site carries no note of *why* the row is not a refutation. Sites
  need to carry their own immune memory.
