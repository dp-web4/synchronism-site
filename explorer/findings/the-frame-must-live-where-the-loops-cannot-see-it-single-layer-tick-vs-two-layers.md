# Finding: The frame must live where the loops cannot see it. The pincer's real dichotomy is single-layer real-time tick vs two layers, not causal-set vs preferred-frame discreteness

## Origin
Topic `can-a-discrete-preferred-frame-substrate-hide-its-frame-the-bell-and-liv-pincer.md` (maintainer 2026-11-21,
from the visitor log's simulated researcher). Pre-registered at `823c967`
(`PREREG-bell-liv-pincer-hypercubic-control-20261121.md`) before any computation or retrieval.

## Summary
The maintainer's stake has two parts. The "no" part survives for the framework's own substrate. The general part does
not hold as a dichotomy.

1. **A lattice can have a frame and still forbid dimension-4 Lorentz violation.** An explicit one-loop lattice computation
   (Yukawa scalar + Wilson fermion; both species have speed 1 at tree level) gives δc²_φ = 0 to 10⁻¹³ when time and space
   share one Euclidean lattice spacing (ξ = 1, hypercubic). When they differ, δc² is finite and does not vanish as the
   lattice spacing goes to zero. In units of y²/16π²: **−0.273 (ξ = 2), −0.229 (ξ = 4, toward Bell's continuous-time
   spatial lattice at ξ → ∞, which was not computed), +2.46 (ξ = ½), +5.65 (ξ = ¼)**. That is Collins et al. on a lattice, with its own
   identity control.
2. **The custodian is not available to a real-time tick.** Hypercubic symmetry relates time to space only in a Euclidean
   (path-integral) regulator, and it needs gauge invariance as well for vector fields (Kaplan, nucl-th/0510023, retrieved).
   Collins et al. set exactly this case aside: *"We assume here that the treatment involves real time … such a symmetry
   does not appear to be known"* (gr-qc/0403053, retrieved).
3. **Bell's own 1986 lattice model is a two-layer counter-model to "the discreteness that avoids LIV loses the Bell
   escape".** Its beables sit on a spatial lattice, jump stochastically at rates set by the global state, and carry a
   preferred frame that Bell calls *"experimentally indistinguishable"*. The frame is hidden only in the beable layer. Its
   ψ layer is a spatial lattice in continuous time, which is my ξ → ∞ case, and it carries the Collins term unless it is
   tuned or regulated symmetrically.
4. **Unifying statement (proposed replacement stake).** Every known way to hide a preferred frame at dimension 4 keeps the
   frame out of the regulator of the loops that set low-energy matter speeds. The mechanisms are a symmetry of that
   regulator (continuum Lorentz invariance; Euclidean hypercubic plus gauge invariance; SUSY), a frame-carrying sector
   that the matter loops do not see (beables with no back-reaction; a Lifshitz gravity sector; scale separation), or a
   foliation fixed by the state rather than by the background. FUNDAMENTALS' substrate is single-layer: matter *is* the
   recurring pattern of the field that ticks. That puts the frame exactly in the regulator of matter loops. **The joint
   requirement therefore reduces to "the thing that ticks cannot be the thing that matter is made of", or to tuning each
   species' speed to 10⁻¹⁸–10⁻³⁰.**
5. **The "one escape" premise is wrong by omission.** Bell experiments leave three realist escapes (Wharton & Argaman
   2020): a foliation (Bohm), future-input dependence (retrocausal, can be covariant), and violation of statistical
   independence (superdeterminism, which works with a nearest-neighbour rule and is *"not ruled out"* by cosmic Bell tests,
   Hossenfelder & Palmer 2020 §4.3). None of the three rescues a single-layer tick from the LIV half. Superdeterminism
   fixes Bell and leaves Collins untouched.

## Research Notes

### What was already on file (not redone)
`dim4-liv-nogo-feasibility-escapes-missed.md` (2026-06-30) mapped CPSU 2004, SUSY, Pospelov–Shang and causal sets.
`liv-dim4-cmuv-magnitude-computed-natural-value-refuted.md` gave c_μν ~ α/π *parametrically* (citing Collins).
`tsirelson-substrate-nogo-...md` (07-06) ran the framework's density substrate through CHSH (S = 1.85).
None of these computed a loop with a symmetric control, treated hypercubic symmetry as a custodian, or asked which layer
the frame lives in.

### The computation (`scripts/collins_on_a_lattice_hypercubic_control.py` and companions)
- **Setup.** Euclidean lattice with a_s = 1 and a_t = 1/ξ. Yukawa coupling y·φψ̄ψ. The Wilson term is built to be isotropic
  at O(k²), w_μ = (a_s/a_μ²)(1 − cos k_μa_μ), so **both species have speed 1 at tree level at every ξ**. This is the
  framework's "single-substrate universality" granted in full. Any δc² is purely radiative.
- **Quantity.** Π(p) ≈ Π₀ + A p₀² + B p₁², and δc²_φ = ±(y²/16π²)(B − A). The overall sign depends on convention; the
  relative signs are meaningful.
- **Quadrature.** Periodic trapezoid on the cubic fundamental domain. Resolution changes move finite-m results by
  < 10⁻⁶ relative. The finite-difference step h = 0.02 → 0.005 moves them by < 0.3 %.

| m·a_s | ξ = 1 | ξ = 2 | ξ = ½ |
|---|---|---|---|
| 0.5 | 2×10⁻¹³ | +0.344 | −0.020 |
| 0.25 | 2×10⁻¹³ | +0.198 | +0.516 |
| 0.125 | 2×10⁻¹⁴ | +0.017 | +1.230 |
| 0.0625 | — | −0.117 | +1.787 |
| 0.03125 | — | −0.194 | +2.117 |
| **0 (direct)** | **6×10⁻¹³** | **−0.273** | **+2.461** |

Artifacts: `scripts/collins_on_a_lattice_hypercubic_control.json` (m ≥ 0.125), `scripts/collins_small_m.json`
(m = 0.0625, 0.03125), `scripts/collins_m0.json` and `scripts/collins_m0_small_xi.json` (m = 0). The m = 0 row is at n = 96. Its convergence: ξ = 2 gives −0.2709 / −0.2729 / −0.2733 at n = 32/64/96. ξ = ½ uses matched
k-spacing and gives 2.452 / 2.460 / 2.461. ξ = 4 gives −0.226 / −0.229, and ξ = ¼ gives 5.58 / 5.64 / 5.65.

**Scorecard against the PREREG.**
- **P1 (identity control, ξ = 1): HELD.** |B − A| ≤ 6×10⁻¹³ at every mass, including m = 0.
- **P2 (|δc²| ≥ 0.05 at ξ = 2 and ½): HELD at every point but one.** The miss is (m·a = 0.5, ξ = ½) at −0.020, where the
  curve crosses zero. It holds in the m → 0 limit.
- **P3 (non-decoupling diagnostic): FAILED as registered.** δc² at ξ = 2 moved from 0.344 to 0.017 between m·a = 0.5 and
  0.125, not by less than 15 %. The registered (ma)² extrapolation was the wrong form. The radial diagnostic
  (`collins_lattice_radial_diagnostic.py`) puts the m-dependence in the shells 0.2 < |k| < 1.6, where the Wilson mass a·k²/2
  overtakes m (k* = √(2m/a)). Successive differences shrink slowly (ratios 0.74, then 0.57 per halving of m), which is non-analytic and fits the √(2m/a) crossover, not an (ma)² series.
  The substantive question, whether the anisotropy survives m·a → 0, was answered **post hoc** by direct m = 0 evaluation.
  It survives (−0.273, +2.461). The direct evaluation is legitimate because the anisotropic integrand goes like a²/k² near
  k = 0 and is integrable.
- **P4 (opposite signs at ξ and 1/ξ): HELD in the m → 0 limit only** (−0.27 vs +2.46). It failed at 2 of 5 finite masses.
- **P5 (resolution): HELD for finite m.** It **failed for my first m = 0, ξ = ½ grid** (15.2 → 17.2, not converging). The
  temporal k-spacing there was half the spatial spacing, so the log-singular A and B integrands were discretised
  asymmetrically near k = 0. Matching the spacing fixed it (2.461). The same trap would fake an anisotropy in any lattice
  LIV calculation done at zero mass.

**Size.** For an electromagnetic-strength coupling, y²/16π² = α/4π ≈ 5.8×10⁻⁴. That gives |δc²| ≈ 1.3×10⁻⁴ at ξ = 4 (the
trend toward Bell's continuous-time lattice; ξ → ∞ itself not computed), 1.6×10⁻⁴ at ξ = 2, and 1.4×10⁻³ at ξ = ½. The bounds are 10⁻¹⁸ (cavity) to 10⁻²⁹–10⁻³⁰
(nucleon), so the gap is 14–27 orders, consistent with Collins' estimate. Tree-level universality does not survive one
loop. That was cited on file before (06-26); it is now computed.

**The same effect in a real lattice QCD calculation (retrieved).** Edwards, Joó & Lin (PRD 78, 054501, 2008,
arXiv:0803.3960) tune an anisotropic lattice so that gauge and quark both have renormalized anisotropy ξ = 3.5. The bare
anisotropies needed are **γ_g\* = 4.3 and γ_f\* = 3.4**. In their convention both bare parameters equal ξ at tree level;
that is my reading, not a quote. Two species on one anisotropic grid need bare speeds that differ by
about 25 % to come out equal. That is the Collins mechanism at strong coupling, removed by per-species tuning to the
percent level. A substrate would need the same tuning to 10⁻¹⁸ or better, for every species.

### Why a real-time tick has no ξ = 1 point (my argument, not retrieved)
A Euclidean hypercubic lattice continues to real time with a sinh-type dispersion that is unbounded in ω. A real-time
update rule has a compact quasi-frequency zone. The transfer matrix T of a symmetric Euclidean lattice does define a real
time step U = T^{i}, but U is not a local real-time update rule. A local real-time circuit is not generally T^{i} for any
hypercubic T. **This is the weakest link of the finding.** What would break it: an explicit local real-time update rule
whose interacting loops reproduce hypercubic cancellation. For a *classical* substrate like FUNDAMENTALS', no Euclidean
action is defined at all, so the custodian has nothing to act on.

### The escape table (realist substrates)
| Escape | Bell | Dim-4 LIV without tuning | Single-layer real-time tick? |
|---|---|---|---|
| Nearest-neighbour tick, free settings (FUNDAMENTALS as written) | ✗ excluded (Hensen 2015) | ✗ (Collins; computed above) | ✓ |
| Nearest-neighbour tick + superdeterminism ('t Hooft class) | not excluded (H&P 2020 §4.3) | ✗ (same loops) | ✓ |
| Global tick in a foliation, single layer | ✓ (Bohm class) | ✗ (the frame is in the matter dynamics) | ✓ |
| Two layers: ψ with Lorentz-invariant dynamics + foliation-guided beables (Bell 1986; DGTZ 2005) | ✓ | ✓ **iff the ψ layer is Lorentz invariant** (continuum, symmetric Euclidean + gauge regulator, or tuned) | only the beable layer ticks |
| Foliation fixed covariantly by ψ (Dürr, Goldstein, Norsen, Struyve, Zanghì 2014) | ✓ | ✓ (no background frame) | no grid frame |
| Future-input dependence (Wharton & Argaman 2020) | ✓ (toy models only; "a grand challenge" to generalise) | ✓ in the continuum | no forward tick |
| Causal-set discreteness | needs one of the rows above | ✓ | no preferred frame |
| SUSY / Pospelov–Shang / Belenchia–Gambassi–Liberati scale separation | (orthogonal) | mitigated | each one denies single-substrate universality |

Every ✓ in the LIV column comes from the same move: the loops that set matter's speeds are regulated by something that
does not carry the frame.

### Locators verified by retrieval this session
- Bell, Phys. Rep. 137, 49 (1986). The record's title is **"Quantum field theory without observers"**. "Beables for
  quantum field theory" is CERN-TH.4035/84, reprinted in *Speakable and Unspeakable*. Quotes are from the reprint scan.
- Wharton & Argaman, RMP 92, 021002 (2020), arXiv:1906.04313.
- DGTZ, J. Phys. A 38, R1 (2005), quant-ph/0407116.
- Dürr et al., Proc. R. Soc. A 470, 20130699 (2014), arXiv:1307.1714.
- Hossenfelder & Palmer, Front. Phys. 8, 139 (2020), arXiv:1912.06462.
- **Belenchia, Gambassi (not Gambini), Liberati**, JHEP 06 (2016) 049, arXiv:1601.06700.
- Bednik, Pujolàs, Sibiryakov, JHEP 11 (2013) 064, arXiv:1305.0011. Full title "…: Holographic examples"; the abstract
  says power-law suppression.
- Davoudi & Savage, PRD 86, 054505 (2012).
- **Not re-verified today:** Groot Nibbelink & Pospelov 2005 (still from recall on the site), and the Collins journal
  locator (arXiv verified).

## Implications for the Site
- The landing `#bell-and-clock` row's stake ("not with a nearest-neighbour update … it would need a protecting
  symmetry") is half right. Nearest-neighbour is the wrong qualifier: such rules are already Bell-excluded, and globality
  is irrelevant to Collins. The operative property is **a real-time tick inside the regulator of matter loops**. "The
  discreteness that avoids LIV loses the Bell escape" (proposal 11-21) is false as a dichotomy: symmetric Euclidean
  lattices carry a frame (their axes), and Bell's 1986 model hosts the escape on a lattice.
- "The only Bell escape left" (landing row and 11-20 block (i)) should read "three escapes", with the note that only the
  foliation is a forward tick with free settings.
- For the framework the verdict is unchanged and now sharper. Its substrate sits in the worst cell of the table, and
  making the update global moves it to row 3, not row 4.

## Action: Maintainer
1. `src/app/page.tsx` `#bell-and-clock` row: replace the "Proposed answer" sentence with something like:
   *"Proposed answer, to attack: not while matter is the pattern of the field that ticks. Every known way to hide a frame
   keeps it out of the loops that set particle speeds: a symmetric regulator (a lattice whose time and space are on the
   same footing in the path integral, plus gauge invariance), a separate frame-carrying layer that matter does not feel
   (Bell's 1986 lattice beables, which are global, preferred-frame and experimentally indistinguishable), or a
   state-determined foliation. A one-loop lattice check: two species with equal tree-level speeds acquire speeds that
   differ at O(y²/16π²) whenever time is discretised differently from space, and not at all when it is not (explorer
   2026-11-21)."* Drop "from recall" only for references verified above. GN&P stays flagged.
2. Same row and the "local substrate" row above it: "the only Bell escape left" → "three escapes remain (a preferred-frame
   update, future-input dependence, superdeterminism; Wharton & Argaman 2020, RMP 92, 021002). Only the first is a forward
   tick with free settings. Superdeterminism works with the framework's nearest-neighbour rule and is not excluded by
   experiment (Hossenfelder & Palmer 2020), but it does nothing for the Lorentz half."
3. `/for-researchers` Face 2 ("custodial escapes unexhibited"): add the lattice result and the Edwards–Joó–Lin datum
   (γ_g\* 4.3 vs γ_f\* 3.4 at ξ = 3.5) as the empirical form of Collins.
4. Fix "Gambini" → "Gambassi" wherever Belenchia et al. is cited (grep the archive too). Fix Bell's Phys. Rep. title.

## Action: Project lead (via the maintainer)
The SPINE candidate sentence (proposal 11-21) says Synchronism "has no mechanism for either yet". A sharper version:
*"A substrate can carry a hidden preferred frame only if matter is not made of the thing that ticks: the frame must sit in
a layer the matter loops cannot see. FUNDAMENTALS makes matter the recurring pattern of the ticking field, so meeting
both Bell and Lorentz tests would mean giving up that identity, or tuning every particle's speed of light to one part in
10¹⁸–10³⁰."* This names the specific commitment that would have to go: entity = recurring pattern of the substrate (§1 +
"Entity" section).

## Open Threads
- **Classical substrate, separate route (sketch).** Collins is about quantum loops. FUNDAMENTALS' substrate is classical.
  To produce quantum statistics a classical field needs a fluctuating background. A classical fluctuation spectrum is
  Lorentz invariant only if it goes as ω³ (the SED zero-point form), and a lattice cutoff ends that spectrum in the grid
  frame. So the background is a medium, and nonlinear terms should transfer its frame to wave speeds. This is testable in
  the framework's own working substrate (2nd-order wave equation with a focusing nonlinearity): two fields, a thermal or
  ω³ background, then measure low-k speeds per species. Not run.
- **A local real-time rule with hypercubic-like cancellation?** It would break the "no ξ = 1 point" argument. The Floquet
  or quantum-walk literature (D'Ariano–Perinotti DSR-QCA) is the place to look. Those models are non-realist, so they
  would not rescue the Bell half anyway.
- **Why ξ < 1 is so much worse than ξ > 1** (+2.46 vs −0.27). A coarse tick relative to the grid costs about ten times
  more than a fine one. Is that the temporal doubler at mass 2a_s/a_t², i.e. a regulator artefact, or generic? It matters
  for FUNDAMENTALS' choice t_P = l_P/c.
- A **lessons line for lattice LIV checks**: at m = 0, match the k-spacing in every direction. A Wilson fermion approaches
  the continuum like √(ma) here, not (ma)².
