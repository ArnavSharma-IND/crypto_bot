import { MarketOverview } from "@/components/dashboard/market-overview";
import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <AppShell title="Trading Command Center">
      <MarketOverview />
      <Card title="Trade Recommendation Engine">
        <ul className="space-y-2 text-sm text-white/80">
          <li>• LONG BTCUSDT | Entry 67,180 | SL 66,520 | T1 67,940 | T2 68,460 | Risk Medium</li>
          <li>• SHORT BANKNIFTY | Entry 51,980 | SL 52,430 | T1 51,320 | T2 50,940 | Risk High</li>
          <li>• HOLD ETHUSDT | Await breakout above 3,480 with volume confirmation.</li>
        </ul>
      </Card>
      <Card title="Alerts System">
        <div className="space-y-2 text-sm">
          <p>🔔 Strong buy signal on SOL (confidence 82%).</p>
          <p>⚠️ Stop-loss near trigger for NIFTY short straddle hedge.</p>
          <p>📈 Major move: BTC +2.1% in 15 minutes.</p>
        </div>
      </Card>
    </AppShell>
  );
}
