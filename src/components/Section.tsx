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
        default: "bg-stone-950/40 backdrop-blur-xl",
        elevated: "bg-gradient-to-br from-stone-950/60",
        glass: "bg-stone-900/20 backdrop-blur-2xl",
    };

    return (
        <section className={cn(baseStyles, variantStyles[variant], className)}>
            <div className="relative z-10">{children}</div>
        </section>
    );
}