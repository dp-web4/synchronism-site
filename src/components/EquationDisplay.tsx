'use client';

interface EquationDisplayProps {
  /** The equation as HTML (use &#x entities for Greek letters) */
  children: React.ReactNode;
  /** Optional label/name for the equation */
  label?: string;
  /** Size: 'sm' | 'md' | 'lg' */
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: '1rem',
  md: '1.2rem',
  lg: '1.5rem',
};

export default function EquationDisplay({ children, label, size = 'md' }: EquationDisplayProps) {
  return (
    <div style={{ margin: '1.5rem 0' }}>
      <div
        className="equation"
        style={{ fontSize: sizes[size] }}
      >
        {children}
      </div>
      {label && (
        <div style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          marginTop: '-0.75rem',
          marginBottom: '1rem',
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
