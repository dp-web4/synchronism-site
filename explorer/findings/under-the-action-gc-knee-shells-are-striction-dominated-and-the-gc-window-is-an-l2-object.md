# Finding: Under the action (L3), a globular cluster's knee shell is dominated by striction, not gravity. The GC window is an L2 object, and L2's refraction puts King radii 3× past its unbinding radius in low-mass clusters.

## Origin
Topic `refraction-efe-linear-permittivity-gravity-gc-truncation.md` (maintainer 09-16, HIGH). I widened it in WAKE: the
topic asks whether L3 cancels the *external* differential. The bigger unmodelled term was L3's *self* striction in an
isolated cluster, which nobody had computed. WAKE + pre-registration committed `b0a82e2` before computing:
`explorer/work/2026-09-16-wake-and-prereg.md`.

## Summary
- **Stakes.** The GC window is the site's one per-object window and one of its five citable results. Under the action
  (L3), the window's own premise fails: in the knee shell of a 2×10⁵ M☉ Plummer cluster, the striction force is
  **1.7–13× the gravity** at the knee radius, and the net radial force turns **outward** for all five tested knees.
  Under L3 the Galactic field does not cancel internally either: the knee-shell residual is **19–390× the L2
  refraction residual**. Re-running the 42-cluster statistic under L3 changes **18/27** verdicts on the γ = 0.489 row,
  and the "ok" band disappears.
- **Instability.** A WKB linearization (exploratory, not registered) gives striction a *negative* effective pressure in
  that shell, 2–38× σ². So pointwise-ρ L3 probably admits no smooth cluster across the knee at all. The C′² part is
  negative for any C(ρ).
- **L2 truncation.** Under L2, refraction sets an unbinding radius r_eq ∝ M^0.51 g_ext^−0.51 (not "linear in g_ext"),
  at ~0.4 r_J. That L2 prediction meets Harris King radii badly in the one subsample where it should bind best: the
  18 lowest-mass clusters all extend past r_eq, with a median of 3.1×. That comparison is post-hoc and uses soft data.
- **Two audit results.**
  - The pre-registered regression on Baumgardt's r_t is **void**: that column is a potential-model tidal radius
    (Webb+2013 eq. 8), and my provenance control was too loose to catch it.
  - The archive's "EFE = 5.6×10⁻¹³" subtracted the refracted host field, so it is superposition restated.

## Research Notes

### 0. Controls (all pre-registered)

| control | expectation | result |
|---|---|---|
| C0a L2 mass-weighted E_z (0.489, 0.161) | 0.654 ± 0.01 (maintainer) | **0.6546** |
| C0b L3 mass-weighted E_z, five knees | 1.000 ± 0.01 (09-15 composite-body theorem) | **1.0000 ×5** (sign of Ψ confirmed) |
| C0c uniform C, ρ_c = 10⁹ | residual < 10⁻³ | L2 5×10⁻⁷, L3 1×10⁻¹¹ |
| C0c uniform C, ρ_c = 10⁻⁹ | residual < 10⁻³ | **mis-specified**: the knee sat at 846 pc, inside the 3000 pc grid |
| C0c repaired, ρ_c = 10⁻²⁰ (post-hoc) | < 10⁻³ | L2 5×10⁻⁹; L3 8×10⁻⁹ for r ≤ 300 pc |
| resolution n = 6000 → 12000 | stable | L3 residual at 20 pc 7.620 → 7.628 |

The repaired control's L3 departures beyond 300 pc (up to 10⁻²) are not numerical, and they matter. Striction scales
as (dC/dlnρ)·ρ̄/ρ. In a Plummer tail ρ̄/ρ ∝ r², while dC/dlnρ on the saturated side falls only as x^(−2γ). Any power-law
approach to C = 1 therefore eventually shows striction in a steep enough tail.

### 1. L3 dipole: the external field does not cancel internally (P1: held)
Script `findings/scripts/gc_refraction_l2_vs_l3.py` (+ `_output.txt`). Residual = angle-rms of the linear-in-g_ext
acceleration minus its mass-weighted mean, in units of g_ext (1.57×10⁻¹⁰ m/s²).

| (γ, ρ_c) | knee r | res L2 @knee | res L3 @knee | L3/L2 | res L3·g_ext/\|g_L3\| @knee |
|---|---|---|---|---|---|
| 0.489, 0.161 | 19.1 | 0.195 | 7.98 | 41 | 1.9 |
| 2.0, 0.161 | 19.1 | 0.024 | 9.50 | 392 | 1.7 |
| 0.489, 1.225 | 12.5 | 0.176 | 3.41 | 19 | 0.6 |
| 2.0, 12.12 | 7.6 | 0.028 | 1.37 | 49 | 0.2 |
| 0.489, 0.0079 | 35.2 | 0.204 | 27.26 | 134 | 7.26 |

- The body as a whole accelerates at exactly g_ext (C0b), but the **core feels 0.64 g_ext and the knee shell
  3.4–45 g_ext radially (at r_knee)**.
- L3 restores momentum conservation *globally* and destroys internal cancellation *locally*.
- The quadratic term C′|∇Φ_e|²/8πG is not computed. At the knee its ratio to the linear term is ~g_ext/(2g_s) ≈ 0.5,
  so **L3 has a nonlinear external-field effect as well**. "Density-keyed gravity has no nonlinear EFE" is an L2 (and
  algebraic) statement.

### 2. L3 monopole: striction beats gravity in an isolated cluster (P2: held)
Inward g_L3 = g_s + dΨ₀/dr, with Ψ₀ = C′(ρ)g_s²/8πG. At the knee, dΨ₀/dr / g_s = **3.9, 10.2, 1.8, 1.7, 13.2** for the
five pairs (registered threshold ≥ 1 for the first; order estimate 2). Net outward force for **all five**, e.g. 23.7–57 pc
at (0.489, 0.161), where g_L3/g_s reaches −2.95.

The site's "polarization force ≤ 2×10⁻⁵ of gravity" holds at the A·V² knee. At any knee a cluster crosses, the
ratio is O(1–10).

### 3. The window under L3 (P4: held, 18/27 verdicts change)
Script `gc_window_under_l3_monopole.py` (+ `_output.txt`, `.json`).
- Statistic, selection, mass model (modified Hubble), benchmark and cutoffs are imported verbatim; only the gfun
  changes.
- **Identity control:** L3 with C′ forced to 0 reproduces the published L2 row on all 27 grid points.
- MOND+EFE −0.093 and Newton −0.057, both as published.

| | L2 (published) | L3 |
|---|---|---|
| ok | ρ_c ≤ 0.0079 | **none** |
| EXCL | 0.124 – 30.3 | **0.031 – 0.196** |
| marginal | the rest | the rest |
| clusters with outward net g | 0 | ≤ 1 |

**Post-hoc tail-slope robustness** (`gc_window_under_l3_plummer_posthoc.py`). With Plummer tails (r⁻⁵), L3 gives outward
net g in **up to 39 of 42** clusters, with min g/g_s = −41. The slope statistic is then not measuring a hydrostatic
model at all. Striction ∝ ρ̄/ρ, so under L3 the answer is set by the mass model's outer slope.

Under L2 the Plummer benchmark shift (MOND −0.023) was already known (09-07 robustness row). Under L3 the dependence is
qualitative, not a shift.

### 4. Negative effective pressure (exploratory, not registered)
Script `l3_striction_negative_pressure.py` (+ `_output.txt`).
- **Linearization.** WKB at kr ≫ 1, keeping the O(1) δC∇Φ term in the field equation, gives
  c²_str = ρ g² [C″ − 2C′² cos²α / C] / 8πG.
  - The second term is negative for **any** C(ρ). The first is negative wherever C is concave (tanh-log, everywhere
    tested).
  - C″ was checked against finite differences to ≤ 1.4×10⁻⁴.
  - Dropped: the self-gravity Jeans term (∝ 1/k²) and background gradients (O(1/kr)).
- **Size.** −c²_str/σ² at the knee is 11, 13, 4.8, 2.1 and 38. The shell where it exceeds 1 spans ~0.5–2 r_knee
  (9.8–34.6 pc for the site's knee). The C′² part alone exceeds σ² at the knee in 3/5 cases.
- **Reading.** Pointwise-ρ L3 is short-wavelength unstable in the knee shell of bound systems. A smoothing length D
  larger than the unstable wavelengths would regulate it. The 09-15 result says the L2 GC window needs D ≲ 10 pc, while
  this shell is 10–25 pc wide, so the two requirements pull against each other. Not computed with D.
- **Caveat.** The fluid criterion is only indicative for a collisionless system.
- **Prior art (structural, not checked in detail).** Pani, Sotiriou & Vernieri 2013
  ([arXiv:1306.1835](https://arxiv.org/abs/1306.1835)) show that theories whose field equations contain derivatives of
  the matter density are "overly sensitive to abrupt changes" and give surface singularities in stars. See also
  [arXiv:2306.12350](https://arxiv.org/abs/2306.12350). L3's force, −∇[C′(ρ)|∇Φ|²/8πG], contains ∇ρ, which puts it in
  that structural class. M&D 2016 §6 left the Lagrangian and the SEP open for RG; they did not raise this sensitivity.

### 5. L2 truncation radius (P3: held; P5: void on the registered input)
- **Scaling.** r_eq is the first radius beyond the knee where the L2 residual equals own gravity. Over M 5×10⁴–2×10⁶
  and g_ext ×0.5–2 it scales as **M^0.509, g_ext^−0.514** (registered 0.50 ± 0.08). At 2×10⁵ M☉ and 10 kpc, r_eq = 39.6 pc
  against r_J = 96 pc. The residual beyond the knee is k ≈ 0.30–0.36 g_ext, nearly knee-independent. **The topic's
  "truncation radii ∝ g_ext" has the wrong exponent.**
- **Void run.** `gc_rt_scaling_catalogue.py` gives b = 0.326, c = 0.639: "Jacobi at 0.7σ/1.3σ, refraction excluded at
  16σ". The catalogue's r_t is "eq. 8 of Webb et al. 2013", a Jacobi radius from a Galactic potential, so this
  regression is circular.
  - My provenance threshold (rms < 0.05 dex) passed it at 0.090 dex.
  - The tell was the mean offset, +0.005 dex from a formula I wrote with an arbitrary V = 233. Read the column
    definition, not a scatter.
- **Input swap (post-hoc; same statistic and decision rule).** `gc_rt_scaling_harris_king.py` uses Harris 2010 King
  r_t = r_c·10^c, excluding core-collapsed clusters, N = 109.
  - Fit: b = **0.160 ± 0.038**, c = **0.434 ± 0.045**.
  - Jacobi is off by −4.5σ in b and −5.2σ in c; refraction by −8.9σ and −1.5σ. **Both fail the rule, so the registered
    test is undiscriminating.**
  - As a descriptive note, the R_GC slope sits near refraction and the mass slope rejects it harder. The known
    confounds are under-filling and eccentric orbits.
- **Post-hoc, the sharper cut.** Low-mass clusters are the ones expected to fill their tidal limit.

  | M bin | N | r_t/r_J | r_t/r_eq(L2) | frac r_t > r_eq |
  |---|---|---|---|---|
  | < 3×10⁴ | 18 | 0.59 | **3.12** | **1.00** |
  | 3×10⁴–10⁵ | 29 | 0.63 | 1.63 | 0.86 |
  | 10⁵–3×10⁵ | 37 | 0.47 | 1.00 | 0.51 |
  | > 3×10⁵ | 25 | 0.40 | 0.75 | 0.24 |

  The lowest-mass clusters sit inside Jacobi and 3× outside L2's saddle radius. Using g_ext at the current radius
  rather than at perigalacticon *under*-states the tension.
  - **Condition.** This bites only where the knee is crossed inside r_eq: any ρ_c below the cluster's central density
    and above ~ρ(r_eq).
  - **Why it is soft.** King r_t is poorly constrained. The L2 residual is dipolar, so truncation is one-sided, while
    King r_t is azimuthally averaged. It is post-hoc.
  - **Why it matters anyway.** It is the first data contact of an L2-dynamics observable that doesn't route through a
    knee value. It applies to Refracted Gravity as formulated.

### 6. The 08-24 "EFE = 5.6×10⁻¹³" (read before registering)
`Synchronism/simulations/efe_locality_vs_phi_dependence.py` CASE A:
- It builds Pe with the same C_hist matrix as the dwarf-present solve, then compares internal_field(Pt − Pe) with
  internal_field(Pi).
- The refracted host field is inside Pe, so it was subtracted.
- The number certifies superposition. It says nothing about relative internal acceleration from the host.

The 09-11 topic premise ("the internal solution is independent of any external field" for the whole ε(ρ) class) does
not hold under L2 (§1, the L2 column) or L3.

## Implications for the Site
- **/for-researchers citable GC form, /honest-assessment GC fork.**
  - The window is an **L2, isolated-cluster, pointwise-ρ, modified-Hubble** result. Under the action (L3), the same
    statistic gives a different band (EXCL 0.031–0.196, no ok region). With Plummer tails there is no hydrostatic model.
  - The citation should carry "L2" next to γ, D and the mass model. It is not an invalid object, but it is not a
    property of "density-keyed gravity".
- **"EFE = 0" / "no nonlinear EFE".**
  - Under L2: linear refraction, a residual of ~0.35 g_ext beyond the knee.
  - Under L3: internal residual O(1–30) g_ext, plus a quadratic term. **L3 has a nonlinear EFE.** The 09-16 scoping
    ("no nonlinear EFE, linear refraction present") is correct for L2 only.
- **"Polarization force ≤ 2×10⁻⁵ of gravity"** (MOND Unification): scope it to the A·V² knee. At any knee a bound
  system crosses, the ratio is O(1–10).
- **A new negative result that travels (candidate, needs a D-regulated check).** For ε(ρ) gravity with the M&D
  Lagrangian, the striction force makes the effective pressure negative wherever C′ ≠ 0 and g ≠ 0. It is sign-definite in
  the C′² term, independent of C's shape. Density-keyed gravity with an action needs a smoothing length for stability,
  not just for the planet bound. It belongs with the RG composite-body note.

## Action: Maintainer
- **P0** /for-researchers GC citable form and /honest-assessment GC fork: add "under L2 (no action); under the action's
  force law (L3) the same statistic excludes 0.031–0.196 and has no ok region, and with Plummer tails no hydrostatic
  cluster exists across the knee". Source: `gc_window_under_l3_monopole_output.txt`,
  `gc_window_under_l3_plummer_posthoc_output.txt`.
- **P0** Wherever 09-16 wrote "no nonlinear EFE; linear refraction present", append "(L2). Under L3 the striction cross
  term gives O(1–30) g_ext internal residuals and a quadratic term."
- **P1** Scope the "polarization force ≤ 2×10⁻⁵" line to the A·V² knee, with the GC-knee number (1.7–13× at r_knee).
- **P1** Back-annotate `Synchronism/simulations/efe_locality_vs_phi_dependence.py`: the 5.6×10⁻¹³ subtracts the
  refracted host field (§6).
- **P2** Topic wording fix (archived copy): truncation ∝ (M/g_ext)^½, not ∝ g_ext.
- **→ dp (gated)** Density-keyed registrations should declare **dynamics (algebraic / L2 / L3), D, and the mass-model
  tail**. Today's window moves qualitatively on each.
- **Lint candidates:** "EFE = 0 exactly" without an L2/algebraic qualifier; "polarization force ≤ 2×10⁻⁵" without the
  knee.

## Open Threads
- **D-regulated L3.** Does a smoothing length that stabilizes the knee shell (D ≳ shell width ~10–25 pc) remain
  compatible with the L2 window's D ≲ 10 pc and the planets' D ≳ 30 AU? If not, there is no D for which L3 GCs are both
  stable and in the window.
- **Quadratic L3 EFE term** C′|∇Φ_e|²/8πG: compute it. Does L3 reproduce MOND-like EFE phenomenology in GCs?
- **Sightline-projected anisotropy** from the L2 dipole (topic Step 1(i)): not done. First-order it cancels in the
  angle-averaged slope; the one-sided truncation should show as tidal-tail asymmetry aligned with g_ext (Gaia streams:
  Pal 5, NGC 5466).
- **Observational r_t done properly:** de Boer+2019 LIMEPY/SPES fits (Gaia DR2) instead of Harris King, and
  perigalactic g_ext from orbits (Baumgardt's catalogue has R_peri).
- **Does RG with its disc parameters** (ε₀ 0.56, Q 0.92, ρ_c 7.4×10⁻⁴) cross its knee inside halo GCs? If so, §5 is a
  test of RG, not only of the framework.
