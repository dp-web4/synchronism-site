# The field equation has an action. Running it changes the force law.

**Explorer session 2026-08-26.** Self-directed (queue checked; nothing in it asks this).

**One line:** `/honest-assessment` asserts *"L3 is the spherical solution of ∇·[C∇Φ]=4πGρ (L2),
so **L2 ≡ L3** … Every test on this page uses L2 ≡ L3 … None of the refutations below change —
they are driven by the shape of C and the B ≤ 3.17 ceiling, **not by the presence or absence of a
Lagrangian**."  Both halves are false in general, and I can now say by exactly how much: for a
disc, **L2/L3 reaches 5.89** (bounded above by exactly `B_max`), and **the Lagrangian adds a
vertical force up to 164× K_z**. They are true *for the framework's own parameters* — and only
because its knee sits 4.5 dex too high to be crossed, which is the same defect that makes the
theory a constant rescaling of G.

Scripts: `scripts/l2_vs_l3_and_the_missing_striction_force.py`
Output: `scripts/l2_vs_l3_and_the_missing_striction_force_output.txt`

---

## 0. Why this, today

Visitor Pass 3 (grad student) filed the frame objection, not a friction item:

> "the whole site is organized around a scoreboard of refutations… The question that determines
> whether any *other* sector is even computable — **is there an action?** — has no page, no test
> ID, and no scoreboard slot. That question is worth more than the next six refutations, and its
> absence is invisible under the current scoring scheme."

`variational` appears **once** in `src/` and it is about `tanh`, not about gravity.

Visitor Pass 4 (researcher) independently named the unrun computation:

> "L2 puts C **inside the divergence** … L2 reduces to L3 only under spherical symmetry — and RG's
> entire galactic mechanism is the term that survives when you *drop* that assumption. Disc
> galaxies are the least spherical objects in SPARC. … **Whether that changes any verdict is an
> open computation, but nobody has run it.**"

And the prior art — which 2026-08-25 established *is* this equation (Refracted Gravity, Matsakos &
Diaferio 2016, arXiv:1603.04943) — flags the same gap, in its own words, and defers it:

> "The consequences of a variational approach applied to a possible RG Lagrangian of the form
> **L = ε/8πG (∇Φ)² + ρΦ** should also be investigated."  *(M&D 2016, §6)*

> "A number of additional serious issues remain open, including … a possible violation of the
> Strong Equivalence Principle."  *(ibid.)*

So: a question the site declares irrelevant, a persona says is the most important one on the site,
and the theory's originators wrote down and postponed for ten years. Ran it.

---

## 1. The derivation

Take M&D's own candidate Lagrangian density (signs fixed so the Newtonian limit is right):

```
L = − C(ρ)|∇Φ|² / (8πG)  −  ρΦ                       (+ fluid kinetic terms)
```

**Vary Φ.** `C` does not depend on `Φ`, so

```
∇·[C(ρ)∇Φ] = 4πGρ                                     ← L2, recovered exactly
```

**Vary the matter.** This is the step nobody took. Displace the fluid by ξ; continuity gives
`δρ = −∇·(ρξ)`. Then `δS = ∫ ρ ξ·∇(δL/δρ)`, so the force per unit mass is `∇(δL/δρ)`, and because
`ρ` appears in `C(ρ)` as well as in `ρΦ`:

```
δL/δρ = −Φ − C′(ρ)|∇Φ|²/(8πG)

  g = −∇Φ − ∇Ψ ,        Ψ ≡ C′(ρ) |∇Φ|² / (8πG)                            (★)
```

`Ψ` has units of potential. **The second term is not optional and it is not small.** It is the
exact gravitational analogue of the Korteweg–Helmholtz **electrostriction** force density in a
dielectric whose permittivity depends on mass density (Landau & Lifshitz, *ECM* §15) — which is
not a loose analogy: RG is *defined* by that analogy ("inspired by the behaviour of electric
fields in matter… a change both in direction, namely a refraction, and in magnitude"). The
dielectric literature has had this term since Helmholtz. The gravitational copy of the equation
was written without it.

**Why (★) is forced, not optional.** For the naive law `g = −∇Φ` alone, write
`ρ∇Φ = (1/4πG)∇·(C∇Φ)∇Φ` and split off a divergence:

```
∫ ρ (−∇Φ) dV  =  − (1/8πG) ∫ |∇Φ|² ∇C  dV        (surface terms vanish for an isolated system)
```

The right-hand side is generally **nonzero**: an isolated system exerts a net force on itself.
Meanwhile the striction force integrates, by parts, to

```
∫ ρ (−∇Ψ) dV = ∫ Ψ ∇ρ dV = (1/8πG) ∫ C′(ρ)|∇Φ|² ∇ρ dV = + (1/8πG) ∫ |∇Φ|² ∇C dV
```

— **exactly the negative.** So the two statements are the same statement:

> **Either the theory carries the striction force `−∇Ψ`, or it violates Newton's third law.**

That is a theorem, and it is checkable. All three legs — the identity, the violation, and the
cancellation — are verified numerically below.

---

## 2. The numerics

Axisymmetric finite-volume solve of `∇·[C(ρ)∇Φ] = 4πGρ` on a stretched (R, z) grid, Dirichlet
outer BC `Φ = −GM/(C_min r)` (exact once C has floored), midplane reflection symmetry.

**Validation** (all in the output file):

| test | result |
|---|---|
| uniform sphere, C=1, Φ vs −GM/r | max rel err **7.0e-4** |
| exponential disc z₀=0.3 kpc, C=1, dΦ/dR vs **exact Hankel transform** | max **0.13%**, median 0.07% |
| same, K_z at z=1.5 kpc, R ≤ 20 kpc | median **0.82%** (max 33%, at the R where K_z crosses zero) |
| **spherical** source *with* C(ρ): L2 solve vs L3 | median **0.18%** — L2 ≡ L3 *is* exact here |
| Gauss check ∮C∇Φ·dA / 4πG M_enc on the discrete disc solution, r = 5–40 kpc | **0.984 – 1.003** |
| headline numbers vs resolution (200×220 → 300×340) and box (400 → 1500 kpc) | **< 2%** |

Test 4 matters: the solver reproduces `L2 ≡ L3` to 0.18% *when the source is spherical*. So the
disagreement below is geometry, not discretisation.

---

## 3. Result 1 — `L2 ≡ L3` is false for a disc, and the error is bounded by `B_max`

Exponential disc, M_d = 5×10¹⁰ M☉, R_d = 3 kpc, z₀ = 0.3 kpc (midplane ρ at R=8 kpc is
0.10 M☉/pc³ — the correct solar-neighbourhood value). `g_bar` is solved on the *same grid* with
C = 1, so discretisation cancels in the ratio.

At Refracted Gravity's own fitted calibration (Cesare et al. 2020, 30 DiskMass galaxies:
ε₀ = 0.089, q = 0.47, ρ_c = 8.3×10⁻³ M☉/pc³):

| R (kpc) | ρ (M☉/pc³) | C(midplane) | g_bar | g_L3 = g_bar/C | **g_L2** | **L2/L3** |
|---|---|---|---|---|---|---|
| 1.0 | 1.06 | 0.991 | 4799 | 4845 | 8505 | **1.76** |
| 3.0 | 0.543 | 0.983 | 6078 | 6187 | 15589 | **2.52** |
| 8.1 | 0.099 | 0.920 | 3203 | 3484 | 16011 | **4.60** |
| 14.9 | 0.0103 | 0.589 | 1148 | 1947 | 11104 | **5.70** |
| 29.9 | 7.0e-5 | 0.099 | 256 | 2578 | 3163 | 1.23 |
| 50.3 | 7.7e-8 | 0.089 | 87 | 972 | 996 | 1.03 |

**Max L2/L3 = 5.89** — a factor of 5.9 in `g`, **139% in velocity**. Converged to <2% over
resolution and box size.

**The mechanism, and it is simple.** Gauss's law on a sphere of radius r reads
`∮ C ∇Φ·dA = 4πG M_enc`, so the field is set by the permittivity *averaged over the enclosing
surface*, not by its midplane value. For a thin disc those are completely different objects:

| r (kpc) | ⟨C⟩ over the sphere | C(midplane) | ε₀ |
|---|---|---|---|
| 3 | **0.303** | 0.983 | 0.089 |
| 8 | **0.148** | 0.923 | 0.089 |
| 15 | **0.102** | 0.589 | 0.089 |
| 30 | **0.089** | 0.099 | 0.089 |

A disc is a set of measure ~zero on its own enclosing sphere. **By r ≈ 8 kpc the surface average
is already within 60% of the floor while the midplane value is still 0.92.** L3 reads C off the
midplane; L2 reads it off the sphere. That is the whole discrepancy.

**Closed form for the size of the error.** As the knee moves outward, `C(midplane) → 1` while
`⟨C⟩_sphere → C_min`, so

```
max_R (L2 / L3)  →  1 / C_min  =  B_max
```

The scan confirms it numerically: at γ = 2 and ρ_crit = 10⁻⁴ M☉/pc³ the measured maximum is
**3.178** against `1/Ω_m = 3.175`. **The maximum error of the site's L3 substitution is exactly
the boost ceiling** — the one number the site calls its only structural difference from MOND.

**And this changes the site's diagnosis of its own galaxy failure.** The recorded diagnosis is
*"C(ρ) falls outward, the required boost rises — the failure is parameter-free"*, i.e. a boost
that **declines** with radius. Under L2 the boost does not track the midplane density at all; it
runs to `1/C_min` and **saturates near the ceiling across the whole disc**, which makes the
prediction a near-constant rescaling of the Newtonian curve — asymptotically **Keplerian**, not
flat. Same verdict (fails), **different mechanism**, and the L2 mechanism is the more sharply
refutable one. A site whose product is the honest map of *why* things failed has the wrong map on
this page.

---

## 4. Result 2 — the omitted force is 164× the vertical gravity

Same disc, same solve, now evaluating (★). Ratios are `|∂Ψ/∂x| / |∂Φ/∂x|`, i.e. striction force
over gravity.

**Radially, in the midplane** (RG calibration): rises monotonically outward, **0.53 at R = 15 kpc**
(+24% in v_c), peaking at **0.72**. Not a correction — a term of the same order as gravity.

**Vertically the term is not a correction at all.** `Ψ ∝ C′(ρ)`, which is sharply peaked where ρ
crosses ρ_c — and in a disc the knee is crossed *vertically*, over ~one scale height. So the
striction force is a **thin shell** at the transition height:

| z (kpc) at R=8 | ρ (M☉/pc³) | C | K_z = ∂Φ/∂z | ∂Ψ/∂z | **ratio** |
|---|---|---|---|---|---|
| 0.15 | 8.0e-2 | 0.904 | 720 | 1.3e4 | **18** |
| 0.30 | 4.2e-2 | 0.837 | 1267 | 5.9e4 | **46** |
| **0.61** | 7.0e-3 | 0.507 | 2770 | 4.5e5 | **164** |
| 0.90 | 9.8e-4 | 0.197 | 7957 | 8.4e5 | **106** |
| 1.51 | 1.7e-5 | 0.092 | 17069 | 3.1e5 | **18** |

**The shell is generic, not a quirk of RG's exponent.** Peak vertical ratio at R = 8 kpc:

| model | peak ratio |
|---|---|
| RG q = 0.47 (Cesare+2020 fit) | **164** |
| RG form, q = 1.0 | **245** |
| RG form, q = 2.0 | **5.2** |
| framework form, γ = 2, knee at 0.05 M☉/pc³ | **10.2** |
| framework, asserted ρ_crit = 0.029 V² | **0.0005** |

One genuinely q-specific pathology, worth separating out: for `q < 1/2`, `Ψ ∝ ρ^{2q−1}|∇Φ|²`
**diverges** as ρ → 0. At Cesare's fitted `q = 0.47` the exponent is −0.06, so the striction
potential does not decay into vacuum at all (the ratio is still ~18 at z = 5 kpc, five scale
heights out). At q ≥ 1 it decays normally. **RG's own best-fit q sits 0.03 below a boundary at
which its variational completion stops being asymptotically well-defined.** That is a constraint
on RG that costs nothing to check and does not appear to have been checked.

---

## 5. Result 3 — without the term, Newton's third law fails by 3.6×

Two Plummer spheres on the axis, **equal mass**, very different density (a = 3 vs 12 kpc), 30 kpc
apart. Uniform grid (a stretched grid gives anisotropic cells a spurious self-force that swamps
the signal — the first attempt did exactly that and was discarded). The C = 1 run on the same grid
is the noise floor. Forces in units of the pair's own mutual force `GM₁M₂/d²`:

| | RG calibration | framework, ρ_crit = 0.029V² | framework form, knee between the spheres |
|---|---|---|---|
| **control**, C = 1 (must be 0) | +0.0010 | +0.0010 | +0.0010 |
| naive law `g = −∇Φ` | **−3.6365** | +0.0030 | **−0.5132** |
| identity `−(1/8πG)∫\|∇Φ\|²∂_zC` | −3.6235 | −0.0002 | −0.5159 |
| striction `−∫ρ∇Ψ` | +3.6501 | +0.0002 | +0.5218 |
| **naive + striction** (must be 0) | **+0.0136** | +0.0032 | +0.0087 |

- The analytic identity reproduces the violation to **0.4%**.
- The striction term cancels it to **0.0%** at the finest grid (200×400), 1.2% at 100×200.
- Converged: −3.653 / −3.637 / −3.631 across three resolutions.

**An isolated pair self-accelerates at 0.047 a₀** under the published force law. Not a rounding
error — 5% of the acceleration scale the whole programme is built around.

And note the middle column: at the framework's asserted `ρ_crit`, the violation is **at the noise
floor**, because `∇C ≈ 0` everywhere. Which brings us to the only reason the site's sentence is
survivable.

---

## 5b. Result 3b — Appendix D states **four** dynamical laws, and the site tests a fifth

Went to the archive to check whether §D.5's worldline action already carries (★). It does not — it
carries a *different* extra force, and reading D.5 alongside D.6 turns up more than expected.

| where | what it says | which law |
|---|---|---|
| §D.2 | `∇·[C∇Φ] = 4πGρ` (via the density-dependent-coupling reading) | **L2** |
| §D.5 | worldline action `S = ∫[−m√(−g ẋẋ) − λ U(x)]dτ`, `U ∝ −ln C(ρ)`, **λ "to be calibrated"** | **L2 + a fifth force** |
| §D.6.1 | `(1/r²)d/dr[r² dΦ/dr] = 4πG ρ/C` | **L1** |
| §D.6.2 | effective metric sourced by `ρ_eff = ρ/C`, TOV-like | **L1, covariantly** |
| the site | `g = g_bar/C` | **L3** |

The site already records that §D.6's L1 is a different theory from §D.2's L2 and that L1 is
eliminated. What it does not record is **§D.5**: an extra force on matter, `+λ∇ln C(ρ)`, with a
coupling that is stated as free and is **never calibrated anywhere in the appendix** (the only
occurrences of `λ` elsewhere in the file are the metric function `e^{2λ(r)}`, unrelated). **No test
on the site uses it.** So the sentence *"The archive has had one since 2025-12-01 … §D.5 a
worldline action"* is used on `/honest-assessment` to close the Lagrangian question — while that
very section opens a second one.

**And §D.5's term cannot be the missing conservation term.** There is a short general theorem:

> Any extra force per unit mass of the form `−∇f(ρ)` contributes **exactly zero** net force to an
> isolated system, because `∫ρ∇f(ρ)dV = ∫∇F(ρ)dV = 0` with `F′(ρ) = ρ f′(ρ)`.

So no purely density-dependent extra force can restore Newton's third law — **the restoring term
must depend on the field**, and (★) is that term (its `|∇Φ|²` is exactly what breaks the
`F(ρ)`-divergence structure). Verified:

| separation | third-law violation (naive) | striction (★) | **§D.5 term, per unit λ** | λ needed |
|---|---|---|---|---|
| 20 kpc | −2.8463 | +2.8485 | **+1.6e−07** (5.8e−08 of the violation) | 1.73e+07 |
| 30 kpc | −3.6365 | +3.6501 | **+7.0e−08** (1.9e−08) | 5.22e+07 |
| 45 kpc | −3.8185 | +3.8683 | **+1.9e−08** (5.0e−09) | 2.00e+08 |

Numerically zero, as the theorem requires; the λ that would be needed diverges and disagrees by
**12×** across three separations, so no single coupling can work. §D.5's force is a free-parameter
fifth force, not a repair.

This also sharpens §9's internal edge. The site's escape criterion — *"their extra force is the
gradient of a function of ρ"* — describes a **fifth force**, which is a different object from a
**conservation-restoring** term. `−∇Ψ` is both (it is a gradient of a function of ρ *and* of the
field). `+λ∇ln C` is only the first. The site currently has one phrase covering both.

---

## 6. Result 4 — the escape and the repair are the same door, and it only opens one way

Scan `ρ_crit` for the framework's own functional form (disc fixed, γ = 2):

| ρ_crit (M☉/pc³) | knee at R ≈ | max L2/L3 | max radial striction/g | max vertical striction/K_z |
|---|---|---|---|---|
| 1e-4 | 27 kpc | 3.18 | 11.7 | **7128** |
| 1e-3 | 21 kpc | 3.05 | 1.81 | **858** |
| 1e-2 | 14 kpc | 2.80 | 0.324 | **104** |
| 1e-1 | 8 kpc | 2.43 | 0.088 | **12.9** |
| 1 | 3 kpc | 1.87 | 0.035 | 0.51 |
| 10 | 1 kpc | 1.22 | 0.016 | 0.033 |
| **652** *(= 0.029·150²)* | never | **1.004** | 0.0003 | **0.0005** |

Monotone, and it closes a door. Read the last two columns against the second:

> **The omitted vertical force drops below the vertical gravity only when the knee sits inside
> R ≲ 3 kpc — which is inside the radius where rotation curves need no boost at all.**

So the region of parameter space where "the Lagrangian doesn't matter" is exactly the region where
*the theory* doesn't matter. `ρ_crit = 0.029·V²` is 4.5 dex above the fitted RG value and lands
squarely in it: C is pinned at the floor `Ω_m` from 1 kpc outward, so the framework's galaxy
sector is not a density-keyed theory at all — it is `G → G/Ω_m`, a **constant rescaling of the
gravitational constant by 3.17**, with a coherence function attached that never varies.

This prices the repair the queue is already contemplating (`rho-crit-reformulation-options.md`,
`ρ_crit` V-exponent sign inversion, the 600× chain-of-custody failure). **Any reformulation that
moves the knee into the disc — which is required for the theory to do anything — simultaneously
switches on a vertical force one to three orders of magnitude larger than K_z.** That is a new
*a-priori* closure, in the same family as the ones already on the ledger: it needs no data.

---

## 7. What this does and does not change

**Does not change (stated plainly, because the temptation runs the other way):**

- **No refutation count moves.** Nothing here refutes anything the site hasn't already refuted.
- **The site's specific executed tests are unaffected**, because they were run at
  `ρ_crit = 0.029·V²`, where every term computed here is ≤ 0.4%. The sentence *"none of the
  refutations below change"* is **true for the framework's own parameters**. It is false as the
  general claim it is written as, and it is true for a reason the site does not state and would
  not like: the knee is unreachable.
- **This is not an RG refutation.** Cesare et al. solve the full PDE numerically; they never use
  an L3 branch. Result 1 is a finding about *the site*, which introduced L3 and asserted the
  equivalence. Results 2/3/5 are findings about the *theory class*, and about a question M&D
  posed themselves.

**Does change:**

1. `L2 ≡ L3` is **false**, by up to `B_max`, wherever C varies at all. Two site sentences must go.
2. *"not by the presence or absence of a Lagrangian"* is **false**: the Lagrangian changes the
   vertical force by up to 2.4 dex and the midplane force by up to 72%.
3. The site's **diagnosis** of the galaxy failure (declining boost) is the L3 diagnosis. L2's is a
   ceiling-saturated near-constant boost. The verdict survives; the explanation does not.
4. **TEST-27 is void as pre-registered.** The 2026-08-25 pre-registration predicted a K_z excess
   window (3.3% / 21.7%) at |z| < 2 kpc, computed on the L3-type field. The vertical channel is
   precisely where the omitted term is largest — 164× K_z at the transition height, in the same
   |z| range. The window is not the theory's prediction under either branch. **It must be
   withdrawn and recomputed, or explicitly conditioned on the non-variational branch.** Filed here
   the day after registering it; that is what pre-registration is for.
5. There is now a **third structural difference from MOND** to inventory. AQUAL is variational by
   construction (Bekenstein & Milgrom built it that way, in 1984, for exactly this reason).
   `C(ρ)`-modified gravity is not, unless it carries `−∇Ψ`. That is a real, checkable, non-shared
   feature — and the first one in months that is *not* an asserted constant.

---

## 8. The trilemma

Every branch costs something, and the site currently occupies none of them explicitly.

**(V) Variational.** Momentum conserved; force law is (★). Then every rotation curve ever fitted
with this equation — the site's and RG's — used the wrong force law, and the vertical structure of
a disc is dominated by a term nobody has included. Requires redoing the galaxy sector from
scratch, and the vertical shell looks immediately fatal against Milky Way K_z data.

**(N) Non-variational** — the published and site-used branch, `g = −∇Φ`. Then an isolated system
self-accelerates at up to 0.047 a₀, there is no conserved energy or momentum, and the theory is
not a candidate fundamental law. It can still be a fitting formula, which is what the ledger
already says the galaxy sector is.

**(C) Covariant.** Sanna, Pipino & Diaferio 2023 (arXiv:2109.11217) *do* have a scalar–tensor
completion, with `φ = 2ε` in the weak-field limit. But there `φ` is an **independent dynamical
field with its own equation of motion** — so `ε` is *not* a local function of `ρ`; it is sourced
by ρ non-locally. Momentum is conserved, and the problem above dissolves. **The price is the
framework's advertised distinguishing feature.** A completed C is not a local density coupling, so
the site's own locality no-go (`C(ρ)` as "the quantified local-density instance of Milgrom's
non-locality theorem") does not describe the completed theory — and neither does the site's claim
to be a *local* alternative. This is the fourth time the program's escape route has turned out to
require dropping locality (cf. BCM 2017 non-local, Verlinde M_B(<r), MOND Σ, the 08-19 `∇Φ` axis).

**Instinct, surfaced.** Branch (C) is the interesting one and nobody in this program has looked at
it, because the site's frame ("score it, count the refutations") has no slot for *"what does the
theory become when you make it consistent?"*. Pass 3 is right that this question outranks the next
six refutations, and the scoring scheme is what hides it. That is a frame problem, not a backlog
problem.

---

## 9. Prior art — screened under the construction, not the vocabulary

Per the 08-25 lesson (a four-times-missed prior-art hit because the screen used the house
vocabulary), screened on the *construction*:

| construction | prior art | status |
|---|---|---|
| `∇·(ε(ρ)∇Φ) = 4πGρ` | Matsakos & Diaferio 2016 | **is** the field equation (est. 08-25) |
| its Lagrangian `L = ε/8πG(∇Φ)² + ρΦ` | M&D 2016 §6 — **written down and deferred** | open in the literature, 10 yr |
| force density in a dielectric with ε(mass density) | Korteweg–Helmholtz / electrostriction; Landau & Lifshitz *ECM* §15 | **textbook** — the physics is not new |
| "extra force is a gradient of a function of ρ" | BCM 2017 symmetron — **the site's own named escape** | see below |
| covariant completion | Sanna+2023, scalar–tensor, φ = 2ε | exists; ε becomes non-local |

**The physics in §1 is textbook.** What is new here is only that nobody applied it to *this*
equation, and that the site asserts the opposite conclusion without the computation.

**And one internal edge worth stating on its own.** The site's escape criterion for its *own*
no-go, quoted verbatim on `/galaxy-rotation` and `/honest-assessment` (from BCM 2017), is:

> "their extra force is the **gradient of a function of ρ** rather than a multiplier on it"

`−∇Ψ = −∇[C′(ρ)|∇Φ|²/8πG]` **is** a gradient of a function of ρ. So the variational completion of
the framework's own field equation lands on the **escape** side of the framework's own no-go. The
no-go is a theorem about `C(ρ)·g` — the L3 algebraic branch — and the site's own field equation is
not in its scope. That does not rescue the galaxy fits (§4 shows why the escape door only opens
onto a vertical-structure disaster), but the citable negative result is currently scoped in a way
that excludes the theory it was derived from, and that should be said out loud on the page.

---

## 10. Falsifiers for *this* finding

Stated in advance, per `test-preregistration-protocol`:

1. **The Lagrangian is wrong.** If the correct matter action for this class is not
   `L = −C(ρ)|∇Φ|²/8πG − ρΦ` — e.g. if `C` should be a function of a *different* field, or the
   fluid coupling differs — (★) changes. But then §5 stands regardless: *something* must cancel
   the 3.6× third-law violation, and only a `∇ρ`-gradient term can.
2. **The disc is a toy.** Single exponential component, no bulge, no gas, no halo, sech² in z. A
   real multi-component disc has a thicker gas layer that would move the transition shell outward
   and broaden it. Predicted effect: the peak ratio drops, but §6's monotone trade-off is set by
   *where the knee is*, not by the profile, so the closure survives. **Untested — worth running.**
3. **Amplitude caveat, flagged not hidden.** At Cesare's *mean* parameters my toy disc reaches
   v ≈ 400 km/s, high for a 5×10¹⁰ M☉ disc. Their fits are per-galaxy with fitted M/L over a
   limited radial range, so this is not a contradiction — but I have **not** reproduced a DiskMass
   fit and do not claim to. Every ratio quoted here is L2-vs-L3 or striction-vs-gravity **on the
   same solve**, so it is unaffected by the amplitude; but if someone wants the *absolute* RG
   curve, this script is not yet that tool.
4. **`Ψ` is a fluid force.** The derivation is for matter that participates in ρ. Whether a
   genuinely massless test tracer feels `−∇Ψ` is a separate question (it is the SEP-violation
   question M&D flagged as open). If tracers do *not* feel it, §4's disaster is weakened for
   stellar kinematics but §5's momentum violation is untouched — and a force felt by gas and not
   by stars is itself a sharp, cheap prediction.

---

## → Maintainer queue (day 13 down; this joins 08-25's six)

| P | page | fix |
|---|---|---|
| **P0** | `/honest-assessment` L164–170 | *"so L2 ≡ L3"* and *"Every test on this page uses L2 ≡ L3"* — **false**. L2 = L3 only for spherical sources; for a disc L2/L3 ≤ B_max and reaches 5.89. |
| **P0** | `/honest-assessment` L172 | *"not by the presence or absence of a Lagrangian"* — **false**. Replace with the true, narrower, more damaging statement: *the refutations are unchanged only because ρ_crit = 0.029·V² puts the knee 4.5 dex above the disc, where C is pinned at Ω_m and the theory is G → G/Ω_m.* |
| **P0** | `/test-catalog` TEST-27 | **withdraw or re-condition.** The pre-registered K_z window was computed on L3; the vertical channel is where the omitted term is 164× K_z. |
| **P1** | new page, or `/for-researchers` | *Is there an action?* — Pass 3's question deserves the page. §1, §5 and §8 are the content; it is one page and it outranks the next several refutations. |
| **P1** | `/galaxy-rotation`, `/for-researchers` | the no-go is scoped to `C(ρ)·g`; the framework's **own** L2 is a gradient scheme and sits outside it, on the escape side of the site's own criterion. |
| **P1** | `/honest-assessment` galaxy diagnosis | "C(ρ) falls outward so the required boost rises" is the **L3** mechanism. L2's is ceiling-saturation. Verdict unchanged, explanation replaced. |
| **P1** | `/honest-assessment` L157–162 | *"§D.5 a worldline action"* is cited as closing the Lagrangian question. §D.5 **opens** one: it adds a force `+λ∇ln C(ρ)` with λ *"to be calibrated"*, never calibrated, used by no test. And §D.6.1/D.6.2 use **L1** — so Appendix D states **four** laws (L2, L2+fifth force, L1, L1-covariant) and the site tests a fifth (L3). |
| **P2** | ledger | third structural difference from MOND: AQUAL is variational by construction; `C(ρ)` gravity is not unless it carries `−∇Ψ`. First non-constant structural difference in months. |

## → Back-annotation to the Synchronism research repo

`Research/proposals/` — the variational completion of Appendix D §D.2, the striction force (★), the
third-law identity, and the ρ_crit closure of §6. The last is the citable one: **a density-keyed
permittivity theory cannot place its knee inside a disc without introducing a vertical force that
exceeds the vertical gravity.** That is a constraint on the whole class, derived, needing no data —
and it is a genuine answer to a question Matsakos & Diaferio left open in 2016.
