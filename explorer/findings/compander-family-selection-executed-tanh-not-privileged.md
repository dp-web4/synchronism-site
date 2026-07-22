# Finding: Compander-Family Selection EXECUTED on Real SPARC — tanh Not Privileged, but the Family Is Not Degenerate Either

**Date**: 2026-07-22
**Status**: EXECUTED (script: `explorer/scripts/compander_family_aic_bic_real_sparc.py`)
**Verdict rule**: pre-fixed in `explorer/logs/2026-07-22.md` §WAKE before running.

## Origin

Queued topic `tanh-compander-family-aic-bic.md` (open since 2026-06-01; Grad Student request 2026-07-01: "An AIC/BIC comparison across that family would settle whether 'tanh' carries any content"). Recorded gap: `project_governing_equation_gap.md` — the functional form was chosen, never selected.

## Summary

Ten functional forms fit to the real SPARC RAR (2,807 points, Lelli+2016 mass models, McGaugh-2016 prescription, identical pipeline to the ΔBIC=+184 run, which this run reproduces exactly). Three results:

1. **tanh carries no statistical content** — under the pre-fixed rule, tanh is indistinguishable from erf-log, free-Hill, and the generalized-ν family (mutual ΔBIC ≤ 8.9, bar was 10). It also never *wins*: among the four viable 2-parameter members, tanh finishes **last** (ν-δ 0.0, erf-log +3.3, Hill +7.7, tanh +8.9). Form-selection null confirmed by execution.
2. **But the compander family is NOT globally degenerate** — SPARC refutes three members that satisfy all four of the site's qualitative constraints: arctan-log (ΔBIC +46.7 vs McGaugh), algebraic-sigmoid-log (+23.8), Gompertz (+58.0). The site's sentence "Several compander functions satisfy all four constraints: logistic, erf, arctan, Hill, and tanh" is now **partially wrong by execution**: arctan satisfies the qualitative constraints and is refuted by the data. The constraint list is incomplete — the data adds asymptotic-*rate* constraints the qualitative list misses.
3. **The mystery of γ → 0.49 dissolves**: the data is not selecting a sigmoid, it is selecting *asymptotics*, and γ is just tanh-log's knob for the Newtonian-return exponent. Exactly: tanh(γ·ln(1+y)) = 1 − 2(1+y)^(−2γ) + O((1+y)^(−4γ)), so the return-to-Newton exponent is q = 2γ. The free fit lands γ = 0.489 ⇒ q = 0.98. Independently, free-Hill (μ = 1 − y^(−n) + …) lands n = 0.975. **Two different parametrizations converge on the same effective exponent q ≈ 1 — the value hard-coded in MOND's "simple" μ-function** (Hill n=1, which ties McGaugh's ν at equal parameter count, ΔBIC −0.7). γ = 0.49 was never a number in need of derivation; it is the tanh-family's encoding of the simple μ-function. The framework's γ=2 pins q=4: the curve re-Newtonianizes far too abruptly above a₀ (deviation from Newton at y=30: 2×10⁻⁶ vs the data-preferred ~5×10⁻²) — the +184 kill restated in asymptotic language.

## The Executed Table

N = 2,807 points (eVobs/Vobs < 0.10, Υ_disk=0.5, Υ_bul=0.7), global fits, log-space SSR on g_obs, BIC = N·ln(SSR/N) + k·ln(N), ΔBIC vs McGaugh ν. Data leverage: y = g_obs/a₀ ∈ [0.03, 62] (only 12 points above y=30).

| Model (μ-slot unless noted) | k | shape | RMS (dex) | ΔBIC | ΔAIC |
|---|---|---|---|---|---|
| McGaugh ν (reference) | 1 | — | 0.1437 | 0.0 | 0.0 |
| generalized ν-δ (contains McGaugh at δ=½) | 2 | δ=0.440 | 0.1435 | −1.8 | −7.7 |
| **tanh-log γ=2 (framework)** | 1 | 2.0 pinned | 0.1485 | **+184.0** | +184.0 |
| Hill n=1 (MOND "simple" μ) | 1 | 1.0 pinned | 0.1437 | −0.7 | −0.7 |
| tanh-log free γ | 2 | γ=0.489 | 0.1437 | +7.1 | +1.2 |
| erf-log free γ | 2 | γ=0.388 | 0.1435 | +1.5 | −4.4 |
| Hill free n | 2 | n=0.975 | 0.1437 | +5.9 | −0.0 |
| arctan-log free γ | 2 | γ=2.15 | 0.1447 | **+46.7** | +40.7 |
| algebraic u/√(1+u²), u=γln(1+y) | 2 | γ=0.662 | 0.1441 | **+23.8** | +17.9 |
| Gompertz exp(−y⁻ⁿ) | 2 | n=0.609 | 0.1450 | **+58.0** | +52.1 |

Robustness: all minima re-confirmed by a 20–25-point shape-grid scan with a vectorized bisection inverter (independent of the Nelder-Mead runs); grid-best RMS values agree to ≤0.0002 dex. Pipeline sanity: reproduces the published γ=2 kill (+184.0) and free-γ result (0.489, +7.1) exactly.

Identity notes (the site's family list double-counts): the logistic sigmoid applied to the log-argument, 2/(1+e^(−2u))−1, **is** tanh(u) exactly; and the Hill function **is** the logistic in ln(y). "Logistic" is not a distinct family member. The audio μ-law compander F(x)=ln(1+mx)/ln(1+m) maps [0,1]→[0,1] and has no parameter-free adaptation to the unbounded μ-slot; documented, not fit.

## Why the Three Refuted Members Die: Asymptotics, Not Shape

- **Deep-MOND end (y→0)**: the RAR low-acceleration slope of ½ forces μ ∝ y. Gompertz has an essential singularity (μ vanishes faster than any power) — refuted (+58) even after the fit softens n to 0.609.
- **Newtonian end (y→∞)**: the data punishes returns to Newton slower than ~power-law. arctan-log and algebraic-log both have tails polynomial in u = γ·ln(y), i.e. their deviation from Newton decays only as powers of **1/ln(y)** — slower than any power of y. Refuted (+47, +24; the slower one punished harder).
- The survivors are exactly the log-argument sigmoids with **exponential-or-faster tails in u** (tanh: e^(−2u) → power-law in y; erf: Gaussian in u → super-power in y) plus the natively power-law Hill and the exponential ν-family. Crisp restatement of "why tanh (sort of)": *composing a logarithm with a sigmoid is safe only if the sigmoid's tail is at least exponentially fast — tanh survives the log because its tail is exponential. But so does erf, and the data cannot tell them apart.*

So SPARC does have real selection power inside the compander family — about **the two asymptotic rates**, and only those. Between any two members with acceptable asymptotics, the data is silent. The "content" of a compander choice is entirely in its asymptotic pair (deep-MOND exponent, Newtonian-return rate); the sigmoid's name contributes nothing measurable.

## The Cross-Dataset Squeeze (inferred, not executed — flagged)

The SPARC-preferred return exponent q ≈ 1 is exactly the class the Solar System excludes in modified-gravity MOND. Hees, Famaey, Angus & Gentile 2016 (MNRAS 455, 449; arXiv:1510.01369 — conclusions verified against the PDF today) combined 27 rotation curves with the Cassini radio-science quadrupole bound: the EFE makes the Solar System probe the transition function at y ≈ g_ext/a₀ ~ 1–3 (mid-transition, same region SPARC constrains). Their verdict: the ν̃_α family is *completely rejected*; ν_α and ν̂_α survive only at large α (fast return — the "simple" α=1 member, our q=1, is excluded); only ν̄_α with α ≥ 2 is compatible for almost all α; and the constraints "do not apply to, e.g., modified inertia theories." Desmond 2024 (MNRAS 530, 1781) sharpens this into a direct tension between the RAR-preferred function and the Solar-System quadrupole in modified-gravity MOND.

Consequence for the framework, stated with the required hedge: tanh-log at its galaxy-fitted γ=0.489 is curve-close to the simple μ through the transition region, so **in any modified-gravity reading it plausibly inherits the Cassini exclusion** — while the γ that would pass Cassini comfortably (large γ = fast return) is the direction SPARC already kills at +184. The two datasets squeeze the tanh-log family from opposite ends. This is *inferred from the literature mechanism, not executed*: the runnable next step is computing the EFE quadrupole Q₂ for tanh-log(γ) across γ and overlaying the Cassini bound on the SPARC ΔBIC(γ) curve — if no γ passes both, the family is dead as modified gravity independent of everything else on the site. (Escape hatches, honestly listed: modified inertia; and the framework's C(ρ) is a local-density map, which the locality no-go already kills on separate grounds — this squeeze is a second, independent closure route.)

## Implications for the Site

1. `/coherence-function` (page.tsx:124): "Several compander functions satisfy all four constraints: logistic, erf, arctan, Hill, and tanh" — **needs correction**. arctan is refuted by execution (+46.7); "logistic" double-counts tanh (identity above). Honest replacement: "Several companders satisfy the four qualitative constraints, but SPARC data refutes three of them (arctan, algebraic, Gompertz) on asymptotic-rate grounds; among the survivors (tanh, erf, Hill, exponential-ν) the data cannot distinguish — form selection executed 2026-07-22."
2. The line at page.tsx:130 ("phenomenological choice... not the uniquely forced form") is now *strengthened and sharpened by execution*: not uniquely forced, and last among the four viable members, though inside the indistinguishability band.
3. **γ=0.49 finally has a mechanism** — everywhere the free-γ→0.49 result appears (gamma-calculator, galaxy-rotation, honest-assessment), one sentence can replace mystery with structure: "γ controls the Newtonian-return exponent (q = 2γ); the fit pins q ≈ 0.98, cross-validated by free-Hill n = 0.975 — the data is converging on MOND's simple μ-function, not on a special γ." This also upgrades the "curve-equivalent to MOND" claim from free-parameter coincidence to identified mechanism.
4. Frontier note candidate (Hees 2016 / Desmond 2024): the galaxy-preferred return class is Solar-System-excluded in modified gravity — a second independent closure route beside the locality no-go, pending the Q₂ execution.

## Action: Maintainer

- **P1**: Fix `/coherence-function` compander sentence (item 1 above) + add the executed selection table (or a link to this finding) under the compander-class section. The current text asserts family-degeneracy that the execution has now *partially refuted* — the site should not understate its own data's selection power.
- **P2**: Add the γ=0.49 mechanism sentence (item 3) to `/gamma-calculator` and `/galaxy-rotation` where free-γ=0.49 is discussed.
- **P3 (optional)**: Hees/Desmond frontier note on `/galaxy-rotation` or `/honest-assessment`, hedged as inferred-not-executed, modified-gravity-only.

## Open Threads

- **Q₂ execution** (self-seeded, runnable): compute the EFE Solar-System quadrupole for tanh-log(γ) vs γ; overlay Cassini bound on SPARC ΔBIC(γ). Closes or breaks the squeeze.
- Chemistry-data variant of the family comparison (topic's alternate dataset) — unexecuted; lower value now that the SPARC verdict exists, since the chemistry targets are Z-monotonic and any smooth form fits (known null-model result).
- Protocol observation for `test-preregistration-protocol`: the pre-fixed verdict rule ("privileged" = beat every same-k member by ΔBIC>10) prevented today's most tempting misread — reporting tanh's last-place finish (+8.9 behind ν-δ) as a refutation. It is not; it is inside the band. The rule caught it in both directions.

## Sources

- [Hees, Famaey, Angus & Gentile 2016, MNRAS 455, 449](https://arxiv.org/abs/1510.01369) — combined Cassini + rotation-curve constraints on MOND transition functions (conclusions verified against PDF).
- [Desmond 2024, MNRAS 530, 1781](https://ui.adsabs.harvard.edu/abs/2024MNRAS.530.1781D/abstract) — RAR vs Solar-System quadrupole tension in modified-gravity MOND.
- Lelli, McGaugh & Schombert 2016 mass models (`MassModels_Lelli2016c.mrt`, local copy).
