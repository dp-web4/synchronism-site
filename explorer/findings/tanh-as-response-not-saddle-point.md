# Finding: C(ρ) = tanh(γ·log(ρ/ρ_crit + 1)) Is a Field-Response Curve, Not a Landau Saddle-Point

## Origin

Topic `tanh-landau-saddle-point-derivation.md` (seeded 2026-04-28 by maintainer in response to Pass 3 grad-student review on `/coherence-function`). The grad student asked: *"Is there a free-energy / Landau / variational derivation of `tanh(γ·log(ρ/ρ_crit + 1))` as a saddle-point, or is it constructed by stacking saturating functions?"*

Builds on `explorer/findings/mean-field-derivation-audit.md` (prior session, exact date archived) which already noted that the site's expression is *not* self-consistent in the Weiss sense.

## Summary

**The site's C(ρ) is the saddle-point of an explicit Landau free energy — but only as a *response function* with density coupled as an external field, not as an order parameter under spontaneous symmetry breaking.** This has three immediate consequences:

1. There is no phase transition in C(ρ). The function is the smooth response of a paramagnet to an applied field, not the order parameter of a ferromagnet through T_c. The "Phase Boundary" framing on `/phase-boundary-visualizer` and the regime labels ("Quantum"/"Classical" near γ ≈ 1) describe features of a sigmoidal response curve, not phase boundaries.

2. There is no critical exponent to compute. β, ν, η are all undefined for a smooth field-response curve. The Pass 4 researcher's challenge ("if it's Landau, give us β, ν, η") cannot be met — not because the framework hasn't done the calculation, but because the math the framework is using doesn't have those exponents.

3. The "+1" inside the logarithm is forced — it is the only way to make h_eff → 0 as ρ → 0. This is a technical regularization, not physics. The site should say so.

The Pass 3 grad student's diagnosis is structurally correct: **tanh is a choice from a one-parameter family of sigmoids that all satisfy the four constraints**. Landau-with-applied-field privileges tanh only over erf and logistic by an additional Boltzmann-statistics argument (two-state partition function), not by closed-system criticality.

## Research Notes

### 1. The standard Weiss saddle-point and what it requires

For a scalar order parameter m in mean-field Ising:

```
F[m] = (a/2) m² + (b/4) m⁴ - h m,    a = a₀(T - T_c)
```

Saddle-point ∂F/∂m = 0:

```
a m + b m³ = h
```

For the spin model with external field h:

```
m = tanh(β(h + Jzm))    ← self-consistent: m on both sides
```

The phase transition emerges when **h = 0**: the equation m = tanh(βJzm) has nonzero solutions only when βJz > 1. This is what gives the Landau exponents (β = 1/2, ν = 1/2, η = 0 for mean-field).

When h ≠ 0, the equation is m = tanh(β(h + Jzm)). The transition smooths into a crossover; for fixed h ≠ 0, m(T) is analytic everywhere and **there are no critical exponents** — just a response curve.

### 2. The site's C(ρ): not on both sides

The site uses:

```
C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))
```

C appears only on the LHS. By inspection this is **not** a self-consistent saddle equation in the Weiss sense. It can be obtained from the saddle of:

```
F[C; ρ] = aC² + bC⁴ + ... - h_eff(ρ) · C
```

with the identification:

```
h_eff(ρ) = T · γ · log(ρ/ρ_crit + 1)      (in units where the inverse-T factor is absorbed)
```

The saddle then yields C = tanh(h_eff/T) for the Ising-spin partition function evaluated at applied field h_eff. **This is a derivation — but it's the derivation of a paramagnet-in-applied-field, not a ferromagnet through criticality.**

This matches the explicit observation in `mean-field-derivation-audit.md` §10: *"the density-dependent formula is the RESPONSE FUNCTION C(h_eff) where h_eff = γ·log(ρ/ρ_crit + 1), analogous to m(h) in a ferromagnet with an applied field."*

### 3. Why the "+1" is forced

The response curve C(h_eff) = tanh(h_eff/T) requires h_eff = 0 at ρ = 0 (no field, no coherence). With the substitution h_eff ∝ log(ρ/ρ_crit + x), the boundary condition fixes x:

- x = 0 gives h_eff → -∞ as ρ → 0 (nonsense — predicts maximally negative coherence at vanishing density)
- x = 1 gives h_eff → 0 as ρ → 0 (smooth)
- x > 1 gives h_eff > 0 already at ρ = 0 (nonzero coherence in vacuum — also nonsense)

The "+1" is not free; it is the unique value that respects the boundary condition `vacuum has no coherence`. **This is dimensional / boundary regularization**, exactly as `/coherence-function` and the prior derivation audit said. It is not derivable from a deeper microscopic argument — it is the choice that closes the limit.

A more honest functional form making this transparent would be:

```
C(ρ) = tanh(γ · log(1 + ρ/ρ_crit))      (same equation, different write-out)
```

Now ρ = 0 → log(1) = 0 → tanh(0) = 0 manifestly. The "+1" is not a free regularizer; it is the constant that makes the log argument equal to ln(1) = 0 at the vacuum.

### 4. Why tanh over erf, logistic, arctan, x/(x+ρ_crit)

The Pass 3 grad student is right that **all four sigmoids satisfy the four motivational constraints** (bounded, monotonic, smooth saturation, well-behaved at extremes). What additionally selects tanh in the Landau-with-field picture is the Boltzmann-partition-function argument:

For a two-state quantum system in external field h with energies ±ε, the thermal expectation value of the polarization is:

```
⟨σ⟩ = (e^(βε) - e^(-βε)) / (e^(βε) + e^(-βε)) = tanh(βε)
```

This is the *only* one of the four sigmoids that comes directly from a two-state partition function. The logistic sigma(x) = 1/(1+e^{-x}) is the same up to rescaling (tanh(x/2) = 2σ(x) - 1) and applies to one-vs-other ratios. Erf comes from cumulative Gaussian statistics; arctan from Cauchy. None of those have a two-state Boltzmann origin.

So the site's argument "tanh arises naturally in mean-field Ising" is **correct as a statistical-mechanics provenance** — but only for the response function, not for spontaneous order. The right phrasing is:

> "tanh is the polarization of a two-state Boltzmann system in applied field. C(ρ) is the response curve when ρ acts as an effective field via h_eff = T·γ·log(1 + ρ/ρ_crit)."

Compare to what `/core-idea` currently says ("tanh arises naturally in mean-field models (Ising m = tanh(βJzm))"): that quotation is the **self-consistent ferromagnet** equation, which is *not* what C(ρ) implements. The page is invoking the wrong analogy. The correct analogy is m = tanh(βh) for the Curie law, not m = tanh(βJzm) for the ferromagnet.

### 5. Consequences

**a) No phase transition in C(ρ).** The response curve is analytic in ρ everywhere. The "regime boundaries" (γ < 0.6 classical, γ ≈ 1 chemistry/consciousness, γ > 1.4 quantum) are slope-features of the sigmoid response — the inflection point of tanh(γ·log(...)) shifts with γ — but no quantity diverges. A reader who assumes "phase boundary" implies critical-exponent infrastructure (Pass 4 researcher's reading) will not find that infrastructure because it isn't there.

**b) The /phase-boundary-visualizer label oversells.** The tool plots a smooth curve and labels three regimes. There is no phase *boundary* in the technical sense — only a regime *map* on a smooth curve. Pass 4 said exactly this: *"If the framework is genuinely Landau-like at the boundary, predict β, ν, η near γ_c ≈ 1. If it isn't, drop the 'phase boundary' framing — call it a regime map."*

**c) C(ρ) cannot host critical phenomena, including:**
- Critical exponents (β, ν, η, α, γ_critical, δ)
- Critical opalescence / divergent susceptibility
- Universality-class membership (mean-field, Ising, XY, Heisenberg, etc.)
- Finite-size scaling collapse

If the framework wants any of these — and they would be the *real* tests of "phase transition" — it needs a different equation: one with C on both sides of the saddle and ρ entering as a temperature-like or coupling-like parameter, not as an external field. The 2026-04-12 finding (`novel8-mipt-upgrade-from-trivial-to-deep.md`) reached the same conclusion from the MIPT-mapping side: C(ρ) on tree geometries gives a BKT crossover (essential singularity), not Landau power-law scaling.

**d) The "Motivated Choice | Speculative" badge on `/parameter-derivations` for the tanh form is correct.** The honest-pages discipline already classifies this correctly. What needs propagation is to `/core-idea`, `/coherence-function`, `/phase-boundary-visualizer`, where the language still implies a stronger statistical-mechanics derivation than actually exists.

### 6. What would convert C(ρ) to a genuine saddle-point order parameter

A free-energy form like:

```
F[C; ρ] = (a(ρ)/2) C² + (b/4) C⁴
```

with a(ρ) = a₀ · (1 - ρ/ρ_crit) would give:

```
∂F/∂C = 0  →  a₀(1 - ρ/ρ_crit) C + b C³ = 0
```

With solutions:
- C = 0 (always exists)
- C² = a₀(ρ/ρ_crit - 1)/b for ρ > ρ_crit (broken-symmetry solution)

This *does* have a phase transition at ρ = ρ_crit, with mean-field exponent β = 1/2 (C ~ (ρ - ρ_crit)^{1/2}). And critically, C does *not* approach tanh of any function — it approaches a square-root cusp near criticality and saturates beyond. So the tanh form is **incompatible** with a closed-system Landau order parameter.

This is the actual choice the framework faces: keep C(ρ) = tanh(γ·log(1 + ρ/ρ_crit)) and accept it's a response function with no phase transition, OR adopt a mean-field-Landau order-parameter form that has a real transition but does not match the tanh shape the site is using.

These are genuinely different physical claims. The site cannot have both.

## Implications for the Site

### 1. /core-idea: revise the Ising parenthetical

Current: *"tanh arises naturally in mean-field models (Ising m = tanh(βJzm))"*

The cited equation is the *self-consistent ferromagnet*. The site's C(ρ) is the *paramagnetic response in an applied field* (m = tanh(βh)) — different equation, different physics. 

Recommended replacement: *"tanh arises naturally as the response curve of a two-state Boltzmann system in an effective field. In our framework, density couples as that effective field via h_eff ∝ log(1 + ρ/ρ_crit). This is a response function, not a self-consistent order parameter — there is no spontaneous symmetry breaking in ρ."*

### 2. /coherence-function: clarify the "Why Tanh?" content

The current page already states *"the tanh shape is motivated by mean-field theory, not derived from it."* That is correct. What's missing is the precise mechanism:

> "tanh comes from the partition function of a two-state Boltzmann system in applied field. Density enters as that field. We are not deriving an order parameter through criticality; we are computing a response curve."

This makes explicit *what kind* of derivation succeeds and what kind fails. The four-constraint argument should be reframed as: *"these constraints select a sigmoid family; the two-state Boltzmann origin selects tanh within that family."*

### 3. /phase-boundary-visualizer: rename or recategorize

The tool plots a smooth response curve. There is no phase boundary in the technical (critical-exponent) sense. Either:

- (a) Rename to "Regime Map" or "Coherence Response Visualizer" and remove "Phase Boundary" language
- (b) If the framework wants to keep the "phase" claim, build a different visualizer that plots a closed-system Landau order parameter against a temperature-like control variable, with critical exponents marked. This requires adopting a different functional form (not C(ρ) = tanh of log).

### 4. /parameter-derivations: badge is correct; surface the consequence

The "Motivated Choice | Speculative" badge on the tanh form is honest. What's not yet on the page is the *consequence*: that under this form, the framework cannot claim phase-transition phenomenology (critical exponents, universality class, finite-size scaling). Adding one sentence — *"This is a response function; no critical phenomena follow"* — would propagate the existing audit to the page that names the badge.

### 5. Open question for back-annotation to research repo

The archive's Session #66 Track C (the canonical mean-field derivation) writes the self-consistency equation `C = tanh(βzJ·C)` and then identifies `βzJ = γ·log(1 + ρ/ρ_crit)`. The substitution that's actually used drops the C on the inner side. Section 9 of `mean-field-derivation-audit.md` flagged this as a "subtle but important gap." This finding sharpens it: **the gap is not fixable by interpretation. The two equations describe different physics.** Either:

- The framework wants the response-function reading (no phase transition, no critical exponents) — then the archive should say so explicitly
- The framework wants the self-consistent reading (with critical exponents) — then the formula on the site is wrong; it should be `C = tanh(γ·log(1+ρ/ρ_crit) · C)`, which has `C = 0` as one root for all ρ and a nonzero root only when γ·log(1 + ρ/ρ_crit) > 1

The second reading would actually give a phase transition at ρ_c such that γ·log(1 + ρ_c/ρ_crit) = 1, i.e., ρ_c = ρ_crit·(e^{1/γ} - 1). This has the right shape for a *real* coherence phase transition. **It is also not what the site currently implements.**

This is a back-annotation candidate to the Synchronism research repo: *which equation does the framework actually claim?* The two readings are observationally different.

## Action: Maintainer

1. **`/core-idea`**: Replace the Ising-self-consistency parenthetical with the Boltzmann-response-curve framing. (Specific text in §6.1 above.)

2. **`/coherence-function`**: Add the "two-state Boltzmann origin" provenance to the "Why Tanh?" section. Make explicit that this is a response function, not a self-consistent order parameter.

3. **`/phase-boundary-visualizer`**: Rename to "Regime Map" or "Coherence Response Visualizer." Remove "phase boundary" language. (Or keep the name and add a note: *"'Phase' here refers to the regime distinction by sigmoid steepness, not a thermodynamic phase transition."*)

4. **`/parameter-derivations`**: After the "Motivated Choice | Speculative" badge on the tanh form, add: *"As a response curve, C(ρ) does not host critical exponents, universality classes, or finite-size scaling. Predictions in those categories require a different functional form."*

5. **Back-annotate to Synchronism repo**: File a proposal asking which equation the framework actually claims — the explicit response (`C = tanh(γ·log(1+ρ/ρ_crit))`, no phase transition) or the self-consistent order parameter (`C = tanh(γ·log(1+ρ/ρ_crit)·C)`, with phase transition at ρ_c = ρ_crit·(e^{1/γ}-1)). They are different physics. The site currently uses the first; the archive's Session #66 Track C asserts the second is the "derivation," then drops the inner C without comment. Whichever the framework wants, the other should be retracted.

## Open Threads

1. **The two equations are not equivalent.** If the framework adopts the self-consistent form (`C = tanh(γ·log(1+ρ/ρ_crit)·C)`), it gains a real phase transition at ρ_c = ρ_crit·(e^{1/γ}-1), and the regime boundaries become physical. But the predicted shape near ρ_c would be a square-root cusp (β = 1/2), not the smooth crossover the Galaxy Plotter is currently fitting. **A direct test against SPARC residuals or σ_int(ρ_env) data could distinguish.** Worth a future explorer session.

2. **Critical exponents the framework could compute, if it adopted the self-consistent form**: β = 1/2, ν = 1/2, η = 0 (mean-field). δ = 3 (response to applied field at criticality). These are testable against any SPARC data binned by environment density — if the framework wants to claim Landau, it must show β = 1/2 in σ_int vs ρ_env at some critical environment density.

3. **The "+1" regularization is forced by the boundary condition (vacuum has no coherence) but is also the most arbitrary-looking element of the formula.** A purely additive shift gives the same physics; a multiplicative shift (say `ρ/ρ_min` with ρ_min vacuum density) would be physically transparent. This is a write-up choice, not a physics question.

4. **The same response-vs-order-parameter ambiguity may afflict γ.** γ enters as a slope of the response curve. If the framework's "γ = 2/√N_corr" is a response slope, then N_corr is a thermal-bath property; if γ is an order-parameter critical exponent (β = 1/2 → 2β = 1, etc.), the relation is structurally different. Worth an explorer pass — the N_corr operational definition topic touches this.

5. **σ_int(ρ_env) is the live frontier.** Even if C(ρ) is a response function with no critical phenomena, the framework's *novel* prediction (per Pass 4 researcher) is that σ_int (intrinsic scatter on RAR) varies with environment density. This prediction does not require a phase transition — it requires the response slope dC/d(log ρ) to be density-dependent, which it is by construction. The next-most-valuable explorer session is computing the predicted slope dσ_int/d(log ρ_env) explicitly from the response form.
