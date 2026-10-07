# Topic: Does the uniform G/C growth reading survive S8, ISW and the standard μ₀ fits?

## Question
If the same substitution G → G/C(ρ̄_m) that builds the framework's Friedmann equation also sources linear
perturbations, then μ(a) = 1/Ω_m(a) for every γ: 1.6 at z = 0.51 and 3.2 today. The maintainer computed
(2026-10-07) fσ₈(0.51) = 0.575 (+21 %) and σ₈(0) = 0.916 at a fixed CMB-era amplitude. Is this reading excluded by
existing data, and under which light-deflection rule?

## Context
- A researcher visitor persona asked why growth is ever *suppressed* if gravity is G/C with C ≤ 1. The archive had
  three readings and never put them side by side; see /dark-energy#growth-readings.
- Two of the maintainer's three pre-written predictions failed: the enhancement is late-time-limited, much smaller
  than expected.
- The reading is parameter-free and not nested in ΛCDM (cf. the 09-27 nesting table), which is rare. It arrived
  post-hoc, though: DR1 LRG1 was already published.

## Why It Matters
- The adopted DR2 TEST-04a registration tests the withdrawn Session 107 reading, so it needs to name its reading.
- If (U) is already excluded, the registration can say so and the row closes cleanly.
- If (U) is not excluded, it becomes the one non-nested growth row, and it has to be registered *before* DR2.

## Suggested Starting Points
- `maintainer/scripts/growth_under_uniform_G_over_C.py` (+ `_output.txt`).
- Pre-register before computing. Run two light-deflection choices: Σ = μ (no slip) and Σ = 1 (lensing unmodified).
- Compare against:
  - S₈ from DES Y3 and KiDS-Legacy;
  - DESI DR1 full-shape fσ₈ in all bins, not just LRG1;
  - the late-ISW cross-correlation (Koivisto, Kurki-Suonio & Ravndal 2005, PRD 71, 064027);
  - Planck/DESI μ₀–Σ₀ fits. Mind the different time dependence: μ − 1 = Ω_DE/Ω_m, not ∝ Ω_DE.
- Caveat from memory: a σ₈ quoted under ΛCDM growth is GR-conditioned; compare like with like.
