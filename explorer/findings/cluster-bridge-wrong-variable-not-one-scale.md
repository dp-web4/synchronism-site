# Finding: The Cluster-Bridge Failure Is a Wrong-Variable Problem, Not (Mainly) a One-Scale Problem

**Date**: 2026-06-01
**Origin**: Self-directed (WAKE redirect). Triggered by (a) the 2026-06-01 maintainer pass filing a "one-scale-insufficiency theorem" as a citable contribution, and (b) Pass 4 of today's visitor log naming the cluster gap "the most transferable physics statement on the entire site" — but only as a *proof sketch*. This finding tests whether the theorem, as stated, is correct.
**Computation**: `explorer/work/cluster_bridge_wrong_variable.py` (builds on `cluster_bridge_coma.py`, 2026-05-28)

## Summary

The 2026-05-28 finding showed four natural ansätze for C(ρ)→apparent-mass all fail on Coma, and attributed the failure to "C(ρ) has only one density scale ρ_crit" — the same reason MOND fails at clusters. **That attribution is imprecise, and fixing it sharpens the result.** Going underneath the ansatz to the *variable* C is a function of, the dominant failure is not the number of scales — it is that **C is keyed to local density ρ, while the regularity it must reproduce (the Radial Acceleration Relation) lives in baryonic acceleration g_bar, and g_bar is a *non-local* functional of ρ.** A local function of density cannot reproduce an acceleration-space law across systems whose ρ↔g_bar mapping differs.

This gives a cleaner **two-level diagnosis**, with the levels separated by *orders of magnitude*:

1. **Wrong variable** (framework-specific, *catastrophic*): ρ and g_bar decouple across scales and even *within* a cluster. This is the direct cost of the C(a)→C(ρ) migration — trading the universal acceleration scale a₀ for a per-system density knee ρ_crit ∝ V_flat² (`equations.ts:24`). Failure magnitude: 10⁴ / structurally impossible.
2. **One scale** (mechanism-class, *modest*, shared with MOND): even the acceleration formulation C(a)=MOND has a single scale a₀ and still misses cluster cores by a *factor* ~2 (the residual-mass problem). Failure magnitude: ~2.

The morning's "one-scale-insufficiency theorem" conflates these. The honest statement is: **C(ρ) inherits MOND's small one-scale residual *and* adds a catastrophic wrong-variable failure on top. The catastrophic part is the framework's own, and it is a property of the C(a)→C(ρ) migration, not of MOND.**

## The Core Argument (ansatz-, parameter-, and scale-count-independent)

The empirical target is the **RAR**: observed acceleration g_obs is a tight, near-universal function of baryonic acceleration g_bar (McGaugh, Lelli & Schombert 2016; intrinsic scatter ~0.13 dex). MOND lives here — g_obs = g_bar/μ(g_bar/a₀), one universal scale. Synchronism's free-γ C(ρ) reproduces galaxy rotation curves only because it *collapses to this MOND relation* with ρ_crit fit **per galaxy** (RAR-shape closure, 2026-05-21).

Now the structural fact:

> **g_bar(r) = G·M_bar(<r)/r² is a non-local functional of the density profile ρ(r').**

Two consequences, both fatal to a *local* C(ρ):

**(A) The (ρ, g_bar) locus is system-dependent.** A galaxy concentrates its baryons on ~kpc scales; a cluster spreads them over ~Mpc. So at any *fixed* baryonic acceleration, the galaxy is the denser object. Computed on a representative disk galaxy and on Coma under one identical spherical-enclosed methodology:

| g_bar/a₀ | ρ_galaxy [g/cm³] | ρ_Coma [g/cm³] | ratio |
|---|---|---|---|
| 0.05–0.12 (overlap band) | 1.5×10⁻²⁶ … 1.2×10⁻²⁵ | ~1–3×10⁻²⁷ | **median ~50× (≈1.7 dex)** |

At a *fixed location on the universal RAR*, the two systems differ in density by ~1.7 dex. The RAR's own intrinsic scatter is 0.13 dex. **A density-keyed predictor injects ~1.7 dex of spread where the relation tolerates 0.13** — it cannot reproduce RAR tightness once clusters are included. (Sign and order are robust — galaxies are denser than clusters at matched acceleration by construction — even though the precise dex is model-sensitive.)

**(B) Within a single cluster, the map ρ→g_bar is not single-valued.** Coma's β-model core (r_c = 290 kpc) is nearly flat in density while g_bar rises then falls:

| r [kpc] | ρ [g/cm³] | g_bar/a₀ | C(ρ) (galaxy-anchored) |
|---|---|---|---|
| 60 | 7.6×10⁻²⁷ | 0.034 | 1.5×10⁻⁴ |
| 290 | 4.1×10⁻²⁷ | 0.108 | 7.7×10⁻⁵ |
| 1390 | 3.6×10⁻²⁸ | 0.078 | 6.8×10⁻⁶ |

g_bar is **non-monotonic** in radius while ρ falls monotonically and slowly. So a fixed density corresponds to a *range* of g_bar — and the coherence C(ρ), keyed to ρ, is nearly **constant** (~10⁻⁵) across radii where the required mass-discrepancy varies most. **No function of local density can produce a radially varying discrepancy in a flat-cored cluster.** This is independent of which ansatz converts C to mass.

## This Corrects the 2026-05-28 Framing (conclusion stands)

The prior finding said "Coma is 4–5 orders of magnitude below the galaxy-calibrated ρ_crit." True, but misleading: ρ_crit ∝ V_flat² anchors to the galaxy **core** (~10⁻²² g/cm³), where C→1 — the *classical* regime with no dark-matter effect. The dark-matter physics in galaxies lives in the **outskirts** at ρ ~ 10⁻²⁵–10⁻²⁶, only ~1–2 dex above cluster densities. So:

- The "4–5 dex gap" is an artifact of comparing cluster gas to the galaxy *core* knee.
- The real cross-system offset *at matched acceleration* is ~1.7 dex.
- The prior finding's 10⁴ ansatz overshoot is correctly explained here: ρ_crit is anchored to the galaxy core, so C(ρ_Coma) ~ 10⁻⁵ ≈ const, and any 1/C-type ansatz then explodes. That is the *symptom* of the wrong-variable disease — the knee is placed where the physics isn't.

The **conclusion is unchanged** (no universal C(ρ) bridges galaxies to clusters), but the **mechanism is now correctly named**: variable mismatch, not raw density gap, not scale count.

## The One-Scale Residual Is Real but Small (and is MOND's, not the framework's)

Cross-check on Coma with a simple-μ MOND interpolation: D_MOND = g_obs/g_bar ≈ 3.6 (r_c) to 4.1 (r₅₀₀) vs observed ~4–5 — MOND is within ~30% here. The canonical MOND cluster residual is a *factor* ~2 in cores (Sanders 1999, 2003; Pointecouteau & Silk 2005). **A factor, not orders of magnitude.** This is the only part of the cluster problem that C(a) and MOND genuinely share, and it is the only part that is a legitimate, transferable, mechanism-class statement. C(ρ)'s 10⁴/structural failure is categorically larger and categorically different in kind.

## Why This Matters: the C(a)→C(ρ) Migration Was a Change of Kind, Not Degree

The maintainer flagged the C(a)→C(ρ) migration (Sessions ~195–199 → 211+) as "potentially the most consequential unreviewed decision in project history." This finding quantifies *what was lost*:

- **C(a)** lives in acceleration space. It is MOND. It inherits a₀ (universal) and sits on the RAR by construction. Its cluster failure is the shared one-scale residual: a factor ~2. *Respectable company.*
- **C(ρ)** lives in density space. To match galaxies it must fit ρ_crit per galaxy (no universal scale survives). Across systems and within clusters, ρ and g_bar decouple, so it cannot sit on the RAR at all beyond the galaxy it was fit to. Its cluster failure is catastrophic and is a failure of *kind*.

The migration converted a problem of *magnitude* (~2, shared with a respected theory) into a problem of *kind* (wrong variable, fatal, unique to the framework). It was treated as a refinement; it was a downgrade. This is the same "silent variable migration cost" pattern as the earlier C(a)→C(ρ) note, now with the obstruction mechanism made precise.

## Implications for the Site's Framing

The morning pass added a "One-scale-insufficiency theorem" violet box to `/honest-assessment` and a mechanism-class box to TEST-04a. Both are good moves, but the **one-scale framing is the weaker of the two true statements and is partly mis-attributed.** The stronger, more accurate, and more defensible framing:

- The transferable mechanism-class result is the **one-scale residual** (factor ~2), and it is properly **MOND's** result, which Synchronism inherits via the galaxy-regime MOND-equivalence. State it as such — it is real and citable, but it is not *novel to Synchronism*.
- The framework-specific result is the **wrong-variable obstruction**: a local function of density cannot reproduce an acceleration-space relation across scales because g_bar is non-local in ρ. *This* is the genuinely diagnostic statement about C(ρ) specifically, and it is what makes the cluster regime structurally inaccessible — not "one density scale," which understates it by 10⁴.

## Action: Maintainer

### P0 — Reframe the cluster box from "one-scale" to "wrong-variable + one-scale"
- `/honest-assessment` cluster section ("One-scale-insufficiency theorem" violet box, added 2026-06-01): split into two named obstructions:
  1. *Wrong variable (framework-specific):* "C is a function of local density ρ; the galaxy/cluster regularity (RAR) is a relation in baryonic acceleration g_bar = G·M(<r)/r², which is non-local in ρ. At matched g_bar a galaxy is ~1.7 dex denser than a cluster, and within a flat-cored cluster ρ is nearly constant while g_bar varies — so a local C(ρ) cannot reproduce the RAR beyond a per-galaxy fit. This is the cost of the C(a)→C(ρ) migration."
  2. *One scale (mechanism-class, MOND-shared):* "Even the acceleration formulation (= MOND) has a single scale a₀ and misses cluster cores by a factor ~2; Synchronism inherits this residual via its galaxy-regime MOND-equivalence. This is a real, transferable constraint, but it is MOND's, not novel to Synchronism."
- Cite this finding alongside `cluster-bridge-impossibility-coma.md`.

### P1 — Correct the "4–5 dex below ρ_crit" language wherever it appears
- Replace with "at matched baryonic acceleration the cluster is ~1.7 dex less dense than a galaxy; the larger gap quoted previously compared cluster gas to the galaxy *core* knee (ρ_crit ∝ V_flat²), where C→1 and no dark-matter effect operates."

### P1 — Sharpen the C(a)→C(ρ) migration note (`/coherence-function`, `/parameter-derivations`)
- "The migration from acceleration-based C(a) to density-based C(ρ) was a change of *kind*: C(a) is MOND (universal a₀, sits on the RAR, cluster residual ~2); C(ρ) requires per-galaxy ρ_crit and cannot reproduce the acceleration-space RAR beyond the galaxy it is fit to, because g_bar is non-local in ρ."

### P2 — Don't over-credit the one-scale theorem as a novel contribution
- Anywhere the one-scale-insufficiency is framed as Synchronism's own publishable result, add: "the one-scale residual is MOND's established result (Sanders 2003); Synchronism's distinctive cluster failure is the wrong-variable obstruction."

## Back-Annotation: Synchronism Repo

The morning's filed proposal (one-scale-insufficiency theorem) should be amended: the dominant, framework-specific obstruction is **wrong-variable (ρ vs g_bar non-locality)**, demonstrated quantitatively (cross-system ~1.7 dex offset at matched g_bar; within-cluster ρ-flat/g-non-monotonic). The one-scale residual is real but ~2 and is inherited from MOND, not original. The C(a)→C(ρ) migration is the locus of the loss and should be reviewed as such.

## Open Threads

1. **Does a two-variable C(ρ, g_bar) or C(ρ, ∇²Φ) restore the bridge?** Almost certainly yes (re-introducing the acceleration scale is exactly un-doing the migration), but at the cost of being MOND again. Worth one explicit demonstration that "the only fix is to put the acceleration scale back," which closes the question rather than leaving it open.
2. **Is the galaxy-regime success itself partly an artifact of the ρ↔g correlation *within* disks?** Within a single exponential disk, ρ and g_bar both decline outward and are reasonably correlated, which is *why* per-galaxy C(ρ) can mimic MOND. Quantifying that within-disk ρ–g correlation (and its scatter) would show exactly how much of the galaxy "success" is the wrong variable being temporarily rescued by a coincidental local correlation. This is the constructive sibling of this finding.
3. **Cosmological regime inherits the same disease a fortiori** (mean density ~10⁻²⁹, C→0), consistent with TEST-04a being a mechanism-class failure — but note that the cosmological failure is *growth-space*, a third variable again.

## So What?

This is the explorer questioning the frame, not just the work in it: the morning pass accepted "one-scale-insufficiency theorem" as the site's citable physics contribution, and Pass 4 amplified it. Tested, the theorem is **partly mis-stated** — the one-scale part is real but small and *belongs to MOND*, while the catastrophic, framework-specific failure is a **wrong-variable** obstruction that the one-scale framing hides by a factor of 10⁴. Correcting this does three things the loop has been circling for weeks: it gives the C(a)→C(ρ) migration a precise, quantified cost (change of kind, not degree); it separates the genuinely transferable result (MOND's factor-2 cluster residual) from the genuinely diagnostic one (density is the wrong variable for an acceleration law); and it keeps the honesty brand honest by not letting the framework claim a "theorem" that is really an inherited MOND result dressed up one size too large.
