import type { Metadata } from "next";
import Link from "next/link";
import SiteSearch from "@/components/SiteSearch";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Synchronism',
    default: 'Synchronism | One Equation, Every Scale',
  },
  description:
    "Explore Synchronism: a framework that maps density to coherence across 80 orders of magnitude, from quantum to cosmic. Interactive tools, honest assessments, testable predictions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="nav-logo">Synchronism</Link>
          <nav className="nav-links" aria-label="Main navigation">
            <SiteSearch />
            <Link
              href="/why-synchronism"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="Start here: the question behind the framework"
            >
              Why Synchronism?
            </Link>
            <Link
              href="/tier-1-existing"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="Tier 1 tests using existing datasets"
            >
              Tier 1: Existing Data
            </Link>
            <Link
              href="/test-catalog"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="24 proposed experiments by tier"
            >
              Test Roadmap
            </Link>
            <Link
              href="/interactive-tools"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="Interactive tools"
            >
              Tools
            </Link>
            <Link
              href="/glossary"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="30+ terms defined"
            >
              Glossary
            </Link>
            <Link
              href="/research-philosophy"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
              title="Validation taxonomy, kill criteria, methodology"
            >
              Research Philosophy
            </Link>
            <Link
              href="/honest-assessment"
              className="honest-link"
              title="What works, what failed, what we don't know"
            >
              Honest Assessment
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>
            Synchronism is an experimental research framework.{' '}
            <Link href="/honest-assessment">See what works and what doesn&apos;t.</Link>
          </p>
          <p style={{ marginTop: '0.5rem', lineHeight: 1.8 }}>
            <Link href="/why-synchronism">Why Synchronism?</Link>
            {' \u00B7 '}
            <Link href="/first-encounter">First Encounter</Link>
            {' \u00B7 '}
            <Link href="/key-claims">Key Claims</Link>
            {' \u00B7 '}
            <Link href="/honest-assessment">Honest Assessment</Link>
            {' \u00B7 '}
            <Link href="/tier-1-existing">Tier 1 Tests</Link>
            {' \u00B7 '}
            <Link href="/test-catalog">Test Roadmap</Link>
          </p>
          <p style={{ marginTop: '0.25rem', lineHeight: 1.8 }}>
            <Link href="/interactive-tools">Tools</Link>
            {' \u00B7 '}
            <Link href="/glossary">Glossary</Link>
            {' \u00B7 '}
            <Link href="/research-philosophy">Research Philosophy</Link>
            {' \u00B7 '}
            <a href="https://github.com/dp-web4/Synchronism" target="_blank" rel="noreferrer">
              Research Archive
            </a>
            {' \u00B7 '}
            <a href="https://github.com/dp-web4/synchronism-site/issues" target="_blank" rel="noreferrer">
              Report an Issue
            </a>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            All sessions, derivations, and failures are public.{' '}
            0 confirmed predictions, 1 refuted by external data.{' '}
            <Link href="/what-synchronism-is-not" style={{ color: 'var(--color-text-muted)' }}>What this is not &rarr;</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
