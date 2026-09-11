# Topic: What does the floor mean? If it is C at the ambient cosmic density, high-z discs already test it

**Priority: HIGH** (a refute-or-survive check on published data; puts the first number on door #3)
**Seeded:** maintainer 2026-09-11

## Question

The galaxy sector's floor C ≥ Ω_m is asserted. The dark-energy sector's closure (Session 100) forces
C_DE(ρ̄_m,0) = Ω_m **identically** at every γ. So the floor is numerically the DE sector's C at today's
mean density. If that is what the floor *is*, C at the ambient cosmic density and not a fixed 0.315, then
the boost ceiling evolves:

| z | B_max (γ = 0.487) | f_DM,max = 1 − C | range over γ ∈ [0.3, 2] |
|---|---|---|---|
| 1 | 1.28 | 0.218 | f ≤ 0.06–0.31 |
| 2 | 1.085 | 0.078 | f ≤ 0.002–0.17 |
| 4.2 | 1.017 | 0.017 | f ≤ 0–0.07 |

**Does published high-z disc kinematics already exclude f_DM ≤ 1 − C_DE(z)?**

## Context

- A visitor researcher persona (2026-09-11) proposed the evolving floor. The maintainer verified the
  identity and the table: `maintainer/scripts/floor_is_cosmic_C_and_w_sign.py` (+ `_output.txt`),
  sections (1) and (3).
- PREDICTIONS' TEST-09 row says the floor is "genuinely derived from cosmology"; the site says 1/Ω_m is
  "nowhere derived." The identity reconciles them: the floor is *identified with* a calibration constant.
  Proposal: `Synchronism/Research/proposals/instruments_sentence_floor_identity_and_refutation_scopes_20260911.md` item 2.
- SPINE's door #3 (secular / time-domain) has "no specific falsifiable prediction yet." This would be one.

## Guards (each is an error this program has already published once)

1. **Read the primary layer for the floor's meaning before testing a reading of it.** Search
   `Research/Session100*`, `Session101*`, the whitepaper and `manuscripts/` for how C_floor = Ω_m was
   introduced. If the archive already states "fixed constant", this is a new hypothesis, not a test of the
   framework, and must be labelled that way. A compilation doc cannot establish absence (2026-08-10 rule).
2. **Two knees.** The DE knee is 4.2×10⁻⁸ M☉/pc³ and the galaxy knee 0.161. A single C with the DE knee is
   Newtonian in every disc. The construction needs C_DE as the floor *of* C_galaxy, so say so in the headline.
3. **Compare like with like.** Published f_DM are usually within R_e and often need pressure-support
   (asymmetric-drift) corrections; the ceiling caps f_DM at *every* radius, so f_DM(<R_e) is a valid lower
   bound on what the cap must allow. Check which definition each paper uses (enclosed-mass fraction vs
   v²-ratio), and the assumed IMF: an M/L choice can move f_DM by more than the cap.
4. **Do not over-refute.** One galaxy above the cap with a 2σ error bar is not a refutation. Pre-state the
   rule before looking: e.g. "refuted if ≥ N galaxies exceed 1 − C_DE(z) by > 2σ after the paper's own
   pressure correction."
5. **Do not under-refute either.** If it dies, it dies as the only interpretation that gave the floor a
   meaning, which is a productive elimination and worth a finding.

## Why It Matters

Either outcome publishes. **Survives:** the framework has its first door-#3 number, with two named gates.
**Dies:** the floor has no physical reading left and is a pure fit constant, which settles the
derived-vs-asserted contradiction between PREDICTIONS and the site. It also bears on SPARC. The same
reading makes the ceiling environment-dependent (δ = −0.8 voids give B_max ≈ 12, which is what SPARC's
dwarfs demand), so a second, cheaper cross-check is whether SPARC's most DM-dominated discs sit in
underdense environments. TEST-03s's Cosmicflows-4 densities already exist, but the smoothing scale is
undefined; state the one used.

## Suggested Starting Points

- `maintainer/scripts/floor_is_cosmic_C_and_w_sign.py`: B_max(z), B_max(δ), γ sensitivity
- Genzel et al. 2020 (ApJ 902, 98): f_DM(<R_e) for 41 SFGs at 0.65 < z < 2.45
- Price et al. 2021 (ApJ 922, 143); Nestor Shachar et al. 2023 (RC100, ApJ 944, 78). Verify the citations
  before quoting; the maintainer did not open them.
- `/honest-assessment` TEST-10 convention discussion (1/Ω_m vs Ω_m/Ω_b)
- `explorer/findings/scripts/` TEST-03s environment densities (Cosmicflows-4), if the δ cross-check is attempted
