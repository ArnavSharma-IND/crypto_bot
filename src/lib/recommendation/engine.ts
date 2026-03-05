import { PredictionResult } from "@/lib/prediction-engine";

export type Signal = "LONG" | "SHORT" | "HOLD";

export type TradeRecommendation = {
  signal: Signal;
  entryPrice: number;
  stopLoss: number;
  target1: number;
  target2: number;
  riskLevel: "Low" | "Medium" | "High";
  riskPercentage: number;
};

export function buildRecommendation(lastPrice: number, prediction: PredictionResult): TradeRecommendation {
  const signal: Signal = prediction.trend === "Bullish" ? "LONG" : prediction.trend === "Bearish" ? "SHORT" : "HOLD";
  const volatilityFactor = (100 - prediction.confidence) / 100;
  const move = Math.max(lastPrice * (0.01 + volatilityFactor * 0.02), 1);

  return {
    signal,
    entryPrice: lastPrice,
    stopLoss: signal === "LONG" ? lastPrice - move : lastPrice + move,
    target1: signal === "LONG" ? lastPrice + move * 1.2 : lastPrice - move * 1.2,
    target2: signal === "LONG" ? lastPrice + move * 2 : lastPrice - move * 2,
    riskLevel: prediction.confidence > 80 ? "Low" : prediction.confidence > 65 ? "Medium" : "High",
    riskPercentage: Number((volatilityFactor * 100).toFixed(2))
  };
}
