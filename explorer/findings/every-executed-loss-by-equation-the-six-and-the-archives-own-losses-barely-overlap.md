# Finding: Every executed loss, by equation. The footer's six and the archive's own losses barely overlap, and the archive's own calibration was never run until today

## Origin
Topics `every-executed-exclusion-of-an-archive-equation-in-one-table.md` (maintainer 11-12) and
`executed-exclusions-of-archive-equations-outside-the-count.md` (both archived). WAKE turned the count question into an
equation question: for each equation the archive writes, is it excluded, does it survive identical to a rival, or does it
survive and differ?

## Summary
- **The table** (`scripts/exclusion_table_by_equation.py`, output beside it) has 44 executed losses plus 4 withdrawn
  ones. Each row is labelled by who asserts the equation (canonical docs A0, framework papers A1, one session A2, or
  site-built S), by kind, by status and by root. Under the strictest rule (A0–A1 assertion, framework-specific, external
  data, result stands) the count is **9 rows in 8 independent roots, and none of the footer's six is among them.** Under
  "archive-asserted (A0–A2), framework-specific, external data" it is **20 rows / 14 roots, and the six contribute one
  root** (the 1/Ω_m cap, #1–#2).
- **Correction found while building it:** the site never fitted the density-keyed law at the calibration the archive
  publishes. The preprint and its Sessions 52/53/65 write ρ_crit = 0.028·V^0.5, γ = 2. Every site fit used A·V² (the
  2026-08-27 units slip) or one global knee. Run today (PREREG `09bea5e`): **ΔBIC +8,404 against the
  acceleration-keyed compander, worse in 115 of 122 galaxies.** Five of seven predictions held.
- **The "~3.5×10⁴ wide-binary over-prediction" is the V² form, not the archive's.** At the archive's calibration the
  solar-neighbourhood boost is **2.7 (γ = 2) to 10.5 (γ = 0.489) in g**. That is still excluded by the Oort limit, but it
  is three to four orders of magnitude smaller than the number the persona, the topic and /wide-binaries quote.
- **Survives and differs:** of all the equations the archive writes, the only one that survives, differs from MOND and
  ΛCDM, and has data on it is **a₀(z) = cH(z)/2π**. It is unresolved. On the level-free slope, Ciocan's two estimators
  straddle the predicted n = 1 (0.71 ± 0.13 and 1.15), RC100 cannot tell (0.0 ± 0.5), and the z ≈ 2.3 BTFR sits on
  constant a₀. It is also not unique to this framework.

## Research Notes

### 1. What "the archive asserts" picks out
The archive does not have one list of its equations. FUNDAMENTALS.md, the canonical reference, contains **no C(ρ), no γ
and no ρ_crit**. Its equations are R(I) = 1 − (I/I_max)ⁿ and the Navier–Stokes table. That table is still printed
unannotated in its last section, although the same file and Bucket 2 record it as refuted (S617/S665/S666). README writes
γ = 2/√N_corr. The coherence equation lives in the framework papers:
- `arXiv_preprint_outline.md` writes C = tanh(γ log(ρ/ρ_crit + 1)), γ = 2 "derived", ρ_crit = A·V^B, A = 0.028, B = 0.5
  from R_half ∝ V^0.75 (l. 21, 67–99, 377);
- `Paper_Summary` gives the same values (l. 19, 26, 151);
- `DECEMBER_2025_COMPREHENSIVE_FRAMEWORK.md` writes a₀ = cH₀/2π and **a₀(z) = a₀·H(z)/H₀** (l. 366), with
  "High-z BTFR evolves" as its first falsification criterion.

So "the archive asserts it" needs a tier, or it is not a rule. I used four tiers (A0 canonical docs, A1 framework papers,
A2 a single session or exploration, S site-built). The counts move by tier much more than by any rule on file.

### 2. The counts (from `scripts/exclusion_table_by_equation_output.txt`)
"Live" means the status is stands or weak. Conditional, unresolved and withdrawn rows are listed but not counted.

| rule | rows | independent roots | of the six |
|---|---|---|---|
| R0 today: registered, fired | 6 | 5 | 6 |
| R1 every live executed loss, any tier, any kind | 40 | 29 | 6 |
| R2 the archive asserts it (A0–A2), any kind | 31 | 24 | 5 (TEST-25's realization is site-built) |
| R3 the canonical docs or framework papers assert it (A0–A1) | 15 | 14 | 2 (γ = 2 pin; Bell B1) |
| R4 archive-asserted, framework-specific, external data | 20 | 14 | 2 rows, one root (#1–#2, the cap) |
| R5 A0–A1, framework-specific, external data, stands | 9 | 8 | **0** |

R5's rows:
- the density law, with a free knee (+2843) and as written (+8404);
- the density law at the solar neighbourhood at the archive's calibration;
- γ = 2/√N_corr against the RAR offset (wrong sign);
- Appendix D §D.3 as written (χ² ≈ 9,900);
- door #3, which the canonical frame block calls "near-reach, not Planck-killed", while Borexino gives D/D_Pl < 4×10⁻³⁹;
- the T_c formula (607 K vs 93 K);
- the README's chemistry limitations;
- bet B4's 1/⟨C⟩ law.

**Tier sensitivity.** The floored C_a (cap 1/Ω_m) is tiered A2 because /tier-1-existing says "no archive document
connects it to the compander". If the project lead rules it framework-paper content, R5 gains #2, #4 and #5 (one root),
and the six then overlap R5 in one row, #2. That is exactly the site's own `FRAMEWORK_CONTENT_CRITERION` answer ("only
#2"). The two analyses agree on the six. What they disagree on is everything outside them.

**The six under an assertion clause:**
- TEST-25 drops out under any assertion rule, because its modified-Poisson realization is the site's;
- the environment row is "a registered amplitude the equation never produced";
- Bell is a construction check;
- the γ = 2 pin selects among MOND's functions at about 2σ.

The six measure the discipline of registrations, as the 11-04 proposal said, and the table now shows it row by row. The
same table also checks the other direction the topic asked for: no row inside the six fails to exist under R1. None is
an artefact.

### 3. The density law at the archive's own calibration (PREREG `09bea5e`, then run)
`scripts/density_law_at_archive_calibration_v05.py`. Loader and likelihood are frozen from the 11-02 script (h = 0.3 kpc,
Υ_disk = 0.5, σ_int free, 2,438 points, 122 galaxies); the identity controls reproduce −7564.2 and −4721.7.

At A = 0.028, B = 0.5 (γ = 2 as written; the knee does not depend on γ) the knee runs from 0.16 to 0.51 M☉/pc³ over V_flat 34–332 km/s. Discs sit at a median x = ρ/ρ_crit of 0.10, so the
archive's calibration puts SPARC discs *on* the knee. The V² form puts them 10⁴× below it. The median boost is 5.4 (5–95%:
1.0–147).

| arm | k | ΔBIC vs compander | galaxies worse | gal-sd |
|---|---|---|---|---|
| preprint as written (A 0.028, B 0.5, γ 2) | 1 | **+8,404** | 115/122 | 824 |
| original calibration (A 0.25, B 1.62, γ 2) | 1 | +16,685 | 121/122 | 1,396 |
| A 0.028, B 0.5, γ free (→ 17.1) | 2 | +6,407 | 111/122 | 602 |
| B 0.5, A and γ free | 3 | +2,964 | 103/122 | 383 |
| A, B, γ free | 4 | +2,295 (B at the −4 bound) | 109/122 | 299 |
| (on file) one global knee | 3 | +2,843 | 105/122 | 372 |

The table's rows are from `density_law_at_archive_calibration_v05_output.txt`. The free-B row's gal-sd (299) and the
global knee's gal-sd (372) are also printed in `density_law_free_B_widened_posthoc_output.txt` (B = −4 and B = 0 rows).

Scoring:
- P1, P2, P5, P6 and P7 held.
- P3 was refuted: +2,964, just under my floor of +3,000.
- P4 was refuted on magnitude: +2,295 < 2,700. The direction held, B̂ < 0.5.

Post-hoc (`density_law_free_B_widened_posthoc.py`): with B profiled from −12 to +2, the minimum sits at B ≈ −4 (+2,295).
The free density law wants its knee to *fall* steeply with V, past MOND's −2. In the log regime B acts as a V-dependent
offset in C, so this is a galaxy-scale normalisation, not physics.

Two consequences:
- **The density law loses at every calibration, including the archive's own.** The archive's number is +8,404, not the
  +16,486 the site quotes "at the published A". The best density-keyed fit on file is +2,295 (four parameters), not
  +2,843.
- **The site's statement "the +2843 rests on a free knee, not the published calibration" now has its partner.** The
  published calibration is 2.96× worse than the free knee, not 5.8×.

### 4. The wide-binary / Oort number
At ρ = 0.09 M☉/pc³ and V = 220 km/s:
- the archive's ρ_crit = 0.028·√220 = 0.415 gives C = 0.373 (γ 2) or 0.096 (γ 0.489), a boost of 2.7 or 10.5 in g and a
  velocity excess of +64% or +223%;
- the site's 0.029·V² gives 3.2×10⁴ and 7.8×10³.

/wide-binaries labels the V² number "Published calibration" and says its exponent is "excluded at ~11σ". That exponent
(V⁺²) is the site's own reading, with p = 0. The archive's primary exponent is V^0.5, excluded at **3.6σ** by the same
08-27 measurement (−0.15 ± 0.18). The Oort-limit allowance for a local boost is taken from recall (dynamical/baryonic
≈ 1.0–1.3) and was not retrieved this session. A boost of 2.7 is excluded under any plausible value of it, so the verdict
holds and the magnitude changes.

The 08-27 finding flagged `criticalDensity(vFlat, A = 0.029)` as multiplying a V^0.5 coefficient by V². It still does
(`src/lib/equations.ts:43–46`), 2.5 months later.

### 5. Survives and differs, the complement
Most surviving equations are identical to a rival:
- C_g at γ ≈ ½ is MOND's simple μ;
- the non-covariant DE sector at γ ≈ ½ is Λ;
- the static inflow sector is GR in coordinates;
- η is a label for Abrikosov–Gor'kov, γ ~ 1 is θ_D, and Intent is |ψ|².

Rows that differ but have no data, or no model able to produce the prediction:
- B6 non-monogamy (gated: no substrate yet gives no-signalling S > 2);
- B7 vacuum Umklapp (untested; it sits in the same discreteness family whose dimension-4 LIV is excluded by 15–27 orders,
  although its channel differs);
- B5 f(N) (not derived);
- B3 (C ≈ 0.5 tested only on agents, a different variable);
- TEST-19/20 (C(ρ)-based, untested, keyed on an excluded law);
- Appendix B's UDG predictions (also keyed on C_ρ).

**One row survives, differs and has data: a₀(z) = cH(z)/2π, i.e. a₀ ∝ E(z)ⁿ with n = 1.**
- Comparing levels at z ≈ 1 gives 1.86 vs Ciocan's 2.38. That reads as 5.2σ low on statistical error and ~1σ with a
  20% level systematic, and MOND's constant a₀ sits further off. But a level comparison is anchor-dominated.
- The prediction's own statistic is the level-free slope (explorer 10-10,
  `ciocan-a0z-refit-the-slope-is-anchor-free-and-the-papers-two-estimators-straddle-n-equals-1.md`). On that slope,
  Ciocan's two estimators straddle n = 1 (bins 0.71 ± 0.13, global line 1.15) and disagree with each other at 3σ.
  RC100 gives 0.0 ± 0.5.
- At z ≈ 2.3 the BTFR offset −0.27 sits on constant-a₀ MOND's −0.296 (explorer,
  `a0-of-z-highz-tfr-and-phantom-fdm-the-level-is-method-dominated-the-trend-is-the-test.md`).
- The test catalog itself grades its distinguishing power MEDIUM ("any cosmologically-anchored acceleration scale").
- So the table carries this row as "unresolved", with the level σ listed only as the reading to avoid.

So the honest one-sentence surviving-content statement the project lead has been asked for is close to: *"Nothing the
archive writes survives and differs from MOND + ΛCDM, except a₀ ∝ H(z), which is shared with other cosmologically
anchored a₀ proposals and is unresolved between two datasets that disagree."*

## Implications for the Site
- The footer's six and the framework's own decisive losses are different sets. Printing the six by kind (done 11-12)
  does not fix that, because the decisive rows sit outside the six. The table supplies the missing line, with roots.
- Several numbers quoted as decisive come from site-built forms rather than archive equations: 3.5×10⁴ (V²), "V⁺²
  excluded at 11–12σ", and "+16,486 at the published A". The archive's forms lose too, by smaller margins.

## Action: Maintainer
- /wide-binaries:73 and :153. "Published calibration ρ_crit = 0.029·V² = 1.5×10³" is not the published calibration.
  Print the archive's 0.028·V^0.5 = 0.415 M☉/pc³ → +64% (γ 2) / +223% (γ 0.489) in velocity, ×2.7 / ×10.5 in g, still
  excluded by the Oort limit. Move the V² line into history, labelled "units slip (explorer 08-27)". Then grep
  `3.5×10⁴`, `1.8×10⁴`, `+18,600` and `0.029·V²` site-wide and add lint REQUIRES rules.
- The "velocity exponent excluded at ~11σ" wherever it is attached to "the published calibration": the archive's
  exponent is +0.5, excluded at 3.6σ; V⁺² is the site's reading.
- `src/lib/equations.ts` `criticalDensity`: either A·V^0.5 with A = 0.028, or rename the function and say it is the
  site's V² variant. Check which tools call it before changing it.
- Wherever the site gives the density-law losses by calibration (/galaxy-plotter, /coherence-explorer preset, DBIC2843
  context), add: "at the archive's own calibration (A 0.028·V^0.5, γ 2): ΔBIC +8,404, worse in 115/122"
  (`explorer/findings/scripts/density_law_at_archive_calibration_v05_output.txt`). Change "the best density fit is
  +2843" to "+2,295 with the knee's velocity exponent free".
- Ledger: if the project lead adopts a descriptive line beside the six, use the R4 or R5 row from the table above with
  its root list. Do not use a hand-assembled list. Rule choice gates on the project lead.

## Action: Research archive (via maintainer back-annotation)
- FUNDAMENTALS.md "The Navier-Stokes Connection" states the refuted equivalence without a caveat. It is the only
  canonical-doc instance of a Bucket-2 equation printed as current.
- PREDICTIONS Bucket 2 row "C(ρ) asserts ρ_crit ∝ V⁺²": the archive's primaries write V^0.5. The row should name both,
  and the 3.6σ.
- PREDICTIONS frame block (Phase-16): door #3 "near-reach … not Planck-killed" is contradicted by the block at l. 987.
  A pointer is needed at the original sentence.

## Open Threads
- Tier assignment is my judgement in about ten rows. The script makes each one a one-character edit. The project lead
  can re-tier and re-run.
- Rows marked "(rec)" in `src` were taken from ledger sentences, not re-opened outputs: γ = 2/√N_corr wrong sign,
  Peres–Mermin, rar_scatter_nogo, Chae radii, DE-without-CDM, local-fluid horn, LIV. γ = 2/√N_corr is the one R5 row
  resting on an archive sentence alone (S430/S437). Re-run it before it is printed.
- a₀(z): a multi-source, level-free slope test (Ciocan + RC100 + z ≈ 2.3 BTFR + BIG-SPARC when public) is the one
  experiment left that points at content which both survives and differs. See `topics/a0z-and-bigsparc-trigger-preregistration.md`.
