import { getCryptoTickers } from "@/lib/data/providers";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getCryptoTickers();
  return NextResponse.json({ data, provider: "CoinGecko/Binance (pluggable)" });
}
