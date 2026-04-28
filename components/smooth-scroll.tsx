"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * Smooth-scroll provider using Lenis.
 *
 * Renders nothing — just attaches a single global Lenis instance to <html>
 * and keeps it running with requestAnimationFrame.
 *
 * Respects `prefers-reduced-motion`: users who opt out of motion get
 * the browser's native scroll instead of inertia/lerp.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      // lerp = continuous interpolation factor.
      // Lower = smoother (more inertia), higher = snappier.
      // 0.08 is the sweet spot for buttery scroll without feeling laggy.
      lerp: 0.08,
      smoothWheel: true,
      // Wheel sensitivity — 1 = native distance, slightly under 1 feels
      // more controlled with the lerp.
      wheelMultiplier: 1,
      // Sync touch with the same lerp so mobile/trackpad inertia matches.
      syncTouch: true,
      syncTouchLerp: 0.08,
    })

    let frame: number
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
