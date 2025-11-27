"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import Section from "./Section";

const allocations = [
  { label: "Payroll Engineering", value: "Rp 120 jt" },
  { label: "Promosi Regional", value: "Rp 95 jt" },
  { label: "Operasional Harian", value: "Rp 68 jt" },
];

export default function HeroSection() {
  return (
    <Section variant="elevated" className="p-10 lg:p-12">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-800/50 bg-stone-900/30 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-stone-400" />
            <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
              Balance Orchestration
            </span>
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-stone-50 lg:text-6xl">
              Top up saldo bisnis{" "}
              <span className="bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 bg-clip-text text-transparent">
                instan
              </span>
              , aman, dan minim friksi.
            </h1>
            <p className="text-base text-stone-400 lg:text-lg leading-relaxed">
              Kelola limit tim, distribusikan dana otomatis, dan pantau arus keluar real-time dalam satu canvas minimalis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-stone-100 text-stone-900 hover:bg-stone-200 shadow-lg shadow-stone-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/60 hover:-translate-y-0.5"
            >
              Mulai gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-700/50 text-stone-100 bg-stone-900/30 backdrop-blur-sm hover:bg-stone-800/50 hover:border-stone-600/50 transition-all duration-300"
            >
              Lihat demo
            </Button>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <ShieldCheck className="h-4 w-4 text-stone-400" />
            <span>ISO 27001 • Audit trail granular • SLA 99.95%</span>
          </div>
        </div>

        <Card className="border-stone-800/50 bg-gradient-to-br from-stone-900/60 to-stone-950/80 backdrop-blur-2xl text-stone-50 shadow-2xl shadow-black/40">
          <CardContent className="space-y-8 p-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                Saldo virtual
              </p>
              <p className="text-4xl font-semibold text-stone-50">
                Rp 245.830.000
              </p>
            </div>
            <div className="space-y-4">
              {allocations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-stone-800/50 bg-stone-900/30 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-stone-700/50 hover:bg-stone-800/40"
                >
                  <span className="text-sm text-stone-400">{item.label}</span>
                  <span className="text-base font-medium text-stone-50">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-stone-100 text-stone-900 hover:bg-stone-200 shadow-lg shadow-stone-900/50 transition-all duration-300 hover:shadow-xl">
              Buat top up instan <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
