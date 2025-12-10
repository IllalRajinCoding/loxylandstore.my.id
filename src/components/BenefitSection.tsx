"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import Section from "./Section";

const benefits = [
  {
    title: "Hemat hingga 80%",
    desc: "Nikmati akses fitur premium dengan harga miring. Solusi cerdas untuk gaya hidup digital tanpa bikin dompet boncos.",
    icon: Wallet,
  },
  {
    title: "Layanan Kilat",
    desc: "Sistem 100% otomatis. Setelah pembayaran terkonfirmasi, akun/produk langsung dikirim detik itu juga.",
    icon: Zap,
  },
  {
    title: "Aman & Bergaransi",
    desc: "Kami menjamin fungsi produk sesuai deskripsi dengan layanan purna jual yang jelas (sesuai S&K berlaku).",
    icon: ShieldCheck,
  },
];

export default function BenefitSection() {
  return (
    <Section variant="elevated" className="p-8 lg:p-12">
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full border border-stone-800/50 bg-stone-900/30 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-stone-400 backdrop-blur-sm">
          Why Us?
        </span>
        <h2 className="mt-6 text-3xl font-semibold text-stone-50 lg:text-4xl">
          Lebih hemat, tetap nikmat
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-stone-400">
          Tiga alasan utama kenapa ribuan pelanggan mempercayakan kebutuhan digitalnya di sini.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          
          return (
            <div key={item.title} className="relative h-full">
              <Card className="group h-full border-stone-800/40 bg-gradient-to-br from-stone-900/50 to-stone-950/70 backdrop-blur-xl text-stone-50 shadow-xl shadow-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-stone-700/50 hover:shadow-2xl hover:shadow-black/50">
                <CardContent className="space-y-6 p-8">
                  {/* Icon Wrapper */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-800/50 bg-stone-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-stone-700/50 group-hover:bg-stone-800/40 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-stone-200" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-stone-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-400">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}