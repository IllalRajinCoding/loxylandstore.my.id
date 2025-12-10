"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Menu,
  X,
  ShoppingCart,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/product", label: "Product", icon: ShoppingCart },
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
        className={`fixed top-0 left-0 right-0 z-50 mx-4 mt-4 will-change-transform transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-stone-900/80 bg-stone-950/85 text-stone-100 backdrop-blur-2xl">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3">
              {/* PERUBAHAN DISINI: menghapus 'hidden' dan 'sm:flex' */}
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
                  Loxyland Store
                </span>
              </div>
            </Link>

            {/* Spacer to push nav links to the right */}
            <div className="hidden flex-1 md:block" />

            {/* Desktop Navigation */}
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
            </div>

            {/* Mobile Menu Toggle */}
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

      {/* Spacer agar konten di bawah navbar tidak tertutup saat load awal */}
      <div className="h-20" />

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed left-0 right-0 z-50 mx-auto max-w-6xl px-4 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "top-20 opacity-100"
            : "top-10 -mt-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-3xl border border-stone-900 bg-stone-950/95 p-5 shadow-2xl shadow-black/60">
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
        </div>
      </div>
    </>
  );
}