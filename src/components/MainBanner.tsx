import { Button } from "@/components/ui/button";

export default function MainBanner() {
  return (
    <section className="rounded-3xl border border-stone-900 bg-stone-950/60 px-8 py-12 text-center shadow-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
        Ready to scale
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-stone-50">
        Top up saldo bisnis tanpa friksi dengan dukungan 24/7.
      </h2>
      <p className="mt-3 text-base text-stone-400">
        Mulai gratis, atau hubungi tim kami untuk orkestrasi saldo multi-entity.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button size="lg" className="bg-stone-100 text-stone-900 hover:bg-stone-200">
          Mulai sekarang
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-stone-700 text-stone-100 hover:bg-stone-900"
        >
          Hubungi sales
        </Button>
      </div>
    </section>
  );
}