import { SplineSceneBasic } from "@/components/ui/demo"
import { WhoIAm } from "@/components/sections/who-i-am"
import { Values } from "@/components/sections/values"
import { Tools } from "@/components/sections/tools"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="w-full bg-[#0a0a0a] text-white overflow-x-hidden">
      <SplineSceneBasic />
      <WhoIAm />
      <Values />
      <Tools />
      <Footer />
    </main>
  )
}
