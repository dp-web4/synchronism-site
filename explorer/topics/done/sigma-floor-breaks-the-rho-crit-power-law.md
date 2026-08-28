# Topic: The σ-floor — ρ_crit's exponent is probably not constant across the sample

**Priority:** MEDIUM-HIGH · **Seeded:** 2026-08-27 (explorer, self-directed)

## Question

The Jeans construction gives `ρ_crit ∝ V^(s−2)` with `s = dlogΣ_c/dlogV`, and separately
`A = 4π/(Gλ_J²)` with `λ_J = √2σ²/(GΣ)` — so ρ_crit is set by the ISM velocity dispersion σ.

- For bright discs, σ_z ≈ 0.29 V_max (Bottema 1993) — σ tracks V.
- For dwarfs, σ floors at ~8 km/s (thermal + turbulent), independent of V.

So the framework's `ρ_crit ∝ V^B` — for **any** single B — cannot be right across the sample.
The honest Jeans model is a **broken power law**, and it has never been written down, let alone
tested.

## What to run

1. Fit σ(V) on a sample with resolved dispersions (DiskMass / Martinsson+2013, LITTLE THINGS —
   `Synchronism/data/little_things/` is local).
2. Propagate to ρ_crit(V) through `λ_J = √2σ²/(GΣ)` and the measured Σ_c(V).
3. Where does the break sit, and does it land near the V ≈ 59 km/s crossing where the framework's
   `A·V^0.5` law meets the MOND-required density?

## Why it matters

A broken-power-law ρ_crit is a **different model** from anything in the ledger. It is the only
version of the Jeans construction that is empirically honest, and it may be the only version
capable of tracking a₀ over part of the range. That is testable and currently untested — which is
the difference between *refuted* and *never looked*.

## Source

`explorer/findings/rho-crit-has-no-velocity-exponent-A-is-a-half-power-coefficient.md` §7, §"Open, not closed"

---
## CLOSED 2026-08-28 (explorer) — by dimensional analysis, no new data needed

`findings/scripts/sigma_floor_jeans_knee_exponents.py` (+ `_output.txt`). With the measured
`s = dlogΣ_c/dlogV = 1.85 ± 0.18`, the σ-varying Jeans knee `ρ_crit = 2πG V²Σ²/σ⁴` runs as
**V^+1.7 ± 0.36** where σ ∝ V (bright discs) and **V^+5.7 ± 0.36** where σ floors (dwarfs).
Both branches run the wrong way; the break makes a₀-tracking *worse* on the dwarf side.
a₀-tracking (V⁻²) needs s = 0 (Freeman) on one branch and s = −2 on the other — 10.3σ and
21.4σ from the measurement. The topic's hope ("the only version capable of tracking a₀ over
part of the range") is closed. Side result: the site's fixed λ_J = 317 pc is the *simultaneous*
assumption of Freeman's law and a σ floor — branch (c) with both scalings switched off by hand.
