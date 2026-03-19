"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Salad, UsersRound } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
};

const services: Service[] = [
    {
        title: "Modern Equipment",
        description: "State-of-the-art machines for strength, cardio, and performance training.",
        href: "#contact",
        icon: Dumbbell
    },
    {
        title: "Expert Trainers",
        description: "Certified professional coaches focused on your goals and movement quality.",
        href: "#contact",
        icon: UsersRound
    },
    {
        title: "Group Classes",
        description: "High-energy yoga, HIIT, and spinning sessions that keep you motivated.",
        href: "#contact",
        icon: HeartPulse
    },
    {
        title: "Nutrition Plan",
        description: "Personalized diet guidance to support recovery, body composition, and energy.",
        href: "#contact",
        icon: Salad
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-28">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <span className="section-underline mx-auto" />
                    <h2 className="section-title">Our Services</h2>
                    <p className="mt-4 text-muted">Everything you need to achieve your fitness goals, all in one place.</p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: index * 0.12 }}
                            >
                                <Card className="group h-full hover:-translate-y-2 hover:shadow-glow">
                                    <div className="mb-5 inline-flex rounded-xl bg-brand-gradient p-3 text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                                    <a
                                        href={service.href}
                                        className="mt-5 inline-block text-sm font-semibold text-secondary transition group-hover:text-primary"
                                    >
                                        Learn More
                                    </a>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
