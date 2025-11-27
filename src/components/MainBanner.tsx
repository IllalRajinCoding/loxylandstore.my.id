import { Button } from "@/components/ui/button";
import Section from "./Section";
import { Rocket } from "lucide-react";

export default function MainBanner() {
  return (
    <Section variant="elevated" className="px-8 py-16 text-center lg:px-12 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-800/50 bg-stone-900/30 px-4 py-1.5 backdrop-blur-sm">
          <Rocket className="h-3 w-3 text-stone-400" />
          <span className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Siap bertumbuh
          </span>
        </div>
        <h2 className="text-3xl font-semibold text-stone-50 lg:text-5xl">
          Top up saldo bisnis tanpa friksi dengan dukungan 24/7.
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-400 lg:text-lg">
          Mulai gratis atau hubungi tim kami untuk orkestrasi saldo multi-entitas.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-stone-100 px-8 text-stone-900 shadow-lg shadow-stone-900/50 transition-all duration-300 hover:bg-stone-200 hover:shadow-xl hover:shadow-stone-900/60 hover:-translate-y-0.5"
          >
            Mulai sekarang
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-stone-700/50 bg-stone-900/30 px-8 backdrop-blur-sm text-stone-100 transition-all duration-300 hover:bg-stone-800/50 hover:border-stone-600/50"
          >
            Hubungi sales
          </Button>
        </div>
      </div>
    </Section>
  );
}
