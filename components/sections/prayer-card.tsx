"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MASJID } from "@/lib/content";
import {
  fetchPrayerTimes,
  getCurrentPrayerName,
  getFallbackPrayerTimes,
  type PrayerTime,
} from "@/lib/prayer-times";

export function PrayerCard() {
  const [prayers, setPrayers] = useState<PrayerTime[] | null>(null);
  const [isFallback, setIsFallback] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Deliberately client-only: `now` starts null so server and first client
    // paint match, then fills in after mount to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetchPrayerTimes(MASJID.latitude, MASJID.longitude)
      .then((times) => {
        if (!cancelled) setPrayers(times);
      })
      .catch(() => {
        if (!cancelled) {
          setPrayers(getFallbackPrayerTimes());
          setIsFallback(true);
        }
      });

    const tick = setInterval(() => setNow(new Date()), 60_000);

    return () => {
      cancelled = true;
      clearInterval(tick);
    };
  }, []);

  const currentPrayer =
    prayers && now ? getCurrentPrayerName(prayers, now) : null;

  const todayLabel = (now ?? new Date()).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-[20px] border border-gold/15 bg-white/5 p-8 text-white backdrop-blur-md">
      <div className="mb-7 flex items-center justify-between gap-3">
        <h3 className="font-display text-[1rem] font-extrabold uppercase tracking-wide">
          Today&apos;s Prayer Times
        </h3>
        <span className="text-right text-[0.72rem] font-medium text-gold-light">
          {MASJID.name} · Rochester Hills
        </span>
      </div>

      <div className="mb-1 text-[0.7rem] font-medium uppercase tracking-wider text-white/35">
        {todayLabel}
      </div>

      <div className="min-h-[220px]">
        {prayers ? (
          <ul>
            <AnimatePresence>
              {prayers.map((prayer) => {
                const active = prayer.name === currentPrayer;
                return (
                  <motion.li
                    key={prayer.name}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mb-1 flex items-center justify-between rounded-[10px] px-3.5 py-2.5 transition-colors duration-300 ${
                      active
                        ? "border border-gold/25 bg-gold-dim"
                        : "border border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[0.9rem] font-semibold">
                      {prayer.name}
                    </span>
                    <span
                      className={`text-[0.9rem] tabular-nums ${
                        active
                          ? "font-bold text-gold-light"
                          : "text-white/55"
                      }`}
                    >
                      {prayer.display}
                    </span>
                  </motion.li>
                );
              })}
            </AnimatePresence>
            <li className="mt-2 rounded-[10px] border border-gold/25 bg-gold-dim px-3.5 py-2.5">
              <div className="mb-1 text-[0.7rem] font-bold uppercase tracking-wider text-gold-light">
                Jummah
              </div>
              {[
                { label: "1st Jummah", time: "2:00 PM" },
                { label: "2nd Jummah", time: "3:00 PM" },
                { label: "3rd Jummah", time: "4:00 PM" },
              ].map((j) => (
                <div
                  key={j.label}
                  className="flex items-center justify-between py-0.5"
                >
                  <span className="text-[0.9rem] font-semibold text-white/80">
                    {j.label}
                  </span>
                  <span className="text-[0.9rem] font-medium tabular-nums text-white/70">
                    {j.time}
                  </span>
                </div>
              ))}
            </li>
          </ul>
        ) : (
          <ul className="animate-pulse">
            {Array.from({ length: 5 }).map((_, i) => (
              <li
                key={i}
                className="mb-1 flex items-center justify-between rounded-[10px] px-3.5 py-2.5"
              >
                <span className="h-3 w-14 rounded bg-white/10" />
                <span className="h-3 w-16 rounded bg-white/10" />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 border-t border-white/10 pt-4 text-center text-[0.75rem] text-white/35">
        {isFallback ? "Reference schedule · " : "Live · ISNA calculation · "}
        {MASJID.address}
      </div>
    </div>
  );
}
