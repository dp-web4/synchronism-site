# Finding: TEST-07 (~500 Mpc Cosmic Interference) Is Contradicted Three Different Ways By The Framework's Own Documents

## Origin
Topic `500mpc-coherence-wavelength-derivation` (highest priority in queue, seeded 2026-04-25 by maintainer after Pass 4 visitor flagged this as the one test that, if anchored, could matter to their field).

## Summary
The site predicts galaxy cluster pair separations should oscillate at λ ~ 500 Mpc and lists this as TEST-07 in the Tier-1 catalog. The maintainer's research proposal filed 2026-04-25 states no derivation exists in the archive. **Two derivations actually exist** — and they contradict each other and the framework's own cosmological analysis. The productive result of this investigation is not a derivation. It is a recommendation to retract TEST-07.

The three contradictions:
1. The protocol-document derivation contains a ~1000× arithmetic error. Correctly evaluated, the formula gives 0.45 Mpc, not 450 Mpc, for a 10¹⁵ M☉ cluster.
2. The Session #205 derivation gives ~500 Mpc only at z=1; it varies from 4 Gpc (z=0) to 4 kpc (z=100). A fixed comoving wavelength is incompatible with this strongly redshift-dependent scale.
3. Session #205 concludes — explicitly — that "the coherence function applies to BOUND systems, not linear perturbations. No new predictions at cosmological scales." This directly excludes the regime where TEST-07 would operate.

## Research Notes

### Derivation 1: The Protocol Document (Session #4 Track C, 2025-11-08)

`Cosmic_Interference_Search_Protocol.md` is the canonical document for TEST-07. It proposes:

```
R_MRH = √(r_s · ξ)
```

where `r_s = GM/c²` (gravitational radius — note: actual Schwarzschild radius is 2GM/c², so the symbol is loose) and `ξ = c/H₀` (Hubble length). For a cluster mass M = 10¹⁵ M☉ the document writes:

```
R_MRH = √(1.5×10¹⁸ · 1.3×10²⁶) = 1.4×10²⁴ m ~ 450 Mpc
```

Both numerical steps are wrong by exactly a power of ten:

| Step | Document writes | Correct |
|------|-----------------|---------|
| √(1.95×10⁴⁴ m²) | 1.4×10²⁴ m | 1.4×10²² m |
| 10²² m → Mpc | "450 Mpc" | 0.45 Mpc |

Net error: factor of 994×. The derived scale for a 10¹⁵ M☉ cluster is **~0.45 Mpc**, not 450 Mpc — that is, a single galactic halo, not a cosmic structure.

What cluster mass would actually produce λ ~ 500 Mpc from this formula? Solving:

```
M = (R²/ξ) · c²/G  with R = 500 Mpc
M = 1.22 × 10²¹ M☉
```

That is roughly **10⁴× the total matter content of the observable universe** (~10²³ M☉). No physical cluster mass anchors this prediction under the protocol's own formula.

The arithmetic was reproduced with `python3` for confirmation. Calculation: `r_g = 1.477e18 m, ξ = 1.321e26 m, √(r_g·ξ) = 1.397e22 m = 0.453 Mpc`.

### Derivation 2: Session #205 (2025-12-31)

Session #205 (`Session205_CMB_Cosmology.md`) contains a different derivation, which the protocol document does not cite. It computes, for a sphere enclosing the mean cosmic density at redshift z, the radius at which the mean-field gravitational acceleration equals MOND's a₀:

```
(4π/3) · G · ρ̄(z) · r = a₀
ρ̄(z) = Ω_m · ρ_crit,0 · (1+z)³
```

Reproducing the calculation:

| z | ρ̄(z) (kg/m³) | r where a=a₀ |
|---|---|---|
| 0 | 2.9×10⁻²⁷ | **4870 Mpc** (table says ~4 Gpc ✓) |
| 1 | 2.3×10⁻²⁶ | **609 Mpc** (table says ~500 Mpc ✓) |
| 3 | 1.8×10⁻²⁵ | 76 Mpc |
| 10 | 3.8×10⁻²⁴ | 3.7 Mpc (table says ~3 Mpc ✓) |
| 100 | 2.9×10⁻²¹ | 4 kpc (table says ~4 kpc ✓) |

This calculation is internally consistent. The "~500 Mpc at z=1" is the only redshift at which the scale falls in this neighborhood. **The scale varies by a factor of ~10⁶ from z=0 to z=100.**

The protocol document predicts comoving λ_obs = λ₀(1+z) — that is, **fixed comoving wavelength**. Session #205's calculation gives a scale that is **not** fixed comoving — it varies as ρ̄(z) ∝ (1+z)³, so the proper-distance scale of "where a = a₀" is r ∝ (1+z)⁻³ in proper distance, or (1+z)⁻² in comoving distance after accounting for expansion. These two predictions are mutually inconsistent.

### Derivation 3 (the killer): Session #205's Conclusion

Session #205 is not just a calculation. It is the framework's analysis of its own cosmological consistency. After computing the table above, the session asks: should `C(a)` be applied to linear perturbations?

The answer it gives, on lines 84–93:

> **Option C: C(a) Only Applies to Bound Systems**
>
> The coherence function was derived for:
> - Pattern dynamics in discrete CFD framework
> - Resonance between stable patterns
> - Bound gravitational systems
>
> Linear perturbations are NOT bound systems — they're small overdensities that will eventually collapse.
>
> **Resolution: C(a) should only be applied once structures become non-linear (δ > 1).**

And on line 116:

> **BAO (z ~ 0.1–2, scales ~ 100 Mpc)**: Standard gravity → **Matches ΛCDM ✓**

And on line 232 (the conclusion):

> "**No conflict, but also no new predictions at cosmological scales.**"

Session #205 — the framework's own cosmological consistency analysis — explicitly states that **C(a) does not apply at scales of hundreds of Mpc** because perturbations there are linear and unbound. That is precisely the regime where TEST-07 places its prediction.

The site's TEST-07 prediction is incompatible with the framework's own published cosmological analysis. The framework predicts **no** new physics at 500 Mpc, by its own writing.

### Where ~500 Mpc Cannot Come From

I considered six alternative anchors and none produce 500 Mpc cleanly within the framework:

| Candidate | Result | Comment |
|---|---|---|
| Hubble length × Ω_m^(1/2) | 2340 Mpc | wrong |
| Hubble length × Ω_m^(1/3) | 2840 Mpc | wrong |
| BAO sound horizon × π | 471 Mpc | numerical coincidence; π unmotivated |
| Hubble length × 1/8 | 525 Mpc | factor 1/8 unmotivated |
| Mean cluster correlation length × 20 | 500 Mpc | factor 20 unmotivated |
| Geometric mean of r_g and ξ at universe-mass scale | 4400 Mpc | wrong |

To anchor 500 Mpc from framework parameters {γ, ρ_crit, C(ρ), H₀, c, G} alone, one would need either a wave equation with a dispersion relation that picks this k, or a self-consistency equation whose fixed point is at this scale. The framework has neither: C(ρ) is explicit (no fixed-point form), and no dispersion relation is written down anywhere I could find.

### Why The Maintainer Missed This

The maintainer's proposal filed 2026-04-25 stated:
> "No derivation of the 500 Mpc scale appears anywhere on the site. The scale is not attributed to any session number."

This is technically true for **Session-NNN-numbered files** but misses two things:
- `Cosmic_Interference_Search_Protocol.md` is not in `SessionNNN_*.md` format. It is attributed to "Session #4, Track C" internally but does not appear in standard session searches.
- `Session205_CMB_Cosmology.md` *does* mention 500 Mpc but only in a table cell, not as a derivation of TEST-07. The connection is not made anywhere.

The drift pattern flagged in the 2026-04-23 finding (`site-archive-drift-alpha-and-btfr.md`) extends here: a number on the site that doesn't link cleanly back to one provenance in the archive.

## Implications for the Site

### TEST-07 status

TEST-07 should **not** be Tier-1. The current taxonomy lists it among existing-data tests, with a kill criterion ("no oscillations above 3σ out to 2000 Mpc") but no positive predicted magnitude. The Pass 4 researcher has been correct that this asymmetric design is the framework's most-cited weakness for expert audiences — but the deeper issue is that the prediction itself is not stable across the framework's own documents.

The honest options:

1. **Retract TEST-07** and explain why. The framework's own cosmological analysis (Session #205) excludes 500 Mpc-scale predictions; the supporting protocol contains an arithmetic error of ~10³. This is not a "needs derivation" gap; it is a contradiction that the framework's self-audit already resolved against TEST-07 — the site just hasn't propagated it.

2. **Re-found TEST-07 on a different mechanism**, if one can be constructed. This would require:
   - A wave equation for whatever field carries the "interference"
   - A dispersion relation that selects k ≈ 2π/(500 Mpc)⁻¹
   - An explanation of why C(ρ)'s exclusion from linear perturbations (Session #205) does not apply

   Until such a mechanism exists, the prediction has no theoretical anchor.

3. **Re-badge TEST-07 as Speculative**, with a transparent explanation of the contradictions documented above. This would be honest but does not address the cosmological-consistency problem from Session #205 — which doesn't merely fail to support TEST-07, it actively contradicts it.

The Pass 4 researcher said they would consider citing the framework if a derivation appeared. Now that the investigation has been done, the answer to give them is: *we looked, and the derivation we had was wrong by 1000×, and our own cosmological analysis says this regime is outside C(a)'s domain. We are retracting TEST-07.* That is a more publishable result than a forced derivation would have been.

### Honest Assessment page

The Honest Assessment page should add an entry: **"TEST-07 ~500 Mpc Interference: Internally Contradicted"** with one-paragraph summary of the three contradictions. This is the same pattern as the dark-matter-failure page — failures stay visible.

### Top-5 Tests page and Tier-1 catalog

If TEST-07 is retracted:
- Top-5 tests becomes Top-4
- Tier-1 catalog: drop TEST-07
- The "tests asymmetric" framing on `/tier-1-existing` no longer needs to defend TEST-07 specifically; one fewer asymmetric test to explain

The remaining novel-direction predictions are:
- TEST-04 (BAO 10⁻⁴ shift) — also no derivation, also lives in cosmological-perturbation regime that Session #205 excludes
- TEST-02 (wide binary density) — bound-system, so consistent with Session #205, but no predicted magnitude
- TEST-11 (consciousness phase transition) — D and S undefined

### Front-of-site framing

Surface Session #205's conclusion — *"The coherence function applies to BOUND systems, not linear perturbations. No new predictions at cosmological scales."* — somewhere prominent. This is the framework's own boundary statement. The current site, by listing TEST-04 and TEST-07 among Tier-1 tests, has been making cosmological-scale claims that the framework's cosmological-consistency analysis already retracted in 2025-12-31.

This is the same pattern as the 2026-04-13 wide-binary-ghost finding (site uses Hill form, derivation uses tanh form, opposite predictions). The framework has done the self-audit work. The site has not propagated it to the front-of-site claims. **Three of the last four explorer findings have been site-archive drift, not new physics problems** — the drift is the load-bearing pathology now.

## Action: Maintainer

Concrete site-level changes recommended:

1. **`/tier-1-existing`**: Remove TEST-07 (cosmic interference at 500 Mpc) or re-badge it "Internally Contradicted". Update test count (10 → 9, then further reductions per the 2026-04-25 audit are now 9 → 8 once TEST-07 is dropped).

2. **`/top-5-tests`**: Remove TEST-07 from the top-5. Title becomes "Top 4 Decisive Tests" or pick a replacement (TEST-02 wide-binary remains the strongest candidate for novel-and-discriminating).

3. **`/honest-assessment`**: Add entry under "Failed/Internally Contradicted Predictions" — *TEST-07 (~500 Mpc Cosmic Interference): Internally Contradicted by Session #205 (no predictions at cosmological scales) and Session #4 derivation (1000× arithmetic error, corrected scale is 0.45 Mpc not 450 Mpc).*

4. **`/cosmic-interference`** (currently 404): Either build a brief retraction page explaining the three contradictions, or remove the dangling links. A retraction page following the pattern of `/dark-matter-failure` would maintain epistemic consistency.

5. **`/research-philosophy` or landing page**: Surface Session #205's conclusion — "No new predictions at cosmological scales" — alongside the framework's claims. This is one of the framework's stronger boundary statements.

6. **Synchronism research repo**: A correction note should be added to `Cosmic_Interference_Search_Protocol.md` flagging the arithmetic error and the contradiction with Session #205. Either retract Prediction 1 from the canonical predictions list, or re-derive it from a different mechanism (a project that requires writing down a dispersion relation, which the framework has not done).

## Open Threads

1. **Could TEST-07 be saved by a different derivation?** The candidates I checked (BAO×factor, Hubble length×factor, correlation-length×factor) require unmotivated dimensionless factors. A mechanism would need a wave equation for the coherence field. The C(ρ) function is not a wave equation; it is an explicit map ρ → C. To turn it into a wave equation would require introducing time derivatives, which the framework has not done. This is a genuine extension, not a salvage.

2. **TEST-04 (BAO 10⁻⁴ shift) is in the same regime as TEST-07.** Session #205 concludes BAO scales (~100 Mpc) "match ΛCDM." If TEST-07 fails on the cosmological-perturbation argument, TEST-04 fails identically. The same retraction logic applies. This deserves its own audit.

3. **The pattern across recent findings:** of the last four explorer sessions to write findings, three have been site-archive drift / internal contradiction (2026-04-13 EFE-ghost, 2026-04-22 γ same-page, 2026-04-23 α and BTFR transcription, this one 2026-04-25 TEST-07). The drift is now the dominant failure mode. A systematic drift audit — checking every numbered prediction against its archive provenance — would be very high-yield. SESSION_FOCUS already flags this; it deserves to be the next session's task.

4. **The framework's bound-vs-unbound distinction (Session #205) is actually a strong, defensible claim.** It scopes Synchronism cleanly: bound systems where C(a) applies, unbound systems where it doesn't. This is a *more defensible* posture than "theory of everything." It would be worth front-of-site real estate. The framework has already done this work; the site just hasn't reflected it.

5. **What does the framework actually predict at cosmological scales, then?** If Session #205 is taken seriously, the answer is: nothing new. ΛCDM-equivalent at all scales beyond ~10 Mpc. That is a coherent and testable boundary, but it makes the framework's "from quantum to cosmic" framing wrong — the framework is *galaxy-and-below*, not "all scales."

## Verification Steps

For maintainer or future explorer to confirm before acting:

```python
import math
G = 6.674e-11; c = 2.998e8; H0 = 2.27e-18
M_sun = 1.989e30; Mpc = 3.086e22

# Protocol formula
M = 1e15 * M_sun
r_g = G*M/c**2          # 1.48e18 m
xi = c/H0               # 1.32e26 m
R = math.sqrt(r_g*xi)   # 1.40e22 m
print(R/Mpc)            # 0.45 Mpc — NOT 450 Mpc

# Session 205 formula at z=1
Omega_m = 0.31
rho_crit_0 = 3*H0**2/(8*math.pi*G)
rho_bar_z1 = Omega_m * rho_crit_0 * 8
a0 = 1.2e-10
r = a0 / ((4*math.pi/3) * G * rho_bar_z1)
print(r/Mpc)            # 609 Mpc at z=1, but 4870 Mpc at z=0
```

Both calculations confirm the contradictions documented above.
