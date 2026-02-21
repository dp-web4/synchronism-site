# Visitor Track — Naive UX Feedback Loop

This directory contains the **Visitor Track** — an autonomous daily session that browses the Synchronism site as a first-time human visitor with no prior Synchronism knowledge.

## Why This Exists

The Synchronism site was built by entities deeply immersed in coherence physics, γ parameters, and MRH concepts. This creates a blind spot: we can't see where the onboarding fails because we already understand everything.

The Visitor Track exploits a useful property of Claude sessions: **each new session is genuinely naive**. By running a daily "visitor" session that approaches the site fresh, we get authentic friction feedback.

## How It Works

```
05:00 daily
    ↓
Visitor Track launches
    ↓
Browses https://synchronism-site.vercel.app/
    ↓
Navigates as naive human would
    ↓
Tests interactive tools (sliders, calculators, plotters)
    ↓
Generates browse log in visitor/logs/YYYY-MM-DD.md
    ↓
Dev track reads logs
    ↓
Improves site based on friction points
```

## Directory Structure

```
visitor/
├── CLAUDE.md           # Track instructions (naive visitor persona)
├── README.md           # This file
├── run_visitor.sh      # 05:00 cron runner
└── logs/
    ├── 2026-02-21.md   # Daily browse logs
    └── ...
```

## Using the Logs

The development track should:

1. Read recent visitor logs before making UX changes
2. Prioritize fixing high-severity friction points
3. Track whether fixes actually improve visitor understanding
4. Never assume "they'll figure it out" — if the visitor didn't, real humans won't

## The Key Insight

> The visitor is not here to be helpful. The visitor is here to be confused — authentically.

This is not a bug, it's the feature. Authentic confusion reveals authentic UX problems.
