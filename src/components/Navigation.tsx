"use client";

import Link from "next/link";
import { Search, Trophy, Receipt, Globe, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [language, setLanguage] = useState("id");
  const { theme, setTheme } = useTheme();

  const translations = {
    id: {
      search: "Cari...",
      transaction: "Transaksi",
      leaderboard: "Leaderboard",
    },
    en: {
      search: "Search...",
      transaction: "Transaction",
      leaderboard: "Leaderboard",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 backdrop-blur-2xl">
      <div className="container flex h-14 items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-7 w-7 rounded bg-stone-900 dark:bg-stone-100 flex items-center justify-center">
            <span className="text-stone-100 dark:text-stone-900 font-bold text-sm">
              T
            </span>
          </div>
          <span className="font-semibold text-stone-900 dark:text-stone-100 hidden sm:block">
            TopUp
          </span>
        </Link>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 " />
            <Input
              type="text"
              placeholder={t.search}
              className="pl-9 h-9 bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1">
          {/* Transaction */}
          <Button
            variant="ghost"
            size="sm"
            className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
            asChild
          >
            <Link href="/transaction" className="flex items-center gap-2">
              <Receipt className="h-4 w-4" />
              <span className="hidden md:inline">{t.transaction}</span>
            </Link>
          </Button>

          {/* Leaderboard */}
          <Button
            variant="ghost"
            size="sm"
            className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
            asChild
          >
            <Link href="/leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden md:inline">{t.leaderboard}</span>
            </Link>
          </Button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline ml-2">
                  {language.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800"
            >
              <DropdownMenuItem
                onClick={() => setLanguage("id")}
                className="cursor-pointer text-stone-900 dark:text-stone-100"
              >
                🇮🇩 Indonesia
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className="cursor-pointer text-stone-900 dark:text-stone-100"
              >
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
