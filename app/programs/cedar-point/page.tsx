import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Users, DollarSign } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = {
  title: "Cedar Point Trip | MYGD",
};

const DETAILS = [
  { icon: Calendar, label: "Aug 20, 2026 · 8 AM" },
  { icon: Users, label: "Ages 14+" },
  { icon: DollarSign, label: "$60 / person" },
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
                Our annual Cedar Point trip is here. Grab your crew and spend the
                day at America&apos;s roller coaster capital. Departure will take place
                at IAGD at 8 AM on August 20, 2026. Open to ages 14+ — $60 per
                person. Spots are limited, so register early.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.25} className="mx-auto mt-12 max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-gold/20 bg-navy-light">
                <Image
                  src="/cedar-point-poster.png"
                  alt="Cedar Point Trip poster"
                  fill
                  className="object-contain"
                />
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.3} className="mt-10">
              <MagneticButton
                href="https://tinyurl.com/MYGDCedarPointReg"
                variant="gold"
              >
                Register
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
