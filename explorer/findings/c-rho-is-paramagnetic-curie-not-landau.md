# Finding: C(ρ) is Paramagnetic Curie Response, Not a Phase Transition

## Origin

Topic: `c-rho-landau-reduction-derivation` (seeded 2026-04-29 by maintainer in response to Pass 4
researcher's question #2 on the 2026-04-29 visitor log: "Does C(ρ) reduce to Landau theory in the
appropriate limit?"). The maintainer's research proposal
(`Synchronism/Research/proposals/coherence_function_landau_reduction_question.md`) framed the
question correctly but did not perform the derivation.

## Summary

C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) is the equilibrium condition of a **single binary variable in
an external field** (MaxEnt / Curie-paramagnet form). When written as a Landau expansion in C, the
coefficients are *all positive constants* and ρ enters *only* through the linear field term — so
there is **no critical point**, **no broken symmetry**, **no universality class**. ρ_crit is a
field-zero offset, not a critical density: at ρ = ρ_crit and γ = 1, C = tanh(ln 2) ≈ 0.60, which
is *not* zero as a critical-point order parameter would require. The function reduces to *less*
structure than Landau theory, not equivalent structure: it lives in the paramagnetic regime where
Landau theory itself has no predictive content beyond smooth saturation. The site's chemistry "89%
validated" claim, three documented failures, and "phase boundary" visualizer are all mis-framed
by a critical-phenomena vocabulary that the equation cannot support.

## Research Notes

### The derivation

Start from the equilibrium condition we want:
```
C = tanh(γ · log(ρ/ρ_crit + 1))   ⟺   atanh(C) = γ · log(ρ/ρ_crit + 1)
```

Define an external "field" `h(γ, ρ) = γ · log(ρ/ρ_crit + 1)` (depends on parameters and
density, not on C). Construct F(C, ρ) such that ∂F/∂C = 0 returns the equilibrium condition:

```
F(C, ρ) = ∫₀^C atanh(C') dC'  −  h(γ, ρ) · C
```

The integral evaluates via integration by parts (u = atanh(C'), dv = dC'):

```
∫₀^C atanh(C') dC' = C·atanh(C) + (1/2) ln(1 − C²)
                   = ((1+C)/2) ln(1+C) + ((1−C)/2) ln(1−C)
```

This is, up to a constant, the negative Shannon entropy of a binary distribution with
probabilities p = (1+C)/2, q = (1−C)/2:

```
((1+C)/2) ln(1+C) + ((1−C)/2) ln(1−C)  =  ln 2  −  H_bin((1+C)/2)
```

where H_bin(p) = −p ln p − (1−p) ln(1−p). So:

```
F(C, ρ) = ln 2 − H_bin((1+C)/2) − γ · log(ρ/ρ_crit + 1) · C
```

This is *exactly* the **MaxEnt free energy of a single binary variable** with constraint that the
expectation be controlled by an effective field h. It is the **single-spin Boltzmann/Curie form**
in disguise — equivalent to the equilibrium magnetization of a non-interacting paramagnet with one
spin, in field h(ρ).

### Landau expansion (verified numerically, see logs/2026-04-29.md notes)

Expanding the entropy term in powers of C:

```
((1+C)/2) ln(1+C) + ((1−C)/2) ln(1−C) = Σ_{n=1}^∞  C^(2n) / [2n(2n−1)]
                                       = C²/2 + C⁴/12 + C⁶/30 + C⁸/56 + ...
```

(Coefficients verified to 8 decimal places at C = 0.3 and C = 0.7.)

So in Landau-expansion form:

```
F(C, ρ) = (a/2) C²  +  (b/4) C⁴  +  (c/6) C⁶  +  ...  −  h(ρ) · C
```

with **a = 1, b = 1/3, c = 1/5, ...** all positive *constants* (no ρ-dependence) and field
h(ρ) = γ · log(ρ/ρ_crit + 1).

### Three structural facts that follow

**1. There is no critical point.** In genuine Landau theory of phase transitions, the quadratic
coefficient `a(T)` changes sign at T_c (a positive above T_c, a negative below). In our derived F,
`a = 1` is a positive constant for *all* ρ. ρ never sign-flips a coefficient; it enters only
through the linear-in-C field term. The system is **always in the paramagnetic / disordered
branch** of Landau theory. There is no broken-symmetry phase to transition into.

**2. There is no Z₂ symmetry.** The field h(ρ) = γ · log(ρ/ρ_crit + 1) is non-negative for all
ρ ≥ 0 (the +1 inside the log enforces this). Therefore C ≥ 0 always — the response is one-sided.
A genuine order parameter has the symmetry C → −C respected by the disordered phase and broken
by the ordered phase. C(ρ) has no such symmetry; it cannot represent broken-symmetry physics.

**3. ρ_crit is not a critical density.** At ρ = ρ_crit, x = γ · log 2, so:

| γ value (regime label on site) | C(ρ_crit) |
|--------------------------------|-----------|
| 0.1 (deep "classical")         | 0.069     |
| 1.0 ("boundary")               | 0.600     |
| 2.0 ("quantum")                | 0.882     |

At a true critical point, the order parameter is **zero**. C(ρ_crit) is not zero at any γ. So
"ρ_crit" is mislabeled — it is the value where the *field zero-offset* sits (where
log(ρ/ρ_crit + 1) crosses log 2). The naming inherits phase-transition vocabulary that the
mathematics does not justify.

### What the γ-axis actually parameterizes

The site's `/gamma-calculator` labels regimes "Quantum / Boundary / Classical / Macroscopic
Coherence" by γ value. In the Curie identification, γ is the *effective inverse temperature scale*
of a non-interacting binary response:

- γ → ∞ (small N_corr): step-function response — equivalent to *zero effective temperature* of a
  paramagnet, NOT quantum coherence. The response sharpens because the thermal bath is cold, not
  because of collective behavior.
- γ → 0 (large N_corr): flat response — *infinite effective temperature* paramagnet, NOT
  macroscopic coherence. There is no coherent response in this limit; the system is fully
  disordered.

This **inverts** the framework's regime labeling. BCS superconductors, BECs, and SQUIDs are
quantum-coherent macroscopic systems with N_corr ≫ 1 *because of collective interactions* — a
mechanism C(ρ) does not contain. The Curie identification has no place for collective phenomena.

The site has previously documented this inversion as the "interpretation gap" (2026-03-31 finding,
2026-04-22 finding). The Curie identification gives the precise structural cause: γ is a thermal
sharpness parameter for a non-interacting response, not a coherence axis.

### What "89% chemistry validation" actually measures

The chemistry r-value claim is that 1,703 phenomena correlate with C(ρ_chem) at γ ≈ 1 with mean
r ≈ 0.98. Under the Curie identification, this is **correlation universality**:

- Any monotone bounded function of a presence-like variable will have rank correlation ~ 0.95+
  with any other monotone bounded function of the same variable
- Spearman/Pearson r of 0.98 between two sigmoids (tanh, logistic, Hill, erf, atan/π) is generic
  near their joint midpoints
- The "89%" is a measurement of monotonicity-across-the-corpus, not of Synchronism specificity

This is a **weaker** result than "C(ρ) is Landau-validated near criticality" would have been —
because Landau at criticality at least encodes universality classes, scaling exponents, and
self-similar structure. The Curie identification offers none of those; the universality being
demonstrated is purely *order-preservation universality*, which is content-free.

### Why the documented failures occur exactly where they do

Three failures are catalogued on `/honest-assessment`:

| Failure | Domain | What's missing in Curie response |
|---------|--------|----------------------------------|
| 53% melting-point error | first-order transitions with latent heat | discontinuous order parameter, latent heat, two-phase coexistence |
| 6.5× YBCO T_c error | superconductivity (BCS-like) | broken U(1) gauge symmetry, gap equation, Cooper pair self-consistency |
| 0/7 fractal-coherence-bridge boundaries | hierarchical multi-critical systems | nested critical points, scale-bridging operators |

All three failures occur in regimes where **broken symmetry, latent heat, or multi-critical
structure** is the dominant physics. A non-interacting paramagnet has none of these things to
deliver. The 2026-04-27 finding ("three failures = one mean-field failure") was correct in
spirit but understated the case: **the failures are not mean-field-specific, they are
no-collective-physics-at-all-specific.** Mean-field Landau still has critical points, broken
symmetry, and universality classes; the Curie form has none of these.

### Comparison to genuine Landau and Ising

| Property | True 2nd-order Landau | Mean-field Ising | C(ρ) (Curie form) |
|----------|----------------------|------------------|-------------------|
| Quadratic coefficient a(T) | sign-flips at T_c | sign-flips at T_c | constant a > 0 |
| Critical point | yes | yes | **no** |
| Broken symmetry below T_c | yes | yes | **no** |
| Self-consistency | optional | yes (m = tanh(βJzm)) | **no** (no fixed-point) |
| Universality class | yes (β = 1/2 etc.) | yes (mean-field exponents) | **n/a (no critical scaling)** |
| Z₂ symmetry m → −m | yes | yes | **no** (one-sided field) |
| Form of order parameter | (T_c−T)^(1/2) below, sigmoid in field above | tanh below T_c via self-consistency | tanh of external field always |

The C(ρ) row is *categorically different* from the other two. It is not a "weaker" or
"approximate" version of Landau or Ising; it is a non-interacting paramagnet that happens to
share the tanh functional form with self-consistent Ising for surface-aesthetic reasons.

### Why the appearance of phase-transition language persists

The C(ρ) curve, plotted against ρ, *visually resembles* an order parameter rising through a
transition. This is purely the saturation curve of tanh — which is the **same shape** as the
Brillouin function for spin-1/2 paramagnetism (Curie law). Brillouin curves are not phase
transitions; they are thermal saturation in field. Reading them as phase transitions is a
visual-vocabulary error.

The site's `/phase-boundary-visualizer` plots C(ρ) for various γ values and labels "regimes."
Under the Curie identification, this visualizer is showing **paramagnetic saturation curves at
various effective temperatures**, with no phase boundary anywhere on the figure. The "boundary"
naming is inherited from physics vocabulary that the math doesn't earn.

## Implications for the Site

This finding **strengthens** the site's existing "scaffolding hypothesis" (2026-04-09 finding) and
the "interpretation gap" diagnosis (2026-03-31, 2026-04-22). It refines the maintainer's
"is C(ρ) Landau?" framing: **no, it is less than Landau** — it's the pre-critical paramagnetic
branch of a Landau expansion, where Landau itself has no predictive content beyond smooth
saturation. This is a sharper finding because it specifies exactly which statistical-mechanical
model C(ρ) reproduces (single-binary-variable MaxEnt = Curie paramagnet) and identifies the
specific structural elements (critical point, broken symmetry, universality class, Z₂ symmetry,
self-consistency) that are absent.

**What survives:**

The framework's content, after this reduction, is:
1. The *choice* of effective field h = γ · log(ρ/ρ_crit + 1) — a logarithmic-in-density coupling.
   This is structurally similar to chemical potential of an ideal gas (μ ∝ log(ρ/ρ_ref)). It is a
   specific choice and not derivable from the Curie identification — it could come from a
   "presence-as-chemical-potential" argument that the site has not made explicit.
2. The CLT-flavored scaling γ = 2/√N_corr. In the Curie picture, this is "effective inverse
   temperature decreases as the square root of correlation count" — a statement about the
   thermodynamics of an effective ensemble. Whether this scaling is derivable or empirical
   remains open (the site already badges it "Motivated Ansatz").
3. The cross-scale claim that all presence-driven systems share this form. This is now a *much
   weaker* claim than "one equation describes all phase transitions": it says "all systems where a
   binary variable is in a log-density field have the same Curie response" — true by construction,
   not informative about physics.

**What does not survive:**

1. The "critical density" naming for ρ_crit. ρ_crit is a field-zero offset, not a critical
   point.
2. The "phase boundary" framing for plots of C(ρ). These are saturation curves with no phase
   boundary on them.
3. The framing that γ is a quantum/classical coherence axis. γ is a thermal sharpness parameter,
   and the regime labels are inverted relative to physics convention (high γ = low effective
   temperature = sharp paramagnetic response, NOT quantum coherence).
4. The reading that "89% chemistry validated" supports framework specificity. It demonstrates
   monotonicity universality across the corpus.
5. The Ising mean-field justification for tanh — already retracted on `/parameter-derivations`,
   but the Curie identification gives the precise alternative model.

## Action: Maintainer

Specific page-level actions:

### 1. `/parameter-derivations` (Section "tanh form")

Current text says tanh is a "phenomenological choice from the Landau-universality family of
sigmoid functions." **Replace with:** "C(ρ) corresponds to the equilibrium magnetization of a
single binary variable (MaxEnt / Curie / non-interacting paramagnet form) in effective field
h = γ · log(ρ/ρ_crit + 1). Expanded in C, the free energy reads
F = C²/2 + C⁴/12 + C⁶/30 + ... − h·C — a Landau expansion with all positive *constant*
coefficients, no critical point, no broken symmetry. This is **less structure than Landau theory
of phase transitions**, not equivalent structure."

### 2. `/critical-density` (and any page using "critical density" terminology)

The current naming is misleading. ρ_crit is the field-zero offset, where log(ρ/ρ_crit + 1) = log 2
and C(ρ_crit) = tanh(γ · log 2) — a *non-zero* response.

Two options:
- (Recommended) Rename to **ρ_∗** or **ρ_field-zero** and explain explicitly it is not a critical
  density.
- (Minimum) Keep the name but add a prominent note: "Despite the name, ρ_crit is not a critical
  density in the phase-transition sense. C(ρ_crit) ≠ 0 (e.g., C = 0.60 at γ = 1). It is a
  reference scale that sets the field-zero offset of the effective field
  h = γ · log(ρ/ρ_crit + 1)."

### 3. `/coherence-explorer` and `/phase-boundary-visualizer`

Re-label "phase boundary" as "saturation curve." The visualizers are correct in what they plot —
the LABELS are wrong. Add a note: "These curves show paramagnetic saturation of a single binary
variable in field. There is no phase boundary on this figure; the apparent transition near γ = 1
is the inflection point of tanh, not a phase transition. Compare to the Brillouin curve for
spin-1/2 paramagnetism — same shape, no phase transition."

### 4. `/gamma-calculator`

The 2026-04-29 maintainer pass already moved labels to "Weakly Correlated / Collective Regime."
Add a new note specifically about γ's interpretation under the Curie identification: "γ is the
effective inverse temperature of the binary response. Sharp tanh (high γ) corresponds to LOW
effective temperature, not quantum coherence. Macroscopic-quantum-coherent systems (BCS, BEC,
SQUIDs) achieve their coherence through collective interactions — a mechanism not present in
C(ρ), which describes non-interacting response. γ does not capture quantum/classical character."

### 5. `/honest-assessment` (chemistry section)

Sharpen the chemistry caveat. Current text says "89% within-distribution sigmoid universality."
Strengthen to: "The 89% chemistry r-value is **correlation universality** — any monotone bounded
function of a presence-like variable will correlate at r ≈ 0.95+ with any other monotone bounded
function. The observed r ≈ 0.98 across 1,703 phenomena demonstrates monotonicity-across-the-corpus,
not Synchronism specificity. Reparametrizing C(ρ) to logistic, erf, atan/π, or any other sigmoid
would yield equivalent r-values."

### 6. `/honest-assessment` (failures section)

Re-frame the three failures explicitly: "The 53% melting-point error, 6.5× YBCO T_c error, and
0/7 fractal-coherence-bridge result are not three independent failures. They are the same
structural failure: C(ρ) reduces to a non-interacting paramagnetic response with no critical
point, no broken symmetry, and no universality class. The three failure domains all require
collective phase-transition structure (latent heat, broken U(1) gauge symmetry, multi-critical
hierarchy) that the model does not contain. The failures are exactly diagnostic of the absent
structure."

### 7. New page: `/coherence-function-as-paramagnet` (or similar)

A new derivation page documenting the formal reduction. Should include:
- The reverse-engineered free energy F(C, ρ)
- The Landau expansion verified to 4+ terms
- The three structural facts (no critical point, no Z₂ symmetry, ρ_crit ≠ critical density)
- The comparison table (true Landau / Ising mean-field / C(ρ) Curie form)
- The interpretation: "What C(ρ) IS, precisely"

This is the page that closes the open question Pass 4 raised. It should be linked from
`/parameter-derivations`, `/coherence-function`, and `/honest-assessment`.

### 8. Back-annotate the Synchronism research repo

The maintainer's existing proposal `coherence_function_landau_reduction_question.md` (2026-04-29)
asked the question. The answer should be filed to the same `proposals/` directory, with a
follow-up proposal that closes the question with the specific reduction (Curie paramagnet, not
Landau theory of phase transitions). See companion file for proposed back-annotation.

## Open Threads

1. **Why log(ρ/ρ_crit + 1) and not log(ρ/ρ_crit)?** The +1 enforces non-negativity of the field
   (so C ≥ 0 always) and makes the field zero at ρ = 0. But it also breaks the would-be Z₂
   symmetry. Could a ρ → −ρ (or analogously sign-flipping) reformulation give back a critical
   point? Probably not without redefining the framework's domain semantics — presence is
   manifestly non-negative.

2. **Could a self-consistent version of C(ρ) recover phase-transition structure?** The site has
   long noted that C(ρ) lacks the Ising self-consistency loop. A version where the effective
   field h depends on ⟨C⟩ (i.e., h(ρ, ⟨C⟩) such that ⟨C⟩ = tanh(γ · log(ρ/ρ_crit · f(⟨C⟩) + 1)))
   would reintroduce critical-point structure. Such a model would *be* a phase transition theory
   and could be tested. This is the actual research path forward, if there is one.

3. **Is there a derivation of γ = 2/√N_corr in the Curie picture?** The site interprets γ via
   CLT-scaling for correlated ensembles. In the Curie picture, γ is effective inverse temperature.
   The composition of these two interpretations would say: "effective inverse temperature scales
   as 2/√N_corr because as more degrees of freedom are correlated, the effective thermal bath of
   the binary variable is rescaled." This is a *physical* interpretation that can be tested in
   specific systems (an actual binary variable coupled to a correlated bath). Open question whether
   it has been derived rigorously anywhere.

4. **What does the 2026-04-12 BKT-vs-Landau finding mean in light of this?** The earlier finding
   said "C(ρ) fails even in mean-field (BKT not Landau on trees)." Under the Curie identification,
   this is automatic: a single non-interacting binary variable cannot have BKT-type essential
   scaling because BKT is a topological-defect phenomenon of an interacting XY-like model. The
   2026-04-12 finding compared C(ρ) to the wrong baseline (tree MIPT mean-field); the correct
   baseline is single-spin Curie, where neither power-law nor essential scaling applies because
   there's no transition.

5. **How does this affect TEST-04, TEST-07, TEST-02?** These are predictions of an effective
   field theory built on top of C(ρ). The Curie identification doesn't kill them — but it means
   they are predictions of "presence couples to dynamics through tanh of log-density field," not
   predictions of a coherence phase transition. The "MRH crossings" framing of these tests should
   be reconsidered.

6. **The MaxEnt connection.** The derivation showed F = ln 2 − H_bin((1+C)/2) − h·C, where H_bin
   is binary Shannon entropy. This is *literally* the MaxEnt construction with a single
   linear constraint ⟨C⟩ = m subject to fixed h. The "presence" variable ρ enters only through
   the choice of constraint multiplier h. If one wanted to derive C(ρ) from first principles,
   the path is: postulate MaxEnt over a binary state with constraint multiplier h(ρ), and
   choose h(ρ) = γ · log(ρ/ρ_crit + 1) on phenomenological grounds. There is no deeper derivation.
