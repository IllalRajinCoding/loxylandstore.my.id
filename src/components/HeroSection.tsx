"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const allocations = [
  { label: "Payroll Engineering", value: "Rp 120 jt" },
  { label: "Promosi Regional", value: "Rp 95 jt" },
  { label: "Operasional Harian", value: "Rp 68 jt" },
];

export default function HeroSection() {
  return (
    <section className="grid gap-12 rounded-3xl  bg-stone-950/60 p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-8">
        <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
          Balance Orchestration
        </span>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-50 lg:text-5xl">
            Top up saldo bisnis instan, aman, dan minim friksi.
          </h1>
          <p className="text-base text-stone-400 lg:text-lg">
            Kelola limit tim, distribusikan dana otomatis, dan pantau arus keluar real-time dalam satu canvas minimalis.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="bg-stone-100 text-stone-900 hover:bg-stone-200">
            Mulai gratis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-stone-700 text-stone-100 bg-stone-900"
          >
            Lihat demo
          </Button>
        </div>
        <div className="flex items-center gap-3 text-sm text-stone-500">
          <ShieldCheck className="h-4 w-4" />
          <span>ISO 27001 • Audit trail granular • SLA 99.95%</span>
        </div>
      </div>

      <Card className="border-stone-900 bg-stone-900/60 text-stone-50 shadow-2xl">
        <CardContent className="space-y-8 p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Saldo virtual
            </p>
            <p className="text-4xl font-semibold">Rp 245.830.000</p>
          </div>
          <div className="space-y-4">
            {allocations.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-stone-800 px-4 py-3"
              >
                <span className="text-sm text-stone-400">{item.label}</span>
                <span className="text-base font-medium text-stone-50">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <Button className="w-full bg-linear-to-r from-indigo-400 via-sky-400 to-teal-300 text-stone-900 hover:opacity-90">
            Buat top up instan <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}