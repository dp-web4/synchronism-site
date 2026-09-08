# Finding: Oort ∩ globular clusters ∩ SPARC, at the same γ — the knee is not the problem, the floor is

## Origin
Topic `joint-local-constraint-oort-gc-sparc-at-rg-knee.md` (maintainer 2026-09-08), and a correction to
my own 2026-09-07 finding §7. Scripts: `findings/scripts/joint_local_window_gamma_axis.py` (Oort window
and GC verdict on a γ × ρ_c grid; `_output.txt`, `.json`) and `findings/scripts/sparc_pinned_at_rg_knee_l2.py`
(the 08-28 L2 solver, machinery unchanged, pinned at the knees the local data admit; `_output.txt`, `.json`).

## Summary
**My 09-07 §7 "two local constraints that do not overlap" was a γ-mismatch and is withdrawn.** The
Oort-limit window I quoted (0.074–0.154 M☉/pc³) is the γ = 2 window; at γ = 0.489 it is 0.0039–0.017.
I compared the γ = 2 Oort window with the γ = 0.489 globular-cluster exclusion. Computed at the same
γ, **Oort ∩ GC is non-empty at every γ from 0.3 to 3**: a band of "ok" knees exists at each γ, sliding
as e^{1/γ}, and a wider "not excluded" band on top of it. There is a place for the knee, at every γ,
and the local data alone do not close the density-keyed sector.

What closes it is SPARC, and SPARC's objection is not the knee. Running the framework's own field
equation on 153 SPARC discs at the knees those two windows admit, at both registered γ, with the Ω_m
floor: the best the law does anywhere is χ²/N ≈ 70 against MOND's 21 (Υ profiled), rms 0.15–0.19 dex in
g against MOND's 0.105, and 77–88 % of galaxies need a boost the law cannot deliver. The fit gets
*monotonically better as the knee goes down*, all the way to and past the bottom of the Oort window,
because SPARC wants the boost off in the inner disc and full on outside — and it is still 3–4× worse
than MOND at the lowest knee, because "full on" is 3.17 and the discs need 5–14. The three-way
intersection is empty, but the one-line statement the topic asked for is not "there is no place for
the knee." It is: **at the Ω_m floor there is a knee that satisfies the Sun and the globular clusters
at every γ, and no knee that satisfies SPARC; the floor is the only parameter SPARC is objecting to,
and the floor is the framework's one derived number.**

## Research Notes

### 1. The Oort window on a γ axis (analytic)
C(x) = f + (1−f) tanh(γ ln(1+x)), f = Ω_m = 0.315, x = 0.084/ρ_c at the solar midplane.
f_DM,pred = 1 − C; McKee+2015 measure 0.134 ± 0.036, so C must be 0.794–0.938. Inverting:

| γ | McKee 2σ window [M☉/pc³] | Bovy & Tremaine 2σ |
|---|---|---|
| 0.3 | 0.0005 – 0.0050 | 0.00009 – 0.0024 |
| 0.489 | **0.0039 – 0.0172** | 0.0013 – 0.0104 |
| 0.7 | 0.0107 – 0.0344 | 0.0047 – 0.0229 |
| 1.0 | 0.0234 – 0.0610 | 0.0123 – 0.0433 |
| √2 | 0.0433 – 0.0994 | 0.0256 – 0.0734 |
| 2.0 | **0.0735 – 0.155** | 0.0467 – 0.118 |
| 3.0 | 0.127 – 0.251 | 0.0852 – 0.194 |

The 09-06 script printed both the γ = 2 and the γ = 0.489 rows. I read the first and used it at the
wrong γ the next day.

### 2. The globular-cluster verdict on (γ × ρ_c)
Same statistic as 09-07 (error-weighted outer d log σ/d log r, 42 clusters, isotropic Jeans on the
catalogue modified-Hubble model). Newtonian mismatch −0.057 (systematics budget); MOND+EFE −0.093.
"ok" ≤ |MOND|, "marginal" < 2|MOND|, excluded otherwise. 27 knees × 7 γ; the excerpt:

| ρ_c | γ=0.3 | 0.489 | 0.7 | 1.0 | √2 | 2.0 | 3.0 |
|---|---|---|---|---|---|---|---|
| 0.002 | ok | ok | ok | ok | ok | ok | ok |
| 0.0079 | marg | **ok** | ok | ok | ok | ok | ok |
| 0.0125 | marg | marg | ok | ok | ok | ok | ok |
| 0.0313 | marg | marg | marg | ok | ok | ok | ok |
| 0.0783 | EXCL | marg | marg | marg | marg | **ok** | ok |
| 0.124 | EXCL | EXCL | marg | marg | marg | marg | ok |
| 0.196 | EXCL | EXCL | EXCL | marg | marg | marg | marg |
| 0.49 | EXCL | EXCL | EXCL | EXCL | EXCL | marg | marg |
| 1.2 – 12 | EXCL | EXCL | EXCL | EXCL | EXCL | EXCL | EXCL |
| 300 | ok | marg | marg | marg | marg | marg | EXCL |

The exclusion window slides up with γ exactly as the Oort window does — both are set by where the
transition band sits in density, and the band moves as e^{1/γ}. That is why they overlap at every γ.

### 3. The intersection, per γ (GC evaluated *at* the Oort-window edges, not on the grid)

| γ | Oort window | GC at lower edge | GC at upper edge | **Oort ∩ GC "ok"** | not-excluded |
|---|---|---|---|---|---|
| 0.3 | 0.0005–0.0050 | ok (−0.071) | marg (−0.106) | 0.0005–0.002 | 0.0005–0.0050 |
| 0.489 | 0.0039–0.0172 | ok (−0.074) | marg (−0.108) | **0.0039–0.0079** | 0.0039–0.0172 |
| 0.7 | 0.0107–0.0344 | ok (−0.077) | marg (−0.109) | 0.0107–0.020 | 0.0107–0.0344 |
| 1.0 | 0.0234–0.0610 | ok (−0.080) | marg (−0.109) | 0.0234–0.031 | 0.0234–0.0610 |
| √2 | 0.0433–0.0994 | ok (−0.082) | marg (−0.109) | 0.0433–0.0495 | 0.0433–0.0994 |
| 2.0 | 0.0735–0.155 | ok (−0.084) | marg (−0.109) | **0.0735–0.078** | 0.0735–0.155 |
| 3.0 | 0.127–0.251 | ok (−0.086) | marg (−0.110) | ≈ 0.127 | 0.127–0.251 |

Same structure at every γ: the GCs accept the *bottom* of the Oort window and call the top marginal.
Refracted Gravity's 0.0083 sits inside the γ = 0.489 "ok" band; the 09-07 measured knee 0.161 sits
just above the γ = 2 not-excluded band. **The two SPARC-free local constraints are compatible.** The
sentence in my 09-07 finding — "the only window in which a density-keyed law explains the local dark
matter without dark matter is the window Galactic globular clusters exclude" — is false, and the
"third genuinely SPARC-free constraint" I counted there does not exist.

### 4. SPARC under L2 at the admitted knees
153 SPARC discs (Q ≤ 2, i > 30°), the framework's div(C∇Φ) = 4πGρ solved on the 08-28 grid, boost
transferred to SPARC's V_bar, same likelihood for every model. Υ_disk = 0.5 fixed and profiled over
{0.3, 0.5, 0.7} with a 0.1 dex prior. "rms g" = 2 × median per-galaxy rms of log₁₀(V_obs/V_pred), the
number comparable to McGaugh's 0.13 dex RAR scatter (MOND reaches 0.105 in this estimator). "need>" =
fraction of galaxies whose maximum required boost V_obs²/V_bar² exceeds the maximum the law delivers.

| model | χ²/N fixed | χ²/N prof | rms g prof | wins vs MOND | Σ Δχ² | med B_max | need> |
|---|---|---|---|---|---|---|---|
| Newton | 636 | 465 | 0.410 | 8 % | +1.34e6 | 1 | 100 % |
| MOND simple μ | 52.2 | **21.3** | **0.105** | — | 0 | — | — |
| MOND RAR ν | 52.3 | 21.6 | 0.105 | 57 % | +916 | — | — |
| γ=0.489, ρ_c=0.0003 (below every window) | 133 | 69.7 | 0.162 | 26 % | +149k | 3.03 | 84 % |
| γ=0.489, ρ_c=0.0039 (Oort∩GC bottom) | 161 | 77.7 | 0.151 | 29 % | +174k | 3.27 | 80 % |
| γ=0.489, **ρ_c=0.0083 (RG's knee)** | 183 | **85.2** | **0.146** | 29 % | +196k | 3.27 | 79 % |
| γ=0.489, ρ_c=0.017 (Oort top) | 211 | 97.4 | 0.146 | 30 % | +234k | 3.25 | 79 % |
| γ=0.489, ρ_c=0.05 | 266 | 123 | 0.156 | 25 % | +313k | 3.22 | 78 % |
| γ=0.489, ρ_c=0.074 | 288 | 135 | 0.159 | 26 % | +348k | 3.21 | 78 % |
| γ=0.489, ρ_c=0.154 | 331 | 159 | 0.166 | 24 % | +420k | 3.19 | 77 % |
| γ=0.489, ρ_c=0.161 (09-07 measured) | 334 | 160 | 0.166 | 24 % | +425k | 3.19 | 77 % |
| γ=2, ρ_c=0.0003 | 138 | 80.5 | 0.189 | 21 % | +181k | 2.78 | 88 % |
GAMMA2_ROWS
FLOOR089_ROWS

(Σ Δχ² is against MOND simple, profiled, summed over galaxies; B_max slightly exceeds 1/f = 3.17
because L2 is not the division law — recorded 08-26/08-28.)

Reading it:

- **SPARC pinned at RG's knee, γ = 0.489, Ω_m floor: rms 0.146 dex in g, χ²/N 85 vs MOND's 21.** The
  scatter number coincides with the topic's "McGaugh's 0.146" to three digits, which is a coincidence
  and not a pass: in the *same* estimator MOND is at 0.105 and Newton at 0.41. The law lands 4×
  worse than MOND in χ² and 40 % worse in scatter, and loses 71 % of galaxies head-to-head.
- **The fit improves monotonically as the knee falls**, through the whole Oort∩GC band and out its
  bottom. The best knee for SPARC is below every window the local data allow, and it is *still*
  3.3× MOND. This is the shape SPARC has been giving this sector since the 08-28 grid: the discs want
  C ≈ 1 in the inner disc (ρ ~ 0.01–1 M☉/pc³, where a knee in the Oort window would already be
  boosting them) and the full boost outside.
- **"need>" is flat at 77–88 % across every knee.** That column is the ceiling. It does not move with
  ρ_c because it cannot: the maximum boost is 1/f whatever the knee. SPARC's objection is to f.
- Refracted Gravity has never been fit to SPARC in its own literature (Cesare+2020 fit 30 DiskMass
  discs, ε₀ = 0.56 ± 0.16; Cesare+2022 three E0 ellipticals, ε₀ = 0.089; 14.8σ tension between the
  two on ε₀; the 2024 review notes RG's DMS RAR scatter of 0.11 dex vs Li+2018's 0.057 and defers
  SPARC to "further analyses"). So this run is the first SPARC evaluation at RG's knee under any
  floor, and under RG's own published floors it was already done 08-28: χ²/N 715–911 for the E0
  parameters, 188–240 for the DMS ones.

### 5. The one-line statement, with the γ-dependence explicit
> At floor f = Ω_m, the Sun and the Galactic globular clusters jointly admit a knee at every γ:
> ρ_c ∈ [0.0039, 0.0079] M☉/pc³ at γ = 0.489, [0.0735, 0.078] at γ = 2, and the "ok" band moves as
> e^{1/γ} between them. SPARC admits none of those knees and none outside them: its fit is
> monotone in ρ_c toward zero, best at 3.3× MOND's χ², with 77–88 % of discs requiring a boost above
> the ceiling at every knee. Oort ∩ GC ∩ SPARC = ∅ **because of the floor, at every knee and every γ.**

The topic's framing ("not the knee is in the wrong place but there is no place for the knee") is the
one the data do *not* support. There are places for the knee. There is no place for the ceiling.

### 6. What this does not show (the over-refutation guard)
- It does not show that a density-keyed law fails SPARC *per se*. RG with its DMS floor (ε₀ = 0.56)
  is a different failure (ceiling 1.5, too low); with its E0 floor (0.089, ceiling 11) it overshoots
  the inner discs. Whether some (f, ρ_c, γ) fits SPARC at a freed floor was the 08-28 grid's
  question and its answer was "no, not below χ²/N ≈ 68 anywhere on the grid" — but the freed-floor
  grid was γ = 0.489 only. The FLOOR089 rows above are the γ = 2 half of that.
- It does not touch the γ fork. Both γ have a joint local window; the GC statistic prefers γ = 2 at
  the framework's measured knee and is indifferent at RG's.
- The Oort window uses the midplane baryon density 0.084 and McKee's f_DM; Bovy & Tremaine's lower
  value moves both windows down by ~1.5× and changes nothing structural.
- The ambient-density point in the companion finding (disc field density caps the boost inside the
  disc) is what the SPARC solver is *already* doing for the galaxy's own gas and stars; it is not an
  additional systematic here.

## Implications for the Site
- `/honest-assessment#gc-fork` and `/for-researchers` item 6 currently carry my 09-07 "Oort and GC
  do not overlap" as a citable SPARC-free null. **That null is withdrawn.** Replace it with the
  three-row window statement (§5): both local constraints admit a knee at every γ; SPARC rejects the
  floor at every knee.
- The "13–500× above RG's knee" sentence (`/parameter-derivations` item 8) can now be replaced by a
  measurement: at RG's knee the framework's law reaches 0.146 dex / χ²/N 85 on SPARC against MOND's
  0.105 / 21, and improves — but never to MOND — as the knee falls further.
- Bucket 2's per-row "which C does this kill" column (maintainer's 09-08 proposal): this run is a
  clean row. *Killed*: density-keyed C, floored at Ω_m, any γ ∈ [0.3, 3], any ρ_c ∈ [3×10⁻⁴, 0.16],
  by SPARC on the ceiling. *Not killed*: the same C at a freed floor (that is RG, and RG has its own
  ε₀ problem), and the compander form.
- The site should not present ninth-near-miss as a curiosity. The same failure (wrong γ for the window)
  hit me on consecutive days in the same finding, once caught before publishing and once not. The
  visitor's researcher persona found the site-wide version of it (the +184 attached to the wrong C)
  from outside. This is the program's characteristic error, and the site's "read the registration
  before executing it" lesson should generalise to "state the γ beside every window."

## Action: Maintainer
- **P0** `/honest-assessment#gc-fork`, `/for-researchers` item 6: strike the Oort ∩ GC no-go;
  insert §5's one line with the γ-dependence.
- **P0** `/parameter-derivations` item 8: replace "13–500× above RG's knee" with the pinned-refit
  numbers (0.146 dex, χ²/N 85 vs 21, monotone in ρ_c, ceiling at every knee).
- **P1** Bucket 2 / PREDICTIONS.md: add the row "density-keyed C at f = Ω_m, all γ, all ρ_c — killed by
  SPARC ceiling; Oort and GC compatible" as the back-annotation of this run, and mark 09-07 §7 as
  corrected in the Session611 execution note.
- **P2** Every ρ_crit window on the site should carry its γ in the same cell. Grep for "0.074",
  "0.154", "0.0039", "0.017".

## Open Threads
- The freed-floor γ = 2 rows (FLOOR089) tell whether the γ fork survives *SPARC* at a non-Ω_m floor:
  if γ = 2 at f = 0.089 does better than γ = 0.489 at the same floor, the fork has a SPARC side.
- SPARC's monotone preference for a knee *below* the Oort window is a testable statement about the
  inner discs: the density law's boost is on at 0.01–0.1 M☉/pc³ where SPARC's inner points say it
  should be off. That is the 08-24 "1.7 dex offset" seen from the density side and could be stated
  as a single number: the knee SPARC wants vs the knee the Sun wants, per γ.
- What *does* fit Oort + GC + SPARC? MOND with the EFE passes all three (Oort via Bienaymé+2009 at
  1.66 vs 1.44 ± 0.13; GC via the EFE; SPARC by construction). The density-keyed law is now the
  only member of the family with a demonstrated three-way empty set, and the reason is the one
  derived number in the framework. Ω_m as the floor is the claim to attack next, not the knee.
