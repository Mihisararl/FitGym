import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const quickLinks = ["Home", "About", "Services", "Contact"];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-[var(--color-secondary)] text-white">
            <Container className="py-14">
                <div className="grid gap-10 md:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="grid h-12 w-12 place-items-center rounded bg-brand-gradient">
                                <Image src="/images/logo.png" alt="FitGym logo" width={40} height={40} className="object-contain" />
                            </div>
                            <p className="font-heading text-2xl font-bold">FitGym</p>
                        </div>
                        <p className="max-w-xs text-sm text-white/70">
                            Transform your body and mindset in a supportive gym built for consistent progress.
                        </p>
                        <div className="mt-4 flex gap-3">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    aria-label="social-link"
                                    className="rounded-full border border-white/20 p-2 text-white/80 transition hover:border-primary hover:text-primary"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="transition hover:text-primary">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-lg font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Modern Equipment</li>
                            <li>Expert Trainers</li>
                            <li>Group Classes</li>
                            <li>Nutrition Plan</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-lg font-semibold">Contact</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>123 Fitness Street</li>
                            <li>Gym City, GC 12345</li>
                            <li>(+94) 70 1110 110</li>
                            <li>info@fitgym.com</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
                © 2026 FitGym. All rights reserved.
            </div>
        </footer>
    );
}
