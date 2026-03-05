import { askTradingAssistant } from "@/lib/ai/assistant";
import { applyRateLimit } from "@/lib/security/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "anonymous";
  if (!applyRateLimit(`chat:${ip}`)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const body = await request.json();
  const prompt = body?.prompt as string;
  const data = await askTradingAssistant(prompt ?? "Analyze BTC for next 4h");

  return NextResponse.json(data);
}
