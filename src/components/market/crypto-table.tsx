import { getCryptoTickers } from "@/lib/data/providers";

export async function CryptoTable() {
  const data = await getCryptoTickers();

  return (
    <div className="glass overflow-hidden rounded-2xl">
      <table className="w-full text-sm">
        <thead className="bg-white/5 text-left text-white/70">
          <tr>
            <th className="p-3">Asset</th>
            <th className="p-3">Price</th>
            <th className="p-3">24h</th>
            <th className="p-3">Volume</th>
            <th className="p-3">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.symbol} className="border-t border-white/5">
              <td className="p-3">{row.symbol}</td>
              <td className="p-3">${row.price.toLocaleString()}</td>
              <td className={`p-3 ${row.change24h >= 0 ? "text-success" : "text-danger"}`}>{row.change24h}%</td>
              <td className="p-3">${row.volume.toLocaleString()}</td>
              <td className="p-3">{row.change24h > 1 ? "Bullish" : row.change24h < -1 ? "Bearish" : "Sideways"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
