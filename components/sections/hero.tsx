"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { PrayerCard } from "./prayer-card";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const ring1X = useTransform(springX, (v) => v * 0.6);
  const ring1Y = useTransform(springY, (v) => v * 0.6);
  const ring2X = useTransform(springX, (v) => v * -0.9);
  const ring2Y = useTransform(springY, (v) => v * -0.9);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width - 0.5) * 50);
    pointerY.set(((e.clientY - rect.top) / rect.height - 0.5) * 50);
  }

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-light"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/masjid.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-45 grayscale contrast-125 [mask-image:linear-gradient(to_bottom,transparent,black_28%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-mid/75 to-navy-light/55" />
      </div>

      <motion.div
        style={{ x: ring1X, y: ring1Y }}
        className="pointer-events-none absolute -right-52 -top-40 hidden h-[700px] w-[700px] rounded-full border border-gold/10 md:block"
      />
      <motion.div
        style={{ x: ring2X, y: ring2Y }}
        className="pointer-events-none absolute right-12 top-20 hidden h-[400px] w-[400px] rounded-full border border-gold/[0.07] md:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 pb-20 pt-40 md:px-10 lg:grid-cols-2 lg:items-center lg:pt-24">
        <div>
          <h1 className="mb-3 font-display text-[clamp(2.6rem,5vw,4rem)] font-black uppercase leading-[1.07] tracking-[-1.5px] text-white">
            <StaggerGroup stagger={0.12}>
              <StaggerItem variant="clip">
                <span className="block">Welcome to</span>
              </StaggerItem>
              <StaggerItem variant="clip">
                <span className="block text-gold">MYGD</span>
              </StaggerItem>
            </StaggerGroup>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-9 font-display text-[1.05rem] font-bold uppercase tracking-wide text-gold-light/90"
          >
            Sowing the Seeds of Tomorrow
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-10 max-w-[460px] text-[1rem] leading-[1.75] text-white/55"
          >
            Building community, faith, and leadership among Muslim youth
            across Greater Detroit through meaningful programs, events, and
            lasting connection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#programs" variant="gold">
              Explore Programs <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/connect" variant="outline">
              Get in Touch
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="lg:-mb-20"
        >
          <PrayerCard />
        </motion.div>
      </div>
    </div>
  );
}
