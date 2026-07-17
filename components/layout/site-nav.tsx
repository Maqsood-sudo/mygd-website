"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { NAV_LINKS } from "@/lib/content";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    setHidden(latest > previous && latest > 160);
  });

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center border-b transition-[padding,background,border-color] duration-300 ${
          scrolled
            ? "border-gold/15 bg-navy/95 px-6 py-3 backdrop-blur-xl md:px-10"
            : "border-gold/10 bg-navy/80 px-6 py-4 backdrop-blur-lg md:px-10"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[10px] bg-navy">
            <Image
              src="/logo.png"
              alt="MYGD logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="font-display text-[1.1rem] font-extrabold tracking-wide text-white uppercase">
            MYGD
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-[0.82rem] font-medium whitespace-nowrap text-white/55 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-250 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/donate"
            className="hidden rounded-[8px] bg-gold px-4 py-2 font-display text-[0.75rem] font-bold whitespace-nowrap uppercase tracking-wide text-navy transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-navy px-6 py-4 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[1.1rem] font-extrabold tracking-wide text-white uppercase">
                MYGD
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-[8px] text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/10 py-3 font-display text-xl font-bold uppercase text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length, duration: 0.35 }}
              >
                <Link
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 mb-6 block rounded-[10px] bg-gold px-5 py-3 text-center font-display text-[0.85rem] font-bold uppercase tracking-wide text-navy"
                >
                  Donate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
