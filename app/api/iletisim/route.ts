import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  summary: string;
  service?: string;
  budget?: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    d.email.trim().length > 0 &&
    typeof d.summary === "string" &&
    d.summary.trim().length > 0
  );
}

const SERVICE_LABELS: Record<string, string> = {
  ai: "Yapay Zeka Sistemleri",
  web: "Web Platformu",
  backend: "Backend & Altyapı",
  other: "Diğer / Danışmanlık",
};

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const { name, email, summary, service, budget } = payload;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!host || !user || !pass || !to) {
    console.error("İletişim formu: SMTP ortam değişkenleri eksik.");
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const serviceLabel = service ? SERVICE_LABELS[service] ?? service : "Belirtilmedi";
  const budgetLabel = budget && budget.trim().length > 0 ? budget : "Belirtilmedi";

  const text = `Yeni bir teklif talebi geldi.

Ad Soyad: ${name}
E-posta: ${email}
Hizmet: ${serviceLabel}
Bütçe: ${budgetLabel}

Proje özeti:
${summary}`;

  try {
    await transporter.sendMail({
      from: `"Zora Yazılım Web Sitesi" <${user}>`,
      to,
      replyTo: email,
      subject: `Yeni Teklif Talebi — ${name}`,
      text,
    });
  } catch (error) {
    console.error("İletişim formu e-postası gönderilemedi:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
