#!/bin/bash
# Synchronism Site — Explorer Track
# Schedule: 08:00 daily (2 hours after visitor, after maintainer has seeded topics)

set -e

# Ensure claude is in PATH (cron doesn't inherit user profile)
export PATH="$HOME/.local/bin:$PATH"

# Account routing: synth token for working sessions
ENV_FILE="/mnt/c/exe/projects/ai-agents/.env"
if [ -f "$ENV_FILE" ]; then
    CLAUDE_SYNTH_TOKEN=$(grep '^CLAUDE_SYNTH_TOKEN=' "$ENV_FILE" | cut -d= -f2-)
fi
if [ -n "$CLAUDE_SYNTH_TOKEN" ] && [[ "$CLAUDE_SYNTH_TOKEN" != PLACEHOLDER* ]]; then
    export CLAUDE_CODE_OAUTH_TOKEN="$CLAUDE_SYNTH_TOKEN"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H%M)
LOG_FILE="$SCRIPT_DIR/logs/$DATE-$TIME.log"

# Ensure directories exist
mkdir -p "$SCRIPT_DIR/logs"
mkdir -p "$SCRIPT_DIR/topics/done"
mkdir -p "$SCRIPT_DIR/findings"

echo "Starting Synchronism Explorer Session at $(date)" | tee "$LOG_FILE"

cd "$SCRIPT_DIR"

# Hardbound session governance
source /mnt/c/exe/projects/ai-agents/hardbound/scripts/hardbound_session_start.sh "$PROJECT_DIR" "cbp-claude" 2>/dev/null || true

# GitNexus graph maintenance — ensure index is fresh before session
source /mnt/c/exe/projects/ai-agents/scripts/gitnexus-maintain.sh 2>/dev/null || true
gitnexus_ensure_fresh "$PROJECT_DIR" 2>>"$LOG_FILE" || true
# Also ensure the research repo graph is fresh (explorer reads it)
gitnexus_ensure_fresh "/mnt/c/exe/projects/ai-agents/Synchronism" 2>>"$LOG_FILE" || true

# List available topics
TOPICS=$(find "$SCRIPT_DIR/topics" -maxdepth 1 -name "*.md" -type f 2>/dev/null)
TOPIC_CONTEXT=""
if [ -n "$TOPICS" ]; then
    TOPIC_LIST=$(basename -a $TOPICS | tr '\n' ', ')
    TOPIC_CONTEXT="Topics in queue: $TOPIC_LIST — pick one that interests you, or follow your own curiosity."
else
    TOPIC_CONTEXT="No topics in queue. Self-direct: browse the site, explore the research archive, follow your curiosity."
fi

# Check for recent visitor context
VISITOR_LOG="$PROJECT_DIR/visitor/logs/$DATE.md"
VISITOR_CONTEXT=""
if [ -f "$VISITOR_LOG" ]; then
    VISITOR_CONTEXT="Today's visitor log is at ../visitor/logs/$DATE.md — read it for context on what confused a naive visitor."
fi

# Check NotebookLM availability
NOTEBOOKLM_STATUS=""
if command -v notebooklm &>/dev/null && notebooklm auth check &>/dev/null 2>&1; then
    NOTEBOOKLM_STATUS="NotebookLM is available. Run './notebooklm_research.sh status' to see the Synchronism notebook and its sources. Use it for topics requiring multi-source synthesis."
else
    NOTEBOOKLM_STATUS="NotebookLM not authenticated this session — skip it, use WebFetch/WebSearch instead."
fi

# Launch explorer session
claude --dangerously-skip-permissions << EOF >> "$LOG_FILE" 2>&1
# Synchronism Site — Explorer Session ($DATE)

You are running an automated explorer session. Your instructions are in CLAUDE.md.

## Today's Context

$TOPIC_CONTEXT
$VISITOR_CONTEXT

## Tools Available

$NOTEBOOKLM_STATUS

## Your Task

Follow the workflow in CLAUDE.md:
1. Check the topic queue (or self-direct)
2. Research freely — WebFetch the live site, search for papers, read the research archive
3. Write findings to findings/ as structured markdown
4. Archive completed topics to topics/done/
5. Write your session log to logs/$DATE.md

Go deep. Follow the thread. Document what you find.
EOF

echo "Explorer session complete. Log: $LOG_FILE"

# Hardbound session end
source /mnt/c/exe/projects/ai-agents/hardbound/scripts/hardbound_session_end.sh "$PROJECT_DIR" "cbp-claude" "explorer research session" "success" 2>/dev/null || true

# Commit and push results
cd "$PROJECT_DIR"
git add explorer/logs/ explorer/findings/ explorer/topics/done/ 2>/dev/null || true
if ! git diff --cached --quiet 2>/dev/null; then
    git commit -m "explorer: session $DATE" 2>/dev/null || true
    PAT=$(grep GITHUB_PAT /mnt/c/exe/projects/ai-agents/.env 2>/dev/null | cut -d= -f2)
    if [ -n "$PAT" ]; then
        git push "https://dp-web4:${PAT}@github.com/dp-web4/synchronism-site.git" 2>/dev/null || true
    fi
fi
