import { NextRequest, NextResponse } from "next/server";
import { removeSubscriber } from "@/lib/subscribers";
import { makeUnsubscribeToken } from "@/lib/unsubscribeToken";

export const runtime = "nodejs";

function htmlPage(title: string, message: string): string {
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>${title}</title>
<style>
  body { background:#09090b; color:#f4f4f5; font-family: system-ui, sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; padding:24px; }
  .card { max-width:420px; text-align:center; }
  h1 { font-size:1.25rem; margin-bottom:0.75rem; }
  p { color:#a1a1aa; line-height:1.6; }
  a { color:#f59e0b; }
</style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
    <p><a href="/">zorayazilim.com'a dön</a></p>
  </div>
</body>
</html>`;
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email") || "";
  const token = request.nextUrl.searchParams.get("token") || "";

  if (!email || !token) {
    return new NextResponse(htmlPage("Geçersiz bağlantı", "Bu abonelikten çıkma bağlantısı eksik bilgi içeriyor."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const expectedToken = makeUnsubscribeToken(email);
  if (!expectedToken || token !== expectedToken) {
    return new NextResponse(htmlPage("Geçersiz bağlantı", "Bu abonelikten çıkma bağlantısı geçerli değil."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  await removeSubscriber(email);

  return new NextResponse(
    htmlPage("Aboneliğiniz iptal edildi", `${email} adresi bülten listesinden çıkarıldı. Yeniden abone olmak isterseniz blog sayfamızdan tekrar kaydolabilirsiniz.`),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
