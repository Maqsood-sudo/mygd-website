import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { PROGRAMS } from "@/lib/content";

export function Programs() {
  return (
    <div id="programs" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12">
          <SectionLabel
            eyebrow="What We Offer"
            title="Programs"
            subtitle="Regular programs designed to educate, connect, and inspire — from weekly halaqas to our annual Cedar Point trip."
            light
          />
        </div>

        <StaggerGroup
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {PROGRAMS.map((program, i) => {
            const Icon = program.icon;
            return (
              <StaggerItem
                key={program.id}
                variant="scale"
                className="group overflow-hidden rounded-[16px] border border-gold/10 bg-navy-mid transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
              >
                <div className="relative flex h-[150px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-light to-navy">
                  {program.image ? (
                    <>
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        priority
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        style={{ objectPosition: program.imagePosition ?? "center" }}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-[8px] bg-navy/70 backdrop-blur-sm">
                        <Icon size={16} className="text-gold" />
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="pointer-events-none absolute font-display text-6xl font-black text-white/[0.06]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        size={36}
                        strokeWidth={1.3}
                        className="relative text-gold/80"
                      />
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="mb-1.5 font-display text-[1rem] font-extrabold uppercase tracking-wide text-white">
                    {program.title}
                  </h4>
                  <p className="mb-4 text-[0.82rem] leading-relaxed text-white/55">
                    {program.description}
                  </p>
                  <div className="flex gap-4 text-[0.75rem] text-gold-light/70">
                    {program.meta.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-center gap-1.5"
                      >
                        <m.icon size={13} />
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </div>
  );
}
