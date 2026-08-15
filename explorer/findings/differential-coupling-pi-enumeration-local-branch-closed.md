# The differential-coupling branch is closed — and the counterexample that opened it was mischaracterised

**Session**: 2026-08-15 explorer
**Topic**: `explorer/topics/differential-coupling-completion.md` (archived)
**Script**: `explorer/findings/scripts/differential_coupling_pi_enumeration_real_sparc.py`
**Output**: `explorer/findings/scripts/differential_coupling_pi_enumeration_output.txt`
**Refutation count**: **UNCHANGED at 6** — this closes a *constructive lead*, it does not refute a
published prediction. Same accounting class as the covariant-completion and B_max-epoch closures.

---

## Headline

The galaxy sector's stated last un-eliminated constructive direction — a coupling **differential**
in ρ rather than algebraic — is closed, at class level, on real SPARC data. Three results:

1. **The class is exactly two-dimensional.** Buckingham π on `F(ρ, |∇ρ|, ∇²ρ; G, a₀)` gives
   *exactly two* independent dimensionless groups. "Which F?" is not an open search; it is a
   closed question, and both groups can be tested at once.
2. **Neither group carries the boost.** Every group in the class explains **≤ 0.16 %** of the RAR
   residual — *less* than local ρ's ≤ 0.7 % (2026-08-02). The full 2-argument class conditioned
   jointly still sits 1.53× above the MOND benchmark. Stable across derivative estimator, window,
   scale height, gas treatment, derivative order **and** ϒ ∈ [0.30, 0.80].
3. **The escape class the counterexample was filed under is empty.** The site's escape taxonomy
   lists *"**differential** **local**-density coupling (symmetron-class)"* as a live escape, and
   demoted the locality no-go's scope on 2026-07-27 on that basis. But BCM 2017's symmetron is
   **not local**: φ solves a nonlinear screened field equation, and BCM's own closed form — which
   the site itself quotes — is written in **g_bar**, the non-local variable. The no-go's scope was
   demoted on a **misclassification**, not on a counterexample to what it actually claims.

Net: the locality no-go's scope should be **restored** — no *local* coupling, algebraic or
differential, at any derivative order, reproduces the RAR — now with empirical backing rather than
assertion. This re-opens the preprint question that has been blocked since 07-27.

---

## 1. The gap: smoothing is not differentiating

The topic inherited "the scatter axis is closed by the RAR no-go (2026-08-02)". It is not.

The 08-02 script's constructive section convolved Σ(r) with **exponential smoothing kernels** of
range λ and scanned λ from 0 to ∞. It then closed with:

> "Making the coupling differential is not a free dial — the data fixes the required kernel to the
> Newtonian one."

Smoothing and differentiating are **opposite operations**. No gradient of ρ entered that scan at
any λ. The sentence generalises an *integral*-kernel result to the *differential* class. Combined
with 07-28, which hand-checked exactly two forms (`|∇ρ|`, `|∇ln ρ|`), the differential class had
**two sampled members and zero bounds** when this session opened.

This is the `feedback_check_for_an_existing_explanation_before_accepting_a_new_one` failure shape
in a new place: a correctly-computed result carrying a conclusion one class wider than its own test.

---

## 2. PART A — the class is exactly two-dimensional

A local differential coupling is a dimensionless `F(ρ, s₁, s₂; G, a₀)` with `s₁ = |∇ρ|`, `s₂ = ∇²ρ`.
Seeking `π = ρ^a s₁^b s₂^c G^d a₀^e`:

```
M :   a + b + c − d           = 0
L : −3a − 4b − 5c + 3d + e    = 0
T :             −2d − 2e      = 0   ⇒ e = −d
```

giving `d = a+b+c` and `a = −2b − 3c`. Two free exponents; the dimensional matrix has rank 3 over
5 quantities. **The null space is exactly 2-dimensional.** A convenient basis:

| group | definition | character |
|---|---|---|
| `x_diff` | `G ρ² / (a₀ \|∇ρ\|)` | **scale** group (the differential analogue of `x = ρ/ρ_crit`) |
| `q` | `ρ ∇²ρ / \|∇ρ\|²` | **shape** group — free of *both* G and a₀ |

**Structural result 1 — this cuts toward the framework.** The algebraic branch needs a free density
scale `ρ_crit` to form `x = ρ/ρ_crit`, and `ρ_crit` is degenerate with γ. The differential branch
needs **no new constant at all**: `x_diff` uses only G and a₀, and `q` uses neither. The
differential branch is strictly *less* parameterised than the algebraic branch it would replace.
That is a genuine structural advantage, and it is why the branch deserved execution rather than
dismissal.

Adding `∇³ρ` adds exactly one more group (tested in §6 — it behaves identically).

---

## 3. PART B — the vacuum fork, and the thin-disk problem

What killed the algebraic branch (2026-08-03) was `C(ρ→0) = 0` exactly, making the exterior field
`g = g_bar/C` diverge. Take the site's own baseline geometry, `ρ ∝ e^{−r/R_d}`:

```
|∇ρ| = ρ/R_d        x_diff = G ρ R_d / a₀  → 0   as ρ → 0
∇²ρ  = ρ/R_d²       q      = 1  EXACTLY, at every radius, for any exponential
```

A trap with two horns:

- **Horn 1** — `F` depending on `x_diff` inherits the vacuum pathology *unchanged*. `x_diff → 0`
  exactly as `ρ → 0`, so a compander `C(x) = x^γ/(x^γ+1)` still vanishes in vacuum. The
  differential branch buys **nothing** on the axis that killed the algebraic branch.
- **Horn 2** — `F` depending only on `q` is vacuum-finite (`q → 1`), but `q ≡ 1` at *every* radius
  of a pure exponential. A coupling constant across the disk is not a modification of gravity; it
  renormalises G. This is the 07-28 degeneracy re-derived at class level.

**Structural result 2 — the midplane aspect-ratio problem.** The above is radial-only. A real disk
is thin (h ≈ 0.3 kpc vs R_d ≈ 2–4 kpc). Writing `ρ(r,z) = ρ₀(r) f(z/h)` with f even:

```
at z = 0:  ∂ρ/∂z = 0  (symmetry)      ∂²ρ/∂z² = ρ₀ f''(0)/h²
⇒ q(midplane) ≈ f''(0) (R_d/h)²  ≈ −2 (R_d/h)² for sech²  ≈ −200
```

The midplane **first** derivative is purely radial; the midplane **second** derivative is dominated
by the *vertical* term. So `q` is set by the aspect ratio R_d/h — a per-galaxy geometric constant
fixed by **the worst-constrained quantity in the problem** (disk thickness) — while the variable it
must beat, g_bar, depends only on the measured rotation curve. §4 nonetheless runs radial-only
groups, which is the **steelman**: it discards precisely the term that makes `q` a per-galaxy label.

---

## 4. PART C — execution on real SPARC

Working assumption (the same one the site's own galaxy plotter makes): for `∇·[F ∇Φ] = 4πGρ`,
symmetry integrates the operator once, so `F g_obs = g_bar` exactly and the **required** coupling is
`F_req = g_bar/g_obs`. A differential theory is viable iff `F_req` is a tight single-valued function
of its π groups. **No functional form, no γ, no ρ_crit, no fitting.**

Loader, cuts and estimator taken verbatim from the 08-02 script (Q ≤ 2, i > 30°, e_Vobs/Vobs ≤ 0.10;
ϒ_disk = 0.5, ϒ_bul = 0.7). N = 2614 points, 145 galaxies.

| variable | σ(log F_req \| ·), dex | vs g_bar |
|---|---|---|
| **no-information ceiling** (unconditional) | **0.3090** | 2.63× |
| log g_bar — MOND/RAR target | **0.1174** | 1.00× |
| log ρ — algebraic, the site's variable | 0.1607 | 1.36× |
| log R — trivial baseline | 0.2778 | 2.36× |
| **log x_diff — DIFF scale group** | **0.1945** | **1.65×** |
| **q — DIFF shape group** | **0.3002** | **2.55×** |
| \|∇ln ρ\| — the 07-28 hand form | 0.2837 | 2.41× |
| dln ρ/dln r — log-slope | 0.2566 | 2.18× |

Two things to read off:

- `x_diff` is **worse than the plain ρ it was meant to rescue** (0.1945 vs 0.1607).
- `q` sits at **0.3002 against a 0.3090 ceiling** — the shape group is very nearly pure noise with
  respect to the boost.

**The full class, conditioned jointly** (2-D equal-count binning; the most generous possible test,
assuming the best `F` any 2-argument function could be):

| conditioning | σ, dex | vs g_bar |
|---|---|---|
| **(x_diff, q) — FULL DIFFERENTIAL CLASS** | **0.1798** | **1.53×** |
| (ρ, q) — algebraic + shape | 0.1581 | 1.34× |
| (g_bar, q) — *does q add anything to MOND?* | 0.1171 | 0.99× |
| (g_bar, g_bar) — binning-cost control | 0.1210 | 1.03× |

The `(g_bar, q)` row is the sharpest single number in the session: **0.1171 against 0.1174 for
g_bar alone**, i.e. inside the 0.1210 binning-cost control. The shape group adds *literally nothing*
to MOND's variable.

---

## 5. PARTS D–H — the four objections, pre-empted

**D — is the group a per-galaxy constant in disguise?** (the 07-28 kill criterion)

| variable | within-galaxy share of variance |
|---|---|
| log g_bar | 35.0 % |
| log ρ | 69.0 % |
| log x_diff | 66.7 % |
| sign(q)·log\|q\| | **95.3 %** |
| log\|∇ln ρ\| | 71.8 % |

Honest reading, and it runs *against* the tidy version of the argument: in **real** galaxies `q`
varies strongly along each rotation curve (95.3 % within-galaxy), and the local density scale length
L has median within-galaxy scatter of **0.382 dex**. So the horn-2 degeneracy is *not* what kills
the branch on real data — the escape from it genuinely exists. **It is simply empty**: the variation
is real and uncorrelated with the boost. That is a stronger closure than the degeneracy argument,
because it does not lean on the exponential-disk idealisation at all.

**E — permutation null** (per `feedback_declare_the_null_by_permutation`). 200 permutations, same
estimator, marginal distribution preserved:

| variable | measured | null mean | null sd | z | verdict |
|---|---|---|---|---|---|
| log x_diff | 0.1945 | 0.3067 | 0.0024 | −47.6 | carries information |
| sign(q)log\|q\| | 0.3002 | 0.3067 | 0.0024 | **−2.7** | **marginal** |
| log g_bar | 0.1174 | 0.3064 | 0.0023 | −81.5 | carries information |

This is the estimator's own null built from the same noisy variable, so "q is just noisy" is not
available as a rescue: `q` is indistinguishable from its own destroyed version.

**F/G — is `x_diff` even a new variable?** For a disk, `x_diff = Gρ²/(a₀|∇ρ|) = GρL/a₀` with L the
local density scale length. Regressing:

```
log x_diff = 0.912 · log ρ + c      r = 0.8534      72.8 % of variance is ρ
σ(log F_req | x_diff residual after removing ρ) = 0.2893   ← at the 0.3090 ceiling
```

So the genuinely *differential* part of `x_diff` — what is left after ρ is projected out — carries
**no boost information at all**. `x_diff` is ρ plus noise as far as predicting the boost goes; its
z = −47.6 is entirely inherited from ρ. Holds for h = const, h = R_d/5 and h = Bershady.

**H — the decisive test.** Let `dB` = the RAR residual (log F_req minus its local g_bar relation).
If a differential group is the missing physics, it must correlate with `dB`:

| group | r(dB, group \| g_bar) | variance explained |
|---|---|---|
| log x_diff | −0.0335 | **0.11 %** |
| sign(q)·log\|q\| | −0.0225 | **0.05 %** |
| log\|∇ln ρ\| | +0.0382 | **0.15 %** |
| dln ρ/dln r | −0.0394 | **0.16 %** |
| *(reference: local ρ, 2026-08-02)* | — | *≤ 0.70 %* |

**Every group in the complete differential class carries less information about the missing physics
than the algebraic variable it was proposed to replace.**

---

## 6. Robustness — including the systematic that has killed the last several results

**ϒ sweep** (the dominant galaxy-sector systematic per 2026-08-14, which swept γ across [0.27, 0.96]):

| ϒ_disk | σ\|g_bar | σ\|ρ | σ\|x_diff | σ\|q | best diff / g_bar |
|---|---|---|---|---|---|
| 0.30 | 0.1232 | 0.1698 | 0.2177 | 0.2868 | 1.38× |
| 0.40 | 0.1177 | 0.1643 | 0.2046 | 0.2941 | 1.40× |
| 0.50 | 0.1174 | 0.1607 | 0.1945 | 0.3002 | 1.37× |
| 0.60 | 0.1164 | 0.1576 | 0.1913 | 0.2984 | 1.35× |
| 0.70 | 0.1167 | 0.1596 | 0.1890 | 0.2942 | 1.37× |
| 0.80 | 0.1180 | 0.1640 | 0.1882 | 0.2941 | 1.39× |

**Flat at 1.34–1.40× across the whole range.** This matters beyond the immediate result: the ϒ
guardrail that dissolved the γ concordance on 08-14 is **discriminating, not a universal solvent**.
It removed a false affirmation and leaves this closure standing. That is evidence the guardrail is
calibrated.

**Derivative order** (PART J): the third-order group `c₃ = ρ²∇³ρ/|∇ρ|³` gives σ = 0.2950 (2.54×) and
`r(dB, c₃|g_bar) = −0.0279`, **0.08 %**. Going to higher derivative order does not reopen the class.

**Estimator grid** (16 combinations of derivative method × window × scale height × gas): `x_diff`
0.159–0.210, `q` 0.253–0.306, g_bar 0.111–0.117. Local-quadratic windows of 5, 7, 9 and plain finite
differences all agree — **`q`'s failure is not a second-derivative noise artifact.**

---

## 7. The escape class is empty — and the site contradicts itself about it

The topic flagged the prior-art gate as "the binding constraint, not the algebra", and it was right —
but not in the direction expected. **The site's citation of BCM is accurate and unusually careful**
and should not be touched: `/for-researchers` gives the full title, PRD 95, 064050 (2017), the
erratum (PRD 95, 129902, conclusions unaltered), the 153-galaxy sample, universal Lagrangian
parameters (μ, M, λ), the force `g_sym(r) = (c²/2) d/dr[(φ(r)/M)²]`, and BCM's own closed form. That
is better sourcing than most of the site. The defect is not the citation. It is the **filing**.

**What BCM actually is.** A symmetron: φ is obtained by solving a **nonlinear field equation with
boundary conditions**, `∇²φ = V_eff′(φ, ρ)`, whose effective potential restores symmetry in dense
regions (φ → 0, coupling off) and breaks it in dilute regions. φ(r) therefore depends on the entire
surrounding matter configuration — thin-shell structure, ambient density. **φ is not a local
function of ρ.**

BCM's force is the gradient of a function of **φ**, not the gradient of a function of the local **ρ**.
That distinction is the whole ballgame, and the site's own text supplies the decisive evidence for
it: BCM's closed form, as `/for-researchers` quotes it, is

```
g_sym = g_bar / ( exp √(g_bar/g†) − 1 ),      g† ≈ 1.20 × 10⁻¹⁰ m s⁻²
```

**a function of g_bar** — the non-local variable. `g_bar = GM(<r)/r²` is an integral of ρ; a local
function of ρ and its derivatives cannot be written this way. BCM's own solution converts to the
acceleration variable, which is precisely what this session's PART C and PART H say the data demands.

**Therefore the escape taxonomy is wrong.** `/for-researchers` (line ~149) and the "scope demoted
2026-07-27" box on `/honest-assessment` both name

> *differential* local-density coupling (symmetron-class)

as a live escape class. This session's PART A–J shows that class is **empty**: no local `F(ρ, ∇ρ,
∇²ρ, ∇³ρ)` reproduces the RAR, on 2614 SPARC points, at any ϒ. And BCM does not populate it, because
BCM is not local. **The 2026-07-27 scope demotion rests on a misclassification of its own
counterexample.**

**The box already contradicts itself.** The same `/honest-assessment` box that demotes the scope on
BCM's authority goes on to say, two sentences later:

> "The discriminating axis is the *locality* of the state variable, not whether the framework is
> 'density-based.' The root obstruction is Milgrom's non-locality theorem (astro-ph/0510117)."

That is the correct statement, it names locality as the axis, and it is inconsistent with demoting
the scope on a non-local counterexample. This is the `site-audits-itself-against-itself` shape: the
box carries both the error and its own refutation, three sentences apart. The 2026-07-27 rescoping —
"the real axis was never local-vs-non-local; it was algebraic-vs-differential" — is the half that
should go.

**What restoring the scope does and does not buy.** It **does not** rescue C(ρ): C(ρ) is algebraic
and stays dead, and the differential branch that might have rescued it is now closed too. What it
buys is on the *negative-result* ledger: the citable no-go becomes *"no local density-keyed coupling,
algebraic or differential, reproduces the RAR"* — stronger than the pre-07-27 version, empirically
backed here, and consistent with Milgrom's non-locality theorem as the root obstruction rather than
competing with it.

**And the surviving branch forfeits the framework's one claimed discriminator.** Screened scalars are
environment-dependent by construction, and theories of this class generically violate the SEP, so
internal dynamics depend on the external field. The site's EFE = 0 claim rests on the algebraic
C(ρ)·g law satisfying SEP *by construction*. Buying non-locality to survive the RAR **buys EFE ≠ 0** —
closing the last discriminator from the other side, exactly as the topic predicted it might.

**Honest bound on this half.** BCM's mechanism is confirmed from its abstract, the symmetron
screening literature, and the site's own quoted closed form — **not** by reading BCM's field
equations directly (the PDF did not extract). The inference "φ non-local ⇒ not in my class" is
secure from the closed form alone, but the preprint gate should still include a direct read. This is
the one item of the session I could not fully close, and it is flagged rather than assumed.

---

## 8. What this does and does not establish

**Establishes.** Within `F(ρ, ∇ρ, ∇²ρ, ∇³ρ; G, a₀)` evaluated locally, no member reproduces the RAR;
the complete class conditioned jointly sits 1.53× above the MOND benchmark and every group explains
≤ 0.16 % of the RAR residual. Robust to derivative estimator, window, scale height, gas treatment,
derivative order and ϒ.

**Does not establish.** (i) Nothing about **non-local** couplings — screened scalars, integro-
differential couplings, or anything solving a field equation for an auxiliary field. That branch is
alive and is where BCM lives. (ii) Nothing about couplings keyed on quantities other than the density
field (e.g. `∇Φ` itself — which is MOND, and which the data does select). (iii) The `F g_obs = g_bar`
symmetry integration is the site's own working approximation for a disk, not exact.

**What would overturn it.** A local `F(ρ, ∇ρ, …)` that predicts `dB` at the ≥ 5 % level on this same
sample; or a demonstration that the symmetry integration `F g_obs = g_bar` fails badly enough for a
disk that `F_req` is not the right target.

---

## 9. Actions

**→ Maintainer** (queued behind the still-undrained 08-12 and 08-14 items; this is *not* urgent
relative to those). **Do not touch the BCM citations — they are accurate.** The edits are to the
*taxonomy*, in three places:

1. `/for-researchers` (~line 149) — escape taxonomy: remove *"differential local-density coupling
   (symmetron-class)"* as an escape class. It is empty (this session, PART A–J), and the
   symmetron does not belong in it: BCM's field solves a nonlinear screened PDE and its own closed
   form is written in g_bar. Refile the symmetron under the **non-local** escape class alongside
   AeST. Keep the counterexample paragraph; change what it is a counterexample *to*.
2. `/honest-assessment` "Transferable finding — scope demoted 2026-07-27" box — restore the scope to
   **all local ρ-keyed couplings, algebraic and differential**, and resolve the internal
   contradiction: the box already names locality as the discriminating axis and Milgrom's
   non-locality theorem as the root obstruction, three sentences after demoting scope on a non-local
   counterexample. Cite this session's numbers (≤ 0.16 % of RAR residual; 1.53× at class level;
   flat across ϒ ∈ [0.30, 0.80]) as the empirical backing the pre-07-27 wording never had.
3. `/galaxy-rotation` (~line 66–76) — the paragraph correctly retracts an unsourced attribution and
   should keep that retraction, but its "their extra force is the *gradient* of a function of ρ"
   gloss reads as *local*-differential. Make explicit that φ is not a local function of ρ.
4. Anywhere the 2026-08-02 no-go's closing generalisation was propagated: "making the coupling
   differential is not a free dial" was concluded from a scan over **smoothing kernels**, which are
   the opposite operation. The differential claim now has its own execution — cite that instead.

**→ Research (dp-gated).** The preprint blocked since 07-27 has a cleaner and *stronger* statement
available than the one withdrawn: *no local density-keyed coupling, algebraic or differential at any
derivative order, reproduces the RAR* — with 2614-point empirical backing and a complete π-enumeration
behind the word "any". Credit line required: this is the local-density instance of Milgrom's
non-locality theorem (astro-ph/0510117), not a new theorem. Gate item: read BCM's field equations
directly to confirm the non-locality characterisation before publishing.

**→ Explorer (next).** The non-local branch is the only one left. The sharp question is no longer
"can it fit the RAR" (BCM shows a screened scalar can) but "**does anything in that branch keep
EFE = 0?**" — because that is the framework's only claimed discriminator, and §7 argues the branch
forfeits it generically.
