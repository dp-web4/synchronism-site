# Finding: The DE Sector's Local Horn Is a Cardassian Fluid, and Existing P(k) Pins γ to ½ Within ~5×10⁻⁶. The 08-18 "No Channel of Order ε⁰" Left Out the Jeans Term.

## Origin
Topic `prior-art-pass-on-every-defining-equation.md`, ask 2 ("execute the Koivisto ISW import onto n = 1 − 2γ").
Executed under a pre-registration committed before any computation or literature fetch
(`work/2026-09-14-wake-and-prereg.md`, commit `7d8efbf`).
Scripts and outputs:
- `findings/scripts/de_horn_l_as_a_fluid_jeans_term.py` (+ `_output.txt`)
- `findings/scripts/de_horn_l_fluid_controls.py` (+ `_output.txt`, post-hoc controls, not in the pre-registration)

## Summary
The maintainer imported the Cardassian ISW exclusion as reassurance: the likelihood fit (γ = 0.487 ± 0.02) sits "in
the same corner" that survives. Executed, it says the reverse. The 08-18 locality fork reads ρ_DE = f(ρ_m) at the
local density, which is the framework's own postulate. Read that way, the sector is a unified barotropic fluid with
**c_s² ≈ 0.223 ε** today (ε = 2γ − 1). The 08-18 growth ODE had no pressure-gradient term. With it, the term enters as
c_s²(k/aH)², which is 10⁴–10⁵ times larger than ε on the scales where P(k) is measured.

**Pre-registered rule, executed:** the fluid local horn is excluded unless **|ε| < 9.1×10⁻⁶ (ε < 0) / 9.9×10⁻⁶ (ε > 0)**,
i.e. γ = ½ ± 5×10⁻⁶. That band is ~5000× narrower than the DESI-fit 1σ. At the DESI best fit γ = 0.487, the matter
power ratio is **R = 9.7 at k = 0.01 h/Mpc** and 2.7×10²² at k = 0.1. The mechanism is the known one: it is
generalized-Chaplygin-gas UDM (Sandvik+2004) and fluid Cardassian (Amarzguioui, Elgarøy & Multamäki 2005). The 08-18
execution re-derived a question that paper had already answered, and got the opposite answer.

**Consequence.** A dark-energy sector read at local density (as a fluid), with a γ that differs measurably from ½, is
already excluded by data. So "power, not data, is the blocker" for TEST-26 is false on that reading. The sector keeps a
free γ only on the background-only horn, which gives up the local-density postulate the sector was built on.
**No registered prediction is refuted. Count stays 6.**

## Research Notes

### 1. The model and the one missing term
Horn L (08-18): ρ_DE = f(ρ_m) at the local ρ_m, with f = ρ_m(1−C)/C. Matter is number-conserved and DE is comoving
(otherwise ρ_DE would not stay a function of *local* ρ_m). Local energy conservation then forces p = ρ_m f′ − f, so the
total fluid is barotropic with

  c_s² = dp/dρ_tot = ρ_m f″/(1 + f′).

This is Gondolo & Freese's "fluid interpretation of Cardassian expansion" (hep-ph/0209322). It is the one completion
that keeps ρ_DE a function of local ρ_m without new fields. It reproduces exactly the background the 08-12 DESI fit
used. It was *not* one of the 08-11 completions: A was Appendix D (Einstein–de Sitter) and B was a Brans–Dicke scalar.

Sub-horizon linear, Newtonian gauge, N = ln a. The derivation uses the fluid equations with δ_tot = (1+w)δ_m, and
reduces to δ_m′ = −θ exactly:

  δ_m″ + (2 + dlnH/dN − 3c_s²) δ_m′ = [ 1.5 C (1+f′) − c_s² (k/aH)² ] δ_m

Set c_s² → 0 in both places and this is exactly 08-18's `growth(cluster_de=True)`. The 1.5 C(1+f′) source is their
`1 + F(1+w)`, because C·f′ = C·F·(1+w). **The only change is the pressure term.**

### 2. Controls (all pass)
| Control | Result |
|---|---|
| γ = ½ exactly | c_s² = 0; R − 1 = 0 at k = 0.001 and 0.1 |
| 08-18 limit (no Jeans, no friction), γ = 0.489 | R(k=0.001) = R(k=0.2) = 0.997571 (scale-free, as 08-18 said) |
| Sound-speed formula vs GCG closed form αA/ρ^{1+α} | 5.211966e-02 vs 5.211963e-02 (α = 0.1); 3.684210e-01 vs 3.684211e-01 (α = 1) |
| Convergence, γ = 0.49999, k = 0.1 | R − 1 = +0.23060 at rtol 1e-9/1e-12, z_ini 50/200/1000 |
| c_s²/ε at z = 0 | +0.22333 at γ = 0.4999, +0.22490 at 0.487: ε-independent at leading order |

### 3. R(k) at z = 0, same initial amplitude as γ = ½ (from `_output.txt`)
| γ | ε | k=0.001 | k=0.01 | k=0.03 | k=0.1 | k=0.2 |
|---|---|---|---|---|---|---|
| 0.487 | −2.6e-2 | 1.018 | 9.688 | 1.514e+05 | 2.71e+22 | 1.249e+48 |
| 0.499 | −2.0e-3 | 1.001 | 1.23 | 5.193 | 4.291e+04 | 1.604e+11 |
| 0.4999 | −2.0e-4 | 1 | 1.021 | 1.206 | 6.09 | 259.3 |
| 0.49999 | −2.0e-5 | 1 | 1.002 | 1.019 | 1.231 | 2.198 |
| 0.500005 | +1.0e-5 | 1 | 0.9989 | 0.9905 | 0.8987 | 0.6431 |
| 0.5005 | +1.0e-3 | 0.9993 | 0.899 | 0.348 | 0.006564 | 0.00303 |
| 0.513 | +2.6e-2 | 0.9822 | 0.01174 | 0.003251 | 0.0005737 | 5.526e-06 |

γ < ½ gives c_s² < 0: exponential blow-up. γ > ½ gives Jeans suppression and oscillation. This is the
Sandvik+2004 pair, one on each side. At γ = 0.499, the attribution (k = 0.1):

| Terms included | R − 1 |
|---|---|
| neither (08-18) | −2.1744e-04 |
| friction only | −7.4019e-04 |
| Jeans only | +4.2956e+04 |
| both | +4.2913e+04 |

**The Jeans term carries all of the effect.**

### 4. The pre-registered verdict
- Excluded (|R−1| > 10% at some k ≤ 0.1): **|ε| > 9.09e-06** (ε < 0), **> 9.86e-06** (ε > 0).
- Allowed (|R−1| < 1% for all k ≤ 0.2): |ε| < 2.35e-07 / 2.37e-07.
- DESI DR2 direct fit: ε = −0.026, σ_ε ≈ 0.045. **The fit's whole 1σ interval, apart from a 10⁻⁵ sliver around ½, is
  excluded.** The threshold choice moves the edge by a factor of a few, not by orders of magnitude.

### 5. The literal import: ISW
Proxy: ψ ∝ (1+f′)δ_m/a at k = 0.01 h/Mpc, net decay from z = 3 to z = 0, relative to γ = ½ (single mode, no Limber
projection). The ratio is **−6.983 at γ = 0.487**: the potential *grows* ×2.4 instead of decaying, so the
ISW–galaxy cross-correlation changes sign. Measured ISW cross-correlations are positive at a few σ. The ratio is 0.5855
at 0.499 and 1.388 at 0.501. **ISW alone gives |ε| ≲ 2×10⁻³.** That is already 20× tighter than the DESI fit. P(k)
gives another 200×. Koivisto+2005's ISW statement, imported, holds and is the *weaker* of the two constraints.

### 6. Robustness to escapes
- **Baryons don't carry the pressure** (the Beca+2003 GCG escape). Baryons pressureless, CDM carrying all of the DE
  momentum: at k = 0.1, γ = 0.49999 gives R_cdm − 1 = +0.273 and R_baryon − 1 = +0.0158. γ = 0.4999 gives +6.42 and
  +0.184. γ = 0.487 gives +3.7e22 and +2.4e16. This loosens the galaxy-P(k) band ~10×, to |ε| ~ 10⁻⁴. Lensing sees
  R_cdm, so lensing loosens nothing.
- **Separate DE fluid with its own velocity** (Koivisto's interacting-DM reading). The DE-alone adiabatic sound speed is
  c_a,DE² = x f″/f′ = −0.3530 (z=0), −0.7625 (z=1), −0.9431 (z=3) at γ = 0.4999. It is O(1), negative, and **not
  suppressed by ε**. That makes the gradient instability worse, not better. Stated analytically here, not integrated.
- **Modified-gravity reading** (matter conserved, no pressure force; momentum goes into effective shear stress).
  Koivisto+2005's abstract says this "too" over-produces the late ISW. Not executed for this g(ρ_m): **untested**.
  It also needs the covariant theory that 08-11 could not supply.
- **Horn N** (ρ_DE depends on the *mean* ρ_m only; smooth DE, perturbations like ΛCDM): untouched and surviving. But it
  is a w(z) fluid whose tie to ρ_m exists only in the background. Nothing local about "coherence" is left in it.

### 7. What this does to standing statements
| Statement | Where | Status |
|---|---|---|
| "no order-ε⁰ channel … still permanently unpowered" | PREDICTIONS.md 08-18 block; source proposal 20260818 §3–4 | **False for the fluid local horn.** The channel is O(ε·(k/aH)²). Data, not power, already decide it |
| "No instability, no screening requirement" | 20260818 §5 | **False.** c_s² < 0 for γ < ½ is a gradient instability (R ~ 10²² at the fit) |
| "Horn L … predicts no k-dependence — a shape test" | PREDICTIONS.md; 20260818 | **False once pressure is included.** R − 1 runs from +1.38e-05 to +1.20 between k = 0.001 and 0.2 at ε = −2e-5 |
| "sign undetermined at z = 0 … without the covariant completion" | 20260818 §6 | The perfect fluid *is* a covariant completion, and it determines the answer |
| "one perturbation channel … fσ₈ shift ≈ −0.22%, ΛCDM-like, 0.10σ" | `/dark-energy`, "Honest bounds" bullet 2 | Holds for Horn N only. On the local horn it is off by >20 orders at the fit |
| "the same corner this sector's likelihood fit lands in" | `/dark-energy`, Cardassian paragraph (added today) | **Under-refutation.** The surviving corner is ~5000× narrower than the fit's 1σ |
| TEST-26 "kill-or-tie" / "consistency check" | `/test-catalog`, PREDICTIONS (gated on dp) | For the local fluid reading, any DR3 γ ≠ ½ contradicts P(k) data that already exist. TEST-26 can only mean something on Horn N |

**This is not over-refutation, and here is why.** It refutes a *completion*, not a registered claim. The completion
is the one that implements the sector's defining postulate (C at local density), and every term in it is checked
against a closed form. The error it corrects ran in the framework's favour ("unpowered, not refuted"). The honest
counter-weight is that Horn N survives, and the DESI fit is valid there.

### 8. The prior-art timeline, which is the A2ACW data point
From `git log -S` over both repos (first commit containing the string):

| Class | Defining form in archive | First cited | Gap / note |
|---|---|---|---|
| Cardassian (Freese & Lewis 2002) | Session 100, 2025-12-08 | 2026-09-14 (both repos) | ~280 days; visitor-prompted |
| Fluid-Cardassian / GCG sound-speed exclusion (Sandvik+2004; Amarzguioui+2005) | executed without it 2026-08-18 | Chaplygin: site 2026-09-14 (visitor log), archive never; Sandvik/Amarzguioui: this session | 27 days, and **the execution got the published answer backwards** |
| Koivisto+2005 ISW | — | 2026-09-14 | imported today, executed today |
| Refracted Gravity (Matsakos & Diaferio) | galaxy field equation | 2026-08-25 (both) | found after execution |
| Toner–Bacon 2003 | CHSH constructions | archive 2026-02-07, site 2026-09-11 | 7-month lag between repos |
| Simple μ ≡ γ = ½ | RAR fits | archive 2025-11-30, site 2026-05-28 | early in archive, 6 months to site |

The new row sharpens the maintainer's point. The Cardassian gap was *omission*: prior art nobody looked for. The 08-18
row is worse. A one-sentence 2005 JCAP abstract ("the fact that the sound speed is non-zero in these models makes them
inconsistent with the galaxy power spectrum") contained the answer. The archive's own execution then published the
opposite: "no instability". That execution was checked symbolically, and a publisher correction touched it, which
shows that verifying *the algebra that was written* does not catch *the term that wasn't*. The proposed discipline (a
prior-art pass before execution) would have caught this. Algebra review would not.

## Implications for the Site
The DE sector is not "ΛCDM with an unpowered ε". It is a **locality trilemma**:
1. **Local + fluid**: γ_DE = ½ within ~10⁻⁵. The sector is ΛCDM, and its parameter is fixed by data.
2. **Local + non-fluid (modified gravity)**: needs a covariant theory the archive does not have. The literature's MG
   Cardassian perturbations are also ISW-excluded (imported, untested here).
3. **Non-local (Horn N)**: γ free, DESI fit valid, but the sector no longer evaluates coherence at the local density,
   which is the framework's one-equation premise.

This parallels the galaxy sector, where density keying had to be forced baryon-local (09-12). In cosmology, locality
is what the data kill.

## Action: Maintainer
- **P0 `/dark-energy`, Cardassian paragraph.** Replace "the same corner this sector's likelihood fit lands in" with the
  executed numbers: read at local density as a fluid (Gondolo–Freese), existing P(k) requires |2γ−1| ≲ 10⁻⁵. The DESI
  fit's γ = 0.487 gives a matter power ratio of ~10 already at k = 0.01 h/Mpc. The fit is valid only for the
  background-only reading. Cite Amarzguioui, Elgarøy & Multamäki 2005 (JCAP 01, 008; astro-ph/0410408) and
  Sandvik+2004 (PRD 69, 123524).
- **P0 `/dark-energy`, "Honest bounds" bullet 2.** "The one perturbation channel derived … −0.22%, 0.10σ" is the
  pressure-free local horn. Say that the fluid local horn adds a Jeans term that dominates by (k/aH)², and what it
  forces (above). "Almost no perturbation theory" should become "one covariant perturbation theory, and it pins γ".
- **P1 back-annotate** PREDICTIONS.md's 08-18 block and `de_locality_fork_perturbation_channel_factor_two_20260818.md`:
  - "no order-ε⁰ channel", "no instability" and "no k-dependence" hold only without the pressure term.
  - With it, the fluid local horn is excluded outside |ε| ~ 10⁻⁵.
  - "Power, not data" is true only on Horn N.
  - Count stays 6.
- **P1 TEST-26 registration (dp-gated).** State which horn DR3 tests. On the local fluid horn, the outcome is already
  fixed by P(k).
- **P2 `site_lint.py`**: flag "permanently unpowered" / "power, not data" next to "DE sector" or "TEST-26" without
  "background-only" or "Horn N" in the same paragraph.

## Open Threads
- **MG reading, executed.** Koivisto's modified-gravity branch (conserved matter plus effective anisotropic stress) for
  *this* g(ρ_m) near ε = 0. Is the ISW excess O(ε) there, or also enhanced? It is the only local reading left with a
  free γ.
- **Does the same kill reach the galaxy sector's "one γ" claim?** If γ is universal and the DE sector is local, then
  γ_galaxy = ½ within 10⁻⁵. SPARC's 0.489 ± 0.11 is consistent with that, so there is no tension. But "γ = 0.489 is
  MOND's simple μ, γ = ½ is Λ" (08-12) would then say the galaxy and DE sectors can only share a γ at the Λ point.
- **Asks 1 and 3 of the topic.** Only a git-log timeline was done. The remaining work is a pre-registered hit
  definition and an automated nearest-class pass over the other defining equations (γ = 2/√N_corr, the C* criterion).
- **Audit-method lesson.** Symbolic verification validates what was written. Scan archive executions for
  "quasi-static" growth equations applied to anything with w ≠ −1 in a *local* reading. The Jeans term is the standard
  omission.

Sources: [Koivisto, Kurki-Suonio & Ravndal 2005](https://arxiv.org/abs/astro-ph/0409163) ·
[Amarzguioui, Elgarøy & Multamäki 2005](https://arxiv.org/abs/astro-ph/0410408) ·
[Sandvik, Tegmark, Zaldarriaga & Waga 2004](https://arxiv.org/abs/astro-ph/0212114) ·
[Gondolo & Freese, fluid interpretation](https://arxiv.org/pdf/hep-ph/0209322) ·
[Fay & Amarzguioui 2006](https://inspirehep.net/literature/724849)
