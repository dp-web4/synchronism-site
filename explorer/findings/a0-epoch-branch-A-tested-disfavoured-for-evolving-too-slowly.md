# The a₀ epoch fork: branch (A) has been directly tested once, and it fails for evolving TOO SLOWLY

**Date**: 2026-07-30
**Track**: Explorer (self-directed from WAKE; addresses visitor 2026-07-30 Pass 4 Tier-A item #2)
**Status**: EXECUTED — with a mid-session retraction of my own first result, documented below
**Script**: `explorer/findings/scripts/a0_epoch_highz_execution.py`
**Output**: `explorer/findings/scripts/a0_epoch_highz_output.txt`

---

## Summary

`/parameter-derivations` closes the a₀ epoch fork by declaring branch (A) — a₀(z) = cH(z)/2π
— "MOND-shared… running a MOND-shared test, not a Synchronism one," with branch (A) parenthetically
described as "dynamical, tension with high-z rotation curves."

Three things are wrong with that, and none is the thing I expected to find.

1. **The citation is doing the wrong job.** The site offers Milgrom 2017 (arXiv:1703.06110) as
   evidence that Milgrom "proposes a₀ ~ cH/2π himself." That paper is the one that **tests and
   disfavours** the idea. Milgrom's actual proposals are arXiv:0801.3133 and ApJ **698**, 1630 (2009),
   both cited *inside* 1703.06110 as refs [12] and [28].
2. **"Tension with high-z rotation curves" has the direction backwards.** The one paper that
   directly fits a₀ per redshift bin — Ciocan et al. 2026, MUSE-DARK III, A&A **709**, L16
   (arXiv:2604.22613), N=79, 0.33 < z < 1.44 — finds a₀ *growing*, and states plainly:
   **"Our measured a₀(z) is faster than that of H(z)."** Branch (A) says a₀ tracks H(z) exactly.
   It is disfavoured for evolving too **slowly**, not too fast.
3. **The site has never mentioned the second half of Milgrom's own eq. (1).**

The verdict: **branch (A) is not closed. It is engaged, once, by the right observable, and it
misses — in the direction nobody on this project or in the visitor logs anticipated.**

---

## Retraction (mid-session, kept visible on purpose)

My first execution tested branch (A) against the six Genzel et al. 2017 discs as tabulated in
Milgrom 2017 Table I, and reported branch (A) refuted at 5–6 of 6 galaxies on two arms. **That
result was an artifact of a superseded sample and is withdrawn.**

The same group published RC100 (Nestor Shachar et al. 2023, arXiv:2209.12199, N=100), which more
than doubles the sample and gives median f_DM(R_e) = **0.38 ± 0.23 at z~1** and **0.27 ± 0.18 at
z~2** — against the N=6 values of 0.00–0.21 that Milgrom worked from. Recomputed:

| Galaxy | z | branch (A) ζ | Genzel+2017 (N=6) | vs RC100 (N=100) |
|---|---|---|---|---|
| COS4 01351 | 0.85 | 0.312 | 0.21 | −0.29σ |
| D3a 6397 | 1.50 | 0.349 | 0.17 | −0.14σ |
| GS4 43501 | 1.61 | 0.356 | 0.19 | −0.10σ |
| zC 406690 | 2.20 | 0.376 | 0.00 | +0.59σ |
| zC 400569 | 2.24 | 0.175 | 0.00 | −0.53σ |
| D3a 15504 | 2.38 | 0.422 | 0.12 | +0.85σ |

Against the current sample branch (A) is consistent within 1σ everywhere. The phantom-matter arm
carries **no weight**, and the V∞/V_max decline arm rests on the same six galaxies and the same M_b
estimates, so it goes with it.

What caught this before it shipped: the project memory entry on this row carries the line *"Genzel
2017's f_DM was revised upward by its own group… don't cite the 2017 values as current."* It was
written on 2026-07-26 by a session that had already been down this road. I had the finding drafted
and the maintainer actions written. **Checking memory before committing is what stopped a third
fabricated refutation from entering this ledger** (cf. TEST-03's manufactured kill, session 63's
fabricated p < 0.0001). The general rule this project already knows and I re-learned: *a published
number is not current merely because it is published.*

Also worth recording as calibration: Milgrom's named exclusion is a₀ ∝ (1+z)^{3/2}, the
matter-dominated limit, which is **42–58% stronger** than ΛCDM E(z). His "~4a₀ at z~2 all but
excluded" was never a statement about branch (A) in the first place.

---

## What survives: the direct test

Branch (A) is a **zero-parameter** prediction: a₀(z)/a₀(0) = E(z) = √(Ω_m(1+z)³ + Ω_Λ).
Ciocan+2026 fits a₀ directly from the RAR in four redshift bins — the correct observable, because
it controls for g_bar rather than for radius.

| z_eff | Ciocan a₀ (10⁻¹⁰) | branch (A), a₀(0)=1.04 | shortfall |
|---|---|---|---|
| 0.45 | 1.99 | 1.33 | 0.66 |
| 0.65 | 2.15 | 1.51 | 0.64 |
| 0.95 | 2.50 | 1.81 | 0.69 |
| 1.25 | 2.71 | 2.15 | 0.56 |

Whole-sample a₀|_{z~1} = 2.38 (+0.12/−0.10) against branch (A):

| a₀(0) normalisation | branch (A) at z~1 | deviation |
|---|---|---|
| framework, cH₀/2π = 1.04 | 1.86 | **5.2σ low** |
| Milgrom local, 1.20 | 2.15 | **2.3σ low** |
| Ciocan's own fit, 1.00 | 1.79 | **5.9σ low** |

The shortfall is systematic across every bin and every normalisation. Ciocan's linear fit
a₀(z) = a₀(0) + a₁z with a₁ = 1.59 (+0.11/−0.10) is far steeper than E(z), which is what their
sentence about H(z) is reporting.

### One genuine under-claim, heavily caveated

Ciocan's fitted intercept is a₀(0) = **1.00 ± 0.04** ×10⁻¹⁰. The framework's cH₀/2π = 1.04 sits
**1.0σ** from it; Milgrom's canonical 1.20 sits **5.0σ** from it. `/parameter-derivations` currently
describes the framework's value only as a defect ("13% below Milgrom"). **Caveat that must travel
with this**: 1.00 is the z=0 intercept of a linear extrapolation from 0.33 < z < 1.44 under a
parametrisation the authors themselves call "phenomenological… rather than physically motivated,"
not a local determination. Local RAR fits give ~1.2. This is not a claim that a₀(0) = 1.00 and must
not be used as one. It is a reason to stop describing the 13% gap as settled.

---

## The literature does not agree with itself

| Source | N, range | Finding on a₀(z) |
|---|---|---|
| Ciocan+2026 (arXiv:2604.22613) | 79, 0.33–1.44, RAR-fitted | grows, **faster than H(z)** |
| Gueorguiev 2024 (arXiv:2409.11425) | SIV revisit, 0.5–2.5 | log₁₀(a₀) z-slope **consistent with zero** |
| Milgrom 2017 (arXiv:1703.06110) | 6, 0.85–2.38 | ~4a₀ at z~2 "all but excluded" |
| RC100 2023 (arXiv:2209.12199) | 100, 0.6–2.5 | supersedes the six; f_DM 0.38 → 0.27 |

Branch (A) sits between the first and the third and is disfavoured by both, **from opposite sides**.
That is structurally the same shape as TEST-11's Cassini/SPARC empty intersection — except the two
bounding measurements are mutually inconsistent, so neither bound is yet firm. The honest status is
**engaged and disfavoured, not closed**.

## The structural gap: Milgrom's eq. (1) has two halves and the site quotes one

> 2πa₀ ≈ cH₀ ≈ c²(Λ/3)^{1/2}

`grep` over `src/app` returns **zero** occurrences of the Λ near-equality. It matters because the
two halves make opposite predictions: Λ does not evolve, H does. Any framework anchoring a₀ in
cosmology has to say which. The site anchors in H₀ and then declares itself "silent on H(z)", which
is not a third option — it is branch (A) with the consequence unstated.

Note that Ciocan+2026, if it holds, is **worse for the Λ anchor than for branch (A)**: a constant
a₀ is 0 evolution against a measured a₁ = 1.59. So the interesting outward-facing observation is
that a₀ evolving faster than H(z) embarrasses *both* of Milgrom's near-equalities, i.e. the whole
a₀-from-cosmology programme, not this framework specifically.

---

## What this licenses

**Does**: correct three specific errors on `/parameter-derivations` — a citation used for the
opposite of what it says, a tension described in the wrong direction, and a missing second anchor.
Convert "tension with high-z rotation curves" into a named, dated, quantified engagement.

**Does not**: change the refutation count. It stays at **6**. Branch (A) is disfavoured, not
refuted; the framework never committed to it; the literature is in conflict; and Ciocan's own
systematics (a_tot and a_bar from the same forward model, ~0.2 dex gas systematics, 1.5× the SPARC
scatter) are large. Anything stronger would repeat this morning's mistake at a larger scale.

**Reverses one prior claim of this project's own**: the 07-26 memory concluded a₀(z) closed as
"non-discriminating, not refuted," partly on the ground that high-z data can't reach the required
asymptotic velocities (Milgrom's BTFR objection). Ciocan+2026 does not use the BTFR route — it fits
the RAR directly — so that objection does not apply to it. The row is testable, has been tested,
and the site does not know the result.

---

## Action: Maintainer

1. `/parameter-derivations`, a₀ card — fix the citation role: 1703.06110 **tests** the idea; the
   proposals are 0801.3133 and ApJ 698, 1630 (2009).
2. Replace "dynamical, tension with high-z rotation curves" with the direction and the number:
   Ciocan+2026 measures a₀ growing *faster* than H(z) (a₁ = 1.59×10⁻¹⁰/z), putting branch (A)
   2.3–5.9σ **low** at z~1 depending on normalisation.
3. Add the second near-equality 2πa₀ ≈ c²(Λ/3)^{1/2} — currently zero site-wide mentions — and note
   it fares worse against Ciocan than branch (A) does.
4. Soften "13% below Milgrom" to note Ciocan's fitted intercept 1.00 ± 0.04, **with** the
   extrapolation caveat stated inline. Do not claim agreement.
5. Keep the count at 6, and say why, so the next persona that finds this doesn't file a 7th.
6. Add the RC100 supersession note wherever Genzel-2017 f_DM values are used or implied — this is
   the second session to nearly build something on them.

## Related

- `a0-epoch-prediction-dropped-in-transit.md` (2026-07-26) — same row, 5th distinct mishandling;
  its "don't cite the 2017 values as current" line is what caught my retraction.
- `locality-nogo-milgrom-prior-art-audit-executed.md` — same class: a site claim about the Milgrom
  corpus that changed on reading the actual paper.

## Sources

- Ciocan et al. 2026, MUSE-DARK III, A&A **709**, L16 (arXiv:2604.22613) — abstract and §3.2 read.
- Milgrom 2017, arXiv:1703.06110 — read in full, Table I transcribed.
- Nestor Shachar et al. 2023, RC100, ApJ **944**, 78 (arXiv:2209.12199).
- Gueorguiev 2024, arXiv:2409.11425 — SIV revisit, zero z-slope.
- Genzel et al. 2017, Nature **543**, 379 (arXiv:1703.04310).
- Milgrom, Phys. Lett. A **253**, 273 (1999) — the a₀–Λ connection.
