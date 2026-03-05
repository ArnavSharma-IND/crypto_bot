import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/chat", label: "AI Chat" },
  { href: "/crypto", label: "Crypto Market" },
  { href: "/fo", label: "F&O Analysis" },
  { href: "/portfolio", label: "Portfolio" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-20">
      <section className="glass mx-auto max-w-5xl rounded-3xl p-8">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neon">QuantPilot</p>
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">AI-Powered Trading Intelligence for Crypto & F&O</h1>
        <p className="max-w-2xl text-white/80">
          Real-time analytics, AI chat recommendations, portfolio risk controls, and market prediction engines in one
          deploy-ready full-stack platform.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-neon/50 px-4 py-2 hover:bg-neon/20">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
