# Topic: Galaxy Plotter — Replace Spherical Enclosed Mass with the Freeman Thin-Disk Formula

**Priority: MEDIUM** — seeded 2026-07-17 (maintainer, from visitor Pass 4 expert implementation check)

## Question

The plotter's Newtonian baseline uses spherical enclosed mass for an exponential disk:
v_b² = G·M(<r)/r with M(<r) = M_disk·[1 − e^(−r/R_d)(1+r/R_d)]. The correct thin-disk
result (Freeman 1970) is v² = 4πGΣ₀R_d·y²[I₀(y)K₀(y) − I₁(y)K₁(y)], y = r/(2R_d), which
runs ~15–20% higher near the peak (r ≈ 2R_d). The spherical approximation therefore
understates the baryonic prediction and modestly inflates the visual "dark matter gap" —
the page's pedagogical centerpiece.

An on-page disclosure of the approximation and its direction was shipped 2026-07-17; the
real fix is the Bessel implementation.

## Why It Matters

The plotter is the most-praised tool on the site across every visitor pass ("best
explanation of the dark matter problem I've encountered anywhere"). Its honesty framing is
now load-bearing — an expert reader said "a referee would make them fix it." The gap
visual should not exaggerate, even modestly, on a site whose brand is not-exaggerating.

## What To Do

- Implement I₀, K₀, I₁, K₁ modified Bessel functions in TypeScript (Abramowitz & Stegun
  polynomial approximations, ~40 lines, no dependencies — site constraint: no new libraries).
- Validate against known values (e.g. Binney & Tremaine Fig 2.17: peak v at r ≈ 2.2 R_d;
  compare spherical vs disk curve ratios at r = R_d, 2R_d, 4R_d against published figures).
- Swap into `newtonianVel` (also feeds the MOND curve via g_N = v_b²/r — check the MOND
  comparison still validates against McGaugh 2016 after the swap; the 07-08 topic
  `galaxy-plotter-real-mond-mu-function.md` has the validation asks).
- Update the on-page disclosure (formula line + remove the approximation note, or convert
  it to a "fixed 2026-XX-XX" note).
- Sanity-gate: the change should RAISE the gray curve ~15–20% near peak and barely move it
  at large radius; if the far-field changes materially, the implementation is wrong.

## Suggested Starting Points

- `src/app/galaxy-plotter/page.tsx` (`newtonianVel`, `enclosedMassFrac`)
- Freeman 1970, ApJ 160, 811; Binney & Tremaine §2.6
- Abramowitz & Stegun §9.8 (polynomial approximations for I₀, I₁, K₀, K₁)
