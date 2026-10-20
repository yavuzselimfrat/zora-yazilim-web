import crypto from "crypto";

/**
 * Deterministic unsubscribe token for an email address.
 * Keyed on BULTEN_ADMIN_PASSWORD so we don't need a separate stored
 * secret or per-subscriber token in the data file.
 */
export function makeUnsubscribeToken(email: string): string {
  const secret = process.env.BULTEN_ADMIN_PASSWORD || "";
  return crypto
    .createHmac("sha256", secret)
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 24);
}
