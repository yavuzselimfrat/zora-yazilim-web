import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "subscribers.json");

export interface Subscriber {
  email: string;
  subscribedAt: string;
}

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

export async function getSubscribers(): Promise<Subscriber[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function addSubscriber(email: string): Promise<boolean> {
  const list = await getSubscribers();
  const normalized = email.trim().toLowerCase();
  if (list.some((s) => s.email.toLowerCase() === normalized)) {
    return false;
  }
  list.push({ email: normalized, subscribedAt: new Date().toISOString() });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  return true;
}

export async function removeSubscriber(email: string): Promise<boolean> {
  const list = await getSubscribers();
  const normalized = email.trim().toLowerCase();
  const next = list.filter((s) => s.email.toLowerCase() !== normalized);
  if (next.length === list.length) return false;
  await fs.writeFile(DATA_FILE, JSON.stringify(next, null, 2), "utf-8");
  return true;
}
