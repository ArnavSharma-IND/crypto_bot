import { AppShell } from "@/components/layout/app-shell";
import { CryptoTable } from "@/components/market/crypto-table";

export default function CryptoPage() {
  return (
    <AppShell title="Crypto Dashboard">
      <CryptoTable />
    </AppShell>
  );
}
