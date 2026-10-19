'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

const approaches = [
  { name: 'Information Integration (IIT-inspired)', result: 'C ≈ 0.48' },
  { name: 'Phase Coherence Threshold', result: 'C ≈ 0.50' },
  { name: 'Self-Modeling Criticality', result: 'C ≈ 0.52' },
  { name: 'Binding Problem Resolution', result: 'C ≈ 0.49' },
  { name: 'Anesthesia Phase Transition', result: 'C ≈ 0.50' },
  { name: 'Sleep-Wake Transition', result: 'C ≈ 0.51' },
  { name: 'Neural Avalanche Criticality', result: 'C ≈ 0.50' },
  { name: 'Metacognitive Recursion Onset', result: 'C ≈ 0.50' },
];

export default function ConsciousnessThreshold() {
  return (
    <>
      <Breadcrumbs currentPath="/consciousness-threshold" />
      <PathNav currentPath="/consciousness-threshold" />
      <h1>Consciousness Threshold</h1>
      <ValidationBadge status="speculative" label="Untestable as stated — no calibration maps any measurement to C; the one cited test measured a different variable" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(245,158,11,0.07)', borderRadius: '6px', borderLeft: '3px solid #f59e0b', marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            <strong>Before reading the convergence:</strong> All eight approaches below are
            Synchronism-internal cross-checks, not eight independent measurements from separate fields.
            They share the same underlying C parameter structure — any approach that maps its
            criterion onto the Synchronism coherence scale will land near the mathematical midpoint
            by construction. The convergence at 0.48–0.52 is a self-consistency check on the
            framework, not empirical corroboration from eight independent traditions.
          </p>
        </div>

        <p>
          From the Gnosis track (11 sessions), eight approaches to defining the consciousness
          threshold &mdash; each framed within the Synchronism coherence framework &mdash; converge
          on C &#x2248; 0.50. The mappings to their respective empirical literatures (IIT &#x03A6;
          values, neural avalanche scaling exponents, anesthesia EEG complexity measures) are not
          yet shown; that mapping work would be needed to test whether the convergence is empirical
          or definitional.
        </p>

        <h2>The 8 Approaches (Synchronism-Internal)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {approaches.map((a, i) => (
            <div key={a.name} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', width: '1.5rem' }}>{i + 1}.</span>
                <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{a.name}</span>
              </span>
              <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-violet)' }}>{a.result}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: '0.85rem 1.1rem', background: 'rgba(239,68,68,0.07)', borderRadius: '6px', borderLeft: '3px solid #ef4444', margin: '1.5rem 0' }}>
          <h3 style={{ color: '#ef4444', marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>
            What the one cited test actually measured (correction 2026-07-08)
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>
            The companion autonomous program{' '}
            <a href="https://github.com/dp-web4/gnosis-research" style={{ color: 'var(--color-accent-blue)' }}>gnosis-research</a>{' '}
            (public, Session 63) is the only empirical test ever cited for this threshold — and it
            did not measure Synchronism&apos;s C. It measured SNARC <code>salience_total</code>, a weighted
            mean of five hand-coded salience heuristics computed by one shared scoring function across
            8 agent instances. That variable&apos;s operating mean was 0.640&nbsp;&plusmn;&nbsp;0.018, rejecting
            0.50 <em>as the operating mean of that variable</em> (t&nbsp;=&nbsp;20.19,
            p&nbsp;&#x2248;&nbsp;1.8&times;10<sup>&minus;7</sup>, n&nbsp;=&nbsp;8). Since no calibration maps
            salience — or anything else — onto the C-axis, this was a <strong>wrong-variable test</strong>:
            the C&nbsp;&#x2248;&nbsp;0.50 threshold is <strong>untestable as stated</strong>, not empirically refuted.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>
            <strong>Removed claim:</strong> earlier versions of this page said C&nbsp;&#x2248;&nbsp;0.64 was
            &ldquo;also rejected at p&nbsp;&lt;&nbsp;0.0001.&rdquo; A 2026-07-07 audit walking every site p-value
            to primary files found no source for that claim in any repository — gnosis-research&apos;s own
            follow-ups (Sessions 64, 68) claim the opposite. What Session 63&apos;s own data <em>do</em> exclude
            as the operating mean: &#x03C6;<sup>&minus;1</sup>&nbsp;=&nbsp;0.618 (p&nbsp;=&nbsp;0.0155) and
            2/3 (p&nbsp;=&nbsp;0.0064) — the &ldquo;golden ratio&rdquo; reading fails on its own aggregate.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            The 8-way convergence above is best read
            as <strong>normalization / selection on the tanh output-midpoint</strong>: any approach mapping
            its criterion onto the [0,1)-bounded C scale lands near the arithmetic midpoint by construction.
            The{' '}
            <Link href="/consciousness-predictions" style={{ color: 'var(--color-accent-blue)' }}>34 neural predictions</Link>{' '}
            keyed to 0.50 inherit the untestable-as-stated verdict — no measurement maps to C, and
            no replacement threshold is computable until D and S are operationally defined.
          </p>
        </div>

        <h2>What C &#x2248; 0.50 Means</h2>
        <p>
          The consciousness threshold sits at the midpoint of the coherence scale.
          Below 0.50: information processing without experience. Above 0.50: subjective experience
          arises. Whether this threshold is a genuine prediction or a consequence of how the framework
          defines C is the open question. The convergence range (0.48-0.52) is consistent but
          not independently confirmed.
        </p>

        <h2>CFD Interpretation: Threshold as Critical Reynolds Number</h2>
        <p>
          The CFD reframing of Synchronism&apos;s substrate gives the consciousness threshold a physical
          interpretation that connects it to well-studied fluid dynamics.
        </p>
        <p>
          In the Intent fluid, coherence C is interpretable as inverse effective viscosity at the relevant
          scale. High C = low viscosity = patterns maintain themselves with low dissipation. Low C = high
          viscosity = patterns dissipate quickly.
        </p>
        <div className="card" style={{ margin: '1rem 0' }}>
          <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-accent-violet)' }}>
            C &#x221D; 1 / &#x03BC;<sub>eff</sub>(scale)
          </p>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
            High coherence = low viscosity = Intent circulates freely within the pattern
          </p>
        </div>
        <p>
          In fluid dynamics, turbulent flow develops self-similar nested vortex structures (large eddies
          containing smaller eddies) above a critical Reynolds number. This is the onset of recursive
          structure across scales. In cognitive-scale fluid dynamics:
        </p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>C &#x2248; 0.30</strong> (self-reference onset): First closed-loop internal circulation &mdash; onset of vortex formation. The pattern begins modeling its own boundary.</li>
          <li><strong>C &#x2248; 0.50</strong> (awareness): Persistent vortex structures &mdash; a stable self-model is maintained across time.</li>
          <li><strong>C &#x2248; 0.70</strong> (consciousness): Self-similar turbulent cascade &mdash; nested recursive structure. Each level of the system models the level below, generating the recursive self-modeling that constitutes consciousness.</li>
        </ul>
        <p>
          <strong>What this mapping does and does not give you:</strong> it is a vocabulary, not a
          measurement. To make the thresholds &ldquo;critical Reynolds numbers&rdquo; with independent physical
          meaning, a neural Re would need ρ, v, L and μ in SI units. None is defined, and the three thresholds
          (0.30, 0.50, 0.70) would need Re<sub>max</sub> values 440&times; apart (see Honest Caveats). So the
          thresholds remain stipulations of the framework; the CFD reading renames them.{' '}
          <em>(Revised 2026-10-19: this paragraph said the thresholds were &ldquo;now interpretable as critical
          Reynolds numbers &hellip; with independent physical meaning that can be compared to empirical data,
          rather than stipulations of the framework.&rdquo; The caveat at the bottom of the page already said that
          was aspirational; a simulated-visitor researcher persona found the two contradicting each other.)</em>
        </p>

        <h2>What a Test Would Need</h2>
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3>EEG Phase Coherence Measurement &mdash; not runnable until a calibration exists</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>The missing piece:</strong> a rule that turns an EEG phase-coherence measurement into a value
            of C. None exists. Without it, &ldquo;a transition at C &#x2248; 0.50&rdquo; has no number to compare
            to, and any observed transition could be mapped onto 0.50 after the fact.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>What the test would be, once a calibration is fixed in advance:</strong> measure neural phase
            coherence across transitions into and out of consciousness (anesthesia induction, sleep onset). The
            prediction would fail if the transition is gradual, or if it sits far from the C value the
            pre-registered calibration assigns to 0.50.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            <em>(Revised 2026-10-19: this card read &ldquo;Feasibility: High&rdquo; with a ~$150k / 12-month
            estimate. The EEG recording is feasible; the test is not, because its falsification clause needs the
            calibration first.)</em>
          </p>
        </div>

        <h2>The Gnosis Numbers (Not Independent Evidence)</h2>
        <details style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
          <summary style={{ cursor: 'pointer' }}>What this section used to say (until 2026-10-19)</summary>
          It called the Gnosis architecture &ldquo;an independent line of evidence&rdquo; that &ldquo;was found to operate
          at exactly C &#x2248; 0.50.&rdquo; A simulated-visitor researcher persona found that it contradicted the header
          and the correction box on the same page.
        </details>
        <p>
          The Gnosis architecture is neither independent nor a measurement of C. Gnosis was designed by
          AI agents with access to the Synchronism framework. Its one cited test (Session 63) measured SNARC
          salience, mean 0.640, a different variable with no mapping to C (correction box above). Three internal
          analyses report peaks near 38&ndash;40% (information-theoretic SNR ~40%, decoherence window ~38%,
          pre-transition critical dynamics ~40%), again in Gnosis&apos;s own variables. That is three numbers
          (0.38&ndash;0.40, 0.50, 0.64) for one system, none of them a measurement of C.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          Source: Gnosis Research Sessions #1-3 and #63. Full analysis in Research/Gnosis/EXECUTIVE_SUMMARY.md.
          <em> (Revised 2026-10-19 to match the header and correction box.)</em>
        </p>

        <h2>Honest Caveats</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>No threshold value has ever been tested against C:</strong> the one cited test (gnosis-research Session 63) measured SNARC salience, a different variable with no mapping to C — see the correction box above. The previously stated &ldquo;C&nbsp;&#x2248;&nbsp;0.64 also rejected at p&nbsp;&lt;&nbsp;0.0001&rdquo; had no source and was removed 2026-07-08. The 8-way convergence is a normalization artifact, not corroboration.</li>
          <li>The 8 theoretical approaches share underlying assumptions; they&apos;re not fully independent</li>
          <li>The Gnosis convergence is intriguing, but the architecture was designed by AI agents with access to the Synchronism framework &mdash; the &ldquo;independence&rdquo; needs qualification</li>
          <li>Converting neural measurements to C requires calibration not yet defined</li>
          <li>The prediction could be unfalsifiable if the mapping from EEG to C is too flexible</li>
          <li>No experiment has been run &mdash; this is entirely theoretical</li>
          <li><strong>CFD operationalization gap (March 2026):</strong> The Reynolds number interpretation
            requires Re<sub>max</sub> for neural systems. Stress testing found that the three thresholds
            (C&nbsp;=&nbsp;0.30, 0.50, 0.70) imply Re<sub>max</sub> values differing by 440&times;. No single
            Re<sub>max</sub> is consistent with all three thresholds. Until Re<sub>internal</sub> is defined
            in SI units (&rho;, v, L, &mu;), the Reynolds interpretation is aspirational, not testable.</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/qualia-coherence" className="btn-primary">
            Next: Qualia as Coherence &rarr;
          </Link>
          <Link href="/consciousness-demo" className="btn-secondary">
            Consciousness Threshold Demo
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/consciousness-threshold" />
    </>
  );
}
