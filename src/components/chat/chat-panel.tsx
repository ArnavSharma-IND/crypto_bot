"use client";

import { FormEvent, useState } from "react";

export function ChatPanel() {
  const [prompt, setPrompt] = useState("Should I buy BTC now?");
  const [response, setResponse] = useState("Ask the assistant for live strategy guidance.");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.answer ?? data.error);
  };

  return (
    <div className="glass rounded-2xl p-5">
      <form className="space-y-4" onSubmit={submit}>
        <label className="block text-sm text-white/70">Ask QuantPilot AI</label>
        <textarea
          className="h-28 w-full rounded-xl border border-white/20 bg-black/30 p-3"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button className="rounded-full bg-neon px-5 py-2 font-medium text-black">Analyze</button>
      </form>
      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/90">{response}</div>
    </div>
  );
}
