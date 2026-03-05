import { bollingerBands, calculateRsi, marketSentiment, movingAverage } from "@/lib/indicators/analysis";

export type Trend = "Bullish" | "Bearish" | "Sideways";

export type PredictionResult = {
  trend: Trend;
  confidence: number;
  rationale: string[];
};

export function predictTrend(symbol: string, closes: number[], volumes: number[]): PredictionResult {
  const rsi = calculateRsi(closes);
  const maFast = movingAverage(closes, 9);
  const maSlow = movingAverage(closes, 21);
  const bands = bollingerBands(closes);
  const volumeTrend = volumes.at(-1)! - movingAverage(volumes, Math.min(10, volumes.length));
  const sentiment = marketSentiment(volumeTrend, rsi);

  const rationale = [
    `${symbol}: RSI at ${rsi.toFixed(2)} indicates ${rsi > 60 ? "momentum strength" : rsi < 40 ? "possible weakness" : "neutral pressure"}.`,
    `MA crossover (${maFast.toFixed(2)} vs ${maSlow.toFixed(2)}) suggests ${maFast > maSlow ? "uptrend" : "downtrend"}.`,
    `Price regime around Bollinger mid (${bands.mid.toFixed(2)}) supports volatility-aware positioning.`
  ];

  let trend: Trend = "Sideways";
  if (maFast > maSlow && rsi >= 55) trend = "Bullish";
  else if (maFast < maSlow && rsi <= 45) trend = "Bearish";

  const confidence = Math.round(Math.min(92, Math.max(51, Math.abs(maFast - maSlow) * 2 + sentiment / 2)));

  return { trend, confidence, rationale };
}
