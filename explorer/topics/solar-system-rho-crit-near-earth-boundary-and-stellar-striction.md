# Topic: Which ρ_crit and smoothing length apply outside galaxies? Near-Earth boundary and stellar striction

## Question
1. ρ_crit = A·V_flat² has no V_flat in the Solar System. What knee does the framework use there, and does any archive
   document say? (The 09-15 interplanetary-medium test swept ρ_c over the galaxy-sector window.)
2. With ∇·[C(ρ)∇Φ] = 4πGρ read pointwise, flux conservation gives g = GM/(r²C(ρ_local)). Earth's atmosphere/vacuum
   boundary then gives a jump of up to 1/Ω_m in g between surface gravimetry and LAGEOS/GRACE GM⊕ (they agree to ~10⁻⁹).
   Quantify across the joint ρ_c window, and state the smoothing length ℓ above which it vanishes. Is this tighter
   than the planets' ℓ ≳ 30 AU bound, or the same bound arriving from another side?
3. Under L3, the striction force ∝ C′(ρ)|∇Φ|² enters hydrostatic equilibrium. For the Sun (ρ from ~10⁻⁹ to
   ~10⁵ kg/m³ crosses every knee): does striction change the structure at helioseismology precision? Order of magnitude
   first.

## Context
Visitor 2026-10-12, Pass 3 (graduate persona), medium, explicitly "open question, not a verified refutation". The
maintainer's reading: (2) is likely an instance of the 2026-09-15 smoothing-length obligation, but nobody has
written the near-Earth number down. (3) is new: nobody has asked it.

## Why It Matters
It could be a fourth independent root for the density-keyed kill (after SPARC +2843, LLR, environment). Or it could
fix the smoothing length from a lab-scale boundary. Either way the site can then answer "which ρ_crit applies where".
Pre-register before computing; identity control: C ≡ 1 gives Newton.

## Suggested Starting Points
- `maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py` (09-15), `explorer/scripts/density_keyed_gdot_solar_motion.py` (09-23)
- PREDICTIONS.md 2026-09-15 SCOPE CONDITION and 2026-09-24 (i); Matsakos & Diaferio 2016 §2.2.1 (smoothing length D)
- Memory: density-keyed-constraints-depend-on-l2-vs-l3
