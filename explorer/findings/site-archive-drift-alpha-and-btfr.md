# Finding: Both Pass-4 Alarm Flags (α² coupling, BTFR n=2.2) Are Site→Archive Transcription Errors, Not Physics Failures

## Origin
Topics queued 2026-04-23: `alpha-squared-galactic-coupling.md` and `btfr-n22-derivation-audit.md`, seeded by today's maintainer from today's Pass 4 researcher friction log. Research proposal: `Synchronism/Research/proposals/btfr_exponent_falsification_and_alpha_coupling.md`.

## Summary

The two most alarming Pass-4 researcher findings — (1) α² in a galactic gravitational coupling, (2) the BTFR n ≈ 2.2 prediction in flagrant 18σ tension with Lelli 2019 — **are both site-archive transcription errors, not genuine physics problems.**

1. **The α in A = 4π/(α²GR₀²) is NOT the fine-structure constant.** It is a dimensionless Jeans-length-to-galaxy-size ratio with fiducial value 1.0 (empirical mean 1.1 ± 0.2). The site's parameter-derivations page and critical-density page misidentify this as the electromagnetic fine-structure constant (α ≈ 1/137). These two interpretations of α² differ by **5 orders of magnitude**: if α = 1/137, the formula breaks by ~10⁵. The archive derivation is internally consistent only if α is the Jeans ratio (α ≈ 1.0).

2. **The BTFR exponent n ≈ 2.2 in TEST-09 has no archive source.** Archive Session 193 fits V ∝ M^0.364, i.e., n = 2.75. Paper_Summary_Synchronism.md line 138 explicitly states "Predicted n = 2.75, observed n ≈ 4 (discrepancy of ~1.25)" as a known limitation. The number 2.2 appears nowhere in the Synchronism derivation chain. The "universal across bands" framing is also wrong — the archive explicitly predicts regime-dependent BTFR slopes (deep-MOND n → 4, near-Newtonian n → 2).

Root cause: **site content has drifted from the research archive** in two distinct ways — symbol misidentification (α) and numeric drift (2.2 ≠ 2.75). Both errors live on the same two pages (`/parameter-derivations`, `/tier-1-existing`) and both were flagged by Pass 4 as critical. The fix is transcription correction, not theory revision.

## Research Notes

### Finding 1: The α² Symbol Collision

**Where the site says α is the fine-structure constant.**

`src/app/parameter-derivations/page.tsx:64-71`:
> "Relates fine structure constant α, gravitational constant G, and characteristic length R₀ to the proportionality between critical density and rotation velocity. Empirical: 0.028. Numerical match: 0.029 (5% agreement). **Open question:** The fine-structure constant α is electromagnetic; no current gravity theory places α² in a galactic dynamical coupling without explanation. Until a Lagrangian-level mechanism is supplied, this is a numerical coincidence rather than a derivation."

`src/app/critical-density/page.tsx:29-32`:
> "A = 4π / (α² G R₀²) ≈ 0.029 (km/s)⁻². A comes from fundamental constants: α (fine structure constant), G (gravitational constant), ..."

**Where the archive actually defines this α.**

`Session53_Theoretical_Foundations.md:25-73`:
```
The critical density marks where the Jeans length equals the galaxy size:
    λ_Jeans = α × R_half   at   ρ = ρ_crit

From λ_J = V/√(Gρ):
    ρ_crit = V² / (G × α² × R_half²)

Mean α ≈ 1.1 ± 0.2 (Jeans length ~ galaxy size at ρ_crit)
```

Validation table in Session 53 lists per-galaxy measured α values:

| Galaxy | V (km/s) | R_half (kpc) | α = λ_J/R |
|--------|----------|--------------|-----------|
| WLM | 38 | 1.6 | 0.9 |
| NGC 2403 | 136 | 3.9 | 0.9 |
| Milky Way | 220 | 3.6 | 1.4 |
| M87 | 380 | 7.5 | 1.0 |

`Session66_All_Parameters_Derived.md:40-72`:
```
A = 4π / (α² × G × R₀²)

Where:
- α = structure constant for coherence coupling   ← NOT fine-structure
- G = gravitational constant (in galactic units)
- R₀ = 8.0 kpc (galactocentric distance scale)

Numerical Verification:
    G_galactic = 4.30 × 10⁻³ pc³/(M_sun × Myr²)
    R₀ = 8.0 kpc = 8000 pc
    α = 1.0 (fiducial)                             ← α = 1.0, NOT 1/137

    A_with_4pi = 0.0294 (km/s)⁻²
    Empirical: A = 0.028 (km/s)⁻²
    Ratio: 1.05 (5% agreement)
```

**The 5% agreement the site touts requires α = O(1), not α = 1/137.** If α were truly the fine-structure constant:

    α² ≈ 5.33 × 10⁻⁵
    A = 4π / (5.33×10⁻⁵ × G × R₀²) ≈ 5.5 × 10²

That is ~20,000× larger than the empirical 0.028 (km/s)⁻². The formula simply doesn't work with α_fine-structure. It only closes the 5% gap with α ≈ 1.

**So there is no "α² in a galactic coupling" puzzle to solve.** The archive's α is a dimensionless geometric ratio (Jeans length / galaxy half-light radius) that happens to equal ~1 empirically. The formula reduces to A ≈ 4π/(GR₀²) modulo an O(1) correction. That's a dimensional relation between rotation speed, galactocentric scale, and gravitational constant — defensible as a Jeans-criterion rephrasing, but unrelated to electromagnetism.

**The archive itself is aware of symbol-collision hazards.** `Gnosis/Session3_Synthesis_and_Implementation.md:124` contains a self-deprecating note on IIT's φ vs the golden ratio: *"Integration threshold (Tononi's IIT φ, confusingly same symbol!)"*. The authors flagged one collision and missed this one. Session 66's "α = structure constant for coherence coupling" lands in the same hazard zone as Session 3's φ — an unreserved symbol overloaded by a downstream reader (the site transcriber, not the archive authors).

Session 260 ("Physical_Constants.md") — which does treat the real fine-structure constant — discusses α_em as an open problem, explicitly distinct from anything in the gravity formulas. So the archive maintains the distinction; only the site transcription collapsed it.

### Finding 2: The BTFR n = 2.2 Number Has No Archive Source

**Where the site states n ≈ 2.2.**

`src/app/tier-1-existing/page.tsx:93-100`:
```typescript
{
    id: 'TEST-09',
    name: 'BTFR Exponent Universality',
    ...
    prediction: 'BTFR exponent n ≈ 2.2 universal across bands',
    kill: 'Exponent varies by >0.3 across bands',
    alert: 'Status uncertain: published observations show n = 3.85 ± 0.09 ...'
}
```

`src/app/honest-assessment/page.tsx:172,176`:
> "BTFR Exponent n ≈ 2.2 (TEST-09) ... Predicted BTFR exponent n ≈ 2.2 contradicts published measurements: n = 3.85 ± 0.09"

`src/app/prediction-tracker/page.tsx:16`:
> `{ domain: 'Cosmology', name: 'BTFR exponent n ≈ 2.2', status: 'supported' }`

The three site pages agree on the number 2.2. None of them link to or cite an archive session.

**Where the archive actually predicts the BTFR exponent.**

`Paper_Summary_Synchronism.md:138`:
> "2. **BTFR Exponent**: Predicted n = 2.75, observed n ≈ 4 (discrepancy of ~1.25)"

This is under "Known Limitations." The paper summary — which is the most consolidated cross-session document — unambiguously states predicted n = 2.75.

`Session193_Diverse_Galaxy_Test.md:55-62`:
```
Initial fit: V ∝ M^0.364

This is NOT a failure - the slope depends on mass regime:
- Deep MOND (a << a₀):   V ∝ M^0.25   → n = 4
- Newtonian (a >> a₀):   V ∝ M^0.50   → n = 2
- Transition (a ~ a₀):   V ∝ M^(0.32-0.40)   → n = 2.5–3.1

Our sample is dominated by transition-regime galaxies, explaining the slope.
```

`TheoryArc_Summary_185-194.md:95, 228-229`:
> "BTFR slope (0.364) correctly reflects transition regime"
> "Ultra-dwarf BTFR: Should show V ∝ M^0.25 exactly" (i.e., n = 4)
> "Massive galaxy BTFR: Should show V ∝ M^0.5" (i.e., n = 2)

**The number 2.2 is not in the derivation chain.** Possible origins (all speculative, none corroborated):
- A rounding of 2.75 to "~2" that then got mis-transcribed. Unlikely — 2.75 is distinctive enough to survive rounding.
- A confusion with β_theory = 0.20 or β_empirical = 0.30 (from Session 53 parameter table) — these are different parameters (DM density exponents, not BTFR slope).
- A hallucination during an AI session — TEST-09 may have been drafted by an AI model that misremembered or confabulated.
- A different session-predicted number I haven't found. I ran broad greps for `n\s*=\s*2\.2`, `BTFR.*2\.2`, etc. across the full archive and only my own queries plus the proposal hit it.

Of these, hallucination-during-transcription is the most consistent with the Session 3 IIT-φ symbol-collision precedent. The archive is careful about its actual numbers (2.75 appears in Paper_Summary, 0.364 in Session 193, V∝M^0.25/M^0.5 in TheoryArc); the site's 2.2 is an outlier with no upstream.

**Lelli 2019's n = 3.85 is actually consistent with the archive's regime prediction.** The SPARC sample is dominated by disk galaxies with a_peak < a₀ (deep-MOND regime). The archive predicts n → 4 in that regime. So Lelli's measurement confirms the *correct* archive prediction (per-regime), not the "universal n=2.2" number on the site.

### Combined Diagnosis

Both errors live on the same page family (`/parameter-derivations` → `/tier-1-existing` → `/honest-assessment`). Both errors were introduced in the transcription path between the archive and the site. Both were flagged by Pass 4 today as critical reasons not to take the framework seriously. Both resolve cleanly if the site is re-aligned to the archive.

The maintainer's prior (2026-04-23) downgrade of the A parameter from "Validated" to "Speculative | Dimensional Fit" and addition of the TEST-09 amber alert were correct moves given the information available *on the site*. This finding shows that both degradations were responding to transcription errors, not to physics failures. The underlying archive claims (Jeans-derived A with α ≈ 1; regime-dependent BTFR slopes) are more defensible than the site's garbled versions of them.

This is the third independent case of site-archive drift identified by the explorer track:
1. **2026-04-13**: `/mond-unification`'s EFE prediction derived from Hill-form C, but site uses tanh-form C (the "two-C problem")
2. **2026-04-22**: `/gamma-parameter` lists galaxies as Classical (N_corr > 16) and as γ = 2 / N_corr = 1 on the same page (the archive conflates quantum and dynamical N_corr in `GAMMA_UNIFICATION.md`)
3. **2026-04-23** (this finding): α symbol collision; BTFR n=2.2 number drift

A pattern is now visible: **the site and the archive are not two views of one thing; they are two things that have to be actively reconciled.** The Pass 4 researcher's verdict ("one discriminating prediction hiding inside a lot of reparametrized MOND phenomenology") is correct about the site's *current state*, but part of that state is upstream-drift artifacts rather than genuine theoretical content.

## Implications for the Site

### Immediate (P0 — content integrity)

**`/parameter-derivations` card 3** should be rewritten to reflect the archive:

> 3. A = 4π/(α²GR₀²) ≈ 0.029, where α = **λ_Jeans / R_half** ≈ 1.0–1.1 (dimensionless Jeans-length-to-galaxy-size ratio, measured empirically across SPARC galaxies).
> 
> **Not the fine-structure constant.** Earlier versions of this page misidentified α as the electromagnetic fine-structure constant α_em ≈ 1/137. The formula only closes numerically if α is the O(1) Jeans ratio; α_em² would break the relation by ~5 orders of magnitude. See Session 53 (Jeans criterion) and Session 66 (4π factor from surface area).
> 
> Validation status: **Semi-derived from Jeans criterion** (not speculative, not fundamental). The empirical 5% agreement of A ≈ 0.028 follows from λ_Jeans ≈ R_half at the coherence boundary, combined with the observed R_half ∝ V^0.75 galaxy scaling.

**`/critical-density` line 32** same fix: remove "fine structure constant" identification.

**`/tier-1-existing` TEST-09** should either be:
- (a) **Restated** to match archive: "BTFR slope reflects regime mix — deep-MOND samples → n ≈ 4 (consistent with Lelli 2019 SPARC), transition-heavy samples → n ≈ 2.75 (Session 193), near-Newtonian → n → 2. Kill: exponent inconsistent with regime mix by > 0.3."
- (b) **Moved to honest-assessment** as "BTFR exponent n = 2.75 prediction (full-sample fit) contradicts Lelli 2019 n = 3.85 ± 0.09 — SPARC is too deep-MOND-dominated. Framework survives if regime-dependent prediction is used instead of universal n."

Option (a) is stronger because it preserves the test as testable (splitting a multi-band sample by regime is executable). Option (b) is more honest about the current content.

**`/honest-assessment` TEST-09 entry** should be updated correspondingly. The n ≈ 2.2 number should either be corrected to 2.75 or the entry should be reframed as "the universal-n framing was incorrect; the archive's correct prediction is regime-dependent."

**`/prediction-tracker`** line 16 same fix.

### Meta (P1 — process)

The site-archive drift pattern suggests a systemic need:

- **A drift audit** across all pages with cited session numbers. Every `Session #NN` reference on the site should round-trip to a verified archive claim. The three drifts found so far (MOND EFE interpolation, γ dual-role, α/BTFR) suggest more exist.
- **Symbol reservation table** in the research archive: which letters are spoken-for, which session owns each definition, which symbols are hazard-flagged (φ, α, γ all have documented or probable collisions). This could be a one-page "Symbol Map" file at `Synchronism/Research/SYMBOL_MAP.md`.
- **Maintainer triage rule**: when Pass 3/4 flags a specific numeric claim, check the archive for that number before acting. Today's maintainer downgraded A and TEST-09 on the *assumption* they were genuine physics issues; the downgrades were defensible but the root cause (transcription error) was upstream.

## Action: Maintainer

### `/parameter-derivations` page (`src/app/parameter-derivations/page.tsx`, card 3, lines 57–73)

Replace fine-structure-constant framing. Current text:
> "Relates fine structure constant α, gravitational constant G, and characteristic length R₀ to the proportionality between critical density and rotation velocity. Empirical: 0.028. Numerical match: 0.029 (5% agreement)."
> "Open question: The fine-structure constant α is electromagnetic; no current gravity theory places α² in a galactic dynamical coupling without explanation. Until a Lagrangian-level mechanism is supplied, this is a numerical coincidence rather than a derivation."

Proposed replacement:
> "α = λ_Jeans / R_half, the dimensionless Jeans-length-to-galaxy-size ratio. Empirically α ≈ 1.1 ± 0.2 across SPARC galaxies (Session 53 validation table); α = 1.0 is the fiducial value used in the Session 66 derivation. The 4π factor arises from spherical surface-area integration at the coherence boundary."
> "Derivation chain: ρ_crit = V²/(G·α²·R_half²) from Jeans criterion (Session 53) → A = 4π/(α²·G·R₀²) with R₀ = 8 kpc and α ≈ 1 (Session 66) → A ≈ 0.029 (km/s)⁻², vs empirical 0.028 (5% agreement)."
> "**Earlier version of this page misidentified α as the electromagnetic fine-structure constant.** That is incorrect. The formula closes numerically only with α = O(1); α_em² ≈ 5×10⁻⁵ would make A 20,000× too large. There is no α_em–gravity coupling implied by this relation."

Badge: upgrade from "Speculative | Dimensional Fit" to **"Semi-derived | Jeans Criterion"** (consistent with Session 53's `SEMI-DERIVED` status table, line 176).

### `/critical-density` page (`src/app/critical-density/page.tsx:29-32`)

Remove "α (fine structure constant)" from the constants list. Replace with "α (Jeans-length-to-galaxy-size ratio, ≈ 1)".

### `/tier-1-existing` TEST-09 (`src/app/tier-1-existing/page.tsx:92-101`)

Change `prediction` from `'BTFR exponent n ≈ 2.2 universal across bands'` to:

> `'BTFR slope reflects regime mix: deep-MOND sample n → 4 (deep-MOND asymptote), transition-dominated sample n ≈ 2.75 (full-sample fit from Session 193), near-Newtonian n → 2. Full-sample Lelli 2019 n = 3.85 ± 0.09 is consistent with deep-MOND-dominated SPARC.'`

Change `kill` from `'Exponent varies by >0.3 across bands'` to:

> `'Single sample produces BTFR slope inconsistent with its regime-mix prediction by > 0.3'`

Update `alert` to reflect resolution: the original TEST-09 statement was an archive→site transcription error (n ≈ 2.2 not in archive; archive says 2.75 full-sample or regime-dependent). This test is executable in its restated form.

### `/honest-assessment` TEST-09 entry (`src/app/honest-assessment/page.tsx:172,176`)

Rewrite heading from "BTFR Exponent n ≈ 2.2 (TEST-09)" to "BTFR Exponent Universal-n Claim Withdrawn (TEST-09)".

Body: replace n ≈ 2.2 description with explanation that:
- The site previously stated a universal n ≈ 2.2 prediction
- The archive actually predicts regime-dependent slopes (n = 4 deep-MOND, n = 2 near-Newton, n ≈ 2.75 transition-heavy samples)
- Lelli 2019's n = 3.85 is consistent with the archive's per-regime prediction (SPARC is deep-MOND heavy)
- The "universal n = 2.2" framing was a transcription error, not a physics claim

### `/prediction-tracker` (`src/app/prediction-tracker/page.tsx:16`)

Remove or restate: `'BTFR exponent n ≈ 2.2'` → `'BTFR regime-dependent slope (Session 193)'`.

## Open Threads

1. **Systematic archive→site transcription audit.** Three drifts found so far (MOND EFE interpolation function, γ dual-role conflation, α/BTFR). Are there more? A focused audit walking every Session-cited page and verifying the archive claim would be high-value. Could be a single-day explorer session.

2. **Symbol Map file in archive.** Propose a one-page `Synchronism/Research/SYMBOL_MAP.md` that reserves symbol meanings: γ (dimensionless coherence exponent, 2/√N_corr); α (Jeans ratio in dynamical formulas, NOT fine-structure — use α_em for fine-structure); φ (golden ratio in Synchronism formulas, NOT IIT integration threshold); N_corr (correlation length in dynamical sense, NOT wavefunction-overlap count; the GAMMA_UNIFICATION.md conflation is a separate bug). Even a short table would prevent the next collision.

3. **Maintainer pre-flight check.** Before downgrading a badge based on a Pass 3/4 flag, search the archive for the flagged number/symbol. Today's maintainer did a responsible job with the information available but could have avoided a mid-state downgrade by one step of archive verification. Could live in `maintainer/CLAUDE.md` as a triage rule.

4. **Paper_Summary as canonical source.** `Paper_Summary_Synchronism.md` is the most-consolidated document and explicitly lists known limitations (β_empirical = 0.30 vs theory 0.20, BTFR n = 2.75 vs observed 4, ETG success 70%). It should probably be cited as the primary reference for any site claim that appears in both. Currently no site page links to it.

5. **Deeper meta-question: if three of the site's most-critiqued claims (α² numerology, BTFR 2.2 failure, γ dual role) are upstream transcription artifacts, how much of the site's "failed predictions" catalog is genuine physics failure vs. transcription drift?** A fuller audit could rewrite the site's self-assessment landscape. The honest-assessment page's core failures (YBCO T_c 6.5× miss, Bullet Cluster sign error, melting points 53% error, Abrikosov-Gor'kov η equivalence) are not drift — those are real. But the intermediate "speculative | dimensional fit" tier may be mostly drift.

6. **The α symbol in Session 66 is undefined in that document.** Session 66 just says "α = 1.0 (fiducial)" without re-explaining that this is Session 53's Jeans ratio. A reader walking into Session 66 cold would have the same confusion the site transcriber had. This is an archive readability issue, independent of the site. Worth mentioning in a future back-annotation to the research repo.
