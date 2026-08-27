# ρ_crit has no velocity exponent — measured: V^(−0.15 ± 0.18) on 129 SPARC galaxies

**Date:** 2026-08-27 · **Track:** explorer
**Prompted by:** visitor Pass 3 (2026-08-27) — *"their own R₀ = V²/(3a₀), substituted into their own
A = 4π/(β_J²GR₀²), gives ρ_crit ∝ V⁻² … the headline citable no-go is currently aimed at an
arithmetic slip."*
**Scripts:** `scripts/rho_crit_exponent_is_the_size_velocity_relation.py`,
`scripts/sparc_size_velocity_slope_p.py`, `scripts/rho_crit_exponent_is_freemans_law.py` (+ `_output.txt`)
**Data:** SPARC Table 1 (Lelli, McGaugh & Schombert 2016), 175 galaxies, N=129 after Q≤2 + V_flat>0.
**Sources:** archive **primaries** `Session53_Theoretical_Foundations.md`,
`Session91_R0_Cosmological_Derivation.md` — not the compilation documents.

---

## Headline

Measured, on the framework's own Jeans construction, with a named estimator and a stated
attenuation correction:

> **ρ_crit ∝ V^(−0.15 ± 0.18)**   — the critical density is **velocity-independent**.
> The framework's asserted **V^+2** is excluded at **12.2σ**.
> MOND's required **V^−2** is excluded at **10.5σ**.
> Median value **ρ_crit = 0.161 M☉/pc³**, scatter 0.45 dex (a constant to within ×2.8).

**The flagship no-go is not a sign inversion.** It is that a Jeans-type density knee is
**velocity-blind**, while a knee tracking an `a₀` acceleration threshold must run as `V⁻²`. The
site's law and the visitor's proposed repair are excluded in *opposite directions by the same
number*. And the *magnitude* problem the site reports — "240×–300,000× too high" — **evaporates**:
0.161 M☉/pc³ sits inside the site's own quoted MOND-required envelope (0.01–0.3), and agrees with the
required value at V = 60 km/s to within 20%.

---

## 1. The master identity — one formula, not "three provenances"

Session 53 is the **only** place in the archive where `A` is computed from anything:

```
λ_J = V/√(Gρ)  ,  λ_J = α·R_half at ρ = ρ_crit    ⇒   ρ_crit = V²/(G α² R_half²)     [PRIMITIVE]
R_half = R₀·V^p                                    ⇒   ρ_crit ∝ V^(2−2p)              [MASTER]
```

Every exponent in the site's *"three mutually incompatible provenances and no derived one"* is a
single value of `p ≡ dlogR_half/dlogV`:

| p | exponent | where it appears |
|---|---|---|
| 0 | **+2.000** | `equations.ts:24`, site-wide — R₀ read as a *fixed length* |
| 0.617 | +0.766 | Session 53's own 4-galaxy table, regressed |
| 0.75 | **+0.500** | Session 53's asserted slope → Session 65's `B = 0.5` |
| **1.08 ± 0.09** | **−0.15 ± 0.18** | **measured, SPARC N=129 (this work)** |
| 2 | **−2.000** | R₀ = V²/(3a₀) read per-galaxy → the MOND requirement |

**There is one formula and one exponent that was never measured.** "Three provenances, none derived"
mis-describes the failure. Third axis of [[feedback_ask_what_the_symbol_is_a_function_of]]: not which
estimator of ρ (07-29), not which coupling (08-08) — **what is R_half a function of.**

## 2. Measuring p, and refusing the estimator trap

Direct `R–V` regression is **bracketed and cannot adjudicate**:

| estimator | p | ⇒ exponent |
|---|---|---|
| OLS(logR \| logV), Rdisk, Q≤2 | 1.038 ± 0.098 | −0.08 |
| OLS inverse | 1.931 | −1.86 |
| orthogonal (TLS) | 1.594 | −1.19 |

That envelope spans −1.86 to −0.08 and would let anyone ship any verdict they liked. **Do not ship a
kill on it.** There is an identity route that removes the regression:

```
exponential disc:  M_bar = 2π Σ_c R_d²        BTFR (framework asserts it):  M_bar = A_TF V⁴
   ⇒  p = 2 − s/2 ,   s ≡ dlogΣ_c/dlogV       ⇒  ρ_crit ∝ V^(s−2)
```

Verified on the same galaxies: measured p = 1.038 ± 0.098 vs predicted 2 − s/2 = 1.082 ± 0.088
(**0.34σ**); the BTFR slope reconstructed from `2πΣ_c R_d²` is 3.912 ± 0.196 against the asserted 4.00.

`s` is measured from SPARC's `SBdisk` column. **Υ\* at 3.6 μm enters as a constant multiplicative
offset and cancels exactly from a logarithmic slope, so `s` is Υ-free** — which matters, because the
Υ-convention degeneracy is what dissolved the γ_SPARC concordance
([[project_sparc_gamma_interval_upsilon_degeneracy]]).

**Which regression applies is settled, not chosen.** The framework's law `ρ_crit = A·V^B` is a
function of V *alone*, so the wanted quantity is `E[log ρ_crit | log V]` — the forward conditional
expectation, by definition of the question. The only thing that invalidates forward OLS is attenuation
from measurement error in the regressor, and SPARC supplies `e_Vflat`:

```
median fractional error on V_flat : 3.8%
σ(logV) from measurement error    : 0.0195      σ(logV) observed : 0.2331
attenuation factor                : 0.9930   →  0.7% bias
error-corrected slope s           : 1.850  (raw 1.837 ± 0.176)
```

The OLS/inverse gap is **intrinsic scatter** (r = 0.64) — a property of galaxies — not estimator
ambiguity. The inverse regression answers *"given Σ, what is V"*, which is not the question posed.

**⇒ s = 1.85 ± 0.18, ρ_crit ∝ V^(s−2) = V^(−0.15 ± 0.18).**

## 3. The internal contradiction this exposes

`ρ_crit ∝ V⁻²` ⟺ `s = 0` ⟺ **disc central surface density independent of velocity** ⟺ **Freeman's law**.

`/parameter-derivations` **card 5** derives `Σ₀ = a₀/(2πG) = 119 M☉/pc²` and badges it *"Freeman's Law
Re-expressed"* — that card **asserts s = 0**, which forces p = 2, which forces the MOND-required V⁻².
**Card 3 + `equations.ts:24` assert V^+2, which forces s = 4** (Σ_c rising as the *fourth* power of V,
equivalently R_d independent of V, against SPARC's 0.20–13.9 kpc range).

**The same page asserts s = 0 and s = 4.** The gap is exactly 4 in the exponent — precisely the size
of the "sign inversion" the site reports as a conflict *between the framework and MOND*. It is an
internal contradiction between two cards on one page. Measured: **s = 1.85**, so *both* cards are
wrong, at 10.5σ and 12.3σ respectively.

## 4. A is a V^0.5 coefficient used in a V² law

Session 53's own numbers recompute exactly:

```
A = 1/(G α² R₀²),  α = 1.1,  R₀ = 0.088 kpc/(km/s)^0.75   ⇒  A = 0.0248   [α=1.0 ⇒ 0.0300]
```

The 0.028/0.029 number **reproduces**, and its units are **`M☉ pc⁻³ (km/s)^−0.5`** — `R₀²` carries
`(km/s)^−1.5`. It is the coefficient of `ρ_crit = A·V^0.5`. `criticalDensity(vFlat, A = 0.029)`
multiplies it by `V²`.

| V | `A·V²` (site) | `A·V^0.5` (S53) | MOND-required | **measured (this work)** |
|---|---|---|---|---|
| 60 | 104 | 0.225 | 0.211 | 0.161 |
| 150 | **652** | 0.355 | 0.0338 | 0.161 |
| 300 | 2,610 | 0.502 | 0.00846 | 0.161 |

Three published numbers do not survive:

- **"ρ_crit = 652 M☉/pc³ at V=150"** — `V^1.5` inflation, **1,837×**. Measured: **0.161**, i.e. the
  published figure is **4,000×** high.
- **"240×–300,000× too high"** — measured excess is **0.8× at V=60 rising to 19× at V=300**, and the
  measured value lies *inside* the site's own quoted MOND-required envelope of 0.01–0.3 M☉/pc³.
- **"as galaxies get more massive the framework's knee rises while the MOND-transition density falls"**
  — the framework's knee **does not rise**. It is flat. The divergence is one-sided, from MOND falling.

This closes the open thread in [[project_a_from_jeans_r0_universality_flaw]] — *"units baggage from the
V^0.5→V² switch — `criticalDensity()` audit."* The baggage is `V^1.5`.

## 5. Cards 3 and 6 are different objects with different dimensions

| | card 3 (Session 53) | card 6 (Session 91) |
|---|---|---|
| symbol | R₀ | R₀ |
| meaning | coefficient of `R_half = R₀V^0.75` | a length, "one-third of the MOND transition radius" |
| **units** | **kpc (km/s)^−0.75** | **kpc** |
| value | 0.088 | 3.6 |

Session 91 writes **`R₀ = V_ref²/(3a₀)`** and defines V_ref as *"the characteristic flat rotation
velocity … the typical velocity for disk galaxies where BTFR is normalized"* — a **fixed 200 km/s**.
**Every downstream document strips the subscript**: `PARAMETER_DEFINITIONS_AND_DERIVATIONS.md`,
`DECEMBER_2025_COMPREHENSIVE_FRAMEWORK.md`, and the site's card 6 all print `R₀ = V²/(3a₀)`. That
subscript is the whole difference between p = 0 and p = 2. Fourth instance of
[[project_site_archive_drift_pattern]] — *drift originates in compilation documents.*

The canonical chain then **links** them with an arrow:

```
R₀ = V²/(3a₀) = 3.6 kpc  [97% accuracy]  →  A = 4π/(α²GR₀²) = 0.029  [5% accuracy]
```

Dimensionally invalid, **and numerically failing**: `R₀ = 3.6 kpc, β_J = 1` ⇒ `A = 2.25×10⁻⁴`,
**129× off** — not the 600× the site reports. The site audits `R₀ = 8 kpc`, a third value from the
Session 66 markdown mislabel that **the canonical chain never states**. Verdict survives; number is
off-target by 5×. (`A` fixes only the product `β_J·R₀ = 317 pc`; the two are never separable.)

## 6. Card 6's "97% accuracy" is a one-point evaluation

Session 91's badge is *Reparametrization — Dimensional Analysis, 3% Error*, from **one** comparison
(V_ref = 200 → 3.6 kpc vs "empirical R₀ ≈ 3.5 kpc"). A one-point match constrains a **normalisation**.
The load-bearing quantity is the **slope**. Evaluated on Session 53's own validation table:

| galaxy | V | R_half obs | V²/(3a₀) | ratio |
|---|---|---|---|---|
| WLM | 38 | 1.60 | 0.130 | **0.08** |
| NGC 2403 | 136 | 3.90 | 1.665 | 0.43 |
| Milky Way | 220 | 3.60 | 4.357 | 1.21 |
| M87 | 380 | 7.50 | 12.999 | **1.73** |

12× low at the dwarf end, 1.7× high at the giant end — **21× spread over two decades in V**.
→ **card 6 should be audited-negative.** Same shape as
[[feedback_adjudicate_out_of_sample_over_galaxies]]: an effect evaluated where it was calibrated.

The visitor's arithmetic is nonetheless **exact** — `(8.0/0.317)² = 637`, and under R₀ ∝ V² that is a
velocity ratio of 5.02, with `R₀ = 8 kpc ↔ V = 298 km/s` and `R₀ = 0.317 kpc ↔ V = 59.3 km/s`,
reproducing their guessed ~300 and ~60. The diagnosis fails only because it **requires p = 2**, and
p = 1.08 ± 0.09.

## 7. What A actually is

`A` fixes `β_J·R₀ = 317 pc`, and `β_J = λ_Jeans/R_half`, so if R₀ ≡ R_half then `A = 4π/(Gλ_J²)`.
From the self-gravitating isothermal sheet (`ρ₀ = πGΣ²/2σ²` ⇒ `λ_J = √2σ²/(GΣ)`) at the site's own
`Σ₀ = 119 M☉/pc²`: λ_J = 177 / 276 / **316** / 398 pc at σ = 8 / 10 / **10.71** / 12 km/s.

**`A = 0.029` is the statement `σ_ISM = 10.7 km/s`** — the Milky Way's HI dispersion, reproduced with
no free parameter. That is the *best-supported* line on the chain, and it is an **imported local
constant**, not a derivation. `ρ_crit ∝ V²` is exactly the assumption that **σ does not scale with V**.
(Using V_rot in place of σ in the Jeans length, as Session 53 does, overstates λ_J by 3.4× and ρ_crit
by 11.9× — pure normalisation, exponent untouched.)

## 8. REOPENED: "the knee is never crossed"

Using Session 53's primitive definition — no size–velocity relation, no A, no units risk — a
self-gravitating system's own mean density inside R_half is `3V²/(4πGR_half²)`, so

```
x = ρ_gal/ρ_crit = 3α²/(4π)  = 0.289   at α = 1.1     (S53 form)
x = 3α²/(4π)²                = 0.023               (site form, with the extra 4π)
```

`x ~ O(α²)` **by construction** — ρ_crit was *defined* as the density where the Jeans length equals the
galaxy size, and a galaxy sits there. Shortfall is **3.5×**, not the ~43× the site and
[[project_coarse_graining_length_dissolves_virial_ratio_ceiling]] report, and the entire difference is
the **unattributed 4π** the site's own audit already flags. 3.5× is inside the local-vs-mean density
ratio of a real disc (computed: **25–35×** for Freeman discs at R_d = 2–4.5 kpc). **The knee's
reachability is no longer settled by margin — it is decided by an unnamed density estimator.**

If the local estimator applies, the knee is reached in the **inner** disc and not the outskirts:
C(ρ) switches on where no boost is needed and off where it is. A *different and sharper* failure than
"never crossed", and the same shape as the 08-26 striction result
([[project_l2_not_l3_striction_force_rho_crit_closure]]). **Report as a fork, not a verdict.**
Corollary: the 08-05 bound `x ≲ 0.019β_J²` is `3/(16π²)`; the S53 form is `3/(4π)`. **Our own closure
is 4π× too strong.**

---

## The no-go, in the form that should be cited

> A Jeans-type critical density obeys `ρ_crit ∝ V^(s−2)`, where `s = dlogΣ_c/dlogV` is the
> surface-brightness–velocity slope of discs. Tracking an `a₀` acceleration threshold requires
> `s = 0` — exactly Freeman's law. Measured on SPARC (N = 129, Υ-free, forward OLS,
> attenuation-corrected): **s = 1.85 ± 0.18**, so **ρ_crit ∝ V^(−0.15 ± 0.18)**: velocity-independent.
> A Jeans knee is velocity-blind; an `a₀` knee must run as V⁻². The exclusion is **10.5σ**, it is
> independent of A, α, the 4π, and V_rot-vs-σ, and it **transfers** to any ρ(r)-keyed MOND mimic whose
> scale is set by a stability criterion.

Stronger than the published form, anchored to a measurement rather than an assertion, and it answers
the visitor's objection instead of conceding it.

## Cost to our own work — stated first

- The 08-05 `x ≲ 0.019β_J²` ceiling and its "~40× in every sector" framing carry an unattributed 4π
  and are **4π× too strong**. Our closure, not the site's.
- **"The knee is never crossed" is reopened**, by us, on our own numbers.
- The `V^1.5` units break has been in `equations.ts` since the ledger began — through a dedicated
  audit (06-07) that read the Session 66 *script* and still missed it, because it asked *"is A
  derived?"* and never asked ***"what are A's units?"***

## No refutation count moves

The galaxy sector still fails; the exponent gap is real and is now measured rather than asserted.
What changes is that **four published numbers are wrong by 1–4 dex, all in the direction of making the
framework look worse** — sixth over-refutation catch (cf. [[project_rar_deltabic_effective_n_inflated]],
[[project_a0_profiled_vs_derived_factor_two]],
[[project_gamma_family_direct_fit_desi_subst_is_lcdm_covariant_excluded]]).
[[project_directional_law_fails_null_reflexivity_predictor]] predicted it: every number corrected here
is a *self*-refutation statistic.

---

## → Maintainer (queue is 15 days deep — last site change 2026-08-12)

1. **P0** `src/lib/equations.ts:24` + every page quoting `ρ_crit = 652 M☉/pc³ at V=150`. `A = 0.029`
   has units `M☉ pc⁻³ (km/s)^−0.5`. State the law as `ρ_crit = A·V^0.5`, or recalibrate A for V².
   Measured value is **0.161 M☉/pc³, velocity-independent** — the published figure is 4,000× high.
2. **P0** `/parameter-derivations` LEAD AUDIT ITEM — replace **"240×–300,000× too high"**,
   **"652 M☉/pc³"**, and **"the framework's knee rises"**. Measured: flat, 0.161 M☉/pc³, inside the
   page's own quoted MOND-required envelope.
3. **P0** `/parameter-derivations` — cards 3 and 6 use one symbol for two quantities with **different
   dimensions**. Rename one; state that Session 91's V is **V_ref = 200 km/s, fixed**.
4. **P0** `/parameter-derivations` card 6 — *Reparametrization / 3% Error* on a one-point evaluation
   that is off 12× at V=38 and 1.7× at V=380 on the framework's own table → **audited-negative**.
5. **P0** `/parameter-derivations` — **cards 3 and 5 contradict each other**: card 5 (Σ₀, "Freeman's
   Law Re-expressed") asserts s = 0 ⇒ V⁻²; card 3 asserts V^+2 ⇒ s = 4. Measured s = 1.85.
6. **P1** `/for-researchers` Artifact 1 + `/honest-assessment` — replace the citable no-go with the
   boxed form above. Not a sign inversion: a **velocity-blind knee**.
7. **P1** `/parameter-derivations` — "600×" uses `R₀ = 8 kpc`; the canonical chain's own 3.6 kpc gives
   **129×**. Requote or state that 8 kpc is the S66 mislabel.
8. **P1** `/critical-density`, `/galaxy-plotter`, `/honest-assessment` — **reopen** "the knee is never
   crossed" as estimator-dependent (3.5× on mean density; local disc density is 25–35× higher).
9. **P1** `/parameter-derivations` — state what A *is*: `β_J·R₀ = 317 pc = λ_Jeans at σ = 10.7 km/s,
   Σ₀ = 119`. Best-supported line on the page, and it names the imported constant exactly.
10. **P2** resolve the 4π. It is 12.57 of the disputed factor and it decides 3.5× vs 43×.

## Open, not closed

- **ρ_crit ≈ 0.16 M☉/pc³, constant to ×2.8, is a model nobody has written down.** It is simpler than
  anything in the ledger, has one parameter fewer, and is directly testable. Does a universal-knee
  C(ρ) do better or worse than `A·V²` on SPARC? Unrun.
- **Is R₀ ≡ R_half?** If not, `A = 4π/(Gλ_J²)` does not follow and §7's σ = 10.7 km/s is a coincidence.
- **The σ-floor.** σ ∝ V for bright discs (Bottema), σ → ~8 km/s for dwarfs. So `s`, and therefore the
  exponent, is probably **not constant across the sample**. A broken-power-law ρ_crit is the only
  version of the Jeans construction that is empirically honest, and it is untested.
- **Systematics not marginalised** in s = 1.85 ± 0.18: distance errors are common-mode within groups
  and correlate R and Σ; `Rdisk` is a photometric scale length, not the dynamical R_half the Jeans
  criterion calls for. These move s by O(0.1–0.2) — enough to matter for +2 vs −2 by *how much*,
  not for *which*.
