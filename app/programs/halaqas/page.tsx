import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = {
  title: "The Mannered Heart Series — MYGD",
};

const SCHEDULE = [
  { icon: Calendar, label: "Thursdays" },
  { icon: Clock, label: "8:00 – 9:00 PM" },
  { icon: MapPin, label: "IAGD" },
];

export default function HalaqasPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 pt-36 pb-20 md:px-10">
          <div className="absolute inset-0">
            <Image
              src="/halaqah2.jpg"
              alt=""
              fill
              className="object-cover opacity-25 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Weekly Halaqas"
              title="The Mannered Heart Series"
              subtitle="A weekly circle building character and knowledge together — every Thursday night at IAGD."
              align="center"
              light
            />

            <Reveal
              variant="up"
              delay={0.1}
              className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-3"
            >
              {SCHEDULE.map((item) => (
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
                The Mannered Heart Series is our weekly halaqa — a space to
                slow down, reflect, and grow together in character and
                understanding. Open to all brothers, no registration needed —
                just show up.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.3} className="mt-10">
              <MagneticButton href="/connect" variant="gold">
                Get in Touch
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
