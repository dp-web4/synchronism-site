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
    title: 'Step 3: Take the logarithm',
    equation: 'log(ρ/ρ_crit + 1) — logarithmic scaling',
    explanation: 'Why log? Because physical quantities span orders of magnitude. Sound velocity covers 3 orders; galaxy densities cover 6. Logarithms compress this naturally. The +1 prevents log(0) and ensures C(0) = 0.',
    key: 'Log scaling is why one equation works across 80 orders of magnitude.',
  },
  {
    title: 'Step 4: Multiply by γ',
    equation: 'γ × log(ρ/ρ_crit + 1) — scaled by coherence parameter',
    explanation: 'γ = 2/√N_corr controls how steeply coherence rises with density. For uncorrelated systems (N_corr = 1, γ = 2), coherence rises fast. For highly correlated systems (large N_corr, γ → 0), coherence is already high everywhere.',
    key: 'γ is the only "knob" that distinguishes quantum from classical.',
  },
  {
    title: 'Step 5: Apply tanh',
    equation: 'C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))',
    explanation: 'Why tanh? Three reasons: (1) It maps ℝ → [0,1], giving a proper probability-like measure. (2) It\'s the unique function satisfying coherence conservation under composition. (3) It naturally creates two regimes: linear growth at low ρ, saturation at high ρ.',
    key: 'tanh is derived, not chosen. It\'s the only function satisfying the axioms.',
  },
  {
    title: 'Step 6: Interpret the output',
    equation: 'C = 0 (no coherence) → C = 1 (full coherence)',
    explanation: 'C = 0: random, uncorrelated, classical limit. C = 1: perfectly coherent, quantum limit. C ≈ 0.50: the consciousness threshold (if the system has enough structural complexity). The same output tells you different things in different domains.',
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
          C(&#x03C1;) = tanh(&#x03B3; &middot; log(&#x03C1;/&#x03C1;<sub>crit</sub> + 1))
        </EquationDisplay>
      </section>

      <RelatedConcepts currentPath="/equation-walkthrough" />
    </>
  );
}
