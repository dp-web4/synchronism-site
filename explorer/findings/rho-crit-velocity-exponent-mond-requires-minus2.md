# Finding: MOND-Matching *Requires* ρ_crit ∝ V⁻², the Framework Asserts V⁺² — the Exponent Has the Wrong Sign

**Date:** 2026-07-02
**Explorer session**
**Script:** inline (reproduced below; SI arithmetic, $0, no external data)

## Origin

Self-directed from today's visitor log (2026-07-02). **Two independent expert personas** raised
the same unresolved question about `ρ_crit = A·V_flat²`:

- **Pass 3 (Grad Student):** *"I could not find where the V² power is justified. A Jeans/
  velocity-dispersion argument generically gives ρ_crit scaling with a low power of V, not V²,
  and a mismatched exponent would be a real (not cosmetic) error."* Flagged as an **open
  question**, not a confirmed defect.
- **Pass 4 (Researcher):** V_flat is ingested from MOND fits, making the galaxy-plotter violet
  curve doubly circular.

The 2026-06-07 finding `a-from-jeans-chain-of-custody-failure.md` closed one half of this: the
only computation that reproduces the empirical coefficient (Session 66) derives **ρ_crit ∝ V^0.5**
using a galaxy-intrinsic length, and the framework's actual **V²** is carried over with mismatched
units and never re-derived. That answered *"is V² Jeans-derived?"* → **no**.

It left the grad student's sharper question **unanswered**: *what velocity exponent does
MOND-matching itself require?* That is a first-principles question, not an archive re-read, and it
turns out to have a clean, sign-decisive answer.

## Summary

**MOND-matching requires ρ_crit ∝ V_flat⁻², robustly (two independent profile estimates both give
exactly −2). The framework asserts ρ_crit ∝ V_flat⁺². The velocity exponent has the literally
opposite sign, and the magnitude is 240×–300,000× too high, growing with V.** This is the
locality no-go (Milgrom instance, already on the site) resolved along the velocity axis into a
one-sentence, citable statement: *to mimic an acceleration threshold with a density threshold, the
knee density must **fall** as galaxies get more massive; the framework makes it **rise**.*

Third, a code-level catch: the galaxy-plotter's plotted violet curve does **not** use C(ρ) or
ρ_crit at all — it is a cosmetic `tanh` in *radius*. So the V² apparatus the page discusses at
length is not even what the tool plots.

## Research Notes

### What MOND-matching requires (first principles)

For C(ρ) to reproduce MOND phenomenology, the density-threshold transition (ρ = ρ_crit, where
C crosses its knee) must coincide with the acceleration-threshold transition (g_bar = a₀, where
MOND turns on). So the natural, and only operational, identification is:

> **ρ_crit ≡ ρ_baryon at the radius r_t where g_bar(r_t) = a₀.**

Using only the empirical scalings every galaxy obeys:
- BTFR: `M_bar = V_flat⁴ / (G a₀)`
- transition radius: `g_bar = G M_bar / r_t² = a₀  ⇒  r_t = V_flat² / a₀`

The density there, by **two independent estimates**:

```
(a) mean density within r_t:   ρ ~ M_bar / r_t³ = (V⁴/Ga₀) / (V²/a₀)³ = a₀² / (G V²)   ∝ V⁻²
(b) isothermal local density:  ρ = V²/(4πG r_t²) = V² / (4πG (V²/a₀)²) = a₀²/(4πG V²) ∝ V⁻²
```

Both give exponent **−2 exactly** (confirmed numerically below). The −2 is structural, not a
coincidence of profile choice: `r_t ∝ V²` and `M ∝ V⁴`, so `ρ ∝ M/r³ ∝ V⁴/V⁶ = V⁻²`. Any
reasonable baryon profile inherits it.

### The numbers (reproduced)

```python
import math
G=6.674e-11; a0=1.2e-10; Msun=1.989e30; pc=3.086e16; kms=1e3
Msun_pc3 = Msun/pc**3            # 6.77e-20 kg/m^3
def mondreq(V):                  # V in km/s -> Msun/pc^3
    V*=kms; M=V**4/(G*a0); rt=V**2/a0
    return (M/((4/3)*math.pi*rt**3))/Msun_pc3   # mean-density estimate
def framework(V): return 0.029*V**2             # rho_crit = A V^2, Msun/pc^3
```

| V [km/s] | framework ρ_crit (M⊙/pc³) | MOND-required (M⊙/pc³) | ratio (fw / req) | r_t (kpc) |
|---:|---:|---:|---:|---:|
| 50  | 72.5   | 0.304  | 238×     | 0.7  |
| 100 | 290    | 0.076  | 3,810×   | 2.7  |
| 150 | 652    | 0.034  | 19,290×  | 6.1  |
| 200 | 1,160  | 0.019  | 60,965×  | 10.8 |
| 300 | 2,610  | 0.008  | 308,633× | 24.3 |

Log-log slopes: framework **+2.000**, MOND-required **−2.000**.

Two things to notice:
1. **Sign.** Not a coefficient miss — the dependence runs the wrong way. As galaxies get more
   massive (higher V), the framework's knee density *rises*; the density at the MOND transition
   radius *falls*.
2. **Magnitude, and it's physically diagnostic.** The MOND-required ρ_crit is ~0.01–0.3 M⊙/pc³ —
   exactly galactic-outskirt / mean-disk densities, which is *where you would want a modification
   to switch on*. The framework's 72–2,610 M⊙/pc³ are dense *inner-galaxy* values. The framework
   has placed the coherence knee in the wrong part of the galaxy.

### The knee never gets crossed — so C(ρ) isn't producing the transition

With the framework's own ρ_crit = 652 M⊙/pc³ (V=150) and γ=2, C(ρ) across a real disk:

| ρ (M⊙/pc³) | 0.01 | 0.1 | 1 | 10 | 100 | 652 |
|---|---|---|---|---|---|---|
| C(ρ) | 0.0000 | 0.0003 | 0.0031 | 0.030 | 0.278 | 0.882 |

The entire luminous disk (ρ ≈ 0.01–100 M⊙/pc³) sits at **C ≲ 0.28**, i.e. deep in the
sparse/"modified" regime, and **never crosses the knee**. There is no density-driven transition
*inside* the galaxy at all. Whatever produces the MOND-like rotation-curve shape, it is **not**
C(ρ) crossing ρ_crit — the knee is 4,600× above the gas the disk is made of.

### The plotted curve confirms it — it bypasses C(ρ) entirely

`src/app/galaxy-plotter/page.tsx:55`:
```js
function synchronismVel(r, vflat) {
  const baryon    = vflat * Math.sqrt(1 - Math.exp(-r/2.5)) * 0.6;
  const coherence = vflat * Math.tanh(0.4 * r / 2.5);   // tanh in RADIUS, not C(ρ)
  return Math.sqrt(baryon*baryon + coherence*coherence);
}
```
The violet "Synchronism" curve is `√(baryon² + [vflat·tanh(0.4 r/rScale)]²)` — a cosmetic `tanh`
of a **radius ratio**, scaled by V_flat. It calls neither `coherence()` nor `criticalDensity()`.
The `ρ_crit = A·V_flat²` machinery the page discusses at length (lines 144–146, 166, 212) is not
what the tool plots. The plot is flat-by-construction from V_flat; it cannot be evidence about
C(ρ) because C(ρ) isn't in it.

### Why this is a genuine advance, not a re-audit

- A-from-Jeans computed the *Jeans* exponent (+0.5) and noted the framework uses +2. It never
  asked what **MOND-matching** requires. That answer (−2) is new, and it is the exponent that
  actually matters, because MOND-matching — not Jeans — is the only thing the galaxy sector is
  ever tested against.
- Three mutually-incompatible provenances now exist for one exponent:
  **stated-Jeans → +0.5, code/usage → +2, MOND-requirement → −2.** No single reading makes
  ρ_crit ∝ V² both derived *and* MOND-consistent. They don't even share a sign.
- It converts the locality no-go from a magnitude statement ("1.7 dex cross-system offset with a
  global ρ_crit") into a **sign statement** ("the required V-scaling is inverted"), which is far
  more legible and harder to wave away. A referee needs one line: *a knee keyed on local
  volumetric density must fall as V⁻² to track an a₀ acceleration threshold; the framework asserts
  V⁺².*

### Honest caveats / steelman

- **The "presence density" escape.** If ρ in C(ρ) is not physical baryonic density but the
  framework's never-operationalized "presence," the −2 derivation doesn't bind. But then V² is
  untestable for a *different* reason (no operational ρ; cf. `project_c_doubly_unanchored`), and
  every executed test on the site uses physical density. Either way ρ_crit ∝ V² is neither derived
  nor tested.
- **This does not rescue or newly kill the theory** — the galaxy sector was already closed
  (γ-free compander = MOND, ΔBIC=+184; locality no-go). It sharpens the *statement* of the
  existing kill and closes a live expert open-question with a definite number.

## Implications for the Site

The grad student's open question ("is ρ_crit ∝ V² derived, and is the exponent right?") now has a
complete answer the site can state: **the exponent is not derived, and it has the wrong sign for
the one thing it's used for.** This is more defensible and more citable than the current
"V_flat is ingested from MOND fits" hedge, which only addresses circularity, not the exponent.

## Action: Maintainer

1. **`/parameter-derivations` (ρ_crit card) and `/galaxy-plotter` friction note** — add the
   velocity-exponent result:
   > **The exponent is sign-wrong for MOND-matching (2026-07-02).** For C(ρ)'s density threshold
   > to coincide with MOND's acceleration threshold (g_bar = a₀), the knee must sit at the
   > baryonic density of the MOND transition radius: ρ_crit ∝ a₀²/(G V²) ∝ **V⁻²** (robust to
   > profile), magnitude ~0.01–0.3 M⊙/pc³ — galactic-outskirt densities. The framework asserts
   > ρ_crit = A·V⁺² ~ 70–2600 M⊙/pc³, which is 240×–300,000× too high *and scales the opposite
   > way*. Combined with the Jeans derivation's V^0.5, the V² exponent has three incompatible
   > provenances and no derived one.
2. **Locality no-go, one-line citable form** — on `/honest-assessment` and `/for-researchers`,
   add the sign statement next to the existing 1.7-dex magnitude statement: *"A knee keyed on
   local volumetric density must fall as V⁻² to track an a₀ acceleration threshold; the framework
   asserts V⁺² — the local-density no-go seen on the velocity axis."*
3. **`/galaxy-plotter` — disclose that the plotted curve bypasses C(ρ).** The violet curve is
   `vflat·tanh(0.4 r/rScale)` in radius; it does not evaluate the coherence function or ρ_crit.
   One line: *"the plotted curve is an illustrative flat-rotation shape scaled by V_flat; it does
   not exercise C(ρ) or ρ_crit — the ensemble RAR test does."* This also partially answers the
   queued topic `galaxy-plotter-coupling-mechanism-audit.md`: the plotter uses **no** coupling
   mechanism (neither C=1/μ_eff nor any C(ρ) map), so it cannot be "displaying a refuted
   mechanism" — it displays no mechanism.

## Open Threads

- **Does the −2 requirement generalize the locality no-go to a scaling law?** The Milgrom
  non-locality theorem is about *spatial* non-locality. The V⁻² result is its BTFR-projected
  shadow: any local-ρ knee inherits the wrong V-scaling because r_t ∝ V² and M ∝ V⁴ are fixed by
  BTFR + the a₀ threshold. Worth stating as: *"any local volumetric-density modification, keyed to
  reproduce the RAR, requires a per-object threshold falling as V⁻²; this is forced by BTFR and is
  independent of the modification's functional form."* That is a genuinely transferable
  one-liner — it constrains not just C(ρ) but any ρ(r)-keyed MOND mimic — and belongs in the
  same drawer as the locality no-go for the preprint-candidate list.
- **Chemistry/other rungs:** does the same "wrong-sign scaling" diagnostic apply to any other
  place ρ_crit is asserted to scale with an intrinsic variable? (Low priority — galaxy is the only
  data-confronted rung.)
