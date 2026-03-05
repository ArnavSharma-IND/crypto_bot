export type Candle = { close: number; high: number; low: number; volume: number };

const average = (values: number[]) => values.reduce((a, b) => a + b, 0) / Math.max(values.length, 1);

export function calculateRsi(prices: number[], period = 14): number {
  if (prices.length <= period) return 50;
  const changes = prices.slice(1).map((price, i) => price - prices[i]);
  const gains = changes.map((change) => (change > 0 ? change : 0));
  const losses = changes.map((change) => (change < 0 ? Math.abs(change) : 0));
  const avgGain = average(gains.slice(-period));
  const avgLoss = average(losses.slice(-period)) || 1;
  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

export function movingAverage(prices: number[], period: number): number {
  return average(prices.slice(-period));
}

export function bollingerBands(prices: number[], period = 20, stdFactor = 2) {
  const sample = prices.slice(-period);
  const ma = average(sample);
  const variance = average(sample.map((price) => (price - ma) ** 2));
  const std = Math.sqrt(variance);
  return { upper: ma + stdFactor * std, mid: ma, lower: ma - stdFactor * std };
}

export function marketSentiment(volumeTrend: number, rsi: number): number {
  let score = 0;
  if (volumeTrend > 0) score += 35;
  if (rsi > 60) score += 40;
  if (rsi < 40) score -= 30;
  return Math.min(100, Math.max(0, score + 50));
}
