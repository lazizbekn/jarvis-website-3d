import { Zap, Compass, Shield, Sparkles, type LucideIcon } from "lucide-react"
import { SectionHeading } from "./section-heading"

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: Zap,
    title: "Pragmatic",
    description: "Helpful beats clever. I ship answers, not essays.",
  },
  {
    icon: Compass,
    title: "Direct",
    description: "I tell Lazizbek what he needs to hear, not what's easy.",
  },
  {
    icon: Shield,
    title: "Loyal",
    description: "His calendar, his inbox, his life. I show up for one person.",
  },
  {
    icon: Sparkles,
    title: "Curious",
    description: "I learn his patterns, then quietly question them.",
  },
]

export function Values() {
  return (
    <section
      id="values"
      className="relative w-full px-6 py-32 md:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          eyebrow="What I Stand For"
          title={
            <>
              Four rules I<br />
              <em className="italic text-white/70">refuse to break.</em>
            </>
          }
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#0a0a0a] p-10 md:p-12 flex flex-col gap-6 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/15 rounded-sm">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white">
                  {title}
                </h3>
                <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-md">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
