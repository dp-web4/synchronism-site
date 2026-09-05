# Finding: TEST-08's estimator could not have seen ANY known environment mechanism — and its own offsets, re-read against an acceleration proxy, carry the EFE's sign at the EFE's amplitude (2σ)

## Origin
`topics/chae-efe-detection-vs-cosmicflows-environment-null.md` (maintainer, 2026-09-05, from visitor Pass 3).
Pre-registered rules P1–P5 in `logs/2026-09-05.md`. Script and per-galaxy table:
`findings/scripts/test08_density_proxy_vs_external_field.{py,json}`, output `..._output.txt`.

## Summary
The site says TEST-08's null (r² = 10⁻⁴ between per-galaxy RAR offset and Cosmicflows-4 ambient
density, N = 141) "does not contradict Chae+2020 — different estimator, different claim," without a
number. Now it has three. **(1)** Propagating MOND+EFE at *full* 1D strength through TEST-08's own
estimator and proxy predicts r² ≈ 0.001 — and even through a *perfect* external-acceleration proxy
only r² ≈ 0.036, both below the registered kill bar of 0.09. TEST-08 was not a test of the EFE, of
C(ρ), or of any mechanism with a realistic lever; it tested one number, S177's ">20 %". **(2)** The
reason is not (only) that a density count is blind to acceleration — on the real catalogue the two
proxies share r² ≈ 0.26 (my pre-stated "< 0.1" was **refuted**) — it is that the mean-offset
statistic puts 90 % of the EFE's variance into a channel degenerate with galaxy luminosity, leaving an
environment channel of only 0.035 dex. **(3)** Against that channel, TEST-08's actual offsets show an
EFE-*signed* correlation with the acceleration proxy (partial r = −0.18, permutation p = 0.02) with a
fitted amplitude a = 0.6 ± 0.3 of the EFE prediction — consistent with Chae, consistent with 1, 2σ
from 0. Not a detection. Not a tension. A number the site can print instead of a shrug.

## Research Notes

### What was built
The TEST-08 per-galaxy table (offsets, 2 Mpc cylinder counts, distances) was read as adjudicated, and
its primary statistic reproduced to the digit (r = +0.012, r² = 0.0001, p = 0.89). From the *same*
CF4 catalogue (55,877 galaxies) an external-acceleration proxy was built for each of the 141
galaxies: an equal-mass vector sum Σ (r_j − r_i)/(|r|² + s²)^{3/2}, self-excluded with TEST-08's
rule, in eight conventions (redshift-space vs distance-modulus positions; softening 0.5/1/2 Mpc;
radius 10/30/50 Mpc), distance-corrected exactly as TEST-08 corrected its counts. Normalised to
Chae's median e_N = 0.033, its 10/50/90 percentiles are 0.005/0.033/0.059 — Chae's quoted range is
0.01–0.1. Crude (no masses, ~4 Mpc positional noise), and every use below says where that matters.

### P1 — density count vs |g_ext| on the real catalogue: **r² = 0.26** (range 0.04–0.44)
Pre-stated expectation (< 0.1, from the isotropy argument ⟨δ g_i⟩ = 0) **refuted**. The random-field
control explains why: in a Gaussian field δ and log|g| are indeed uncorrelated (r² = 1–3 × 10⁻⁴ at
σ_δ = 0.3 and 1.0); in the lognormal transform of the same field r rises to +0.26; in a Poisson
point-process mock the count-in-2 Mpc and the point-sum |g| correlate at r = +0.38 (r² = 0.14). The
correlation is a nonlinear/discreteness effect — the same handful of near neighbours dominate both
the count and the 1/r² sum. So "density is blind to acceleration" is true only at linear order and is
**not** the reason TEST-08 saw nothing. I withdraw it as a blanket statement.

### P2 — where the EFE's variance actually goes (the finding's mechanism)
1D aligned-field EFE (g_obs = a₀[(y+e)ν(y+e) − eν(e)], McGaugh ν), per-galaxy mean log-offset,
sample mean removed (the pooled fit absorbs it):

| channel | predicted offset std | r vs density proxy | r vs log g_ext | r vs log L₃.₆ |
|---|---|---|---|---|
| full (e_N from proxy) | 0.108 dex | −0.02 | −0.22 | **+0.77** |
| structure-only (every galaxy e = 0.033) | 0.106 dex | +0.17 | +0.10 | **+0.83** |
| environment-only (common g_bar profile) | **0.035 dex** | **−0.54** | −0.99 | −0.10 |

Ninety percent of the predicted offset variance is the *structure* channel: low-g_bar galaxies sit
low relative to the pooled RAR. That channel is degenerate with luminosity and is uncorrelated with
environment. What environment actually modulates, galaxy-to-galaxy at fixed structure, is a
0.035 dex signal against 0.124 dex of total offset scatter — and the density proxy captures 29 % of
*that* (r² = 0.29), not 26 % of the whole.

### P3 — the seed's number: predicted r² through the density proxy **≈ 0.001**
Mock data = α·EFE_pred + noise to the observed 0.124 dex, 2000 draws:

| α (EFE strength) | r² vs density proxy | r² vs log g_ext (perfect acceleration proxy) |
|---|---|---|
| 1.00 | 0.0009 [0, 0.007] | **0.036** [0.015, 0.067] |
| 0.50 | 0.0025 | 0.009 |
| 0.25 | 0.0033 | 0.0045 |

The null r² for N = 141 is 1/140 ≈ 0.007. **Seed rule adjudicated: "< 0.001 ⇒ proxy-limited; not a
test of the EFE."** Sharpened: it is *estimator*-limited first — even with the true external field in
hand, MOND+EFE at full strength gives r² = 0.036, under the 0.09 kill bar. TEST-08's registered bar
was set for an amplitude no mechanism produces; MOND+EFE, C(ρ) (lever ≤ 2 × 10⁻³ dex ⇒ r² ≲ 3 × 10⁻⁴),
and "no environment effect at all" all pass it. The null has **zero discriminating power among the
three**; its evidential content is exactly and only the S177 amplitude.

### P4 — the offsets, re-read: EFE sign, EFE amplitude, 2σ
| proxy convention | partial r (offset, log g_ext \| log L, log D) | p | a (env channel) | b (struct channel) |
|---|---|---|---|---|
| 3D, s = 0.5, R = 30 | **−0.177** | 0.036 | 0.76 ± 0.33 | 0.069 ± 0.098 |
| 3D, s = 1.0, R = 30 | −0.173 | 0.040 | 0.77 ± 0.34 | 0.077 ± 0.099 |
| 3D, s = 2.0, R = 50 | −0.175 | 0.038 | 0.89 ± 0.40 | 0.082 ± 0.099 |
| z-space, s = 0.5, R = 30 (fiducial) | −0.160 | 0.058 | 0.61 ± 0.31 | 0.075 ± 0.099 |
| z-space, s = 1.0, R = 30 | −0.133 | 0.115 | 0.53 ± 0.31 | 0.072 ± 0.100 |
| z-space, s = 2.0, R = 50 | −0.136 | 0.108 | 0.65 ± 0.36 | 0.078 ± 0.100 |
| either, R = 10 | −0.09 … −0.10 | 0.23–0.27 | 0.33–0.35 ± 0.23 | 0.05–0.07 |

Spearman (3D fiducial) −0.208, p = 0.013; permutation P(r ≤ −0.177) = 0.019. TEST-08's own density
secondaries had r ≈ −0.13/−0.14, "directionally EFE-like, ns" — the acceleration proxy strengthens
the same trend to ~2σ, and the sign survives controlling luminosity and distance. **The fitted
environment-channel amplitude a is consistent with the EFE at full strength (1) in every convention
and 1.3–2.3σ from zero.** Attenuation by proxy noise pushes a *down*, so 0.6 is a lower estimate.
This is what "consistent with Chae" looks like as a number. It is not an independent detection:
N = 141, a mass-less proxy, and eight conventions spanning 1.3–2.3σ.

**b — the structure channel — is 0.07 ± 0.10, i.e. the 1D aligned-field prediction that dwarfs sit
0.1–0.2 dex below the pooled RAR is not in the data.** Read carefully: this is *not* an EFE refutation.
The 1D aligned formula is known to overshoot the full AQUAL/QUMOND solutions (Chae & Milgrom 2022:
"AQUAL predicts weaker EFE than published AQUAL results… still stronger than QUMOND"), the McGaugh
form was itself fitted to these data, and the channel is degenerate with M/L and surface-brightness
trends. What b does say is that the EFE, if present at Chae's amplitude, lives in the offsets *only*
through the 0.035 dex environment channel — which is why a mean-offset estimator with any proxy was
never going to reach r² = 0.09.

### P5 — control, recorded
Gaussian: r(δ, log|g|) = −0.009 / +0.018 (σ_δ = 0.3 / 1.0). Lognormal: +0.09 / +0.26. Point process:
count vs point-sum |g| +0.38; count vs *true* |g| +0.22; point-sum vs true |g| +0.59. A 2 Mpc count
captures ~5 % of the true acceleration variance; the point-sum ~35 %. Both proxies are poor; the
density one is ~7× poorer.

## Implications for the Site
1. The maintainer's 2026-09-05 reclassification (TEST-08 refutes the S177 registration, not C(ρ)) is
   confirmed from the MOND side and **strengthened**: the null is consistent with C(ρ), with MOND+EFE,
   and with nothing — it cannot tell them apart. "Registration-specific" is the right label; "a clean
   null MOND+EFE must also live with" should become "a null MOND+EFE passes at full strength."
2. The proposal's transferable claim — "the RAR is a universal local law to r² < 10⁻⁴ against ambient
   density" — needs its scope stated: the bound does not constrain acceleration-coupled mechanisms
   below r² ≈ 0.04 through this estimator, and the same offsets show the EFE's sign against an
   acceleration proxy.
3. The site's "different estimator, different claim" sentence should carry the numbers (0.001 /
   0.036 / 0.09) and the fact that the offsets are EFE-signed at 2σ with amplitude 0.6 ± 0.3.
4. Prior-art note for the archive: S179 (Dec 2025) saw "opposite-sign trends with crude proxies" and
   ruled itself inconclusive. The sign it saw was the EFE's. It was not wrong; it was under-powered
   and pointed at the wrong variable.

## Action: Maintainer
- `/tier-1-existing` TEST-05/TEST-08 alert and `/honest-assessment` environment row: replace "different
  estimator; Chae's detection is not contradicted" with: *"Through TEST-08's estimator MOND+EFE at
  full strength predicts r² ≈ 0.001 (density proxy) to 0.036 (perfect acceleration proxy), both under
  the 0.09 kill bar; the null cannot distinguish MOND+EFE, C(ρ), or no effect. Re-read against an
  external-acceleration proxy from the same catalogue, the offsets are EFE-signed (partial r = −0.18,
  p ≈ 0.02–0.04, N = 141) with amplitude 0.6 ± 0.3 of the EFE prediction — consistent with Chae+2020,
  not an independent detection."*
- Back-annotate `Research/proposals/environment_null_refutes_registration_not_mechanism_20260905.md`
  with items 1–2 above (the proposal gates on dp; this adds MOND-side evidence, it does not change the
  proposed count).
- Citable negative (new, estimator-level): *"A per-galaxy mean-offset statistic against a pooled RAR
  fit puts ~90 % of an external-field effect's variance into a luminosity-degenerate channel; the
  environment-specific residue is ~0.035 dex for a 0.44 dex spread in g_ext. Environment tests of
  the RAR must key on external acceleration and on outer-curve shape, not on ambient density and
  mean offsets."*

## Open Threads
- **Mass-weighted g_ext.** CF4 has no luminosities; 2MRS/2M++ K-band would give a proper proxy and
  should tighten a. If a stays ≈ 1 at 3σ with N = 141 that would be a *third* estimator on the EFE,
  independent of Chae's RC-shape fit. Cheap (one catalogue join).
- **Chae's own fitted per-galaxy e values** (2020, Table) vs my proxy: a direct check of the proxy's
  quality, and of whether a's shortfall from 1 is attenuation.
- **The b = 0.07 result** deserves its own pre-registered run with the QUMOND/AQUAL calibrated
  formula in place of the 1D aligned one: the question "is the structure channel in the data at the
  *numerical* EFE amplitude?" is a real MOND-side test and, unlike a, would have the power to fail.
- **Why the nonlinear δ–|g| correlation is 0.26 and not 0.6:** the point-process mock gives
  count-vs-true-|g| r = 0.22 — is that the catalogue-completeness floor, or is 2 Mpc simply the wrong
  scale (g_ext is dominated by 1–5 Mpc, counts by < 2 Mpc)? A scale scan is a one-line change.
