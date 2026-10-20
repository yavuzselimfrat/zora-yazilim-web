const LOGO_URL = "https://zorayazilim.com/logo-icon-v4.png";
const BRAND_ACCENT = "#b35f34";

export interface EmailTemplateOptions {
  /** Ana başlık (mail kartının içindeki H1) */
  heading: string;
  /** Hazır HTML gövde (paragraflar <p> ile sarılmış olmalı) */
  bodyHtml: string;
  /** Footer'da gösterilecek not (ör. "Bu e-posta ... için gönderildi") */
  footerNote?: string;
  /** Varsa abonelikten çıkma linki */
  unsubscribeUrl?: string;
}

export function renderEmailHtml({ heading, bodyHtml, footerNote, unsubscribeUrl }: EmailTemplateOptions): string {
  const footerLine = footerNote
    ? footerNote
    : 'Bu e-posta <a href="https://zorayazilim.com" style="color:#a1a1aa;text-decoration:underline;">zorayazilim.com</a> üzerinden otomatik olarak gönderildi.';

  const unsubscribeLine = unsubscribeUrl
    ? `<br/><a href="${unsubscribeUrl}" style="color:${BRAND_ACCENT};text-decoration:underline;">Abonelikten çık</a>`
    : "";

  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<title>Zora Yazılım</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <tr>
            <td style="padding-bottom:28px;" align="center">
              <img src="${LOGO_URL}" width="36" height="31" alt="Zora Yazılım" style="display:block;margin:0 auto;" />
              <div style="margin-top:10px;font-size:12px;font-weight:700;letter-spacing:3px;color:${BRAND_ACCENT};text-transform:uppercase;">
                Zora Yazılım
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;padding:40px 36px;border:1px solid #e4e4e7;">
              <h1 style="margin:0 0 20px 0;font-size:20px;line-height:1.4;color:#18181b;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                ${heading}
              </h1>
              <div style="font-size:15px;line-height:1.75;color:#3f3f46;">
                ${bodyHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;text-align:center;font-size:12px;color:#a1a1aa;line-height:1.7;">
              ${footerLine}${unsubscribeLine}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function textParagraphsToHtml(text: string): string {
  return text
    .split("\n")
    .map((line) => (line.trim().length === 0 ? "" : `<p style="margin:0 0 16px 0;">${escapeHtml(line)}</p>`))
    .join("");
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
