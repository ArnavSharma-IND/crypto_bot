import { ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="glass rounded-2xl p-5">
      <h3 className="mb-3 text-lg font-medium">{title}</h3>
      {children}
    </section>
  );
}
