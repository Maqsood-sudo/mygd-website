import type { Metadata } from "next";
import { Calendar, Clock, MapPin, DollarSign, ExternalLink } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { UPCOMING_EVENTS } from "@/lib/content";

export const metadata: Metadata = { title: "Events | MYGD" };

const TAG_COLORS: Record<string, string> = {
  Spiritual: "bg-indigo-500/20 text-indigo-300",
  Community: "bg-emerald-500/20 text-emerald-300",
  Sisters: "bg-pink-500/20 text-pink-300",
  Sports: "bg-amber-500/20 text-amber-300",
};

function formatDate(iso: string) {
  const date = new Date(iso + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getMonthDay(iso: string) {
  const date = new Date(iso + "T12:00:00");
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: date.getDate(),
  };
}

export default function EventsPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-light px-6 pt-36 pb-20 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel
              eyebrow="What's Coming Up"
              title="Events"
              subtitle="Upcoming gatherings, competitions, and community nights. Mark your calendar."
              align="center"
              light
            />
          </div>

          <StaggerGroup
            className="mx-auto mt-14 flex max-w-3xl flex-col gap-5"
            stagger={0.08}
          >
            {UPCOMING_EVENTS.map((event) => {
              const Icon = event.icon;
              const { month, day } = getMonthDay(event.date);
              const tagClass =
                TAG_COLORS[event.tag ?? ""] ?? "bg-white/10 text-white/60";

              const Wrapper = event.signupUrl ? "a" : "div";
              const wrapperProps = event.signupUrl
                ? { href: event.signupUrl, target: "_blank", rel: "noreferrer" }
                : {};

              return (
                <StaggerItem key={event.id} variant="up">
                  <Wrapper
                    {...wrapperProps}
                    className={`group flex gap-5 rounded-[16px] border border-gold/15 bg-white/5 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] ${event.signupUrl ? "cursor-pointer" : ""}`}
                  >
                    {/* Date block */}
                    <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-[12px] bg-gold-dim">
                      <span className="text-[0.6rem] font-bold tracking-widest text-gold/80">
                        {month}
                      </span>
                      <span className="font-display text-xl font-black leading-none text-gold">
                        {day}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-[1rem] font-extrabold uppercase tracking-wide text-white">
                          {event.title}
                        </h3>
                        {event.tag && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold ${tagClass}`}
                          >
                            {event.tag}
                          </span>
                        )}
                        {event.signupUrl && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.65rem] font-semibold text-gold">
                            Sign Up <ExternalLink size={10} />
                          </span>
                        )}
                      </div>
                      <p className="mb-3 text-[0.84rem] leading-relaxed text-white/55">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.78rem] text-gold-light/70">
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
                  </Wrapper>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal variant="up" delay={0.2} className="mx-auto mt-10 max-w-3xl">
            <p className="text-center text-[0.82rem] text-white/40">
              Events are updated regularly. Follow{" "}
              <a
                href="https://www.instagram.com/mygd_insta/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold-light transition-colors hover:text-gold"
              >
                @mygd_insta
              </a>{" "}
              or join our{" "}
              <a
                href="https://chat.whatsapp.com/C4zTs9fCVC0Ctb5y5urteu"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold-light transition-colors hover:text-gold"
              >
                WhatsApp
              </a>{" "}
              to stay in the loop.
            </p>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
