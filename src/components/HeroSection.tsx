import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Shield
} from "lucide-react";
import Link from "next/link";

const trendingPreview = [
  { label: "Netflix 4K", price: "Rp 25rb", tag: "Hot" },
  { label: "Spotify Premium", price: "Rp 15rb", tag: "Best" },
  { label: "Canva Pro", price: "Rp 10rb", tag: "Sale" },
];

export default function HeroSection() {
  return (
    // PERUBAHAN DISINI: padding-top (pt) dihapus total.
    <section className="relative pt-0 pb-10">
      
      {/* Background Glow - disesuaikan agar tetap terlihat smooth di belakang */}
      <div className="absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-stone-800/20 blur-[100px]" />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* --- LEFT SIDE --- */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/50 px-3 py-1 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-stone-300">
              Stok Selalu Ready
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Akses Premium, <br />
              <span className="text-stone-500">Harga Minimum.</span>
            </h1>
            <p className="max-w-lg text-lg text-stone-400 leading-relaxed">
              Nikmati layanan streaming film dan ngedit dengan harga pas di kantong.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/product">
              <Button
                size="lg"
                className="h-12 bg-stone-100 px-8 text-stone-950 hover:bg-white hover:scale-105 transition-all duration-300 font-semibold"
              >
                Kepo? Langsung saja
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <a href="#workflow">
              <Button
                size="lg"
                variant="ghost"
                className="h-12 border border-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-900 transition-all"
              >
                <Shield className="mr-2 h-4 w-4" />
                S&K
              </Button>
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE --- */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <Card className="relative z-10 border-stone-800 bg-stone-900/60 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-stone-700 hover:shadow-stone-900/50">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Flash Deal
                  </p>
                  <h3 className="text-2xl font-bold text-white">Hemat s/d 90%</h3>
                </div>
                <div className="rounded-full bg-stone-800 p-3 text-stone-100">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3">
                {trendingPreview.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between rounded-xl border border-stone-800/50 bg-stone-950/50 px-4 py-3 transition-colors hover:border-stone-700 hover:bg-stone-900"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500/80" />
                      <span className="font-medium text-stone-300 group-hover:text-white">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-right">
                       <span className="block text-xs text-stone-500 line-through">Rp 100rb</span>
                       <span className="font-bold text-white">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-stone-500">
                  Scroll ke bawah untuk melihat 50+ produk lainnya
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl border border-stone-800 bg-stone-900/30" />
        </div>
        
      </div>
    </section>
  );
}