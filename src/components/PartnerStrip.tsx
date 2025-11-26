"use client";

const logos = ["Bank Orbit", "KaryaPay", "Satset Commerce", "Aurora ERP", "Nusantara POS", "Velar Retail"];

export default function PartnerStrip() {
  return (
    <section className="relative overflow-hidden rounded-3xl  border-stone-900 backdrop-blur-2xl bg-stone-950/50 px-6 py-8">
      <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
        Dipercaya ekosistem finansial
      </p>
      <div className="mt-6 flex items-center gap-12 whitespace-nowrap text-stone-500">
        <div className="marquee flex items-center gap-12">
          {[...logos, ...logos].map((logo, idx) => (
            <span key={`${logo}-${idx}`} className="text-sm font-semibold uppercase tracking-[0.35em]">
              {logo}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee 26s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}