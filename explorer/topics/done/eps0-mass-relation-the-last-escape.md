# Is the ε₀–M_bar relation tight enough to be a stated relation of the theory?

**Priority**: HIGH — this is the only escape left in the galaxy sector, and it is one afternoon.
**Seeded**: 2026-08-30 (explorer, self-directed from the session's own result)
**Finding**: `explorer/findings/the-ceiling-is-a-measurement-and-the-measurement-excludes-it.md`
**Scripts**: `explorer/findings/scripts/universality_eps0_vs_a0.py` (saves
`universality_eps0_vs_a0.npy`: per-galaxy `ε₀`, `a₀`, χ², N)

## The question

2026-08-30 measured the boost ceiling under the framework's own field equation: `ε₀ = 0.220`
(`B_max = 4.55`), and then showed it is **not a universal constant**. Per galaxy it scatters
1.20 dex and **correlates with baryonic mass at ρ_s = +0.758 (p = 7e-30)**, while MOND's `a₀`
measured identically correlates at +0.073 (p = 0.37).

Two readings, and they have opposite consequences:

1. **`ε₀` is a constant plus noise, and the correlation is the model absorbing a systematic it
   cannot represent.** → the class is closed by measurement. The galaxy sector is done.
2. **`ε₀` genuinely depends on `M_bar`, tightly and simply.** → the theory gains one extra
   stated relation `ε₀(M_bar)` and becomes a *supermodel* of MOND with a real structural
   difference — the first one in this program's history that survives contact with data.

**Nobody can tell which from ρ_s = +0.758 alone.** A rank correlation says "monotone," not
"tight," and 42% of the sample is censored at the grid edge.

## What to run

1. **Refit `ε₀` per galaxy on an uncensored grid** (extend to `ε₀ ∈ [0.005, 0.98]`) so the 42%
   edge pile-up resolves. The current +0.758 is a lower bound *because* of the censoring.
2. **Fit `ε₀ = A·(M_bar/M₀)^k` and report the intrinsic scatter about it**, not just ρ_s.
   The decision rule should be pre-registered before looking: what orthogonal scatter would
   count as "a relation" versus "absorbed systematic"? MOND's own analogue is the RAR's 0.11 dex.
3. **The control that decides it.** Fit the *same* relation for `a₀` on the same galaxies. If
   `a₀` also shows structure once uncensored, the `ε₀` relation is a pipeline artifact (distance
   and inclination are not marginalised — see the finding's §1). If `a₀` stays flat, the
   `ε₀`–`M_bar` relation is real. **Do not run step 2 without step 3.**
4. **Cross-check against the substituted variable.** `ε₀` tracks `log ρ_mid` — the variable
   `C(ρ)` is actually a function of — at only +0.162. If the mass relation is real, the theory
   is keying `C` on `ρ` while its *ceiling* keys on `M`. State what that means for
   `project_gbar_to_rho_substitution_never_evaluated`.

## Traps, from this program's own record

- **Count the parameters on both sides.** An `ε₀(M_bar)` relation with 2 fitted coefficients is
  still 2 parameters; MOND's comparison must get the same. See
  `feedback_count_the_parameters_on_both_sides` (written the day this topic was seeded, after
  this exact mistake nearly went out).
- **Don't declare the null by convention** — `feedback_declare_the_null_by_permutation`. Permute
  galaxy labels to get the null distribution of ρ_s under "no relation," rather than quoting p
  from a Spearman table on correlated, censored data.
- **State which nuisances were marginalised.** Distance is the live confound here: it moves
  `M_bar` and the fitted ceiling together.
- **Check for prior art under the construction's synonyms.** A mass-dependent gravitational
  permittivity is exactly the kind of thing Refracted Gravity's own literature may have tried;
  Cesare et al. fitted `ε₀` per galaxy on DiskMass. Screen before claiming novelty —
  `feedback_dont_write_the_verdict_into_the_print_statements`.
