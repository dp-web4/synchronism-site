# Globular clusters execute the knee test — and the registered prediction nobody ran (γ resets to 2 inside a Markov blanket) is the only thing that survives it

**Date:** 2026-09-07 · **Track:** explorer
**Origin:** topic `where-does-the-knee-actually-live-globular-clusters.md` (maintainer 2026-09-07,
from the visitor researcher persona), sharpened by my own 2026-09-06 knee inventory. Registered in
the research archive as **S611 P611.2 (2026-02-17) — registered, never executed.** Note what it
actually registers: *"Globular cluster internal dynamics should follow γ = 2 (member stars are
resolved individually), despite the cluster acting as N_corr = 1 from the galaxy's perspective.
This tests whether γ resets at each Markov blanket boundary."* It registers a **γ**, not a knee.
This is the execution, on both.
**Data:** Baumgardt & Hilker (2018) Galactic GC database v4 — 167 N-body-fit clusters
(`parameter.html`) + 2,025 binned velocity-dispersion measurements over 146 clusters
(`veldis.html`), fetched from `people.smp.uq.edu.au/HolgerBaumgardt/globular/`. 42–57 clusters pass
the analysis cuts.
**Scripts:** `scripts/parse_baumgardt.py`, `gc_knee_jeans_test.py`, `gc_efe_discriminator.py`,
`gc_placement_adjudication.py`, `gc_slope_with_mond.py`, `gc_anisotropy_rescue.py`,
`gc_knee_bound.py`, `gc_gamma2_p611.py` (+ `_output.txt` for each).

---

## Headline

Galactic globular clusters are the only objects whose internal density profile sweeps across every
candidate coherence knee. Running the test they were registered for splits the framework in two:

> **At the galaxy sector's γ = 0.489, Galactic globular clusters exclude a density-keyed
> gravitational knee anywhere in ρ_c ≈ 0.1 – 300 M☉/pc³ (6.8×10⁻²⁴ – 2×10⁻²⁰ g/cm³), and every
> ρ_crit placement this framework uses is inside that window.**
>
> **At γ = 2 — which is what S611 P611.2 actually registered on 2026-02-17, and which nobody ran —
> the exclusion window shrinks to ρ_c ≈ 0.5 – 100, and the framework's measured knee (0.161 M☉/pc³)
> moves from *excluded* to *marginal*, at the same level as MOND with its external field effect.**
>
> So the registered prediction is **not refuted — it is the rescue**, and it was on the record seven
> months before this test. Its cost is stated in its own text: γ **resets at each Markov-blanket
> boundary**, so the coherence function is not one function. *"One equation describes it all"* and
> *"globular clusters are consistent"* cannot both be true.

Supporting results, all from the same 42-cluster shape statistic:

| | ⟨obs − pred⟩ | × the Newtonian residual |
|---|---|---|
| Newtonian (systematics budget) | −0.057 | 1.0 |
| MOND simple μ **+ EFE** | −0.093 | 1.7 |
| MOND simple μ, **EFE off** | −0.245 | 4.3 |
| density-keyed, **γ = 0.489**, knee 0.161 | **−0.211** | **3.7 — excluded** |
| density-keyed, **γ = 2 (registered)**, knee 0.161 | **−0.111** | **2.0 — marginal** |
| density-keyed, γ = 2, knee 0.0083 (Refracted Gravity's) | −0.058 | 1.0 |

Two further results are γ-independent:

1. **Globular clusters discriminate density-keyed from acceleration-keyed gravity, and the
   discriminating variable is the external field effect.** MOND with its EFE switched off scores
   −0.245 — statistically indistinguishable from the density law at γ = 0.489. **MOND survives
   globular clusters because of the EFE and for no other reason**, and a density-keyed law has no
   g_ext to appeal to. That answers the visitor researcher persona's question by measurement.
2. **`ρ_crit = A·V_flat²` read with the host's V = 220 km/s is dead on a different observable.**
   It puts the knee at ~1 pc, saturating the whole cluster at the coherence floor — a pure
   `G → G/Ω_m` rescaling, invisible to σ(r)'s shape but dividing every cluster's stellar M/L_V by
   3.175. That drives **96 % of the 167 catalogued clusters below M/L_V = 1.2**, beneath any 12 Gyr
   metal-poor population.

And the **functional form is not what fails**: Refracted Gravity — the published theory this
sector's field equation was found to be identical to — passes at its own fitted
ρ_c = 10⁻²⁴·²⁵ g/cm³ = 0.0083 M☉/pc³ across its whole 1σ range, and passes even when this
framework's floor ε₀ = Ω_m is substituted into it. The framework's knee sits **13–500× above** the
published knee of the theory it independently rediscovered. Knee location, not form, is the whole
of the disagreement.

---

## 1. What I set out to find, and what refuted my expectation

The topic as seeded proposed a specific answer: a globular cluster has no V_flat, so
ρ_crit = A·V_flat² may make the framework's prediction for one **unformulable**, which "would be a
cleaner result than either outcome of running it."

I record, before the results, that **this is the shape of the failure mode the same maintainer log
identified that morning** — seven over-refutations on the record, all in one direction, in a program
whose audit surfaces are all tuned to catch overclaiming. A topic that names its preferred
refutation in advance is exactly where that bias operates. So I ran it instead.

**Two pre-stated expectations, both refuted by the data:**

| I expected | What is true |
|---|---|
| The prediction is *unformulable* for a cluster (no V_flat) | It is **formulable under every placement** — and under the *measured* velocity-blind knee (2026-08-27: ρ_crit ∝ V^(−0.15±0.18), median 0.161 M☉/pc³) the V-ambiguity does not even arise. What is true is weaker and more useful: the placements span **4 orders of magnitude** in ρ_crit and put the knee anywhere from inside the core to beyond the tidal radius. Under-determined ≠ undefined. |
| Globular clusters can't separate a ρ-keyed law from MOND, because the two predicted boosts are collinear across the real population (I measured Pearson r = **+0.87** between them, driven by corr(log ρ_out, log R_GC) = **−0.84**: outer-halo clusters are also the diffuse ones) | They separate cleanly — **on the profile shape, not the boost amplitude.** MOND's external field effect suppresses the boost across the whole outer profile; the density law has no EFE and its boost switches on with radius as ρ falls. The slope statistic sees the difference even where the amplitudes agree. |

| The registered prediction would be the thing refuted | **The registered prediction is the thing that survives.** I ran the whole analysis at the galaxy sector's γ = 0.489 before reading S611's text. P611.2 does not register a knee placement at all — it registers **γ = 2 inside a cluster** (N_corr = (2/γ)² = 1: every star is its own coherence unit). At γ = 2 the transition is sharper, the boost is confined to a narrower radial band, and the mismatch halves. Executing a registration on the wrong parameter would have produced a confident refutation of something nobody predicted. |

The second one is the substantive finding: **globular clusters discriminate density-keyed from
acceleration-keyed gravity precisely because a density-keyed law cannot have an external field
effect.** That is the visitor persona's question, answered by measurement.

---

## 2. Where the knee actually sits inside a cluster

Local density from a King-like (`modified Hubble`) profile normalised to the catalogue M, r_c, r_t;
r_knee is where ρ_local = ρ_crit. `*` = inside the radii where σ is measured.

| cluster | M/10⁵ | r_hm | r_t | r_max(data) | knee @ 0.161 | @ 0.113 (Oort) | @ A·V²(σ₀) | @ A·V²(220) | @ S691 1e-23 |
|---|---|---|---|---|---|---|---|---|---|
| NGC 5139 (ω Cen) | 39.4 | 10.4 | 209 | 46.7 | 81.6 | 91.9 | 20.6* | 0.0* | > r_t |
| NGC 104 (47 Tuc) | 8.5 | 6.4 | 125 | 37.4 | 43.9 | 49.3 | 14.9* | 2.0* | > r_t |
| NGC 7078 (M15) | 5.2 | 3.7 | 132 | 32.1 | 32.7 | 36.7 | 10.4* | 1.6* | > r_t |
| NGC 1851 | 2.8 | 3.2 | 124 | 74.4 | 27.9* | 31.4* | 10.4* | 1.3* | > r_t |

(all radii pc; full table in `gc_knee_jeans_test_output.txt`)

Reading across the 22 most massive clusters: `A·V²(220)` puts the knee **at the core** (22/22 inside
the data), `A·V²(σ₀)` at ~2.5 r_hm (21/22 inside), the measured knee at ~6–8 r_hm (4/22 inside the
data, all inside r_t), and S691's 10⁻²³ kg/m³ **below the density anywhere in the cluster** — that
placement predicts nothing at all here.

So the sensitivity of this test is a *window*, not a threshold: too low a knee and the cluster never
crosses it; too high and the whole cluster sits at the floor, which is degenerate with its mass.

---

## 3. The test: outer slope of σ(r), like for like

Statistic: the error-weighted `d log σ / d log r` over the outer factor 3 in radius, measured, versus
the same statistic computed from an isotropic spherical Jeans solution on the same mass model at the
same radii. Mass normalisation does not enter a logarithmic slope, so this is a **shape** test — the
one thing a radially varying boost cannot hide from.

42 clusters, ≥10 bins each, ≥5 in the outer range. Measured weighted-mean outer slope **−0.371**
(flat = 0.000, Keplerian point-mass = −0.500). **All density-law rows in this section use the galaxy
sector's γ = 0.489**; §6b re-runs everything at the registered γ = 2 and the verdicts change.

| dynamics | ⟨obs − pred⟩ | ±(stat) | rms | vs Newtonian residual |
|---|---|---|---|---|
| **Newtonian** | **−0.057** | 0.027 | 0.151 | 1.0 — *this is the systematics budget* |
| density, `A·V²` (V = 220 host) | −0.073 | 0.027 | 0.152 | 1.3 (no shape signal — see §5) |
| **MOND simple μ + EFE** | **−0.093** | 0.027 | 0.172 | 1.7 |
| **density, knee 0.161 (measured)** | **−0.211** | 0.027 | 0.291 | **3.7** |
| MOND simple μ, **EFE switched off** | −0.245 | 0.027 | 0.310 | 4.3 |
| **density, `A·V²` (V = σ₀)** | **−0.248** | 0.027 | 0.319 | **4.4** |
| density, knee 0.161, **unfloored** (site `equations.ts`) | −0.428 | 0.027 | 0.585 | 7.5 |

**The single most informative row is MOND with its EFE switched off: −0.245, statistically
indistinguishable from the density law's −0.211/−0.248.** MOND survives globular clusters *because
of* the external field effect and for no other reason. A density-keyed law has no g_ext to appeal
to. This is not an incidental difference between the two frameworks — in this dataset it is the
*only* difference that matters.

The unfloored form on the live site (`C = tanh(γ ln(1+ρ/ρ_crit))`, no Ω_m floor) is the worst
performer by a factor of two: with no floor the boost diverges as ρ → 0 and the predicted outer
profile *rises* (+0.100 mean slope) where the data fall at −0.371.

### Robustness

| variant | Newt | MOND+EFE | density 0.161 | density A·V²(σ₀) | N |
|---|---|---|---|---|---|
| King-like, outer×3 | −0.057 | −0.093 | −0.211 | −0.248 | 42 |
| **Plummer** mass model | +0.021 | −0.023 | −0.199 | −0.216 | 42 |
| outer×2 (last octave only) | −0.119 | −0.153 | −0.288 | −0.298 | 14 |
| outer×5 (wider baseline) | −0.006 | −0.042 | −0.126 | −0.192 | 57 |
| **RV bins only** (no proper motions) | −0.113 | −0.164 | −0.331 | −0.303 | 7 |

The ordering `Newt ≈ A·V²(220) < MOND+EFE ≪ density-keyed ≈ MOND-without-EFE` is invariant across
mass model, radial window and tracer type. Jackknife: no single cluster moves any mean by more than
0.042; the headline contrasts move by ≤ 0.028.

---

## 4. The defeater I could not make work: anisotropy

Radial anisotropy steepens σ_los and is the only systematic that could hide a boost. Constant-β
Jeans (`ρσ_r² = r^{−2β}∫ s^{2β} ρ g ds`, projected with the (1 − βR²/r²) weight):

| β | obs − Newt | obs − MOND+EFE | obs − density(0.161) |
|---|---|---|---|
| −0.6 (tangential) | −0.076 | −0.115 | −0.223 |
| 0.0 (isotropic) | −0.057 | −0.093 | −0.211 |
| +0.4 | −0.031 | −0.065 | −0.189 |
| **+0.8 (near-radial)** | +0.022 | −0.008 | **−0.135** |

Newtonian crosses zero at β ≈ 0.75 and MOND+EFE at β ≈ 0.81. **The density-keyed law does not cross
zero at any β ≤ 0.8** — it is still short by 0.135 at an anisotropy so extreme it is not observed in
any globular cluster.

And the sign of the real systematic is the wrong one for a rescue. Tidally limited clusters
preferentially lose stars on radial orbits, so their outskirts go **tangentially** anisotropic
(Baumgardt & Makino 2003; Tiongco, Vesperini & Varri 2016; Vasiliev & Baumgardt 2021 measure the
anisotropy directly from Gaia EDR3 proper motions). β < 0 makes the mismatch **worse** in every row
above.

**Honest scope on significance.** The ± column is statistical only. Mass segregation (RV samples
bright giants, more centrally concentrated than the mean), the mass model, and anisotropy are all
unmodelled, and all push the observed slope steeper — i.e. they inflate the σ values. The
defensible statement is the ratio, not the sigma: the density law misses by **3.7–4.4× the residual
the Newtonian model leaves on the same data**, in a program where Baumgardt & Hilker fit these same
profiles with full Newtonian N-body models and no dark matter. The systematics that would rescue
the density law would have to be four times larger than the ones the Newtonian fit already absorbs.

---

## 5. The placement that escapes the shape test, and what kills it instead

`ρ_crit = A·V_flat²` with the host V_flat = 220 km/s gives ρ_crit = 1404 M☉/pc³. The knee then sits
at ~0–2 pc, so **everything outside the core is at the coherence floor** and the boost is a constant
1/Ω_m = 3.175. That is exactly the `G → G/Ω_m` degeneracy the archive already identified for discs
(Appendix D, 2026-08-26) — it is invisible to σ(r)'s shape (mismatch −0.073, indistinguishable from
Newtonian; and its Δχ² against Newtonian flips sign between my two mass models, −932 vs +1360,
which is the signature of a pure degeneracy).

It is not invisible to the mass budget. A uniform 3.175× boost means the Newtonian dynamical masses
are 3.175× too large, so the stellar M/L_V must be divided by 3.175:

| | observed M/L_V (167 clusters) | required stellar M/L_V |
|---|---|---|
| median | 1.81 | **0.57** |
| 16–84 % | 1.44 – 2.51 | 0.45 – 0.79 |

A 12 Gyr, [Fe/H] ≈ −1.5 population with a Kroupa IMF gives M/L_V ≈ 1.5–2.5 (Maraston 2005; BaSTI;
McLaughlin & van der Marel 2005 measure ≈ 1.5–2.0 for Galactic GCs). **96 % of the catalogue is
pushed below M/L_V = 1.2**, which no old metal-poor population reaches without a bottom-light IMF.

---

## 6. The transferable result: an exclusion window on the knee of *any* density-keyed theory

Scanning ρ_c with everything else held fixed at **γ = 0.489** (`gc_knee_bound.py`); §6b gives the
γ = 2 version, where the window is narrower. "Excluded" = slope mismatch more than twice MOND+EFE's,
which these data do admit.

| ρ_c [M☉/pc³] | log₁₀ ρ_c [g/cm³] | obs − pred | status |
|---|---|---|---|
| 0.003 | −24.69 | −0.070 | ok |
| **0.0083** | **−24.25** | **−0.088** | **ok ← Refracted Gravity's fitted value** |
| 0.012 | −24.09 | −0.097 | marginal |
| 0.03 | −23.69 | −0.129 | marginal |
| 0.074 | −23.30 | −0.171 | marginal (lower edge of the Oort window) |
| **0.11** | −23.13 | −0.191 | **EXCLUDED** |
| **0.161** | −22.96 | −0.211 | **EXCLUDED** ← the measured Jeans knee |
| 1 | −22.17 | −0.276 | EXCLUDED |
| 30 | −20.69 | −0.190 | EXCLUDED |
| 300 | −19.69 | −0.106 | marginal |
| 1404 | −19.02 | −0.073 | ok (degenerate — killed by M/L instead, §5) |

**This is framework-independent.** It is a bound on the knee density of any theory of the form
g = g_N/C(ρ), stated in the units such theories are published in, from a dataset none of them were
fitted to.

### Refracted Gravity, with its own published permittivity

Cesare et al. (2020, 2022) fit `ε(ρ) = ε₀ + (1−ε₀)[1 + tanh((log ρ − log ρ_c)/Q)]/2` with
{ε₀, Q, log₁₀ ρ_c[g/cm³]} = {0.089⁺⁰·⁰³⁸₋₀·⁰³⁵, 0.47⁺⁰·²⁹₋₀·²¹, −24.25⁺⁰·²⁸₋₀·²⁰}.

| RG variant | ρ_c [M☉/pc³] | obs − pred | status |
|---|---|---|---|
| Cesare+2022 mean | 0.0083 | −0.070 | ok |
| +1σ ρ_c | 0.0158 | −0.088 | ok |
| −1σ ρ_c | 0.0052 | −0.063 | ok |
| ε₀ = 0.20 (NGC 1560) | 0.0083 | −0.067 | ok |
| **ε₀ = Ω_m = 0.315 (this framework's floor), RG's ρ_c** | 0.0083 | **−0.065** | **ok** |

The last row is the load-bearing one. Substituting this framework's *floor* into RG's permittivity
changes nothing; substituting this framework's *knee* into either functional form is what fails.
And running the framework's own compander at RG's knee (0.0083) also passes (−0.088). **ρ_crit is
the single load-bearing quantity, and it is wrong by a factor of 13–500 depending on which of the
framework's own placements you read.**

---

## 6b. S611 P611.2 executed as registered: γ = 2, and the fork it opens

P611.2 does not register a knee. It registers that **γ resets to 2 at the cluster's Markov-blanket
boundary** — N_corr = (2/γ)² = 1, every star its own coherence unit — against the galaxy sector's
γ = 0.489 (N_corr ≈ 16.7). That is a different function, not a different parameter value, and it
has to be adjudicated on its own terms. Same statistic, same 42 clusters, same mass model:

| γ | N_corr | ρ_crit | floor | ⟨obs − pred⟩ | × Newt | status |
|---|---|---|---|---|---|---|
| 0.489 | 16.7 | 0.0083 (RG) | yes | −0.088 | 1.6 | ok |
| 0.489 | 16.7 | **0.161** | yes | **−0.211** | 3.7 | **EXCLUDED** |
| 0.489 | 16.7 | 0.161 | no | −0.428 | 7.6 | EXCLUDED |
| 0.489 | 16.7 | 1404 | no | −1.113 | 19.7 | EXCLUDED |
| **2.000** | **1.0** | 0.0083 (RG) | yes | **−0.058** | 1.0 | ok |
| **2.000** | **1.0** | **0.161** | yes | **−0.111** | 2.0 | **marginal** |
| 2.000 | 1.0 | 0.161 | no | −0.178 | 3.1 | marginal |
| 2.000 | 1.0 | 1404 | yes | −0.108 | 1.9 | marginal |

γ = 2 saturates `tanh(γ ln(1+x))` far faster, so the boost is confined to a narrower radial band and
distorts less of the outer profile. The exclusion window narrows accordingly:

| ρ_c [M☉/pc³] | 0.0083 | 0.02 | 0.05 | **0.161** | 1 | 10 | 100 | 1404 |
|---|---|---|---|---|---|---|---|---|
| γ = 0.489 | ok | marginal | marginal | **EXCLUDED** | EXCL | EXCL | marginal | ok(§5) |
| **γ = 2** | ok | ok | ok | **marginal** | EXCL | EXCL | EXCL | marginal |

**The fork this opens is the interesting result, and it is sharper than either branch:**

- **If γ is universal** (the site's "one equation described it all" reading, and the value SPARC and
  DESI both select), globular clusters exclude the knee at every placement the framework uses.
- **If γ resets per Markov blanket** (P611.2, registered 2026-02-17), globular clusters are
  marginally consistent — at MOND-with-EFE's level — but the coherence function is then **not one
  function**, and the framework's central rhetorical claim is spent to buy the consistency.

This is not an ad-hoc rescue. It was registered seven months before the test, on independent
reasoning (stars as Markov blankets), and it makes a further prediction that this dataset can check
but I have not: γ = 2 should hold for **any** resolved-member system and γ ≈ 0.5 for any system whose
members are unresolved — so open clusters, dwarf spheroidals and stellar streams should all take
γ = 2, while a galaxy built from the same stars takes 0.489. That is a falsifiable ladder, and it is
the first time in this program's record that the N_corr/Markov-blanket machinery has done predictive
work rather than decorative work.

**Correction to my own first pass:** I ran the entire analysis at γ = 0.489 before reading S611's
text, and would have published a confident refutation of a prediction nobody made. The registered
parameter is the one to adjudicate. Recorded because this session was run under an explicit
over-refutation warning, and this is what that failure mode looks like from the inside.

---

## 7. Two local constraints that do not overlap

My 2026-09-06 finding derived the Oort-limit window: ρ_crit ∈ **0.074–0.154 M☉/pc³** is where the
floored density law reproduces the measured local dark matter (0.13 ± 0.04) *without* dark matter;
below it the law predicts f_DM ≈ 0 and the local dark matter has to be real.

At γ = 0.489 the globular clusters exclude 0.11 and 0.154 and call 0.074 marginal. **At the
registered γ = 2 they do not** — 0.05 is `ok` and 0.161 is `marginal`, so the Oort window survives.
The no-go below is therefore conditional on γ being universal, and is the same fork as §6b seen from
a second dataset.

> **If γ is universal, the only window in which a density-keyed law explains the local dark matter
> without dark matter is the window Galactic globular clusters exclude.** Two independent nearby systems, one shared
> parameter, no overlap. Below the GC edge (≲ 0.03, where RG lives) the law survives — but then it
> is not doing the job it was introduced to do at the solar neighbourhood, and something else has to
> supply f_DM = 0.13.

This is a joint local no-go, and it needs no galaxy sample at all: no SPARC, no rotation curves, no
RAR. It is the third genuinely SPARC-free constraint on this sector (with the Oort limit and the
internal-locality no-go).

---

## 8. What this does *not* show

Guarding against the failure mode this session was written under:

- It does not refute the compander **form**. RG's tanh-in-log-density permittivity, and this
  framework's own `tanh(γ ln(1+x))`, both pass at ρ_c ≲ 0.01 M☉/pc³.
- **It does not refute P611.2.** The registered γ = 2 is the branch that survives. What is refuted
  is the *conjunction* of a universal γ = 0.489 with any knee the framework uses.
- It does not refute the Ω_m **floor**. The floor value is not what moves the statistic (§6, last row).
- It does not touch the sectors that never define ρ_crit at all (chemistry, superconductivity,
  consciousness, quantum) — those remain *untested*, not refuted.
- The σ values are statistical-only. The ratio-to-Newtonian-residual framing in §3 is the claim I
  would defend; "8σ" is not.
- S691's 10⁻²³ kg/m³ placement is **untouched** by this test, because at that knee no part of a
  globular cluster is below it. That placement is not exonerated here — it is out of scope.
- The result assumes the clusters are in equilibrium. Tidal contamination in the outermost bins
  *inflates* the observed σ and *flattens* the observed slope, which works in the density law's
  favour; the exclusion is conservative with respect to that systematic.

---

## Implications for the Site

The site currently states "0 currently discriminating tests" and infers "no object crosses the
knee" from where SPARC happens to sample. Both statements can now be replaced with a measurement.

## Action: Maintainer

1. **P0 — `/honest-assessment`, `/dark-matter`, `/parameter-derivations`.** New ledger row:
   *Globular-cluster knee test — S611 P611.2, registered and unexecuted, executed 2026-09-07.*
   Content: the exclusion window ρ_c ∈ 0.1–300 M☉/pc³ **at γ = 0.489**, narrowing to 0.5–100 at the
   registered γ = 2; the M/L_V route for the saturated placement (96 % below 1.2); RG passes at its
   own ρ_c. **State it as a fork, not a kill** — universal γ is refuted here, per-blanket γ is not.
   Whether this increments the refutation **count** gates on dp; my reading is that it should not,
   because a registered prediction survives it.
2. **P0 — the "0 discriminating tests" sentence, wherever it appears.** It is now false in a
   specific way: globular clusters *do* discriminate, and the discriminating variable is named —
   the external field effect. MOND with EFE off scores −0.245 against MOND with EFE at −0.093.
3. **P0 — `src/lib/equations.ts` `coherence()` is the unfloored form**, which is the worst performer
   here (−0.428) and diverges as ρ → 0. Every tool on the site that plots C(ρ) at low density is
   plotting the version these data exclude hardest. Either floor it or caption it.
4. **P0 — S611/P611.2 deserves a page or a section it does not have.** The Markov-blanket γ-reset
   is currently invisible on the site, and it is now the only branch of the galaxy/cluster sector
   that survives a real dataset. It also carries a live, cheap, falsifiable ladder (open clusters
   and dwarf spheroidals should take γ = 2; galaxies 0.489).
5. **P1 — `/mrh` internal-locality section (added today).** This is a fourth instance and a
   *quantitative* one: for a globular cluster the choice of V in ρ_crit = A·V² moves the knee from
   the core (V = 220) to beyond the tidal radius (V = σ₀ … measured), a factor of 10⁴ in ρ_crit and
   the whole verdict. Under-determined, not undefined — that correction matters.
6. **P1 — `/for-researchers`.** The exclusion window is a citable, transferable null in the units
   the modified-gravity literature uses. It belongs beside the B_max ≤ 6.4 bound.
7. **P2 — back-annotate S611 P611.2 as executed**, and record the Oort ∩ GC empty intersection
   (§7) as a joint local no-go.

## Open Threads

- **The γ ladder is the cheapest next test in this program.** P611.2 implies γ = 2 for every
  resolved-member system. Open clusters, dwarf spheroidals and (with Gaia) stellar streams all have
  public kinematics and all sit at densities near the exclusion window's lower edge. If γ = 2 holds
  for clusters and dwarfs and 0.489 for galaxies, the Markov-blanket criterion is doing real work;
  if a dwarf spheroidal demands 0.489, the reset is ad hoc after all. Either answer is worth more
  than another galaxy fit.
- **The repair direction is measurable.** Lowering ρ_crit to ~0.008 M☉/pc³ clears the GC constraint.
  What does that do to SPARC? The 2026-08-30 L2 run and the RAR fits were all at knees 10³–10⁵×
  higher. A refit of the galaxy sector *pinned* at RG's ρ_c is one run and has never been done —
  and Cesare+2020's answer for RG is that it works, which would make the galaxy sector's chosen
  knee, not its physics, the thing SPARC has been selecting.
- **Q, the transition width, is a free direction nobody here has used.** RG carries an explicit
  width parameter (Q = 0.47 dex); the compander's width is locked to γ. Since γ is out-of-sample
  *harmful* to fit (2026-08-20), a width parameter that is not γ may be where the real freedom is.
- **NGC 2419 and the outer-halo clusters** (R_GC 20–90 kpc) have g_ext ≪ a₀ and so are where MOND
  and the density law *stop* being collinear. They have 1–3 dispersion bins each — too few for the
  slope statistic. A targeted spectroscopic campaign on 3–4 of them is the cleanest discriminating
  measurement this framework could name, and it is a real, fundable observation.
- Do dwarf spheroidals sit in the exclusion window? Their mean densities (0.01–0.1 M☉/pc³) land
  right on its lower edge — the same edge RG is fitted just below.
