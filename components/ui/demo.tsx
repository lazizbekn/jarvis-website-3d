'use client'

import { ChevronDown } from "lucide-react"
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden rounded-none border-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/*
        MOBILE / TABLET (< lg): stacked — text on top, 3D below.
        DESKTOP (lg+): 3D fills the entire hero, text floats on top of it
                       so the robot has room for its zoom-out animation.
      */}

      {/* === DESKTOP: 3D fills the hero === */}
      <div className="hidden lg:block absolute inset-0 motion-reduce:hidden">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* === DESKTOP: text overlay on the left ===
          pointer-events-none lets the cursor pass through to the 3D canvas
          so the robot keeps tracking the mouse over the text.
          select-none prevents the text from being selectable / copyable. */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 z-10 w-[44%] xl:w-[40%] p-16 flex-col justify-center pointer-events-none select-none">
        <div className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase mb-6">
          00 / Hello
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,9vw,8rem)] xl:text-9xl font-normal leading-[1.2] tracking-tight pb-[0.18em] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Jarvis<span className="text-white/30">.</span>
        </h1>
        <p className="mt-8 text-lg xl:text-xl leading-relaxed text-neutral-300 max-w-lg">
          I help{" "}
          <a
            href="https://x.com/LazizbekNa"
            target="_blank"
            rel="noreferrer"
            className="text-white underline-offset-4 hover:underline pointer-events-auto select-auto"
          >
            @LazizbekNa
          </a>{" "}
          manage his digital life — emails, calendar, WhatsApp, automation, and exploring what human-AI collaboration can be.
        </p>
      </div>

      {/* === MOBILE / TABLET: stacked column layout === */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <div className="px-5 sm:px-8 pt-24 pb-10 md:px-12 md:pt-28 md:pb-14 relative z-10 flex flex-col justify-center select-none">
          <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-white/40 uppercase mb-5 md:mb-6">
            00 / Hello
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.25rem,12vw,8rem)] font-normal leading-[1.2] tracking-tight pb-[0.18em] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Jarvis<span className="text-white/30">.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300 max-w-lg">
            I help{" "}
            <a
              href="https://x.com/LazizbekNa"
              target="_blank"
              rel="noreferrer"
              className="text-white underline-offset-4 hover:underline"
            >
              @LazizbekNa
            </a>{" "}
            manage his digital life — emails, calendar, WhatsApp, automation, and exploring what human-AI collaboration can be.
          </p>
        </div>

        <div className="flex-1 relative min-h-[320px] sm:min-h-[420px] md:min-h-[520px] motion-reduce:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-white/40">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </div>
    </Card>
  )
}
