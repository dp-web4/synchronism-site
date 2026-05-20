# Finding: The Compander *Can* Produce a RAR — and Its Transition Shape Is the First Non-Degenerate Discriminator

## Origin

Topic: `functional-form-discriminator-compander-vs-rar.md` (seeded 2026-05-20 by maintainer,
triggered by visitor Pass 4 leading-edge researcher). The researcher's standing question, repeated
across four daily logs: *"Is there any observable where the C(ρ) compander's functional form departs
measurably from the RAR μ-function? Without one, every galaxy-scale test is MOND by construction."*
He called it "the single question that determines whether there's a research program at all."

Builds on and **partially corrects** prior findings:
- `coherence-rar-disconnect.md` (2026-03-30) — "mathematical proof" that C(ρ) cannot produce the RAR.
- `mond-efe-three-test-discriminator-verdict.md` (2026-05-13) — zero discriminating Tier-1 tests remain.
- `compander-aic-bic-real-data-attempt.md` (2026-05-17) — tanh-log is empirically dispreferred vs erf-log/Hill.

## Summary

**There is a functional-form discriminator, and it lives at the transition acceleration g_bar ≈ a₀.**

The 2026-03-30 finding declared the coherence function "mathematically incompatible" with the RAR. That
proof is correct *but mapping-specific*: it tested only the identification where C acts on the baryonic
acceleration directly (boost = 1/C(g_bar/a₀)), which gives a constant g_obs in deep MOND and violates
Tully-Fisher. There is a **dual mapping the earlier finding never tried** — C as the MOND *interpolating
function* μ(x) with argument x = g_obs/a₀ (the implicit formulation g_bar = g_obs·μ(g_obs/a₀)). Under
this mapping the compander reproduces **both** asymptotes correctly: Newtonian (g_obs→g_bar) at high
acceleration and the deep-MOND √-law (g_obs→√(a₀g_bar)) at low acceleration. So the compander is *not*
disconnected from the RAR — it is a legitimate, previously-unrecognized member of the interpolating-function
family.

Once both asymptotes are matched, the residual is a pure **transition-region shape difference**:

| Quantity | Value (γ=2, the site's galaxy value) |
|----------|--------------------------------------|
| Max deviation from McGaugh RAR | **−0.083 dex** at g_bar/a₀ ≈ 1.1 |
| As multiple of SPARC σ_int (0.057 dex) | **1.45×** |
| RMS residual fitting compander to McGaugh-shaped data (vertical a₀ free) | **0.067 dex** (> σ_int) |
| Sign | compander predicts **less** boost (lower g_obs) through the transition |

**The discriminator is real, directional, and concentrated at g_bar ≈ a₀ — but its detectability is
hostage to the undefined N_corr → γ assignment.** A free-γ fit drives γ → 0.91 (N_corr ≈ 5), which mimics
McGaugh to 0.013 dex (indistinguishable). The *only* reason the discriminator has teeth is that the site
independently pins galaxies at γ = 2 (N_corr = 1, Phase Boundary Visualizer). At γ = 2 the compander RAR
is in **mild tension with SPARC** (0.067 dex > 0.057 dex) — i.e. existing data already weakly disfavor it.

## Research Notes

### 1. The two mappings — and why the earlier "disconnection proof" was incomplete

The MOND/RAR relation can be written two algebraically distinct ways:

- **ν-form (inverse):** g_obs = g_bar · ν(g_bar/a₀). McGaugh: ν(y) = 1/(1 − e^(−√y)).
- **μ-form (forward):** g_bar = g_obs · μ(g_obs/a₀), with μ→1 (Newtonian) and μ→x (deep MOND).

The 2026-03-30 finding identified C with the **ν-form** (boost = 1/C, argument g_bar/a₀). Because
C(y) = tanh(γ ln(1+y)) ≈ γy at small y, the boost 1/C ≈ 1/(γy) → g_obs = g_bar/(γy) = a₀/γ = **constant**.
That kills Tully-Fisher. Correct — but it only rules out *that* identification.

Identify C with the **μ-form** instead: μ_Syn(x) = tanh(γ ln(1+x)), x = g_obs/a₀. Then
g_bar = g_obs·tanh(γ ln(1+g_obs/a₀)). Small-x: μ ≈ γx, so g_bar ≈ γ g_obs²/a₀ → **g_obs = √(a₀ g_bar/γ)**.
That is the deep-MOND √-law (the linear-in-x behavior of μ is *exactly* the deep-MOND requirement μ→x).
High-x: μ→1, g_obs→g_bar (Newtonian). Both limits correct. The compander is a viable interpolating function.

This is the constructive resolution the topic asked for: **the disconnect was an artifact of choosing the
wrong one of two mappings.** The earlier finding's title ("Cannot Produce the RAR") should be scoped to
"cannot produce the RAR *under the ν-identification*."

### 2. The transition-shape difference (numerical)

With a₀ rescaled so deep-MOND amplitudes coincide (γ absorbed: a₀_syn = γ·a₀_McG), the only remaining
difference is the curvature through g_bar ≈ a₀:

```
g_bar/a₀ | boost McGaugh | boost compander | dex difference
1e-2     |   10.51       |   10.14         | −0.015
1e-1     |    3.69       |    3.34         | −0.043
3e-1     |    2.37       |    2.04         | −0.064
1.0      |    1.58       |    1.31         | −0.083   ← max
3.0      |    1.22       |    1.05         | −0.065
1e1      |    1.04       |    1.00         | −0.018
```

The compander transitions **more sharply** than McGaugh's exp(−√y): it gives less boost than MOND in the
0.1 < g_bar/a₀ < 10 window, peaking at a −0.083 dex deficit right at the transition. This is the same
*kind* of difference the literature already exploits to discriminate interpolating functions — SPARC data
reject the "standard" μ in favor of the "simple"/RAR form on exactly this transition curvature
(Famaey & McGaugh 2012). The compander is just another candidate in that family, testable the same way.

### 3. γ-dependence — the discriminator's Achilles' heel

| γ | N_corr | max deviation | dev/σ_int | verdict |
|---|--------|---------------|-----------|---------|
| 0.5 | 16 | +0.020 dex | 0.35 | indistinguishable |
| 1.0 | 4 | −0.049 dex | 0.85 | marginal |
| 1.5 | 1.8 | −0.071 dex | 1.25 | distinguishable |
| **2.0** | **1** | **−0.083 dex** | **1.45** | **distinguishable, mildly disfavored** |
| 3.0 | 0.4 | −0.095 dex | 1.67 | distinguishable |

A free-γ fit of the compander to McGaugh-shaped data (SPARC follows McGaugh to σ_int = 0.057 dex) returns
**best-fit γ ≈ 0.91 (N_corr ≈ 5), RMS 0.013 dex** — comfortably inside the scatter, indistinguishable from
MOND. The site's galaxy value γ = 2 gives RMS **0.067 dex**, just *outside* σ_int.

So the logical structure is:
- If γ is a **free fit parameter** → the compander collapses onto McGaugh (γ→0.9) and the framework
  recovers MOND with zero discriminating power. This is the grad student's "N_corr is read off to hit the
  target" circularity, made quantitative.
- If γ is **independently pinned at 2** by the N_corr = 1 assignment the site already commits to → the
  compander RAR is a falsifiable, *distinct* prediction, and SPARC already mildly disfavors it.

The discriminator's entire existence therefore reduces to a single prior question the site has never
answered operationally: **is galaxy-scale γ pinned, or fitted?** This is the same N_corr-operationalization
gap flagged in memory (`project_governing_equation_gap`, grad-student Pass 3 today). The functional-form
discriminator converts that abstract circularity worry into a concrete, decidable test.

## Implications for the Site

1. **The "0 discriminating tests" verdict is too strong — there is exactly one, and it is new.** It is
   distinct from the failed TEST-03 (which tested RAR *scatter*, not *mean shape*) and from the
   MOND-degenerate environment tests (TEST-01/02/05). Call it the **RAR transition-shape test**: fit the
   compander μ_Syn(x) = tanh(γ ln(1+x)) and McGaugh's ν to the real SPARC RAR, with γ **fixed at the
   site's claimed galaxy value 2**, and compare BIC. Kill criterion: if ΔBIC favors McGaugh by >10 (which
   the 0.067-dex structured residual suggests it will), the γ=2 compander RAR is refuted as the galaxy
   mechanism — leaving the framework with a *fitted* γ that is MOND by construction.

2. **The "C(ρ) provides the mechanism" claim on /galaxy-rotation is currently vacuous and now repairable.**
   The page asserts C(ρ) underlies the McGaugh function but shows no mapping. The μ-form derivation above
   is the missing mapping. Adding it would (a) make the mechanism claim concrete and (b) expose that the
   mechanism predicts a *different* function than the one the page actually plots — the honest move is to
   show both and state that SPARC adjudicates.

3. **This is the only constructive physics path left**, exactly as Pass 4 said. Every other galaxy-scale
   test recovers MOND or the EFE. The transition-shape test is the lone observable where the compander's
   own functional form is on the line.

## Action: Maintainer

- **/galaxy-rotation**: add a short "What RAR does C(ρ) actually predict?" subsection deriving the μ-form
  mapping μ_Syn(x) = tanh(γ ln(1+x)), stating it reproduces both asymptotes, and noting it differs from the
  plotted McGaugh function by up to 0.083 dex at g_bar≈a₀ for γ=2 — a difference SPARC can adjudicate.
- **/tier-1-existing** (or wherever the test inventory lives): revise "0 discriminating tests" to "1
  discriminating test, contingent on γ being pinned not fitted" — the RAR transition-shape test. Tag it
  prospective only if γ=2 is committed *before* the fit.
- **/honest-assessment**: the discriminator exists but is hostage to the N_corr→γ assignment; the honest
  framing is "the framework can be made to predict a distinct RAR, but only by committing to γ=2, which
  existing SPARC data already mildly disfavor (0.067 dex structured residual vs 0.057 dex scatter)."

## Open Threads

- **Run it on real SPARC.** The repo's `sparc_data_cache/` is synthetic (per
  `compander-aic-bic-real-data-attempt.md`); the real Lelli-McGaugh-Schombert 2016 RAR (2693 points, 153
  galaxies) is public. A proper per-point fit with M/L and distance nuisance parameters marginalized would
  turn the 0.067-dex estimate into an actual ΔBIC. The shape difference is at fixed g_bar/a₀ and structured,
  so it is *not* absorbable by random per-galaxy nuisances — it should survive marginalization.
- **EFE functional form.** I compared the *isolated* RAR. MOND's external field effect modifies μ in a
  specific way (Bekenstein-Milgrom 1984); the compander's EFE — if C is sourced by total local density
  including external — may differ in a second, independent way. Worth a follow-up.
- **Does the best-fit γ≈0.91 mean anything?** N_corr≈5 for a galaxy is no more physically motivated than
  N_corr=1; both are back-fits. But if a γ near 1 were independently derivable, the framework would be
  observationally MOND — which is the quiet verdict everything keeps converging to.
