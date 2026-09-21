# Finding: TEST-04a's multi-bin statistic on DR1 gives Δχ² = +5.9 (ΛCDM favoured, 2.4σ-equivalent). Given DR1, a Δχ² > 9 kill at DR2 is roughly a coin flip under ΛCDM, not < 1%

## Origin
Topic `test04a-five-bin-growth-statistic-on-dr1-before-dr2.md` (maintainer 2026-09-21; time-sensitive because DR2
full-shape is unpublished). This was a side check this session, sized to what the topic asked for.
PREREG `ee7f509` (P8–P10), committed before the script.
Script: `scripts/test04a_multibin_dr1_and_dr2_power.py` (+ `_output.txt`).

## Summary
S107's "five bins" do not exist in DR1 full-shape: ELG1 (S107's ELG_low) was dropped, so four bins exist (LRG1,
LRG2, LRG3, ELG2). On those four, Δχ²(S107 − ΛCDM) = **+5.89** (**+6.57** with BGS and QSO added), against an
expectation of 3.29 if ΛCDM is true. Treating DR2 as independent, the four-bin kill (Δχ² > 9) fires under ΛCDM
with probability 0.26–0.41 at plausible DR2 precision (σ_DR2/σ_DR1 = 0.75–0.65). **But DR2 contains DR1.** Given
the DR1 values already observed, the kill fires with probability **0.36–0.57 under ΛCDM** and **0.02–0.03 under
S107**. This is the clean, powered form the maintainer's proposal asked for. It is about 50× more likely to fire
than branch B as adopted. It is still short of 80% power, which needs σ_DR2/σ_DR1 ≤ 0.46.

## Research Notes
Inputs are the DESI 2024 V (arXiv:2411.12021) Table 9 ratios fσ₈/(fσ₈)^fid *as transcribed in*
`Synchronism/Research/proposals/session107_disfavored_by_desi_dr1.md`. **Not re-verified against the paper this
session.** Asymmetric errors are taken on the side facing each model. Bins are treated as independent (they are
disjoint in z).

| bin | DR1 ratio | S107 | Δχ² |
|---|---|---|---|
| LRG1 | 1.160 | 0.882 | +3.06 |
| LRG2 | 1.040 | 0.898 | +2.19 |
| LRG3 | 0.997 | 0.916 | +0.93 |
| ELG2 | 0.945 | 0.932 | −0.29 |
| four-bin total | | | **+5.89** |
| + BGS (−0.69), QSO (+1.37) | | | +6.57 |

Conditional forecast, with DR2 nesting DR1 (the DR1 information fraction is f², symmetrised σ):

| truth | f = 0.75 | 0.70 | 0.65 | 0.60 |
|---|---|---|---|---|
| ΛCDM: P(Δχ² > 9) | 0.36 | 0.47 | 0.57 | 0.67 |
| S107: P(Δχ² > 9) | 0.02 | 0.03 | 0.03 | 0.02 |

Unconditional f needed for 80% power under ΛCDM: **0.458** (four bins) / **0.504** (six bins).

PREREG: **P8 held** (+5.89 > +4; I had guessed about +5). **P9 held** (expected Δχ² at DR1 is 3.29 / 3.97, both
< 9). **P10 held** (0.458 / 0.504 < 0.6).

## Implications for the Site
- The "only statistic with power" claim in the maintainer proposal holds up, and it can now carry numbers. Branch B
  as adopted fires < 1% under ΛCDM. The four-bin Δχ² > 9 fires about 36–57% under ΛCDM given DR1, and 2–3% under
  S107. Its false-kill rate is low; its miss rate is high.
- **Frame, restated.** The mechanism behind 0.418 (G_local/G_global) was refuted on SPARC on 2026-08-15, and the
  live DE sector forecasts −0.22%. A DR2 kill would retire a mechanism that is already retired. The information
  value of TEST-04a to the *live* framework is close to zero in either direction. It remains the program's only
  prospective registration, and that is the finding worth a sentence of its own: **the framework currently has
  no live growth prediction that DESI can tell apart from ΛCDM.**

## Action: Maintainer
- **P1** (for the dp-gated re-registration proposal): attach the four-bin numbers above. Register "Δχ²(S107 − ΛCDM)
  on LRG1–3 + ELG2 > 9 → kill; < −9 → favoured (Bucket 0 still 0)". State the conditional null rates in the
  registration.
- **P2** TEST-04a row: one line saying the mechanism under test is retired, so a kill retires nothing live.

## Open Threads
- Re-verify the Table 9 transcription against the paper before anything is registered. It came from a May finding.
- The ShapeFit ratios are conditional on DESI's fiducial template. S107's own ΛCDM column (0.474 at z = 0.51) was
  assumed equal to the fiducial, and that was not checked.
