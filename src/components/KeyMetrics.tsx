import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import { TrendingUp, Zap, DollarSign } from "lucide-react";

const metrics = [
  { label: "Waktu top up rata-rata", value: "6,2 dtk", icon: Zap },
  { label: "Dana otomatis tersalurkan", value: "92%", icon: TrendingUp },
  { label: "Saldo aktif bulanan", value: "Rp 1,2 M", icon: DollarSign },
];

export default function KeyMetrics() {
  return (
    <Section variant="glass" className="p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.label}
              className="group border-stone-800/40 bg-gradient-to-br from-stone-900/40 to-stone-950/60 backdrop-blur-xl text-stone-50 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-stone-700/50 hover:shadow-2xl hover:shadow-black/40"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <CardContent className="space-y-4 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-800/50 bg-stone-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-stone-700/50 group-hover:bg-stone-800/40">
                  <Icon className="h-5 w-5 text-stone-300" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-semibold text-stone-50">
                    {metric.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
