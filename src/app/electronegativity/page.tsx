'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function Electronegativity() {
  return (
    <>
      <Breadcrumbs currentPath="/electronegativity" />
      <h1>Electronegativity</h1>
      <ValidationBadge status="reparametrization" label="r = 0.94–0.96 — the γ proxy is ionization energy renamed" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Electronegativity &mdash; how strongly an atom attracts electrons in a bond &mdash; correlates
          with the archive&apos;s optical γ proxy at r = 0.94–0.96. That proxy is defined as
          &#x03B3;<sub>optical</sub> = 13.6&nbsp;eV / IE, where IE is the ionization energy, so the correlation is
          electronegativity against ionization energy: a textbook relation that Mulliken&apos;s definition of
          electronegativity, &#x03C7; = (IE + EA)/2, builds in. (Until 2026-11-02 this page gave r = 0.979. That number is
          chemical softness against the same 1/IE, archive session #118; site explorer audit 2026-10-31.)
        </p>

        <h2>Why This Works</h2>
        <p>
          Electronegativity measures the strength of electron-atom coupling. High electronegativity
          (fluorine: 3.98) means electrons are tightly bound, highly correlated with the nucleus.
          Low electronegativity (cesium: 0.79) means electrons are loosely held, weakly correlated.
        </p>
        <p>
          This is a direct expression of N<sub>corr</sub>: how many particles (electrons + nucleus)
          are moving as a correlated unit determines both the electronegativity and the &#x03B3; value.
        </p>

        <div className="card" style={{ borderLeft: '3px solid #ef4444', marginTop: '1.5rem' }}>
          <h3 style={{ color: '#ef4444' }}>Circularity via bonding character (explorer finding, 2026-05-06)</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The site&apos;s documented N<sub>corr</sub> methods include an entropy-ratio method whose inputs
            (S<sub>uncorrelated</sub>, S<sub>effective</sub>) depend on bonding character &mdash; covalent vs.
            ionic vs. metallic &mdash; through vibrational density of states and cohesive energy. Electronegativity
            is <em>the</em> operational measure of bonding ionicity (bond ionicity &#x221D; (&#x03C7;<sub>A</sub>&nbsp;&minus;&nbsp;&#x03C7;<sub>B</sub>)&sup2;),
            so under that method electronegativity enters &#x03B3; through the same bonding-character variable
            it is then correlated against. No method that avoids this overlap has been shown applied to this
            dataset. See <Link href="/chemistry-correlation-explorer" style={{ color: 'var(--color-accent-blue)' }}>Chemistry
            Correlation Explorer</Link> for the same caveat applied to the wider cohort.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            <strong>The number did not come from that route (site explorer audit, 2026-10-31).</strong> The script that
            produced the electronegativity correlation does not use an entropy-ratio N<sub>corr</sub>. It sets
            &#x03B3;<sub>optical</sub> = 13.6&nbsp;eV / IE, so the circularity is more direct than the one described
            above: the proxy <em>is</em> the inverse ionization energy. The &ldquo;Why This Works&rdquo; story above
            (electrons and nucleus moving as a correlated unit) is an interpretation laid over that relation, not
            something the calculation tested.
          </p>
        </div>

        <h2>Connection to Sound Velocity</h2>
        <p>
          Both sound velocity (r = 0.982) and electronegativity (r = 0.94–0.96) correlate with &#x03B3;
          for the same reason: they both measure aspects of collective coupling. Sound velocity
          measures atom-atom coupling; electronegativity measures electron-atom coupling. The
          coherence function captures the underlying correlation structure that drives both.
          <strong> Both correlations carry the circularity caveat above</strong> &mdash; see{' '}
          <Link href="/sound-velocity" style={{ color: 'var(--color-accent-blue)' }}>Sound Velocity</Link>{' '}
          for that page&apos;s additional sign-inversion problem, which is specific to density-defined
          quantities and has not been separately checked for electronegativity.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/chemistry-phase-transitions" className="btn-primary">
            Next: Phase Transitions in Chemistry &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/electronegativity" />
    </>
  );
}
