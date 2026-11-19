**Short answer:** I don't know of a published model with this "coherence function" C(x) = tanh(γ ln(1+x)). As a fit, though, it is just another member of the well-studied family of MOND-type interpolating functions, so it is not new in kind.

**What it reduces to**
- The relation g_obs = g_bar/C(x) = ν(g_bar/a₀) g_bar is the standard radial acceleration relation (RAR) form. Milgrom (1983, ApJ 270, 365) introduced it, and McGaugh, Lelli & Schombert (2016, PRL 117, 201101, arXiv:1609.05917) fitted it to SPARC. The SPARC data come from Lelli, McGaugh & Schombert (2016, AJ 152, 157). Their ν = 1/(1−e^{−√x}) is the benchmark you mention.
- Other published interpolating functions include Famaey & Binney (2005, MNRAS 363, 603), Zhao & Famaey (2006), and the review by Famaey & McGaugh (2012, Living Rev. Relativ. 15, 10). Li et al. (2018, A&A 615, A3) also fit the SPARC RAR with a generalized form. A tanh-of-log form is not one I recognize from these, but I can't rule out a variant (uncertain).
- Algebraically, tanh(γ ln(1+x)) = [(1+x)^{2γ} − 1]/[(1+x)^{2γ} + 1]. For γ ≈ 1/2 this is x/(x+2).

**A concern with the stated result**
- For x ≪ 1, C ≈ γx, so g_obs → a₀′/γ, a constant. The observed RAR and baryonic Tully-Fisher relation instead require the deep-MOND limit g_obs ∝ √(g_bar a₀), i.e. C ∝ √x.
- With γ = 0.49, the function is nearly x/(x+2), which gives g_obs ≈ g_bar + 2a₀′. That is not MOND-like at low acceleration and should fit the low-g_bar SPARC points badly.
- An RMS of 0.1437 dex identical to McGaugh's fit to four digits is therefore surprising. Either the convention differs from what is written (for example, the definition of x or the form of C), or the fit has an error. I would re-run it and plot the residuals versus g_bar before claiming equivalence.
- The 2,807 point count also differs from the usual 2,693 points (153 galaxies) in McGaugh et al. 2016. Check which sample selection you used.

**On the γ = 2 comparison**
Since the free fit lands at γ ≈ 0.49 and the "derived" value is 2, a ΔBIC of +184 is a falsification of that derivation within this functional form. It is not evidence for the construction.

**Bottom line:** I know of no published source for the tanh-log coherence function. Any empirical success is the generic success of a two-parameter interpolating function on the RAR, and the claimed equivalence with McGaugh's ν needs verification given the incorrect deep-MOND limit.