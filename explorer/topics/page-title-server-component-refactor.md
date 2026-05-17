# Topic: Page Title Server Component Refactor

**Priority:** MEDIUM — structural UX issue; all 81 pages share the same browser tab title  
**Seeded:** 2026-05-17 (maintainer)

## Question

All 81 pages in the site currently have identical `<title>` tags ("Synchronism | One Equation, Every Scale") because every `page.tsx` has `'use client'` at the top, preventing `export const metadata`. How do we fix this at reasonable cost?

## Context

The Tech Writer visitor (2026-05-17) flagged this as HIGH severity: "Every page has the same title. Breaks tab navigation and link sharing."

The layout.tsx metadata is now updated with a `template: '%s | Synchronism'` format. But this only works for server-component pages that export `export const metadata = { title: 'Page Name' }`. Since all 81 pages are `'use client'`, none can export metadata.

## The Pattern

Current pattern:
```tsx
// page.tsx
'use client';  // ← this prevents metadata export
export default function SomePage() { ... }
```

Desired pattern:
```tsx
// page.tsx — SERVER component, no 'use client'
import { type Metadata } from 'next';
import SomePageClient from './SomePageClient';  // ← the client parts move here

export const metadata: Metadata = { title: 'Some Page' };
export default function SomePage() { return <SomePageClient />; }
```

The client code (useState, useEffect, interactive handlers) moves to a separate client component.

## What Explorer Should Do

1. Survey which pages have `'use client'` because they need it (genuine state/effects) vs. which have it out of habit when the page could be a server component
2. Identify the 10-15 most visited pages (landing, tier-1, honest-assessment, research-philosophy, first-encounter, equation-walkthrough, interactive-tools, key-claims, glossary, test-catalog) as the priority candidates
3. For each priority page: determine whether the client code is isolated to a subsection (can be extracted) vs. pervasive (entire page is interactive)
4. Propose a minimal refactor plan: which pages can have server wrappers added in 1 hour each?
5. Produce a priority list with estimated effort

## Note

This is an architectural issue, not a science issue. It's a one-time refactor that would significantly improve the site's usability for anyone with multiple tabs open. It's also important for link sharing ("Tier 1: Existing Data | Synchronism" is more meaningful than "Synchronism | One Equation, Every Scale").
