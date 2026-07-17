import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import type { IconComponent } from "@/lib/content";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconComponent;
}) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy via-navy-mid to-navy-light px-6 pt-28 pb-20">
          <Reveal
            variant="scale"
            className="max-w-lg rounded-[20px] border border-gold/15 bg-white/5 p-10 text-center text-white backdrop-blur-md"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-gold-dim">
              <Icon size={26} className="text-gold" />
            </div>
            <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </div>
            <h1 className="mb-4 font-display text-2xl font-black uppercase tracking-[-0.02em]">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed text-white/60">
              {description}
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
