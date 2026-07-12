export type PrayerName = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

export type PrayerTime = {
  name: PrayerName;
  display: string;
  minutes: number;
};

const PRAYER_ORDER: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const FALLBACK_RAW: Record<PrayerName, string> = {
  Fajr: "05:15",
  Dhuhr: "13:30",
  Asr: "17:45",
  Maghrib: "20:12",
  Isha: "21:45",
};

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function buildPrayerTimes(raw: Record<PrayerName, string>): PrayerTime[] {
  return PRAYER_ORDER.map((name) => {
    const clean = raw[name].split(" ")[0];
    return { name, display: formatTime(clean), minutes: toMinutes(clean) };
  });
}

export function getFallbackPrayerTimes(): PrayerTime[] {
  return buildPrayerTimes(FALLBACK_RAW);
}

export async function fetchPrayerTimes(
  latitude: number,
  longitude: number,
): Promise<PrayerTime[]> {
  const now = new Date();
  const dateStr = [
    String(now.getDate()).padStart(2, "0"),
    String(now.getMonth() + 1).padStart(2, "0"),
    now.getFullYear(),
  ].join("-");

  const res = await fetch(
    `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${latitude}&longitude=${longitude}&method=2`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Prayer times request failed");

  const json = await res.json();
  const timings = json?.data?.timings;
  if (!timings) throw new Error("Malformed prayer times response");

  return buildPrayerTimes(timings);
}

export function getCurrentPrayerName(
  prayers: PrayerTime[],
  now: Date = new Date(),
): PrayerName {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  let current: PrayerName | null = null;
  for (const prayer of prayers) {
    if (nowMinutes >= prayer.minutes) {
      current = prayer.name;
    }
  }
  // Before Fajr, the "current" prayer is still last night's Isha.
  return current ?? "Isha";
}
