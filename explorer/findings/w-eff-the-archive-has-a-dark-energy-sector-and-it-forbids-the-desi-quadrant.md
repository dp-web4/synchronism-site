# Finding: the framework HAS a dark-energy sector, its published w(z) is wrong twice over, and the corrected version structurally forbids the one thing DESI DR2 prefers

**Date**: 2026-08-10 · **Track**: explorer
**Topic**: `compute-w-eff-z-the-no-coupling-claim-may-be-an-overclaim.md` (seeded by maintainer 2026-08-10 from visitor Pass 4)
**Script**: `explorer/findings/scripts/w_eff_from_C_rho_cosmic.py` · **Output**: `..._output.txt`
**Guardrail observed: the refutation count is NOT bumped. This adds no refutation.** It converts a
registered *scope negative* into a *scope positive carrying a live, currently-disfavoured prediction.*

---

## Summary

Three things, in increasing order of importance.

1. **The claim is false.** `/honest-assessment` and `PREDICTIONS.md` both state the framework has no
   dark-energy sector and "no mechanism that modifies the expansion history." The research archive
   derived one on **2025-12-08** — `Session100_Modified_Friedmann.md` — and computed a w(z) from it.
   Seven months later the negative was registered as **"Verified before registering."** The
   verification was a grep of `SPINE / FUNDAMENTALS / PREDICTIONS / STATUS` — the four *compilation*
   documents. It never touched `Research/`, where the derivation lives.

2. **The published w(z) is wrong twice over, and the error changed the framework's direction.** The
   archive's "w_eff > 0, which contradicts w ≈ −1" is the entire stated reason Session #101 declared
   the galactic C(ρ) a "category error" at cosmic scales and replaced it with a separate cosmic form.
   Recomputed: **w_eff(z=0) = −1.24**, not "> 0". Session #101's replacement was unnecessary — and,
   proved below, its "different" cosmic formula is *identically* the galactic one at γ = 1/2.

3. **The corrected theory makes a hard, falsifiable, currently-disfavoured prediction.** The cosmic
   sector is a strict *one-parameter* family (γ). For every γ it satisfies
   **sign(w₀ + 1) = sign(wₐ)**, because w(z) runs monotonically from **−2γ** in the far past to
   **exactly −1** in the far future. DESI DR2 prefers the opposite pairing — w₀ > −1 *with* wₐ < 0, a
   phantom crossing — in **all four** of its data combinations. The framework can approach w = −1 from
   one side and never cross it. It fails **by quadrant**, with no parameter left to adjust.

The framework is therefore not "silent" on the dominant live anomaly in cosmology. It **forbids** it.

---

## 1. Where the claim sits, and how the verification missed

`src/app/honest-assessment/page.tsx:1323`:

> "A framework claiming density→coherence→growth machinery should register whether it has any coupling
> to w(z). **It does not: C(ρ) contains no dark-energy sector and no mechanism that modifies the
> expansion history** — which is itself a mark against cosmological scope."

`Synchronism/PREDICTIONS.md:152`:

> "📌 DATED SCOPE NEGATIVE — the framework has NO dark-energy sector (registered 2026-07-22). …
> nothing in the framework sources, modifies, or couples to the expansion history, so there is no
> mechanism producing w ≠ −1 or w(z) evolution. **Verified before registering** (grep of
> SPINE/FUNDAMENTALS/PREDICTIONS/STATUS): no DE machinery exists."

The archive contains, all predating the registration by seven months:

| File | Date | Content |
|---|---|---|
| `Research/Session100_Modified_Friedmann.md` | 2025-12-08 | Modified Friedmann `H² = 8πGρ_m/(3C)`; ρ_DE = ρ_m(1−C)/C; w(z) table |
| `Research/Session101_Cosmic_Coherence.md` | 2025-12-08 | "Cosmic coherence formula" `C_cosmic(z) = Ω_m(z)` |
| `Research/Session107_DESI_Forecasts.md` | 2025-12-10 | Bin-by-bin DESI fσ₈ + BAO forecasts |
| `Research/Session223_GR_Dark_Energy_Connection.md`, `Session194`, `Cosmology_Arc_Summary.md` | — | further cosmology arc |

**The mechanism of the miss is the finding, not the miss.** The registration's verification step was
run against the *compilation layer* — precisely the layer that memory already records as the origin of
site-archive drift. A "nothing exists" claim verified against summaries inherits every gap in the
summaries. This is the mirror image of the 2026-08-08 Appendix-D finding ("grep `manuscripts/`, not
just `Research/`"); the general rule is now:

> **A negative existence claim must be verified against the primary derivation layer. Compilation
> documents can establish that something IS present; they can never establish that something is ABSENT.**

There is a second-order harm worth naming. The registration was made "as cheap insurance against the
retro-fit pattern," and states that "any later claim that coherence 'explains' w₀wₐ is to be judged
against this statement that no such coupling exists." A guardrail built to suppress retro-fitting is
now positioned to suppress a **true** rediscovery of the framework's own December 2025 result. The
anti-overclaiming machinery produced an under-claim and then armoured it.

---

## 2. Arithmetic audit of the published w(z)

Session #100/#101 both state the effective equation of state as

```
w_eff = −1 + (1/3) · d(ln ρ_DE)/d(ln a)          ← as published
```

The continuity equation `ρ̇ + 3H(ρ+p) = 0` with `p = wρ` gives `d ln ρ/d ln a = −3(1+w)`, hence

```
w = −1 − (1/3) · d(ln ρ_DE)/d(ln a)              ← correct
```

Unit test (script, `unit_test_w()`):

| fluid | correct formula | published formula | truth |
|---|---|---|---|
| matter `ρ∝a⁻³` | 0.000000 | **−2.000000** | 0 |
| radiation `ρ∝a⁻⁴` | 0.333333 | **−2.333333** | 1/3 |
| Λ `ρ=const` | −1.000000 | −1.000000 | −1 |

The published formula fails every non-trivial case; it agrees on Λ only because the derivative
vanishes there. **Error 1: sign.**

I then reproduced the inputs exactly — γ = 2, and `ρ₀/ρ_crit = x₀ = 0.16738` fixed by requiring
C(0) = Ω_m = 0.3 — which regenerates Session #100's C(z) and ρ_DE/ρ_m columns to all published digits.
With the inputs pinned, the w column can be diagnosed:

| z | published `w_galactic` | their own stated formula | `−1 + T` | **correct** |
|---|---|---|---|---|
| 0.1 | +0.32 | −0.6814 | **+0.3186** | **−1.3186** |
| 0.5 | +0.73 | −0.2671 | **+0.7329** | **−1.7329** |
| 1.0 | +1.37 | +0.3690 | **+1.3690** | **−2.3690** |
| 2.0 | +2.28 | +1.2788 | **+2.2788** | **−3.2788** |

The published numbers do not follow the published formula. They match `(1/3)·d ln ρ_DE/d ln a` — the
stated expression **with the leading −1 dropped**. **Error 2: a missing term**, independent of error 1.

Closed form (analytic, verified against numerical differentiation to 7×10⁻⁹):

```
w(z) = − γ (1 + C) x / [ C (1 + x) ],      x = x₀(1+z)³,  C = tanh(γ ln(1+x))
```

**Corrected w_eff(0) = −1.2426.** Not "> 0". The failure is *phantom and too steep*, not
positive-pressure — a different failure with a different repair space. Session #101's premise was an
artifact.

---

## 3. γ = 1/2 is an exact double-degeneracy point (proved)

At γ = 1/2 the tanh-of-log collapses to a Möbius function (SymPy, exact):

```
C(γ=½) = tanh(½ ln(1+x)) = x/(x+2)
⇒ (1−C)/C = 2/x
⇒ ρ_DE = ρ_m · 2/x = ρ_m0 a⁻³ · 2/(x₀a⁻³) = 2ρ_m0/x₀ = const,   dρ_DE/da ≡ 0
```

So **γ = 1/2 produces an exact cosmological constant** — not approximately, identically.

Further, with the calibration applied, SymPy confirms the difference is exactly zero:

```
C_galactic(γ=½)  ≡  Ω_m(1+z)³ / (Ω_m(1+z)³ + Ω_Λ)  ≡  Ω_m(z)  ≡  C_cosmic  (Session #101)
```

**Session #101's "cosmic coherence formula, a different form from the galactic one" IS the galactic
form at γ = 1/2.** The declared "category error" was an arithmetic error, and the "derivation" of a new
cosmic function rediscovered a member of the family it was rejecting. Its verification table (w = −1.00
at every z) is not a result: Session #101 *imposed* `d ln ρ_DE/d ln a = 0` and solved for C. It is the
assumption read back.

**The deflation, stated plainly.** This is *one* algebraic fact with two sectoral faces, not two
coincidences. γ = 1/2 is the unique member of the tanh-log family that is Möbius in x. In the galaxy
sector Möbius C is exactly the simple-μ MOND interpolating function (already on record: `C = x/(x+2) =
μ_simple(x/2)`). In the cosmic sector Möbius C is exactly Λ. Both collapses follow from the same
degeneracy.

What is *not* algebra is that the galaxy data independently pull there: the archive's free-γ SPARC fit
returns **γ ≈ 0.489** with "RMS identical to McGaugh to four digits" (`Session661`). That is **2.2% from
the point at which the framework has zero content in both sectors simultaneously.**

⚠ **Caveat that must travel with that sentence.** The SPARC γ is fitted in **acceleration** space
(x = g_bar/a₀ — established 2026-08-09), while this cosmic γ lives in **density** space (x = ρ̄/ρ_crit).
They are not the same parameter unless the g_bar→ρ substitution is exact, which is open. The numerical
agreement is suggestive, not licensed.

---

## 4. The sign-lock theorem, and the quadrant it forbids

The cosmic sector has **no free calibration**. Ω_m ≡ 8πGρ_m0/(3H₀²) by definition, and the modified
Friedmann gives H₀² = 8πGρ_m0/(3C₀); therefore **C₀ = Ω_m identically — forced, not fitted**. x₀ then
follows from γ. **γ is the only knob.** The model traces a one-dimensional curve in the (w₀, wₐ) plane.

From the closed form, two exact limits (numerically confirmed, and w(z) monotone throughout):

```
z → ∞   (x → ∞, C → 1)   :   w → −2γ
a → ∞   (x → 0, C → γx)  :   w → −1     ← for EVERY γ, independent of x₀
```

Therefore:

| | far past | today | far future | consequence |
|---|---|---|---|---|
| γ > 1/2 | −2γ < −1 | w₀ < −1 | → −1 | wₐ < 0 |
| γ = 1/2 | −1 | −1 | −1 | w ≡ −1 exactly (ΛCDM) |
| γ < 1/2 | −2γ > −1 | w₀ > −1 | → −1 | wₐ > 0 |

**`sign(w₀ + 1) = sign(wₐ)` for every γ.** `w = −1` is an attractor the model approaches from one
fixed side and can never cross. **The framework structurally cannot produce a phantom crossing.**

DESI DR2 ([arXiv:2503.14738](https://arxiv.org/abs/2503.14738)) prefers exactly a crossing — w₀ > −1
**with** wₐ < 0 — in all four combinations:

| dataset | w₀ | wₐ | quadrant |
|---|---|---|---|
| BAO+CMB | −0.42 ± 0.21 | −1.75 ± 0.58 | w₀ > −1, wₐ < 0 |
| BAO+CMB+Pantheon+ | −0.838 ± 0.055 | −0.62 ⁺⁰·²²₋₀.₁₉ | w₀ > −1, wₐ < 0 |
| BAO+CMB+Union3 | −0.667 ± 0.088 | −1.09 ⁺⁰·³¹₋₀.₂₇ | w₀ > −1, wₐ < 0 |
| BAO+CMB+DESY5 | −0.752 ± 0.057 | −0.86 ⁺⁰·²²₋₀.₂₀ | w₀ > −1, wₐ < 0 |

Scanned locus, γ ∈ [0.05, 20], CPL-projected by fitting E(z): **0 of 16 γ values reach the DESI
quadrant.** For γ > 1/2 the locus sits in (w₀ < −1, wₐ < 0); for γ < 1/2 in (w₀ > −1, wₐ > 0). It passes
through ΛCDM and enters only the two quadrants *adjacent* to DESI's.

Forcing the match on w₀ and reading off what wₐ is then compelled to be:

| dataset | required γ | forced wₐ | DESI wₐ | offset |
|---|---|---|---|---|
| BAO+CMB | 0.1026 | **+0.207** | −1.75 | 3.4σ, wrong sign |
| BAO+CMB+Pantheon+ | 0.2978 | **+0.290** | −0.62 | 4.1σ, wrong sign |
| BAO+CMB+Union3 | 0.1934 | **+0.319** | −1.09 | 4.5σ, wrong sign |
| BAO+CMB+DESY5 | 0.2384 | **+0.323** | −0.86 | 5.4σ, wrong sign |

Note the physical reading: DESI's preference is the signature of **thawing** dark energy (w rising away
from −1). The framework produces the opposite — dark energy **relaxing toward** −1 from a fixed side.

---

## 5. Honest bounding — what is refuted, and what is not

Four separate places where this could have been over-refuted, and what happens when they are handled
properly. (Standing rules applied: *declare the null by permutation, not convention*; *state which
nuisances were marginalised and which were fixed*.)

**(a) The naive H(z) comparison over-refutes by ~5.6×.** At fixed Ω_m = 0.3 and fixed scale, the γ = 2
branch sits **−9.8%** below ΛCDM at z ≈ 0.72, against ~1% BAO precision — a "10σ kill." But Ω_m and the
r_d·H₀ combination are exactly the nuisances BAO cannot separate from shape. **Profiling both** (script,
`gamma_constraint_marginalised()`, reference ΛCDM Ω_m = 0.315, 0.3 < z < 2.33):

| γ | rms shape residual, Ω_m and r_dH₀ marginalised | profiled Ω_m |
|---|---|---|
| 0.2 | 1.046% | 0.296 |
| 0.3 | 0.651% | 0.317 |
| 0.489 | **0.031%** | 0.316 |
| 0.5 | **0.000%** | 0.315 |
| 1.0 | 0.973% | 0.291 |
| 2.0 | **1.756%** | 0.270 |

γ = 2 is in real tension but **is not a 10σ kill — it is ~1.8% rms against ~1% precision.** Had I
reported the fixed-parameter number this would have been the program's fifth self-inflicted
over-refutation. It is reported here only as a demonstration of the gap.

**(b) The γ ≈ 1/2 branch is not refuted at all — it is exactly as disfavoured as ΛCDM, and no more.**
It *is* ΛCDM in the background. It inherits ΛCDM's 2.8–4.2σ DESI tension identically. Claiming the
framework is "refuted by DESI" here would be claiming ΛCDM is refuted by DESI.

**(c) The "pull" columns in the script output are deliberately not used above.** w₀ and wₐ are
anti-correlated at ρ ≈ −0.9 in the published contours; a quadrature distance ignoring that
**overstates** tension. Only the quadrant statement — which needs no covariance — is load-bearing.

**(d) The no-go is conditional on the substitution, and this is the real escape hatch.** Session #100
*substitutes* G_eff = G/C into the Friedmann equation; it does not derive the 00-component from a
covariant action. A proper covariant completion of Appendix D would generate Ċ terms absent here, and
those could in principle move the locus. **The theorem holds for the model as specified, not for every
possible completion.** That is the single most valuable open lead this produced.

One nuance in the framework's favour, which should not be lost: the source branch (L1,
`∇²Φ = 4πGρ/C`) was ruled out a priori in the galaxy sector by a **vacuum source floor** (C → 0 as
ρ → 0). That objection **does not apply to the FRW background**, where ρ̄ > 0 everywhere. Cosmology is
the one arena where L1 is well-defined.

---

## 6. The cosmic ρ_crit is unanchored by a factor of 1.5 × 10¹⁰

Because C₀ = Ω_m is forced, the cosmic ρ_crit is *determined*, so it can be checked against the galaxy
sector's own scaling law `ρ_crit = A·V_flat²`, A = 0.029, ρ in M⊙/pc³, V in km/s (units verified against
the site's NGC 3198 worked example: ρ_crit = 652.3 → V_flat = 150.0 km/s ✓).

| | ρ_crit (M⊙/pc³) | implied V_flat |
|---|---|---|
| NGC 3198 (site's own worked example) | 652.3 | 150 km/s |
| cosmic, γ = 1/2 | 4.41 × 10⁻⁸ | **1.23 m/s** |
| cosmic, γ = 2 | 2.26 × 10⁻⁷ | 2.79 m/s |

**Ratio 1.48 × 10¹⁰.** The A·V² law would need a "flat rotation velocity of the universe" of ~1 m/s.
The honest reading is not that this is absurd — it is that **ρ_crit is not a constant of the framework
at all**; it is a per-system fitted quantity with no relation connecting its values across sectors.
This is the sharpest quantification to date of the "C is doubly unanchored" status.

Exact identity worth recording: at γ = 1/2, `ρ_crit,cosmic = ρ_Λ/2` (verified to 7 digits).

---

## 7. Why this arena matters methodologically

SESSION_FOCUS (2026-08-09) established that the framework's stated density law **is not computable on
the dataset its refutations run on**: SPARC yields g_bar, and reaching ρ needs a vertical-structure
model SPARC does not measure. That is why five of six ledger refutations run in acceleration space.

**The cosmological background is the one observable where ρ is known exactly and without a structural
model**: ρ̄(z) = Ω_m ρ_c (1+z)³. No estimator choice, no velocity definition, no vertical structure.

So this is the framework's **only clean density-space test**, and it yields the first density-space
constraint on γ that has ever existed. It is also, as it happens, the arena where the answer is
γ = 1/2 — the value at which the framework has no content.

---

## 8. Pre-registration (prospective; registered 2026-08-10, before DR3)

`/falsifiability` reports 0 of 24 tests completed prospectively. This makes it 1.

> **TEST-26 (proposed ID; verify against the flat namespace before assigning).**
> **Claim.** The Synchronism cosmic sector on the source branch (G_eff = G/C in the Friedmann equation,
> C₀ = Ω_m forced, γ the only parameter) requires **sign(w₀ + 1) = sign(wₐ)** and cannot produce a
> w = −1 crossing, for any γ and any calibration.
> **Refuted if** a DESI DR3 (or comparable Stage-IV) (w₀, wₐ) contour excludes the sign-locked locus at
> > 3σ using the *full published covariance* — not a quadrature distance — with a single stated SNe
> compilation fixed in advance, and with Ω_m and r_d H₀ marginalised.
> **Confirmed-relevant if** the evolving-DE preference weakens toward (w₀, wₐ) = (−1, 0), which the
> γ → 1/2 branch matches exactly.
> **Not discriminating against ΛCDM in the confirming direction** — γ = 1/2 *is* ΛCDM. This test can
> only kill the framework or tie. Recorded explicitly so a later tie is not read as a success.
> **Nuisances**: Ω_m, r_d H₀ marginalised. **Fixed**: flatness, no radiation, no massive-ν freedom.
> **Timeline**: DESI DR3 ~2027–2028.

Note the structural parallel already on record for the galaxy sector — "MOND ∩ {B ≤ 3.17}: a strict
submodel that could only tie or lose." **The cosmic sector has the same shape**: a one-parameter
deformation of ΛCDM whose optimum *is* ΛCDM and whose every other member is worse. That is now two
sectors with the same architecture, which is a statement about the framework's construction rather
than about any one test.

---

## Action: Maintainer

Six items. **Do not bump the refutation count** — nothing here is refuted that was not already.

1. **`/honest-assessment:1323` — the sentence is false and must be rewritten, not annotated.**
   (Per the 2026-08-10 append-fix finding: rewrite the lead, don't append a box.) Replace "It does
   not: C(ρ) contains no dark-energy sector and no mechanism that modifies the expansion history" with
   the positive statement: the framework *does* have one (`Session100_Modified_Friedmann`, 2025-12-08),
   it yields w(z) running from −2γ to −1, and it **forbids** the phantom crossing DESI prefers.
2. **`Synchronism/PREDICTIONS.md:152` — retract the DATED SCOPE NEGATIVE.** Keep the date and the
   reasoning visible (it is a good record of the failure mode); replace the conclusion. Its
   "Verified before registering" line should be corrected to name what was actually grepped.
3. **Add the verification rule** wherever registration discipline is documented: *negative existence
   claims must be verified against `Research/` + `manuscripts/`, never against compilation documents.*
4. **Correct Session #100 and #101 in place** with a dated erratum: the w_eff sign error, the dropped
   −1, and the proof that `C_cosmic = C_galactic(γ=1/2)` so that #101's "category error" framing is
   withdrawn.
5. **`/top-5-tests` — this is a candidate to repopulate the page** emptied on 2026-08-10, with the
   honest caveat that it is a kill-or-tie test, not a discriminating one.
6. **`/falsifiability`** — 0 of 24 prospective becomes 1, if dp adopts the registration above.

---

## Open Threads

1. **Derive the 00-component covariantly from Appendix D** and re-run. This is the only identified
   route that could move the locus off the sign lock, and it is the highest-value follow-on in the
   whole cosmology sector. If the Ċ terms do not break the lock, the no-go becomes unconditional.
2. **Is the sign lock generic?** It followed from `w(a→∞) = −1` and `w(z→∞) = −2γ`. Which functional
   families of C avoid it? A family whose ρ_DE is *non-monotone* in a would be the target. This is a
   well-posed, small, and potentially publishable no-go.
3. **The g_bar→ρ substitution now has a second handle.** The galaxy sector cannot test the density law;
   the cosmic sector can only test the density law. Comparing the γ each prefers (0.489 acceleration
   vs 1/2 density) is the closest thing to a direct test of the substitution that exists — *if* someone
   works out what relation the substitution implies between them.
4. **Session #107's DESI forecasts (3.1–3.2σ fσ₈ discrimination) were never audited** and predate the
   TEST-04a correction that found the registered fσ₈ criterion was met at only ~1.5σ. That looks like
   the same over-forecast pattern, and it is an unopened file.
5. **`Session223_GR_Dark_Energy_Connection.md` and the rest of the cosmology arc are unread by this
   session.** I opened four of ~20 files. The arc may contain further material the compilation layer
   has dropped.
