import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSubscribers } from "@/lib/subscribers";
import { makeUnsubscribeToken } from "@/lib/unsubscribeToken";
import { renderEmailHtml, textParagraphsToHtml } from "@/lib/emailTemplate";

export const runtime = "nodejs";

interface SendPayload {
  password: string;
  subject: string;
  message: string;
}

function isValidPayload(data: unknown): data is SendPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.password === "string" &&
    d.password.length > 0 &&
    typeof d.subject === "string" &&
    d.subject.trim().length > 0 &&
    typeof d.message === "string" &&
    d.message.trim().length > 0
  );
}

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

  if (!isValidPayload(payload)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (payload.password !== adminPassword) {
    return NextResponse.json({ ok: false, error: "wrong_password" }, { status: 401 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return NextResponse.json({ ok: false, error: "smtp_not_configured" }, { status: 500 });
  }

  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, failed: 0, total: 0 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const origin = request.nextUrl.origin;
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  let sent = 0;
  let failed = 0;

  for (const subscriber of subscribers) {
    const token = makeUnsubscribeToken(subscriber.email);
    const unsubscribeUrl = `${origin}/api/abone/cik?email=${encodeURIComponent(subscriber.email)}&token=${token}`;
    const text = `${message}\n\n---\nBu e-postayı zorayazilim.com bülten listesine kaydolduğunuz için aldınız.\nAbonelikten çıkmak için: ${unsubscribeUrl}`;
    const html = renderEmailHtml({
      heading: subject,
      bodyHtml: textParagraphsToHtml(message),
      footerNote: "Bu e-postayı zorayazilim.com bülten listesine kaydolduğunuz için aldınız.",
      unsubscribeUrl,
    });

    try {
      await transporter.sendMail({
        from: `"Zora Yazılım" <${user}>`,
        to: subscriber.email,
        subject,
        text,
        html,
      });
      sent += 1;
    } catch (error) {
      console.error(`Bülten gönderilemedi (${subscriber.email}):`, error);
      failed += 1;
    }
  }

  return NextResponse.json({ ok: true, sent, failed, total: subscribers.length });
}
