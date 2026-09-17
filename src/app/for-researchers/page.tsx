import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export const metadata: Metadata = {
  title: 'For Researchers: What\'s Citable',
  description: 'Five citable negative results extracted from the failure documentation: the local-density locality no-go, dim-4 LIV naturalness gap for absolute-time substrates, the B1 CHSH check (Bell illustrated; two nonlocal construction nulls), density-keyed unidentifiability (knee above the sampled density ⇒ interpolant unmeasurable), and the globular-cluster exclusion window on density-keyed knees. Plus one secondary DESI mechanism-class negative and one open question about the audit instrument (A2ACW), which is not a citable null.',
};

export default function ForResearchers() {
  return (
    <>
      <Breadcrumbs currentPath="/for-researchers" />
      <h1>For Researchers: What&apos;s Citable</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          An arriving expert should not have to excavate the failure documentation to find what
          survives it. By the site&apos;s own scoreboard the framework has <strong>0 confirmed
          predictions, 0 independently-derived parameters, and &mdash; on the discrimination axis &mdash;
          2 executed tests that discriminated, both of which selected MOND, and 0 that
          selected Synchronism</strong> over MOND+EFE+&Lambda;CDM. Those are one sentence because they are
          one fact read two ways, and stating them apart has confused three expert readers: the framework&apos;s
          galaxy sector is a strict submodel of MOND <em>under the acceleration-keyed C(a) reading</em> (see below;
          scope added 2026-09-05 &mdash; under the density-keyed C(&#x03C1;) reading that the local-density no-go, the
          plotter, and the environment test were run against, it is not a submodel but a distinct theory, and that one
          is refuted), so a discriminating test could at best tie on fit, and could select it only if its restriction held.
          The two that discriminated are TEST-09 (3.3σ) and TEST-10 (boost ceiling). (This page said
          &ldquo;0 tests currently discriminating&rdquo; until 2026-07-27, which booked the framework&apos;s two
          strongest empirical results as zero; the bolded line was reunified 2026-08-08.)
          What remains citable are <strong>replications,
          quantified instances of known results, and executed negative results</strong> — the five
          numbered artifacts below survive the framework being wrong, precisely because they do not depend
          on it being right. Below them sit one secondary, mechanism-class negative (DESI) and one{' '}
          <a href="#a2acw-open-question" style={{ color: 'var(--color-accent-blue)' }}>open question</a> about the audit
          instrument (A2ACW), which is not a citable null.
        </p>
        <div id="start-here" style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '0.375rem', padding: '0.85rem 1.1rem', marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', scrollMarginTop: '5rem' }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>Start here: negative results on density-keyed modified gravity
          (framework-independent)</strong>
          <p style={{ margin: '0.4rem 0 0.5rem' }}>
            <strong>If you read one thing:</strong> the sign statement in item 1, then item 5 with its &#x03B3; attached, then
            item 4. None of the three needs Synchronism to be right; each is scoped in its own card.
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
            <li>
              <a href="#locality-no-go" style={{ color: 'var(--color-accent-blue)' }}>1. Local-density no-go</a>: a knee keyed
              on local volumetric density must fall as V<sup>&minus;2</sup> (BTFR-forced); the framework asserts &#x03C1;<sub>crit</sub> &prop;
              V<sup>+2</sup>, the inverted sign. Algebraic-coupling class only; gradient (symmetron-class) schemes escape.
            </li>
            <li>
              <a href="#gc-window" style={{ color: 'var(--color-accent-blue)' }}>5. Globular-cluster exclusion window</a>: 42
              clusters exclude a knee &#x03C1;<sub>c</sub> &isin; 0.1&ndash;300 M<sub>&#x2609;</sub>/pc&sup3; at &#x03B3; = 0.489,
              narrowing to 0.5&ndash;100 at &#x03B3; = 2. Meaningless without its &#x03B3;.
            </li>
            <li>
              <a href="#unidentifiability" style={{ color: 'var(--color-accent-blue)' }}>4. Density-keyed unidentifiability</a>:
              a knee above the sampled density leaves one measurable number. Fisher correlation &#x03C1;(ln&#x03B3;, ln A) =
              +1.000000.
            </li>
            <li>
              Different domain, also framework-independent:{' '}
              <a href="#dim4-liv" style={{ color: 'var(--color-accent-blue)' }}>2. dim-4 LIV naturalness gap</a> for
              absolute-time discrete substrates (16&ndash;28 OOM).
            </li>
          </ul>
          <p style={{ margin: '0.6rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong>Acronyms:</strong> <strong>MOND</strong> Modified Newtonian Dynamics (Milgrom 1983) &middot;{' '}
            <strong>RAR</strong> Radial Acceleration Relation (observed vs baryonic gravity in galaxies) &middot;{' '}
            <strong>BTFR</strong> Baryonic Tully&ndash;Fisher Relation &middot; <strong>SPARC</strong> Spitzer Photometry and
            Accurate Rotation Curves (rotation-curve database) &middot; <strong>BIC</strong> Bayesian Information Criterion
            (a fit score penalised for parameter count; lower is preferred) &middot; <strong>EFE</strong> External Field Effect &middot;{' '}
            <strong>LIV</strong> Lorentz-invariance violation &middot; <strong>SME</strong> Standard-Model Extension (the
            parametrisation LIV bounds are reported in) &middot; <strong>CMB</strong> cosmic microwave background &middot;{' '}
            <strong>LSS</strong> large-scale structure &middot; <strong>GRB</strong> gamma-ray burst &middot;{' '}
            <strong>DESI</strong> Dark Energy Spectroscopic Instrument &middot; <strong>OOM</strong> orders of magnitude.
          </p>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          <strong>What nesting settles and what it does not (corrected 2026-09-14):</strong>{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest
          Assessment</a> names the bounded boost B &#8804; 1/&#x03A9;<sub>m</sub> &#8776; 3.17 as
          &ldquo;the framework&apos;s only structural difference from MOND.&rdquo; A ceiling is a
          <em> restriction</em>, so the galaxy sector is <strong>MOND &cap; {'{'}B &#8804; 3.17{'}'}</strong>
          &mdash; a nested submodel. A bounded-boost restriction of a MOND-class interpolating function cannot
          improve on its parent&apos;s <em>fit</em>; it can only tie with fewer degrees of freedom, or fail where the
          ceiling binds. The tie is not a consolation prize: B &#8804; 1/&#x03A9;<sub>m</sub> is fixed by cosmology, not
          fitted, so a ceiling that held across the data would be <em>selected</em> over its parent under any
          complexity-penalised comparison (as &Lambda;CDM is over wCDM). It was a risky restriction, and which branch
          obtains is an empirical question that only the data could answer. SPARC answered it: the ceiling binds
          (TEST-10: 69% of discs exceed the 1/&#x03A9;<sub>m</sub> cap; even the most permissive candidate normalisation,
          &#x03A9;<sub>m</sub>/&#x03A9;<sub>b</sub> &#8776; 6.4, is exceeded by 28 of 153; the count was computed at
          0.315/0.0493 = 6.39). Same verdict, reached through
          data rather than a priori. One dependency: the nesting holds only if the acceleration form&apos;s exponent
          &#966; is fixed; the archive&apos;s provenance audit found it fitted-then-named, and if it is free the law is not
          a pure restriction at all. Source: <code>Research/proposals/nested_submodel_fit_versus_selection.md</code>{' '}
          (2026-07-29); this paragraph said &ldquo;it cannot win&rdquo; until 2026-09-14. See item 8 on{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          for the ceiling&apos;s own provenance, which is itself asserted rather than derived.
        </p>
        <div style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', padding: '0.85rem 1.1rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f87171' }}>The complement of that bound, and it is arithmetic rather than a fit
          (explorer 2026-09-09, added here 2026-09-10).</strong>{' '}
          The ceiling bound above says what the framework <em>supplies</em>. The dual question &mdash; what SPARC
          <em> demands</em> &mdash; has a clean answer: at the standard &Upsilon;, <strong>90% of the 153 discs require a
          coherence floor f&nbsp;&le;&nbsp;0.100, and all 153 require f&nbsp;&le;&nbsp;0.016.</strong> The framework&apos;s
          own floor is f&nbsp;=&nbsp;&Omega;<sub>m</sub>&nbsp;=&nbsp;0.315, and its archive&apos;s enumerated candidate
          ratios stop at &Omega;<sub>b</sub>/&Omega;<sub>m</sub>&nbsp;=&nbsp;0.157 &mdash; while 1/&Omega;<sub>m</sub>
          itself is nowhere derived. <strong>There is no derivation route to a floor low enough</strong>, which closes a
          question this program self-seeded on 2026-09-08. Independent cross-check: the 77% of discs that need more
          boost than 1/&Omega;<sub>m</sub> supplies reproduces the 118/153 = 77.1% found by a separate 2026-07-30 route.
          <br /><br />
          And the trade is not escapable by lowering the floor, because the two failures are the same failure pointing
          opposite ways: at Refracted Gravity&apos;s f&nbsp;=&nbsp;0.089 the ceiling problem <em>is</em> solved (the
          can&apos;t-be-lifted fraction falls to 10&ndash;23%) and &chi;&sup2;/N rises to 195&ndash;2700 &mdash;
          <strong> 3 to 17&times; worse</strong>, because the boost then arrives in the inner disc where SPARC says
          nothing should happen. <strong>How those numbers were computed</strong> (stated 2026-09-11, after a researcher
          reader reasonably assumed the algebraic shortcut): by solving the full field equation
          &nabla;&middot;[C&nabla;&Phi;] = 4&pi;G&rho; for each disc on an axisymmetric (R, z) grid, refraction term
          &nabla;C&middot;&nabla;&Phi; included and the solver validated against exact Hankel-transform discs &mdash;{' '}
          <em>not</em> by g = g<sub>bar</sub>/C. The &ldquo;3 to 17&times;&rdquo; is relative to the same law at the
          &Omega;<sub>m</sub> floor; against MOND simple-&mu;&apos;s &chi;&sup2;/N = 21.2 it is 9&ndash;130&times;. Those runs put{' '}
          <em>this framework&apos;s</em> switch (&gamma; = 0.489 or 2) at RG&apos;s floor, so they are not a test of Refracted
          Gravity. RG at its <em>own</em> published parameters was run with the same solver on 2026-08-28, without refitting:
          &chi;&sup2;/N = 188 and 240 for the two DiskMass parameter sets (between MOND&apos;s 21 and Newton&apos;s 465) and
          716&ndash;1,252 for the elliptical-galaxy (E0) sets of Cesare et al. 2022, beating MOND in 10&ndash;17% of galaxies. Still open: a
          SPARC <em>refit</em> of RG&apos;s three parameters (its steepness exponent is written with ln in some papers and log
          in others, a 2.3&times; ambiguity), and the striction force a variational completion of the field equation adds,
          which neither RG as published nor these runs include. <em>Prior art worth knowing before anyone re-runs this:</em> Cesare et al. 2020
          (A&amp;A 637, A70), Refracted Gravity&apos;s founding disc paper, reports verbatim that the models
          &ldquo;underestimate the observed accelerations of 0.1&ndash;0.3 dex at low Newtonian accelerations&rdquo;
          &mdash; same model class, same failure mode, not attributed to the floor there, and never run on SPARC.
        </div>

        {/* Artifact 1: locality no-go */}
        <div id="locality-no-go" className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #8b5cf6', scrollMarginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>1. The local-density no-go — a quantified instance of Milgrom&apos;s non-locality obstruction</h2>
            <ValidationBadge status="audited-negative" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Audited-Negative: closed by execution, for the algebraic-coupling class (scope below).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the core obstruction is <em>not</em> ours.
            Milgrom proved MOND-as-modified-inertia must be non-local <em>in time</em> (astro-ph/0510117,
            building on the Milgrom 1994 Galilei-invariance theorem); the <em>spatial</em> non-locality this
            no-go actually uses — the successful organizing variable is acceleration/enclosed mass, not any
            local column — is carried by the RAR/MDAR literature (McGaugh 2004; Lelli, McGaugh &amp;
            Schombert 2016; Lelli et al. 2017, scatter &#x2272;0.13 dex — who tested <em>surface</em>{' '}
            columns, never volumetric &#x03C1;; Stiskalek &amp; Desmond 2023 for the systematic
            variable sweep) and by the elliptic Bekenstein&ndash;Milgrom field equation.
            What this project adds is the <strong>quantified local-density instance</strong>: any
            gravity modification keyed on the <em>local volumetric density</em> &#x03C1;(r){' '}
            <strong>via algebraic coupling</strong> (C(&#x03C1;)&middot;g as a multiplicative scalar on
            the force — the class the framework&apos;s <em>algebraic</em> reading belongs to. <strong>Scope correction
            2026-09-11 (visitor researcher persona):</strong> this page previously said &ldquo;the class this framework
            belongs to,&rdquo; but the framework&apos;s field-equation form &nabla;&middot;[C&nabla;&Phi;] = 4&pi;G&rho;
            (Refracted Gravity&apos;s) carries a gradient coupling &nabla;C&middot;&nabla;&Phi; in discs and is outside this
            statement as written. For that form the SPARC evidence is the disc-geometry grid in the box above (floored
            switch at &gamma; &isin; {'{'}0.489, 2{'}'}, f &isin; {'{'}0.089, 0.315{'}'}, knee 3&times;10&#x207B;&#x2074;&ndash;0.16
            M<sub>&#x2609;</sub>/pc&sup3;, every point worse than MOND) plus RG at its published, unrefitted parameters: an
            executed grid, not a class theorem; gradient-based schemes such as symmetron
            screening and non-local state variables such as enclosed mass are <em>not</em> covered and
            are not claimed to fail here) fails in
            three independently executed ways — head-to-head on the same SPARC points against the acceleration-keyed
            form, density keying loses at <strong>&#x0394;BIC +2843 with &#x03B3; free</strong> (best-fit &#x03B3; &rarr; 0.046,
            i.e. the fit switches its own density dependence off; +142 after effective-N deflation; see{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>); the
            cross-system &#x03C1;&#x2194;g<sub>bar</sub> offset is ~1.7 dex; and clusters require a &#x03C1;<sub>crit</sub> 10<sup>4</sup>–10<sup>6</sup>&times;
            off the galaxy calibration (Coma, four ansätze, one structurally bounded at velocity ratio &le;2 vs observed 4.6).
            The sign statement below (&#x03C1;<sub>t</sub> &prop; V<sup>&minus;2</sup> required by the BTFR, &#x03C1;<sub>crit</sub>{' '}
            &prop; V<sup>+2</sup> asserted) is the data-free reason all three fail. <em>Not</em> a route against density
            keying: the SPARC RAR &#x0394;BIC = +184, which this list cited until 2026-09-14. That fit keyed the compander on
            acceleration (C as an implicit &mu; on g<sub>obs</sub>, &#x03B3; pinned at 2), so it refutes the &#x03B3; = 2 pin in the
            acceleration-keyed realization, not density keying. Nor is the environment run (r&sup2; = 0.0001): Honest
            Assessment reclassified it on 2026-09-05 as refuting a registered amplitude that is consistent with the
            equation&apos;s own tiny ambient-density lever.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: '#ef4444' }}>Companion result, no data required (added 2026-09-07,
            visitor researcher persona):</strong> the framework&apos;s galaxy sector is not local either, so the
            no-go above is not a contest between a local theory and a non-local phenomenon.
            &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; keys the coherence threshold to an
            r &rarr; &infin; quantity (BTFR-fixed by total baryonic mass), and B<sub>max</sub> = 1/&#x03A9;<sub>m</sub>{' '}
            caps a per-galaxy boost with a cosmological parameter. Both are <em>Predictive Closure</em> violations
            under the framework&apos;s own MRH definition. The sector needs the one non-local variable it lacks
            (g<sub>bar</sub>) and uses two it should not have. This also supplies the mechanism behind artifact 4
            below: at SPARC-sampled x, C &#x2248; &#x03B3;&#x03C1;/(A V<sub>flat</sub>&sup2;), so &#x03B3; and A enter
            only as &#x03B3;/A — one number per galaxy, which is what &#x03C1;(ln&#x03B3;, lnA) = +1.000000 measures.
            Full statement on <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem' }}>
            <strong style={{ color: '#38bdf8' }}>Why this is the whole difference, not one failure among six (added
            2026-08-02):</strong>{' '}
            <Link href="/tier-1-existing" style={{ color: '#38bdf8' }}>Tier 1</Link> defines
            f<sub>DM</sub>&nbsp;=&nbsp;1&minus;C, so C <em>is</em> the interpolating function &#956; by
            definition. And at &#947;=1/2 &mdash; SPARC&apos;s free fit lands at 0.489, 2.2% away &mdash;
            C(&#961;)&nbsp;=&nbsp;x/(x+2)&nbsp;=&nbsp;&#956;<sub>simple</sub>(x/2) <em>identically</em> (see{' '}
            <Link href="/coherence-function" style={{ color: '#38bdf8' }}>Coherence Function</Link>). Put those
            together: the galaxy sector is MOND, with &#956;&apos;s argument swapped from acceleration to local
            density &#961;. (Precision, 2026-09-08: in MOND μ is keyed on g<sub>obs</sub>, and the SPARC fit that
            produced γ = 0.489 used C exactly that way &mdash; as an implicit μ(g<sub>obs</sub>/a₀′), solved for
            g<sub>obs</sub>; see <Link href="/coherence-function" style={{ color: '#38bdf8' }}>Coherence Function</Link>{' '}
            for the script line. This sentence used to say &ldquo;from g<sub>bar</sub>,&rdquo; and the fit swapped
            nothing; the swap to ρ is the framework&apos;s <em>stated</em> law, which is what the no-go tests.)
            That single substitution &mdash; the one this
            no-go quantifies &mdash; is not one result among the site&apos;s six executed refutations. It is the
            entire content of what makes this framework different from MOND in the galaxy sector. Everything
            else downstream (BTFR slope, DM-fraction ceiling, RAR shape) is a consequence of that one swap
            failing.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Scope split — which half generalizes (2026-07-08):</strong> the three numbered
            results carry different generality. The <em>sign statement below</em> (&rho;<sub>crit</sub>{' '}
            must scale as V<sup>&minus;2</sup>) is BTFR-forced and profile-independent — it holds for any
            local-&rho; MOND mimic. The <em>&#x0394;BIC +2843 ensemble rejection</em> is specific to the
            log-density compander family actually tested (C = tanh(&#x03B3;&nbsp;ln(1+&#x03C1;/&#x03C1;<sub>crit</sub>)));
            other local-density functional forms would need their own ensemble runs. The cluster/offset
            arguments sit in between: the ~1.7 dex &rho;&#x2194;g<sub>bar</sub> mismatch is a property of
            the data geometry, but its magnitude was computed for this framework&apos;s calibration.
            Cite the sign statement for generality; cite the &#x0394;BIC +2843 for this family (and +184 only for the
            &#x03B3; = 2 pin in acceleration keying).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>One-line citable form — the sign statement (2026-07-02):</strong> a knee keyed on
            local volumetric density must <em>fall</em> as V<sup>&minus;2</sup> to track an a&#x2080;
            acceleration threshold (forced by the BTFR: r<sub>t</sub> &prop; V&sup2;, M &prop; V&#x2074;,
            so &rho;<sub>t</sub> &prop; a&#x2080;&sup2;/GV&sup2;); the framework asserts
            &rho;<sub>crit</sub> &prop; V<sup>+2</sup> — inverted sign, 240&times;&ndash;300,000&times;
            magnitude error growing with V. This is profile-independent within the family it covers.{' '}
            <strong>Scope corrected 2026-07-27:</strong> an earlier version of this line claimed the
            result holds for <em>any</em> local-&rho; MOND mimic. It does not — see the counterexample
            paragraph below. It holds for local-&rho; schemes that modulate the force{' '}
            <em>algebraically</em> (C(&#x03C1;)&middot;g), which is the class C(&#x03C1;) belongs to.
            Detail on <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The usable lemma is a locality triage:</strong> the discriminating axis for the
            contemporary emergent-gravity wave is the <em>locality of the modification&apos;s state
            variable</em>. Keyed on local &#x03C1;(r) (any &ldquo;coherence/information/entropy
            volumetric-density &rarr; gravity&rdquo; scheme): killed by the above. Keyed on non-local
            variables — Verlinde&apos;s enclosed M<sub>B</sub>(&lt;r), MOG&apos;s enclosed mass,
            MOND&apos;s acceleration or surface-density &Sigma; relations — <em>explicitly escapes</em>.
            This sorts proposals before fitting.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Positioning against the relativistic completions (added 2026-07-03):</strong> the
            non-local escape route this no-go identifies is not hypothetical — it is the one the
            published relativistic MOND completions already take. AeST (Aether-Scalar-Tensor;
            Skordis &amp; Z&#x0142;o&#x015B;nik, PRL 127, 161302 (2021)) reproduces MOND phenomenology
            from non-local field structure <em>and</em> passes CMB and linear-LSS constraints — the
            existence proof that the escape class is viable, modulo ongoing stability/ghost analyses
            of that theory. Read together: the local-density shortcut is quantitatively dead (this
            result); the surviving program is the AeST-class completions (the field&apos;s current
            frontier). A referee evaluating any new &ldquo;density &rarr; gravity&rdquo; proposal can
            use the triage above to decide which side of that line it falls on before fitting anything.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Known escapes from this no-go (added 2026-07-10):</strong> AeST is not the only
            published escape, and the second one is the more instructive because it <em>keeps a local
            density criterion</em>. Superfluid dark matter (Berezhiani &amp; Khoury, PRD 92, 103510
            (2015)) has dark matter Bose-condense in galaxies above a local density/temperature
            threshold — the same core intuition as this framework — but the MOND-like force is mediated
            by the condensate&apos;s <em>phonons</em>, so the force scale enters independently of the
            switching criterion. That separation is exactly what C(&#x03C1;) lacks: it conflates the
            switch and the force into one local function, and that conflation — not the density
            threshold per se — is what the data kill. (Whether the BTFR-forced V<sup>&minus;2</sup>{' '}
            argument constrains the superfluid&apos;s condensation threshold is an open check, queued —
            the expectation is no, because the phonon coupling carries the a&#x2080; scale separately.)
            Escape taxonomy: non-local theory (AeST-class), local-criterion-<em>gated medium</em>{' '}
            (superfluid-DM-class), or <em>differential</em> local-density coupling (symmetron-class,
            added 2026-07-27 — see below); <em>algebraic</em> local-density modulation, the class
            C(&#x03C1;) belongs to, remains excluded. <strong>Attribution withdrawn 2026-07-27:</strong>{' '}
            this paragraph previously stated that &ldquo;the &#x03C1;-vs-g<sub>bar</sub> mismatch is the
            standard reason screened scalars don&apos;t reproduce MOND.&rdquo; That attribution was never
            sourced, and the screening literature does not make it. Hinterbichler &amp; Khoury, PRL 104,
            231301 (2010) do not mention MOND, rotation curves, or dark matter anywhere; Joyce, Jain,
            Khoury &amp; Trodden, Phys. Rep. 568, 1 (2015) mention MOND once, attached to the{' '}
            <em>acceleration</em>-keyed (k-mouflage) screening class as a construction tool — the
            opposite valence; and the published reasons chameleon f(R) fails on SPARC are the
            f<sub>R0</sub> spread and core/cusp degeneracy (Naik, Puchwein, Davis &amp; Arnold, MNRAS
            480, 5211 (2018); MNRAS 489, 771 (2019)), not a variable mismatch.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Counterexample found — the generality claim is withdrawn (2026-07-27):</strong>{' '}
            the screening-literature vein flagged as unwalked on 2026-07-23 has now been walked, and it
            contains not a precedent but a <em>counterexample</em>. Burrage, Copeland &amp; Millington,{' '}
            <em>Radial acceleration relation from symmetron fifth forces</em>, PRD 95, 064050 (2017)
            [erratum PRD 95, 129902, conclusions unaltered] reproduce the RAR for the 153-galaxy SPARC
            sample with no cold dark matter, using a scalar keyed on the <em>local volumetric density</em>{' '}
            &#x03C1;(r), with the Lagrangian parameters (&mu;, M, &lambda;) held universal across the
            sample. The mechanism is the distinction this page was missing: their extra force is the{' '}
            <em>gradient</em> of a function of &#x03C1; — g<sub>sym</sub>(r) = (c&sup2;/2)&thinsp;d/dr
            [(&phi;(r)/M)&sup2;] — not a multiplier on g, and differentiating a density profile is
            exactly what lets a density-keyed field track an acceleration-keyed relation. They obtain a
            closed form in acceleration variables: g<sub>sym</sub> = g<sub>bar</sub>/(exp&thinsp;&radic;
            (g<sub>bar</sub>/g&dagger;) &minus; 1), g&dagger; &asymp; 1.20&times;10<sup>&minus;10</sup>{' '}
            m&thinsp;s<sup>&minus;2</sup>. <strong>Corrected statement:</strong> local volumetric density
            is <em>not</em> excluded as an organizing variable for the RAR; what is excluded is{' '}
            <em>algebraic</em> local-density modulation of the force. Density-keyed schemes do run into
            trouble elsewhere — the symmetron cannot supply the lensing mass without extending the field
            content (Burrage, Copeland, K&auml;ding &amp; Millington, PRD 99, 043539 (2019)), and BCM
            2017&apos;s own caveat is Solar-System tension in the unscreened regime (partly retired by
            O&apos;Hare &amp; Burrage, PRD 98, 064019 (2018)) — but those are <em>different</em>{' '}
            refutations than the one this no-go asserts, so they do not rescue its generality. A no-go
            dies to one existence proof of the thing it forbids.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The live discriminator context — the External Field Effect (added 2026-07-24):</strong>{' '}
            the sharpest currently-contested MOND-vs-&Lambda;CDM discriminator is the claimed detection of
            MOND&apos;s External Field Effect in SPARC (Chae et al. 2020, ApJ 904, 51; 2021 — ~4&sigma;,
            contested: Paranjape &amp; Sheth 2022 show an EFE-like signal is generically expected in &Lambda;CDM;
            Freundlich et al. 2022 find no EFE in Coma-cluster ultra-diffuse galaxies, a different sample). It bears on this no-go from the positive side: the EFE keys on external{' '}
            <em>acceleration</em> — a strictly non-local variable — while the framework&apos;s registered
            ambient-<em>density</em> environment effect, run as registered (2026-07-14), shows no trace
            (r&sup2;&nbsp;=&nbsp;0.0001). If environment enters galaxy dynamics at all, it enters through
            the non-local variable class this no-go predicts must win; if the EFE detection dissolves into
            &Lambda;CDM systematics, environment enters through neither variable and the no-go is untouched.
            No branch rescues a local-density coupling. (Whether Chae&apos;s estimators can in principle
            separate external-acceleration from ambient-density coupling is queued as a research check.)
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The field-equation completion, stated carefully:</strong> the algebraic
            g = g<sub>bar</sub>/C(ρ) has a field-equation completion, &nabla;&middot;[C(ρ)&nabla;Φ] = 4πGρ, which is linear in Φ.
            It conserves momentum only in spherical symmetry or with the variational striction force included. The net
            self-force is &minus;(1/8πG)&int;|&nabla;Φ|²&nabla;C d³x, and striction cancels it exactly. Linearity gives
            superposition, not EFE&nbsp;=&nbsp;0: an external field is refracted wherever &nabla;C &ne; 0, giving a linear EFE of
            order g<sub>ext</sub>&Delta;C/C without striction and a nonlinear one with it. EFE&nbsp;=&nbsp;0 exactly holds for the
            algebraic reading only. Details and the floored/unfloored scope:{' '}
            <Link href="/mond-unification#field-equation" style={{ color: 'var(--color-accent-blue)' }}>MOND Unification</Link>.
            (This paragraph used to say the completion &ldquo;conserves momentum&rdquo; and &ldquo;preserves EFE = 0 exactly&rdquo;;
            both were overstatements.)
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Prior-art audited (2026-07-23):</strong> the Milgrom surface-density and modified-inertia
            corpus (1983 trilogy; astro-ph/0510117 including its worked examples; the
            &Sigma;<sup>&dagger;</sup>/central-surface-density line through Milgrom 2016; Famaey &amp; McGaugh
            2012; Banik &amp; Zhao 2022) and the modern variable-comparison literature (McGaugh 2004; Lelli et
            al. 2017; Stiskalek &amp; Desmond 2023) were searched for a prior quantified instance of local
            volumetric density failing as the organizing variable. <strong>None exists in that corpus</strong>{' '}
            (scope added 2026-07-27 — the original wording said &ldquo;none exists,&rdquo; unqualified, which
            was false: the screening corpus, named as unwalked in this very paragraph, contains a
            counterexample. A prior-art null is bounded by its corpus and must be stated that way):
            every published discrimination <em>in the MOND variable-comparison literature</em> tests
            acceleration against radius, orbital frequency, size, or surface density —
            &#x03C1;(r) was never in any tested variable set (Stiskalek &amp; Desmond&apos;s 2023 feature sweep
            is the nearest miss: three surface densities, no volume density). The argument <em>template</em> of
            the sign statement is Milgrom&apos;s own — length-keyed modifications were excluded in 1983 for
            forcing Tully-Fisher slope 2 instead of 4 (1983b &sect;III; Sanders 1986 for the direction form) —
            and the volumetric-density instantiation quantified here appears to be the first{' '}
            <em>for the algebraic-coupling class</em>. Caveats: Milgrom 1983b was verified through
            secondary witnesses (the archival scan is image-only); the screening-literature vein was
            walked on 2026-07-27 and <strong>overturned the unqualified form of this null</strong> — see
            the counterexample paragraph above; and the <em>triage lemma</em> is prior art independently
            of the quantification — the screening literature has classified modified-gravity mechanisms
            by which derivative of &Phi; keys the modification (&Phi;: chameleon/symmetron/dilaton;
            &nabla;&Phi;, i.e. acceleration: k-mouflage; &nabla;&sup2;&Phi;, i.e. density by Poisson:
            Vainshtein) since Joyce, Jain, Khoury &amp; Trodden, Phys. Rep. 568, 1 (2015), a strictly
            finer split than this page&apos;s two-way local/non-local version, and one that files the
            viable Vainshtein/Galileon class under &ldquo;local density&rdquo; — including the working
            relativistic MOND of Babichev, Deffayet &amp; Esposito-Far&egrave;se, PRD 84, 061502(R) (2011).
          </p>
          <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '0.375rem', padding: '0.75rem', margin: '0.75rem 0', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-accent-blue)' }}>Corollary (2026-08-05) &mdash; the coherence knee
            is unreachable, parameter-free.</strong> If the density &#x03C1; entering C(&#x03C1;) is defined by
            coarse-graining on a scale &#x2113;, that same &#x2113; must smooth &#x03C1;<sub>crit</sub> &#x221D; V&sup2;.
            Doing both, &#x2113; cancels and the argument of the coupling reduces to a <strong>virial ratio</strong>:
            <div style={{ textAlign: 'center', margin: '0.5rem 0', color: 'var(--color-text-primary)' }}>
              x = &#x03C1;/&#x03C1;<sub>crit</sub> = (3/16&#x03C0;&sup2;)&middot;&#x03B2;<sub>J</sub>&sup2;&middot;[V<sub>c</sub>(&#x2113;)/V<sub>flat</sub>]&sup2;
              &#x2272; 0.019&nbsp;&#x03B2;<sub>J</sub>&sup2;
            </div>
            Since V<sub>c</sub> &#x2272; V<sub>flat</sub> for any bound system, x is bounded at ~0.02 in
            <em> every</em> sector at <em>every</em> &#x2113; <em>for the knee keyed on the host&apos;s V<sub>flat</sub> (ρ<sub>crit</sub> = A·V²)</em>
            &mdash; the knee is out of reach by ~40&times; with no
            fitted parameter. Verified on all five plotter disks (max over &#x2113;:
            1.7&times;10<sup>&minus;3</sup>&ndash;1.1&times;10<sup>&minus;2</sup>) and to four digits at Cassini and
            wide-binary scales; kernel-robust (Gaussian coefficient 0.00505, ceiling 3.8&times; lower still).
            <strong> This is the only galaxy-sector result on this site that depends on no estimator choice, no
            velocity definition, and no contested external measurement</strong> &mdash; every other one does.
            Sole escape: &#x03B2;<sub>J</sub> = 4.5 lifts x to 0.385, at 17&#x03C3; from the framework&apos;s own
            calibration &#x03B2;<sub>J</sub> = 1.1 &plusmn; 0.2. Does <em>not</em> add to the refutation count.
            <em>Scope (added 2026-09-16, visitor researcher persona):</em> the bound is about the A·V² knee only. The other knees
            in use on this site are fixed densities and are not bounded by it: the globular-cluster-measured 0.161, the
            solar/cluster joint window 0.0039&ndash;0.078 (γ-dependent), and Refracted Gravity&apos;s fitted knees. A knee keyed on
            the host&apos;s V<sub>flat</sub> is also a global quantity, so this corollary is not an instance of the local-density no-go.
            Derivation: <code>explorer/scripts/coarse_graining_length_universality.py</code>.
          </div>
          <Link href="/honest-assessment" style={{ fontSize: '0.85rem' }}>Full closure documentation in Honest Assessment &rarr;</Link>
        </div>

        {/* Artifact 2 (numbered 3 until 2026-09-14): The dim-4 LIV exclusion — transferable result */}
        <div id="dim4-liv" className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #f59e0b', scrollMarginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>2. Dim-4 radiative LIV exclusion of absolute-time discrete substrates — a citable no-go</h2>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <ValidationBadge status="untested" />
              <ValidationBadge status="audited-negative" />
            </div>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Untested: the time-of-flight face (dim &ge; 5), which is structurally unreachable. Audited-Negative: the
            preferred-frame / dim-4 face, a naturalness gap of 16&ndash;28 OOM with custodial escapes unexhibited.
          </p>

          {/* Citable result framing — what transfers beyond Synchronism */}
          <div style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            marginTop: '0.75rem',
            marginBottom: '0.75rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
          }}>
            <strong style={{ color: '#f59e0b' }}>Transferable result (independent of Synchronism being correct):</strong>{' '}
            Any discrete absolute-time substrate without an added custodial boost-symmetry generates
            dimension-4 Lorentz-violating SME coefficients c<sub>μν</sub>&nbsp;~&nbsp;α/π&nbsp;~&nbsp;10<sup>&#x2212;2</sup>
            at one loop (Collins, Perez, Sudarsky, Urrutia &amp; Vucetich, <em>PRL</em> 93, 191301, 2004 &mdash;
            author list corrected 2026-07-09; previously misattributed to Gambini &amp; Pullin, who are not
            authors on this paper).
            Existing bounds reach 10<sup>&#x2212;18</sup>–10<sup>&#x2212;30</sup> — a 16–28 OOM fine-tuning gap.
            The exclusion applies to any model whose defining commitment is an absolute preferred frame,
            regardless of the other details. A LIV/quantum-foundations referee can cite this as a
            naturalness problem — not a falsification. The distinction matters for the site&apos;s own
            epistemic discipline: &ldquo;refuted&rdquo; is reserved for data contradictions; this is a severe
            fine-tuning gap (matching the electroweak hierarchy problem in kind, if not in degree).
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Every other prediction in this framework either (a) reproduces MOND/ΛCDM/Zurek
            without discriminating content, or (b) faces a decisive constraint. The <strong>one channel that isn&apos;t
            MOND-or-Zurek</strong> is the substrate-discreteness Lorentz-violation signature
            (LIV). Its status has two faces — one that is genuinely unreachable, one that carries
            a severe naturalness gap under existing experiments:
          </p>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Face 1 — Time-of-flight (dim≥5): three locks, genuinely unreachable
          </p>
          <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '1.25rem', lineHeight: 1.7, marginTop: 0 }}>
            <li>
              <strong>Symmetry forbids the refutable channel</strong> <em>(under assumed reflection-symmetric substrate)</em>.{' '}
              The substrate dispersion relation is even in k (lattice reflection symmetry), so the leading
              LIV correction is <em>quadratic</em> (n=2) — no linear (n=1) term. Current GRB time-of-flight
              bounds put n=1 LIV <em>above</em> the Planck scale (LHAASO GRB 221009A 2024:
              E<sub>QG,1</sub> &gt; 5.9 E<sub>Pl</sub>; Fermi-LAT: &gt; 7.6 E<sub>Pl</sub>).
              <em>Note: Lock 1 holds only if the substrate has reflection symmetry. A parity-breaking
              discretization restores the n=1 term — which is already refuted. The choice of
              even-k symmetry is an assumption, not a derivation.</em>
            </li>
            <li>
              <strong>The same symmetry pins the prediction below reach.</strong> n=2 sits at
              E<sub>QG,2</sub> &#x2248; E<sub>Pl</sub>, while the current bound is
              E<sub>QG,2</sub> &gt; 6&times;10<sup>&#x2212;8</sup> E<sub>Pl</sub> (LHAASO 2024)
              — a gap of ~10<sup>7</sup>. Foreseeable GRB instruments gain factors of a few per
              event; closing 10<sup>7</sup> is not a foreseeable-instrument prospect.
            </li>
            <li>
              <strong>Non-uniqueness makes it non-confirming even if reached.</strong> n=2
              discrete-substrate LIV is generic to LQG and causal-set models; a detection would
              read as &ldquo;quantum gravity,&rdquo; not as Synchronism specifically.
            </li>
          </ol>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Face 2 — Preferred frame + dim-4: <strong>CPSU 2004 naturalness gap</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup> at one loop, 16–28 OOM above bounds; custodial escapes unexhibited)
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            A discrete substrate with absolute time picks out a preferred (CMB-rest) frame. Preferred-frame
            physics shows up at <strong>dimension four</strong> — the renormalizable, <em>non-Planck-suppressed</em>
            level — via two channels:
          </p>
          <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
            <li>
              <strong>Species-dependent limiting speed (SME c<sub>μν</sub>).</strong> A dim-4
              operator ω²=m²+(1+c<sub>LIV</sub>)k² is <em>even in k</em> — the even-k symmetry
              does <em>not</em> forbid it. Existing bounds: |c<sub>LIV</sub>| ≲ 10<sup>&#x2212;18</sup>{' '}
              (cavity Michelson–Morley rotating resonators) to ~10<sup>&#x2212;22</sup>–10<sup>&#x2212;29</sup>{' '}
              (Hughes–Drever clock-comparison experiments). These are tabulated annually in the{' '}
              <em>SME Data Tables</em> (Kostelecký &amp; Russell, <em>Rev. Mod. Phys.</em> 83, 11 (2011), updated 2024).
              The framework&apos;s absolute-time / universal-clock commitment gives up boost invariance —
              the minimal custodial protector against radiative generation of this coefficient
              (Collins, Perez, Sudarsky, Urrutia &amp; Vucetich, <em>PRL</em> 93, 191301 (2004)).
              <strong> Verdict: severe naturalness/fine-tuning gap (CPSU 2004).</strong>{' '}
              Computation (2026-06-26 explorer): tree-level c<sub>&#x03BC;&#x03BD;</sub>=0 by single-substrate universality (no species-dependent k² coefficient at tree level). One-loop correction is UV-dominated and Planck-cutoff-independent: c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;&#x03B1;/&#x03C0;&nbsp;~&nbsp;10<sup>&#x2212;2</sup>–10<sup>&#x2212;3</sup>. Existing bounds: ≲10<sup>&#x2212;18</sup> (cavity MM), ≲10<sup>&#x2212;29</sup>–10<sup>&#x2212;30</sup> (nucleon comagnetometer). Fine-tuning gap: <strong>16–28 orders of magnitude</strong>. Two standard perturbative custodial escapes exist in the literature but are unexhibited in this framework: (1) <strong>SUSY</strong> (Groot Nibbelink &amp; Pospelov, <em>PRL</em> 94, 081601, 2005): forbids dim-3/4 LV operators entirely; (2) <strong>Anisotropic scale-hierarchy</strong> (Pospelov &amp; Shang, <em>PRD</em> 85, 105001, 2012): demonstrated for Hořava–Lifshitz gravity (the canonical absolute-time class) — separates the LV-generating scale from the electroweak scale via Λ_HL ≪ M_pl, suppressing SM-sector LV perturbatively without restoring boost invariance. The framework adopts neither: single-substrate universality is itself the obstacle to a Λ_HL ≪ M_pl scale separation. Status: <em>open custodial-mechanism gap, not a closed refutation.</em>
            </li>
            <li>
              <strong>Velocity-anisotropic phase-transition threshold (Phase-16, 2026-06-24).</strong>{' '}
              If identity thresholds are fixed in the substrate/CMB frame, Earth&apos;s motion (v ≈ 370 km/s,
              β ≈ 1.2×10<sup>&#x2212;3</sup>) produces a fractional-frequency anisotropy: dipole ∼β ≈ 1.2×10<sup>&#x2212;3</sup>,
              quadrupole ∼β² ≈ 1.5×10<sup>&#x2212;6</sup>. Cavity-MM and clock-comparison experiments bound
              this at 10<sup>&#x2212;18</sup>–10<sup>&#x2212;22</sup>. The prediction is <strong>11–19 orders of
              magnitude above existing limits</strong>. Escape: co-moving thresholds — survivable but non-novel
              (recovers standard SR with zero new content).
            </li>
          </ul>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.25rem' }}>
            These are two distinct LIV operators: Face 1 (dim≥5 dispersion, time-of-flight) and Face 2 (dim-4 SME c<sub>&#x03BC;&#x03BD;</sub>, preferred-frame). Reading the badges together &mdash; &ldquo;structurally unreachable&rdquo; and &ldquo;naturalness gap&rdquo; &mdash; is not a contradiction. The protected channel cannot discriminate (non-unique, ~10<sup>7</sup> below reach); the preferred-frame channel carries a severe fine-tuning requirement. The framework&apos;s absolute-time commitment is the source of both.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Net:</strong> the time-of-flight face is symmetry-protected and unreachable (three locks stand).
            The preferred-frame / dim-4 face carries a <strong>severe naturalness gap</strong> (c<sub>&#x03BC;&#x03BD;</sub>&nbsp;~&nbsp;10<sup>&#x2212;2</sup>, 16–28 OOM above existing bounds; CPSU 2004) — and it is the framework&apos;s defining commitment (absolute time) that generates it. This is the framework&apos;s only non-MOND, non-Zurek channel. Standard perturbative escapes (SUSY, anisotropic scale-hierarchy) exist in the literature but are unexhibited in the framework; without one, the naturalness gap is unresolved.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Research lineage: PREDICTIONS.md B7 / Phase-12 / Phase-13 / Phase-16 in the{' '}
            <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-blue)' }}>
              Synchronism research archive
            </a>.{' '}
            Dim-4 c<sub>μν</sub> coefficient computed (2026-06-26): radiative value ~10<sup>&#x2212;2</sup>, 16–28 OOM above existing bounds (CPSU 2004 naturalness problem, not a data-driven refutation). For the framework to survive this channel, an unexhibited custodial mechanism must be specified — known candidates are SUSY (Groot Nibbelink &amp; Pospelov 2005) and anisotropic scale-hierarchy (Pospelov &amp; Shang 2012, demonstrated for Hořava–Lifshitz). This is the framework&apos;s most severe naturalness constraint. Corrected framing per 2026-06-30 explorer audit: earlier versions mislabeled this &ldquo;refuted&rdquo; and &ldquo;doubly-obstructed&rdquo; — both overstatements corrected here.
          </p>
        </div>

        {/* Artifact 3 (numbered 4 until 2026-09-14): B1 CHSH check */}
        <div id="chsh" className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)', scrollMarginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>3. CHSH substrate check — Bell&apos;s theorem illustrated, plus two nonlocal construction nulls (Bet B1, executed)</h2>
            <ValidationBadge status="failed" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Failed: S &le; 2 in every no-signaling construction built (executed 2026-06-21 / 2026-07-06). It is counted among
            the 6 as a theorem-level check, not as an executed refutation of the substrate class.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The framework&apos;s substrate ontology was tested against Bell by direct CHSH simulation
            (kuramoto-lattice-suite, research-ledger bet B1), with freely chosen settings and
            measurement only through observer-pattern phase-lock. Results:{' '}
            <strong>local construction S = 1.98; nonlocal-grid construction S &equiv; 2.00 at every
            coupling strength with zero signaling</strong> (a uniform shared phase is gauge-equivalent
            to relabeling the measurement angles — smooth single-grid mediation stays local-realist);
            a global-clock construction reaches S = 2.67 only by also signaling. The 2026-07-06 run
            extends the cap to the framework&apos;s <em>own</em> saturation-gated Intent-density
            substrate (S = 1.85 &le; 2, no signaling). On the local constructions the cap is Bell&apos;s theorem for any
            real-valued local-realist model, not an artifact of the phase substrate.{' '}
            <strong>Scope, matching{' '}
            <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
            (2026-09-11):</strong> the local arm <em>illustrates</em> Bell&apos;s theorem and adds nothing to it. The two
            nonlocal constructions built (the grid, whose setting dependence is a relabeling, and the clock, which exceeds 2
            only by signaling) are <em>construction nulls</em>, facts about those constructions and not about the
            substrate class. Hidden-communication substrates were not built and remain untested. Toner &amp; Bacon (PRL 91,
            187904, 2003) reproduce singlet correlations from local variables plus one hidden bit per trial, with no
            observable signaling. Nothing here is a theorem about nonlocal substrates. The triptych A (real-local) = 2 &lt; B (Born-rule cos&sup2;
            projection) = 2&radic;2 &lt; C (PR-box) = 4 localizes the Tsirelson value as the fixed
            point of the projection law — reachable only by importing Hilbert-space structure wholesale.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            <strong>Honest classification (sharpened 2026-07-18, external researcher review): the number is a
            corollary, the lesson is what transfers.</strong> S &le; 2 was the <em>guaranteed</em> outcome for
            any no-signaling local-realist construction — Bell&apos;s theorem functioning as designed — so the
            simulations are pedagogy plus a registered bet honestly lost, not a new result. What transfers is
            the worked lesson: &ldquo;our substrate is nonlocal by construction, so Bell doesn&apos;t
            apply&rdquo; is a recurring move in emergent-QM proposals, and this is a minimal executed
            counterexample — declaring the substrate nonlocal does not evade Bell, it chooses the nonlocal
            horn, and the construction must then produce a non-relabelable, <em>conditional</em>
            setting-dependence (as Toner&ndash;Bacon&apos;s hidden bit does) or stay at S &le; 2. Cite it for that lesson, not for the number. Full
            construction detail and the open Born-rule problem on{' '}
            <Link href="/two-reframes" style={{ color: 'var(--color-accent-blue)' }}>Two Reframes</Link>.
          </p>
        </div>

        <div style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>Referee-relevant structural gap — C has no
          measurement protocol:</strong>{' '}
          no protocol maps any laboratory or astronomical observable to the coherence value C, in any
          domain (the consciousness kill criterion named EEG phase coherence — a quantity the framework
          says C is <em>not</em>; BCS condensates sit at C &#x2248; 0). Combined with N<sub>corr</sub> being
          asserted rather than counted on all 17 scales, C is <strong>doubly unanchored</strong>: inputs
          asserted, output unmeasurable. This is why several claims are labeled{' '}
          <em>unrunnable as stated</em> rather than untested — a third category beyond
          refuted/untested. The only data contact is galaxy rotation, where C&apos;s parameters are fit
          to the prediction target.
        </div>

        {/* Artifact 4 (numbered 5 until 2026-09-14): density-keyed unidentifiability no-go (promoted 2026-09-06 from Parameter Derivations item 7) */}
        <div id="unidentifiability" className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #8b5cf6', scrollMarginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>4. Density-keyed unidentifiability &mdash; when the knee sits above the sampled density, the interpolant is unmeasurable</h2>
            <ValidationBadge status="audited-negative" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Audited-Negative: executed 2026-09-03; the statement does not depend on the framework.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Statement.</strong> For any algebraic modification of gravity keyed on local density,
            g<sub>obs</sub> = g<sub>bar</sub>/&#x03B5;(&#x03C1;) with a saturating &#x03B5; whose knee &#x03C1;<sub>c</sub> is
            calibrated above galactic midplane densities (here &#x03C1;<sub>crit</sub> &asymp; 10&sup3; M<sub>&#x2609;</sub>/pc&sup3;
            at V = 200 km/s against ~0.1 M<sub>&#x2609;</sub>/pc&sup3; in the solar neighbourhood), rotation-curve data sample
            only x = &#x03C1;/&#x03C1;<sub>c</sub> &#x226A; 1, where &#x03B5; equals its own linearisation to better than
            observational precision. The shape parameter and the knee normalisation then enter only through their
            product: the model has <em>one</em> measurable number, and it is the floor.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Numbers (SPARC, explorer 2026-09-03).</strong> SPARC samples x at a median of ~7&times;10<sup>&minus;5</sup>;
            C = &#x03B3;x holds to 1.8% at worst, 0.22&times; the data&apos;s precision on C. Fisher correlation
            &#x03C1;(ln&#x03B3;, ln A) = +1.000000. Moving &#x03B3; by 40&times; and A by 10&#x2079; changes &#x03C7;&sup2;/N by
            1.07&ndash;2.7&times;; moving the boost floor changes it by 6.35&times;10&#x2074;. The galaxy data measure the
            ceiling and nothing else.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Transferability and the counter-example.</strong> This applies to any &#x03B5;(&#x03C1;) model with a knee
            above ~10<sup>&minus;2</sup> M<sub>&#x2609;</sub>/pc&sup3;. Refracted Gravity (Matsakos &amp; Diaferio 2016;
            Cesare et al. 2020) is the contrast case: its permittivity &#x03B5;(&#x03C1;) is the <em>same family</em> as this
            framework&apos;s C<sub>&#x03A9;</sub> (the floored x/(1+x) form is RG at Q = ½ exactly; the tanh-log compander matches it
            only at γ = Q = ½ with the knee rescaled 2×; qualifier added 2026-09-16) but its knee is fitted <em>inside</em>
            the sampled range, so its shape parameters are identifiable and were measured. Same equation, one identifiable
            and one not, decided entirely by where the knee was placed &mdash; which is the citable point.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <strong>Honest novelty statement:</strong> the identifiability logic is standard (a linearised model cannot
            constrain its nonlinearity); what is new is the executed Fisher analysis on the specific framework and the
            placement of Refracted Gravity as the identifiable member of the same family. A researcher persona
            (2026-09-06) called this &ldquo;a two-page note, not a subsection&rdquo;; it lived under item 7 of{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
            until today. The full Fisher matrix is not yet written up as a standalone artifact &mdash; seeded to the
            explorer track.
          </p>
        </div>

        {/* Artifact 5 (numbered 6 until 2026-09-14): globular-cluster exclusion window */}
        <div id="gc-window" className="card" style={{ marginBottom: '1.5rem', scrollMarginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>5. Globular-cluster exclusion window on the knee of any density-keyed gravity law &mdash; a transferable null in the literature&apos;s own units</h2>
            <ValidationBadge status="audited-negative" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Audited-Negative: executed 2026-09-07 on the Baumgardt &amp; Hilker 2018 catalogue. The bound does not depend on
            the framework.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Citable form:</strong> for any theory of the form g = g<sub>N</sub>/C(ρ) with a floored tanh-in-log-density
            switch (the same family as Refracted Gravity&apos;s permittivity, but <em>identical</em> to it only at γ = Q = ½ with the
            knee rescaled 2×: below the knee the tanh-log form is linear in ρ at every γ, while RG goes as ρ<sup>2Q</sup>),
            <em>evaluated under L2 dynamics (algebraic, or the field equation without striction), on each cluster in isolation, with no smoothing (D ≲ 10 pc), without potential escapers, and on a post-hoc ratio criterion with no σ</em>,
            the outer velocity-dispersion slopes of 42 Galactic globular clusters exclude a knee density
            <strong> ρ<sub>c</sub> ∈ 0.1–300 M<sub>☉</sub>/pc³ (6.8×10⁻²⁴ – 2×10⁻²⁰ g/cm³)</strong> at a switch sharpness
            γ = 0.489 (Hill index 2γ ≈ 1 in (1+ρ/ρ<sub>c</sub>), not in ρ/ρ<sub>c</sub>), narrowing to 0.5–100 M<sub>☉</sub>/pc³ at γ = 2. &ldquo;Excluded&rdquo; = slope mismatch
            more than twice that of MOND with the external field effect, which these data admit (−0.093 vs Newtonian −0.057). <strong>Under L3 (striction included) this band does not hold:</strong> it becomes 0.031–0.196 M<sub>☉</sub>/pc³ at γ = 0.489, with no passing knee, and the outer shells stop being bound (caveat iii below).
            <strong>Refracted Gravity is not excluded:</strong> its published ρ<sub>c</sub> = 10⁻²⁴·²⁵ g/cm³ = 0.0083
            M<sub>☉</sub>/pc³ lies below the excluded window, and every value in that set&apos;s 1σ range
            (0.0052–0.0158 M<sub>☉</sub>/pc³) scores within MOND+EFE&apos;s mismatch on the same statistic. <em>Provenance
            (corrected 2026-09-16, explorer 2026-09-15):</em> 0.0083 (with ε₀ = 0.089, Q = 0.47) is RG&apos;s <strong>elliptical-galaxy
            (E0) calibration</strong>, Cesare et al. 2022 (arXiv:2102.12499), not the disc one. RG&apos;s DiskMass disc calibrations
            are ρ<sub>c</sub> = 7.4×10⁻⁴ (mean; ε₀ = 0.56, Q = 0.92) and 4.3×10⁻³ M<sub>☉</sub>/pc³ (joint fit; ε₀ = 0.661, Q = 1.79).
            Both also sit below the excluded window, so no verdict changes.
            <em> Two open caveats on the window itself (added 2026-09-16):</em> (i) the clusters were treated as isolated. Under the
            field equation ∇·[C∇Φ] = 4πGρ a cluster whose knee lies inside it refracts the Milky Way&apos;s field, a term these rows do
            not contain (see the next paragraph); (ii) the window assumes density is read pointwise or smoothed over ≲ 10 pc, and
            at that smoothing the same equation makes halo clusters orbit at ~0.6 of the field acceleration felt by diffuse tracers,
            which Milky Way cluster and star kinematics disfavour at ~2σ (post-hoc).
            <strong> (iii) The window is an L2 object.</strong> Under the action, with striction included (L3), the knee shell is 1.7&ndash;13&times; gravity
            in striction with net outward force. 18 of 27 verdicts on the γ&nbsp;=&nbsp;0.489 row change, the excluded band becomes 0.031&ndash;0.196&nbsp;M<sub>☉</sub>/pc³,
            no knee passes, and with Plummer tails up to 39 of 42 clusters have outward net gravity (explorer, 2026-09-16).
            <strong> (iv) Potential escapers</strong> (energetically unbound stars inside r<sub>t</sub>; Küpper et al. 2010; Claydon, Gieles &amp; Zocchi 2017)
            are the known Newtonian flattening of outer σ(r). They are not in the mock. <strong>(v) Not prospective:</strong> Session 611 registered
            γ only, and the knee, floor and dynamics were chosen after, and they span pass to excluded. The criterion is a post-hoc ratio with
            no σ. Cite it as an L2 window, not as an exclusion.
            This sits beside the B<sub>max</sub> ≲ 14 bound from SPARC dwarfs as the second class-level constraint this
            program has produced.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>Why globular clusters, and why the EFE is the discriminating variable:</strong> read algebraically
            (g = g<sub>N</sub>/C(ρ), exact for an isolated spherical cluster), a density-keyed law has no external field to appeal
            to. <em>Scope (added 2026-09-16):</em> under the field equation that is no longer true. The law is linear in Φ, so the
            Galactic field enters by superposition, refracted by the cluster&apos;s own C profile: a linear external-field
            dependence, not MOND&apos;s nonlinear one. Its size inside real clusters has not been computed on this data (the
            maintainer&apos;s order-of-magnitude check is in <code>maintainer/scripts/gc_external_field_refraction_estimate.py</code>). MOND with its EFE switched off scores −0.245 on the same statistic, statistically
            indistinguishable from the density law; MOND survives these clusters <em>because of</em> the EFE and for no other
            reason. So the clusters separate density-keyed from acceleration-keyed gravity on the profile <em>shape</em> even
            where the two predicted boost amplitudes are collinear (Pearson r = +0.87 across the population, because
            outer-halo clusters are also the diffuse ones). Prior-art screen: Cesare et al. 2022 used globular clusters as
            tracers of elliptical-galaxy potentials, not as self-gravitating systems crossing the knee. Honest scope: the ± is
            statistical only; defend the ratio to the Newtonian residual (3.7–4.4×), not a sigma.{' '}
            <strong>Tides and the contested clusters:</strong> dispersion bins beyond 0.98 of the catalogue tidal radius were
            cut, and constant anisotropy was scanned (β from −0.6 to +0.8). Tidal heating and unbound extra-tidal stars inside
            r<sub>t</sub> were <em>not</em> modelled. The ≥ 10-bin cut leaves 42 clusters at R<sub>GC</sub> ≤ 22 kpc. That
            removes the remote, isolated clusters where MOND is actually contested: NGC 2419 (Ibata et al. 2011; Sanders
            2012), Pal 14 and Pal 4, with 1–3 dispersion bins each in the catalogue. The window rests on inner-halo clusters.{' '}
            <strong>What this bound does not do (scope correction 2026-09-09):</strong> it does not combine with the
            solar-neighbourhood (Oort-limit) constraint into a joint no-go. Evaluated <em>at the same γ</em> &mdash; the
            step this program got wrong twice &mdash; the two windows overlap everywhere from γ = 0.3 to 3: the clusters
            call the bottom of the solar window <em>ok</em> and its top <em>marginal</em>, leaving a joint window at
            ρ<sub>c</sub> ∈ 0.0039–0.0079 M<sub>☉</sub>/pc³ (γ = 0.489) and 0.0735–0.078 (γ = 2), sliding as
            e<sup>1/γ</sup> between them. A briefly-published claim that the two are disjoint was a γ mismatch and is
            withdrawn. <strong>Quote this window with its γ attached; it is meaningless without one.</strong> Full result,
            robustness table and the γ fork it opens for this framework specifically:{' '}
            <Link href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
          </p>
        </div>

        {/* Secondary: DESI mechanism-class */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Secondary: the DESI growth-suppression negative (mechanism-class)</h2>
            <ValidationBadge status="failed" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Failed: disfavoured at 2.4&sigma; on &sigma;&#x2088;, but only ~1.5&sigma; on the registered f&sigma;&#x2088;
            statistic. The prediction was post-hoc, and the test was underpowered to discriminate. It is the Session 107
            mechanism, not the current dark-energy sector (see below).
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            TEST-04a predicted &#x03C3;&#x2088;&nbsp;&#x2248;&nbsp;0.76 (calibrated to the then-live S8 lensing tension);
            DESI DR1 full-shape combined &#x03C3;&#x2088;&nbsp;=&nbsp;0.841&plusmn;0.034 (Table 10) &mdash; a
            <strong> 2.4&#x03C3;</strong> amplitude tension on &#x03C3;&#x2088;. <strong>Correction (2026-07-14):
            the criterion was registered on a different statistic, fσ₈(z=0.51) &gt; 0.46 for &gt;3&#x03C3;.</strong>{' '}
            On that statistic directly &mdash; LRG1 fσ₈&nbsp;=&nbsp;0.474&nbsp;&times;&nbsp;1.16&plusmn;0.062&nbsp;=
            &nbsp;0.550&plusmn;0.062 &mdash; the threshold is exceeded by only <strong>~1.5&#x03C3;</strong>, short
            of the registered &gt;3&#x03C3; bar. &#x03C3;&#x2088; is inferred assuming GR growth kernels, so using
            it to falsify a modified-growth model risks circularity. DESI&apos;s own purpose-built
            modified-gravity analysis, Ishak et al. arXiv:2411.12026 (JCAP 09 (2025) 053, previously uncited
            here), gives &#x3bc;&#x2080;&nbsp;=&nbsp;0.11 (+0.45/&minus;0.54) from DESI alone &mdash; a 12%
            fσ₈ suppression maps to a &#x3bc;&#x2080; inside that 1&#x03C3; band. Honest reading: <strong>the test
            as registered lacked the power to discriminate this framework from GR</strong> &mdash; the
            &#x03C3;&#x2088; comparison is real but is not the registered kill. A single bin
            (LRG1, z=0.51) also shows fσ₈ growth above fiducial (ratio 1.16&plusmn;0.13, ~1.2&#x03C3;), and the
            DESI DR1 full-shape RSD <em>ensemble</em> growth index &#x03B3;<sub>growth</sub>&nbsp;&#x2248;&nbsp;0.58,
            above GR&apos;s 0.545, leans mildly toward suppression &mdash; the predicted direction. Caveats:
            the prediction was <strong>post-hoc</strong> (&#x03C3;&#x2088; calibrated to the S8 lensing tension,
            which has since receded), the &#x3bc;&#x2080; projection above has not been formally run (seeded as
            an explorer topic), and the verdict is frozen at DR1. <strong>Provenance:</strong> the 0.418 came from Session
            107&apos;s G<sub>local</sub>/G<sub>global</sub> mechanism, not from the framework&apos;s current dark-energy sector.
            That sector is background-only, and its one derived perturbation channel shifts f&sigma;&#x2088; by about
            &minus;0.22% (see <Link href="/dark-energy" style={{ color: 'var(--color-accent-blue)' }}>Dark Energy</Link>). So
            this negative applies to that mechanism class, not to the current sector. What transfers: any framework whose
            mechanism damps late-time structure growth to match a receded S8 tension sits in the same
            disfavored-on-&#x03C3;&#x2088; box, though this specific DESI test does not discriminate it from GR.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
            Currency: verdict anchored to DESI DR1 (arXiv:2411.12021) as of 2026-07-02.
            DESI DR2 full-shape parameter <em>papers</em> are not yet published (expected ~Spring 2027) &mdash;
            note this is now a narrower claim than &ldquo;no DR2 full-shape results exist&rdquo;: preliminary
            DR2 full-shape results were presented publicly in April 2026 (&ldquo;Cosmology with DESI DR2: From
            BAO to Full-Shape Clustering,&rdquo; PIRSA:26040071) and DR2 Ly&#x03B1; full-shape validation posted
            late July 2026 (arXiv:2607.27411). <strong>Integrity note (2026-08-01):</strong> this repository&apos;s
            git history shows the fσ₈(z≈0.5) ≤ 0.46 threshold was committed <strong>2026-07-01, after</strong>{' '}
            the April PIRSA talk &mdash; so this criterion cannot be verified as pre-registered relative to that
            preliminary presentation, only relative to the still-unpublished formal DR2 full-shape paper. If DR2
            full-shape reports fσ₈(z≈0.5) ≤ 0.46, the verdict unfreezes for re-adjudication; any DR2 value above
            DR1&apos;s would deepen the disfavor, not relieve it. Whoever re-adjudicates this should check first
            whether a threshold-relevant fσ₈(z≈0.5) figure was already circulating by 2026-07-01 &mdash; if so,
            this criterion has the same post-hoc exposure already documented above for the σ₈ comparison.
          </p>
          <Link href="/tier-1-existing" style={{ fontSize: '0.85rem' }}>TEST-04a full accounting &rarr;</Link>
        </div>

        {/* Open question: A2ACW (was numbered artifact 2 until 2026-09-14; moved out of the citable list) */}
        <h2 id="a2acw-open-question" style={{ fontSize: '1.2rem', marginTop: '2rem', scrollMarginTop: '5rem' }}>Open question (not citable as a null)</h2>
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid #38bdf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Does adversarial LLM audit mistake real novelty for prior art? The A2ACW instrument question</h2>
            <ValidationBadge status="untested" />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '0.35rem 0 0' }}>
            Untested: the experiment that would decide it has not been run. The one control benchmark that exists (3
            reparametrizations, 6 discoveries) is retrospective and in-distribution, and a single model that knew every answer scored it.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            <strong>Honest novelty statement:</strong> the protocol is assembled prior art (AI Safety via Debate, Irving,
            Christiano &amp; Amodei 2018; role structure from CAMEL/MetaGPT). What would be new is a measured answer to the
            question in the heading.
          </p>
          <div style={{ background: 'rgba(56, 189, 248, 0.07)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '0.375rem', padding: '0.8rem 1rem', fontSize: '0.87rem', color: 'var(--color-text-secondary)', margin: '0.75rem 0' }}>
            <strong style={{ color: '#38bdf8' }}>Current state (2026-09-15)</strong>
            <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
              <li>
                <strong>Control status.</strong> In-distribution canonical arm run 2026-05-22 (6/6 genuine discoveries
                false-flagged under the literal rule, scored by one LLM that knew every answer); out-of-distribution,
                post-cutoff, citation-stripped arm never run.
              </li>
              <li>
                <strong>Program-level count.</strong> 3,308 sessions &rarr; ~47 internally consistent candidates. Across all
                audited claims the count is <strong>0 of 9</strong>: the 6 former &ldquo;Validated&rdquo; badges plus the top 3
                of the ~47, swept 2026-07-03. The rest are ~47 candidates not yet individually audited, an open count rather than
                an outcome. The adversarial loop itself passed all six badges; the demotions came from the later audit. With 0 of 9
                the true survival rate can be as high as 0.34 (Clopper&ndash;Pearson, two-sided 95%; 0.46 on the six alone).
              </li>
              <li>
                <strong>Who audited.</strong> LLM agents, not an external human domain expert: the archive&apos;s autonomous AI
                research sessions (e.g. Session #581) and this site&apos;s AI explorer and maintainer tracks, often acting on
                AI visitor-persona reports, with a human (dp) overseeing the badge taxonomy. No record of an outside physicist
                reviewing these claims exists in the archive or site logs. So the 0-of-9 line is{' '}
                <strong>instrument-uncalibrated</strong>: it comes from the same instrument class this open question is about. The
                executed physics refutations on the scoreboard do not depend on it.
              </li>
              <li>
                <strong>The designed control benchmark (2026-05-22), one convention: the positive class is &ldquo;the claim is a
                reparametrization.&rdquo;</strong>{' '}
                Positive arm: 3 reparametrizations from outside the audited claims (Eddington&apos;s &alpha;&#x207B;&sup1; = 137,
                tired light, and a Tully&ndash;Fisher &ldquo;derivation&rdquo; that assumes MOND; the record notes the last is
                in-class with this framework&apos;s own claim, so only two are truly external). Negative arm: 6 canonical discoveries
                (Dirac 1928, Bell 1964, BCS 1957, Higgs 1964, Hawking 1974, Noether 1918). <em>Literal rule</em> (flag if canonical
                prior art is named within one round): TP = 3, FN = 0, FP = 6, TN = 0, so sensitivity 3/3, specificity 0/6,
                Youden&apos;s J = 0. The per-arm Clopper&ndash;Pearson bounds (sensitivity &ge; 0.29, specificity &le; 0.46) put
                J between &minus;0.71 and +0.46. <em>Steelmanned rule</em> (flag if the claim reduces to prior art with nothing
                added): TP = 3, FP = 0, TN = 6, J = 1.0 (lower bound &minus;0.17), but there the scorer&apos;s own novelty judgment
                does all the discriminating, and that judgment is the step in question. Both rules were applied to both arms by the
                same model. The framework&apos;s six demoted claims are <em>not</em> a positive arm. Their ground truth came from
                the audit class under evaluation, so a sensitivity computed on them would be circular.
              </li>
              <li>
                <strong>Temporal asymmetry, 0/6.</strong> This is neither a control arm nor a run. It was a desk counterfactual:
                would a challenger with a training cutoff five years later have caught the six demotions? No, because their prior
                art (median ~1996) predates any plausible cutoff. It measures a proposed design. The three-axis protocol&apos;s
                6/6 on the same six claims measures a different instrument (and has no independent ground truth), so the two
                numbers do not conflict.
              </li>
              <li>
                <strong>Why the canonical arm is not a clean known-good control.</strong> It is the right <em>kind</em> of arm, but
                it cannot separate the two hypotheses below. (i) The six were chosen <em>because</em> their modern restatements
                trigger prior art for their ingredients, so 0/6 was designed in. (ii) They sit in every training corpus together
                with their antecedents (contamination). (iii) The &ldquo;blinding&rdquo; only omitted each result&apos;s name. The
                restatements were written and scored by the same model that knew each answer. Nobody independent stripped the
                citations, and nothing was scored blind.
              </li>
              <li>
                <strong>The open question.</strong> <strong>H1</strong>: the framework contained nothing novel.{' '}
                <strong>H2</strong>: an LLM rewarded for finding prior art maps almost anything onto its corpus, real discoveries
                included. Nothing measured so far separates them, and under H2 the result is the more interesting one. Separating
                them needs a known-good arm the models cannot have memorised, scored blind. The cross-vendor control as registered
                (the six demoted claims) tests corpus monoculture, not H1 vs H2.
              </li>
              <li>
                <strong>Power, before anyone runs it.</strong> Take the lower 95% Clopper&ndash;Pearson bound on each arm (two-sided)
                and combine them: J &ge; sens<sub>lo</sub> + spec<sub>lo</sub> &minus; 1. A perfect 6/6 on both arms gives
                J &ge; 0.08. Scoring 16/20 on both (80%/80%) gives J &ge; 0.13, and 12/15 on both gives J &ge; 0.04. At 80%/80%,
                J &ge; 0.3 takes about 41 per arm. With joint (Bonferroni) coverage, the first two bounds fall to &minus;0.04 and
                0.06. Register n and the decision rule first.
              </li>
            </ul>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.82rem' }}>
              Sources: <code>Research/proposals/a2acw_specificity_null_baseline.md</code>,{' '}
              <code>a2acw_contemporaneous_controls_specificity_20260905.md</code>,{' '}
              <code>a2acw_specificity_measures_framework_reuse.md</code>,{' '}
              <code>test02_amplitude_is_knee_conditional_and_a2acw_positive_control_20260910.md</code>; explorer findings{' '}
              <code>a2acw-detector-false-positive-rate-null-baseline.md</code> and{' '}
              <code>a2acw-temporal-asymmetry-counterfactual-audit.md</code>.
            </p>
          </div>
          <details style={{ margin: '0.75rem 0' }}>
            <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.88rem' }}>
              Revision history, 2026-07-09 to 2026-09-10 (verbatim; the current-state box above supersedes it where they differ)
            </summary>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '0.6rem' }}>
              <strong>Superseded on 2026-09-15:</strong> the 09-14 box&apos;s detector bullet, which took the 6 demoted claims
              as the positive arm (&ldquo;flagged 6/6 by the combined three-axis protocol, sensitivity 1.0&rdquo;) and quoted
              J = 0 with CI [&minus;0.46, +0.46]. That used the audited set as its own ground truth, and it scored the two arms
              under different rules. The box now reports the benchmark as designed (3 external reparametrizations, 6
              discoveries, one rule at a time). The same applies to the 07-14 &ldquo;combined sensitivity 6/6 = 1.0&rdquo;
              paragraph below. Also superseded: &ldquo;6 given external audit&rdquo; and &ldquo;0 of 6 audited (0 of 47 pending
              audit)&rdquo;. The canonical count is 0 of 9, and the audit was by LLM agents, not an external domain expert.
              Where the history says the positive control &ldquo;has never been run,&rdquo; read the control-status line in the
              box.{' '}
              <strong>Superseded on 2026-09-14:</strong> precision (2), which said 6/6 is &ldquo;better described as a false
              discovery rate&rdquo; because the design has no true negatives. The canonical arm <em>is</em> the negative class, so
              the false-positive rate is well-defined. A false discovery rate, FP/(FP+TP), depends on arm sizes chosen by design:
              6/9 within the 2026-05-22 benchmark, 6/12 if the six demotions are pooled. The 08-10 correction, on two counts: its
              &ldquo;every known positive&rdquo; inverts the 07-27 convention, and its &ldquo;temporal-asymmetry arm&rdquo; was a
              desk counterfactual, not a control arm. The 07-18 &ldquo;the one registered experiment that would break the
              single-arm degeneracy&rdquo;, because cross-vendor addresses corpus monoculture, not H1 vs H2. The 09-10 &ldquo;the
              positive control has never been run&rdquo;, because the known-good arm exists (the canonical six) but cannot
              separate H1 from H2. Page heading until 2026-09-14: &ldquo;2. The A2ACW detector is <em>underpowered</em>
              (Youden&apos;s J = 0, CI [&minus;0.46, +0.46], n = 6) &mdash; an open question, not a citable null,&rdquo; badge
              &ldquo;Untested &mdash; Underpowered &mdash; No Positive Control Run.&rdquo;
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
              <strong>Honest novelty statement:</strong> the protocol is assembled prior art — adversarial
              pairs from AI Safety via Debate (Irving, Christiano &amp; Amodei 2018), role structure from
              CAMEL/MetaGPT, failure modes from the multi-agent-systems literature. The citable artifact
              is the <strong>program-level null result with retrospective controls</strong> (N=6 audits,
              not preregistered held-out experiments; one corpus, one framework): <strong>3,308 sessions
              produced ~47 internally-consistent candidate claims (1.4% survival rate); 9 claims were audited
              (by LLM agents, not an outside domain expert), and 0 survived</strong>. The honest denominator is <strong>0 of 9
              audited</strong> &mdash; not &ldquo;0 across 3,308 sessions,&rdquo; which
              would overstate the number of adjudicated trials by two orders of magnitude (corrected 2026-07-09
              after two visitor personas independently flagged the site quoting this null at three different,
              mutually inconsistent denominators). Both error rates on the 6 are measured — temporal-asymmetry
              control 0/6 (later-demoted claims caught; median prior-art year ~1996), vocabulary-asymmetry 4/4 on
              the prior-art-rediscovery subclass, and <strong>specificity 0/6</strong> (every held-out genuine
              discovery false-flagged — a measured false-positive rate of 6/6 = 1.0 on the control set — see{' '}
              <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>).
              Discrimination lives entirely in unautomated human novelty judgment.
            </p>
            <div style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.35)', borderRadius: '0.375rem', padding: '0.75rem 1rem', margin: '0.75rem 0', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: '#fbbf24' }}>Demoted from &ldquo;citable null&rdquo; to open question, 2026-09-10 &mdash;
              and the reason is that the positive control has never been run.</strong>{' '}
              A researcher persona made the point that this page was already making about itself and then not acting on:
              <strong> you cannot cite a finding from a statistic this same page certifies as carrying no information.</strong>{' '}
              Concretely, there is a <em>negative</em> control here (can the protocol catch known demotions? 6/6 &mdash; yes)
              and <strong>no positive control</strong>: nobody has fed the protocol a verified discovery published
              <em> after</em> the models&apos; training cutoff, citation-stripped, and measured the demotion rate on
              known-good physics. Without it, two hypotheses are observationally identical here:
              <br />&bull; <strong>H1</strong> &mdash; the framework genuinely produced nothing novel (the reading this
              site has been publishing);
              <br />&bull; <strong>H2</strong> &mdash; an LLM challenger rewarded for finding prior art maps almost
              anything onto a corpus, <em>including real discoveries</em>, in which case the 1.4% survival rate is a
              property of the protocol and says nothing whatever about Synchronism.
              <br />A 100% demotion rate is exactly as suspicious as a 100% confirmation rate. And note which way this
              cuts: <strong>under H2 the result is more interesting, not less</strong> &mdash; a measured
              prior-art-illusion rate for adversarial LLM audit would be a finding about AI-assisted research
              methodology, independent of whether any physics here holds, and it is plausibly the last genuinely novel
              result this project can produce. The badge above is changed from <em>audited-negative / Registered Null</em>
              to <em>untested / Underpowered</em> because the honest state is &ldquo;we do not know what this protocol
              measures,&rdquo; not &ldquo;we measured a null.&rdquo; The cross-vendor control that was listed as pending
              does not address this; a positive control does. Routed to dp in{' '}
              <code>Research/proposals/test02_amplitude_is_knee_conditional_and_a2acw_positive_control_20260910.md</code>{' '}
              with a concrete protocol seeded for the explorer track.
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Put the two rates together and the detector is uninformative:</strong> combined
              sensitivity (true-positive rate) is 6/6 = 1.0 (self-simulated upper bound, see above);
              specificity is 0/6, i.e. the false-positive rate is also 6/6 = 1.0. Youden&apos;s
              J = TPR − FPR = 1.0 − 1.0 = <strong>0</strong> (AUC ≈ 0.5). A classifier that
              flags every demoted claim <em>and</em> every genuine discovery carries zero
              discriminating information — both numbers were already published on this site, on
              two different pages, and had never been combined until a 2026-07-14 visitor pass did the
              subtraction. The 6/6 catch rate is not the methodology&apos;s best result; multiplied
              against its own specificity, it is the demonstration that the detector cannot tell a
              demotion from a discovery.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Three precisions on the above (added 2026-07-27, from an external-reviewer pass).</strong>{' '}
              (1) <em>The positive class is &ldquo;is a reparametrization.&rdquo;</em> Under the opposite
              convention the sensitivity and specificity labels invert; both are defensible, and J = 0
              either way, but the convention was never stated and two expert readers have now read the
              numbers as swapped. (2) <em>6/6 = 1.0 is better described as a false <strong>discovery</strong>
              rate</em> — a true false-positive rate needs a true-negative count this positive-only design
              does not have, and J = 0 here is a degeneracy of the design rather than a measurement.
              (3) <em>The program-level null is itself underpowered and now says so.</em> On n = 6 with 0
              survivors, the Clopper&ndash;Pearson bound admits a true novelty-survival rate up to ~0.39
              (one-sided) or ~0.46 (two-sided). The site badges its galaxy tests
              &ldquo;underpowered as registered&rdquo; unflinchingly; holding the methodology verdict —
              the sector nominated as the real contribution — to a lower evidentiary standard than the
              physics was the asymmetry worth fixing. (4) <em>J = 0 is a point estimate on n = 6 and n = 6,
              and should be quoted with its interval</em> (added 2026-08-08, from a visitor researcher pass
              applying precision (3) to the detector itself). Clopper&ndash;Pearson at 95% gives sensitivity
              &#8805; 0.541 and specificity &#8804; 0.459, hence <strong>J &#8712; [&minus;0.46, +0.46]</strong> —
              an interval running from anti-informative to moderately informative. The point estimate is the right
              sign and the design degeneracy in (2) is the deeper problem, but quoting <em>J = 0</em> bare on the
              page labelled &ldquo;what&apos;s citable&rdquo; is the same sin this site correctly flags on{' '}
              <Link href="/consciousness-demo" style={{ color: 'var(--color-accent-blue)' }}>the consciousness
              demo</Link>.</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Measured, not asserted: adversarial same-corpus AI pairs filter for internal consistency
              but cannot substitute for out-of-distribution evaluation. Relevant to anyone building
              AI-for-science generation pipelines on shared training corpora.
            </p>
            <div style={{ background: 'rgba(56, 189, 248, 0.07)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '0.375rem', padding: '0.8rem 1rem', fontSize: '0.87rem', color: 'var(--color-text-secondary)', margin: '0.75rem 0' }}>
              <strong style={{ color: '#38bdf8' }}>Correction 2026-08-10 — the confound below is CLOSED, by
              this program&apos;s own controls, and closing it cuts <em>for</em> the framework.</strong>{' '}
              The paragraph that follows calls the degeneracy unresolved pending a cross-vendor control arm.
              But two control arms have already run and both returned null: the{' '}
              <strong>canonical-discoveries arm</strong> false-flagged <strong>6 of 6</strong> genuine
              discoveries as reparametrizations (specificity 0/6), and the{' '}
              <strong>temporal-asymmetry arm</strong> (paired training cutoffs) caught{' '}
              <strong>0 of 6</strong> demotions. An instrument that misclassifies every known positive is
              not weakly informative about the seed framework &mdash; it is <em>uninformative by
              construction</em>. Therefore: <strong>&ldquo;47 contributions, 0 survivors&rdquo; and any
              &ldquo;0 confirmed predictions&rdquo; that rests on A2ACW audit rather than on external data
              are instrument-limited, and carry no information about whether the seed framework contains
              novelty.</strong> This does not touch the physics ledger that stands on external data &mdash;
              the boost ceiling and the γ=2 pin are unaffected and stand. It does mean the headline null has
              been quoted with more authority than the device that produced it can support. Note also that
              the sensitivity arm has no independent gold standard: the claim that the framework&apos;s own
              claims genuinely <em>are</em> reparametrizations comes from the same audit process under
              evaluation, so &ldquo;sensitivity = 1.0&rdquo; is circular and only the 0/6 specificity arm has
              ground truth. Both arms are n = 6 &mdash; Wilson 95% CIs are roughly [0.61, 1.00] and
              [0.00, 0.39], so <strong>J = 0 should not be quoted without an interval</strong>, and the 1.4%
              session yield divides by 3,308 context-chained sessions whose effective N is unknown and
              certainly not thousands. (Flagged by visitor Pass 4, 2026-08-10; it is the rare audit finding
              that points toward the framework rather than against it, which is why it went unnoticed.)
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>No control arm; a confound the null doesn&apos;t resolve
              <em> (superseded by the correction above — retained for the record)</em>:</strong> the corpus audited
              is Synchronism itself, which this site independently concludes is a MOND reparametrization.
              &ldquo;Adversarial same-corpus AI pairs cannot generate out-of-distribution novelty&rdquo; and
              &ldquo;this particular seed framework contained none to find&rdquo; are observationally
              degenerate in a single-arm, single-corpus design — there is no measured human-pair survival
              rate on the same corpus to compare against. The generalization to AI-for-science pipelines
              generally is a hypothesis this design cannot license on its own.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <strong>Artifact status downgraded (2026-07-18, external researcher review):</strong> until the
              cross-vendor corpus control runs — the one registered experiment that would break the
              single-arm degeneracy above — this is a <em>registered null with a stated path to becoming a
              citable artifact</em>, not yet the artifact. What is citable today is the measured
              retrospective-control numbers (0/6, J = 0) and the confound analysis itself; the
              program-level generalization gates on the unrun control arm.
            </p>
          </details>
          <Link href="/a2acw" style={{ fontSize: '0.85rem' }}>Protocol, prior art, and audit details &rarr;</Link>
        </div>

        <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '0.375rem', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f59e0b' }}>What is deliberately not on this page:</strong>{' '}
          the framework&apos;s positive claims (all reparametrizations, failures, or unrunnable as
          stated — see <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>),
          and the &ldquo;47 research contributions&rdquo; (top 3 swept 0/3 novel; the archive&apos;s later sessions report the
          remainder demoted in-archive, not yet individually audited here; the count itself a flagged ~57% overcount; see the
          Research Outputs audit on Honest Assessment).
        </div>
      </section>

      <RelatedConcepts currentPath="/for-researchers" />
    </>
  );
}
