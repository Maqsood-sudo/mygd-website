import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONNECT_LINKS, GET_INVOLVED_CONTACT } from "@/lib/content";

export const metadata: Metadata = { title: "Connect | MYGD" };

export default function ConnectPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-light px-6 pt-36 pb-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Reach Out"
              title="Let's Connect"
              subtitle="Follow along, join the community, or reach out directly. However's easiest for you."
              align="center"
              light
            />
          </div>

          <StaggerGroup
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2"
            stagger={0.08}
          >
            {CONNECT_LINKS.map((link) => (
              <StaggerItem key={link.label} variant="scale">
                <a
                  href={link.href}
                  target={link.ready ? "_blank" : undefined}
                  rel={link.ready ? "noreferrer" : undefined}
                  aria-disabled={!link.ready}
                  className={`group flex items-center gap-4 rounded-[16px] border border-gold/15 bg-white/5 p-6 transition-all duration-300 ${
                    link.ready
                      ? "hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.08]"
                      : "cursor-default opacity-60"
                  }`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-gold-dim">
                    <link.icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-[0.95rem] font-extrabold uppercase tracking-wide text-white">
                      {link.label}
                      {!link.ready && (
                        <span className="ml-2 text-[0.65rem] font-semibold text-white/40">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <div className="text-[0.82rem] text-white/55">
                      {link.description}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal
            variant="up"
            delay={0.15}
            className="mx-auto mt-6 max-w-3xl"
          >
            <div className="flex items-center gap-4 rounded-[16px] border border-gold/15 bg-white/5 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-gold-dim">
                <UserRound size={22} className="text-gold" />
              </div>
              <div>
                <div className="mb-1 font-display text-[0.95rem] font-extrabold uppercase tracking-wide text-white">
                  {GET_INVOLVED_CONTACT.role}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {GET_INVOLVED_CONTACT.methods.map((method) => (
                    <a
                      key={method.href}
                      href={method.href}
                      className="text-[0.85rem] font-medium text-gold-light transition-colors hover:text-gold"
                    >
                      {method.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
