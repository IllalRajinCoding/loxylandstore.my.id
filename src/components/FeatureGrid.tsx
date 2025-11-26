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
    <section className="rounded-3xl border border-stone-900 bg-stone-950/50 p-8">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="space-y-3 rounded-2xl border border-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-stone-800"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <h3 className="text-lg font-semibold text-stone-50">{feature.title}</h3>
            <p className="text-sm text-stone-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}