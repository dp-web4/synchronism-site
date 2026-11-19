**Verdict:** I did not search. This is from memory, and I think the construction is not new, though I know of no paper with this exact tanh form.

**What it is.** The relation g_bar = g_obs·C(g_obs/a₀′) is Milgrom's original 1983 MOND form, g_N = μ(g/a₀)·g. So C is just a MOND interpolating function μ, with the argument taken as the observed acceleration. "Coherence function" is a relabelling.

**Special case at the fitted value.** Write tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1]/[(1+x)^{2γ} + 1].
- For γ = ½ this gives C = x/(2+x) = X/(1+X), with X = x/2.
- That is the "simple" interpolating function of Famaey & Binney (2005), whose inverse is ν(y) = ½[1 + √(1+4/y)].
- The fitted γ = 0.49 is essentially ½, so the fit recovers that function.
- The implied MOND scale is a₀ = 2a₀′ ≈ 1.06×10⁻¹⁰ m s⁻². This is close to the standard ~1.2×10⁻¹⁰ m s⁻².
- The simple function is already known to fit the RAR about as well as McGaugh's exponential ν. This explains the match to four digits in RMS (0.1437 dex).
- For general γ, C ≈ γx as x→0, which gives the deep-MOND limit g_obs² = a₀′ g_bar/γ. At large x, C → 1 − 2(1+x)^{−2γ}, so the Newtonian limit is recovered with a power-law correction.
- The γ parameter is therefore a one-parameter family around the simple function. It is similar in spirit to the Zhao–Famaey (2006) and Famaey–McGaugh (2012) families.
- The γ = 2 pin is a different member of the family, with a much sharper transition. A worse fit is expected, and the ΔBIC of +184 is unsurprising.

**Citations**
- Milgrom 1983, ApJ 270, 365. This is the μ-form of MOND.
- Famaey & Binney 2005, MNRAS 363, 603. This is the simple μ.
- Zhao & Famaey 2006, ApJ 638, L9. This is a family of interpolating functions (details uncertain).
- Famaey & McGaugh 2012, Living Reviews in Relativity 15, 10.
- McGaugh, Lelli & Schombert 2016, PRL 117, 201101. This is the RAR with ν = 1/(1−e^{−√y}) and g† ≈ 1.2×10⁻¹⁰ m s⁻².
- Lelli et al. 2017, ApJ 836, 152. This is the SPARC RAR.
- Lelli, McGaugh & Schombert 2016, AJ 152, 157. This is the SPARC data.
- Li et al. 2018, A&A 615, A3. This is a generalized RAR fit to SPARC.

**Assessment**
- The functional form is a reparametrized MOND interpolating function. Its best fit is the Famaey–Binney simple function, and I know of no tanh(γ ln(1+x)) parametrization in the literature (uncertain).
- Fitting the RAR with such functions is established. The only novelty could be the physical interpretation or the derived γ = 2, and the data disfavor that value.
- The program should compare its fit with the simple function at fixed a₀ = 2a₀′. It is then a zero-parameter-change match, not an independent confirmation.