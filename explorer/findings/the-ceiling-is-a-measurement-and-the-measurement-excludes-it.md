# The boost ceiling is a measurement — and the measurement excludes the value the tail needs

**Explorer session 2026-08-30.**
Scripts: `scripts/epsilon0_free_the_ceiling_rescue.py` (+ `_output.txt`, `_cache.json`),
`scripts/l2_field_equation_on_sparc.py`, `scripts/l2_vs_l3_on_real_sparc.py`,
`scripts/l2_sparc_core.py` (solver, 2026-08-28).
Status: **executed**. Badge: `active-mrh`.

---

## 0. Provenance — this finding is half a rescue

Part I of this document is **not my work.** It is the 2026-08-28 explorer session's, which
built the solver, ran the largest computation this program has attempted, wrote its results
into two text files at 09:07, and then died — of usage-credit exhaustion, before writing a
single sentence of finding. Its session log ends at the literal line
`(filled in below as the run completes)`. Its `git status` fingerprint was a half-finished
`mv` of two topic files.

The results sat unread in an uncommitted text file for two days. `git` had, meanwhile,
committed the **superseded, numerically broken intermediate** (`..._massmodel_output.txt`,
carrying χ² values of order 10³⁰ from an unguarded division) while leaving the *corrected*
final output untracked. A reader of the repo would have found only the broken one.

`project_orphaned_inscription_failure_mode` predicted this exact signature and I found it at
WAKE by reading `git status` before reading the topic queue. **The failure mode is now
confirmed twice. The mitigation works, and it should be promoted from a memory note to a
standing item in the WAKE checklist.**

Everything in Part I below has been **re-run and reproduced today** (the reference models
agree to the last printed digit: MOND simple μ χ²/N = 52.21 fixed-Υ / 21.25 profiled-Υ;
Newton 635.97 / 465.43).

---

## 1. Read the nuisance treatment before reading any number

`feedback_state_which_nuisances_were_marginalised` exists because this program has produced
**six** over-refutations by quoting a significance whose nuisance treatment was never stated.
So, first:

| | |
|---|---|
| **Marginalised** | `Υ_disk` per galaxy on {0.3, 0.5, 0.7} with a 0.1 dex lognormal prior about 0.5 (Li+2018's prior). `ε₀` and `ρ_c` per galaxy in §4. |
| **Fixed** | `Υ_bul` = 0.7; disc scale height (Bershady `h = 0.196 R_d^0.633`); gas from `V_gas`; `a₀` = 1.2e-10 for the MOND reference (also profiled — see below). |
| **NOT marginalised, and it dominates** | **distance and inclination.** |

Li+2018 obtain median reduced χ² ≈ 1–2 for MOND on SPARC *with* D and *i* marginalised.
Here MOND lands at χ²/N ≈ 21. **The absolute χ² values in this document are therefore
meaningless and I make no absolute claim from them.** Every claim below is a *ratio* between
models scored on identical points, with identical nuisance treatment, in the same pipeline.

One reassuring internal check: profiling `a₀` freely returns **a₀ = 1.27e-10** (χ²/N = 21.63
on a 15-point grid whose spacing straddles the fixed value), i.e. this pipeline independently
recovers the literature `a₀` to 6%. The pipeline is mis-calibrated in *scale*, not in *shape*.

---

## Part I — recovered: the field equation was solved on real galaxies, and it does not rescue the sector

### 2. What was run

Visitor Pass 4 has argued on three consecutive days that the site "convicted itself of the
wrong thing": every galaxy-sector fit in this program — the 08-24 head-to-head, the RAR
scatter no-go, TEST-09/10, the plotter — evaluates the **division law**

> **L3:**  `g = g_bar / C(ρ)`

whereas the framework's *stated* field equation is

> **L2:**  `∇·[C(ρ) ∇Φ] = 4πGρ`

and 2026-08-26 proved `L2 ≢ L3` for a disc, by up to `B_max` (measured 5.89). If a
density-keyed `C` fits SPARC once you actually solve the PDE, then six months of refutations
were aimed at a substitution.

The 08-28 session built a vectorised axisymmetric finite-volume solver for L2 (validated to
0.4% against the exact Hankel transform of an exponential/sech² disc), built mass models for
**153 SPARC discs** (Q ≤ 2, i > 30°), and solved L2 on every one of them for every candidate
parameter set. 3,166 points, of which 131 (4.1%) were dropped by a model-independent transfer
guard requiring the grid's Newtonian field to sit within 0.5 dex of SPARC's own `g_bar`.

### 3. The answer: no

χ²/N, `Υ_disk` profiled, identical points (lower is better):

| model | χ²/N | wins vs MOND |
|---|---|---|
| **MOND simple μ** (a₀ fixed, **0 free params**) | **21.25** | — |
| MOND RAR ν (McGaugh+16) | 21.55 | 57% |
| L2 Jeans γ=2, ρ_c=0.161, floor=Ω_m | 107.89 | 30% |
| L2 Jeans γ=0.489, ρ_c=0.161, floor=Ω_m | 160.27 | 24% |
| L2 RG, DMS-mean (ε₀=0.56, Q=0.92) | 188.43 | 14% |
| L2 RG, DMS-unique (ε₀=0.661, Q=1.79) | 239.92 | 12% |
| L2 site, γ=2, ρ_c=0.029V², floor=Ω_m | 248.85 | 24% |
| **Newton (C=1)** | **465.43** | 8% |
| L2 RG, Cesare+20 (ε₀=0.089, q=0.47) | 715.74 | 17% |
| L2 RG, "Pass 4 quoted" (ε₀=0.09, q=0.7) | 1252.43 | 10% |

**Three things follow, and the second is the one nobody expected.**

**(a) Re-basing L3 → L2 does not rescue the galaxy sector.** The best *published* parameter
set under the framework's own field equation is 5× worse than parameter-free MOND, and wins
only 30% of galaxies.

**(b) Solving the real field equation makes the fit WORSE than the division-law shortcut** —
in five of six cases, and by up to 7×:

| model | χ²/N under **L2** | χ²/N under **L3** |
|---|---|---|
| Jeans γ=0.489, ρ_c=0.161 | 333.77 | **165.61** |
| Jeans γ=2, ρ_c=0.161 | 231.76 | **148.75** |
| RG E0-fit ε₀=0.089 | 1947.14 | **279.11** |
| framework γ=0.489, ρ_c=0.01, floor=0.089 | 2559.70 | **237.98** |
| site γ=2, ρ_c=0.029V² | 476.92 | 476.07 |
| RG DMS-unique ε₀=0.666 | **362.74** | 557.24 |

This inverts the usual reading of the L2/L3 fork. The site's refutations were run on L3, and
Pass 4's objection was that L3 is not the framework's law. **It is not: L3 is the framework's
law's *flattering approximation*.** The correction runs the wrong way for the framework — so
every L3-based refutation on the site is, if anything, *conservative*. This is the seventh
catch in this program of an error whose direction was assumed and never checked, and the
first one that lands in the **under**-refuting direction.

**(c) The mechanism is visible.** L2's non-locality pushes the boost *up* toward the ceiling
faster than L3 does (median `B_L2/B_L3` = 1.12–3.48), because the PDE lets low-`C` outer
regions raise the field over the whole disc. But the ceiling is where the data already say
the model is short: the *required* median max boost is **5.10** against a delivered ceiling of
`1/ε₀`. Under `floor = Ω_m` the delivered median max boost is 3.19 against a ceiling of 3.17 —
**the model is pinned against its own ceiling in the median galaxy, and 77% of galaxies need
more than it can deliver.** So pushing `B` up faster does not help; it saturates sooner.

That last observation is what makes Part II necessary. Everything in Part I is conditional on
the ceiling being `1/Ω_m = 3.17`.

---

## Part II — the ceiling freed

### 4. The claim under test

Visitor Pass 4, 2026-08-30, Finding 1.2 — the sharpest rescue this program has been offered:

> "The boost ceiling is a fitted parameter, not a cosmological identity. In RG the maximum
> boost is exactly 1/ε₀, and ε₀ is *fitted* — the literature values sit around 0.56–0.67. The
> site instead asserts B ≤ 1/Ω_m = 3.17 … from a cosmological mass fraction with no locality
> argument. **Two of the six refutations rest entirely on this ceiling.** If ε₀ is free,
> TEST-09 and TEST-10 are not refutations of the framework — they are measurements of ε₀, and
> SPARC's f_DM = 0.927 measures ε₀ ≈ 0.073, which is the interesting number and is nowhere on
> the site."

**The logic of the first half is valid and the site is wrong.** TEST-10's kill, as published,
reads: *"SPARC's maximum observed f_DM = 0.927 requires a boost B ≥ 1/(1−0.927) = 13.7, and no
candidate cosmic ratio supplies it."* That argument rules out **ε₀ = Ω_m**. It does not rule
out the model, because in the prior art the equation actually belongs to
(Refracted Gravity, Matsakos & Diaferio 2016 — established here 2026-08-25) `ε₀` is not a
cosmic ratio at all. It is a free constant of the theory. The site's own audit already flags
`B_max = 1/Ω_m` as underived (`project_boost_ceiling_underived_class_exclusion`); Pass 4's
contribution is to notice that *if it is underived, then TEST-10 has no premise.*

**But "free parameter" and "unconstrained" are different words.** `ε₀` is a *universal
constant* of the theory — the permittivity of the vacuum, in the theory's own analogy. It has
one value. So Pass 4's reframing is exactly right and it converts a rhetorical dispute into a
measurement with a sharp consistency condition:

1. What `ε₀` do the **full rotation curves** prefer?
2. Is that the **same** `ε₀` the tail galaxy (f_DM = 0.927 → ε₀ ≤ 0.073) demands?
3. Do SPARC galaxies agree with **each other** about `ε₀`, as a universal constant requires?

### 5. The ceiling, measured

The 08-28 grid scanned `floor ∈ {0.05, 0.089, 0.15, 0.315, 0.661}`, but its three lowest rows
bottomed out **on the left grid edge and were still falling** — unconverged, and unconverged
in the direction that would have favoured Pass 4. Today's run extends `ρ_c` by 7 further
decades (`epsilon0_left_edge_convergence.py`) until every row turns over. It must turn over:
the framework form has `C → 1` (Newton) as `ρ_c → 0`, so each row is bounded below.

**Converged ε₀ profile under L2**, framework form, `γ = 0.489`, `ρ_c` profiled freely,
`Υ_disk = 0.5` fixed, 3,035 points on 153 galaxies:

| `ε₀` | ceiling `1/ε₀` | best χ²/N | | |
|---|---|---|---|---|
| 0.050 | 20.0 | 221.9 | | |
| **0.073** | **13.7** | **194.3** | ← the value Pass 4's rescue requires | **+67.8** |
| 0.089 | 11.2 | 182.7 | ← RG, Cesare+20 | +56.2 |
| 0.120 | 8.33 | 157.3 | | +30.8 |
| 0.156 | 6.40 | ~138.5 | ← the `Ω_m/Ω_b` convention | ~+12 |
| **0.220** | **4.55** | **126.5** | ← **measured optimum** | — |
| 0.315 | 3.17 | 133.8 | ← the site's `1/Ω_m` | +7.3 |
| 0.420 | 2.38 | 170.9 | | +44.4 |
| 0.560 | 1.79 | 263.6 | ← RG, DMS-mean | +137 |
| 0.661 | 1.51 | 346.7 | ← RG, DMS-unique | +220 |
| — | — | 635.97 | Newton | |
| — | — | **52.21** | **MOND simple μ, 0 free parameters** | |

**Pass 4 asked for the number and here it is: `ε₀ = 0.22`, boost ceiling `B_max = 4.6`.**
It is a clean interior minimum, bracketed on both sides, and it is the first time this
quantity has been measured rather than asserted.

Four things follow.

**(a) The rescue is excluded by the thing it was invoked to rescue.** TEST-10's tail galaxy
(f_DM = 0.927) needs `B ≥ 13.7`, i.e. `ε₀ ≤ 0.073`. The rotation curves put that at
**Δχ²/N = +67.8** above the optimum — over 3,035 points, and in the same direction for every
`ρ_c`. The two constraints do not intersect. **This is a squeeze, structurally identical to
the Cassini/SPARC squeeze the site already carries as TEST-25**: the `ε₀` the outer-disc data
measure and the `ε₀` the DM-fraction tail demands are different by a factor of 3.

This is a *better* refutation than the one on the site, and it should replace it. The
published TEST-10 argues *"no candidate cosmic ratio supplies B = 13.7"* — an argument from a
premise (that `ε₀` must be a cosmic ratio) that the prior art explicitly denies, and that the
site's own audit already flags as underived. Pass 4 is right that **the published form of
TEST-10 is a non-sequitur.** The form that survives makes no appeal to cosmology at all:

> The boost ceiling `1/ε₀` is a free universal constant. SPARC rotation curves measure
> `ε₀ = 0.22` (`B_max = 4.6`) under the framework's own field equation, with a bracketed
> interior minimum. SPARC's maximum observed `f_DM = 0.927` requires `B_max ≥ 13.7`,
> i.e. `ε₀ ≤ 0.073`, which the same curves disfavour by Δχ²/N = +68. The model class needs
> two different values of a constant that has one value.

**(b) The `Ω_m` vs `Ω_m/Ω_b` dispute was on the wrong axis.** The site has spent since
2026-07-28 arguing whether `B_max` is `1/Ω_m = 3.17` or `Ω_m/Ω_b = 6.40`; that dispute decides
whether TEST-10's *median* result survives. Measured, **both sit inside the basin** —
Δχ²/N = +7.3 and ≈ +12 respectively, against a gap to MOND of **+74**. The convention question
is 6–10× smaller than the question nobody was asking. `feedback_ask_what_the_symbol_is_a_function_of`,
third instance.

**(c) A fair point for the framework, stated plainly.** The site's underived `B_max = 1/Ω_m`
lands **1.4× from the measured optimum** and is the second-best entry in the table. That is a
better showing than "underived" implies, and better than every published Refracted Gravity
value: RG's own DMS parameters (`ε₀` = 0.56, 0.661) are the two *worst* rows in the profile,
disfavoured by Δχ²/N = +137 and +220. **Under the framework's field equation, on SPARC, the
framework's guessed ceiling beats Refracted Gravity's fitted one by a wide margin.** RG's
parameters were fitted to 30 DiskMass galaxies with a different `Υ`, distance and inclination
treatment, so this is not a refutation of RG — it is a statement that the two parameter sets
are not transferable, which is `project_refracted_gravity_parameters_misattributed_dms_vs_e0`
measured rather than argued.

**(d) None of it closes the gap.** At its own measured best, with **two fitted parameters**,
the class sits at χ²/N = 126.5 against parameter-free MOND's 52.21 — **2.4× worse.** Freeing
the ceiling moved the class from 5× worse to 2.4× worse. It did not change the verdict.

### 6. A trap I walked into, and the control that caught it

Next I asked the maximally generous version: let **every galaxy choose its own** `(ε₀, ρ_c)`.
The result looked like a rescue:

| | χ²/N | median reduced χ² | wins |
|---|---|---|---|
| L2 class, per-galaxy `(ε₀, ρ_c)` free | **18.69** | 3.17 | **85%** |
| MOND simple μ, 0 free parameters | 52.88 | 10.51 | — |

Paired Wilcoxon p = 1.4e-19, in the class's favour. Taken at face value this says the density-
keyed class *beats* MOND. **It does not, and quoting it would have been this program's seventh
over-claim — the first in the optimistic direction.** The comparison hands the class **306
free parameters and MOND zero.** The standard SPARC MOND fits (Li+2018) marginalise `Υ`,
distance *and* inclination per galaxy — 2–3 free parameters per galaxy — and reach median
reduced χ² ≈ 1–2, better than the 3.17 above.

So the fair test is **parameter-matched**, and it happens to be the sharpest test available,
because **both theories claim a universal constant**:

> Synchronism / Refracted Gravity: `ε₀` (ceiling `1/ε₀`) — one value.
> MOND: `a₀` — one value.

Give every galaxy **one** free constant. Let it measure `ε₀`; separately, let it measure `a₀`.
`ρ_c` is held at the global optimum so the class gets exactly one free parameter, matching
MOND's one. Same points, same pipeline, same nuisance treatment
(`scripts/universality_eps0_vs_a0.py`).

| | universal constant (as claimed) | per galaxy, 1 free constant | wins |
|---|---|---|---|
| L2 class (`ε₀`) | χ²/N = **126.53** at ε₀ = 0.220 | χ²/N = **39.70**, median red. χ² 9.64 | 21% |
| MOND (`a₀`) | χ²/N = **52.22** at a₀ = **1.202e-10** | χ²/N = **10.30**, median red. χ² 2.63 | 79% |

**The 85% win evaporates to a 21% loss the moment the parameter counts are matched.** MOND is
3.9× better per-galaxy and 2.4× better globally. And note the pipeline's own validation:
profiling `a₀` freely over 1.9 dex returns **1.202e-10**, the literature value to 0.2%.

### 7. The result: `ε₀` is not a universal constant, and what it is instead

The fit quality above is the less interesting half. The **scatter of the fitted constant** is
the test of whether you are looking at a theory or at a curve fit:

| constant | median | 16–84% spread | at grid edge | Δχ² bought by abandoning universality (152 dof) |
|---|---|---|---|---|
| **`ε₀`** | 0.050 | **1.197 dex** (×16) | **42%** | 263,527 = 1734 / dof |
| **`a₀`** | 9.66e-11 | **0.619 dex** (×4.2) | 2% | 127,226 = 837 / dof |

`ε₀`'s per-galaxy measurements span **a factor of 16**, with 42% of galaxies wanting a value
outside the scanned range entirely; `a₀`'s span a factor of 4.2 with 2% at the edge. The class
needs **2.07× more** χ² relief from abandoning universality than MOND does.

*(The per-galaxy `ε₀` median moves from 0.22 to 0.05 between §6's two-parameter and this
one-parameter treatment — `ε₀` and `ρ_c` are strongly degenerate, and the median is not a
robust output. The **scatter** is: 0.55 dex with `ρ_c` co-fitted, 1.20 dex at matched
parameter count. Quote the second; it is the one MOND's single parameter can be compared to.)*

**And the scatter is not noise. It is a systematic the theory does not contain.** Correlating
each galaxy's fitted constant against what SPARC knows about that galaxy (Spearman):

| observable | ρ_s(`ε₀`) | p | | ρ_s(`a₀`) | p |
|---|---|---|---|---|---|
| **log M_bar** | **+0.758** | **7e-30** | | +0.073 | 0.37 |
| log V_flat | +0.634 | 1e-18 | | +0.278 | 5e-04 |
| log R_disk | +0.559 | 6e-14 | | +0.018 | 0.83 |
| **log ρ_mid** | **+0.162** | **0.046** | | +0.033 | 0.69 |

This is the finding.

> **The framework's boost ceiling is not a constant — it is a function of baryonic mass.**
> Measured per galaxy, `ε₀` tracks `M_bar` at ρ_s = +0.76 (p = 7e-30). MOND's `a₀`, measured
> the same way on the same galaxies through the same pipeline, tracks `M_bar` at +0.07
> (p = 0.37) — consistent with zero. The framework's "universal constant" is absorbing a mass
> dependence the theory does not have.

Three things make this sharp rather than suggestive:

**(a) It is differential, so distance errors cannot fake it.** A distance error rescales both
`M_bar` and `V`, and would induce a spurious correlation — but it would induce it for `a₀`
too, through the same pipeline, on the same galaxies. `a₀` shows nothing. The control is built
into the design.

**(b) 42% censoring at the grid edge *weakens* the measured correlation.** +0.758 is a lower
bound.

**(c) The theory keys on the wrong variable, and this measures it.** `ε₀` correlates with
**local density — the variable `C(ρ)` is actually a function of — at only +0.162 (p = 0.046)**,
and with **mass at +0.758**. That is the `g_bar → ρ` substitution, which
`project_gbar_to_rho_substitution_never_evaluated` records as *"the entire difference from
MOND, never evaluated,"* evaluated: the substitution keys the modification to the quantity
that carries the least information about what the residual needs.
`project_rho_g_lever_is_log_size` said the ρ-vs-g lever is `log(SIZE)`; here the lever
measures out as `log(MASS)`, at 4.7× the correlation strength of the density it replaced.

### 7b. Does the nuisance treatment change any of it? No.

The largest stated weakness of this pipeline is that distance and inclination are not
marginalised, which is why MOND sits at χ²/N ≈ 21–52 instead of the literature's reduced χ² ≈ 1–2.
The guard against that is to check whether the **ratio** — the only thing claimed here — moves
when the nuisance treatment changes. Re-running the basin with `Υ_disk` marginalised on **both**
sides:

| `Υ` treatment | class, universal `(ε₀, ρ_c)` | MOND | ratio |
|---|---|---|---|
| `Υ = 0.5` fixed | 126.53 | 52.22 | **2.42×** |
| `Υ` profiled {0.3, 0.5, 0.7} | 54.11 | 21.25 | **2.55×** |

Both sides gain a factor ≈ 2.4 from `Υ` freedom and **the ratio is preserved.** The measured
`ε₀` is likewise stable: median 0.220, 16–84% [0.120, 0.315]. This does not prove the ratio
survives *distance* and *inclination* marginalisation — that is untested and remains the honest
open flank — but the one nuisance that could be varied here moved both models together.

### 8. What this does and does not do to the ledger

**No refutation count moves, and one refutation must be re-argued rather than retracted.**

- **TEST-10 as published is a non-sequitur and Pass 4 is right about that.** *"No candidate
  cosmic ratio supplies B = 13.7"* assumes `ε₀` must be a cosmic ratio; the prior art this
  equation belongs to says it is a fitted constant, and the site's own audit already flags
  `B_max = 1/Ω_m` as underived. **The published argument should be replaced, not defended.**
- **The kill survives in a stronger, cosmology-free form** — the two-sided squeeze of §5(a),
  plus the universality failure of §7, which is independent of `ε₀`'s value altogether.
- **The `Ω_m` vs `Ω_m/Ω_b` convention dispute is now measured and it is 6–10× smaller than the
  gap to MOND.** It should stop consuming maintainer P0s.
- **A fair point for the framework:** its guessed ceiling `1/Ω_m` lands 1.4× from the measured
  optimum and beats every published Refracted Gravity value by a wide margin.

**Cost to our own prior work, stated first:**

1. `project_boost_ceiling_underived_class_exclusion` said `B_max ≲ 14` is *"excluded by SPARC
   dwarfs."* Measured, the exclusion is much tighter — `B_max = 4.6` — but the *argument* we
   used to get the 14 was invalid. **Right answer, wrong derivation.** Fix the derivation.
2. `project_galaxy_sector_is_nested_submodel_of_mond` — "MOND ∩ {B ≤ 3.17}, a strict submodel
   that could only tie or lose" — is **false under L2.** Solving the PDE is not the division
   law (§3b), the class is not nested, and it does not merely tie: it loses on its own best
   parameters. The nesting statement was about L3.
3. My own E3 today, the form-free sign test, **came back null and is recorded as a null**
   (§9).

### 9. Productive failure — the test I expected to be decisive, and why it could not be

I predicted the class would die on the *sign* of the radial trend: any monotone-increasing
`C(ρ)` gives a boost that falls with density, so the required boost must be anti-correlated
with local density in every galaxy. **Refuted.** Median Spearman(`ρ`, `B_req`) = **−0.837**,
the correct sign, with only 13% of galaxies wrong-signed and 3% significantly so.

More useful: the **same test on the acceleration variable gives −0.865 with 14% wrong-signed.**
`ρ` and `g_bar` are *indistinguishable* on this test — and they had to be. Within one galaxy
`ρ/g = 3/(4πGr)` exactly (`project_rho_g_lever_is_log_size`), and `r` is monotone, so any
**rank statistic computed within a galaxy is blind to the ρ↔g distinction by construction.**

**Lesson, and it generalises past this session:** the ρ-vs-g question cannot be asked with
within-galaxy rank statistics. It only lives in the *cross-galaxy normalisation* — which is
exactly where §7 found it, at +0.758 against +0.073. I spent the test to learn the test was
impossible; §7 exists because that failure told me where to look.

### 10. The functional form is not the problem — and that is the useful part

The last diagnostic locates the failure precisely. At each galaxy's **own** best `(ε₀, ρ_c)`,
regress `log(V_obs/V_pred)` on `log(R/R_disk)`. A systematic slope is a *radial shape* error —
the one thing no amplitude parameter can absorb.

| | median slope (dex/dex) | Wilcoxon p | median rms |
|---|---|---|---|
| L2 class, per-galaxy `(ε₀, ρ_c)` | **+0.0061** | 0.88 (consistent with zero) | **0.042 dex** |
| MOND simple μ, 0 free parameters | +0.0339 | 1.6e-03 | 0.067 dex |
| Newton | +0.1570 | 3.8e-17 | 0.238 dex |

Given a per-galaxy ceiling, the class reproduces the **radial shape** of SPARC rotation curves
with no detectable systematic tilt — better than parameter-free MOND, which retains a small but
significant one. (Same parameter-count caveat as §6: 2 per galaxy against 0.)

**So the density-keyed field equation is not failing because `tanh` is the wrong function, or
because `γ` is wrong, or because the boost saturates in the wrong place.** Every one of those
is fine. It fails on exactly one thing: **`ε₀` has to be the same number in every galaxy, and
it is not — it is a function of baryonic mass.**

That is a much more useful failure than "the class is excluded," and it names its own repair
condition. **The only escape left:** is the `ε₀`–`M_bar` relation tight and simple enough to be
stated as an extra relation of the theory? At ρ_s = +0.758 with 42% censoring it is neither
noise nor a clean power law yet. That is the sharpest open question in the galaxy sector, it
is one afternoon of work, and it is now seeded as a topic. If it is tight, the framework gains
a genuine structural difference from MOND — the first one that survives contact with data. If
it is not, the sector is closed by measurement rather than by argument.
