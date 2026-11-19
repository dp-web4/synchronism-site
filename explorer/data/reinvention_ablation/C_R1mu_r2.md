**Short answer:** the functional form is probably not published as such, but it is essentially a known MOND interpolating function in disguise, so the fit result is not new.

**Reduction.** Write t = (1+x)^{2γ}. Then C(x) = tanh(γ ln(1+x)) = (t−1)/(t+1).

- **γ = 1/2:** C(x) = x/(2+x) = (x/2)/(1+x/2). This is exactly the "simple" MOND interpolating function μ(y) = y/(1+y), with y = g_obs/a₀ and a₀ = 2a₀′. The fitted a₀′ = 5.3×10⁻¹¹ m s⁻² gives a₀ ≈ 1.06×10⁻¹⁰, close to the canonical 1.2×10⁻¹⁰.
- **Deep-MOND limit (x≪1):** C ≈ γx, so g_obs ≈ √(g_bar·a₀′/γ). This is the Milgrom baryonic Tully-Fisher scaling.
- **Newtonian limit (x≫1):** 1−C ≈ 2(1+x)^{−2γ}. For γ = 1/2 this is the same 1/x approach as the simple function.

So the fitted γ = 0.49 is consistent with the simple function (γ = 1/2). The free-γ fit is a slight generalization of it, and the program's "coherence function" is a reparametrization of known MOND interpolating functions.

**Known results it coincides with:**
- Milgrom 1983, ApJ 270, 365, and 1983 ApJ 270, 371/384, which introduced MOND.
- Famaey & Binney 2005, MNRAS 363, 603, which introduced the simple μ-function. Uncertain on exact page.
- Famaey & McGaugh 2012, Living Reviews in Relativity 15, 10 (arXiv:1112.3960), which reviews the families μ_n(x) = x/(1+xⁿ)^{1/n} and other interpolating functions.
- McGaugh, Lelli & Schombert 2016, PRL 117, 201101 (arXiv:1609.05917), the RAR with ν(y) = 1/(1−e^{−√y}). Lelli et al. 2017, ApJ 836, 152, give the SPARC fit.
- Li et al. 2018, A&A 615, A3, who fit the RAR with several interpolating functions. Uncertain on details.
- Gentile, Famaey & de Blok 2011, A&A 527, A76, who found the simple function fits well.

**Interpretation of the numbers.**
- The RAR is insensitive to the precise interpolating function. Several one-parameter families reach about 0.13–0.14 dex scatter on SPARC, so agreement with McGaugh's ν-function to four digits is expected and carries no special significance.
- The ΔBIC +7.1 preference for ν over the extra-parameter tanh form is mild.
- γ = 2 gives C = ((1+x)⁴−1)/((1+x)⁴+1). This has a sharper transition (a faster Newtonian approach, ∝ x⁻⁴) than the data allow. The ΔBIC +184 is just that mismatch, and it undercuts the "derived γ = 2" claim.

**Not found:** I know of no paper that uses tanh(γ ln(1+x)) specifically. Treat that novelty claim as unverified, because I could not search exhaustively. The physics content (MOND phenomenology with a₀ ≈ 1.1×10⁻¹⁰) is not new.