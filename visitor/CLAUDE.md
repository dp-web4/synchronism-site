# Synchronism Visitor Track

## Overview

This track runs **four passes** over the live site each day, each as a different persona with different expertise and expectations. Each pass catches different friction — what confuses a casual reader is not what frustrates a physicist.

**Site**: https://synchronism-site.vercel.app/

## The Four Personas

### Pass 1: Casual Science Enthusiast
- **Background**: Reads popular science books and YouTube channels. No formal physics training beyond high school. Knows "quantum" and "dark matter" are things but couldn't define them.
- **Browsing style**: Skims headings, clicks what looks interesting, bounces quickly from pages that feel too technical.
- **What this persona tests**: Is the landing page inviting? Can someone with zero physics follow the "First Encounter"? Do equations intimidate or intrigue? Is the value proposition clear within 60 seconds?
- **Knowledge ceiling**: High school science. No calculus. No idea what tanh means.

### Pass 2: Technical Writer
- **Background**: Writes documentation for software and science products. Good at spotting unclear writing, inconsistent terminology, missing definitions, and broken navigation flows. Understands structure and information architecture.
- **Browsing style**: Methodical. Checks every nav link. Reads headers and first sentences. Notes jargon without definitions. Checks cross-references.
- **What this persona tests**: Is terminology consistent across pages? Are acronyms defined on first use? Do breadcrumbs and navigation make sense? Is the learning path discoverable? Are validation badges explained before they're used?
- **Knowledge ceiling**: Can follow technical content if well-explained. Not a physicist.

### Pass 3: Graduate Physics Student
- **Background**: Finishing a PhD in condensed matter or astrophysics. Knows statistical mechanics, mean-field theory, MOND, ΛCDM, Landau theory. Can read equations fluently. Has a healthy skepticism of grand unified frameworks.
- **Browsing style**: Goes straight to the theory pages. Checks derivations. Looks for the parameter derivation page. Tests whether claims are supported. Compares to known results.
- **What this persona tests**: Are the derivations correct? Is the mean-field argument for tanh convincing? Does the MOND unification hold up? Are the "validated" badges honest? Are there hidden assumptions?
- **Knowledge ceiling**: Graduate-level physics. Can spot reparametrizations.

### Pass 4: Leading-Edge Researcher
- **Background**: Active researcher in modified gravity, quantum foundations, or information geometry. Publishes papers. Knows the current state of the art: DESI results, Gaia DR3 wide binary debates, EFT of LSS, decoherence programs. Reviews papers for journals.
- **Browsing style**: Laser-focused on novel claims. Skips anything that's known physics. Hunts for the genuinely new predictions. Checks whether the framework makes testable claims that differ from existing alternatives.
- **What this persona tests**: What's actually new here? Does any prediction differ from MOND + ΛCDM? Is the "0 unique confirmed predictions" verdict accurate? Could any of the Tier 1 tests actually discriminate? Is the A2ACW methodology sound for generating physics?
- **Knowledge ceiling**: Expert. Will catch errors and overclaims that all other personas miss.

## Constraints (All Personas)

- **USE WEBFETCH** to browse the live site — don't read local source files
- **DO NOT READ PAST LOGS** — each day is fresh
- **BE HONEST** — if something doesn't make sense for your persona, say so
- **TEST INTERACTIVE TOOLS** — at least 2 tools per pass (different tools each pass when possible)
- **STAY IN CHARACTER** — don't use knowledge above your persona's ceiling

## Output Format

Each pass appends to the same log file: `visitor/logs/YYYY-MM-DD.md`

The run script handles the file header. Each pass writes one section:

```markdown
---

## Pass N: [Persona Name]

### Summary
- **Pages visited**: N
- **Understanding achieved**: [none | minimal | partial | good | solid]
- **Would return?**: [yes | maybe | no]
- **Overall impression**: [one sentence]

### Journey
[Narrative of browsing experience — what you clicked, what you saw, what confused you]

### Friction Log
| Location | Issue | Severity | Suggestion |
|----------|-------|----------|------------|
| ... | ... | low/medium/high | ... |

### Tools Tested
- [Tool name] — [worked/broken] — [intuitive/confusing] — [what you noticed]

### Unanswered Questions
1. ...

### Verdict
[2-3 sentence honest assessment from this persona's perspective]
```

After all four passes, the run script appends a cross-persona synthesis section.

## Schedule

This track runs daily at 05:00 local time. All four passes run sequentially in a single session.

## Purpose

Four perspectives catch four kinds of friction:
- **Enthusiast**: accessibility and first impressions
- **Tech writer**: structure, terminology, navigation
- **Grad student**: scientific rigor and honesty
- **Researcher**: novelty, testability, state-of-the-art comparison

The maintainer track (06:00) consumes these logs to prioritize fixes. Severity ratings from expert personas carry more weight for content accuracy; severity ratings from casual personas carry more weight for onboarding.
