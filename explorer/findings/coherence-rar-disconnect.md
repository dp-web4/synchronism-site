# Finding: The Coherence Function Cannot Produce the RAR — A Mathematical Proof of Disconnection

## Origin
Self-directed, triggered by today's visitor log (2026-03-30). Both the graduate student and researcher independently identified the same structural incoherence: the Scale Navigator shows C(ρ) with γ=2 at galaxy scales, while the galaxy rotation page uses the standard RAR interpolation function g_obs = g_bar/(1 − e^(−√(g_bar/a₀))). These are different equations. The site never shows the mapping between them.

## Summary
The coherence function C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)) and the RAR interpolation function ν(x) = 1/(1 − e^(−√x)) are mathematically incompatible as models of the same physics. In the deep MOND limit, C(ρ) predicts constant observed acceleration (violating the Tully-Fisher relation), while the RAR correctly predicts v⁴ ∝ M. The research archive already knows this — Session #574 explicitly calls C(ρ) "a reparametrization of MOND ν(x), not new physics" — but the site presents them as parts of one unified framework without acknowledging the disconnection.

---

## 1. The Two Equations

**Coherence function** (the framework's centerpiece):
```
C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))
```
At galaxy scales: γ = 2, so C(x) = tanh(2 · log(x + 1)) where x = ρ/ρ_crit

**RAR interpolation function** (used for galaxy rotation predictions):
```
g_obs = g_bar / (1 − e^(−√(g_bar/a₀)))
```
Or equivalently: ν(x) = 1/(1 − e^(−√x)) where x = g_bar/a₀

The site presents both equations without showing any mathematical connection between them.

## 2. Numerical Comparison

If we identify x = ρ/ρ_crit = g_bar/a₀ and ask whether C(x) could serve as the interpolation function:

| x (= g_bar/a₀) | C(x) | f_RAR(x) | 1/C (predicted boost) | 1/f_RAR (actual boost) |
|---|---|---|---|---|
| 0.01 | 0.020 | 0.095 | 50.3 | 10.5 |
| 0.10 | 0.188 | 0.271 | 5.31 | 3.69 |
| 0.50 | 0.670 | 0.507 | 1.49 | 1.97 |
| 1.00 | 0.882 | 0.632 | 1.13 | 1.58 |
| 2.00 | 0.976 | 0.757 | 1.03 | 1.32 |
| 10.0 | 0.9999 | 0.958 | 1.00 | 1.04 |

The functions have the same limits (0 → 0, ∞ → 1) but different behavior everywhere in between. C(x) rises too fast at low x and saturates too early.

## 3. The Killer: Deep MOND Asymptotics

This is not a quantitative quibble. The functions have **different asymptotic scaling** in the deep MOND limit (x → 0), which means they make qualitatively different predictions:

**Coherence function** (x → 0):
```
C(x) ≈ 2x    (linear in x)
→ g_obs = g_bar/C ≈ g_bar/(2x) = a₀/2    (CONSTANT — independent of galaxy mass)
```

**RAR function** (x → 0):
```
f_RAR(x) ≈ √x    (square root in x)
→ g_obs = g_bar/f ≈ g_bar/√x = √(g_bar · a₀)    (Tully-Fisher relation: v⁴ = GMa₀)
```

The Tully-Fisher relation (v⁴ ∝ M, observed across thousands of galaxies) is one of the tightest empirical correlations in extragalactic astronomy. The RAR reproduces it. **The coherence function, if used as an interpolation function, predicts that all galaxies in the deep MOND regime have the same observed acceleration regardless of their baryonic mass.** This is observationally wrong by orders of magnitude.

Verified numerically:
```
x = 0.001: g_obs/a₀ via C = 0.500 (constant), via RAR = 0.032 (∝ √x)
x = 0.0001: g_obs/a₀ via C = 0.500 (constant), via RAR = 0.010 (∝ √x)
x = 0.00001: g_obs/a₀ via C = 0.500 (constant), via RAR = 0.003 (∝ √x)
```

C(ρ) converges to a₀/2 for all galaxies. The RAR correctly tracks √(g_bar · a₀). These are qualitatively different predictions.

## 4. What the Research Archive Already Knows

The archive is aware of this disconnection but handles it through the MRH hierarchy defense:

**Session #574 (2026-02-08)**: "C(ρ) is a reparametrization of MOND ν(x), not new physics."

**Session #567 (2026-02-07)**: "The MRH principle in action. The RAR offset operates at the galaxy's Markov Relevancy Horizon — the level of abstraction where M/L is the relevant variable, not microscopic coherence... Trying to see coherence in the offset is a level-crossing error."

The proposed hierarchy:
```
Coherence (Planck MRH) → MOND dynamics (field MRH) → RAR offset (galaxy MRH)
```

**Session #567 Test 2**: Directly tested whether γ=2 can be recovered from galaxy data. Result: fitted γ = −0.001 (vs. predicted 2.0), R² = 0.365. "The tanh fit essentially collapses to a linear function."

**Session #574 Test 5**: "Best-fit γ from galaxy data: 0.10 (vs prediction of 2.0). Verdict: Untestable."

## 5. The Deeper Problem: The MRH Defense Is Unfalsifiable

The archive's response to the C(ρ)/RAR disconnection is to invoke MRH hierarchy: C(ρ) operates at a "more fundamental" level, and MOND dynamics emerge at a higher level. But this defense has three problems:

**Problem 1: The hierarchy has no mathematical derivation.** There is no equation showing how C(ρ) at the Planck MRH produces the RAR function at the galaxy MRH. The claim is stated but never demonstrated. A hierarchy without a bridging equation is not a theory — it's a promissory note.

**Problem 2: It makes C(ρ) empirically invisible at galaxy scales.** If the coherence function operates at a "lower MRH" and cannot be observed through galaxy rotation data (R² = 0.365, fitted γ ≈ 0.001), then the centerpiece equation of the entire framework is disconnected from its primary claimed domain of application. The galaxy rotation page is the framework's flagship empirical result — but the result uses the RAR function, not C(ρ).

**Problem 3: The actual derivation chain doesn't need C(ρ).** The galaxy rotation prediction reduces to:
```
ρ_crit (standard cosmology) → a₀ = cH₀/(2π) (dimensional analysis) → RAR (McGaugh 2016)
```
The coherence function appears nowhere in this chain. It's invoked as a "physical mechanism" ("at accelerations below a₀, the system crosses a coherence threshold") but the math works identically without it.

## 6. What This Means for the Framework

The framework presents itself as: "One equation, C(ρ) = tanh(γ · log(ρ/ρ_crit + 1)), describes reality from quantum to cosmic scales." But at galaxy scales — the domain where it has its most impressive empirical results — the equation it actually uses is the McGaugh RAR function, not C(ρ).

This creates a choice:
1. **C(ρ) IS the interpolation function** → It predicts the wrong asymptotics (violates Tully-Fisher). The framework is empirically falsified at its flagship scale.
2. **C(ρ) is NOT the interpolation function** (the current implicit position) → The framework has two disconnected mathematical models at the same scale. The "one equation" claim is misleading.
3. **C(ρ) PRODUCES the interpolation function via MRH emergence** → No derivation exists. This is a promissory note, not a theory.

The site currently occupies position 2 without acknowledging it. The archive explicitly acknowledges it (Session #574), but this information is not on the site.

## 7. Is There a Rescue?

**Possible rescue 1**: Derive a nonlinear Poisson equation from C(ρ) that produces the RAR function as its solution. The MOND unification page mentions "a nonlinear Poisson equation that implements the coherence function" but never shows it. If such an equation exists and produces ν(x) = 1/(1 − e^(−√x)) as its radial solution, that would be a genuine result. But it doesn't exist on the site or in the archive.

**Possible rescue 2**: Show that C(ρ) captures something the RAR misses — a prediction that C(ρ) makes at galaxy scales that the RAR cannot. The environment-dependent scatter (R² = 0.14) is the candidate for this, but the archive's own analysis shows the scatter is M/L-dominated, not coherence-dominated.

**Possible rescue 3**: Reframe C(ρ) as descriptive of non-gravitational physics (condensed matter, consciousness, etc.) and explicitly disclaim its application to galaxy dynamics. But the framework already tried this domain — and failed worst there (superconductor T_c off by 6.5×, melting points at 53% error).

## Implications for the Site

This is not a minor gap — it's a structural incoherence at the center of the framework. The site opens with C(ρ) as the "one equation" and its galaxy rotation page as the primary empirical validation. But the galaxy rotation page doesn't use C(ρ). The two core equations predict different physics (constant g_obs vs. Tully-Fisher) and cannot be mathematically connected without an intermediate derivation that doesn't exist.

The site's radical honesty — which is genuinely its strongest feature — should extend to acknowledging this disconnection explicitly.

## Action: Maintainer

1. **Galaxy rotation page**: Add a section titled "How does C(ρ) connect to this?" that honestly states: C(ρ) is not used directly as the interpolation function. The connection is: C(ρ) defines the transition scale a₀ (via ρ_crit and dimensional analysis), which is then plugged into the standard RAR function. This is an honest and defensible position — but it's different from "one equation describes galaxy rotation."

2. **Coherence function page**: Add a "Known limitations" section noting that C(ρ) has the wrong deep-MOND asymptotics if used directly as an interpolation function (linear vs. square-root scaling). The connection to galaxy dynamics requires an intermediate step that is currently not derived.

3. **Landing page**: Consider softening "one equation describes reality from quantum to cosmic" to acknowledge that at galaxy scales, the equation provides the transition scale but the interpolation function comes from standard MOND phenomenology.

4. **Scale Navigator**: Add a note at galaxy scales: "At this scale, C(ρ) defines the transition density. Galaxy dynamics use the RAR interpolation function with a₀ derived from ρ_crit."

## Open Threads

1. **Can a nonlinear Poisson equation bridge C(ρ) to the RAR?** The MOND unification page mentions one but never shows it. If it exists in the research sessions, it should be on the site. If it doesn't exist, the claim should be removed.

2. **Does the Hill function do better?** The coupling-coherence experiment showed Hill beats tanh. In the deep MOND limit, Hill C(x) = x^k/(x^k + x_half^k) → (x/x_half)^k for x << x_half. With k = 1/2, this gives C ∝ √x, matching the RAR asymptotics. Is k = 1/2 physically motivated?

3. **What IS C(ρ) good at?** If it fails at galaxy scales (wrong asymptotics) and condensed matter (6.5× errors), where does it work? The chemistry predictions (89% validated) are the best empirical domain — is C(ρ) a chemistry equation misapplied to gravity?

4. **The Tully-Fisher test**: The framework could be directly tested: does C(ρ) predict the Tully-Fisher relation? The answer is no (it predicts constant g_obs). This should be listed as a known failure on the honest assessment page if C(ρ) is claimed to describe galaxy dynamics.
