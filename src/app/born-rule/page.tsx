'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function BornRule() {
  return (
    <>
      <Breadcrumbs currentPath="/born-rule" />
      <h1>Born Rule Derivation</h1>
      <ValidationBadge status="speculative" label="Theoretical" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          The Born rule &mdash; that quantum measurement probabilities are given by |&#x03B1;|&sup2;
          &mdash; is one of the foundational postulates of quantum mechanics. In standard QM, it is
          simply asserted. Synchronism derives it from coherence conservation.
        </p>

        <EquationDisplay size="lg" label="The Born rule">
          P(outcome) = |&#x03B1;|&sup2;
        </EquationDisplay>

        <h2>The Derivation Argument</h2>
        <p>
          Developed across Sessions #266-270, the argument proceeds in three steps:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ borderLeft: '3px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8' }}>Step 1: Coherence is Conserved</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Total coherence in an isolated system is constant. If a system is in superposition
              &#x03B1;|0&#x27E9; + &#x03B2;|1&#x27E9;, the total coherence is distributed across
              branches. Conservation requires that the sum over all branches equals the initial
              coherence of the system.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-violet)' }}>
            <h3 style={{ color: 'var(--color-accent-violet)' }}>Step 2: Coherence Maps to Probability</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              At an MRH crossing (measurement), the coherence in each branch determines how
              &ldquo;real&rdquo; that branch is. The branch with more coherence has more physical
              weight. If coherence is the fundamental quantity, then the probability of observing
              a given outcome is proportional to the coherence in that branch.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e' }}>Step 3: Conservation + Unitarity &rarr; |&#x03B1;|&sup2;</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              If coherence is conserved (Step 1) and probabilities are proportional to coherence
              (Step 2), and the time evolution is unitary (preserving inner products), then the
              only consistent probability measure is |&#x03B1;|&sup2;. Gleason&apos;s theorem provides
              the mathematical backbone: given the structure of Hilbert space, the Born rule is the
              unique probability measure compatible with these constraints.
            </p>
          </div>
        </div>

        <h2>What This Adds</h2>
        <p>
          The Born rule has been derived before &mdash; by Gleason (1957), by Zurek (2005, envariance),
          by Carroll and Sebens (2014, self-locating uncertainty). Synchronism&apos;s contribution is
          not the derivation itself but the <em>physical interpretation</em>: coherence conservation
          provides the missing physical principle that makes the Born rule necessary rather than
          postulated.
        </p>

        <div className="card card-highlight" style={{ margin: '1.5rem 0' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
            <strong>If coherence is conserved, Born&apos;s rule follows.</strong>
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This is the same logical structure as &ldquo;if energy is conserved, Noether&apos;s
            theorem gives conservation laws.&rdquo; The postulate becomes a consequence.
          </p>
        </div>

        <h2>Connection to Quantum Computing</h2>
        <p>
          The Born rule is what makes quantum computing work. When a quantum algorithm manipulates
          amplitudes to concentrate |&#x03B1;|&sup2; on the correct answer, it is (in Synchronism&apos;s
          framing) redistributing coherence so that the desired branch carries maximum physical weight.
          Quantum speedup = coherent parallelism, and the Born rule tells you how to extract the answer.
        </p>

        <h2>Honest Caveat</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This derivation relies on &ldquo;coherence conservation&rdquo; as an axiom. Whether this
          is truly more fundamental than the Born rule itself, or just a reformulation at the same
          level, is debatable. The argument has not been subjected to peer review and may contain
          circular reasoning. The Sessions #266-270 treatment is the most rigorous version available.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/quantum-computing" className="btn-primary">
            Next: Quantum Computing &rarr;
          </Link>
          <Link href="/entanglement-coherence" className="btn-secondary">
            Back: Entanglement as Coherence
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/born-rule" />
    </>
  );
}
