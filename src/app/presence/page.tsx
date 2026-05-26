'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

export default function Presence() {
  return (
    <>
      <Breadcrumbs currentPath="/presence" />
      <h1>Presence (&#x03C1;)</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <strong>Presence</strong> is the universal input to Synchronism&apos;s coherence function.
          Every system has a presence value &#x03C1; that encodes how much compatible structural material
          is available within its relevancy boundary. Feed &#x03C1; into C(&#x03C1;) and you get the
          system&apos;s coherence — where it sits on the quantum-to-classical spectrum.
        </p>

        <h2>Plain English</h2>
        <p>
          Think of presence as a count of &ldquo;compatible players&rdquo; within a system&apos;s
          sphere of influence. A single electron in a vacuum has almost no compatible partners nearby —
          very low presence, very low coherence, very quantum. The core of a neutron star has enormous
          density of interacting matter — very high presence, very high coherence, very classical.
          Everything in between — molecules, biology, galaxy dynamics — falls somewhere along that
          continuum.
        </p>
        <p>
          At its simplest, presence is physical density: how much stuff per unit volume. But Synchronism
          generalizes this. Temperature, energy levels, catalytic surfaces, the number of available
          bonding sites — any factor that supports the emergence of collective behavior can contribute
          to presence. In the galactic context, the flat rotation velocity V<sub>flat</sub> serves as
          the proxy for presence via &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&#x00B2;.
        </p>

        <h2>The Three Core State Variables</h2>
        <p>Synchronism&apos;s coherence function has three parameters. Presence (&#x03C1;) is the input variable; the other two are system properties:</p>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3>&#x03C1; — Presence (this page)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The input: how much compatible structural material is available within the system&apos;s
              Markov Relevancy Horizon. Physical density is the primary form, but temperature, energy
              levels, and other factors can contribute.
            </p>
          </div>
          <div className="card">
            <h3><Link href="/gamma-parameter" style={{ color: 'inherit', textDecoration: 'none' }}>&#x03B3; — Coupling strength</Link></h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03B3; = 2/&#x221AN<sub>corr</sub>. How correlated the system&apos;s particles are.
              Determines the sharpness of the quantum-classical transition.
            </p>
          </div>
          <div className="card">
            <h3><Link href="/critical-density" style={{ color: 'inherit', textDecoration: 'none' }}>&#x03C1;<sub>crit</sub> — Critical threshold</Link></h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &#x03C1;<sub>crit</sub> = A &times; V<sub>flat</sub>&#x00B2;. The transition point, unique
              to each system, where C = tanh(&#x03B3; &middot; ln(2)) &#x2248; 0.76.
            </p>
          </div>
          <div className="card">
            <h3>C — Coherence (output)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              The output: a number from 0 (quantum) to 1 (classical), computed from
              &#x03C1;, &#x03B3;, and &#x03C1;<sub>crit</sub>. What the framework predicts and the
              experiments test.
            </p>
          </div>
        </div>

        <h2>What &ldquo;Compatible&rdquo; Means</h2>
        <p>
          Not all nearby matter counts equally. Presence counts the elements that can participate in
          the system&apos;s coherent behavior — the ones whose interactions are constructive, not
          destructive. In a crystal, the periodically arranged atoms are maximally compatible (high
          coherence). In a gas, randomly moving particles interact weakly (low coherence at the
          collective level). A catalyst has a specific geometry that selectively binds compatible
          molecules — presence is high for those molecules and low for others.
        </p>
        <p>
          The boundary of what counts is the{' '}
          <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>
            Markov Relevancy Horizon (MRH)
          </Link>{' '}
          — the region within which interactions materially influence coherence. Outside the MRH,
          presence contributions decay below the noise floor and can be ignored.
        </p>

        <h2>Presence vs. Density</h2>
        <p>
          In the current implementation of Synchronism, presence is operationalized as physical
          density (mass per unit volume) or, for galactic contexts, as the effective gravitational
          density proxy V<sub>flat</sub>&#x00B2;/A. This is a simplification — a first-order
          approximation of a richer concept. The generalized idea of presence as &ldquo;compatible
          structural elements within the MRH&rdquo; is broader and connects to information density,
          entropy, and the number of thermodynamically accessible states.
        </p>
        <p>
          The reason the simplification works reasonably well is that physical density is often a good
          proxy for these richer notions: denser systems tend to have more accessible states, stronger
          interactions, and shorter correlation times — all contributing to higher coherence.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/coherence-function" className="btn-primary">
            The Coherence Function &rarr;
          </Link>
          <Link href="/mrh" className="btn-secondary">
            Markov Relevancy Horizon &rarr;
          </Link>
          <Link href="/critical-density" className="btn-secondary">
            Critical Density &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/presence" />
    </>
  );
}
