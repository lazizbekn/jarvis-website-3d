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
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
      touchMultiplier: 1.4,
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
