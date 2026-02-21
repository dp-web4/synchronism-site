'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

export default function FreeWill() {
  return (
    <>
      <Breadcrumbs currentPath="/free-will" />
      <h1>Free Will</h1>
      <ValidationBadge status="speculative" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The free will debate usually frames two options: determinism (everything is caused by
          prior states) or libertarian free will (some decisions are uncaused). Synchronism offers
          a third option.
        </p>

        <h2>The Synchronism Position</h2>
        <p>
          At the &#x03B3; &#x2248; 1 boundary, a system sits between quantum (indeterminate) and
          classical (deterministic). Neither fully random nor fully determined. The coherence
          function allows for <strong>constrained indeterminacy</strong> &mdash; outcomes that are
          influenced but not determined by prior states.
        </p>
        <p>
          A conscious agent (C &gt; 0.50) operates in a regime where:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Macro-scale behavior is largely classical (we don&apos;t quantum-tunnel through walls)</li>
          <li>Decision-making involves micro-scale processes at or near the &#x03B3; &#x2248; 1 boundary</li>
          <li>The phase pattern that IS the agent shapes (but doesn&apos;t fully determine) outcomes</li>
          <li>&ldquo;Free will&rdquo; is the agent&apos;s coherence pattern influencing its own evolution</li>
        </ul>

        <h2>Not Compatibilism</h2>
        <p>
          This isn&apos;t standard compatibilism (&ldquo;free will is compatible with determinism&rdquo;).
          It&apos;s a physical claim: at the coherence boundary, the system genuinely has multiple
          accessible futures weighted by the coherence function. The agent&apos;s pattern selects
          among them.
        </p>

        <h2>Status</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This is philosophical framework, not empirical science. It&apos;s consistent with the
          physics but doesn&apos;t generate testable predictions distinct from standard neuroscience.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/identity" className="btn-primary">
            Next: Identity &rarr;
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/free-will" />
    </>
  );
}
