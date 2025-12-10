"use client";

import { useState } from "react";
import Navbar from "@/components/Navigation";

// --- DATA SIMPEL ---
const categories = ["Education", "Streaming", "Editing", "Roblox"];

const products = [
  { id: 1, name: "Canva Pro", category: "Education", price: "Rp 5.000" },
  { id: 2, name: "Duolingo Super", category: "Education", price: "Rp 15.000" },
  { id: 3, name: "Netflix 4K", category: "Streaming", price: "Rp 30.000" },
  { id: 4, name: "YouTube Premium", category: "Streaming", price: "Rp 10.000" },
  { id: 5, name: "Spotify Ind", category: "Streaming", price: "Rp 15.000" },
  { id: 6, name: "CapCut Pro", category: "Editing", price: "Rp 12.000" },
  { id: 7, name: "Lightroom", category: "Editing", price: "Rp 10.000" },
  { id: 8, name: "100 Robux", category: "Roblox", price: "Rp 18.000" },
  { id: 9, name: "Blox Fruit", category: "Roblox", price: "Rp 50.000" },
];

export default function ProductPage() {
  const [active, setActive] = useState("Education");

  // Filter logic
  const list = products.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Catalog</h1>
          <p className="text-stone-500">Select a category below.</p>
        </div>

        {/* TABS (MINIMALIST) */}
        <div className="mb-8 flex gap-6 overflow-x-auto border-b border-stone-900 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === cat
                  ? "text-stone-50" // Aktif: Putih terang
                  : "text-stone-600 hover:text-stone-400" // Non-aktif: Abu gelap
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID PRODUCT */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-lg border border-stone-900 bg-stone-950/50 p-5 transition-all hover:border-stone-700"
            >
              <div>
                <span className="mb-2 block text-[10px] uppercase tracking-wider text-stone-600">
                  {item.category}
                </span>
                <h3 className="font-medium text-stone-200 group-hover:text-white">
                  {item.name}
                </h3>
              </div>
              
              <div className="mt-6 flex items-end justify-between border-t border-stone-900/50 pt-4">
                <span className="text-sm text-stone-400">{item.price}</span>
                <button className="text-xs font-medium text-stone-600 hover:text-stone-100">
                  Buy &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {list.length === 0 && (
          <p className="py-10 text-center text-sm text-stone-600">
            No products found.
          </p>
        )}
      </main>
    </div>
  );
}