# Finding: MOND-Shared Class Audit — 3/3 Tie Badges Dissolve; the Badge Class Marked Exactly the Discriminators

## Origin

Topic: `mond-shared-badge-class-audit.md` (seeded 2026-07-14 after TEST-09's execution showed
"MOND-Shared" concealing a fired kill criterion). Context that reshaped the session: **the 06:00
maintainer never ran today** — its log is one line, `API Error: 401 Invalid authentication
credentials` — so yesterday's TEST-09 P0 fixes were unshipped and today's visitor log (Passes 3
and 4 both independently re-deriving the TEST-09 contradiction from the live site — the third and
fourth independent derivations) went untriaged.

## Summary

The site carries exactly **three** test-level MOND-Shared badges: TEST-09 (BTFR slope), TEST-10
(dwarf DM dominance), TEST-05 (environment-dependent RAR scatter). All three were audited; **all
three dissolve**. TEST-09 was executed 2026-07-14 (kill fires, 3.3σ). TEST-10 was **executed
today on real SPARC** (69% of galaxies exceed the framework's structural DM-fraction ceiling).
TEST-05 was **adjudicated today by magnitude comparison** (the framework's environment lever is
~50–5,000× smaller than MOND's; its other galaxy law predicts exactly zero). The class law:
**a tie with MOND is only possible where the framework *is* MOND** — it differs from MOND in
exactly two structural features (bounded boost; local-density coupling), and every tie badge sat
on an observable controlled by one of them. The badge class labeled "cannot discriminate" the
only tests that structurally *must* discriminate.

## Research Notes

### Census

`grep -rni "MOND-shared" src/` → 25 instances, 11 files, collapsing to:

| Member | Carriers | Status before audit |
|---|---|---|
| TEST-09 (BTFR slope) | tier-1-existing, honest-assessment (card + legend), terms.ts | "cannot discriminate"; refuted by execution 07-14, badge unchanged (maintainer down) |
| TEST-10 (dwarf DM fraction) | tier-1-existing (row + summary), honest-assessment legend, terms.ts | "positive result confirms both equally"; never executed |
| TEST-05 (RAR environment partition) | tier-1-existing, rar-scatter, cdm-discrimination, galaxy-rotation, mond-comparator, prediction-tracker, why-synchronism, cosmology-predictions, honest-assessment | Reclassified MOND-shared 2026-07-09 (registered criterion met; "MOND+EFE predicts the same qualitative dependence") |
| Definitional | research-philosophy, honest-assessment §legend, tier-1-existing §legend, terms.ts | "Operational state: only a null discriminates" |

### TEST-10 — EXECUTED (`scripts/test10_dwarf_dm_fraction_ceiling.py`)

The framework's own formula `C(a) = Ω_m + (1−Ω_m)x/(1+x)` bounds the boost at 1/Ω_m = 3.17,
which caps the apparent (Newtonian-terms) DM fraction at **f_DM = 1 − C ≤ 1 − Ω_m = 0.685** —
for every galaxy, at every radius, for every parameter choice. The registered prediction
"f_DM → 100% for M_bar < 10⁸ M☉" is therefore **not the framework's prediction — it is MOND's**
(unbounded ν). On SPARC outer rotation-curve points (Q ≤ 2, i > 30°, N = 153; same estimator
applied to observation, MOND, and Synchronism):

- Observed outer f_DM: median **0.755**, max 0.927. **106/153 = 69% exceed the 0.685 ceiling**
  (yesterday's asserted "71%" confirms at 69% under these cuts).
- Dwarfs M_bar < 10⁹: median f_obs = 0.814; 67% exceed. The registered <10⁸ population: 4/6 exceed.
- Residuals: median (f_obs − f_syn) = **+0.183** (framework fails); median (f_obs − f_mond) =
  **−0.026** (MOND passes). The ten most DM-dominated galaxies are all structurally impossible
  for the bounded boost; MOND matches them to a few percent.
- Beyond SPARC it is worse: pressure-supported dSphs reach M_dyn/M_bar ~ 10²–10³
  (framework cap: 3.17). No data reduction can rescue a supremum.

**Verdict: kill fired in reverse.** The row's kill criterion ("baryon-dominated dwarfs exist")
was aimed at the wrong tail — the framework dies at the DM-dominated tail its own ceiling
forbids. Not MOND-shared: a discriminator, lost.

### TEST-05 — ADJUDICATED (`scripts/test05_environment_lever_magnitudes.py`)

The 07-09 reclassification reasoned: MOND+EFE predicts environment-dependent RAR scatter,
Synchronism predicts environment dependence (NP2), so a detection "cannot discriminate." But the
two mechanisms couple to **different variables** — this is the locality no-go on the environment
axis:

- **MOND+EFE couples to external acceleration** (non-local). At SPARC outer radii the median
  g_bar/a₀ = 0.055, while large-scale-structure fields give e_N = g_ext/a₀ ~ 0.01–0.1 (Chae 2020
  median ≈ 0.033) — the lever g_ext/g_bar is **order unity** (median 0.60 at e_N = 0.033).
  Modulation of outer g_obs: **0.032–0.19 dex** (0.089 at the Chae median) — comparable to the
  full observed RAR scatter (~0.11 dex), hence detectable (Chae et al. 2020/2021, ~4σ).
- **C(ρ) couples to ambient density added to local ρ** (strictly local). Even taking the disk
  outskirt density maximally low (Σ = 1 M☉/pc², h = 0.5 kpc → ρ_local ≈ 6.8×10⁻²⁶ g/cm³), the
  ambient matter density is 2.7×10⁻³⁰ (field) to 2.7×10⁻²⁸ g/cm³ (δ~100 group): fractional
  perturbation **4×10⁻⁵ to 4×10⁻³**. Below the knee (the site's own audit: whole disk at
  x ≪ 1) C ≈ 2x is linear, so dB/B = dρ/ρ → modulation **1.7×10⁻⁵ to 1.7×10⁻³ dex** —
  **~51× smaller than MOND's at like-for-like typical environments, 3–4 OOM below the scatter**
  at field densities. Undetectable in any realistic sample.
- The framework's **other** galaxy law — C(a) on internal g_bar, the one actually used in
  TEST-09/10 — predicts **exactly zero** environment dependence (function of the galaxy's own
  internal acceleration only). Either law, the framework cannot produce the dependence its own
  TEST-05 row registers as its prediction (NP2, p = 5×10⁻⁶). That prediction never had a
  mechanism; it was borrowed from the expectation of the effect, not derived from the equation.

**Verdict: not a tie.** A *detected* environment dependence is specific evidence for the
non-local coupling (MOND+EFE) and unreachable by the framework's local one. The honest status —
keeping archive S381's caveat that the R² = 0.14 signal is morphology, not cleanly environment —
is **"discriminator in structure; never run as registered"**, not "cannot discriminate."
(Caveat propagated: the Chae EFE detection is disputed — Freundlich et al., Paranjape & Sheth
offer non-EFE readings — so TEST-05's *outcome* is open; its *tie badge* is what dissolves.)

### The class law

The framework differs from MOND in exactly two structural features:

1. **Bounded boost** (C ≥ Ω_m ⇒ B ≤ 3.17; MOND's ν diverges). Controls every asymptotic
   observable: BTFR slope (TEST-09: n → 2, not 4 — lost, 3.3σ, kill fired), dwarf DM fractions
   (TEST-10: ceiling 68.5% — lost, 69% of SPARC above it), and the RAR deep end (the ledger's
   own "strongest refutation": 42% of RAR bins need B > 3.17).
2. **Local coupling variable** (ρ, not the non-local g_bar/g_ext). Controls every environment
   observable: TEST-05's lever is 50–5,000× too small; the cluster bridge misses by 10⁴
   (locality no-go, Milgrom-instance).

Every MOND-Shared badge sat on an observable controlled by one of these two differences. That is
not a coincidence — **it is the same fact seen twice**: "shared with MOND" can only be true where
the framework's formula degenerates into MOND's, and its two non-MOND features are precisely
where it cannot. The unfalsifiable badge class marked, exactly and exhaustively, the framework's
falsifiable surface — and shielded it from execution. 3/3, class dissolved, no member survives.

### Methodological result (completes 07-14's)

07-14 named the failure mode: a tie badge carries no execution burden and *sounds modest*, so an
audit tuned for overconfidence never fires on it. Today adds the converse diagnostic: **when a
framework's tie badges cluster on the observables its structural features control, the badges are
not ties — they are the discrimination map, inverted.** The proposed rule stands and is now
empirically 3/3: *any badge asserting a tie carries the same execution burden as one asserting a
kill* — both predictions computed, agreement shown within the data's discriminating power.

## Implications for the Site

The MOND-Shared marker should cease to exist as a live badge class. All three members re-badge to
their audited outcomes; the legends (honest-assessment, tier-1-existing, research-philosophy,
terms.ts) should describe the class as **audited-and-dissolved 2026-07-15** rather than delete it
silently — the dissolution is itself the finding.

## Action: Maintainer

**Shipped this session by the explorer** (emergency recovery: the 06:00 maintainer failed with a
401 and yesterday's P0s were already stale by three independent re-derivations — precedent
2026-07-10):

1. TEST-09 (tier-1-existing row, honest-assessment card + legend, terms.ts): → Failed / Kill
   Criterion Triggered on the registered variable (slope deviation 0.41 > 0.3); "deep-MOND → n≈4"
   removed from the prediction field (the framework's deep limit is n = 2, the opposite end).
2. TEST-10 (tier-1-existing row + §267 summary): → Failed / executed 2026-07-15; ceiling stated.
3. TEST-05 (tier-1-existing alert + the 8 secondary carriers): tie language replaced with
   "discriminator in structure (lever magnitudes 51×–5,000× apart); never run as registered."
4. Legends + glossary: MOND-shared marked "class audited 2026-07-15 — all three members
   dissolved; see finding."
5. Boost-ceiling entry cross-linked to TEST-09/10 as its corollaries (visitor Pass 4's structural
   point: everything gravitational on the site is a corollary of B ≤ 3.17).

**Left for the next maintainer**: today's visitor log's non-TEST-09 items (badge-vocabulary
consolidation [Pass 2 HIGH], syndicated "1 refuted" stale count [Passes 2+3+4 HIGH], chemistry
89% headline vs its own tool [Pass 4 MEDIUM], TEST-02 "80×" referent [Pass 4, memory has the
referent], beginner-path cliff [Pass 1]). **For dp: the 06:00 maintainer credential is broken
(401) — until fixed, the loop has no fix-shipping track.**

## Open Threads

1. **Two galaxy laws, still unreconciled** (topic remains): TEST-09/10 run on C(a); TEST-05's
   registered prediction only makes sense under C(ρ); the site never says which is canonical.
   Today's audit shows the choice matters: they give different (zero vs negligible) environment
   predictions. The dissolution is robust to the choice — every horn loses — but the ambiguity
   itself deserves its own page.
2. If the Chae EFE detection is confirmed environmental (not morphology), TEST-05 upgrades from
   "discriminator, never run" to a third executed loss. A strictly-density-classified re-run
   (S381's own recommendation) is public-data-runnable.
3. Does the class law generalize? Any modified-gravity framework's tie badges should cluster on
   its structural differences from the theory it ties with — a checkable prediction about *other*
   frameworks' self-assessments (OOD test of the monotone-closure law).

## Scripts

- `explorer/scripts/test10_dwarf_dm_fraction_ceiling.py` (committed with this finding)
- `explorer/scripts/test05_environment_lever_magnitudes.py` (committed with this finding)

## Addendum (same session): the registered environment run already exists — structure and execution agree

While back-annotating, I found `Synchronism/PREDICTIONS.md` row "RAR environment dependence
(TEST-08)" — **the registered environment-density test was executed in the research repo on
2026-07-14** (dp-gated go): per-galaxy SPARC RAR offsets vs distance-corrected Cosmicflows-4
ambient density, N = 141, instrument validated on 28 UMa cluster members. Result: **r² = 0.0001**
(p = 0.89) against the framework's registered ">20% of scatter" claim — ~900× under the bar; all
four estimators below the kill threshold; weak non-significant secondaries **opposite-signed**
(EFE-like, not Synchronism-like; Chae's detection uses a different estimator and is not
contradicted).

This is a clean convergence with today's structural adjudication: the lever computation says the
framework's local mechanism can produce at most ~10⁻³ dex of environment modulation — i.e. **the
framework registered a >20% effect its own equation cannot generate** — and the registered run
finds none at that amplitude. Structure predicted the null; execution delivered it. TEST-05's
honest status therefore upgrades from "discriminator, never run as registered" to **"refuted by
execution (registered amplitude), with the MOND tie separately dissolved"** — shipped to all six
carriers in the same pass. The site's TEST-03 "open and runnable" language was also stale and is
updated. Topic `test08-environment-density-execution.md` (in today's queue) was completed by the
research repo before the site loop got to it — archived with this note.

This also completes the environment axis of the class law: the framework now has **four
convergent kills in the galactic sector** (locality no-go, ρ_crit(V) sign, BTFR bounded boost,
environment null), of which today's audit contributes the structural halves of two.
