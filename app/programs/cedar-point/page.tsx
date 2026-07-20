import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = {
  title: "Cedar Point Trip | MYGD",
};

const DETAILS = [
  { icon: Calendar, label: "August 2026" },
  { icon: MapPin, label: "Cedar Point, Sandusky OH" },
  { icon: Users, label: "All ages welcome" },
];

export default function CedarPointPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 pt-36 pb-20 md:px-10">
          <div className="absolute inset-0">
            <Image
              src="/cedar-point.jpg"
              alt=""
              fill
              className="object-cover opacity-25 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Annual Trip"
              title="Cedar Point Trip"
              subtitle="A full day of rides, good company, and great memories with the MYGD community."
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
                Our annual Cedar Point trip is coming this August. Grab your
                crew, hop on the bus, and spend the day at America's roller
                coaster capital. More details on pricing, registration, and exact
                date coming soon. Stay tuned on our Instagram and WhatsApp.
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
