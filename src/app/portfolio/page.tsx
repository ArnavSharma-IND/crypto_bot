import { AppShell } from "@/components/layout/app-shell";
import { PortfolioTracker } from "@/components/portfolio/tracker";

export default function PortfolioPage() {
  return (
    <AppShell title="Portfolio Performance">
      <PortfolioTracker />
    </AppShell>
  );
}
