import { Card } from "@/components/ui/card";

export function PortfolioTracker() {
  const trades = [
    { asset: "BTC", entry: 64400, qty: 0.5, pnl: 1400 },
    { asset: "ETH", entry: 3230, qty: 3, pnl: -240 },
    { asset: "NIFTY FUT", entry: 24750, qty: 50, pnl: 3100 }
  ];

  const wins = trades.filter((trade) => trade.pnl > 0).length;
  const winRate = ((wins / trades.length) * 100).toFixed(1);

  return (
    <Card title="Portfolio Tracker">
      <div className="space-y-2 text-sm">
        {trades.map((trade) => (
          <div key={trade.asset} className="flex items-center justify-between rounded-xl border border-white/10 p-3">
            <span>{trade.asset}</span>
            <span>Entry {trade.entry}</span>
            <span>Qty {trade.qty}</span>
            <span className={trade.pnl >= 0 ? "text-success" : "text-danger"}>P/L {trade.pnl}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-white/80">Win rate: {winRate}%</p>
    </Card>
  );
}
