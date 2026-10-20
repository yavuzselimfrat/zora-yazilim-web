import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "analytics.json");

// date (YYYY-MM-DD) -> sayfa yolu -> görüntülenme sayısı
export type AnalyticsData = Record<string, Record<string, number>>;

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "{}", "utf-8");
  }
}

export async function getStats(): Promise<AnalyticsData> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export async function recordView(pagePath: string): Promise<void> {
  await ensureFile();
  const data = await getStats();
  const today = new Date().toISOString().slice(0, 10);
  if (!data[today]) data[today] = {};
  data[today][pagePath] = (data[today][pagePath] ?? 0) + 1;
  await fs.writeFile(DATA_FILE, JSON.stringify(data), "utf-8");
}

export interface AnalyticsSummary {
  today: number;
  last7Days: number;
  last30Days: number;
  allTime: number;
  topPages: { path: string; count: number }[];
}

export function summarize(data: AnalyticsData): AnalyticsSummary {
  const dates = Object.keys(data).sort();
  const todayStr = new Date().toISOString().slice(0, 10);

  const dayTotal = (d: string) => Object.values(data[d] ?? {}).reduce((a, b) => a + b, 0);

  const last7Cutoff = new Date();
  last7Cutoff.setDate(last7Cutoff.getDate() - 6);
  const last30Cutoff = new Date();
  last30Cutoff.setDate(last30Cutoff.getDate() - 29);

  let today = 0;
  let last7Days = 0;
  let last30Days = 0;
  let allTime = 0;
  const pageTotals: Record<string, number> = {};

  for (const d of dates) {
    const total = dayTotal(d);
    allTime += total;
    if (d === todayStr) today += total;
    if (new Date(d) >= last7Cutoff) last7Days += total;
    if (new Date(d) >= last30Cutoff) last30Days += total;

    for (const [p, c] of Object.entries(data[d] ?? {})) {
      pageTotals[p] = (pageTotals[p] ?? 0) + c;
    }
  }

  const topPages = Object.entries(pageTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([p, c]) => ({ path: p, count: c }));

  return { today, last7Days, last30Days, allTime, topPages };
}
