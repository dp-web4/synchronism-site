# The site runs two opposite coherence orientations — and its best result uses the flipped one

**Date**: 2026-07-29
**Track**: Explorer (self-directed, from 2026-07-28 open thread #3)
**Status**: EXECUTED — parameter-free; includes one correction to a standing site claim
**Scripts**: `/tmp/chem_sign.js`, `/tmp/two_coherences.js`, `/tmp/repair_matrix.js`, `/tmp/flip_test2.js`, `/tmp/robust.js` (reproduced below)

---

## Summary

Yesterday's session closed with an open thread: *are the framework's accumulated sign inversions
one bug or several — and do they cancel?* The answer is sharper than either option.

**Four of the documented inversions are one inversion.** They are the same statement seen from four
sectors: the governing equation makes coherence *rise* with density, and every sector that touches
data needs it to *fall*.

**And the sector the site counts as its best result already uses the flipped orientation.** The
chemistry cohort — r = 0.982 sound velocity, the largest "validated" cohort on the site — ranks
**diamond (ρ = 3.51 g/cm³) as highly coherent and lead (ρ = 11.34 g/cm³) as less coherent**. That is
`/sound-velocity`'s own worked example. It is anti-monotone in density, and therefore contradicts
`/coherence-function`'s stated design property #2 — *"Monotonic: Higher presence → higher coherence
(no paradoxical inversions)"* — which is the axiom the homepage equation is built on.

The two coherence orderings correlate at **Spearman −0.32** on 22 real elemental solids, and the
sign survives every subset I tried.

This reframes the ledger. The site currently reads as *"the framework failed in the galaxy sector."*
The accurate reading is *"the framework's governing equation has one orientation, its successful
sector has the other, and nobody cross-multiplied."*

A correction falls out too: the `ρ_crit ∝ V⁻²` "sign inversion" (2026-07-02, shipped 07-07) is
**estimator-dependent** — on the galaxy-plotter's own exponential-disk profile the exponent is
**+1.52**, not −2. That claim needs a specified estimator or a demotion.

---

## 1. The contradiction needs no data at all

Two statements, both currently live on the site:

| Page | Statement | Implication |
|---|---|---|
| `/galaxy-plotter` (code) | `v_syn² = v_b² + (V_flat · C)²` | missing gravity is **proportional to C** |
| `/dark-matter-failure` (prose) | "dark matter (**low coherence C**)" | missing gravity occurs where **C is low** |

If the missing-gravity term scales as C² and the missing-gravity phenomenon is identified as
low-C, the framework predicts the effect is absent exactly where it is observed. This is a
bookkeeping contradiction, not an empirical failure — no telescope required.

It is also the **root cause** of the 2026-07-28 result. Yesterday found the radial anti-correlation
empirically (Pearson −0.97 to −0.998) and called it "a sign error in the radial derivative." It is
better described as a definitional inconsistency that *had* to show up as a radial anti-correlation
the moment anyone plotted it.

Stated sector-neutrally, so the sectors become comparable — correlation of the **required**
non-baryonic term against **local density**:

| galaxy | r(log ρ, required term) |
|---|---|
| DDO 154 | −0.930 |
| NGC 2403 | −0.867 |
| NGC 3198 | −0.836 |
| UGC 128 | −0.902 |
| NGC 7331 | −0.583 |
| **mean** | **−0.824** |

Required coherence falls with density.

## 2. The chemistry sector already runs the other orientation

`/sound-velocity` (the site's strongest single correlation, r = 0.982, badged `validated`):

> "Materials with high sound velocity (diamond: 12,000 m/s) have strongly correlated atomic motion
> (**low γ, highly coherent**). Materials with low sound velocity (lead: 1,190 m/s) have weakly
> correlated atomic motion (**higher γ, less coherent**)."

Diamond is **3.23× less dense than lead** and is ranked more coherent. The chemistry sector's
coherence ordering therefore runs *against* density — the same direction the galaxy sector needs,
and the opposite of the governing equation.

This is not an artifact of one example. On 22 elemental solids:

```
  r(Z, ρ)                    = +0.909   (the periodic table IS density-monotone in Z)
  Spearman(ρ, sound velocity) = −0.322
  Spearman(ρ, bulk modulus)   = +0.677
```

Because `C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))` is a **monotone increasing** transform of ρ for every
γ > 0 and every ρ_crit > 0, the sign of `Spearman(C, target)` is parameter-free. Swept over
γ ∈ {0.25, 0.49, 1, 2, 4} × ρ_crit ∈ {0.5, 3, 8, 20}, all 20 combinations return the identical
value:

```
  Spearman(C(ρ), sound velocity) = −0.322    for every (γ, ρ_crit)
```

**The site badges this correlation +0.982. The framework's own coherence function, evaluated on
real densities, gives −0.32 — opposite sign, and no parameter choice changes it.**

### Why the sign is forced: the wave-speed identity

Sound speed is `v = √(K/ρ)`. Density sits in the denominator *by definition*, so any quantity
proportional to sound velocity carries a negative power of density. Regressing on the real data:

```
  fitted  ln v = const + (0.658)·ln K + (−0.757)·ln ρ
  theory                  +0.500 ·ln K + (−0.500)·ln ρ
```

(The literature values mix longitudinal and rod speeds, which inflates the magnitude; the sign and
the presence of a negative density exponent are not in question.)

So the framework's #1 chemistry target has ρ^(−1/2) built into it, while the framework's governing
equation is monotone increasing in ρ. **The exponent on density has opposite sign in the two places
the framework uses density.** This is the same species of catch as the Hill-identity finding
(2026-07-09): a result that was never wrong, just never cross-multiplied against its own framework.

### Robustness

| subset | N | Spearman(ρ, v_lit) | Spearman(ρ, √(K/ρ)) |
|---|---|---|---|
| all elements | 22 | −0.322 | −0.267 |
| drop diamond (outlier) | 21 | −0.310 | −0.252 |
| drop diamond, Be, Si (covalent) | 19 | −0.249 | −0.198 |
| metals only (ρ > 2) | 16 | −0.582 | −0.759 |
| heavy only (ρ > 5) | 12 | −0.371 | −0.455 |

Negative in every subset, on both literature values and the internally consistent `√(K/ρ)`.

**Prior art, cited honestly.** `chemistry-confound-analysis.md` already noted that
`v_s ~ √(B/ρ)` is a confound, and `chemistry-gamma-circularity-three-paths.md` established that the
N_corr recipe makes r = 0.982 circular through three paths. Neither drew the *sign* conclusion.
The new content here is orientation, not confounding: **whether or not the correlation is
circular, its sign places the chemistry sector in the flipped orientation** — which makes it
evidence about the governing equation rather than evidence for it.

## 3. The repair matrix — four inversions are one

Testing a single global orientation flip `C → C(ρ_crit/ρ)` against every documented inversion:

| # | inversion | axis | fixed by the flip? |
|---|---|---|---|
| i | γ = 2/√N_corr → sharpness | sharpness | **NO** — different axis; 07-03 showed the axis is *T*, not ρ |
| ii | ρ_crit ∝ V⁺² vs required V⁻² | location | **NO** — the transition *location* is orientation-independent (see §4) |
| iii | C = classicality; BEC/BCS land low | level | **YES** — dilute BEC goes high (BCS still fails; wrong axis) |
| iv | radial coupling dC/dr < 0 | level | **YES** — executed 07-28 |
| v | CFD viscosity mapping / Bullet Cluster | level | **YES** — dark matter becomes high-C; term ∝ C is then self-consistent |
| vi | chemistry ordering (**new, this session**) | level | **ALREADY FLIPPED** — the sector agrees with the flip |

**Four of six (iii–vi) are one inversion on the level axis.** The remaining two are genuinely
independent defects on the *sharpness* and *location* axes, and they survive the flip untouched.

So the answer to yesterday's thread #3 is: *not one bug, not four — one bug plus two orthogonal
ones.* And the level-axis bug is not a failure signal from the failed sectors. It is a **unanimous**
signal, including from the sector the site counts as a success.

## 4. Correction: the ρ_crit V-exponent inversion is estimator-dependent

While building the matrix I found that inversion (ii) does not hold up as stated. The requirement
is *where the transition sits*, which the orientation flip cannot touch — but the required exponent
depends on which density estimator you use at the MOND transition radius `r_t = V²/a₀`:

| estimator | required exponent |
|---|---|
| (a) exponential-disk midplane — **the galaxy-plotter's own profile** | **ρ_crit ∝ V^+1.52** |
| (b) mean enclosed density M/r_t³ | ρ_crit ∝ V^−2.00 |
| (c) isothermal V²/(4πG r_t²) | ρ_crit ∝ V^−2.00 |
| framework asserts | ρ_crit ∝ V^+2.00 |

Estimators (b) and (c) reproduce the 2026-07-02 finding exactly. Estimator (a) does not — and (a)
is the profile the site's own tool uses, and the only one of the three that is a *local* density,
which is what `C(ρ)` actually consumes. On it, the exponent is **positive and within 25% of the
asserted +2**.

**The "velocity exponent is sign-inverted" claim (shipped 07-07) is therefore not robust.** It
should either name its estimator explicitly or be demoted. This is the third time an estimator
choice has silently carried a headline verdict on this site — cf. the boost-ceiling convention
dependence (07-27) and the EFE erratum trap (0.094 → 0.040). That recurrence is itself worth a
protocol: *any exponent or threshold quoted as a kill must name the estimator that produced it, and
report at least one alternative.*

## 5. Does the flip buy anything? Necessary, not sufficient

Fitting the flipped form with **two free parameters per galaxy** against **zero-parameter** MOND
(RMS residual, km/s):

| galaxy | Newton | MOND (0 par) | Syn-flip (2 par/galaxy) |
|---|---|---|---|
| DDO 154 | 23.56 | 3.80 | **2.67** |
| NGC 2403 | 40.05 | **6.65** | 10.41 |
| NGC 3198 | 54.75 | **7.81** | 11.64 |
| UGC 128 | 34.02 | 3.62 | **2.05** |
| NGC 7331 | 61.00 | 22.48 | **20.93** |

The flip converts a monotone-wrong model into a fittable one — but it loses to a zero-parameter
model on **the two best-measured spirals** while spending two parameters per galaxy. This confirms
yesterday's result exactly (the flipped form was "necessary, not sufficient").

The honest bottom line: **fixing the orientation makes the sign ledger consistent and buys no
predictive power.** What remains is MOND with a density-parameterized interpolating function, and
with the framework's headline narrative inverted from *"dense means collective"* to *"sparse means
collective."*

---

## So what?

Three things, in descending order of consequence.

**1. The site's ledger is mis-partitioned.** It records four-to-six separate sign problems, each
with a local caveat on its own page, each looking like an isolated wound. They are mostly one
problem, and stating it once — *the governing equation's orientation is backwards* — is both
shorter and far more informative than six caveats. The site currently makes the framework look
*variously* broken when it is *specifically* broken, which is worse for a reader trying to decide
whether anything is salvageable.

**2. The success and the failures agree with each other, and nobody noticed.** This is the part
that changes the research posture. Every previous sign finding could be read as "the failed sectors
are telling us something." Chemistry is not a failed sector — it is the site's largest "validated"
cohort — and it independently votes for the same flip. A unanimous signal from a success and four
failures is a much stronger constructive lead than five failure reports, and it is the first thing
this program has found that points *toward* a specific repair rather than away from a claim.

**3. Over-refutation caught again.** The V-exponent kill does not survive a change of estimator, and
the estimator it fails on is the one the site's own tool uses. Memory already records that this
program's failures concentrate in self-refutation statistics rather than physics claims
(`project_directional_law_fails_null_reflexivity_predictor`). This is another instance, and the
recurring mechanism is now specific enough to be a rule rather than an observation: **unnamed
estimators.**

The uncomfortable part: the flip that makes everything consistent also inverts the sentence the
whole site is built around. "Dense/collective, sparse/independent" is on the homepage, in the
glossary, in the first-encounter analogy (marching band vs. wandering crowd), and in the plain-language
restatement today's visitor Pass 1 called the clearest thing on the site. The consistent version of
the framework says the marching band is the *thin* crowd. That is a real fork, and it belongs to dp,
not to me.

---

## Action: Maintainer

- **P1 — `/coherence-function`**: property #2 ("Monotonic: higher presence → higher coherence — no
  paradoxical inversions") is contradicted by `/sound-velocity`'s own diamond-vs-lead example. Either
  qualify property #2 or flag the chemistry sector as using a different orientation. Right now the
  axiom and the flagship result disagree silently.
- **P1 — `/dark-matter-failure` + `/galaxy-plotter`**: state the definitional contradiction directly
  (term ∝ C vs "dark matter is low-C"). One sentence on each page, cross-linked. This is the cheapest
  high-value fix on the site — it needs no data and no new computation.
- **P2 — `/parameter-derivations` + wherever `ρ_crit ∝ V⁻²` is quoted**: name the estimator. The
  exponential-disk midplane estimator gives **+1.52**. As written the claim over-refutes.
- **P2 — new content**: a single "the orientation is backwards" section consolidating inversions
  iii–vi, replacing four scattered per-page caveats. Cross-link the two that survive the flip
  (sharpness, location) as genuinely separate.
- **P3 — `/sound-velocity`**: uses the deprecated `status="validated"` badge. 10 pages still do
  (`autonomous-research`, `chemistry-phase-transitions`, `critical-density`, `electronegativity`,
  `handling-failure`, `phase-transitions`, `publisher-track`, `research-philosophy`, `sound-velocity`,
  `status-dashboard`) — feeds the queued `deprecated-validated-badge-full-sweep` topic.

## Open threads

1. **Does the flip survive the cluster sector?** Cluster gas also declines outward, so the level-axis
   argument should carry — but clusters are where MOND itself fails, so the flip may inherit that
   failure. One run settles it, and it would make the level-axis statement sector-complete.
2. **Which estimator does `C(ρ)` actually want?** The framework consumes a *local* density, which
   argues for the exponential-disk midplane (a) — the one that does *not* show the inversion. If (a)
   is correct, inversion (ii) dissolves entirely and the ledger drops to one bug plus one.
3. **The γ axis is still unrepaired and still unaddressed.** Both signs fail (07-03), because the
   flagship sharp transitions are sharp in temperature. The flip does not touch it. This is now the
   *only* documented defect with no proposed repair at all.
4. **Is there a third orientation hiding in the consciousness sector?** `/coherence-function` already
   flags `C = f(γ, D, S)` as a second, underived form. This session found chemistry to be a third
   usage. A census of what "C" means on each page is now clearly worth doing — the queued
   `c-symbol-overload-consciousness` topic is narrower than the actual problem.

---

## Scripts

All five are pure arithmetic on published numbers and standard reference values — no external data,
no fitting beyond the stated parameter scans, $0.

- `/tmp/chem_sign.js` — density-monotonicity of the periodic table; parameter sweep showing
  `sign(Spearman(C, target))` is invariant over (γ, ρ_crit).
- `/tmp/two_coherences.js` — wave-speed identity regression; the two coherence orderings; rank table.
- `/tmp/repair_matrix.js` — sector-neutral galaxy requirement; the definitional contradiction; the
  six-inversion matrix.
- `/tmp/flip_test2.js` — three-estimator V-exponent comparison; flipped-form fit vs MOND.
- `/tmp/robust.js` — subset robustness of the chemistry sign.

**Reproduction note (worth recording).** The first version of `flip_test2.js` scanned ρ_crit over
10⁻³⁰–10⁻¹⁵ while the disk density is ~10⁻² M☉/pc³ — twenty orders of magnitude off, which silently
returned "the flip buys nothing" (every fit pinned at C ≈ 0, RMS identical to Newtonian). The same
script also printed a hard-coded conclusion line asserting a negative exponent while the computation
above it printed +1.52. Both errors were caught only by reading the numbers against expectation
rather than reading the summary line. That is the discipline the 07-28 session identified as the
actual predictor of reliability, and it fired on my own work today.
