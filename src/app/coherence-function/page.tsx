'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';
import EquationDisplay from '@/components/EquationDisplay';

export default function CoherenceFunction() {
  return (
    <>
      <Breadcrumbs currentPath="/coherence-function" />
      <h1>The Coherence Function</h1>
      <ValidationBadge status="validated" label="Core Equation" />

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Before the math: <strong>coherence</strong> measures how collectively particles behave.
          Ice cubes have high coherence (rigid crystal lattice). Steam has low coherence (random
          motion). This function quantifies that spectrum for any system, at any scale.
        </p>

        <EquationDisplay size="lg" label="The Synchronism coherence function">
          C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </EquationDisplay>

        <p>
          This maps <strong>presence</strong> to <strong>coherence</strong>
          (a dimensionless number between 0 and 1 that describes how quantum or classical a system is).
        </p>

        <h2>Inputs and Outputs</h2>
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>&#x03C1;</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Input:</strong> presence &mdash; compatible structural elements within the system&apos;s{' '}
              <Link href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH</Link>.
              Physical density is one form of presence.
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>C</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Output:</strong> coherence (0 = quantum, 1 = classical)
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--color-accent-violet)' }}>&#x03B3;, &#x03C1;<sub>crit</sub></div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <strong>Parameters:</strong> coupling strength, transition density
            </div>
          </div>
        </div>

        <h2>Why This Specific Function?</h2>

        <h3>1. The Compression Requirement</h3>
        <p>
          The physical state of any system lives in a high-dimensional space: magnitude, direction,
          temporal structure, spatial correlations, interference patterns. But the quantum/classical
          distinction is binary. You need a function that compresses high-dimensional information
          into a bounded scalar. This is an{' '}
          <strong>information-theoretically necessary compression</strong> (Session #67).
        </p>

        <h3>2. Why tanh?</h3>
        <p>The compression function must satisfy four properties:</p>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Bounded [0, 1]</strong>: Coherence can&apos;t exceed unity or go negative</li>
          <li><strong>Monotonic</strong>: Higher presence &rarr; higher coherence (no paradoxical inversions)</li>
          <li><strong>Smooth saturation</strong>: Gradual approach to limits (enables field equations)</li>
          <li><strong>Handles extremes</strong>: &#x03C1; &rarr; 0 gives C &rarr; 0, &#x03C1; &rarr; &infin; gives C &rarr; 1</li>
        </ul>
        <p>
          From mean-field theory, tanh arises <em>naturally</em> from these constraints — the Ising-model
          self-consistency equation m = tanh(&beta;Jzm) has the same form. <strong>However, Synchronism&apos;s
          C(&#x03C1;) is not the Ising equation.</strong> The Ising result is a self-consistency loop where m
          appears on both sides. C(&#x03C1;) evaluates directly with no feedback loop — &#x03C1; goes in, C
          comes out. This distinction matters: the tanh shape is <em>motivated</em> by mean-field theory, not
          derived from it. Any sigmoid satisfying the four constraints above (logistic, erf, arctan, Hill) would
          have been an equally valid choice. tanh is the most natural choice given the Landau-theory connection,
          but not the uniquely forced one. See{' '}
          <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>{' '}
          for the complete derivation vs. motivation distinction.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          <strong>Saturation note:</strong> At &#x03B3; = 2, C(&#x03C1;) saturates within ~1 decade of &#x03C1;<sub>crit</sub>
          (C(10&#x00B7;&#x03C1;<sub>crit</sub>) &#x2248; 0.9999). The coherence transition is sharp — more like a
          phase transition than a smooth interpolation. Each system has its own &#x03C1;<sub>crit</sub>, so what is
          universal is the <em>form</em> of the crossover, not its location.
        </p>

        <h3>3. Why log?</h3>
        <p>
          Presence spans enormous ranges &mdash; in the astrophysical case, density alone covers 80+ orders
          of magnitude (interstellar gas at ~10<sup>&minus;24</sup> g/cm&sup3;
          to neutron stars at ~10<sup>14</sup> g/cm&sup3;). The logarithm maps this
          range into something tanh can differentiate between. The &ldquo;+1&rdquo; inside
          the log prevents divergence at &#x03C1; = 0.
        </p>

        <h2>What C = 0 and C = 1 Mean</h2>
        <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#38bdf8' }}>C &rarr; 0: Quantum</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Superposition maintained. Wave-like behavior. Interference possible.
              Systems in this regime show non-classical correlations.
              This is where quantum computing operates.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: '#22c55e' }}>C &rarr; 1: Classical</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Definite positions. Particle-like behavior. No interference.
              Everyday physics. Newton&apos;s laws work here.
              Galaxy dynamics lives in this regime.
            </p>
          </div>
        </div>

        <h2>Derivation History</h2>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li><strong>Session #64-65</strong>: &#x03B3; = 2.0 derived from 6D phase space degrees of freedom</li>
          <li><strong>Session #66</strong>: tanh form derived from mean-field theory</li>
          <li><strong>Session #67</strong>: Information-theoretic compression argument</li>
          <li><strong>Session #87-91</strong>: Connected to cosmological parameters (a&#x2080;, &#x03A3;&#x2080;)</li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/gamma-parameter" className="btn-primary">
            Next: The &#x03B3; Parameter &rarr;
          </Link>
          <Link href="/coherence-explorer" className="btn-secondary">
            Try It: Coherence Explorer
          </Link>
        </div>
      </section>

      <RelatedConcepts currentPath="/coherence-function" />
    </>
  );
}
