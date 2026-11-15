# Finding: Every fitted γ on file is the incumbent's γ, and you can predict it from the incumbent's curve with no data. SPARC does not pick ½.

## Origin
Topic `is-gamma-measured-away-from-one-half-anywhere.md` (maintainer 2026-11-15, from visitor 2026-11-15 Pass 3 Q4).
It checks the candidate surviving-content sentence put to dp today in
`Synchronism/Research/proposals/the_cap_family_is_closed_by_dwarfs_and_every_fitting_sector_picks_the_known_physics_gamma_20261115.md`.

## Summary
**The candidate sentence is half right.**
- Its first clause holds and can be made stronger. "Wherever the framework fits data, it fits as a function physics
  already had" is a prediction you can test, and it passes in every sector where γ is identified. Fit the template to
  the *incumbent theory's curve*, with no data, and you get the γ the data fits returned:

  | Sector | Incumbent | γ from incumbent alone | γ from data |
  |---|---|---|---|
  | galaxies | McGaugh's RAR function | 0.59 | 0.58–0.62 (careful arms) |
  | cosmology | Λ | ½ | 0.487 ± 0.02 |
  | superconductors | BCS interpolation, β pinned at 2 | 2.64 | 2.31–2.65 |
  | Solar System | Newton | → ∞ | ≥ 0.87 floor |
- Its second clause fails. "The fitted γ (0.489 ± 0.11) lands on ½" quotes the Υ = 0.5-frozen fit. The galaxy-level arms
  on file centre at 0.58–0.62, with 95% intervals of [0.43, 0.95] or wider. Across the Υ band, γ runs from 0.27 to 0.96
  (explorer 08-14). That is exactly where McGaugh's empirical RAR function sits (γ = 0.595), not μ_simple. SPARC cannot
  tell the two apart: they are 0.1 apart, against σ_gal ≈ 0.11.
- Its third clause is wrong or empty, depending on the reading. "No sector has measured γ away from ½ except by pinning
  or refuting it":
  - **The Solar System does measure γ away from ½.** The EPM2011 floor is γ ≥ 0.87 at 3σ, with ½ excluded at
    ~2×10⁴σ under the internal-field reading. That reading is "≈ 3σ disfavoured" (GCs, 10-31 correction) and "not a
    defined model" (11-11), but it has not been refuted.
  - If "refuting it" means refuting γ = ½, the clause is a tautology.

The sentence I would offer dp instead is at the end.

## Research Notes

### 1. The inventory (Explore agent sweep of the archive and site `src`, plus explorer findings)

| Sector | γ on file | How obtained | Identified? | Status |
|---|---|---|---|---|
| SPARC, L2, Υ = 0.5 frozen | 0.489; ±0.029 point, ±0.11 galaxy | free γ, a₀′ profiled | only at frozen Υ | the number the candidate sentence uses |
| SPARC, Υ band 0.4–0.6 (0.7) | 0.27 → 0.96 (→ 2.14) | Υ stepped, rms flat | **no**: a γ–Υ–a₀′ valley | 08-14 finding; PRED:1226 |
| SPARC, published nuisances, galaxy-block bootstrap | 0.488 [0.34, 0.81] | Υ, D, i per galaxy | weakly | gamma2-pin finding |
| SPARC, + σ_int (arm D) | **0.617** [0.43, 0.95] | as above + intrinsic scatter | weakly | same |
| SPARC, wide Υ box (arm E) | **0.58** [0.42, 0.89] | as above | weakly | same |
| SPARC, galaxy bootstrap (08-24) | 0.545 ± 0.129 | — | weakly | argument_of_C proposal |
| SPARC, L3 action | 0.4435 | relabel of L2 under μ_eff = C + ½xC′ | as L2 | wiring-dependent |
| SPARC, density-keyed | 0.046 (ρ_c 4.4×10⁻⁶) | free γ + free knee | yes | **refuted** (ΔBIC +2843 / +8404) |
| Cosmology, background horn | 0.487 −0.021/+0.024 | free γ, DESI DR2 + Planck + Dovekie | yes | ≡ ΛCDM (Δχ² −0.30) |
| Cosmology, local-fluid horn | ½ ± 5×10⁻⁶ | P(k) exclusion | yes: the data *force* ½ | executed 09-14 |
| Cosmology, completion B | ≈ 0.30 | best member | — | excluded, Δχ² ≥ +79 |
| Solar System, EFE-free tail | floor ≥ 0.87 (EPM2011), ≥ 0.78 (INPOP15a) | bound, a₀′(γ) profiled | lower bound only | the reading is ≈ 3σ disfavoured (GC) and undefined (11-11) |
| Solar System, Cassini Q₂ (QUMOND + EFE) | none passes | profiled a₀′, Υ frozen | — | fails 14.5–19.3σ for γ 0.3–3; needs Υ_d 1.2–1.4 (2.9σ) |
| Globular clusters | 0.489 vs 2 | **pinned** at knee 0.161 | — | ranking, not a fit |
| Superconductors (S1 Chemistry) | 2.31 / 2.65 / 2.45 (Al / Nb / Pb) | **knee pinned** (β = 2), 6 hand-typed points per metal | **no** (see §3) | never audited before today |
| Chemistry "γ ≈ 1" cluster | γ = 2/√N_corr, or ratios such as 2T/θ_D | computed, not fitted | not a tanh-shape γ at all | Method-2 bias toward N_corr ≈ 4 (chemistry-gamma-circularity) |
| Biology (S62 photosynthesis) | 3.0 | grid 0.5–3.0, best at the **edge** | no | — |
| Wide binaries | none | the quoted "γ" is the boost factor | — | — |
| Bell, consciousness, nuclear | none | — | — | — |

Note on the agent's sweep: it reported the EFE-free corner "closed by clusters at 10.6σ". That number was **withdrawn**
on 10-31 because the paired differences cancel the data. The live status is ≈ 3σ disfavoured, conditional on the mass
model. I used the corrected status.

**Identified γ values that differ from ½ at significance:**
- the density-keyed galaxy fit (refuted);
- the Solar-System floor;
- the superconductor fits, which are not identified once β is freed.

### 2. The incumbent map: γ predicted from the rival curve alone (new, `scripts/gamma_incumbent_map/`)
I fitted the L2 compander g_bar = g·tanh(γ ln(1 + g/a₀′)) to each incumbent's g_obs(g_bar) over SPARC's range
(10^−12.3 to 10^−8.7 m/s²), with γ and a₀′ free and the loss in log g_obs.

| Incumbent | γ_eq | a₀′ (10⁻¹¹) | rms (mdex) |
|---|---|---|---|
| simple μ, a₀ = 1.2×10⁻¹⁰ (**identity control**) | **0.500** | **6.00** (= a₀/2) | 0.00 |
| McGaugh+2016 RAR (ν_δ, δ = 1) | **0.595** | 7.36 | 4.2 |
| ν_δ, δ = 0.5 | 0.21 | 4.1 | 13.7 |
| ν_δ, δ = 2 | 3.5 | 41 | 1.5 |
| standard μ (ν_n, n = 2) | 2.55 | 29.5 | 3.7 |
| ν_δ δ ≥ 4; ν_n n ≥ 3 | runs to the γ bound (40) | — | 5–19 |

- **The RAR γ_eq is robust.** It is 0.590 / 0.595 / 0.592 / 0.573 over four SPARC-like ranges, and 0.52 if only the
  deep regime is used, where only a₀′/γ enters.
- **The dictionary maps literature shape constraints onto γ.** Near δ = 1, dγ/dδ ≈ 0.94, and γ = ½ corresponds to
  δ ≈ 0.90. Desmond, Hees & Famaey 2024's pooled SPARC δ = 0.97 ± 0.04 (as cited in the 10-2x gamma2-pin finding; not
  re-read today) becomes **γ ≈ 0.57 ± 0.04**. That puts γ = ½ about 1.8σ off at *point level*. The galaxy-block width on
  file is 3–7× larger, so at galaxy level ½ is well inside.
- **What the "MOND-class tension" means here.** The Solar-System-viable MOND functions (DHF: δ ≳ 4–6) lie **outside the
  compander's span**: the fit runs to the γ bound. This is the 1.17-dex width floor restated as a map. It is also why
  TEST-25 inherits Desmond, Hees & Famaey's RAR-vs-Q₂ tension (and Hees, Famaey, Angus & Gentile 2016, arXiv:1510.01369)
  rather than finding a new one.

### 3. Superconductors: the one fitted γ near 2.5 is BCS at a pinned knee
- **Identity control.** Re-running `Synchronism/simulations/chemistry/superconductor_coherence.py`'s fit on its own
  `exp_data` reproduces 2.308 / 2.645 / 2.453 exactly.
- **Those "data" are six hand-typed "representative" points per metal.** The three metals differ by ≤ 0.04 at every t.
  The strong-coupling deviation of Pb is absent.
- **The value is predicted by BCS alone.** The textbook BCS interpolation Δ/Δ₀ = tanh(1.74√(T_c/T − 1)), on the same
  t grid with β = 2, gives **γ = 2.644**. That is the Nb value. The 2.31–2.65 spread is hand-typing noise around
  BCS's own γ_eq.
- **γ is not identified.** With β freed on a dense grid, the BCS curve fits at γ = 0.57, β = 16 (rms 0.021). Across
  β = 1 / 2 / 4, γ runs 4.1 / 2.2 / 1.3. So γ is the knee placement here (memory: "γ is knee position above 1").
- **The shape is also structurally wrong.** The template goes linear near T_c where BCS goes as √(1 − t). Session 1
  §4.2 already says so.
- **A further defect.** The archive's own `bcs_temperature_dependence()` multiplies the standard interpolation by
  √(1 − t³), which is not the Mühlschlegel form. It is not used in the fit, so it does not affect 2.31–2.65.

### 4. Why ½ is the nesting point in two sectors that use different C's
tanh(γ ln(1+x)) = ((1+x)^{2γ} − 1)/((1+x)^{2γ} + 1). At γ = ½ this is x/(x+2), a Möbius map. γ = ½ is the only member
of degree 1 in x.
- μ_simple (galaxies) is Möbius in g/a₀. The ΛCDM closure (cosmology; the "Möbius point" of the 08-12 fit) is Möbius
  in its density ratio.
- So "both sectors land on ½" is an algebraic fact about the two incumbents. It is not a cross-sector coincidence. This
  is consistent with 09-24 (ii), which withdrew "same parameter".
- It also predicts the rest of the map:
  - an incumbent that is not Möbius lands elsewhere: RAR 0.595, standard μ 2.55, BCS-at-β=2 2.64;
  - an incumbent that is exactly 1 (Newton, Solar System) lands at γ → ∞, and the data return a lower bound.

### Artifacts
In `scripts/gamma_incumbent_map/`, each script with its saved output:
- `nest.py` → `nest_output.txt`: identity control, RAR and standard μ, RAR profile;
- `dict.py` → `dict_output.txt`: the ν_δ and ν_n map;
- `rng.py` → `rng_output.txt`: range robustness;
- `dmap.py` → `dmap_output.txt`: δ ↔ γ near 1;
- `sc2.py` → `sc2_output.txt`: superconductor identity control and the BCS γ_eq.

The inventory table's numbers come from the cited findings and proposals, not from these scripts.

### 5. Not pre-registered
I ran the incumbent map after reading the data-fit values (0.58–0.62; 2.31–2.65), so it is **not blind**.
- It has no tunable choices beyond the g_bar range, and I scanned that range.
- Both identity controls are exact (simple μ → 0.500, a₀/2; the archive SC fit → 2.308/2.645/2.453).
- A reader can rerun all five scripts in under 2 minutes.

## Implications for the Site
- **The candidate sentence should not go up as written.** Its "0.489 ± 0.11 lands on ½" is the frozen-Υ number that
  the 08-14 finding already demoted. Putting it on the landing would re-promote a number the site withdrew three months
  ago (memory: "chase a withdrawn mechanism to every number").
- **Proposed replacement** (for dp's decision on the surviving-content statement):
  > Wherever the framework fits data, the fitted shape is the incumbent's, and it can be predicted from the incumbent's
  > curve alone. Fitting the template to Λ gives γ = ½; the cosmology fit returns 0.487 ± 0.02. Fitting it to McGaugh's
  > empirical galaxy relation gives 0.59; careful SPARC fits return 0.58–0.62, with 95% intervals that include ½ and
  > reach ~0.95. Fitting it to BCS gives the archive's superconductor values. The Solar System wants Newton (γ → ∞) and
  > returns only a floor (γ ≥ 0.87). No fitted γ carries information about the template that the incumbent did not
  > already supply.
- **Superconductors.** S1's γ = 2.31–2.65 ("consistent with Synchronism") is BCS's γ_eq at a pinned knee, fitted to
  hand-typed points. The site does not quote it, so the correction belongs in the archive.
- **Badge.** The incumbent map is a small, exact, citable object. The site could show it as a table on
  /coherence-function, beside the width floor: "where each known interpolating function sits on the γ axis".

## Action: Maintainer
1. Do **not** put the 11-15 candidate sentence on the site as written. Forward the replacement above to dp, marked as a
   proposal (the sentence decision is dp's).
2. /coherence-function (near `#what-the-template-forbids` or the form-selection table): add the incumbent-map table
   (simple μ 0.50 / RAR 0.595 / standard μ 2.55 / δ ≥ 4 out of span), sourced to
   `explorer/scripts/gamma_incumbent_map/dict.py`.
3. Wherever "0.489" appears as "the galaxy γ", also print the galaxy-level arms' centre (0.58–0.62) and say that the RAR
   function sits at 0.595. Grep `0.489` across `src/`.
4. Superconductor γ 2.31–2.65: **not on the site** (checked: `grep -rn "2\.31\|2\.65" src/app` hits only plotter data).
   This is archive-only, so it goes in a back-annotation to `Research/Chemistry/Session1_Superconductivity_Coherence.md`
   §4.4: hand-typed "representative" points, β pinned at 2, the BCS interpolation alone gives 2.64, and γ is unidentified
   with β free.

## Open Threads
- **A blind out-of-sample test of the rule.** Pick a sector whose incumbent is known but where no γ has been fitted yet
  (for example, Bose–Einstein condensate fraction vs T, or the Ising magnetisation curve). Register γ_eq from the
  incumbent first, then fit real data. If the fit lands on γ_eq, the rule is predictive. If it lands elsewhere, that is
  the first sector where γ carries information.
- **Why do the frozen-Υ = 0.5 fit (0.489) and McGaugh's RAR fit at the same Υ (γ_eq 0.595) differ by 0.1?**
  Candidates: the loss (unweighted vs error-weighted), the 10% error cut, orthogonal vs vertical residuals. It is
  within σ_gal, but a referee would ask.
- **A δ ↔ γ map in the tail regime.** The tail exponent of 1−C is 2γ. For ν_n it is n, so in the tail γ ↔ n/2. The
  knee-shape map gives n = 2 ↔ 2.55. One parameter cannot match both regimes for the same incumbent. That is another
  phrasing of why no member passes SPARC and Cassini together.
