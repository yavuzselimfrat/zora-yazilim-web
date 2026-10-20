import { NextRequest, NextResponse } from "next/server";
import { recordView } from "@/lib/analytics";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const rawPath = (payload as Record<string, unknown> | null)?.path;
  if (typeof rawPath !== "string" || rawPath.length === 0) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Sorgu parametrelerini at, admin/api yollarını sayma, aşırı uzun değerleri kırp.
  const cleanPath = rawPath.split("?")[0].slice(0, 200);
  if (cleanPath.startsWith("/admin") || cleanPath.startsWith("/api")) {
    return NextResponse.json({ ok: true });
  }

  try {
    await recordView(cleanPath);
  } catch (error) {
    console.error("Görüntülenme kaydedilemedi:", error);
  }

  return NextResponse.json({ ok: true });
}
