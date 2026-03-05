import { getFoInstruments } from "@/lib/data/providers";

export async function FoPanel() {
  const data = await getFoInstruments();

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {data.map((item) => (
        <article key={item.symbol} className="glass rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-neon">{item.symbol}</h3>
          <p className="text-sm text-white/70">PCR: {item.pcr}</p>
          <p className="text-sm text-white/70">Support: {item.support}</p>
          <p className="text-sm text-white/70">Resistance: {item.resistance}</p>
          <p className={`text-sm ${item.oiChange >= 0 ? "text-success" : "text-danger"}`}>OI Change: {item.oiChange}%</p>
        </article>
      ))}
    </div>
  );
}
