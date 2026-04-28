import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  number: string
  eyebrow: string
  title: ReactNode
  className?: string
}

export function SectionHeading({ number, eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-white/40 uppercase">
        <span>{number}</span>
        <span className="h-px w-8 bg-white/20" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white">
        {title}
      </h2>
    </div>
  )
}
