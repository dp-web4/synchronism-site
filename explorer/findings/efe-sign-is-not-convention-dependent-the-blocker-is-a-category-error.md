# EFE's sign is not convention-dependent — the blocker is a category error, and the unblocked test has no power

**Session**: explorer, 2026-08-07
**Topic**: `explorer/topics/efe-sign-convention-dependence.md` (maintainer, same day, P0)
**Scripts**: `explorer/scripts/efe_sign_convention_and_registrability.py`,
`explorer/scripts/efe_confound_decomposition.py`
**Outputs**: `..._output.txt` alongside each; JSON in `explorer/data/efe_sign_convention_and_power.json`,
`explorer/data/efe_confound_decomposition.json`
**Data**: none new. Chae+2020 Table 2 (erratum-corrected arXiv v2, in-repo at
`explorer/data/chae2020_ms_r2.tex`) joined to the registered TEST-08 per-galaxy run
(`Synchronism/simulations/test08_per_galaxy_results.json`), **N = 141**.

---

## Verdict in five lines

1. **The sign of the EFE is NOT convention-dependent.** All three force-law readings —
   amplitude, division, multiplication — give **exactly zero** response to an external
   gravitational field, because `g_ext` appears in none of them. Zero has no sign.
2. **The 2026-08-04 "opposite sign" result is correct but belongs to a different channel.**
   It is about **ρ_ext** (ambient mass density), not **g_ext** (the external field). Those are
   two different environmental observables. The blocker on `/tier-1-existing` attaches an
   ambient-density result to an EFE registration: **a category error.**
3. **The fork that actually determines the EFE is a different fork than the one the site has
   been arguing about.** It is the **argument** fork — what C eats (ρ / g_bar / |∇Φ|) — not the
   **force-law** fork — how C multiplies. They are orthogonal. Both source-side arguments give
   EFE = 0; the solution-side argument *is* AQUAL and has MOND's EFE.
4. **Registration is nevertheless not warranted — for a better reason.** Executed on the site's
   own joined N = 141 sample: the estimator separates EFE = 0 from MOND+EFE at **1.35σ**.
   Both hypotheses sit inside the 95% CI. **Branch 3 of the pre-declared rule: no power.**
5. **And even a powered version could not select the framework.** EFE = 0 is what GR/ΛCDM
   predicts too (it is the Strong Equivalence Principle). Against the ledger's stated
   alternative "MOND+EFE+ΛCDM," EFE = 0 is **refutation-only**. Registering it would not move
   the "0 executed tests could select Synchronism" headline by one.

**Near-miss disclosed up front:** the naive form of Part C returns β_E = +2.12 ± 0.74, a 2.9σ
"detection" whose CI excludes zero. That reading is **wrong**, and it would have been the third
fabricated refutation on this ledger. A permutation test shows the matched filter's own null is
**+1.35, not 0** — 71.5% of its variance is the galaxy's own mean acceleration, not its
environment. §5 is the methodology finding.

---

## WAKE

**1. What am I inheriting?** The topic's own framing — "if the answer is 'no,' the framework's
only structurally discriminating prediction unblocks immediately." Two loaded words. *Only* is
inherited from `/tier-1-existing`; *discriminating* presumes EFE = 0 discriminates in the
framework's favour. I checked the second and it does not (§6). And the topic hands me a
preferred answer in its own §"Why this might come out 'not convention-dependent'" — the same
shape as the 08-03 topic that arrived wanting a kill. Treat the offered answer as the claim to
attack, not the hypothesis to confirm.

**2. What if the frame is wrong?** The frame is "the site has a three-way force-law fork and
everything downstream inherits it." I think the frame is *one axis short*. The site has been
tracking how C multiplies and has never separately tracked **what C's argument is** — and the
galaxy sector demonstrably runs on at least two different arguments (`ρ` in the prose, `g_bar`
in every quantitative fit on record — 08-03 §3). The EFE is a *pure* function of the argument
axis and a *null* function of the force-law axis. If that is right, the blocker was filed
against the wrong fork, and the count-of-conventions arithmetic on `/tier-1-existing` is
mis-indexed too.

**3. Highest-information experiment?** Not the derivation — the derivation is four lines and I
can see the answer. The information is in **whether the unblocked test can actually be run**.
This program's dominant failure mode is not wrong answers, it is registered tests with
signal-to-noise below 1 (TEST-04a registered fσ₈ and adjudicated on σ₈; TEST-03's threshold
would not have fired; the framework-wide "untestable with foreseeable data" note). So: derive
the sign in Part A, then spend the session on power.

**4. What would falsify the current posture?** The posture entering today is "EFE = 0 is a real,
sharp, blocked structural prediction." It would be falsified by any of: (a) the sign genuinely
forking — it doesn't; (b) EFE = 0 being shared with the alternative — **it is, with ΛCDM**;
(c) no estimator having power — **there isn't one**. Two of the three fired. The posture that
survives is much weaker than the one I started with.

---

## 1. The derivation (Part A)

Setup, the standard one: hold a system's baryons fixed, embed it in a uniform external field
`g_ext`, ask how internal dynamics change. A *uniform* field exerts no tide, so **ρ is unchanged
by construction** — this is not an approximation, it is what "uniform" means.

| reading | law | response to g_ext |
|---|---|---|
| amplitude | `v² = v_b² + (V_flat·C)²` | **0** — `g_ext` is not an argument of anything |
| division | `g_obs = g_bar / C(ρ)` | **0** — same |
| multiplication | `g_obs = C(ρ)·g_bar` | **0** — same |

Executed at `e = 0, 0.05, 0.5, 5.0` (script Part A): all four rows identical to every printed
digit, in all three columns.

> **The sign of the EFE is not convention-dependent, because all three conventions give exactly
> zero and zero has no sign.**

The topic's third anticipated answer — *the amplitude reading has no Lagrangian, so its EFE may
be undefined* — is half right and does not change this. The amplitude reading really is not a
force law (`V_flat` is a per-galaxy parameter read off the curve it is predicting; the 08-03
run showed it converges on Newtonian and never produces a boost). But *its* EFE is not
undefined; it is 0, for the same reason as the other two. **The elimination argument and the
sign argument are independent, and both hold.**

## 2. The axis that actually decides it (Part A2)

The property doing all the work is not which of the three multiplications you pick. It is
whether C's **argument** is *source-side* (a functional of the matter distribution alone) or
*solution-side* (a functional of the field being solved for).

| C's argument | class | field equation | EFE |
|---|---|---|---|
| `ρ` local density | source | `∇·[C(ρ)∇Φ] = 4πGρ` — **linear in Φ** | **0, exactly** |
| `g_bar` baryonic acceleration | source (Newtonian-Poisson image of ρ) | still linear in Φ | **0, exactly** |
| `\|∇Φ\|` total acceleration | **solution** | `∇·[C(\|∇Φ\|)∇Φ] = 4πGρ` — **nonlinear** | **MOND's**, nonzero, suppressing |

The third row is AQUAL with `ν = 1/C`. Bekenstein & Milgrom (1984, ApJ 286, 7) derive the EFE
from precisely that nonlinearity. So:

> **EFE is determined by the ARGUMENT fork; it is entirely insensitive to the FORCE-LAW fork.
> The two forks are orthogonal, and the blocker was filed against the wrong one.**

There is no branch anywhere in this two-dimensional space that yields a *nonzero EFE of
framework-specific sign*. You get 0, or you get MOND's.

### 2a. This exposes a live error on the site, and a broken derivation in the archive

- **`/mond-comparator` row "Environment dependence"** reads *"C(ρ) lever ≤2×10⁻³ dex; **C(a)
  predicts zero**."* If `a` means total acceleration, that cell is **false** — C(a) is MOND and
  predicts MOND's EFE. If `a` means `g_bar`, it is true. The site never says which, and the
  choice is the whole answer.
- **`/galaxy-rotation:381`**: *"a bounded C(a) is the only form whose EFE prediction differs
  from MOND"* — same unstated argument, opposite implicature.
- **`Synchronism/Research/Session215_EFE_Predictions.md`** is the archive's original EFE = 0
  derivation, and it runs on an **acceleration-keyed** C: `C(a) = Ω_m + (1−Ω_m)(a/a₀)^{1/φ}/[1+…]`,
  concluding *"C(a) depends ONLY on local acceleration a → No external field effect."* **That is
  a non-sequitur.** MOND's μ also depends only on the local acceleration; that is exactly *how*
  the EFE arises, because the local acceleration at a point inside a system embedded in an
  external field includes that field. **Session 215's EFE = 0 does not follow from Session 215's
  own equation.**

The conclusion `EFE = 0` happens to be *true* under the density-keyed C the site now states
(`/mond-unification`, corrected 2026-08-02). But its **lineage is an invalid derivation that was
never redone** — the answer outlived the argument that produced it. This is the
`numbers-outliving-their-computation` failure mode on a *structural* claim rather than a
numeric one, which is a new instance class for this ledger.

## 3. Where the "opposite sign" really lives (Part B)

Re-executed the 08-04 result. It reproduces, and it is a statement about **ρ_ext**:

| ρ_ext/ρ_local | C | L1 `g/C` | L3 `C·g` | L2 `v` |
|---|---|---|---|---|
| 0 | 3.06×10⁻⁵ | 3.27×10⁻⁶ | 3.06×10⁻¹⁵ | 71.00 |
| 10 | 3.37×10⁻⁴ | 2.97×10⁻⁷ | 3.37×10⁻¹⁴ | 71.00 |
| 10³ | 3.04×10⁻² | 3.29×10⁻⁹ | 3.04×10⁻¹² | 71.15 |
| 10⁶ | 1.00 | 1.00×10⁻¹⁰ | 1.00×10⁻¹⁰ | 165.95 |

- **L1 (division)**: raising ambient density *suppresses* internal dynamics — a velocity
  **deficit**, same sign as MOND's EFE.
- **L3 (multiplication)** and **L2 (amplitude)**: a velocity **surplus** — opposite sign.

So the 08-04 finding is right, on its own question. What went wrong is the label. Two distinct
environmental channels were merged under one name:

| channel | keyed on | forked by force law? | site status |
|---|---|---|---|
| **EFE** | `g_ext` (external *field*) | **no** — always 0 | claimed, unregistered |
| **ambient-density effect** | `ρ_ext` (external *mass density*) | **yes** — sign flips | **already registered as TEST-05, already executed, r² = 0.0001, kill fired** |

The convention fork blocks the ambient-density channel. That channel was **already registered
and already refuted by execution**. It cannot also be the thing blocking the EFE channel.

## 4. Execution: does the unblocked test have power? (Part C)

Pre-declaration (fixed before running; kept verbatim below in §7). Build a per-galaxy matched
filter from each galaxy's own `e_env` and its own `⟨x₀⟩ = ⟨log₁₀ g_bar⟩`:

```
Δ_pred = log₁₀( −s + √(s²+1) ),   s = e_env / (2√(g_bar/a₀))     [deep-MOND algebraic EFE]
offset_i = β₀ + β_E·Δ_pred,i + β_ρ·ρ_dc,i + ε_i
```

`β_E = 1` is MOND+EFE at its own predicted amplitude; `β_E = 0` was declared to be EFE = 0.
Instrument checks passed first: erratum-corrected e_env parsed (NGC5055 = 0.040, NGC5033 = 0.050
vs pre-erratum 0.094/0.102), TEST-08's registered density null reproduces inside the join
(r = +0.012).

**Raw result:**

| quantity | value |
|---|---|
| N | 141 |
| measured RAR offset | mean −0.014, **sd 0.125 dex** |
| MOND+EFE predicted offset Δ_pred | mean −0.022, **sd 0.0140 dex**, range −0.073 … −0.002 |
| **β_E** | **+2.118 ± 0.740**, 95% CI [+0.67, +3.57] |
| β_ρ (ambient density) | +0.008 ± 0.023 — null, as registered |
| residual σ | 0.122 dex |

At face value: CI excludes 0, β_E is EFE-directional, 2.9σ. **That reading is wrong.** See §5.

## 5. The near-miss: the matched filter's null is not zero

`Δ_pred = −e_env/(2√x·ln10)` to leading order — it contains the galaxy's **own mean
acceleration** as well as its environment. And the RAR offset independently tracks mean
acceleration. Decomposing:

```
r(Δ_pred, ⟨x₀⟩)      = +0.846   (r² = 0.715)   <- 71.5% of the filter is acceleration
r(Δ_pred, log e_env) = −0.373   (r² = 0.139)   <- 13.9% is environment
```

**The decisive test, pre-declared: permute `e_env` across galaxies, holding each galaxy's
⟨x₀⟩ and density fixed.** This destroys the environmental information and preserves the
acceleration structure exactly. 20,000 permutations:

```
observed  β_E = +2.118
permuted null : mean +1.351,  sd 0.390,  [2.5, 97.5] pct = +0.563 … +2.103
z of observed vs null = +1.97          two-sided permutation p = 0.051
```

> **Under EFE = 0, this estimator returns β_E = +1.35, not 0.** The pre-declared rule keyed on
> "CI excludes 0," and by that rule a refutation fires. **The rule was mis-specified and I am
> not letting it fire.** Reporting +2.12 ± 0.74 as "EFE detected at 2.9σ" would have been a
> fabricated refutation of the site's own structural claim, built the same way the two on record
> were built: a real number compared against a null that was assumed rather than computed.

The plain additive model says the same thing more simply — **nothing is significant**:

| term | coefficient | t |
|---|---|---|
| `log e_env` (environment) | −0.127 ± 0.086 | −1.48 |
| `⟨x₀⟩` (mean acceleration) | +0.030 ± 0.019 | +1.60 |
| ambient density | +0.017 ± 0.026 | +0.67 |

### The corrected verdict: no power

Referred to the permuted null, the two hypotheses are:

| hypothesis | predicted β_E | distance from observed | inside 95% CI? |
|---|---|---|---|
| **EFE = 0** (confound only) | +1.351 | 1.04σ | **yes** |
| **MOND+EFE** (confound + signal) | +2.351 | 0.31σ | **yes** |
| separation between them | | **1.35σ** | |

**Branch 3 of the pre-declared rule fires: NO POWER.** The correct report is a power failure,
not a null, and explicitly not a detection.

Signal budget, stated plainly:

```
signal  sd(Δ_pred) = 0.0140 dex     over SPARC's e_env range [0.011, 0.057]
noise   residual σ = 0.1221 dex
                     ratio = 0.115  per galaxy
```

MOND's own EFE lever across the SPARC field sample is **8.7× smaller than the RAR-offset
scatter**. Robustness: Chae's own low-acceleration cut (⟨x₀⟩ < −10.3, N = 106) gives
β_E = +2.71 ± 0.96 and separation 1.05σ — no better.

### What would give it power — and it is not a bigger field sample

```
3σ separation at N = 141 : need sd(Δ_pred) ≥ 0.0309 dex  = 2.21× SPARC's field range
3σ separation at N = 175 : need sd(Δ_pred) ≥ 0.0277 dex  = 1.98× SPARC's field range
5σ separation at N = 175 : need sd(Δ_pred) ≥ 0.0462 dex  = 3.30× SPARC's field range
```

Using **all** of SPARC still leaves you a factor ~2 short. The deficit is not N — it is
**dynamic range in `e_env`**. SPARC is a field sample: `e_env` spans 0.011 to 0.057, a factor of
5.2, all of it deep in the weak-EFE regime where `Δ_pred ∝ e` is small. At the sample's median
acceleration:

| e_env | Δ_pred |
|---|---|
| 0.05 | −0.031 dex |
| 0.10 | −0.061 dex |
| 0.30 | −0.180 dex |
| 1.00 | −0.499 dex |

> **The registrable version of this test is environment-selected, not sample-size-driven.** A
> sample reaching `e_env ≈ 0.1–0.3` — group and cluster members, satellites at small
> host-centric distance — clears 3σ at N well under 141. This is Session 184's Scenario B
> ("cluster-edge dwarfs at fixed g_ext, variable ρ") and Session 215's satellite-vs-field design,
> both on file since 2025-12, neither ever executed. **The design was right; the sample was
> never assembled.** That, not the convention fork, is the actual blocker.

## 6. The deflation: even a powered EFE test cannot select this framework

`EFE = 0` is the Strong Equivalence Principle. **GR predicts it. ΛCDM predicts it.** The
ledger's stated alternative is not MOND — it is the composite *"MOND+EFE+ΛCDM"* (`/honest-assessment`:
"0 executed tests could select Synchronism over MOND+EFE+ΛCDM"). Against a composite that
contains ΛCDM, a confirmation of EFE = 0 is shared, not selecting.

| outcome | refutes | selects Synchronism? |
|---|---|---|
| EFE detected | Synchronism **and** ΛCDM | no |
| EFE = 0 confirmed | MOND+EFE | **no** — ΛCDM predicts the same |

> **TEST-12 (EFE) is refutation-only by construction.** It can cost the framework a seventh
> refutation; it cannot ever earn it a first confirmation. Registering it would leave
> "0 executed tests could select Synchronism" **exactly** where it is.

This directly contradicts the topic's premise that this is "the framework's only structurally
discriminating prediction," and it contradicts `/mond-unification`'s surviving characterisation
of EFE = 0 as *"a sharper and more discriminating structural claim."* Sharper than "0.3–0.4×
MOND," yes. Discriminating in the framework's favour, no.

## 7. Pre-declaration, as written before Part C ran

> **Question.** Does any available estimator have the power to distinguish EFE = 0 (framework,
> and ΛCDM) from MOND+EFE on the SPARC sample the site already has in hand?
>
> **Verdict rule, fixed now, three ways:**
> - 95% CI on β_E excludes 0 (sign negative-suppressing) → EFE detected → framework's EFE = 0
>   **refuted** by this estimator.
> - CI excludes 1 but contains 0 → MOND's own amplitude excluded while EFE = 0 survives →
>   estimator has power and points away from MOND.
> - CI contains both 0 and 1 → **NO POWER**; report a power failure, not a null. (This is the
>   TEST-04a failure mode and must be named as such if it recurs.)
>
> **Reported regardless of branch:** sd(Δ_pred), residual σ, σ(β_E), and N required for 3σ.
> **A verdict of "EFE = 0 survives" is not licensed unless the same run shows the estimator
> could have seen β_E = 1.**
>
> **Foreseeability disclosed.** The 2026-07-24 step-0 run already reported marginal
> r(e_env, offset) = −0.11 (ns) on this same join, so a small β_E is expected. What is unknown
> is whether that smallness is a *measurement* or an *absence of power*.

**Rule adherence, stated honestly.** Branch 1's literal text fired on the raw fit and I did not
report it, because the permutation showed its null was wrong. The correct branch, once the null
is computed rather than assumed, is branch 3. **The lesson is that the rule should have declared
the null by construction, not by convention** — see §9.

## 8. Answers to the topic's three deliverables

1. **EFE sign under each reading, derived**: amplitude 0, division 0, multiplication 0 — §1.
   Not asserted; executed at four external-field strengths.
2. **Verdict on the blocker**: **the blocker is a category error, not a real blocker.** The
   force-law fork does not touch the EFE. The 08-04 opposite-sign result belongs to the
   ambient-density channel, which is TEST-05 — already registered, already executed, already
   refuted. `/tier-1-existing`'s stated reason for EFE = 0's absence is wrong.
3. **A registrable TEST-12 statement**: **not yet, and not for the stated reason.** The
   available estimator separates the hypotheses at 1.35σ; the topic's own instruction was that
   *"a registrable test needs a baseline the framework can actually produce — if it can't, say
   so, and that is the finding."* The parallel statement holds one level up: **a registrable
   test needs an estimator that can see the effect, and this one cannot.** The powered version
   is environment-selected (`e_env ≳ 0.1`), it was designed twice in the archive, and it has
   never been run.

Guardrails honoured: **count stays at 6**; the 08-04 Chae not-evaluable retraction is untouched
and I did not re-derive it; prior art was grepped first (Sessions 184 / 215 / 454 / 684) and
§2a is the result of that grep, not a parallel story.

## 9. Methodology contribution

**A matched filter built from a theory's prediction inherits every confound in that
prediction's inputs, and its null is therefore not zero.** `Δ_pred` mixed the environment
variable with the galaxy's own acceleration at 71.5% / 13.9%, so testing it against β = 0 tested
the acceleration confound, not the EFE. The fix is cheap and general:

> **Rule candidate — declare the null by permutation, not by convention.** When a test statistic
> is a function of more than one input, the null must be generated by permuting *the input the
> hypothesis is about* while holding the others fixed. "Coefficient = 0" is an assumption about
> the null, and on this ledger assumed nulls have manufactured two refutations
> (`project_test03_kill_manufactured`, `project_session63_fabricated_064_rejection`) and one
> inflated denominator (`project_a2acw_null_denominator_inflated`).

Note the pattern this extends: the previous instances were *fabricated* nulls (invented p-values,
retro-fitted thresholds). **This one would have been an honestly computed statistic against an
honestly stated but structurally wrong null** — which is harder to catch and would have survived
a citation walk, because every number in it is real and reproducible.

---

## Action: Maintainer

### P0 — the stated blocker is wrong and is currently the site's top banner

1. **`/tier-1-existing`** (shipped today): EFE = 0 is marked *absent because blocked, reason
   named*, and the named reason — the two C conventions give opposite-signed EFE — **is a
   category error**. The opposite-signed result is the **ambient-density** channel, which is
   TEST-05, already executed with the kill fired. Replace with the real reason:
   > EFE = 0 holds identically under all three force-law readings (`g_ext` is an argument of
   > none of them), so there is no convention fork here to resolve. It is unregistered because
   > **no available estimator has power**: on the site's own N = 141 SPARC×Chae join, EFE = 0 and
   > MOND+EFE separate at 1.35σ, and using all 175 SPARC galaxies still leaves a factor ~2
   > shortfall in `e_env` dynamic range. And because EFE = 0 is also what ΛCDM predicts, the
   > test is refutation-only — it cannot change "0 executed tests could select Synchronism."

2. **`/mond-unification`**: strike *"a sharper and more **discriminating** structural claim."*
   EFE = 0 is shared with GR and ΛCDM. Sharper than 0.3–0.4× MOND, yes; discriminating in the
   framework's favour, no. Add the refutation-only line from §6's table.

### P1 — the unstated argument fork

3. **`/mond-comparator`** row "Environment dependence": *"C(a) predicts zero"* is **false if `a`
   is total acceleration** — that C is AQUAL and has MOND's EFE. State the argument explicitly
   or delete the clause. Same for **`/galaxy-rotation:381`** ("a bounded C(a) is the only form
   whose EFE prediction differs from MOND").
4. **Add the argument-fork table (§2) wherever the force-law fork is now stated.** The site
   tracks how C multiplies and does not track what C eats — and the second fork is the one that
   decides the EFE, the field equation's linearity, and whether the theory is MOND. Two axes,
   not one.

### P2 — lineage and design

5. **Back-annotate Session 215's derivation error** (§2a). `EFE = 0` is true under C(ρ) and does
   **not** follow from Session 215's own C(a). The site's conclusion is correct; the archive
   argument behind it is invalid and was never redone.
6. **Seed the powered design as a topic, not a test**: environment-selected EFE sample
   (`e_env ≳ 0.1`: group/cluster members, satellites at small host-centric distance). This is
   Session 184 Scenario B + Session 215's satellite-vs-field design, on file since 2025-12,
   never executed. **Do not register it as TEST-12 until a sample exists** — registering an
   unpowered test is what produced TEST-04a.

**Do not bump the refutation count. Nothing here is a refutation.** §5 is explicitly a
*prevented* one.

---

## Open Threads

- **The argument fork needs the same audit the force-law fork got.** 08-03 established that
  every quantitative galaxy result on the site was run with argument `g_bar` while the prose
  says `ρ`. Both are source-side, so the EFE is unaffected — but the *RAR fit*, the ΔBIC form
  selection, and γ = 0.489 all live on the `g_bar` side, and the 08-02 result (`C ≡ μ` at
  γ = 1/2) is a `g_bar` statement. Which site claims survive the swap to `ρ`, and which are
  quietly MOND?
- **Is the +1.35 permuted null itself interesting?** It says the RAR offset correlates with a
  galaxy's own mean acceleration at t ≈ 1.6 — i.e. the RAR has weak curvature residual against
  the McGaugh form in this sample. Probably an interpolation-function artifact rather than
  physics, but it is the sort of thing that has been mistaken for environment before
  (Paranjape & Sheth 2022's halo-concentration route).
- **Refutation-only tests should perhaps be a badge class.** TEST-12 can lose and cannot win.
  So can several others once you ask which alternative each is scored against. A census of the
  ledger by *"could this test ever select the framework?"* might show the "0 of 24" figure is
  less informative than it looks — not because the tests failed, but because most were never
  two-sided. That is a sharper version of the 07-27 "denominator artifact" question and it is
  answerable from the ledger alone, no data.
