import { buildRecommendation } from "@/lib/recommendation/engine";
import { predictTrend } from "@/lib/prediction-engine";
import { NextResponse } from "next/server";

export async function GET() {
  const closes = [101, 102, 103, 102, 104, 106, 107, 108, 110, 111, 112, 111, 113, 114, 116, 117, 118, 119, 121, 122, 123];
  const volumes = [10, 11, 10, 12, 13, 13, 14, 15, 16, 16, 17, 16, 18, 19, 19, 20, 20, 22, 23, 24, 24];
  const prediction = predictTrend("BTCUSDT", closes, volumes);

  return NextResponse.json(buildRecommendation(closes.at(-1) ?? 123, prediction));
}
