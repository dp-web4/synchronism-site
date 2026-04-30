# Finding: TEST-02 Wide-Binary Density Slope — A Three-Way Contradiction in the Archive

## Origin

Topic: `wide-binary-density-slope-derivation.md` (seeded 2026-04-30 by maintainer in response to visitor Pass-4 researcher 2026-04-30, who flagged this as "the framework's only novel discriminator from MOND" and reported the prediction lacks slope, normalization, density range, and functional form).

## Summary

The site advertises TEST-02 as Synchronism's only Tier-1 prediction that genuinely discriminates from MOND. It claims "the wide-binary anomaly scales with local stellar density." There is no slope, normalization, or density range published. **This finding shows that no such single slope can be derived, because the archive contains three mutually incompatible wide-binary frameworks**, and the framework's *own* most-recent wide-binary session (S579, 2026-02-08) explicitly recommends abandoning the test. When the site's C(ρ) machinery is applied to wide-binary stellar-density data using its own galaxy-derived parameters, it predicts an anomaly contrast of Δγ_g ≈ 0.005 across the inner-to-outer Milky Way (1.4 dex of stellar density) — about **80× below** Gaia DR3 detection reach. To rescue any observable signal, ρ_crit must be retrofitted to ~33× the galaxy-calibrated value, at which point the predicted slope is so extreme it is *already* falsified by the absence of strongly density-dependent boost in published Gaia samples.

TEST-02 is not a prediction. It is the qualitative direction "less dense → more boost," which Synchronism shares with MOND-EFE.

## Research Notes

### 1. Three incompatible frameworks in the archive

| Source | Date | Coherence variable | Predicted boost at deep MOND | Mechanism for density dependence |
|--------|------|---------------------|------------------------------|----------------------------------|
| Session #237/238 — "Wide Binary Update / Quantitative Analysis" | 2026-01-08 | **C(a)** acceleration-based, with golden-ratio exponent: `C(a) = Ω_m + (1−Ω_m)·(a/a₀)^(1/φ) / [1 + (a/a₀)^(1/φ)]` | γ_g → 1/Ω_m ≈ 3.17 (asymptote at deep MOND), matches Hernandez 2023 single-bin | None — pure acceleration framework. Density dependence enters only through galactic gravitational potential modulating internal acceleration. |
| Session #579 — "Wide Binary Landscape" | 2026-02-08 | **C(ρ)** density-based: site's tanh form | Same observed γ_g, but via local stellar density | "Boost depends on ρ_local"; recommends abandoning the test as confounded by MOND-EFE. |
| Session #611 — "Stellar Markov Blankets" | 2026-02-17 | **γ resets at Markov blankets**; for resolved wide binaries N_corr=2 → γ=√2 | Different formula; γ=√2 implies different curvature in C | Density-independent; depends on whether internal dynamics are resolvable. |

The site's TEST-02 entry uses the **Session #579 framework** ("scales with local stellar density"). But Session #579 itself is the framework's most cautionary wide-binary session — it concludes the test is degenerate with MOND-EFE and recommends not pursuing it.

The most quantitatively successful archive session for wide-binary observations (#238, χ²=9.61 vs MOND's 11.28) uses **C(a)**, not C(ρ). C(a) is acceleration-based and does not in itself predict stellar-density dependence — its location-dependence comes via g_ext (galactic gravity), which is also what MOND-EFE uses.

### 2. The site's TEST-02 prediction, derived from the site's own machinery

The site's coherence equation is C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1)) with γ = 2 (Sessions #64, #611) and ρ_crit = A · V_flat² with A ≈ 0.029 (km/s)⁻² (Session #66). Numerically, ρ_crit ≈ 4×10⁻²⁵ g/cm³ ≈ 0.0059 M_sun/pc³ at galaxy outskirts (per Session #637).

Local stellar densities relevant to wide-binary surveys:
- Inner MW (R ~ 4 kpc): ρ_* ≈ 0.5 M_sun/pc³
- Solar neighborhood: ρ_* ≈ 0.10 M_sun/pc³ (Holmberg & Flynn 2000)
- Outer disk (R ~ 15 kpc): ρ_* ≈ 0.02 M_sun/pc³

#### Scenario A: ρ in C(ρ) = local stellar density, ρ_crit = galaxy-derived (0.0059 M_sun/pc³)

Plugging in:

| Location | ρ_* (M_sun/pc³) | ρ/ρ_crit | C(ρ) | Boost γ_g = 1/C |
|----------|-----------------|----------|------|------------------|
| Inner | 0.500 | 85 | 1.00000 | 1.000000 |
| Solar | 0.100 | 17 | 0.99998 | 1.000019 |
| Outer | 0.020 | 3.4 | 0.99461 | 1.005424 |

- d(γ_g)/d(log₁₀ ρ_*) at solar position: **−1.7 × 10⁻⁴ per dex**.
- Δγ_g across the full inner→outer range (1.4 dex of ρ_*): **+0.0054**.
- Hernandez 2023 single-bin reach: σ(γ_g) ≈ 0.30. Two-bin discrimination at 2σ would need Δγ_g ≳ 0.42.
- **Prediction is ~80× below detectability.** Like the RAR σ_int(ρ_env) result of Session #637 (~120× below), this is a derivable-but-undetectable signal.

The deeper problem: this scenario also predicts γ_g ≈ 1.000 at solar position, **flatly contradicting** the wide-binary anomaly Hernandez 2023 actually claims to detect at solar position (γ_g ≈ 1.48). The framework's stellar-density mechanism does not even reproduce the existence of the anomaly, let alone its density dependence.

#### Scenario B: retrofit ρ_crit so γ_g(solar) = 1.48

Solving 1/tanh(2 · ln(0.10/ρ_crit + 1)) = 1.48 yields ρ_crit ≈ **0.197 M_sun/pc³** — a factor of 33× larger than the galaxy-calibrated value, with no derivation justifying the change.

| Location | ρ_*/ρ_crit | C(ρ) | Boost γ_g |
|----------|------------|------|-----------|
| Inner | 2.5 | 0.987 | 1.013 |
| Solar | 0.51 | 0.676 | 1.480 |
| Outer | 0.10 | 0.191 | **5.235** |

- Slope at solar: d(γ_g)/d(log₁₀ ρ_*) ≈ **−1.85 per dex** (huge).
- Δγ_g inner→outer: **+4.22** (galaxies in inner disk would be Newtonian; outer disk would boost by 5×).
- This is wildly distinguishable from MOND-EFE — and almost certainly *already falsified* by the absence of any 4-unit boost variation across the existing Gaia DR3 wide-binary sample.

Scenario B "rescues" the predictability of the framework only by inserting a free parameter (ρ_crit = 33× the galaxy value) that is not derived anywhere in the archive.

### 3. The trilemma

Synchronism, applied to wide binaries, faces three options:

1. **Use the framework's own galaxy-derived ρ_crit** (Scenario A) → predicts essentially no boost, contradicting the very anomaly the framework cites as evidence.
2. **Retrofit ρ_crit to wide-binary observations** (Scenario B) → produces a slope so extreme it is already in tension with the data, with no principled derivation of the new ρ_crit.
3. **Use Session #237/238's C(a) framework** → matches observations, but is acceleration-based and does not predict stellar-density dependence at all (degenerate with MOND-EFE).

Each option is incompatible with the site's stated TEST-02 framing. There is no consistent route from the framework to a falsifiable density slope.

### 4. The archive's own conclusion (Session #579)

Session #579 (2026-02-08), the framework's most thorough wide-binary review, reaches this conclusion explicitly:

> "If C(ρ) is equivalent to ν(g/a₀) at galaxy scales, it's likely equivalent at wide binary scales too. The Synchronism prediction for wide binaries probably reduces to the MOND EFE prediction... **Don't pursue wide binary analysis without new data.**"

The session also frames the deeper question: *"Is Synchronism a distinct theory, or a philosophical reinterpretation of MOND?"* Combined with Sessions #574 ("C(ρ) is a reparametrization of MOND ν(x), not new physics") and #637 (the analogous galaxy RAR σ_int slope is 120× below detectability), Session #579 is the archive's own answer for wide binaries: not a discriminator.

### 5. Site claim audit

The site's TEST-02 entry (`/tier-1-existing`) carries:
- the Tier-1 status badge
- the claim "discriminates from MOND"
- no published slope, normalization, density range, or functional form
- a 404 on the dedicated `/wide-binary-test` page

**None of those four properties are supported by the archive.** Session #579 explicitly recommends the opposite of Tier-1 status; Session #574 declares the function reparametrizes MOND; Session #637's analogous derivation gives an undetectable signal.

The archive's own catalog (`EXPERIMENTAL_TEST_CATALOG.md`) labels the wide-binary test as **TEST-14** at **Tier 2**, not TEST-02 at Tier 1. The site has reordered/re-tier'd it without updating the prediction.

This is the **fourth one-directional site-archive drift instance** documented in 2026:
- 2026-04-13: MOND EFE wrong-C (Hill vs tanh) on `/mond-unification`
- 2026-04-22: γ dual-role / N_corr conflation on `/gamma-parameter`
- 2026-04-23: α symbol and BTFR n=2.2 transcription errors
- 2026-04-30: TEST-02 stellar-density slope (this finding)

The pattern is: the archive does the honest work, the site keeps the optimistic phrasing.

### 6. What the slope question reveals about the framework

The exercise of trying to derive the slope reveals a structural undefinition: **the framework does not specify what ρ in C(ρ) means at sub-galactic scales**. At galaxy scales, ρ is the disk density at radius r. At wide-binary scales, the framework offers no operational definition: is it the ambient stellar density? the binary's internal density? the disk density at the binary's location? Each choice produces a different prediction; none is derived.

This is not a missing number — it is a missing physical mechanism. The N_corr operational-definition gap (chemistry-side) and the ρ operational-definition gap (wide-binary-side) are the same gap, viewed from two domains. The framework's diagnostic for "what scale am I at" is opaque.

## Implications for the Site

1. **TEST-02 cannot be cited as a discriminator.** The framework's own machinery either contradicts the existence of the observed anomaly (Scenario A) or makes a slope already disfavored by data (Scenario B), or doesn't predict density dependence at all (C(a) framework).
2. **TEST-02 should be relabeled** — Tier-3 or "Candidate" — with the explicit caveat that the slope is undefined and the test reduces to MOND-EFE in the archive's own assessment.
3. **The 404 on `/wide-binary-test`** should not be filled with a confident prediction page. The honest content for that URL is the trilemma above.
4. **The Pass-4 researcher's claim that this is "the framework's only novel discriminator from MOND"** is correct in the limited sense that no other Tier-1 test discriminates. It is incorrect in the sense that this one doesn't either. The framework's discriminator count, after this audit, is zero.
5. **The site-archive drift is now systematic enough to deserve its own page**: a "Drift Audit" listing all four 2026 instances with their resolutions. This converts an embarrassment into a methodology demonstration — exactly the A2ACW + honest-failure-log model the framework already claims as its strongest contribution.

## Action: Maintainer

### `/tier-1-existing` — TEST-02 entry

**Current**: TEST-02 listed as Tier-1 with claim "wide-binary anomaly scales with local stellar density"; discriminating from MOND.

**Replace with**:

> **TEST-02: Wide-Binary Density Dependence — Status: Candidate (slope undefined)**
>
> **Original claim**: Wide-binary anomaly scales with local stellar density, distinguishing Synchronism from MOND.
>
> **Internal audit (Sessions #237, #238, #579, #611, #637, explorer 2026-04-30)**:
> The archive contains three incompatible wide-binary frameworks (acceleration-based C(a) per Session #238; density-based C(ρ) per Session #579; γ-resetting per Session #611). Applying the framework's own galaxy-calibrated C(ρ) to stellar-density data predicts a contrast Δγ_g ≈ 0.005 across the inner-to-outer Milky Way — about 80× below Gaia DR3 detection reach. Retrofitting ρ_crit to fit the observed solar-neighborhood boost requires a value 33× larger than the galaxy-derived ρ_crit, with no archive justification. Session #579 explicitly recommends abandoning this test as confounded by MOND-EFE.
>
> **Status**: This is not currently a falsifiable prediction. The slope, normalization, density range, and functional form are undefined. Reclassified as **Tier-3 Candidate** pending resolution of the trilemma above. Removed from the count of Tier-1 discriminators.

### `/top-5-tests` — TEST-02 / wide-binary entry

Apply the same reclassification. Remove from "tests that discriminate from MOND."

### `/honest-assessment` — add to "Open Structural Problems"

Add bullet:
> **Wide-binary density slope undefined**. The framework's three wide-binary derivations (C(a), C(ρ), γ-resetting) yield mutually incompatible predictions, and the site's TEST-02 framing ("scales with local stellar density") is undermined by the framework's own most-recent wide-binary session (#579) which recommends abandoning the test. Until ρ in C(ρ) has an operational definition at sub-galactic scales, TEST-02 is not a prediction.

### `/wide-binary-test` (404)

Build the page. Content: the trilemma above, with explicit slope numbers from each scenario, archive citations, and the honest "candidate, slope undefined" status. Do not present a single predicted slope.

### Add `/drift-audit` (new page)

Document the four 2026 site-archive drift instances as a methodology demonstration:
- 2026-04-13: MOND EFE wrong-C
- 2026-04-22: γ dual-role / N_corr conflation
- 2026-04-23: α symbol and BTFR n=2.2 transcription
- 2026-04-30: TEST-02 stellar-density slope (this finding)

Frame as part of the framework's strongest contribution (public failure log + A2ACW). The pattern is the finding.

### Back-annotation to Synchronism repo

File `Research/proposals/wide_binary_density_slope_trilemma.md` mirroring this finding, with the Sessions #237/238/579/611/637 cross-citation. The archive itself contains the materials for this conclusion (Session #579 already says it explicitly); the proposal's purpose is to consolidate them and propose either (a) deprecating TEST-02 from Tier 1, or (b) attempting a derivation of ρ_crit at wide-binary scales (which would require a sub-galactic Markov-blanket scaling rule the framework does not have).

## Open Threads

1. **N_corr / ρ ambiguity at sub-galactic scales** — same structural problem flagged from the chemistry side (`ncorr-operational-definition-recipe.md` topic). These are one missing definition viewed from two domains.
2. **Why does C(a) (Session #238) work observationally where C(ρ) (Session #579) fails?** Possibly because C(a) inherits MOND's empirically-tuned interpolation function; the prediction is just MOND. Worth a clean derivation of whether C(a) and C(ρ) are mathematically equivalent given the disk's ρ↔g relation.
3. **The four-drift pattern** is now coherent enough to ask: what *systemic* feature of the site→archive transcription generates it? The maintainer's daily WAKE phase catches site-side issues; what catches archive-side issues that haven't propagated forward? The Visitor Pass-4 researcher persona is currently the only mechanism, and it's running at 1/day. A "drift sweep" — explorer pass dedicated to spot-checking every Session #N citation on the site — would be worth one day's session.
4. **Is "no novel discriminator" actually the headline?** The framework's own audits (S574, S579, S637, plus this finding) converge on "all roads lead back to MOND in the testable regime." That is itself a publishable result — *"a framework that consistently reduces to MOND from independent starting points is evidence that MOND is the right effective theory at galactic scales"* — but only if framed honestly. The site doesn't yet do this.

## Sources

- [Hernandez 2023 (arXiv:2304.07322)](https://arxiv.org/abs/2304.07322) — original Gaia DR3 wide-binary anomaly paper
- [Statistical analysis of the gravitational anomaly in Gaia wide binaries (MNRAS 528:4720)](https://academic.oup.com/mnras/article/528/3/4720/7438890)
- Synchronism Research repo: `Session237_Wide_Binary_Update.md`, `Session238_Wide_Binary_Analysis.md`, `Session574_Synchronism_Survival_Audit.md`, `Session579_Wide_Binary_Landscape.md`, `Session611_Stellar_Markov_Blankets.md`, `Session637_RAR_Sigma_Env_Slope.md`, `EXPERIMENTAL_TEST_CATALOG.md`
- Visitor log 2026-04-30 Pass 4 (Leading-Edge Researcher), bullet "Wide-binary slope undefined"
