import { AppShell } from "@/components/layout/app-shell";
import { FoPanel } from "@/components/market/fo-panel";

export default function FoPage() {
  return (
    <AppShell title="F&O Analysis">
      <FoPanel />
    </AppShell>
  );
}
