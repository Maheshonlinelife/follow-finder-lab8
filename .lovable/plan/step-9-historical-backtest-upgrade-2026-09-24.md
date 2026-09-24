# Step 9 Historical Backtest Upgrade

## Scope
- Keep the complete existing tool unchanged outside Step 9.
- Add a historical backtest inside Step 9 for FOLLOW, WATCH, and WAIT decisions.
- Update the downloadable standalone HTML to the next version.

## What will be added
- Replay historical spins without future leakage: each decision uses only data available before that trigger.
- Compare results separately for Smart Mix, Recent 50, Recent 100, and All Data.
- Show decision count, qualified sample size, hit rate within the selected follow window, and maximum drawdown.
- Break out FOLLOW, WATCH, and WAIT so users can judge whether following qualified rules outperformed weaker or absent signals.
- Add compact guidance indicating which data mode currently has the strongest validated FOLLOW record and when evidence is insufficient.

## Technical details
- Reuse Step 9’s existing mining thresholds, follow window, old/new status rules, and minimum-sample setting.
- Record one decision per historical trigger and settle it against only the later spins in its allowed window.
- Calculate maximum drawdown as the longest cumulative losing-unit decline using a flat one-unit decision model; display the definition beside the result.
- Keep calculations derived in memory from the loaded spin history with no new storage or changes to spin entry, predictions, bankroll, or other steps.

## Verification
- Run the tool with representative spin history and confirm all four data modes render valid backtest rows.
- Check Step 9 controls and live guidance still work.
- Confirm the app has no runtime or build errors and the downloadable HTML exactly matches the served standalone tool.
