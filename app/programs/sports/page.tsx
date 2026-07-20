import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Clock, DollarSign } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { UPCOMING_EVENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sports Leagues | MYGD",
};

const SCHEDULE = [
  { icon: Calendar, label: "Seasonal" },
  { icon: MapPin, label: "IAGD & Local Venues" },
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

export default function SportsPage() {
  const sportsEvents = UPCOMING_EVENTS.filter(
    (e) => e.tag === "Sports"
  );

  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy px-6 pt-36 pb-20 md:px-10">
          <div className="absolute inset-0">
            <Image
              src="/sports.jpg"
              alt=""
              fill
              className="object-cover opacity-25 grayscale"
              style={{ objectPosition: "center 15%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Seasonal Program"
              title="Sports Leagues"
              subtitle="Competitive and recreational sports for brothers and sisters. Hoops, soccer, and more."
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
                From basketball to soccer, our sports leagues bring the community
                together through friendly competition and teamwork. Open to
                brothers and sisters of all skill levels.
              </p>
            </Reveal>
          </div>

          {sportsEvents.length > 0 && (
            <div className="relative mx-auto mt-16 max-w-3xl">
              <Reveal variant="up" delay={0.3}>
                <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-widest text-gold/70">
                  Coming Up
                </h3>
              </Reveal>
              <StaggerGroup className="flex flex-col gap-4" stagger={0.08}>
                {sportsEvents.map((event) => {
                  const Icon = event.icon;
                  return (
                    <StaggerItem key={event.id} variant="up">
                      <div className="flex gap-5 rounded-[16px] border border-gold/15 bg-white/5 p-6">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-gold-dim">
                          <Icon size={20} className="text-gold" />
                        </div>
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
                            {event.cost && (
                              <span className="inline-flex items-center gap-1.5">
                                <DollarSign size={13} />
                                {event.cost}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          )}

          {sportsEvents.length === 0 && (
            <Reveal variant="up" delay={0.3} className="relative mx-auto mt-16 max-w-3xl text-center">
              <div className="rounded-[16px] border border-gold/15 bg-white/5 p-8">
                <p className="text-[0.9rem] text-white/50">
                  No upcoming sports events right now. Follow us on Instagram or
                  join our WhatsApp to get notified when the next season drops.
                </p>
              </div>
            </Reveal>
          )}

          <Reveal variant="up" delay={0.4} className="relative mx-auto mt-10 max-w-3xl text-center">
            <p className="mb-6 text-[0.84rem] text-white/45">
              Follow{" "}
              <a
                href="https://www.instagram.com/mygdsports/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold-light transition-colors hover:text-gold"
              >
                @mygdsports
              </a>{" "}
              on Instagram for updates, highlights, and registration info.
            </p>
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
