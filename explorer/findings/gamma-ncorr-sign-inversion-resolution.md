# Finding: The γ=2/√N_corr Sign Is Not Wrong — It's Undecidable Until C's Ontology Is Fixed (and the Tools Assume the One Reading That Makes It Wrong)

## Origin

Topic `gamma-ncorr-sign-inversion-derivation.md` (seeded 2026-06-06, maintainer WAKE, from visitor Pass 3/4). The topic poses a clean binary: *can we derive γ with the correct sign?* — where "correct" means more correlation → sharper transition, the opposite of what γ=2/√N_corr delivers.

## Summary

The topic's binary is **ill-posed as stated**, and resolving *why* it is ill-posed is more valuable than answering it. "The sign of the N_corr→sharpness map" only has a truth value once you fix **what C measures**, and the framework uses two mutually exclusive answers:

- **Reading A — C is a universal coherence scalar** (the reading the γ-calculator and phase-boundary visualizer assume: all systems plotted on one C∈[0,1] axis). Under A the sign **is** inverted, the visitor is right, and the fix is the single flip **γ ∝ √N_corr**, which — verified below — is a **fixed point at the galaxy regime (N_corr=1)** so it changes *nothing* the framework has calibrated, and simultaneously repairs **both** the sharpness inversion (2026-06-06) **and** the coherence-magnitude inversion (BCS-at-low-C, 2026-05-27). Those two "separate" findings are one sign error.

- **Reading B — C is a density-response function** (the `gamma-dual-role-problem.md` / `tanh-as-response-not-saddle-point.md` rescue: γ is an inverse effective temperature, C measures only the *density-driven part* of coherence). Under B the direction is defensible — a high-N_corr system is coherent for internal reasons, so its C(ρ) being flat/low correctly says "density isn't the driver here." **But reading B forbids exactly what the tools do:** you cannot plot ideal gas and BCS on a shared C axis and compare their transition "sharpness," because C is then a different quantity per system.

**There is no reading under which the current tools are self-consistent.** Under A the sign is wrong; under B the cross-system comparison the tools are built around is illegitimate. The sign inversion is the visible symptom; the disease is that C(ρ) is *presented* as Reading A while only Reading B is defensible.

Separately, I found a **new concrete contradiction the maintainer's 2026-06-06 caveat introduced**: the γ-calculator now flags the sharpness inversion as a problem (line 52) while its regime-description strings (lines 13, 16) still assert the inversion *as if correct* ("collective → C saturates near 1", "weakly-correlated → C near zero"). At any fixed density those magnitude claims are backwards. The page now contradicts itself.

## Research Notes

### 1. Why the binary is ill-posed

`γ` enters `C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))` as the multiplier on the log-density. "Sharpness of the transition" is a property of an **order parameter near a critical point**. Two prior findings already established that C(ρ) is *not* an order parameter:

- `tanh-as-response-not-saddle-point.md`: C(ρ) is the **response curve** of a two-state Boltzmann system in an applied field (m = tanh(βh)), not the self-consistent ferromagnet (m = tanh(βJzm)). No critical point, no exponents.
- `gamma-dual-role-problem.md` §6: at criticality N_corr → ∞ ⇒ γ → 0 ⇒ C → 0 — the framework would predict *decoherence at phase transitions*, the inverse of emergence.

So asking "does γ have the correct *transition-sharpness* sign" already presupposes a critical-phenomena reading the framework's own honest pages have abandoned for the compander reframe. The question only becomes answerable once you re-commit to a reading — and the two available readings give *opposite* answers.

### 2. Reading A: the sign is inverted, and the fix is free at the galaxy regime

Computed (`scripts/gamma_sign_inversion_resolution.py`), evaluating every γ-calculator preset at the **same** density ρ = ρ_crit:

| System | N_corr | γ (current 2/√N) | C @ρ_crit | γ (flip 2√N) | C @ρ_crit |
|---|---|---|---|---|---|
| Ideal gas | 1 | 2.0 | **0.882** | 2.0 | 0.882 |
| Liquid water | 10 | 0.632 | 0.412 | 6.32 | 0.9997 |
| Enzyme site | 100 | 0.200 | 0.138 | 20 | 1.000 |
| Ferromagnet | 10³ | 0.063 | 0.044 | 63 | 1.000 |
| BCS superconductor | 10⁷ | 6.3×10⁻⁴ | **0.0004** | 6325 | 1.000 |
| BEC | 10⁹ | 6.3×10⁻⁵ | 0.00002 | 6.3×10⁴ | 1.000 |

Three facts fall out:

1. **At fixed density, C is monotonically increasing in γ** (trivially: tanh is increasing, γ>0, ln(·)>0). So under the current formula the *least*-correlated system (gas) gets the *highest* coherence and the *most*-correlated (BCS/BEC) gets ≈0. To push BCS to even C=0.5 requires ρ/ρ_crit → ∞ (`arctanh(0.5)/6.3×10⁻⁴` decades of density — unphysical). This is the **same** inversion as the "coherence terminology" finding (`project_coherence_terminology_inversion`): BCS lands at the low-C end. The sharpness inversion and the magnitude inversion are **one** sign error, not two.

2. **Galaxy stars have N_corr = 1, where 2/√N = 2√N = 2 exactly.** N_corr=1 is a **fixed point** of the flip. Every result the framework actually calibrated (the SPARC galaxy fits, ρ_crit = A·V_flat², the γ=2 default) lives at N_corr=1 and is **invariant** under flipping the sign. The inversion only touches chemistry / superconductors / BEC / consciousness — exactly the multi-scale claims with no surviving quantitative success (chemistry null-class; superconductor T_c 6.5× wrong; consciousness non-computable).

3. **The flip γ ∝ √N_corr repairs both inversions at once.** Under it, collective systems (BCS/BEC) saturate to C≈1 *below* ρ_crit — i.e. a near-step transition squeezed into a narrow low-density window (**sharp**, matching the real BCS T_c) — while the structureless gas transitions gradually over decades (**gentle**). Both the sharpness order *and* the "dense/collective = high C" framing (the site's current C-axis label) come out correct.

So under Reading A, topic Q1 ("derive the correct sign") and Q2 ("does inverting break galaxy applications?") both have clean answers: **the correct sign is the inverse; deriving it is a one-line flip; and it breaks nothing calibrated because galaxies sit at the fixed point.** The cost is that the 1/√N "CLT/fluctuation-width" motivation must be abandoned entirely — but the site already disavows that motivation (line 48 caveat).

### 3. Reading B: the direction is fine, but it dissolves the tools

`gamma-dual-role-problem.md` §5 gives the only coherent rescue of the *current* sign: γ is an **inverse effective temperature**, not a coupling. Large N_corr ⇒ large collective fluctuations ⇒ high T_eff ⇒ small γ ⇒ the system is *insensitive to external density*. Then C(ρ)≈0 for BCS doesn't mean "BCS is incoherent" — it means "BCS's coherence is internal (Cooper pairs), not density-driven, so the density-response is flat." This is internally consistent and even physically appealing.

But it has a consequence the dual-role finding did not draw out: **under Reading B, C is not a common scalar across systems.** It is each system's *density-sensitivity*. A flat C(ρ) for BCS is a statement that "density is N/A here," not a low value on a shared coherence ruler. Therefore:

- It is **illegitimate to plot BCS and ideal gas on the same C∈[0,1] axis** (phase-boundary visualizer does exactly this).
- It is **meaningless to compare their transition "sharpness"** (the γ-calculator's regime map invites exactly this comparison).
- The visitor's critique cannot even be *posed* under Reading B — which is the tell that the visitor (and the tools) are operating under Reading A.

So Reading B saves the sign at the cost of invalidating the two tools that display the presets. You cannot have the dual-role rescue *and* the cross-system coherence comparison.

### 4. The new self-contradiction in the live tool (post-2026-06-06 maintainer fix)

`src/app/gamma-calculator/page.tsx`:

- **Line 52** (maintainer's new caveat): correctly flags that "more correlation → smaller γ → flatter tanh ... assigns the sharpest transition to the least-correlated system" — i.e. the inversion is a *problem*.
- **Lines 13 & 16** (`regimeInfo`, unchanged): still assert the inverted picture *as fact* — "Weakly Correlated: C(ρ) is near zero — low coherence"; "Collective Regime: C(ρ) saturates near 1." Line 15 likewise: "Strongly Correlated ... C(ρ) is high."

At any fixed density these magnitude claims are exactly backwards (gas C=0.88, BCS C=0.0004 at ρ_crit — see table). The page now simultaneously (a) tells the reader collective systems have C≈1 and (b) warns that the formula assigns collective systems the flattest, lowest-C behavior. Same defect on `phase-boundary-visualizer/page.tsx:14` ("large N_corr, small γ — the collective / strongly correlated regime" presented as the high-coherence end).

The regime descriptions appear to be silently importing **Reading B intuition** ("collective systems are coherent") into a tool that **computes Reading A output** (C as a function of γ alone, no density input) — the equivocation made concrete in 15 lines of code.

## Implications for the Site

The framework must **pick a reading and state it on the tools**, because the two readings are not cosmetic — they make opposite claims about the most-correlated systems and they license/forbid the tools' own presentation.

- If **Reading A** (universal scalar — what the tools display): the honest move is to either flip to γ ∝ √N_corr (free at the galaxy fixed point, repairs both inversions) **or** keep γ=2/√N_corr and label it openly as sign-inverted for all N_corr>1, with the regime-magnitude strings corrected to match (collective → C≈0 at any physical density, not "≈1").
- If **Reading B** (density-response — the only derivation-defensible reading): the γ-calculator and phase-boundary visualizer must **stop plotting multiple systems on a shared C axis** and stop inviting sharpness comparison; C is a per-system density-sensitivity, and a flat curve means "density is not the driver," not "low coherence."

Either way, the current state — Reading-A tools carrying Reading-B regime captions, with a caveat that contradicts the captions — is not tenable.

## Action: Maintainer

1. **`gamma-calculator/page.tsx` lines 13–16 (`regimeInfo`)**: the C-magnitude claims contradict the line-52 caveat *and* the formula. Either correct them to the actual fixed-density ordering (γ=2 gas → highest C; collective → C≈0 at physical densities) or remove the per-regime C-magnitude assertions entirely and let the caveat stand. **This is a P1 self-contradiction, not a polish item.**
2. **`phase-boundary-visualizer/page.tsx:14`**: same fix — "collective regime" is the *low*-C end of C(ρ) at fixed density, not the high end. Add the Reading-A/Reading-B note, or stop presenting presets on a shared coherence axis.
3. **Optional, higher-value framing**: record on `/parameter-derivations` that the sign question is *undecidable* without committing C to one ontology, and that the flip γ ∝ √N_corr is galaxy-invariant (N_corr=1 fixed point) — so the choice is free of empirical cost and is purely about which inconsistency the framework prefers to carry.

## Open Threads

1. **Does any preset other than the galaxy (N_corr=1) ever produce a *used* number?** If every quantitative success is at the fixed point, the entire N_corr→γ map is decorative for the framework's actual predictions, and the sign debate is moot for physics (it only affects the pedagogical tools). Worth confirming against the archive — I believe it's true but did not exhaustively check.
2. **Reading B + a self-consistent C.** The dual-role finding's "γ = inverse T_eff" is appealing; could the framework adopt a genuine response form C(ρ, T_eff=√N_corr/2) and *drop* the universal-scalar tools entirely? That would be honest but would also concede that "one coherence number across 80 OOM" is not what C is.
3. The flip's CLT cost: γ ∝ √N_corr cannot come from a fluctuation-width argument either (widths shrink with N). So neither sign has a fluctuation derivation — the flip just trades a sign-inverted motivated-ansatz for a sign-correct one with the same (absent) derivation. The real lesson is that **the 1/√N motivation is doing no work in either direction.**
