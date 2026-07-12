import Image from "next/image";
import { Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { PILLARS } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal variant="scale" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-gradient-to-br from-navy to-navy-light">
            <Image
              src="/iagd.jpg"
              alt="Inside the IAGD prayer hall"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 flex items-center gap-3.5 rounded-[14px] bg-white px-5 py-4 shadow-[0_12px_36px_rgba(15,30,46,0.12)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-gold">
              <Users size={20} className="text-navy" />
            </div>
            <div>
              <div className="text-[0.72rem] font-medium text-[#888]">
                Community
              </div>
              <div className="text-[1rem] font-bold text-navy">
                Growing Together
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="left" delay={0.1}>
          <SectionLabel
            eyebrow="Who We Are"
            title={
              <>
                Muslim Youth
                <br />
                of Greater Detroit
              </>
            }
          />
          <div className="mt-6 space-y-5 text-[0.95rem] leading-[1.85] text-[#444]">
            <p>
              MYGD is a vibrant community of young Muslims rooted at the
              Islamic Association of Greater Detroit. We create spaces where
              youth can grow in faith, build lasting friendships, and develop
              leadership skills that shape their futures.
            </p>
            <p>
              From qiyams and bonfires to educational programs and community
              service, we&apos;re committed to empowering the next generation
              with purpose and belonging.
            </p>
          </div>
          <StaggerGroup
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            stagger={0.06}
          >
            {PILLARS.map((pillar) => (
              <StaggerItem
                key={pillar}
                className="flex items-center gap-2.5 text-[0.88rem] font-medium text-[#444]"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {pillar}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
