import { NextRequest, NextResponse } from "next/server";
import { getStats, summarize } from "@/lib/analytics";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const adminPassword = process.env.BULTEN_ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const password = (payload as Record<string, unknown> | null)?.password;
  if (typeof password !== "string" || password !== adminPassword) {
    return NextResponse.json({ ok: false, error: "wrong_password" }, { status: 401 });
  }

  const data = await getStats();
  const summary = summarize(data);

  return NextResponse.json({ ok: true, summary });
}
