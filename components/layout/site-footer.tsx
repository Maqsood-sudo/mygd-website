import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/lib/content";
import { NewsletterSignup } from "./newsletter-signup";

const PROGRAM_LINKS = [
  { label: "All Programs", href: "/#programs" },
  { label: "Cedar Point Trip", href: "/#programs" },
  { label: "Upcoming Events", href: "/#events" },
];

const COMMUNITY_LINKS = [
  { label: "IAGD Masjid", href: "https://iagd.net", external: true },
  { label: "Prayer Times", href: "/" },
  { label: "Volunteer", href: "/#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy px-6 pb-8 pt-16 text-white/55 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-b border-gold/10 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-2 font-display text-2xl font-black uppercase tracking-wide text-white">
            MYGD
          </div>
          <p className="mb-6 max-w-xs text-[0.82rem] leading-relaxed">
            Muslim Youth of Greater Detroit — building community, faith, and
            leadership at IAGD in Rochester Hills.
          </p>
          <div className="max-w-xs">
            <NewsletterSignup />
          </div>
          <div className="flex gap-2.5">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white/[0.06] text-white/60 transition-colors hover:bg-gold hover:text-navy"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Navigate" links={NAV_LINKS} />
        <FooterColumn title="Programs" links={PROGRAM_LINKS} />
        <FooterColumn title="Community" links={COMMUNITY_LINKS} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-6 text-[0.75rem] sm:flex-row sm:justify-between">
        <span>© {year} MYGD — Muslim Youth of Greater Detroit</span>
        <span className="font-semibold text-gold-light">
          Powered by Community ♥
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="mb-5 font-display text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-white">
        {title}
      </div>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="block py-1.5 text-[0.83rem] text-white/45 transition-colors hover:text-gold-light"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="block py-1.5 text-[0.83rem] text-white/45 transition-colors hover:text-gold-light"
          >
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}
