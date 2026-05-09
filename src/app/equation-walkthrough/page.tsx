'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';
import EquationDisplay from '@/components/EquationDisplay';

const steps = [
  {
    title: 'Step 1: Start with density',
    equation: 'ρ — the local mass/energy density',
    explanation: 'Everything begins with density. In a galaxy, ρ is the baryon density profile. In chemistry, it\'s the number density of particles. The same starting point everywhere.',
    key: 'Density is the universal input to the coherence function.',
  },
  {
    title: 'Step 2: Normalize by critical density',
    equation: 'ρ / ρ_crit — dimensionless ratio',
    explanation: 'ρ_crit is the density at which the system transitions from one regime to another. For galaxies: ρ_crit = A × V_flat². For atoms: related to bonding energies. The ratio ρ/ρ_crit tells you where you are relative to the transition.',
    key: 'ρ_crit sets the characteristic scale. It\'s system-specific but derivable.',
  },
  {
    title: 'Step 3: Take the natural logarithm',
    equation: 'ln(ρ/ρ_crit + 1) — natural log scaling',
    explanation: 'Why natural log? ln compresses: a number 1,000× bigger comes out only ~7 units bigger (ln(1000) ≈ 6.9). Physical densities span 80 orders of magnitude — from interstellar gas to neutron stars. Without compression, most of that range would be invisible in a single function. The +1 keeps the argument ≥ 1 so ln ≥ 0 and C ≥ 0 at any density.',
    key: 'ln compression is why one equation works across 80 orders of magnitude — not an approximation, just arithmetic.',
  },
  {
    title: 'Step 4: Multiply by γ',
    equation: 'γ × ln(ρ/ρ_crit + 1) — scaled by coherence parameter',
    explanation: 'γ = 2/√N_corr controls how steeply coherence rises with density. For uncorrelated systems (N_corr = 1, γ = 2), coherence rises fast. For highly correlated systems (large N_corr, γ → 0), coherence is already high everywhere.',
    key: 'γ is the only "knob" that distinguishes quantum from classical.',
  },
  {
    title: 'Step 5: Apply tanh',
    equation: 'C(ρ) = tanh(γ · ln(ρ/ρ_crit + 1))',
    explanation: 'tanh (hyperbolic tangent) is a saturation function: it maps any real number smoothly to the range (0, 1), like a dimmer switch with a soft floor and soft ceiling. Feed it a very small number → outputs near 0. Feed it a very large number → outputs near 1. The transition is sharpest near the midpoint. No abrupt jump — just a smooth S-curve. Any sigmoid (logistic, erf, Hill) would serve similarly here. tanh is motivated by Landau-class mean-field theory, not uniquely derived.',
    key: 'tanh is the saturation wrapper: it ensures C never leaves [0,1] no matter how large or small the input gets.',
  },
  {
    title: 'Step 6: Interpret the output',
    equation: 'C = 0 (no coherence) → C = 1 (full coherence)',
    explanation: 'C = 0: no collective order — the quantum limit where particles act independently. C = 1: full collective coherence — the classical limit where many particles behave as one ordered system. C ≈ 0.50: the consciousness threshold (if the system has enough structural complexity). The same output tells you different things in different domains.',
    key: 'One function, universal interpretation, domain-specific consequences.',
  },
];

export default function EquationWalkthrough() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <>
      <Breadcrumbs currentPath="/equation-walkthrough" />
      <h1>Equation Walkthrough</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <p>
          Step through the derivation of C(&#x03C1;) interactively. Each step adds one piece
          to the equation and explains why it&apos;s there.
        </p>

        {/* Variable glossary — teach before walking */}
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-accent-violet)' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            Variables in this equation — defined before we start:
          </p>
          <table style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>C(&#x03C1;)</td><td>Coherence — a number from 0 (quantum, uncorrelated) to 1 (classical, collective). The output we&apos;re computing.</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03C1;</td><td>Presence — the density of compatible elements within the system&apos;s relevancy boundary. The universal input.</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03C1;<sub>crit</sub></td><td>A characteristic scale parameter for the system. <strong>Important:</strong> not the midpoint of C. At &#x03B3;=2, C(&#x03C1;<sub>crit</sub>)&nbsp;&#x2248;&nbsp;0.88 — &#x03C1;<sub>crit</sub> is near saturation, not the half-way point.</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>&#x03B3;</td><td>2/&#x221A;N<sub>corr</sub> — controls sigmoid sharpness. N<sub>corr</sub> = number of particles moving together. One particle: &#x03B3;=2 (sharp). A million: &#x03B3;=2&times;10&#x207B;&#x00B3; (flat).</td></tr>
              <tr><td style={{ padding: '0.2rem 0.5rem 0.2rem 0', fontFamily: 'monospace', color: 'var(--color-accent-violet)', whiteSpace: 'nowrap' }}>tanh</td><td>Hyperbolic tangent — an S-shaped saturation function that maps any real number to (0, 1). Like a dimmer switch: input very negative → output near 0; input very large → output near 1.</td></tr>
            </tbody>
          </table>
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
          {steps.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                backgroundColor: i <= step ? 'var(--color-accent-violet)' : 'var(--color-dark-border)',
                cursor: 'pointer',
              }}
              onClick={() => setStep(i)}
            />
          ))}
        </div>

        <div className="card card-highlight" style={{ marginBottom: '1.5rem', minHeight: '250px' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            Step {step + 1} of {steps.length}
          </p>
          <h2 style={{ marginBottom: '1rem' }}>{current.title}</h2>

          <EquationDisplay size="lg">
            {current.equation}
          </EquationDisplay>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
            {current.explanation}
          </p>

          <p style={{ color: 'var(--color-accent-violet)', fontSize: '0.85rem', marginTop: '1rem', fontWeight: 500 }}>
            {current.key}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{
              background: step > 0 ? 'var(--color-dark-surface)' : 'transparent',
              color: step > 0 ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
              border: '1px solid var(--color-dark-border)',
              borderRadius: '4px',
              padding: '0.4rem 1rem',
              cursor: step > 0 ? 'pointer' : 'default',
              fontSize: '0.9rem',
            }}
          >
            &larr; Previous
          </button>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            {step + 1} / {steps.length}
          </span>
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            style={{
              background: step < steps.length - 1 ? 'var(--color-accent-violet)' : 'transparent',
              color: step < steps.length - 1 ? '#fff' : 'var(--color-text-muted)',
              border: '1px solid var(--color-accent-violet)',
              borderRadius: '4px',
              padding: '0.4rem 1rem',
              cursor: step < steps.length - 1 ? 'pointer' : 'default',
              fontSize: '0.9rem',
            }}
          >
            Next &rarr;
          </button>
        </div>

        <h2>Full Equation</h2>
        <EquationDisplay label="The Coherence Function" size="lg">
          C(&#x03C1;) = tanh(&#x03B3; &middot; ln(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </EquationDisplay>
      </section>

      <RelatedConcepts currentPath="/equation-walkthrough" />
    </>
  );
}
