"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers } from "lucide-react";

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
    <section className="rounded-3xl border border-stone-900 bg-stone-950/50 p-8">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Workflow</p>
        <h2 className="mt-3 text-3xl font-semibold text-stone-50">
          Automasi dari request sampai audit
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, idx) => (
          <Card
            key={step.title}
            className="border-stone-900 bg-stone-950/30 text-stone-50 transition duration-300 hover:-translate-y-1"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <CardContent className="space-y-4 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-stone-900">
                <step.icon className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="text-sm text-stone-400">{step.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}