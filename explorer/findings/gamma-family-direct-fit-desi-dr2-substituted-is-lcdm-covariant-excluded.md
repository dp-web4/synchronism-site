# Finding: The direct fit to DESI DR2 dissolves the quadrant rhetoric — the substituted family IS ΛCDM (γ = 0.487 ± 0.02, 0.1σ from the galaxy sector's 0.489), and both covariant completions are excluded by the data outright

**Date**: 2026-08-12
**Track**: Explorer
**Origin**: topic `fit-the-gamma-family-to-desi-chains.md` (seeded by maintainer 2026-08-12 from the TEST-26 registration WAKE)
**Script**: `scripts/fit_gamma_family_to_desi_dr2.py` (+ output `.txt`)
**Status of the count**: UNCHANGED at 6 (dp-gated recount pending). Nothing here is a registered-test kill; it is an audit-fit that *re-prices* an existing no-go in both directions.

## Summary

Every DESI statement in the arc so far — the sign lock, the "0/192 γ reach the DESI
quadrant" scan, the "forced-w₀ ⇒ wₐ wrong sign at 3.4–6.3σ" table — was made in CPL
(w₀, wₐ) space, a parameterization the family does not live in. Today I fit the family
**directly to the data**: DESI DR2 BAO (13 points, per-tracer D_M–D_H correlations) +
Planck 2018 distance priors + the DES group's own 2025 **Dovekie** SN recalibration
(1820 SNe, full STAT+SYS covariance, M marginalised). Every input verified against
sources today; the pipeline reproduces DESI's published w₀wₐCDM posture before any
family statement is made.

Three results, one softening and two hardenings:

1. **The substituted family is NOT "3.4–6.3σ excluded" — it is statistically identical
   to ΛCDM** (Δχ² = −0.30 with one extra parameter). It nests ΛCDM exactly at γ = 1/2
   (Möbius point), so it could never fit worse; the direct fit shows it also can't fit
   meaningfully better — its best member projects to CPL (w₀ = −0.993, wₐ = +0.023),
   i.e. it *masquerades as Λ*. The data-level cost of "cannot reach the DESI quadrant"
   is exactly ΛCDM's own cost: Δχ² = +11.0 behind w₀wₐCDM (~2.9σ for 2 params), no more.
   The 08-11 "3.4–6.3σ" figure came from *forcing* w₀ to DESI's central value — a point
   the likelihood never visits. **5th instance of the over-refutation class** (the no-go
   stands; the exclusion-flavored number attached to it did not survive execution).

2. **Both covariant completions are excluded by the data outright — the no-go against
   the covariant class hardens from "can't reach the crossing" to "fails the fit".**
   Completion A (Appendix D as written, exactly EdS): χ²_BAO+CMB ≈ 9,900 — the pre-1998
   background, dead at ~√9900 σ-scale. Completion B (Brans–Dicke Ċ terms): best fit is
   **Δχ² = +79 to +187 worse than ΛCDM** for every ω ∈ {0, 1, 5, 50} (already +18 with
   no SN at all). The 08-11 statement was that B merely misses the DESI quadrant; the
   truth is stronger — B cannot even match ΛCDM on DR2-era data. **The framework's
   dark-energy sector survives current data only in its non-covariant form, and only
   by being ΛCDM.**

3. **The fit measures the framework's cosmological γ for the first time:
   γ = 0.487 (−0.021 / +0.024).** The galaxy sector's SPARC-preferred value is 0.489.
   Agreement at 0.1σ — the framework's first *executed cross-sector consistency test*,
   and it passes. The deflationary reading is mandatory and is stated in §4.

## 1. Pipeline validation (before any family claim)

| Check | This pipeline | Published |
|---|---|---|
| ΛCDM BAO χ² (13 pts) | 12.6 | acceptable-fit regime (DR2) |
| r_d at best fit | 147.38 Mpc | 147.05 (Planck/CAMB) |
| w₀wₐ best fit, BAO+CMB only | (−0.44, −1.67) | (−0.42, −1.75) DR2 |
| w₀wₐ best fit, +SN | (−0.82, −0.65) | (−0.838, −0.62) DR2+Pantheon+; (−0.752, −0.86) +DESY5 |
| crossing preference, +SN | Δχ² = −11.0 (~2.9σ / 2 dof) | 2.8–4.2σ (DR2, SN-dependent) |
| crossing preference, BAO+CMB | Δχ² = −8.3 | ~−12.5 (3.1σ, full likelihood) |

The compressed-CMB arm recovers ~2/3 of the full-likelihood crossing evidence (known
cost of distance-prior compression). This biases **against** the headline conclusions:
the full likelihood would punish completion B *harder* and would not change the
substituted-family result at all (that one is nesting-exact). The sound-horizon
integral is CAMB-calibrated at the Planck 2018 fiducial (two multiplicative constants,
r_*×1.0115, r_d×0.9857; residual parameter-dependence < 0.2%, shared coherently by all
models). Uncalibrated, the pipeline lands ω_m 6% high and distorts everything — worth
recording: **a 2.5% bias in one nuisance integral was worth more χ² than the entire
dark-energy signal.** Diagnose pulls before trusting verdicts.

## 2. The verdict table

DESI DR2 BAO + Planck-2018 distance priors + DES-Dovekie SNe (full covariance):

| Model | params | χ² | Δχ² vs ΛCDM |
|---|---|---|---|
| ΛCDM | 3 | 1650.6 | 0 |
| w₀wₐCDM | 5 | 1639.6 | **−11.0** |
| substituted family (best γ = 0.487) | 4 | 1650.3 | **−0.3** |
| completion B, ω=0 (best γ = 0.297) | 4 | 1729.8 | **+79.2** |
| completion B, ω=1 | 4 | 1745.1 | +94.5 |
| completion B, ω=5 | 4 | 1780.6 | +130.0 |
| completion B, ω=50 | 4 | 1837.5 | +186.9 |
| completion A (EdS, coarse grid, BAO+CMB only) | — | ~9,900 | — |

The 08-11 BAO-shape marginalization found completion B's best member (γ ≈ 0.3) at
0.25% rms — "survives background shape". The full likelihood shows what that hid: at
the 13-point BAO precision plus the CMB anchor plus SNe, that same member is +79.
*Shape-survival at the rms level and fit-survival at the likelihood level are
different claims* — the arc now has both, and they disagree in the direction that
kills the branch.

## 3. What "forbids the DESI quadrant" actually costs, in χ²

The quadrant statement is true: no family member produces w₀ > −1 with wₐ < 0 (the
interior-maximum escape condition of TEST-26 stands). But ΛCDM is *also* outside the
DESI quadrant. The quadrant statement priced the family as if missing the quadrant
were an exclusion; the fit shows the price is **ΛCDM's price**: +11.0 behind w₀wₐCDM.
With the DES group's own Dovekie recalibration (which their 2025 companion,
arXiv:2508.10514, reports as "no robust preference for dynamical dark energy using
late-time datasets alone, Nσ ∼ 1.1–2.3"), that price is at the modest end of the
published 2.8–4.2σ band. The projection-bias literature the site cites as its "best
defense" (verified today: Shlivko & Steinhardt arXiv:2405.03933; Cortês & Liddle
arXiv:2404.08056; Wolf, García-García, Bartlett, Ferreira arXiv:2408.17318 and
arXiv:2502.04929) turns out to be only half the story — the bigger distortion was not
CPL projection of the family's w(z) (its best member is Λ-like; projection is exact
there) but **forcing the family to a CPL posterior point it never visits**.

**Consequence for TEST-26 (registration gates on dp, not yet shipped):** as drafted,
the test adjudicates quadrant membership. On the only surviving branch, quadrant
membership is inherited from ΛCDM wholesale — **TEST-26 is ΛCDM-degenerate on every
branch that is still alive.** The framework-specific branches (A, B) are already
excluded by DR2-era data, before DR3 arrives. The registered statistic should be
Δχ²(substituted-family best fit vs w₀wₐCDM best fit) on DR3 likelihoods, with the
explicit statement: *the family's fate is ΛCDM's fate; DR3 kills the family exactly
when it kills ΛCDM's background, and cannot kill it sooner or later.* This puts
TEST-26 in the same non-discrimination class as the a₀(z) row (ΛCDM-degenerate,
memory: 08-01) — a consistency check, not a discriminator. The site should say so
before registration, not after a DR3 verdict is misread.

## 4. γ = 0.487 (−0.021/+0.024): the cross-sector consistency number

The γ profile (om, h, ω_b re-fit per point) is sharp and single-welled:

```
γ     0.30      0.40     0.45     0.489    0.50     0.52     0.60     1.00
Δχ²   +137.3    +19.0    +2.6     −0.3     0.0      +1.5     +16.6    +142.5
```

- Cosmology (this fit): γ = 0.487 (−0.021/+0.024)
- Galaxy sector (SPARC RAR, site's own free-γ fit): γ = 0.489
- Agreement: 0.1σ. **First executed cross-sector consistency test; pass.**

The deflationary reading, stated plainly: γ = 1/2 is *exactly* ΛCDM in this branch
(Möbius identity), and γ = 0.489 is *exactly* the MOND simple-μ point (C ≡ μ_simple).
The two standard models of the two sectors happen to sit 0.011 apart in γ-space, and
each sector's fit lands on its own standard model. So the concordance is real but
currently *unfalsifiable as a framework success*: distinguishing 0.489 from 0.500
needs σ_γ ≈ 0.004 — 5× beyond this fit, likely beyond DR3 backgrounds. The honest
statement is double-edged: the framework's one-γ postulate **survives its first
two-sector test**, and the test had **no power to fail it** given that ΛCDM ≈
MOND-point in γ-space. Both halves belong on any page that quotes the number.
(Also recorded: the no-SN arm prefers γ = 0.538 — the preferred γ is data-combination
dependent at the ~2σ_γ level; quote the full-combination value with its interval,
never a bare central.)

## 5. Honest bounds of this execution

- **Background-only** (standing caveat): no growth, no perturbations, no full-shape.
- **Compressed CMB** recovers ~2/3 of the crossing evidence; direction of bias favors
  the family and completion B — both headline exclusions are conservative.
- **Massless neutrinos** (N_eff = 3.046, no 0.06 eV); absorbed to first order by the
  CAMB calibration constants; shared coherently across models.
- **Quasi-static pinning** ansatz for completion B (its standing conditionality).
- **One SN sample** (Dovekie). Pantheon+/Union3 arms deferred; DR2's published spread
  (2.8–4.2σ) brackets what they would change. Dovekie chosen as the DES group's own
  recalibration of the sample DESI used — the "stale inputs" rule cuts toward it.
- **Not chains**: compressed likelihoods, not DESI's public chains. The validation
  table bounds the fidelity loss.

## Implications for the Site

1. `/dark-energy` and `/honest-assessment#dark-energy` currently carry the 08-11/08-12
   class statement with the "0/192" scan and "3.4–6.3σ" forced-wₐ figures as the
   sharpest numbers. Both need the fit-level re-pricing: substituted ≡ ΛCDM
   (Δχ² = −0.3, γ = 0.487 ± 0.02); completion B excluded by fit (Δχ² ≥ +79), not
   merely quadrant-blocked; completion A χ² ≈ 10⁴.
2. `/top-5-tests` TEST-26 card: the kill criterion must move from quadrant membership
   to the Δχ² statistic, and the card must state the ΛCDM-degeneracy of the surviving
   branch (consistency check, not discriminator).
3. The γ-concordance number (0.487 vs 0.489) is new site content — with the
   deflationary reading attached, it is exactly the site's culture: a real pass, a
   stated reason the pass was cheap, and the σ_γ ≈ 0.004 bar for making it expensive.

## Action: Maintainer

1. `/dark-energy` — replace the "3.4–6.3σ sign-and-scale" sentence with the direct-fit
   pricing (substituted: Δχ² = −0.3 vs ΛCDM, +11.0 behind w₀wₐCDM ≈ ΛCDM's own gap;
   citation row for the four projection papers is already there — IDs all verified
   today). Add the completion-B fit exclusion (+79…+187) and completion-A χ²≈10⁴ to
   the covariant-completions section (this *strengthens* that section).
4. `/honest-assessment#dark-energy` — same re-pricing in the lead (rewrite the lead
   sentence carrying "0/192", keep the scan as supporting detail; the lead's sharpest
   number is now Δχ²).
2. `/top-5-tests` TEST-26 card — verdict text: registered statistic = Δχ² vs w₀wₐCDM
   at DR3; add "ΛCDM-degenerate on the surviving branch" honesty line.
3. Research repo: proposal `gamma_family_direct_fit_desi_dr2_20260812.md`
   (back-annotated this session) — the TEST-26 registration draft (dp-gated) should
   absorb the new statistic before dp reviews it.

## Open Threads

- Pantheon+/Union3 arms of the same fit (bracket the SN-sample dependence; DR2's
  published spread suggests ±1σ of movement in the crossing evidence, none in the
  nesting-exact results).
- σ_γ ≈ 0.004 target: is there ANY observable (background or growth) that separates
  γ = 0.489 from γ = 0.500 at that precision? If growth data enter, the framework's
  suppressed-growth phenomenology (TEST-04a arc) re-couples to this question.
- The SPARC-side σ(γ) has never been quoted on the site — the galaxy 0.489 needs an
  interval before the concordance can be priced properly.
- Does the w = dlnF/dlnx identity (08-11) have prior art in interacting-DE /
  dark-degeneracy literature? (Standing prior-art gate before any external claim.)
