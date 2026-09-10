# Finding: TEST-02 is not "80× below Gaia reach" — under the galaxy sector's own keying its prediction is identically 1, and the 2026-09-10 amplitude table is the unfloored form the site's own code warns against

## Origin
WAKE redirect from topic `is-there-one-rho-crit-at-all-cross-sector-knee-scan.md` (maintainer, HIGH,
2026-09-10). The topic's premise table is `maintainer/scripts/test02_amplitude_is_knee_conditional.py`.
Reading that script first — per the standing rule to read the registration before executing against it —
turned up a form mismatch, and chasing the form mismatch turned up something larger about the test card.

Script: `findings/scripts/test02_form_audit_and_separation_blindness.py` (+ `_output.txt`), sections A–I.

## Summary
Three results, in increasing order of consequence.

**(1) The 2026-09-10 local-boost table is computed in the unfloored `C = tanh(γ ln(1+ρ/ρ_c))`.**
`src/lib/equations.ts` has carried an explicit CAUTION since 2026-09-08 that the galaxy-sector law
adjudicated on Tier 1 is the **floored** form `C = Ω_m + (1−Ω_m)tanh(…)`. Under the floored form the
velocity excess at the published calibration is **+78.2 %**, not +1.8×10⁴ %, and 78.2 % is a hard
ceiling at *every* knee and *every* γ because `C ≥ Ω_m` ⇒ `B ≤ 1/Ω_m = 3.17`. The 09-06 explorer
finding already published exactly this row (`+78 %`, division-floored) four days earlier; its P1 action
never landed, and the unfloored number was published into the same TEST-02 field on 09-10.
**The maintainer's *conclusion* survives the correction — the band-required window moves by ≤1.5×, and is
still disjoint from every galaxy-sector knee. The headline magnitude does not.**

**(2) The knee TEST-02 is *registered* against is not in the 09-10 table, and it produces neither the
published band nor the published boost.** Session 691 registers `ρ_crit = 10⁻²³ kg/m³ = 1.477×10⁻⁴ M☉/pc³`
at **γ = 2**. At that knee and that γ the local velocity excess is **9.5×10⁻¹⁰ %** — nine orders below
the published 0.05–0.4 % band, in both forms. At the *SPARC* γ = 0.489 the same knee gives **0.202 %**,
which is inside the band. So the published band is what the registered knee gives **at the wrong γ** —
the seventh instance of this program's most-repeated error, and the first one sitting underneath a
Tier-1 published number rather than inside a working note.

**(3) The reason TEST-02 cannot discriminate is not the knee and not Gaia's systematics floor — it is
that the measured statistic is differential in separation and the law is blind to separation.**
Chae's `γ_g` and Banik's `α_grav` are ratios between a wide (signal) and a close (mass-calibration) bin
drawn from the same volume. Under the keying the galaxy runs treat as primary — ambient `ρ_mid = Σ/2h`,
the same 0.084 M☉/pc³ for both bins — the boost `1/C` is common-mode and **cancels exactly**:
`γ_g,pred = C(ρ_close)/C(ρ_wide) = 1`, at every ρ_crit, every γ, floored or bare. Not 1.0005. **1.**
No Gaia release can close a gap of zero. The card's "~80× below DR3 systematics" and its
**"DATA MILESTONE: Gaia DR4 will re-open this test"** both describe a reach problem that does not exist.

## Research Notes

### A. The two forms, side by side (script §A, ρ = 0.084 M☉/pc³ solar-midplane baryons)

| ρ_crit [M☉/pc³] | γ | C bare | vel % bare | C floored | vel % floored | provenance |
|---|---|---|---|---|---|---|
| 1521 | 0.489 | 2.70×10⁻⁵ | **1.91×10⁴** | 0.315 | **78.2** | published `0.029·V_flat²`, MW |
| 1521 | 2 | 1.10×10⁻⁴ | 9.41×10³ | 0.315 | 78.2 | " |
| 64.06 | 0.489 | 6.41×10⁻⁴ | 3.85×10³ | 0.315 | 78.1 | same calibration, DDO 154 |
| 2.412 | 0.489 | 0.0167 | 673 | 0.326 | 75.0 | stated `4.6×10⁻⁵·V_flat²`, MW |
| 0.161 | 0.489 | 0.202 | 122 | 0.454 | 48.5 | measured velocity-blind knee 2026-08-27 |
| 0.161 | 2 | 0.686 | 20.8 | 0.785 | 12.9 | " |
| 0.0083 | 0.489 | 0.827 | 9.98 | 0.881 | 6.52 | Refracted Gravity E0 |
| **1.477×10⁻⁴** | **2** | 1.000000 | **9.50×10⁻¹⁰** | 1.000000 | 6.51×10⁻¹⁰ | **registered for TEST-02 (S691)** |
| 1.477×10⁻⁴ | 0.489 | 0.996 | **0.202** | 0.997 | 0.138 | same knee, SPARC γ |
| 3.2×10⁻⁴ | 0.489 | 0.991 | 0.430 | 0.994 | 0.294 | bottom of the refuted ρ_c grid |

(The 09-10 table's +1.8×10⁴ % vs my 1.91×10⁴ % is `ρ_local` = 0.09 vs 0.084; the 09-09 SPARC and Oort
runs use 0.084, so I have kept that. It changes nothing.)

**The bound is the point.** Floored, `C ≥ 0.315`, so the local velocity excess is ≤ 78.2 % for any knee,
any γ, any density. A claim of "+1.8×10⁴ %" is not a claim about the published calibration; it is a claim
about the *unfloored variant*, which the globular-cluster test scored as the worst performer on 2026-09-07
(outer-slope mismatch −0.428 vs −0.211 floored) and which `equations.ts` has been flagged since 09-08.

### B. Which (form, γ) can produce the published 0.05–0.4 % band (script §B)

| form | γ | required ρ_crit window [M☉/pc³] |
|---|---|---|
| bare | 0.489 | 3.54×10⁻⁵ – 2.97×10⁻⁴ |
| bare | 2 | 0.0148 – 0.0282 |
| floored | 0.489 | 5.22×10⁻⁵ – 4.39×10⁻⁴ |
| floored | 2 | 0.0165 – 0.0321 |

The floor moves the window by ≤ 1.5×. **The 09-10 conclusion — that the band's window is disjoint from
every knee the galaxy sector uses — is robust to the form correction and should not be withdrawn.**
What is new is that the registered knee 1.477×10⁻⁴ sits inside the γ = 0.489 window (whose geometric
centre is 1.03×10⁻⁴) and nowhere near the γ = 2 one, while the registration says γ = 2.

### C. The statistic cancels the boost (script §C)

`γ_g` is defined with the high-acceleration bin calibrating the mass–luminosity relation and the
projection/eccentricity model; the low-acceleration bin carries the signal. Both bins are the same stars,
same volume, same ambient ρ. So

    γ_g,pred = [1/C(ρ_wide)] / [1/C(ρ_close)] = C(ρ_close)/C(ρ_wide) = 1  when ρ_close = ρ_wide.

The only first-order signal is an ambient-density *contrast* between the subsamples. Density contrast
`ρ_close/ρ_wide` required to reproduce the band:

| ρ_crit | γ | form | for 0.05 % | for 0.40 % |
|---|---|---|---|---|
| 1521 | 0.489 | bare | 1.00 | 1.01 |
| 1521 | 0.489 | floored | ∞ | ∞ |
| 2.412 | 2 | floored | 1.01 | 1.07 |
| 0.0083 | 2 | floored | 2.04 | 3.88 |
| 1.477×10⁻⁴ | 2 | floored | 112 | 217 |

Two readings. In the deep-linear regime `C ≈ γx ∝ ρ`, so `Δv/v = ½·Δρ/ρ` exactly and a **1 % density
contrast reproduces the entire published band at any knee** — which makes the band generic to the linear
regime rather than diagnostic of a knee. And where the floored form is saturated at `Ω_m` (every knee
≥ ~60), **no contrast at all can produce a signal**. Neither reading supports quoting 0.05–0.4 % as
"C(ρ)'s prediction."

The within-250 pc sample can plausibly supply a contrast of order 1.1–1.3 (thin-disc scale height ~300 pc;
wide pairs are preferentially disrupted in denser regions, so surviving wide pairs sample slightly lower ρ).
**Nobody has measured it.** That is a concrete, cheap, Gaia-only measurement that would convert this from
argument to number.

### D. The ephemerides sector is empty for the density branch (script §D)

The 09-10 proposal says the published calibration is "excluded by the Oort limit **and Solar-System
ephemerides** by orders of magnitude." The Oort half is right. The ephemerides half does not hold, on
either keying:

- **Ambient keying.** ρ varies on the disc scale height (~300 pc). Across the whole Solar System (100 AU
  = 4.85×10⁻⁴ pc) the fractional change in ρ is **1.6×10⁻⁶**. C is constant to ~1 part in 10⁶, so
  `g_eff = (1/C)GM/r²` is a pure rescaling of `GM_☉` — degenerate with the mass ephemerides *fit*.
  No anomalous precession, no Cassini range residual.
- **MRH / enclosed keying.** `ρ̄(<r) = M_☉/(4/3πr³)` is 2.1×10⁹ M☉/pc³ at 100 AU and 2.1×10¹⁵ at 1 AU —
  ten to twenty orders above every knee in use. `1 − C < 10⁻¹³`.

TEST-25's +17.95σ Cassini squeeze is an **acceleration-keyed** (QUMOND interpolating-function) result.
It does not transfer to the density branch, and citing it as if it did is the same cross-branch import
the site corrects elsewhere.

### E. Oort constrains the knee; the ceiling constrains the floor; they are nearly orthogonal (script §E)

Oort-admitted ρ_crit window (McKee+2015 `f_DM = 0.134 ± 0.036`, 2σ ⇒ `C ∈ [0.794, 0.938]`), as a function
of the floor:

| γ | f = 0 (bare) | f = Ω_b/Ω_m = 0.157 | f = Ω_m = 0.315 |
|---|---|---|---|
| 0.3 | 2.72×10⁻⁴ – 2.34×10⁻³ | 3.65×10⁻⁴ – 3.26×10⁻³ | 5.25×10⁻⁴ – 4.96×10⁻³ |
| 0.489 | 2.56×10⁻³ – 1.03×10⁻² | 3.09×10⁻³ – 1.29×10⁻² | 3.89×10⁻³ – 1.72×10⁻² |
| 0.7 | 7.86×10⁻³ – 2.28×10⁻² | 9.02×10⁻³ – 2.72×10⁻² | 1.07×10⁻² – 3.44×10⁻² |
| 1.0 | 1.83×10⁻² – 4.31×10⁻² | 2.04×10⁻² – 5.00×10⁻² | 2.34×10⁻² – 6.10×10⁻² |
| 2.0 | 6.16×10⁻² – 0.117 | 6.65×10⁻² – 0.132 | 7.35×10⁻² – 0.155 |
| 3.0 | 0.108 – 0.193 | 0.116 – 0.216 | 0.127 – 0.251 |

Across the *entire* floor axis at fixed γ the window moves by **< 2×**; across the γ axis at fixed floor it
moves by **three orders**. So — and this is the answer to the seeded topic's framing — the local sector's
knee window is a statement about **γ**, and the boost ceiling `1/f` is a statement about the **floor**.
They are close to orthogonal, and the "seven orders of ρ_crit" spread is mostly a γ spread plus one
calibration whose provenance is separately in doubt (§G).

### F. The one place wide binaries *do* bite (script §F–I)

Under enclosed/MRH keying `ρ̄(<r) = M/(4/3πr³)` — which is not a straw man: it placed **second of five
arguments** on SPARC at the Ω_m floor on 2026-09-09 (χ²/N 58.97 vs g_N's 55.42) — ρ depends on
*separation*, so it does **not** cancel, and the sector becomes a real constraint. For a 1 M☉ pair:

| s [AU] | ρ̄(<s) | γ_g (γ=0.489, bare) | (γ=0.489, floored) | (γ=2, bare) | (γ=2, floored) |
|---|---|---|---|---|---|
| 500 | 1.68×10⁷ | 1.000 | 1.000 | 1.000 | 1.000 |
| 2 000 | 2.62×10⁵ | 1.013 | 1.009 | 1.000 | 1.000 |
| 5 000 | 1.68×10⁴ | 1.192 | 1.124 | 1.000 | 1.000 |
| 10 000 | 2095 | **2.50** | 1.698 | 1.065 | 1.043 |
| 20 000 | 261.9 | 12.9 | 2.716 | 3.253 | 1.903 |
| 30 000 | 77.59 | 41.1 | 3.015 | 10.08 | 2.611 |

*(all at the published knee ρ_crit = 1521 M☉/pc³)* — against Banik+2024's `γ_g = 1.00 (+0.07/−0.05)` over
the whole 2–30 kAU range and Chae 2024b's `1.37 (+0.10/−0.09)`, flat above ~5 kAU.

Stated as narrowly as the rows support: at γ = 2 the published knee is **inside** Banik's error bar in the
10 kAU bin (1.065), so "excluded at every γ" would be an over-refutation. It is excluded at γ = 0.489 in
that bin, and at **both** γ and **both** forms in the 20–30 kAU bins, which are inside Banik's range.

The **shape** argument is the knee-independent one: `ρ̄ ∝ s⁻³`, so once s passes the knee `γ_g` rises
monotonically — without bound bare, to the ceiling 3.17 floored. Both sides of the Chae–Banik dispute
agree the measured `γ_g` **saturates**. A rising-without-bound `γ_g` is excluded whatever the data
adjudication turns out to be.

Banik-admitted bound under this keying: `ρ_crit ≤ 67.8` (γ=0.489) / `≤ 1573` (γ=2), scaling linearly with
the assumed pair mass (×4 for M = 0.5→2 M☉).

**But the self-consistency check defuses it.** Under enclosed keying the *galaxy* sector needs a knee near
`ρ̄(<10 kpc) = 0.0291 M☉/pc³` — and at that knee `γ_g = 1.000036` at 10 kAU: silent. So wide binaries
exclude **one specific pairing**: the published `0.029·V_flat²` calibration *combined with* a system-scale
MRH. They do not exclude the density-keyed law, and they do not exclude ρ̄(<r) keying at its own knee.
This is precisely the per-sector cherry-picking the seeded topic is about, caught in the act — but the
cherry-picking is in the *calibration*, not in the knee-per-sector.

### G. A flagged coincidence, offered as a lead and explicitly **not** as a result

`ρ̄(<R) = 3V²/(4πG R²)` for the Milky Way at `V = 229 km/s, R = 10.0 kpc` is **0.0291 M☉/pc³**. The
framework's published *dimensionless coefficient* is `A = 0.029 (km/s)⁻²`. The stated Jeans formula
`A = 4π/(β_J²GR₀²)` with `R₀ = 8 kpc` gives `4.566×10⁻⁵`, and the archive's long-standing unexplained
gap between them is **635×**. The ratio `ρ̄(<10 kpc) / [4π/(GR₀²)] = 3V²R₀²/((4π)²R²)` evaluates to
**637.7** — the observed gap, to rounding.

That is one number matching one number with one free choice (R = 10.0 kpc, which lands on a round value),
so it is a *lead*, not a finding: it would mean the "published calibration" is a **density that was
promoted to a coefficient**, after which multiplying by `V_flat² = 52 441` carries it to 1521 and
generates most of the "seven orders of ρ_crit." The archive attributes 0.0294 to a different
computation (fitted α = 4.5, `ρ_crit ∝ V^0.5`, Session 66). **Someone should open the Session 66 code and
check which it is** — if it is the density reading, a large part of the seven-order spread is one
dimensional slip rather than seven sector-local choices, and `ρ_crit ≈ 0.029 M☉/pc³` *as a plain density*
sits inside the γ = 1 Oort window (0.0234–0.0610), is GC-compatible, and is wide-binary-silent.

## Implications for the Site

The TEST-02 card's verdict ("self-eliminating-or-tie", "practically untestable") is **correct**, and this
finding does not add a refutation — the count stays at 6. What changes is the *reason*, and the reason is
load-bearing because it determines what future data can do:

- "0.05–0.4 %, ~80× below Gaia reach" implies a quantitative gap that better data narrows. Under the
  galaxy sector's own keying the prediction is **exactly 1** and the gap is infinite.
- The **"Gaia DR4 will re-open this test" milestone is false** in the same way the "DESI DR2/DR3 have
  shipped" premise was false this morning — a data event advertised as able to move a test it cannot
  move. On a site whose method is pre-registration, a false *future* trigger is the mirror image of a
  stale one and costs the same credibility.

## Action: Maintainer

1. **P0 — `maintainer/scripts/test02_amplitude_is_knee_conditional.py` and every number it fed.** Add the
   floored column. The `/tier-1-existing` TEST-02 field now says "+1.8×10⁴ %" and "a factor ~3.5×10⁴ boost"
   with no form tag; floored, the same rows are **+78.2 %** and **3.17×**, and 3.17 is a hard ceiling.
   Keep the conclusion (the band's window is disjoint from the galaxy sector's knees — it survives the
   correction); replace the magnitude; state the form on both.
2. **P0 — delete or re-scope the Gaia DR4 milestone** on `/tier-1-existing` TEST-02 and `/wide-binaries`.
   Replacement text: *"Under the ambient-density keying the galaxy-sector runs use, the Gaia wide-binary
   statistic cancels the boost exactly — predicted γ_g = 1, not 1.0005. No Gaia release can change that;
   the test is structurally null, not resolution-limited. It becomes a live constraint only under
   enclosed/MRH keying, where Banik+2024 already bounds ρ_crit ≤ 67.8 M☉/pc³ at γ = 0.489."*
3. **P1 — `/wide-binaries`.** The page's stated reason ("solar-neighborhood ρ sits *above* that ρ_crit,
   placing it in the C≈1 near-Newtonian regime") is false at the published calibration, where ρ_local sits
   **18 000× below** ρ_crit. It is true only at the S691 registered knee. Say which knee, and at which γ.
4. **P1 — land the 2026-09-06 P1 that never landed.** The `+78 %` floored row and the quadrature-branch
   attribution were actioned in `findings/test02-null-is-the-quadrature-branch-and-18pct-already-includes-the-efe.md`
   and are still absent from both pages. This is a concrete instance for the queued
   `epistemic-regression-architecture-fix.md` topic: a correction published on 09-06 was superseded on
   09-10 by a *less* correct number, in the same field, because the finding was not consulted.
5. **P2 — record the registered knee.** `ρ_crit = 10⁻²³ kg/m³ = 1.477×10⁻⁴ M☉/pc³ at γ = 2` (Session 691)
   belongs in the knee inventory. It is the knee TEST-02 is registered against and it is absent from the
   09-10 table.

## Open Threads

- **Measure the density contrast.** `ρ_close/ρ_wide` in the Gaia within-250 pc sample is a one-afternoon
  measurement (mean `|z|` and local stellar density per separation bin) and it is the *entire* first-order
  wide-binary signal under ambient keying. Currently an unmeasured input to a published band.
- **Open Session 66.** §G's 637.7 vs 635 coincidence either dissolves the A = 0.029 anomaly into a
  dimensional slip or is a numerology accident. Both outcomes are worth an hour.
- **The seeded topic's scan still needs its expensive sectors.** §D and §E close two of them cheaply
  (ephemerides is empty; Oort constrains γ not the floor). SPARC, GC and BTFR need the L2 solver on the
  **(f, ρ_crit)** plane, not the ρ_crit axis alone — that is the axis the 09-09 run swept one slice of.
- **Does any other test card cancel the same way?** TEST-02's statistic is differential in a variable the
  law does not contain. TEST-03 (compact ellipticals, `f_DM` vs ρ) does not have this problem. A sweep for
  "which cards measure a *ratio* the law is blind to" is cheap and would find the rest of this class.
