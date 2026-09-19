'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CompressionAction() {
  return (
    <>
      <Breadcrumbs currentPath="/compression-action" />
      <PathNav currentPath="/compression-action" />
      <h1>Compression Action</h1>
      <ValidationBadge status="audited-negative" label="1/&#x03C6; Exponent Fitted-Then-Named; Equivalence Holds for Any Exponent" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <EquationDisplay size="lg" label="The ξ formulation">
          C(&#x03BE;) = &#x03BE;&#x2080; + (1 &minus; &#x03BE;&#x2080;) &middot; &#x03BE;<sup>1/&#x03C6;</sup> / (1 + &#x03BE;<sup>1/&#x03C6;</sup>)
        </EquationDisplay>

        <p>
          The compression action &#x03BE; was proposed as an alternative parameterization of the coherence
          function. The archive presents it as unifying three aspects of physics. No equation on this page or in
          the archive connects the three labels below to the formula above; they are a reading, not a result:
        </p>

        <div className="grid-3" style={{ margin: '1.5rem 0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#38bdf8' }}>Topology</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Matter: what is here
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Geometry</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Gravity: how space curves
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#22c55e' }}>Dynamics</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
              Quantum mechanics: how things evolve
            </p>
          </div>
        </div>

        <p>
          The golden ratio &#x03C6; appears as the scaling exponent in this formulation, and &#x03BE;&#x2080;
          is the minimum coherence (vacuum level).
        </p>
        <p style={{ color: 'rgba(245,158,11,0.9)', fontSize: '0.85rem', fontStyle: 'italic' }}>
          ⚠ Caution (2026-07-07): no derivation of the 1/&#x03C6; exponent is documented here or in the
          linked research — &ldquo;natural&rdquo; is not established. Golden-ratio framing has been
          removed site-wide where it dressed fitted or asserted values (the C&nbsp;&#x2248;&nbsp;0.64
          &ldquo;&#x2248;&nbsp;&#x03C6;&#x207B;&#xB9;&rdquo; consciousness claim was a 3.6% miss on a
          value that was itself refuted). Treat &#x03C6; here as an asserted ansatz pending a
          derivation, not a discovered constant.
        </p>

        <h2>Relationship to Standard Form</h2>
        <p>
          This section used to say &ldquo;the two formulations are equivalent.&rdquo; That cannot be checked as
          stated, because <strong>&#x03BE; is never defined as a function of &#x03C1;</strong>. Forcing the match
          shows what the claim amounts to. C(&#x03C1;) = tanh(&#x03B3; ln(1+x)) is exactly w/(w+2) with
          w = (1+x)<sup>2&#x03B3;</sup> &minus; 1, and &#x03BE;<sup>1/&#x03C6;</sup>/(1+&#x03BE;<sup>1/&#x03C6;</sup>) equals
          that if and only if
        </p>
        <EquationDisplay size="sm">
          &#x03BE;<sup>1/&#x03C6;</sup> = [(1+x)<sup>2&#x03B3;</sup> &minus; 1] / 2
        </EquationDisplay>
        <p>
          So the equivalence holds <em>by defining &#x03BE; to make it hold</em>, and it holds for every exponent:
          replace 1/&#x03C6; with any p and &#x03BE; = (w/2)<sup>1/p</sup> does the same job. An equivalence that
          survives any exponent gives the exponent no content. Two further mismatches: this form carries a floor
          &#x03BE;&#x2080;, so it can only match the <em>floored</em> variant of C(&#x03C1;), not the unfloored one the{' '}
          <Link href="/galaxy-plotter" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Plotter</Link> draws;
          and it is called an &ldquo;action&rdquo; with no functional, Lagrangian or variation behind the name.
          The same 1/&#x03C6; exponent is badged Audited-Negative (Fitted-Then-Named; 0 of 8 comparator scalings
          have &#x03C6; exponents) on{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>;
          until 2026-09-19 this page carried &ldquo;Speculative&rdquo; for the same object.
        </p>

        <h2>Status</h2>
        <p>
          The standard C(&#x03C1;) form is what was tested against galaxies and chemistry. The &#x03BE; form has
          produced no testable prediction beyond what C(&#x03C1;) provides, and with &#x03BE;(&#x03C1;) undefined it
          cannot. <strong>What would change this:</strong> an independent definition of &#x03BE; (from the
          substrate, not from C) under which a specific exponent is forced. Then 1/&#x03C6; versus any other value
          becomes a measurable question.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/phase-transitions" className="btn-primary">
            Next: Phase Transitions &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/compression-action" />
    </>
  );
}
