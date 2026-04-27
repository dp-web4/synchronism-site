# Finding: The Universality-Class Question Dissolves — C(ρ) Descends From Non-Interacting Paramagnetism, Not Mean-Field of an Interacting System

**Date**: 2026-04-27
**Topic**: `mean-field-universality-class-identification.md` (seeded by maintainer 2026-04-27 from Pass 3 diagnosis)
**Research proposal**: `Synchronism/Research/proposals/coherence_function_meanfield_diagnosis.md`

## Origin

Pass 3 graduate student (2026-04-27) collapsed C(ρ)'s three documented failures (critical exponents ~2× off, melting points 53% off, T_c 6.5× off) into one: *"`tanh` order parameter without fluctuation corrections — the diagnostic signature of uncorrected mean-field theory."* Maintainer filed a research proposal asking: what universality class is C(ρ) in? Do Wilson-Fisher RG corrections close the gap?

The 2026-04-24 finding `coherence-function-has-no-critical-point.md` had already shown C(ρ) is analytic — no critical point, no exponents. That finding established what C(ρ) is *not*. The proposal asks the natural follow-up: what *is* C(ρ) at the level of statistical mechanics, and does its failure mode tell us how to fix it?

## Summary

**The proposal's question is mis-posed for the site's actual functional form, but is well-posed for a different functional form that the archive started with and silently dropped.** Two distinct theories share the same notation:

- **Theory A** (used by the site, all tools, all derivations as currently written): explicit response `C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))`. No critical point. Near ρ = 0, linear (β_eff = 1, the Taylor signature of *no* critical behavior). Descends from a Landau free energy of **non-interacting** spins in an external "field" `h(ρ) = γ · log(ρ/ρ_crit + 1)`. There is no universality class because there is no transition.

- **Theory B** (claimed at the start of Session #66's derivation, then dropped between Step 1 and Step 2): self-consistent `C = tanh(γ · log(ρ/ρ_crit + 1) · C)`. *Does* have a critical point — at the density where `K(ρ) ≡ γ · log(ρ/ρ_crit + 1) = 1`. Mean-field Ising universality class with β = 1/2. Descends from a Curie-Weiss free energy with **interacting** spins where the temperature-and-coupling combination is density-dependent. Wilson-Fisher RG corrections to this would be well-defined and the proposal's research program would have content.

The site's documented "critical exponents 2× off" diagnosis silently assumes Theory B (that's the only branch where critical exponents *exist*) while the rest of the site computes everything from Theory A (which has no critical exponents at all). The two are different theories making different predictions.

The site can pick a fork, but it cannot keep both:
- **Pick A**: retire phase-transition language, retire universality-class talk, retire the "critical exponents 2× off" failure diagnosis (it is not the right comparison), and reframe the chemistry/melting/T_c failures as *the failures expected when a non-interacting paramagnetic response is misapplied to systems whose physics is dominated by spin-spin coupling*.
- **Pick B**: write down the self-consistent equation everywhere, recompute everything, and the proposal's GL/RG program is now a real one — with β = 1/2 → ~0.326 corrections that should sharpen rather than blur the predictions.

The site currently displays Pick B's failure diagnosis on a page (`/chemistry-phase-transitions`) that uses Pick A's curve in every tool. This is the cross-page contradiction that makes the failures look unmotivated.

## The Math

### 1. The Landau free energy underlying Theory A

For an order parameter `m ∈ (-1, 1)` (or, here, `C ∈ (0, 1)` after a half-shift), the Bragg-Williams (or non-interacting Ising) free energy in an external field `h` is:

```
F(m, h, β) = (1/2β) · [(1+m) ln(1+m) + (1-m) ln(1-m)] − h · m
```

Stationary point ∂F/∂m = 0 gives `(1/2β) · ln((1+m)/(1-m)) = h`, equivalently `m = tanh(βh)`.

Identifying with `C = tanh(γ · log(ρ/ρ_crit + 1))`:

```
β_eff · h_eff(ρ) = γ · log(ρ/ρ_crit + 1)
```

There is no spin-spin coupling J in this construction. The factor `(1/2β) · [...]` is the entropy of independent spins in field h. **This is paramagnetism, not ferromagnetism.** A paramagnet in field h has a smooth response m(h) for all h with no critical point, no symmetry breaking, no universality class. The "transition" at h = 0 is not a phase transition — it is a smooth zero-crossing of the response curve.

A genuine Curie-Weiss theory has `F(m) = (1/2β)·[entropy term] − h·m − (J/2)·m²`, giving `m = tanh(β(Jm + h))`. Setting `J = 0` collapses this to Theory A. The site's identification implicitly sets `J = 0`. **There is no theory of "uncorrected mean-field of an interacting Ising-class system" being approximated here, because there is no interacting Ising-class system in the construction at all.**

### 2. Theory A has β_eff = 1 near ρ = 0, not β_MF = 1/2

The site asserts on `/chemistry-phase-transitions`:

> *"The tanh form gives mean-field exponents, which differ from observed values by ~2×."*

This is incorrect. Mean-field gives β = 1/2. The site's tanh form, expanded near ρ = 0, gives:

```
C(ρ) ≈ γ · ρ/ρ_crit + O((ρ/ρ_crit)²)
```

Numerically verified at γ = 2:

| ρ/ρ_crit | C        | γ · ρ/ρ_crit | ratio  |
|----------|----------|--------------|--------|
| 1e-3     | 1.999e-3 | 2.000e-3     | 0.9995 |
| 1e-2     | 1.990e-2 | 2.000e-2     | 0.9949 |
| 1e-1     | 1.883e-1 | 2.000e-1     | 0.9417 |

So Theory A's effective β-like exponent is **β_eff = 1**, not 1/2. This is the Taylor signature of a smooth function vanishing at the origin, not a critical exponent. If anyone had tried to fit the "tanh form" to phase-transition data near a real critical point, they would find a slope-1 linear region, not a slope-1/2 square-root region.

The "2× off" claim only makes sense if you compare Theory B's β = 0.5 to observed 3D-Ising β ≈ 0.326 (ratio ~1.53, rounded up to "2×"). Theory A would give β_eff/β_obs = 1/0.326 ≈ 3.07 — a **3× error**, not a 2× error. The "2× off" headline therefore quietly attributes Theory B's failure to Theory A's curve.

### 3. Theory B: the self-consistent form Session #66 invoked then dropped

`mean-field-derivation-audit.md` (2026-03-15) traced Session #66's derivation:

> *Step 1: `C = tanh(βzJ · C)` (self-consistent equation)*
> *Step 2: Coupling identification: `βzJ = γ · log(ρ/ρ_crit + 1)`*

But the formula actually used in every page and every tool is:

```
C = tanh(γ · log(ρ/ρ_crit + 1))    [no C on the right side]
```

Substituting Step 2 into Step 1 *should* give:

```
C = tanh(γ · log(ρ/ρ_crit + 1) · C)    [Theory B]
```

This is a self-consistent equation. Define `K(ρ) ≡ γ · log(ρ/ρ_crit + 1)`. Theory B says `C = tanh(K(ρ) · C)`. Standard analysis:

- For K(ρ) < 1: only C = 0 is stable (paramagnetic / "incoherent" phase).
- At K(ρ) = 1: bifurcation (the critical point).
- For K(ρ) > 1: C ≠ 0 stable solutions, C ~ √(3(K−1)) near the critical point.

Numerical verification:

| K     | C (numeric)   | √(3(K-1)) | ratio  |
|-------|---------------|-----------|--------|
| 1.001 | 0.0547        | 0.0548    | 0.999  |
| 1.010 | 0.1717        | 0.1732    | 0.991  |
| 1.050 | 0.3707        | 0.3873    | 0.957  |
| 1.100 | 0.5029        | 0.5477    | 0.918  |

The leading exponent is `C ~ (K-1)^(1/2)`, i.e., the standard mean-field critical exponent **β = 1/2**. This is the exponent the site's failure diagnosis assumes.

The critical density in Theory B is at `K(ρ_c) = 1`, i.e., `ρ_c/ρ_crit = exp(1/γ) − 1`:

| γ   | ρ_c/ρ_crit |
|-----|------------|
| 0.5 | 6.389      |
| 1.0 | 1.718      |
| 2.0 | 0.6487     |
| 4.0 | 0.2840     |

**`ρ_crit` is not the critical density even in Theory B.** At the site's default γ = 2, Theory B's critical density is at ~0.65 · ρ_crit. The "critical density" label on the site's `ρ_crit` is wrong under either theory: under Theory A it has no critical role, under Theory B it is offset from the actual critical point by a γ-dependent factor of `exp(1/γ) − 1`.

### 4. The two curves diverge dramatically between ρ_crit/2 and ρ_crit

At γ = 2:

| ρ/ρ_crit | C_A (explicit) | C_B (self-consistent) |
|----------|----------------|------------------------|
| 0.5      | 0.670          | 0 (below transition)   |
| 0.6      | 0.735          | 0 (below transition)   |
| 0.65     | 0.762          | 0 (≈ critical point)   |
| 0.7      | 0.786          | 0.406                  |
| 0.8      | 0.826          | 0.628                  |
| 1.0      | 0.882          | 0.807                  |
| 1.5      | 0.950          | 0.938                  |
| 2.0      | 0.976          | 0.973                  |

Theory A says coherence is already 0.67 at half the "critical density"; Theory B says coherence is identically zero there. They make **categorically different physical predictions** in the regime that matters most (around the supposed transition). They agree only deep in the saturated regime (ρ ≫ ρ_crit), where both → 1.

If the site changed from Theory A to Theory B without renaming variables, the Galaxy Curve Plotter, Coherence Explorer, Phase Boundary Visualizer, and γ Calculator would produce different curves — with sharp discontinuities at ρ_c rather than smooth interpolations. Every tool currently shows Theory A.

## What the documented failures actually mean

### Critical exponents "2× off"

Pass 3's diagnosis is right *for Theory B* — in Theory B, β = 1/2 vs Ising β ≈ 0.326 is ~1.5× off (rounded to "~2×"), and Wilson-Fisher RG corrections would reduce the gap. The proposal's full GL/RG research program would be coherent in Theory B.

But the site doesn't use Theory B. In Theory A, "critical exponents 2× off" is a **category error**: there are no critical exponents to compare. The site's failure diagnosis on `/chemistry-phase-transitions` is computing failure relative to a theory it doesn't actually use. This is a stronger problem than "wrong universality class" — it is "no universality class because no transition."

### Melting points 53% off

This is a *first-order* transition. Mean-field theory is famously unreliable for first-order transitions even in the textbook setting (it overestimates T_m by treating crystalline order as a continuous parameter). The 53% error is plausibly a generic mean-field-vs-first-order error inherited via the `tanh` ansatz, but again only under Theory B. Under Theory A, melting points are computed from a smooth response curve to density — and the 53% error is then the failure of fitting a smooth sigmoid to a discontinuous transition.

The two interpretations point to the same number but to different research programs:
- Theory B: melting needs a `m³` (or first-order) coupling added to the GL free energy.
- Theory A: melting is structurally outside the framework (the response curve cannot have discontinuities by construction; sigmoid is the wrong function class for first-order).

### Superconductor T_c 6.5× off

Similar bifurcation:
- Theory B: T_c is the temperature where K(ρ_e) = 1 in the self-consistent equation. Mean-field gets T_c wrong because it ignores fluctuations and pair correlations (BCS does, GL with fluctuation corrections does better).
- Theory A: T_c is whatever density gives C = some threshold. The 6.5× error is a calibration failure of a paramagnetic response curve being asked to identify a phase transition.

In both cases, the more honest framing is: the site's coherence function is being applied to systems where the actual physics is governed by interactions C(ρ) does not contain (J in spin systems, BCS pairing in superconductors, lattice coupling in melting). The "coherence" framing renames effects whose origin is in the omitted physics.

## Why this matters for the proposal

The research proposal asks five questions:

1. *What Landau free energy does `C(ρ) = tanh(γ log(ρ/ρ_crit + 1))` arise from?*
   **Answer**: The Bragg-Williams free energy of non-interacting spins in an external field `h(ρ) = γ · log(ρ/ρ_crit + 1)/β`. **No spin-spin coupling.** This is the structural diagnosis: C(ρ) is paramagnetism, not ferromagnetism, not Curie-Weiss, not Ising-class.

2. *What is the Ginzburg parameter for C(ρ) near ρ_crit?*
   **Answer**: Undefined for Theory A (no critical point → no Ginzburg criterion). For Theory B, the Ginzburg criterion can be written down and gives the upper critical dimension d_c = 4 (standard Ising mean-field result).

3. *Does C(ρ) fall in the Ising universality class?*
   **Answer for Theory A**: No, because no universality class. **Answer for Theory B**: Yes, mean-field Ising; with WF RG corrections, 3D Ising (β ≈ 0.326, ν ≈ 0.630, η ≈ 0.036).

4. *Do WF/one-loop corrected exponents improve the chemistry predictions?*
   **Answer**: Only meaningful under Theory B. Even then, the corrections shift β from 0.5 to 0.326, ν from 0.5 to 0.630 — modest changes that move the predictions in the right direction but don't close 53% errors on melting points (those are not exponent errors at all — they are first-order transition errors that mean-field cannot capture without additional terms).

5. *What is the upper critical dimension of the Synchronism framework?*
   **Answer for Theory A**: Undefined. **Answer for Theory B**: d_c = 4 (standard Ising).

The proposal becomes a real research program **if and only if** the site adopts Theory B. Under Theory A, the proposal's questions are mis-posed.

## The transcription error in Session #66

The structural problem is localized: between Step 1 and Step 2 of the Session #66 derivation, the C on the right-hand side of the self-consistent equation was silently dropped. This is the same class of error as the α/BTFR transcription drift findings (2026-04-23) — a step in an archive derivation got rewritten incorrectly when transcribed forward.

But here the consequence is structural rather than numerical:

- *Pre-drop* (Step 1): `C = tanh(βzJ · C)` — has phase transition, has critical exponents, has universality class.
- *Post-drop* (the formula used): `C = tanh(γ · log(ρ/ρ_crit + 1))` — none of the above.

The framework's claim of being a "phase-transition theory" depends on the pre-drop form. Every numerical computation depends on the post-drop form. The internal contradiction — three years of "phase transition" framing built on a curve that has no transition — propagates to every failure on `/honest-assessment` that was diagnosed using phase-transition logic.

## What this advances

The 2026-04-24 finding established **no critical point**. This finding adds the **statistical-mechanics structural diagnosis** (paramagnetism, not ferromagnetism), pinpoints **the transcription error** that converted Theory B into Theory A, and shows the failure metrics on `/chemistry-phase-transitions` and `/honest-assessment` are computed under Theory B even though every tool uses Theory A.

The combination is sharper than either piece alone:
- 2026-04-24: "C(ρ) has no critical point" → invalidates phase-transition language.
- This finding: "C(ρ) is non-interacting paramagnetism" → invalidates *mean-field-of-interacting-system* language. The right reframe of the framework is not "uncorrected mean-field" but "the response curve of a non-interacting two-state system to an external field whose strength is determined by density."

The framework's failures (chemistry, melting, T_c) are not failures of *mean-field theory*. They are failures of *applying a non-interacting paramagnetic response to systems whose phase behavior is dominated by interactions*. That's a different kind of failure, with different paths to repair.

## Implications for the Site

### Choice the site must make

Pick one fork:

- **Fork A**: keep `C = tanh(γ log(ρ/ρ_crit + 1))` as the formula in every tool. Then:
  - `/chemistry-phase-transitions` should retire "critical exponents 2× off" — it is the wrong comparison; the actual comparison is "linear-response curve fit to phase-transition data, β_eff = 1, fails by ~3× on critical exponents *if you try to extract them*, but shouldn't be extracting them at all because the theory predicts no transition."
  - `/honest-assessment` should reframe the chemistry/melting/T_c failures as "applying a non-interacting paramagnetic response to interacting systems."
  - The MIPT/mean-field successor-theory framing should be retired (it fits Theory B, not A).
  - `ρ_crit` should be renamed to a scale parameter (already recommended in 2026-04-24 finding).
  - The phrase "phase transition" should not appear in connection with C(ρ).

- **Fork B**: rewrite the formula to `C = tanh(γ · log(ρ/ρ_crit + 1) · C)` — the self-consistent form Session #66 actually started with. Then:
  - All tools recompute. Curves change shape in the most-relevant regime (around ρ_crit). Every numerical claim that depends on C in that regime needs re-validation.
  - "Critical density" is no longer at ρ_crit — it is at `ρ_c/ρ_crit = exp(1/γ) − 1`. Tools should show this offset explicitly.
  - The proposal's GL/RG research program is now well-defined.
  - The "critical exponents 2× off" failure becomes a real diagnostic, and Wilson-Fisher corrections become a research path.
  - The framework re-acquires phase-transition status, with all the predictions and falsifiers that come with it.

The site cannot keep both. Currently it does, by quietly using A in the tools while diagnosing failures via B.

### The transcription error itself

The silent drop of `C` between Session #66's Step 1 and Step 2 should be back-annotated to the research archive. Either:
- The drop was intentional (the framework deliberately moved from self-consistency to response function): then Session #66 should say so explicitly, retire the "mean-field" framing, and re-trace what the implied physics is (it is paramagnetic response, with no transition).
- The drop was an error: then Session #66's Step 2 should be corrected to `C = tanh(γ log(ρ/ρ_crit + 1) · C)` and propagated forward through every site page and tool.

Either choice is internally consistent. The current state — Step 1 from Theory B, Step 2 onward from Theory A, failure diagnosis from Theory B — is not.

## Action: Maintainer

**High priority — the cross-page contradiction is the priority:**

1. **`/chemistry-phase-transitions`**: rewrite the "Critical Exponents: 2× Off" card. Either commit to Theory B (and recompute everything else) or remove the critical-exponent framing and replace with: "C(ρ) is a non-interacting paramagnetic response. Where systems have actual phase transitions, C(ρ) cannot describe critical behavior, only the smooth backdrop. The 2× and 53% errors are the expected size of misapplying a sigmoid response to interacting transition physics — not failures of mean-field RG corrections."

2. **`/honest-assessment`** "Critical Exponents 2× Off" entry: similarly reframe. The current text *"This is a known limitation of any mean-field theory — fluctuations near the critical point matter, and C(ρ) doesn't account for them"* is right *in spirit* but wrong *in identification*: C(ρ) doesn't have a critical point at all, so "fluctuations near the critical point" are not the issue. The issue is that there is no critical point.

3. **`/parameter-derivations`**: the current honest framing ("γ as ansatz") should be tightened: the *underlying Landau theory* of the explicit C(ρ) is non-interacting paramagnetism, not mean-field of an Ising-class system. State the Bragg-Williams free energy explicitly. State that Wilson-Fisher RG is undefined for this functional form (because there is no critical point).

4. **`/coherence-explorer` and `/phase-boundary-visualizer`**: if the site picks Fork A, the words "phase transition" should not appear in the tool. If the site picks Fork B, both tools need new curves.

**Medium priority — the archive-side correction:**

5. **Synchronism repo back-annotation**: file a research-side correction documenting the Session #66 transcription error (silent C-drop between Step 1 and Step 2). Either form is publishable; the current half-and-half is not.

6. **Connect to the `coherence-function-has-no-critical-point` finding**: the two findings together close the loop. The 2026-04-24 finding established the *symptom* (no critical point). This finding establishes the *mechanism* (non-interacting paramagnetism, with the transcription error that produced it).

## Open Threads

1. **Does the self-consistent Theory B fit the chemistry data?** Concrete numerical experiment: take the chemistry correlation explorer's 1703 phenomena, fit both Theory A and Theory B as response curves, compute residuals. If Theory B fits substantially better, that's empirical support for Fork B; if comparable or worse, the phase-transition framing has nothing to gain.

2. **What does the BTFR look like under Theory B?** The 2026-04-23 finding restored BTFR to a per-regime prediction. Theory B's self-consistent C(ρ) would give a different relationship between v_flat and density. Worth checking whether BTFR n = 2.75 transition-fit is consistent with Theory B or only with Theory A.

3. **The "γ ≈ 1 boundary" claim on `/chemistry-phase-transitions`**: the page asserts Synchronism "correctly predicts WHERE phase transitions occur (at the γ ≈ 1 boundary)." Under Theory A there is no boundary — γ controls the slope of a smooth curve, not the location of a transition. Under Theory B, the transition is at K(ρ) = γ · log(ρ/ρ_crit + 1) = 1, which is *not* "the γ ≈ 1 boundary" — it depends on both γ and ρ. The "γ ≈ 1 boundary" framing is geometric (the slope of C(ρ) is steepest there for the explicit form) but not physical. Worth a separate investigation: does the chemistry data actually concentrate at γ_eff ≈ 1, or is that a fitting artifact?

4. **The Curie-Weiss fix as a path forward**: the simplest research move is to write the framework's self-consistent equation explicitly, not as `m = tanh(βh)` (paramagnetism in field) but as `C = tanh(K(ρ) · C + h_ext)` with both spin-spin coupling K(ρ) and external field h_ext. This generalizes both Theory A (h_ext only) and Theory B (K only). The two-parameter structure has both phase-transition behavior and a smooth response, controlled by the relative weighting. If the framework wants both, this is the form that delivers.

## Connection to Existing Findings

- `coherence-function-has-no-critical-point.md` (2026-04-24): symptom — no critical point. This finding: mechanism — non-interacting paramagnetism with silent C-drop.
- `mean-field-derivation-audit.md` (2026-03-15): identified the silent C-drop in Session #66. This finding: spells out the structural consequence (categorical theory change between Step 1 and Step 2).
- `mipt-the-framework-that-already-exists.md` (2026-04-11): MIPT is the successor theory candidate. This finding: MIPTs apply only to Theory B; under Theory A there is no transition for MIPT to be the rigorous version of.
- `does-C-rho-do-any-work.md` (2026-04-09): scaffolding hypothesis. This finding: under Theory A, C(ρ) is even less than scaffolding — it is a paramagnetic response curve, the simplest possible non-trivial sigmoid, with no claim to phase-transition physics in the underlying Landau theory.
- `epistemology-of-productive-error.md` (2026-04-10): "Form" failure category. This finding: the Form failure is sharper than previously named — the framework changed theories silently between Step 1 and Step 2 of its derivation, then computed failure metrics from one and physical predictions from the other.
- Site `/chemistry-phase-transitions`, `/honest-assessment`, `/parameter-derivations`: all need the diagnosis aligned. Currently each propagates a different layer of the contradiction.

## Verdict

The proposal asked the right kind of question (universality class), but pointed it at the wrong theory. The answer for the site's actual formula is "no class because no transition" — already established 2026-04-24. The new piece is *what kind of theory C(ρ) actually descends from*: non-interacting paramagnetism in an external field, not mean-field of an interacting system. The site's "critical exponents 2× off" failure metric was computed from the theory the site doesn't use; the theory the site does use can't even define critical exponents. The contradiction localizes to a single transcription step in Session #66 where `C` was silently dropped from the right-hand side of `C = tanh(βzJ · C)`.

This is a productive failure because it points to a concrete research move: either commit to Theory B (write the self-consistent equation everywhere, recompute, the proposal's GL/RG program becomes well-defined and the framework re-acquires phase-transition status), or commit to Theory A (retire phase-transition language, retire universality-class talk, retire the mean-field-failure diagnosis, and reframe the chemistry/melting/T_c failures as "non-interacting response misapplied to interacting transitions"). Either choice is internally consistent. The current state — Theory A in the tools, Theory B in the failure diagnosis — is the actual problem.

The mean-field universality class question therefore *dissolves* for Theory A and *opens* for Theory B. Until the site picks a fork, the proposal's GL/RG research program is suspended in mid-air.
