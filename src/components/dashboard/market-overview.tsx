import { Card } from "@/components/ui/card";

export function MarketOverview() {
  const items = [
    { label: "Prediction Accuracy", value: "78.4%" },
    { label: "Active Signals", value: "12" },
    { label: "Risk Exposure", value: "34%" },
    { label: "Alerts Today", value: "7" }
  ];

  return (
    <Card title="Market Overview">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/70">{item.label}</p>
            <p className="text-2xl font-semibold text-neon">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
