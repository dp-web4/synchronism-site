# The Unworked Seam: The Site Audits Against External Data, Not Against Itself

**Priority**: MEDIUM-HIGH — cheap, and the yield rate so far is unusually good
**Seeded**: 2026-07-27 (maintainer, from visitor Passes 2/3/4 converging)

## The observation

All four visitor personas independently hit the same defect class from different angles:

- **Enthusiast**: "so what's actually left?" — couldn't reconcile page-to-page framings.
- **Tech writer**: five parallel status vocabularies; taxonomy defined three times.
- **Grad student**: γ = 2/√N_corr and the γ=2 galaxy pin never cross-multiplied.
- **Researcher**: `/falsifiability` selling retracted claims; two tools disagreeing on BCS by 32×.

The synthesis names it correctly: **one defect class, not four.** The site audits itself hard
against *external* data — four executed refutations, a velocity-definition robustness sweep,
a polynomial null for chemistry — and barely at all against *itself*.

## Why this is a research topic and not just a QA chore

Internal cross-multiplication has, historically here, a **very high yield per unit effort**, and
the findings are not cosmetic:

| Cross-multiplication | Result | Effort |
|---|---|---|
| γ=2/√N_corr × galaxy pin γ=2 | galaxy = ideal gas (N_corr = 1) | 15 seconds |
| γ=2/√N_corr × SPARC fit γ=0.49 | galaxy = 17 correlated units, vs BCS 10⁷ | 15 seconds |
| a₀ = cH₀/2π × measured a₀ | H₀ ≈ 77.6 — a statement the site claimed not to make | one division |
| ΔBIC=+7.1 × ln(2807)=7.94 | Δχ² = −0.84, compander fits *better* | one subtraction |
| f_DM ceiling × Ω_m/Ω_b | TEST-10's headline statistic is convention-dependent | one ratio |

Five findings, all from arithmetic on numbers **already published on the site**, none requiring
new data, and at least two of them (the H₀ inversion, the discrimination under-claim) correcting
the site's characterization of its own results *upward*.

## The proposed instrument

A **relation registry**: every published quantitative relation on the site, in one machine-
readable file — LHS, RHS, variables, the page it appears on, and its status. Then mechanically:

1. Find every pair sharing a free variable.
2. Compose them and evaluate.
3. Flag any composition whose output contradicts a third published value, or lands a physical
   system in an absurd bin.

The γ↔N_corr galaxy row would have fired on rule 3 the day both numbers were published. The
H₀ inversion would have fired on rule 1.

`src/lib/gammaPresets.ts` (created 2026-07-27) is the first instance of the narrow version of
this — one file that both tools showing a relation must read. Generalize it.

## The sharper framing, which is a real research question

The explorer loop was previously characterized as a **monotone closure operator** reaching a
fixed point: all frontier amplitudes calibrated or asserted, zero derived. That conclusion was
drawn over the *external*-audit axis. **The internal-consistency axis was never worked**, and
today's pass shows it is not at the fixed point — it is generating findings at a high rate from
zero new data.

So: is the "stable fixed point" conclusion an artifact of only having searched one axis? If
internal cross-multiplication keeps yielding at this rate, the honest answer is that the program
converged in the direction it was looking and not in the direction it wasn't.

## Related

- `two-galaxy-laws-never-reconciled.md` — same seam, narrower instance
- `site-propagation-completeness-audit.md` — the QA-shaped version of this
- `badge-vocabulary-single-source-of-truth.md` — the tech writer's axis; still open, and today's
  pass found ~20 status labels in use against 9 defined
