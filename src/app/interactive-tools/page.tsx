'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const tools = [
  {
    title: 'Coherence Explorer',
    href: '/coherence-explorer',
    desc: 'Drag γ and ρ_crit sliders and watch the C(ρ) curve update live. See how the quantum-classical transition sharpens or flattens.',
    tags: ['Core theory', 'Beginner'],
  },
  {
    title: 'Galaxy Curve Plotter',
    href: '/galaxy-plotter',
    desc: 'Pick a galaxy from the SPARC dataset. See three curves: visible-matter prediction (dashed), observed rotation (blue dots), and Synchronism fit (violet).',
    tags: ['Cosmology', 'Beginner'],
  },
  {
    title: 'γ Calculator',
    href: '/gamma-calculator',
    desc: 'Input N_corr (number of correlated particles) and read off γ, the regime label, and what that means physically. Presets: gas, liquid, crystal, BCS superconductor, BEC.',
    tags: ['Core theory', 'Intermediate'],
  },
  {
    title: 'Phase Boundary Visualizer',
    href: '/phase-boundary-visualizer',
    desc: 'Map systems onto the γ–ρ phase diagram. See where electrons, molecules, and galaxies sit relative to the quantum-classical boundary.',
    tags: ['Core theory', 'Intermediate'],
  },
  {
    title: 'Equation Walkthrough',
    href: '/equation-walkthrough',
    desc: 'Step-by-step interactive derivation. Each step shows the equation, the physical motivation, and how the parameters connect.',
    tags: ['Core theory', 'Beginner'],
  },
  {
    title: 'Coherence Demo',
    href: '/consciousness-demo',
    desc: 'Adjust consciousness-relevant parameters (γ, D, S) and see how they affect C. Explore what the C ≥ 0.50 threshold means.',
    tags: ['Consciousness', 'Intermediate'],
  },
  {
    title: 'Chemistry Correlation Explorer',
    href: '/gamma-boundary',
    desc: 'See how γ correlates with chemical properties (sound velocity, electronegativity, bulk modulus) across 1,703 phenomena.',
    tags: ['Chemistry', 'Advanced'],
  },
];

export default function InteractiveTools() {
  return (
    <>
      <Breadcrumbs currentPath="/interactive-tools" />
      <h1>Interactive Tools</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '60ch' }}>
        All of Synchronism&apos;s interactive tools in one place. Start with the Coherence Explorer
        or Galaxy Plotter if this is your first visit — both work without any background knowledge.
      </p>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {tools.map(tool => (
          <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
            <div className="card" style={{
              height: '100%',
              transition: 'border-color 0.2s ease, transform 0.1s ease',
              cursor: 'pointer',
            }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{tool.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {tool.desc}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    color: 'var(--color-accent-violet)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
          <strong>Tip:</strong> The Coherence Explorer and Galaxy Plotter are the best starting points.
          The Galaxy Plotter in particular gives an immediate visual sense of what the framework is doing —
          you can see the violet Synchronism curve track the observed data better than the visible-matter
          prediction. The γ Calculator adds physical intuition once you&apos;ve seen the curves.
        </p>
      </div>
    </>
  );
}
