# Finding: the constant branch of Milgrom's coincidence is excluded by Ciocan at 4σ (two anchors) to 13σ (two anchors), not "12σ" — and the framework's H(z) commitment is assumed, not derived

## Origin
`topics/a0-lambda-branch-four-anchor-symmetry.md` (maintainer 2026-09-05, from visitor Pass 4). Script:
`findings/scripts/a0_constant_branch_four_anchors.py`, output alongside.

## Summary
Applying the site's own four-anchor table to the constant branch (a₀ ∝ c√Λ, zero evolution) gives
+13.5σ, +13.4σ, **+4.2σ, +4.2σ** against Ciocan's a₀(z~1) = 2.38, in the site's own error convention.
The seed's rule has a gap (2σ–5σ), and both physically-anchored rows fall in it: **the "roughly 12σ"
sentence is anchor-dependent and should be reworded, not withdrawn.** No anchor makes a constant a₀
consistent, so branch (B) is genuinely disfavoured *if* Ciocan's high-z a₀ is comparable to the local
one — and Ciocan's own 0.2 dex molecular-gas systematic maps to a factor 1.58 on a₀, enough to bring
2.38 down to 1.50, inside the MIGHTEE anchor. Second half: Session 88 writes "*If* a₀ = cH₀/(2π), *then*
a₀ evolves with H(z)" — a substitution H₀ → H(z), no mechanism, no derivation. The Step-1/2 chain on
`/mond-unification` ties the scale to the Hubble radius, but ρ_crit at z = 0 is degenerate between H₀²
and Λ/(3Ω_Λ); nothing in the archive selects the evolving reading.

## Research Notes

### The table the site never built
E(z=1) = 1.790 (Ω_m = 0.315). Site convention: Ciocan's ±0.10 (a 95 % interval) treated as 1σ, and the
anchor's own error folded in (that is how the site's branch-(A) McGaugh row becomes "+0.5σ").

| anchor a₀(0) | (A) cH(z)/2π at z~1 | σ | (B) constant | σ |
|---|---|---|---|---|
| Ciocan intercept 1.00 ± 0.02 | 1.79 | +5.6 | 1.00 | **+13.5** |
| framework cH₀/2π 1.04 | 1.86 | +5.2 | 1.04 | **+13.4** |
| McGaugh+2016 1.20 ± 0.26 | 2.15 | +0.5 | 1.20 | **+4.2** |
| MIGHTEE-HI 1.69 ± 0.13 | 3.03 | −2.5 | 1.69 | **+4.2** |

(The site prints +9.4σ/+9.8σ for the first two branch-(A) rows; I get +5.6/+5.2 with σ = 0.10. The site's
figures correspond to σ ≈ 0.055 — i.e. it *did* convert the 95 % interval to 1σ on those two rows but not
on the McGaugh/MIGHTEE rows, where the anchor error dominates. Mixed conventions in one table; either is
defensible, both should not appear together.) Strict convention (σ_Ciocan = 0.051): (B) gives +25, +26,
+4.5, +4.9.

**Rule adjudication.** Not "any anchor within 2σ" (withdraw) and not "all four above 5σ" (stands). Two
of four sit at 4.2σ. Pre-committed reading of the gap: *anchor-dependent exclusion; reword.* Suggested
sentence: "a constant a₀ is 4σ (McGaugh, MIGHTEE anchors) to 13σ (Ciocan-intercept, framework anchors)
from Ciocan's 2.38 — disfavoured on every anchor, but the '12σ' figure belongs to the two anchors that
also make branch (A) fail."

### The systematic that swamps the statistics
Ciocan et al. flag molecular gas fractions of 30–50 % at z~1 as a possible ~0.2 dex systematic in disk
mass. In the deep-MOND regime g_obs² = a₀ g_bar, so an under-estimated M_bar over-estimates a₀ one-for-
one: 0.1 dex → 1.89; **0.2 dex → 1.50**; 0.3 dex → 1.19. A 0.2 dex baryon systematic alone moves Ciocan's
value into the MIGHTEE anchor's 1σ band and within 2.3σ of McGaugh's. The σ columns above are
statistical; the honest comparison of *either* branch to Ciocan is systematics-dominated on both sides
of the ratio — which is what the site already concluded for branch (A) ("untestable with foreseeable
data"). Branch (B) belongs in the same category, with the same reason.

### Is H(z) derived or assumed? Assumed.
Session 88 (`Research/Session88_MOND_Synchronism_Unification.md`), Part 3: the "derivation" is a
dimensional match — λ_grav ~ c²/a set equal to the Hubble radius c/H₀, "geometric factor" 2π — landing
at 1.08 × 10⁻¹⁰ (10 % from 1.2). Part 4 opens: *"If a₀ = cH₀/(2π), then a₀ evolves with H(z):
a₀(z)/a₀(0) = H(z)/H₀."* That is a substitution, stated conditionally. Session 192 later replaced the
formula with a₀ = cH₀ Ω_m^φ (also H₀-anchored by construction, no evolution argument). Neither session
derives *why* the coherence scale should track the instantaneous Hubble rate rather than the de Sitter
horizon. The site's Step 1 (ρ_crit = 3H₀²/8πG) and Step 2 ("acceleration from ρ_crit over a Hubble-scale
volume") commit to H₀ by naming the Hubble radius — but at z = 0, ρ_crit = 3H₀²/8πG = Λ/(8πG Ω_Λ), so a
scale "set by the critical density today" is equally a scale set by Λ. The archive's commitment to the
evolving branch is a choice of words in Step 2, not a result. Pass 4's question 5 is answered: the site's
"branch (B) is not available to this framework" is an over-statement; branch (B) is *not chosen*.

## Implications for the Site
- `/parameter-derivations` row 4: reword the 12σ sentence (above); add the mass-systematic line; make
  the σ convention uniform across the table (currently mixed).
- `/mond-unification` Step 2: "Hubble-scale volume" should carry a footnote that this is the assumption
  which produces a₀(z) ∝ H(z); the Λ-anchored reading gives the same z = 0 number and no evolution, and
  the framework has not derived a preference.
- The "one prediction that structurally differs from MOND" (Pass 4) is therefore not a prediction of the
  framework; it is the framework's *choice* between two readings Milgrom himself listed in 1983/2009.

## Action: Maintainer
- Row 4 sentence: replace "roughly 12σ" with the 4σ–13σ anchor table (one row, same format as branch A).
- Row 4: one sentence on the 0.2 dex ⇒ ×1.58 mapping; badge both branches "untestable with foreseeable
  data — systematics-dominated," not "disfavoured."
- Step 2 footnote as above.

## Open Threads
- Does any archive session argue *against* the Λ reading on coherence grounds (e.g. the C₀ = Ω_m link to
  dark energy in Session 88 Part 5 would, if taken seriously, pull toward Λ rather than H(z))? Not found
  in a first pass; worth a targeted read of Sessions 87–88, 192, 385.
- Ciocan's a₀(z) slope a₁ = 1.59 is *faster* than E(z) − 1 on every anchor except MIGHTEE's — a MOND-side
  statement the site could make about branch (A) too, if the mass systematic is controlled.
