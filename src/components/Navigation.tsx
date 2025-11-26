"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  Trophy,
  Receipt,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = useMemo(
    () => ({
      id: { search: "Cari...", transaction: "Transaksi", leaderboard: "Leaderboard" },
      en: { search: "Search...", transaction: "Transaction", leaderboard: "Leaderboard" },
    }),
    []
  );
  const t = translations[language];

  const navLinks = [
    { href: `/${t.transaction.toLowerCase()}`, label: t.transaction, icon: Receipt },
    { href: "/leaderboard", label: t.leaderboard, icon: Trophy },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-900/80 bg-stone-950/85 text-stone-100 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-100 text-stone-900 font-semibold">
              TU
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
                Topup.Unit
              </span>
              <span className="text-[11px] text-stone-500">
                Balance orchestration suite
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 px-6 md:block">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
              <Input
                type="text"
                placeholder={t.search}
                className="h-10 rounded-2xl border-stone-900 bg-stone-900/70 pl-10 text-stone-100 placeholder:text-stone-500"
              />
            </div>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                className="text-stone-400 hover:bg-stone-900 hover:text-white"
                asChild
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </Button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-stone-400 hover:bg-stone-900 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  <span className="ml-2 text-xs tracking-[0.35em]">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-stone-800 bg-stone-950 text-stone-50">
                <DropdownMenuItem onClick={() => setLanguage("id")}>🇮🇩 Indonesia</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>🇺🇸 English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="rounded-full bg-stone-100 px-5 text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
              asChild
            >
              <Link href="/dashboard">Masuk dashboard</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-stone-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 right-0 z-50 mx-auto max-w-6xl px-4 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "top-16 opacity-100" : "top-10 -mt-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-3xl border border-stone-900 bg-stone-950/95 p-5 shadow-2xl shadow-black/60">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            <Input
              type="text"
              placeholder={t.search}
              className="h-11 rounded-2xl border-stone-900 bg-stone-900/70 pl-10 text-stone-100 placeholder:text-stone-500"
            />
          </div>

          <div className="space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl border border-stone-900 px-4 py-3 text-stone-200 hover:bg-stone-900"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-stone-900 px-4 py-3">
            <div className="flex gap-2">
              {(["id", "en"] as const).map((lang) => (
                <Button
                  key={lang}
                  variant={language === lang ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(lang)}
                  className={
                    language === lang
                      ? "bg-stone-100 text-stone-900"
                      : "text-stone-300 hover:text-white"
                  }
                >
                  {lang === "id" ? "🇮🇩 ID" : "🇺🇸 EN"}
                </Button>
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-stone-500">
              {language.toUpperCase()}
            </span>
          </div>

          <Button
            className="mt-4 w-full rounded-2xl bg-stone-100 text-stone-900 hover:-translate-y-0.5 hover:bg-stone-200"
            asChild
          >
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              Masuk dashboard
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}