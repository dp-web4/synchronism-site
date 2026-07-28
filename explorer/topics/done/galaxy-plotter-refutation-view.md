# Topic: Galaxy Curve Plotter — Add Refutation View for ΔBIC=+184

## Priority: HIGH

## Question

The Galaxy Curve Plotter ships 5 hand-picked galaxies all showing Synchronism ≈ MOND agreement. The framework's own ΔBIC=+184 refutation on 2807 SPARC rotation-curve points is invisible in the tool. How should the refutation be surfaced in the interactive tool?

## Context

Pass 4 researcher (2026-05-28) flagged: "Ships 5 hand-picked SPARC galaxies, all showing Synchronism≈MOND agreement. The ΔBIC=+184 refutation on 2807 SPARC points (the framework's own discriminator) is mentioned elsewhere on the site but is not surfaced in the tool that plots galaxy curves."

The tool currently shows: for 5 galaxies (DDO 154, NGC 2403, NGC 3198, UGC 128, NGC 7331), three curves — SPARC data, MOND, and Synchronism — which are visually indistinguishable. This correctly shows that free-γ Synchronism ≈ MOND at galaxy level.

But: the discriminating test the framework ran was NOT "does γ=free Synchronism match the rotation curve" (it does — MOND does too). The test was: "does γ=2 (the framework's universal constant) fit better than free-γ?" Answer: ΔBIC=+184 — γ=2 is strongly refuted.

## Proposed Additions

1. **Minimum viable fix**: Add a text block in the tool that says:
   "This tool shows free-γ fits (γ fitted per galaxy). The framework's universal constant γ=2 was tested on the full 2,807-point SPARC RAR dataset and refuted at ΔBIC=+184 (strong evidence). Free-γ converges to γ≈0.49 = MOND. See /galaxy-rotation for the refutation."

2. **Better fix**: Add a γ=2 forced curve to each galaxy plot (different color, e.g. red), so users can SEE the γ=2 failure directly. This requires changing the galaxy-plotter to pass γ=2 to the same C(ρ) equation and plot the resulting prediction alongside the free-γ fit.

3. **Full RAR view**: A second tab showing the RAR (g_obs vs g_bar) scatter from SPARC, with the γ=2 prediction band and the free-γ fit. This is the global refutation that the per-galaxy view can't communicate.

## Why It Matters

The tool's visual says "agreement" while the page text says "refutation." For a researcher, this is the opposite of the site's honesty brand. The tool should either show the refutation visually or be deprecated.

Pass 4 suggested: "Add a 'refutation view' — overlay γ=2 prediction band against the full SPARC RAR distribution, show the residuals that produced ΔBIC=+184. The tool currently displays agreement while the page text describes the refutation; visually only one of those is the headline."

## Suggested Starting Points
- /galaxy-plotter (current tool)
- src/app/galaxy-plotter/page.tsx (tool source)
- /galaxy-rotation (prose description of ΔBIC result)
- explorer/findings/rar-transition-discriminator-result.md

---

## RESOLVED 2026-07-28 (explorer) — topic premise is stale

The premise ("5 hand-picked galaxies all showing Synchronism ≈ MOND agreement") no longer describes
the tool. Since the 2026-07-08 rewrite the violet "Synchronism (real)" curve plots the framework's
actual C(ρ) and sits **on the baryon line** — the refutation is what the tool now renders. Verified
numerically this session: max deviation from the Newtonian curve is 1.1×10⁻³ km/s across all five
galaxies, 200–26,000× below one screen pixel.

The refutation view was therefore already built; what is missing is stronger and is filed as new
work in `explorer/findings/galaxy-coherence-term-anticorrelates-with-requirement.md`:
crossing the knee makes the fit *worse*, because the coherence term anti-correlates with the
required boost at Pearson r ≈ −0.97 for every (γ, ρ_crit).

Archived.
