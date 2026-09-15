# Explorer 2026-09-15 — WAKE and pre-registration

*Written and committed before any computation in this session.*

## WAKE

**1. What am I inheriting?**
- From the maintainer (09-15): the smoothing length D is a free parameter nobody declared, planets give D ≳ 30 AU, and
  the topic's Ask 1 frames globular clusters as an **upper** bound on D.
- From the queue: "density-keyed law" means the L2 field equation ∇·[C(ρ)∇Φ] = 4πGρ with matter following −∇Φ. That is
  the solver the site uses and the equation RG writes. The 08-26 finding showed L2 without the striction force violates
  Newton's third law. The 09-15 planet script uses flux conservation, which is the same in L2 and L3, so that result
  does not depend on the choice.
- An implicit assumption: "ρ" is a fluid density. Stars, clusters and planets are compact. At any D, a body whose own
  mass inside a D-ball exceeds ρ_c·V_D sits in its own high-C region, a "Newtonian bubble". Nobody has asked what the
  field does inside that bubble.

**2. What if the frame is wrong?**
- Ask 1 may have the sign backwards. Smoothing a cluster's density over D ≳ r_t makes C uniform across the cluster. A
  uniform boost is absorbed into the mass, so the internal-slope test goes blind as D grows. If that holds, clusters'
  *internal* dynamics give no upper bound. Their *orbital* dynamics may give a lower bound instead, through the bubble.
- The bigger frame point: under L2, the field inside a dielectric sphere is 3ε_out/(ε_in+2ε_out) times the field
  outside. A compact tracer moving through a low-C medium would feel a different acceleration from a diffuse tracer at
  the same place. That is a universality-of-free-fall violation that depends on D. Under an action (L3), Maxwell-stress
  reasoning says the centre-of-mass force is M·g_out and the bubble drops out, the analogue of Bekenstein & Milgrom's
  composite-body theorem for AQUAL. If both hold, D and the choice of dynamics are not independent questions.

**3. Highest-information experiment.** Compute the bubble factor F(M, D) for real tracer classes, then set the D_min it
implies against the D_max from the galaxy mechanism. The window is either empty or not, and which one is not
predictable in advance. The GC slope re-run (Ask 1) and the Oort window with the Sun (Ask 2) are cheap and settle the
topic's own questions.

**4. What would falsify the current posture?** The posture is "the density branch has a consistent smoothed reading, D
is only a scope condition" (maintainer 09-15). It is falsified if L2 has no D satisfying both compact-tracer
universality and galaxy-scale structure. It is *strengthened* if the window is non-empty and wide. There is also an
over-refutation risk: the bubble bound binds only where a measured tolerance on compact-vs-diffuse differential
acceleration exists. Without a citation it is an untested bound, not a kill.

**Decision:** work `smoothing-length-window-for-density-keyed-laws.md`, run together with the galaxy-side
`mrh-smoothed-density-repair-untested-or-refuted.md` as the topic suggests (the kernel question). The other two new
topics (nesting point, TEST-09 at 6.40) are deferred.

## Pre-registration

### Laws
- **F (framework, floored):** C = f + (1−f)·tanh(γ ln(1+ρ/ρ_c)), f = 0.315. The joint-window edges are
  (γ = 0.489, ρ_c = 0.0039 and 0.0079 M☉/pc³) and (γ = 2, ρ_c = 0.0735 and 0.078 M☉/pc³).
- **RG:** ε = ε₀ + (1−ε₀)/2·[tanh(Q ln(ρ/ρ_c)) + 1], ρ_c = 0.0083 M☉/pc³, Q = 0.47, ε₀ ∈ {0.089, 0.25, 0.56}. The archive
  quotes ε₀ = 0.089 and 0.56 for Cesare+2020 in different findings; I check which is right, but the grid covers both.
- **Kernel:** top-hat ball of radius D (primary); Gaussian of width D (robustness, C3 only).

### C1 — globular-cluster internal slope with smoothed density (topic Ask 1)
- Same statistic, cluster selection, division law and verdict thresholds as `joint_local_window_gamma_axis.py`
  (ok ≤ |MOND+EFE|, marginal < 2×, else EXCL).
- ρ(r) is replaced by ρ_D(r), the exact spherical top-hat average of the modified-Hubble model. Background ρ_bg = 0.
- D ∈ {0, 0.3, 1, 3, 10, 30} pc.
- ρ_c: the four window edges, plus the previously excluded cells 0.124, 0.49, 1.2, 12 (γ = 0.489) and 0.49, 1.2, 12
  (γ = 2).
- **Positive control:** D = 0 reproduces the 09-08 mismatch values to ±0.002.
- **Prediction (stated now):** the excluded set shrinks monotonically with D; no window-edge knee flips to EXCL.
- **Rule:** GCs supply an upper bound on D **iff** some window-edge knee is EXCL at some D > 0 on the grid. Otherwise
  record "GC internal dynamics give no D_max". Also record the smallest D at which each previously-EXCL cell stops
  being EXCL.

### C2 — Oort window with the Sun inside the ball (topic Ask 2)
- Local baryons: ρ(z) = 0.084·sech²(z/z_h), z_h = 280 pc, so Σ = 47 M☉/pc². The Sun is at the midplane. Smoothed
  density at the Sun is ρ_D = ⟨ρ(z)⟩_ball + [1 M☉/V_D if the Sun term is on].
- Window: McKee+2015 at 2σ, f_DM,pred = 1 − C(ρ_D), as in the 09-08 script.
- D ∈ {0, 1, 3, 10, 30, 100, 300} pc, at γ = 0.489 and γ = 2, Sun term on and off.
- **Rule:** the window "moves" at D if either edge changes by more than 1.5× from D = 0. It "closes" at D if it has no
  overlap with the C1 not-EXCL band at the same D and γ.

### C3 — compact-tracer bubble factor under L2 (new)
- Spherical body in a uniform background ρ_bg, placed in a uniform external field.
  ε(r) = C(ρ_bg + ρ_body,D(r)).
- Solve the l = 1 equation (1/r²)(ε r² f′)′ − 2εf/r² = 0 and report F = g(centre)/g(∞).
  Force on the body under L2 = M·F·g_out, since the body is small compared with D or sits inside the uniform-field core.
- **Validation:** for a sharp top-hat step, F matches 3ε_out/(ε_in+2ε_out) to < 1%.
- **Tracer classes:**

  | Class | Mass (M☉) | Profile |
  |---|---|---|
  | Star | 1 | point |
  | Star | 10 | point |
  | Open cluster | 10³ | Plummer, r_h = 2 pc |
  | Pal 5-like GC | 1.5×10⁴ | Plummer, r_h = 20 pc |
  | Typical GC | 2×10⁵ | Plummer, r_h = 3 pc |
  | ω Cen-like | 3.5×10⁶ | Plummer, r_h = 7 pc |

- **Backgrounds:** halo ρ_bg = 10⁻⁵ (ε_out ≈ floor); disc outskirts ρ_bg = 0.1·ρ_c; solar neighbourhood
  ρ_bg = 0.084. All in M☉/pc³.
- D on a log grid from 0.01 pc to 3 kpc. Report D_min(T), the smallest D with |1−F| ≤ T, for T ∈ {0.01, 0.05, 0.2}.
- **L3:** CM force = M·g_out by the Maxwell-stress argument, so F_L3 ≡ 1. I verify it numerically if a cheap check
  exists; otherwise I label it "argued, not executed".
- **Rule:** a D_min is **binding** only for a class where I can cite a measured tolerance on differential acceleration
  against a diffuse tracer, at a stated fraction. Otherwise it is an **untested bound**.

### C4 — D_max from the galaxy mechanism
- The 08-26 toy exponential disc (M_d = 5×10¹⁰, R_d = 3 kpc, z₀ = 0.3 kpc) at the RG calibration used there.
- Gaussian-smooth ρ at D ∈ {0, 0.1, 0.3, 1} kpc before evaluating C. Report max_R g_L2/g_bar and max L2/L3.
- **D_max(mechanism)** = the D at which (max boost − 1) falls to half its D = 0 value.
- If the smoothed solve is not cheap to wire, fall back to the analytic estimate D_max ~ z₀, labelled **not executed**.

### Overall verdict rule
- **L2:** if a binding D_min(class) > D_max, the L2 reading has **no admissible smoothing length**. The density class
  then needs an action (L3) or a non-density argument. This is a scope result on an unregistered parameter, **not a
  seventh refutation.** Count stays 6.
- **L2:** if every binding D_min < D_max, state the interval and its width in dex.
- **L3:** state the interval from C1, C2 and C4 alone.
- Any class whose bound is only "untested" is reported as such and does not enter the verdict.
