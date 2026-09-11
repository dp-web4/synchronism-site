# Topic: Is density-keyed permittivity gravity dead on SPARC, or only this framework's placement of it?

**Priority: MEDIUM** (decides whether a citable no-go can be stated at class level)
**Seeded:** maintainer 2026-09-11

## Question

Refit Refracted Gravity's three parameters (ε₀, Q, ρ_c) on SPARC under the full field equation
∇·[ε(ρ)∇Φ] = 4πGρ in disc geometry. Then add the striction force of the variational completion. Does any
member of the class reach MOND's χ²/N = 21.2 on the same likelihood?

## Context

- A visitor researcher persona (2026-09-11) charged that the site's "3 to 17× worse at RG's f = 0.089" came
  from the algebraic g_bar/C shortcut and was a straw RG. **It did not.** `l2_sparc_core.py` is a
  finite-volume axisymmetric solve with the refraction term, and RG at its *published* parameters was also
  run (2026-08-28, `l2_field_equation_on_sparc_output.txt`). Profiled χ²/N was 188 / 240 (DiskMass sets) and
  716 / 911 / 1252 (Cesare+2020 E0 sets), against MOND 21.25 and Newton 465, with RG winning 10–17 % of galaxies.
- **But nothing was refit.** RG's parameters came from DiskMass vertical dispersions and E0 ellipticals, not
  from rotation curves, and the steepness exponent carries a 2.30× ln-vs-log ambiguity across RG papers
  (Publisher 2026-08-27). So "RG fails SPARC" is currently "RG at someone else's parameters fails SPARC."
- The site (`/for-researchers` artifact 1) now says the no-go covers the algebraic reading, and that the
  field-equation form has "an executed grid, not a class theorem." This topic is what would turn it into
  one, or show it can't be.
- 2026-08-26: the variational completion adds a striction force −∇Ψ, Ψ = C′(ρ)|∇Φ|²/8πG, up to 164× K_z
  when the knee sits inside a disc. No SPARC run includes it.

## Guards

1. **Profile Υ_disk exactly as the 08-28 runs did** (0.1 dex prior), and use the same N_eff = galaxies.
   The 09-09 lesson: re-run on the full 153, not a subsample, before drafting.
2. **Fix the log base first.** Read Eq. (4.1) of Matsakos & Diaferio 2016 verbatim and Cesare+2020's form;
   fit both bases if they disagree. Report which one the refit prefers, not only the best χ².
3. **Free parameters cost BIC.** RG gets three per sample (or per galaxy?). Say which, and compare with
   MOND's zero at fixed a₀, or one if a₀ is fitted.
4. **The striction force changes the vertical structure.** Adding it to a rotation-curve fit without
   re-solving hydrostatic equilibrium is not adding it. If that is out of reach in one session, run the
   refit without striction and state it as the open half.

## Why It Matters

- **Refit still fails:** a citable class-level no-go ("density-keyed linear permittivity cannot reproduce
  SPARC rotation curves at any placement"), and credit to RG where the site now says "same equation."
- **Refit succeeds:** the site's galaxy-sector verdict narrows to "this framework placed the knee wrong."
  The published prior art then *works* where the framework doesn't, which is a stronger and more honest
  statement than the one currently on the site.

## Suggested Starting Points

- `explorer/findings/scripts/l2_sparc_core.py` (`C_refracted(eps0, q, rho_c)` already exists)
- `explorer/findings/scripts/l2_field_equation_on_sparc.py` (fixed-parameter RG rows, lines ~135–139)
- `explorer/findings/l2-is-not-l3-for-a-disc-and-the-action-adds-a-force-the-tests-omit.md`
- Matsakos & Diaferio 2016 (arXiv:1603.04943); Cesare et al. 2020 (A&A 637, A70)
- Synchronism `simulations/publisher_20260827_rg_floor_is_not_universal.py` (the log-base note)
