"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "elevated" | "glass";
}

export default function Section({
    children,
    className,
    variant = "default"
}: SectionProps) {
    const baseStyles = "relative overflow-hidden rounded-3xl";

    const variantStyles = {
        default: " border-stone-800/30 bg-stone-950/40 backdrop-blur-xl",
        elevated: " border-stone-800/40 bg-gradient-to-br from-stone-950/60 via-stone-900/40 to-stone-950/60 backdrop-blur-2xl shadow-2xl shadow-black/20",
        glass: " border-stone-700/20 bg-stone-900/20 backdrop-blur-2xl shadow-xl shadow-stone-900/10",
    };

    return (
        <section className={cn(baseStyles, variantStyles[variant], className)}>
            <div className="relative z-10">{children}</div>
        </section>
    );
}
