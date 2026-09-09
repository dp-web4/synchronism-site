# Finding: The topic's four candidate arguments are two. Acceleration wins, but only once the floor is freed. And the boost ceiling is refuted *radius-gradedly* — a claim I nearly published backwards

## Origin

Topic `argument-of-c-which-variable-puts-the-switch-outside-the-disc.md` (maintainer 2026-09-09), from
`Research/proposals/sparc_objection_is_placement_not_the_ceiling_20260909.md`. It asks which argument to
C — Σ, an MRH-smoothed ρ, g_N, or the compander form — puts the transition where the discs want it, and
asks for the head-to-head on one likelihood, same Υ profiling, same solver.

## Summary

Answered, on the framework's own L2 field equation, 153 SPARC discs, identical solver / grid / Bershady
scale height / Υ-profiling / likelihood to the 2026-09-08 run. Then a validity control I added produced
something larger than the answer.

**1. Three of the four candidates are one candidate, exactly.** ρ_mid(R) = Σ(R)/2h identically in this
mass model — measured within-galaxy spread of ρ/(Σ/2h) is **1.0000** median, above 5% in only 19 of 153
discs (the bulged ones, where the Abel-deprojected bulge breaks the slab identity). An MRH-smoothed ρ at
λ = 1 kpc equals Σ/2λ to **0.4%**. The three are the same function of R under a per-galaxy knee shift of
2h, and h spans only ×18.9 across the sample. The list has **two** members: a baryon-local scalar, and
acceleration.

**2. At the framework's own floor the argument barely matters. Free the floor and it is the whole story.**
Best knee per argument, Υ-profiled χ²/N, against parameter-free MOND simple-μ at 21.25:

| argument | best at floor = Ω_m = 0.315 | × MOND | best at floor = 0.089 | × MOND |
|---|---|---|---|---|
| g_N (acceleration) | **55.42** (γ=2, 3.2 a₀) | 2.61 | **31.27** (γ=0.489, 0.32 a₀) | **1.47** |
| ρ̄(<r) mean interior density | 58.97 | 2.78 | (see table below) | |
| ρ local density (the incumbent) | 68.49 | 3.22 | 169.85 or worse | ≥ 8.0 |
| ρ_MRH (λ = 1 kpc) | 73.95 | 3.48 | | |
| Σ surface density | 78.25 | 3.68 | | |

At the Ω_m floor the whole argument axis spans a factor of **1.41**. At RG's floor of 0.089 the same axis
spans more than **5×**, and acceleration keying reaches **1.47× parameter-free MOND** — the best any
member of this family has scored in this program. Nothing else does.

**3. Pre-registered expectations, scored.** E1 ("at floor = Ω_m every argument, g_N included, lands ≥ 3×
MOND") is **refuted** — g_N lands at 2.61×. E2's ordering (g_N best, ρ̄ second, the three baryon-local ones
clustered last) is **confirmed**, and its magnitude claim ("g_N within 2× at the freed floor") is
confirmed at 1.47×. E3 (Σ and ρ optima coincide under a knee shift of 2h) is **untested** — the knee grids
step by ~24× and the two optima sit one step apart.

**4. A near-miss caught inside the session, and what survived it.** I added a self-consistency check
because the main runs evaluate C on the *Newtonian* field rather than on the solution. On its 51-disc
subsample it reported that MOND's own μ, floored at Ω_m so the boost is capped at 3.17, scores **0.95×**
parameter-free MOND — while 77% of the 153 discs require a boost above 3.17 somewhere. That would have
made the boost ceiling — the site's badged refutation, S684's fork, and my own 09-08 "the only parameter
SPARC is objecting to" — **invisible to the likelihood the same program fits with.** I drafted it as this
session's headline, then ran the full-153 radial decomposition it implied.

**The full sample reverses it.** Self-consistent, Υ_disk = 0.5 fixed, 153 discs:

| model | all | inner half | outer half | last 2 points | deficit at R_last | median error there |
|---|---|---|---|---|---|---|
| MOND μ algebraic (the reference the other tables use) | 52.21 | 42.99 | 61.01 | 26.53 | −6.5% | 5.2% |
| MOND μ, field equation, B_max = 50 | 51.48 | 39.89 | 62.54 | 20.32 | −3.6% | 5.2% |
| MOND μ, field equation, B_max = 11.2 (f = 0.089) | 51.45 | 39.89 | 62.48 | 20.27 | −3.5% | 5.2% |
| **MOND μ, field equation, B_max = 3.17 (f = Ω_m)** | **83.23** | **61.17** | **104.29** | **62.38** | **+14.1%** | 5.2% |

The ceiling costs **1.62×** in total χ², not 5%. The pre-registered hypothesis — *the deficit hides at the
outermost radii where SPARC's fractional errors are largest* — is **confirmed in direction and refuted in
degree**: the penalty is 1.53× on the inner half, 1.67× on the outer half and **3.08× on the last two
points**, with a **+14.1% median velocity deficit at the outermost fitted radius against a 5.2% median
error there**. It is graded by radius, but it does not hide well enough to be invisible.

Two things survive. First, **the boost-ceiling refutation stands**, and this is an independent
confirmation of it under the field equation rather than algebraically on RAR residuals. Second, it now has
a sharper form than S684's: not "the RAR shape excludes B_max = 3.17" but *"a ceiling of 3.17 leaves a
14.1% median velocity deficit at the last measured point of a SPARC disc, against 5.2% errors"* — a
statement in the units an observer checks.

Third, and the reason this section exists at all: **a control run on a subsample is a control on the
subsample.** This is the tenth near-miss in the record and the first caught before publication by a test
the finding itself designed, rather than by the next morning's session.

## Research Notes

### WAKE: the topic's question is malformed at the Ω_m floor, and it proposed four candidates that are two

The 09-08 run reports `medReq = 5.10` identically in all 32 rows, because it is the median over discs of
the maximum required boost V_obs²/V_bar² — data, not model. The delivered maximum is set by the floor. So
at the Ω_m floor the amplitude verdict is fixed before the argument is chosen, and the decisive control is
C keyed on g_N at floor = Ω_m: MOND's own argument, the framework's own floor. The topic is right that
placement is the residual problem; it did not state that its own question only becomes live once the floor
is freed. (The independent data-only script gives 5.14 for the same statistic; the 0.04 difference is the
solver's grid-transfer guard, which keeps only points where the grid's g_N is within 0.5 dex of SPARC's
g_bar.)

### The floor SPARC demands, as catalogue arithmetic

In g = g_N/C with C ≥ f the largest available boost is ~1/f, so a disc requiring more at any radius cannot
be fitted at that floor — whatever C is a function of, wherever the knee sits, whatever γ is:

| Υ_disk | median B_req,max | p90 | floor admitting 50% | 75% | 90% | 100% |
|---|---|---|---|---|---|---|
| 0.3 | 6.92 | 16.11 | 0.1444 | 0.0966 | 0.0621 | 0.0176 |
| **0.5 (SPARC standard)** | **5.14** | **10.01** | **0.1947** | **0.1364** | **0.0999** | **0.0163** |
| 0.7 | 4.18 | 8.53 | 0.2391 | 0.1690 | 0.1173 | 0.0357 |
| 1.0 | 3.19 | 6.99 | 0.3130 | 0.2160 | 0.1431 | 0.0588 |

Fitting 90% of the sample at the SPARC standard needs f ≤ 0.100. The framework's floor is Ω_m = 0.315;
the most permissive candidate the archive has ever enumerated is Ω_b/Ω_m = 0.157
(`boost_ceiling_exclusion_already_in_repo_and_ml_robustness_20260730.md`), and
`boost_ceiling_provenance_and_class_exclusion.md` records that 1/Ω_m "is nowhere derived… it is asserted"
— Session 218 and `THEORETICAL_STATUS_DEC2025.md` §Derivation 1 justify it by analogy. So the 09-08
self-seeded question — *is there any derivation route in the archive to a floor below ~0.1?* — is
answered: **no.** Cross-check: `need>` in the ρ rows at the Ω_m floor is 77%, against the 2026-07-30
proposal's independently computed **118/153 = 77.1%**.

### The slope diagnostic, and an expectation inverted by measurement

Fit-free. SPARC's outer curves need d ln B_req/d ln R = **+0.441** (median over 148 discs, p25 +0.083,
p75 +0.707). A floored tanh delivers at most max_x|d ln C/d ln x| × |d ln X/d ln R|:

| | γ = 0.489 | γ = 2 |
|---|---|---|
| max \|d ln C/d ln x\| at floor 0.315 | 0.279 | 0.377 |
| max \|d ln C/d ln x\| at floor 0.089 | 0.538 | 0.657 |

| argument | median d ln X/d ln R | p10 | p90 | max deliverable d ln B/d ln R | % discs capable |
|---|---|---|---|---|---|
| ρ | −2.217 | −7.888 | +0.124 | 1.193 | 93% |
| Σ | −2.234 | −7.888 | +0.124 | 1.201 | 93% |
| ρ_MRH | −2.224 | −7.888 | +0.124 | 1.196 | 93% |
| g_N | −1.052 | −2.015 | +0.804 | 0.683 | 72% |
| ρ̄(<r) | −2.224 | −2.793 | −1.365 | 1.196 | 98% |

I pre-registered that g_N would be the most slope-capable argument because it falls as a power law while
baryon-local scalars fall exponentially. **The measurement inverts it**: over the outer half of each curve
the baryon-local scalars are steeper (−2.22 vs −1.05) and g_N is the *least* capable of the five. The
asymptotic intuition does not survive contact with the fitted radial range, where an exponential disc's
density is a power law of index ~−R/R_d. The diagnostic does not discriminate (72–98% pass a deliberately
generous bound); its value is establishing that **slope capability is not what separates these arguments**
— which is why the Ω_m-floor spread comes out at only 1.41.

### Σ is not a well-posed argument in three dimensions

Σ(R) has no z-dependence, so C(Σ) never returns to its floor above the disc and the far-field boundary
condition the solver needs contradicts the interior field Σ defines. The rows are reported, but the
well-posed version of "key on the disc's own column" is the MRH-smoothed density, which equals Σ/2λ in the
plane and decays correctly out of it. That the two land 5% apart in best χ² (78.25 vs 73.95) says the
inconsistency is not what makes Σ lose.

### Prior art, screened

- **Cesare, Diaferio, Matsakos & Angus 2020** (A&A 637 A70, arXiv:2003.07377) fit Refracted Gravity — a
  density-keyed permittivity with a floor ε₀, the same model class — to 30 DiskMass Survey galaxies. Their
  abstract states verbatim that "the RG models underestimate the observed accelerations of **0.1–0.3 dex
  at low Newtonian accelerations**." Same failure mode, same magnitude and sign, in the class's founding
  paper. **They do not attribute it to the floor**, and they never ran SPARC. The diagnosis and the sample
  are what is new; the symptom is not.
- **Session 684** already establishes the boost-ceiling fork algebraically on RAR residuals (B_max = 3.17
  refuted by RAR shape, B_max → ∞ ≡ MOND, anti-correlated). New here: it is done in the field equation,
  the argument is varied with the floor held fixed, the required floor is stated as catalogue arithmetic
  rather than as a fit, and the penalty is decomposed by radius. S684's conclusion is **confirmed**, by a
  route that could have contradicted it and briefly appeared to.

### Solver validity — what could and could not be checked

The self-consistency check doubles as the first validation this pipeline has had. Results, and their
limits:

- **The solver reproduces MOND.** MOND's μ, solved self-consistently in the field equation at a working
  floor (B_max = 50), gives χ²/N 51.48 against the algebraic reference's 52.21 — **1.4%**. Every
  framework-vs-MOND comparison in this archive scores a field-equation model against an algebraic MOND;
  that this is fair had never been checked before today.
- **The unfloored limit is not computable.** At floor 1e-6 the same model gives 7.19× and does not
  converge (max remaining ΔC/C = 8.8×10⁻³ after 12 damped iterations). The suspect is the outer Dirichlet
  condition Φ → −GM/(C_min r), which presumes a constant far-field C that an unbounded μ does not have.
  **No row at floor ≲ 0.01 anywhere in this archive is interpretable**, and the topic's fourth candidate —
  *isolate the compander form by removing the floor* — **cannot be tested with this solver.** That is a
  negative result about the tooling, and it is the honest answer to that quarter of the topic.
- **One-shot vs self-consistent is model-dependent in sign and cannot be corrected by a factor**: at floor
  Ω_m, MOND's μ improves 111.69 → 71.68 while the compander at the same floor *worsens* 86.89 → 107.72.
  All acceleration-keyed rows in the tables above are one-shot; all density-keyed rows are unaffected
  (ρ is not a function of the solution). **The head-to-head is therefore biased between its two halves by
  an amount that is not constant and whose direction is model-dependent.** The 1.41 and 5× spreads should
  be read as ordinal, not as measurements.

## Scripts and artifacts

Every table above is a view of one of these; each has its `_output.txt` beside it in
`explorer/findings/scripts/`.

| script | what it produces |
|---|---|
| `argument_of_C_head_to_head_l2.py` | Part A (the Σ/ρ/ρ_MRH identity, the slope diagnostic) and the five-argument × five-knee × two-floor head-to-head |
| `the_floor_is_the_whole_difference_gN_keyed.py` | the acceleration-keyed floor scan, γ ∈ {0.489, 2}, g_c ∈ {0.1, 0.32, 1, 3.2} a₀, f ∈ {0.315, 0.089, 0.02, 1e-3} |
| `the_floor_sparc_demands.py` | the floor SPARC demands, catalogue arithmetic, four Υ_disk |
| `aqual_fixed_point_check.py` | one-shot vs self-consistent, and the solver validity control |
| `ceiling_vs_likelihood_where_does_the_boost_deficit_hide.py` | the full-153 radial decomposition that refuted §4's first draft |

Machinery reused unchanged from the 2026-08-28 / 2026-09-08 runs: `l2_sparc_core.py`,
`l2_field_equation_on_sparc.py`.

## Implications for the Site

The site currently closes the density-keyed sector on the ceiling. The topic argued that is the wrong
close because it invites the reader to think a better ceiling would fix it. Both are half right, and the
measurement says which half:

- The ceiling close is **correct and now better quantified** — but it should be stated as a velocity
  deficit at the outer curve (14.1% at R_last against 5.2% errors), not as a χ² ratio, because the χ²
  ratio understates it by grading over radii where the model is fine.
- The *keying variable* close is **also correct, and it is the stronger of the two**, because it survives
  freeing the floor: at f = 0.089 the density-keyed law is ≥ 8× MOND and acceleration keying is 1.47×.
  A reader who imagines a better ceiling gets a worse fit, measured.
- Three of the four repairs a reader might imagine (Σ, MRH-smoothed ρ, local ρ) are **the same repair**.
  Saying so is more useful than listing them, and it is exact rather than approximate.

## Action: Maintainer

1. **P1** `/honest-assessment`, `/dark-matter`, `/parameter-derivations`: where B_max = 1/Ω_m is refuted,
   add the observer-facing form — *"a ceiling of 3.17 leaves a 14.1% median velocity deficit at the last
   measured point of a SPARC disc, against a 5.2% median measurement error there"* — and note it is
   radius-graded (1.53× inner half, 3.08× last two points). This is a strengthening, not a weakening.
2. **P1** The keying-variable statement should lead, and it should carry its precondition: *"at the
   framework's own floor the argument barely matters (a factor 1.41 across five candidates); free the
   floor and only acceleration works (1.47× MOND against ≥ 8× for local density)."*
3. **P2** Anywhere the site lists candidate arguments for C: Σ, MRH-smoothed ρ and local ρ are one
   candidate, not three — `ρ_mid = Σ/2h` exactly in a constant-scale-height disc.
4. **P2** The floor SPARC demands (f ≤ 0.100 for 90% of discs at the standard Υ) is a citable negative in
   the literature's own units, and it belongs beside the B_max ≤ 6.4 bound on `/for-researchers`.
5. **P3** Do not cite anything computed at a coherence floor below ~0.01 from this archive until the
   solver's far-field boundary condition is fixed. That includes the `nofloor … floor=1e-3` row in
   `l2_field_equation_on_sparc.py`'s model set.

## Open Threads

- **Fix the outer boundary condition.** Φ → −GM/(C_min r) assumes a constant far-field C. For an unbounded
  μ there is none. Until this is fixed the compander *form* cannot be isolated from its floor, which is a
  quarter of the topic left unanswered — and unanswerable, not merely unanswered.
- **Re-run the argument head-to-head self-consistently.** The one-shot bias is model-dependent in sign, so
  today's 1.41 and 5× spreads are ordinal only. Cost is ~12× the compute; worth it only for the best two
  or three cells, not the whole grid.
- ρ̄(<r) — the spherical mean interior density — is second-best at the Ω_m floor (58.97 vs g_N's 55.42) and
  was never on the candidate list. It deserves a proper knee scan at the freed floor.
- E3 (Σ and ρ optima coinciding under a knee shift of 2h) needs a knee grid finer than ×24 per step.
- The 19 bulged discs are the only place where Σ-keying and ρ-keying are genuinely different physics.
  They are a small, clean, pre-selected subsample for anyone who wants to separate the two.
