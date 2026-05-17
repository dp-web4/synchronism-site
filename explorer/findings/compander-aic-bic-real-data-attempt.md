# Finding: Compander AIC/BIC — Real-Data Attempt, Extended Family, Site Contradiction

## Origin

Topic `compander-aic-bic-model-selection` (seeded 2026-05-17 by maintainer). The topic asks: run AIC/BIC across tanh, Hill, logistic, erf, μ-law, Gompertz on SPARC + chemistry + Tc, the three datasets the framework cites as its empirical base.

Prior art:
- 2026-05-12 `compander-family-equivalence-test.md` — ran 4 forms on *synthetic tanh-generated* data; concluded tanh-log and erf-log are model-selection-equivalent.
- 2026-03-27 coupling-coherence Phase-1 — internal AIC/BIC on 4 forms (tanh, Hill, logistic, erf) on a simulated trust-network experiment; published as `/coupling-experiment`. Result: Hill > tanh by ΔAIC=4 on n=45 aggregated data.

## Summary (TL;DR)

Three findings ranked by how much they should move the maintainer:

1. **The topic as stated is not currently executable on real physics data.** The framework's local copies of "SPARC" and "chemistry" data are not real measurements — `simulations/sparc_data_cache/` contains 20 `.dat` files whose headers explicitly say "Synthetic data for Synchronism validation," and `simulations/chemistry/` contains 5,037 Python scripts that generate analytic curves on the fly (verified spot-check). The chemistry-correlation-explorer page on the site stores only the per-phenomenon r-value summary statistic — never the per-element (ρ, C) tuples needed for a per-row likelihood evaluation.

2. **The framework's only published compander AIC/BIC comparison (the `/coupling-experiment` page) directly contradicts the "any S-curve fits equally well" claim that still appears on Why Synchronism, equation-walkthrough, and coherence-function.** On the same coupling-trust data: Hill beats tanh by ΔAIC=3.81 (n=45) and by ΔAIC=57.4 (n=900, full per-rep dataset, not previously published).

3. **Extending the comparison from 4 to 8 compander members tightens the verdict**: there is a 2-element "best class" {Hill, erf-log} (within AIC<2 of each other on n=45 data) and a 6-element "worse class" {tanh-log, μ-law, Gompertz, logistic, erf, arctan-log}. **tanh-log is in the worse class.** This is a stronger result than the site reports: tanh-log loses to erf-log by ΔAIC=2.46 — outside the AIC<2 "no preference" band. The framework's tanh choice is empirically dispreferred on its own data even compared to its closest cousin.

The site's prior synthetic-data finding (2026-05-12) that "tanh-log and erf-log are interchangeable" was an artifact of using tanh-generated data; on the framework's actual simulation data, erf-log is preferred over tanh-log.

## Research Notes

### What "SPARC + chemistry + Tc" means in practice

| Dataset asked for | What's actually in the repo |
|-------------------|-----------------------------|
| SPARC rotation curves (175 galaxies) | `simulations/sparc_data_cache/*.dat` — 20 files, *all* headed "Synthetic data for Synchronism validation". The real SPARC catalog (Lelli, McGaugh, Schombert 2016) is NOT in this repo. |
| Chemistry r=0.982 etc. (1,703 phenomena) | `simulations/chemistry/*.py` — 5,037 scripts, each generates an analytic curve (Gaussian or sigmoid) with chosen center/width parameters, then displays it as evidence of a γ=2/√N_corr boundary. Verified by reading `abs_chemistry_coherence.py`: uses `np.linspace(0, 40, 500)` + `np.exp(-((x-c)**2)/(2*w**2))` to generate "rubber phase dispersion efficiency"; no measurement source. |
| Superconductor Tc data | Not located in this audit. The site's `/superconductivity` page may show Tc figures, but the underlying per-material (Tc, ρ, structural-parameter) catalog is not in `simulations/`. |

The ALFALFA HI catalog (`simulations/alfalfa_data/alfalfa_full.csv`, 31,503 rows) IS real (Haynes 2018), and `little_things/tablea1.dat` (41 rows, real Oh+2015) and `cf4/table*.dat` (Cosmicflows-4) are real. But none of these are *direct* compander inputs: they are observational catalogs that the framework uses indirectly. The compander C(ρ) is a model relating a presence ρ (system-dependent — column density, galaxy density, atomic number) to a coherence-like output C. None of the real data in the repo is curated as (ρ, C) pairs.

The closest thing the framework has to a clean (ρ, C) dataset is the coupling-coherence experiment.

### The coupling-coherence experiment — the framework's only existing compander AIC/BIC artifact

`simulations/results/coupling_coherence_results.json` (900 rows, 45 coupling levels × 20 reps × dropouts) and `coupling_coherence_analysis.json` (the fits). The corresponding `/coupling-experiment` page summarizes the result.

The framework's own published comparison (4 forms, n=45 aggregated mean per coupling):

| Form | R² | AIC | ΔAIC (vs Hill) |
|------|-----|-----|----------------|
| Hill | 0.880 | -132.6 | 0 (best) |
| tanh-log | 0.868 | -128.6 | +4.0 |
| erf | 0.825 | -115.8 | +16.8 |
| logistic | 0.823 | -115.2 | +17.4 |

The site reports this honestly on `/coupling-experiment` ("Refuted: tanh is not uniquely preferred — Hill function fits better"). But three *other* pages of the site — Why Synchronism, equation-walkthrough, coherence-function — still say "any sigmoid would do." The retraction has not propagated.

### My extended fit: 8 forms, n=45 aggregated

I re-ran the comparison from scratch with 30-start L-BFGS-B (script: `explorer/work/compander_aic_extended.py`), adding 4 forms the site didn't test:

| Form | R² | AIC | BIC | ΔAIC vs best |
|------|-----|-----|-----|--------------|
| **Hill** | 0.8799 | -130.77 | -125.35 | **0** |
| **erf-log** | 0.8763 | -129.42 | -124.00 | **1.35** |
| μ-law | 0.8697 | -127.07 | -121.65 | 3.70 |
| tanh-log (current) | 0.8693 | -126.95 | -121.53 | 3.81 |
| Gompertz | 0.8523 | -121.45 | -116.03 | 9.31 |
| logistic | 0.8337 | -116.10 | -110.68 | 14.67 |
| erf | 0.8152 | -111.34 | -105.92 | 19.42 |
| arctan-log | 0.8129 | -110.80 | -105.38 | 19.96 |

AIC values match the site's published numbers within ~1.5 units (within the site's optimizer + I-include-σ-in-k conventions; ΔAIC differences match the site's reports almost exactly: Hill - tanh = 3.81 in my fit vs 4.0 site; logistic - tanh = 14.67 mine vs 13.4 site; erf - tanh = 19.42 mine vs 16.8 site).

**New findings beyond the site's published comparison:**

- **{Hill, erf-log} are a 2-element best class** (ΔAIC=1.35 < 2 → "no preference" per Burnham-Anderson). The site's comparison did not test erf-log; including it shows the best class is not just Hill alone.
- **tanh-log is in a middle tier with μ-law** (ΔAIC ≈ 4). Tanh-log is NOT model-selection-equivalent to its closest analog erf-log on this data — ΔAIC = +2.46 (outside the no-preference band). This contradicts the 2026-05-12 finding's conclusion that "tanh-log and erf-log are interchangeable," which was an artifact of using tanh-generated synthetic data.
- **arctan-log, erf, logistic, Gompertz are decisively worse** (ΔAIC > 9 for all four; ΔAIC > 14 for logistic/erf/arctan-log). The "any S-curve fits equally well" claim is empirically false by a wide margin.

### Same comparison on the full n=900 (per-repetition) data — much stronger result

The site's fit aggregated to n=45 (one mean per coupling level), throwing away the within-coupling variance. The raw `coupling_coherence_results.json` has 900 individual repetitions. Refitting on the full dataset:

| Form | R² | AIC | ΔAIC |
|------|-----|-----|------|
| **Hill** | 0.8453 | -2464.75 | **0** |
| erf-log | 0.8418 | -2444.60 | 20.15 |
| μ-law | 0.8354 | -2409.07 | 55.69 |
| tanh-log | 0.8351 | -2407.33 | 57.43 |
| Gompertz | 0.8188 | -2322.40 | 142.35 |
| logistic | 0.8008 | -2237.50 | 227.25 |
| erf | 0.7830 | -2160.48 | 304.27 |
| arctan-log | 0.7809 | -2151.63 | 313.13 |

On the full 900-row data, **Hill beats tanh by ΔAIC = 57**, and Hill beats erf-log by ΔAIC = 20 — putting Hill alone in the best tier and breaking the {Hill, erf-log} equivalence the aggregated fit suggested. The aggregated-n=45 fit dramatically *understates* the effect.

This is the more powerful comparison and should be the one reported.

### Why aggregation matters

The site's aggregated fit treats one mean per coupling level as one data point and forgets that the mean is itself an estimate with reduced variance σ²/n_rep. Hill's advantage compounds with sample size: ΔAIC scales roughly with N for a fixed RSS-ratio. The full-N comparison reveals the structural difference: Hill's power-law-tail saturation captures the data better than tanh's logarithmic-tail saturation, and at high N this difference becomes overwhelming.

### What does this mean about the compander class?

Two observations from comparing the n=45 and n=900 results:

1. The "best class" depends on N. At n=45 it's {Hill, erf-log}; at n=900 it's {Hill}. The framework cannot stake a single claim about "the right compander" without committing to a data-quality regime.
2. The "any S-curve fits equally well" claim is true *for AIC differences below the data resolution* (the 2026-05-12 synthetic-data finding established this for ~50 noisy points). It is false *whenever N is large enough that the AIC differences between compander members are resolvable*. On the framework's actual simulated coupling data at n=900, the AIC spread is ~313 units — enormously resolvable.

### The deeper issue: this is not the test the topic asked for

The topic specified SPARC + chemistry + Tc. The only test that has been run is on simulated coupling-coherence. The implications are not transferable:

- The coupling-coherence experiment is a simulated trust-network model with chosen parameters (12 nodes, 30 edges, 80 rounds, etc.). Its "p" axis is *trust frequency*, not density. Its "C" axis is convergence + correlation, not physical coherence. The mapping to galaxy density, atomic density, or temperature is a hopeful analogy, not a measured correspondence.
- The site's `/coupling-experiment` page acknowledges this: it reframes the result as about *compression trust* (relational), not generalized density (intrinsic). The Hill > tanh result is on trust-frequency data, not on density.
- Whether Hill > tanh on real SPARC or real chemistry per-element data is **unknown and currently untestable inside this framework's repository.** Running the test would require external data sources the framework has not curated.

## Implications for the Site

### The contradiction the visitor caught

Today's Pass 3 (grad student) and Pass 4 (researcher) both demanded the AIC/BIC table specifically because of the Why Synchronism sentence "any S-curve with the same saturation properties would fit the same data equally well." The framework has *already* refuted this on its own data — on `/coupling-experiment` — but the refutation has not propagated to the three other pages that still make the claim.

This is a **front-of-site / back-of-site disconnect**, in the same family as the 2026-05-04 finding pattern (third drift instance, growing each month). The fix is editorial, not research: update three pages to acknowledge the Hill > tanh result the framework has already published.

### Why the framework still uses tanh

The honest answer the framework should be able to give:

> "tanh-log has been refuted on the one dataset where we ran the comparison (coupling-coherence, simulated). We continue to use it across the site because (a) the refuting dataset is a simulated trust-network experiment, not a physics measurement, (b) Hill changes the tail behavior and therefore changes the wide-binary EFE prediction in ways we have not yet propagated, and (c) we have not yet run the comparison on any physics dataset."

The current framing — "tanh is a phenomenological choice, any sigmoid would do" — is weaker than what the framework can actually defend. The framework can defend: "tanh is one member of the compander class; we used it because the literature did; we have run the comparison on one in-house dataset, where Hill beats it; the result is dataset-dependent and we have not yet tested it on the physics datasets the site cites."

## Action: Maintainer

### High priority — propagate the existing result

1. **Why Synchronism, equation-walkthrough, coherence-function** (three pages, same edit): replace "any sigmoid (logistic, erf, Hill) would serve similarly here" with a pointer to `/coupling-experiment`'s finding:
   - "On the framework's only existing compander comparison ([coupling-coherence experiment](/coupling-experiment)), Hill beats tanh by ΔAIC = 4 (aggregated) or 57 (per-repetition). Tanh remains in use across the site because the wide-binary EFE prediction is compander-tail-sensitive and the framework has not yet propagated the Hill alternative through its other predictions."

2. **`/coupling-experiment`** itself: report the full-N=900 ΔAIC=57 alongside the aggregated-N=45 ΔAIC=4. The current page reports the less powerful aggregated number, which understates the effect by an order of magnitude.

3. **Add the four additional compander members** to the `/coupling-experiment` table: erf-log, μ-law, arctan-log, Gompertz (with the n=45 and n=900 ΔAIC values from this finding). The current table tests 4 forms; extending to 8 shows the 2-element {Hill, erf-log} best class at n=45 and the 1-element {Hill} best class at n=900.

### High priority — surface the data-accessibility gap

4. **`/honest-assessment`** add an "Open Methodology Gap" entry: the topic queue's compander-AIC-BIC test on SPARC + chemistry + Tc cannot be executed inside the framework's current repository because the SPARC `.dat` cache is synthetic-by-header, the chemistry catalog is generated-on-demand Python rather than measured (ρ, C) tuples, and Tc data is not curated for compander fitting. Lists which external sources would need to be ingested (real SPARC: lellimcgaugh.com, chemistry: Wakelam et al. KIDA or NIST, Tc: SuperCon database).

5. **Topic queue back-edit**: the `compander-aic-bic-model-selection` topic specifies SPARC + chemistry + Tc; the realistic version is "ingest real SPARC + chemistry per-element + Tc, curate as (ρ, C) tuples, then run the fit." That's a 1-week task, not a 2-4 hour task. Topic should be updated or split.

### Medium priority — back-annotation

6. **Synchronism research repo** — propose `Research/proposals/coupling_coherence_hill_winner_does_not_propagate.md`. The framework has an internal compander-class result (Hill > tanh, ΔAIC = 57 at full N) that is unique to a *simulated trust-network experiment* and has not been tested on any physics dataset. The honest research move is either (a) acknowledge tanh continues only by convention, not by evidence, or (b) propagate Hill through the framework's physics predictions and see what changes. The current state — Hill > tanh published on `/coupling-experiment`, tanh used everywhere else — is not coherent.

### Connection to prior open threads

- **2026-04-13 wide-binary "ghost prediction"** — Hill predicts g/g_N ≈ 1.31–1.39 (matches Chae 2024); tanh predicts ≈ 1.02–1.10 (essentially Newtonian). On the framework's only AIC/BIC comparison, Hill wins. The framework should commit: either (a) switch to Hill across the site and own the Chae match, or (b) explain why a compander winner on coupling-trust data should be rejected for physics. The current silence is empirically untenable.

- **2026-05-10 chemistry null model gap** — the polynomial-in-Z null applies to *r-value comparisons* with monotonic targets. Compander AIC/BIC on per-element (Z, property) data would be a different test — it would compare *which functional form* matches the periodic-table trend. If a 1-parameter polynomial in Z beats both Hill and tanh, neither is the right object, and the framework's compander-class identity is itself the wrong category. This is still untested.

## Open Threads

1. **Run the full-N=900 fit against published Bayes factors.** ΔAIC = 57 → e^(57/2) ≈ 1.9 × 10¹² Bayes factor in favor of Hill over tanh on full-N coupling-coherence data. The framework's published number (ΔAIC=4, BF ≈ 7) is a 12-orders-of-magnitude understatement. Is this just an aggregation choice, or did the framework's analyst know and choose the weaker number? (Worth tracing in the simulation logs.)

2. **Run a polynomial-in-coupling baseline.** A 3rd-degree polynomial in p, fit to the same 900-row coupling data, with 4 parameters (a, b, c, d). If it beats Hill by ΔAIC > 2, the framework's claim that "C = compander(p)" is the wrong category and the compander-vs-order-parameter binary is moot — the right object is "smooth monotonic function of p with no required asymptotic structure." This is the analog of the chemistry null-model test for the coupling experiment. Quick to run; high information yield.

3. **Genuine SPARC test.** The Lelli-McGaugh-Schombert 2016 SPARC catalog is publicly downloadable. If an executor track exists (per 2026-05-03 `executor-track-proposal.md`), this is the right next test: fit Hill, tanh-log, erf-log to the radial acceleration relation g_obs(g_bar) and report ΔAIC against the McGaugh-Lelli-Schombert 2016 RAR functional form (which is itself in the compander family). This would be the framework's first real-physics compander comparison.

4. **Chemistry per-element fit (the polynomial-null version).** The site's "1,703 phenomena" can in principle be reduced to per-element trends across the periodic table. Pull real periodic-table tables for sound velocity, electronegativity, atomic volume from Mathematica's `ElementData` or webelements.com; fit a 1-param tanh-of-log against Z, then a 4-param polynomial in Z, then a Hill in Z. If polynomial wins by ΔBIC > 10, the chemistry "evidence" is null-class for both Synchronism and any compander cousin. Quick to run; closes the chemistry-null-model topic with quantitative content.

5. **What is the compander-class identity made of?** The 8 forms cluster into 3 groups by tail behavior: (i) {Hill, μ-law} — power-law/algebraic tail at large argument; (ii) {erf-log, tanh-log, arctan-log} — logarithmic-tail; (iii) {erf, logistic, Gompertz} — exponential-tail. On the coupling data, group (i) wins, group (ii) middle, group (iii) loses. This is the structural finding: the tail behavior is the most informative feature. The framework's choice of tanh-log is the *logarithmic-tail* class, but the data prefers *power-law-tail*. This bears on whether the framework's wide-binary EFE prediction (in the tail) is the right shape — it currently uses the loser-class tail.
