# Pre-registration — evolving floor vs published high-z disc DM fractions

**Written 2026-09-11, explorer, BEFORE fetching any high-z f_DM table.** Committed locally before the
literature fetch so the hash timestamps the rule.

## Prior knowledge declared
I remember, without having opened the papers this session, that Genzel+2017 (Nature) reported low
f_DM(<R_e) in a handful of z ~ 1–2.4 massive SFGs and that later samples (Genzel+2020, RC100) show a
spread, with f_DM anticorrelated with baryonic surface density. I do not remember per-galaxy values.

## The prediction under test
Reading: the galaxy floor is the dark-energy sector's C at the ambient cosmic mean matter density,
C_floor(z) = C_DE(ρ̄_m(z)). Because ρ_DE = ρ_m(1−C)/C, **1/C_DE(ρ̄_m(z)) = (ρ_m+ρ_DE)/ρ_m = 1/Ω_m(z)
identically** under the DE sector's own expansion history (derivation in the finding). So

    f_DM(<R_e) ≤ 1 − Ω_m(z) = Ω_DE(z)        (primary: γ_DE = 0.5, which is ΛCDM's Ω_Λ(z))

| z | 0.9 | 1.0 | 1.5 | 2.0 | 2.5 |
|---|---|---|---|---|---|
| cap (γ = 0.5) | 0.241 | 0.214 | 0.122 | 0.075 | 0.048 |

Robustness rows: γ = 0.3 (most permissive in the maintainer's range) and the γ band DESI allows.

**Why the mean density is the permissive choice:** under the ambient-environment variant, an overdense
environment raises C_floor and lowers the cap. Massive SFGs at z ~ 1–2.5 are biased tracers (δ > 0 at
any smoothing scale), so evaluating at δ = 0 gives the framework the most room.

## Definition matching
- Accept f_DM = v²_DM/v²_circ at R_e (equals 1 − g_bar/g_obs = 1 − C under g = g_bar/C, spherical).
- Accept enclosed-mass fractions M_DM(<R_e)/M_dyn(<R_e) as equivalent (spherical); flag which.
- Use the paper's own pressure-support correction and default IMF. Record whether a Salpeter IMF
  (M_* × ~1.7) would remove any exceedance; if it would, the verdict is IMF-conditional.

## Verdict rule (fixed now)
Restricted to galaxies with z ≥ 1.5 (cap ≤ 0.122), using each paper's own quoted uncertainty σ:
- **REFUTED** if ≥ 5 galaxies, or ≥ 10% of the z ≥ 1.5 sample (whichever is larger), have
  f_DM − cap(z) > 2σ; OR the z ≥ 1.5 sample median exceeds the median cap by more than 3 standard errors
  of the median (1.2533·SD/√N).
- **SURVIVES** if ≤ 2 galaxies exceed by > 2σ AND the median ≤ median cap + 1 s.e.
- **INCONCLUSIVE** otherwise, or if per-galaxy σ is not published (then report the median test only).
- The 0.9 ≤ z < 1.5 bin is reported with the same rule, as a secondary result, not used for the verdict.
- A single galaxy above the cap is never a refutation.

## What either outcome means (fixed now)
- Refuted → the only reading that gave the floor a physical meaning is dead on data, independently of
  SPARC's Υ convention; the floor is a pure fit constant. Not a seventh refutation: the reading was
  never registered. It is an elimination.
- Survives → the framework has a door-#3 number that does not reduce to MOND (constant a₀), but it is
  already dead at z = 0 (TEST-10: SPARC max f_DM 0.927 > 0.685) unless the environment variant rescues
  the dwarfs, which then becomes the test that matters.

## Addendum (written after the high-z table was parsed, BEFORE any z = 0 environment computation)

The ambient-environment variant, C_floor = C_DE(ρ̄_m,0 (1+δ)), is tested on SPARC at z = 0.
- Sample: SPARC Q ≤ 2, i > 30 discs ∩ TEST-08's 141 environment galaxies (exactly the proxy adjudicated).
- Required boost: B_req = max_R V_obs²/V_bar² at Υ_disk = 0.5, Υ_bul = 0.7 (the 09-09 convention).
- Environment: TEST-08's 5th-nearest-neighbour CF4 number density ρ5 and N(<5 Mpc). δ is estimated
  **relative to the SPARC-sample median at matched distance** (log ρ5 regressed on log D). Galaxy-
  weighted medians sit above the cosmic volume mean for a biased tracer, so this δ is biased *low*
  (void-ward): the choice is generous to the reading.
- γ_DE = 0.487 primary; the DESI-allowed γ band as robustness.
- **REFUTED** if fewer than 50% of discs satisfy B_req ≤ B_max(δ), OR Spearman ρ(B_req, ρ5 | D) ≥ 0
  (the reading needs the most boost-hungry discs in the emptiest places, so it predicts ρ < 0).
- **SURVIVES** if ≥ 90% satisfy AND Spearman ρ < 0 at p < 0.05. **INCONCLUSIVE** otherwise.
- Declared in advance: the 50% criterion is close to structural (a galaxy-median reference puts half
  the sample at δ ≥ 0, where B_max ≤ 3.17 and 77% of discs need more). The correlation test is the
  part that could have come out otherwise.
