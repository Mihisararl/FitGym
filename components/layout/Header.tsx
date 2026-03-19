"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { cn } from "@/utils/cn";
import { useDarkMode } from "@/hooks/useDarkMode";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useDarkMode();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b border-transparent transition duration-300",
                scrolled && "border-border bg-surface/90 backdrop-blur-md"
            )}
        >
            <Container>
                <nav className="flex h-20 items-center justify-between" aria-label="Main Navigation">
                    <a href="#home" className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded bg-brand-gradient">
                            <Image
                                src="/images/logo.png"
                                alt="FitGym logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="font-heading text-xl font-bold text-white dark:text-primary">FitGym</span>
                    </a>

                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition hover:text-primary",
                                        !scrolled ? "text-white" : "text-text"
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-3 md:flex">
                        <button
                            type="button"
                            aria-label="Toggle dark mode"
                            onClick={toggleTheme}
                            className={cn(
                                "rounded-full p-2 transition",
                                !scrolled
                                    ? "border border-white/20 bg-transparent text-white"
                                    : "border border-border bg-bg text-text",
                                "hover:border-primary hover:text-primary"
                            )}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a
                            href="#contact"
                            className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
                        >
                            Join Now
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle mobile menu"
                        className={cn(
                            "rounded-lg p-2 md:hidden",
                            !scrolled ? "text-white border-white/20 bg-transparent" : "text-text border-border bg-bg"
                        )}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </Container>

            <div
                className={cn(
                    "overflow-hidden border-t border-border bg-surface transition-all duration-300 md:hidden",
                    open ? "max-h-80" : "max-h-0"
                )}
            >
                <Container className="space-y-3 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "block rounded-lg px-2 py-2 text-sm font-medium transition hover:bg-bg",
                                !scrolled ? "text-white" : "text-text"
                            )}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="button"
                            aria-label="Toggle dark mode"
                            onClick={toggleTheme}
                            className={cn(
                                "rounded-full p-2",
                                !scrolled
                                    ? "border border-white/20 bg-transparent text-white"
                                    : "border border-border bg-bg text-text"
                            )}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a
                            href="#contact"
                            className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        >
                            Join Now
                        </a>
                    </div>
                </Container>
            </div>
        </header>
    );
}
