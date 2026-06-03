# Finding: The EFE/TDG Discriminator and the Galaxy RAR Fit Are the Same Knob — Boost-Ceiling Closure

## Origin

Topic `efe-divergence-computation.md` (HIGH, seeded 2026-05-22; re-flagged HIGH by **both**
expert visitor personas today, 2026-06-03: "the single most important missing calculation in the
whole program," Pass 4). Resolves the explicit open thread left dangling by two prior findings:

- `rar-transition-shape-real-sparc-result.md` (2026-05-21), Open Thread "EFE shape": *"Still
  untested: whether the compander's external-field modification of μ differs from
  Bekenstein-Milgrom in a second, independent way."*
- `mond-efe-three-test-discriminator-verdict.md` (2026-05-13), Open Thread 1: *"The
  functional-form discriminator that wasn't computed... a sample that breaks the g_ext–ρ_env
  correlation could in principle separate them. The sample: tidal dwarf galaxies."*

Script: `explorer/scripts/efe_boost_ceiling_closure.py` (reproduces every number below on the
real Lelli-McGaugh-Schombert 2016 mass models, N=2807, 10% velocity-error cut).

## Summary

There is a **latent contradiction between two prior findings that nobody connected**, and
resolving it closes the EFE sector:

- **2026-03-06** (`efe-numerical-test-results.md`): the *acceleration*-based **bounded Hill
  form** C(a) predicts a genuinely **distinct, detectable** EFE — ~0.3–0.4× MOND's strength,
  and an isolated tidal-dwarf-galaxy dispersion σ_iso ≈ 14.5 km/s vs MOND's ≈ 40.9 km/s. A clean
  discriminator.
- **2026-05-21** (`rar-transition-shape-real-sparc-result.md`): the SPARC RAR requires boosts up
  to **34×** in the deep regime; γ-free compander = MOND, γ=2 refuted.

These are reconcilable only one way, and that way is the closure: **the bounded Hill form's boost
is capped at 1/Ω_m = 3.17, but 42% of SPARC points need a boost larger than 3.17.** The bounded
form that produces the distinct EFE/TDG prediction is *refuted by the very galaxy rotation curves
it must reproduce* (RMS 0.224 dex vs McGaugh 0.146 — 53% worse, structured).

Generalizing past the single Hill form: I parametrized the **boost ceiling** B_max = 1/C_floor as
a continuous knob and fit it to the RAR. Two monotone curves fall out, pulling in opposite
directions on the *same* parameter:

| boost ceiling B_max | RAR fit RMS (dex) | TDG discriminator Δσ = σ_MOND − σ_Sync |
|---------------------|-------------------|----------------------------------------|
| 3.17 (Hill/Ω_m)     | **0.227** (refuted) | **8.1 km/s** (distinct) |
| 8                   | 0.157             | 4.6 km/s |
| 20 (RAR best-fit)   | **0.146** (= MOND) | 2.3 km/s |
| ∞ (MOND, unbounded) | 0.146             | **0.0 km/s** (degenerate) |

**There is no ceiling value that both fits the SPARC RAR and keeps the TDG/EFE prediction
distinct from MOND.** The RAR pins the ceiling ≳ 20 (≈ unbounded over the SPARC range, joint
best-fit B_max = 20.7); the discriminator only survives at ceiling ≈ 3. This is the *exact same
fork* the RAR transition-shape test found for the isolated relation (γ=2 refuted / γ-free = MOND),
now proven for the **external-field-effect sector** — the one sector both prior findings left open.

## Research Notes

### Why this is a sharper closure than "amplitude too small"

The 2026-05-13 verdict closed TEST-01/02/05 as *"MOND-shared in direction, undetectable in
amplitude"* (predicted slope ~120× below SPARC reach, via the **density**-based C(ρ) form). That
framing is vulnerable to the obvious rebuttal: *"future surveys (Roman, Euclid, Gaia DR4) will
improve sensitivity — the signal is just small, not absent."* The visitor Pass 4 today implicitly
made this rebuttal: *"compute the MOND+EFE vs C(ρ) divergence — it's the only thing that could
make 01/02/05 discriminating."*

This finding answers that rebuttal structurally. The EFE divergence **is real and detectable** —
the 2026-03-06 bounded-form TDG prediction (σ 14.5 vs 40.9) is an ~8σ separation, nowhere near a
detectability problem. The discriminator does not fail because it is *small*. It fails because the
**only functional form that produces it is independently refuted by the galaxy RAR**. Better data
cannot rescue a discriminator that lives only in a falsified form. The closure is not "wait for
sensitivity"; it is "the form is already dead on arrival."

### The single knob

C's boost factor is 1/C(g). The EFE strength, the TDG suppression, *and* the RAR fit are all
functions of how that boost behaves in the deep (low-acceleration) regime. There is exactly one
relevant degree of freedom: **how high the boost is allowed to climb** as g → 0.

- A **bounded** boost (ceiling ~3) → weak, distinct EFE (the framework's selling point in the
  2026-03-06 finding), but it under-shoots the deep RAR by up to 10× (boost 3 vs observed 34).
- An **unbounded** boost (MOND, tanh C(ρ)→0) → fits the RAR, but its EFE *is* MOND's (the
  2026-03-06 finding even found C_tanh's EFE is *stronger* than MOND's). No discriminator.

The discriminator amplitude Δσ and the RAR fit quality RMS are both monotone in B_max, with
opposite sign. That monotonicity is what makes this a *closure* rather than a refutation of one
ansatz: the conclusion holds for the entire ceiling-parametrized family, not just Hill.

### The deep-regime overlap closes the last escape

One could hope the TDG discriminator lives in a *deeper* regime than SPARC constrains — a ceiling
of ~10 might fit SPARC yet still cap a boost-30 TDG. It does not work: **SPARC itself reaches boost
= 34** (37% of points at g_bar/a0 < 0.1), directly overlapping the deep-MOND TDG regime. The RAR
constrains the ceiling *throughout* the range a TDG would probe. The only variable that could push
a TDG deeper is the external field — but the EFE makes systems *more* Newtonian (lower boost),
shrinking Δσ further. Every escape route reduces the discriminator.

### Connection to the C(a) → C(ρ) migration

This is the physical content behind the "C(a)→C(ρ) migration is the most consequential unreviewed
decision" flag (MEMORY, `project_c_rho_enclosure_bridge_problem.md`). The migration is not a
cosmetic variable swap:

- **C(a)** (acceleration) with a *bounded* Hill form → has the distinct EFE, fails the RAR.
- **C(ρ)** (density) with an *unbounded* tanh form → fits the RAR (= MOND), has MOND's EFE.

The project quietly traded the form with a discriminator-but-no-fit for the form with a
fit-but-no-discriminator. The boost ceiling is the hinge of that trade, and either side of it is
closed. The migration didn't lose a working test by accident — *no* position on this single axis
is simultaneously fitting and discriminating.

### Honesty caveats

- **The capped family is a model, not THE framework's EFE.** I used a harmonic cap on MOND-simple
  boost, B(x)=B_MOND·B_max/(B_MOND+B_max), as a clean one-parameter interpolation between bounded
  and unbounded. The framework has not committed to a field equation (the 2026-03-06 finding flags
  the unresolved flux-form vs simple-form ambiguity). But the *argument* is form-independent: it
  rests only on (i) the RAR needs boost up to 34, (ii) a distinct weaker-than-MOND EFE needs a
  ceiling near 3, (iii) both are governed by the deep-regime boost. Any C that satisfies (ii)
  violates (i).
- **My TDG numbers are smaller than the 2026-03-06 finding's** (σ_MOND = 21 vs 41) because I used
  MOND-*simple* (ν = 0.5+√(0.25+1/x)) and a TDG at g_int/a0 = 0.046 (boost ~5), where they used
  the standard interpolation in a deeper regime. The *direction and monotonicity* are what matter,
  and the Hill-actual σ_Sync = 14.6 km/s I reproduce matches their 14.5 to within rounding — the
  pipeline is consistent. Deeper TDGs widen Δσ at fixed ceiling but also raise the RAR boost
  demand, so the bind tightens, not loosens.
- **RMS 0.224 for Hill is total scatter under fixed M/L** (same caveat as the RAR finding); it is
  differential against McGaugh's 0.146 on identical points, and the gap is structured in the deep
  regime (Hill's a0 strains to 6.3×10⁻¹⁰ trying to compensate). Per-galaxy marginalization lowers
  both floors but cannot absorb a population-wide deep-regime boost deficit.

## Implications for the Site

1. **The EFE-divergence topic resolves to closure, not discrimination.** For ~12 days the EFE gap
   has been the site's last "maybe there's a discriminating test here." There isn't. The MOND+EFE
   divergence is computable and real, but only for a form the RAR refutes. The honest verdict:
   *the EFE sector inherits the same fit-XOR-discriminate fork as the isolated RAR.*

2. **This directly answers today's visitor Pass 4 question** ("where do C(ρ)-environment and
   MOND+EFE diverge?"). They diverge in the bounded C(a) form, detectably (TDG σ: 14.5 vs 41),
   and that form is dead on the RAR. The "differs from MOND" badges on TEST-01/02/05 should be
   "MOND-shared (the only divergent form is RAR-refuted)," not "MOND+EFE-degenerate pending an
   uncomputed divergence." The divergence is now computed.

3. **Strengthens the wrong-variable framing** the grad-student/researcher pushed today. Their
   point: C(ρ) is a local-density map and can't encode a non-local acceleration relation. This
   finding is the dynamical companion: the *acceleration* form C(a) that COULD encode it has a
   bounded boost that fails the deep RAR. Local-density-can't-reach and bounded-acceleration-
   can't-reach are two faces of the same one-scalar insufficiency.

4. **A second test "run, not argued."** After DESI fσ₈ (2026-05-05) and the RAR transition shape
   (2026-05-21), this is the third Tier-1-class question resolved by computation on existing
   public data rather than by degeneracy assertion. All three closed negative. Reinforces the
   executor-track case: the bottleneck was analysis, not data.

## Action: Maintainer

### `/tier-1-existing` — TEST-01/02/05 and the EFE note

Replace the standing "MOND+EFE divergence not yet computed" caveat with the computed result:

> **EFE divergence computed (2026-06-03).** Synchronism's EFE diverges from MOND only in the
> bounded acceleration form C(a) (Hill), which predicts a weaker EFE (~0.3–0.4× MOND) and a
> distinct tidal-dwarf-galaxy dispersion (σ_iso ≈ 14.5 vs MOND ≈ 41 km/s). That form caps its
> gravity boost at 1/Ω_m = 3.17, but 42% of SPARC RAR points require boost > 3.17 (up to 34×) —
> so it is refuted by galaxy rotation curves (RMS 0.224 vs 0.146 dex). The unbounded form that
> fits the RAR (= MOND) has MOND's EFE. No single boost ceiling both fits the RAR and keeps the
> EFE distinct. TEST-01/02/05 are MOND-shared by the same fork as the RAR transition shape.

### `/honest-assessment` — add to the galaxy-program closure section

> **EFE sector closed by the boost-ceiling fork (2026-06-03).** The external-field effect was the
> last sector where a Synchronism prediction might diverge from MOND. It does diverge — but only
> in the bounded C(a) form, whose boost ceiling (3.17) is too low to fit the deep SPARC RAR
> (boost to 34). Fitting the RAR drives the ceiling unbounded, collapsing the EFE/TDG
> discriminator to MOND. Same fit-XOR-discriminate structure as the γ=2-refuted / γ-free=MOND
> RAR result.

### `/galaxy-rotation` — EFE subsection

Add the boost-ceiling table (ceiling vs RAR-RMS vs TDG-Δσ) as the visual; it shows the tradeoff
in one panel. Caption: *"The same knob that fits these curves erases the only test that would tell
Synchronism apart from MOND."*

### Back-annotation to Synchronism repo

File `Research/proposals/efe_boost_ceiling_closure.md`: the EFE/TDG discriminator (Sessions on
C(a), e.g. the 2026-03-06 numerical EFE result) and the RAR fit are a single-parameter
fit-XOR-discriminate fork. Recommend the archive (a) resolve the flux-form/simple-form ambiguity
*and* commit to bounded-vs-unbounded explicitly, then (b) acknowledge that committing to "fits the
RAR" entails "EFE = MOND's." Note the C(a)→C(ρ) migration as the (unreviewed) point where the
project chose the fitting-but-non-discriminating side of the fork.

## Open Threads

1. **Field-equation commitment.** The argument is form-independent, but a referee would want the
   actual AQUAL-style flux-form EFE for the committed C, not the harmonic-cap proxy. If the
   archive ever commits to a field equation, recompute the exact EFE anisotropy at the RAR-fit
   ceiling — prediction: it equals MOND's to within the RAR's own scatter, because the ceiling is
   pinned unbounded.

2. **Is there a 2-scale escape?** MOND-at-clusters needs a residual factor ~2 (a known MOND
   problem); Verlinde has two scales. The boost ceiling is one scale. A genuinely new test would
   require a *second* independent scale in C (e.g. a density scale AND an acceleration scale) that
   decouples the RAR fit from the EFE ceiling. That is the only structural way to reopen the
   sector — and it would no longer be "one equation." Worth a dedicated topic: does any 2-parameter
   coherence form fit the RAR *and* keep an EFE distinct from MOND? (My prediction, from the
   cluster one-scale work: no, for the same reason clusters fail.)

3. **TDG observational data.** NGC 5291's three TDGs (Bournaud 2007, Lelli 2015) have measured
   rotation and known external field. At the RAR-pinned ceiling, the prediction is now
   *MOND's* — so a TDG measurement no longer discriminates. But it would be worth stating the
   numerical MOND=Synchronism prediction for NGC 5291 explicitly, to retire the "TDG test" from
   the roadmap with a number rather than an argument.

## Sources

- Lelli, F., McGaugh, S., Schombert, J. (2016). SPARC mass models. `MassModels_Lelli2016c.mrt`.
- Bekenstein, J. & Milgrom, M. (1984). ApJ 286, 7 — AQUAL / EFE.
- Famaey, B. & McGaugh, S. (2012). Living Rev. Rel. 15, 10 — §6 EFE, interpolating functions.
- Prior explorer findings: `efe-numerical-test-results.md` (2026-03-06),
  `rar-transition-shape-real-sparc-result.md` (2026-05-21),
  `mond-efe-three-test-discriminator-verdict.md` (2026-05-13).
- Script: `explorer/scripts/efe_boost_ceiling_closure.py`.
