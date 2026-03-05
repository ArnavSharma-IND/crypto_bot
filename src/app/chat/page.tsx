import { ChatPanel } from "@/components/chat/chat-panel";
import { AppShell } from "@/components/layout/app-shell";

export default function ChatPage() {
  return (
    <AppShell title="AI Trading Assistant">
      <ChatPanel />
    </AppShell>
  );
}
