"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Trophy,
  Receipt,
  Menu,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const isLoggedIn = false;

  const navLinks = [
    { href: "/transaction", label: "Transaksi", icon: Receipt },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY.current;

          // Show navbar when scrolling up or at the top
          if (scrollDifference < 0 || currentScrollY < 10) {
            setIsVisible(true);
          }
          // Hide navbar when scrolling down (after 80px threshold)
          else if (scrollDifference > 0 && currentScrollY > 80) {
            setIsVisible(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-4 mt-4 will-change-transform transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-stone-900/80 bg-stone-950/85 text-stone-100 backdrop-blur-2xl">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-stone-100 text-stone-900 font-semibold">
                TU
              </div>
              <div className="hidden flex-col leading-tight sm:flex">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
                  Topup.Unit
                </span>
                <span className="text-[11px] text-stone-500">
                  Suite orkestrasi saldo
                </span>
              </div>
            </Link>

            <div className="hidden flex-1 px-6 md:block">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                <Input
                  type="text"
                  placeholder="Cari..."
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

              {isLoggedIn && (
                <Button
                  size="sm"
                  className="rounded-full bg-stone-100 px-5 text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
                  asChild
                >
                  <Link href="/dashboard">Masuk dashboard</Link>
                </Button>
              )}
              {!isLoggedIn && (
               <Button
                  size="sm"
                  className="rounded-full bg-stone-100 px-5 text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
                  asChild
                >
                  <Link href="/login">Login</Link>
                </Button>
              )}
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
        </div>
      </nav>

      {/* Spacer untuk mencegah content terpotong */}
      <div className="h-20" />

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
        
      )}

      <div
        className={`fixed left-0 right-0 z-50 mx-auto max-w-6xl px-4 transition-all duration-300 md:hidden ${mobileMenuOpen ? "top-20 opacity-100" : "top-10 -mt-8 opacity-0 pointer-events-none"
          }`}
      >
        <div className="rounded-3xl border border-stone-900 bg-stone-950/95 p-5 shadow-2xl shadow-black/60">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            
            <Input
              type="text"
              placeholder="Cari..."
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

          {isLoggedIn && (
          <Button
            className="mt-4 w-full rounded-2xl bg-stone-100 text-stone-900 hover:-translate-y-0.5 hover:bg-stone-200"
            asChild
          >
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              Masuk dashboard
            </Link>
          </Button>
          )}
          {!isLoggedIn && (
            <Button
              className="mt-4 w-full rounded-2xl bg-stone-100 text-stone-900 hover:-translate-y-0.5 hover:bg-stone-200"
              asChild
            >
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
