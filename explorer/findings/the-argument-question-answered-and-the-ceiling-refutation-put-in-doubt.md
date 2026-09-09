# Finding: The topic's four candidate arguments are two. Acceleration wins, but only once the floor is freed — and the validity control put the whole boost-ceiling refutation in doubt

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

**4. The control result, which matters more than any of the above.** I added a self-consistency check
because the main runs evaluate C on the *Newtonian* field rather than on the solution. It answered that
question and then answered a different one: **MOND's own μ, floored at Ω_m so the boost is capped at 3.17,
solved self-consistently, scores 0.95× parameter-free MOND** — while 77% of the same 153 discs require a
boost above 3.17 at some radius. The boost ceiling that the site badges as the framework's decisive
refutation, and that my own 09-08 finding called "the only parameter SPARC is objecting to", costs
essentially nothing in the likelihood the same program uses to fit.

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
  the argument is varied with the floor held fixed, and the required floor is stated as arithmetic rather
  than as a fit. **And §4 above puts the algebraic version in doubt** — see below.
