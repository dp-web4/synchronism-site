# The dark-energy locality fork, executed: the perturbation channel buys **exactly a factor of 2**, and at γ = 1/2 dark energy is a constant *field*, not just a constant background

**Date**: 2026-08-18 · **Track**: explorer · **Status**: executed, closes a standing caveat
**Script**: `explorer/findings/scripts/de_locality_fork_perturbations.py` · **Output**: `..._output.txt`
**Count of refutations: UNCHANGED at 6.** Nothing new is refuted. A proposed *new test* is shown to be
the old test times two, and a standing caveat is resolved in the framework's favour on structure and
against it on power.

---

## 0. Why this, today

The 2026-08-18 visitor log (Pass 4, researcher persona) filed **P1-7**:

> State the locality fork on ρ_DE = F(ρ_m): local ⇒ order-unity anti-correlated DE clustering,
> closable on DR2-era data now; background-only ⇒ withdraw the registration. **Either horn closes
> TEST-26 in 2026.**

That is a claim about the site's **only live scientific claim**, and it proposes converting a
2027–28 test into a 2026 one. The same fork is the explicit standing caveat on the 08-12 direct fit
(*"Background-only: no growth, no perturbations, no full-shape"*) and on `/dark-energy` itself
(line 195: *"The sector is background-only. There is no perturbation sector"*). It had never been run.

It has now been run. **Both halves of the visitor's claim are wrong, and the site's caveat is wrong
in the opposite direction.** The corrected statement is sharper than either.

---

## 1. The setup, and what the fork actually is

Session 100/101, as the site states it:

```
C(x)   = tanh(γ ln(1+x)),   x = ρ_m/ρ_crit
ρ_DE   = ρ_m (1−C)/C
H²     = 8πG ρ_m /(3C)      [ ≡ (8πG/3)(ρ_m + ρ_DE) ]
```

Closed form (SymPy, exact):

```
C(x)             = ((1+x)^{2γ} − 1)/((1+x)^{2γ} + 1)
ρ_DE/ρ_crit      = 2x / ((1+x)^{2γ} − 1)
```

**Horn N (non-local):** F is evaluated at the *background mean* ρ̄_m(t). This is what every published
calculation — Session 100/101, the 08-11 covariant audit, the 08-12 direct fit — actually computed.
**Horn L (local):** F is evaluated at the *local* ρ_m(x⃗,t), which is what the framework's one-equation
postulate requires, since the galaxy sector's C(ρ) is manifestly a local function of local density.

---

## 2. Result 1 — the locality identity: the clustering amplitude **is** the departure from Λ

The site already publishes the identity `w_DE = dlnF/dlnx` (`/dark-energy`, "why every road ends the
same way"). Locality forces `δ_DE/δ_m = dln ρ_DE/dln ρ_m`. SymPy, exactly, for all x and all γ:

```
δ_DE / δ_m  =  1 + w_DE(x)          (difference verified identically 0)
```

This is not an approximation and has no scale dependence: an algebraically slaved DE component is
comoving and adiabatic by construction, so its density contrast is fixed at all k.

**Consequence.** The clustering channel and the background channel are governed by *the same single
number*. There is no independent handle. The visitor's framing — background horn weak, locality horn
decisive — presumes two channels where the algebra has one.

---

## 3. Result 2 — at γ = 1/2 dark energy is a constant **field**

```
ρ_DE(γ = 1/2) = 2ρ_crit,   d(ρ_DE)/dρ_m ≡ 0
```

Not "constant in time" (which the 08-10 finding already recorded via ρ_m ∝ a⁻³), but **independent of
density**, hence constant in *space* as well. So at γ = 1/2:

- Horn L and Horn N are **the same model**. The fork is vacuous exactly where the framework's data put it.
- δ_DE ≡ 0 at every scale and every order ⇒ perturbations are ΛCDM's, not merely degenerate with them.
- Non-perturbatively too: ρ_DE = 2ρ_crit inside a void, a cluster, a disk, and a neutron star alike.

This **strictly strengthens** the 08-12 result. That finding established background degeneracy with
ΛCDM at γ = 0.487 ± 0.02. The statement is now: at γ = 1/2 the local completion *is* ΛCDM — same
background, same linear perturbations, same nonlinear field configuration. **No observation of any
kind, at any order, on any scale, can distinguish them.** That is a stronger and cleaner statement
than "the fit is degenerate," and it should replace it.

---

## 4. Result 3 — the local horn is worth **exactly a factor of 2**

Sub-horizon quasi-static growth, integrated from z = 200, with Ω_m(a) = C(a) (an exact identity in
this model). Two brackets on the pressure perturbation, because the framework has no covariant
completion that fixes it: density-only (`δp_DE = 0`) and adiabatic (`c_a² = dp_DE/dρ_DE`).
Everything is quoted against γ = 1/2, which *is* ΛCDM — an internal comparison needing no external
cosmology.

Peak |Δfσ₈| over z ∈ [0, 1.5], in per cent:

| γ | Horn N (background) | Horn L (density) | Horn L (+pressure) | **local / background** |
|---|---|---|---|---|
| 0.270 | 6.843 | 14.864 | 10.246 | 2.17 |
| 0.400 | 2.330 | 4.772 | 4.221 | 2.05 |
| 0.450 | 1.075 | 2.166 | 2.051 | 2.01 |
| **0.489** | **0.223** | **0.444** | **0.440** | **1.99** |
| 0.550 | 0.932 | 1.826 | 1.918 | 1.96 |
| 0.960 | 5.548 | 10.162 | 13.323 | 1.83 |

The ratio converges to **2.00 as γ → 1/2** — i.e. exactly at the point the framework's own galaxy fit
selects. Making the dark-energy sector local doubles the signal in the limit where the signal is
smallest.

**Why**: to first order in ε ≡ 2γ − 1 (SymPy series),

```
1 + w        = ε (ln(1+x)/x − 1) + O(ε²)
F·(1+w)      = 2ε (ln(1+x)/x − 1)/x + O(ε²)     ← the Poisson-source correction
```

Both channels are *linear in the same ε*, and the clustering term contributes about as much again as
the expansion-history term. At x₀ = 6/7 (mean density today) the coefficient is −0.6482, so
G_eff/G − 1 = **+1.43 %** at z = 0 for ε = −0.022. Integrated over the growth history that is a
0.44 % effect in fσ₈.

**Required precision.** dfσ₈/dγ = 39.3 % per unit γ near 1/2. A 3σ detection of γ = 0.489 against
γ = 1/2 therefore needs σ_γ = **0.0037**, i.e. **σ(fσ₈) ≈ 0.15 %**. The 08-12 background-only
requirement was σ_γ ≈ 0.004. **The locality horn improves the required precision by 7 %.** DESI DR2
delivers ~1–3 % per bin. The channel is under-powered by roughly an order of magnitude, and 0.15 %
fσ₈ is at or below the cosmic-variance floor of the survey volume.

Measured input, for scale: the galaxy sector's γ is **0.489 ± 0.11 (stat)** with a ϒ-systematic band
[0.27, 0.96] (08-14). In ε that is **−0.022 ± 0.220 — 0.10σ from zero.** The parameter the test would
measure is currently consistent with the exact-ΛCDM value at one tenth of a standard deviation.

---

## 5. Result 4 — the sign is not even determined

At γ = 0.489 the two defensible pressure treatments give **opposite signs at z = 0**:
density-only **+0.44 %**, adiabatic **−0.30 %**. They agree in sign for z ≳ 0.5. The disagreement is
not numerical noise — it is the two treatments' genuine disagreement about whether δp_DE reinforces
or opposes the density term, and it cannot be settled without the covariant completion whose two
minimal repairs (A and B) were both excluded on 08-11.

So the locality fork's answer depends on a **third, unresolved fork**. The forks are nested, not
parallel: locality → pressure sector → covariant completion, and the innermost one is already known
to have no surviving member.

---

## 6. Two results that go the framework's way — recorded deliberately

Both are corrections *against* the site's own harsher summary, which is the direction the 08-18
visitor identified as the site's systematic error.

**6a. The backreaction objection does not bite.** The obvious attack on Horn L is that the site's
background solves ρ_DE(⟨ρ_m⟩) while the local model's actual background is ⟨ρ_DE(ρ_m)⟩, and the
universe is highly inhomogeneous. Lognormal volume-weighted PDF, ⟨ρ_DE⟩/ρ_DE(⟨ρ_m⟩) − 1:

| γ | σ_lnρ = 0.5 | 1.0 | 2.0 | 3.0 |
|---|---|---|---|---|
| 0.500 | 0 | 0 | 0 | 0 |
| **0.489** | −0.03 % | −0.10 % | −0.34 % | **−0.56 %** |
| 0.450 | −0.13 % | −0.49 % | −1.63 % | −2.70 % |
| 0.400 | −0.28 % | −1.08 % | −3.56 % | −5.93 % |
| 0.270 | −0.88 % | −3.30 % | −10.74 % | **−18.05 %** |

At the preferred γ the published background is right to better than 0.6 % even on deeply nonlinear
scales. **The 08-11 and 08-12 background calculations are not invalidated by locality.** (At γ = 0.27
— the lower edge of the ϒ band — the error reaches 18 %, so the immunity is a property of γ ≈ 1/2,
not of the model.)

**6b. `/dark-energy` line 195 is false, and the correction favours the framework.** The page says
*"there is no perturbation sector, so the CMB-anchored contours the σ figures borrow assume a
perturbation model the framework does not have."* The framework **does** have one, and it is not a
free choice: algebraic slaving forces `δ_DE = (1+w)δ_m` under Horn L, and `δ_DE = 0` under Horn N.
Horn N's perturbation sector is *exactly ΛCDM's*. So the borrowed CMB contours are legitimate under
Horn N and wrong by O(ε) under Horn L — a defect of ~1 % in the source, not an unquantified hole.
This removes a self-imposed disclaimer that was never true.

**6c. No dense-object constraint touches the local horn.** For x ≫ 1, ρ_DE ∝ x^{1−2γ}. At γ = 0.489
the exponent is 0.022, so 45 decades of density contrast — cosmic mean to nuclear matter — move ρ_DE
by a factor of 19.5 — from ρ_DE ≈ 2.06 ρ_crit to 19.5 ρ_crit, i.e. ~2×10⁻²⁹ to ~2×10⁻²⁸ g/cm³. There is no instability, no screening
requirement, no laboratory or compact-object bound. The local horn is entirely well-behaved. That
is the same fact as its untestability, stated with the sign reversed.

---

## 7. Verdict on the visitor's P1-7

| Visitor's claim | Executed result |
|---|---|
| "order-unity … DE clustering" | δ_DE/δ_m = 1+w = **0.006 at mean density** (γ=0.489). Three orders of magnitude off. |
| "anti-correlated" | **Positively** correlated for γ < 1/2 (DE mildly enhanced in dense regions); anti-correlated only for γ > 1/2. Sign is set by ε, which is measured at 0.10σ. |
| "closable on DR2-era data now" | Needs σ(fσ₈) ≈ 0.15 %; DR2 gives 1–3 %. Under-powered ~10×. |
| "background-only ⇒ withdraw the registration" | Horn N has a perfectly well-defined perturbation sector — ΛCDM's. Nothing to withdraw on this ground. |
| **"Either horn closes TEST-26 in 2026"** | **Neither horn closes it.** The fork is worth ×2 on a test already ~50× under-powered, and is vacuous at the preferred γ. |

This is a **persona over-claim in the refutation direction** — the 6th recorded instance, and it
matches the 08-18 visitor's own cross-cutting observation that this site's summary layer errs
*harsher* than its detail layer. Worth noting the mechanism differs from the usual one: this was not
a rediscovery of an unpropagated finding, it was a **manufactured** decisive test. The persona
correctly identified the one unexecuted caveat on the one live claim — genuinely good targeting —
and then asserted its magnitude and sign without computing either.

---

## 8. What this leaves standing

TEST-26 is **not** closed by locality, but its epistemic position is now fully mapped:

- The DE sector has exactly **one** parameter of departure from ΛCDM, ε = 2γ − 1.
- **Background** power ∝ ε. **Perturbation** power ∝ 2ε. **Backreaction** ∝ ε (and ε² in the
  small-σ_lnρ limit). There is no channel of order ε⁰ and no channel that is not this channel.
- ε is currently measured, by the framework's own galaxy sector, as −0.022 ± 0.220.
- Closing the test at 3σ requires σ_γ = 0.0037 in *any* channel. That is ~30× beyond the current
  galaxy-sector determination and ~10× beyond DESI DR2 growth.

**The honest one-line statement**: *the framework's dark-energy sector is a one-parameter family
around ΛCDM whose parameter its own best-fitting sector cannot distinguish from the ΛCDM value at
better than 0.1σ, and no observational channel — background, growth, or nonlinear — improves that by
more than a factor of two.*

That is a stronger and more useful sentence than "kill-or-tie, adjudicable at DR3 (~2027–28)",
because it says *why* DR3 will not adjudicate it either.

---

## 8. Bonus, from the same integrator — **Session #107's DESI forecast is 173× the DE sector's**

The queued topic `session107-desi-forecasts-unaudited.md` asks whether Session #107 (2025-12-10,
"3.1–3.2σ per bin, 6.6σ combined" fσ₈ discrimination) is another over-forecast. The growth integrator
built above answers most of it for free, because Session #107 forecasts the *same observable* as the
Session #100 dark-energy sector, **from the same cosmology arc, two days apart**.

**Script**: `explorer/findings/scripts/session107_forecast_vs_de_sector.py` · **Output**: `..._output.txt`

Δfσ₈ vs ΛCDM, in per cent:

| | z=0.15 | 0.51 | 0.71 | 0.93 | 1.19 | 1.49 | 2.33 |
|---|---|---|---|---|---|---|---|
| **Session #107 (published)** | **−13.3** | **−11.9** | **−10.3** | **−8.6** | **−6.8** | **−5.2** | **−2.8** |
| Horn L, γ = 0.489 | +0.24 | −0.07 | −0.14 | −0.18 | −0.18 | −0.16 | −0.08 |
| Horn L, γ = 0.27 (ϒ-band edge) | +8.11 | −0.92 | −3.20 | −4.46 | −4.99 | −4.92 | −3.51 |
| Horn N, γ = 0.489 | −0.13 | −0.22 | −0.22 | −0.20 | −0.15 | −0.09 | +0.06 |
| Horn N, γ = 0.27 | −3.98 | −6.87 | −6.96 | −6.41 | −5.29 | −3.77 | +0.25 |

Three things follow, and the third is the one that matters:

1. **Amplitude.** At the framework's own best-fit γ = 0.489, Session #107's central bin overstates the
   DE sector by **173×**.
2. **Reachability.** Solving for the γ that would reproduce −11.9 % at z = 0.51: the **local horn
   cannot reach it at any γ ∈ [0.05, 0.499]** — it saturates at −0.93 %. The background horn needs
   **γ = 0.179**, i.e. ε = −0.642, **29× the measured |ε| = 0.022** and far outside even the ϒ
   systematic band [0.27, 0.96].
3. **Shape — the diagnosis.** Session #107's |Δ| declines *monotonically* with z (−13.3 % → −2.8 %).
   The DE sector's |Δ| **peaks at z ≈ 0.5–0.7** and is *positive* at z = 0.15 in the local horn. A
   monotone-declining fractional offset is the signature of a **σ₈ normalisation choice**, not of
   modified dynamics — and Session #107's Part 2 states it outright: *"Combined with lower
   σ₈(z=0) = 0.76, gives lower fσ₈."* The discrimination is largely an assumed normalisation read
   back out as a prediction.

**Verdict on the topic (partial).** Session #107's fσ₈ forecast does **not** survive comparison with
the dark-energy sector derived by its own arc two days earlier, in amplitude, in reachable parameter
range, or in redshift shape. Its "6.6σ total" should not be treated as load-bearing for TEST-26
adjudication. *Not a full closure*: this compares Session #107 against the **Session #100 DE-sector**
mechanism. If Session #107 is instead forecasting the *growth-suppression* mechanism (the TEST-04a
class, where C suppresses growth directly rather than sourcing ρ_DE), then the finding becomes the
sharper one — **the same arc produced two cosmological mechanisms that disagree by 173× on the same
observable, and neither the archive nor the site records that they are different models.** Settling
which is the case requires reading Session #107's Part 1 growth equation directly. **Topic stays
open**, with this as its first executed constraint.

---

## → Action: Maintainer (4 items)

1. **`/dark-energy` line 195** — the "there is no perturbation sector" sentence is false and should be
   replaced: the sector is *forced*, `δ_DE = (1+w)δ_m` (local) or `δ_DE = 0` (background-only ≡ ΛCDM).
   Under-claim, correct it in the framework's favour. (§6b)
2. **`/dark-energy` badge, line 13** — "adjudicable at DESI DR3 (~2027–28)" is not supported. DR3
   backgrounds need σ_γ ≈ 0.004 and DR3 growth needs σ_γ ≈ 0.0037; neither is forecast to reach it.
   Suggested label: *"kill-or-tie — no channel with the required precision is forecast; power, not
   data, is the blocker."* (§4)
3. **Add the γ = 1/2 constant-field statement** to `/dark-energy` alongside the existing
   "algebraically identical to ΛCDM" box: at γ = 1/2, ρ_DE = 2ρ_crit is independent of *density*, so
   the identity holds for perturbations and in the nonlinear regime, not just the background. (§3)
4. **`/honest-assessment` and the 08-12 caveat** — retire *"Background-only: no growth, no
   perturbations, no full-shape."* Growth has now been run; the answer is a factor of 2. Full-shape
   remains genuinely open (see below).

## → Explorer (next)

- **Read Session #107's Part 1 growth equation** and settle whether it forecasts the DE sector or the
  growth-suppression mechanism. That single read converts §8 from a partial to a full adjudication,
  and in one branch upgrades it to a two-mechanism contradiction inside one arc. Highest-value,
  smallest-cost follow-on identified this session.

- **The one channel not closed here is full-shape / scale-dependence.** Horn L's δ_DE is exactly
  scale-free, so it produces *no* k-dependence — which is itself a sharp prediction and the one place
  the model differs structurally from generic clustering-DE (which has a sound-horizon feature). A
  null search for that feature is not a power question, it is a shape question, and shape tests do
  not scale as ε. **This is the only remaining route by which TEST-26 could be closed before DR3.**
- The pressure-sector fork (§5) is the same blocker as the covariant completion. Do not re-open it
  independently.

## → Research (dp-gated)

The `δ_DE/δ_m = 1 + w` identity for any algebraically-slaved DE component is general, short, and not
framework-specific — it applies to every `ρ_DE = f(ρ_m)` model. It belongs in the same note as the
`w_DE = dlnF/dlnx` identity already back-annotated on 08-11, as its perturbation companion. Credit
gate: this is close to standard adiabatic-DE results and a literature check is required before any
novelty is claimed. Treat as *derived here, presumed prior art* until checked.
