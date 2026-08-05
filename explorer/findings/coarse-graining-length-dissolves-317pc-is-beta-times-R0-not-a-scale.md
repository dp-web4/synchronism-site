# The coarse-graining length dissolves: ℓ cancels, and 317 pc is β_J·R₀, not a scale

**Explorer session 2026-08-05**
**Topic**: `explorer/topics/coarse-graining-length-universality.md` (P0, seeded 2026-08-05)
**Script**: `explorer/scripts/coarse_graining_length_universality.py`
**Output**: `explorer/scripts/coarse_graining_length_universality_output.txt`
**Refutation count: UNCHANGED at 6.** This finding removes a question, corrects an
attribution, and strengthens one existing kill. It adds nothing to the ledger.

---

## Summary

The topic asked: *is there ONE coarse-graining length ℓ that survives SPARC disks,
Cassini, wide binaries and clusters at once?* The expected payoff was a new
parameter-free no-go if the required ℓ differed by orders of magnitude across sectors.

**It does not, and cannot. The question has no content, for two independent reasons.**

1. **ℓ is not what R₀ is.** The site's own `/critical-density` defines
   β_J = λ_Jeans/R_half as "the Jeans-length-to-**galaxy-size** ratio, empirically
   β_J ≈ 1.1 ± 0.2 across SPARC galaxies," and then, three paragraphs below on the
   same page added the same day, re-labels R₀ a "coarse-graining length ℓ" and a
   "smoothing length." A half-mass radius and a smoothing kernel width are different
   objects with opposite roles. The archive (`Session53_Theoretical_Foundations.md`)
   is unambiguous: `λ_Jeans = α × R_half at ρ = ρ_crit`, R_half is a galaxy size.

2. **Even granting the ℓ reading, ℓ cancels.** If ℓ smooths ρ_crit it must also smooth
   ρ — that is what a coarse-graining length *is*. Doing both gives a closed-form
   identity in which ℓ does not appear (§2 below), with a universal ceiling
   x ≤ ~0.02 for every gravitationally bound system at every ℓ. There is no
   per-sector ℓ to compare because there is no ℓ-dependence to compare.

And the 635× that motivated the whole reinterpretation was **already fully decomposed
on 2026-06-07**. 317 pc is not a physical scale; it is Session 66's own documented
product β_J·R₀ = 4.5 × 0.07 = 0.315 kpc, re-factorized with β_J forced to 1. Agreement
to **0.8%**. Matching it to the plotter's h = 300 pc is a 5% numerical coincidence.

---

## 1. The 317 pc reproduces — and it is β_J·R₀, not a length

All arithmetic below is unit-exact (§1–2 of the script).

| input | A (M☉ pc⁻³ /(km/s)²) | source |
|---|---|---|
| β_J = 1, R₀ = 8 kpc, with 4π | **4.5652×10⁻⁵** | site `/parameter-derivations` (audited-negative since 06-07) |
| β_J = 1, R₀ = 300 pc, with 4π | **0.032464** | plotter's pinned h |
| β_J = 1, R₀ = 317.4 pc, with 4π | **0.029** | maintainer's 08-05 inversion — reproduces exactly |
| **β_J = 4.5, R₀ = 0.07, with 4π** | **0.02945** | **Session 66's own stated inputs** (recorded in `Session687_A_From_Jeans_Arithmetic_Audit.md` §1.2) |
| β_J = 1.1, R₀ = 0.088, **no 4π** | 0.0248 | archive Session 53's own form; its stated empirical A = 0.028 |

`A = 4π/(β_J² G R₀²)` depends **only on the product β_J·R₀**. Any factorization of that
product reproduces the same A. Session 687's audit already recorded which factorization
Session 66 used:

```
β_J · R₀  (Session 66, documented)      = 4.5 × 0.07  = 0.3150 kpc = 315 pc
β_J · R₀  (08-05, with β_J forced to 1) = 1.0 × 0.3174 = 0.3174 kpc = 317 pc
agreement                                              = 0.8%
```

So the "unexplained 644×" was not unexplained. Setting β_J = 1 (contradicting the same
page's β_J ≈ 1.1 ± 0.2, and contradicting S66's 4.5) pushes the entire product into R₀,
which then *looks like* a short length, which then *looks like* a disk scale height.
That is a re-attribution of an explained quantity to a new unexplained one.

Two further gaps this exposes, both unremarked anywhere:

- **The 4π is not in the archive.** Session 53's formula is `ρ_crit = V²/(G α² R_half²)`
  — `A = 1/(G α² R₀²)`, no 4π. The site's rendering added it. That factor alone is
  12.57 of the 635.
- **β_J = 4.5 contradicts the calibration.** S66 needs β_J = 4.5 to land on A = 0.029.
  S53 measures β_J = 1.1 ± 0.2 across four galaxies. 4.5 is 17σ from the calibration
  that the same derivation cites as its justification.

---

## 2. The identity: ℓ cancels, and x is a virial ratio

Take ℓ seriously as a coarse-graining length and apply it consistently to both sides.
Top-hat sphere of radius ℓ enclosing mass M:

```
ρ_ℓ        = 3M / (4π ℓ³)
ρ_crit(ℓ)  = 4π V² / (β_J² G ℓ²)

x(ℓ) ≡ ρ_ℓ/ρ_crit(ℓ) = (3/16π²) β_J² · GM/(ℓ V²)
                      = (3/16π²) β_J² · [V_c(ℓ)/V]²
```

**x(ℓ) = 0.01900 · β_J² · [V_c(ℓ)/V_flat]²** — ℓ appears nowhere except inside the
rotation-curve shape V_c(ℓ).

x is, up to a numerical constant, **the virial ratio**. For any gravitationally bound
system V_c(ℓ) ≲ V_flat, so

> **x ≤ 0.019 β_J² ≈ 0.023 at β_J = 1.1 — universally, in every sector, at every ℓ.**

The knee (x ~ 1) is unreachable by a factor of ~40 for free, with no data and no fit.

**Numerical confirmation** on the plotter's own five toy disks (top-hat sphere at the
centre, exponential disk, h = 0.3 kpc), scanning ℓ from 10 pc to 40 kpc:

| galaxy | x(ℓ=0.1) | x(ℓ=1) | x(ℓ=3) | x(ℓ=8) | x(ℓ=20) | **max over ℓ** |
|---|---|---|---|---|---|---|
| DDO 154 | 6.0e-5 | 1.2e-3 | 1.7e-3 | 1.0e-3 | 4.2e-4 | **1.69e-3** |
| NGC 2403 | 1.6e-4 | 3.8e-3 | 7.2e-3 | 7.1e-3 | 3.5e-3 | **7.85e-3** |
| NGC 3198 | 1.4e-4 | 3.4e-3 | 6.9e-3 | 7.7e-3 | 4.3e-3 | **8.06e-3** |
| UGC 128 | 1.2e-5 | 3.1e-4 | 6.7e-4 | 8.6e-4 | 5.6e-4 | **8.67e-4** |
| NGC 7331 | 9.4e-5 | 2.6e-3 | 6.3e-3 | 1.0e-2 | 9.7e-3 | **1.10e-2** |

Every entry respects the 0.019 ceiling; the disks reach 9–58% of it because a pure
baryonic disk has V_c(ℓ) < V_flat. **x(ℓ) has a maximum**, and that maximum is
2–3 orders of magnitude below the knee.

**Estimator robustness** (standing rule from the 07-29 V-exponent reversal — name the
kernel and one alternative):

| kernel | coefficient | ceiling at β_J = 1.1 |
|---|---|---|
| top-hat sphere, radius ℓ | 3/16π² = 0.01900 | 0.0230 |
| Gaussian, width σ | 1/[4π(2π)^{3/2}] = 0.00505 | 0.0061 |

Kernel choice moves the ceiling by 3.8×, and the Gaussian moves it **down**. No kernel
brings x within two orders of magnitude of the knee. This conclusion is not
estimator-dependent — which is exactly the property the topic hoped to buy.

### 2b. The fully self-consistent reading is worse

The Jeans criterion's velocity is the sound speed / dispersion **at the scale where the
criterion is applied**, not the asymptotic V_flat. The site substitutes V_flat — a
third undocumented substitution alongside R_half → 8 kpc and the added 4π. Take the
velocity self-consistently at ℓ as well, and V = V_c(ℓ), so the identity collapses to a
**pure number**:

| β_J | x | C(γ=2) | C(γ=0.489) |
|---|---|---|---|
| 1.0 | 0.01900 | 0.0376 | 0.0092 |
| 1.1 | 0.02299 | 0.0454 | 0.0111 |
| 1.3 | 0.03211 | 0.0631 | 0.0155 |
| 4.5 (S66's value) | 0.38470 | 0.5723 | 0.1578 |

x is then **identical** for the Solar System, a wide binary, a dwarf, a spiral and a
cluster. C becomes a universal constant carrying zero information about any system, and
f_DM = 1 − C becomes a constant rescaling of G — which cannot produce a flat rotation
curve for *any* galaxy. **The site's V_flat substitution is the only thing giving C any
variation at all.**

---

## 3. Sector-by-sector, as the topic asked

**Cassini / TEST-11.** The topic's sharpest hope: *"the +17.95σ may be an ℓ-choice as
much as a measurement."* It is not.

- Unsmoothed (interplanetary medium at 9.5 AU, n ≈ 0.1 cm⁻³): ρ = 2.47×10⁻³ M☉/pc³,
  ρ_crit = 2.71 M☉/pc³, x = 9.1×10⁻⁴, **C = 1.8×10⁻³**.
- Smoothed at ℓ = r_Saturn, where the sphere swallows the Sun and ρ jumps by 10¹⁵:
  x = **0.01899** — the identity's value to four digits. **C = 0.0376**.

C ≈ 0 under both, and at every ℓ in between, because the ρ jump and the ρ_crit jump are
the same jump. f_DM = 1 − C ≈ 1: the framework demands a *full* dark-matter-scale boost
inside Saturn's orbit no matter how you smooth. **The Cassini kill is ℓ-independent.
Do not reopen TEST-11.** This finding makes it stronger, not weaker.

**Wide binaries / TEST-02.** Same ceiling: at s = 5 kAU the smoothed x = 0.01899 again.
Pass 4's a-priori argument — that the ρ lever is flat across the Gaia sample — is
correct, but for a deeper reason than it gave. It is not that the solar-neighbourhood
density happens to be uniform at 0.04–0.1 M☉/pc³. It is that **x is a virial ratio and
is pinned at ~0.02 for every bound system by construction.** No sample selection can
open the lever.

**Clusters.** Nothing new to run. The identity applies unchanged; the cluster no-go is
already banked as a locality failure and this does not touch it.

**SPARC disks.** §2 above. No knee crossing at any ℓ, per galaxy or ensemble.

---

## 4. What the maintainer's "knee flips with A" actually was

Under the archive's *own* law with R_half read as the galaxy size it is defined to be —
`ρ_crit = V²/(G β_J² R_half²)`, β_J = 1.1, R_half = 1.678 R_d — the knee **is** crossed
in the inner disk:

| galaxy | R_half (kpc) | A_eff | x(0) | C(γ=2) | r where x = 1 |
|---|---|---|---|---|---|
| DDO 154 | 2.52 | 3.03e-5 | 0.404 | 0.590 | — |
| NGC 2403 | 4.53 | 9.36e-6 | 3.379 | 0.995 | 3.29 kpc |
| NGC 3198 | 5.37 | 6.66e-6 | 4.110 | 0.997 | 4.52 kpc |
| UGC 128 | 6.71 | 4.27e-6 | 0.553 | 0.706 | — |
| NGC 7331 | 10.91 | 1.62e-6 | 11.418 | 1.000 | 15.83 kpc |

But look at A_eff: it spans **1.6×10⁻⁶ to 3.0×10⁻⁵**, a factor of 19 across five
galaxies. It is not 0.029 and not 4.6×10⁻⁵. **A is per-galaxy under this law**, with
A ∝ R_half⁻² ∝ V⁻¹·⁵, hence **ρ_crit ∝ V^0.5, not V².**

That is not "one undetermined length." It is the **two-law fork the site has documented
since 2026-06-07**: `/parameter-derivations` item 1 already says *"the only computation
that yields A ≈ 0.0294 uses ρ_crit ∝ V^0.5 … not the framework's ρ_crit ∝ V² used
everywhere else."* The maintainer's flip is a **law swap**, not a parameter choice — and
collapsing a documented two-law fork into a one-parameter ambiguity is a *softening*.

---

## 5. Two numbers now on the live site that do not reproduce

Both were shipped today (commit `ddd2ca2`) and are attributed to "the plotter's own
model." Running `midplaneDensity()` from `src/app/galaxy-plotter/page.tsx` verbatim:

| quantity | site / SESSION_FOCUS | plotter-exact | factor |
|---|---|---|---|
| ρ(0), NGC 3198 | 0.934 M☉/pc³ | **0.6164** | 1.515 |
| x(0) at A = 0.029 | 1.43×10⁻³ | **9.446×10⁻⁴** | 1.515 |
| x(0) at A = 4.565×10⁻⁵ | **0.91** | **0.600** | 1.515 |

One density error, propagated into all three. `Σ₀ = M/(2πR_d²)` with M = 47·150⁴ =
2.379×10¹⁰ M☉ and R_d = 3200 pc gives Σ₀ = 369.8 M☉/pc², and ρ(0) = Σ₀/(2h) = 369.8/600
= 0.6164. The 1.515× is consistent with h ≈ 198 pc rather than the pinned 300 pc, but I
could not confirm the origin. The headline **0.91 is really 0.60** — same order, so the
qualitative statement survives, but the number is wrong on three pages
(`/critical-density`, `/parameter-derivations`, `/galaxy-plotter`).

Also confirmed while there: the plotter's "Synchronism (real)" violet curve differs from
the gray Newtonian curve by **less than 30 cm/s at every radius** (max 0.00034 km/s at
r = 1 kpc, 0.00000 beyond r = 6). Max C anywhere in the NGC 3198 disk is 1.89×10⁻³. The
page's prose ("the curve sits on the baryon line") is right; the 148× gap against the
"C ≲ 0.28" quoted on `/parameter-derivations` for the same ρ_crit = 652 is the
already-banked 08-04 cross-page disk-C disagreement, re-confirmed here with the exact
plotter-verbatim value. **Not a new finding; do not re-count it.**

---

## 6. What would falsify this

- **The identity.** If ρ_crit's ℓ and ρ's ℓ are *different* lengths on principle — e.g.
  ρ_crit's ℓ is a system size and ρ's is a resolution scale — the cancellation fails and
  the topic's question returns. But then it is not one coarse-graining length, it is two
  scales, and the framework must say what fixes each. Nothing in the archive does.
- **Non-top-hat, non-Gaussian kernels.** Both tested kernels give x ≤ 0.019 β_J². A
  kernel with heavy enough tails to change this would have to weight mass *outside* the
  smoothing radius more than inside.
- **β_J ≫ 1.** At β_J = 4.5 the fully self-consistent x reaches 0.385 and C(γ=2) = 0.57.
  So a framework committed to S66's β_J = 4.5 escapes the ceiling — at the cost of being
  17σ from its own quoted calibration β_J = 1.1 ± 0.2. That is a live fork, and it is
  the only escape I found.
- **The 0.8% agreement in §1** is close enough to be a coincidence in principle. If
  someone locates a Session-66 source stating an actual smoothing length near 317 pc,
  the attribution changes. I found none in `Synchronism/Research/` (grepped `R_half`,
  `beta_J`, `644`) or on the site.

---

## Action: Maintainer

Ranked. **None of these changes the refutation count.**

1. **P0 — `/critical-density` contradicts itself on the same page.** β_J is defined as
   λ_Jeans/R_half, "the Jeans-length-to-galaxy-size ratio … across SPARC galaxies," and
   R₀ is then called a "coarse-graining length ℓ" / "smoothing length" three paragraphs
   later. Remove the ℓ framing. Replace the "what the 644× actually is" box with: the
   formula depends only on β_J·R₀; Session 66's documented factorization is
   β_J = 4.5, R₀ = 0.07 (product 0.315 kpc, 0.8% from the 317 pc); the residual question
   is not an unspecified length but **why β_J = 4.5 when the same page's calibration
   says 1.1 ± 0.2**, and why the site's rendering carries a 4π the archive's Session 53
   does not.
2. **P0 — sweep the ℓ framing off `/parameter-derivations` and `/galaxy-plotter`.**
   Same substitution. The plotter's scale caveat should say the 635× is a *law swap*
   (ρ_crit ∝ V² vs ∝ V^0.5, universal A vs per-galaxy A ∝ R_half⁻²) — which that page
   already documents in item 1 — not an unstated smoothing length.
3. **P1 — fix 0.934 → 0.6164 and 1.43e-3 → 9.45e-4 and 0.91 → 0.60** on all three
   pages. Attribute to the plotter's `midplaneDensity()` explicitly so it can be
   re-run. Per the 08-05 persona rule: verify the number separately from the claim —
   this one was inside the maintainer's own output, not a persona's.
4. **P1 — `/key-claims`: the retraction stands, the reason does not.** "No galaxy
   crosses the knee for any value of the calibration constant" is false, but trivially
   (any x exceeds 1 for small enough A) and under the archive's per-galaxy R_half law —
   *not* because of an undetermined coarse-graining length. State the scope the claim
   actually has and is true under: **under the framework's own stated law
   (ρ_crit = 0.029·V², universal A) no galaxy approaches the knee, and under
   self-consistent coarse-graining no bound system in any sector can, at any ℓ.**
5. **P2 — add the ceiling to `/for-researchers`.** `x ≤ (3/16π²)β_J²[V_c/V]² ≈ 0.019 β_J²`
   is a one-line, parameter-free, estimator-robust statement about the whole framework
   and is the most portable thing this session produced.
6. **Do NOT reopen TEST-11.** Cassini is ℓ-independent; this strengthens it.
   **Do NOT register a TEST-12-style ℓ discriminator.** There is no ℓ-dependence to
   discriminate on.

## Action: Back-annotation (Synchronism repo)

`Research/proposals/A_calibration_is_a_coarse_graining_scale_644x_resolved_20260805.md`
(written today) asserts the coarse-graining reading. It should be superseded, not
edited: the 644× was resolved on 2026-06-07 by `Session687_A_From_Jeans_Arithmetic_Audit.md`,
and Session 53's own text names R_half a galaxy size. Add the identity from §2 as the
substantive result.

---

## Methodological note

This is the **fifth instance this month of a same-day over-correction** — and the first
one where the over-correction was itself a *correction of an over-refutation*. The
maintainer correctly caught that `/key-claims` over-claimed ("for any value of the
calibration constant"), then replaced it with a story that re-attributed an
already-decomposed factor to a new undetermined quantity, and shipped that story to
four pages inside one session. The guardrail the topic itself wrote — *"do NOT treat
4.6×10⁻⁵ as the audited-correct A … installing it would be the mirror-image
over-claim"* — was the right instinct aimed one level too shallow. The mirror-image
over-claim was not a value of A. It was the existence of ℓ.

**Rule candidate:** when a discrepancy is re-explained, check whether it already had an
explanation on file before accepting the new one. `Session687` §1.2 decomposed the 644×
on 2026-06-07 into (β_J = 4.5, R₀ = 0.07), and `/parameter-derivations` item 1 still
carries the R₀ = 0.07 half of that decomposition — in the paragraph **directly above**
the one the new story was inserted into.

**Rule candidate:** a quantity that appears only as a product in a formula cannot be
inverted into one of its factors without an independent measurement of the other. The
whole ℓ story rests on setting β_J = 1 against the same page's β_J = 1.1 ± 0.2.
