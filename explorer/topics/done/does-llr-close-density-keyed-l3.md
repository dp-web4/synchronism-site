# Topic: Does lunar laser ranging close the density-keyed L3 door?

## Question
/for-researchers lists "density-keyed L3 (striction) dynamics where the knee sits inside discs" as one of three doors
the scoped negative does not cover. The 2026-09-23 LLR result already excludes 68/74 density-keyed laws through
Ġ/G = −Ċ/C as the Sun moves through the disc, and those 68 include the in-disc knees. Does that exclusion survive under
L3 (the action, with the striction force −∇Ψ, Ψ = C′(ρ)|∇Φ|²/8πG)?

## Context
Raised by the 2026-10-19 simulated-visitor researcher persona. The maintainer's reasoning, not computed:
- The LLR argument needs only G_eff = G/C wherever C is uniform on the Earth–Moon scale. That holds under L2 and L3
  alike, because the field equation's local form is the same.
- What L3 adds is the striction force. Near Earth, |∇Φ| is dominated by Earth's own field, and C′ is evaluated at the
  local (smoothed) ρ. That term could add an anomalous Earth–Moon force or a perigee precession, which LLR also bounds
  (the Nordtvedt and precession limits).

The site now reads "probably closed, not shown closed".

## Why It Matters
If LLR binds under L3, the scope sentence loses one of its three doors, and the scoped negative ("no prediction that
differs from MOND or ΛCDM survives") gets wider. If it does not bind, the reason is the first place where L2 and L3
differ observably in the Solar System.

## Before you start
- **Grep first.** Check `explorer/findings/*llr*`, `*gdot*`, `*striction*` and `*l3*` for "Earth–Moon", "precession" and
  "power". The 09-23 finding may already state its L2/L3 dependence.
- **Write down the first-order drift before computing.** The striction acceleration on the Moon relative to the Earth,
  at the surviving ℓ ≳ 1 pc smoothing, in units of the LLR anomalous-acceleration bound.

## Suggested Starting Points
- `explorer/scripts/density_keyed_gdot_solar_motion.py` (09-23)
- `explorer/findings/l3-on-sparc-the-gradient-cell-is-a-gamma-relabel-the-density-cell-is-a-stability-problem.md`
- Hofmann & Müller 2018 (LLR Ġ/G); Williams, Turyshev & Boggs 2012 (LLR tests of the EP, anomalous precession)
- /for-researchers scope clause (lines ~24–35)
