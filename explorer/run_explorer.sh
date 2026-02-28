#!/bin/bash
# Synchronism Site — Explorer Track
# Schedule: 08:00 daily (2 hours after visitor, after maintainer has seeded topics)

set -e

# Ensure claude is in PATH (cron doesn't inherit user profile)
export PATH="$HOME/.local/bin:$PATH"

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

# Launch explorer session
claude --dangerously-skip-permissions << EOF >> "$LOG_FILE" 2>&1
# Synchronism Site — Explorer Session ($DATE)

You are running an automated explorer session. Your instructions are in CLAUDE.md.

## Today's Context

$TOPIC_CONTEXT
$VISITOR_CONTEXT

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
