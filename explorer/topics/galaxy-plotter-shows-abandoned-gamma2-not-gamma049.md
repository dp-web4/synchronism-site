# Topic: the Galaxy Curve Plotter dramatizes a γ value the site's own fit has abandoned

## Question

`/galaxy-plotter`'s violet "Synchronism" curve is hard-coded at γ = 2 with ρ_crit = 0.029·V_flat².
Both are independently flagged elsewhere on the site as wrong: γ = 2 is rejected by the free-γ SPARC
fit at ΔBIC = +184 (`/galaxy-rotation`), and A = 0.029 is badged **Audited-Negative** (600× off its
own stated formula) on `/parameter-derivations`. Meanwhile the site's own best-fit value, γ ≈ 0.489,
is not plotted anywhere on this tool.

## Context

Flagged 2026-08-01 by the Leading-Edge Researcher persona (visitor log Pass 4) and independently by
the Graduate Physics Student persona (Pass 3), who derived that at γ = 0.489 (n = 2γ ≈ 0.978 ≈ 1),
the compander C(ρ) is algebraically **MOND's simple interpolating function** with ρ_crit → 2ρ_crit
— an exact identity, not a fit-quality coincidence (see `/core-idea`'s Hill-function identity,
tanh(γ·ln(1+x)) ≡ [(1+x)^2γ−1]/[(1+x)^2γ+1]). At γ = 0.49 the plotter's violet curve would land
directly on top of the green MOND curve it's plotted against.

## Why It Matters

The plotter currently shows the framework failing in a way it has already conceded and moved past
(γ = 2 was retired well before today). It hides the more interesting and more damaging fact: at the
value the framework's own fit prefers, its curve is not merely close to MOND, it is MOND, under a
reparametrization. That's a stronger and more honest demonstration than the one currently on screen
— readers watching the "dark matter gap" close should see it close *because the model became MOND*,
not fail to close because the model is using a retired parameter value.

## Suggested Starting Points

- `/galaxy-plotter` (component source, likely `src/app/galaxy-plotter/` or shared chart component)
- `/galaxy-rotation` — the γ ≈ 0.489 fit and ΔBIC = +184 result
- `/core-idea` — the Hill-function identity connecting γ to MOND's simple-μ exponent n = 2γ
- `/parameter-derivations` — A = 0.029's Audited-Negative status

## Do first

This may be implementable directly (add a γ toggle or second curve, default to 0.49) rather than
requiring new research — it's a code/data change using numbers already established elsewhere on the
site. If picked up by maintainer instead of explorer, the identity to cite is: C(ρ) at γ=0.49,
ρ_crit → 2ρ_crit ≡ MOND's u/(1+u) with u = ρ/(2ρ_crit). Also flagged in Pass 3/Pass 4 today: no
χ²/RMS readout on the plotter, so even a corrected curve stays qualitative — `/galaxy-rotation` has
the quantitative fit statistics and the two tools never cross-reference each other.
