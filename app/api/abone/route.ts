import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addSubscriber } from "@/lib/subscribers";
import { renderEmailHtml, escapeHtml } from "@/lib/emailTemplate";

export const runtime = "nodejs";

function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed.length === 0) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (payload as Record<string, unknown> | null)?.email;

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    await addSubscriber(email);
  } catch (error) {
    console.error("Abone listesine kaydedilemedi:", error);
    return NextResponse.json({ ok: false, error: "save_failed" }, { status: 500 });
  }

  // Abone zaten listeye kaydedildi; bildirim e-postası en iyi çaba (best-effort) —
  // başarısız olsa bile kullanıcıya hata göstermiyoruz çünkü asıl kayıt tamamlandı.
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (host && user && pass && to) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    try {
      await transporter.sendMail({
        from: `"Zora Yazılım Web Sitesi" <${user}>`,
        to,
        replyTo: email,
        subject: "Yeni Bülten Aboneliği",
        text: `Blog sayfasından yeni bir bülten aboneliği geldi.\n\nE-posta: ${email}`,
        html: renderEmailHtml({
          heading: "Yeni Bülten Aboneliği",
          bodyHtml: `<p style="margin:0;">Blog sayfasından yeni bir bülten aboneliği geldi.</p><p style="margin:16px 0 0 0;"><strong>E-posta:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#b35f34;">${escapeHtml(email)}</a></p>`,
          footerNote: "Bu e-posta zorayazilim.com blog sayfasından gönderildi.",
        }),
      });
    } catch (error) {
      console.error("Bülten aboneliği bildirimi gönderilemedi:", error);
    }
  } else {
    console.error("Bülten aboneliği: SMTP ortam değişkenleri eksik, bildirim atlanıyor.");
  }

  return NextResponse.json({ ok: true });
}
