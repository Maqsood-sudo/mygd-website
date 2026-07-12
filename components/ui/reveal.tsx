"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type Target,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "clip";

const EASE = [0.22, 1, 0.36, 1] as const;

// "clip" only reliably animates as a StaggerItem (variant propagated from a
// parent StaggerGroup's already-fired trigger). Used on a standalone Reveal,
// its own whileInView/clipPath combination never fires — a framer-motion
// quirk, not a false positive. Don't use variant="clip" directly on Reveal.

const DELTAS: Record<RevealVariant, Target> = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.92 },
  clip: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
};

const RESOLVED: Record<RevealVariant, Target> = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  clip: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
};

// Bakes the transition into the "visible" target itself (rather than a
// component-level transition prop) so it composes correctly with a parent
// StaggerGroup's staggerChildren orchestration — a transition prop on the
// child would otherwise replace, not add to, the inherited stagger delay.
function buildVariants(
  variant: RevealVariant,
  prefersReduced: boolean,
  duration: number,
): Variants {
  if (prefersReduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    };
  }
  return {
    hidden: DELTAS[variant],
    visible: { ...RESOLVED[variant], transition: { duration, ease: EASE } },
  };
}

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.65,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const prefersReduced = useReducedMotion();
  const variants = buildVariants(variant, !!prefersReduced, duration);
  if (typeof variants.visible === "object" && "transition" in variants.visible) {
    (variants.visible as { transition: { delay?: number } }).transition.delay =
      prefersReduced ? 0 : delay;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReduced ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
  duration = 0.55,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={buildVariants(variant, !!prefersReduced, duration)}
    >
      {children}
    </motion.div>
  );
}
