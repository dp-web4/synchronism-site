# Finding: C(ρ) vs Verlinde Emergent Gravity — Structural Inequivalence with Empirical Convergence (at MOND)

**Date**: 2026-05-24
**Origin**: Topic `verlinde-compander-comparison.md` (seeded 2026-05-24 by maintainer, originating from visitor Pass 4 researcher)
**Status**: Complete; seeds follow-up on cluster-scale C(ρ) computation

## Summary

The topic posed a binary: is C(ρ) a *reduction* of Verlinde (third reparametrization, but with field-theoretic foundation), or does it provide a *new discriminating test*? The answer is **neither**. C(ρ) is structurally inequivalent to Verlinde — they parameterize different variables (local ρ vs integrated M_B(r)), with different functional forms, and Verlinde produces explicit radius-dependent rotation-curve shapes while C(ρ) at free-γ collapses to the universal McGaugh RAR. They converge on MOND in the galaxy regime *by different routes* — joining a growing list (MOND, McGaugh empirical, QUMOND, C(ρ) free-γ, Verlinde 2016) — but C(ρ) cannot be tested against Verlinde at the scale where Verlinde fails (clusters) because **C(ρ) has no dimensional-bridge formula from local density to apparent gravitational mass**. This dimensional incompleteness is the actual finding: Verlinde gives M_D(M_B, r); C(ρ) gives only C(ρ). The latter is not a prediction at scales other than the one where ρ_crit was calibrated.

## Research Notes

### The structural comparison

| Aspect | Verlinde (2016) | C(ρ) Synchronism | Same? |
|---|---|---|---|
| **State variable** | M_B(<r) — enclosed baryonic mass profile | ρ(r) — local matter density | ❌ different |
| **Form** | g_t = g_b[1 + √(a₀/g_b)·√F(r)] with F radius-dependent | C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)) | ❌ different family |
| **Closure / dynamics** | Emergent field theory in de Sitter (contested but specified) | Static evaluative map; no governing equation, no self-consistency | ❌ structurally different |
| **a₀ origin** | Entropy budget of Hubble volume → a₀ = cH₀ (with O(1) coefficient) | ρ_crit = A·V_flat² calibrated per galaxy, dimensional anchor to cH₀/(2π) | Different routes to same number |
| **Galaxy rotation curve** | Derivable from M_B(r) — no per-galaxy free parameter | Requires V_flat fitted per galaxy via ρ_crit | ❌ Verlinde more first-principles here |
| **RAR shape** | Radius-dependent ("hook" above McGaugh's curve at inner radii) | Universal (after free-γ → 0.49, identical to McGaugh) | ❌ |
| **Cluster prediction** | M_D² = (a₀·r·M_B)/(6G) — explicit | None — no dimensional bridge from C to mass discrepancy | N/A |

### Empirical state of each at galaxy scale

**Verlinde on SPARC (Lelli, McGaugh, Schombert 2017)**: Verlinde's framework *underperforms* McGaugh's RAR. The radius-dependent term F(r) produces a characteristic "hook" shape above the empirical RAR at inner radii (R ≈ R_d). Fits require implausibly low stellar mass-to-light ratios (Υ⋆ ≈ 0.2 vs. fiducial 0.5 M☉/L☉) that conflict with stellar population synthesis. Verdict: **Verlinde is worse than MOND on the standard galaxy benchmark.**

**C(ρ) on SPARC (explorer 2026-05-21)**: γ=2 refuted at ΔBIC = +184. Free-γ converges to γ ≈ 0.49 with RMS identical to McGaugh's MOND to four decimal places, with a BIC penalty of +7 for the extra free parameter. Verdict: **C(ρ) free-γ ≡ MOND ≡ RAR empirical floor.**

The implication: Verlinde's "field-theoretic foundation" — held up by the Pass 4 question as the thing C(ρ) lacks — has *not* translated into better galaxy predictions. On the SPARC benchmark Verlinde performs *worse* than the empirical MOND interpolation that C(ρ) free-γ collapses onto. "Field-theoretic" is not a substitute for "phenomenologically accurate."

### Empirical state of each at cluster scale

**Verlinde at clusters (Tamosiunas et al. 2019, arXiv:1901.05505)**: Verlinde's M_D = √(a₀·r·M_B/(6G)) systematically underpredicts cluster-lensing-required masses by factors of 1.5–3×, depending on cluster and assumptions. This is a known cluster failure that has been the subject of multiple independent tests (Diaz+2017; Hodson & Zhao 2017). Verdict: **Verlinde does not survive clusters.**

**C(ρ) at clusters**: No prediction has been computed. The /honest-assessment page acknowledges Bullet Cluster as a documented "mechanism-class sign error" but the suppressor-class diagnosis was a cosmological structure-growth statement, not a cluster mass-discrepancy profile.

### The actual structural finding — the enclosure problem

Verlinde's formula M_D = √(a₀·r·M_B/(6G)) is **dimensionally complete**: given a baryonic mass profile, it gives an apparent dark-matter profile. This is what lets it be tested at SPARC, at clusters, at lensing scales.

C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)) is **not dimensionally complete** as a gravitational prediction. It maps local density to a unitless number in [0, 1]. To go from C(ρ) to an observable like apparent rotation velocity or lensing convergence requires an unspecified bridge. In galaxies this bridge is **per-galaxy V_flat fitting**: ρ_crit = A·V_flat² closes the loop only after V_flat is taken from the observed rotation curve. That is not a derivation — it is post-hoc calibration. The framework has no published prescription for the cluster analog: given a cluster's baryonic density profile ρ_gas(r) + ρ_stars(r), what does C(ρ) predict for the apparent-DM-to-baryonic-mass ratio?

If no such bridge exists, **C(ρ) cannot be compared with Verlinde at clusters because C(ρ) does not make a cluster prediction.** This is not a strength (no failure on record); it is the absence of a prediction-generating mechanism beyond the regime where ρ_crit was set.

### Resolution of the topic's binary

| Hypothesis from topic | Verdict |
|---|---|
| C(ρ) is a *reduction* of Verlinde | **No** — different state variables (local ρ vs integrated M_B), different functional families, different dimensional completeness. C(ρ) is not a sub-case or limit of Verlinde's framework. |
| C(ρ) provides a *new discriminating test* against Verlinde | **No** — in the only regime where C(ρ) makes a calibrated prediction (galaxies, after V_flat fit), it converges to MOND. Verlinde *also* attempts to recover MOND in that regime but does so less well. They cannot be discriminated by C(ρ)'s current prediction set. |
| (Third answer, not in the topic) C(ρ) and Verlinde are both members of the "all-roads-to-MOND" class with structural inequivalence and dimensional asymmetry | **Yes** — this is the correct framing. The class also includes McGaugh empirical RAR, QUMOND (Famaey & McGaugh 2012), MOG, AQUAL. Each gets to MOND by different routes; C(ρ) gets there by parameter collapse, Verlinde by entropy displacement. |

### Why "all roads lead to MOND" is now a class observation

After 2026-05-21's SPARC RAR result (free-γ ≡ MOND, ΔBIC = +7), the galaxy regime is now a known empirical attractor: any modified-gravity ansatz with enough parameters will collapse onto McGaugh's RAR shape because that is what 2807 SPARC points actually require. **Variation among frameworks is invisible at the galaxy regime by data construction**, not by theoretical convergence. This is the cleanest illustration of the "MOND is an empirical regularity, not a theory" position (Famaey & McGaugh 2012). Frameworks distinguish themselves at:
- **Cluster scales** (Verlinde fails; MOND fails; ΛCDM works; QUMOND with neutrinos works; C(ρ) silent)
- **Cosmological scales** (Verlinde silent; ΛCDM works; C(ρ) suppressor mechanism failed by DESI sign-reversal 2026-05-05)
- **Strong lensing** (Verlinde partially tested, mixed; ΛCDM works; C(ρ) silent)
- **Wide binaries** (active dispute; C(ρ) prediction ξ(ρ)>0 has no specified amplitude — TEST-02 is a placeholder per topic queue)

The compander C(ρ) is silent at three of these four discriminating scales because the dimensional bridge from local ρ to gravitational observables is not specified outside galaxies.

### The Pass 4 framing was a category error

The visitor researcher implicitly contrasted "Verlinde has a field-theoretic foundation" with "C(ρ) is a compander." The implied superiority of "field-theoretic" assumes empirical correlated quality. The data does not support this:
- Verlinde with field theory: SPARC inferior to MOND, clusters fail by 1.5-3×.
- C(ρ) without field theory: SPARC ≡ MOND (by parameter collapse), clusters not even attempted.

So the question "what does C(ρ) add over Verlinde?" inverts. The actual comparison is: **C(ρ) lacks field theory but matches the data-fit ceiling of any galaxy-only modified gravity (MOND/McGaugh). Verlinde has field theory but underperforms that ceiling. Neither tells you anything new about clusters or cosmology that ΛCDM hasn't already addressed.**

This is consistent with the auto-memory note `project_chemistry_null_model_gap` pattern: high-prestige-sounding apparatus often masks empirical degeneracy with the data-fit floor.

## Implications for the Site

The /honest-assessment "Modified-Gravity Landscape" section's current Verlinde row reads:

> "Verlinde Emergent Gravity (2016): Derives MOND-like rotation curves from entropy gradients in the Hubble volume. Tested by Brouwer et al. (2017) KiDS lensing — consistent at ~1σ. **Key question: does C(ρ) reduce to Verlinde in the low-acceleration limit? Not yet shown.**"

This understates two known facts and overstates the open question:

1. The KiDS 1σ result (Brouwer+2017) is the *most favorable* test of Verlinde; later SPARC (Lelli+2017) and cluster (Tamosiunas+2019) tests are less kind. The current language reads as if Verlinde is at-parity with MOND. It is not.
2. The "Not yet shown" reduction implies an open theoretical question; today's structural comparison shows the reduction does *not* exist by virtue of incompatible state variables, and no derivation can produce a reduction without redefining one framework in terms of the other's variables.

## Action: Maintainer (HIGH)

1. **/honest-assessment, Modified-Gravity Landscape table**: replace the Verlinde row with:
   > "Verlinde Emergent Gravity (2016): Derives MOND-like rotation curves from entropy displacement in the Hubble volume. Tested by Brouwer+2017 (KiDS lensing, consistent at 1σ), Lelli+2017 (SPARC, **underperforms McGaugh's RAR — requires Υ⋆ ≈ 0.2, predicts a 'hook' shape not seen**), Tamosiunas+2019 (clusters, **underpredicts lensing-required mass by 1.5–3×**). C(ρ) does *not* reduce to Verlinde — different state variables (local ρ vs integrated M_B(r)), different functional form, no dimensional bridge from C to apparent mass. Both converge on MOND in the galaxy regime by different routes; both are silent at the cluster scale where Verlinde fails (C(ρ) lacks a cluster prediction at all). See `explorer/findings/verlinde-compander-comparison.md`."

2. **Add a sentence to the same section's closing paragraph**: "MOND-in-the-galaxy-regime is now a known empirical attractor (SPARC RAR is the floor any ansatz with enough parameters reaches). Distinguishing tests live at cluster, lensing, and cosmological scales — where C(ρ) currently has no specified prediction-generating mechanism."

3. **/galaxy-rotation**: in the "What about Verlinde?" subsection (or add one if absent), state plainly: "Verlinde performs worse than MOND on SPARC. C(ρ) free-γ matches MOND. They are not the same theory and not reductions of each other; they are different routes to the same empirical floor."

4. **/mond-unification, Step header**: add a footnote at "Verlinde (2017) obtained a similar relation from emergent gravity" reading: "Verlinde's a₀ derivation has a different geometric coefficient (1/6 vs 2π); the *numerical agreement* is dimensional, not structural — three cosmological constants and the requirement of acceleration units leave little room for variation."

5. **/parameter-derivations a₀ row** (where Milgrom/McCulloch/Verlinde/Smolin are listed): add a single line — "The 'four independent derivations' undercount: each uses different physics (modified inertia for McCulloch, entropy for Verlinde, dimensional analysis for Synchronism, MOND empirical for Milgrom) but reaches the same number because cH₀ has units of acceleration and is the only cosmological combination that does. This is closer to four parameterizations of one constraint than four independent derivations."

## Action: Explorer self-seed (HIGH)

Topic to add to queue: **c-rho-cluster-prediction-bridge-specification.md** — "Does Synchronism have, or could it derive, a published prescription that turns C(ρ(r)) for a cluster baryonic density profile into a prediction for apparent-DM mass discrepancy? If yes, run it on Coma (X-ray + lensing data widely available) and compare to ΛCDM + Verlinde + MOND. If no, /honest-assessment should explicitly state that C(ρ) is galaxy-scale-only by construction, not by choice."

This is the only way the framework could re-enter the modified-gravity conversation as anything other than 'MOND-by-parameter-collapse-in-galaxies-only.'

## Open Threads

1. **Wide binaries**: The Verlinde wide-binary test (Chae et al. 2024 cited in the search result on Verlinde reanalysis) is a separate cleavage that wasn't resolved here. Verlinde's apparent-DM formula gives a specific wide-binary prediction; the existing site topic `wide-binary-xi-rho-functional-form` should probably be paired with this for a clean comparison.

2. **MOG / Moffat**: The Pass 4 researcher named MOG alongside Verlinde and TeVeS. MOG's running gravitational coupling makes post-Newtonian predictions beyond rotation curves — possibly worth a separate session, but lower priority because MOG-vs-Synchronism comparison has no equivalent setup in either's apparatus.

3. **Class diagnosis as a publishable observation**: The pattern "modified-gravity ansätze with enough parameters all collapse to MOND in galaxies by data construction" is a methodological observation worth naming. The site's A2ACW preprint draft could include a sister observation: *the modified-gravity literature has the same convergence-without-independence pattern A2ACW exhibits in AI*. This would make the methodology paper a wider statement about empirical degeneracy in underdetermined theory selection.

4. **The "field-theoretic foundation" inversion**: This finding's claim that "field-theoretic" doesn't guarantee better predictions is worth a follow-up in its own right — the inverse pattern (phenomenological models outperforming theoretically motivated ones) is well-documented (e.g., μ-law audio outperforming early information-theoretic coders for decades). Could connect to a /research-philosophy entry on heuristic-vs-derived models.
