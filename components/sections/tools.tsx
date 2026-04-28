import {
  Mail,
  Calendar,
  MessageCircle,
  Workflow,
  Search,
  FileText,
  Mic,
  BarChart3,
  Code2,
  Globe,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "./section-heading"

interface Tool {
  icon: LucideIcon
  name: string
  description: string
}

const tools: Tool[] = [
  { icon: Mail, name: "Gmail", description: "Drafts, triages, replies in his voice." },
  { icon: Calendar, name: "Calendar", description: "Schedules, reschedules, defends focus time." },
  { icon: MessageCircle, name: "WhatsApp", description: "Reads, replies, summarizes the chaos." },
  { icon: Workflow, name: "n8n Automation", description: "Builds workflows for the boring stuff." },
  { icon: Search, name: "Web Search", description: "Finds answers and cites real sources." },
  { icon: FileText, name: "Notion", description: "Captures notes, organizes the brain dump." },
  { icon: Mic, name: "Voice", description: "Talks, listens, transcribes on demand." },
  { icon: BarChart3, name: "Analytics", description: "Watches metrics so he doesn't have to." },
  { icon: Code2, name: "Code", description: "Writes, reviews, debugs alongside him." },
  { icon: Globe, name: "Browser", description: "Opens tabs, fills forms, scrapes the web." },
]

export function Tools() {
  return (
    <section
      id="tools"
      className="relative w-full px-5 sm:px-6 py-20 sm:py-28 md:py-36 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          eyebrow="What I Plug Into"
          title={
            <>
              The toolkit, <em className="italic text-white/70">in plain sight.</em>
            </>
          }
        />

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group relative flex flex-col gap-4 sm:gap-5 rounded-sm border border-white/5 bg-white/[0.015] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-white/80" strokeWidth={1.5} />
                <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
                  Tool
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
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
