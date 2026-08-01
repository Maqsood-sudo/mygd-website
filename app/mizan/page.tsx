import type { Metadata } from "next";
import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = { title: "Mizan BBQ | MYGD" };

const DETAILS = [
  { icon: Calendar, label: "Aug 23, 2026" },
  { icon: Clock, label: "3:00 PM – 11:00 PM EDT" },
  { icon: MapPin, label: "1810 W Square Lake Rd, Troy, MI" },
  { icon: DollarSign, label: "$5 early bird · $10 general" },
];

export default function MizanPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-light px-6 pt-36 pb-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Mizan"
              title="Mizan BBQ"
              subtitle="Great food, good vibes, and meaningful connections with the Mizan community."
              align="center"
              light
            />

            <Reveal
              variant="up"
              delay={0.1}
              className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-3"
            >
              {DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-dim px-4 py-2 text-[0.82rem] font-semibold text-gold-light"
                >
                  <item.icon size={15} />
                  {item.label}
                </div>
              ))}
            </Reveal>

            <Reveal variant="up" delay={0.2} className="mx-auto mt-10 max-w-xl">
              <p className="leading-relaxed text-white/60">
                Join us for an evening of great food, good vibes, and meaningful
                connections with the Mizan community. Come enjoy a delicious BBQ,
                meet new people, reconnect with friends, and spend quality time
                with fellow Muslim young professionals.
              </p>
              <p className="mt-4 leading-relaxed text-white/60">
                Bring your friends and come hungry — we look forward to seeing you
                there, insha&apos;Allah!
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.3} className="mt-12">
              <MagneticButton
                href="https://www.zeffy.com/en-US/ticketing/mizan-bbq"
                variant="gold"
              >
                Get Tickets
              </MagneticButton>
              <p className="mt-4 text-[0.78rem] text-white/40">
                Early bird tickets ($5) available until Aug 15.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
