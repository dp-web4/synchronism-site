# Finding: TEST-02 Condition (b) Computed — the Wide-Binary Sector Is the Third C(a)→C(ρ) Fork, and the Live Site States the Density-Dependence Backwards

## Origin

Topic `test-02-wide-binary-efe-divergence-computation.md` (HIGH, seeded by maintainer
2026-06-05 from visitor Pass 4). The question, verbatim from the leading-edge researcher
persona:

> "For TEST-02 to ever discriminate, you need (a) the wide-binary anomaly to be real,
> (b) a computed Synchronism–EFE divergence, and (c) that divergence to exceed Gaia
> precision. Has anyone computed (b)? Without it, TEST-02 isn't a prediction, it's a
> placeholder."

Condition (b) had never been computed. This finding computes it — and the answer
reframes TEST-02 more sharply than "uncomputed placeholder."

Script: `explorer/scripts/test02_wide_binary_efe_divergence.py` (reproduces every number).

## Summary

Three results, in order of importance:

1. **The framework has two incompatible wide-binary predictions, and they are the two
   horns of the same C(a)→C(ρ) migration fork that closed the galaxy/EFE sector.**
   - **C(a) form** (Session #238, Jan 2026): boost = 1/√C(a) is an explicit MOND
     interpolation function (golden-ratio exponent + Ω_m floor); it *predicts* the
     MOND-like anomaly, "fits slightly better than MOND" (χ²=9.6 vs 11.3), and caps at
     1/√Ω_m = 1.78× velocity. → **Measurable, but it IS MOND** (no discrimination), and
     it is the *bounded* form whose 1/Ω_m = 3.17 gravity ceiling the 2026-06-03
     boost-ceiling finding already showed is refuted by the SPARC RAR.
   - **C(ρ) form** (Session #579 onward, Feb 2026): boost = 1/√C(ρ_local), where ρ_local
     is set by the *galactic environment* (≈ constant across the solar-neighborhood
     sample), calibrated 80× below Gaia reach. → **Structurally distinct from MOND, but
     it predicts ~Newtonian behavior** (≈0.05–0.4% in the clean sample). It sits on the
     Newtonian side, not the MOND side.

   This is the *exact* fit-XOR-discriminate fork of the RAR transition shape (γ=2 refuted
   / γ-free = MOND) and the EFE/TDG boost ceiling. The wide-binary sector is the **third
   independent sector** to resolve identically, all hinging on the C(a)→C(ρ) migration.

2. **Condition (b), computed:** Synchronism-C(ρ) and MOND+EFE do *not* make the same
   prediction (contra the site's "EFE-degenerate" label for this form) — they make
   **opposite** ones. For a representative 1.5 M☉, 20 000 AU binary at the solar circle,
   Synchronism-C(ρ) predicts a velocity deviation of 0.05% (midplane) rising to 0.4% at
   |z|=250 pc; MOND+EFE predicts ~18%. They diverge by a factor of ~360 — but because
   Synchronism-C(ρ) is on the Newtonian side, **TEST-02 can refute Synchronism-C(ρ) (a
   real anomaly, à la Chae, kills it) but cannot confirm it over plain GR** (a null, à la
   Banik, is indistinguishable from Newton). This is S654's "refutable but not
   confirmable" asymmetry, now with the mechanism attached.

3. **The live site states the density-dependence with the sign reversed.**
   `tier-1-existing/page.tsx:38` reads: *"systems in higher-density environments should
   show stronger … deviation from Newtonian dynamics."* The framework's own mechanism
   gives the opposite: g_eff = g_N/C(ρ) with low ρ → low C → **large** boost. Verified
   against three archive sources — Session #579 ("high ambient ρ → higher coherence →
   LESS boost"), Session #369 ("Anomaly ∝ 1/√(stellar_density)"), and C(ρ)'s monotonicity.
   **Higher density → *weaker*, not stronger, deviation.** This is a correctness bug on a
   primary test page, not a framing nit.

## Research Notes

### The decisive variable: height z, not separation or Galactocentric radius

Condition (b) sounds like it needs a single number — "the Synchronism vs MOND+EFE slope."
It doesn't, because along the two obvious axes the comparison is *trivially* degenerate or
trivially divergent:

- **Along separation s** (fixed location): MOND's boost rises with s (internal
  acceleration falls below a₀); Synchronism-C(ρ)'s boost is *flat* (ρ_local doesn't depend
  on how wide the binary is). Divergent, but Synchronism is just flat-Newtonian.
- **Along Galactocentric radius R**: both ρ_local and g_ext fall outward and are tightly
  correlated (g ∝ ρ for disk geometry — Session #579's point). Degenerate.

The clean discriminator lives where the two state variables **decouple**: *vertical height
z above the Galactic plane, at fixed R.* There:

- local mass density ρ(z) falls steeply (disk scale height ~300 pc): ρ drops ~6× from
  midplane to z=1 kpc;
- the external field |g_ext|(z) is nearly flat and, if anything, *rises* slightly with z
  (the vertical component K_z = 2πGΣ(z) adds in quadrature to the ~constant radial field):
  1.79 a₀ → 1.81 a₀ over the same range.

So the predicted vertical gradient of the boost has **opposite sign** in the two theories:

| | midplane | z = 1 kpc | gradient |
|---|---|---|---|
| Synchronism-C(ρ) velocity dev | 0.05% | 6.1% | **+ (rises with height)** |
| MOND+EFE velocity dev | 18.23% | 18.07% | **− (falls slightly)** |

This is the wide-binary analogue of the RAR's local-ρ-vs-non-local-g_bar structural no-go:
a pointwise density function tracks ρ(z); an acceleration relation tracks the non-local
field g_ext(z); they decouple vertically, and *that* decoupling is the only place the two
can be told apart. The sign of d(boost)/dz is independent of ρ_crit and of the MOND
interpolation choice — it is purely "ρ falls with z, g_ext doesn't."

### Why the surviving discriminator is still unmeasurable

The opposite-sign vertical gradient exists in principle. It fails in practice for two
compounding reasons:

1. **Amplitude.** Synchronism-C(ρ)'s deviation is 80× below Gaia reach at the midplane by
   the framework's own derived ρ_crit. It only grows to a measurable few-percent at
   z ≳ 1 kpc.
2. **The divergent regime is the worst-data regime.** The clean wide-binary samples
   (Banik+2024, Pittordis & Sutherland — within ~250 pc of the Sun) barely span |z| < 250
   pc, where Synchronism is still <0.4%. The z ≳ 1 kpc binaries where the gradient becomes
   visible have degraded parallaxes, higher contamination, and sparse statistics.

So the discriminator that survives the degeneracy is killed by measurability — the same
fit-XOR-measure structure as the rest of the program.

### Robustness to the density-choice ambiguity

It does not matter whether C reads the *environmental* density or the binary's *own* mean
density (M/s³): both leave Synchronism-C(ρ) ≈ Newtonian in the accessible sample. The
binary's own density at 20 000 AU is ~10² M☉/pc³ — far above ρ_crit → C ≈ 1 → no boost.
The environmental density is ~0.1 M☉/pc³ and ~constant → ~no separation dependence. The
null prediction is robust to the modeling choice; only the C(a) form escapes it, and that
is by construction a MOND interpolation.

### Two internal-consistency problems this surfaces

- **Three mechanisms, one of them sign-confused.** Session #238 (C(a), acceleration),
  Session #579 (C(ρ), explicit-density channel), and Session #369/#370 (anomaly ∝ γ_local
  = 2/√N_corr ∝ 1/√ρ) are three distinct wide-binary mechanisms. The first predicts the
  MOND anomaly; the latter two predict a (sub-threshold) density trend in the *low-ρ →
  more* direction. The live site picked the *opposite* sign. TEST-02 isn't one uncomputed
  number — its prediction is underdetermined at the level of the mechanism.
- **A third non-universal ρ_crit.** Matching "80× below reach" at the solar circle
  requires ρ_crit ≈ 0.018 M☉/pc³ for the wide-binary regime — different again from the
  galaxy-rotation ρ_crit and the cluster ρ_crit (10⁴–10⁶× smaller). Reinforces the
  one-scale-insufficiency / per-regime-calibration pattern.

## Implications for the Site

The current TEST-02 framing has three defects: (1) the prediction sign is backwards;
(2) "EFE-degenerate" mischaracterizes the C(ρ) form, which is not degenerate with MOND+EFE
but predicts the Newtonian *null*; (3) it presents condition (b) as an open computation
when the computation closes the sector. The honest status: **TEST-02 inherits the
fit-XOR-discriminate fork — the C(a) form that predicts the anomaly is MOND (and
RAR-dead); the C(ρ) form that is distinct from MOND predicts ~Newtonian and so can only
refute, never confirm.**

## Action: Maintainer

### `/tier-1-existing` — TEST-02 prediction string (CORRECTNESS, P0)

Replace (line 38):

> ~~"systems in higher-density environments should show stronger … deviation"~~

with the framework's actual mechanism:

> "systems in **lower**-density environments should show **stronger** deviation
> (g_eff = g_N / C(ρ); low ρ → low coherence → larger boost). Per Sessions #369 and #579,
> anomaly ∝ 1/√(local density)."

### `/tier-1-existing` — TEST-02 alert (replace the "uncomputed / EFE-degenerate" note)

> **Condition (b) computed (2026-06-05).** Synchronism's wide-binary prediction splits on
> the C(a)→C(ρ) form choice. The acceleration form C(a) (Session #238) *is* a MOND
> interpolation — it predicts the anomaly but is not distinct from MOND, and is the
> bounded form (cap 1/Ω_m = 3.17) refuted by the SPARC RAR. The density form C(ρ)
> (Session #579) is structurally distinct from MOND but predicts ~Newtonian behavior
> (≈0.05–0.4% velocity deviation in the clean within-250-pc sample, vs MOND's ~18%) — it
> sits on the Newtonian side. The only locus where C(ρ) and MOND+EFE diverge by *direction*
> rather than amplitude is the vertical gradient at fixed Galactocentric radius
> (Synchronism boost rises with height as ρ falls; MOND+EFE is flat-to-falling as g_ext
> rises) — but that regime (z ≳ 1 kpc) is exactly where Gaia parallaxes degrade.
> **Net: TEST-02 can refute Synchronism-C(ρ) (a real anomaly kills it) but cannot confirm
> it over GR.** Refutable, not confirmable — the same status as the rest of the program.

### `/honest-assessment` — extend the structural no-go / galaxy-program closure section

Add the wide-binary sector to the C(a)→C(ρ) fork already named for RAR and EFE:

> **Wide binaries (TEST-02) close on the same fork (2026-06-05).** The acceleration form
> predicts the anomaly but equals MOND and is RAR-refuted; the density form is distinct
> from MOND but predicts the Newtonian null. The local-ρ-vs-non-local-g_ext decoupling
> (vertical gradient) is the wide-binary face of the same structural no-go as the RAR's
> local-ρ-vs-non-local-g_bar mismatch.

### Back-annotation to Synchronism repo

File `Research/proposals/test02_wide_binary_caρ_fork_and_sign.md`: (1) the wide-binary
prediction is underdetermined — Sessions #238 (C(a)), #579 (C(ρ)), and #369 (γ∝1/√ρ) are
three mechanisms; (2) the C(a)→C(ρ) migration flipped the wide-binary prediction from the
MOND side to the Newtonian side, exactly as it did the EFE/TDG sector (2026-06-03); (3) the
public site states the density-dependence with the sign reversed; (4) recommend the archive
commit to one mechanism and state explicitly that the C(ρ) form predicts the Newtonian null
(refutable, not confirmable).

## Open Threads

1. **The C(a) wide-binary fit vs the RAR refutation.** Session #238 reports C(a) "fits
   slightly better than MOND" on Gaia wide binaries (χ²=9.6), while the same bounded C(a)
   is RAR-refuted at ΔBIC=+184 on SPARC. Both used real data. Worth a direct note: the
   wide-binary χ² is on ~4 coarse acceleration bins with ±0.1–0.3 errors (low
   discriminating power), whereas the RAR test is 2807 points — the wide-binary "better
   fit" is not in tension with the RAR refutation, it is just far less constraining.
2. **Does anyone's clean sample actually reach z ≳ 1 kpc?** If a future Gaia DR4 wide-binary
   catalog spans enough vertical range with good parallaxes, the opposite-sign vertical
   gradient becomes a real (if amplitude-marginal) test. Until then it is the wide-binary
   analogue of the cluster bridge — structurally divergent, practically silent.

## Sources

- Session #238 (`Research/Session238_Wide_Binary_Analysis.md`) — C(a) form, χ² vs MOND, EFE.
- Session #369/#370 (`Research/Session369_Data_Analysis.md`, `Session370_Protocol_Design.md`)
  — anomaly ∝ 1/√(stellar density) = γ_local.
- Session #579 (`Research/Session579_Wide_Binary_Landscape.md`) — C(ρ) form, EFE confound,
  the explicit low-ρ→more-boost direction.
- Session #637 / #654 (`Session654_Tier1_MOND_EFE_Discriminator_Gap.md`) — 80×/120× below
  reach; refutable-not-confirmable asymmetry.
- Prior explorer finding: `efe-boost-ceiling-closure.md` (2026-06-03) — the C(a)→C(ρ) fork
  for the EFE/TDG sector.
- Wide-binary observational dispute: Chae (2023, MNRAS 525, 1401); Pittordis & Sutherland
  (2023, MNRAS 527, 4573); Banik, Pittordis, Sutherland et al. (2024, MNRAS 528, 4720).
- Script: `explorer/scripts/test02_wide_binary_efe_divergence.py`.
