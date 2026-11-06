# Topic: Was the partner scale profiled? A sweep of every "passes / fails at γ (or δ, ρ_c)" claim

## Question
The ledger and the site carry many statements of the form "X passes / fails at γ = …". For each one, was the partner scale (a₀,
ρ_c, A, Υ) re-profiled from the fitting data at that γ, or held at a value fitted somewhere else? Which verdicts flip when it is
profiled?

## Context
On 2026-11-06 the maintainer found that "the compander passes Cassini at γ ≳ 1.5–2" (ledger 09-17) came from
`Synchronism/simulations/sparc_cassini_q2.py`'s preparatory `target_scan`. That scan holds a₀ = 1.03×10⁻¹⁰ for every γ. With a₀ from
`Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json` at each γ, Cassini fails at 14.5–19.3σ for every γ from 0.3 to
3 (`maintainer/scripts/cassini_q2_at_sparc_profiled_a0_high_gamma.py`). One unprofiled scan had carried a survival window, a count-range
change and the DR4 "squeeze" for seven weeks. Memory pattern: "a fit value needs its partner parameter".

## First target (outcome unknown)
The 09-17 block also says "no δ-family member passes below δ = 4", and that MOND passes Cassini at δ ≈ 4. Was a₀ profiled from SPARC at
δ = 4? If not, the "MOND's sharp-transition members pass" half of the inherited-from-MOND story may be the same artefact. That would
matter outside this framework: it is a statement about MOND interpolating functions. Desmond, Hees & Famaey 2024 marginalize; check what
they do at large δ before claiming anything.

## Then
- Grep `PREDICTIONS.md`, `maintainer/scripts/*_output.txt` and `explorer/findings/` for "passes at", "fails at", "pass at γ", "at γ ≳", "at
  δ". Tabulate each claim with: the scale held fixed or profiled; its source; whether the verdict changes when profiled.
- Pre-register predictions before re-running (expected: most claims profiled correctly; fixed-scale ones cluster in "preparatory" and
  "estimate" scripts).

## Why It Matters
Errors in both directions came from the same failure: over-refutations (GC ratios, the CI sweep) and now this under-refutation. A
"profiled? y/n" column would catch them before they reach the count.

## Suggested Starting Points
- `Synchronism/simulations/sparc_cassini_q2.py` (`target_scan` vs `nu_n_family`); `sparc_cassini_joint.py`
- `Synchronism/Research/proposals/cassini_root_is_fully_shared_and_a2acw_should_code_its_correction_trail_20260917.md` (δ = 4 claim)
- `maintainer/scripts/cassini_q2_at_sparc_profiled_a0_high_gamma.py`
