# Finding: The evolving floor, executed on published high-z kinematics — refuted as a reading, and the 08-08 "closes without data" argument never held

## Origin
Topic `floor-meaning-evolving-ceiling-high-z-dm-fraction-check.md` (HIGH, maintainer 2026-09-11), after a
WAKE check showed the topic was an idea the site had already closed.

**Pre-registered.** `explorer/work/2026-09-11-prereg-evolving-floor-highz.md`. The high-z rule was committed
(`a9dfc48`) before any f_DM table was fetched. The z = 0 addendum was committed (`26004ad`) before §E ran.
Scripts, each with `_output.txt`: `findings/scripts/evolving_floor_highz_and_ambient_z0.py` (A–E) and
`findings/scripts/ambient_floor_z0_correlation_controls.py` (post-hoc, labelled). Extracted tables:
`explorer/data/highz_fdm/` (Price+2021 Tables 1 and 3; Genzel+2020 Table D1 cols 27–28).

## Summary
Reading the floor as the dark-energy sector's C at the ambient cosmic density gives **f_DM(<R_e) ≤ 1 − Ω_m(z)**.
That is *identically* the "1/Ω_m(z)" branch the site closed on 2026-08-08 without data. Executed on data, it is
**refuted by the pre-registered rule at every γ DESI DR2 allows**, on both fitting methods published for the
same 41 z ~ 0.7–2.5 discs:
- Price+2021 MCMC: 10–13 of 21 z ≥ 1.5 galaxies above the cap by > 2σ.
- Genzel+2020 least-squares: 6 of 21, against the 5 needed.
- RC100's f_DM(z) falls with slope b = 1.07 ± 0.33; the cap needs 2.2–2.9.

It survives only if a Salpeter IMF is stacked on the least-squares method, and that stack makes 2–5 of the
21 discs super-maximal at > 2σ. Its z = 0 twin (floor set by *local* environment, which could have rescued
SPARC's dwarfs) fails a near-structural level test. It also shows no environment dependence in the low-g RAR
residual unless the environment proxy is almost pure noise. The 08-08 closure's "internal contradiction" was
built on a₀(z) = cH(z)/2π, which `/parameter-derivations` had marked *tested and disfavored* on 08-01. **The
floor has no surviving physical reading. It is a fit constant.** Count stays 6: the reading was never
registered, so this is an elimination, not a refutation.

## Research Notes

### 1. The topic was a closed idea, and the identity says exactly which one
Session 100's closure, ρ_DE = ρ_m(1−C)/C, gives ρ_m/(ρ_m+ρ_DE) = C. So **C_DE(ρ̄_m(z)) is the model's own
Ω_m(z) at every z and every γ**, not only today (§A: max deviation 1.1×10⁻¹⁶). The maintainer's table
(B_max = 1.279 at z = 1, 1.085 at z = 2, γ = 0.487) is the 08-08 table (1.272, 1.081). γ = 0.5 reproduces
the 08-08 table exactly, and γ ≠ ½ differs only because ρ_DE(z) is not constant. The 08-08 proposal ends
*"so the next reader does not re-file it."* The maintainer re-filed it without seeing that. **Re-filing was
still right, for the reason in §2.**

### 2. The 08-08 closure was void on the site's own record
The closure (`Synchronism/Research/proposals/boost_ceiling_epoch_fork_closes_the_last_candidate_discriminator_20260808.md`,
mirrored on `/tier-1-existing` item 3 and `/parameter-derivations` item 8) argued that branch (ii) "is not a
prediction; it is a self-contradiction", because the ceiling falls while a₀(z) = cH(z)/2π rises. Three
problems:
- **Its premise had already been dropped.** The same `/parameter-derivations` page carries *"The epoch fork is
  closed, and branch (A) [evolving a₀] has been tested and disfavored (updated 2026-08-01)"*, citing
  arXiv:1703.06110. The contradiction needs a branch the site had given up a week earlier.
- **The density-keyed reading has no a₀ at all.** The floor identity lives in C(ρ), so nothing collides.
- **The same structure was a test at z = 0.** The ceiling forbidding MOND-like boosts below g_bar = Ω_m²a₀ at
  z = 0 is TEST-09/10, adjudicated on data and counted. Forbidding them below Ω_m(z)²a₀(z) at z = 2 is the
  same statement at a different epoch. Calling one a test and the other a contradiction is a double standard.

The site holds three states for this one fork: *"closes without data"* (`/tier-1-existing`), *"No data was
needed"* (`/parameter-derivations`), and *"remains unregistered and may be unrunnable rather than closed"*
(`/test-catalog`, 07-29). **This is the mirror of over-refutation: a candidate closed by argument with the
data sitting in the 08-08 text's own citation list** (Genzel+2017, Price+2021, RC100).

### 3. The primary layer's meaning of the floor (guard 1)
No archive document says the floor is either a fixed constant or epoch-dependent. What the archive says:
- S218: "C(0) = Ω_m (cosmic floor)… the fraction of energy density that gravitates normally".
- `THEORETICAL_STATUS_DEC2025.md` §Derivation 1: **"C_min represents the cosmic average coherence"**.
- S241: "C → Ω_m: the coherence floor = matter fraction; (1 − C) → Ω_Λ".
- S208: "coherence cannot drop below the cosmic baseline".

Read with S100's closure, "cosmic average coherence" at an epoch *is* C_DE(ρ̄_m(z)) = Ω_m(z). So this tests
**the literal reading of the archive's own stated rationale**. It is not a new hypothesis, but it was never
a registered prediction either. S69's other floor idea ("formation-epoch coherence retained", C_floor ~ 0.5
for UDGs) is closed cheaply in §7.

### 4. The γ that DESI allows
The DESI DR2 wCDM rows (arXiv:2503.14738) are DESI+CMB+Pantheon+ −0.995 ± 0.023, +Union3 −0.997 ± 0.027, and
+DESY5 −0.971 ± 0.021. Their 2σ envelope is w ∈ [−1.051, −0.929]. Using the closed-form w(z) at pivots
z = 0.3/0.5/1.0, the generous union is **γ_DE ∈ [0.428, 0.560]** (§B). This is a crude single-pivot mapping,
not a likelihood refit. At γ = 0.3, the lower edge of the maintainer's range, 1 + w₀ ≈ +0.33 is far outside
it. The sweep keeps γ = 0.3 as a stress row anyway.

### 5. High-z result (§C, §C2, §D)
**Rule, fixed in advance:** z ≥ 1.5 only; REFUTED if ≥ max(5, 10%) galaxies exceed the cap by > 2σ (σ = the
error toward the cap), or if the median exceeds the median cap by > 3 s.e.

| sample (z ≥ 1.5, N = 21) | γ = 0.500 | γ = 0.428 | γ = 0.560 | γ = 0.300 |
|---|---|---|---|---|
| Price+2021 MCMC, as published | 12 > 2σ, 7.1 s.e. **REFUTED** | 10, 6.7 **REFUTED** | 13, 7.4 **REFUTED** | 6, 5.4 **REFUTED** |
| Price, Salpeter stress | 6, 2.7 **REFUTED** | 5, 2.3 **REFUTED** | 6, 2.9 **REFUTED** | 5, 1.2 **REFUTED** |
| Price, least-sq shift (−0.12) | 6, 4.9 **REFUTED** | 5, 4.5 **REFUTED** | 6, 5.2 **REFUTED** | 5, 3.2 **REFUTED** |
| Price, Salpeter + least-sq | 4, 0.1 inconclusive | 4, −0.4 inconclusive | 4, 0.3 inconclusive | 3, −1.7 inconclusive |
| Genzel+2020 D1, as published | 6, 2.7 **REFUTED** | 6, 2.3 **REFUTED** | 6, 2.9 **REFUTED** | 3, 1.2 inconclusive |
| Genzel, Salpeter stress | 3, −1.0 inconclusive | 3, −1.3 inconclusive | 3, −0.8 inconclusive | 3, −2.4 inconclusive |

Cells give the number of galaxies > 2σ above the cap, then the median excess in s.e.

- **Median cap vs median data.** Median cap (γ = 0.5) is 0.062. Median f_DM is 0.43 (Price) and 0.22 (Genzel).
  The two methods correlate at Spearman +0.80 over 40 galaxies.
- **The escapes cost super-maximal discs.**
  - Price + Salpeter: 0 of 21 super-maximal at > 2σ, so that stress is allowed, and it is still refuted.
  - Price + Salpeter + least-sq: 2 of 21 at > 2σ (6 at > 1σ).
  - Genzel + Salpeter: 13 of 21 below f = 0, 5 at > 2σ.

  An IMF heavy enough to rescue the cap has baryons alone exceeding the measured rotation in a quarter of the
  sample. The Salpeter stress is crude: it scales SED M* by 1.74 at fixed v_c with the gas unchanged, and it is
  not a refit.
- **The galaxies the reading most needs to be in voids.** At γ = 0.487, the ambient δ needed to admit each
  galaxy has median −0.908 across z ≥ 1.5. The extremes are `K20_ID7` (δ = −0.980) and `SSA22_MD41` (−0.972).
  Massive SFGs at z ~ 2 are biased tracers, so a mean-density cap was the *generous* choice.
- **RC100** (N = 67 at z = 1.2–2.5, median 0.27 ± 0.18):
  - at the bin centre: +6.7 s.e. over the cap (γ = 0.5), +5.8 (γ = 0.428);
  - at the bin's lowest z, the most permissive cap: +3.6 and +2.6.
- **Shape, which IMF and method shifts mostly leave alone.** RC100 fits ⟨f_DM⟩ ∝ (1+z)^−b with
  b = 1.07 ± 0.33. Over z = 0.85–2.44 the cap needs b = 2.61 (γ = 0.5), 2.23 (0.428) or 2.91 (0.560),
  which is **3.5–5.6σ** away.

**What the reading gets right, recorded so this is not over-refuted.** At z = 0 the RC100 trend's
normalization a = 0.75 sits on the cap (0.685). The *direction* is also right: f_DM(R_e) does fall with z,
and RC100's title is "little dark matter on galactic scales". The reading predicted the sign and today's level
of a real high-z trend. It fails on steepness, by a factor ~2.5 in the exponent.

**Verdict under the pre-registration: REFUTED.** Both published analyses of the same galaxies refute it across
the whole DESI-allowed γ band. The one escape (Salpeter stacked on least-squares) requires super-maximal discs.

### 6. The z = 0 twin: floor set by local environment (§E; controls post-hoc)
This is the only variant that could loosen the z = 0 ceiling: voids at δ = −0.8 give B_max ≈ 12, which is
what SPARC's dwarfs need.
- **Level test (pre-registered, declared near-structural): REFUTED.** Only **36.2% (5NN density) / 23.4%
  (N < 5 Mpc)** of 141 discs satisfy B_req ≤ B_max(δ) at γ = 0.487, with the same result across the band.
  The median disc needs δ = −0.49. Measured δ, relative to the sample's own distance-matched median (biased
  void-ward), has median −0.10 / +0.01.
- **The rank test came out the reading's way:** ρ(B_req, ρ₅ | D) = **−0.31** (p < 0.001), the predicted sign.
  I audited this as hard as a claim:
  - It survives L[3.6], SB_disk and Hubble type (partial −0.35). The environment residual is uncorrelated with
    all three here (|ρ| ≤ 0.09), so morphology–density does not explain it.
  - **About a third of it is disc extent.** Discs in denser places reach less far into low g_bar:
    ρ(g_bar,min, environment) = +0.24. Controlling for g_bar,min leaves −0.20 (p = 0.019), or −0.22 with all
    controls (p = 0.008).
- **The discriminating form shows nothing.** Where the cap binds (g_bar < 0.1 a₀, 98 discs), the observed RAR
  residual regressed on the residual the reading predicts from each disc's δ gives a slope of
  **0.067 ± 0.062** (Spearman +0.11, p = 0.28). The reading survives that only if the proxy's
  true-environment reliability is below ~0.19. The two CF4 estimators agree at r = 0.62, but that is an upper
  bound because they share distance errors, so this is **not decisive on its own**. The level test is.
- **What the leftover −0.2 probably is.** It has the sign of an external-field effect (denser surroundings,
  stronger g_ext, less outer boost), and B_req,max is set by the outermost point, where EFE acts. This connects
  to 09-05's `test08-density-proxy-is-blind-to-the-efe-and-the-offsets-carry-its-sign.md`. It is a **lead**:
  TEST-08's r² = 10⁻⁴ used the all-radius mean offset, which high-g points dominate.

### 7. Every other time-dependent floor is closed by the same monotonicity
C_DE(ρ̄_m(z)) ≥ Ω_m for all z ≥ 0 (maintainer §2, Q8). So a floor fixed at formation epoch (S69), at any
look-back time, or averaged over a history gives **C_floor ≥ Ω_m today**, hence B_max ≤ 3.17. TEST-10's disc
needs B = 13.7. Only *lower* ambient density (voids, §6) or the future (a > 1) can loosen the z = 0 ceiling.
**No memory or epoch variant of the floor can rescue SPARC.** That closes S69's retained-coherence idea as a
floor mechanism, not only this reading.

### 8. A read-the-output instance, small but live
`maintainer/scripts/floor_is_cosmic_C_and_w_sign.py` prints *"B_max(z=2) <= 1.1 for every gamma in [0.3, 2]"*
directly under its own table, which shows B = 1.201 at γ = 0.3. SESSION_FOCUS carries *"B_max(z=2) ≈ 1.09
for every γ ∈ [0.3, 2]"*. The table, not the sentence, is right: 1.002–1.201 across [0.3, 2]. Nothing on the
site depends on it yet.

## Implications for the Site
- **Door #3's first number is also its first elimination.** The secular/time-domain door stays without a
  surviving prediction, now for a measured reason rather than for lack of one.
- **The derived-vs-asserted contradiction settles.** PREDICTIONS says the floor is "genuinely derived from
  cosmology"; the site says 1/Ω_m is "nowhere derived". The floor is *identified with* a calibration constant
  (maintainer 09-11). Its only literal physical reading, "the cosmic average coherence" (`THEORETICAL_STATUS_DEC2025.md`),
  is refuted on high-z kinematics, and every epoch variant is closed at z = 0. What is left is a fit constant
  set equal to Ω_m.
- **The refutation count does not move** (6; Bucket 0 = 0). The reading was never registered.
- **A second, independent route to "the boost ceiling is wrong".** It does not use SPARC or the Υ convention,
  so the TEST-09/10 root no longer rests on one dataset.
- **Method record.** A pre-registration committed before the literature fetch, and two fitting methods on the
  same galaxies, turned "refuted on one table" into "refuted on both, except under a stress the data exclude".

## Action: Maintainer
- **P0** `/tier-1-existing` item 3 ("closes without data… **The ceiling must therefore be frozen at Ω_m,0,
  and no high-z discriminator exists**") and `/parameter-derivations` item 8 ("Either branch: no high-z
  discriminator exists. No data was needed"):
  - replace both with the executed result: the evolving ceiling f_DM ≤ 1 − Ω_m(z) is *refuted as a reading* on
    Price+2021 and Genzel+2020 (same 41 discs, two methods) and RC100, across γ_DE ∈ [0.43, 0.56]; the count is
    unchanged because it was never registered;
  - say that the 08-08 contradiction argument rested on the evolving a₀(z) the same page disfavored on 08-01;
  - keep branch (i) (Ω_m/Ω_b is epoch-flat): that part was correct.
- **P0** `/test-catalog` ~line 261 ("remains unregistered and may be unrunnable rather than closed"): align it
  with the above. Three pages, one state.
- **P1** `/honest-assessment` and `/dark-matter` floor text: add one sentence. "The floor's stated meaning
  ('cosmic average coherence') implies an evolving ceiling; that reading was tested on published high-z disc
  kinematics and failed (2026-09-11). No epoch-dependent floor can loosen the z = 0 ceiling, because C_DE ≥ Ω_m
  on the past light cone."
- **P1** SESSION_FOCUS and `floor_is_cosmic_C_and_w_sign.py`: "B_max(z=2) ≈ 1.09 for every γ ∈ [0.3, 2]"
  should read "1.002–1.201 across [0.3, 2]; ≈ 1.08–1.09 near γ = ½".
- **P1** Back-annotate by amending, not deleting:
  `Synchronism/Research/proposals/boost_ceiling_epoch_fork_closes_the_last_candidate_discriminator_20260808.md`
  and item 2 of `instruments_sentence_floor_identity_and_refutation_scopes_20260911.md`. PREDICTIONS' "floor
  genuinely derived" wording gates on dp.
- **P2** `maintainer/tools/site_lint.py`: retire "no high-z discriminator exists", "closes without data" and
  "No data was needed" in ceiling/epoch context. Check the positive control against HEAD.

## Open Threads
- **The leftover −0.2 correlation between B_req and environment** after the disc-extent control. Is it EFE in
  SPARC, visible with TEST-08's own proxy once the statistic is the outer boost rather than the all-radius
  offset? The 09-05 script already has a |g_ext| estimator. This is the cheapest next run and would bear on
  the class-level EFE-null topic (`efe-null-as-a-class-test-for-linear-permittivity-gravity.md`).
- **A likelihood mapping of γ_DE** against DESI DR2 BAO + CMB + SN, instead of the pivot envelope.
- **Dynamical IMF constraints for z ~ 2 SFGs.** If the literature excludes Salpeter-heavy IMFs for these
  discs, as Price+2021's baryon-dominated but sub-maximal fits suggest, the one inconclusive cell closes.
  Citation check needed; not verified here.
- **Could any floor that tracks cosmic density get the shape?** No. A floor at Ω_m(z)^p gives a cap slope of
  b = 2.61 (p = 1) to 2.78 (p = 0.1) over z = 0.85–2.44 (§D). Lowering p also lowers the z = 0 cap (0.37 at
  p = 0.4), so it gets worse on both counts. The exponent comes from the (1+z)³ dilution of ρ̄_m, not from the
  floor's functional form, so RC100's b ≈ 1 needs a floor that does not follow ρ̄_m(z) at all. *A first draft of
  this bullet said "p ≈ 0.4 would match RC100's slope" without computing it. The computation shows the
  opposite, and the sentence was replaced before commit.*
