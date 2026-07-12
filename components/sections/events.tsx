"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { EVENT_TYPES } from "@/lib/content";

export function Events() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="events" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionLabel
        eyebrow="Get Involved"
        title="Past & Upcoming Events"
        subtitle="From bonfires to Friendsgiving dinners — we've built memories, and there's plenty more ahead."
      />

      <Reveal
        variant="up"
        className="relative mt-12 overflow-hidden rounded-[24px] border border-gold/15 bg-gradient-to-br from-navy to-navy-light p-8 text-white sm:p-10 md:p-14"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-gold/[0.08]" />
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1.3fr]">
          <div>
            <h3 className="mb-4 font-display text-[1.9rem] font-black uppercase leading-tight tracking-[-1px]">
              Don&apos;t Miss What&apos;s{" "}
              <span className="text-gold">Coming Next.</span>
            </h3>
            <p className="mb-7 leading-[1.75] text-white/60">
              Our events bring the community together for fellowship, fun,
              and faith — whether it&apos;s a cozy bonfire, a Sisters&apos;
              Friendsgiving, or a late-night qiyam, there&apos;s always
              something for you.
            </p>
            <MagneticButton href="#contact" variant="gold">
              Stay Updated <ArrowRight size={16} />
            </MagneticButton>
          </div>

          <div
            ref={trackRef}
            className="-mx-2 cursor-grab overflow-hidden px-2 active:cursor-grabbing"
          >
            <motion.div
              drag="x"
              dragConstraints={trackRef}
              dragElastic={0.12}
              className="flex gap-4"
            >
              {EVENT_TYPES.map((event) => (
                <div
                  key={event.id}
                  className="w-[180px] flex-shrink-0 select-none rounded-[14px] border border-gold/10 bg-white/5 p-5 transition-colors hover:border-gold/25 hover:bg-gold/[0.08]"
                >
                  <event.icon size={22} className="mb-3 text-gold" />
                  <div className="mb-1 font-display text-[0.85rem] font-bold uppercase text-white">
                    {event.name}
                  </div>
                  <div className="text-[0.75rem] text-white/55">
                    {event.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
