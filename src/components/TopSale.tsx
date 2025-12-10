"use client";

// --- DATA PRODUK ---
const products = [
  { id: 1, name: "Canva Pro", category: "Education", price: "Rp 10.000" },
  { id: 2, name: "Duolingo Super", category: "Education", price: "Rp 15.000" },
  { id: 3, name: "Netflix 4K", category: "Streaming", price: "Rp 30.000" },
  { id: 4, name: "YouTube Premium", category: "Streaming", price: "Rp 10.000" },
  { id: 5, name: "Spotify Ind", category: "Streaming", price: "Rp 15.000" },
  { id: 6, name: "CapCut Pro", category: "Editing", price: "Rp 12.000" },
  { id: 7, name: "Lightroom", category: "Editing", price: "Rp 10.000" },
  { id: 10, name: "Alight Motion Pro", category: "Editing", price: "Rp 10.000" }, 
];

// Daftar nama produk yang ingin ditampilkan di Top Sale
const topSaleItems = [
  "Canva Pro", 
  "YouTube Premium", 
  "Netflix 4K", 
  "Alight Motion Pro"
];

export default function TopSale() {
  // Filter logic: Hanya ambil item yang namanya ada di daftar topSaleItems
  const list = products.filter((item) => topSaleItems.includes(item.name));

  return (
    <div className="bg-stone-950 text-stone-50 py-10">
      <main className="mx-auto max-w-5xl px-6">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-medium tracking-tight text-stone-100">🔥 Top Sale</h1>
          <p className="text-sm text-stone-500 mt-1">Produk paling laris bulan ini.</p>
        </div>

        {/* GRID PRODUCT */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-lg border border-stone-900 bg-stone-950/50 p-5 transition-all hover:border-stone-700 hover:bg-stone-900/80"
            >
              <div>
                {/* Kategori dihilangkan agar lebih minimalis */}
                <h3 className="font-medium text-stone-200 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
              </div>
              
              <div className="mt-8 flex items-end justify-between border-t border-stone-900/50 pt-4">
                <span className="text-sm font-semibold text-stone-400">{item.price}</span>
                <button className="text-xs font-medium text-stone-600 hover:text-stone-100 transition-colors">
                  Buy &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}