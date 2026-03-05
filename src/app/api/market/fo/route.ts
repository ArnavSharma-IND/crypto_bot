import { getFoInstruments } from "@/lib/data/providers";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getFoInstruments();
  return NextResponse.json({ data, provider: "Yahoo Finance / NSE feeds (pluggable)" });
}
