import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { UPCOMING_EVENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Monthly Qiyams | MYGD",
};

const SCHEDULE = [
  { icon: Calendar, label: "Monthly" },
  { icon: Clock, label: "Late Night" },
  { icon: MapPin, label: "IAGD" },
];

function formatDate(iso?: string) {
  if (!iso) return "Date TBD";
  const date = new Date(iso + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function QiyamsPage() {
  const qiyamEvents = UPCOMING_EVENTS.filter(
    (e) => e.tag === "Spiritual"
  );

  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 pt-36 pb-20 md:px-10">
          <div className="absolute inset-0">
            <Image
              src="/qiyam2.jpg"
              alt=""
              fill
              className="object-cover opacity-25 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Monthly Program"
              title="Qiyam Nights"
              subtitle="Late-night worship gatherings that strengthen our connection with Allah and each other."
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
                Our monthly Qiyam nights are a space to pause from the noise,
                stand together in prayer, and reconnect with Allah. Open to all
                brothers and sisters. Chai and snacks provided.
              </p>
            </Reveal>
          </div>

          {qiyamEvents.length > 0 && (
            <div className="relative mx-auto mt-16 max-w-3xl">
              <Reveal variant="up" delay={0.3}>
                <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-widest text-gold/70">
                  Coming Up
                </h3>
              </Reveal>
              <StaggerGroup className="flex flex-col gap-4" stagger={0.08}>
                {qiyamEvents.map((event) => {
                  const Icon = event.icon;
                  return (
                    <StaggerItem key={event.id} variant="up">
                      <div className="flex flex-col gap-6 rounded-[16px] border border-gold/15 bg-white/5 p-6 sm:flex-row sm:items-center">
                        {event.poster ? (
                          <div className="relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden rounded-[12px] border border-gold/15 sm:w-64">
                            <Image
                              src={event.poster}
                              alt={`${event.title} poster`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-gold-dim">
                            <Icon size={20} className="text-gold" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-[1rem] font-extrabold uppercase tracking-wide text-white">
                            {event.title}
                          </h4>
                          <p className="mt-1 text-[0.84rem] leading-relaxed text-white/55">
                            {event.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.78rem] text-gold-light/70">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar size={13} />
                              {formatDate(event.date)}
                            </span>
                            {event.time && (
                              <span className="inline-flex items-center gap-1.5">
                                <Clock size={13} />
                                {event.time}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={13} />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          )}

          <Reveal variant="up" delay={0.4} className="relative mx-auto mt-10 max-w-3xl text-center">
            <MagneticButton href="/connect" variant="gold">
              Get in Touch
            </MagneticButton>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
