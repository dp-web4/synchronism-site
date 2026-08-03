# EFE = 0 survives the momentum objection — and surviving it is what exposes the real defect

**Session**: explorer, 2026-08-03
**Topic**: `explorer/topics/efe-zero-momentum-conservation-objection.md` (seeded by maintainer, same day,
from the 2026-08-03 leading-edge-researcher visitor pass)
**Script**: `explorer/findings/scripts/efe_zero_lagrangian_completion.py`
**Output**: `explorer/findings/scripts/efe_zero_lagrangian_completion_output.txt`
**Data**: none. Every number below comes from the site's own constants
(`src/app/galaxy-plotter/page.tsx`, `src/lib/equations.ts`) and its own toy disk.

---

## Verdict in four lines

1. **The momentum objection is REAL** for the formulation the site currently states — order-100 % third-law
   violation in exactly the galaxy regime the theory was built for. **But it is ANSWERABLE**, in one line, at
   negligible phenomenological cost. It is *not* a kill. Do not badge it as one.
2. The answering completion — `div[C(ρ) ∇Φ] = 4πGρ` — **preserves EFE = 0 exactly**, because it is *linear in
   Φ*. So EFE = 0 is not an artifact of missing dynamics. It is the signature of linearity in the potential.
3. **Linearity in Φ is the defect.** "A uniform external field does not change ρ" (⇒ EFE = 0) and "empty space
   has C = 0 however strong the field" (⇒ divergent exterior field) are *the same statement* about what C's
   argument is. The site's only surviving structural prediction and its worst pathology are one property.
4. Consequently: the substitution `/coherence-function` calls **"the entire difference from MOND"** — swapping
   μ's argument from g_bar to local ρ — **has never been evaluated numerically anywhere on the site.**
   Evaluating it changes the predicted rotation velocity by **2–5 orders of magnitude**, not by a fit-quality
   delta. Parameter-free, no data required.

---

## WAKE

**1. What am I inheriting?** The topic assumes the objection would, if it holds, "close the galaxy sector's one
surviving non-inherited claim." That framing wants a kill. It is the same shape as the two fabricated
refutations already on record (`project_test03_kill_manufactured`,
`project_session63_fabricated_064_rejection`) and the persona-manufactured P0 of 07-28. I inherited a
kill-shaped hypothesis from a persona, filtered through a maintainer who explicitly flagged the
persona-citation risk on the *other* topic he seeded the same morning. Treat it as a claim to be refuted first.

**2. What if the frame is wrong?** The program has produced ~7 a-priori closures in three weeks, all
parametric: *this number doesn't match*. None asked the prior question — **is there a dynamical theory here at
all?** That is the frame shift worth making, and it is what the momentum question is actually about. It also
means the answer might be "yes, and here it is" — which would be the first *constructive* result in the galaxy
sector since 07-29's repair matrix.

**3. Highest-information experiment?** Write down the completion and see what it costs. If a completion exists,
the objection dies and the completion's properties become the finding. If none exists, the objection is fatal.
Either branch is informative; only one of them is the one the topic expected.

**4. What would falsify the current posture?** The posture is "galaxy sector = MOND ∩ {B ≤ 3.17}, a strict
submodel that can only tie or lose" (07-28). That posture would be falsified by showing the ρ-substitution is
*not* a small perturbation of MOND — that it is a different theory that has never been run. Which is what
happened.

---

## Part 1 — The objection is real, and not even well defined as written

Under an algebraic law, the force between bodies A and B carries a multiplier evaluated at each body's own
local density:

```
F(A←B) = G m_A m_B / r² · K(ρ_A)
F(B←A) = G m_A m_B / r² · K(ρ_B)
```

The Newtonian factors are identical; the multipliers are not. The residual is a net force on the pair's centre
of mass. This is [Felten (1984, ApJ 286, 3)](https://ui.adsabs.harvard.edu/abs/1984ApJ...286....3F) applied to
a density-keyed rather than acceleration-keyed multiplier — Felten showed the momentum of an isolated system is
not conserved and the centre-of-mass theorem fails; Bekenstein & Milgrom (1984, ApJ 286, 7) responded with
AQUAL a year later.

**Result 1a — the violation does not depend on which of the site's two readings you take.** `/mond-unification`
says "an algebraic **C(ρ)·g** modification"; the f_DM = 1 − C identity on `/tier-1-existing` says **g/C**.
These are opposite. But

```
|1/C_A − 1/C_B| / max(1/C_A, 1/C_B)  ≡  |C_A − C_B| / max(C_A, C_B)
```

identically. The fractional third-law violation is invariant under K → 1/K. Verified numerically — the two
tables in the output are identical row for row. One less fork to adjudicate.

**Result 1b — the violation is order-100 % in the galaxy regime and zero in the solar system.** Fractional
third-law failure, γ = 2, ρ_crit = 653 M☉/pc³ (V_flat = 150):

| pair | ρ = own mean | ρ = ambient | ρ = MRH-smoothed |
|---|---|---|---|
| solar system, 1 AU | 0.0 % | 100.0 % | 0.0 % |
| star vs Galactic centre | 0.0 % | 100.0 % | 100.0 % |
| host vs satellite galaxy (MW/LMC) | 50.0 % | 50.0 % | 50.0 % |
| host vs dSph satellite (MW/Draco) | 0.0 % | 99.9 % | 99.9 % |
| disk vs globular cluster | 100.0 % | 99.0 % | 99.0 % |
| inner vs outer annulus, same galaxy | 99.0 % | 99.0 % | 99.0 % |

The solar system is safe under the boost reading only because C → 1 at high ρ — which is why no ephemeris test
has already excluded this class. Note the last row: the violation is *internal to a single galaxy*. Exact
axisymmetry cancels the net force; any lopsidedness does not.

**Result 1c — and this is the part worth carrying forward: the violation is not computable as the site is
written.** The three columns are three prescriptions for "local ρ" that the site nowhere distinguishes, and
they disagree by up to 20 orders of magnitude (Sun: 10¹¹ M☉/pc³ own vs 0.1 ambient). For Sun/Earth the answer
is 0 %, 100 %, or 0 % depending on which you meant. This is the **fourth unnamed-estimator instance** in this
ledger (ρ_crit V-exponent 07-29, boost-ceiling convention 07-27, EFE erratum trap, now this) and the memory
rule — *name the estimator and one alternative* — applies verbatim.

---

## Part 2 — A momentum-conserving completion exists, and it keeps EFE = 0

This is the result the topic did not anticipate.

```
S[Φ, matter] = ∫ d³x [ −(1/8πG) C(ρ) |∇Φ|²  −  ρΦ ]

  δ/δΦ   ⇒   ∇·[ C(ρ) ∇Φ ] = 4πG ρ                                  (★)
```

This is the standard Bekenstein–Milgrom "gravitational dielectric" structure with the interpolating function's
argument swapped from |∇Φ| to ρ — precisely the swap `/coherence-function` says *is* the framework. Three
properties, all elementary:

1. **Momentum is conserved.** S is invariant under rigid translations ⇒ Noether. Felten's objection is
   answered.
2. **It reproduces the algebraic law exactly in spherical symmetry.** Gauss on (★): `C(ρ(r)) g r² = G M(r)`,
   i.e. `g = g_N / C(ρ)`. The algebraic law is the spherical solution of a perfectly respectable field
   equation.
3. **EFE = 0 exactly, and for a sharp reason.** (★) is **linear in Φ** — C depends on ρ, not on ∇Φ. Linear ⇒
   superposition ⇒ a subsystem's internal solution is untouched by adding a uniform external field. Not an
   approximation; exact. By contrast AQUAL's `∇·[μ(|∇Φ|/a₀)∇Φ] = 4πGρ` is *nonlinear* in Φ, and Bekenstein &
   Milgrom derived the EFE from precisely that nonlinearity.

**The price, computed (Part C of the script).** Because C depends on ρ, varying the action with respect to the
matter degrees of freedom gives matter a force beyond −∇Φ: an effective potential
`Φ_eff = Φ + C′(ρ)|∇Φ|²/(8πG)`, i.e. a polarization force. This term appears in no galaxy-sector formula on
the site. Its size, at the site's own ρ_crit:

| galaxy | r (kpc) | \|f_pol\|/g |
|---|---|---|
| DDO 154 | 5.0 | 5.9 × 10⁻⁶ |
| NGC 2403 | 11.0 | 5.5 × 10⁻⁶ |
| NGC 3198 | 20.0 | 1.4 × 10⁻⁶ |
| UGC 128 | 18.0 | 2.2 × 10⁻⁷ |
| NGC 7331 | 20.0 | 2.4 × 10⁻⁶ |

≤ 2 × 10⁻⁵ everywhere — because ρ_crit sits so far above the disk density that C′(ρ) is suppressed. Momentum
conservation costs essentially nothing observationally.

> **Verdict on the topic as posed: the objection is answerable. Reporting it as a kill would be an over-claim,
> and the site should not adopt it as one.** This is a productive negative — it protects the ledger from a
> seventh entry that would not survive audit.

*(Caveat, stated: the polarization-force term is a standard fluid variation and I have quoted it as a scaling
estimate. The ~10⁻⁵ magnitude is robust to its sign and to factors of order unity; the conclusion "negligible"
does not turn on the derivation's fine print.)*

---

## Part 3 — What the completion exposes: the substitution was never evaluated

Having a field equation makes the real problem visible in one sentence.

**C(0) = tanh(γ · ln(0/ρ_crit + 1)) = tanh(0) = 0, exactly, for every γ and every ρ_crit.**

Under the dielectric reading C *is* the gravitational permittivity. A medium with ε = 0 supports an infinite
field. Every isolated body has a matter-free exterior. And the reason is the same one that gives EFE = 0:

> **C's argument is insensitive to the field.** That single property says both "a uniform external field does
> not change ρ" (EFE = 0 — the site's one surviving structural claim) and "empty space has C = 0 however strong
> the field" (divergent exterior). **The prediction and the pathology are the same statement.**

This is also the mechanism behind MOND's success that the substitution deletes. In MOND, μ is evaluated on the
field it is determining — a low-acceleration region generates the boost that keeps the acceleration low. That
self-consistency loop is what produces flat curves. Keying on ρ hands the argument in from outside, where it
knows nothing about g, and the loop is gone.

### The numbers nobody had run

`/coherence-function` (2026-08-02) states plainly: *"the galaxy sector reduces to MOND, with μ's argument
swapped from the enclosed-mass acceleration g_bar to local density ρ. That single substitution is the entire
difference from MOND."* True. But **every quantitative galaxy result on the site — the γ = 0.489 free fit, the
ΔBIC = +7.1 / +184 form-selection table, the Cassini squeeze — was run with the argument g_bar.** The
substitution the site calls the entire framework has never itself been evaluated.

Evaluating it, on the site's own five plotter galaxies, its own γ = 2, its own ρ_crit = 0.029 V_flat²:

| galaxy | r_last | v_obs | **L1: g = g_N/C** | **L2: plotter** | **L3: g = C·g_N** |
|---|---|---|---|---|---|
| DDO 154 | 5.0 | 47 | 2.35 × 10³ | 12.9 | 0.071 |
| NGC 2403 | 11.0 | 136 | 1.24 × 10⁴ | 75.8 | 0.462 |
| NGC 3198 | 20.0 | 150 | 3.72 × 10⁴ | 71.0 | 0.136 |
| UGC 128 | 18.0 | 55 | 7.31 × 10³ | 9.8 | 0.013 |
| NGC 7331 | 20.0 | 250 | 2.34 × 10⁴ | 179.1 | 1.371 |

*(km/s. L1 = the law implied by the site's own f_DM = 1 − C identity. L2 = what
`src/app/galaxy-plotter/page.tsx` actually computes, v² = v_b² + (V_flat·C)². L3 = the literal
`/mond-unification` prose, "an algebraic C(ρ)·g modification".)*

**Three mutually exclusive force laws, all live on the site, all missing flat rotation curves — one high by
10²–10³×, one converging on Newtonian, one low by 10²–10³×.** This is the queued
`four-galaxy-formalisms-one-ledger` topic with the numbers attached.

### It is a functional-form failure, not a calibration failure

Required vs delivered boost across NGC 3198's disk, under L1:

| r (kpc) | ρ | C | 1/C delivered | 1/C required |
|---|---|---|---|---|
| 2 | 3.30e−1 | 1.01e−3 | 9.9 × 10² | 3.38 |
| 6 | 9.45e−2 | 2.90e−4 | 3.5 × 10³ | 2.36 |
| 10 | 2.71e−2 | 8.30e−5 | 1.2 × 10⁴ | 2.69 |
| 20 | 1.19e−3 | 3.65e−6 | 2.7 × 10⁵ | 4.46 |

A flat curve requires M_tot ∝ r, so the required boost grows roughly **linearly**, ~1 → ~4. ρ falls
**exponentially** in a disk, so the delivered boost 1/C grows **exponentially**, 10³ → 10⁵. No (γ, ρ_crit)
reconciles exponential with linear. Swept γ ∈ {0.25, 0.489, 1, 2, 4} × ρ_crit ∈ {10⁻⁴ … 10⁴}: the predicted
v at r_last spans 71 to 4 × 10⁵ km/s against a target of 150, and the only cells near target are the ones where
the modification has been turned off entirely (ρ_crit ≤ 10⁻⁴, where v → v_Newton = 71).

This is the **mean-relation** counterpart to the 2026-08-02 RAR-scatter no-go, which showed local density
carries ≤ 0.7 % of the residual variance. That result said the substitution cannot explain the *scatter*; this
one says it destroys the *mean relation* by 2–5 orders of magnitude. **Same substitution, different axis — this
is not a new refutation and must not bump the count from 6.**

---

## Part 4 — Collision with the asserted boost ceiling

`/parameter-derivations` item 8 asserts B_max = 1/Ω_m ≈ 3.17 as a structural ceiling (already flagged
UNDERIVED, 07-27). Under L1 the boost *is* 1/C, unbounded above by construction. The bisection for "radius
where B falls to 3.17" **has no root**:

| galaxy | ρ(r=0) | C(r=0) | B(r=0) | B(r_last) |
|---|---|---|---|---|
| DDO 154 | 2.70e−2 | 8.44e−4 | 1.19 × 10³ | 3.32 × 10⁴ |
| NGC 2403 | 5.85e−1 | 2.18e−3 | 4.59 × 10² | 2.70 × 10⁴ |
| NGC 3198 | 6.16e−1 | 1.89e−3 | 5.30 × 10² | 2.74 × 10⁵ |
| UGC 128 | 7.13e−3 | 1.63e−4 | 6.15 × 10³ | 5.54 × 10⁵ |
| NGC 7331 | 1.15e+0 | 1.27e−3 | 7.87 × 10² | 1.71 × 10⁴ |

C is already below 1/3.17 at the **disk centre**, the densest point of the model. The ceiling is exceeded by
2–5 orders of magnitude at *every* radius.

**Can a density floor rescue it?** Capping B at 3.17 requires C ≥ 0.3155, i.e. ρ ≥ 0.177 ρ_crit — a floor of
11–320 M☉/pc³, which is **10²–10⁴ × the densest point of the model disk** and ~10⁹ × the cosmic mean
(4.3 × 10⁻⁸ M☉/pc³). At the cosmic-mean floor the boost would be 10⁸–10¹⁰. No physical floor rescues the
ceiling.

Precise conclusion, stated narrowly: **B ≤ 3.17 is consistent with L2 (the plotter's law, where the extra term
is bounded by V_flat) and wildly inconsistent with L1 (the law the f_DM = 1 − C identity implies).** The ceiling
is not a framework-level statement; it is a statement about which of the three laws you meant, and the site
does not say.

---

## Self-audit

- **Did I over-refute?** The topic wanted a kill and I am reporting the kill *fails*. That direction is the
  right check on `project_directional_law_fails_null_reflexivity_predictor` — this session's headline is a
  negative on its own hypothesis, then a separate positive found downstream.
- **Is L1 fairly attributed?** L1 follows from f_DM = 1 − C + C ≡ μ, both of which the site states in its own
  words on `/tier-1-existing` and `/coherence-function`. I did not invent it. I also ran L3 (the literal prose)
  as a control and reported it.
- **Does the divergence depend on the toy disk?** No. Gauss's law on (★) gives ∮C∇Φ·dA = 4πG M_enc regardless
  of geometry, so |∇Φ| ~ GM/(⟨C⟩r²) for *any* mass distribution whose density falls outward. The exponential
  disk sets the *rate*, not the sign.
- **Does it depend on γ or ρ_crit?** No — swept, table above. C → 0 as ρ → 0 for every γ > 0.
- **What would falsify this finding?** A stated prescription in which ρ does *not* fall outward at the radii
  where rotation curves are measured (e.g. ρ meaning a halo-inclusive or MRH-scale density with a floor above
  0.177 ρ_crit). Part D3 prices that floor and finds it 10²–10⁴× the disk peak, but if the framework asserts
  such a prescription, this finding is scoped to the prescriptions it does state.
- **Prior-art gate: SCREENED, NOT CLEARED.** The dielectric analogy is standard (Bekenstein & Milgrom 1984 —
  μ *is* the gravitational permittivity in the literature). I searched for a density-keyed rather than
  acceleration-keyed interpolating function and found no direct precedent, but three prior searches in this
  program returned clean and were later contradicted by a real counterexample
  (`project_locality_nogo_counterexample_bcm2017`). I am **not** claiming (★) is novel; I am using it as a
  construction to test the site's claim. The screened-scalar class (chameleon/symmetron, and
  Burrage–Copeland–Millington 2017) is density-keyed and Lagrangian and is the obvious place a real
  counterexample would live — it evades this analysis by coupling *differentially*, exactly as the 07-27
  re-scoping of the locality no-go concluded.

---

## Action: Maintainer

| # | Pri | Page | Item |
|---|---|---|---|
| 1 | **P1** | `/mond-unification` | "an algebraic C(ρ)·g modification" is the *opposite* of the g/C the f_DM = 1 − C identity implies. One-word fix, but pick one and say which. |
| 2 | **P1** | `/mond-unification`, `/for-researchers` | State that EFE = 0 **survives** the momentum-conservation objection, via the linear-in-Φ field equation ∇·[C(ρ)∇Φ] = 4πGρ — and that the same linearity is why the exterior field diverges. This closes an open "incompleteness" with a specific answer rather than a gap. |
| 3 | **P1** | `/coherence-function`, `/galaxy-rotation` | The page says the g_bar → ρ substitution "is the entire difference from MOND." Add that **every quantitative galaxy result on the site was run with g_bar**, and that evaluating the substitution moves the prediction by 2–5 OOM. This is the single most load-bearing missing sentence found today. |
| 4 | **P2** | `/parameter-derivations` item 8 | B ≤ 3.17 is incompatible with g = g_N/C(ρ) at every radius including the disk centre (10²–10⁵×). State which force law the ceiling is a statement about. |
| 5 | **P2** | wherever "local ρ" appears in the galaxy sector | Name the prescription (own mean / ambient / MRH-smoothed) and one alternative. Fourth unnamed-estimator instance; the three readings differ by up to 20 OOM. |
| 6 | **P3** | ledger / footer | **Do NOT bump the refutation count.** Parts 3–4 are the mean-relation face of the same substitution the 08-02 scatter no-go already covers. |

**Back-annotation (research repo)**: register the dielectric completion (★) and the EFE = 0 ⇔ linearity-in-Φ
⇔ vacuum-singularity equivalence in `Synchronism/Research/proposals/`. It is the first galaxy-sector result
that is *constructive* (here is the field equation you were missing) rather than eliminative, even though its
consequence is negative.

**Topic to seed**: `differential-coupling-completion.md` — the one escape this analysis leaves open is a
coupling that is differential rather than algebraic in ρ (∇ρ, ∇lnρ), which is where Burrage–Copeland–Millington
2017 lives and which 07-28 partially explored (‖∇lnρ‖ = 1/R_d is constant in r, degenerate with passing in
V_flat). Does a *Lagrangian* differential coupling exist that is not degenerate? That is now the sector's only
un-eliminated constructive direction.

---

## So what?

The session's hypothesis failed: the momentum objection does not kill EFE = 0. Writing down the completion that
answers it is what produced the real result — **EFE = 0 and the divergent exterior field are the same
statement**, because both say C's argument cannot see the field. And that in turn made visible something a
month of parameter auditing had walked past: the site names one substitution as "the entire difference from
MOND" and has never once evaluated it. Its quantitative galaxy sector is MOND, run with MOND's variable. The
framework's own variable has been sitting unexecuted, in plain sight, behind a sentence that says it is the
whole point.

The rate-limiting step remains cross-multiplication, not measurement (07-29). But today adds a sharper version:
**the site's most confident structural sentences are the least likely to have been executed** — precisely
because they read as settled.
