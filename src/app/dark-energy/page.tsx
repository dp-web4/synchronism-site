'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function DarkEnergy() {
  return (
    <>
      <Breadcrumbs currentPath="/dark-energy" />
      <h1>Dark Energy &amp; DESI</h1>
      <ValidationBadge status="reparametrization" label="ΛCDM where it fits (direct DESI DR2 fit 2026-08-12: γ = 0.487, Δχ² = −0.3); covariant completions fail the fit — proposed TEST-26 is a consistency check at DESI DR3, not a discriminator" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          <strong>The question:</strong> the DESI survey (2024&ndash;25) reported hints that dark energy
          may be <em>weakening</em> over cosmic time &mdash; the dominant live anomaly in cosmology. Does
          the coherence framework say anything about it?
        </p>
        <p>
          <strong>The answer, in one sentence:</strong> the framework has a dark-energy sector &mdash;
          derived in December 2025, arithmetically corrected in August 2026 &mdash; and{' '}
          <strong>every consistent version of it misses the specific behaviour DESI prefers</strong>,
          which makes this the framework&apos;s one live falsifiable position: a bet that can be killed
          or tied at DESI DR3, but never won. This page shows the construction, what it predicts, how
          the covariant check sharpened the verdict, and exactly what evidence would change it.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          (This URL returned 404 until 2026-08-12, while the sector lived in prose inside the{' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>{' '}
          &mdash; two expert visitor passes independently hit the gap. The fragmentation was the friction;
          this page is the fix.)
        </p>
      </section>

      <section className="section content-width">
        <h2>The construction (Session 100, 2025-12-08)</h2>
        <p>
          Substitute G<sub>eff</sub>&nbsp;=&nbsp;G/C(&rho;&#772;) into the Friedmann equation:
        </p>
        <div className="equation-block" style={{ fontFamily: 'monospace', fontSize: '1.05rem', padding: '0.75rem 1rem', background: 'rgba(139,92,246,0.07)', borderRadius: '0.375rem', margin: '0.75rem 0' }}>
          H&sup2; = 8&pi;G&rho;<sub>m</sub> / (3C) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &rho;<sub>DE</sub> &equiv; &rho;<sub>m</sub>(1&minus;C)/C
        </div>
        <p>
          Everything the coherence function C fails to &ldquo;pass through&rdquo; is read as an effective
          dark-energy density. The calibration C&#x2080;&nbsp;=&nbsp;&Omega;<sub>m</sub> is <em>forced</em>{' '}
          (it is the definition of &Omega;<sub>m</sub>, not a fit &mdash; which is also why the archive&apos;s
          &ldquo;derived &Omega;<sub>&Lambda;</sub>&nbsp;=&nbsp;1&minus;&Omega;<sub>m</sub>&rdquo; is an identity,
          not a prediction), leaving <strong>&gamma; as the single parameter</strong>. Note the honest caveat
          carried from the galaxy sector: &rho;<sub>crit</sub> is calibrated per sector (A&middot;V&sup2;<sub>flat</sub>{' '}
          galactically; C&#x2080;&nbsp;=&nbsp;&Omega;<sub>m</sub> cosmologically), and the two calibrations are
          unanchored against each other by ~10&sup1;&#x2070; &mdash; the &ldquo;one equation&rdquo; carries
          sector-dependent constants, stated here where the sector is introduced.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Arithmetic provenance: the archive&apos;s published w(z) table was wrong twice &mdash; a sign error in
          the continuity relation and a dropped &minus;1 term (its formula returns w&nbsp;=&nbsp;&minus;2 for
          ordinary matter, where the correct answer is 0). Corrected 2026-08-10; dated errata are in the research
          repo (Sessions 100/101). The corrected w(0) at &gamma;&nbsp;=&nbsp;2 is &minus;1.24, not the
          &ldquo;&gt;&nbsp;0&rdquo; the archive reported &mdash; eight months of downstream reasoning had followed
          the uncorrected branch.
        </p>
      </section>

      <section className="section content-width">
        <h2>What the substituted model predicts: a sign lock</h2>
        <p>
          The corrected equation of state runs <strong>monotonically from w&nbsp;=&nbsp;&minus;2&gamma; in the far
          past to exactly w&nbsp;=&nbsp;&minus;1 in the far future</strong>, for every &gamma;. It approaches the
          cosmological-constant value from one side and can never cross it. In the (w&#x2080;,&thinsp;w&#x2090;)
          language cosmologists use, that forces{' '}
          <strong>sign(w&#x2080;&nbsp;+&nbsp;1)&nbsp;=&nbsp;sign(w&#x2090;)</strong>. DESI DR2 (arXiv:2503.14738)
          prefers precisely the forbidden combination &mdash; w&#x2080;&nbsp;&gt;&nbsp;&minus;1 <em>with</em>{' '}
          w&#x2090;&nbsp;&lt;&nbsp;0, a crossing of w&nbsp;=&nbsp;&minus;1 &mdash; in all four of its data
          combinations. Scanning &gamma;: zero values reach that quadrant; forcing w&#x2080; to match compels a
          wrong-sign w&#x2090; (offsets 3.4&ndash;5.4&sigma; across the combinations, sign-and-scale statement
          only &mdash; no covariance is claimed).{' '}
          <strong style={{ color: '#f59e0b' }}>Those &sigma; figures did not survive a direct fit</strong> &mdash; see
          &ldquo;The direct fit&rdquo; below: forcing w&#x2080; to DESI&apos;s central value prices a point the
          likelihood never visits. The sign lock is real; its cost is &Lambda;CDM&apos;s cost.
        </p>
        <div style={{
          background: 'rgba(139,92,246,0.07)',
          border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: '0.375rem',
          padding: '0.9rem 1.1rem',
          margin: '0.75rem 0',
          fontSize: '0.9rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: 'var(--color-accent-violet)' }}>The single most informative structural fact:</strong>{' '}
          at &gamma;&nbsp;=&nbsp;1/2 the substituted background is <em>algebraically identical to &Lambda;CDM</em>{' '}
          (C&nbsp;&equiv;&nbsp;&Omega;<sub>m</sub>(z)). The same &gamma;&nbsp;=&nbsp;1/2 is the exact MOND
          simple-&mu; point in the galaxy sector &mdash; one algebraic fact (the M&ouml;bius member of the
          tanh-log family, C&nbsp;=&nbsp;x/(x+2)) with two faces &mdash; and the galaxy data&apos;s own free fit
          returns &gamma;&nbsp;=&nbsp;0.489, within 2.2% of it. Both sectors independently pin the framework to
          the point where it becomes indistinguishable from the incumbent it was meant to replace. A theory whose
          best fit is its own disappearance.
        </div>
      </section>

      <section className="section content-width">
        <h2>The covariant check (2026-08-11): the lock dies, the no-go hardens</h2>
        <p>
          The substitution above is not a solution of any covariant theory &mdash; its two assumptions
          (H&sup2;&nbsp;=&nbsp;8&pi;G&rho;<sub>m</sub>/(3C) <em>and</em> &rho;<sub>m</sub>&nbsp;&prop;&nbsp;a&#x207B;&sup3;)
          jointly violate the Bianchi identity of the framework&apos;s own field equation (Appendix D:
          G<sub>&mu;&nu;</sub>&nbsp;=&nbsp;8&pi;G&thinsp;T<sub>&mu;&nu;</sub>/C). One assumption has to give, and
          the two minimal repairs bracket the completion space:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', margin: '0.75rem 0' }}>
          <div className="card">
            <h3 style={{ marginTop: 0, fontSize: '0.95rem' }}>Completion A &mdash; keep the field equation as written</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              The Bianchi identity forces &rho;/C&nbsp;&prop;&nbsp;a&#x207B;&sup3;, so the background is{' '}
              <strong>exactly Einstein&ndash;de Sitter for every &gamma; and every calibration</strong> (verified
              numerically to 10&#x207B;&sup1;&sup3;). The dark-energy sector vanishes identically &mdash;
              Session 100&apos;s &ldquo;dark energy emerges naturally&rdquo; was its conservation assumption read
              back. Bonus pathology: the vacuum floor closes the FRW constraint at finite scale factor &mdash;
              under Session 100&apos;s own calibration the equation has <strong>no FRW solution beyond
              a&nbsp;&asymp;&nbsp;1.04</strong>, about 4% more expansion from today.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0, fontSize: '0.95rem' }}>Completion B &mdash; promote C to a Brans-Dicke-type scalar</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              The &#x10A;-terms destroy the w&nbsp;=&nbsp;&minus;1 attractor: every &gamma; now ends in a
              finite-scale-factor singularity, the &gamma;&nbsp;=&nbsp;1/2&nbsp;=&nbsp;&Lambda;CDM degeneracy is
              broken (no member of the completed family is &Lambda;CDM), and the <em>literal</em> sign lock dies
              &mdash; mixed-sign (w&#x2080;,&thinsp;w&#x2090;) pairs exist. But{' '}
              <strong>0 of 192 &gamma; values reach the DESI quadrant, at every Brans-Dicke &omega; tested</strong>{' '}
              (0, 1, 5, 50): the completed family crosses the phantom divide in the <em>anti</em>-DESI direction.
              Forcing w&#x2080; to DESI&apos;s value forces w&#x2090;&nbsp;=&nbsp;+0.23&hellip;+0.60 &mdash; wrong
              sign in all four combinations (3.4&ndash;6.3&sigma;, sign-and-scale only). Re-priced by the direct fit
              below: B does not merely miss the quadrant, it <strong>fails the fit</strong> (&Delta;&chi;&sup2; &ge; +79
              vs &Lambda;CDM at every &omega;), and at the Cassini-allowed &omega; &ge; 4&times;10&#x2074; the no-go
              hardens (w&#x2080; = &minus;3.18).
            </p>
          </div>
        </div>
        <p>
          <strong>Why every road ends the same way &mdash; one identity.</strong> For <em>any</em> model whose
          dark energy is algebraically slaved to the matter density (&rho;<sub>DE</sub>&nbsp;=&nbsp;&rho;<sub>m</sub>&middot;F(x),
          x&nbsp;=&nbsp;&rho;&#772;/&rho;<sub>crit</sub>, any F), the continuity equation collapses to
          w<sub>DE</sub>(z)&nbsp;=&nbsp;dlnF/dlnx. The whole expansion history is one static curve read from
          high density to low. DESI&apos;s preferred crossing then requires{' '}
          <strong>&rho;<sub>DE</sub>(x) to have an interior maximum</strong> &mdash; and no completion of
          C&nbsp;=&nbsp;tanh(&gamma;&thinsp;ln(1+x)) produces one: the family yields monotone
          &rho;<sub>DE</sub> (the sign lock), identically zero (completion A), or minimum-type (completion B&apos;s
          anti-DESI crossing). Never a maximum.
        </p>
        <div style={{
          background: 'rgba(245,158,11,0.07)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          margin: '0.75rem 0',
          fontSize: '0.88rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong style={{ color: '#f59e0b' }}>The escape condition, stated exactly:</strong> an interior maximum
          of &rho;<sub>DE</sub>(x). Producing one requires either a new functional commitment for C &mdash; nothing
          in the archive proposes one &mdash; or an independent scalar degree of freedom not slaved to the matter
          density, at which point the model is generic quintessence and the framework contributes nothing. This is
          what any future rescue must exhibit, recorded before DR3 so it cannot be retrofitted after.
        </div>
      </section>

      <section className="section content-width">
        <h2>Which force law generates this sector?</h2>
        <p>
          The framework&apos;s galaxy sector runs on the <em>algebraic</em> law g&nbsp;=&nbsp;g<sub>bar</sub>/C
          (with a post-hoc field-equation patch &nabla;&middot;[C&nabla;&Phi;]&nbsp;=&nbsp;4&pi;G&rho; for momentum
          conservation); its only <em>covariant</em> equation is Appendix D&apos;s. The answer to &ldquo;which one
          generates the cosmology&rdquo; is: <strong>neither, exactly</strong>. Appendix D&apos;s equation on FRW
          gives Einstein&ndash;de Sitter (no dark energy, completion A above); the substitution
          G<sub>eff</sub>&nbsp;=&nbsp;G/C is a third, independent construction that solves no covariant theory and
          is only trustworthy as the far-past limit of completion B. The fork-amplitude diagnostic the site applies
          to the galaxy sector applies here with the same verdict: the sectors are connected by notation, not by a
          single derivation. (See{' '}
          <Link href="/mond-unification" style={{ color: 'var(--color-accent-blue)' }}>MOND Unification</Link>{' '}
          for the galaxy-sector fork.)
        </p>
      </section>

      <section className="section content-width">
        <h2>The direct fit (2026-08-12): the quadrant rhetoric dissolves, the covariant no-go hardens</h2>
        <p>
          Every DESI statement above was made in CPL (w&#x2080;,&thinsp;w&#x2090;) space, a parameterization the
          family does not live in. The family was then fit <em>directly</em> to DESI DR2 BAO (13 points, per-tracer
          correlations) + Planck 2018 distance priors + the Dovekie SN recalibration (1,820 SNe, full covariance),
          with the pipeline first reproducing DESI&apos;s published w&#x2080;w&#x2090;CDM posture. Three results:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>The substituted family is not &ldquo;3.4&ndash;6.3&sigma; excluded&rdquo; &mdash; it is &Lambda;CDM.</strong>{' '}
            Best &gamma; = 0.487 (&minus;0.021/+0.024), &Delta;&chi;&sup2; = &minus;0.3 vs &Lambda;CDM with one extra
            parameter; its best member projects to (w&#x2080;, w&#x2090;) = (&minus;0.993, +0.023). It cannot reach the
            crossing, and the data-level price of that is exactly &Lambda;CDM&apos;s own: +11.0 behind w&#x2080;w&#x2090;CDM
            (~2.9&sigma; for two parameters), no more. The forced-w&#x2080; &sigma; figures were the fifth instance of an
            exclusion-flavoured number that did not survive execution.
          </li>
          <li>
            <strong>Both covariant completions fail the fit outright.</strong> Completion A is exact Einstein&ndash;de
            Sitter: &chi;&sup2; &asymp; 9,900. Completion B is &Delta;&chi;&sup2; = +79 to +187 worse than &Lambda;CDM for
            every &omega; tested &mdash; and (2026-08-19) the published &omega; grid topped out 800&times; inside the region
            Cassini excludes for an unscreened scalar (&omega; &ge; 4&times;10&#x2074;); at the allowed &omega; the no-go
            hardens to w&#x2080; = &minus;3.18. The sector survives current data only in its non-covariant form, and only
            by being &Lambda;CDM.
          </li>
          <li>
            <strong>The first executed cross-sector &gamma; test &mdash; and it has no power to fail.</strong>{' '}
            &gamma;<sub>cosmo</sub> = 0.487 vs &gamma;<sub>galaxy</sub> = 0.489 &ldquo;agree at 0.1&sigma;&rdquo; &mdash;
            but &gamma; = &frac12; is exactly &Lambda; and &gamma; = 0.489 is exactly MOND&apos;s simple &mu;, so the two
            sectors&apos; <em>standard</em> models sit 0.011 apart in &gamma;-space by construction; separating them needs
            &sigma;<sub>&gamma;</sub> &asymp; 0.004 and the SPARC side delivers 0.11 (galaxy-limited, 2026-08-14). Not a
            concordance; inherited from &Lambda; + MOND.
          </li>
        </ul>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Archive ledger status after this: <strong>Bucket 3 (reparametrization)</strong> &mdash; &Lambda;CDM where it
          lives, excluded where it would differ; no novel dark-energy prediction; refutation count unchanged. A
          researcher persona (2026-09-06) asked for a seventh refutation row on the strength of the &sigma; figures
          above; the honest answer is the opposite &mdash; the sector is <em>less</em> refuted than this page said,
          because it is not distinct. Script and inputs:{' '}
          <code style={{ fontSize: '0.8rem' }}>explorer/findings/scripts/fit_gamma_family_to_desi_dr2.py</code>;
          finding <code style={{ fontSize: '0.8rem' }}>gamma-family-direct-fit-desi-dr2-substituted-is-lcdm-covariant-excluded.md</code>.
          (This section was missing from 2026-08-12 to 2026-09-06 while the archive ledger already carried the result;
          the page under-reported its own deflation.)
        </p>
      </section>

      <section className="section content-width">
        <h2>Honest bounds on the DESI comparison</h2>
        <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>The comparison is quadrant-level in CPL space, not a fit.</strong> Projecting a monotone
            non-CPL w(z) onto (w&#x2080;,&thinsp;w&#x2090;) has known biases, and whether DESI&apos;s crossing
            preference survives the parameterization is actively debated (Shlivko&nbsp;&amp;&nbsp;Steinhardt 2024;
            Cort&ecirc;s&nbsp;&amp;&nbsp;Liddle 2024; Wolf, Garc&iacute;a-Garc&iacute;a&nbsp;&amp;&nbsp;Ferreira
            2024&ndash;25). That literature is the framework&apos;s <em>best available defense</em> and is cited
            here in both directions: it could rescue the framework from a premature kill, and it could equally let
            a real crossing be dismissed as artifact. The honest adjudication &mdash; fitting the actual
            one-parameter w(z;&thinsp;&gamma;) family to the data &mdash; <strong>was done on 2026-08-12</strong> (section
            above); this bullet read &ldquo;has not been done&rdquo; until 2026-09-06. The CPL-projection debate is now
            moot for the substituted family: it sits at &Lambda;CDM&apos;s corner regardless of parameterization.
          </li>
          <li>
            <strong>The sector is background-only.</strong> There is no perturbation sector, so the CMB-anchored
            contours the &sigma; figures borrow assume a perturbation model the framework does not have. The
            quadrant statement needs only the signs, which are DESI&apos;s headline result; the &sigma; numbers
            are sign-and-scale contexts, not likelihood statements.
          </li>
          <li>
            <strong>Completion B&apos;s pinning is an ansatz.</strong> C is held to its algebraic trajectory
            C(&rho;&#772;(a)); a true scalar obeys its own equation of motion, and an enforcing sector with
            non-negligible stress is unconstrained by anything in the archive. What is closed is the completion
            the archive&apos;s own structure implies, not every conceivable dynamical extension.
          </li>
          <li>
            <strong>DESI DR2 central values are carried from the paper&apos;s abstract-level results.</strong>{' '}
            The (w&#x2080;,&thinsp;w&#x2090;) centrals and &sigma;&apos;s should be re-verified against the
            paper&apos;s tables before any external use.
          </li>
          <li>
            <strong>Nothing on this page is a new counted refutation.</strong> The refutation count stays at its
            audited value; this sector is a currently-disfavoured falsifiable position, not an executed kill.
            Completion A&apos;s Einstein&ndash;de Sitter exclusion rests on the 1998 dark-energy discovery, not on
            new statistics.
          </li>
        </ul>
      </section>

      <section className="section content-width">
        <h2>The test: TEST-26 (proposed, kill-or-tie)</h2>
        <p>
          A prospective registration against DESI DR3 (~2027&ndash;28) is drafted on{' '}
          <Link href="/top-5-tests" style={{ color: 'var(--color-accent-blue)' }}>Top Decisive Tests</Link>:
          the kill fires if DR3 robustly requires the crossing the model class cannot produce, with a
          pre-committed projection-robustness check; the &ldquo;confirming&rdquo; branch is a tie (the
          substituted &gamma;&nbsp;=&nbsp;1/2 branch <em>is</em> &Lambda;CDM &mdash; though that identity is
          itself substitution-conditional, since completion B has no &Lambda;CDM member). Recorded now so a
          later tie cannot be read as a success. Adoption gates on the operator.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Provenance chain: sector derived 2025-12-08 (Session 100) &middot; this site falsely declared
          &ldquo;no dark-energy sector exists&rdquo; 2026-07-22&ndash;08-10 (negative existence claim verified
          against compilation docs only &mdash; the standing rule adopted from that failure is that compilation
          documents can prove presence, never absence) &middot; w(z) arithmetic corrected and sign lock derived
          2026-08-10 &middot; covariant completions derived, lock killed, no-go hardened to model class
          2026-08-11 &middot; independently re-verified in the research repo 2026-08-12. Full audit trail:{' '}
          <Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>.
        </p>
      </section>

      <RelatedConcepts currentPath="/dark-energy" />
    </>
  );
}
