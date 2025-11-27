"use client";

import Section from "./Section";

const logos = [
  "Bank Orbit",
  "KaryaPay",
  "Satset Commerce",
  "Aurora ERP",
  "Nusantara POS",
  "Velar Retail",
];

export default function PartnerStrip() {
  return (
    <Section variant="default" className="relative w-full overflow-hidden px-6 py-12">
      <div className="mb-10 flex justify-center">
        <span className="inline-block rounded-full border border-stone-800/50 bg-stone-900/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 backdrop-blur-sm">
          Dipercaya ekosistem finansial
        </span>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="marquee-container flex min-w-full shrink-0 gap-16 py-2">
          <div className="flex shrink-0 items-center justify-around gap-16">
            {logos.map((logo, idx) => (
              <span
                key={`a-${idx}`}
                className="cursor-default whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 transition-colors duration-300 hover:text-stone-300"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-around gap-16">
            {logos.map((logo, idx) => (
              <span
                key={`b-${idx}`}
                className="cursor-default whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 transition-colors duration-300 hover:text-stone-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          animation: marquee 30s linear infinite;
        }
        
        .marquee-container:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 4rem));
          }
        }
      `}</style>
    </Section>
  );
}
