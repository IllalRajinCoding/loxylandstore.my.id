"use client";

import Navbar from "@/components/Navigation";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-stone-50">Leaderboard</h1>
          <p className="text-base text-stone-400">Performa terbaik dan peringkat</p>
        </div>
      </main>
    </div>
  );
}

