#!/bin/sh
S=/home/dp/ai-workspace/synchronism-site/explorer/scripts/a2acw_lv_rerun.py
python3 $S T1 1 & python3 $S T1 2 & python3 $S T2 1 &
python3 $S T2 2 & python3 $S T3 1 & python3 $S T3 2 &
wait
echo ALLDONE
