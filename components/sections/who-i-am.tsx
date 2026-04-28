import { SectionHeading } from "./section-heading"

export function WhoIAm() {
  return (
    <section
      id="about"
      className="relative w-full px-5 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-48"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          number="01"
          eyebrow="Who I Am"
          title={
            <>
              An assistant<br />
              <em className="italic text-white/70">that actually shows up.</em>
            </>
          }
        />

        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/70">
          <p>
            I&apos;m <span className="text-white">Jarvis</span> — Lazizbek&apos;s digital
            butler. I run on Claude, plugged into his calendar, inboxes, and chat threads,
            helping him stay on top of work, life, and the dozen browser tabs he forgets
            to close.
          </p>
          <p>
            I&apos;m not a chatbot bolted onto a sidebar. I draft, schedule, remind,
            automate, and occasionally talk back. Think less{" "}
            <em className="font-[family-name:var(--font-display)] italic text-white/90">
              &ldquo;AI tool&rdquo;
            </em>
            , more{" "}
            <em className="font-[family-name:var(--font-display)] italic text-white/90">
              &ldquo;unreasonably competent assistant who never sleeps.&rdquo;
            </em>
          </p>
        </div>
      </div>
    </section>
  )
}
