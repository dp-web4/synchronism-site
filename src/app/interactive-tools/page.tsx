'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

type EpistemicStatus = 'core' | 'reparametrization' | 'speculative' | 'failed';

const statusStyle: Record<EpistemicStatus, { bg: string; color: string; label: string }> = {
  core: { bg: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', label: 'Core Theory' },
  reparametrization: { bg: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', label: 'Reparametrization' },
  speculative: { bg: 'rgba(239, 68, 68, 0.10)', color: '#f87171', label: 'Speculative' },
  failed: { bg: 'rgba(239, 68, 68, 0.10)', color: '#ef4444', label: 'Kill Criterion Triggered' },
};

const tools = [
  {
    title: 'Coherence Explorer',
    href: '/coherence-explorer',
    desc: 'Drag γ and ρ_crit sliders and watch the C(ρ) curve update live. See how the quantum-classical transition sharpens or flattens. Best first tool.',
    tags: ['Beginner'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Galaxy Curve Plotter',
    href: '/galaxy-plotter',
    desc: 'Pick a SPARC galaxy. See four curves: Newtonian prediction (dashed), observed rotation (dots), Synchronism fit (violet), and MOND (green). Synchronism and MOND nearly overlap — this is what a reparametrization looks like.',
    tags: ['Beginner'],
    epistemic: 'reparametrization' as EpistemicStatus,
  },
  {
    title: 'γ Calculator',
    href: '/gamma-calculator',
    desc: 'Input N_corr (number of correlated particles) and read off γ, the regime label, and what that means physically. Presets: gas, liquid, crystal, BCS superconductor, BEC.',
    tags: ['Intermediate'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Phase Boundary Visualizer',
    href: '/phase-boundary-visualizer',
    desc: 'Drag the γ slider and see where familiar systems (ideal gas, water, BCS superconductor, galaxies) sit along the coherence axis. Note: the tool shows the γ dimension only; a full γ–ρ phase diagram is not yet implemented.',
    tags: ['Intermediate'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Equation Walkthrough',
    href: '/equation-walkthrough',
    desc: 'Step-by-step interactive derivation. Each step shows the equation, the physical motivation, and how the parameters connect.',
    tags: ['Conceptual'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Consciousness Threshold Demo',
    href: '/consciousness-demo',
    desc: 'Eight approaches to coherence-based consciousness all converge near C ≈ 0.50. Honest caveat: this convergence is geometric (they all compute the same sigmoid inflection), not empirical. No calibration to brain data exists.',
    tags: ['Intermediate'],
    epistemic: 'speculative' as EpistemicStatus,
  },
  {
    title: 'Chemistry Correlation Explorer',
    href: '/gamma-boundary',
    desc: 'See how γ correlates with chemical properties across 1,703 phenomena. High r values (0.98+) reflect density-monotonicity, not Synchronism-specific physics — null model comparison pending.',
    tags: ['Advanced'],
    epistemic: 'reparametrization' as EpistemicStatus,
  },
];

export default function InteractiveTools() {
  return (
    <>
      <Breadcrumbs currentPath="/interactive-tools" />
      <h1>Interactive Tools</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem', maxWidth: '60ch' }}>
        All of Synchronism&apos;s interactive tools in one place. Each card shows an epistemic status
        badge so you know what you&apos;re looking at before you click in.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '0.8rem' }}>
        {Object.entries(statusStyle).map(([key, s]) => (
          <span key={key} style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', background: s.bg, color: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {tools.map(tool => {
          const ep = statusStyle[tool.epistemic];
          return (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                height: '100%',
                transition: 'border-color 0.2s ease, transform 0.1s ease',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{tool.title}</h3>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    background: ep.bg,
                    color: ep.color,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {ep.label}
                  </span>
                </div>
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
          );
        })}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
          <strong>Where to start:</strong> The Coherence Explorer (Core Theory) shows the S-curve live.
          The Galaxy Plotter (Reparametrization) shows where Synchronism and MOND nearly overlap.
          The Consciousness Demo is labeled Speculative — it illustrates a geometric property of the
          sigmoid, not an empirical finding.
        </p>
      </div>
    </>
  );
}
