**Short answer:** The result is not new. The fitted function is a known MOND interpolating function in disguise.

**Reduction.** Write tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1] / [(1+x)^{2γ} + 1]. The fitted value γ = 0.49 is consistent with γ = 1/2, which gives

C(x) = x/(2+x).

The relation then becomes g_bar = g_obs · y/(1+y), with y = g_obs/(2a₀′).

This is the "simple" MOND interpolating function, μ(y) = y/(1+y), applied to g_obs. It is the Famaey & Binney (2005) form, and the effective MOND acceleration is a₀ = 2a₀′ ≈ 1.06×10⁻¹⁰ m s⁻². That is close to Milgrom's canonical value of about 1.2×10⁻¹⁰ m s⁻².

- Famaey & Binney 2005, MNRAS 363, 603 (arXiv:astro-ph/0506723) introduced the simple μ. I am fairly sure of this citation.
- Zhao & Famaey 2006, ApJ 638, L9 discussed the family of interpolating functions. This citation is less certain.
- Milgrom 1983 (ApJ 270, 365) is the original MOND.

**Why it matches McGaugh's fit.** McGaugh, Lelli & Schombert 2016 (PRL 117, 201101, arXiv:1609.05917) fit g_obs = g_bar/(1 − e^{−√(g_bar/g†)}) with g† ≈ 1.2×10⁻¹⁰ m s⁻². The simple μ in the inverse form is known to fit the SPARC RAR almost as well. Related work: Lelli et al. 2017 (ApJ 836, 152) and Li et al. 2018 (A&A 615, A3). A fit that matches to four digits is therefore expected.

**What γ is doing.** The free γ gives a one-parameter generalisation of the simple μ. It changes the transition sharpness and the deep-MOND slope, so the family is related to the Zhao-type or "generalised simple" interpolating functions. Check the exact slopes before calling it identical to those.

- **Deep-MOND limit (x→0):** C ≈ γx, so g_bar ∝ g_obs². This gives g_obs ∝ √g_bar only if the exponent is 1, which holds for every γ. The γ coefficient just rescales a₀.
- **Newtonian limit (x→∞):** C → 1, and the approach is a power law, 1 − 2(1+x)^{−2γ}. The approach to the Newtonian regime therefore depends on γ.

**Program's γ = 2.** This gives tanh(2 ln(1+x)) = [(1+x)⁴ − 1]/[(1+x)⁴ + 1], a much sharper transition. It is not a standard published μ that I know of, and the ΔBIC of +184 is the expected penalty for a transition that is too sharp. This is only a statement about the functional form. I have not found a published use of it with that derivation.

**What I could not check.** I did not search the literature for this answer. I also did not verify the point count: McGaugh 2016 used 2,693 points from 153 galaxies, not 2,807. Check whether the program's sample differs.

**Bottom line.** The empirical result is a re-derivation of the Famaey–Binney simple μ function (γ = 1/2) fit to the RAR. The "coherence function" tanh form is a reparametrisation, and I don't know of a prior publication of exactly that form. Any claim of novelty would rest on the theoretical derivation of γ = 2, which the data disfavour.