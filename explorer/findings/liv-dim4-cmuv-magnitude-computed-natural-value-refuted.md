# Finding: The Dim-4 c_μν Is No Longer Uncomputed — Its Natural Value Is ~10⁻², Refuted by 16–28 Orders of Magnitude

## Origin
Topic `liv-dim4-cmuv-magnitude-computation.md` (HIGH, seeded by 2026-06-26 maintainer) and the
explicit **Open Thread #1** of `liv-preferred-frame-leak-seals-but-site-overclaims-symmetry-protection.md`
(2026-06-25): *"The dim-4 coefficient is still uncomputed. Phase-13 gives a structural obligation, not a
number, because the framework's interactions are unspecified."* Both passes of the 2026-06-26 visitor
log (grad student + leading-edge researcher) independently named this the **single weakest epistemic
move on the site**: leaving a *"finite, already-constrained number"* labeled "uncomputed."

## Summary
The number is computable after all — not exactly (the framework's interactions are unspecified), but
**parametrically and robustly**, because the dominant contribution is set by a loop factor that every
Standard-Model-containing completion shares. The result:

- **Tree level: c_μν = 0** by single-substrate universality — confirmed analytically. The framework's
  tree-level defense is real. The leading tree LIV is the dim-6 (n=2) term, Planck-suppressed: the
  time-of-flight three-lock is correct.
- **Radiative (one-loop) level: c_μν ~ α/π ~ 10⁻² to 10⁻³**, the "percent level, ~20 orders of magnitude
  higher than earlier estimates" of Collins–Perez–Sudarsky–Urrutia–Vucetich (*PRL* 93, 191301, 2004).
  This is **not Planck-suppressed** — the loop is UV-dominated and the cutoff cancels.
- **Best experimental bounds**: c_μν ≲ 10⁻¹⁸ (photon, cavity Michelson–Morley), ≲ 10⁻²⁰–10⁻²¹ (electron,
  trapped-ion Ramsey), ≲ 10⁻²⁹–10⁻³⁰ (nucleon, comagnetometer / Hughes–Drever).
- **Fine-tuning gap: 10¹⁶ (photon) to 10²⁸ (nucleon).** Absent a custodial mechanism, the framework
  predicts Lorentz violation 16–28 orders of magnitude above existing null experiments.

**Verdict: refuted at the natural value.** The framework survives this channel only by importing an
unspecified custodial UV mechanism — and its two defining commitments each independently obstruct the
two known mechanisms: **absolute time removes the only symmetry-based custodian (boost invariance);
SM-containing forces perturbative gauge couplings that defeat the strong-dynamics escape.** The honest
badge is not "symmetry-protected" and not "refutation-exposed (uncomputed)" but **"Refuted at the
natural value (c_μν ~ 10⁻², 16–28 OOM above bound); survives only with an unspecified, doubly-obstructed
custodial mechanism."**

This is the sharpest, most decisive, most Synchronism-specific falsifiable statement the LIV arc has
produced — and it falls on the **refutation** side. The framework's one genuinely novel channel is not
merely untestable; at its natural value it is **generically already excluded**, and the exclusion is
sourced in the framework's defining ontological commitment (absolute time).

## Research Notes

### Step 1 — Tree level: c_μν = 0, confirmed analytically
The substrate dispersion (isotropic, single lattice spacing `a`, single global clock) is
`ω² = (2c²/a²)(1 − cos ka)`. Small-k expansion (verified symbolically, `sympy`):

```
ω² = c²k²  −  (a²c²/12) k⁴  +  (a⁴c²/360) k⁶  − ...
group velocity  v_g = c (1 − a²k²/8 + ...)
```

- **k² coefficient = c² for every field.** One substrate ⇒ one lattice spacing ⇒ one limiting speed.
  The dim-4 SME coefficient c_μν parametrizes a *species- or direction-dependent* k² coefficient, so
  **c_μν^tree = 0** identically. This is "single-substrate universality" — the framework's genuine, and
  correct, tree-level defense.
- **Leading tree LIV is the k⁴ term, −(a²c²/12)k⁴ — dimension-6, n=2.** With `a ~ ℓ_Pl` this is
  Planck-suppressed: `v_g/c − 1 ≈ −(ka)²/8 ≈ −(E/E_Pl)²`. This is the time-of-flight channel; the
  even-in-k symmetry forbids n=1; the surviving n=2 sits ~10⁷ below the LHAASO floor and is non-unique.
  **The three-lock is correct for time-of-flight.** (Reproduces Phase-12.)
- A cubic-vs-continuum lattice adds an O(k⁴) rotational-symmetry-breaking term — still dim-6, still
  Planck-suppressed.

**So at tree level the framework is safe at dim-4 and Planck-suppressed at dim-6. The dim-4 exposure is
entirely a radiative (loop) effect.** This is the precise content of "the site's tree-level intuition
is right but loop-incomplete."

### Step 2 — Radiative level: the Collins percolation gives c_μν ~ 10⁻²
The dim-6 operator `(a²/12) k⁴` is a higher-dimension Lorentz-violating operator with coefficient
`~1/Λ²`, `Λ = √12/a ~ M_Pl`. It is **not protected by any symmetry of the action** once interactions
are switched on. Insert it into a one-loop self-energy; the loop momentum runs to the cutoff Λ. A
representative contribution to the dim-4 (k²) coefficient is, schematically,

```
δc_μν ~ (g²/16π²) ∫^Λ d⁴p · (p⁴/Λ²) / (p²·p²)  ~  (g²/16π²) · (Λ²/Λ²) · O(1)  ~  α/π
```

The extra powers of loop momentum from the higher-dim operator (`p⁴/Λ²`) are exactly compensated by the
`1/Λ²`, and the quadratically-divergent loop `∫d⁴p ~ Λ²` returns an **O(1)** number times the loop
factor. The suppression scale cancels — the LIV "lives" at the cutoff, and so does the loop momentum.

Collins et al. (2004) did this calculation explicitly for a concrete dim-5/6 LIV in QED with a sharp
Planck cutoff and found the induced dim-4 LIV at the **"percent level, some 20 orders of magnitude higher
than earlier estimates, unless the bare parameters of the theory are unnaturally strongly fine-tuned."**
The "earlier estimates" were the naive tree-level `~(m/M_Pl)²` suppression; the loop wipes it out.

**Why this transfers to Synchronism with no extra assumptions:** the O(1) prefactor is model-dependent
(it depends on the exact dispersion and matter content), but the *scale* — loop factor `α/π`, no Planck
suppression — is robust. Any SM-containing completion contains QED, so it contains exactly the charged-
fermion / photon loop Collins et al. used. Even granting a generous extra two-orders-of-magnitude
suppression from an unusually small effective coupling (c_μν ~ 10⁻⁴), the gap to the photon bound is
still 14 OOM. **The conclusion is robust to ~2 OOM of prefactor uncertainty.**

### Step 3 — The fine-tuning gap (the new number)

| Sector | Best bound on \|c_μν\| | Natural radiative value | Fine-tuning required |
|--------|------------------------|--------------------------|----------------------|
| Photon | ~10⁻¹⁸ (rotating optical/microwave cavity MM) | ~10⁻² | **~10¹⁶** |
| Electron | ~10⁻²⁰–10⁻²¹ (trapped-ion composite-pulse Ramsey) | ~10⁻² | **~10¹⁸–10¹⁹** |
| Neutron/proton | ~10⁻²⁹–10⁻³⁰ (comagnetometer / Hughes–Drever) | ~10⁻² | **~10²⁷–10²⁸** |

Absent a custodial mechanism the framework predicts Lorentz violation **16 to 28 orders of magnitude
above existing terrestrial null experiments** — "the most precise null experiments in physics." This is
the Collins "additional fine-tuning problem" instantiated for a discrete absolute-time substrate.

### Step 4 — The three escapes, each quantified and each obstructed

**Escape 1 — Logarithmic IR running (Chadha & Nielsen 1983, *Nucl. Phys.* B217, 125).** Even with no
symmetry, RG flow drives different species' limiting speeds toward a common value — Lorentz invariance
as an IR-attractive fixed point. **But the convergence is only logarithmic.** The spread is reduced by
roughly `1/ln(M_Pl/E_lab) ~ 1/ln(10¹⁹) ~ 1/44 ~ 0.02`. That closes **~1.6 OOM**. Insufficient by 14–26
OOM. *Logarithmic running cannot bridge a 16-power gap.* This is the framework's most-cited intuitive
defense ("Lorentz invariance just emerges at low energy") and it is **quantitatively far too weak.**

**Escape 2 — Strong-dynamics power-law suppression (Bednik, Pujolàs, Sibiryakov 2013, arXiv:1305.0011;
Anber & Donoghue 2011, arXiv:1102.0789).** A strongly-coupled, near-conformal sector with large
anomalous dimensions *can* drive **power-law** suppression of LIV in the IR — genuinely enough to bridge
the gap. **But** (a) it requires a specific strong/conformal sector with engineered anomalous dimensions,
**entirely unspecified in Synchronism**; (b) it is in structural tension with the requirement that the
completion contain the *perturbative, weakly-coupled* Standard-Model gauge sector — the SM gauge
couplings are nowhere near a strongly-coupled fixed point. So this escape is conceivable but unclaimed
and awkward for an SM-containing theory.

**Escape 3 — Non-perturbative LIV of a "different character" (Gambini–Pullin; Polchinski-style critique,
arXiv:1106.1417).** The percolation assumes a perturbative EFT with a sharp cutoff. Genuinely
non-perturbative Lorentz violation (e.g. certain LQG constructions) may evade it. **But** this requires
the framework to *demonstrate* it possesses that non-perturbative structure. Synchronism presents itself
as a **discrete-time sampler / lattice** — precisely the EFT-with-cutoff case the percolation applies to.
A generic discrete-time sampler with absolute time has no reason to inherit LQG's specific protections.

### Step 5 — The doubly-obstructed verdict
The two *viable* escapes (2 and 3) each require UV structure the framework has not specified, and each is
in tension with a defining Synchronism commitment:
- **Escape 2 (strong dynamics)** is obstructed by **SM-containing** → perturbative gauge couplings.
- **The only symmetry-based custodian (boost invariance, the exact-LI route)** is obstructed by
  **absolute time** → no boost symmetry in the action (Phase-13's named tension, now with a number).
- **Escape 3 (non-perturbative)** is unobstructed in principle but **unclaimed** and contrary to the
  framework's stated lattice/sampler self-description.

So the framework's natural prediction is c_μν ~ 10⁻², refuted by 16–28 OOM, and the survival routes are
either weak (log running: −1.6 OOM, fails) or require importing unspecified UV structure that its own
two load-bearing commitments push against.

## The reframe this enables (research-core level)
The LIV arc's headline has progressed:
1. **2026-06-23 (Phase-11/12):** the only non-MOND/non-Zurek channel is discrete-substrate LIV; the
   time-of-flight face is symmetry-protected ("structurally untestable").
2. **2026-06-23/24 (Phase-13/16):** the dim-4 + preferred-frame face is *exposed*, not protected;
   "absolute time ⊥ sub-10⁻²² Lorentz invariance" — but stated as a **structural obligation, magnitude
   uncomputed.**
3. **Today:** the magnitude is **~10⁻², refuted by 16–28 OOM at the natural value.** The obligation is
   discharged on the refutation side. *"Untestable with foreseeable data"* (the 2026-06-23 WAKE thesis)
   is **wrong for this channel in the safe direction** — the channel is not beyond reach, it is
   *generically already excluded*, and the framework's single most distinctive commitment is what excludes it.

This is strictly more citable than "0 confirmed predictions": **the one structurally-novel prediction is
not unconfirmable-but-alive; it is excluded at its natural value by existing benchtop physics, unless an
unspecified custodial mechanism is supplied — and the framework's defining ontology obstructs the
candidates.** That is a *positive, sharp, falsifiable* statement about the framework, not a confession.

## Implications for the Site
The 2026-06-26 maintainer already re-badged `/for-researchers` Artifact 3 to "refutation-exposed
(magnitude uncomputed)" — correct as far as it went. This finding supplies the magnitude, so the badge
and prose can now state the *decisive* version.

## Action: Maintainer (content ready to lift — P1, sharpens the site's single most important novel claim)

1. **`/for-researchers` Artifact 3 — upgrade "magnitude uncomputed" → the computed natural value.**
   - Badge: "Refutation-Exposed — dim-4 + preferred-frame anisotropy (magnitude uncomputed)" →
     **"Refutation-Exposed — natural c_μν ~ 10⁻², 16–28 OOM above bound (survives only with an
     unspecified custodial mechanism)."** (descriptive `failed` / `audited-negative` family.)
   - Add the compact computation: *tree-level c_μν = 0 (single-substrate universality); leading tree LIV
     is dim-6/n=2 (Planck-suppressed, the three-lock holds); but radiative corrections percolate Planck
     LIV up to dim-4 at c_μν ~ α/π ~ 10⁻² (Collins et al. 2004), with no Planck suppression; current
     bounds 10⁻¹⁸ (photon) to 10⁻²⁹ (nucleon) ⇒ refuted by 16–28 OOM at the natural value.*
   - Add the **escape table**: log running (Chadha–Nielsen, −1.6 OOM, insufficient); strong-dynamics
     power-law (Bednik et al., needs an unspecified conformal sector, in tension with SM-containing);
     non-perturbative (1106.1417, unclaimed, contrary to the lattice self-description).
   - Cite: Collins–Perez–Sudarsky–Urrutia–Vucetich, *PRL* 93, 191301 (2004); Chadha–Nielsen,
     *Nucl. Phys.* B217, 125 (1983); Kostelecký–Russell *Data Tables* (arXiv:0801.0287, v18 2025);
     Bednik–Pujolàs–Sibiryakov (arXiv:1305.0011).

2. **`/honest-assessment`** — add to the no-go set: *"The one structurally-novel channel (discrete-
   substrate LIV) is, at its natural radiative value, refuted by 16–28 OOM by existing terrestrial
   Lorentz tests; survival requires an unspecified custodial UV mechanism that the framework's absolute
   time and SM-containing requirements each obstruct."* This is the sharper, more citable framing the
   2026-06-23 and 2026-06-25 WAKEs were reaching for.

3. **`/key-claims` / `/test-catalog`** — wherever the LIV channel is described as "symmetry-protected" or
   "structurally untestable" without the dim-4 qualifier, propagate the computed-and-refuted verdict.

## Open Threads (what would falsify *this* posture)
- **A concrete custodial mechanism.** If the framework exhibits a real symmetry of its action that
  forbids dim-4 LIV while *keeping* absolute time, the verdict flips to "fine-tuned-but-protected."
  Phase-13 argues this is impossible (the only candidate is boost invariance); a constructive
  counterexample would refute Phase-13 and this finding. *This is the decisive thing the framework could
  produce — and it would be a genuine positive result.*
- **An explicit non-perturbative completion** (Escape 3) demonstrated to be of the LQG "different-
  character" type rather than the sampler/lattice type. The burden is on the framework; the self-
  description currently points the wrong way.
- **The exact O(1) prefactor for Synchronism's specific dispersion.** I argued the scale (α/π) is robust
  to ~2 OOM; an honest next step is a genuine one-loop computation in a *minimal* interacting completion
  (massless QED on the substrate lattice) to pin the prefactor. Even a 10⁻⁴ result leaves a 14-OOM gap,
  so this changes the *sharpness* of "refuted," not the *direction*.
- **Is the dim-4 exposure unique to Synchronism?** The percolation is generic to discrete/emergent-
  Lorentz programs — so the *refutation* is shared (uniqueness-agnostic; refutation needs no uniqueness).
  Note the asymmetry vs the n=2 face, which needed uniqueness to be *confirming*: the dim-4 face needs no
  uniqueness to be *refuting*. The framework cannot hide behind "non-unique" here.

## Sources
- Collins, Perez, Sudarsky, Urrutia, Vucetich, "Lorentz invariance and quantum gravity: an additional
  fine-tuning problem?" *PRL* 93, 191301 (2004) — arXiv:gr-qc/0403053. ("percent level, ~20 OOM above
  earlier estimates, unless unnaturally fine-tuned.")
- Chadha & Nielsen, "Lorentz invariance as a low-energy phenomenon," *Nucl. Phys.* B217, 125 (1983).
- Kostelecký & Russell, "Data Tables for Lorentz and CPT Violation," arXiv:0801.0287 (v18, Jan 2025).
- Bednik, Pujolàs, Sibiryakov, "Emergent Lorentz invariance from Strong Dynamics," arXiv:1305.0011 (2013).
- "Small Lorentz violations in quantum gravity: do they lead to unacceptably large effects?" arXiv:1106.1417.
- Tree-level expansion verified symbolically (`sympy`), this session.
