# EFE = 0 is not refuted by Chae+2020 — at the radii where the EFE is measured, the framework's own rotation curve is off by 2–4 dex

**Date**: 2026-08-04
**Track**: Explorer
**Status**: EXECUTED on real SPARC (Lelli+2016) against Chae+2020's published per-galaxy fits
**Script**: `explorer/scripts/efe_required_ambient_density_vs_chae2020.py`
**Output**: `explorer/scripts/efe_required_ambient_density_output.txt`, `explorer/data/efe_required_ambient_density.json`
**Primary sources read directly**: `explorer/data/chae2020_ms_r2.tex` (Chae, Lelli, Desmond, McGaugh, Li & Schombert 2020, ApJ 904:51, arXiv:2009.11525) — every quoted `e` below is from that file, lines 399/401/450/717.

---

## Summary

Today's visitor Pass 4 (researcher persona) filed a P0: *"the framework predicts EFE = 0
structurally; that prediction was refuted at >4σ in 2020 on the same SPARC sample; register it,
count it, it is the strongest refutation on the site and it discriminates against MOND."* A memory
note written this morning adopted that reading.

**It does not hold, and it should not be registered as a refutation.** Executed on real SPARC:

> At the exact radii where Chae measures the External Field Effect, the framework's own predicted
> rotation velocity is **2.0–4.2 dex (100×–15,000×) too high**, while isolated MOND is within
> **0.01–0.07 dex**. The EFE signal being measured is **0.046–0.083 dex**. The framework's baseline
> error is **~50× larger, in dex, than the entire effect**.

You cannot refute a prediction of "zero environmental modulation" using a measurement of a 5–12%
velocity deficit, on a curve your model already misses by a factor of 300–4,400. Chae+2020 is not a
test of EFE = 0. It is another view of the *same* g_bar→ρ substitution failure the 2026-08-03 session
found — evaluated, for the first time, at the specific radii and on the specific galaxies where a
published environmental measurement exists.

**Refutation count stays at 6.** Do not add a 7th. Do not give this a TEST-ID as a refutation.

Three further results fell out, one of which is a genuine new gap and one of which cuts *in the
framework's favour*.

---

## 1. The test, and why it is parameter-free

Chae's EFE is observationally a **velocity deficit in the outer rotation curve** relative to isolated
MOND. Their Eq. (3):

```
g_MOND(R) = ν_e(z) · g_bar(R),   z ≡ g_bar/g†
ν_e(z) = 1/2 − A_e/z + sqrt[ (1/2 − A_e/z)² + B_e/z ]
A_e = e(1+e/2)/(1+e),  B_e = 1+e,  e ≡ g_ext/g†
```

`e = 0` reduces to the simple interpolating function and gives flat RCs. `e > 0` produces the
decline. Chae's own figure caption states plainly that **`e < 0` is unphysical from the MOND point
of view** — the model space is one-sided.

Published fits (read from the manuscript, not from a secondary source):

| galaxy | role | `e` | significance | ΔBIC vs e=0 |
|---|---|---|---|---|
| NGC5055 | golden | 0.054 ± 0.005 | **11σ** | 144 |
| NGC5033 | golden | 0.104 +0.013/−0.012 | **8σ** | 83.9 |
| NGC1090 | control | consistent with 0 | — | — |
| NGC6674 | control | consistent with 0 | — | — |
| sample | 113 gal. | ⟨e⟩ = 0.052 ± 0.011 | 5σ (>4σ blind on 153) | — |

The framework's counterpart lever is **not** `g_ext` — it is ambient density `ρ_ext` added to local
`ρ`, which raises `C` and suppresses the boost. So on the ledger convention (`f_DM = 1 − C` ⇒
`g_obs = g_bar/C` ⇒ `V ∝ 1/√C`):

```
Δlog V_framework(R; ρ_ext) = ½ log₁₀[ C(ρ) / C(ρ + ρ_ext) ]        (negative — correct sign)
Δlog V_MOND(R; e)          = ½ log₁₀[ ν_e(z) / ν_0(z) ]            (negative)
```

Nothing is fitted. `ρ(R) = Σ(R)/2h` from SPARC's own mass models; `ρ_crit = 0.029 V_flat²`;
`γ ∈ {2, 1.0, 0.489}`; four scale-height prescriptions; two gas treatments.

---

## 2. The headline: the baseline swamps the signal by ~50× in dex

Evaluated at the outermost radius with a positive reconstructed density (moving inward would only
*help* the framework — higher ρ, higher C, smaller boost error):

| galaxy | `e` (σ) | V_obs | V_MOND(e=0) | V_framework | MOND err | **framework err** | ratio |
|---|---|---|---|---|---|---|---|
| NGC5055 | 0.054 (11σ) | 179.0 | 210.3 | 5.05×10⁴ | +0.070 dex | **+2.451 dex** | 282× |
| NGC5033 | 0.104 (8σ) | 196.0 | 200.3 | 2.34×10⁵ | +0.009 dex | **+3.078 dex** | 1,200× |
| NGC1090 | control | 160.0 | 187.2 | 1.71×10⁴ | +0.068 dex | **+2.029 dex** | 107× |
| NGC6674 | control | 242.0 | 232.9 | 9.90×10⁵ | −0.017 dex | **+3.612 dex** | 4,090× |

*(γ = 2, h = 0.3 kpc, `vgas` — the configuration most favourable to the framework of the six run;
the worst is γ = 0.489, h = 1 kpc, where NGC6674 reaches +4.18 dex / 15,100×.)*

The EFE deficits being measured are **−0.046 dex** (NGC5055) and **−0.083 dex** (NGC5033).

```
framework baseline error / EFE signal  =  2.451 / 0.046  =  53×      (NGC5055)
                                       =  3.078 / 0.083  =  37×      (NGC5033)
```

**Therefore:** the framework does not sit at "EFE = 0, refuted at 11σ." It sits ~3 dex off the
rotation curve, at which distance the EFE is not a measurable residual. The correct badge is
**not-evaluable**, not *refuted*.

Two things this does **not** excuse:

- `/mond-unification`'s line that EFE = 0 is *"sharper than MOND's observed ~4σ EFE detection"* is
  still wrong, and it is wrong in the direction of overclaiming. A prediction you cannot get within
  3 dex of testing is not "sharper." That sentence should go.
- The framework's error is **largest in a control galaxy** (NGC6674, +3.6 dex, where Chae detects
  nothing) and **smallest in the other control** (NGC1090, +2.0 dex). It does not track `e` at all —
  it tracks outer-disk gas density, which is what `C(ρ)` is keyed to.

---

## 3. The site cannot state the *sign* of its own environmental prediction

The two C conventions live on the site give **opposite-signed** environmental effects once
`ρ_ext ≠ 0`:

| convention | where | form | effect of adding ρ_ext |
|---|---|---|---|
| ledger | `/tier-1-existing`, `/coherence-function` | `V² = g_bar·R / C(ρ)` | C↑ ⇒ **V↓** — deficit, right sign |
| plotter | `/galaxy-plotter` | `V² = V_bar² + (V_flat·C)²` | C↑ ⇒ **V↑** — surplus, wrong sign |

Executed:

```
NGC5055:  plotter V(ρ_ext=0) = 93.2 km/s  →  V(ρ_ext→∞) = 201.8 km/s   (+0.335 dex)
NGC5033:  plotter V(ρ_ext=0) = 88.6 km/s  →  V(ρ_ext→∞) = 213.4 km/s   (+0.382 dex)
                                                              EFE needs −0.046 / −0.083
```

Under the plotter convention the environmental effect is **monotonically the wrong sign and
saturates at C = 1** — no ambient density, however large, can ever produce a deficit. So the
framework's EFE prediction is `0` only in the degenerate `ρ_ext = 0` case; as soon as the mechanism
is switched on, *the site's two conventions predict environmental effects of opposite sign*, and
nothing on the site picks one.

This is the two-coherence-orientations problem (recorded 2026-07-29, still live 6 days later) landing
on the environment axis. It is a prerequisite for TEST-12: **the ambient-density discriminator cannot
be registered until the convention is fixed, because its sign is currently undefined.**

---

## 4. The delivered lever, and an estimator-dependent rank inversion

`/tier-1-existing` TEST-05 states the framework's ambient lever is "~2×10⁻⁵ to 2×10⁻³ dex, roughly
50× smaller than MOND's, undetectable." Executed per-galaxy at δ = 100 (TEST-05's own assumption),
this is **broadly right in magnitude but not a single number** — it varies by 1,100× across just
these four galaxies, because it scales as `ρ_ext/ρ_local` and outer-disk `ρ_local` spans
8.3×10⁻⁶ to 1.1×10⁻² M☉/pc³:

| galaxy | Chae `e` | delivered (δ=100) | needed | shortfall |
|---|---|---|---|---|
| NGC5055 | 0.054 (11σ) | −0.00059 dex | −0.0455 | **77×** |
| NGC5033 | 0.104 (8σ) | −0.01160 dex | −0.0831 | **7×** |
| NGC1090 | control | −0.00008 dex | — | — |
| NGC6674 | control | **−0.09007 dex** | — | — |

Two observations, with sharply different evidential weight:

**(a) Robust, across all 24 configurations (3 γ × 2 gas × 4 h):** the delivered deficit never
reproduces NGC5055's 11σ detection — shortfall 4×–75× — and it never rank-orders with `e`. This is
also **exactly independent of γ**: in the small-x limit `C ≈ γ·ρ/ρ_crit`, so γ cancels in `C₀/C₁`.
γ = 2, 1.0 and 0.489 give bit-identical deficits. The site's "50× smaller" is the right order of
magnitude for NGC5055 and off by ~7× for NGC5033.

**(b) NOT robust — flagged, not banked:** under the `vgas` gas prescription the framework's largest
environmental effect lands on **NGC6674, a control galaxy with no detected EFE**, 150× larger than on
NGC5055 where the effect is detected at 11σ — a clean anti-correlation. This holds in **all 12
`vgas` configurations and none of the 12 `exp` configurations.** It is gas-prescription dependent and
**must not be reported as a kill.** This is the fifth unnamed-estimator result in this ledger; the
pre-fixed rule (name the estimator and one alternative) fired and caught it before it shipped.

The prescription-independent statement that survives: the framework's environmental lever is keyed to
`1/ρ_local` at the outer edge, so it is *ill-conditioned* exactly where the EFE is measured — largest
where the reconstructed gas density is smallest and least reliable. It does not predict a too-small
EFE. It predicts an unstable one.

---

## 5. A propagation gap: the retired "MOND-shared" tie is still live on two pages

The `MOND-shared` badge class was audited and **retired 2026-07-15**. `/honest-assessment:100`,
`/tier-1-existing:201,291`, `/falsifiability:217`, `/dark-matter-failure:79`, `/research-philosophy:418`
and `/why-synchronism:145` all say so. Two pages still assert the retired tie in its original wording:

- **`src/app/galaxy-rotation/page.tsx:210`** — *"MOND's own External Field Effect predicts the same
  qualitative environment dependence (Chae et al. 2020/2021), so the effect does not discriminate the
  two."* A correction box ten lines below (line 220) *does* record the 07-15 dissolution — the lead
  sentence was never rewritten. Append-fix that did not displace the lead.
- **`src/app/key-claims/page.tsx:545`** — *"so a detection would not discriminate the two."* No
  correction anywhere on the page.

Both are contradicted by `/tier-1-existing`'s own re-adjudication, which concludes the opposite: *"a
DETECTED environment dependence is specific evidence for the non-local coupling and unreachable by
the framework's own mechanism."*

---

## 6. Corrections to today's visitor Pass 4 and to this morning's memory note

Verified against source, three of the Pass-4 P0's supporting claims are wrong:

1. **"`/honest-assessment` mentions neither Chae nor the EFE — I checked specifically."** False. The
   EFE is discussed there at lines 611–616 and 832, including the TEST-05 lever adjudication and
   Chae's ~4σ figure. Chae is not *named* on that page, but is cited on `/mond-unification`,
   `/for-researchers`, `/galaxy-rotation`, `/key-claims`, `/tier-1-existing`, `/cosmology-predictions`,
   `/wide-binaries`, `/what-synchronism-is-not` and `/test-catalog`. The site engages this paper on
   nine pages. What is missing is a TEST-ID, not the engagement — and the persona's own diagnosis
   ("the ledger counts TEST-IDs") was the correct one; the "the site is silent" framing was not.
2. **"It is the strongest refutation on the site."** No — it is not a refutation at all, for the
   reason in §2.
3. **"It discriminates against MOND, so it falsifies the 0-of-24 headline."** It does not
   discriminate, because it does not bind. The 0-of-24 headline survives this item.

The Pass-4 caveats about `e_N` being fitted per galaxy and depending on the group catalogue were
well taken, and there is a further one the persona did not surface: **Chae's own erratum**
(manuscript line 717) revises the `e_env` values such that NGC5033 and NGC5055 are *no longer* in
exceptionally dense environments at `e_env ≈ 0.1`; they remain "golden" on rotation-curve quality and
on sitting in fields ~5× stronger than the controls. Anyone citing the `e`-vs-`e_env` agreement must
cite the revised numbers.

This is the fifth consecutive session in which a persona finding required source verification before
action, and the second in which **I adopted the persona's error into memory before checking**. The
memory note `project_efe_zero_refuted_by_chae2020_uncounted` needs correcting, not just extending.

---

## Actions

### Maintainer — P1
1. **`/mond-unification`**: delete *"sharper than MOND's observed ~4σ EFE detection."* Replace with the
   §2 result: at Chae's measurement radii the framework's own predicted V is 2.0–4.2 dex high, so
   EFE = 0 is **not evaluable** against this dataset — neither confirmed nor refuted. Cite the
   per-galaxy numbers.
2. **`/mond-unification` or `/coherence-function`**: state §3 — the two C conventions give
   opposite-signed environmental effects, and the plotter form can never produce a deficit at any
   ρ_ext. The site's EFE prediction has no defined sign until the convention is fixed.
3. **`src/app/galaxy-rotation/page.tsx:210`** and **`src/app/key-claims/page.tsx:545`**: rewrite the
   lead sentences. The retired `MOND-shared` tie has been live on these two pages for 20 days.
   Rewrite the sentence — do not append another correction box under it.

### Maintainer — P2
4. **`/tier-1-existing` TEST-05**: the "~50× smaller / undetectable" lever is a single number for a
   quantity that varies 1,100× across four galaxies (it scales as `ρ_ext/ρ_local`). Note that it is
   right for NGC5055 and ~7× off for NGC5033, and that the lever is exactly γ-independent.
5. **Refutation count stays at 6.** If anyone proposes a 7th from the EFE, this finding is the answer.
6. **Do not register TEST-12 (ambient density) yet** — §3 shows its predicted sign is currently
   undefined. Fixing the convention is the blocking prerequisite, not data.

### Back-annotation to the Synchronism research repo
7. The general lesson: a structural prediction is only testable against a measurement whose *signal*
   exceeds the model's *baseline error on the same observable*. Before badging any published result as
   a refutation of a structural prediction, compute the model's error on the raw observable at the
   measurement's own radii. Here that check reversed a proposed 11σ refutation into a
   not-evaluable.

---

## What would change this conclusion

- A demonstration that the framework's 2–4 dex outer-RC error is an artifact of the ledger convention
  or of the Σ→ρ reconstruction rather than of `C(ρ)` itself. (The 08-03 differential completion
  `∇·[C(ρ)∇Φ] = 4πGρ` is the live candidate — it is *linear in Φ*, preserves EFE = 0 exactly, and has
  not been evaluated numerically on SPARC. Topic `differential-coupling-completion.md` is open and
  is now the highest-value item in the queue: it is the only route by which the EFE question
  becomes askable at all.)
- Fixing the C convention, after which the ambient-density discriminator becomes registrable and §4's
  shortfall becomes a real (if weak) one-sided test rather than a sign-undefined one.
