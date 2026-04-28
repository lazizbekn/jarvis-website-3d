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

      <div className="flex flex-col md:flex-row h-full min-h-screen">
        {/* Left content */}
        <div className="flex-1 px-6 py-20 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <div className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase mb-6">
            00 / Hello
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Jarvis<span className="text-white/30">.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-300 max-w-lg">
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

        {/* Right content */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </div>
    </Card>
  )
}
