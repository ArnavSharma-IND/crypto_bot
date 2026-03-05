import { buildRecommendation } from "@/lib/recommendation/engine";
import { predictTrend } from "@/lib/prediction-engine";

export type AssistantResponse = {
  answer: string;
  prediction: ReturnType<typeof predictTrend>;
  recommendation: ReturnType<typeof buildRecommendation>;
};

export async function askTradingAssistant(prompt: string): Promise<AssistantResponse> {
  const mockCloses = [101, 103, 102, 105, 108, 109, 111, 112, 114, 113, 116, 118, 117, 120, 122, 121, 124, 126, 127, 128, 130];
  const mockVolumes = [10, 11, 10, 12, 14, 13, 15, 13, 16, 15, 17, 18, 16, 18, 19, 18, 20, 21, 22, 24, 23];
  const prediction = predictTrend("ASSET", mockCloses, mockVolumes);
  const recommendation = buildRecommendation(mockCloses.at(-1) ?? 130, prediction);

  const answer = [
    `Query: "${prompt}"`,
    `Trend: ${prediction.trend} (${prediction.confidence}% confidence).`,
    `Signal: ${recommendation.signal} at ${recommendation.entryPrice.toFixed(2)} with stop loss ${recommendation.stopLoss.toFixed(2)}.`,
    `Targets: ${recommendation.target1.toFixed(2)} / ${recommendation.target2.toFixed(2)}. Risk budget ~${recommendation.riskPercentage}%.`
  ].join(" ");

  return { answer, prediction, recommendation };
}
