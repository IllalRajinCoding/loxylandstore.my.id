"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers, ArrowRight } from "lucide-react";
import Section from "./Section";

const steps = [
  {
    title: "Request top up",
    desc: "Tim mengajukan dana dengan approval chain otomatis.",
    icon: Zap,
  },
  {
    title: "Smart routing",
    desc: "Saldo dialirkan ke wallet, escrow, atau rekening tujuan.",
    icon: Layers,
  },
  {
    title: "Audit-ready",
    desc: "Audit trail terenkripsi siap diekspor kapan saja.",
    icon: Shield,
  },
];

export default function WorkflowShowcase() {
  return (
    <Section variant="elevated" className="p-8 lg:p-12">
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full border border-stone-800/50 bg-stone-900/30 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-stone-400 backdrop-blur-sm">
          Workflow
        </span>
        <h2 className="mt-6 text-3xl font-semibold text-stone-50 lg:text-4xl">
          Automasi dari request sampai audit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-stone-400">
          Alur kerja yang terintegrasi untuk efisiensi maksimal
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;
          return (
            <div key={step.title} className="relative">
              <Card className="group h-full border-stone-800/40 bg-gradient-to-br from-stone-900/50 to-stone-950/70 backdrop-blur-xl text-stone-50 shadow-xl shadow-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-stone-700/50 hover:shadow-2xl hover:shadow-black/50">
                <CardContent className="space-y-6 p-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-800/50 bg-stone-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-stone-700/50 group-hover:bg-stone-800/40">
                    <Icon className="h-6 w-6 text-stone-200" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-stone-50">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-400">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
              {!isLast && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full md:block">
                  <ArrowRight className="h-6 w-6 text-stone-700" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
