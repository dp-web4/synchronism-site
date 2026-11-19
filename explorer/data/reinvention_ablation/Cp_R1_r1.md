**Short answer:** I did not run a search, so this comes from memory. I don't know of a published model that uses C(x) = tanh(γ ln(1+x)) as a "coherence function". As an empirical fit, though, it belongs to a well-studied class, and the fit result is not new.

**What it is:** g_obs = g_bar/C(x) is a MOND-type interpolating function, g_obs = g_bar·ν(g_bar/a₀), with ν = 1/C. The tanh form is an unusual parametrisation, but it is algebraically simple:

- tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1]/[(1+x)^{2γ} + 1].
- At γ = ½ this reduces to x/(x+2).

**Known results it falls under:**
- McGaugh, Lelli & Schombert 2016, PRL 117, 201101 (arXiv:1609.05917), give the RAR fit ν = 1/(1 − e^{−√x}). Lelli et al. 2017, ApJ 836, 152, repeat it on SPARC.
- Famaey & McGaugh 2012, Living Reviews in Relativity 15, 10, review the simple, standard and "delta-family" interpolating functions. Milgrom's original MOND (1983) is the source of the idea.
- Li et al. 2018, A&A 615, A3, fit a generalised RAR function with extra free parameters to SPARC.
- Other two-parameter ν-families, such as Zhao & Famaey 2006 (uncertain on the exact form), also fit SPARC about equally well.

**Why the "identical to four digits" result is unsurprising:**
- SPARC RAR scatter is dominated by observational and intrinsic noise at about 0.13–0.14 dex.
- Any smooth interpolating function with the right asymptotes and one or two free parameters will therefore reach about the same RMS.
- The ΔBIC of +7.1 for one extra parameter is a statistical statement about the fit. It does not show that the functional form is physically special.

**A caution about your function:**
- For x ≪ 1, C ≈ γx, so g_obs → a₀′/γ, which is a constant floor.
- The deep-MOND limit g_obs ∝ √(g_bar·a₀) would need C ∝ √x.
- Your function can therefore only mimic that limit over the limited range SPARC covers. Its extrapolation to very low g_bar (for example, dwarf spheroidals or the outer parts of extended disks) differs from standard MOND. Check this before claiming equivalence.
- The best-fit γ ≈ 0.49 is close to ½. That suggests the data prefer the rational form x/(x+2), though the floor behaviour still applies.
- The fit gets worse by ΔBIC +184 when γ is pinned to 2. That falsifies the program's "derived" γ = 2 within this functional form.

**Conclusion:** The fit is a re-parametrisation of the known RAR/MOND interpolating-function family. I think the specific tanh–log form is unpublished, but I have not verified that. The "derived γ = 2" prediction is disfavoured by the program's own fit. I am uncertain about the Zhao & Famaey citation, and I have not checked whether anyone has used a tanh-log ν elsewhere.