export type MarketTicker = {
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
};

export async function getCryptoTickers(): Promise<MarketTicker[]> {
  const fallback = [
    ["BTC", 67212, 2.4, 38400000000],
    ["ETH", 3410, 1.8, 19600000000],
    ["SOL", 152, -0.8, 2800000000]
  ];

  const top = Array.from({ length: 20 }).map((_, idx) => {
    const [sym, p, c, v] = fallback[idx] ?? [`COIN${idx + 1}`, 10 + idx, (idx % 6) - 2, 1000000 * (idx + 4)];
    return { symbol: sym, price: p, change24h: c, volume: v };
  });

  return top;
}

export async function getFoInstruments() {
  return [
    { symbol: "NIFTY", pcr: 1.08, support: 24650, resistance: 24920, oiChange: 2.3 },
    { symbol: "BANKNIFTY", pcr: 0.98, support: 51540, resistance: 52280, oiChange: -1.1 },
    { symbol: "RELIANCE", pcr: 1.12, support: 2920, resistance: 2995, oiChange: 1.5 }
  ];
}
