# Finding: Beyond what MOND forbids, tanh(γ ln(1+x)) forbids three shapes. One is refuted; SPARC barely resolves the other two

## Origin
Topic `what-data-shape-can-the-tanh-log-template-not-fit.md` (maintainer 2026-11-13, from visitor Pass 3: "close to 'a
sigmoid fits sigmoidal data'"). PREREG `findings/PREREG-template-forbidden-shapes-20261113.md`, committed `d5e38a3`
before the run. Not blind: I had read the 11-06 δ-family output and the 08-20 regulator finding.
Script `findings/scripts/template_forbidden_shapes.py` and output `template_forbidden_shapes_output.txt`, with the scoring
block appended after the run.

## Summary
I took the template as the archive uses it: the input variable, floor, wiring, γ and knee are all chosen per sector. I
then listed what it forbids, one knob at a time. Most of what it forbids, MOND forbids too: a non-monotone response, a
second variable in the algebraic reading, and a deep slope other than ½ in the μ-wiring. **Three restrictions are its
own:**
1. **A boost above 1/floor.** This one is refuted (TEST-10, the Oort limit; the "cap" root in the 11-12 exclusion table).
2. **A transition sharper than 1.167 dex** (10–90% width of μ, the limit as γ → ∞). MOND's δ ≥ 3 and n ≥ 3 members go
   below it.
3. **A fixed tie between the transition width and how fast μ approaches 1** (one shape parameter does both).

On SPARC the measured width is **W = 1.85 dex (galaxy bootstrap 95% 1.61–2.12; δ family, frozen Υ) and 1.64 (1.38–1.96)
with Υ floating**. That sits far from the floor, so restriction 2 is never tested by galaxies. The positive control
adds a caveat: if the truth were MOND δ = 6 (W = 1.01), the template's best member would cost only **+12.3 by point**. On
restriction 3, MOND's δ family beats the template by **ΔBIC +8.9, galaxy sd 8.9 (1.0σ)**, which is unresolved. All six
predictions held.

**One printable sentence:** *As a template, tanh(γ ln(1+x)) forbids three things MOND's general interpolating function
allows: a boost above 1/floor (refuted), a transition sharper than 1.17 dex (galaxies sit at 1.6–1.9 dex and cannot
test it), and a fixed tie between transition width and the approach to Newton (galaxies prefer MOND's RAR function by
1σ). Everything else it forbids, MOND forbids too. Across sectors, with the knee and γ chosen per sector, its only
content is a locked relation between knees, and the one on file is a₀ = cH₀/2π.*

So the persona's "a sigmoid fits sigmoidal data" is **right for the galaxy sector at SPARC's resolving power**, and
**wrong as a statement about the template**. The template's own content is the floor, which is refuted, and the cross-sector
lock, which is unresolved. Neither is a shape.

## Research Notes

### 1. The knobs, and what each one forbids

| knob | what it forbids | MOND forbids it too? | exercised by | outcome |
|---|---|---|---|---|
| tanh of a monotone argument | a response that is non-monotone in the keyed variable (a bump, or a rise and fall back) | yes, every single-variable μ | RAR (monotone); the DR4 rise-and-fall is a prediction of Milgrom's 2011 toy, i.e. MOND content (11-12 addendum) | consistent |
| algebraic reading (one variable) | dependence on a second variable at fixed keyed variable (an EFE) | no for QUMOND/AQUAL, yes for algebraic "RAR-MOND". The field-equation reading div[C∇Φ] has an EFE again | environment partial slope +0.003 (95% −0.022…+0.027); Cassini Q₂ | this is the "EFE-free corner" (11-11, 11-12) |
| `+1` inside ln, power 1 (onset μ ≈ γx) | in μ-wiring keyed on g_obs: deep slope ≠ ½, BTFR n ≠ 4 | yes (MOND's deep limit) | regulator exponent p = 0.76 ± 0.16; out-of-sample 0.33σ (08-20) | consistent |
| **floor Ω_m** | **boost > 1/Ω_m = 3.17** | **no** (MOND's ν is unbounded) | TEST-10, Oort limit, KiDS lensing (conditional) | **refuted** |
| **tanh saturation** | **10–90% width W < 1.167 dex** | **no** (δ ≥ 3: 1.12–1.01; n ≥ 3: 1.14–1.01) | SPARC, here; Cassini, indirectly | **SPARC never reaches it** (§3) |
| **one shape parameter** | **(W, tail exponent) off the template's curve** | **no** | SPARC, here | **δ preferred by 1.0σ** (§4) |
| knee per sector (4.4×10⁻⁶ – 1.5×10³ M☉/pc³) | nothing across sectors, unless knees are locked | n/a | a₀ = cH₀/2π (the only lock on file) | survives and differs; level-free slope unresolved (11-12) |
| γ per sector | nothing beyond rows 5–6 | n/a | n/a | n/a |

The deep slope is a property of the **wiring**, not the template. Keyed on g_obs in μ-form, it is forced to ½ at every γ.
Keyed on g_bar with division, g_obs = g_bar/C(g_bar/a₀) gives a constant a₀/γ in the deep regime (slope 0), and slope 1
once the Ω_m floor binds. Keyed on density, the slope depends on how ρ maps to g_bar in each system. The candidate
"a deep slope other than ½ is forbidden" is therefore forbidden only per wiring. Across wirings it is not forbidden.

### 2. The shape class (no data; PART 1)
W(γ) falls monotonically from 3.38 (γ = 0.2) through 1.908 (γ = ½, identity: μ_½ = x/(x+2)) and 1.50 (γ = 1) to the
limit log₁₀(atanh 0.9 / atanh 0.1) = 1.167. Linear onset plus saturation sets that floor: the transition cannot start
before μ ≈ γx lets it. The tail exponent t(10) = −d ln(1−μ)/d ln x runs from 0.26 to 10.9 over γ = 0.2–6, so at γ ≲ 1
it is tied to W.

| member | W (dex) | t(10) | the template member with the same W |
|---|---|---|---|
| δ = 1 (RAR function) | 1.725 | 1.67 | γ = 0.639, t(10) = 1.11 |
| δ = 2 | 1.264 | 10.0 | γ = 3.19, t(10) = 5.79 |
| δ = 4 | 1.060 | exponential | **unreachable** |
| δ = 6 | 1.006 | exponential | **unreachable** |
| n = 1 (simple) | 1.908 | 0.91 | γ = 0.500, t(10) = 0.83 |
| n = 2 (standard) | 1.313 | 1.99 | γ = 2.16, t(10) = 3.93 |
| n = 4 | 1.070 | 4.0 | **unreachable** |

(For δ ≥ 2 the printed t(100) is 0.000 because 1 − μ underflows. The approach is exponential, not a power law.)

**P6 follows directly.** The member that came within 3σ of Cassini without bulges in 11-07 was δ = 6, at W = 1.006. No γ
reaches it. The 11-07 asymmetry ("the compander has no Cassini escape that MOND has") is the width floor at work, and it
is the one place restriction 2 has touched data. That touch was through a solar-system EFE computation, not through a
galaxy.

### 3. Where SPARC sits (PARTS 2–4)
On N = 2807 points in 166 galaxies, with the 11-06 loader (identity control C1 reproduced a₀ and SSR to 4 decimals):

| family | best shape | a₀ | rms | W | galaxy-boot W 2.5–97.5% |
|---|---|---|---|---|---|
| template | γ = 0.491 | 5.36×10⁻¹¹ | 0.1437 | 1.925 | 1.621–2.264 |
| δ | δ = 0.882 | 9.95×10⁻¹¹ | 0.1435 | 1.849 | 1.608–2.124 |
| n | n = 0.975 | 1.07×10⁻¹⁰ | 0.1437 | 1.941 | 1.666–2.247 |

The width is a property of the data, not of the family: the three families agree to 0.09 dex, the same check the 08-20
regulator finding used. Not one of 400 resamples falls below 1.17. With one global Υ scale floating (best 1.11–1.12 in
every family), W drops by ~0.2 dex, to 1.64 (δ; 2.5% at 1.377). That still leaves 0 of 150 below 1.17. Per-galaxy Υ was
not floated. The drop says W and Υ are correlated, so a per-galaxy Υ fit could move W further.

### 4. Positive control: could SPARC have shown a sharp transition? (PART 5)
Truth = δ = 6 (W 1.006) or δ = 4 (W 1.060), plus the real δ = 1 residuals point by point (galaxy-correlated structure
kept):
- Recovered W: 1.099 (97.5% 1.348) and 1.160 (97.5% 1.401). The estimator is biased broad by about 0.1 dex near the floor.
- With Υ frozen, the real data's 2.5% bound of 1.608 clears both controls: **SPARC is not sharp.** With Υ floating, the
  real 1.377 overlaps the controls' upper range, and the controls were run with Υ frozen. The separation from a sharp
  truth is clean only with Υ frozen.
- **On the sharp injected data the template's best member (γ at the grid edge, 6) costs only +12.3 (δ = 6) and +1.7
  (δ = 4) by point.** Galaxy-level noise on that statistic is ~9 by point (PART 3). Even in a universe that violated
  restriction 2, SPARC would flag the template at about 1σ. The restriction is real in shape space and nearly invisible
  in rotation curves.

Template vs δ on the real data: +8.91 by point, galaxy-bootstrap sd 8.90, 16–84% [0.0, +17.7]. The δ family's edge
comes from its faster tail at the same width (at W = 1.85 the best δ = 0.882 has t(10) = 1.30; the template member at the same width, γ ≈ 0.53, has 0.89). That is
restriction 3, measured at 1.0σ, in MOND's favour.

### 5. Scoring (PREREG `d5e38a3`)
P1 held (floor 1.1725 on the grid, limit 1.1665; W(½) 1.9085). P2 held (δ = 3 is also below the floor). P3 held
(γ 0.491; +8.9 = 1.0 sd). P4 held (W 1.85–1.94, spread 0.09, 2.5% 1.61). P5 held (2.5% 1.38 > 1.17). P6 held (1.006).
All six held. The positive control was not a registered prediction; it is reported because it limits what P4–P5 mean.

## Implications for the Site
- The landing and SPINE lead with the equation. The page that defends it (`/honest-assessment#is-gamma-universal`,
  "one functional form, not one parameter set") should say what that form forbids. Today it does not. The sentence in the
  Summary is ready to use, and the knob table can sit under it on `/coherence-function`.
- The visitor's suggestion ("if the answer is 'almost none', say so on the landing") gets a qualified yes. **In shape,
  almost none beyond MOND, at the resolution of any galaxy data on file.** The framework's own content is the floor (refuted)
  and the cross-sector lock a₀ = cH₀/2π (unresolved). That matches the 11-12 by-piece table, but reaches it from the
  template side instead of the ledger side.
- The 11-07 Cassini asymmetry can now be said in one clause: it is the width floor.

## Action: Maintainer
- `/coherence-function` (new section "What the template forbids"): the Summary sentence plus the knob table (§1). Mark
  the deep-slope row "per wiring". Link the 11-07 Cassini asymmetry to the width row.
- Landing (by-piece table, 11-13): one row or footnote under the equation: "As a template it forbids three shapes MOND
  allows; one is refuted (the cap), and galaxy data cannot resolve the other two." Link to the section above.
- `/honest-assessment#is-gamma-universal`: after "one functional form, not one parameter set", add "and the form's own
  content is the floor and a locked a₀; see What the template forbids".
- Lint: a REQUIRES rule so that any page saying "one equation" or "one functional form" in the hero or key-claims links to
  the forbids section. Optional.

## Open Threads
- Per-galaxy Υ (and D, i) floating: does W keep falling toward the floor? This is the one way restriction 2 could come into
  tension on galaxies. Memory `marginalizing-nuisances-does-not-fix-n-eff` says the bootstrap stays galaxy-level.
- Restriction 3 at higher resolution: BIG-SPARC, or a lensing RAR that samples x ≳ 10, could measure t(10) directly.
  At W ≈ 1.85 the template forces t(10) ≈ 0.89. The best δ member has 1.30, and the RAR function (δ = 1, W 1.73) has 1.67.
- The DR4 "rise and fall back" boost is forbidden by every single-variable keying that is monotone in separation, the
  template's and algebraic MOND's alike. If DR4 shows it, it selects Milgrom's 2011 modified-inertia nonlocality over
  both. Worth one line in the DR4 reading key.
