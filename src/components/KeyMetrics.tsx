import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Waktu top up rata-rata", value: "6,2 dtk" },
  { label: "Dana otomatis tersalurkan", value: "92%" },
  { label: "Saldo aktif bulanan", value: "Rp 1,2 M" },
];

export default function KeyMetrics() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric, idx) => (
        <Card
          key={metric.label}
          className="border-stone-900 bg-stone-950/40 text-stone-50 shadow-sm transition-transform duration-300 hover:-translate-y-1"
          style={{ transitionDelay: `${idx * 120}ms` }}
        >
          <CardContent className="space-y-2 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              {metric.label}
            </p>
            <p className="text-3xl font-semibold text-stone-50">
              {metric.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}