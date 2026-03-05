import { predictTrend } from "@/lib/prediction-engine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const closes = body?.closes ?? [100, 101, 103, 102, 104, 106, 107, 109, 111, 110, 112, 113, 114, 116, 118, 119, 120, 121, 123, 124, 126];
  const volumes = body?.volumes ?? [9, 10, 11, 10, 12, 11, 13, 14, 15, 14, 15, 16, 17, 16, 18, 19, 18, 20, 21, 22, 23];
  const symbol = body?.symbol ?? "BTCUSDT";

  return NextResponse.json(predictTrend(symbol, closes, volumes));
}
