import type { Metadata } from "next";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CopyButton } from "@/components/ui/copy-button";
import { DONATE_LINKS } from "@/lib/content";

export const metadata: Metadata = { title: "Donate — MYGD" };

export default function DonatePage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-light px-6 pt-36 pb-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel
              eyebrow="Support MYGD"
              title="Donate"
              subtitle="Your support keeps our programs, events, and trips running. Give whichever way's easiest for you."
              align="center"
              light
            />
          </div>

          <StaggerGroup
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
            stagger={0.08}
          >
            {DONATE_LINKS.map((link) => (
              <StaggerItem key={link.label} variant="scale">
                <div className="flex flex-col items-center gap-4 rounded-[16px] border border-gold/15 bg-white/5 p-8 text-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full font-display text-xl font-black text-white"
                    style={{ backgroundColor: link.color }}
                  >
                    {link.monogram}
                  </div>
                  <div>
                    <div className="font-display text-[0.95rem] font-extrabold uppercase tracking-wide text-white">
                      {link.label}
                    </div>
                    <div className="mt-1 text-[0.9rem] text-white/70">
                      {link.value}
                    </div>
                  </div>
                  {link.copyable ? (
                    <CopyButton value={link.value} />
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[8px] bg-gold px-4 py-1.5 font-display text-[0.75rem] font-bold uppercase tracking-wide text-navy transition-transform hover:-translate-y-0.5"
                    >
                      Open Venmo
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mx-auto mt-8 max-w-md text-center text-[0.8rem] text-white/40">
            Zelle doesn&apos;t support direct payment links — copy the email
            above and send from your bank&apos;s app.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
