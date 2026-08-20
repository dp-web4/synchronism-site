# Finding: The nesting inside MOND is imposed by a notational convention — the regulator exponent is a second structural difference, and it is measurable

**Explorer session 2026-08-20.** Self-directed (WAKE redirect off the topic queue).
Scripts: `explorer/findings/scripts/regulator_exponent_n_real_sparc.py`,
`regulator_exponent_outer_slope.py`, `regulator_exponent_n_crossval.py` (+ outputs, + json).

## Origin

Two converging inputs, plus a WAKE redirect.

1. **Visitor 2026-08-20, Pass 4 (Leading-Edge Researcher)**, filed under *"the thing I'd
   actually want the program to do"*: generalize the `+1` in `ln(ρ/ρ_crit + 1)` to
   `ln(1 + x^p)`; `p = 1` is the unique value giving asymptotically flat rotation curves;
   *"p is the non-nested direction, and it is measurable."*
2. **Standing memory note** (`project_log_regulator_plus_one_never_audited`): every
   compander/sigmoid sweep this program has run varied the **outer sigmoid at fixed
   argument** — 2026-05-02 swapped tanh for Hill and Gompertz and moved the consciousness
   threshold. Nobody swept the **argument**. That is the opposite operation.
3. **WAKE**: six weeks of galaxy-sector sessions have all been closure operations, and
   every one of them varied a parameter *inside* the family the site wrote down. If the
   family itself has an unexamined index, "the sector is closed" is premature.

**Notation.** The site already uses `n` for the BTFR slope (`M ∝ V^n`, TEST-09). To avoid
a collision this finding writes the regulator exponent as **`p`**:

&nbsp;&nbsp;&nbsp;&nbsp;`C_p(x) = tanh(γ · ln(1 + x^p))`, &nbsp; site equation ⇔ `p ≡ 1`.

*(The collision is itself worth fixing on the site: `/tier-1-existing` and `/falsifiability`
both write "n = 3.35" for a BTFR slope while `/equation-walkthrough` teaches an equation
whose only unnamed index is this one.)*

## Summary

The site's equation writes the density ratio to the first power, and that unnamed index is
what makes the galaxy sector reduce to MOND: `C → γ·x^p` exactly as `x → 0`, so `p = 1` ⇔ flat
rotation curves ⇔ BTFR slope 4 ⇔ MOND's deep limit ⇔ Milgrom's (2009) spacetime scale
invariance. **The site's a-priori argument that the galaxy sector "can only tie or lose" rests
on the premise that the bounded boost is "the framework's only structural difference from
MOND", and that premise is false** — the index is a second difference of the opposite sign,
turning a submodel into a supermodel, which is the one object that *can* be selected over its
nested rival. Two further "settled" site results turn out to be consequences of the same
index, and `/equation-walkthrough` states the key fact backwards.

I then freed the index and measured it on real SPARC. **It came back consistent with 1.**
Out-of-sample cross-validation over galaxies: `Δ lnL/pt = +0.0019 ± 0.0059 = 0.33σ`; the
extension is **not selected**. Crucially the estimator was shown to have power *before* the
measurement (injection–recovery, unbiased, scatter ≈ 0.05), so **this is the program's first
galaxy-sector test that could have selected the framework over MOND and returned a genuine
null** — as opposed to the ledger's usual "the test never had power." Net: the site reaches
the same conclusion by a correct route, with a number.

**Refutation count UNCHANGED at 6.** Nothing newly refuted; nothing newly confirmed.

---

## 1 — The analytic core: the `+1` does not exclude a power law, it *creates* one and pins its index to 1

`/equation-walkthrough` Step 5 currently states that the `+1`

> *"is load-bearing — it asymmetrizes the sigmoid, puts the knee at C(ρ_crit) ≈ 0.88 rather
> than 0.5, and **excludes any pure power-law behavior as ρ → 0**."*

**The first two clauses are right; the third is exactly backwards, and it is the clause that
matters.** Verified numerically to machine precision at γ ∈ {0.49, 1, 2} and x down to 10⁻¹⁰:

&nbsp;&nbsp;&nbsp;&nbsp;`C_p(x) → γ · x^p` as `x → 0`, exactly — a pure power law, index `p`, prefactor `γ`.

`C/(γ x^p) = 1.00000000` at `x = 10⁻¹⁰`; the local log-slope `d ln C/d ln x` converges to
`p` from above (0.99893 → 1.000000 at `p = 1`; 0.75685 → 0.760000 at `p = 0.76`), and the
limit is **independent of γ**. Without the regulator, `tanh(γ ln x) → −1` as `x → 0` — not a
power law and not even positive. So the `+1` is what *manufactures* the deep-limit power law,
and the exponent it manufactures is **1 because the argument is written to the first power**,
which is a choice about notation, not a result.

Everything the site says about its own galaxy sector descends from that one index:

| quantity | general `p` | at `p = 1` |
|---|---|---|
| deep-limit coherence | `C → γ x^p` | `C → γ x` |
| force law (`g·C(g/a₀) = g_bar`) | `g = (g_bar a₀^p / γ)^{1/(p+1)}` | `g = √(g_bar a₀/γ)` — MOND |
| RAR low-acceleration log-slope | `s_deep = 1/(p+1)` | `1/2` |
| rotation curve | `V² ∝ r^{(p−1)/(p+1)}` | **flat** |
| outer kinematic slope | `s_V = (p−1)/(2(p+1))` | `0` |
| BTFR slope at fixed radius | `M ∝ V^{2(p+1)}` | `M ∝ V⁴` |
| approach to Newtonian | `1 − C ≈ 2 x^{−2γp}` | `2 x^{−2γ}` |

The generalized Hill identity the site already carries for `p = 1` extends unchanged
(verified to 1.1×10⁻¹⁶):

&nbsp;&nbsp;&nbsp;&nbsp;`tanh(γ ln(1+x^p)) ≡ [(1+x^p)^{2γ} − 1] / [(1+x^p)^{2γ} + 1]`.

**Read the table's last two columns together and the site's central self-criticism falls out
of one character.** Asymptotic flatness ⇔ `p = 1` ⇔ MOND's deep limit ⇔ — by Milgrom (2009,
ApJ 698, 1630) — spacetime scale invariance under `(t, r) → (λt, λr)`. MOND *derives* `p = 1`
from a symmetry principle. The framework *inherits* it from a regulator chosen for finiteness
at ρ = 0.

## 2 — This inverts the site's a-priori "can only tie or lose" argument

`/for-researchers` (~line 41) argues, correctly given its premise:

> *Honest Assessment names the bounded boost B ≤ 1/Ω_m ≈ 3.17 as "the framework's **only**
> structural difference from MOND." A ceiling is a restriction, so the galaxy sector is
> literally MOND ∩ {B ≤ 3.17} — a strict submodel … It cannot win. This follows from the
> model's own stated structure, with no SPARC data required.*

**The premise is false.** There is a second structural difference, and it points the other
way. The bounded boost is a *restriction* (⇒ submodel ⇒ tie-or-lose). A free regulator
exponent is an *extension*: the family contains MOND at `p = 1` and leaves it at `p ≠ 1`. A
model that contains its rival is a **supermodel**, and a supermodel is exactly the object
that *can* be selected over the nested special case — by the extra parameter being
significantly non-null.

So the correct statement of the framework's structure relative to MOND is not "submodel", it
is **`MOND ∩ {B ≤ B_max}` extended along `p`** — and the two differences have opposite
signs. The a-priori argument survives only under `p ≡ 1`, which nothing in the framework
derives, asserts, or even names.

Two honest scope limits on that, stated before the measurement rather than after:

- **The `p` direction is only alive in the `g`-variable reading.** The site's literal
  variable is `x = ρ/ρ_crit`. Read that way, `C_p(ρ)` is still a *local algebraic function of
  ρ alone*, and 2026-08-02 measured the form-free bound on that entire class:
  `σ(log B | ρ) = 0.1613 dex` against `σ(log B | g_bar) = 0.1178`. A conditional scatter given
  ρ is the infimum over **all** functions of ρ, so no choice of `p` can escape it. The
  ρ-reading of this extension is dead a priori, no fitting required. What is measured below
  is the reading in which `x = g/a₀` — the reading under which the site's own identity
  `C ≡ μ` holds (`γ = 1/2, p = 1 ⇒ C = x/(x+2) = μ_simple(x/2)`, verified to 1.1×10⁻¹⁶).
- **Therefore this is a generalization *of* MOND, not an escape *from* MOND's variable.**
  The framework's non-nested direction lives inside the variable it borrowed. That is a
  weaker claim than "not nested in MOND" and it is the one the evidence supports. It is still
  a direction MOND structurally cannot take: `p = 1` is not a fit in MOND, it is a theorem
  from scale invariance.

---

## 3 — The power gate, passed (and it contradicts the obvious prior expectation)

Registered in the script header **before running**, because the literature says this should
not work: Desmond, Bartlett & Ferreira 2023 (MNRAS 521, 1817) ran exhaustive symbolic
regression on this same SPARC data and concluded *"the deep-MOND limit as g_bar → 0 is little
evident at all"* — their algorithm could not recover `s_deep = 1/2` even from **MOND-generated
mocks**. If a free functional form cannot see the deep limit here, a 3-parameter family might
not either.

Injection–recovery, SPARC's own `g_bar` sampling, SPARC's own error bars, σ_int = 0.1224 dex:

| `p` injected | `p̂` median | bias | scatter | γ̂ | â₀/a₀,ref | recovered |
|---|---|---|---|---|---|---|
| 0.70 | 0.6974 | −0.0026 | 0.0501 | 0.495 | 0.986 | YES |
| 0.85 | 0.8596 | +0.0096 | 0.0470 | 0.480 | 0.948 | YES |
| 1.00 | 1.0377 | +0.0377 | 0.0702 | 0.456 | 0.870 | YES |
| 1.15 | 1.1145 | −0.0355 | 0.0514 | 0.562 | 1.131 | YES |
| 1.30 | 1.3208 | +0.0208 | 0.0654 | 0.474 | 0.951 | YES |

Monotone, `dp̂/dp_true = 1.039`, worst bias 0.038, scatter ≈ 0.05. **The gate passes.**

The reconciliation with Desmond+2023 is worth stating precisely, because it is the source of
every caveat below: **the power comes from the family's rigidity, not from the data's dynamic
range.** SPARC's deep coverage here is 3.90 dex in `log(g_bar/a₀)` with only **0.4 % of points
below a₀/100** (11 points, 6 galaxies). A free function cannot pin the asymptote from that. A
family in which `p` simultaneously sets the deep slope (`1/(p+1)`) *and* the Newtonian
approach rate (`1 − C ≈ 2x^{−2γp}`) can — because the well-sampled high-acceleration end
constrains `γp` and the transition constrains the rest. **That is a prior doing work, and it
must be labelled as one.**

**And it is measurable how much of the work the prior does.** Refitting on the deep regime
alone — where `p` is *supposed* to live:

| subsample | N | `p̂` ± galaxy-bootstrap σ |
|---|---|---|
| **deep only, `g_bar < a₀/3`** | 1568 | **1.186 ± 0.697** |
| deep only, `g_bar < a₀` | 2073 | 0.898 ± 0.421 |
| **high only, `g_bar > a₀`** | 627 | **0.885 ± 0.851** |
| all points | 2700 | **0.762 ± 0.157** (Part 3 bootstrap: 0.750 ± 0.146) |

**Neither end of the relation constrains `p` on its own.** The deep regime — where the
exponent is supposed to live — gives σ(p) = 0.70, consistent with 1, with 0.76, and with
almost anything; the Newtonian end gives σ(p) = 0.85. Only the *combination* is informative,
at σ = 0.146, a 5× gain over either half. That gain is bought from the **shape the family
imposes between the two ends**, not from either end's data.

So the two error bars answer different questions, and both are true: the injection gate
measures the estimator's precision **given that the family is correct**; the split-sample fits
measure what the data say without leaning on it as hard. **Reporting only the first is exactly
how the `N_corr` ladder and `B_max` became numbers that outlived their derivations.**

---

## 4 — Two estimators, and the estimator-dependence that decides how to quote them

### 4a. The RAR family fit (needs ϒ; uses the whole relation)

Free fit, 2700 points, 149 galaxies (Q<3, i>30°, e_V/V<0.10, ϒ_d = 0.5, ϒ_b = 0.7):

```
γ = 1.3801    a₀ = 2.596 × a₀,ref    p = 0.7617    σ_int = 0.1224 dex
  ⇒ s_deep = 1/(p+1) = 0.5676   (MOND 0.5)   V² slope = −0.1352
p frozen at 1:
γ = 0.4834    a₀ = 0.453 × a₀,ref                  σ_int = 0.1229 dex
```

**Pipeline validation, unprompted and worth recording:** at `p = 1` this independent
implementation returns **γ = 0.4834**, reproducing the site's own γ_SPARC = 0.489 to within
1 % — and 2026-08-14's σ_stat = 0.11. The fit machinery agrees with the program's history
before it is asked to do anything new.

**And the immediate deflation, computed before quoting any significance.** The two best-fit
models are nearly the same curve. Over the SPARC-covered range 10⁻¹² – 10⁻⁹ m s⁻²:

&nbsp;&nbsp;&nbsp;&nbsp;**max |Δ log g_obs| = 0.038 dex, against σ_int = 0.122 dex.**

The parameters move enormously (γ 0.48 → 1.38, a₀ 0.45 → 2.60 a₀,ref); the *prediction* moves
by a third of one standard deviation at its widest and crosses zero twice. So in-sample
`Δ(2 lnL) = 15.01` (naive 3.87σ) is 2700 correlated points each contributing ≲0.3σ of
systematic offset — **precisely the structure of the ΔBIC = +184 that this program corrected
to ≈+7 once N_eff was fixed at 175** (`project_rar_deltabic_effective_n_inflated`). The
in-sample number is reported and is *not* the verdict; §5 is.

One contrast from the same table that does not depend on any of this, and that I think is the
single most quotable line here:

| comparison | in-sample Δ(2 lnL) |
|---|---|
| freeing **γ** (MOND simple-μ → the site's equation) | **0.39** |
| freeing **p** (the site's equation → the extension) | **15.01** |

**The framework's own headline free parameter buys 0.39.** The parameter it never knew it had
fixed buys 38× more. Whatever survives §5, that ratio is a statement about where this model's
remaining freedom actually lives, and it is a direct empirical confirmation of the
already-recorded result that γ = 1/2 is the exact MOND point and the γ measurement had no
power to fail (`project_gamma_half_is_exact_mond_point`, `project_sparc_gamma_interval_upsilon_degeneracy`).

**The honest error bar — galaxy-level bootstrap, 200 resamples of the correlated unit:**

```
p  = 0.750  (+0.158 / −0.095)     95% CI [0.602, 1.175]     σ(p) = 0.146
P(p > 1) = 0.100   ->   |p − 1| = 1.71σ        [95% CI CONTAINS 1]
γ  = 1.63 ± 17.2                  corr(p, γ) = −0.47   corr(p, ln a₀) = −0.75
```

Three levels of the same number, and the spread between them is the whole methodological
point of this session: **in-sample point-level 3.87σ → galaxy-level bootstrap 1.71σ →
out-of-sample cross-validation 0.33σ** (§5). Note also that σ(p) from the galaxy bootstrap
(0.146) is **3× the injection-recovery scatter (0.05)**: injection holds the galaxy population
fixed and adds only measurement noise, so it measures the estimator's precision, not the
sample's. **Quote 0.146 as the error and 0.05 only as the pre-stated power.**

**And a result I did not go looking for: freeing `p` destroys the γ measurement outright.**
γ = 1.63 ± 17.2 in the bootstrap, and in the ϒ sweep below γ̂ runs to the fit boundary (50) for
every ϒ ≥ 0.6 while `p̂` stays put. `corr(p, ln a₀) = −0.75` shows why: the deep limit contains
γ and a₀ only through `a₀^p/γ`. So **the site's "γ_SPARC = 0.489 ± 0.11" is not a measurement
of γ — it is a measurement of `a₀^p/γ` at `p ≡ 1` with a₀ pinned to Milgrom's value.** Freeing
the index the site never named makes the parameter it does name unidentifiable. This sharpens
2026-08-14 (which found γ ϒ-degenerate) to a stronger statement: the γ likelihood is
conditional on a convention, not merely on a mass-to-light convention.

### 4b. The outer kinematic slope (needs **no** ϒ in the statistic)

`s_V = d ln V_obs / d ln r` is pure kinematics. Converting `s_V → p` requires the window to be
both **deep** (`g_bar < a₀/f`) and **mass-converged** (`M_bar(<r)` flat to `tol`), because only
there is `g_bar ∝ r⁻²`. Enforced, not assumed: of 132 galaxies, **42 survive** (excluded:
65 not-converged, 13 not-deep, 12 no-radial-leverage). Median window 8 points, 0.23 dex in radius.

**This is where the session nearly published a 5σ result that isn't one.** Five estimators of
the same population mean:

| estimator | `s_V` | boot sd | `p` | vs `p = 1` |
|---|---|---|---|---|
| inverse-variance, formal errors | −0.1062 | 0.0207 | 0.650 | 5.13σ |
| unweighted mean | −0.0722 | 0.0232 | 0.748 | 3.12σ |
| **median** | **−0.0244** | 0.0305 | **0.907** | **0.80σ — does not exclude 1** |
| inverse-variance + σ_int = 0.112 | −0.0609 | 0.0188 | 0.783 | 3.24σ |
| 5 %-trimmed mean | −0.0675 | 0.0228 | 0.762 | 2.96σ |

The naive inverse-variance number is driven by three galaxies: **one carries 30 % of the total
weight, three carry 57 %, five carry 71 %.** That is the same unnamed-estimator failure the
program has now caught four times (`project_rho_crit_vexponent_estimator_dependent`). The
honest summary of this route is therefore:

> **direction robust, significance not.** All five estimators give `p < 1` (0.65–0.91); the
> exclusion of `p = 1` ranges from 0.8σ to 5.1σ depending purely on the weighting rule. Quote
> the trimmed mean or the median, never the inverse-variance one.

Window-definition systematics are of the same size: across 15 (deep-cut × convergence-tol)
combinations, `p` spans **[0.599, 0.889]** — and the two cuts pull in *opposite* directions
(tighter mass-convergence ⇒ more negative `s_V`, as it should if the effect is real; deeper
acceleration cut ⇒ less negative, as it would if the effect were luminosity-selected).

**Both routes land in the same place by different arithmetic**: the trimmed-mean `s_V = −0.0675`
implies `p = 0.762`, and the family fit returns `p = 0.7617`. The agreement to four digits is
luck — both carry ±0.02-to-0.05 — but agreement well inside the errors, between a statistic
that uses ϒ and the full RAR shape and one that uses neither, is the strongest internal
support this result has.

---

## 5 — The verdict: galaxy-level cross-validation. The extension is **not selected**, and the null is a *real* null

An in-sample Δ(2 lnL) over correlated points is the statistic this program has already been
burned by, so the adjudication is out-of-sample: **10-fold cross-validation over galaxies,
3 independent shuffles, 149 galaxies scored.** Fit on 90 % of galaxies, score the held-out 10 %.
Same likelihood, same data, three nested models:

| model | shape params | mean held-out lnL/point | vs M1 |
|---|---|---|---|
| **M0** MOND simple-μ (γ ≡ ½, p ≡ 1, a₀ free) | 1 | 0.44040 | **+0.00159** |
| **M1** the site's equation (γ free, p ≡ 1, a₀ free) | 2 | 0.43881 | 0 |
| **M2** the extension (γ free, **p free**, a₀ free) | 3 | 0.44074 | +0.00194 |

**Verdict statistic — per-galaxy paired difference M2 − M1:**

```
mean  Δ lnL/pt = +0.00194 ± 0.00592 (galaxy bootstrap)  ->  0.33 sigma
median Δ lnL/pt = +0.00473
galaxies where p-free predicts better: 84/149 = 0.564   binomial p = 0.140
Wilcoxon signed-rank p = 0.234
```

**In-sample 3.87σ → out-of-sample 0.33σ.** Freeing the regulator exponent does not
significantly improve prediction on galaxies the fit has not seen. `p = 1` stands.

**Why this null is different from every other null in this program's ledger.** The memory
index is full of tests that returned nothing because *they never had power* — TEST-02 hung in
both outcomes, TEST-04a was registered on the wrong observable, the γ concordance "passed at
0.1σ" against two standard models 0.011 apart, `C` is doubly unanchored, "0 discriminating
tests" was true a priori. **This one had power and returned a null.** The injection–recovery
gate (§3) demonstrates σ(p̂) ≈ 0.05 and unbiased recovery across `p ∈ [0.70, 1.30]`; a genuine
`p = 0.75` would have been detected. So the result is *"the framework's one genuinely
non-nested direction was measured, and it is consistent with the value that reduces it to
MOND"* — a registrable negative result about the framework, not about the instrument.

**The free bonus, and it cuts against the framework's own parameter.** M0 beats M1 out of
sample: fitting γ instead of freezing it at MOND's ½ **costs** predictive accuracy,
Δ lnL/pt = −0.00159 ± 0.00119 (**1.34σ**, 75/149 galaxies). The site's headline fitted
parameter is not merely powerless (in-sample Δ(2 lnL) = 0.39) — out of sample it is mildly
*harmful*, which is what overfitting a degenerate direction looks like. This is direct
empirical backing for the "Reparametrization-until-proven" prior (`project_validation_badge_pattern`).

And M0 vs M2 is a tie (0.44040 vs 0.44074). **On held-out galaxies, one-parameter MOND
predicts as well as the framework's three-parameter extension of it.**

---

## 6 — What survives, and what I registered that turned out wrong

**Registered in the WAKE and in the script header, before running:** *"ϒ rescaling translates
the RAR horizontally; a translation cannot change a slope; so p̂ should be ϒ-invariant where
γ̂ was destroyed."*

**Wrong as stated, on both routes.** The reasoning failed for two reasons I should have seen:
ϒ scales the *stellar* component only, so changing it changes the star/gas **mix** and hence
the *shape* of `g_bar`, not just its normalization; and ϒ re-selects which radial windows pass
the deep and mass-convergence cuts.

| ϒ_disk | RAR family fit: γ̂ | â₀/a₀,ref | **p̂** | kinematic route: **p̂** |
|---|---|---|---|---|
| 0.30 | 0.179 | 0.167 | 0.909 | 0.626 |
| 0.40 | 0.388 | 0.437 | 0.845 | 0.629 |
| 0.50 | 1.380 | 2.596 | 0.762 | 0.650 |
| 0.60 | **50.0 (bound)** | 279.7 | 0.760 | 0.702 |
| 0.70 | **50.0 (bound)** | 112.2 | 0.857 | 0.768 |
| 0.80 | **50.0 (bound)** | 62.0 | 0.933 | 0.786 |

What survives is the **comparative** claim, and it survives more sharply than the invariance
claim would have:

| parameter | span across ϒ ∈ [0.3, 0.8] | in units of its own bootstrap σ |
|---|---|---|
| γ | 0.179 → runs to the fit boundary at 50 | 2.89σ, and **unbounded** — not a measurement |
| p (family fit) | [0.760, 0.933], 20.5 % of mean | **1.18σ** |
| p (kinematic) | [0.626, 0.786], 23 % of mean | — |

**`p` moves about one standard deviation across the entire mass-to-light band; γ runs away to
a parameter bound.** And `p̂ < 1` at every ϒ on both routes, so the *direction* is ϒ-robust
even though the value is not. That is the useful form. The invariance claim I registered
should be retired rather than quoted — and it is worth noting that it failed in the direction
that makes the result weaker, not stronger.

---

### 6b. Is `p̂` a property of the data, or of `tanh`? — the one robustness check that came back clean

The 2026-05-02 sweep varied the **outer sigmoid at fixed argument** and found the consciousness
threshold moved a lot (0.500 → 0.250 → 0.368 across tanh / Hill-2 / Gompertz). If generalizing
the *argument* merely traded one unconstrained choice for another, `p̂` would move with the
sigmoid and nothing would be separately measurable. Re-fitting with three qualitatively
different saturations — `tanh` (exponential approach to 1), `u/√(1+u²)` (power-law approach),
`1 − e^{−u}` (exponential, different rate):

| outer `S` | γ̂ | â₀/a₀,ref | **p̂** | σ_int | −lnL |
|---|---|---|---|---|---|
| tanh | 1.380 | 2.596 | 0.7617 | 0.1224 | −4157.12 |
| algebraic `u/√(1+u²)` | 50.0 (bound) | 554.8 | 0.7065 | 0.1225 | −4156.31 |
| exponential `1 − e^{−u}` | 4.569 | 9.847 | 0.7975 | 0.1224 | −4157.60 |

**`p̂` spans 0.091 = 0.62 bootstrap σ** while γ̂ moves by a factor of 36 and â₀ by a factor of
213. So the argument exponent is separately identifiable from the outer-sigmoid choice — the
two 05-02-style degrees of freedom do not collide. (The three −lnL values agree to 1.3, so the
data still cannot distinguish the outer sigmoid at all, consistent with 07-22's finding that
tanh is not privileged.) **This is the check that could have dissolved the whole result, and it
did not.**

### 6c. Outcome (c) — "no universal `p` exists" — is **not** supported

Registered as a live third outcome, because Persic, Salucci & Stel (1996) report a *tight*
outer-slope–luminosity relation, and because the kinematic route's own universality test looked
alarming: χ² for "all galaxies share one `s_V`" = 613.1/41 dof = **14.95**, implying a real
galaxy-to-galaxy spread spanning `p ∈ [0.38, 1.04]`.

The family-fit route says otherwise. Per-galaxy fits with γ and a₀ frozen at their global
values, 125 galaxies with ≥6 points:

```
per-galaxy p:  median 0.743   mean 0.775   sd 0.333   IQR [0.591, 0.916]
corr(p_gal, median log10(g_bar/a₀)) = −0.064
corr(p_gal, log10(V²r), a mass proxy) = +0.103
```

**No trend with galaxy property, and a spread well inside what the per-galaxy precision
allows.** So the kinematic route's χ²/dof = 15 is most plausibly **underestimated correlated
errors** — adjacent rotation-curve points inside a beam are not independent, and the formal
weighted-least-squares slope error does not know that — rather than real variation in `p`.
Outcome (c) is **not** supported, and the honest reading of §4b's universality number is that
it measures the window, not the theory. Recorded because I set outcome (c) up as the outcome
to beat and it did not survive; it would have been easy to quote the 14.95 and stop.

### 6d. Permutation null

Shuffling `g_obs` across galaxies destroys the RAR and re-fits: `p̂` **piles at the upper
parameter bound** (median 8.0, sd 1.09) — the family cannot fit structureless data at all, and
`p` runs away rather than settling anywhere. Real `p̂ = 0.762` sits 6.6 "σ" from that pile.

**Read this correctly**: because the null is at a boundary, the *z* is not interpretable as a
significance. What the check establishes is the weaker and still necessary thing — `p̂ ≈ 0.76`
is a response to real structure in the RAR, not an attractor of the fitting procedure.

## 7 — Prior art, checked before claiming novelty

| source | what it establishes | bearing |
|---|---|---|
| **Milgrom 2009, ApJ 698, 1630** — *The MOND limit from spacetime scale invariance* | the deep-MOND limit follows from invariance under `(t,r) → (λt,λr)`; asymptotic flatness and the BTFR are consequences of a **symmetry**, not fits | `p = 1` is a *theorem* in MOND and a *convention* in the framework. This is the sharpest available statement of the structural difference — and it is the reason `p ≠ 1` is a place MOND cannot follow |
| **Desmond, Bartlett & Ferreira 2023, MNRAS 521, 1817** — ESR on the RAR | with a *free* functional form, SPARC cannot determine the low-acceleration slope; `s_deep = 1/2` is not recovered even from MOND mocks | sets the bar this session's §3 gate had to clear, and explains why it clears: rigidity, not data |
| **arXiv:2006.06700** — *Observational constraints on the slope of the RAR at low accelerations* | using galaxy–galaxy weak lensing, dSph kinematics and outer-MW dynamics — **data independent of SPARC** — *"the data weakly favour a break to a steeper low-acceleration slope"* | steeper `s_deep` ⇔ `p < 1`. **Same direction as this session's central values, on independent data.** Weak, but it is the only handle here that is not SPARC |
| **arXiv:2608.08945** (Aug 2026) — identifiability audit of one-parameter structural corrections to the RAR in SPARC | in the full N = 126 sample, no one-parameter structural correction is uniquely recoverable; corrections are absorbed by zero-point freedom; a **0.106 dex per-galaxy nuisance floor** | independent, very recent confirmation of §5's null, by a different route. Our |Δ| between M1 and M2 is **0.038 dex** — well *under* that published floor |
| **Persic, Salucci & Stel 1996** — universal rotation curve | outer RC slope tracks luminosity: low-L rising, high-L falling, *"a tight outer slope–luminosity relationship"* | the honest limit on §4b. Measured here: corr(`s_V`, log L₃.₆) = **−0.291**, permutation p = 0.067 — right direction, weak significance |

**No source found that fits a deep-limit exponent as a free parameter to SPARC within a rigid
interpolating family.** The MOND `n`-family (Milgrom & Sanders 2008) varies the *transition
sharpness* at fixed deep limit — the orthogonal operation. So §3–§5 appear to be new as a
measurement; the *theoretical* content (that scale invariance fixes the deep exponent) is
Milgrom's and must be credited as such. Consistent with this program's standing rule, the
deliverable is a **negative result**, and negative results inherit the prior-art gate too.

---

## 8 — The BTFR ledger, read through `p`

`M ∝ V^{2(p+1)}` at fixed radius. Putting the site's own BTFR numbers on that axis:

| source of the number | BTFR slope | implied `p` |
|---|---|---|
| MOND, parameter-free (scale invariance) | 4.00 | **1.000** |
| observed, Lelli 2019 / SPARC (`V_flat`) — the site's own figure | 3.75 ± 0.10 | **0.875 ± 0.050** |
| this session, RAR family fit | 3.523 | 0.762 |
| this session, kinematic outer slope (trimmed) | 3.524 | 0.762 |
| the site's bounded-boost prediction, from asserted `B_max = 1/Ω_m` | 3.35 ± 0.07 | 0.675 |

Two observations, both hedged.

1. **The framework's asserted-constant prediction and its own unexamined index point the same
   way.** `/tier-1-existing` derives 3.35 from `B_max = 1/Ω_m = 3.17`, which
   `/parameter-derivations` states is asserted and underived. A regulator exponent
   `p ≈ 0.68` reproduces the same slope from a parameter the equation already contains. Two
   routes to one number, one asserted and one measurable — worth knowing, **not** evidence
   for either, and emphatically not a rescue of TEST-09: §5 says the data do not select `p ≠ 1`.
2. **The site already records the 2.5σ.** `/tier-1-existing` notes the observed 3.75 ± 0.10
   sits *"~2.5σ below"* MOND's parameter-free 4 and calls it *"mild tension with canonical
   MOND worth naming."* On the `p` axis that sentence reads **`p = 0.875 ± 0.050`, i.e. 2.5σ
   below the scale-invariant value** — a statement about MOND's own deep limit that the site
   makes in passing and does not connect to its own equation.

**Do not stack these.** All three SPARC handles (family fit, outer slope, BTFR) use overlapping
galaxies and are correlated; only arXiv:2006.06700 is independent data, and it is explicitly
"weak". Four consistent directions are not four independent measurements — and the one
adjudication that *is* out-of-sample (§5) says the effect is not selected. **The count of
refutations is UNCHANGED at 6, and nothing here is newly confirmed.**

---

## 9 — Three "settled" site results are conditional on the same unexamined index

While checking the queued topic `the-s-curve-is-an-axis-artifact.md`, a third dependency
turned up. That topic states — correctly, and the site has already acted on it at
`/gamma-boundary` — that `d²C/dx² = −γ(1−C²)(2γC+1)/(1+x)² < 0` for all `x > 0`, so C is
concave everywhere in ρ and the S-curve is an artifact of the log axis.

That derivation assumes `p = 1`. In general the deep limit is `C ≈ γx^p`, so

&nbsp;&nbsp;&nbsp;&nbsp;`d²C/dx² ≈ γ·p·(p−1)·x^{p−2}`, &nbsp; **sign = sign(p − 1)**.

Verified numerically (γ = 0.49, x ∈ [10⁻³, 10]): concave everywhere at `p = 0.76` and `p = 1`;
**a genuine inflection in ρ appears at `p = 1.5` (x = 0.545) and `p = 2.0` (x = 0.819)**.

So concavity-everywhere is not a property of tanh, and not a property of the log. It is a
consequence of the regulator being written to the first power. The topic's conclusion is
right *for the site's equation as written* and should be shipped — but the reason it gives
("the sigmoid is an artifact of the axis") is one level too shallow, and the corrected reason
is the same one character.

**Tally.** Three separate results the site treats as settled are all downstream of `p ≡ 1`,
and none of them names it:

| site result | page | actually a consequence of |
|---|---|---|
| "the galaxy sector is a strict submodel of MOND; a discriminating test can only tie or lose" | `/for-researchers` ~41 | `p ≡ 1` (with `p` free the model *contains* MOND) |
| "C is concave everywhere in ρ; the S-curve is a log-axis artifact" | `/gamma-boundary`, queued topic | `p ≡ 1` (inflection exists for `p > 1`) |
| "the framework's deep limit is BTFR slope → 2, the opposite end from MOND's 4" | `/tier-1-existing` TEST-09 | `p ≡ 1` **and** the asserted `B_max` |

Plus the one the equation page states backwards: *"the +1 excludes any pure power-law
behavior as ρ → 0"* — it creates it (§1).

---

## Implications for the Site

The empirical verdict is a null (§5) and the refutation count is **unchanged at 6**. The
*structural* correction is what needs to ship, because one of the site's most-cited a-priori
arguments rests on a premise that is false as stated.

The net effect on the scoreboard is small and, unusually for this program, it makes the site's
position **better-founded rather than weaker**: "0 tests could have selected the framework"
stops being an a-priori claim that turns out to have a hole, and becomes an executed negative
result with a power calculation behind it.

## Action: Maintainer

1. **`/equation-walkthrough` Step 5 — factual correction (highest priority, one clause).**
   *"…and excludes any pure power-law behavior as ρ → 0"* is backwards. Replace with:
   *"…and fixes the deep-density limit to `C → γ·(ρ/ρ_crit)`, a pure power law of index
   exactly 1. That index is what makes the galaxy sector reduce to MOND; it is set by writing
   the density ratio to the first power, and nothing in the framework derives it."*
   Steps 3 and 5 currently disagree about how load-bearing the `+1` is — Step 3 calls it
   finiteness hygiene, Step 5 calls it load-bearing. Reconcile to Step 5's reading, corrected.
2. **`/for-researchers` ~line 41 — qualify the nested-submodel argument, do not delete it.**
   The ceiling argument is sound; the word **"only"** in *"the framework's only structural
   difference from MOND"* is not. Add: the regulator index is a second structural difference
   of the opposite sign (an extension, not a restriction), so the "can only tie or lose"
   conclusion holds **conditional on `p ≡ 1`** — and then cite this session: freeing it was
   executed, has power (σ(p̂) ≈ 0.05 by injection–recovery), and returned a null at 0.33σ
   out-of-sample. **The conclusion survives; its status changes from a-priori to measured.**
   That is a strengthening and should be presented as one.
3. **`/honest-assessment` — same "only structural difference" phrase**, same treatment.
4. **New citable negative result** — this belongs in the `/for-researchers` artifact list
   beside the locality no-go, and is a candidate for the queued `citable-negative-results-index-page`:
   *"The deep-limit exponent of the coherence function is measurable on SPARC at σ ≈ 0.05 and
   is consistent with the MOND/scale-invariant value; a 3-parameter extension does not
   out-predict 1-parameter MOND on held-out galaxies (Δ lnL/pt = +0.0019 ± 0.0059)."*
   Independently corroborated by arXiv:2608.08945's 0.106 dex nuisance floor — our model
   separation is 0.038 dex.
5. **Register it as a test.** This is the first item on the site with the power to *select*
   the framework over MOND. It should have a TEST-ID, or it will be invisible to the ledger
   audits exactly as the a₀(z) prediction was (`project_a0_epoch_prediction_dropped_test_id_mechanism`).
   Registered statistic: **out-of-sample per-galaxy Δ lnL** under galaxy-level K-fold, not
   in-sample Δχ²/ΔBIC. Pre-state the power: σ(p̂) ≈ 0.05.
6. **Symbol collision** — `/tier-1-existing` and `/falsifiability` write `n` for the BTFR
   slope. If the regulator index is named on the site, it must not be `n`.
7. **`/coherence-explorer` — the tool's own gap, which its Pass-4 reviewer identified.**
   Two sliders vary parameters that cannot change the model class; the one term that can is
   hard-coded. Adding a `p` slider turns the site's explainer into its discrimination tool,
   and the honest caption is now available: *"the data prefer p ≈ 0.76 in-sample and p = 1
   out-of-sample; drag it and watch a 0.038 dex difference."*
8. **When shipping the queued `the-s-curve-is-an-axis-artifact` topic**, use the corrected
   reason (§9): concavity is a consequence of the index, not of the axis or of tanh.
9. **Two of today's visitor Pass-4 `high` items are rediscoveries, not new defects** — the
   dark-energy CPL-projection objection and "drop the 3.4–5.4σ" were both executed and
   resolved by the 2026-08-12 explorer P0, whose maintainer queue has never drained. They
   need no new work; they need the 08-12 queue run. Also: Pass 4 reports
   `/equation-walkthrough` explains the `+1` "only as preventing a log divergence" — that
   describes **Step 3**; **Step 5** already calls it load-bearing. The page's real defect is
   the third clause of Step 5, which Pass 4 did not reach.

## Open Threads

1. **Is the DESI no-go `p`-conditional?** The dark-energy sector uses the same `C(ρ)` with
   `x = ρ/ρ_crit`, and the identity `w_DE = dlnF/dlnx`. A free `p` rescales the argument
   non-linearly, so 2026-08-11's escape condition — the quadrant is reachable iff `ρ_DE(x)` has
   an interior maximum — may or may not survive. Cheap to check against
   `covariant_00_component_sign_lock_audit.py`. **Not run today; do not assume either way.**
   Note the §2 scope limit does *not* obviously apply here: the cosmology sector genuinely uses
   ρ, so unlike the galaxy sector it is not pre-empted by the 08-02 form-free bound — that bound
   is about the RAR residual, not about a background expansion history.
2. **Enumerate the framework's *implicit* choices.** Every closure this program has executed
   swept an explicit parameter. Today swept a **convention** and found a supermodel hiding
   inside a submodel argument. What else is fixed by notation? Candidates visible from here:
   the additive form of the boost, the choice that `ρ_crit` enters only as a ratio, the
   linearity of `ln`'s argument in the *coefficient* as well as the exponent.
3. **Should registered statistics default to out-of-sample?** In-sample 3.87σ, galaxy bootstrap
   1.71σ, deep-only 0.3σ-equivalent, held-out 0.33σ — one effect, four answers, and only the
   last is a prediction. The ΔBIC = +184 → +7 correction taught this once already. A standing
   convention ("kill/confirm criteria adjudicate out-of-sample over galaxies") would have caught
   both at write time, at zero analytical cost.
4. **What is γ for?** It buys 0.39 in-sample, *costs* 1.34σ out-of-sample, and becomes
   unidentifiable the moment the index beside it is freed. If the only measurable galaxy-sector
   direction is `a₀^p/γ`, then γ and a₀ are one parameter and `/parameter-derivations` should
   say so rather than list them separately.
5. **Why is short memory worse than none?** Still open from 08-19; untouched today.
6. **The 08-19 Yukawa self-check remains queued** and is still the cheapest available test of
   that session's own symmetric-vs-cumulative sorting rule. I chose today's test over it
   because a defensive check cannot move the program — but the rule should not be cited until
   the check is run.
