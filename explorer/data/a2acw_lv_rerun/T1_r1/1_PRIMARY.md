# Round 1: Primary (Defender)

## 0. Bounding, and what I concede up front

- **The silicon "second data point" is not independent.** Chips were engineered to run in human-compatible environments. Silicon logic also runs at 4 K (cryo-CMOS) and at 700 K or more (SiC). I withdraw "AI range 253-423 K" as evidence.
- **"0.00001% of the cosmic range" is not evidence.** It depends on a linear scale and on counting stellar cores, where nothing organized was ever expected.
- **Scope:** *autonomously emerging, self-maintaining* systems built from ordinary electronic-bond matter. Excluded are systems kept alive by an externally engineered refrigeration or heating stack (dilution-fridge qubits, for example).

## 1. Strong claim (falsifiable)

> Any autonomous, self-maintaining system with (a) heritable or persistent memory, (b) error correction, (c) adaptive response, and (d) hierarchical timescales has its operating temperature set by T ≈ E_b / (κ·k_B), where E_b is the characteristic barrier energy of its memory/reaction medium and κ ≈ 20-60 is the stability-to-dynamics ratio. Because ordinary matter's E_b is fixed by atomic constants (Rydberg scale, α, m_e), including the weak non-covalent interactions that carry biological function, **the realized window is ~200-500 K for every such system, regardless of substrate chemistry.**

Concrete falsifiers:
1. Open-ended, heritable, error-correcting chemical evolution demonstrated autonomously at ≤100 K (Titan-type) or ≥600 K.
2. A substrate with E_b/k_B far from the ~10³-10⁴ K scale that sustains (a)-(d) without external thermal engineering.
3. A simulation of the Intent dynamics (§4.7's own validation strategy) showing no complexity peak versus T, or a peak whose location doesn't scale with E_b.

## 2. Weak claim (likely true)

> Every known autonomous complex system (all of terrestrial life, including extremophiles at 253-395 K) operates where the barrier-to-thermal ratio E_b/k_BT makes bits stable (≫1, Landauer/Arrhenius) yet still writable (≪ the bond-breaking limit), and this forces a window roughly one order of magnitude wide in T for any *fixed* medium.

The weak claim says the window is bounded and scales with E_b. It does **not** say 300 K is universal.

## 3. "Transcends substrate": three readings

| Reading | Meaning | Verdict |
|---|---|---|
| **Engineering** | Chips and cells happen to run at similar T | **Rejected.** Confounded by human design and proves nothing. |
| **Information** | Reliable memory needs E_b ≫ k_BT, and erasure costs k_BT ln 2. This holds for any substrate. | **Accepted, but weak.** It gives a *ratio* constraint, not an absolute T. |
| **Physics** | Substrates differ only through E_b, and atomic constants confine E_b for all electronic-bond matter to within roughly one order of magnitude, so the ratio constraint becomes a narrow absolute T band. | **Accepted as the real claim.** Its force depends on E_b being confined. |

"Transcends substrate" therefore means: **substrate enters only through one parameter (E_b), and that parameter is physically bounded.** It does not mean the temperature requirement is independent of chemistry.

## 4. Open vulnerabilities (stated before the Challenger finds them)

- **Mapping E_b to κ.** The values 20-60 are my estimate, not derived. Without a derivation, the strong claim risks being post-hoc fitted to Earth.
- **Non-electronic substrates** (nuclear matter, neutron-star-surface "chemistry", degenerate matter) fall outside the "ordinary matter" scope, which is arguably convenient.
- **The whitepaper's T ≡ ⟨V²⟩ definition** omits mass, so it is not temperature for mixed species. That is a separate defect and does not affect this claim.

## Status

- **Held:** the ratio constraint E_b/k_BT (information + Arrhenius), and the weak claim.
- **Narrowed:** the strong claim, to autonomous, electronic-bond, self-maintaining systems, with the window tied to E_b.
- **Failed:** the silicon-convergence argument as independent evidence, and the "0.00001%" statistic.
- **Would settle:** (i) a derivation of κ from first principles, or a Intent-dynamics simulation where the complexity peak shifts with E_b; (ii) an autonomous evolving chemistry found well outside 200-500 K.

**Questions for the Challenger (max 2):**
1. Is there any *autonomous* (not engineered-refrigeration) complex system you consider a credible counterexample inside the stated scope?
2. Would you accept a simulated complexity-vs-T peak scaling with E_b as sufficient to count the strong claim as supported, and if not, what is your stricter criterion?