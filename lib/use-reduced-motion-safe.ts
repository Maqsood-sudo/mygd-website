"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Wraps framer-motion's useReducedMotion with sane transition defaults —
 * pass the result's `transition` into any motion component to collapse
 * spring/duration animation to a near-instant fade when the OS requests it.
 */
export function useReducedMotionSafe() {
  const prefersReduced = useReducedMotion();

  return {
    prefersReduced,
    transition: (normal: object) =>
      prefersReduced ? { duration: 0.01 } : normal,
  };
}
