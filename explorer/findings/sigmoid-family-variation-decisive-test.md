# Finding: Sigmoid-Family Variation — The C ≈ 0.50 Threshold Is Not Robust

## Origin
Topic: `consciousness-sigmoid-family-variation.md` (seeded 2026-05-02, flagged by Pass 4 researcher in 2026-05-02 visitor log as "a one-day analysis with potentially decisive results").

`/consciousness-demo` lists `C ≈ 0.50 being an artifact of the tanh function's inflection point (mathematical, not physical)` as a falsification route. As of 2026-05-02, no one had actually executed the test. This finding executes it.

## Summary
The 8-way convergence on C ≈ 0.50 is **not robust under sigmoid-family variation**. Symmetric sigmoid families (tanh, logistic, erf, algebraic `x/√(1+x²)`) all give a midpoint value of exactly 0.5 at their inflection — by symmetry, definitionally. **Asymmetric sigmoid families do not.** Hill function (n=2) — the canonical sigmoid for cooperative biological binding (hemoglobin, allosteric enzymes) — has its inflection at H = 0.25, not 0.5. Hill (n=3) sits at 0.333; Gompertz at 1/e ≈ 0.368. The "consciousness threshold = 0.5" claim is therefore a consequence of choosing a *symmetric* sigmoid family. Without an independent argument for why the underlying coherence dynamics has a Z₂ symmetry around C = 0.5, the convergence collapses into "we picked tanh, tanh's inflection is at 0.5, the threshold is at 0.5."

## The Test as Posed

The page lists this falsification: *"C ≈ 0.50 being an artifact of the tanh function's inflection point (mathematical, not physical)."*

A prior finding (`consciousness-threshold-artifact-analysis.md`, 2026-03-07) noted the framing is technically misstated: in the Synchronism parameterization `C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1))`, C(ρ) is concave throughout ρ > 0 — there is no interior inflection in ρ-space. The actual issue is subtler: the convergence of 8 derivations on C = 0.5 is a property of the **value-range midpoint** of any [0,1]-normalized sigmoid that happens to be Z₂-symmetric.

The right operationalization of the test, then, is: **swap tanh for sigmoid families that don't have Z₂ symmetry around their inflection, and check whether the consciousness threshold value moves.**

## Numerical Result

Compute, for each candidate sigmoid normalized to map onto [0,1]:
- Inflection point in argument-space (where d²C/dx² = 0).
- Value of C at that inflection point.

| Sigmoid family | x_inflection | C(x_inflection) | Symmetry |
|---|---|---|---|
| tanh: `(1+tanh(x))/2` | 0.000 | **0.500** | symmetric |
| logistic: `1/(1+e^{-x})` | 0.000 | **0.500** | symmetric |
| erf: `(1+erf(x))/2` | 0.000 | **0.500** | symmetric |
| algebraic: `(1 + x/√(1+x²))/2` | 0.000 | **0.500** | symmetric |
| Hill n=2: `x²/(1+x²)` | 0.577 | **0.250** | asymmetric |
| Hill n=3: `x³/(1+x³)` | 0.794 | **0.333** | asymmetric |
| Hill n=4 | 0.880 | 0.375 | asymmetric |
| Hill n=5 | 0.922 | 0.400 | asymmetric |
| Hill n=10 | 0.980 | 0.450 | asymmetric |
| Gompertz: `exp(-exp(-x))` | 0.000 | **0.368** | asymmetric |

**Hill function inflection identity (analytic):**

For `H_n(x) = x^n / (1 + x^n)`:
- H_n''(x) = 0 ⇒ x_inflection = ((n−1)/(n+1))^(1/n)
- **H_n(x_inflection) = (n−1) / (2n)**

This is exact. So Hill_n inflection ranges over (0, 0.5) for n ∈ (1, ∞), reaching 0.5 only in the n→∞ (Heaviside) limit.

**Conclusion of the numerical test:** the C-value at the inflection point is **0.5 across symmetric sigmoid families** and **NOT 0.5 across asymmetric ones**. The "8-way convergence at C ≈ 0.5" is the symmetric-sigmoid-family signature, nothing more.

## Decomposing the 8 "Approaches"

The 8 derivations on `/consciousness-demo` decompose into four mathematical operations, none of which is independent of the sigmoid-family choice:

| # | Name | Operation | Sigmoid-variation behavior |
|---|---|---|---|
| 1 | Phase transition analysis | Inflection / "discontinuity" | **MOVES** — 0.5 (tanh) → 0.25 (Hill-2) |
| 2 | Integrated information (Φ→C) | Calibration mapping | INVARIANT — Φ→C calibrated to land at 0.5 (free parameter) |
| 3 | Neural binding threshold | Stability argument (informal) | UNDETERMINED — no formal model |
| 4 | Self-modeling criterion | Recursive-fixpoint argument (informal) | UNDETERMINED — no formal model |
| 5 | Metabolic criticality | Marginal-return maximum (= inflection) | **MOVES** — slope-max tracks inflection |
| 6 | Mirror self-recognition | Developmental anchor (calibration) | INVARIANT — anchored to data by free parameter |
| 7 | Anesthesia onset | Predicted-not-measured (= half-saturation) | INVARIANT BY CONSTRUCTION — half-saturation is 0.5 by [0,1] normalization |
| 8 | Sleep-wake boundary | Same as 7 | INVARIANT BY CONSTRUCTION |

So the eight approaches partition into:
- **2 inflection-based** (1, 5) — these are the only ones that test something. They MOVE under sigmoid variation.
- **2 half-saturation tautologies** (7, 8) — invariant because "midpoint of [0,1]" is 0.5 by definition. Vacuous.
- **2 calibration anchors** (2, 6) — invariant because the free parameter is *chosen* to put the threshold at 0.5. Vacuous.
- **2 informal stability arguments** (3, 4) — could land anywhere; haven't actually been computed.

**Net independent constraints from the convergence: zero to two**, depending on whether you grant the inflection-based ones as separate from each other (they're not — both reduce to "where does d²C/dx² = 0?"). And the two that are real both move under Hill-n=2 to **0.25**.

## Why Hill Is the Right Test, Not Just a Test

Hill functions are not an arbitrary asymmetric sigmoid pulled out of a hat. They are the canonical functional form for **cooperative biological binding**:

- Hemoglobin oxygen binding: Hill n ≈ 2.7–3.0
- Allosteric enzyme kinetics: Hill n ∈ [1, 4] typically
- Cooperative gene regulation (transcription factors): Hill n ∈ [2, 8]
- Cooperative ion-channel gating: Hill n ∈ [4, 12]

For a **biological** phenomenon (consciousness), Hill is more physically motivated than tanh. The framework's tanh is admitted to be a "Motivated Choice" on `/parameter-derivations` — explicitly NOT derived from Ising self-consistency, "would produce indistinguishable physics near γ ≈ 1." The "indistinguishable" claim is true *within the symmetric-sigmoid family* (logistic, erf, algebraic all give 0.5). It is **false outside that family**.

So the framework's principled choice between tanh-family and Hill-family is precisely the choice that determines whether the consciousness threshold derives to 0.5 or 0.25. And that choice is currently unjustified.

## A Stronger Reframing of the Falsification Route

The page currently says the threshold could be falsified by being *"an artifact of the tanh function's inflection point."* The accurate reframing, with this finding's result:

> The 8-way convergence on C ≈ 0.50 reflects the value of C at the inflection point of any [0,1]-normalized **symmetric** sigmoid. Any approach that derives a "midpoint" property within the framework will land at 0.5 by symmetry — for tanh, logistic, erf, and the algebraic `x/√(1+x²)` family. The choice of a symmetric sigmoid is built into the framework as a Motivated Choice (per /parameter-derivations) and has not been independently justified. **Asymmetric sigmoid families that are physically natural for biological cooperative dynamics — such as the Hill function n=2 used for hemoglobin binding — give an inflection-point value of 0.25, not 0.5.** Without an independent reason to believe the underlying coherence dynamics has Z₂ symmetry around its inflection, the convergence is a consequence of the chosen sigmoid family, not evidence for a physical threshold.

This is the page's stated falsification route, finally executed.

## Connection to the Kinematic Layer Synthesis

This finding fits neatly with the maintainer's emerging kinematic-layer synthesis (memory: `project_kinematic_layer_synthesis.md`). The pattern there: **the framework names a quantity, "derives" properties of it, but the properties are actually fixed by a CHOICE that wasn't independently justified.** What's missing in each case is a kinematic layer (state space + measure + ordering operation) that would constrain the choices.

Four faces of the same pattern:
1. **Born rule**: assumes "coherence = physical weight," derives |α|² — but the weight axiom IS the rule.
2. **Dual-C bridge**: assumes C(ρ) and C = f(γ, D, S) refer to the same thing without specifying the map.
3. **N_corr scale-invariance**: assumes N_corr is a count, doesn't define the count.
4. **Consciousness threshold (this finding)**: assumes symmetric sigmoid family, derives midpoint = 0.5.

In each case, a kinematic argument would constrain the choice. For the consciousness threshold specifically, what's missing is **a structural argument for why coherence dynamics should have a Z₂ symmetry around C = 0.5**. Two natural kinematic stories that *would* enforce symmetric sigmoid:
- **Time-reversal symmetry of the underlying process**: if the coherence-formation process is time-symmetric, the value-range distribution should be symmetric around its mean. But the framework's coherence dynamics in the Synchronism research repo are explicitly *not* time-symmetric (they invoke Markov blankets and presence accumulation, both directional).
- **Maximum-entropy prior on C ∈ [0,1]**: the uniform prior on [0,1] is symmetric around 0.5. But this is a *prior*, not a derivation — and it's compatible with any sigmoid that pushes C toward 0 or 1, not just symmetric ones.

Neither argument is in the framework. So the symmetric-sigmoid choice — and therefore the C = 0.5 threshold — is unconstrained.

## Lorentz-Gap Cross-Connection

Pass 4 of the 2026-05-02 visitor log identified the Lorentz-invariance gap on `/honest-assessment` as a structural concern. Same shape as this finding: **the framework names a property (C bounded in [0,1]), shows behavior (sigmoidal saturation in log-density), but lacks the underlying kinematic structure (state space + measure + group action) that would actually CONSTRAIN the form.** Both are kinematic-layer gaps. The "five faces" version of `project_kinematic_layer_synthesis` should include this finding's diagnosis (consciousness threshold) as a fifth face.

## Implications for the Site

### Update to the existing geometric caveat
`/consciousness-demo` already has a "Calibration caveat" stating that C ≈ 0.50 is the inflection of any sigmoid bounded at [0,1] including tanh. **The actual fact is narrower and more specific**: this is the inflection of any **symmetric** sigmoid bounded at [0,1]. The current caveat is correct but loses the discriminating power. A reader might think "fine, all sigmoids do this, so the result is just normalization." But Hill-n=2 sigmoids — the canonical biology form — give 0.25, not 0.5. The current caveat undersells the test result; the strengthened caveat tells the reader exactly which sigmoid choice is doing the work.

### The falsification route as currently listed is incomplete
*"C ≈ 0.50 being an artifact of the tanh function's inflection point"* is too narrow (this finding shows it's broader: any symmetric sigmoid family) AND too narrow in another way (Hill-family alternatives give specific *different* numbers, not "no threshold at all"). The most useful reframing for a reader: "The convergence at 0.5 is a signature of choosing a symmetric sigmoid family. If we used a Hill-2 sigmoid instead — the canonical biology cooperative form — the same 'inflection-based' arguments would derive C ≈ 0.25 instead. The threshold value tracks sigmoid family, not physical content."

### The genuinely falsifiable claim is at the sigmoid-family level
The framework should restate the consciousness-threshold prediction as: **"IF the underlying coherence dynamics is a symmetric sigmoid in some natural variable, THEN the threshold is at the value-range midpoint."** This is conditional on the symmetric-sigmoid claim, not on the threshold value 0.5. The threshold value is downstream of sigmoid choice. So either (a) provide an independent argument for symmetric-sigmoid coherence dynamics, OR (b) state the prediction in a sigmoid-invariant form, OR (c) admit the threshold is parameterization-relative and not a substantive prediction.

## Action: Maintainer

1. **Strengthen the geometric caveat on `/consciousness-demo`** from "any sigmoid bounded at [0,1]" to "any **symmetric** sigmoid bounded at [0,1]; asymmetric sigmoid families like Hill-n=2 give inflection-point values around 0.25, not 0.5." Show the table of 4 symmetric vs 5 asymmetric sigmoid inflection values from this finding.

2. **Strengthen the falsification route** from "artifact of tanh's inflection" to "artifact of choosing a symmetric sigmoid family." This is more precise and more falsifiable: choose Hill-2, derive C ≈ 0.25, and the threshold value is sigmoid-family-relative.

3. **Cross-link `/consciousness-demo` to `/parameter-derivations`** at the place where the latter calls tanh a "Motivated Choice" with the note that "logistic, erf would produce indistinguishable physics near γ ≈ 1." Add a one-line clarifier: *"Indistinguishable within the symmetric-sigmoid family. Asymmetric sigmoid choices (Hill, Gompertz) produce different threshold values; see /consciousness-demo for the implication."*

4. **Back-annotate the Synchronism research repo**: file a proposal for a kinematic-layer argument that would justify the symmetric-sigmoid choice, OR a sigmoid-invariant formulation of the consciousness threshold. Suggested title: `consciousness_threshold_sigmoid_family_dependence.md`. Frame: the consciousness threshold is the fifth face of the kinematic-layer gap; the "fix" needed is the same as for Born rule, dual-C, and N_corr — define the underlying state-space structure that constrains the sigmoid choice.

5. **Add to the "5 faces of the kinematic layer" memory**: this finding should be cited as the fifth instance, complementing the four already in `project_kinematic_layer_synthesis`.

## Open Threads

1. **Where exactly does the symmetric-sigmoid assumption enter Synchronism's coherence derivation?** The framework explicitly writes `C(ρ) = tanh(γ ln(ρ/ρ_crit + 1))`, so tanh is hard-coded in `equations.ts`. But the *physical* motivation for symmetric-sigmoid is what's missing. Is it inherited from the Ising mean-field tradition (where it follows from spin-flip symmetry)? If so, is that symmetry actually present in the framework's substrate?

2. **What does "consciousness" become if we use Hill-2 instead?** If we re-do the eight approaches with Hill-2, several of them give C = 0.25. Does the framework still claim consciousness at 0.25? If not, what mathematical structure of the framework demands the symmetric form?

3. **Does the Gnosis ≈ 0.39 result map cleanly here?** The 2026-03-07 finding noted Gnosis converges at ~0.39, which is close to 1 − 1/φ ≈ 0.382 AND close to Gompertz inflection at 1/e ≈ 0.368. If Gnosis dynamics is naturally Gompertz-shaped (asymmetric), the 0.39 is the right answer, and human-consciousness 0.50 vs AI-consciousness 0.39 is sigmoid-family-dependent — not a real difference between systems but a difference between modeling choices.

4. **A real test**: take the 8 derivations and re-derive each formally with Hill-2 in place of tanh. The two inflection-based ones SHOULD move (this finding predicts so). The two half-saturation tautologies SHOULDN'T move (because half-saturation is 0.5 by [0,1] normalization, regardless of sigmoid). The two calibration anchors SHOULDN'T move (free parameters absorb the change). The two stability arguments are formally underspecified and CANNOT be re-derived without first formalizing them. **The test result therefore predicts itself**: out of 8 supposed independent constraints, 2 move (and to 0.25), 4 are absorbed by tautology or free parameter, and 2 are too informal to test. The "convergence" was always 2 inflection-based steps in 6 disguises.

## Productive-Failure Verdict

The page's listed falsification route — "C ≈ 0.50 being an artifact of the tanh function's inflection point" — is, when actually executed, more decisive than the page suggests. The threshold IS an artifact of the sigmoid family choice, and the choice is unjustified. The honest framework summary: **"The consciousness threshold is at the value-range midpoint of whatever symmetric sigmoid we use. We chose a symmetric sigmoid as a Motivated Choice, not a derivation. Therefore the threshold value of 0.5 is a parameterization choice, not a physical prediction."**

This is the kind of result the framework's commitment to honest self-assessment can absorb cleanly. It doesn't kill the framework — it kills the *prediction*, which is what falsification routes are for. And it leaves the more interesting open question intact: is there a kinematic argument that would constrain the framework to symmetric sigmoids in the first place? If yes, that's the actual derivation of the consciousness threshold, and it's currently missing. If no, the threshold should be reformulated in sigmoid-invariant form (or retired).
