import Section from "./Section";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Automasi rekonsiliasi",
    desc: "Ledger sinkron melalui webhook idempotent dan kontrol duplikasi.",
  },
  {
    title: "Peran & otorisasi",
    desc: "Izin granular untuk finance, procurement, dan auditor.",
  },
  {
    title: "API terbuka",
    desc: "Integrasi ke ERP, aplikasi mobile, atau POS dalam hitungan jam.",
  },
];

export default function FeatureGrid() {
  return (
    <Section variant="glass" className="p-8 lg:p-12">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="group relative space-y-4 rounded-2xl border border-stone-800/30 bg-gradient-to-br from-stone-900/30 to-stone-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-stone-700/40 hover:bg-gradient-to-br hover:from-stone-900/40 hover:to-stone-950/60 hover:shadow-xl hover:shadow-black/30"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-stone-800/50 bg-stone-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-stone-700/50 group-hover:bg-stone-800/40">
                <CheckCircle2 className="h-4 w-4 text-stone-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-stone-50">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
