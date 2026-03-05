import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell title="Settings & Security">
      <Card title="Authentication">
        <p className="text-sm text-white/80">Email/password and Google OAuth supported through NextAuth providers.</p>
      </Card>
      <Card title="API & Rate Limits">
        <p className="text-sm text-white/80">Server-side API key protection enabled via env vars. Chat endpoint protected with in-memory rate limiting middleware.</p>
      </Card>
    </AppShell>
  );
}
