import Link from "next/link";
import { ReactNode } from "react";

const items = [
  ["/dashboard", "Dashboard"],
  ["/chat", "AI Chat"],
  ["/crypto", "Crypto"],
  ["/fo", "F&O"],
  ["/portfolio", "Portfolio"],
  ["/settings", "Settings"]
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-6 lg:px-10">
      <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
        <aside className="glass rounded-2xl p-5">
          <h2 className="mb-4 text-xl font-semibold text-neon">QuantPilot</h2>
          <nav className="space-y-2 text-sm">
            {items.map(([href, label]) => (
              <Link key={href} href={href} className="block rounded-md px-3 py-2 hover:bg-white/10">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="space-y-4">
          <header className="glass rounded-2xl p-5">
            <h1 className="text-2xl font-semibold">{title}</h1>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
